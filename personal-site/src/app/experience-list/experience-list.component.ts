import { Component, OnInit } from '@angular/core';
import { Experience } from '../models';
import { EXPERIENCE } from '../constants';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {

  public EXPERIENCE: Experience[] = EXPERIENCE;
  constructor() { }

  ngOnInit(): void {
  }
}
