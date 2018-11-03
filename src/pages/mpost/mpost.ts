import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MpostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mpost',
  templateUrl: 'mpost.html',
})
export class MpostPage {

  public user_post:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private CLose: ViewController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MpostPage');
  }

  posting(){
    console.log("hello");
  }

  close(){
    this.CLose.dismiss();
  }

}
