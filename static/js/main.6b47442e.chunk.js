(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{385:function(e,t){e.exports={"\u885b\u7f72\u85e5\u88fd":"01","\u885b\u7f72\u85e5\u8f38":"02","\u885b\u7f72\u6210\u88fd":"03","\u885b\u7f72\u4e2d\u85e5\u8f38":"04","\u885b\u7f72\u91ab\u5668\u88fd":"05","\u885b\u7f72\u91ab\u5668\u8f38":"06","\u885b\u7f72\u7ca7\u88fd":"07","\u885b\u7f72\u7ca7\u8f38":"08","\u885b\u7f72\u83cc\u75ab\u88fd":"09","\u885b\u7f72\u83cc\u75ab\u8f38":"10","\u885b\u7f72\u8272\u8f38":"11","\u5167\u885b\u85e5\u88fd":"12","\u5167\u885b\u85e5\u8f38":"13","\u5167\u885b\u6210\u88fd":"14","\u5167\u885b\u83cc\u75ab\u88fd":"15","\u5167\u885b\u83cc\u75ab\u8f38":"16","\u5167\u85e5\u767b":"17","\u7f72\u85e5\u517c\u98df\u88fd":"18","\u885b\u7f72\u6210\u8f38":"19","\u885b\u7f72\u7f55\u85e5\u8f38":"20","\u885b\u7f72\u7f55\u85e5\u88fd":"21","\u885b\u7f72\u7f55\u83cc\u75ab\u8f38":"22","\u885b\u7f72\u7f55\u83cc\u75ab\u88fd":"23","\u885b\u7f72\u7f55\u91ab\u5668\u8f38":"24","\u885b\u7f72\u7f55\u91ab\u5668\u88fd":"25","\u885b\u7f72\u8272\u88fd":"31","\u885b\u7f72\u7ca7\u9678\u8f38":"40","\u885b\u7f72\u85e5\u9678\u8f38":"41","\u885b\u7f72\u91ab\u5668\u9678\u8f38":"42","\u885b\u7f72\u91ab\u5668\u88fd\u58f9":"43","\u885b\u7f72\u91ab\u5668\u8f38\u58f9":"44","\u885b\u7f72\u91ab\u5668\u9678\u8f38\u58f9":"46","\u885b\u90e8\u85e5\u88fd":"51","\u885b\u90e8\u85e5\u8f38":"52","\u885b\u90e8\u6210\u88fd":"53","\u885b\u90e8\u91ab\u5668\u88fd":"55","\u885b\u90e8\u91ab\u5668\u8f38":"56","\u885b\u90e8\u7ca7\u88fd":"57","\u885b\u90e8\u7ca7\u8f38":"58","\u885b\u90e8\u83cc\u75ab\u88fd":"59","\u885b\u90e8\u83cc\u75ab\u8f38":"60","\u885b\u90e8\u8272\u8f38":"61","\u90e8\u85e5\u517c\u98df\u88fd":"68","\u885b\u90e8\u6210\u8f38":"69","\u885b\u90e8\u7f55\u85e5\u8f38":"70","\u885b\u90e8\u7f55\u85e5\u88fd":"71","\u885b\u90e8\u7f55\u83cc\u75ab\u8f38":"72","\u885b\u90e8\u7f55\u83cc\u75ab\u88fd":"73","\u885b\u90e8\u7f55\u91ab\u5668\u8f38":"74","\u885b\u90e8\u8272\u88fd":"81","\u885b\u90e8\u7ca7\u9678\u8f38":"90","\u885b\u90e8\u85e5\u9678\u8f38":"91","\u885b\u90e8\u91ab\u5668\u9678\u8f38":"92","\u885b\u90e8\u91ab\u5668\u88fd\u58f9":"93","\u885b\u90e8\u91ab\u5668\u8f38\u58f9":"94","\u885b\u90e8\u91ab\u5668\u9678\u8f38\u58f9":"96","\u885b\u7f72\u83cc\u88fd":"99"}},421:function(e,t,a){e.exports=a(579)},426:function(e,t,a){},579:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),l=(a(426),a(14)),i=a.n(l),s=a(22),u=a(20),m=a(355),p=a(617),d=a(614),f=a(74),b=a(26),v=a(618),h=a(168),E=a.n(h),g=a(616),x=a(362),y=a(314),w=a(81),O=a(169),j=a.n(O),k=a(189),N=a(620),R=a(613),B=a(244),P=a(385),S=a.n(P),C=new(a(386).a)("nhi-open-data-tool");C.version(1).stores({cache:"++id,key"});var L={purge:function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.delete();case 2:return e.next=4,C.open();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),get:function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.table("cache").where({key:t}).toArray();case 2:if(0!==(a=e.sent).length){e.next=5;break}return e.abrupt("return");case 5:if(a[0].expiredAt&&!(a[0].expiredAt<Date.now())){e.next=7;break}return e.abrupt("return");case 7:return e.abrupt("return",a[0].data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),set:function(){var e=Object(s.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.table("cache").where({key:t}).toArray();case 2:if(n=e.sent,r=Date.now()+216e5,0!==n.length){e.next=9;break}return e.next=7,C.table("cache").add({key:t,data:a,expiredAt:r});case 7:e.next=11;break;case 9:return e.next=11,C.table("cache").update(n[0].id,{key:t,data:a,expiredAt:r});case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},A="https://raw.githubusercontent.com/chunyenHuang/nhi-open-data-tool/master/data/latest";function W(e){return I.apply(this,arguments)}function I(){return(I=Object(s.a)(i.a.mark((function e(t){var a,n,r,c,o,l,s,u=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:{},n=a.bypassCache,r=void 0!==n&&n,t=t.endsWith(".json")?t:"".concat(t,".json"),c="api:".concat(t),e.next=6,L.get(c);case 6:if(o=e.sent,r||!o){e.next=9;break}return e.abrupt("return",o);case 9:return e.next=11,fetch("".concat(A,"/").concat(t));case 11:return l=e.sent,e.next=14,l.json();case 14:return s=e.sent,console.log(s),e.next=18,L.set(c,s);case 18:return e.abrupt("return",s);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){return"https://www.nhi.gov.tw/Query4Pic/".concat(e,".jpg")},T=function(e){return"https://www.nhi.gov.tw/QueryN/Query3_Detail.aspx?Page=3&HospID=".concat(e)},F=function(e,t){return'<a href="'.concat(t,'" rel="noopener" target="_blank" style="none;">').concat(e,"</a>")},M=function(e){var t=e.match(/\d+/)[0],a=e.split(t)[0].replace("\u5b57\u7b2c",""),n=S.a[a];return"http://www.fda.gov.tw/MLMS/H0001D.aspx?Type=Lic&LicId=".concat(n)},H=a(609),z=a(611),_=a(610),G=a(245),U=a(313);var Y=function(e){var t=e.url,a=void 0===t?"":t,n=e.title,c=void 0===n?"Visit":n,o=e.tooltip,l=e.icon,i=e.className,s=e.variant,u=void 0===s?"outlined":s,m=e.target,p=void 0===m?"_self":m,d=e.size,b=void 0===d?"small":d;if("string"!==typeof a)return null;var v=!a||""===a||!a.startsWith("http")&&!a.startsWith("/"),h=o||(v?"":c);return l?r.a.createElement(U.a,{title:h},r.a.createElement("span",null,r.a.createElement(G.a,{className:i,disabled:v,"aria-label":c,target:"_self",href:a,size:b},l))):a.startsWith("/")?r.a.createElement(y.a,{className:i,variant:u,color:"primary",size:b,to:a,disabled:v,component:f.b,target:p},c):r.a.createElement(y.a,{className:i,variant:u,color:"primary",size:b,target:"_self",href:a,disabled:v},c)},Q=a(608),J=a(403),V=Object(m.a)((function(e){return{root:{flex:1},container:{marginTop:e.spacing(2),marginBottom:e.spacing(2),flex:1}}}));function X(e){var t=e.label,a=e.content,n=e.compare;return r.a.createElement(B.a,{textAlign:"center",fontWeight:"fontWeightBold",p:2,m:2},r.a.createElement(w.a,{gutterBottom:!0,variant:"h6",component:"h1"},t),r.a.createElement(w.a,{gutterBottom:!0,variant:"h4",component:"h1",color:"primary"},a),n&&"NaN"!==n&&r.a.createElement(w.a,{gutterBottom:!0,variant:"h6",component:"h1",color:"textSecondary"},n))}function $(e){var t=e.data,a=void 0===t?[]:t;return r.a.createElement(B.a,{height:500},r.a.createElement(J.a,{data:a,margin:{top:40,right:200,bottom:40,left:80},pixelRatio:1,innerRadius:.5,padAngle:.7,cornerRadius:3,colors:{scheme:"paired"},borderColor:{from:"color",modifiers:[["darker",.6]]},radialLabelsSkipAngle:10,radialLabelsTextXOffset:6,radialLabelsTextColor:"#333333",radialLabelsLinkOffset:0,radialLabelsLinkDiagonalLength:16,radialLabelsLinkHorizontalLength:24,radialLabelsLinkStrokeWidth:1,radialLabelsLinkColor:{from:"color"},slicesLabelsSkipAngle:10,slicesLabelsTextColor:"#333333",animate:!0,motionStiffness:90,motionDamping:15,legends:[{anchor:"right",direction:"column",translateX:140,itemWidth:60,itemHeight:14,itemsSpacing:2,symbolSize:14,symbolShape:"circle"}]}))}function q(e){var t=e.data,a=void 0===t?{}:t,n=e.compareData,c=void 0===n?{}:n,o=e.hides,l=void 0===o?[]:o,i=V(),s=a["\u91ab\u7642\u6a5f\u69cb"],u=c["\u91ab\u7642\u6a5f\u69cb"]||{},m=a["\u81ea\u4ed8\u5dee\u984d"],p=c["\u81ea\u4ed8\u5dee\u984d"];if(!s||!m)return null;var d=Object.keys(s["\u7279\u7d04\u985e\u5225"]).map((function(e){return{id:e,label:e,value:s["\u7279\u7d04\u985e\u5225"][e]}})),f=Object.keys(s["\u5730\u5340"]).map((function(e){return{id:e,label:e,value:s["\u5730\u5340"][e]}}));return r.a.createElement("div",{className:i.root},m["\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578"]&&r.a.createElement(Q.a,{item:!0,xs:12},r.a.createElement(X,{label:"\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578",content:(new Intl.NumberFormat).format(m["\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578"])})),!l.includes("\u81ea\u4ed8\u5dee\u984d")&&r.a.createElement(Q.a,{container:!0,className:i.container},r.a.createElement(Q.a,{item:!0,xs:12,align:"center"},r.a.createElement(w.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",color:"textSecondary"},"\u81ea\u4ed8\u5dee\u984d ",p&&r.a.createElement("span",null," - \u76f8\u8f03\u65bc\u6b64\u5206\u985e\u6240\u6709\u9805\u76ee (\u7070\u8272\u90e8\u5206)"))),r.a.createElement(Q.a,{item:!0,xs:4},r.a.createElement(X,{label:"\u6700\u4f4e",content:(new Intl.NumberFormat).format(m["\u6700\u4f4e"]),compare:p&&(new Intl.NumberFormat).format(p["\u6700\u4f4e"])})),r.a.createElement(Q.a,{item:!0,xs:4},r.a.createElement(X,{label:"\u6700\u9ad8",content:(new Intl.NumberFormat).format(m["\u6700\u9ad8"]),compare:p&&(new Intl.NumberFormat).format(p["\u6700\u9ad8"])})),r.a.createElement(Q.a,{item:!0,xs:4},r.a.createElement(X,{label:"\u4e2d\u4f4d\u6578",content:(new Intl.NumberFormat).format(m["\u4e2d\u4f4d\u6578"]),compare:p&&(new Intl.NumberFormat).format(p["\u4e2d\u4f4d\u6578"])}))),!l.includes("\u91ab\u7642\u6a5f\u69cb")&&r.a.createElement(Q.a,{container:!0,spacing:2,className:i.container},r.a.createElement(Q.a,{item:!0,xs:12,align:"center"},r.a.createElement(w.a,{gutterBottom:!0,variant:"subtitle1",component:"h5",color:"textSecondary"},"\u76f8\u95dc\u91ab\u7642\u6a5f\u69cb ",s["\u7e3d\u6578"]," \u9593 ",u["\u7e3d\u6578"]&&r.a.createElement("span",null," - \u6b64\u5206\u985e\u5171\u6709 ",u["\u7e3d\u6578"]," \u9593"))),r.a.createElement(Q.a,{item:!0,xs:12,md:6},r.a.createElement($,{data:d})),r.a.createElement(Q.a,{item:!0,xs:12,md:6},r.a.createElement($,{data:f}))))}var K=Object(m.a)((function(e){return{categoryButton:{margin:e.spacing(2)},card:{padding:e.spacing(1),marginBottom:e.spacing(2)},flex:{flex:1}}}));function Z(e){var t=e.category,a=void 0===t?{}:t,n=K(),c=a["\u5b50\u5206\u985e"];return r.a.createElement("div",null,r.a.createElement(H.a,{className:n.card},r.a.createElement(_.a,null,r.a.createElement(B.a,{textAlign:"center"},r.a.createElement(w.a,{gutterBottom:!0,variant:"h5",component:"h1"},a["\u540d\u7a31"]))),r.a.createElement(z.a,null,r.a.createElement("div",{className:n.flex}),r.a.createElement(Y,{title:"\u67e5\u770b\u6b64\u985e\u5225\u6240\u6709\u91ab\u6750",size:"small",url:"/pcItems?\u985e\u5225[]=".concat(a["\u540d\u7a31"])}),r.a.createElement("div",{className:n.flex})),r.a.createElement(_.a,null,r.a.createElement(q,{data:a["\u7d71\u8a08\u8cc7\u6599"]}))),r.a.createElement(B.a,{textAlign:"center",p:2},r.a.createElement(w.a,{gutterBottom:!0,variant:"h5",component:"h1",color:"textSecondary"},"\u4ee5\u4e0b\u70ba\u5b50\u5206\u985e\uff0c\u5171\u6709 ",c.length," \u9805")),c.map((function(e,t){return r.a.createElement(H.a,{className:n.card,key:t},r.a.createElement(_.a,null,r.a.createElement(B.a,{textAlign:"center"},r.a.createElement(w.a,{gutterBottom:!0,variant:"h5",component:"h1"},e["\u529f\u80fd/\u6750\u8cea\u5206\u985e"]))),r.a.createElement(_.a,null,e["\u529f\u80fd/\u6750\u8cea\u5206\u985e\u8aaa\u660e"].split("\n").map((function(e,t){return r.a.createElement(w.a,{key:t,variant:"body2",color:"textSecondary",component:"p"},e)}))),r.a.createElement(z.a,null,r.a.createElement("div",{className:n.flex}),["\u4e00","\u4e8c","\u4e09","\u56db","\u4e94"].filter((function(t){return e["\u529f\u80fd".concat(t)]&&"\u7121"!==e["\u529f\u80fd".concat(t)]})).map((function(t){return r.a.createElement(y.a,{key:t,size:"small",color:"secondary"},e["\u529f\u80fd".concat(t)])})),r.a.createElement("div",{className:n.flex})),r.a.createElement(z.a,null,r.a.createElement("div",{className:n.flex}),r.a.createElement(Y,{title:"\u67e5\u770b\u6b64\u5b50\u985e\u5225\u76f8\u95dc\u91ab\u6750",size:"small",url:"/pcItems?\u985e\u5225[]=".concat(a["\u540d\u7a31"],"&\u5206\u985e[]=").concat(e["\u81ea\u4ed8\u5dee\u984d\u54c1\u9805\u529f\u80fd\u5206\u985e"])}),r.a.createElement("div",{className:n.flex})),r.a.createElement(_.a,null,r.a.createElement(q,{data:e["\u7d71\u8a08\u8cc7\u6599"],compareData:a["\u7d71\u8a08\u8cc7\u6599"]})))})))}function ee(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(a,n){var r=t?-1:1;return a[e]===n[e]?0:r*te(a[e],n[e])}}var te=function(e,t){var a,n,r=1,c=0,o=0,l=String.alphabet;function i(e,t,n){if(n){for(a=t;(n=i(e,a))<76&&n>65;)++a;return+e.slice(t-1,a)}return(n=l&&l.indexOf(e.charAt(t)))>-1?n+76:(n=e.charCodeAt(t)||0)<45||n>127?n:n<46?65:n<48?n-1:n<58?n+18:n<65?n-11:n<91?n+11:n<97?n-37:n<123?n+5:n-63}if((e+="")!=(t+=""))for(;r;)if(n=i(e,c++),r=i(t,o++),n<76&&r<76&&n>66&&r>66&&(n=i(e,c,c),r=i(t,o,c=a),o=a),n!=r)return n<r?-1:1;return 0},ae=Object(m.a)((function(e){return{root:{flexGrow:1},container:{flexGrow:1,paddingTop:e.spacing(3),display:"flex"},tabContainer:{width:"100%"},tabs:{borderRight:"1px solid ".concat(e.palette.divider),minWidth:250}}}));function ne(e){var t=e.children,a=e.value,n=e.index,c=Object(k.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"vertical-tabpanel-".concat(n),"aria-labelledby":"vertical-tab-".concat(n)},c),a===n&&r.a.createElement(B.a,{p:3},t))}function re(){var e=ae(),t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],o=a[1],l=r.a.useState(0),m=Object(u.a)(l,2),p=m[0],d=m[1];return Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("\u81ea\u4ed8\u5dee\u984d\u54c1\u9805\u985e\u5225");case 2:t=e.sent.filter((function(e){return e})).sort(ee("\u540d\u7a31")),o(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(w.a,{variant:"h5",component:"h1"},"\u8acb\u554f\u6709\u54ea\u4e9b\u5065\u4fdd\u7d66\u4ed8\u7684\u91ab\u7642\u7279\u6750\u985e\u5225\uff0c\u6211\u53ef\u4ee5\u201c\u81ea\u4ed8\u5dee\u984d\u201d\u4f86\u9078\u7528\u5176\u4ed6\u7684\u54c1\u9805\uff1f"),r.a.createElement("div",{className:e.container},r.a.createElement(N.a,{orientation:"vertical",variant:"scrollable",value:p,onChange:function(e,t){d(t)},"aria-label":"\u81ea\u4ed8\u5dee\u984d\u5206\u985e",className:e.tabs},c.map((function(e,t){return r.a.createElement(R.a,{label:e["\u540d\u7a31"],key:t,id:"vertical-tab-".concat(t),"aria-controls":"vertical-tabpanel-".concat(t)})}))),r.a.createElement("div",{className:e.tabContainer},c.map((function(e,t){return r.a.createElement(ne,{value:p,index:t,key:t},r.a.createElement(Z,{category:e}))})))))}var ce=a(395),oe=a.n(ce),le=a(396),ie=a.n(le),se=a(400),ue=a(401),me=a(405),pe=a(404),de=a(360),fe=a(359),be=a(358),ve=a(380),he=a(5),Ee=function(e){Object(me.a)(a,e);var t=Object(pe.a)(a);function a(){var e;Object(se.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleRowChange=function(t){e.props.changeRowsPerPage(t.target.value)},e.handlePageChange=function(t,a){e.props.changePage(a)},e}return Object(ue.a)(a,[{key:"render",value:function(){var e=this.props,t=e.description,a=void 0===t?"":t,n=e.count,c=e.textLabels,o=e.rowsPerPage,l=e.page;return r.a.createElement(de.a,null,r.a.createElement(fe.a,null,r.a.createElement(be.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})),r.a.createElement(be.a,{style:{display:"flex",justifyContent:"flex-end",padding:"0px 24px 0px 24px"},colSpan:1e3},r.a.createElement(ve.a,{component:"div",count:n,rowsPerPage:o,page:l,labelRowsPerPage:c.rowsPerPage,labelDisplayedRows:function(e){var t=e.from,a=e.to,n=e.count;return"".concat(t,"-").concat(a," ").concat(c.displayRows," ").concat(n)},backIconButtonProps:{"aria-label":c.previous},nextIconButtonProps:{"aria-label":c.next},rowsPerPageOptions:[10,20,100],onChangePage:this.handlePageChange,onChangeRowsPerPage:this.handleRowChange}))))}}]),a}(r.a.Component),ge=Object(he.a)({},{name:"CustomFooter"})(Ee),xe=Object(m.a)((function(e){return{number:{}}}));function ye(e){var t=e.title,a=e.description,n=e.data,c=e.columns,o=e.options,l=xe(),i=Object.assign({enableNestedDataAccess:".",pagination:!0,responsive:"standard",rowsPerPageOptions:[10,20,50,100],rowsPerPage:10,filterType:"multiselect",fixedHeader:!0,resizableColumns:!1,selectableRows:"none",print:!0,download:!0,downloadOptions:{filename:"".concat(t,".csv"),separator:","},expandableRows:!1,isRowExpandable:function(){return!1},isRowSelectable:function(){return!1},onRowClick:function(e,t){var a=n[t.dataIndex];console.log(a)},textLabels:{body:{noMatch:"\u62b1\u6b49\uff0c\u627e\u4e0d\u5230\u76f8\u95dc\u8cc7\u6599",toolTip:"\u6392\u5e8f",columnHeaderTooltip:function(e){return"\u4f7f\u7528[".concat(e.label,"]\u6392\u5e8f")}},pagination:{next:"\u4e0b\u4e00\u9801",previous:"\u4e0a\u4e00\u9801",rowsPerPage:"\u6bcf\u9801\u986f\u793a",displayRows:"\u7e3d\u9805\u76ee\u6578"},toolbar:{search:"\u641c\u5c0b",downloadCsv:"\u4e0b\u8f09 CSV",print:"\u5217\u5370",viewColumns:"\u986f\u793a\u6b04\u4f4d",filterTable:"\u7be9\u9078\u6578\u64da"},filter:{all:"\u5168\u90e8",title:"\u7be9\u9078\u6578\u64da",reset:"\u91cd\u8a2d"},viewColumns:{title:"\u6b04\u4f4d",titleAria:"\u986f\u793a/\u96b1\u85cf\u6b04\u4f4d"}},customFooter:function(e,t,n,c,o,l){return r.a.createElement(ge,{description:a,count:e,page:t,rowsPerPage:n,changeRowsPerPage:c,changePage:o,textLabels:l})}},o);return c.map((function(e,t){return Object.prototype.hasOwnProperty.call(e,"options")||(e.options={}),e})).forEach((function(e){e.name,e.edit;var t=e.type,a=e.options,n=void 0===a?{}:a;switch(t){case"actions":break;case"datetime":n.customBodyRender=function(e){return e?j()(e).format("YYYY/MM/DD h:mm a"):""};break;case"number":n.customBodyRender=function(e){return r.a.createElement("div",{className:l.number},(new Intl.NumberFormat).format(e))};break;case"boolean":n.customBodyRender=function(e){return e?"yes":"no"};break;default:n.customBodyRender=n.customBodyRender||function(e){return e||null}}})),r.a.createElement(ie.a,{title:t,data:n,columns:c,options:i})}var we=Object(m.a)((function(e){return{img:{maxHeight:100,maxWidth:"100%"}}}));var Oe=function(e){var t=e.value,a=void 0===t?"":t,n=e.alt,c=void 0===n?"-":n,o=we();return r.a.createElement(Q.a,{container:!0,justify:"center",align:"center"},a&&r.a.createElement("img",{src:a,alt:c,className:o.img}))};function je(e){var t=e.prefilters,a=void 0===t?{}:t,c=Object(n.useState)([]),o=Object(u.a)(c,2),l=o[0],m=o[1];Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("\u81ea\u4ed8\u5dee\u984d\u54c1\u9805");case 2:t=e.sent,m(t.sort(ee("\u4e2d\u6587")).sort(ee("\u5206\u985e")).sort(ee("\u985e\u5225")));case 4:case"end":return e.stop()}}),e)})))()}),[]);var p=[{name:"\u4ee3\u78bc",label:"\u5716\u7247",options:{filter:!1,sort:!1,customBodyRender:function(e){return r.a.createElement(Oe,{value:D(e)})}}},{name:"\u985e\u5225",label:"\u985e\u5225",options:{filterList:a["\u985e\u5225"]||[],filterOptions:{fullWidth:!0}}},{name:"\u5206\u985e",label:"\u5206\u985e",options:{filterList:(a["\u5206\u985e"]||[]).map((function(e){return e.replace(/ /g,"+")})),filterOptions:{fullWidth:!0}}},{name:"\u4ee3\u78bc",label:"\u4ee3\u78bc",options:{filter:!1}},{name:"\u4e2d\u6587",label:"\u4e2d\u6587",options:{filter:!1}},{name:"\u82f1\u6587",label:"\u82f1\u6587",options:{filter:!1,display:!1}},{name:"\u8a31\u53ef\u8b49\u5b57\u865f",label:"\u8a31\u53ef\u8b49\u5b57\u865f",options:{filter:!1,display:!1}},{name:"\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578",label:"\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578",type:"number",options:{filter:!1}},{name:"\u7d71\u8a08\u8cc7\u6599.\u81ea\u4ed8\u5dee\u984d.\u6700\u4f4e",label:"\u6700\u4f4e\u81ea\u4ed8\u5dee\u984d",type:"number",options:{filter:!1}},{name:"\u7d71\u8a08\u8cc7\u6599.\u81ea\u4ed8\u5dee\u984d.\u6700\u9ad8",label:"\u6700\u9ad8\u81ea\u4ed8\u5dee\u984d",type:"number",options:{filter:!1}},{name:"\u7d71\u8a08\u8cc7\u6599.\u81ea\u4ed8\u5dee\u984d.\u50f9\u5dee",label:"\u6700\u4f4e\u8207\u6700\u9ad8\u81ea\u4ed8\u5dee\u984d\u50f9\u5dee",type:"number",options:{filter:!1}},{name:"\u7d71\u8a08\u8cc7\u6599.\u91ab\u7642\u6a5f\u69cb.\u7e3d\u6578",label:"\u91ab\u7642\u6a5f\u69cb\u6578",type:"number",options:{filter:!1}},{name:"\u4ee3\u78bc",label:" ",options:{filter:!1,sort:!1,customBodyRender:function(e){return r.a.createElement(Y,{url:"/pcItem/".concat(e),title:"\u67e5\u770b"})}}}];return r.a.createElement(ye,{title:"\u81ea\u4ed8\u5dee\u984d\u91ab\u7642\u7279\u6750\u6e05\u55ae",description:F("\u8cc7\u6599\u51fa\u8655\uff1a\u5065\u4fdd\u7f72 \u6c11\u773e\u81ea\u4ed8\u5dee\u984d\u54c1\u9805\u6536\u8cbb\u60c5\u5f62","https://data.nhi.gov.tw/Datasets/DatasetDetail.aspx?id=663&Mid=A110734"),data:l,columns:p})}var ke=a(131),Ne=a(619);var Re=function(e){var t=e.url,a=e.title,n=void 0===a?"link":a,c=e.variant,o=void 0===c?"body1":c,l=Object(k.a)(e,["url","title","variant"]);return t.startsWith("/")?r.a.createElement(Ne.a,Object.assign({variant:o,color:"primary"},l,{to:t,component:f.b}),n):r.a.createElement(Ne.a,Object.assign({variant:o,color:"primary"},l,{target:"_blank",href:t}),n)},Be=function(e,t){return r.a.createElement(Re,{url:M(e),title:e,variant:t})},Pe=function(e,t,a){return r.a.createElement(Re,{url:T(t),title:e,variant:a})};function Se(e){var t=e.id,a=Object(n.useState)([]),c=Object(u.a)(a,2),o=c[0],l=c[1];Object(n.useEffect)((function(){t&&Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("\u81ea\u4ed8\u5dee\u984d\u54c1\u9805\u6536\u8cbb/\u54c1\u9805\u4ee3\u78bc/".concat(t));case 2:if((a=e.sent)[0]){e.next=5;break}return e.abrupt("return");case 5:l(a.sort(ee("\u7279\u7d04\u9662\u6240\u6536\u8cbb")));case 6:case"end":return e.stop()}}),e)})))()}),[t]);var m=[{name:"\u5206\u5340\u696d\u52d9\u7d44",label:"\u5206\u5340\u696d\u52d9\u7d44",options:{filter:!1,display:!1}},{name:"\u5c31\u91ab\u9662\u6240\u7e23\u5e02\u5225",label:"\u5730\u5340",options:{filterOptions:{fullWidth:!0}}},{name:"\u7279\u7d04\u985e\u5225",label:"\u7279\u7d04\u985e\u5225",options:{filterOptions:{fullWidth:!0}}},{name:"\u91ab\u4e8b\u6a5f\u69cb\u540d\u7a31",label:"\u91ab\u4e8b\u6a5f\u69cb\u540d\u7a31",options:{filterOptions:{fullWidth:!0},customBodyRender:function(e,t){var a=t.rowData[5];return Pe(e,a,"body2")}}},{name:"\u91ab\u4e8b\u6a5f\u69cb\u7c21\u7a31",label:"\u91ab\u4e8b\u6a5f\u69cb\u7c21\u7a31",options:{filter:!1,display:!1,customBodyRender:function(e,t){var a=t.rowData[5];return Pe(e,a,"body2")}}},{name:"\u91ab\u4e8b\u6a5f\u69cb\u4ee3\u78bc",label:"\u91ab\u4e8b\u6a5f\u69cb\u4ee3\u78bc",options:{filter:!1,display:!1,customBodyRender:function(e){return Pe(e,e,"body2")}}},{name:"\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578",label:"\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578",type:"number",options:{display:!1,filter:!1}},{name:"\u7279\u7d04\u9662\u6240\u6536\u8cbb",label:"\u81ea\u4ed8\u5dee\u984d",type:"number",options:{filter:!1}}];return r.a.createElement(ye,{title:"\u5404\u5730\u5340\u6a5f\u69cb\u7279\u6750\u6536\u8cbb",data:o,columns:m})}function Ce(e){var t=e.funcName,a=e.id,c=Object(n.useState)([]),o=Object(u.a)(c,2),l=o[0],m=o[1];Object(n.useEffect)((function(){t&&Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("\u81ea\u4ed8\u5dee\u984d\u54c1\u9805");case 2:a=e.sent,m(a.filter((function(e){return e["\u5206\u985e"]===t})).sort(ee("\u6700\u4f4e\u81ea\u4ed8\u5dee\u984d")));case 4:case"end":return e.stop()}}),e)})))()}),[t]);var p=[{name:"\u4ee3\u78bc",label:" ",options:{filter:!1,sort:!1,customBodyRender:function(e){return e===a?"\u672c\u9801\u7522\u54c1":""}}},{name:"\u4ee3\u78bc",label:"\u5716\u7247",options:{filter:!1,sort:!1,customBodyRender:function(e){return r.a.createElement(Oe,{value:D(e)})}}},{name:"\u4ee3\u78bc",label:"\u4ee3\u78bc",options:{filter:!1}},{name:"\u4e2d\u6587",label:"\u4e2d\u6587",options:{filter:!1}},{name:"\u82f1\u6587",label:"\u82f1\u6587",options:{filter:!1,display:!1}},{name:"\u8a31\u53ef\u8b49\u5b57\u865f",label:"\u8a31\u53ef\u8b49\u5b57\u865f",options:{filter:!1,customBodyRender:function(e){return Be(e,"body2")}}},{name:"\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578",label:"\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578",type:"number",options:{filter:!1}},{name:"\u7d71\u8a08\u8cc7\u6599.\u81ea\u4ed8\u5dee\u984d.\u6700\u4f4e",label:"\u6700\u4f4e\u81ea\u4ed8\u5dee\u984d",type:"number",options:{filter:!1}},{name:"\u7d71\u8a08\u8cc7\u6599.\u81ea\u4ed8\u5dee\u984d.\u6700\u9ad8",label:"\u6700\u9ad8\u81ea\u4ed8\u5dee\u984d",type:"number",options:{filter:!1}},{name:"\u4ee3\u78bc",label:" ",options:{filter:!1,sort:!1,customBodyRender:function(e){return r.a.createElement(Y,{url:"/pcItem/".concat(e),title:"\u67e5\u770b"})}}}];return r.a.createElement(ye,{title:"\u76f8\u540c\u529f\u80fd\u5206\u985e\uff1a".concat(t),data:l,columns:p})}function Le(e){var t=e.id,a=Object(n.useState)([]),c=Object(u.a)(a,2),o=c[0],l=c[1];Object(n.useEffect)((function(){t&&Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("\u81ea\u4ed8\u5dee\u984d\u91ab\u6750\u5c0d\u61c9\u5065\u4fdd\u5168\u984d\u7d66\u4ed8\u54c1\u9805");case 2:a=e.sent,l(a.filter((function(e){return e["\u81ea\u4ed8\u5dee\u984d\u54c1\u9805\u4ee3\u78bc"].includes(t)})).sort(ee("\u652f\u4ed8\u9ede\u6578",!0)));case 4:case"end":return e.stop()}}),e)})))()}),[t]);var m=[{name:"\u4ee3\u78bc",label:"\u5716\u7247",options:{filter:!1,sort:!1,customBodyRender:function(e){return r.a.createElement(Oe,{value:D(e)})}}},{name:"\u4ee3\u78bc",label:"\u4ee3\u78bc",options:{filter:!1}},{name:"\u540d\u7a31",label:"\u540d\u7a31",options:{filter:!1}},{name:"\u8a31\u53ef\u8b49\u5b57\u865f",label:"\u8a31\u53ef\u8b49\u5b57\u865f",options:{filter:!1,display:!1}},{name:"\u85e5\u5546\u540d\u7a31",label:"\u85e5\u5546\u540d\u7a31"},{name:"\u652f\u4ed8\u9ede\u6578",label:"\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578",type:"number",options:{filter:!1}}];return r.a.createElement(ye,{title:"\u5c0d\u61c9\u5065\u4fdd\u5168\u984d\u7d66\u4ed8\u54c1\u9805",data:o,columns:m})}var Ae=Object(m.a)((function(e){return{container:{flex:1,padding:e.spacing(4)},statisticsContainer:{padding:e.spacing(4)},space:{height:e.spacing(4)},img:{width:"100%"},header:{marginBottom:e.spacing(1)}}}));function We(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("\u5168\u81ea\u8cbb\u54c1\u9805");case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);return r.a.createElement(ye,{title:"\u5168\u81ea\u8cbb\u54c1\u9805\u6e05\u55ae",description:F("\u8cc7\u6599\u51fa\u8655\uff1a\u5065\u4fdd\u7f72 \u6c11\u773e\u5168\u81ea\u8cbb\u54c1\u9805\u6536\u8cbb\u60c5\u5f62","https://data.nhi.gov.tw/Datasets/DatasetDetail.aspx?id=662&Mid=A110734"),data:a,columns:[{name:"\u624b\u8853\u53ca\u88dd\u7f6e",label:"\u624b\u8853\u53ca\u88dd\u7f6e",options:{filterOptions:{fullWidth:!0}}},{name:"\u91ab\u6750\u7a2e\u985e",label:"\u91ab\u6750\u7a2e\u985e",options:{filterOptions:{fullWidth:!0}}},{name:"\u4ee3\u78bc",label:"\u4ee3\u78bc",options:{filter:!1}},{name:"\u4e2d\u6587",label:"\u4e2d\u6587",options:{filter:!1}},{name:"\u82f1\u6587",label:"\u82f1\u6587",options:{filter:!1,display:!1}},{name:"\u8a31\u53ef\u8b49\u5b57\u865f",label:"\u8a31\u53ef\u8b49\u5b57\u865f",options:{filter:!1,display:!1}},{name:"\u672a\u7d0d\u5165\u5065\u4fdd\u7d66\u4ed8\u539f\u56e0",label:"\u672a\u7d0d\u5165\u5065\u4fdd\u7d66\u4ed8\u539f\u56e0",options:{filter:!0,filterOptions:{fullWidth:!0}}},{name:"\u8aaa\u660e",label:"\u8aaa\u660e",options:{filter:!1}},{name:"\u6700\u4f4e\u81ea\u8cbb\u984d",label:"\u6700\u4f4e\u81ea\u8cbb\u984d",type:"number",options:{filter:!1}},{name:"\u6700\u9ad8\u81ea\u8cbb\u984d",label:"\u6700\u9ad8\u81ea\u8cbb\u984d",type:"number",options:{filter:!1}},{name:"\u91ab\u7642\u6a5f\u69cb\u6578",label:"\u91ab\u7642\u6a5f\u69cb\u6578",type:"number",options:{filter:!1}}]})}var Ie=[{title:"\u9996\u9801",documentTitle:"",path:"/",exact:!0,component:function(){return r.a.createElement(d.a,{maxWidth:"xl"},r.a.createElement(re,null))}},{title:"\u81ea\u4ed8\u5dee\u984d\u54c1\u9805\u6e05\u55ae",path:"/pcItems",exact:!0,component:function(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement(je,{prefilters:oe.a.parse(t.search,{arrayFormat:"bracket"})}))},hideFromMenu:!1},{title:"\u5168\u81ea\u8cbb\u54c1\u9805\u6e05\u55ae",path:"/ncItems",exact:!0,component:function(){return r.a.createElement("div",null,r.a.createElement(We,null))},hideFromMenu:!1},{title:"",path:"/pcItem/:id",exact:!0,component:function(e){var t=e.id,a=e.match,c=Ae(),o=Object(n.useState)(),l=Object(u.a)(o,2),m=l[0],p=l[1],d=Object(n.useState)(),f=Object(u.a)(d,2),b=f[0],v=f[1],h=Object(n.useState)({}),g=Object(u.a)(h,2),x=g[0],y=g[1];return Object(n.useEffect)((function(){if(t)p(t);else if(a){var e=a.params.id;p(e)}}),[t,a]),Object(n.useEffect)((function(){m&&Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("\u81ea\u4ed8\u5dee\u984d\u54c1\u9805");case 2:return t=e.sent,a=t.find((function(e){return e["\u4ee3\u78bc"]===m})),console.log(a),v(a),e.next=9,W("\u81ea\u4ed8\u5dee\u984d\u54c1\u9805\u985e\u5225");case 9:e.sent.forEach((function(e){e["\u540d\u7a31"]===a["\u985e\u5225"]&&e["\u5b50\u5206\u985e"].forEach((function(e){e["\u81ea\u4ed8\u5dee\u984d\u54c1\u9805\u529f\u80fd\u5206\u985e"]===a["\u5206\u985e"]&&(console.log(e),y(e))}))}));case 11:case"end":return e.stop()}}),e)})))()}),[m]),b?r.a.createElement(E.a,{title:"".concat(b["\u4e2d\u6587"])},r.a.createElement("div",null,r.a.createElement(ke.a,null,r.a.createElement(Q.a,{container:!0},r.a.createElement(Q.a,{container:!0,item:!0,xs:12,sm:2,md:4,alignItems:"center",justify:"center",className:c.container},r.a.createElement("img",{src:D(m),alt:"test",className:c.img})),r.a.createElement(Q.a,{item:!0,xs:12,sm:10,md:8,className:c.container},r.a.createElement(w.a,{variant:"h5",component:"h1",className:c.header},b["\u4e2d\u6587"]),r.a.createElement(w.a,{variant:"subtitle1",component:"h5",className:c.header},b["\u82f1\u6587"]),r.a.createElement(w.a,{variant:"body2",component:"p",className:c.header},"\u4ee3\u78bc\uff1a",b["\u4ee3\u78bc"]),r.a.createElement(w.a,{variant:"body2",component:"p",className:c.header},"\u985e\u5225\uff1a",b["\u985e\u5225"]," / ",b["\u5206\u985e"]),r.a.createElement(w.a,{variant:"body2",component:"p",className:c.header},"\u8a31\u53ef\u8b49\u5b57\u865f\uff1a",Be(b["\u8a31\u53ef\u8b49\u5b57\u865f"],"body1"))))),r.a.createElement("div",{className:c.space}),r.a.createElement(ke.a,{className:c.statisticsContainer},r.a.createElement(q,{data:b["\u7d71\u8a08\u8cc7\u6599"],compareData:x["\u7d71\u8a08\u8cc7\u6599"]})),r.a.createElement("div",{className:c.space}),r.a.createElement(Se,{id:m}),r.a.createElement("div",{className:c.space}),r.a.createElement(Ce,{id:m,funcName:b["\u5206\u985e"]}),r.a.createElement("div",{className:c.space}),r.a.createElement(Le,{id:m}))):null},hideFromMenu:!0}].map((function(e){return e.documentTitle=e.documentTitle||e.title,e})),De=a(402),Te=a.n(De);var Fe=function(e){var t=e.url,a=e.title,n=void 0===a?"GitHub":a,c=e.className,o=t?t.startsWith("https://github.com/")?t:"https://github.com/".concat(t):void 0;return r.a.createElement(Y,{className:c,disabled:!0,url:o,title:n,icon:r.a.createElement(Te.a,null)})},Me=Object(m.a)((function(e){return{appBar:{},title:{marginRight:e.spacing(1),cursor:"pointer"},space:{flexGrow:1},button:{marginLeft:e.spacing(1),marginRight:e.spacing(1)}}}));var He=function(){var e=Me(),t=Object(b.g)(),a=Object(n.useState)(),c=Object(u.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,L.get("lastUpdatedAt");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement(g.a,{position:"fixed",color:"default",className:e.appBar},r.a.createElement(x.a,{variant:"dense"},r.a.createElement(w.a,{variant:"h6",className:e.title,onClick:function(){return t.push("/")}},"\u67e5\u67e5\u91ab\u7642\u54c1\u9805"),Ie.filter((function(e){return!e.hideFromMenu})).map((function(e){var t=e.title,a=e.path;return r.a.createElement(y.a,{to:a,key:t,component:f.b},t)})),r.a.createElement("div",{className:e.space}),r.a.createElement(Fe,{className:e.button,url:"chunyenHuang/nhi-open-data-tool"}),o&&r.a.createElement(w.a,{variant:"body2",color:"textSecondary"},"\u8cc7\u6599\u66f4\u65b0\u65bc ",j()(o).fromNow())))},ze=Object(m.a)((function(e){return{main:{display:"flex",padding:e.spacing(4)},spinner:{position:"absolute",top:150,left:"calc(50% - 20px)"},container:{paddingTop:48,flexGrow:1}}}));var _e=function(e){var t=ze(),a=Object(n.useState)(!0),c=Object(u.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W("report",{bypassCache:!0});case 2:return t=e.sent,a=t.lastUpdatedAt,e.next=6,L.get("lastUpdatedAt");case 6:if(n=e.sent,a===n){e.next=10;break}return e.next=10,L.purge();case 10:return e.next=12,L.set("lastUpdatedAt",a);case 12:setTimeout((function(){l(!1)}),500);case 13:case"end":return e.stop()}}),e)})))()}),[]),o?r.a.createElement(p.a,{className:t.spinner}):r.a.createElement(d.a,{className:t.main,maxWidth:"xl"},r.a.createElement(f.a,{basename:"/"},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(p.a,{className:t.spinner})},r.a.createElement(v.a,null),r.a.createElement(He,null),r.a.createElement("main",{className:t.container},r.a.createElement(b.d,null,Ie.map((function(e){return r.a.createElement(b.b,{path:e.path,exact:e.exact,key:e.path,render:function(t){return r.a.createElement(E.a,{title:"".concat(e.documentTitle)},r.a.createElement(e.component,t))}})})),r.a.createElement(b.a,{to:"/"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[421,1,2]]]);
//# sourceMappingURL=main.6b47442e.chunk.js.map