const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/siraj/Documents/Websites/portfolio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/siraj/Documents/Websites/portfolio/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/siraj/Documents/Websites/portfolio/src/pages/index.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/Users/siraj/Documents/Websites/portfolio/src/pages/resume.js"))),
  "component---src-pages-work-js": hot(preferDefault(require("/Users/siraj/Documents/Websites/portfolio/src/pages/work.js"))),
  "component---src-pages-work-fileviewer-js": hot(preferDefault(require("/Users/siraj/Documents/Websites/portfolio/src/pages/work/fileviewer.js"))),
  "component---src-pages-work-finance-js": hot(preferDefault(require("/Users/siraj/Documents/Websites/portfolio/src/pages/work/finance.js"))),
  "component---src-pages-work-illinitours-js": hot(preferDefault(require("/Users/siraj/Documents/Websites/portfolio/src/pages/work/illinitours.js"))),
  "component---src-pages-work-music-js": hot(preferDefault(require("/Users/siraj/Documents/Websites/portfolio/src/pages/work/music.js"))),
  "component---src-pages-work-startupmatch-js": hot(preferDefault(require("/Users/siraj/Documents/Websites/portfolio/src/pages/work/startupmatch.js")))
}

