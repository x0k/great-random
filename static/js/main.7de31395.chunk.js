(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,a,t){e.exports=t(269)},269:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),i=t.n(r),o=t(97),c=t(98),s=t(99),m=t(109),u=t(100),h=t(110),d=t(32),E=t(107),v=t.n(E),f=t(108),b=t.n(f),p=t(22),g=t.n(p),k=t(18),y=t.n(k),w=t(33),C=t.n(w),N=t(34),S=t.n(N),x=t(102),T=t.n(x),j=Object(d.withStyles)({button:{width:"100%",marginBottom:10}})(function(e){var a=e.classes,t=e.children,n=e.primary,r=e.onClick;return l.a.createElement(T.a,{color:n?"primary":"default",className:a.button,onClick:r,variant:"outlined"},t)}),O=t(103),M=t.n(O),D=function(e){var a=e.label,t=e.value,n=e.onChange;return l.a.createElement(M.a,{fullWidth:!0,label:a,value:t,multiline:!0,rows:"28",margin:"normal",variant:"outlined",onChange:n})},W=t(43),q=t.n(W),B=t(105),A=t.n(B),J=t(104),G=t.n(J),I=function(e){var a=e.label,t=e.name,n=e.value,r=e.onChange,i=e.items;return l.a.createElement(G.a,{"aria-label":a,name:t,value:n,onChange:r},i.map(function(e,a){return l.a.createElement(q.a,{key:a,value:e.value,control:l.a.createElement(A.a,{color:"primary"}),label:e.label,disabled:e.disabled})}))},L=t(60),P=t.n(L),R=t(106),$=t.n(R),z=function(e){var a=e.items,t=e.onChange,n=Object.keys(a);return l.a.createElement(P.a,null,n.map(function(e){return l.a.createElement(q.a,{key:e,control:l.a.createElement($.a,{checked:a[e].value,onChange:t(e),value:e,color:"primary"}),label:a[e].label})}))},F=t(44),H=t.n(F),K=t(45),Q=t.n(K),U=t(46),V=t.n(U),X=t(28),Y=t.n(X),Z=t(16),_=t.n(Z),ee=function(e){var a=e.names,t=e.relation;return l.a.createElement(H.a,null,l.a.createElement(Q.a,null,l.a.createElement(Y.a,null,l.a.createElement(_.a,null,"Member"),l.a.createElement(_.a,null,"Tasks"),l.a.createElement(_.a,null,"Count"))),l.a.createElement(V.a,null,a.map(function(e,a){return l.a.createElement(Y.a,{key:a},l.a.createElement(_.a,{component:"th",scope:"row"},e),l.a.createElement(_.a,null,t[e].join(", ")),l.a.createElement(_.a,null,t[e].length))})))},ae=function(e){var a=e.addNumbers,t=e.answers;return l.a.createElement(H.a,null,l.a.createElement(Q.a,null,l.a.createElement(Y.a,null,a&&l.a.createElement(_.a,null,"Number"),l.a.createElement(_.a,null,"Task"),l.a.createElement(_.a,null,"Member"))),l.a.createElement(V.a,null,t.map(function(e,t){return l.a.createElement(Y.a,{key:t},a&&l.a.createElement(_.a,null,t+1),l.a.createElement(_.a,null,e.task),l.a.createElement(_.a,null,e.name))})))};function te(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[t],e[t]=n}return e}function ne(e,a,t,n,l){switch(e){case"random":return function(e,a,t,n){for(var l=0;l<Math.floor(a.length/e.length);l++){e=te(e);for(var r=0;r<e.length;r++)t.push({task:a[l*e.length+r],name:e[r]}),n[e[r]].push(l*e.length+r+1)}e=te(e);for(var i=Math.floor(a.length/e.length)*e.length;i<a.length;i++)t.push({task:a[i],name:e[i%e.length]}),n[e[i%e.length]].push(i+1)}(a,t,n,l);case"sequential":return function(e,a,t,n){for(var l=0,r=0;r<e.length;r++)for(var i=0;i<Math.ceil(a.length/e.length)-(r<a.length%e.length||a.length%e.length===0?0:1);i++)t.push({task:a[l],name:e[r]}),l++,n[e[r]].push(l)}(a,t,n,l);case"weight":return;default:return-1}}var le=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={checkboxes:{addNumbers:{label:"Show task numbers",value:!0}},distributionTypes:[{label:"Random",value:"random"},{label:"Sequential",value:"sequential"},{label:"Weight",value:"weight",disabled:!0}],names:"",tasks:"",distributionType:"random",error:!1,results:!1},t.handleChange=function(e){return function(a){t.setState(Object(o.a)({},e,a.target.value))}},t.handleCheck=function(e){return function(a,n){t.setState(function(a,t){return a.checkboxes[e].value=n,a})}},t.handleShuffle=function(e){return function(a){t.setState(function(a,t){var n=a[e].split("\n");return a[e]=te(n).join("\n"),a})}},t.handleDistribute=function(e){var a=t.state,n=a.names,l=a.tasks,r=a.distributionType,i=[],o={};n=n.split("\n"),l=l.split("\n");var c=!0,s=!1,m=void 0;try{for(var u,h=n[Symbol.iterator]();!(c=(u=h.next()).done);c=!0){o[u.value]=[]}}catch(d){s=!0,m=d}finally{try{c||null==h.return||h.return()}finally{if(s)throw m}}n.length<2||l.length<2?t.setState({error:!0}):(ne(r,n,l,i,o),t.setState({error:!1,results:{names:n,answers:i,relation:o}}))},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.classes,a=this.state,t=a.error,n=a.results,r=a.checkboxes,i=a.distributionTypes,o=r.addNumbers.value;return l.a.createElement("div",{className:"App"},l.a.createElement(v.a,{position:"static",color:"default"},l.a.createElement(b.a,null,l.a.createElement(g.a,{variant:"h6",color:"inherit"},"Great random"))),l.a.createElement(y.a,{container:!0},l.a.createElement(y.a,{item:!0,xs:3},l.a.createElement("div",{className:e.container},l.a.createElement(D,{label:"Members",value:this.state.names,onChange:this.handleChange("names")}))),l.a.createElement(y.a,{item:!0,xs:9},l.a.createElement("div",{className:e.container},l.a.createElement(D,{label:"Tasks",value:this.state.tasks,onChange:this.handleChange("tasks")}))),l.a.createElement(y.a,{item:!0,xs:3},l.a.createElement("div",{className:e.container},l.a.createElement(j,{primary:!0,onClick:this.handleDistribute},"Distribute"),l.a.createElement(j,{onClick:this.handleShuffle("names")},"Shuffle members"),l.a.createElement(j,{onClick:this.handleShuffle("tasks")},"Shuffle tasks"))),l.a.createElement(y.a,{item:!0,xs:3},l.a.createElement("div",{className:e.container},l.a.createElement(S.a,{component:"fieldset"},l.a.createElement(C.a,{component:"legend"},"Distribution type"),l.a.createElement(I,{label:"DistributionType",name:"distributionType",value:this.state.distributionType,onChange:this.handleChange("distributionType"),items:i})))),l.a.createElement(y.a,{item:!0,xs:3},l.a.createElement("div",{className:e.container},l.a.createElement(S.a,{component:"fieldset"},l.a.createElement(C.a,{component:"legend"},"Parameters"),l.a.createElement(g.a,{variant:"body1",style:{padding:12,paddingLeft:0}},"No parameters")))),l.a.createElement(y.a,{item:!0,xs:3},l.a.createElement("div",{className:e.container},l.a.createElement(S.a,{component:"fieldset",className:e.formControl},l.a.createElement(C.a,{component:"legend"},"Options:"),l.a.createElement(z,{items:r,onChange:this.handleCheck})))),t&&l.a.createElement(y.a,{item:!0,xs:12},l.a.createElement("div",{className:e.container},l.a.createElement(g.a,{variant:"h6",color:"inherit"},"Error"))),n&&l.a.createElement(y.a,{item:!0,xs:12},l.a.createElement("div",{className:e.container},l.a.createElement(g.a,{variant:"h6",color:"inherit"},"Short"),l.a.createElement(ee,{names:n.names,relation:n.relation}),l.a.createElement(g.a,{variant:"h6",color:"inherit",style:{marginTop:20}},"Details"),l.a.createElement(ae,{addNumbers:o,answers:n.answers})))))}}]),a}(n.Component),re=Object(d.withStyles)({container:{padding:20}})(le);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,2,1]]]);
//# sourceMappingURL=main.7de31395.chunk.js.map