import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChoosePage } from '../choose/choose';

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

  constructor(public navParams: NavParams, public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');

    var id = this.navParams.get('id');

    if (id) {
      var description = 'You and your friend, Frank, go shopping together. \
      Frank asks for money to buy a pair of shoes he saw, but you only have \
      enough money to buy a school textbook, that you need as soon as possible. \
      What should you do?';
      var image = 'http://i.imgur.com/QGCmalm.png';

      var div = document.createElement('div');
      div.innerHTML = description;
      var img = document.createElement('img');
      img.src = image;
      img.setAttribute('style', 'width: calc(100% - 20px);');
      document.getElementById('questionImage').appendChild(img);
      document.getElementById('questionDescription').appendChild(div);
    }
  }

  public next(id): void {
    this.navCtrl.push(ChoosePage, {
      id: id
    });
  }
}
