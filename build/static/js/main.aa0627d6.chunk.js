(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(14),u=t.n(o),c=(t(5),t(2)),s=t(3),l=t.n(s),i="http://localhost:3001/api/persons",m=function(){return l.a.get(i).then((function(e){return e.data}))},f=function(e){return l.a.post(i,e).then((function(e){return e.data}))},h=function(e,n){return l.a.put("".concat(i,"/").concat(e),n).then((function(e){return e.data}))},d=function(e){return l.a.delete("".concat(i,"/").concat(e)).then((function(e){return e.data}))},E=function(e){var n=e.person,t=e.setPersons,r=e.setErrorMessage;return a.a.createElement("div",null,n.name," ",n.number," ",a.a.createElement("button",{onClick:function(){return e=n.id,void(!0===window.confirm("are you sure you want to delete "+n.name+"?")&&d(e).then((function(){return m().then((function(e){r({msg:n.name+" has been deleted",error:!1}),setTimeout((function(){r(null)}),5e3),t(e)}))})).catch((function(e){r({msg:n.name+" has already been removed",error:!0}),setTimeout((function(){r(null)}),5e3)})));var e}},"delete")," ",a.a.createElement("br",null))},v=function(e){var n=e.persons,t=e.nameFilter,r=e.setPersons,o=e.setErrorMessage;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return a.a.createElement(E,{key:e.name,person:e,setPersons:r,setErrorMessage:o})}))},g=function(e){var n=e.nameFilter,t=e.handleNameFilter;return a.a.createElement("div",null,"filter shown with",a.a.createElement("input",{value:n,onChange:t})," ")},b=function(e){var n=e.persons,t=e.setPersons,o=e.setErrorMessage,u=Object(r.useState)(""),s=Object(c.a)(u,2),l=s[0],i=s[1],d=Object(r.useState)(""),E=Object(c.a)(d,2),v=E[0],g=E[1];Object(r.useEffect)((function(){m().then((function(e){t(e)}))}),[]);return a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r={name:l,number:v},a=n.filter((function(e){return e.name===l}));1===a.length?!0===window.confirm(l+"is already in the phone book are you sure you want to change their number")&&h(a[0].id,r).then((function(){return m().then((function(e){t(e),o({msg:l+" number was changed",error:!1}),setTimeout((function(){o(null)}),5e3),i(""),g("")}))})):f(r).then((function(e){t(n.concat(e)),o({msg:l+" was added",error:!1}),setTimeout((function(){o(null)}),5e3),i(""),g("")}))}},"name:",a.a.createElement("input",{value:l,onChange:function(e){i(e.target.value)}}),a.a.createElement("div",null,"number:",a.a.createElement("input",{value:v,onChange:function(e){g(e.target.value)}})),a.a.createElement("button",{type:"submit"},"save"))},p=function(e){var n=e.message;return null===n?null:n.error?a.a.createElement("div",{className:"error"},n.msg):a.a.createElement("div",{className:"success"},n.msg)},w=function(){var e=Object(r.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(r.useState)(""),s=Object(c.a)(u,2),l=s[0],i=s[1],m=Object(r.useState)(null),f=Object(c.a)(m,2),h=f[0],d=f[1];return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement("div",null,a.a.createElement(p,{message:h}),a.a.createElement(g,{nameFilter:l,handleNameFilter:function(e){i(e.target.value)}}),a.a.createElement("h2",null,"Add new"),a.a.createElement(b,{persons:t,setPersons:o,setErrorMessage:d})),a.a.createElement("form",null),a.a.createElement("h2",null,"Numbers"),a.a.createElement(v,{persons:t,nameFilter:l,setPersons:o,setErrorMessage:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,n,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.aa0627d6.chunk.js.map