// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-template-js": () => import("./../src/templates/blogTemplate.js" /* webpackChunkName: "component---src-templates-blog-template-js" */),
  "component---src-templates-tags-js": () => import("./../src/templates/tags.js" /* webpackChunkName: "component---src-templates-tags-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-blog-tags-js": () => import("./../src/pages/blog/tags.js" /* webpackChunkName: "component---src-pages-blog-tags-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-resume-js": () => import("./../src/pages/resume.js" /* webpackChunkName: "component---src-pages-resume-js" */),
  "component---src-pages-work-js": () => import("./../src/pages/work.js" /* webpackChunkName: "component---src-pages-work-js" */),
  "component---src-pages-work-finance-js": () => import("./../src/pages/work/finance.js" /* webpackChunkName: "component---src-pages-work-finance-js" */),
  "component---src-pages-work-illinitours-js": () => import("./../src/pages/work/illinitours.js" /* webpackChunkName: "component---src-pages-work-illinitours-js" */),
  "component---src-pages-work-music-js": () => import("./../src/pages/work/music.js" /* webpackChunkName: "component---src-pages-work-music-js" */),
  "component---src-pages-work-startupmatch-js": () => import("./../src/pages/work/startupmatch.js" /* webpackChunkName: "component---src-pages-work-startupmatch-js" */),
  "component---src-pages-work-fileviewer-js": () => import("./../src/pages/work/fileviewer.js" /* webpackChunkName: "component---src-pages-work-fileviewer-js" */)
}

