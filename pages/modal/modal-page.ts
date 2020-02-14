import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
  styleUrls: ['modal.scss']
})
export class ModalPage {
  bgImage;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  this.bgImage = 'BATELCO.png';
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
