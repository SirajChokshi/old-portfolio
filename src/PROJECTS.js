import React from 'react'

const PROJECTS = [
  {
    name: "StartupMatch",
    year: "2019",
    desc: "Developed a Single-Page Application integrating a REST API for a job board servicing startups and students at the University of Illinois at Urbana-Champaign",
    tags: ["React", "Python"],
    repo: "https://github.com/SirajChokshi/startup-job-board",
    read: "/blog/startup-job-board"
  },
  {
    name: "Terrain Generation",
    year: "2020",
    desc: "Procedural terrain generator written with C (compiled into WebAssembly) using Perlin2D noise and visualized with HTML5/JavaScript. Prototyped in Python",
    tags: ["WebAssembly", "C", "JavaScript"],
    repo: "https://github.com/SirajChokshi/terraingeneration",
    demo: "https://terrain.sirajchokshi.com"
  },
  {
    name: "Git Get",
    year: "2020",
    desc: "A simple GitHub profile analyzer built to gain insight for users and organizations. Built with a React.JS frontend and a Go API to facilitate caching.",
    tags: ["Go", "React", "JavaScript"],
    repo: "https://github.com/SirajChokshi/git-get",
    demo: "https://gitget.now.sh"
  },
  {
    name: "Messenger Data Analysis",
    year: "2020",
    desc: "Quantitative metrics and textual analysis for Facebook Messenger data dumps. Using natural language processing to develop understanding about conversations.",
    tags: ["Python", "NLP"],
    repo: "https://github.com/SirajChokshi/messenger-data-analysis"
  },
  {
    name: "Poke",
    year: "2020",
    desc: "Progressive web app built with React and Python cloud functions to increase member engagement at university organizations. Designed and developed at HackIllinois 2020",
    tags: ["Ionic", "TypeScript", "Python"],
    repo: "https://github.com/poke-saas/"
  },
  {
    name: "prvw",
    year: "2020",
    desc: "Command-line interface to fetch information about files and directories on your system. Written with Haskell and the turtle hackage",
    tags: ["Haskell"],
    repo: "https://github.com/SirajChokshi/prvw"
  },

  {
    name: "SaverLife",
    year: "2020",
    desc: <>Mobile application for <a href={"https://www.saverlife.org"} rel="noopener" style={{color: "#8A8A8A"}} target={"_blank"}>SaverLife</a> built to complement their existing web platform. Designed user interface and integrated state management</>,
    tags: ["React Native", "GraphQL"],
    repo: "https://github.com/hack4impact-uiuc/saverlife"
  },
  {
    name: "Pic-To-LateX",
    year: "2020",
    desc: "Resolves an image into a LaTeX formatted output for mathematical equations and proofs. Implemented image segmentation and OCR (Google Tesseract) with OpenCV",
    tags: ["Python", "OpenCV"],
  },
  {
    name: "L-Scout",
    year: "2020",
    desc: "Time estimations for Chicago Transit Authority (CTA) or the 'L'. Native mobile app and progressive web app integrating with Mapbox and the CTA's APIs",
    tags: ["JavaScript", "Ionic"],
  },
  {
    name: "Credit Card Validator",
    year: "2020",
    desc: "Utility to validate credit cards and determine an issuer using Luhn's checksum algorithm implemented in Haskell",
    tags: ["Haskell"],
    repo: "https://github.com/SirajChokshi/card-validator"
  },
  {
    name: "SMM 2 Level Generator",
    year: "2019",
    desc: "Super Mario Maker 2 level idea generator with thousands of users. Provides three compatible enemies, a time, a theme and a twist",
    tags: ["JavaScript"],
    repo: "https://github.com/SirajChokshi/SMM2-Concept-Generator",
    demo: "https://mario.sirajchokshi.com"
  },
]

export default PROJECTS;

