import { Component, OnInit } from '@angular/core';
import { ClassInfo } from './ClassInfo';

@Component({
  selector: 'app-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit {
  // MyselectClass:Array<ClassInfo>;
  // selectMyselectClass:ClassInfo;
  constructor() { }

  ngOnInit() {
  }
  OnSelectMySelect(){
    //this.selectMyselectClass=this.MyselectClass[0];
  }

}
