"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[109],{8598:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var i=n(5893),t=n(1151);const a={sidebar_position:1,title:"The Database UI"},l="Databases",o={id:"Databases-Columnar/Database",title:"The Database UI",description:"As an example, we will be looking at databases from a Columnar Connection, Acme Columnar.",source:"@site/docs/Databases-Columnar/Database.md",sourceDirName:"Databases-Columnar",slug:"/Databases-Columnar/Database",permalink:"/docs/Databases-Columnar/Database",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"The Database UI"},sidebar:"tutorialSidebar",previous:{title:"Databases Columnar",permalink:"/docs/category/databases-columnar"},next:{title:"Add Database and Scope",permalink:"/docs/Databases-Columnar/Create-Database-Scope"}},r={},h=[{value:"The Columnar Database UI",id:"the-columnar-database-ui",level:2},{value:"Databases",id:"databases-1",level:2},{value:"Database Table",id:"database-table",level:2},{value:"Scopes Table",id:"scopes-table",level:2},{value:"Links Table",id:"links-table",level:2},{value:"Collections Table",id:"collections-table",level:2},{value:"The Footer Table",id:"the-footer-table",level:2},{value:"Tip",id:"tip",level:2}];function c(e){const s={admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"databases",children:"Databases"}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["As an example, we will be looking at databases from a Columnar Connection, ",(0,i.jsx)(s.em,{children:"Acme Columnar"}),"."]})}),"\n",(0,i.jsx)(s.h2,{id:"the-columnar-database-ui",children:"The Columnar Database UI"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"database-initial",src:n(228).Z+"",width:"3072",height:"1720"}),"\nThe UI is tabbed:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Databases"}),"\n",(0,i.jsx)(s.li,{children:"Documents"}),"\n",(0,i.jsx)(s.li,{children:"Indexes"}),"\n",(0,i.jsx)(s.li,{children:"Schema"}),"\n",(0,i.jsx)(s.li,{children:"Views (under construction)"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"databases-1",children:"Databases"}),"\n",(0,i.jsx)(s.p,{children:"The Main Panel has 4 tables"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Bucket"}),": Choosing Bucket sets ",(0,i.jsx)(s.em,{children:"Active Bucket"})," in the ",(0,i.jsx)(s.strong,{children:"AppBar"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Scope"}),": Scopes for the chosen Bucket. Choosing Scope sets ",(0,i.jsx)(s.em,{children:"Active Scope"})," in the ",(0,i.jsx)(s.strong,{children:"AppBar"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Links"}),": This is the ",(0,i.jsx)(s.em,{children:"Data Source"})," for the Collections."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Collection"}),": Collections for the chosen Scope, from the ",(0,i.jsx)(s.em,{children:"Link"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"database-table",children:"Database Table"}),"\n",(0,i.jsxs)(s.p,{children:["This table shows the list of databases.",(0,i.jsx)("br",{}),"\nThe table also has a Add Database, Refresh Button and a Delete Button.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.strong,{children:"+Database"}),": This action adds a empty Database.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.strong,{children:"Refresh"}),": This action results in the following:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The database information is removed from the ",(0,i.jsx)(s.em,{children:"CapellaDatastudio store"})]}),"\n",(0,i.jsx)(s.li,{children:"The database information is fetched once again from the Server"}),"\n",(0,i.jsx)(s.li,{children:"You need to do this if Scopes/Links/Collections have been added/removed directly from the Server UI and are not reflected in Capella DataStudio."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Delete"}),": Deletes the database from the Server"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"This action is irreversible"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"scopes-table",children:"Scopes Table"}),"\n",(0,i.jsxs)(s.p,{children:["This table shows the list of scopes in the chosen database.",(0,i.jsx)("br",{}),"\nThe table also has a Add Scope, Refresh and Delete Buttons.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.strong,{children:"+Scope"}),": This action adds one or more Scopes to the Bucket.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.strong,{children:"+Refresh"}),": This action results in the following:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The scope is removed from the ",(0,i.jsx)(s.em,{children:"CapellaDatastudio store"}),"."]}),"\n",(0,i.jsx)(s.li,{children:"The scope information is fetched once again from the Server."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Delete"})," (Trashcan Icon):\nThis action results in the following:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The Scope is deleted fromm the Server"}),"\n",(0,i.jsx)(s.li,{children:"This action is irreversible"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"links-table",children:"Links Table"}),"\n",(0,i.jsxs)(s.p,{children:["This table shows the list of Links (",(0,i.jsx)(s.em,{children:"Data Source"}),") in the chosen scope.",(0,i.jsx)("br",{}),"\nThe table also has a Add Link, Refresh and Delete Buttons.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"+Link"}),": This action adds a Link to the Scope.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.strong,{children:"+Refresh"}),": This action results in the following:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.em,{children:"Schema"})," and the ",(0,i.jsx)(s.em,{children:"Item Count"})," fetched from the Selected Link (",(0,i.jsx)(s.em,{children:"Data Source"}),")","\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["This is a expensive operation which takes time, especially fetching the item count from ",(0,i.jsx)(s.em,{children:"S3 Buckets"}),(0,i.jsx)("br",{}),"\nThis is the reason refresh is applicable to the Selected Link.",(0,i.jsx)("br",{})]})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Delete"})," (Trashcan Icon):\nThis action results in the following:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The Link is deleted fromm the Server"}),"\n",(0,i.jsx)(s.li,{children:"This action is irreversible"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"collections-table",children:"Collections Table"}),"\n",(0,i.jsxs)(s.p,{children:["This table shows the list of collections in the chosen scope.",(0,i.jsx)("br",{}),"\nThe table also has a Add Collection, Refresh and Delete Buttons.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.strong,{children:"+Collection"}),": This action adds one or more Collections to the Scope for the chosen Link.",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.strong,{children:"+Refresh"}),": This action results in the following:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.em,{children:"Schema"})," and the ",(0,i.jsx)(s.em,{children:"Item Count"})," fetched from the Selected Link (",(0,i.jsx)(s.em,{children:"Data Source"}),")","\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["This is a expensive operation which takes time, especially fetching the item count from ",(0,i.jsx)(s.em,{children:"S3 Buckets"}),(0,i.jsx)("br",{}),"\nThis is the reason refresh is applicable to the Selected Link.",(0,i.jsx)("br",{})]})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Delete"})," (Trashcan Icon):\nThis action results in the following:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The Collection is deleted fromm the Server"}),"\n",(0,i.jsx)(s.li,{children:"This action is irreversible"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"the-footer-table",children:"The Footer Table"}),"\n",(0,i.jsx)(s.p,{children:"Displays some Collection details on the chosen Scope."}),"\n",(0,i.jsx)(s.h2,{id:"tip",children:"Tip"}),"\n",(0,i.jsx)(s.admonition,{title:"Tip",type:"tip",children:(0,i.jsxs)(s.p,{children:["Set the ",(0,i.jsx)(s.strong,{children:"Active Bucket"})," and ",(0,i.jsx)(s.strong,{children:"Active Scope"})," Context from this UI."]})})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},228:(e,s,n)=>{n.d(s,{Z:()=>i});const i=n.p+"assets/images/database-initial-d821fb67e2acbf55d0fd6bd30550505e.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>l});var i=n(7294);const t={},a=i.createContext(t);function l(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);