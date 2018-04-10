import { Component, OnInit } from '@angular/core';
import {CONTACT} from '../../contact';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  paragrap: CONTACT = {
    address: 'No 83, Opebi Road, Ikeja, Lagos, Nigeria.',
    address1: '',
    mobile :'+234 (0) 80-9876-0000',
    mobile1 :'',
    fax :'',
    email:'indigo@indigoafrica.net',
    };

  constructor() { }

  ngOnInit() {
  }
  

}
