import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models';

@Component({
  selector: 'app-link-card-container',
  templateUrl: './link-card-container.component.html',
  styleUrls: ['./link-card-container.component.css']
})
export class LinkCardContainerComponent implements OnInit {
  @Input()
  public contrast = false;
  @Input()
  contacts: Contact[];
  public contrastBackgroundColor = 'var(--welcome-accent-color)';

  constructor() { }

  ngOnInit(): void {
  }
}
