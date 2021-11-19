import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-oublie',
  templateUrl: './oublie.page.html',
  styleUrls: ['./oublie.page.scss'],
})
export class OubliePage implements OnInit {

  constructor(private alertCtrl: AlertController) { }
  async show(){

    const alert=await this.alertCtrl.create({
        header:'subsciber',
        subHeader:'newsletter',
        message:'demande envoyer'
      });

    alert.present();
  }
  ngOnInit() {
  }

}
