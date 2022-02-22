(this["webpackJsonpgolf-locker"]=this["webpackJsonpgolf-locker"]||[]).push([[0],{174:function(e,t,n){},175:function(e,t,n){},193:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},214:function(e,t){},216:function(e,t){},226:function(e,t){},228:function(e,t){},255:function(e,t){},257:function(e,t){},258:function(e,t){},263:function(e,t){},265:function(e,t){},271:function(e,t){},273:function(e,t){},292:function(e,t){},304:function(e,t){},307:function(e,t){},403:function(e,t,n){},404:function(e,t,n){},405:function(e,t,n){"use strict";n.r(t);var c,a,s,r,i,o,l,j,u,d,b,h,x,O,p=n(0),f=n.n(p),m=n(39),g=n.n(m),v=(n(174),n(175),n(5)),y=n(11),k=n(10),w=n(8),N=n.n(w),C=(n(193),n(1)),S=f.a.createContext({}),E=function(e){var t=e.children,n=Object(p.useState)({}),c=Object(k.a)(n,2),a=c[0],s=c[1];return Object(p.useEffect)((function(){N.a.get("/api/auth/me").then((function(e){var t=e.data;return s(t)})).catch((function(e){return console.log(e)}))}),[]),Object(C.jsx)(S.Provider,{value:{user:a,setUser:s},children:t})},M=n(12),_=n(13),F=_.a.div(c||(c=Object(M.a)(["\n\tborder: 2px solid black;\n\ttext-align: center;\n\tmargin: 10px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 2%;"]))),T=_.a.img(a||(a=Object(M.a)(["\n\tbackground-color: white;\n\twidth: 140px;\n\theight: 140px;\n\tborder-radius: 30%;\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n\tmargin-left: 25px;\n\tmargin-right: 25px;\n\tmargin-top: 10px"]))),D=_.a.div(s||(s=Object(M.a)(["\n\tbackground-color: #0a613ce9;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;"]))),I=_.a.header(r||(r=Object(M.a)(["\n\tposition: fixed;\n\theight: 50px;\n\twidth: 100%;\n\tbackground-color: #095434e9;\n\tdisplay: flex;\n\tjustify-content: center;\n\tjustify-content: space-around;\n\talign-items: center;"]))),U=_.a.div(i||(i=Object(M.a)(["\n\tcolor: white;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-evenly;\n  text-decoration: none;\n\tpadding-top: 50px;"]))),P=_.a.div(o||(o=Object(M.a)(["\n\tcursor: pointer;\n\tbox-shadow: 0 0 20px rgba(0, 0, 0, .5);\n\tpadding: 2px 5px 2px 5px;\n\tbackground-color: #9edcc1e9;\n\tfont-family:'Montserrat', sans-serif;\n\tcolor: black;"]))),R=_.a.section(l||(l=Object(M.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: grey;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;"]))),A=_.a.h2(j||(j=Object(M.a)(["\n\tcolor: black;"]))),J=_.a.div(u||(u=Object(M.a)(["\n\twidth: 100%;\n\theight: 100vh;\n\tbackground-color: #064a2ce9;\t\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: white;"]))),Y=_.a.div(d||(d=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  padding: 20px;"]))),q=_.a.div(b||(b=Object(M.a)(["\n\tdisplay: flex;\n\tpadding: 20px;"]))),z=_.a.button(h||(h=Object(M.a)(["\n\tborder-radius: 1px;\n\tbackground-color: #17ab6be9;\n\tpadding: 10px 20px;\n\tborder: 1px solid black;\n\tcursor: pointer;\n\tmargin: 10px"]))),B=_.a.header(x||(x=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  font-family: 'Montserrat', sans-serif;\n\tfont-size: 45px;\n  margin-bottom: 10vh;"]))),G=_.a.div(O||(O=Object(M.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 55%;\n  padding: 10px"]))),H=function(e){var t=Object(p.useState)({username:"",password:""}),n=Object(k.a)(t,2),c=n[0],a=n[1],s=Object(p.useContext)(S).setUser;return Object(C.jsx)(J,{children:Object(C.jsxs)(Y,{className:"container",children:[Object(C.jsx)(B,{className:"title",children:"golf locker"}),Object(C.jsxs)(G,{className:"input",children:[Object(C.jsx)("label",{children:"username "}),Object(C.jsx)("input",{type:"text",placeholder:"username",onChange:function(e){return a(Object(y.a)(Object(y.a)({},c),{},{username:e.target.value}))}})]}),Object(C.jsxs)(G,{className:"input",children:[Object(C.jsx)("label",{children:"password "}),Object(C.jsx)("input",{type:"password",placeholder:"password",onChange:function(e){return a(Object(y.a)(Object(y.a)({},c),{},{password:e.target.value}))}})]}),Object(C.jsxs)(q,{children:[Object(C.jsx)(z,{onClick:function(){return N.a.post("/api/auth/login",c).then((function(t){s(t.data),e.history.push("./products")})).catch((function(e){return console.log(e)}))},type:"submit",children:"log in"}),Object(C.jsx)(z,{onClick:function(){return N.a.post("/api/auth/register",c).then((function(t){s(t.data),e.history.push("./products")})).catch((function(e){return console.log(e)}))},children:" register "})]})]})})},L=n(30),W={items:[]},K="GET_ITEMS",Q="ADD_PURCHASE",Z="DELETE_ITEM";n(202);var V,X=n(19),$=_.a.button(V||(V=Object(M.a)(["\ncursor: pointer;\nbox-shadow: 0 0 20px rgba(0, 0, 0, .5);\npadding: 5px 8px 5px 8px;\nbackground-color: #9edcc1e9;\nfont-family:'Montserrat', sans-serif\nposition: fixed;"]))),ee=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{children:Object(C.jsx)(X.b,{to:"/custom",children:Object(C.jsx)($,{children:"custom"})})})})},te=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{children:Object(C.jsx)(X.b,{to:"/products",children:Object(C.jsx)($,{children:"golf clubs"})})})})},ne=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{children:Object(C.jsx)(X.b,{to:"/bag",children:Object(C.jsx)($,{children:"my bag"})})})})},ce=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{children:Object(C.jsx)(X.b,{to:"/nodeMailer",children:Object(C.jsx)($,{children:"contact us!"})})})})},ae=function(e){var t=N.a.post("/api/auth/logout").then((function(t){return e.history.push("./")})).catch((function(e){return console.log(e)}));return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{children:Object(C.jsx)(X.b,{to:"/",children:Object(C.jsx)($,{onClick:t,children:"logout"})})})})},se=function(){var e=Object(p.useContext)(S).user,t=Object(p.useState)([]),n=Object(k.a)(t,2),c=n[0],a=n[1],s=Object(L.b)();Object(p.useEffect)((function(){N.a.get("/api/products").then((function(e){var t=e.data;return a(t)})).catch((function(e){return console.log(e)}))}),[]);var r=c.map((function(t,n){return Object(C.jsxs)(F,{className:"items",children:[Object(C.jsx)(T,{src:t.image_url,alt:"product"}),Object(C.jsx)(A,{children:t.description}),Object(C.jsx)(P,{className:"btn-1",onClick:function(){return function(t,n,c){try{N.a.post("/api/bagged/add/".concat(e.id),{description:t,usersId:n,productId:c}).then((function(t){var n=t.data;s({type:Q,payload:n}),N.a.get("/api/bagged/".concat(e.id)).then((function(e){var t=e.data;s({type:K,payload:t})}))}))}catch(a){console.log(a)}}([t.description,e.id,t.id])},children:"+"})]},n)}));return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(D,{children:[Object(C.jsxs)(I,{className:"linked",children:[Object(C.jsx)(ne,{className:"btn-1"}),Object(C.jsx)(ce,{className:"btn-1"}),Object(C.jsx)(ee,{className:"btn-1-user"}),Object(C.jsx)(ae,{className:"btn-1"})]}),Object(C.jsx)(U,{className:"map",children:r})]})})},re=(n(203),function(){var e=Object(p.useContext)(S).user,t=Object(L.c)((function(e){return e.items})),n=Object(L.b)();Object(p.useEffect)((function(){e.id&&N.a.get("/api/bagged/".concat(e.id)).then((function(e){var t=e.data;n({type:K,payload:t})})).catch((function(e){return console.log(e)}))}),[n,e.id]);var c=t.map((function(t,c){return Object(C.jsxs)(F,{children:[Object(C.jsx)(T,{src:t.image_url,alt:"pic",className:"img"}),Object(C.jsx)(A,{children:t.description}),Object(C.jsx)(P,{className:"btn-1",onClick:function(){return function(t,c){try{N.a.delete("/api/customDelete/".concat(t,"/").concat(c)).then((function(e){var t=e.data;n({type:Z,payload:t})})),N.a.get("/api/bagged/".concat(e.id)).then((function(e){var t=e.data;n({type:K,payload:t})}))}catch(a){console.log(a)}}(e.id,t.description)},children:" -"})]},c)}));return Object(C.jsxs)(D,{className:"head",children:[Object(C.jsxs)(I,{className:"links",children:[Object(C.jsx)(te,{className:"btn"}),Object(C.jsx)(ee,{className:"btn"}),Object(C.jsx)(ce,{className:"btn"}),Object(C.jsx)(ae,{className:"btn"})]}),Object(C.jsx)(U,{className:"map",children:c})]})}),ie=(n(204)("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").paymentIntents.create({amount:.51,currency:"USD",automatic_payment_methods:{enabled:!0}}),function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("header",{children:Object(C.jsx)("title",{children:"buy new golf club"})}),Object(C.jsx)("section",{children:Object(C.jsx)("form",{action:"/create-checkout-session",method:"POST",children:Object(C.jsx)("button",{type:"submit",children:"Checkout"})})})]})}),oe=function(e){var t=e.message;return Object(C.jsx)("section",{children:Object(C.jsx)("p",{children:t})})};function le(){var e=Object(p.useState)(""),t=Object(k.a)(e,2),n=t[0],c=t[1];return Object(p.useEffect)((function(){var e=new URLSearchParams(window.location.search);e.get("success")&&c("Order placed! You will receive an email confirmation."),e.get("canceled")&&c("Order canceled -- continue to shop around and checkout when you're ready.")}),[]),n?Object(C.jsx)(oe,{message:n}):Object(C.jsx)(ie,{})}n(403);var je=function(){var e=Object(p.useState)({subject:"",message:""}),t=Object(k.a)(e,2),n=t[0],c=t[1];return Object(C.jsx)(J,{children:Object(C.jsx)(R,{children:Object(C.jsxs)("div",{className:"cont",children:[Object(C.jsx)(I,{children:Object(C.jsx)(te,{})}),Object(C.jsxs)("section",{className:"box",children:[Object(C.jsx)(A,{className:"name",children:"let us know what you think!"}),Object(C.jsx)("div",{children:Object(C.jsx)("input",{placeholder:"subject",onChange:function(e){return c(Object(y.a)(Object(y.a)({},n),{},{subject:e.target.value}))},className:"input"})}),Object(C.jsx)("div",{children:Object(C.jsx)("textarea",{rows:"10",cols:"75",onChange:function(e){return c(Object(y.a)(Object(y.a)({},n),{},{message:e.target.value}))},className:"textarea"})}),Object(C.jsx)("button",{onClick:function(){return function(){var e={subject:"".concat(n.subject),email:"kirkeeng_smurf777@outlook.com",message:"".concat(n.message," Response: ").concat(n.email)};N.a.post("/api/nodeMailer",e).then((function(e){return e.sendStatus(200)})).catch((function(e){return console.log(e)}))}()},children:"Send Email"})]})]})})})},ue=n(57),de=(n(404),function(){var e=Object(p.useState)(""),t=Object(k.a)(e,2),n=t[0],c=t[1],a=Object(p.useContext)(S),s=a.user,r=a.setUser,i=Object(v.f)();return Object(C.jsx)("div",{className:"box-one",children:Object(C.jsx)("div",{className:"box-two",children:Object(C.jsxs)("div",{className:"input-container",children:[Object(C.jsx)(A,{children:"enter your username to get started"}),Object(C.jsxs)(G,{children:[Object(C.jsx)("label",{children:"username "}),Object(C.jsx)("input",{type:"username",placeholder:"enter username",value:n,onChange:function(e){return t=e.target.value,void c(t);var t}})]}),Object(C.jsxs)(q,{children:[Object(C.jsx)(z,{onClick:function(){return function(e){try{""!==e?(N.a.put("/api/auth/update/".concat(s.id),{username:e}),ue.b.success("Username updated"),c("")):ue.b.info("Please enter a valid username.")}catch(t){console.log(t)}}(n)},children:"update"}),Object(C.jsx)(ue.a,{position:"bottom-right",autoClose:2300}),Object(C.jsx)(z,{onClick:function(){window.confirm("This will delete your account")&&function(){try{N.a.delete("/api/auth/destroy/".concat(s.id)),r({}),i.push("/")}catch(e){console.log(e)}}()},children:"delete"})]})]})})})}),be=Object(C.jsxs)(v.c,{children:[Object(C.jsx)(v.a,{element:Object(C.jsx)(H,{}),path:"/"}),Object(C.jsx)(v.a,{element:Object(C.jsx)(se,{}),path:"/products"}),Object(C.jsx)(v.a,{element:Object(C.jsx)(re,{}),path:"/bag"}),Object(C.jsx)(v.a,{element:Object(C.jsx)(de,{}),path:"/custom"}),Object(C.jsx)(v.a,{element:Object(C.jsx)(le,{}),path:"/stripe"}),Object(C.jsx)(v.a,{element:Object(C.jsx)(je,{}),path:"/nodeMailer"})]});var he=function(){return Object(C.jsx)("div",{className:"app-main",children:be})},xe=n(86),Oe=n(169),pe=Object(xe.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:case Q:case Z:return Object(y.a)(Object(y.a)({},e),{},{items:t.payload});default:return e}}),Object(xe.a)(Oe.a));g.a.render(Object(C.jsx)(f.a.StrictMode,{children:Object(C.jsx)(X.a,{children:Object(C.jsx)(E,{children:Object(C.jsx)(L.a,{store:pe,children:Object(C.jsx)(he,{})})})})}),document.getElementById("root"))}},[[405,1,2]]]);
//# sourceMappingURL=main.c7762f8d.chunk.js.map