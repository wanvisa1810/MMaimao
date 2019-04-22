import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the EditbookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editbooking',
  templateUrl: 'editbooking.html',
})
export class EditbookingPage {
  addbooking = {
    bkId:"",
    bkPerson:"",
    bkDate:"",
    bktTime:"",
    bkName:""
  }
  data:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,
    private alertCtrl: AlertController,private httpclient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditbookingPage');
  }
  editbooking(){
    let bkId=this.navParams.get('bkId');
    let url = "http://localhost:8080/addbooking/" + bkId;
      console.log(this.addbooking);
      this.httpclient.post(url, this.addbooking)
        .subscribe(
          res=>{
              this.data = res;
              if(this.data.msg==true){
                this.showAlert("สำเร็จ","แก้ไขข้อมูลการจองโต๊ะสำเร็จ");
                this.navCtrl.popToRoot();
              }
          }
        ); 
    }
    showAlert(msgTitle:string,message:string){
      const alert = this.alertCtrl.create({
        title: msgTitle,
        subTitle: message,
        buttons: ["OK"]
      });
      alert.present();
    }
  }
