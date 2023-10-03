"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1930],{71163:function(e,n,t){t.d(n,{f:function(){return O}});var r=t(56168),o=t(50846),a=t(98449),i=(0,t(20496).k)({root:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}),c=t(88316),l=t(65910),u=t(80916),s=t(16214),p=Object.defineProperty,f=Object.defineProperties,d=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,y=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,b=(e,n)=>{for(var t in n||(n={}))m.call(n,t)&&y(e,t,n[t]);if(v)for(var t of v(n))g.call(n,t)&&y(e,t,n[t]);return e};const h={overlayOpacity:.75,transitionDuration:0,zIndex:(0,o.w)("overlay")},O=(0,r.forwardRef)(((e,n)=>{const t=(0,a.N4)("LoadingOverlay",h,e),{className:o,visible:p,loaderProps:y,overlayOpacity:O,overlayColor:D,transitionDuration:w,exitTransitionDuration:x,zIndex:j,style:k,loader:E,radius:F,overlayBlur:A,unstyled:S}=t,P=((e,n)=>{var t={};for(var r in e)m.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&v)for(var r of v(e))n.indexOf(r)<0&&g.call(e,r)&&(t[r]=e[r]);return t})(t,["className","visible","loaderProps","overlayOpacity","overlayColor","transitionDuration","exitTransitionDuration","zIndex","style","loader","radius","overlayBlur","unstyled"]),{classes:C,cx:z,theme:I}=i(null,{name:"LoadingOverlay",unstyled:S}),R=`calc(${j} + 1)`;return r.createElement(c.u,{duration:w,exitDuration:x,mounted:p,transition:"fade"},(e=>{return r.createElement(l.x,b({className:z(C.root,o),style:(t=b(b({},e),k),a={zIndex:j},f(t,d(a))),ref:n},P),E?r.createElement("div",{style:{zIndex:R}},E):r.createElement(u.a,b({style:{zIndex:R}},y)),r.createElement(s.a,{opacity:O,zIndex:j,radius:F,blur:A,unstyled:S,color:D||("dark"===I.colorScheme?I.colors.dark[5]:I.white)}));var t,a}))}));O.displayName="@mantine/core/LoadingOverlay"},22174:function(e,n,t){t.d(n,{fh:function(){return xn}});var r=t(56168),o=t(50846),a=t(98449),i=t(77338),c=t(65910),l=t(65617),u=t(50862),s=t.n(u);function p(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(n){a(n)}}function c(e){try{l(r.throw(e))}catch(n){a(n)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}l((r=r.apply(e,n||[])).next())}))}function f(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(l){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=n.call(e,i)}catch(l){c=[6,l],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}Object.create;function d(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,a=t.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(t=a.return)&&t.call(a)}finally{if(o)throw o.error}}return i}function v(e,n,t){if(t||2===arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}Object.create;var m=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function g(e,n){var t=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var t=n.split(".").pop().toLowerCase(),r=m.get(t);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof t.path){var r=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"===typeof n?n:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}var y=[".DS_Store","Thumbs.db"];function b(e){return"object"===typeof e&&null!==e}function h(e){return x(e.target.files).map((function(e){return g(e)}))}function O(e){return p(this,void 0,void 0,(function(){return f(this,(function(n){switch(n.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,n.sent().map((function(e){return g(e)}))]}}))}))}function D(e,n){return p(this,void 0,void 0,(function(){var t;return f(this,(function(r){switch(r.label){case 0:return e.items?(t=x(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,t]:[4,Promise.all(t.map(j))]):[3,2];case 1:return[2,w(k(r.sent()))];case 2:return[2,w(x(e.files).map((function(e){return g(e)})))]}}))}))}function w(e){return e.filter((function(e){return-1===y.indexOf(e.name)}))}function x(e){if(null===e)return[];for(var n=[],t=0;t<e.length;t++){var r=e[t];n.push(r)}return n}function j(e){if("function"!==typeof e.webkitGetAsEntry)return E(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?A(n):E(e)}function k(e){return e.reduce((function(e,n){return v(v([],d(e),!1),d(Array.isArray(n)?k(n):[n]),!1)}),[])}function E(e){var n=e.getAsFile();if(!n)return Promise.reject("".concat(e," is not a File"));var t=g(n);return Promise.resolve(t)}function F(e){return p(this,void 0,void 0,(function(){return f(this,(function(n){return[2,e.isDirectory?A(e):S(e)]}))}))}function A(e){var n=e.createReader();return new Promise((function(e,t){var r=[];!function o(){var a=this;n.readEntries((function(n){return p(a,void 0,void 0,(function(){var a,i,c;return f(this,(function(l){switch(l.label){case 0:if(n.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return a=l.sent(),e(a),[3,4];case 3:return i=l.sent(),t(i),[3,4];case 4:return[3,6];case 5:c=Promise.all(n.map(F)),r.push(c),o(),l.label=6;case 6:return[2]}}))}))}),(function(e){t(e)}))}()}))}function S(e){return p(this,void 0,void 0,(function(){return f(this,(function(n){return[2,new Promise((function(n,t){e.file((function(t){var r=g(t,e.fullPath);n(r)}),(function(e){t(e)}))}))]}))}))}var P=t(5175);function C(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||T(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?z(Object(t),!0).forEach((function(n){R(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function R(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function N(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}(e,n)||T(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,n){if(e){if("string"===typeof e)return L(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?L(e,n):void 0}}function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var M="file-invalid-type",B="file-too-large",K="file-too-small",_="too-many-files",$=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:M,message:"File type must be ".concat(n)}},U=function(e){return{code:B,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},q=function(e){return{code:K,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},W={code:_,message:"Too many files"};function G(e,n){var t="application/x-moz-file"===e.type||(0,P.Z)(e,n);return[t,t?null:$(n)]}function H(e,n,t){if(Z(e.size))if(Z(n)&&Z(t)){if(e.size>t)return[!1,U(t)];if(e.size<n)return[!1,q(n)]}else{if(Z(n)&&e.size<n)return[!1,q(n)];if(Z(t)&&e.size>t)return[!1,U(t)]}return[!0,null]}function Z(e){return void 0!==e&&null!==e}function Y(e){var n=e.files,t=e.accept,r=e.minSize,o=e.maxSize,a=e.multiple,i=e.maxFiles,c=e.validator;return!(!a&&n.length>1||a&&i>=1&&n.length>i)&&n.every((function(e){var n=N(G(e,t),1)[0],a=N(H(e,r,o),1)[0],i=c?c(e):null;return n&&a&&!i}))}function J(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function Q(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function V(e){e.preventDefault()}function X(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function ee(e){return-1!==e.indexOf("Edge/")}function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return X(e)||ee(e)}function te(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return n.some((function(n){return!J(e)&&n&&n.apply(void 0,[e].concat(r)),J(e)}))}}function re(){return"showOpenFilePicker"in window}function oe(e){return Z(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var n=N(e,2),t=n[0],r=n[1],o=!0;return le(t)||(console.warn('Skipped "'.concat(t,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(ue)||(console.warn('Skipped "'.concat(t,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,n){var t=N(n,2),r=t[0],o=t[1];return I(I({},e),{},R({},r,o))}),{})}]:e}function ae(e){if(Z(e))return Object.entries(e).reduce((function(e,n){var t=N(n,2),r=t[0],o=t[1];return[].concat(C(e),[r],C(o))}),[]).filter((function(e){return le(e)||ue(e)})).join(",")}function ie(e){return e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)}function ce(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}function le(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function ue(e){return/^.*\.[\w]+$/.test(e)}var se=["children"],pe=["open"],fe=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],de=["refKey","onChange","onClick"];function ve(e){return function(e){if(Array.isArray(e))return ye(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||ge(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function me(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}(e,n)||ge(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ge(e,n){if(e){if("string"===typeof e)return ye(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ye(e,n):void 0}}function ye(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function be(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function he(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?be(Object(t),!0).forEach((function(n){Oe(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):be(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Oe(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function De(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var we=(0,r.forwardRef)((function(e,n){var t=e.children,o=ke(De(e,se)),a=o.open,i=De(o,pe);return(0,r.useImperativeHandle)(n,(function(){return{open:a}}),[a]),r.createElement(r.Fragment,null,t(he(he({},i),{},{open:a})))}));we.displayName="Dropzone";var xe={disabled:!1,getFilesFromEvent:function(e){return p(this,void 0,void 0,(function(){return f(this,(function(n){return b(e)&&b(e.dataTransfer)?[2,D(e.dataTransfer,e.type)]:function(e){return b(e)&&b(e.target)}(e)?[2,h(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"===typeof e.getFile}))?[2,O(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};we.defaultProps=xe,we.propTypes={children:s().func,accept:s().objectOf(s().arrayOf(s().string)),multiple:s().bool,preventDropOnDocument:s().bool,noClick:s().bool,noKeyboard:s().bool,noDrag:s().bool,noDragEventsBubbling:s().bool,minSize:s().number,maxSize:s().number,maxFiles:s().number,disabled:s().bool,getFilesFromEvent:s().func,onFileDialogCancel:s().func,onFileDialogOpen:s().func,useFsAccessApi:s().bool,autoFocus:s().bool,onDragEnter:s().func,onDragLeave:s().func,onDragOver:s().func,onDrop:s().func,onDropAccepted:s().func,onDropRejected:s().func,onError:s().func,validator:s().func};var je={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function ke(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=he(he({},xe),e),t=n.accept,o=n.disabled,a=n.getFilesFromEvent,i=n.maxSize,c=n.minSize,l=n.multiple,u=n.maxFiles,s=n.onDragEnter,p=n.onDragLeave,f=n.onDragOver,d=n.onDrop,v=n.onDropAccepted,m=n.onDropRejected,g=n.onFileDialogCancel,y=n.onFileDialogOpen,b=n.useFsAccessApi,h=n.autoFocus,O=n.preventDropOnDocument,D=n.noClick,w=n.noKeyboard,x=n.noDrag,j=n.noDragEventsBubbling,k=n.onError,E=n.validator,F=(0,r.useMemo)((function(){return ae(t)}),[t]),A=(0,r.useMemo)((function(){return oe(t)}),[t]),S=(0,r.useMemo)((function(){return"function"===typeof y?y:Fe}),[y]),P=(0,r.useMemo)((function(){return"function"===typeof g?g:Fe}),[g]),C=(0,r.useRef)(null),z=(0,r.useRef)(null),I=(0,r.useReducer)(Ee,je),R=me(I,2),N=R[0],T=R[1],L=N.isFocused,M=N.isFileDialogActive,B=(0,r.useRef)("undefined"!==typeof window&&window.isSecureContext&&b&&re()),K=function(){!B.current&&M&&setTimeout((function(){z.current&&(z.current.files.length||(T({type:"closeDialog"}),P()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",K,!1),function(){window.removeEventListener("focus",K,!1)}}),[z,M,P,B]);var _=(0,r.useRef)([]),$=function(e){C.current&&C.current.contains(e.target)||(e.preventDefault(),_.current=[])};(0,r.useEffect)((function(){return O&&(document.addEventListener("dragover",V,!1),document.addEventListener("drop",$,!1)),function(){O&&(document.removeEventListener("dragover",V),document.removeEventListener("drop",$))}}),[C,O]),(0,r.useEffect)((function(){return!o&&h&&C.current&&C.current.focus(),function(){}}),[C,h,o]);var U=(0,r.useCallback)((function(e){k?k(e):console.error(e)}),[k]),q=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Ae(e),_.current=[].concat(ve(_.current),[e.target]),Q(e)&&Promise.resolve(a(e)).then((function(n){if(!J(e)||j){var t=n.length,r=t>0&&Y({files:n,accept:F,minSize:c,maxSize:i,multiple:l,maxFiles:u,validator:E});T({isDragAccept:r,isDragReject:t>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}})).catch((function(e){return U(e)}))}),[a,s,U,j,F,c,i,l,u,E]),Z=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Ae(e);var n=Q(e);if(n&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(t){}return n&&f&&f(e),!1}),[f,j]),X=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Ae(e);var n=_.current.filter((function(e){return C.current&&C.current.contains(e)})),t=n.indexOf(e.target);-1!==t&&n.splice(t,1),_.current=n,n.length>0||(T({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Q(e)&&p&&p(e))}),[C,p,j]),ee=(0,r.useCallback)((function(e,n){var t=[],r=[];e.forEach((function(e){var n=me(G(e,F),2),o=n[0],a=n[1],l=me(H(e,c,i),2),u=l[0],s=l[1],p=E?E(e):null;if(o&&u&&!p)t.push(e);else{var f=[a,s];p&&(f=f.concat(p)),r.push({file:e,errors:f.filter((function(e){return e}))})}})),(!l&&t.length>1||l&&u>=1&&t.length>u)&&(t.forEach((function(e){r.push({file:e,errors:[W]})})),t.splice(0)),T({acceptedFiles:t,fileRejections:r,type:"setFiles"}),d&&d(t,r,n),r.length>0&&m&&m(r,n),t.length>0&&v&&v(t,n)}),[T,l,F,c,i,u,d,v,m,E]),le=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Ae(e),_.current=[],Q(e)&&Promise.resolve(a(e)).then((function(n){J(e)&&!j||ee(n,e)})).catch((function(e){return U(e)})),T({type:"reset"})}),[a,ee,U,j]),ue=(0,r.useCallback)((function(){if(B.current){T({type:"openDialog"}),S();var e={multiple:l,types:A};window.showOpenFilePicker(e).then((function(e){return a(e)})).then((function(e){ee(e,null),T({type:"closeDialog"})})).catch((function(e){ie(e)?(P(e),T({type:"closeDialog"})):ce(e)?(B.current=!1,z.current?(z.current.value=null,z.current.click()):U(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):U(e)}))}else z.current&&(T({type:"openDialog"}),S(),z.current.value=null,z.current.click())}),[T,S,P,b,ee,U,A,l]),se=(0,r.useCallback)((function(e){C.current&&C.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),ue()))}),[C,ue]),pe=(0,r.useCallback)((function(){T({type:"focus"})}),[]),ge=(0,r.useCallback)((function(){T({type:"blur"})}),[]),ye=(0,r.useCallback)((function(){D||(ne()?setTimeout(ue,0):ue())}),[D,ue]),be=function(e){return o?null:e},we=function(e){return w?null:be(e)},ke=function(e){return x?null:be(e)},Ae=function(e){j&&e.stopPropagation()},Se=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,r=e.role,a=e.onKeyDown,i=e.onFocus,c=e.onBlur,l=e.onClick,u=e.onDragEnter,s=e.onDragOver,p=e.onDragLeave,f=e.onDrop,d=De(e,fe);return he(he(Oe({onKeyDown:we(te(a,se)),onFocus:we(te(i,pe)),onBlur:we(te(c,ge)),onClick:be(te(l,ye)),onDragEnter:ke(te(u,q)),onDragOver:ke(te(s,Z)),onDragLeave:ke(te(p,X)),onDrop:ke(te(f,le)),role:"string"===typeof r&&""!==r?r:"presentation"},t,C),o||w?{}:{tabIndex:0}),d)}}),[C,se,pe,ge,ye,q,Z,X,le,w,x,o]),Pe=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),Ce=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,r=e.onChange,o=e.onClick,a=De(e,de),i=Oe({accept:F,multiple:l,type:"file",style:{display:"none"},onChange:be(te(r,le)),onClick:be(te(o,Pe)),tabIndex:-1},t,z);return he(he({},i),a)}}),[z,t,l,le,o]);return he(he({},N),{},{isFocused:L&&!o,getRootProps:Se,getInputProps:Ce,rootRef:C,inputRef:z,open:be(ue)})}function Ee(e,n){switch(n.type){case"focus":return he(he({},e),{},{isFocused:!0});case"blur":return he(he({},e),{},{isFocused:!1});case"openDialog":return he(he({},je),{},{isFileDialogActive:!0});case"closeDialog":return he(he({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return he(he({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return he(he({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return he({},je);default:return e}}function Fe(){}var Ae=t(71163),Se=t(96902),Pe=t(87671);const[Ce,ze]=(0,Pe.R)("Dropzone component was not found in tree");var Ie=t(81785),Re=t(57152),Ne=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;function Me(e){const n=n=>{const t=(0,a.N4)(`Dropzone${(0,Ie.j)(e)}`,{},n),{children:o}=t,i=((e,n)=>{var t={};for(var r in e)Te.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&Ne)for(var r of Ne(e))n.indexOf(r)<0&&Le.call(e,r)&&(t[r]=e[r]);return t})(t,["children"]),c=ze(),l=(0,Re.k)(o)?o:r.createElement("span",null,o);return c[e]?(0,r.cloneElement)(l,i):null};return n.displayName=`@mantine/dropzone/${(0,Ie.j)(e)}`,n}const Be=Me("accept"),Ke=Me("reject"),_e=Me("idle");var $e=t(20496),Ue=Object.defineProperty,qe=Object.defineProperties,We=Object.getOwnPropertyDescriptors,Ge=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,Ye=(e,n,t)=>n in e?Ue(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Je=(e,n)=>{for(var t in n||(n={}))He.call(n,t)&&Ye(e,t,n[t]);if(Ge)for(var t of Ge(n))Ze.call(n,t)&&Ye(e,t,n[t]);return e},Qe=(0,$e.k)(((e,{padding:n,radius:t})=>{const r=e.fn.variant({color:"red",variant:"light"}),o=e.fn.variant({color:e.primaryColor,variant:"light"});return{root:(a=Je(Je({},e.fn.fontStyles()),e.fn.focusStyles()),i={boxSizing:"border-box",backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white,border:`2px dashed ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]}`,padding:e.fn.size({size:n,sizes:e.spacing}),borderRadius:e.fn.radius(t),cursor:"pointer",userSelect:"none",transition:"background-color 150ms ease",position:"relative","&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[0]},"&[data-loading]":{cursor:"default","&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white}},"&[data-accept]":{backgroundColor:"dark"===e.colorScheme?o.background:e.colors[e.primaryColor][0],borderColor:"dark"===e.colorScheme?o.border:e.colors[e.primaryColor][4],"&:hover":{backgroundColor:"dark"===e.colorScheme?o.background:e.colors[e.primaryColor][0]}},"&[data-reject]":{backgroundColor:"dark"===e.colorScheme?r.background:e.colors.red[0],borderColor:"dark"===e.colorScheme?r.border:e.colors.red[4],"&:hover":{backgroundColor:"dark"===e.colorScheme?r.background:e.colors.red[0]}}},qe(a,We(i))),inner:{pointerEvents:"none",userSelect:"none"}};var a,i})),Ve=Object.defineProperty,Xe=Object.defineProperties,en=Object.getOwnPropertyDescriptors,nn=Object.getOwnPropertySymbols,tn=Object.prototype.hasOwnProperty,rn=Object.prototype.propertyIsEnumerable,on=(e,n,t)=>n in e?Ve(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,an=(e,n)=>{for(var t in n||(n={}))tn.call(n,t)&&on(e,t,n[t]);if(nn)for(var t of nn(n))rn.call(n,t)&&on(e,t,n[t]);return e},cn=(e,n)=>Xe(e,en(n));const ln={padding:"md",loading:!1,multiple:!0,maxSize:1/0,autoFocus:!1,activateOnClick:!0,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,useFsAccessApi:!0};function un(e){const n=(0,a.N4)("Dropzone",ln,e),{className:t,padding:o,radius:i,disabled:l,classNames:u,styles:s,loading:p,multiple:f,maxSize:d,accept:v,children:m,onDropAny:g,onDrop:y,onReject:b,openRef:h,name:O,unstyled:D,maxFiles:w,autoFocus:x,activateOnClick:j,activateOnDrag:k,dragEventsBubbling:E,activateOnKeyboard:F,onDragEnter:A,onDragLeave:S,onDragOver:P,onFileDialogCancel:C,onFileDialogOpen:z,preventDropOnDocument:I,useFsAccessApi:R,getFilesFromEvent:N,validator:T}=n,L=((e,n)=>{var t={};for(var r in e)tn.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&nn)for(var r of nn(e))n.indexOf(r)<0&&rn.call(e,r)&&(t[r]=e[r]);return t})(n,["className","padding","radius","disabled","classNames","styles","loading","multiple","maxSize","accept","children","onDropAny","onDrop","onReject","openRef","name","unstyled","maxFiles","autoFocus","activateOnClick","activateOnDrag","dragEventsBubbling","activateOnKeyboard","onDragEnter","onDragLeave","onDragOver","onFileDialogCancel","onFileDialogOpen","preventDropOnDocument","useFsAccessApi","getFilesFromEvent","validator"]),{classes:M,cx:B}=Qe({radius:i,padding:o},{classNames:u,styles:s,unstyled:D,name:"Dropzone"}),{getRootProps:K,getInputProps:_,isDragAccept:$,isDragReject:U,open:q}=ke(an({onDrop:g,onDropAccepted:y,onDropRejected:b,disabled:l||p,accept:Array.isArray(v)?v.reduce(((e,n)=>cn(an({},e),{[n]:[]})),{}):v,multiple:f,maxSize:d,maxFiles:w,autoFocus:x,noClick:!j,noDrag:!k,noDragEventsBubbling:!E,noKeyboard:!F,onDragEnter:A,onDragLeave:S,onDragOver:P,onFileDialogCancel:C,onFileDialogOpen:z,preventDropOnDocument:I,useFsAccessApi:R,validator:T},N?{getFilesFromEvent:N}:null));(0,Se.k)(h,q);const W=!$&&!U;return r.createElement(Ce,{value:{accept:$,reject:U,idle:W}},r.createElement(c.x,cn(an(an({},L),K()),{"data-accept":$||void 0,"data-reject":U||void 0,"data-idle":W||void 0,"data-loading":p||void 0,className:B(M.root,t)}),r.createElement(Ae.f,{visible:p,radius:i,unstyled:D}),r.createElement("input",cn(an({},_()),{name:O})),r.createElement("div",{className:M.inner},m)))}un.displayName="@mantine/dropzone/Dropzone",un.Accept=Be,un.Reject=Ke,un.Idle=_e;const sn=un;var pn=(0,$e.k)((e=>({wrapper:{position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,display:"flex",padding:e.spacing.xs,transition:"opacity 100ms ease"},dropzone:{flex:1}}))),fn=Object.defineProperty,dn=Object.defineProperties,vn=Object.getOwnPropertyDescriptors,mn=Object.getOwnPropertySymbols,gn=Object.prototype.hasOwnProperty,yn=Object.prototype.propertyIsEnumerable,bn=(e,n,t)=>n in e?fn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,hn=(e,n)=>{for(var t in n||(n={}))gn.call(n,t)&&bn(e,t,n[t]);if(mn)for(var t of mn(n))yn.call(n,t)&&bn(e,t,n[t]);return e},On=(e,n)=>dn(e,vn(n));const Dn={padding:"md",loading:!1,multiple:!0,maxSize:1/0,autoFocus:!1,activateOnClick:!0,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,active:!0,zIndex:(0,o.w)("max"),withinPortal:!0};function wn(e){const n=(0,a.N4)("DropzoneFullScreen",Dn,e),{classNames:t,styles:o,sx:u,className:s,style:p,unstyled:f,active:d,onDrop:v,onReject:m,zIndex:g,withinPortal:y}=n,b=((e,n)=>{var t={};for(var r in e)gn.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&mn)for(var r of mn(e))n.indexOf(r)<0&&yn.call(e,r)&&(t[r]=e[r]);return t})(n,["classNames","styles","sx","className","style","unstyled","active","onDrop","onReject","zIndex","withinPortal"]),[h,O]=r.useState(0),[D,{open:w,close:x}]=(0,l.q)(!1),{classes:j,cx:k}=pn(null,{name:"DropzoneFullScreen",classNames:t,styles:o,unstyled:f}),E=e=>{e.dataTransfer.types.includes("Files")&&(O((e=>e+1)),w())},F=()=>{O((e=>e-1))};return(0,r.useEffect)((()=>{0===h&&x()}),[h]),(0,r.useEffect)((()=>{if(d)return document.addEventListener("dragenter",E,!1),document.addEventListener("dragleave",F,!1),()=>{document.removeEventListener("dragenter",E,!1),document.removeEventListener("dragleave",F,!1)}}),[d]),r.createElement(i.q,{withinPortal:y},r.createElement(c.x,{className:k(j.wrapper,s),sx:u,style:On(hn({},p),{opacity:D?1:0,pointerEvents:D?"all":"none",zIndex:g})},r.createElement(un,On(hn({},b),{classNames:t,styles:o,unstyled:f,className:j.dropzone,onDrop:e=>{null==v||v(e),x()},onReject:e=>{null==m||m(e),x()}}))))}wn.displayName="@mantine/dropzone/DropzoneFullScreen",sn.FullScreen=wn;const xn=sn},76652:function(e,n,t){t.d(n,{d1:function(){return r}});const r=["image/png","image/gif","image/jpeg","image/svg+xml","image/webp"]},65617:function(e,n,t){t.d(n,{q:function(){return o}});var r=t(56168);function o(e,n){const[t,o]=(0,r.useState)(e),a=()=>{var e;t||(o(!0),null==(e=null==n?void 0:n.onOpen)||e.call(n))},i=()=>{var e;t&&(o(!1),null==(e=null==n?void 0:n.onClose)||e.call(n))};return[t,{open:a,close:i,toggle:()=>{t?i():a()}}]}},81785:function(e,n,t){function r(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)}t.d(n,{j:function(){return r}})},5175:function(e,n){n.Z=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),a=o.replace(/\/.*$/,"");return t.some((function(e){var n=e.trim().toLowerCase();return"."===n.charAt(0)?r.toLowerCase().endsWith(n):n.endsWith("/*")?a===n.replace(/\/.*$/,""):o===n}))}return!0}}}]);