import React from 'react';

const PROJECTS = [
  {
    name: 'Falling Fruit',
    date: '03/2021',
    desc:
      "A progressive web application built for foraging non-profit 'Falling Fruit' with a shared codebase for web and mobile applications.",
    tags: ['React', 'JavaScript'],
    repo: 'https://github.com/hack4impact-uiuc/falling-fruit',
    demo: 'https://falling-fruit.vercel.app/',
  },
  {
    name: 'Startup Directory',
    date: '02/2021',
    desc:
      'A startup directory built by Founders for the University of Illinois at Urbana-Champaign.',
    tags: ['Next.js', 'MongoDB'],
    repo: 'https://github.com/founders/startup-directory',
    demo: 'https://directory.foundersillinois.org',
  },
  {
    name: 'SMM 2 Level Generator',
    date: '08/2019',
    desc:
      'Super Mario Maker 2 level idea generator with over 12,000 users. Generates game ideas with three compatible enemies, a time, a theme and a twist.',
    tags: ['JavaScript'],
    repo: 'https://github.com/SirajChokshi/SMM2-Concept-Generator',
    demo: 'https://mario.sirajchokshi.com',
  },
  {
    name: 'Terrain Generation',
    date: '05/2020',
    desc:
      'Procedural terrain generator written with C (compiled into WebAssembly) using Perlin2D noise and visualized with HTML5/JavaScript. Prototyped in Python.',
    tags: ['WebAssembly', 'C', 'JavaScript'],
    repo: 'https://github.com/SirajChokshi/terraingeneration',
    demo: 'https://terrain.sirajchokshi.com',
  },
  {
    name: 'Git Get',
    date: '08/2020',
    desc:
      'A simple GitHub profile analyzer built to gain insight for users and organizations. Built with a React.JS frontend and a Go API to facilitate caching.',
    tags: ['Go', 'React', 'TypeScript'],
    repo: 'https://github.com/SirajChokshi/git-get',
    demo: 'https://gitget.now.sh',
  },
  {
    name: 'Messenger Data Analysis',
    date: '08/2020',
    desc:
      'Quantitative metrics and textual analysis for Facebook Messenger data dumps. Using natural language processing to develop understanding about conversations.',
    tags: ['Python', 'NLP'],
    repo: 'https://github.com/SirajChokshi/messenger-data-analysis',
  },
  {
    name: 'StartupMatch',
    date: '10/2019',
    desc:
      'Developed a Single-Page Application integrating a REST API for a job board servicing startups and students at the University of Illinois at Urbana-Champaign.',
    tags: ['React', 'Python'],
    repo: 'https://github.com/SirajChokshi/startup-job-board',
    read: '/blog/startup-job-board',
  },
  {
    name: 'Confer',
    date: '10/2020',
    desc:
      'Event and conference management made easy with a Kotlin-based, open-source SaaS.',
    tags: ['Kotlin', 'React'],
    repo: 'https://github.com/craftdog/confer',
  },
  {
    name: 'Poke',
    date: '03/2020',
    desc:
      'Progressive web app built with React and Python cloud functions to increase member engagement at university organizations. Designed and developed at HackIllinois 2020.',
    tags: ['Ionic', 'TypeScript', 'Python'],
    repo: 'https://github.com/poke-saas/',
  },
  {
    name: 'prvw',
    date: '06/2020',
    desc:
      'Command-line interface to fetch information about files and directories on your system. Written with Haskell and the turtle hackage.',
    tags: ['Haskell'],
    repo: 'https://github.com/SirajChokshi/prvw',
  },

  {
    name: 'SaverLife',
    date: '04/2020',
    desc: (
      <>
        Mobile application for{' '}
        <a
          href={'https://www.saverlife.org'}
          rel="noreferrer"
          style={{ color: '#8A8A8A' }}
          target={'_blank'}
        >
          SaverLife
        </a>{' '}
        built to complement their existing web platform. Designed user interface
        and integrated state management.
      </>
    ),
    tags: ['React Native', 'GraphQL'],
    repo: 'https://github.com/hack4impact-uiuc/saverlife',
  },
  {
    name: 'Pic-To-LateX',
    date: '07/2020',
    desc:
      'Resolves an image into a LaTeX formatted output for mathematical equations and proofs. Implemented image segmentation and OCR (Google Tesseract) with OpenCV.',
    tags: ['Python', 'OpenCV'],
  },
  {
    name: 'Shorten',
    date: '07/2020',
    desc:
      'A URL shortener accessible through a website or CLI. Supports easy-to-remember, randomly generated links or custom aliases.',
    tags: ['Python', 'Flask'],
    repo: 'https://github.com/SirajChokshi/shorten',
    demo: 'https://s5n.herokuapp.com/',
  },
  {
    name: 'L-Scout',
    date: '01/2020',
    desc:
      "Time estimations for Chicago Transit Authority (CTA) or the 'L'. Native mobile app and progressive web app integrating with Mapbox and the CTA's APIs.",
    tags: ['JavaScript', 'Ionic'],
  },
  {
    name: 'Credit Card Validator',
    date: '06/2020',
    desc:
      "Utility to validate credit cards and determine an issuer using Luhn's checksum algorithm implemented in Haskell.",
    tags: ['Haskell'],
    repo: 'https://github.com/SirajChokshi/card-validator',
  },
];

export default PROJECTS;
