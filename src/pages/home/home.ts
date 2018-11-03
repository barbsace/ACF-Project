import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { RegisterPage } from '../register/register';
import { ForumsPage } from '../forums/forums';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController) {
  
  }

  gotoforum(){
    //console.log(this.username);
    //console.log(this.password);
    if (this.username.length == 0 || this.password.length == 0){
      alert("Fill in your username or paasword!");
    }
    //this.navCtrl.push(ForumsPage);
  }

  regpage(){
    this.navCtrl.push(RegisterPage);
  }
}
