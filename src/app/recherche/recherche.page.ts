import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {
  userList: any[];   userSave: any[];
  constructor(
    private fire:AngularFirestore
  ) { }

  async ngOnInit() {
    this.fire.collection('user').valueChanges().subscribe(getList =>{
      this.userList = getList;
      this.userSave = getList
    })
  }
  async initUser(): Promise<any> {
    this.userList= this.userSave;
  }

  async filterList(evt) {
    this.initUser();
    const searchTerm = evt.srcElement.value; 
    if (!searchTerm) {
      return;
    }
    this.userList = this.userList.filter(search => {
      if (search.nom && searchTerm) {
        if(search.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
          return true;
        }
        return false;
      }
    });
  }
}
