(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[5],{171:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),a=n(5),c=n(21),l=function(e){var t=e.data;return Object(r.jsx)("article",{className:"degree-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h4",{className:"degree",children:t.degree}),Object(r.jsxs)("p",{className:"school",children:[Object(r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"education"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(r.jsx)(l,{data:e},e.school)}))]})};o.defaultProps={data:[]};var s=o,u=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(r.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d;function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var i=m(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}var v=n(60),j=n(58),O=function(e){var t=e.handleClick,n=e.active,i=e.label;return Object(r.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})},w=function(e){var t=e.data,n=e.categories,i=t.category,a=t.competency,c=t.title,l={background:n.filter((function(e){return i.includes(e.name)})).map((function(e){return e.color}))[0]},o=Object(j.a)(Object(j.a)({},l),{},{width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")});return Object(r.jsxs)("div",{className:"skillbar clearfix",children:[Object(r.jsx)("div",{className:"skillbar-title",style:l,children:Object(r.jsx)("span",{children:c})}),Object(r.jsx)("div",{className:"skillbar-bar",style:o}),Object(r.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};w.defaultProps={categories:[]};var S=w,k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,n,i,a=f(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(j.a)(Object(j.a)({},n),{},Object(v.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(j.a)(Object(j.a)({},e),{},Object(v.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=c,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(r.jsx)(S,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(r.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"link-to",id:"skills"}),Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Skills"}),Object(r.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&b(t.prototype,n),i&&b(t,i),c}(i.Component);k.defaultProps={skills:[],categories:[]};var x=k,C=function(e){var t=e.data,n=e.last;return Object(r.jsxs)("li",{className:"course-container",children:[Object(r.jsxs)("a",{href:t.link,children:[Object(r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(r.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(r.jsx)("div",{className:"course-dot",children:Object(r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};C.defaultProps={last:!1};var D=C,P=function(e){var t,n=e.data;return Object(r.jsxs)("div",{className:"courses",children:[Object(r.jsx)("div",{className:"link-to",id:"courses"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Selected Courses"})}),Object(r.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(r.jsx)(D,{data:e,last:n===t.length-1},e.title)})))})]})};P.defaultProps={data:[]};var N=P,A=[{title:"Probability and Statistical Models",number:"MATH 270",link:"https://www2.bellevuecollege.edu/classes/All/MATH/270",university:"Bellevue College"},{title:"Discrete Mathematics",number:"MATH 301",link:"https://www2.bellevuecollege.edu/classes/All/MATH/301",university:"Bellevue College"},{title:"Data Structures",number:"CS 300",link:"https://www2.bellevuecollege.edu/classes/All/CS/300",university:"Bellevue College"},{title:"Software Patterns",number:"CS 311",link:"https://www2.bellevuecollege.edu/classes/All/CS/311",university:"Bellevue College"},{title:"Programming Languages",number:"CS 320",link:"https://www2.bellevuecollege.edu/classes/All/CS/320",university:"Bellevue College"},{title:"Database Systems",number:"CS 331",link:"https://www2.bellevuecollege.edu/classes/All/CS/331",university:"Bellevue College"},{title:"Computer Networks",number:"CS 341",link:"https://www2.bellevuecollege.edu/classes/All/CS/341",university:"Bellevue College"},{title:"Computer Architecture",number:"CS 351",link:"https://www2.bellevuecollege.edu/classes/All/CS/351",university:"Bellevue College"},{title:"Operating Systems",number:"CS 360",link:"https://www2.bellevuecollege.edu/classes/All/CS/360",university:"Bellevue College"},{title:"Algorithms ",number:"CS 401",link:"https://www2.bellevuecollege.edu/classes/All/CS/401",university:"Bellevue College"},{title:"Software Engineering",number:"CS 410",link:"https://www2.bellevuecollege.edu/classes/All/CS/410",university:"Bellevue College"},{title:"Cloud Computing",number:"CS 455",link:"https://www2.bellevuecollege.edu/classes/All/CS/455",university:"Bellevue College"},{title:"Machine Learning",number:"CS 460",link:"https://www2.bellevuecollege.edu/classes/All/CS/460",university:"Bellevue College"}],E=[{school:"Bellevue College",degree:"B.S. Computer Science",link:"https://www.bellevuecollege.edu/",year:2020},{school:"Evergreen State College",degree:"B.A. Philosophy",link:"https://www.evergreen.edu/",year:2014}],T=[{company:"Microsoft",position:"Abuse Detection Analyst",link:"https://microsoft.com",daterange:"October 2019 - Present",points:["Collaborate with other analysts to tune detection algorithms and identify malicious actors..","Independently derive trends in data and work with partnered teams to patch vulnerabilities.","Maintain discretion while working with highly sensitive data.","Self-managed and trusted to make difficult judgement calls even when data is limited."]},{company:"WattTime",position:"Non-Profit Volunteer Work",link:"https://www.watttime.org/",daterange:"September 2019 - June 2020",points:["Constructed web scrapers to gather emissions data from balancing authorities world-wide.","Successfully covered all of Australia, Taiwan, and a majority of Canada.","Cleaned, converted, and stored reported data, as well as checked for inconsistencies.","Designed and implemented user-friendly frontend to visualize findings and ensure public accessibility."]},{company:"Bellevue College",position:"Teaching Assistant",link:"https://www.bellevuecollege.edu/",daterange:"January 2019 - March 2019",points:["Facilitated learning of CS topics including Theory of Computation, Context Free Grammars, Automata Theory, Finite State Machines, and Parse Trees.","Mentored students struggling with challenging problems.","Worked with professor to help innovate teaching strategies for difficult concepts."]},{company:"Lake Hills CrossFit",position:"Certified Level 1 CrossFit Trainer",link:"http://www.lakehillscrossfit.com/",daterange:"August 2015 - May 2020",points:["Developed and supervised client orientation while achieving 85% new client contract.","Promoted community engagement with gym members and staff resulting in 75% client retention rate and nearly 300% growth annually"]}],L=n(17);var M=n(23);var B,W=[{level:1,title:"No Experience",description:'This is just a baseline - nothing in this list has a "1" rating'},{level:2,title:"Limited Exposure",description:"I have used it before, either briefly or in a limited capacity"},{level:3,title:"Significant Exposure",description:"I have used it either academically or for a non-trivial project, but may not be familiar with more advanced features"},{level:4,title:"Proficiency",description:"I have used it almost daily for at least 6 months, either academically or for work/personal projects"},{level:5,title:"Mastery",description:"I am reserving this level for skills I have honed to near perfection; hopefully more to come soon!"}],J=[{title:"Javascript",competency:1,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"ElasticSearch",competency:2,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Redis",competency:3,category:["Web Development","Databases"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"D3",competency:2,category:["Web Development","Javascript"]},{title:"Flask",competency:2,category:["Web Development","Python"]},{title:"Git/Mercurial",competency:3,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools","Data Engineering"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python"]},{title:"Numba",competency:2,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["Data Science","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"C++",competency:2,category:["Languages"]},{title:"Julia",competency:2,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]},{title:"Hadoop",competency:2,category:["Data Engineering","Data Science"]},{title:"Spark",competency:2,category:["Data Engineering","Data Science"]},{title:"Dagster",competency:2,category:["Data Engineering","Python"]},{title:"Mypy",competency:3,category:["Python"]},{title:"Pylint",competency:4,category:["Data Engineering","Python"]}].map((function(e){return Object(j.a)(Object(j.a)({},e),{},{category:e.category.sort()})})),R=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],H=(B=new Set(J.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(L.a)(e)}(B)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(B)||Object(M.a)(B)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:R[t]}})),I=["Education","Experience","Skills","Courses"];t.default=function(){return Object(r.jsx)(c.a,{title:"Resume",description:"Alex Kourkoumelis's Resume",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(a.b,{to:"resume",children:"Resume"})}),Object(r.jsx)("div",{className:"link-container",children:I.map((function(e){return Object(r.jsx)("h4",{children:Object(r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(r.jsx)(s,{data:E}),Object(r.jsx)(p,{data:T}),Object(r.jsx)(x,{skills:J,categories:H,levels:W}),Object(r.jsx)(N,{data:A})]})})}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(60);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},60:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=5.0ced39fa.chunk.js.map