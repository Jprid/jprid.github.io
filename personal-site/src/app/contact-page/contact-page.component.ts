import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../constants';
import { Contact } from '../models';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  public CONTACTS: Contact[] = CONTACTS;
  constructor() { }

  ngOnInit(): void {
  }

}
