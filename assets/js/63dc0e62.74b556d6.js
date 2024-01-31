"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[632],{87:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>r});var i=s(5893),t=s(1151);const l={sidebar_position:4,title:"AWS S3 Link and Collections"},o="Add a AWS S3 Link",a={id:"Databases-Columnar/Create-S3-Link",title:"AWS S3 Link and Collections",description:"The Database and Scope have been selected.",source:"@site/docs/Databases-Columnar/Create-S3-Link.md",sourceDirName:"Databases-Columnar",slug:"/Databases-Columnar/Create-S3-Link",permalink:"/docs/Databases-Columnar/Create-S3-Link",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"AWS S3 Link and Collections"},sidebar:"tutorialSidebar",previous:{title:"Couchbase Link and Collections",permalink:"/docs/Databases-Columnar/Create-CB-Link"},next:{title:"Documents and Schemas",permalink:"/docs/Databases-Columnar/Docs-and-Schemas"}},c={},r=[{value:"Check",id:"check",level:3},{value:"Add Collections (parquet)",id:"add-collections-parquet",level:2},{value:"Add Collections (csv)",id:"add-collections-csv",level:3},{value:"Post Add Collection",id:"post-add-collection",level:2}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"add-a-aws-s3-link",children:"Add a AWS S3 Link"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"Database"})," and ",(0,i.jsx)(n.em,{children:"Scope"})," have been selected.",(0,i.jsx)("br",{}),"\nNow, click the ",(0,i.jsx)(n.strong,{children:"+Link"})," button in the Liks Table ToolBar. This will bring up the list of choices:"]}),"\n",(0,i.jsx)("img",{src:"/img/columnar/link-add-initial.png",width:"400",alt:"link-add-initial"}),"\n",(0,i.jsxs)(n.p,{children:["Choose ",(0,i.jsx)(n.em,{children:"AWS S3"}),": This brings up a form which allows you to choose the ",(0,i.jsx)(n.em,{children:"AWS S3"})]}),"\n",(0,i.jsx)("img",{src:"/img/columnar/link-add-S3.png",width:"400",alt:"link-add-S3"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The drop down will show a list of AWS S3 buckets you configured in your ",(0,i.jsx)(n.strong,{children:"Cloud Store"})]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.em,{children:"Link Name"})," is automatically set as the AWS S3 bucket name"]}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"check",children:"Check"}),"\n",(0,i.jsxs)(n.p,{children:["Let's take a look at the UI after creating the Link:\n",(0,i.jsx)(n.img,{alt:"link-add-s3-after",src:s(2791).Z+"",width:"3072",height:"700"})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["There is no ",(0,i.jsx)(n.strong,{children:"Connect Switch"})," since AWS S3 buckets are always connected."]})}),"\n",(0,i.jsx)(n.p,{children:"Now let's add collections from the Source AWS S3 Bucket. We will add 2 types of file as an example"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Parquet Files"}),"\n",(0,i.jsx)(n.li,{children:"CSV Files"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"add-collections-parquet",children:"Add Collections (parquet)"}),"\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"+Collection"})," and you will get this form:"]}),"\n",(0,i.jsx)("img",{src:"/img/columnar/dataset-s3-parquet.png",width:"600",alt:"dataset-s3-parquet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Choose the Folder from the left Panel"}),"\n",(0,i.jsx)(n.li,{children:"Choose the file type on the right Panel"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Lets see the options here:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": The Folder name is chosen for you, and you can change that if you want."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"File Filter"}),": You can choose to have no filters or a exclude filter or an include filter.","\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["What is a ",(0,i.jsx)(n.strong,{children:"file filter"}),"? ",(0,i.jsx)("br",{}),"\nIn the filter box, enter the names of the files to be included/excluded from the external collection.",(0,i.jsx)("br",{}),"\nThe file name may include subdirectories of the location specified by the Path option.",(0,i.jsx)("br",{}),"\nAny files that do not match the specification are included/excluded.",(0,i.jsx)("br",{}),"\nInclude and Exclude are mutually exclusive.",(0,i.jsx)("br",{}),"\nThe file names may contain the following wildcard characters:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'  * \u2014 Matches anything\n  ? \u2014 Matches any single character\n  [ sequence ] \u2014 Matches any characters in sequence\n  [! sequence ] \u2014 Matches any characters not in sequence\n  For example: ["*2018*.json", "*2019*.json"].\n'})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"add-collections-csv",children:"Add Collections (csv)"}),"\n",(0,i.jsx)(n.p,{children:"After adding the Collection, let's add the csv Collection from the same form:"}),"\n",(0,i.jsx)("img",{src:"/img/columnar/dataset-s3-csv.png",width:"600",alt:"dataset-s3-csv"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Choose the Folder from the left Panel"}),"\n",(0,i.jsx)(n.li,{children:"Choose the file type on the right Panel"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Lets see the options here:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"}),": The Folder name is chosen for you, and you can change that if you want."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"File Filter"}),": Discussed above."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Headers Switch"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ON"}),": Every file has a header"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"OFF"}),": Every file has no headers","\n",(0,i.jsxs)(n.admonition,{title:"Header",type:"info",children:[(0,i.jsx)("img",{src:"/img/columnar/headers.png",width:"600",alt:"headers"}),(0,i.jsx)(n.p,{children:"The first row is the header."})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema Expression"}),": Describes the schema of the CSV file. Example as shown in the pic."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"post-add-collection",children:"Post Add Collection"}),"\n",(0,i.jsx)(n.p,{children:"Once Collections have been added:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Refresh"})," button on the Links Table ToolBar."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Refresh"})," action does the following:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fetches the ",(0,i.jsx)(n.strong,{children:"item count"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fetches one ",(0,i.jsx)(n.strong,{children:"sample document"})," and attaches it to the Collection"]}),"\n",(0,i.jsxs)(n.li,{children:["Fetches the ",(0,i.jsx)(n.strong,{children:"schema"})," for that Collection and attaches it to the Collection",(0,i.jsx)("br",{}),"\nThis is an expensive operation and need to be performed just once."]}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The UI now will show:\n",(0,i.jsx)(n.img,{alt:"database-ui-afer-s3",src:s(439).Z+"",width:"3072",height:"1722"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},439:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/database-ui-afer-s3-35e73957b9a6ff22f614c7abac2c23a3.png"},2791:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/link-add-s3-after-567d1cd610c2cc89b8dcb7d4d937c18f.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var i=s(7294);const t={},l=i.createContext(t);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);