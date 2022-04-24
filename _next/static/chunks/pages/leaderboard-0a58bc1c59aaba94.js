(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[268],{8165:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leaderboard",function(){return t(5800)}])},5800:function(e,r,t){"use strict";t.r(r);var a=t(5893),l=t(7294),n=t(7708),i=t(9609),s=t(725),o=t.n(s),d=t(7983),c=t(8527),u=t(425),m=t(8447),x=t(1417),h=t(2814),g=t(1436);function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function b(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,l,n=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(a=t.next()).done)&&(n.push(a.value),!r||n.length!==r);i=!0);}catch(o){s=!0,l=o}finally{try{i||null==t.return||t.return()}finally{if(s)throw l}}return n}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return f(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=[{id:"position",label:"Rank",minWidth:50},{id:"avatar",label:"Avatar",minWidth:50},{id:"username",label:"GitHub Username",minWidth:170},{id:"prnums",label:"No. Of PRs",minWidth:100,align:"center"},{id:"score",label:"Score",minWidth:100,align:"right"},{id:"viewBtn",label:"",minWidth:100,align:"right"}];r.default=function(){var e,r,t,s,f,j,w,k,y,N,S,_,O=(0,u.F)().theme,C=(0,l.useState)([]),z=C[0],F=C[1],E=(0,l.useState)([]),P=E[0],T=E[1],A=(0,l.useState)([]),W=A[0],L=A[1],G=(0,l.useState)([]),R=G[0],I=G[1],B=(0,l.useState)(""),Z=B[0],D=B[1],H=(0,l.useState)(""),M=H[0],U=H[1],q=(0,l.useState)(""),K=q[0],X=q[1],$=(0,l.useState)(""),J=$[0],Q=$[1],V=(0,l.useState)(""),Y=V[0],ee=V[1],re=(0,l.useState)(!1),te=re[0],ae=re[1],le=(0,l.useState)(!1),ne=le[0],ie=le[1],se=(0,l.useState)("Sent request to the server"),oe=se[0],de=se[1],ce=(0,l.useState)(!1),ue=ce[0],me=ce[1],xe=b(l.useState(!0),2),he=(xe[0],xe[1]),ge=(0,l.useState)(1),fe=ge[0],pe=ge[1],be=function(){var e=!0,r=(0,l.useCallback)((function(){return{width:window.innerWidth,height:window.innerHeight}}),[e]),t=(0,l.useState)(r()),a=t[0],n=t[1];return(0,l.useEffect)((function(){var e=function(){n(r())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[r,e]),a}(),ve=(be.height,be.width),je=[];for(var we in(0,l.useEffect)((function(){ae(!0),ie(!0),setTimeout((function(){de("Waiting for response from server")}),600),fetch("https://gssoc22-leaderboard.herokuapp.com/OSLeaderboard").then((function(e){return de("Data received. Starting to populate."),setTimeout((function(){ae(!1)})),e.json()})).then((function(e){if(0===e.leaderboard.length&&!0===e.success)ae(!1),ie(!1),Q(null);else{e.leaderboard.sort((function(e,r){return r.score-e.score||r.level4-e.level4||r.level3-e.level3||r.level2-e.level2||r.level1-e.level1||r.level0-e.level0||e.login<r.login}));var r=e.leaderboard.map((function(e,r){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(r){p(e,r,t[r])}))}return e}({},e,{rank:r+1})}));T(r.slice(0,50)),ie(!1),ae(!1),F(r),L(r),he(!1),Q(e.updatedTimestring),me(!0),setTimeout((function(){me(!1)}),5e3)}}))}),[]),P)je.push((e=[P[we].login,P[we].url],r=P[we].avatar_url,t=P[we].pr_urls.filter((function(e,r,t){return t.indexOf(e)===r})).length,s=P[we].score,f=P[we].profile_url,j=P[we].pr_urls,w=P[we].level0,k=P[we].level1,y=P[we].level2,N=P[we].level3,S=P[we].level4,_=P[we].rank,{username:e,avatar:r,prnums:t,score:s,profile_url:f,prlinks:j,level0:w,level1:k,level2:y,level3:N,level4:S,rank:_}));var ke=b(l.useState(!1),2),ye=ke[0],Ne=ke[1],Se=[],_e=function(e){for(var r in Ne(!0),P[e].pr_urls)Se.push(P[e].pr_urls[r]+"\n\n\n\n");var t=Se.filter((function(e,r,t){return t.indexOf(e)===r}));I(t),D(P[e].login),X(P[e].avatar_url),U(P[e].score)},Oe=function(){if(ie(!0),""===Y&&P.length!==z.length)L(z),pe(1),ie(!1);else{var e=z.filter((function(e){return e.login.toLowerCase().includes(Y.toLowerCase())}));L(e),pe(1),ie(!1)}},Ce=function(){Se=[],Ne(!1)};return(0,l.useEffect)((function(){50*(fe-1)+50<W.length?T(W.slice(50*(fe-1),50*(fe-1)+50)):T(W.slice(50*(fe-1)))}),[fe,W]),(0,a.jsxs)(a.Fragment,{children:[te&&(0,a.jsxs)("div",{className:"loader-div",children:[(0,a.jsx)("div",{className:"overlay dark:bg-darkmode_gray-0"}),(0,a.jsx)("div",{className:"loader-group-container",children:(0,a.jsxs)("div",{className:"loader-group dark:bg-black",children:[(0,a.jsx)(i.$,{className:"loader",thickness:"6px",speed:"0.65s",emptyColor:"gray.200",color:"orange.500",size:"xl"}),(0,a.jsx)("span",{className:"loading-msg dark:text-white",children:oe})]})})]}),ue&&(0,a.jsx)(o(),{className:"fullscreen"}),(0,a.jsxs)("div",{className:"container transition-colors mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-10 lg:px-20 2xl:px-32 dark:bg-darkmode_gray-0 dark:transition-colors ",style:{margin:"auto"},children:[(0,a.jsx)("div",{className:"items-center justify-center",children:(0,a.jsx)("div",{className:"font-sans text-center text-2xl font-extrabold",children:(0,a.jsxs)("div",{className:"text-black dark:text-white text-4xl text center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0",children:[(0,a.jsx)("span",{className:"text-primary_orange-0",children:" GSSoC 2022 "}),"Top Performers"]})})}),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"py-5 px-0 xl:pb-12 xl:px-24 xl:pt-0 text-center",children:[(0,a.jsxs)("div",{className:"flex md:flex-row justify-between gap-y-1 gap-x-1 md:gap-x-2 items-center my-10",children:[(0,a.jsxs)("div",{className:"bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto",children:[void 0===z[1]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.s7,{className:"skeleton-circle-md"}),(0,a.jsx)(d.N2,{mt:"4",noOfLines:1,spacing:"4"})]}),void 0!==z[1]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{className:"w-12 md:w-16 lg:w-24 rounded-full m-auto inline-block object-cover bg-white",src:void 0!==z[1]?z[1].avatar_url:null}),(0,a.jsx)(h.G,{className:"invisible lg:visible w-8 h-8 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-amber-300 inline-block",icon:x.zhw,size:"2x"}),(0,a.jsxs)("h3",{className:"text-black dark:text-primary_orange-0 font-semibold mt-2 text-xs sm:text-sm md:text-md",children:["2. ",void 0!==z[1]?z[1].login:null]})]})]}),(0,a.jsxs)("div",{className:"bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto",children:[void 0===z[0]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.s7,{className:"skeleton-circle-lg"}),(0,a.jsx)(d.N2,{mt:"4",noOfLines:1,spacing:"4"})]}),void 0!==z[0]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{className:"w-12 md:w-16 lg:w-40 rounded-full m-auto bg-white",src:void 0!==z[0]?z[0].avatar_url:null}),(0,a.jsx)(h.G,{className:"invisible lg:visible w-10 h-10 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-cyan-200 inline-block",icon:x.zhw,size:"3x"}),(0,a.jsxs)("h3",{className:"text-black dark:text-primary_orange-0 font-semibold mt-4 text-xs sm:text-sm md:text-md",children:["1. ",void 0!==z[0]?z[0].login:null]})]})]}),(0,a.jsxs)("div",{className:"bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto",children:[void 0===z[2]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.s7,{className:"skeleton-circle-md"}),(0,a.jsx)(d.N2,{mt:"4",noOfLines:1,spacing:"4"})]}),void 0!==z[2]&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{className:"w-12 md:w-16 lg:w-24 rounded-full m-auto bg-white",src:void 0!==z[2]?z[2].avatar_url:null}),(0,a.jsx)(h.G,{className:"invisible lg:visible w-8 h-8 rounded-full border-5 border-white absolute bottom-1/4 right-1/4 bg-zinc-100 inline-block",icon:x.zhw,size:"2x"}),(0,a.jsxs)("h3",{className:"text-black dark:text-primary_orange-0 font-semibold mt-2 text-xs sm:text-sm md:text-md",children:["3. ",void 0!==z[2]?z[2].login:null]})]})]})]}),(0,a.jsx)("div",{className:"mt-20",children:(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)("div",{className:"mb-3 xl:w-96",children:(0,a.jsxs)("div",{className:"input-group relative flex flex-wrap items-stretch w-full mb-4 justify-end",children:[(0,a.jsxs)("div",{className:"relative flex search-container",children:[(0,a.jsx)("input",{onChange:function(e){ee(e.target.value)},type:"search",className:"form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-400 focus:outline-none dark:placeholder-neutral-300",placeholder:"Search","aria-label":"Search","aria-describedby":"button-addon2",onKeyUp:function(e){"Enter"===e.key&&Oe()}}),(0,a.jsx)("span",{className:"search-count dark:text-neutral-300",children:W.length})]}),(0,a.jsx)("button",{onClick:function(){Oe()},className:"btn inline-block px-6 py-2.5 bg-gray-300 dark:bg-neutral-600 text-gray-600 font-medium text-xs leading-tight uppercase hover:text-gray-800 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center",type:"button",id:"button-addon2",style:{padding:"10px 18px",maxWidth:"50px",width:"20%"},children:(0,a.jsx)("svg",{className:"w-4 fill-neutral-600 hover:fill-neutral-800 dark:fill-neutral-300 dark:hover:fill-neutral-100","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,a.jsx)("path",{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})})})]})})})}),(0,a.jsx)("div",{className:"bg-sky-100 dark:bg-orange-200 px-1.5 py-1.5 rounded-md mb-3",children:(0,a.jsxs)("p",{className:"text-sky-700 dark:text-orange-900 text-sm",children:[!1===te&&""!==J&&(0,a.jsxs)(a.Fragment,{children:["The leaderboard was last updated on: ",(0,a.jsx)("b",{children:J})]}),!1===te&&null===J&&(0,a.jsx)(a.Fragment,{children:"The server is updating. Please comeback after 5-10 mins"})]})}),(0,a.jsxs)("div",{className:"w-full overflow-x-auto",children:[(0,a.jsxs)("div",{className:"table w-full",children:[(0,a.jsx)("div",{className:"table-header-group ",children:(0,a.jsx)("div",{className:"table-row",children:v.map((function(e){return(0,a.jsx)("div",{className:"table-cell font-serif px-4 py-4 bg-black text-white dark:bg-primary_orange-0 dark:text-black",align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),!ne&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"table-row-group",children:je.map((function(e,r){return(0,a.jsx)(a.Fragment,{children:r%2?(0,a.jsx)("div",{className:"table-row",role:"checkbox",tabIndex:-1,children:v.map((function(r){var t=e[r.id];return(0,a.jsx)("div",{className:"table-cell px-4 py-2 bg-orange-50 text-black dark:bg-neutral-900 dark:text-white font-medium",align:r.align,style:{verticalAlign:"middle"},children:"avatar"===r.id?(0,a.jsx)("img",{className:"w-9 rounded-full m-auto bg-white",src:t}):"position"===r.id?e.rank:"username"===r.id?(0,a.jsxs)("div",{className:"flex relative left-6 md:left-12 lg:left-24",children:[(0,a.jsx)(h.G,{className:"mr-5",icon:x.zhw,size:"2x"}),(0,a.jsx)("a",{href:t[1],target:"_blank",className:"no-underline username",style:{alignSelf:"center",cursor:"pointer"},rel:"noreferrer",children:t[0]})]}):"viewBtn"===r.id?(0,a.jsx)("button",{onClick:function(){_e(je.indexOf(e))},color:"primary",className:"view-btn",style:{background:"#FA6329",border:"none",padding:"5px 12px",color:"white",borderRadius:5,cursor:"pointer",fontSize:"17px"},children:(0,a.jsx)(h.G,{icon:g.Zrf})}):t},r.id)}))},e.username):(0,a.jsx)("div",{className:"table-row",role:"checkbox",tabIndex:-1,children:v.map((function(r){var t=e[r.id];return(0,a.jsx)("div",{className:"table-cell px-4 py-2 bg-leaderboardbg-0 text-black dark:bg-black dark:text-white font-medium",align:r.align,children:"avatar"===r.id?(0,a.jsx)("img",{className:"w-9 rounded-full m-auto bg-white",src:t}):"position"===r.id?e.rank:"username"===r.id?(0,a.jsxs)("div",{className:"flex relative left-6 md:left-12 lg:left-24",children:[(0,a.jsx)(h.G,{className:"mr-5",icon:x.zhw,size:"2x"}),(0,a.jsx)("a",{href:t[1],className:"no-underline username",style:{alignSelf:"center"},children:t[0]})]}):"viewBtn"===r.id?(0,a.jsx)("button",{onClick:function(){_e(je.indexOf(e))},color:"primary",className:"view-btn",style:{background:"#FA6329",border:"none",padding:"5px 12px",color:"white",borderRadius:5,cursor:"pointer",fontSize:"17px"},children:(0,a.jsx)(h.G,{icon:g.Zrf})}):t},r.id)}))},e.username)})}))})})]}),ne&&(0,a.jsxs)(c.Kq,{style:{marginTop:"10px"},children:[(0,a.jsx)(d.Od,{height:"40px"}),(0,a.jsx)(d.Od,{height:"40px"}),(0,a.jsx)(d.Od,{height:"40px"}),(0,a.jsx)(d.Od,{height:"40px"})]})]}),(0,a.jsx)("div",{className:"pagination-holder",children:(0,a.jsx)(m.Z,{innerClass:"dark"===O?"dark-theme pagination":"pagination",itemClass:"page-item",linkClass:"page-link",activePage:fe,activeClass:"active-page",itemsCountPerPage:50,totalItemsCount:W.length,pageRangeDisplayed:ve<600?3:5,onChange:function(e){var r;console.log(e),r=e,console.log("active page is ".concat(r)),pe(r)}})}),(0,a.jsxs)(n.Z,{open:ye,onClose:Ce,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",className:"dark"===O?"dark-modal":"",children:[(0,a.jsx)("div",{className:"dark:text-white flex m-0 py-4 px-6 font-medium text-lg leading-relaxed",id:"alert-dialog-slide-title",children:Z+"'s Stats"}),(0,a.jsx)("div",{className:"flex-auto py-2 px-6 overflow-y-auto",children:(0,a.jsxs)("div",{id:"alert-dialog-slide-description",children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsx)("img",{alt:"Remy Sharp",src:K,className:"w-12 rounded-full xl:w-24"}),(0,a.jsxs)("p",{className:"dark:bg-neutral-900 dark:text-white w-24 rounded-full xl:w-36 p-3 text-center modal-score",children:["\ud83c\udfc6 ",M]})]}),(0,a.jsx)("div",{className:"dark:text-white",style:{marginTop:30},children:"List Of PRs: "}),0!==R.length&&R.map((function(e){return(0,a.jsx)("a",{className:"pr-links",href:e,children:e},e)}))]})}),(0,a.jsx)("div",{className:"flex px-2 py-2 items-center justify-end",children:(0,a.jsx)("button",{onClick:Ce,color:"primary",className:"close-btn",style:{background:"#FA6329",border:"none",padding:"10px 20px",color:"white",borderRadius:5,cursor:"pointer",fontSize:"18px"},children:"Close"})})]})]})})]})]})}}},function(e){e.O(0,[112,523,527,814,545,774,888,179],(function(){return r=8165,e(e.s=r);var r}));var r=e.O();_N_E=r}]);