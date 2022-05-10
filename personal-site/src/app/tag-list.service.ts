import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ColorGeneratorService } from './color-generator.service';
import { Tag } from './models';

@Injectable({
  providedIn: 'root'
})
export class TagListService {
  private tags: Tag[];

  constructor(private colorGenerator : ColorGeneratorService) {
    this.tags = new Array<Tag>();
   }

  /* Description:
   *  get the tags in the private property tags
   * Returns:
   *  an observable tag array
  */
  public getTags() : Observable<Tag[]> {
    return of<Tag[]>(this.tags);
  }

  /* Description:
   *  Takes an arbitrary list of strings, generates colors for each respective tag which is not present 
   *  in the tags property, and then zips the tag name and the color together
   *  into a @class Tag object
   * Returns: 
   *   the number of tags added
  */
  public addTags(tagNames : string[]) : number {
    const tagsToAdd = this.removeDuplicateTagNames(tagNames);
    const count = tagsToAdd.length;
    let tagIndex = 0;
    if (count > 0)
      this.colorGenerator.generateHslaColors(count).forEach(element => 
        { this.tags.push({name: tagsToAdd[tagIndex++], color: element}); });
    return count;
  }

  private removeDuplicateTagNames(tagNames: string[]) {
    if(tagNames !== undefined && tagNames.length > 0)
    {
      return tagNames.filter((name) => !this.tags.find((s) => s.name === name));
    }
    return [];
  }
}
