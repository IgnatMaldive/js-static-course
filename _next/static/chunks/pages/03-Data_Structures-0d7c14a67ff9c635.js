(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{9450:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/03-Data_Structures",function(){return s(6772)}])},6408:function(e,t,s){"use strict";var a=s(1527);s(959);let n={logo:(0,a.jsx)("span",{children:"Generated JavaScript Course"}),project:{link:"https://github.com/shuding/nextra-docs-template"},chat:{link:"https://discord.com"},docsRepositoryBase:"https://github.com/shuding/nextra-docs-template",footer:{text:"Nextra Docs Template"}};t.Z=n},6772:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l.Z}});var a=s(1527),n=s(2093),r=s(2691),i=s(6408);s(9054);var o=s(313);s(6484);var l=s(9181);function c(e){let t=Object.assign({h1:"h1",h3:"h3",p:"p",code:"code",pre:"pre",span:"span"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"Data Structures in JavaScript"}),"\n",(0,a.jsx)(t.h3,{id:"31-arrays-creation-manipulation-and-iteration",children:"3.1 Arrays: Creation, Manipulation, and Iteration"}),"\n",(0,a.jsxs)(t.p,{children:["Arrays in JavaScript are used to store multiple values in a single variable. This section covers the basics of creating arrays, adding and removing elements, and iterating over array items. Common array methods like ",(0,a.jsx)(t.code,{children:"push()"}),' are demonstrated for manipulating array contents. The example shows how to add a new element ("yellow") to an existing array of colors.']}),"\n",(0,a.jsx)(t.p,{children:"Code Example:"}),"\n",(0,a.jsx)(t.pre,{"data-language":"js","data-theme":"default",children:(0,a.jsxs)(t.code,{"data-language":"js","data-theme":"default",children:[(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" colors "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"red"'}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"green"'}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"blue"'}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"colors"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".push"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"yellow"'}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})]})]})}),"\n",(0,a.jsx)(t.h3,{id:"32-objects-properties-methods-and-prototypes",children:"3.2 Objects: Properties, Methods, and Prototypes"}),"\n",(0,a.jsxs)(t.p,{children:["Objects in JavaScript are key-value pairs where keys are strings and values can be any data type. This section delves into creating objects, accessing their properties, and understanding the role of prototypes in JavaScript's object-oriented programming. The example illustrates creating a simple object with two properties (",(0,a.jsx)(t.code,{children:"firstName"})," and ",(0,a.jsx)(t.code,{children:"lastName"}),") and accessing one of these properties using dot notation."]}),"\n",(0,a.jsx)(t.p,{children:"Code Example:"}),"\n",(0,a.jsx)(t.pre,{"data-language":"js","data-theme":"default",children:(0,a.jsxs)(t.code,{"data-language":"js","data-theme":"default",children:[(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" person "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  firstName"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"John"'}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  lastName"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Doe"'}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"person"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:".firstName); "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"// John"})]})]})}),"\n",(0,a.jsx)(t.h3,{id:"33-sets-and-maps-working-with-unique-data",children:"3.3 Sets and Maps: Working with Unique Data"}),"\n",(0,a.jsx)(t.p,{children:"Sets and Maps are ES6 additions to JavaScript that provide ways to handle unique data and key-value pairs, respectively. A Set is a collection of unique values, while a Map holds key-value pairs with any value type. This section explains how to create and use these structures. The given example demonstrates creating a Set with numbers, automatically removing duplicate values."}),"\n",(0,a.jsx)(t.p,{children:"Code Example:"}),"\n",(0,a.jsx)(t.pre,{"data-language":"js","data-theme":"default",children:(0,a.jsx)(t.code,{"data-language":"js","data-theme":"default",children:(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" uniqueNumbers "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"Set"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(["}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]);"})]})})}),"\n",(0,a.jsx)(t.h3,{id:"34-working-with-json-data",children:"3.4 Working with JSON Data"}),"\n",(0,a.jsxs)(t.p,{children:["JSON (JavaScript Object Notation) is a lightweight format for storing and transporting data, often used in web applications. This section covers how to parse JSON strings into JavaScript objects and stringify JavaScript objects into JSON format. The example shows parsing a JSON string representing an object with properties ",(0,a.jsx)(t.code,{children:"name"})," and ",(0,a.jsx)(t.code,{children:"age"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Code Example:"}),"\n",(0,a.jsx)(t.pre,{"data-language":"js","data-theme":"default",children:(0,a.jsxs)(t.code,{"data-language":"js","data-theme":"default",children:[(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" jsonData "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'\'{"name": "Alice", "age": 30}\''}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"let"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" obj "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"JSON"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:".parse"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(jsonData);"})]})]})}),"\n",(0,a.jsx)(t.h3,{id:"35-advanced-data-structures",children:"3.5 Advanced Data Structures"}),"\n",(0,a.jsx)(t.p,{children:"Beyond basic arrays and objects, JavaScript can be used to implement more complex data structures like linked lists, trees, graphs, and more. This section provides a conceptual overview of these advanced structures, discussing their characteristics, use-cases, and basic implementation strategies in JavaScript. These structures are essential for solving more complex problems in computer science and software development."})]})}e=s.hmd(e),(0,n.j)({Content:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)},nextraLayout:r.ZP,hot:e.hot,pageOpts:{filePath:"pages/03-Data_Structures.md",route:"/03-Data_Structures",frontMatter:{},pageMap:[{kind:"MdxPage",name:"02-Variables",route:"/02-Variables"},{kind:"MdxPage",name:"03-Data_Structures",route:"/03-Data_Structures"},{kind:"MdxPage",name:"04-Control_Flow",route:"/04-Control_Flow"},{kind:"MdxPage",name:"05-Functions",route:"/05-Functions"},{kind:"MdxPage",name:"06-ObjectOriented_Programming",route:"/06-ObjectOriented_Programming"},{kind:"MdxPage",name:"07-Working_with_the_DOM",route:"/07-Working_with_the_DOM"},{kind:"MdxPage",name:"08-Advanced_JavaScript_Concepts",route:"/08-Advanced_JavaScript_Concepts"},{kind:"MdxPage",name:"09-Testing_and_Debugging",route:"/09-Testing_and_Debugging"},{kind:"MdxPage",name:"10-Modular_JavaScript",route:"/10-Modular_JavaScript"},{kind:"Meta",data:{index:"Introduction","02-Variables":"Variables","03-Data_Structures":"Data Structures","04-Control_Flow":"Control Flow","05-Functions":"Functions","06-ObjectOriented_Programming":"Object Oriented Programming","07-Working_with_the_DOM":"Working with the DOM","08-Advanced_JavaScript_Concepts":"Advanced Concepts","09-Testing_and_Debugging":"Testing and Debugging","10-Modular_JavaScript":"Modular JavaScript",about:{title:"About",type:"page"},contact:{title:"Contact ↗",type:"page",href:"https://twitter.com/shuding_",newWindow:!0}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"advanced",route:"/advanced",children:[{kind:"MdxPage",name:"satori",route:"/advanced/satori"},{kind:"Meta",data:{satori:"Satori"}}]},{kind:"MdxPage",name:"index",route:"/"}],headings:[{depth:1,value:"Data Structures in JavaScript",id:"data-structures-in-javascript"},{depth:3,value:"3.1 Arrays: Creation, Manipulation, and Iteration",id:"31-arrays-creation-manipulation-and-iteration"},{depth:3,value:"3.2 Objects: Properties, Methods, and Prototypes",id:"32-objects-properties-methods-and-prototypes"},{depth:3,value:"3.3 Sets and Maps: Working with Unique Data",id:"33-sets-and-maps-working-with-unique-data"},{depth:3,value:"3.4 Working with JSON Data",id:"34-working-with-json-data"},{depth:3,value:"3.5 Advanced Data Structures",id:"35-advanced-data-structures"}],timestamp:170645632e4,flexsearch:{codeblocks:!0},title:"Data Structures in JavaScript"},themeConfig:i.Z,pageNextRoute:"/03-Data_Structures",pageOptsChecksum:void 0,dynamicMetaModules:[]})}},function(e){e.O(0,[774,311,888,179],function(){return e(e.s=9450)}),_N_E=e.O()}]);