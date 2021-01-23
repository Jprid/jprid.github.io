import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-position-tag-container',
  templateUrl: './position-tag-container.component.html',
  styleUrls: ['./position-tag-container.component.css']
})
export class PositionTagContainerComponent implements OnInit {

  @Input()
  public tags: string[];
  @Input()
  public title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
