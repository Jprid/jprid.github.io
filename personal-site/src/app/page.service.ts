import { Injectable } from '@angular/core';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  links = [
    {'Key': 'About', 'Body': 'bbbb'},
    {
      'Key': 'Projects',
      'Body': `
      <a href="https://github.com/Jprid/Dynamic-Field-Validator"><h2>Dynamic Field Validator<h2/><a/>
      <hr>
      <p>Asynchronously accesses JSON API endpoint to collect list of customers through use of multiprocessing library. Compares customers against requirements for each field of customer information.<p/>
      <break>
      <a href="https://github.com/meganpecho/VendMeUp"><h2>Automated Vending Machine<h2/><a/>
      <hr>
      <p>Automated vending machine back-end logic -- responding to user requests via a REST API<p/>
      <p>Ethereum blockchain.<p/>
      <break>
      <a href="https://github.com/Jprid/Dynamic-Field-Validator"><h2>Dynamic Field Validator<h2/><a/>
      <hr>
      <p>Asynchronously accesses JSON API endpoint to collect list of customers through use of multiprocessing library. Compares customers against requirements for each field of customer information.<p/>
      <break>
      
      <a href="https://github.com/nansta/CSC394-SeniorProject"><h2>Graduation Path Scheduler<h2/><a/>
      <hr>
      <p>Finds shortest path to graduation for masters students at DePaul under constraints.<p/>
      <p> Designed and implemented a web scraper to gather the information on classes modules. <p/>
      <p> Designed and implemented a boolean expression tree to store and parse information on graduation paths <p/>
      
      <break>
      <a href="https://github.com/Jprid/SpaceGraphGame"><h2>Space Graph Game<h2/><a/>
      <hr>
      <p>Finds path from one point in space (NxN array representing the "map" of space) to another, avoiding obstacles on the way.<p/>
      <break>
      <h2>Dynamic Memory System<h2/>
      <hr>
      <p>64-byte aligned heap for dynamic memory allocation. 4x faster than the memory system inherently used by C++.<p/>
      <break>
      <h2>Particle System<h2/>
      <hr>
      <p>Refactored legacy code. Module that draws toliet paper roll unravelling in order to optimize performance. Code draws the particles of a toilet paper roll as it unravels. Optimizations made program run 7.82x faster.<p/>
      `
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
    return this.separate(content, '<li>').filter(item => item.startsWith("<a"));
  }

  // paragraph here denoting an arbitrarily large chunk of sentences
  formatContentAsArbitrarilyLargeChunksOfSentences(key : string)
  {
    if(key === 'Contact')
    {
      return this.handleContactPage(key);
    } else if (key === 'Projects')
    {
      return this.handleProjectsPage(key);
    }
    let  content = this.getContent(key);
    return this.separateIntoParagraphs(content);
  }

  handleProjectsPage(key: string) {
     let content = this.getContent(key);
    return this.separate(content, '<break>');
  }

  separate(content : string, splitter : string)
  {
    const paragraphs = content.split(splitter);
    console.log(paragraphs);
    return paragraphs.filter(paragraph => paragraph.length > 0);
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
