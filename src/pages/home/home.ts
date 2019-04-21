import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoMenu(){
    this.navCtrl.push(MenuPage);
  }
  gotoLogin(){
    this.navCtrl.push(LoginPage);
  }
  gotoSignup(){
    this.navCtrl.push(SignupPage);
  }
}
