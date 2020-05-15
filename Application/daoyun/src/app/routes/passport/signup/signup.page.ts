import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { AuthenticationCodeService } from '../../../shared/services/authentication-code.service';
import { MenuController, AlertController, ToastController } from '@ionic/angular';
import {Component, OnInit, ViewChild, ViewEncapsulation, ApplicationInitStatus} from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private toastController: ToastController, private menuController: MenuController, private auCode: AuthenticationCodeService,
              private localStorageService: LocalStorageService, private alertController: AlertController) { }
signup = {
phone: '',
email: '',
shopName: '',
password: '',
confirmPassword: '',
code: ''
};
slideIndex = 0;
@ViewChild('signupSlides', {static: false}) signupSlides: IonSlides;
ngOnInit() {

// this.signupSlides.lockSwipeToNext(true);

}
onSendCode() {
this.signup.code = this.auCode.createCode(4);
}
async onValidate(form: NgForm) {
if (form.valid) {
if (this.auCode.validate(this.signup.code)) {
  this.onNext();
}
} else {
this.vaild();
}
}
back() {
window.location.href = 'welcome';
}
finish() {
this.slideIndex ++;
this.localStorageService.set('App', {
hasRun: true,
version: '1.0.0'
});
window.location.href = 'login';
}
onNext() {
this.slideIndex++;
this.signupSlides.slideNext();
}
onPrevious() {
this.slideIndex--;
this.signupSlides.slidePrev();
}
tologin() {
window.location.href = 'login';
}
async vaild() {
const toast = await this.toastController.create({
message: '验证码错误',
duration: 3000
});
toast.present();
}
onSignupPhone(form: NgForm) {
// this.submited = true;
// if (form.valid) {
//   // 已通过客户端验证
//   this.next();
// }
}

ionViewWillEnter() {
this.menuController.enable(false);
}

ionViewDidLeave() {
this.menuController.enable(true);
}


}
