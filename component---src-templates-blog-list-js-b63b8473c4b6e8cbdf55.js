(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return w});var a=n(13),r=n.n(a),o=n(0),i=n.n(o),c=n(181),l=n(196),s=n.n(l),u=n(264),f=n.n(u),m=n(202),d=n.n(m),p=n(187),h=n(190),g=n(182),v=n(189).a.nav.withConfig({displayName:"blog-list__Nav",componentId:"sc-9mb52s-0"})([".navLink{color:rgb(60,60,60);text-decoration:none;&:hover{box-shadow:0 1px 0 0 currentColor;color:#008bff;}&.active{color:#008bff;}}"]),y=[["/","All"],["/travel","travel"],["/politics","politics"],["/tech","tech"]],b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){for(var e=s()(this,"props.data.site.siteMetadata.title"),t=s()(this,"props.data.site.siteMetadata.description"),n=s()(this,"props.data.allMarkdownRemark.edges"),a=this.props.pageContext.tag,r=y.map(function(e){var t=a===e[1],n=f()(e[1]),r="navLink"+(t?" active":"");return i.a.createElement(c.a,{key:e[0],className:r,to:e[0]},n)}),o=[],l=0;l<r.length;l++){var u=2*l;o[u]=r[l],l!==r.length-1&&(o[u+1]=" | ")}return i.a.createElement(h.a,{location:this.props.location},i.a.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),i.a.createElement(p.a,null),i.a.createElement(v,null,o),n.map(function(e){var t=e.node,n=s()(t,"frontmatter.title")||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(g.a)(.25)}},i.a.createElement(c.a,{style:{boxShadow:"none"},to:t.fields.slug},n)),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(i.a.Component);t.default=b;var w="2313567533"},181:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=n(57),l=n.n(c);n.d(t,"a",function(){return l.a});n(183),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},182:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return s});var a=n(205),r=n.n(a),o=n(206),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var c=new r.a(i.a);var l=c.rhythm,s=c.scale},183:function(e,t,n){var a;e.exports=(a=n(186))&&a.default||a},186:function(e,t,n){"use strict";n.r(t);n(17);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=n(81),l=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},187:function(e,t,n){"use strict";var a=n(13),r=n.n(a),o=n(0),i=n.n(o),c=n(189),l=(n(203),n(204),n(188)),s=n.n(l),u=n(182),f=n(181),m={color:"inherit",textDecoration:"none",boxShadow:"none"},d=c.a.div.withConfig({displayName:"Bio__Container",componentId:"sc-1xze3le-0"})(["display:flex;marginBottom:rhythm(2.5);.icon{width:33px;vertical-align:middle;transition:all .5s ease-out;}.twitter > svg:hover{fill:#00aced;}.youtube > svg:hover{fill:#FF0000;}.instagram > svg:hover{fill:#e4405f;}.icon-link{box-shadow:none;}"]),p=i.a.createElement("a",{href:"https://twitter.com/jeremybernier",className:"icon-link twitter",title:"Twitter"},i.a.createElement("svg",{className:"icon twitter",viewBox:"0 0 512 512"},i.a.createElement("path",{d:"M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"}))),h=i.a.createElement("a",{href:"https://www.instagram.com/cityofjeremy",className:"icon-link instagram",title:"Instagram"},i.a.createElement("svg",{className:"icon",viewBox:"0 0 512 512"},i.a.createElement("g",null,i.a.createElement("path",{d:"M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"}),i.a.createElement("path",{d:"M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"}),i.a.createElement("circle",{cx:"351.5",cy:"160.5",r:"21.5"})))),g=i.a.createElement("a",{href:"https://www.youtube.com/c/JDiculous1",className:"icon-link youtube",title:"YouTube"},i.a.createElement("svg",{className:"icon",viewBox:"0 0 512 512"},i.a.createElement("path",{d:"M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z"}))),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(d,null,i.a.createElement(f.a,{style:{marginRight:"0.875rem",boxShadow:"none"},to:"/my-story"},i.a.createElement("img",{src:s.a,alt:"Jeremy Bernier",style:{marginRight:Object(u.a)(.5),marginBottom:0,width:Object(u.a)(3),borderRadius:"50%"}})),i.a.createElement("p",null,"Written by ",i.a.createElement(f.a,{style:m,to:"/my-story"},i.a.createElement("strong",null,"Jeremy Bernier"))," ","who left the NYC rat race to travel the world, work remotely, and make the world a better place."," ",p,h,g))},t}(i.a.Component);t.a=v},188:function(e,t,n){e.exports=n.p+"static/profile-pic-fedce34db9689172d614a05034fca695.jpg"},190:function(e,t,n){"use strict";n(17);var a=n(13),r=n.n(a),o=n(0),i=n.n(o),c=n(181),l=n(182),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.children;return e="/gatsby-starter-blog/"===n.pathname||"/travel"===n.pathname||"/politics"===n.pathname||"/tech"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"Jeremy Bernier")):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(-1)}},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"Jeremy Bernier")),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,a)},t}(i.a.Component);t.a=s},213:function(e,t,n){n(184);var a=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return a.test(e)}},264:function(e,t,n){var a=n(201),r=n(265);e.exports=function(e){return r(a(e).toLowerCase())}},265:function(e,t,n){var a=n(266)("toUpperCase");e.exports=a},266:function(e,t,n){var a=n(267),r=n(213),o=n(269),i=n(201);e.exports=function(e){return function(t){t=i(t);var n=r(t)?o(t):void 0,c=n?n[0]:t.charAt(0),l=n?a(n,1).join(""):t.slice(1);return c[e]()+l}}},267:function(e,t,n){var a=n(268);e.exports=function(e,t,n){var r=e.length;return n=void 0===n?r:n,!t&&n>=r?e:a(e,t,n)}},268:function(e,t){e.exports=function(e,t,n){var a=-1,r=e.length;t<0&&(t=-t>r?0:r+t),(n=n>r?r:n)<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var o=Array(r);++a<r;)o[a]=e[a+t];return o}},269:function(e,t,n){var a=n(270),r=n(213),o=n(271);e.exports=function(e){return r(e)?o(e):a(e)}},270:function(e,t,n){n(23),e.exports=function(e){return e.split("")}},271:function(e,t,n){n(79),n(184);var a="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",i="[^\\ud800-\\udfff]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="(?:"+r+"|"+o+")"+"?",u="[\\ufe0e\\ufe0f]?"+s+("(?:\\u200d(?:"+[i,c,l].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*"),f="(?:"+[i+r+"?",r,c,l,a].join("|")+")",m=RegExp(o+"(?="+o+")|"+f+u,"g");e.exports=function(e){return e.match(m)||[]}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-b63b8473c4b6e8cbdf55.js.map