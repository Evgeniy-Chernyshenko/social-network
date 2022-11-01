"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[685],{8685:function(e,n,t){t.r(n),t.d(n,{UsersContainer:function(){return W}});var r=t(8683),A=t(5671),s=t(3144),o=t(136),a=t(2882),i=t(2791),u=t(8687),l=t(5732),c={pageTitle:"Users_pageTitle__N2n0Q",listContainer:"Users_listContainer__y+ZNy",followUnfollowButton:"Users_followUnfollowButton__VF-Yx",userpic:"Users_userpic__1Y2Xk",listItem:"Users_listItem__N-8Yc",userInfo:"Users_userInfo__1Xiza",userName:"Users_userName__hc06X",paginationTop:"Users_paginationTop__hwfJl",paginationBottom:"Users_paginationBottom__4WU5B"},p=t(6140),f=t(2982),g={listContainer:"Pagination_listContainer__IUlYs",listItem:"Pagination_listItem__pQ+7S",button:"Pagination_button__lcsqH",activeListItem:"Pagination_activeListItem__O6Emd"},h=t(184);function v(e){var n=Math.ceil(e.totalCount/e.pageSize),t=n>e.paginationMaxSize?e.paginationMaxSize:n,r=Math.ceil((t+1)/2),A=e.currentPage<=r?1:e.currentPage-r+1,s=A+t-1,o=s>n?n:s,a=1!==A,i=o!==n,u=Array.from({length:o-A+1},(function(n,t){var r=t+A,s=[g.listItem].concat((0,f.Z)(e.currentPage===r?[g.activeListItem]:[])).join(" ");return(0,h.jsx)("li",{className:s,onClick:function(){return e.onChangePage(r)},children:r},r)})),l=[g.listContainer].concat((0,f.Z)(e.className?[e.className]:[])).join(" ");return(0,h.jsx)(h.Fragment,{children:u.length>1&&(0,h.jsxs)("ul",{className:l,children:[a&&(0,h.jsx)("li",{className:"".concat(g.listItem," ").concat(g.button),onClick:function(){return e.onChangePage(1)},children:"To begin"}),u,i&&(0,h.jsx)("li",{className:"".concat(g.listItem," ").concat(g.button),onClick:function(){return e.onChangePage(e.currentPage+1)},children:"Next"})]})})}var d=t(1523);function x(e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{className:c.pageTitle,children:"Users"}),(0,h.jsx)(v,{currentPage:e.currentPage,pageSize:e.pageSize,paginationMaxSize:5,totalCount:e.totalCount,className:c.paginationTop,onChangePage:e.onChangePage}),(0,h.jsx)("ul",{className:c.listContainer,children:e.users.map((function(n){return(0,h.jsxs)("li",{className:c.listItem,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(d.OL,{to:"/profile/".concat(n.id),children:(0,h.jsx)("img",{src:n.photos.small||p,alt:n.name,className:c.userpic})}),n.followed?(0,h.jsx)("button",{disabled:e.fetchingInProgress.some((function(e){return e===n.id})),onClick:function(){e.unfollowUser(n.id)},className:c.followUnfollowButton,children:"unfollow"}):(0,h.jsx)("button",{disabled:e.fetchingInProgress.some((function(e){return e===n.id})),onClick:function(){e.followUser(n.id)},className:c.followUnfollowButton,children:"follow"})]}),(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:c.userInfo,children:[(0,h.jsx)(d.OL,{to:"/profile/".concat(n.id),children:(0,h.jsx)("div",{className:c.userName,children:n.name})}),(0,h.jsx)("div",{className:c.userStatus,children:n.status})]})})]},n.id)}))}),(0,h.jsx)(v,{currentPage:e.currentPage,pageSize:e.pageSize,paginationMaxSize:5,totalCount:e.totalCount,className:c.paginationBottom,onChangePage:e.onChangePage})]})}var m=t(1471),N="NOT_FOUND";var L=function(e,n){return e===n};function S(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,A=void 0===r?L:r,s=t.maxSize,o=void 0===s?1:s,a=t.resultEqualityCheck,i=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,A=0;A<r;A++)if(!e(n[A],t[A]))return!1;return!0}}(A),u=1===o?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:N},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(i):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var A=t[r];return r>0&&(t.splice(r,1),t.unshift(A)),A.value}return N}return{get:r,put:function(n,A){r(n)===N&&(t.unshift({key:n,value:A}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,i);function l(){var n=u.get(arguments);if(n===N){if(n=e.apply(null,arguments),a){var t=u.getEntries(),r=t.find((function(e){return a(e.value,n)}));r&&(n=r.value)}u.put(arguments,n)}return n}return l.clearCache=function(){return u.clear()},l}function U(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function j(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var A=function(){for(var n=arguments.length,r=new Array(n),A=0;A<n;A++)r[A]=arguments[A];var s,o=0,a={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(a=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var u=a,l=u.memoizeOptions,c=void 0===l?t:l,p=Array.isArray(c)?c:[c],f=U(r),g=e.apply(void 0,[function(){return o++,i.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],n=f.length,t=0;t<n;t++)e.push(f[t].apply(null,arguments));return s=g.apply(null,e)}));return Object.assign(h,{resultFunc:i,memoizedResultFunc:g,dependencies:f,lastResult:function(){return s},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return A}var C=j(S),P={getUsers:C((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),getUsersTotalCount:function(e){return e.usersPage.totalCount},getUsersPageSize:function(e){return e.usersPage.pageSize},getUsersIsLoading:function(e){return e.usersPage.isLoading},getUsersFetchingInProgress:function(e){return e.usersPage.fetchingInProgress}},Z=t(7781),z=t(8931),X=function(e){(0,o.Z)(t,e);var n=(0,a.Z)(t);function t(){var e;(0,A.Z)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=n.call.apply(n,[this].concat(s))).onChangePage=function(n){e.props.history.push("/users/".concat(n)),e.props.getUsers(n)},e}return(0,s.Z)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(+this.props.match.params.page||1)}},{key:"render",value:function(){return(0,h.jsxs)(h.Fragment,{children:[this.props.isLoading&&(0,h.jsx)(m.p,{}),!this.props.isLoading&&(0,h.jsx)(x,{currentPage:+this.props.match.params.page||1,followUser:this.props.followUser,pageSize:this.props.pageSize,totalCount:this.props.totalCount,unfollowUser:this.props.unfollowUser,users:this.props.users,onChangePage:this.onChangePage,fetchingInProgress:this.props.fetchingInProgress})]})}}]),t}(i.Component),b=(0,u.$j)((function(e){return console.log("UsersContainer mapStateToProps"),{users:P.getUsers(e),totalCount:P.getUsersTotalCount(e),pageSize:P.getUsersPageSize(e),isLoading:P.getUsersIsLoading(e),fetchingInProgress:P.getUsersFetchingInProgress(e)}}),(0,r.Z)((0,r.Z)({},l._B),l.MA)),W=(0,Z.qC)(b,z.EN)(X)},6140:function(e){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=685.0d233da8.chunk.js.map