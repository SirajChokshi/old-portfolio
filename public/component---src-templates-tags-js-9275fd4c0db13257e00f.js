(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5Ne1":function(e,a,t){"use strict";var n=t("Wbzz"),l=t("q1tI"),r=t.n(l);t("Kfe8");a.a=function(e){var a=e.post;return r.a.createElement("section",{className:"article-card"},r.a.createElement("div",{className:"info"},r.a.createElement("h3",null,r.a.createElement("i",{className:"fas fa-calendar"}),a.date),r.a.createElement("h2",null,r.a.createElement(n.Link,{to:a.path},a.title)),r.a.createElement("p",null,a.abstract),r.a.createElement("ul",null,a.tags.map((function(e){return r.a.createElement("li",null,r.a.createElement(n.Link,{to:"/blog/tags/"+e.toLowerCase()},e))})))))}},MN1z:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return m}));var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=t("Bl7J"),s=t("vrFN"),o=t("5Ne1");a.default=function(e){var a=e.pageContext,t=e.data,n=a.tag,m=t.allMarkdownRemark,u=m.edges,i=m.totalCount,E=i+" post"+(1===i?"":"s")+' tagged with "'+n+'"';return l.a.createElement(c.a,null,l.a.createElement(s.a,{title:"Tags"}),l.a.createElement("h2",{className:"work-header"},E),u.map((function(e){var a=e.node,t=a.fields.slug,n=a.frontmatter;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{key:t,post:n}),l.a.createElement("hr",null))})),l.a.createElement(r.Link,{to:"/blog/tags",className:"view-more"},"All tags"))};var m="3588225066"}}]);
//# sourceMappingURL=component---src-templates-tags-js-9275fd4c0db13257e00f.js.map