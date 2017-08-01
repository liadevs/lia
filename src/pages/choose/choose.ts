import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ChoicePage } from '../choice/choice';

@IonicPage()
@Component({
  selector: 'page-choose',
  templateUrl: 'choose.html',
})
export class ChoosePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosePage');
  }

  public next(i): void {
  	this.navCtrl.push(ChoicePage, { 
      choice: i
    });
  }

}
