"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[689],{1689:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var i=n(2791),r=n(1523),a=n(6842),s=n(184),l=function(e){var t=e.data;return(0,s.jsx)("article",{className:"degree-container",children:(0,s.jsxs)("header",{children:[(0,s.jsx)("h4",{className:"degree",children:t.degree}),(0,s.jsxs)("p",{className:"school",children:[(0,s.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"education",children:[(0,s.jsx)("div",{className:"link-to",id:"education"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,s.jsx)(l,{data:e},e.school)}))]})};o.defaultProps={data:[]};var c=o,u=function(e){var t=e.data;return(0,s.jsxs)("article",{className:"jobs-container",children:[(0,s.jsxs)("header",{children:[(0,s.jsxs)("h4",{children:[(0,s.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,s.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,s.jsxs)("p",{className:"description",children:[" ",t.description]}),(0,s.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,s.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"experience",children:[(0,s.jsx)("div",{className:"link-to",id:"experience"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,s.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d;var m=n(9142);function g(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(0,m.Z)(i.key),i)}}var f=n(9611);function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var y=n(1002);function v(e,t){if(t&&("object"===(0,y.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=h(e);if(t){var r=h(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return v(this,n)}}var w=n(4942),j=n(1413),x=function(e){var t=e.handleClick,n=e.active,i=e.label;return(0,s.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})},k=function(e){var t=e.data,n=e.categories,i=t.category,r=t.competency,a=t.title,l={background:n.filter((function(e){return i.includes(e.name)})).map((function(e){return e.color}))[0]},o=(0,j.Z)((0,j.Z)({},l),{},{width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")});return(0,s.jsxs)("div",{className:"skillbar clearfix",children:[(0,s.jsx)("div",{className:"skillbar-title",style:l,children:(0,s.jsx)("span",{children:a})}),(0,s.jsx)("div",{className:"skillbar-bar",style:o}),(0,s.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};k.defaultProps={categories:[]};var S=k,C=function(e){var t=e.categories,n=e.skills,i=e.levels;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,j.Z)((0,j.Z)({},e),{},(0,w.Z)({},t,!1))}),{All:!0}),skills:n,levels:i}},N=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,f.Z)(e,t)}(a,e);var t,n,i,r=b(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=r.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,i){return(0,j.Z)((0,j.Z)({},n),{},(0,w.Z)({},i,e===i&&!t.buttons[i]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=C({categories:e.categories,skills:e.skills,levels:e.levels}),t}return t=a,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,s.jsx)(S,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,s.jsx)(x,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,s.jsxs)("div",{className:"skills",children:[(0,s.jsx)("div",{className:"link-to",id:"skills"}),(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h3",{children:"Skills"}),(0,s.jsx)("h4",{children:'Note: I use the following definitions for "skill" ratings.'}),(0,s.jsx)("ol",{className:"skill-level-container",children:this.state.levels.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("h5",{children:e.title}),(0,s.jsx)("p",{children:(0,s.jsx)("i",{children:e.description})})]},e.level)}))})]}),(0,s.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,s.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&g(t.prototype,n),i&&g(t,i),Object.defineProperty(t,"prototype",{writable:!1}),a}(i.Component);N.defaultProps={skills:[],categories:[],levels:[]};var P=N,O=function(e){var t=e.data,n=e.last;return(0,s.jsxs)("li",{className:"course-container",children:[(0,s.jsxs)("a",{href:t.link,children:[(0,s.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,s.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,s.jsx)("div",{className:"course-dot",children:(0,s.jsx)("p",{className:"course-name",children:" \u2022"})})]})};O.defaultProps={last:!1};var A=O,D=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,s.jsx)(A,{data:t,last:n===e.length-1},t.title)}))},Z=function(e){var t=e.data;return(0,s.jsxs)("div",{className:"courses",children:[(0,s.jsx)("div",{className:"link-to",id:"courses"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)("h3",{children:"Selected Courses"})}),(0,s.jsx)("ul",{className:"course-list",children:D(t)})]})};Z.defaultProps={data:[]};var B=Z,E=function(){return(0,s.jsxs)("div",{className:"references",children:[(0,s.jsx)("div",{className:"link-to",id:"references"}),(0,s.jsx)("div",{className:"title",children:(0,s.jsx)(r.rU,{to:"/contact",children:(0,s.jsx)("h3",{children:"References are available upon request"})})})]})},L=[{title:"Probability and Statistical Models",number:"MATH 270",link:"https://www2.bellevuecollege.edu/classes/All/MATH/270",university:"Bellevue College"},{title:"Discrete Mathematics",number:"MATH 301",link:"https://www2.bellevuecollege.edu/classes/All/MATH/301",university:"Bellevue College"},{title:"Data Structures",number:"CS 300",link:"https://www2.bellevuecollege.edu/classes/All/CS/300",university:"Bellevue College"},{title:"Software Patterns",number:"CS 311",link:"https://www2.bellevuecollege.edu/classes/All/CS/311",university:"Bellevue College"},{title:"Programming Languages",number:"CS 320",link:"https://www2.bellevuecollege.edu/classes/All/CS/320",university:"Bellevue College"},{title:"Database Systems",number:"CS 331",link:"https://www2.bellevuecollege.edu/classes/All/CS/331",university:"Bellevue College"},{title:"Computer Networks",number:"CS 341",link:"https://www2.bellevuecollege.edu/classes/All/CS/341",university:"Bellevue College"},{title:"Computer Architecture",number:"CS 351",link:"https://www2.bellevuecollege.edu/classes/All/CS/351",university:"Bellevue College"},{title:"Operating Systems",number:"CS 360",link:"https://www2.bellevuecollege.edu/classes/All/CS/360",university:"Bellevue College"},{title:"Algorithms ",number:"CS 401",link:"https://www2.bellevuecollege.edu/classes/All/CS/401",university:"Bellevue College"},{title:"Software Engineering",number:"CS 410",link:"https://www2.bellevuecollege.edu/classes/All/CS/410",university:"Bellevue College"},{title:"Cloud Computing",number:"CS 455",link:"https://www2.bellevuecollege.edu/classes/All/CS/455",university:"Bellevue College"},{title:"Machine Learning",number:"CS 460",link:"https://www2.bellevuecollege.edu/classes/All/CS/460",university:"Bellevue College"}],M=[{school:"Bellevue College",degree:"B.S. Computer Science",link:"https://www.bellevuecollege.edu/",year:2020},{school:"Evergreen State College",degree:"B.A. Philosophy",link:"https://www.evergreen.edu/",year:2014}],T=[{company:"State Farm",position:"Software Engineer",link:"https://www.statefarm.com",daterange:"October 2022 - Present",description:"Supporting State Farm's modernization strategy, updating the insurance policy view enabling customers to update and view existing insurance policies.",points:["Developed several front-end flows using JavaScript, React, and Redux, keeping extensibility in mind.","Worked on incrementally replacing an outdated Cobol mainframe with a more modern and efficient Java/Spring back-end.","Updated existing flows to facilitate more customer agency and refine end-user experience."]},{company:"Microsoft",position:"Security Analyst",link:"https://microsoft.com",daterange:"October 2019 - October 2022",description:"Monitored, tracked, and analyzed instances of services abuse on Microsoft's platforms, providing critical feedback and input to the algorithms used to safeguard corporate systems across the world.",points:["Performed false-positive/false-negatives analysis, summarizing findings and providing feedback to tune algorithms","Worked on incremental improvements to the product.","Led team meetings to define strategy for approaching obscure cases, leading to high resolution rates.","Maintained self-driven cadence of work in an unstructured environment, leading to a high case handling rate and recognition as a high performer by the team.","Prepared and maintained comprehensive onboarding programming and responsible for training new hires."]},{company:"WattTime",position:"Software Engineer (Capstone)",link:"https://www.watttime.org/",daterange:"September 2019 - June 2020",description:'Built automated carbon emissions data acquisition tools to form a global database to assist in time-based and geography-based "curving" of emissions to reduce carbon footprint.',points:["Analyzed the reporting techniques of balancing authorities worldwide to determine requirements for scrapers.","Developed custom web scrapers using Python for each balancing authority globally (10+) to gather emissions data 288 times daily and post to an SQL database.","Cleaned, converted, and stored reported data, ensuring that any inconsistencies were corrected and that the end data quality was research-grade.","Built a ReactJS dashboard that leverages WattTime data to present data visually and in terms that are flexible and extensible to the end consumer."]},{company:"Bellevue College",position:"Teaching Assistant",link:"https://www.bellevuecollege.edu/",daterange:"January 2019 - March 2019",description:"Motivated and enthusiastic Teaching Assistant for high-level CS courses, providing careful attention to students struggling with difficult concepts.",points:["Supplemented learning plan for struggling students in both one-on-one and in group settings.","Innovated new teaching methods by adaptively responding to student needs and influencing course curriculum.","Carefully identified different preferred learning methods to tailor specific teaching strategies on a case-by-case basis."]},{company:"Lake Hills CrossFit",position:"Certified Level 1 CrossFit Trainer",link:"http://www.lakehillscrossfit.com/",daterange:"August 2015 - May 2020",description:"Successfully aided in growing a small fitness business from start-up to profitability through innovating business strategies, fostering a welcoming community, and providing top level coaching.",points:["Designed and developed an exhaustive, multi-step new client orientation program which resulted in an 85% new client contract rate.","Planned and organized various community engagement activities including numerous competitions, fund-raisers, and social outings, resulting in 75% client retention rate","Involved in every level of business and trusted to make major decisions bringing the business to profitability and seeing nearly 300% growth annually."]}],R=n(907);var J=n(181);var W,I=[{level:1,title:"Very Limited Exposure",description:"This is just a baseline - I have only used the technology in a very limited capacity."},{level:2,title:"Limited Exposure",description:"I have used it before, either briefly or in a limited capacity, but am somewhat familiar."},{level:3,title:"Significant Exposure",description:"I have used it either academically or for a non-trivial project, but may not be familiar with more advanced features."},{level:4,title:"Proficiency",description:"I have used it almost daily for at least 6 months, either academically or for work/personal projects."},{level:5,title:"Mastery",description:"I am reserving this level for skills I have honed to near perfection; hopefully more to come soon!"}],z=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:4,category:["Web Development","Javascript"]},{title:"Redux",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:3,category:["Web Development","Tools"]},{title:"SQL",competency:2,category:["Databases","Languages"]},{title:"ElasticSearch",competency:1,category:["Web Development","Databases"]},{title:"Data Mining",competency:1,category:["Data Science"]},{title:"Flask",competency:1,category:["Web Development","Python"]},{title:"Git",competency:3,category:["Tools"]},{title:"NumPy",competency:3,category:["Data Science","Data Engineering","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"HTML/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:3,category:["Languages","Python"]},{title:"C++",competency:3,category:["Languages"]},{title:"R",competency:3,category:["Languages"]},{title:"Java",competency:4,category:["Languages"]},{title:"Pandas",competency:2,category:["Data Engineering","Data Science","Python"]},{title:"C",competency:2,category:["Languages"]},{title:"C#",competency:2,category:["Languages"]},{title:"Machine learning",competency:1,category:["Data Engineering","Data Science"]}].map((function(e){return(0,j.Z)((0,j.Z)({},e),{},{category:e.category.sort()})})),H=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],q=(W=new Set(z.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,R.Z)(e)}(W)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(W)||(0,J.Z)(W)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:H[t]}})),F=["Education","Experience","Skills","Courses","References"],_=function(){return(0,s.jsx)(a.Z,{title:"Resume",description:"Alex Kourkouemlis' Resume",children:(0,s.jsxs)("article",{className:"post",id:"resume",children:[(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"title",children:[(0,s.jsx)("h2",{"data-testid":"heading",children:(0,s.jsx)(r.rU,{to:"resume",children:"Resume"})}),(0,s.jsx)("div",{className:"link-container",children:F.map((function(e){return(0,s.jsx)("h4",{children:(0,s.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,s.jsx)(c,{data:M}),(0,s.jsx)(p,{data:T}),(0,s.jsx)(P,{skills:z,categories:q,levels:I}),(0,s.jsx)(B,{data:L}),(0,s.jsx)(E,{})]})})}},4942:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(9142);function r(e,t,n){return(t=(0,i.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(4942);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},9142:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(1002);function r(e){var t=function(e,t){if("object"!==(0,i.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==(0,i.Z)(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,i.Z)(t)?t:String(t)}},1002:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}n.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=689.f4659c8e.chunk.js.map