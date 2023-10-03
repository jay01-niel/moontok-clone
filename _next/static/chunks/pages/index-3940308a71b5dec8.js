(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{76667:function(e,i,r){"use strict";r.d(i,{K:function(){return l}});var n=r(56168),s=r(37033),t=r(78357);function l({spacing:e,offset:i,orientation:r,children:l,role:o,unstyled:a}){return"horizontal"===r?n.createElement(s.Z,{pt:i,spacing:e,role:o,unstyled:a},l):n.createElement(t.K,{pt:i,spacing:e,role:o,unstyled:a},l)}},94237:function(e,i,r){"use strict";r.d(i,{Z:function(){return v}});var n=r(56168),s=r(20496),t=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,h=(e,i,r)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,p=(e,i)=>{for(var r in i||(i={}))c.call(i,r)&&h(e,r,i[r]);if(a)for(var r of a(i))d.call(i,r)&&h(e,r,i[r]);return e};const g={xs:16,sm:20,md:24,lg:30,xl:36};var x=(0,s.k)(((e,{labelPosition:i,size:r})=>{return{root:{},body:{display:"inline-flex"},labelWrapper:(n=p({},e.fn.fontStyles()),s={display:"inline-flex",flexDirection:"column",WebkitTapHighlightColor:"transparent",fontSize:e.fn.size({size:r,sizes:e.fontSizes}),lineHeight:`${e.fn.size({size:r,sizes:g})}px`,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,cursor:e.cursorType,order:"left"===i?1:2},l(n,o(s))),description:{marginTop:`calc(${e.spacing.xs}px / 2)`,["left"===i?"paddingRight":"paddingLeft"]:e.spacing.sm},error:{marginTop:`calc(${e.spacing.xs}px / 2)`,["left"===i?"paddingRight":"paddingLeft"]:e.spacing.sm},label:{cursor:e.cursorType,["left"===i?"paddingRight":"paddingLeft"]:e.spacing.sm,"&[data-disabled]":{color:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[5]}}};var n,s})),m=r(65910),u=r(25600),f=Object.defineProperty,j=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,w=(e,i,r)=>i in e?f(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r;function v(e){var i=e,{__staticSelector:r,className:s,classNames:t,styles:l,unstyled:o,children:a,label:c,description:d,id:h,disabled:p,error:g,size:f,labelPosition:v}=i,z=((e,i)=>{var r={};for(var n in e)b.call(e,n)&&i.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&j)for(var n of j(e))i.indexOf(n)<0&&y.call(e,n)&&(r[n]=e[n]);return r})(i,["__staticSelector","className","classNames","styles","unstyled","children","label","description","id","disabled","error","size","labelPosition"]);const{classes:k,cx:E}=x({size:f,labelPosition:v},{name:r,styles:l,classNames:t,unstyled:o});return n.createElement(m.x,((e,i)=>{for(var r in i||(i={}))b.call(i,r)&&w(e,r,i[r]);if(j)for(var r of j(i))y.call(i,r)&&w(e,r,i[r]);return e})({className:E(k.root,s)},z),n.createElement("div",{className:E(k.body)},a,n.createElement("div",{className:k.labelWrapper},c&&n.createElement("label",{className:k.label,"data-disabled":p||void 0,htmlFor:h},c),d&&n.createElement(u.I.Description,{className:k.description},d),g&&"boolean"!==g&&n.createElement(u.I.Error,{className:k.error},g))))}v.displayName="@mantine/core/InlineInput"},78717:function(e,i,r){"use strict";r.d(i,{r:function(){return K}});var n=r(56168),s=r(28715),t=r(85217),l=r(98449),o=r(76667);const a=(0,n.createContext)(null),c=a.Provider;var d=r(25600),h=Object.defineProperty,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,m=(e,i,r)=>i in e?h(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,u=(e,i)=>{for(var r in i||(i={}))g.call(i,r)&&m(e,r,i[r]);if(p)for(var r of p(i))x.call(i,r)&&m(e,r,i[r]);return e};const f={orientation:"horizontal",spacing:"lg",size:"sm",offset:"xs"},j=(0,n.forwardRef)(((e,i)=>{const r=(0,l.N4)("SwitchGroup",f,e),{children:s,value:a,defaultValue:h,onChange:m,orientation:j,spacing:b,size:y,wrapperProps:w,offset:v}=r,z=((e,i)=>{var r={};for(var n in e)g.call(e,n)&&i.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))i.indexOf(n)<0&&x.call(e,n)&&(r[n]=e[n]);return r})(r,["children","value","defaultValue","onChange","orientation","spacing","size","wrapperProps","offset"]),[k,E]=(0,t.C)({value:a,defaultValue:h,finalValue:[],onChange:m});return n.createElement(c,{value:{value:k,onChange:e=>{const i=e.currentTarget.value;E(k.includes(i)?k.filter((e=>e!==i)):[...k,i])},size:y}},n.createElement(d.I.Wrapper,u(u({labelElement:"div",size:y,__staticSelector:"SwitchGroup",ref:i},w),z),n.createElement(o.K,{spacing:b,orientation:j,offset:v},s)))}));j.displayName="@mantine/core/SwitchGroup";var b=r(20496),y=Object.defineProperty,w=Object.defineProperties,v=Object.getOwnPropertyDescriptors,z=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,N=(e,i,r)=>i in e?y(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,S=(e,i)=>{for(var r in i||(i={}))k.call(i,r)&&N(e,r,i[r]);if(z)for(var r of z(i))E.call(i,r)&&N(e,r,i[r]);return e};const O={xs:16,sm:20,md:24,lg:30,xl:36},C={xs:32,sm:38,md:46,lg:56,xl:72},H={xs:12,sm:14,md:18,lg:22,xl:28},I={xs:5,sm:6,md:7,lg:9,xl:11},Z={xs:4,sm:5,md:6,lg:8,xl:10};var P=(0,b.k)(((e,{size:i,radius:r,color:n,labelPosition:s,error:t})=>{const l=e.fn.size({size:i,sizes:H}),o=e.fn.size({size:r,sizes:e.radius}),a=e.fn.variant({variant:"filled",color:n}),c=e.fn.size({size:i,sizes:C}),d="xs"===i?1:2,h=e.fn.variant({variant:"filled",color:"red"}).background;return{input:{clip:"rect(1px, 1px, 1px, 1px)",height:"1px",overflow:"hidden",width:"1px",whiteSpace:"nowrap",padding:"0",WebkitClipPath:"inset(50%)",clipPath:"inset(50%)"},track:(p=S({},e.fn.focusStyles("input:focus + &")),g={cursor:e.cursorType,overflow:"hidden",WebkitTapHighlightColor:"transparent",position:"relative",borderRadius:o,backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[2],border:`1px solid ${t?h:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]}`,height:e.fn.size({size:i,sizes:O}),minWidth:c,margin:0,transitionProperty:"background-color, border-color",transitionTimingFunction:e.transitionTimingFunction,transitionDuration:"150ms",boxSizing:"border-box",appearance:"none",display:"flex",alignItems:"center",fontSize:e.fn.size({size:i,sizes:I}),fontWeight:600,order:"left"===s?2:1,userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",MsUserSelect:"none",zIndex:0,lineHeight:0,color:"dark"===e.colorScheme?e.colors.dark[1]:e.colors.gray[6],transition:`color 150ms ${e.transitionTimingFunction}`,"input:checked + &":{backgroundColor:a.background,borderColor:a.background,color:e.white,transition:`color 150ms ${e.transitionTimingFunction}`},"input:disabled + &":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2],borderColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2],cursor:"not-allowed"}},w(p,v(g))),thumb:{position:"absolute",zIndex:1,borderRadius:o,boxSizing:"border-box",display:"flex",backgroundColor:e.white,height:l,width:l,border:`1px solid ${"dark"===e.colorScheme?e.white:e.colors.gray[3]}`,left:`${d}px`,transition:`left 150ms ${e.transitionTimingFunction}`,"& > *":{margin:"auto"},"@media (prefers-reduced-motion)":{transitionDuration:e.respectReducedMotion?"0ms":""},"input:checked + * > &":{left:`calc(100% - ${l}px - ${d}px)`,borderColor:e.white},"input:disabled + * > &":{borderColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2],backgroundColor:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[0]}},trackLabel:{height:"100%",display:"grid",placeContent:"center",minWidth:c-l,paddingInline:e.fn.size({size:i,sizes:Z}),margin:`0 0 0 ${l+d}px`,transition:`margin 150ms ${e.transitionTimingFunction}`,"input:checked + * > &":{margin:`0 ${l+d}px 0 0`}}};var p,g})),_=r(40568),W=r(94237),T=Object.defineProperty,L=Object.defineProperties,G=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,M=(e,i,r)=>i in e?T(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r,$=(e,i)=>{for(var r in i||(i={}))V.call(i,r)&&M(e,r,i[r]);if(R)for(var r of R(i))D.call(i,r)&&M(e,r,i[r]);return e};const q={offLabel:"",onLabel:"",size:"sm",radius:"xl",error:!1},K=(0,n.forwardRef)(((e,i)=>{var r;const o=(0,l.N4)("Switch",q,e),{className:c,color:d,label:h,offLabel:p,onLabel:g,id:x,style:m,size:u,radius:f,wrapperProps:j,children:b,unstyled:y,styles:w,classNames:v,thumbIcon:z,sx:k,checked:E,defaultChecked:N,onChange:S,labelPosition:O,description:C,error:H,disabled:I}=o,Z=((e,i)=>{var r={};for(var n in e)V.call(e,n)&&i.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&R)for(var n of R(e))i.indexOf(n)<0&&D.call(e,n)&&(r[n]=e[n]);return r})(o,["className","color","label","offLabel","onLabel","id","style","size","radius","wrapperProps","children","unstyled","styles","classNames","thumbIcon","sx","checked","defaultChecked","onChange","labelPosition","description","error","disabled"]),T=(0,n.useContext)(a),{classes:M}=P({size:(null==T?void 0:T.size)||u,color:d,radius:f,labelPosition:O,error:!!H},{unstyled:y,styles:w,classNames:v,name:"Switch"}),{systemStyles:K,rest:F}=(0,_.x)(Z),X=(0,s.M)(x),A=T?{checked:T.value.includes(F.value),onChange:T.onChange}:{},[B,U]=(0,t.C)({value:null!=(r=A.checked)?r:E,defaultValue:N,finalValue:!1});return n.createElement(W.Z,$($({className:c,sx:k,style:m,id:X,size:(null==T?void 0:T.size)||u,labelPosition:O,label:h,description:C,error:H,disabled:I,__staticSelector:"Switch",classNames:v,styles:w,unstyled:y,"data-checked":A.checked||void 0},K),j),n.createElement("input",(Y=$({},F),J={disabled:I,checked:B,onChange:e=>{T?A.onChange(e):null==S||S(e),U(e.currentTarget.checked)},id:X,ref:i,type:"checkbox",className:M.input},L(Y,G(J)))),n.createElement("label",{htmlFor:X,className:M.track},n.createElement("div",{className:M.thumb},z),n.createElement("div",{className:M.trackLabel},B?g:p)));var Y,J}));K.displayName="@mantine/core/Switch",K.Group=j},45728:function(e,i,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(28268)}])},28268:function(e,i,r){"use strict";r.r(i),r.d(i,{__N_SSP:function(){return V},default:function(){return D}});var n=r(43692),s=r(42299),t=r(21157),l=r(25789),o=r(8014),a=r(20496),c=r(65910),d=r(27071),h=r(26440),p=r(28261),g=r(37033),x=r(78717),m=r(65991),u=r(78357),f=r(57645),j=r(56168),b=(r(34514),r(53897)),y=r(57217),w=r(62044),v=r(78747),z=["size","color"];function k(e){var i=e.size,r=void 0===i?24:i,n=e.color,s=void 0===n?"currentColor":n,t=(0,v.Kd)(e,z);return j.createElement("svg",(0,v.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-circle-plus",width:r,height:r,viewBox:"0 0 24 24",stroke:s,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},t),j.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),j.createElement("circle",{cx:"12",cy:"12",r:"9"}),j.createElement("line",{x1:"9",y1:"12",x2:"15",y2:"12"}),j.createElement("line",{x1:"12",y1:"9",x2:"12",y2:"15"}))}var E=["size","color"];function N(e){var i=e.size,r=void 0===i?24:i,n=e.color,s=void 0===n?"currentColor":n,t=(0,v.Kd)(e,E);return j.createElement("svg",(0,v.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-flame",width:r,height:r,viewBox:"0 0 24 24",stroke:s,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},t),j.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),j.createElement("path",{d:"M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"}))}var S=["size","color"];function O(e){var i=e.size,r=void 0===i?24:i,n=e.color,s=void 0===n?"currentColor":n,t=(0,v.Kd)(e,S);return j.createElement("svg",(0,v.gY)({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-arrow-up-right-circle",width:r,height:r,viewBox:"0 0 24 24",stroke:s,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},t),j.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),j.createElement("circle",{cx:"12",cy:"12",r:"9"}),j.createElement("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),j.createElement("polyline",{points:"15 15 15 9 9 9"}))}var C=r(95289),H=r(50426),I=r(27285),Z=r(72934),P=(r(30933),r(92),r(21021)),_=r(90864),W=r(75657),T=r.n(W),L=r(42664),G=r(16118),R=(0,a.k)((function(e){var i;return{coinLogo:(i={height:30,width:30,minWidth:30},(0,s.Z)(i,e.fn.largerThan("md"),{height:45,width:45}),(0,s.Z)(i,"& img",(0,s.Z)({height:30,width:30},e.fn.largerThan("md"),{height:45,width:45})),i),coinDetailWrapper:(0,s.Z)({gap:13},e.fn.smallerThan("md"),{gap:10}),highlightDesktop:(0,s.Z)({display:"flex"},e.fn.smallerThan("md"),{display:"none"}),highlightMobile:(0,s.Z)({display:"none"},e.fn.smallerThan("md"),{display:"flex"}),moonPressImg:(0,s.Z)({height:70},e.fn.smallerThan("md"),{height:98})}})),V=!0,D=function(e){var i=e.highlights,r=e.news,s=R().classes,a=(0,j.useState)(!0),v=a[0],z=a[1],E=(0,C.a)("(min-width: 1025px)",!1),S=(0,j.useState)("24"),W=S[0],V=S[1],D=(0,j.useState)("24"),M=D[0],$=D[1],q=(0,j.useState)("1"),K=q[0],F=q[1],X=(0,j.useState)(i),A=X[0],B=X[1],U=(0,j.useState)(!0),Y=U[0],J=U[1],Q=(0,C.a)("(max-width: 539px)",!1),ee=(0,t.Z)((0,H._)({key:"promote-content",defaultValue:[]}),2),ie=(ee[0],ee[1]),re=(0,w.Z)("common").t;(0,j.useEffect)((function(){Y||ne()}),[Y,W,K]),(0,j.useEffect)((function(){_.Z.getPromoteContent().then((function(e){ie(e.data)}))}),[]);var ne=function(){var e=(0,n.Z)((function(){return(0,l.__generator)(this,(function(e){switch(e.label){case 0:return[4,y.Z.getCoinHighlight(W,K).then((function(e){e.success&&(B(e.data),$(W))}))];case 1:return e.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}(),se=[{label:"1H",value:"1"},{label:"6H",value:"6"},{label:"24H",value:"24"}],te=[{label:re("NEW_TRENDING_SHORT"),value:L.vD.NEW.toString()},{label:re("ALL_TIME_TRENDING"),value:L.vD.ALL_TIME.toString()}];return(0,o.jsxs)("div",{children:[(0,o.jsx)(b.Z,{}),(0,o.jsx)(P.Z,{isPromote:!0}),(0,o.jsx)(c.x,{mt:"sm",children:(0,o.jsx)(I.tq,{navigation:!0,modules:[Z.W_],slidesPerView:Q?1:E?6:3,spaceBetween:10,children:r.map((function(e){return(0,o.jsx)(I.o5,{style:{height:"100%"},children:(0,o.jsx)("a",{href:"".concat(L.h$.MOONPULSE,"/").concat(e.category_name.toLowerCase(),"/").concat(e.slug),target:"_blank",rel:"noreferrer",children:(0,o.jsx)(d.X,{p:"sm",radius:"lg",shadow:"xl",style:{height:"100%"},children:(0,o.jsxs)(h.r,{children:[(0,o.jsx)(h.r.Col,{xs:6,children:(0,o.jsx)("img",{className:s.moonPressImg,src:e.image,style:{objectFit:"cover",borderRadius:10,width:"100%"}})}),(0,o.jsx)(h.r.Col,{xs:6,children:(0,o.jsx)(p.x,{size:"sm",lineClamp:3,children:e.headline})})]})})})})}))})}),(0,o.jsx)(g.Z,{position:"right",my:"sm",children:(0,o.jsx)(x.r,{checked:v,onChange:function(e){return z(e.currentTarget.checked)},label:re("HIGHLIGHTS")})}),v&&(0,o.jsxs)(g.Z,{grow:!0,align:"flexStart",mb:"md",className:s.highlightDesktop,children:[(0,o.jsxs)(c.x,{children:[(0,o.jsxs)(g.Z,{position:"apart",children:[(0,o.jsxs)(p.x,{style:{display:"flex",alignItems:"center"},size:"md",weight:700,mb:5,variant:"gradient",gradient:{from:"gold",to:"#9f7831"},children:[(0,o.jsx)(k,{size:20,color:"#4caf50",style:{marginRight:5}}),re("HIGHLIGHT_NEW")]}),(0,o.jsx)(T(),{href:"/listings/latest",children:(0,o.jsx)("a",{href:"/listings/latest",children:(0,o.jsxs)(p.x,{color:"gold",children:[re("VIEW_MORE")," ",(0,o.jsx)(G.VG8,{size:12})]})})})]}),(0,o.jsx)(d.X,{shadow:"xl",radius:"md",p:"md",children:A.new.map((function(e,i){return(0,o.jsx)(T(),{passHref:!0,href:"/coins/".concat(e.slug),children:(0,o.jsx)("a",{children:(0,o.jsxs)(g.Z,{grow:!0,position:"apart",mb:i!=A.new.length-1?"sm":0,children:[(0,o.jsxs)(g.Z,{className:s.coinDetailWrapper,style:{maxWidth:"unset",flexWrap:"initial"},children:[(0,o.jsxs)(g.Z,{style:{position:"relative"},children:[(0,o.jsx)(m.q,{className:s.coinLogo,src:e.logo}),(0,o.jsx)(m.q.Group,{limit:2,spacing:10,style:{position:"absolute",right:"-4px",top:"-10px"},children:e.chains.map((function(e){return(0,o.jsx)(m.q,{size:20,radius:"lg",src:e.chain.image})}))})]}),(0,o.jsxs)(u.K,{spacing:0,style:{lineHeight:1},children:[(0,o.jsx)(p.x,{lineClamp:1,weight:900,children:e.symbol}),(0,o.jsx)(p.x,{size:"xs",lineClamp:1,style:{maxWidth:150,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",display:"block"},children:e.name})]})]}),(0,o.jsx)(p.x,{align:"right",style:{flex:1},children:(0,o.jsx)(p.x,{size:"sm",color:e.h24>0?"green":"red",children:e.h24>0?"+".concat(e.h24,"%"):"".concat(e.h24,"%")})})]})})},e.id)}))})]}),(0,o.jsxs)(c.x,{children:[(0,o.jsxs)(g.Z,{position:"apart",children:[(0,o.jsxs)(g.Z,{noWrap:!0,spacing:5,children:[(0,o.jsxs)(p.x,{style:{display:"flex",alignItems:"center"},size:"md",weight:700,mb:5,variant:"gradient",gradient:{from:"gold",to:"#9f7831"},children:[(0,o.jsx)(N,{size:20,color:"pink",style:{marginRight:5}}),re("HIGHLIGHT_TRENDING")]}),(0,o.jsx)(f.s,{sx:function(e){return{marginTop:"-6px",label:{height:25,padding:"3px 10px"}}},size:10,data:te,value:K,onChange:function(e){J(!1),F(e)}})]}),(0,o.jsx)(T(),{href:"/listings/trending",children:(0,o.jsx)("a",{href:"/listings/trending",children:(0,o.jsxs)(p.x,{color:"gold",children:[re("VIEW_MORE")," ",(0,o.jsx)(G.VG8,{size:12})]})})})]}),(0,o.jsx)(d.X,{shadow:"xl",radius:"md",p:"md",children:A.trending.map((function(e,i){return(0,o.jsx)(T(),{passHref:!0,href:"/coins/".concat(e.slug),children:(0,o.jsx)("a",{children:(0,o.jsxs)(g.Z,{grow:!0,position:"apart",mb:i!=A.trending.length-1?"sm":0,children:[(0,o.jsxs)(g.Z,{className:s.coinDetailWrapper,style:{maxWidth:"unset",flexWrap:"initial"},children:[(0,o.jsxs)(g.Z,{style:{position:"relative"},children:[(0,o.jsx)(m.q,{className:s.coinLogo,src:e.logo}),(0,o.jsx)(m.q.Group,{limit:2,spacing:10,style:{position:"absolute",right:"-4px",top:"-10px"},children:e.chains.map((function(e){return(0,o.jsx)(m.q,{size:20,radius:"lg",src:e.chain.image})}))})]}),(0,o.jsxs)(u.K,{spacing:0,style:{lineHeight:1},children:[(0,o.jsx)(p.x,{lineClamp:1,weight:900,children:e.symbol}),(0,o.jsx)(p.x,{size:"xs",lineClamp:1,style:{maxWidth:150,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",display:"block"},children:e.name})]})]}),(0,o.jsx)(p.x,{align:"right",children:(0,o.jsx)(p.x,{size:"sm",color:e.h24>0?"green":"red",children:e.h24>0?"+".concat(e.h24,"%"):"".concat(e.h24,"%")})})]})})},e.id)}))})]}),(0,o.jsxs)(c.x,{children:[(0,o.jsxs)(g.Z,{position:"apart",children:[(0,o.jsxs)(g.Z,{spacing:5,children:[(0,o.jsxs)(p.x,{style:{display:"flex",alignItems:"center"},size:"md",weight:700,mb:5,variant:"gradient",gradient:{from:"gold",to:"#9f7831"},children:[(0,o.jsx)(O,{size:20,color:"#4caf50",style:{marginRight:5}}),re("HIGHLIGHT_GAINERS")]}),(0,o.jsx)(f.s,{sx:function(e){return{marginTop:"-6px",label:{height:25,padding:"3px 10px"}}},size:10,data:se,value:W,onChange:function(e){J(!1),V(e)}})]}),(0,o.jsx)(T(),{href:"/listings/gainers",children:(0,o.jsx)("a",{href:"/listings/gainers",children:(0,o.jsxs)(p.x,{color:"gold",children:[re("VIEW_MORE")," ",(0,o.jsx)(G.VG8,{size:12})]})})})]}),(0,o.jsx)(d.X,{shadow:"xl",radius:"md",p:"sm",children:A.gainers.map((function(e,i){return(0,o.jsx)(T(),{passHref:!0,href:"/coins/".concat(e.slug),children:(0,o.jsx)("a",{children:(0,o.jsxs)(g.Z,{grow:!0,position:"apart",mb:i!=A.gainers.length-1?"sm":0,children:[(0,o.jsxs)(g.Z,{className:s.coinDetailWrapper,style:{maxWidth:"unset",flexWrap:"initial"},children:[(0,o.jsxs)(g.Z,{style:{position:"relative"},children:[(0,o.jsx)(m.q,{className:s.coinLogo,src:e.logo}),(0,o.jsx)(m.q.Group,{limit:2,spacing:10,style:{position:"absolute",right:"-4px",top:"-10px"},children:e.chains.map((function(e){return(0,o.jsx)(m.q,{size:20,radius:"lg",src:e.chain.image})}))})]}),(0,o.jsxs)(u.K,{spacing:0,style:{lineHeight:1},children:[(0,o.jsx)(p.x,{lineClamp:1,weight:900,children:e.symbol}),(0,o.jsx)(p.x,{size:"xs",lineClamp:1,style:{maxWidth:150,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",display:"block"},children:e.name})]})]}),(0,o.jsx)(p.x,{align:"right",style:{flex:1},children:(0,o.jsx)(p.x,{style:{lineHeight:1},size:"sm",color:e["h".concat(M)]>0?"green":"red",children:e["h".concat(M)]>0?"+".concat(e["h".concat(M)],"%"):"".concat(e["h".concat(M)],"%")})})]})})},e.id)}))})]})]}),v&&(0,o.jsxs)(u.K,{grow:!0,mb:"md",className:s.highlightMobile,children:[(0,o.jsxs)(c.x,{children:[(0,o.jsxs)(g.Z,{position:"apart",children:[(0,o.jsxs)(p.x,{style:{display:"flex",alignItems:"center"},size:"md",weight:700,mb:5,color:"gold",children:[(0,o.jsx)(k,{size:20,color:"#4caf50",style:{marginRight:5}}),re("HIGHLIGHT_NEW")]}),(0,o.jsx)(T(),{href:"/listings/latest",children:(0,o.jsx)("a",{href:"/listings/latest",children:(0,o.jsxs)(p.x,{color:"gold",children:[re("VIEW_MORE")," ",(0,o.jsx)(G.VG8,{size:12})]})})})]}),(0,o.jsx)(d.X,{shadow:"xl",radius:"md",p:"sm",children:(0,o.jsx)(g.Z,{grow:!0,position:"apart",children:A.new.map((function(e,i){return(0,o.jsx)(T(),{passHref:!0,href:"/coins/".concat(e.slug),children:(0,o.jsx)("a",{children:(0,o.jsx)(g.Z,{grow:!0,position:"apart",children:(0,o.jsxs)(g.Z,{spacing:5,noWrap:!0,align:"flexStart",children:[(0,o.jsx)(g.Z,{style:{position:"relative"},children:(0,o.jsx)(m.q,{className:s.coinLogo,src:e.logo})}),(0,o.jsxs)(g.Z,{spacing:0,style:{lineHeight:0},children:[(0,o.jsx)(p.x,{style:{lineHeight:1},weight:900,size:"sm",lineClamp:1,children:e.symbol}),(0,o.jsx)(p.x,{style:{lineHeight:1},size:"sm",color:e.h24>0?"green":"red",children:e.h24>0?"+".concat(e.h24,"%"):"".concat(e.h24,"%")})]})]})})})},e.id)}))})})]}),(0,o.jsxs)(c.x,{children:[(0,o.jsxs)(g.Z,{position:"apart",children:[(0,o.jsxs)(g.Z,{noWrap:!0,spacing:5,children:[(0,o.jsxs)(p.x,{style:{display:"flex",alignItems:"center"},size:"md",weight:700,mb:5,color:"gold",children:[(0,o.jsx)(N,{size:20,color:"pink",style:{marginRight:5}}),re("HIGHLIGHT_TRENDING")]}),(0,o.jsx)(f.s,{sx:function(e){return{marginTop:"-6px",label:{height:25,padding:"3px 10px"}}},size:10,data:te,value:K,onChange:function(e){J(!1),F(e)}})]}),(0,o.jsx)(T(),{href:"/listings/trending",children:(0,o.jsx)("a",{href:"/listings/trending",children:(0,o.jsxs)(p.x,{color:"gold",children:[re("VIEW_MORE")," ",(0,o.jsx)(G.VG8,{size:12})]})})})]}),(0,o.jsx)(d.X,{shadow:"xl",radius:"md",p:"sm",children:(0,o.jsx)(g.Z,{grow:!0,children:A.trending.map((function(e,i){return(0,o.jsx)(T(),{passHref:!0,href:"/coins/".concat(e.slug),children:(0,o.jsx)("a",{children:(0,o.jsx)(g.Z,{grow:!0,position:"apart",children:(0,o.jsxs)(g.Z,{spacing:5,noWrap:!0,align:"flexStart",children:[(0,o.jsx)(g.Z,{style:{position:"relative"},children:(0,o.jsx)(m.q,{className:s.coinLogo,src:e.logo})}),(0,o.jsxs)(u.K,{spacing:0,style:{lineHeight:0},children:[(0,o.jsx)(p.x,{style:{lineHeight:1},weight:900,size:"sm",lineClamp:1,children:e.symbol}),(0,o.jsx)(p.x,{style:{lineHeight:1},size:"sm",color:e.h24>0?"green":"red",children:e.h24>0?"+".concat(e.h24,"%"):"".concat(e.h24,"%")})]})]})})})},e.id)}))})})]}),(0,o.jsxs)(c.x,{children:[(0,o.jsxs)(g.Z,{position:"apart",children:[(0,o.jsxs)(g.Z,{spacing:5,children:[(0,o.jsxs)(p.x,{style:{display:"flex",alignItems:"center"},size:"md",weight:700,mb:5,color:"gold",children:[(0,o.jsx)(O,{size:20,color:"#4caf50",style:{marginRight:5}}),re("HIGHLIGHT_GAINERS")]}),(0,o.jsx)(f.s,{sx:function(e){return{marginTop:"-6px",label:{height:25,padding:"3px 10px"}}},size:10,data:se,value:W,onChange:function(e){J(!1),V(e)}})]}),(0,o.jsx)(T(),{href:"/listings/gainers",children:(0,o.jsx)("a",{href:"/listings/gainers",children:(0,o.jsxs)(p.x,{color:"gold",children:[re("VIEW_MORE")," ",(0,o.jsx)(G.VG8,{size:12})]})})})]}),(0,o.jsx)(d.X,{shadow:"xl",radius:"md",p:"sm",children:(0,o.jsx)(g.Z,{grow:!0,children:A.gainers.map((function(e,i){return(0,o.jsx)(T(),{passHref:!0,href:"/coins/".concat(e.slug),children:(0,o.jsx)("a",{children:(0,o.jsxs)(g.Z,{spacing:5,noWrap:!0,align:"flexStart",children:[(0,o.jsx)(g.Z,{style:{position:"relative"},children:(0,o.jsx)(m.q,{className:s.coinLogo,src:e.logo})}),(0,o.jsxs)(u.K,{spacing:0,style:{lineHeight:0},children:[(0,o.jsx)(p.x,{style:{lineHeight:1},size:"sm",weight:900,lineClamp:1,children:e.symbol}),(0,o.jsx)(p.x,{style:{lineHeight:1},size:"sm",color:e["h".concat(M)]>0?"green":"red",children:e["h".concat(M)]>0?"+".concat(e["h".concat(M)],"%"):"".concat(e["h".concat(M)],"%")})]})]})})},e.id)}))})})]})]}),(0,o.jsx)(c.x,{mb:"lg",children:(0,o.jsx)(P.Z,{filterable:!0})})]})}}},function(e){e.O(0,[9584,2651,5768,6203,1021,7134,9774,2888,179],(function(){return i=45728,e(e.s=i);var i}));var i=e.O();_N_E=i}]);