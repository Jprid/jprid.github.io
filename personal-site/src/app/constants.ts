import { Experience, Link, Contact, Quote } from './models';

export const EXPERIENCE: Experience[] = [{
    company: 'Relativity',
    title: 'Software Engineer',
    start: 'August 2018',
    end: 'now',
    img_reference: '../../assets/relativity-logo-white.webp',
    url: 'https://www.relativity.com/',
    summary: '',
    tags: ['C#', 'C++/CLI', 'MS-SQL', 'Powershell', 'Jenkins', 'Python', 'Azure', '.NET', 'Groovy'],
    experience_content: [
      'Implemented the ability to remove documents from review, and re-calculate de-duplication for affected data sources.',
      'Designed, delivered, and Implemented a feature that enables clients to re-run the ETL pipeline. This allows them to process documents with updated settings, allowing for the extraction of new metadata, and easing a common client pain point.',
      'Updated the functional test framework to be environment-aware: testing environments now clean up debug-resources that could cause noisy neighbor issues and/or potentially prevent full/accurate coverage of the codebase.',
      'Achieved level 1 Support status due to my knowledge of Relativity Processing spanning the breadth of the ETL process.',
      'Eliminated duplicate code paths, in the functional tests covering the Load step, by a factor of 4.',
      'Eliminated ~50 hours of manual maintenance by Implementing a disposable pattern for databases to ensure they are cleaned up on functional test teardown.',
      'Reduced flaky tests caused by noisy neighbor issues by implementing phases for functional test jobs.',
      'Increased transparency into the processing engine by allowing users to see all of the files run through the engine. Furthermore, in order to allow clients to more easily visualize the data coming back, grouping, and pivoting on properties was introduced.',
      'Enabled greater ease of disaster recovery by moving various automation assets into source code management. Furthermore, I removed the need for manual work required when switching branches under test. This was achieved by consolidating the seeding and DSL logic into generic, config driven pipelines. One Pull Request is all that is required now to transition branches, whereas previously developers would modify the configuration of 4 jobs on the Jenkins server\'s UI.',
      'Mentored an Intern through multiple projects: refactoring functional tests to be more economical in their use of database assets; developing a script to refactor tests; and implementing a jenkins job to trigger an upgrade of the processing engine and, if needed, the Relativity platform as well. Previously all of the standard Relativity Applications had to be updated.'
    ]
  },
  {
    company: 'Relativity',
    title: 'Software Engineer Intern',
    start: 'May 2018',
    end: 'August 2018',
    url: 'https://www.relativity.com/',
    img_reference: '../../assets/relativity-logo-white.webp',
    summary: '',
    tags: [],
    experience_content: [
      'During my internship in Processing, I developed an API Performance Testing framework.',
      'Consisted of several nunit test fixtures to automate common performance testing workflows and the assets necessary to deploy and run the tests.'
    ]
  },
  {
    company: 'rMark Bio, LLC',
    title: 'Software Engineer Intern',
    start: 'January 2017',
    end: 'May 2017',
    url: 'https://rmarkbio.com',
    img_reference: 'https://rmarkbio.com/wp-content/themes/rmark/assets/logo.svg',
    tags: ['Python', 'Google Cloud Platform', 'REST APIs'],
    summary: '',
    experience_content: [
      'Built publish / subscription system to allow clients to subscribe to new pharmaceutical publications',
      'Used RESTful APIs to send and receive messages using google cloud\'s publication/subscription modules and documented and tested accordingly.',
      'Formatted production server to take appropriate HTTP calls via NGINX configuration',
      'Developed individualized Pub / Sub connections to pipeline specific data to users.'
    ]
  }
];

export const LINKS: Link[] = [
  { description: 'Experience', link: '#experience' },
  { description: 'Contact', link: '#contact' },
  // { description: 'Quotes', link: 'quotes'}
];
export const QUOTES: Quote[] = [
  {
    author: 'Seneca',
    citation: 'Letters from a stoic',
    quote: 'That which is of any use cannot be learned in the mere passing.',
    tags: ['Wisdom', 'Education', 'Learning', 'Repetition']
  },
  {
    author: 'Seneca',
    citation: 'Letters from a stoic',
    quote: 'Each day...acquire something which will help you to face poverty, or death, and other ills as well.'
  },
  {
    author: 'Seneca',
    citation: 'Letters from a stoic',
    quote: '[W]hat grounds could I possibly have for supposing that a person who has no acquaintance with books will never be a wise man? For wisdom does not lie in books. Wisdom publishes not words but truths...'},
  {
    author: 'Seneca',
    citation: 'Letters from a stoic',
    quote: 'As things are, there is about wisdom a nobility and magnificence in the fact that she doesn\'t just fall to a person\'s lot, that each man owes her to his own efforts, that one doesn\'t go to anyone other than oneself to find her'},
  {
    author: 'Seneca',
    citation: 'Letters from a stoic',
    quote: '[V]irtue only comes to a character which has been thoroughly schooled and trained' +
      ' and brought to a pitch of perfection by unremitting practice.'
  },
  {
    author: 'Seneca',
    citation: 'Letters from a stoic',
    quote: 'What have you said? How much longer are you going to serve under others\' orders? Assume authority yourself and utter something that may be handed down to posterity. Produce something from your own resources.'},
  {
    author: 'Seneca',
    citation: 'Letters from a stoic',
    quote: 'It is quite pathetic, after all, if one has put the will to die behind one, to be without the will to live.'},
  {
    author: 'Seneca',
    citation: '(Letters from a stoic, 58)',
    quote: 'Every day...should be regulated as if it were the one that brings up the rear, the one that rounds out and completes our lives.'
  },
  {
    author: 'Seneca',
    citation: '(Letters from a stoic, Letter 9, 49)',
    quote: '[I]f you wish to be loved, love.'},
  {
    author: 'Seneca',
    citation: '(Letters from a stoic, Letter 7, 42)',
    quote:
      'Give thanks to the immortal gods that the men to whom you are giving a lesson in cruelty are not in a position' +
      ' to benefit from it.'
  },
  {
    author: 'Seneca',
    citation: '(Letters from a stoic, Letter 7, 43)',
    quote: '...you should neither become like the bad because they are many,' +
      ' nor be an enemy of the many because they are unlike you.'
  },
  {
    author: 'Seneca',
    citation: '(Letters from a stoic, Letter 9, 49)',
    quote: 'The wise man, self-sufficient as he is, still desires to have a friend if only for the purpose of practising friendship and ensuring that those talents are not idle.' +
      ' Not...\'for the purpose of having someone to come and sit beside his bed when he is ill or come to his rescue when he is hard up or thrown into chains\', ' +
      'but so that...he may have someone by whose sickbed he himself may sit or whom he may himself release when that person is held prisoner by hostile hands.',
    tags: ['friendship']
  },
  {
    citation: '(Shakespear, Hamlet)',
    author: 'Shakespeare',
    quote: 'Not a whit. We defy augury. There’s a special providence in the fall of a sparrow. If it be now, ’tis not to come. If it be not to come, it will be now. If it be not now, yet it will come—the readiness is all. Since no man of aught he leaves knows, what is ’t to leave betimes? Let be.',
    tags: ['providence', 'death', 'life']
  },
  {
    author: 'Seneca',
    citation: '(Seneca, Letters from a Stoic, Letter 77, 129)',
    quote: '[Life] itself is slavery if the courage to die be absent'
  },
  {
    author: 'Seneca',
    citation: '(Seneca, Letters from a Stoic, Letter 104, 194)',
    quote: '[Wealth]...is the wage of slavery.'},
  {
    author: 'Seneca',
    citation: '(Seneca, Letters from a Stoic, Letter 105, 195)',
    quote: '[To] be feared is to fear: no one has been able to strike terror into others and at the same time enjoy peace of mind himself.'},
  {
    author: 'Seneca',
    citation: '(Seneca, Letters from a Stoic, Letter 105, 196)',
    quote: 'Never to wrong others takes one a long way towards peace of mind.'},
  {
    author: 'Seneca',
    citation: '(Letters from a Stoic, Letter 105, 196)',
    quote: 'People who know no self restraint lead stormy and disordered lives, passing their time in a state of fear commensurate with the injuries they do to others, never able to relax.'},
  {
    author: 'Seneca',
    citation: '(Letters from a Stoic, Letter 107, 197)',
    quote: 'Things will get thrown at you and things will hit you. Life\'s no soft affair.'
  },
  {
    author: 'Seneca',
    citation:'(Seneca, Letters from a Stoic, Letter 2, 33)',
    quote: 'To be everywhere is to be nowhere.'
  },
  {
    author: 'Seneca',
    citation:'(Seneca, Letters from a Stoic, Letter 5, 37)',
    quote: 'Inwardly everything should be different but our outward face should conform with the crowd'
  },
  {
    author: 'Seneca',
    citation:'(Seneca, Letters from a Stoic, Letter 5, 38)',
    quote: 'No one confines his happiness to the present'
  },
  {
    author: 'Seneca',
    citation:'(Letters from a Stoic, Letter 9, 56)',
    quote: 'Happy the man who improves other people not merely when he is in their presence but even when he is in their thoughts!'},
  {
    author: 'Seneca',
    citation:'(Letters from a Stoic, Letter 9, 54)',
    quote: '[No] amount of wisdom enables one to do away with physical or mental weaknesses that arise from natural' +
      ' causes; anything inborn or ingrained in one can by dint of practice be allayed but not overcome.'
  },
  {
    author: 'Seneca',
    citation:'(Letters from a Stoic, Letter 9, 50)',
    quote: 'What is my object in making a friend? To have someone to be able to die for, someone I may follow into exile'
    + ', someone for whose life I may put myself up as security and pay the price as well.'
  },
  {
    author: 'Seneca',
    citation:'(Letters from a Stoic, Letter 6, 40)',
    quote: 'I can give you plenty of examples of people who have not been lacking a friend but friendship.'
  },
  {
    author: 'Seneca',
    citation:'(Letters from a Stoic, Letter 16, 65)',
    quote: 'Whatever is well said by anyone belongs to me.'
  },
  {
    author: 'Epicurus as quoted by Seneca',
    citation: '(Letters from a Stoic, Letter 18, 69)',
    quote: 'Anger carried to excess begets madness.'
  },
  {
    author: 'Seneca',
    citation: 'Letters from a Stoic, Letter 6, pg 39',
    quote: '[Nothing] however outstanding and however helpful will ever give me any pleasure if the knowledge is to be for my benefit alone.'
  },
  {
    author: 'Seneca',
    citation: 'Letters from a stoic, Letter 12, pg 58',
    quote: '[The] order in which we receive our summons is not determined by our precedence in the register...'
  },
  {
    author: 'Seneca',
    citation: 'Letters from a stoic, Letter 12, pg 59',
    quote: 'Let us thank god that no one can be held prisoner in life--the very constraints can be trampled under foot'
  },
  {
    author: 'Seneca',
    citation: 'Letters from a stoic, Letter 15, pg 61',
    quote: '[Of exercise, cultivate] an asset which the passing of time itself improves'
  },
  {
    author: 'Seneca',
    citation: 'Letters from a stoic, Letter 16, pg 65',
    quote: 'Natural desires are limited; those which spring from false opinions have nowhere to stop.'
  },
  {
    author: 'Epictetus',
    citation: 'Discourses and Selected Writings, II.i, pg 77',
    quote: 'Be confident in everything outside the will, and cautious in everything under the will\'s control.'
  },
  {
    author: 'Marcus Aurelius',
    citation: 'Meditations, pg 53',
    quote: 'At dawn, when you have trouble getting out of bed, tell yourself: "I have to go to work--as a human being. What do I have to complain of, if I\'m going to do what I was born for--the things I was brought into the world to do? Or is this what I was created for? To huddle under the blankets and stay warm?"'
    + '\n--But it\'s nicer here....\nSo you were born to feel "nice"? Instead of doing things and experiencing them? Don\'t you see the plants, the birds, the ants and spiders and bees going about their individual tasks, putting the world in order, as best they can?'
    + 'Why aren\'t you running to do what your nature demands?\n--But we have to sleep sometime....\nAgreed. But nature set a limit on that--as it did on eating and drinking. And you\'re over the limit. You\'ve had more than enough of that. But not of working. There you\'re still below your quota.'
    + '\n\tYou don\'t love yourself enough. Or you\'d love your nature too, and what it demands of you. People who love what they do wear themselves down doing it, they even forget to wash or eat. Do you have less respect for your own nature than the engraver does for engraving,'
    + ' the dancer for the dance, the miser for money or the social climber for status? When they\'re really possessed by what they do, they\'d rather stop eating and sleeping than give up practicing their arts.\n\tIs helping others less valuable to you? Not worth your effort?'
  },
  {
    author: 'Seneca',
    citation: 'Letters from a Stoic, Letter 108, pg 69',
    quote: 'The outcome of violent anger is a mental raving, and therefore anger is to be avoided not for the sake of moderation but for the sake of sanity.'
  },
  {
    author: 'Seneca',
    citation: 'Letters from a Stoic, Letter 106, pg 63',
    quote: 'You have to persevere and fortify your pertinacity until the will to good becomes a disposition to good.'
  },
  {
    author: 'Seneca',
    citation: 'Letters from a Stoic, Letter 9, pg 54',
    quote: 'All foolishness suffers the burden of dissatisfaction with itself.'
  },
  {
    author: 'Hecato as quoted by Seneca',
    citation: 'Letters from a Stoic, Letter 6, pg 40',
    quote: 'What progress have I made? I am beginning to be my own friend'
  },
  {
    author: 'Tsunetomo Yamamoto',
    citation: 'Hagakure',
    quote: 'There is something to be learned from a rainstorm. When meeting with a sudden shower, you try not to get wet and run quickly along the road. But doing such things as passing under the eaves of houses, you still get wet. When you are resolved from the beginning, you will not be perplexed, though you will still get the same soaking. This understanding extends to everything.'
  }
]
.map((i, id) =>
  ({
    id: id + 1,
    author: i.author,
    quote: i.quote,
    citation: i.citation ?? "",
    numWords: i.quote.split(" ").length,
    numCharacters: i.quote.length,
    tags: i.tags ?? []
  }));
/*, num_chars: i.quote.length */
export const TRACKING_ID = 'G-R2TEH07MYV';
