(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,a,t){e.exports=t(269)},269:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),o=t.n(r),c=t(100),i=t(101),s=t(102),m=t(109),u=t(103),h=t(110),d=t(58),E=t(104),f=t.n(E),v=t(106),p=t.n(v),b=t(22),g=t.n(b),k=t(18),y=t.n(k),w=t(60),N=t.n(w),C=t(43),x=t.n(C),S=t(31),j=t.n(S),T=t(32),O=t.n(T),M=t(59),D=t.n(M),W=t(33),q=t.n(W),A=t(108),B=t.n(A),J=t(44),G=t.n(J),I=t(107),L=t.n(I),P=t(61),R=t.n(P),$=t(63),z=t.n($),F=t(16),H=t.n(F),K=t(62),Q=t.n(K),U=t(34),V=t.n(U);function X(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[t],e[t]=n}return e}function Y(e,a,t,n,l){switch(e){case"random":return function(e,a,t,n){for(var l=0;l<Math.floor(a.length/e.length);l++){e=X(e);for(var r=0;r<e.length;r++)t.push({task:a[l*e.length+r],name:e[r]}),n[e[r]].push(l*e.length+r+1)}e=X(e);for(var o=Math.floor(a.length/e.length)*e.length;o<a.length;o++)t.push({task:a[o],name:e[o%e.length]}),n[e[o%e.length]].push(o+1)}(a,t,n,l);case"sequential":return function(e,a,t,n){for(var l=0,r=0;r<e.length;r++)for(var o=0;o<Math.ceil(a.length/e.length)-(r<a.length%e.length||a.length%e.length===0?0:1);o++)t.push({task:a[l],name:e[r]}),l++,n[e[r]].push(l)}(a,t,n,l);case"weight":return;default:return-1}}var Z=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={checkboxes:{addNumbers:{label:"Add task numbers",value:!0}},names:"",tasks:"",distributionType:"random",error:!1,results:!1},t.handleChange=function(e){return function(a){t.setState(Object(c.a)({},e,a.target.value))}},t.handleCheck=function(e){return function(a,n){t.setState(function(a,t){return a.checkboxes[e].value=n,console.log(a.checkboxes),a})}},t.handleShuffle=function(e){return function(a){t.setState(function(a,t){var n=a[e].split("\n");return a[e]=X(n).join("\n"),a})}},t.handleDistribute=function(e){var a=t.state,n=a.names,l=a.tasks,r=a.distributionType,o=[],c={};n=n.split("\n"),l=l.split("\n");var i=!0,s=!1,m=void 0;try{for(var u,h=n[Symbol.iterator]();!(i=(u=h.next()).done);i=!0){c[u.value]=[]}}catch(d){s=!0,m=d}finally{try{i||null==h.return||h.return()}finally{if(s)throw m}}n.length<2||l.length<2?t.setState({error:!0}):(Y(r,n,l,o,c),t.setState({error:!1,results:{names:n,answers:o,relation:c}}))},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes,t=this.state,n=t.error,r=t.results,o=t.checkboxes,c=o.addNumbers.value,i=Object.keys(o);return l.a.createElement("div",{className:"App"},l.a.createElement(f.a,{position:"static",color:"default"},l.a.createElement(p.a,null,l.a.createElement(g.a,{variant:"h6",color:"inherit"},"Great random"))),l.a.createElement(y.a,{container:!0},l.a.createElement(y.a,{item:!0,xs:3},l.a.createElement("div",{className:a.container},l.a.createElement(N.a,{fullWidth:!0,label:"Members",value:this.state.names,multiline:!0,rows:"28",margin:"normal",variant:"outlined",onChange:this.handleChange("names")}))),l.a.createElement(y.a,{item:!0,xs:9},l.a.createElement("div",{className:a.container},l.a.createElement(N.a,{fullWidth:!0,label:"Tasks",value:this.state.tasks,multiline:!0,rows:"28",margin:"normal",variant:"outlined",onChange:this.handleChange("tasks")}))),l.a.createElement(y.a,{item:!0,xs:3},l.a.createElement("div",{className:a.container},l.a.createElement(x.a,{color:"primary",className:a.button,onClick:this.handleDistribute,variant:"outlined"},"Distribute"),l.a.createElement(x.a,{className:a.button,onClick:this.handleShuffle("names"),variant:"outlined"},"Shuffle members"),l.a.createElement(x.a,{className:a.button,onClick:this.handleShuffle("tasks"),variant:"outlined"},"Shuffle tasks"))),l.a.createElement(y.a,{item:!0,xs:3},l.a.createElement("div",{className:a.container},l.a.createElement(O.a,{component:"fieldset"},l.a.createElement(j.a,{component:"legend"},"Distribution type"),l.a.createElement(L.a,{"aria-label":"DistributionType",name:"distributionType",value:this.state.distributionType,onChange:this.handleChange("distributionType")},l.a.createElement(q.a,{value:"random",control:l.a.createElement(G.a,{color:"primary"}),label:"Random"}),l.a.createElement(q.a,{value:"sequential",control:l.a.createElement(G.a,{color:"primary"}),label:"Sequential"}),l.a.createElement(q.a,{value:"weight",control:l.a.createElement(G.a,{color:"primary"}),label:"Weight",disabled:!0}))))),l.a.createElement(y.a,{item:!0,xs:3},l.a.createElement("div",{className:a.container},l.a.createElement(O.a,{component:"fieldset"},l.a.createElement(j.a,{component:"legend"},"Parameters"),l.a.createElement(g.a,{variant:"body1",style:{padding:12,paddingLeft:0}},"No parameters")))),l.a.createElement(y.a,{item:!0,xs:3},l.a.createElement("div",{className:a.container},l.a.createElement(O.a,{component:"fieldset",className:a.formControl},l.a.createElement(j.a,{component:"legend"},"Options:"),l.a.createElement(D.a,null,i.map(function(a,t){return l.a.createElement(q.a,{key:t,control:l.a.createElement(B.a,{checked:o[a].value,onChange:e.handleCheck(a),value:a,color:"primary"}),label:o[a].label})}))))),n&&l.a.createElement(y.a,{item:!0,xs:12},l.a.createElement("div",{className:a.container},l.a.createElement(g.a,{variant:"h6",color:"inherit"},"Error"))),r&&l.a.createElement(y.a,{item:!0,xs:12},l.a.createElement("div",{className:a.container},l.a.createElement(g.a,{variant:"h6",color:"inherit"},"Short"),l.a.createElement(R.a,{className:a.table},l.a.createElement(Q.a,null,l.a.createElement(V.a,null,l.a.createElement(H.a,null,"Member"),l.a.createElement(H.a,null,"Tasks"),l.a.createElement(H.a,null,"Count"))),l.a.createElement(z.a,null,r.names.map(function(e,a){return l.a.createElement(V.a,{key:a},l.a.createElement(H.a,{component:"th",scope:"row"},e),l.a.createElement(H.a,null,r.relation[e].join(", ")),l.a.createElement(H.a,null,r.relation[e].length))}))),l.a.createElement(g.a,{variant:"h6",color:"inherit",style:{marginTop:20}},"Details"),l.a.createElement(R.a,{className:a.table},l.a.createElement(Q.a,null,l.a.createElement(V.a,null,c&&l.a.createElement(H.a,null,"Number"),l.a.createElement(H.a,null,"Task"),l.a.createElement(H.a,null,"Member"))),l.a.createElement(z.a,null,r.answers.map(function(e,a){return l.a.createElement(V.a,{key:a},c&&l.a.createElement(H.a,null,a+1),l.a.createElement(H.a,null,e.task),l.a.createElement(H.a,null,e.name))})))))))}}]),a}(n.Component),_=Object(d.withStyles)({button:{width:"100%",marginBottom:10},container:{padding:20}})(Z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,2,1]]]);
//# sourceMappingURL=main.6f8d1018.chunk.js.map