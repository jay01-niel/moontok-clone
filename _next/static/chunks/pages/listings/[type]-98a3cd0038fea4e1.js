(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[432],{72405:function(t){t.exports=function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,i,r){var s,o=function(t,n,i){void 0===i&&(i={});var r=new Date(t),s=function(t,n){void 0===n&&(n={});var i=n.timeZoneName||"short",r=t+"|"+i,s=e[r];return s||(s=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),e[r]=s),s}(n,i);return s.formatToParts(r)},a=function(e,n){for(var i=o(e,n),s=[],a=0;a<i.length;a+=1){var u=i[a],f=u.type,c=u.value,h=t[f];h>=0&&(s[h]=parseInt(c,10))}var l=s[3],m=24===l?0:l,v=s[0]+"-"+s[1]+"-"+s[2]+" "+m+":"+s[4]+":"+s[5]+":000",$=+e;return(r.utc(v).valueOf()-($-=$%1e3))/6e4},u=i.prototype;u.tz=function(t,e){void 0===t&&(t=s);var n=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:t}),a=Math.round((i-new Date(o))/1e3/60),u=r(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-a,!0);if(e){var f=u.utcOffset();u=u.add(n-f,"minute")}return u.$x.$timezone=t,u},u.offsetName=function(t){var e=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var f=u.startOf;u.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return f.call(this,t,e);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return f.call(n,t,e).tz(this.$x.$timezone,!0)},r.tz=function(t,e,n){var i=n&&e,o=n||e||s,u=a(+r(),o);if("string"!=typeof t)return r(t).tz(o);var f=function(t,e,n){var i=t-60*e*1e3,r=a(i,n);if(e===r)return[i,e];var s=a(i-=60*(r-e)*1e3,n);return r===s?[i,r]:[t-60*Math.min(r,s)*1e3,Math.max(r,s)]}(r.utc(t,i).valueOf(),u,o),c=f[0],h=f[1],l=r(c).utcOffset(h);return l.$x.$timezone=o,l},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(t){s=t}}}()},70051:function(t){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(i,r,s){var o=r.prototype;s.utc=function(t){return new r({date:t,utc:!0,args:arguments})},o.utc=function(e){var n=s(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},o.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var a=o.parse;o.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var u=o.init;o.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else u.call(this)};var f=o.utcOffset;o.utcOffset=function(i,r){var s=this.$utils().u;if(s(i))return this.$u?0:s(this.$offset)?f.call(this):this.$offset;if("string"==typeof i&&(i=function(t){void 0===t&&(t="");var i=t.match(e);if(!i)return null;var r=(""+i[0]).match(n)||["-",0,0],s=r[0],o=60*+r[1]+ +r[2];return 0===o?0:"+"===s?o:-o}(i),null===i))return this;var o=Math.abs(i)<=16?60*i:i,a=this;if(r)return a.$offset=o,a.$u=0===i,a;if(0!==i){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(o+u,t)).$offset=o,a.$x.$localOffset=u}else a=this.utc();return a};var c=o.format;o.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return c.call(this,e)},o.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var h=o.toDate;o.toDate=function(t){return"s"===t&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():h.call(this)};var l=o.diff;o.diff=function(t,e,n){if(t&&this.$u===t.$u)return l.call(this,t,e,n);var i=this.local(),r=s(t).local();return l.call(i,r,e,n)}}}()},46607:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/listings/[type]",function(){return n(65850)}])},65850:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return l}});var i=n(42299),r=n(8014),s=n(75332),o=n(56168),a=n(21021),u=n(42664),f=n(62044),c=n(1984),h=n.n(c),l=!0;e.default=function(t){var e,n=t.chineseTitle,c=t.defaultType,l=(0,s.useRouter)(),m=l.query.type,v=(0,o.useState)(),$=v[0],d=v[1],g=(0,o.useState)(),T=g[0],p=g[1],S=(0,f.Z)("common").t;(0,o.useEffect)((function(){if(T){var t="";T==u.rU.LATEST?t="latest":T==u.rU.TRENDING_NEW?t="trending":T==u.rU.GAINERS&&(t="gainers"),d(t),l.push("/listings/".concat(t),void 0,{shallow:!0})}}),[T]);var D=(e={},(0,i.Z)(e,u.rU.LATEST,S("HIGHLIGHT_NEW")),(0,i.Z)(e,u.rU.TRENDING_NEW,S("HIGHLIGHT_TRENDING")),(0,i.Z)(e,u.rU.GAINERS,S("HIGHLIGHT_GAINERS")),e);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h(),{children:[(0,r.jsx)("title",{children:"".concat(T?D[T]:n," | Moontok \u6708\u5154")}),(0,r.jsx)("meta",{property:"og:site_name",content:"Moontok \u6708\u5154"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"".concat("https://moontok.io","/listings/").concat(null!==$&&void 0!==$?$:c)}),(0,r.jsx)("meta",{property:"og:title",content:"".concat(T?D[T]:n," | Moontok \u6708\u5154")},"title"),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@MoontokOfficial"}),(0,r.jsx)("meta",{name:"twitter:title",content:"".concat(T?D[T]:n," | Moontok \u6708\u5154")})]}),(0,r.jsx)(a.Z,{type:function(){var t=u.rU.LATEST;switch(m){case"latest":t=u.rU.LATEST;break;case"trending":t=u.rU.TRENDING_NEW;break;case"gainers":t=u.rU.GAINERS}return t.toString()},onListingTypeChange:p,filterable:!0})]})}}},function(t){t.O(0,[2651,5768,1021,9774,2888,179],(function(){return e=46607,t(t.s=e);var e}));var e=t.O();_N_E=e}]);