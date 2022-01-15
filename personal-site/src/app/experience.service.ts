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

  get AuthorName(): Array<string> {
    return [
      this.info.contact_info.first_name,
      this.info.contact_info.middle_name[0],
      this.info.contact_info.last_name
    ]
  }

  get PersonalInformation(): PersonalInfo {
    return this.info;
  }

  get ExperienceList(): Experience[] {
    return this.info.experience;
  }

  get ContactInformation(): Contact[] {
    return this.info.contact_info.contact;
  }
}
