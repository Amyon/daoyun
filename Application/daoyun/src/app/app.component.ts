import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: '我的',
      url: '/information',
      icon: 'mail'
    },
    {
      title: '班课',
      url: '/class',
      icon: 'paper-plane'
    },
    {
      title: '发现',
      url: '/moments',
      icon: 'heart'
    },
    {
      title: '文件',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: '设置',
      url: '/setting',
      icon: 'trash'
    },
    {
      title: '退出',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  public labels = ['经验值', '魅力值', '豆豆', '版本'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
