import { Component } from '@angular/core';
import {ServiceService} from '../service/service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public verification: ServiceService, public route: Router) {}
  login(data){
    try{
      this.verification.authenfication(data.value.email, data.value.password).then(res =>{
        console.log(res),
        this.route.navigate(["login"]);
        
      }
      )
    } catch(error){
      console.log(error);
    }
  }



}
