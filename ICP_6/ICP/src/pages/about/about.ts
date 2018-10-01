import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public alertCrtl: AlertController) {

  }

  Signup() {
  if (this.password == this.cpassword) {
        var alert = this.alertCrtl.create({
          title: "Registered Successfully",
          subTitle: "Account is Created",
          buttons: ['ok']
        });
        alert.present();
    }
    
  }
  }
