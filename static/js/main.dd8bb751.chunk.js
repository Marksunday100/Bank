(this.webpackJsonpbanking=this.webpackJsonpbanking||[]).push([[0],{25:function(n,e,t){},36:function(n,e,t){},42:function(n,e,t){},43:function(n,e,t){},44:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var a=t(2),o=t(31),r=t.n(o),c=t(11),i=(t(36),t(10)),l=t(3),b=["btn--primary","btn--outline","btn--test"],s=["btn--medium","btn--large"],d=function(n){var e=n.children,t=n.type,a=n.onClick,o=n.buttonStyle,r=n.buttonSize,c=b.includes(o)?o:b[0],d=s.includes(r)?r:s[0];return Object(l.jsx)(i.b,{to:"/transfer",className:"btn-mobile",children:Object(l.jsx)("button",{className:"btn ".concat(c," ").concat(d),onClick:a,type:t,children:e})})};t(42);var u=function(){var n=Object(a.useState)(!1),e=Object(c.a)(n,2),t=e[0],o=e[1],r=Object(a.useState)(!0),b=Object(c.a)(r,2),s=b[0],u=b[1],p=function(){return o(!1)},m=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(a.useEffect)((function(){m()}),[]),window.addEventListener("resize",m),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsxs)("div",{className:"navbar-container",children:[Object(l.jsxs)(i.b,{to:"/",className:"navbar-logo",onClick:p,children:["Sparks",Object(l.jsx)("i",{class:"fab fa-typo3"})]}),Object(l.jsx)("div",{className:"menu-icon",onClick:function(){return o(!t)},children:Object(l.jsx)("i",{className:t?"fas fa-times":"fas fa-bars"})}),Object(l.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{to:"/",className:"nav-links",onClick:p,children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{to:"/create-user",className:"nav-links",onClick:p,children:"Create User"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{to:"/allOurCustomers",className:"nav-links",onClick:p,children:"View Customers"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/transfer",className:"nav-links-mobile",onClick:p,children:"Transfer Money"})})]}),s&&Object(l.jsx)(d,{buttonStyle:"btn--outline",children:"Transfer Money"})]})})})};t(25),t(43);var p=function(n){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("li",{className:"cards__item",children:Object(l.jsxs)(i.b,{className:"cards__item__link",to:n.path,children:[Object(l.jsx)("figure",{className:"cards__item__pic-wrap","data-category":n.label,children:Object(l.jsx)("img",{className:"cards__item__img",alt:"Travel Image",src:n.src})}),Object(l.jsx)("div",{className:"cards__item__info",children:Object(l.jsx)("h5",{className:"cards__item__text",children:n.text})})]})})})};var m=function(){return Object(l.jsxs)("div",{className:"cards",children:[Object(l.jsx)("h1",{children:"Our Services!"}),Object(l.jsx)("div",{className:"cards__container",children:Object(l.jsxs)("div",{className:"cards__wrapper",children:[Object(l.jsx)("ul",{className:"cards__items"}),Object(l.jsxs)("ul",{className:"cards__items",children:[Object(l.jsx)(p,{src:"images/deposit.jpg",text:"Deposit money securely "}),Object(l.jsx)(p,{src:"images/withdraw.png",text:"Withdrawal of money at your own convenience"}),Object(l.jsx)(p,{src:"images/transfer.png",text:"Transfer money using the account number"})]})]})})]})};t(44);var j=function(){return Object(l.jsxs)("div",{className:"hero-container",children:[Object(l.jsx)("video",{src:"/videos/coins.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(l.jsx)("h1",{children:"Sparks Banking"}),Object(l.jsx)("p",{children:"Convient and easy Banking"}),Object(l.jsxs)("div",{className:"hero-btns",children:[Object(l.jsx)(d,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"GET STARTED"}),Object(l.jsxs)(d,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:"/transfer",children:["Transfer Money",Object(l.jsx)("i",{className:"far fa-play-circle"})]})]})]})};var x,g=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(m,{})]})},f=t(7),O=t(16),h=t(1),v=t(28),y=(t(48),v.a.initializeApp({apiKey:"AIzaSyAvGtymTc72Bihzu0Qb18yW10vCY9ZZL5Q",authDomain:"bankingapp-18c5a.firebaseapp.com",projectId:"bankingapp-18c5a",storageBucket:"bankingapp-18c5a.appspot.com",messagingSenderId:"1053610683601",appId:"1:1053610683601:web:0ef4eb3c8f396c386d69f0"}).firestore());var k,N=Object(h.a)(x||(x=Object(O.a)(['\ndisplay: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  background: rgb(72, 202, 228);\n  background: linear-gradient(\n    180deg,\n    rgba(72, 202, 228, 1) 0%,\n    rgba(173, 232, 244, 1) 50%,\n    rgba(202, 240, 248, 1) 100%\n  );\n  font-family: "Roboto", sans-serif;\n  h1 {\n    text-align: center;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    font-family: "Roboto", sans-serif;\n    font-size: 3rem;\n    color: var(--star-command-blue);\n    \n  }\n  @media screen and (max-width: 400px) {\n    h1 {\n      font-size: 2.5rem;\n    }\n  }\n  .table {\n    display: table;\n    overflow: scroll;\n    table {\n      position: absolute;\n      left: 50%;\n      top: 60%;\n      transform: translate(-50%, -50%);\n      table-layout: fixed;\n      color: var(--powder-blue);\n      border-collapse: collapse;\n      border: 1px solid #bdc3c7;\n      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);\n      thead {\n        background-color: var(--navy-blue);\n        tr {\n          transition: all .2s ease-in;\n          cursor: pointer;\n          header{\n            background-color: #16a085;\n            color: #fff;\n        }\n          td {\n            padding: 12px;\n            text-align: left;\n            font-weight: 700;\n            border-bottom: 1px solid #ddd;\n            ion-icon {\n              font-size: 20px;\n            }\n          }\n        }\n      }\n      \n      tbody {\n        background-color: var(--cerulean-crayola);\n        tr {\n          a{\n            color: #BF0000;\n            transition: all 0.3s ease;\n          }\n          a:hover {\n            text-decoration: underline;\n          }\n          td {\n            padding: 12px;\n            border-bottom: 1px solid #ddd;\n            text-align: right;\n          }\n        }\n        tr:hover {\n          background-color: #f5f5f5;\n          transform: scale(1.02);\n          box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);\n      }\n        .light {\n          background-color: var(--sky-blue-crayola);\n        }\n      }\n    }\n  }\n']))),w=function(){var n=Object(a.useState)([]),e=Object(c.a)(n,2),t=e[0],o=e[1];Object(a.useEffect)((function(){r()}),[]);var r=function(){y.collection("users").orderBy("name").onSnapshot((function(n){return o(n.docs.map((function(n){return{id:n.id,data:n.data()}})))}))};return Object(h.b)("div",{className:"allOurCustomers",css:N},Object(h.b)("h1",null,"Our Valuable Customers"),Object(h.b)("div",{className:"table"},Object(h.b)("table",null,Object(h.b)("thead",null,Object(h.b)("tr",{id:"header"},Object(h.b)("td",null,"UID"),Object(h.b)("td",null,"Name"),Object(h.b)("td",null,"Email"),Object(h.b)("td",null,"Account Number"),Object(h.b)("td",null,"Current Balance"),Object(h.b)("td",null,Object(h.b)("ion-icon",{name:"cash-outline"})))),Object(h.b)("tbody",null,t.map((function(n,e){return Object(h.b)("tr",{key:"id".concat(e),className:e%2===0?"":"light"},Object(h.b)("td",null,e+1),Object(h.b)("td",null,n.data.name),Object(h.b)("td",null,n.data.email),Object(h.b)("td",null,n.data.accountno),Object(h.b)("td",null,n.data.balance),Object(h.b)("td",null,Object(h.b)(i.b,{to:"/transfer"},"Transfer Money")))}))))))},C=t(5);var S,_=Object(h.a)(k||(k=Object(O.a)(['\n{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  background: url(\'/images/img-home.jpg\') center center/cover no-repeat;\n  \n}\nimg {\n  object-fit: cover ;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  opacity: 0.5;\n  \n}\n.container\n{\nheight: 100%;\nwidth: 100%;\nbackground-position: center;\nbackground-size: cover;\nposition: absolute;\n}\n\n#login-form\n{\n  display: inline-block;\n  margin-left: 34% !important;\n  margin-right:auto;\n}\n\n.form-box\n{\nwidth:550px;\nheight:590px;\nposition: relative;\nmargin:7% auto;\nbackground:rgba(103,128,159,1);\npadding:75px;\nh1 {\nwidth: 85%;\npadding: 15px 35px;\ncursor: pointer;\ndisplay: block;\n\nbackground: #F3C693;\nborder: 0;\noutline: none;\nborder-radius: 10px;\n  text-align: center;\n  margin-top: -17px; \n  margin-left: 20px;\n  font-size: 25px;\n  color: var(--star-command-blue); \n}\n}\n.button-box\n{\n\nwidth:220px;\nmargin:0px auto;\nposition:relative;\nbox-shadow: 0 0 0px 0px #ff61241f;\nborder-radius: 30px;\n}\n\n\n#btn\n{\ntop: 0;\nleft:0;\nposition: absolute;\nwidth: 110px;\nheight: 100%;\nbackground: #F3C693;\nborder-radius: 30px;\ntransition: .5s;\n}\n.input-group-login\n{\ntop: 150px;\nposition:absolute;\nwidth:280px;\ntransition:.5s;\n.label\n{\n  font-size: 20px;\n  padding: 10px;\n}\n\n\n}\n.input-group-register\n{\n  top: 120px;\nposition:absolute;\nwidth:280px;\ntransition:.5s;\n}\n.input-field\n{\nwidth: 100%;\nheight: 50px;\nfont-family: "Verdana", sans-serif;\npadding:10px 0;\nmargin:5px 0;\nborder-left:3px solid #999;\nborder-top:3px solid #999;\nborder-right:3px solid #999;\nborder-bottom: 3px solid #999;\noutline:none;\nbackground: transparent;\n}\n.submit-btn\n{\nwidth: 85%;\nfont-size: 20px;\npadding: 15px 35px;\ncursor: pointer;\ndisplay: block;\nmargin: auto;\nbackground: #F3C693;\nborder: 0;\noutline: none;\nborder-radius: 10px;\n}\n.check-box\n{\nmargin: 30px 10px 34px 0;\n}\nspan\n{\ncolor:#777;\nfont-size:12px;\nbottom:68px;\nposition:absolute;\n}\n#login\n{\nfont-size:20px;\nfont-family: "Georgia", sans-serif;\npadding:0;\nleft:120px;\n}\n#login input\n{\ncolor:black;\nfont-size:20px;\n}\n\n']))),z=function(){var n=Object(a.useState)({name:"",email:"",accountno:"",balance:"",db:{}}),e=Object(c.a)(n,2),t=e[0],o=e[1];return Object(h.b)("div",{class:"container",css:_},Object(h.b)("img",{src:"/images/img-2.jpg"}),Object(h.b)("div",{id:"login-form",class:"login-page"},Object(h.b)("div",{class:"form-box"},Object(h.b)("h1",null,"Add Customer Details"),Object(h.b)("form",{id:"login",class:"input-group-login",onSubmit:function(n){n.preventDefault(),t.db[t.accountno]=[t.name,t.email,t.accountno,t.balance],function(n){var e=Object(c.a)(n,4),t=e[0],a=e[1],o=e[2],r=e[3];y.collection("users").add({name:t,email:a,accountno:o,balance:r})}(t.db[t.accountno]),o(Object(C.a)(Object(C.a)({},t),{},{name:"",email:"",accountno:"",balance:""}))}},Object(h.b)("b",null,Object(h.b)("label",{htmlFor:"name",className:"label"},"Enter Full Name:")),Object(h.b)("input",{type:"text",name:"name",class:"input-field",value:t.name,placeholder:"Full Name",onChange:function(n){return o(Object(C.a)(Object(C.a)({},t),{},{name:n.target.value}))}}),Object(h.b)("b",null,Object(h.b)("label",{htmlFor:"email",className:"label"},"Enter email ID:")),Object(h.b)("br",null),Object(h.b)("input",{type:"text",name:"email",class:"input-field",value:t.email,placeholder:"Email address",onChange:function(n){return o(Object(C.a)(Object(C.a)({},t),{},{email:n.target.value}))}}),Object(h.b)("b",null,Object(h.b)("label",{htmlFor:"account-no",className:"label"},"Enter Account No:"))," ",Object(h.b)("br",null),Object(h.b)("input",{type:"number",min:1,name:"account-no",class:"input-field",value:t.accountno,placeholder:"Account Number",onChange:function(n){return o(Object(C.a)(Object(C.a)({},t),{},{accountno:n.target.value}))}}),Object(h.b)("b",null,Object(h.b)("label",{htmlFor:"balance",className:"label"},"Enter Balance:"))," ",Object(h.b)("br",null),Object(h.b)("input",{type:"number",min:1,name:"balance",class:"input-field",value:t.balance,placeholder:"Balance",onChange:function(n){return o(Object(C.a)(Object(C.a)({},t),{},{balance:n.target.value}))}}),Object(h.b)("br",null),Object(h.b)("br",null),Object(h.b)("button",{type:"submit",class:"submit-btn"},Object(h.b)("b",null,"Submit "))))))};var F,T=Object(h.a)(S||(S=Object(O.a)(['\n{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  background: url(\'/images/img-home.jpg\') center center/cover no-repeat;\n  \n}\nimg {\n  object-fit: cover ;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  opacity: 0.5;\n  \n}\n.container\n{\nheight: 100%;\nwidth: 100%;\nbackground-position: center;\nbackground-size: cover;\nposition: absolute;\n}\n\n#login-form\n{\n  display: inline-block;\n  margin-left: 34% !important;\n  margin-right:auto;\n}\n\n.form-box\n{\nwidth:550px;\nheight:550px;\nposition: relative;\nmargin:7% auto;\nbackground:rgba(103,128,159,1);\npadding:75px;\nh1 {\nwidth: 85%;\npadding: 15px 35px;\ncursor: pointer;\ndisplay: block;\n\nbackground: #F3C693;\nborder: 0;\noutline: none;\nborder-radius: 10px;\n  text-align: center;\n  margin-top: -17px; \n  margin-left: 20px;\n  font-size: 25px;\n  color: var(--star-command-blue); \n}\n}\n.button-box\n{\n\nwidth:220px;\nmargin:0px auto;\nposition:relative;\nbox-shadow: 0 0 0px 0px #ff61241f;\nborder-radius: 30px;\n}\n\n\n#btn\n{\ntop: 0;\nleft:0;\nposition: absolute;\nwidth: 110px;\nheight: 100%;\nbackground: #F3C693;\nborder-radius: 30px;\ntransition: .5s;\n}\n.input-group-login\n{\ntop: 150px;\nposition:absolute;\nwidth:280px;\ntransition:.5s;\n.label\n{\n  font-size: 20px;\n  padding: 10px;\n}\n\n\n}\n.input-group-register\n{\n  top: 120px;\nposition:absolute;\nwidth:280px;\ntransition:.5s;\n}\n.input-field\n{\nwidth: 100%;\nheight: 50px;\nfont-family: "Verdana", sans-serif;\npadding:10px 0;\nmargin:5px 0;\nborder-left:3px solid #999;\nborder-top:3px solid #999;\nborder-right:3px solid #999;\nborder-bottom: 3px solid #999;\noutline:none;\nbackground: transparent;\n}\n.submit-btn\n{\nwidth: 85%;\nfont-size: 20px;\npadding: 15px 35px;\ncursor: pointer;\ndisplay: block;\nmargin: auto;\nbackground: #F3C691;\nborder: 0;\noutline: none;\nborder-radius: 10px;\n}\n.check-box\n{\nmargin: 30px 10px 34px 0;\n}\nspan\n{\ncolor:#777;\nfont-size:12px;\nbottom:68px;\nposition:absolute;\n}\n#login\n{\nfont-size:20px;\nfont-family: "Georgia", sans-serif;\npadding:0;\nleft:120px;\n}\n#login input\n{\ncolor:black;\nfont-size:20px;\n}\n\n']))),A=function(){var n=Object(a.useState)({receiver:"",sender:"",amount:"",accounts:[]}),e=Object(c.a)(n,2),t=e[0],o=e[1],r=Object(f.f)();return Object(a.useEffect)((function(){y.collection("users").onSnapshot((function(n){o(Object(C.a)(Object(C.a)({},t),{},{accounts:n.docs.map((function(n){return{id:n.id,data:n.data()}}))}))}))}),[]),Object(h.b)("div",{class:"container",css:T},Object(h.b)("img",{src:"/images/img-2.jpg"}),Object(h.b)("div",{id:"login-form",class:"login-page"},Object(h.b)("div",{class:"form-box"},Object(h.b)("h1",null,"Transfer Money"),Object(h.b)("form",{id:"login",class:"input-group-login",onSubmit:function(n){n.preventDefault();for(var e,a,c,i,l=!1,b=!1,s=[0,0],d=0;d<t.accounts.length-1;d++){if(t.receiver===t.sender){alert("Payer's and Reciever's account numbers cannot be same!"),o(Object(C.a)(Object(C.a)({},t),{},{receiver:"",sender:"",amount:""}));break}t.accounts[d].data.accountno===t.sender&&(l=!0,e=d),t.accounts[d].data.accountno===t.receiver&&(b=!0,s=d)}l?b?Number(t.accounts[e].data.balance)<Number(t.amount)?(alert("Insufficient Balance"),o(Object(C.a)(Object(C.a)({},t),{},{receiver:"",sender:"",amount:""}))):(!function(n,e,t,a,o){y.collection("users").doc(n).update({balance:Number(e)-Number(o)}),y.collection("users").doc(t).update({balance:Number(a)+Number(o)})}(t.accounts[e].id,t.accounts[e].data.balance,t.accounts[s].id,t.accounts[s].data.balance,t.amount),a=t.amount,c=t.receiver,i=t.sender,y.collection("transactions").add({receiver:a,sender:c,amount:i,createdAt:v.a.firestore.FieldValue.serverTimestamp()}),o(Object(C.a)(Object(C.a)({},t),{},{receiver:"",sender:"",amount:""})),r.replace("/transactions")):alert("Check Payer's account number!"):alert("Check Reciever's account number!")}},Object(h.b)("b",null,Object(h.b)("label",{htmlFor:"sender",className:"label"},"Transfer from:")),Object(h.b)("input",{type:"number",name:"sender",class:"input-field",value:t.sender,onChange:function(n){return o(Object(C.a)(Object(C.a)({},t),{},{sender:n.target.value}))}}),Object(h.b)("b",null,Object(h.b)("label",{htmlFor:"receiver",className:"label"},"Transfer to:")),Object(h.b)("br",null),Object(h.b)("input",{type:"number",name:"receiver",class:"input-field",value:t.receiver,onChange:function(n){return o(Object(C.a)(Object(C.a)({},t),{},{receiver:n.target.value}))}}),Object(h.b)("b",null,Object(h.b)("label",{htmlFor:"from",className:"label"},"Enter Amount:"))," ",Object(h.b)("br",null),Object(h.b)("input",{type:"number",min:1,name:"sender",class:"input-field",value:t.amount,onChange:function(n){return o(Object(C.a)(Object(C.a)({},t),{},{amount:n.target.value}))}}),Object(h.b)("br",null),Object(h.b)("br",null),Object(h.b)("button",{type:"submit",class:"submit-btn"},Object(h.b)("b",null,"Transfer "))))))};var D=Object(h.a)(F||(F=Object(O.a)(['\ndisplay: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  background: rgb(72, 202, 228);\n  background: linear-gradient(\n    180deg,\n    rgba(72, 202, 228, 1) 0%,\n    rgba(173, 232, 244, 1) 50%,\n    rgba(202, 240, 248, 1) 100%\n  );\n  \n  font-family: "Roboto", sans-serif;\n  h1 {\n    text-align: center;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    font-family: "Roboto", sans-serif;\n    font-size: 3rem;\n    color: var(--star-command-blue);\n    \n  }\n  @media screen and (max-width: 400px) {\n    h1 {\n      font-size: 2.5rem;\n    }\n  }\n  .table {\n    display: table;\n    overflow: scroll;\n    table {\n      position: absolute;\n      left: 50%;\n      top: 60%;\n      transform: translate(-50%, -50%);\n      table-layout: fixed;\n      color: var(--powder-blue);\n      border-collapse: collapse;\n      border: 1px solid #bdc3c7;\n      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);\n      thead {\n        background-color: var(--navy-blue);\n        tr {\n          transition: all .2s ease-in;\n          cursor: pointer;\n          header{\n            background-color: #16a085;\n            color: #fff;\n        }\n          td {\n            padding: 20px;\n            text-align: left;\n            font-weight: 700;\n            border-bottom: 1px solid #ddd;\n            ion-icon {\n              font-size: 20px;\n            }\n          }\n        }\n      }\n      \n      tbody {\n        background-color: var(--cerulean-crayola);\n        tr {\n          a{\n            color: #BF0000;\n            transition: all 0.3s ease;\n          }\n          a:hover {\n            text-decoration: underline;\n          }\n          td {\n            padding: 12px;\n            border-bottom: 1px solid #ddd;\n            text-align: right;\n          }\n        }\n        tr:hover {\n          background-color: #f5f5f5;\n          transform: scale(1.02);\n          box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2), -1px -1px 8px rgba(0, 0, 0, 0.2);\n      }\n        .light {\n          background-color: var(--sky-blue-crayola);\n        }\n      }\n    }\n  }\n']))),E=function(){var n=Object(a.useState)([]),e=Object(c.a)(n,2),t=e[0],o=e[1];Object(a.useEffect)((function(){r()}),[]);var r=function(){y.collection("transactions").onSnapshot((function(n){return o(n.docs.map((function(n){return{id:n.id,data:n.data()}})))}))};return Object(h.b)("div",{className:"transactions",css:D},Object(h.b)("h1",null,"Transaction History"),Object(h.b)("div",{className:"table"},Object(h.b)("table",null,Object(h.b)("thead",null,Object(h.b)("tr",{key:"id-1"},Object(h.b)("td",null,"UID"),Object(h.b)("td",null,"Payer"),Object(h.b)("td",null,"Receiver"),Object(h.b)("td",null,"Amount"),Object(h.b)("td",null,"Created At"))),Object(h.b)("tbody",null,t.map((function(n,e){var t,a,o,r;return Object(h.b)("tr",{key:"id".concat(e),className:e%2===0?"":"light"},Object(h.b)("td",null,e+1),Object(h.b)("td",null,n.data.sender),Object(h.b)("td",null,n.data.receiver),Object(h.b)("td",null,n.data.amount),Object(h.b)("td",null,"".concat((null===(t=n.data.createdAt)||void 0===t?void 0:t.toDate().toDateString())?null===(a=n.data.createdAt)||void 0===a?void 0:a.toDate().toDateString():"Not"," ").concat((null===(o=n.data.createdAt)||void 0===o?void 0:o.toDate().toLocaleTimeString("en-US"))?null===(r=n.data.createdAt)||void 0===r?void 0:r.toDate().toLocaleTimeString("en-US"):"Available")))}))))))};var B=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(u,{}),Object(l.jsxs)(f.c,{children:[Object(l.jsx)(f.a,{path:"/",exact:!0,component:g}),Object(l.jsx)(f.a,{path:"/allOurCustomers",component:w}),Object(l.jsx)(f.a,{path:"/create-user",component:z}),Object(l.jsx)(f.a,{path:"/transfer",component:A}),Object(l.jsx)(f.a,{path:"/transactions",component:E})]})]})})};r.a.render(Object(l.jsx)(B,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.dd8bb751.chunk.js.map