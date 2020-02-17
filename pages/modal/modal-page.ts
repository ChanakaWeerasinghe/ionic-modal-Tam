import { Component } from '@angular/core';
import { NavController, ViewController ,NavParams} from 'ionic-angular';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
  styleUrls: ['modal.scss']
})
export class ModalPage {
  bgImage;
  data;
  constructor(params: NavParams,public navCtrl: NavController, public viewCtrl: ViewController) {
  this.bgImage = 'https://github.com/ChanakaWeerasinghe/ionic-modal-Tam/blob/master/pages/BATELCO.png?raw=true';
      // this.data = this.params.data;
            console.log(params.get('data'));


  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
