import { Component, OnInit } from '@angular/core';
import { Contact } from '../models';
import {ExperienceService} from "../experience.service";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  public CONTACTS: Contact[];
  constructor(private contentService: ExperienceService) {
    this.contentService = contentService;
  }

  ngOnInit(): void {
    this.CONTACTS = this.contentService.getContactInformation();
  }

}
