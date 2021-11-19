import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userEmail: string ;
  constructor(
    private profileservice: ServiceService,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.profileservice.userdetail().subscribe(res=>{
      console.log('res',res);
      if(res!==null){
        this.userEmail = res.email;
      } else{
        this.navCtrl.navigateBack('');
      }
    }, err =>{
      console.log('err',err);
   });
  }

}
