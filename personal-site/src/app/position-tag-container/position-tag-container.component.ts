import { Component, Input, OnInit } from '@angular/core';
import { ColorGeneratorService } from '../color-generator.service';
import { Tag } from '../models';
import { TagListService } from '../tag-list.service';

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
  
  tagModels: Tag[];
  constructor(public colorGenerator: ColorGeneratorService, private tagListService : TagListService) { }

  ngOnInit(): void {
    this.tagListService.addTags(this.tags);
    this.tagListService.getTags().subscribe(tags => {
      this.tagModels = tags.filter(s => this.tags.find(a => s.name === a));
    });
  }

  public getTagColor(tagName) {
    return this.tagModels.find(x => x.name === tagName).color;
  }
}
