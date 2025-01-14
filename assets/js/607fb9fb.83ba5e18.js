"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9137],{2369:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=i(5893),t=i(1151);const r={sidebar_position:6,title:"User Typesets"},a="User Typesets",l={id:"Synthetic-Data/userTypesets",title:"User Typesets",description:"Files",source:"@site/docs/Synthetic-Data/userTypesets.md",sourceDirName:"Synthetic-Data",slug:"/Synthetic-Data/userTypesets",permalink:"/docs/Synthetic-Data/userTypesets",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"User Typesets"},sidebar:"tutorialSidebar",previous:{title:"Core Typesets",permalink:"/docs/Synthetic-Data/coreTypesets"},next:{title:"Expressions",permalink:"/docs/Synthetic-Data/expressions"}},h={},o=[{value:"Files",id:"files",level:2},{value:"Example: pizzas Typeset",id:"example-pizzas-typeset",level:2},{value:"The CSV File: pizzas.csv",id:"the-csv-file-pizzascsv",level:3},{value:"The manifest file: pizzas.manifest.json",id:"the-manifest-file-pizzasmanifestjson",level:3},{value:"Install this Typeset",id:"install-this-typeset",level:3},{value:"Use the Typeset",id:"use-the-typeset",level:3},{value:"User Typeset Working",id:"user-typeset-working",level:2}];function c(e){const s={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"user-typesets",children:"User Typesets"}),"\n",(0,n.jsx)(s.h2,{id:"files",children:"Files"}),"\n",(0,n.jsx)(s.p,{children:"These are the typesets provided by you. Ypu need to provide 2 files"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"A CSV file with data"}),"\n",(0,n.jsx)(s.li,{children:"A manifest file describing the Typeset"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"example-pizzas-typeset",children:"Example: pizzas Typeset"}),"\n",(0,n.jsx)(s.h3,{id:"the-csv-file-pizzascsv",children:"The CSV File: pizzas.csv"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"synth-pizzas-csv",src:i(4764).Z+"",width:"2328",height:"724"}),"\nLets take a look at the header and the first row of data:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"name,basePrice,type,size,toppingsList,saucesList,isVegetarian,calories,spicyLevel\nGarden Fresh Delight,10.0,\"arrayItem(['pan','thin crust','deep dish','stuffed crust'])\",\"arrayItem(['personal','small','medium','large','extra large'])\",\"['mushrooms','onions','bell peppers','olives','spinach','artichokes','broccoli','tomatoes','zucchini','corn']\",\"arrayItem(['tomato','barbecue','garlic butter'])\",True,900,1\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Enclose strings with commas in them in quotes"}),"\n",(0,n.jsxs)(s.li,{children:["The CSV file is not just data alone, it can also have ",(0,n.jsx)(s.strong,{children:"Expressions"})," which include ",(0,n.jsx)(s.strong,{children:"Functions"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"the-manifest-file-pizzasmanifestjson",children:"The manifest file: pizzas.manifest.json"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "name": "pizzas",\n  "provider": "acme",\n  "description": "Different types of pizzas",\n  "version": "1.0",\n  "date": "2024-10-21",\n  "related": true,\n  "file": "pizzas.csv"\n}\n'})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The typeset will be displayed as ",(0,n.jsx)(s.em,{children:"name.provider"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"related"}),": Data is correlated data"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"file"}),": The CSV file"]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["Place both the above files in ",(0,n.jsx)(s.strong,{children:"LocalStore/SyntheticData/UserTypes"})]})}),"\n",(0,n.jsx)(s.h3,{id:"install-this-typeset",children:"Install this Typeset"}),"\n",(0,n.jsxs)(s.p,{children:["This is done from the ",(0,n.jsx)(s.strong,{children:"Plugins"})," option in the Left ",(0,n.jsx)(s.strong,{children:"Navigation Bar"}),"\n",(0,n.jsx)(s.img,{alt:"synth-typesets-plugin-local",src:i(9395).Z+"",width:"3068",height:"672"})]}),"\n",(0,n.jsxs)(s.admonition,{title:"The Install Process",type:"info",children:[(0,n.jsxs)(s.p,{children:["When you click ",(0,n.jsx)(s.strong,{children:"Install"}),", the following happens:"]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The manifest file is read and stored in the Capella DataStudio store"}),"\n",(0,n.jsx)(s.li,{children:"The CSV file is copied over to homeDirectory/.capds/synthTypesets"}),"\n",(0,n.jsx)(s.li,{children:"The CSV file is not stored in Capella DataStudio store"}),"\n"]})]}),"\n",(0,n.jsx)(s.h3,{id:"use-the-typeset",children:"Use the Typeset"}),"\n",(0,n.jsxs)(s.p,{children:["After installing, the ",(0,n.jsx)(s.strong,{children:"Schema Builder"})," will show this Typeset in the ",(0,n.jsx)(s.strong,{children:"Type Dialog"})," box."]}),"\n",(0,n.jsx)(s.h2,{id:"user-typeset-working",children:"User Typeset Working"}),"\n",(0,n.jsx)(s.p,{children:"Lets take the example of the above schema. When a document is generated, the following happens:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["One random row is read from the file","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"If the file is less than 20 MB, the entire file is cached for performance"}),"\n",(0,n.jsx)(s.li,{children:"If the file is more than 20 MB, the random row is read from the disk."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"The row is cached in a row-cache"}),"\n",(0,n.jsxs)(s.li,{children:["The fields are then read from this row-cache","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Once any field is read, that field is nulled in the row-cache"}),"\n",(0,n.jsx)(s.li,{children:"If the field is null, the entire row-cache is invalidated and a new random row is read"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"This means"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The fields are read from the row cache and for a given document, the data is correlated."}),"\n",(0,n.jsx)(s.li,{children:"Each document starts with a new row-cache."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Now, lets look at the row itself. Lets consider one ",(0,n.jsx)(s.strong,{children:"random"})," row:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"Garden Fresh Delight,10.0,\"arrayItem(['pan','thin crust','deep dish','stuffed crust'])\",\"arrayItem(['personal','small','medium','large','extra large'])\",\"['mushrooms','onions','bell peppers','olives','spinach','artichokes','broccoli','tomatoes','zucchini','corn']\",\"arrayItem(['tomato','barbecue','garlic butter'])\",True,900,1\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Now, the ",(0,n.jsx)(s.strong,{children:"pizzas.name"})," is straight forward and tge value is ",(0,n.jsx)(s.em,{children:"Garden Fresh Delight"}),(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.strong,{children:"pizzas.type"})," is actually: ",(0,n.jsx)(s.em,{children:"arrayItem(['pan','thin crust','deep dish','stuffed crust'])"}),(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["This actually outputs: ",(0,n.jsx)(s.em,{children:"thin crust"})," (for example)\nSo, what happens is:"]}),"\n",(0,n.jsx)(s.li,{children:"The row field is read"}),"\n",(0,n.jsxs)(s.li,{children:["It is passed to an ",(0,n.jsx)(s.strong,{children:"Expressions Evaluator"}),", irrespective of what it contains"]}),"\n",(0,n.jsxs)(s.li,{children:["In above example, it is a function, ",(0,n.jsx)(s.em,{children:"arrayItem"})," which takes in an array and emits one random item from the array."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["User Typesets are ",(0,n.jsx)(s.strong,{children:"seed"})," data, used to generate a huge amount of Synthetic data.",(0,n.jsx)("br",{}),"\nYou can make this data as realistic as possible. In the pizzas example, the ",(0,n.jsx)(s.strong,{children:"price"}),", in USD is very realistic.",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.strong,{children:"Expressions"})," in the CSV file, make it completely customizable."]})})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4764:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/synth-pizzas-csv-e1f7e6a05be8acf5fd65395c7062fa67.png"},9395:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/synth-typesets-plugin-local-7d9a0389b35c96c4bafb9f7b03074bba.png"},1151:(e,s,i)=>{i.d(s,{Z:()=>l,a:()=>a});var n=i(7294);const t={},r=n.createContext(t);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);