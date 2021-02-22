(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),l=n(1),i=n(16),a=n(3),s=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),o=r.NODE_ENV,j=r.REACT_APP_GA_TRACKING_ID;"production"===o&&s.a.initialize(j);var b=function(){var e=Object(a.f)().pathname;return Object(l.useEffect)((function(){"production"===o&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},u=n(5),d=n(24),h=[{index:!0,label:"Michael D'Angelo",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(l.lazy)((function(){return n.e(4).then(n.t.bind(null,170,7))})),m=function(){var e=Object(l.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return i(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/website","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Alex Kourkoumelis"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:akourk@icloud.com",children:"akourk@icloud.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Alex. I like building things. I am a ",Object(c.jsx)("a",{href:"https://www.bellevuecollege.edu/",children:"Bellevue College"})," graduate, and",Object(c.jsx)("a",{href:"https://www.evergreen.edu/",children:"a Evergreen State College"})," graduate. Before CS I was a CrossFit Coach."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Alex Kourkoumelis ",Object(c.jsx)(u.b,{to:"/",children:"kourk.com"}),"."]})]})]})},g=function(){var e=Object(a.f)().pathname;return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},k=function(e){return Object(c.jsxs)(i.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Alex Kourkoumelis",defaultTitle:"Alex Kourkoumelis",children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};k.defaultProps={children:null,fullPage:!1,title:null,description:"Alex Kourkoumelis's personal website."};t.a=k},25:function(e,t,n){"use strict";var c=n(0),l=(n(1),n(29)),i=n(30),a=n(31),s=n(32),r=n(33),o=n(34),j=n(35),b=n(36),u=[{link:"https://github.com/mldangelo",label:"Github",icon:i.faGithub},{link:"https://facebook.com/md",label:"Facebook",icon:a.faFacebookF},{link:"https://www.instagram.com/dangelosaurus/",label:"Instagram",icon:s.faInstagram},{link:"https://www.linkedin.com/in/michaelldangelo",label:"LinkedIn",icon:r.faLinkedinIn},{link:"https://angel.co/michael-d-angelo",label:"Angel List",icon:o.faAngellist},{link:"https://twitter.com/dangelosaurus",label:"Twitter",icon:j.faTwitter},{link:"mailto:michael.l.dangelo@gmail.com",label:"Email",icon:b.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:u.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(l.a,{icon:e.icon})})},e.label)}))})}},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),l=n(1),i=n.n(l),a=n(15),s=n(5),r=n(3),o=n(21),j=(n(49),Object(l.lazy)((function(){return Promise.all([n.e(2),n.e(7)]).then(n.bind(null,166))}))),b=Object(l.lazy)((function(){return n.e(8).then(n.bind(null,167))})),u=Object(l.lazy)((function(){return n.e(9).then(n.bind(null,168))})),d=Object(l.lazy)((function(){return n.e(10).then(n.bind(null,169))})),h=Object(l.lazy)((function(){return n.e(6).then(n.bind(null,173))})),O=Object(l.lazy)((function(){return n.e(5).then(n.bind(null,171))})),m=Object(l.lazy)((function(){return n.e(11).then(n.bind(null,172))})),x=function(){return Object(c.jsx)(s.a,{basename:"/website",children:Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(r.a,{path:"/about",component:j}),Object(c.jsx)(r.a,{path:"/projects",component:h}),Object(c.jsx)(r.a,{path:"/stats",component:m}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:d,status:404})]})})})},p=function(){return Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(p,{}),f):Object(a.render)(Object(c.jsx)(p,{}),f)}},[[50,1,3]]]);
//# sourceMappingURL=main.ba53a62b.chunk.js.map