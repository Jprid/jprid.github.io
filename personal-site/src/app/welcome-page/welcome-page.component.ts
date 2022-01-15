import { Component, OnInit } from '@angular/core';
import { Link, Contact } from '../models';
import { LINKS } from '../constants';
import {ExperienceService} from "../experience.service";
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  public LINKS: Link[] = LINKS;
  public CONTACTS: Contact[];
  constructor(private contentService: ExperienceService) {
    this.contentService = contentService;
  }

  ngOnInit(): void {
    this.CONTACTS = this.contentService.ContactInformation;
  }

}
