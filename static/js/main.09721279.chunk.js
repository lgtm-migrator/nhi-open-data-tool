(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{299:function(e,t,a){e.exports=a(337)},304:function(e,t,a){},337:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),i=(a(304),a(13)),l=a.n(i),s=a(20),u=a(25),p=a(247),m=a(364),f=a(361),d=a(178),b=a(21),h=a(365),v=a(126),g=a.n(v),E=a(135),x=a.n(E),w=a(363),y=a(254),O=a(246),j=a(72),k=a(277),P=a.n(k),N=a(174),R=a(245);var C=function(e){var t=e.url,a=void 0===t?"":t,n=e.title,c=void 0===n?"Visit":n,o=e.tooltip,i=e.icon,l=e.className,s=e.variant,u=void 0===s?"outlined":s,p=e.target,m=void 0===p?"_self":p;if("string"!==typeof a)return null;var f=!a||""===a||!a.startsWith("http")&&!a.startsWith("/"),d=o||(f?"":c);return i?r.a.createElement(R.a,{title:d},r.a.createElement("span",null,r.a.createElement(N.a,{className:l,disabled:f,"aria-label":c,target:"_blank",href:a,size:"small"},i))):a.startsWith("/")?r.a.createElement(O.a,{className:l,variant:u,color:"primary",size:"small",to:a,disabled:f,component:x.a,target:m},c):r.a.createElement(O.a,{className:l,variant:u,color:"primary",size:"small",target:"_blank",href:a,disabled:f},c)},S=new(a(279).a)("nhi-open-data-tool");S.version(1).stores({cache:"++id,key"});var A={purge:function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.delete();case 2:return e.next=4,S.open();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),get:function(){var e=Object(s.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.table("cache").where({key:t}).toArray();case 2:if(0!==(a=e.sent).length){e.next=5;break}return e.abrupt("return");case 5:if(a[0].expiredAt&&!(a[0].expiredAt<Date.now())){e.next=7;break}return e.abrupt("return");case 7:return e.abrupt("return",a[0].data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),set:function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.table("cache").where({key:t}).toArray();case 2:if(n=e.sent,r=Date.now()+216e5,0!==n.length){e.next=9;break}return e.next=7,S.table("cache").add({key:t,data:a,expiredAt:r});case 7:e.next=11;break;case 9:return e.next=11,S.table("cache").update(n[0].id,{key:t,data:a,expiredAt:r});case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},W="https://raw.githubusercontent.com/chunyenHuang/nhi-open-data-tool/master/data/latest";function B(e){return I.apply(this,arguments)}function I(){return(I=Object(s.a)(l.a.mark((function e(t){var a,n,r,c,o,i,s,u=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:{},n=a.bypassCache,r=void 0!==n&&n,t=t.endsWith(".json")?t:"".concat(t,".json"),c="api:".concat(t),e.next=6,A.get(c);case 6:if(o=e.sent,r||!o){e.next=9;break}return e.abrupt("return",o);case 9:return e.next=11,fetch("".concat(W,"/").concat(t));case 11:return i=e.sent,e.next=14,i.json();case 14:return s=e.sent,console.log(s),e.next=18,A.set(c,s);case 18:return e.abrupt("return",s);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){return"https://www.nhi.gov.tw/Query4Pic/".concat(e,".jpg")},T=function(e,t){return'<a href="'.concat(t,'" rel="noopener" target="blank" style="none;">').concat(e,"</a>")},M=Object(p.a)((function(e){return{categoryButton:{margin:e.spacing(2)}}}));function H(){var e=M(),t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,B("\u81ea\u4ed8\u5dee\u984d\u54c1\u9805\u985e\u5225");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement(f.a,null,r.a.createElement(j.a,{variant:"h5",component:"h1"},"\u8acb\u554f\u6709\u54ea\u4e9b\u91ab\u7642\u7279\u6750\u985e\u5225\uff0c\u6211\u53ef\u4ee5\u81ea\u4ed8\u5dee\u984d\u4f86\u9078\u7528\u5065\u4fdd\u7d66\u4ed8\u4ee5\u5916\u7684\u54c1\u9805\uff1f"),c.map((function(t){return r.a.createElement(C,{className:e.categoryButton,key:t,title:t,url:"/pcItems?\u985e\u5225[]=".concat(t),target:"_blank"})})))}var _=a(280),F=a.n(_),L=a(281),z=a.n(L),U=a(285),G=a(286),J=a(289),V=a(288),Q=a(252),$=a(251),q=a(250),K=a(272),X=a(4),Y=function(e){Object(J.a)(a,e);var t=Object(V.a)(a);function a(){var e;Object(U.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleRowChange=function(t){e.props.changeRowsPerPage(t.target.value)},e.handlePageChange=function(t,a){e.props.changePage(a)},e}return Object(G.a)(a,[{key:"render",value:function(){var e=this.props,t=e.description,a=void 0===t?"":t,n=e.count,c=e.textLabels,o=e.rowsPerPage,i=e.page;return r.a.createElement(Q.a,null,r.a.createElement($.a,null,r.a.createElement(q.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})),r.a.createElement(q.a,{style:{display:"flex",justifyContent:"flex-end",padding:"0px 24px 0px 24px"},colSpan:1e3},r.a.createElement(K.a,{component:"div",count:n,rowsPerPage:o,page:i,labelRowsPerPage:c.rowsPerPage,labelDisplayedRows:function(e){var t=e.from,a=e.to,n=e.count;return"".concat(t,"-").concat(a," ").concat(c.displayRows," ").concat(n)},backIconButtonProps:{"aria-label":c.previous},nextIconButtonProps:{"aria-label":c.next},rowsPerPageOptions:[10,20,100],onChangePage:this.handlePageChange,onChangeRowsPerPage:this.handleRowChange}))))}}]),a}(r.a.Component),Z=Object(X.a)({},{name:"CustomFooter"})(Y);function ee(e){var t=e.title,a=e.description,n=e.data,c=e.columns,o=e.options,i=Object.assign({enableNestedDataAccess:".",pagination:!0,responsive:"standard",rowsPerPageOptions:[10,20,50,100],rowsPerPage:10,filterType:"multiselect",fixedHeader:!0,resizableColumns:!1,selectableRows:"none",print:!0,download:!0,downloadOptions:{filename:"".concat(t,".csv"),separator:","},expandableRows:!1,isRowExpandable:function(){return!1},isRowSelectable:function(){return!1},onRowClick:function(e,t){var a=n[t.dataIndex];console.log(a)},textLabels:{body:{noMatch:"\u62b1\u6b49\uff0c\u627e\u4e0d\u5230\u76f8\u95dc\u8cc7\u6599",toolTip:"\u6392\u5e8f",columnHeaderTooltip:function(e){return"\u4f7f\u7528[".concat(e.label,"]\u6392\u5e8f")}},pagination:{next:"\u4e0b\u4e00\u9801",previous:"\u4e0a\u4e00\u9801",rowsPerPage:"\u6bcf\u9801\u986f\u793a",displayRows:"\u7e3d\u9801\u6578"},toolbar:{search:"\u641c\u5c0b",downloadCsv:"\u4e0b\u8f09 CSV",print:"\u5217\u5370",viewColumns:"\u986f\u793a\u6b04\u4f4d",filterTable:"\u7be9\u9078\u6578\u64da"},filter:{all:"\u5168\u90e8",title:"\u7be9\u9078\u6578\u64da",reset:"\u91cd\u8a2d"},viewColumns:{title:"\u6b04\u4f4d",titleAria:"\u986f\u793a/\u96b1\u85cf\u6b04\u4f4d"}},customFooter:function(e,t,n,c,o,i){return r.a.createElement(Z,{description:a,count:e,page:t,rowsPerPage:n,changeRowsPerPage:c,changePage:o,textLabels:i})}},o);return r.a.createElement(z.a,{title:t,data:n,columns:c,options:i})}function te(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(a,n){var r=t?-1:1;return a[e]===n[e]?0:r*ae(a[e],n[e])}}var ae=function(e,t){var a,n,r=1,c=0,o=0,i=String.alphabet;function l(e,t,n){if(n){for(a=t;(n=l(e,a))<76&&n>65;)++a;return+e.slice(t-1,a)}return(n=i&&i.indexOf(e.charAt(t)))>-1?n+76:(n=e.charCodeAt(t)||0)<45||n>127?n:n<46?65:n<48?n-1:n<58?n+18:n<65?n-11:n<91?n+11:n<97?n-37:n<123?n+5:n-63}if((e+="")!=(t+=""))for(;r;)if(n=l(e,c++),r=l(t,o++),n<76&&r<76&&n>66&&r>66&&(n=l(e,c,c),r=l(t,o,c=a),o=a),n!=r)return n<r?-1:1;return 0},ne=a(366),re=Object(p.a)((function(e){return{img:{maxHeight:100,maxWidth:"100%"}}}));var ce=function(e){var t=e.value,a=void 0===t?"":t,n=e.alt,c=void 0===n?"-":n,o=re();return r.a.createElement(ne.a,{container:!0,justify:"center",align:"center"},a&&r.a.createElement("img",{src:a,alt:c,className:o.img}))};function oe(e){var t=e.prefilters,a=void 0===t?{}:t,c=Object(n.useState)([]),o=Object(u.a)(c,2),i=o[0],p=o[1];Object(n.useEffect)((function(){Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("\u81ea\u4ed8\u5dee\u984d\u54c1\u9805");case 2:t=e.sent,p(t.sort(te("\u4e2d\u6587")).sort(te("\u5206\u985e")).sort(te("\u985e\u5225")));case 4:case"end":return e.stop()}}),e)})))()}),[]);var m=[{name:"\u4ee3\u78bc",label:"\u5716\u7247",options:{filter:!1,sort:!1,customBodyRender:function(e){return r.a.createElement(ce,{value:D(e)})}}},{name:"\u985e\u5225",label:"\u985e\u5225",options:{filterList:a["\u985e\u5225"]||[],filterOptions:{fullWidth:!0}}},{name:"\u5206\u985e",label:"\u5206\u985e",options:{filterList:a["\u5206\u985e"]||[],filterOptions:{fullWidth:!0}}},{name:"\u4ee3\u78bc",label:"\u4ee3\u78bc",options:{filter:!1}},{name:"\u4e2d\u6587",label:"\u4e2d\u6587",options:{filter:!1}},{name:"\u82f1\u6587",label:"\u82f1\u6587",options:{filter:!1,display:!1}},{name:"\u8a31\u53ef\u8b49\u5b57\u865f",label:"\u8a31\u53ef\u8b49\u5b57\u865f",options:{filter:!1,display:!1}},{name:"\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578",label:"\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578",options:{filter:!1}},{name:"\u6700\u4f4e\u81ea\u4ed8\u5dee\u984d",label:"\u6700\u4f4e\u81ea\u4ed8\u5dee\u984d",options:{filter:!1}},{name:"\u6700\u9ad8\u81ea\u4ed8\u5dee\u984d",label:"\u6700\u9ad8\u81ea\u4ed8\u5dee\u984d",options:{filter:!1}},{name:"\u91ab\u7642\u6a5f\u69cb\u6578",label:"\u91ab\u7642\u6a5f\u69cb\u6578",options:{filter:!1}},{name:"\u4ee3\u78bc",label:" ",options:{filter:!1,sort:!1,customBodyRender:function(e){return r.a.createElement(C,{url:"/pcItem/".concat(e),title:"\u67e5\u770b",target:"_blank"})}}}];return r.a.createElement(ee,{title:"\u81ea\u4ed8\u5dee\u984d\u91ab\u7642\u7279\u6750\u6e05\u55ae",description:T("\u8cc7\u6599\u51fa\u8655\uff1a\u5065\u4fdd\u7f72 \u6c11\u773e\u81ea\u4ed8\u5dee\u984d\u54c1\u9805\u6536\u8cbb\u60c5\u5f62","https://data.nhi.gov.tw/Datasets/DatasetDetail.aspx?id=663&Mid=A110734"),data:i,columns:m})}var ie=a(136);function le(e){var t=e.id,a=Object(n.useState)([]),c=Object(u.a)(a,2),o=c[0],i=c[1];Object(n.useEffect)((function(){t&&Object(s.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("\u81ea\u4ed8\u5dee\u984d\u54c1\u9805\u6536\u8cbb/\u54c1\u9805\u4ee3\u78bc/".concat(t));case 2:if((a=e.sent)[0]){e.next=5;break}return e.abrupt("return");case 5:i(a.sort(te("\u7279\u7d04\u9662\u6240\u6536\u8cbb")));case 6:case"end":return e.stop()}}),e)})))()}),[t]);return r.a.createElement(ee,{title:"\u5404\u5730\u5340\u6a5f\u69cb\u7279\u6750\u6536\u8cbb",data:o,columns:[{name:"\u5206\u5340\u696d\u52d9\u7d44",label:"\u5206\u5340\u696d\u52d9\u7d44",options:{filter:!1,display:!1}},{name:"\u5c31\u91ab\u9662\u6240\u7e23\u5e02\u5225",label:"\u5730\u5340",options:{filterOptions:{fullWidth:!0}}},{name:"\u7279\u7d04\u985e\u5225",label:"\u7279\u7d04\u985e\u5225",options:{filterOptions:{fullWidth:!0}}},{name:"\u91ab\u4e8b\u6a5f\u69cb\u540d\u7a31",label:"\u91ab\u4e8b\u6a5f\u69cb\u540d\u7a31",options:{filterOptions:{fullWidth:!0}}},{name:"\u91ab\u4e8b\u6a5f\u69cb\u7c21\u7a31",label:"\u91ab\u4e8b\u6a5f\u69cb\u7c21\u7a31",options:{filter:!1,display:!1}},{name:"\u91ab\u4e8b\u6a5f\u69cb\u4ee3\u78bc",label:"\u91ab\u4e8b\u6a5f\u69cb\u4ee3\u78bc",options:{filter:!1,display:!1}},{name:"\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578",label:"\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578",options:{filter:!1,display:!1}},{name:"\u7279\u7d04\u9662\u6240\u6536\u8cbb",label:"\u81ea\u4ed8\u5dee\u984d",options:{filter:!1}}]})}function se(e){var t=e.funcName,a=e.id,c=Object(n.useState)([]),o=Object(u.a)(c,2),i=o[0],p=o[1];Object(n.useEffect)((function(){t&&Object(s.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("\u81ea\u4ed8\u5dee\u984d\u54c1\u9805");case 2:a=e.sent,p(a.filter((function(e){return e["\u5206\u985e"]===t})).sort(te("\u6700\u4f4e\u81ea\u4ed8\u5dee\u984d")));case 4:case"end":return e.stop()}}),e)})))()}),[t]);var m=[{name:"\u4ee3\u78bc",label:" ",options:{filter:!1,sort:!1,customBodyRender:function(e){return e===a?"\u672c\u9801\u7522\u54c1":""}}},{name:"\u4ee3\u78bc",label:"\u5716\u7247",options:{filter:!1,sort:!1,customBodyRender:function(e){return r.a.createElement(ce,{value:D(e)})}}},{name:"\u4ee3\u78bc",label:"\u4ee3\u78bc",options:{filter:!1}},{name:"\u4e2d\u6587",label:"\u4e2d\u6587",options:{filter:!1}},{name:"\u82f1\u6587",label:"\u82f1\u6587",options:{filter:!1,display:!1}},{name:"\u8a31\u53ef\u8b49\u5b57\u865f",label:"\u8a31\u53ef\u8b49\u5b57\u865f",options:{filter:!1,display:!1}},{name:"\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578",label:"\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578",options:{filter:!1}},{name:"\u6700\u4f4e\u81ea\u4ed8\u5dee\u984d",label:"\u6700\u4f4e\u81ea\u4ed8\u5dee\u984d",options:{filter:!1}},{name:"\u6700\u9ad8\u81ea\u4ed8\u5dee\u984d",label:"\u6700\u9ad8\u81ea\u4ed8\u5dee\u984d",options:{filter:!1}},{name:"\u4ee3\u78bc",label:" ",options:{filter:!1,sort:!1,customBodyRender:function(e){return r.a.createElement(C,{url:"/item/".concat(e),title:"\u67e5\u770b",target:"_blank"})}}}];return r.a.createElement(ee,{title:"\u76f8\u540c\u529f\u80fd\u5206\u985e\uff1a".concat(t),data:i,columns:m})}function ue(e){var t=e.id,a=Object(n.useState)([]),c=Object(u.a)(a,2),o=c[0],i=c[1];Object(n.useEffect)((function(){t&&Object(s.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("\u81ea\u4ed8\u5dee\u984d\u91ab\u6750\u5c0d\u61c9\u5065\u4fdd\u5168\u984d\u7d66\u4ed8\u54c1\u9805");case 2:a=e.sent,i(a.filter((function(e){return e["\u81ea\u4ed8\u5dee\u984d\u54c1\u9805\u4ee3\u78bc"].includes(t)})).sort(te("\u652f\u4ed8\u9ede\u6578",!0)));case 4:case"end":return e.stop()}}),e)})))()}),[t]);var p=[{name:"\u4ee3\u78bc",label:"\u5716\u7247",options:{filter:!1,sort:!1,customBodyRender:function(e){return r.a.createElement(ce,{value:D(e)})}}},{name:"\u4ee3\u78bc",label:"\u4ee3\u78bc",options:{filter:!1}},{name:"\u540d\u7a31",label:"\u540d\u7a31",options:{filter:!1}},{name:"\u8a31\u53ef\u8b49\u5b57\u865f",label:"\u8a31\u53ef\u8b49\u5b57\u865f",options:{filter:!1,display:!1}},{name:"\u85e5\u5546\u540d\u7a31",label:"\u85e5\u5546\u540d\u7a31"},{name:"\u652f\u4ed8\u9ede\u6578",label:"\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578",options:{filter:!1}}];return r.a.createElement(ee,{title:"\u5c0d\u61c9\u5065\u4fdd\u5168\u984d\u7d66\u4ed8\u54c1\u9805",data:o,columns:p})}var pe=Object(p.a)((function(e){return{container:{flex:1,padding:e.spacing(4)},space:{height:e.spacing(4)},img:{width:"100%"}}}));function me(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("\u5168\u81ea\u8cbb\u54c1\u9805");case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);return r.a.createElement(ee,{title:"\u5168\u81ea\u8cbb\u54c1\u9805\u6e05\u55ae",description:T("\u8cc7\u6599\u51fa\u8655\uff1a\u5065\u4fdd\u7f72 \u6c11\u773e\u5168\u81ea\u8cbb\u54c1\u9805\u6536\u8cbb\u60c5\u5f62","https://data.nhi.gov.tw/Datasets/DatasetDetail.aspx?id=662&Mid=A110734"),data:a,columns:[{name:"\u624b\u8853\u53ca\u88dd\u7f6e",label:"\u624b\u8853\u53ca\u88dd\u7f6e",options:{filterOptions:{fullWidth:!0}}},{name:"\u91ab\u6750\u7a2e\u985e",label:"\u91ab\u6750\u7a2e\u985e",options:{filterOptions:{fullWidth:!0}}},{name:"\u4ee3\u78bc",label:"\u4ee3\u78bc",options:{filter:!1}},{name:"\u4e2d\u6587",label:"\u4e2d\u6587",options:{filter:!1}},{name:"\u82f1\u6587",label:"\u82f1\u6587",options:{filter:!1,display:!1}},{name:"\u8a31\u53ef\u8b49\u5b57\u865f",label:"\u8a31\u53ef\u8b49\u5b57\u865f",options:{filter:!1,display:!1}},{name:"\u672a\u7d0d\u5165\u5065\u4fdd\u7d66\u4ed8\u539f\u56e0",label:"\u672a\u7d0d\u5165\u5065\u4fdd\u7d66\u4ed8\u539f\u56e0",options:{filter:!0,filterOptions:{fullWidth:!0}}},{name:"\u8aaa\u660e",label:"\u8aaa\u660e",options:{filter:!1}},{name:"\u6700\u4f4e\u81ea\u8cbb\u984d",label:"\u6700\u4f4e\u81ea\u8cbb\u984d",options:{filter:!1}},{name:"\u6700\u9ad8\u81ea\u8cbb\u984d",label:"\u6700\u9ad8\u81ea\u8cbb\u984d",options:{filter:!1}},{name:"\u91ab\u7642\u6a5f\u69cb\u6578",label:"\u91ab\u7642\u6a5f\u69cb\u6578",options:{filter:!1}}]})}var fe=[{title:"\u9996\u9801",documentTitle:"",path:"/",exact:!0,component:function(){return r.a.createElement("div",null,r.a.createElement(H,null))}},{title:"\u81ea\u4ed8\u5dee\u984d\u54c1\u9805\u6e05\u55ae",path:"/pcItems",exact:!0,component:function(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement(oe,{prefilters:F.a.parse(t.search,{arrayFormat:"bracket"})}))},hideFromMenu:!1},{title:"\u5168\u81ea\u8cbb\u54c1\u9805\u6e05\u55ae",path:"/ncItems",exact:!0,component:function(){return r.a.createElement("div",null,r.a.createElement(me,null))},hideFromMenu:!1},{title:"",path:"/pcItem/:id",exact:!0,component:function(e){var t=e.id,a=e.match,c=pe(),o=Object(n.useState)(),i=Object(u.a)(o,2),p=i[0],m=i[1],f=Object(n.useState)(),d=Object(u.a)(f,2),b=d[0],h=d[1];return Object(n.useEffect)((function(){if(t)m(t);else if(a){var e=a.params.id;m(e)}}),[t,a]),Object(n.useEffect)((function(){p&&Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("\u81ea\u4ed8\u5dee\u984d\u54c1\u9805");case 2:t=e.sent,a=t.find((function(e){return e["\u4ee3\u78bc"]===p})),console.log(a),h(a);case 7:case"end":return e.stop()}}),e)})))()}),[p]),b?r.a.createElement(g.a,{title:"".concat(b["\u4e2d\u6587"])},r.a.createElement("div",null,r.a.createElement(ie.a,null,r.a.createElement(ne.a,{container:!0},r.a.createElement(ne.a,{container:!0,item:!0,xs:12,sm:2,md:4,alignItems:"center",justify:"center",className:c.container},r.a.createElement("img",{src:D(p),alt:"test",className:c.img})),r.a.createElement(ne.a,{item:!0,xs:12,sm:10,md:8,className:c.container},r.a.createElement(j.a,{variant:"h5",component:"h1"},b["\u4e2d\u6587"]),r.a.createElement(j.a,{variant:"subtitle1",component:"h5"},b["\u82f1\u6587"]),r.a.createElement(j.a,{variant:"body2",component:"p"},"\u4ee3\u78bc\uff1a",b["\u4ee3\u78bc"]),r.a.createElement(j.a,{variant:"body2",component:"p"},"\u985e\u5225\uff1a",b["\u985e\u5225"]," / ",b["\u5206\u985e"]),r.a.createElement(j.a,{variant:"body2",component:"p"},"\u8a31\u53ef\u8b49\u5b57\u865f\uff1a",b["\u8a31\u53ef\u8b49\u5b57\u865f"]),r.a.createElement(j.a,{variant:"body2",component:"p"},"\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578\uff1a",b["\u5065\u4fdd\u7d66\u4ed8\u9ede\u6578"]),r.a.createElement(j.a,{variant:"body2",component:"p"},"\u81ea\u4ed8\u5dee\u984d\u7bc4\u570d\uff1a",b["\u6700\u4f4e\u81ea\u4ed8\u5dee\u984d"]," - ",b["\u6700\u9ad8\u81ea\u4ed8\u5dee\u984d"])))),r.a.createElement("div",{className:c.space}),r.a.createElement(le,{id:p}),r.a.createElement("div",{className:c.space}),r.a.createElement(se,{id:p,funcName:b["\u5206\u985e"]}),r.a.createElement("div",{className:c.space}),r.a.createElement(ue,{id:p}))):null},hideFromMenu:!0}].map((function(e){return e.documentTitle=e.documentTitle||e.title,e})),de=a(287),be=a.n(de);var he=function(e){var t=e.url,a=e.title,n=void 0===a?"GitHub":a,c=e.className,o=t?t.startsWith("https://github.com/")?t:"https://github.com/".concat(t):void 0;return r.a.createElement(C,{className:c,disabled:!0,url:o,title:n,icon:r.a.createElement(be.a,null)})},ve=Object(p.a)((function(e){return{appBar:{},title:{marginRight:e.spacing(1),cursor:"pointer"},space:{flexGrow:1},button:{marginLeft:e.spacing(1),marginRight:e.spacing(1)}}}));var ge=function(){var e=ve(),t=Object(b.useHistory)(),a=Object(n.useState)(),c=Object(u.a)(a,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,A.get("lastUpdatedAt");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement(w.a,{position:"fixed",color:"default",className:e.appBar},r.a.createElement(y.a,{variant:"dense"},r.a.createElement(j.a,{variant:"h6",className:e.title,onClick:function(){return t.push("/")}},"\u67e5\u91ab\u7642\u54c1\u9805"),fe.filter((function(e){return!e.hideFromMenu})).map((function(e){var t=e.title,a=e.path;return r.a.createElement(O.a,{to:a,key:t,component:x.a},t)})),r.a.createElement("div",{className:e.space}),r.a.createElement(he,{className:e.button,url:"chunyenHuang/nhi-open-data-tool"}),o&&r.a.createElement(j.a,{variant:"body2",color:"textSecondary"},"\u8cc7\u6599\u66f4\u65b0\u65bc ",P()(o).fromNow())))},Ee=Object(p.a)((function(e){return{main:{display:"flex",padding:e.spacing(4)},spinner:{position:"absolute",top:150,left:"calc(50% - 20px)"},container:{paddingTop:48,flexGrow:1}}}));var xe=function(e){var t=Ee(),a=Object(n.useState)(!0),c=Object(u.a)(a,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("report",{bypassCache:!0});case 2:return t=e.sent,a=t.lastUpdatedAt,e.next=6,A.get("lastUpdatedAt");case 6:if(n=e.sent,a===n){e.next=10;break}return e.next=10,A.purge();case 10:return e.next=12,A.set("lastUpdatedAt",a);case 12:i(!0);case 13:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement(f.a,{className:t.main,maxWidth:"xl"},r.a.createElement(d.a,{basename:"/"},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(m.a,{className:t.spinner})},r.a.createElement(h.a,null),r.a.createElement(ge,null),!o&&r.a.createElement(m.a,{className:t.spinner}),o&&r.a.createElement("main",{className:t.container},r.a.createElement(b.Switch,null,fe.map((function(e){return r.a.createElement(b.Route,{path:e.path,exact:e.exact,key:e.path,render:function(t){return r.a.createElement(g.a,{title:"".concat(e.documentTitle)},r.a.createElement(e.component,t))}})})),r.a.createElement(b.Redirect,{to:"/"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[299,1,2]]]);
//# sourceMappingURL=main.09721279.chunk.js.map