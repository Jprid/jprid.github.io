import { Component, OnInit } from '@angular/core';
import { Link, Contact } from '../models';
import { CONTACTS, LINKS } from '../constants';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  public LINKS: Link[] = LINKS;
  public CONTACTS: Contact[] = CONTACTS;
  constructor() { }

  ngOnInit(): void {
  }

}
