import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  peopleinfo:any={
    username: this.storage.get('username'),
    sex: this.storage.get('sexy'),
    citys:["NewYork","LosAngeles","California"],
    city: this.storage.get('city'),
    hobby:[{
      title:'Basketball',
      checked:false
    },{
      title:'VideoGame',
      checked:false
    },{
      title:'Coding',
      checked:false
    }],
    lastwords: this.storage.get('lastwrods')
  }
  constructor(public storage:StorageService) {
    
   }

  ngOnInit(): void {
  }
  dosubmit(){
    this.storage.set('username', this.peopleinfo.username);
    this.storage.set('sexy', this.peopleinfo.sex);
    this.storage.set('city', this.peopleinfo.city);
    this.storage.set('hobby', this.peopleinfo.hobby.checked);
    this.storage.set('lastwrods', this.peopleinfo.lastwords);
    alert('Information saved in your Local Storage successfully, try reflash the page.')
  }


}
