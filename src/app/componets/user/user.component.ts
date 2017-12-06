import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  name1: string;
  ngOnInit() {
     
  }
  onclick(huddy,h){
   console.log(huddy);
 
    this.name='welcome '+huddy;
    this.name1=h;
    return false;
  }
}

