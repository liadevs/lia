import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-choice',
  templateUrl: 'choice.html',
})
export class ChoicePage {

  constructor(public navParams: NavParams, public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoicePage');

    var choice = this.navParams.get('choice');
    var explanation;
    var image;
    var title;
    if (choice === 1) {
      explanation = 'Even though this option seems appealing, the fact is \
      that your education is important to the textbook. He can live without \
      a pair of shoes, but you need the textbook. Even though friends do help \
      each other out, weighing the pros and cons of the decisions is important, \
      especially at your own expense.';
      image = 'http://i.imgur.com/PTYRQRu.jpg';
    } else if (choice === 2) {
      explanation = 'Though this option may seem appealing, Frank will only \
      continue to question you until you answer. Avoiding his questioning is \
      a bit rude, and doesn’t really solve the problem. Avoiding a problem is \
      not a great way to fix a problem, either.';
      image = "http://i.imgur.com/PTYRQRu.jpg";
    } else if (choice === 3) {
      explanation = 'Even though this may seem like a good option, you could \
      easily get caught, especially if you and Frank are shopping together. The \
      best option is being upfront and telling him that you don’t have money for \
      him. Truthfulness is important in a friendship.';
      image = 'http://i.imgur.com/PTYRQRu.jpg';
    } else if (choice === 4) {
      explanation = 'Even though Frank was irresponsible, being angry at him is \
      not a good idea, because he just needs money. He probably wasn’t aware that \
      you only had some money, so explaining your situation is the best solution.';
      image = 'http://i.imgur.com/PTYRQRu.jpg';
    } else if (choice === 5) {
      explanation = 'This answer is the most popular, because being straightforward \
      and truthful about your intentions is often a good choice. If you really \
      need something, like a school textbook, while a friend wants something smaller, \
      like shoes, clearly your need is above the friends. Your friend wants the shoes \
      for pleasure, while you need it for actual reasons, like education.';
      image = 'http://i.imgur.com/PTYRQRu.jpg';
    }

    if (choice) {
      title = 'Borrowing Frank'
      var div = document.createElement('div');
      div.innerHTML = explanation;
      var img = document.createElement('img');
      img.src = image;
      img.setAttribute('style', 'width: calc(100% - 20px);');
      document.getElementById('choiceImage').appendChild(img);
      document.getElementById('choiceExplanation').innerHTML = explanation;
    }
  }

  public next(): void {
    this.navCtrl.popToRoot();
  }

}
