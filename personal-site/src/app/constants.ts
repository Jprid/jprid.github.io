import { Experience, Link, Contact, Quote } from './models';

export const LINKS: Link[] = [
  { description: 'Experience', link: '#experience' },
  { description: 'Contact', link: '#contact' },
  //{ description: 'Quotes', link: 'quotes'}
];
export const QUOTES: Quote[] = [
  {author: 'Seneca', quote: 'That which is of any use cannot be learned in the mere passing.'},
  {author: 'Seneca', quote: 'Each day...acquire something which will help you to face poverty, or death, and other ills as well.'},
  {author: 'Seneca', quote: '[W]hat grounds could I possibly have for supposing that a person who has no acquaintance with books will never be a wise man? For wisdom does not lie in books. Wisdom publishes not words but truths...'},
  {author: 'Seneca', quote: 'As things are, there is about wisdom a nobility and magnifiicence in the fact that she doesn\'t just fall to a person\'s lot, that each man owes her to his own efforts, that one doesn\'t go to anyone other than oneself to find her'},
  {author: 'Seneca', quote: '[V]irtue only comes to a character which has been thoroughly schooled and trained and brought to a pitch of perfection by unremitting practice.'},
  {author: 'Seneca', quote: 'What have you said? How much longer are you going to serve under others\' orders? Assume authority yourself and utter something that may be handed down to posterity. Produce something from your own resources.'},
  {author: 'Seneca', quote: 'It is quite pathetic, after all, if one has put the will to die behind one, to be without the will to live.'}
]
.map((i, id) =>
  ({ id: id + 1, author: i.author, quote: i.quote, numWords: i.quote.split(" ").length, numCharacters: i.quote.length}));
/*, num_chars: i.quote.length */
export const TRACKING_ID = 'G-R2TEH07MYV';
