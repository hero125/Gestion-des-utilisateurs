import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public serve: ServiceService, public database: AngularFirestore) { }

  ngOnInit() {
  }
  register(data){
    try{
      this.serve.register(data.value.email, data.value.password).then(response =>{
        console.log(response);
        this.database.collection('user').doc(response.user.uid).set({
          'nom': data.value.nom,
          'prenom': data.value.prenom,
          'email': data.value.email,
          'password': data.value.password
        })
      })
    } catch(error){}
  }

}
