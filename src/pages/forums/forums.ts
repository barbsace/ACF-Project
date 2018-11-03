import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiscussionPage } from '../discussion/discussion';

/**
 * Generated class for the ForumsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forums',
  templateUrl: 'forums.html',
})
export class ForumsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumsPage');
  }

  toforum(){
    this.navCtrl.push(DiscussionPage)
  }

}
