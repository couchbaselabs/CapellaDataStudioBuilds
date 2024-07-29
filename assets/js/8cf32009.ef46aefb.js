"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5160],{8638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>r});var o=t(5893),s=t(1151);const i={},c="Columnar Instance",a={id:"Connections/Columnar",title:"Columnar Instance",description:"Connect to a Capella Columnar Instance",source:"@site/docs/Connections/3.Columnar.md",sourceDirName:"Connections",slug:"/Connections/Columnar",permalink:"/docs/Connections/Columnar",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Self Managed Instance",permalink:"/docs/Connections/Couchbase"},next:{title:"Databases Provisioned",permalink:"/docs/category/databases-provisioned"}},l={},r=[{value:"Connecting to Capella Columnar Instances",id:"connecting-to-capella-columnar-instances",level:2},{value:"Tags",id:"tags",level:2},{value:"Connect Form",id:"connect-form",level:2},{value:"The Connection Process",id:"the-connection-process",level:2},{value:"Post Connection",id:"post-connection",level:2},{value:"The Connection Row",id:"the-connection-row",level:3},{value:"The AppBar",id:"the-appbar",level:3},{value:"The Footer Tables",id:"the-footer-tables",level:3},{value:"Active Connection",id:"active-connection",level:2},{value:"Tip",id:"tip",level:2}];function h(e){const n={admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"columnar-instance",children:"Columnar Instance"}),"\n",(0,o.jsx)(n.p,{children:"Connect to a Capella Columnar Instance"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"You do not need to create any databases in Capella Columnar before connecting"})}),"\n",(0,o.jsx)(n.h2,{id:"connecting-to-capella-columnar-instances",children:"Connecting to Capella Columnar Instances"}),"\n",(0,o.jsxs)(n.p,{children:["From the ",(0,o.jsx)(n.strong,{children:"Add Connection"})," drop-down button, choose Capella Columnar\n",(0,o.jsx)(n.img,{alt:"choose-connection",src:t(6733).Z+"",width:"3072",height:"618"})]}),"\n",(0,o.jsx)(n.h2,{id:"tags",children:"Tags"}),"\n",(0,o.jsxs)(n.p,{children:["Tags are a convenient way to classify connections and ",(0,o.jsx)(n.strong,{children:"filter"})," Connections on them. For example, they can be used to:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Classify connections as Production or Development"}),"\n",(0,o.jsx)(n.li,{children:"Classify connections by Projects"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can optionally Tag each Connection. This can be done before or after the connection is made. To configure the Tags, click on the ",(0,o.jsx)(n.strong,{children:"Configure"})," button located to the left of ",(0,o.jsx)(n.strong,{children:"Connections"}),". This will open up a Tags Dialog box:"]}),"\n",(0,o.jsx)("img",{src:"/img/connect/connect-tags.png",width:"400",alt:"Tags"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You have 10 Tags to choose from. Scroll down to see the complete list"}),"\n",(0,o.jsx)(n.li,{children:"Choose the color you are interested in and name the Tag."}),"\n",(0,o.jsx)(n.li,{children:"Do this only for the Tags you are interested in. Yiou can skip Tags. It need not be in order."}),"\n",(0,o.jsx)(n.li,{children:"Remember, you can always name the Tags and modify the connection Tag, post connection too."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"connect-form",children:"Connect Form"}),"\n",(0,o.jsx)("img",{src:"/img/connect/columnar-connect-form.png",width:"400",alt:"Self Managed Form"}),"\n",(0,o.jsx)(n.p,{children:"The above example shows a connection to a Capella Columnar Instance."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Columnar URL: Cut and paste the complete URL of your Capella Columnar instances"}),"\n",(0,o.jsx)(n.li,{children:"The userid/password are your Capella Columnar UI login"}),"\n",(0,o.jsx)(n.li,{children:"Choose the Tag (optional)"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"the-connection-process",children:"The Connection Process"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Capella DataStudio connects to the instance using the form details."}),"\n",(0,o.jsx)(n.li,{children:"It fetches the details of all the existing databases (scopes and collections)"}),"\n",(0,o.jsxs)(n.li,{children:["The list of databases is fetched ",(0,o.jsx)(n.strong,{children:"only"})," at connection time.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Any databases added from the Capella Columnar UI will not get reflected in Capella DataStudio. In this case, you will have to ",(0,o.jsx)(n.strong,{children:"refresh"})," the connection."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["All details are kept in a encrypted ",(0,o.jsx)(n.em,{children:"DataStudio Store"})," locally."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"Encryption",type:"info",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["All ",(0,o.jsx)(n.strong,{children:"passwords"})," and ",(0,o.jsx)(n.strong,{children:"secrets"})," are encrypted using the native OS encryption. On Mac, this is Keychain. Keychain uses ",(0,o.jsx)(n.strong,{children:"AES-256"})," for encryption, the strongest encryption method."]}),"\n",(0,o.jsx)(n.li,{children:"The encrypted passwords are not actually stored in Keychain. They are still stored in Capella DataStudio Local Store. Keychain is used only to provide encryption and decryption services."}),"\n"]})}),"\n",(0,o.jsx)(n.h2,{id:"post-connection",children:"Post Connection"}),"\n",(0,o.jsxs)(n.p,{children:["If your connection is successful, you will see the details in the Main Panel.\n",(0,o.jsx)(n.img,{alt:"Columnar Details",src:t(3413).Z+"",width:"3072",height:"1718"}),"\nLets now take a look at the details provided"]}),"\n",(0,o.jsx)(n.h3,{id:"the-connection-row",children:"The Connection Row"}),"\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)(n.strong,{children:"Radio Button"})," on the start of the row to choose the connection."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This now is the ",(0,o.jsx)(n.strong,{children:"Active Connection"}),"\nThe row shows the details, including the services which this instance is running.\nAt the end of the row, there are 3 action buttons:"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Refresh"}),": This deletes all the connection details from the ",(0,o.jsx)(n.em,{children:"DataStudio Store"})," and reconnects. YOu will typically be using this under these scenarios:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Databases have been added/deleted directly from the Capella UI"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Edit"}),": This only allows you to change the userid/password."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Delete"}),": This deletes all the connection details from the ",(0,o.jsx)(n.em,{children:"DataStudio Store"}),". Note that this action has no effect on the actual cluster itself."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"the-appbar",children:"The AppBar"}),"\n",(0,o.jsxs)(n.p,{children:["The AppBar shows the details of the ",(0,o.jsx)(n.strong,{children:"Active Connection"}),"\nIt also shows the ",(0,o.jsx)(n.strong,{children:"Active Database"})," (aka Bucket) and the ",(0,o.jsx)(n.strong,{children:"Active Scope"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"These are chosen randomly during the connection process."}),"\n",(0,o.jsxs)(n.li,{children:["Remember to set them from the ",(0,o.jsx)(n.strong,{children:"Databases"})," menu option fromm the NavBar"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"the-footer-tables",children:"The Footer Tables"}),"\n",(0,o.jsx)(n.p,{children:"These show some details of the instance, like the number of nodes, their CPU and RAM usage.\nThe tables also show the existing buckets."}),"\n",(0,o.jsx)(n.h2,{id:"active-connection",children:"Active Connection"}),"\n",(0,o.jsxs)(n.p,{children:["The Connection Table shows all your Connections. However, only one is ",(0,o.jsx)(n.strong,{children:"Active"})," and that is chosen by clicking on the ",(0,o.jsx)(n.strong,{children:"Radio Button"}),". Passwords are decrypted only for the Active Connection and kept in memory."]}),"\n",(0,o.jsx)(n.p,{children:"When you restart Capella DataStudio, you will notice that none of the Connections are Active. You will have to choose to activate a connection. This is due to security and the way passwords are decrypted only on the fly."}),"\n",(0,o.jsx)(n.h2,{id:"tip",children:"Tip"}),"\n",(0,o.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,o.jsxs)(n.p,{children:["Set the ",(0,o.jsx)(n.strong,{children:"Active Connection"})," Context from this UI."]})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},6733:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/choose-connection-f869bb8b66c08fb3740a5ff8ec6f5b1f.png"},3413:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/columnar-connect-details-6dad799e24a7fa081e46d2681fc53d9b.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var o=t(7294);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);