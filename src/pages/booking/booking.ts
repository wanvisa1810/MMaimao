import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AddbookingPage} from '../addbooking/addbooking';
import { StatusPage } from '../status/status';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  addbooking:any=0;
  data:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams ,
    public http: Http,private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }
  addBooking(){
    this.navCtrl.push(AddbookingPage);
  }
  showStatus(id)
  {
    this.navCtrl.push( StatusPage,{ bkId :id});
  }

  //แสดงข้อมูลเมื่อเปิดมาสู่หน้าครั้งแรก
  getData(){
    this.http.get('http://localhost:8080/customer')
    .map(res => res.json()).subscribe(data => {this.addbooking= data});
  }
  //แสดงข้อมูลเมื่อไปหน้าอื่นแล้วกลับมาสู่หน้า Home
  ionViewWillEnter(){
    this.getData();
  }
  deletebooking(bkId){
    this.alertCtrl.create({
      title:"ยืนยัน", subTitle:"ยืนยันการลบ",buttons:[
        { 
          text: "Yes",
          handler:()=>{
            let url ="http://localhost:8080/addbooking/"+ bkId;
            this.http.delete(url)
              .subscribe(res=>{
                this.data=res;
                console.log(this.data);
                  this.showAlert("สำเร็จ", "ลบข้อมูลการจองเรียบร้อย");
                  this.getData();
              }); 
          }
        },
        {
          text: "No",
          handler:()=>{}
        }
      ]
    })
      .present();
   
  }
  showAlert(msgTitle:string, message:string){
    const alert = this.alertCtrl.create({
      title: msgTitle,
      subTitle: message,
      buttons: ["OK"]
    });
    //show alert
    alert.present();
}

}
