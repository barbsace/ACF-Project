import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';


/**
 * Generated class for the DiscussionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-discussion',
  templateUrl: 'discussion.html',
})
export class DiscussionPage {

  postArr = []; 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private Actrl: AlertController, 
    public mctrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscussionPage');
  }

  npost(){
    const postmodal = this.mctrl.create('MpostPage', {
      
    });
    postmodal.present(); 
  }

  newPost(){
    let alert = this.Actrl.create({
      subTitle: "Make a post",
      inputs: [
        {
          name: "header",
          placeholder: "Post header.....",
          type: "text"
        },
        {
          name: "post",
          type: "text",
          placeholder: "Write a post....."
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Post",
          handler: (inputcon)=>{
            let inputpt = {
              topic: "text",
              content: "text"
            };
            inputpt.topic = inputcon.header;
            inputpt.content = inputcon.post;
            this.postArr.push(inputpt);
          }
        }
      ]
    });
    alert.present();
  }
}
