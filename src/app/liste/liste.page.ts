import { Component, OnInit } from '@angular/core';
import {} from '@angular/fire/compat/database';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements OnInit {
mesListe: any;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.liste();
  }

  liste(){
    this.service.listeUser().subscribe(res=>{
      // console.log(res);   
      this.mesListe= res.map(e=>{
        return {
          nom:e.payload.doc.data()['nom'],
          prenom:e.payload.doc.data()['prenom'],
          email:e.payload.doc.data()['email']
        }
      }) ;
      // console.log(this.mesListe);
      
    });
  }

}
