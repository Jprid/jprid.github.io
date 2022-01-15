import { Component, OnInit } from '@angular/core';
import { Experience } from '../models';
import {ExperienceService} from "../experience.service";

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {
  public EXPERIENCE: Experience[];
  constructor(private contentService: ExperienceService) {
    this.contentService = contentService;
  }

  ngOnInit(): void {
    this.EXPERIENCE = this.contentService.ExperienceList;
  }
}
