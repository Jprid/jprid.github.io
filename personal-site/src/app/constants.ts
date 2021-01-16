import { Experience, Link, Contact, Quote } from './models';

export const EXPERIENCE: Experience[] = [
 {
    company: 'Relativity',
    title: 'Processing | Software Engineer',
    start: 'August 2018',
    end: 'now',
    imgReference: '../../assets/relativity-logo-white.png',
    url: 'https://www.relativity.com/',
    summary: '',
    experienceContent: [
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
    imgReference: '../../assets/relativity-logo-white.png',
    summary: '',
    experienceContent: [
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
    imgReference: 'https://rmarkbio.com/wp-content/themes/rmark/assets/logo.svg',
    summary: '',
    experienceContent: [
      'Built publish / subscription system to allow clients to subscribe to new pharmaceutical publications',
      'Used RESTful APIs to send and receive messages using google cloud\'s publication/subscription modules and documented and tested accordingly.',
      'Formatted production server to take appropriate HTTP calls via NGINX configuration and developed individualized Pub / Sub connections to pipeline specific data to users.'
    ]
  }
];

export const LINKS: Link[] = [
  { description: 'Experience', link: '#experience' },
  { description: 'Contact', link: '#contact' }
];

export const CONTACTS: Contact[] = [
  { description: 'Email', link: 'mailto:johnpridmore.lit@gmail.com', imgRef: '../assets/Gmail.png' },
  { description: 'LinkedIn', link: 'https://LinkedIn.com/in/JPrid', imgRef: '../assets/LI-In-Bug.png' },
  { description: 'Github', link: 'https://www.github.com/JPrid', imgRef: '../assets/GitHub-Mark-120px-plus.png' },
];

export const QUOTES: Quote[] = [
  {author: 'Seneca', quote: 'aa'}
].map((i, id) => ({ id: id + 1, author: i.author, quote: i.quote}));

export const TRACKING_ID : string = "G-R2TEH07MYV";