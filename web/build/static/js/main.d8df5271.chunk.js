(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(8),l=a.n(o),r=(a(81),a(22)),i=a(10),s=a(14),u=a(67),m=a.n(u),d=a(63),f=a.n(d),p=a(61),b=a.n(p),E=(a(82),a(62)),g=a.n(E).a.create({baseURL:"http://redecolab-com.umbler.net"});var h=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){g.get("connection").then((function(e){var t=e.data.total;o(t)}))}),[]),c.a.createElement("div",{id:"page-landing"},c.a.createElement("div",{id:"page-landing-content",className:"container"},c.a.createElement("div",{className:"logo-container"},c.a.createElement("img",{src:b.a,alt:"",className:"logo-img"}),c.a.createElement("h2",{className:"descricao"},"Ideias, Prototipagem e Empreendedorismo"," ")),c.a.createElement("div",{className:"buttons-container"},c.a.createElement(r.b,{to:"/cadastrar",className:"register"},c.a.createElement(f.a,{style:{fontSize:32}}),"Registrar"),c.a.createElement(r.b,{to:"/buscar",className:"search"},c.a.createElement(m.a,{style:{fontSize:32}}),"Buscar")),c.a.createElement("span",{className:"total-connections"},"Total de ",a," conex\xf5es j\xe1 realizadas")))},v=a(69),j=a.n(v),O=a(68),k=a.n(O),w=(a(106),function(e){return c.a.createElement("header",{className:"page-header"},c.a.createElement("div",{className:"top-bar-container"},c.a.createElement(r.b,{to:"/"},c.a.createElement(j.a,{style:{fontSize:32}})),c.a.createElement("img",{src:k.a,alt:"logo ipe lab"})),c.a.createElement("div",{className:"header-content"},c.a.createElement("strong",null,e.title),e.children))}),S=(a(107),a(25)),N=(a(108),function(e){var t=e.label,a=e.name,n=Object(S.a)(e,["label","name"]);return c.a.createElement("div",{className:"input-block"},c.a.createElement("label",{htmlFor:a},t),c.a.createElement("input",Object.assign({type:"text",id:a},n)))}),C=a(70),y=a.n(C),x=(a(110),function(e){var t=e.label,a=e.name,n=Object(S.a)(e,["label","name"]);return c.a.createElement("div",{className:"input-block"},c.a.createElement("label",{htmlFor:a},t),c.a.createElement(y.a,Object.assign({id:a},n,{mask:"(99)99999-9999",maskChar:" "})))}),W=(a(111),function(e){var t=e.label,a=e.name,n=Object(S.a)(e,["label","name"]);return c.a.createElement("div",{className:"textarea-block"},c.a.createElement("label",{htmlFor:a},t),c.a.createElement("textarea",Object.assign({id:a},n)))}),F=a(148),z=a(153),A=a(150),L=a(149),P=a(154),R=a(155),T=a(147),U=a(152),B=(a(112),Object(T.a)((function(e){return Object(U.a)({formControl:{margin:5,minWidth:"100%",fontWeight:400,fontSize:40},chipControl:{fontSize:15}})}))),D=function(e){var t=e.label,a=(e.name,e.options),o=e.parentFunction,l=(Object(S.a)(e,["label","name","options","parentFunction"]),Object(n.useState)([])),r=Object(s.a)(l,2),i=r[0],u=r[1],m=B();Object(n.useEffect)((function(){o(i)}),[i]);return c.a.createElement("div",{className:"select-block"},c.a.createElement(F.a,{className:m.formControl},c.a.createElement(z.a,{id:"demo-mutiple-chip-label"},t),c.a.createElement(A.a,{className:"select",multiple:!0,value:i,onChange:function(e){u(e.target.value)},onMouseDown:function(e){e.stopPropagation()},input:c.a.createElement(L.a,{id:"select-multiple-chip"}),renderValue:function(e){return c.a.createElement("div",null,e.map((function(e){return c.a.createElement(P.a,{className:m.chipControl,key:e,label:e,variant:"outlined"})})))}},a.map((function(e){return c.a.createElement(R.a,{key:e.id,value:e.name,className:m.chipControl},e.name)})))))},I=Object(i.f)((function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(""),r=Object(s.a)(l,2),u=r[0],m=r[1],d=Object(n.useState)(""),f=Object(s.a)(d,2),p=f[0],b=f[1],E=Object(n.useState)(""),h=Object(s.a)(E,2),v=h[0],j=h[1],O=Object(n.useState)(""),k=Object(s.a)(O,2),S=k[0],C=k[1],y=Object(n.useState)([]),F=Object(s.a)(y,2),z=F[0],A=F[1];Object(n.useEffect)((function(){g.get("skill").then((function(e){A(e.data)}))}),[]);var L=Object(i.e)();return c.a.createElement("div",{id:"page-contact-register"},c.a.createElement(w,{title:"Cadastrar um novo contato"}),c.a.createElement("main",null,c.a.createElement("form",{onSubmit:function(e){g.post("/contact",{name:a,email:u,phone:p,description:v,skills:S}),e.preventDefault(),console.log({name:a,email:u,phone:p,description:v,skill:S}),L.push("/")}},c.a.createElement("fieldset",null,c.a.createElement("legend",null,"Seus dados"),c.a.createElement(N,{name:"name",label:"Nome completo",value:a,onChange:function(e){o(e.target.value)}}),c.a.createElement(N,{name:"email",label:"Email",type:"email",value:u,onChange:function(e){m(e.target.value)}}),c.a.createElement(x,{name:"phone",label:"Telefone",type:"phone",value:p,onChange:function(e){b(e.target.value)}}),c.a.createElement(W,{name:"description",label:"Descri\xe7\xe3o",placeholder:"Fale um pouco sobre voc\xea",value:v,onChange:function(e){j(e.target.value)}})),c.a.createElement("fieldset",null,c.a.createElement("legend",null,"Sobre suas habilidades"),c.a.createElement(D,{name:"skill",label:"Habilidade",value:S,parentFunction:function(e){C(e)},options:z})),c.a.createElement("footer",null,c.a.createElement("button",{type:"submit"},"Salvar cadastro")))))})),H=(a(113),a(114),function(e){var t=e.contact,a="https://api.whatsapp.com/send?phone=55"+t.phone+"&text=Ol\xe1, encontrei seu contato pelo Colab e gostaria de conversar!";function n(e){console.log(e),g.post("contact/"+e+"/connection/",{})}return c.a.createElement("article",{className:"contact-item"},c.a.createElement("header",null,c.a.createElement("img",{src:"https://icon-library.com/images/user-png-icon/user-png-icon-8.jpg",alt:"user"}),c.a.createElement("div",null,c.a.createElement("strong",null,t.name),t.skills&&t.skills.map((function(e){return c.a.createElement("span",null,e.name)})))),c.a.createElement("p",null,t.description),c.a.createElement("footer",null,c.a.createElement("p",{onClick:function(){return n(t.id)}},"Email:",c.a.createElement("strong",null,c.a.createElement("a",{href:"mailto: {contact.email}"},t.email))),c.a.createElement("button",{onClick:function(){return n(t.id)}},c.a.createElement("a",{target:"_blank",href:a},c.a.createElement("img",{src:"https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-icone-1.png",alt:"Whatsapp"}),c.a.createElement("p",null,"Entrar em contato")))))});var J=function(){var e=Object(n.useState)([{id:0,name:"",description:null,phone:"",email:""}]),t=Object(s.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)([]),r=Object(s.a)(l,2),i=r[0],u=r[1],m=Object(n.useState)([]),d=Object(s.a)(m,2),f=d[0],p=d[1];return Object(n.useEffect)((function(){}),[]),Object(n.useEffect)((function(){g.get("skill").then((function(e){return u(e.data),e.data})).then((function(e){var t="?&skill="+e.map((function(e){return e.name})).join("&skill=");g.get("contact"+t).then((function(e){o(e.data)}))}))}),[]),Object(n.useEffect)((function(){console.log("use",f);var e="?&skill="+f.join("&skill=");g.get("contact"+e).then((function(e){console.log(e.data,"response contatos"),o(e.data)})).catch((function(e){return console.log(e)})),console.log("SS and LC",f,a)}),[f]),Object(n.useEffect)((function(){console.log("lista de contatos",a)}),[a]),c.a.createElement("div",{id:"page-contact-list",className:"container"},c.a.createElement(w,{title:"Estes s\xe3o os contatos dispon\xedveis"},c.a.createElement("form",{id:"search-contacts"},c.a.createElement(D,{name:"skill",label:"Habilidade",options:i,parentFunction:function(e){console.log("skill selecionada",e),p(e)}}))),c.a.createElement("main",null,a.map((function(e){return c.a.createElement("div",null,c.a.createElement(H,{contact:e}))}))))};var M=function(){return c.a.createElement(r.a,null,c.a.createElement(i.a,{path:"/",exact:!0,component:h}),c.a.createElement(i.a,{path:"/cadastrar",exact:!0,component:I}),c.a.createElement(i.a,{path:"/buscar",exact:!0,component:J}))};var _=function(){return c.a.createElement(M,null)},V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");V?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$(t,e)}))}}()},61:function(e,t,a){e.exports=a.p+"static/media/Logo_IPElab.710c395a.png"},68:function(e,t,a){e.exports=a.p+"static/media/logo.243fcdd6.png"},76:function(e,t,a){e.exports=a(115)},81:function(e,t,a){},82:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.d8df5271.chunk.js.map