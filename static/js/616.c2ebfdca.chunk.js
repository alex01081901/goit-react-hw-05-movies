"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[616],{616:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(861),a=t(439),c=t(757),i=t.n(c),s=t(791),u=t(689),o=t(87),l=t(390),p="MovieDetails_goback_button__-OuLy",d="MovieDetails_container__yKjnD",f="MovieDetails_image_thumb__YckTR",v="MovieDetails_movie_info_container__Psesj",h="MovieDetails_additional_list_links__aZa9x",x=t(184),m=function(){var e,n,t=(0,s.useState)({}),c=(0,a.Z)(t,2),m=c[0],_=c[1],g=(0,s.useState)(""),j=(0,a.Z)(g,2),k=j[0],w=j[1],b=(0,u.TH)(),y=(0,s.useRef)(null!==(e=null===(n=b.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),Z=(0,u.UO)().movieId,U=m.title,S=m.vote_average,D=m.overview,M=m.poster_path;return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.TP)(Z);case 2:n=e.sent,_(n),w(n.genres.map((function(e){return e.name})).join(", "));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[Z]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o.rU,{className:p,to:y.current,children:"Go back"}),(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)("div",{className:f,children:(0,x.jsx)("img",{src:M&&"https://image.tmdb.org/t/p/w500".concat(M),alt:U})}),(0,x.jsxs)("div",{className:v,children:[(0,x.jsx)("h1",{children:U}),(0,x.jsxs)("p",{children:["User Score: ",Math.round(10*S),"%"]}),(0,x.jsx)("h2",{children:"Overview"}),(0,x.jsx)("p",{children:D}),(0,x.jsx)("h2",{children:"Genres"}),(0,x.jsx)("p",{children:k})]})]}),(0,x.jsx)("p",{children:"Additional information"}),(0,x.jsxs)("ul",{className:h,children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,x.jsx)(s.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading..."}),children:(0,x.jsx)(u.j3,{})})]})}},390:function(e,n,t){t.d(n,{Df:function(){return u},M1:function(){return l},TP:function(){return o},tx:function(){return p},zi:function(){return d}});var r=t(861),a=t(757),c=t.n(a),i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="c5a1db41bd5eb56af64be0ab647b8aee",u=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?language=en-US&api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n,"?language=en-US&api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n,"/credits?language=en-US&api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n,"/reviews?language=en-US&api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?query=".concat(n,"&language=en-US&api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=616.c2ebfdca.chunk.js.map