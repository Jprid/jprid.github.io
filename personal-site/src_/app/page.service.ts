import { Injectable } from '@angular/core';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  links = [{
      'Key': 'About',
      'Body': `John Pridmore is a Full-Stack Software Engineer with a focus on highly-distributed, low-latency systems.`,
    },
    {
      'Key': 'Projects',
      'Body': `https://github.com/meganpecho/VendMeUpAutomated Vending Machine
      Automated vending machine on the Ethereum blockchain. 
      https://github.com/Jprid/Dynamic-Field-ValidatorDynamic Field Validator
      Asynchronously accesses JSON API endpoint to collect list of customers through use of multiprocessing library. Compares customers against requirements for each field of customer information.
      
      https://github.com/nansta/CSC394-SeniorProjectGraduation Path Scheduler
      Finds shortest path to graduation for masters students at DePaul under constraints. Added boolean expression tree and scraper modules. 
      
      https://github.com/Jprid/SpaceGraphGame
      
      Space Graph Game
      Finds path from one point in space (NxN array representing the "map" of space) to another, avoiding obstacles on the way. 
      
      Dynamic Memory System
      64-byte aligned heap for dynamic memory allocation. 4x faster than the memory system inherently used by C++.
      
      Particle System
      Refactored legacy code that draws toliet paper roll unravelling in order to optimize performance. Code draws the particles of a toilet paper roll as it unravels. Optimizations made program run 7.82x faster. 
      `
    },
    {
      'Key': 'Contact',
      'Body': "Email: Johnpridmore.lit@gmail.com <br> LinkedIn: Jprid<br>Github: Jprid<br>"
    }
  ];

  constructor() { }
  getTitles() {
    return this.links.map((item) => item.Key);
  }

  getContent(key : string) {
    let retVal = this.links.find((item) => item.Key === key);
    // console.log(retVal)
    if (retVal === undefined)
    {
      return "CONTENT NOT FOUND"
    }
    return retVal.Body;
  }

  handleContactPage(key : string)
  {
    let content = this.getContent(key);
    return this.separate(content, '<br>');
  }

  // paragraph here denoting an arbitrarily large chunk of sentences
  formatContentAsArbitrarilyLargeChunksOfSentences(key : string)
  {
    if(key === 'Contact')
    {
      return this.handleContactPage(key);
    }
    let  content = this.getContent(key);
    return this.separateIntoParagraphs(content);
  }

  separate(content : string, splitter : string)
  {
    const paragraphs = content.split(splitter);
    console.log(paragraphs);
    return paragraphs;
  }

  separateIntoParagraphs(content : string, max = 5, splitter = '\.')
  {
    let paragraphs = [];
    let subParagraphs = [];
    let index = 0;
    let contents : string[] = content.split(splitter);
    
    if(contents.length <= max)
    {
      paragraphs.push(content);
    } else {
      contents.forEach((sentence : string) => {
        if(index >= max)
        {
          paragraphs.push(subParagraphs.join(''));
          subParagraphs = [];
          index = 0;
        }
        subParagraphs.push(`${sentence}.`);
        index += 1;
      });
    }
    return paragraphs;

  }
}
