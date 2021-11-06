import { Injectable } from '@angular/core';
import {Contact, Experience, PersonalInfo} from "./models";
import ExperienceContent from '../assets/content.json'
@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private readonly info: PersonalInfo;
  constructor() {
    this.info = ExperienceContent;
  }

  public getAuthorName(): Array<string> {
    return [
      this.info.contact_info.first_name,
      this.info.contact_info.middle_name[0],
      this.info.contact_info.last_name
    ]
  }

  servePersonalInformation(): PersonalInfo {
    return this.info;
  }

  getExperienceList(): Experience[] {
    return this.info.experience;
  }

  getContactInformation(): Contact[] {
    return this.info.contact_info.contact;
  }
}
