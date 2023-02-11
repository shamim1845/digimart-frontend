"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[545],{8545:function(n,e,r){r.r(e),r.d(e,{default:function(){return w}});var i,t,o,a,c,l=r(168),d=(r(2791),r(4603)),s=r(2210),u=r(6030),p=r(3504),m=r(3400),h=r(383),f=r(2588),g=r(5907),v=r(184),x=function(n){var e=n.cartItem,r=(0,u.I0)();return(0,v.jsxs)(Z,{children:[(0,v.jsx)(b,{children:(0,v.jsx)(j,{children:(0,v.jsxs)("h2",{children:["Default Wish List (",(null===e||void 0===e?void 0:e.length)||0,")"]})})}),e&&(null===e||void 0===e?void 0:e.map((function(n){return(0,v.jsx)(b,{children:(0,v.jsxs)(z,{children:[(0,v.jsxs)("div",{className:"fav_details_box",children:[(0,v.jsx)("div",{className:"img_box",children:(0,v.jsx)("img",{src:n.product.images[0].url,alt:""})}),(0,v.jsxs)("div",{className:"dtails_box",children:[(0,v.jsx)("div",{className:"title",children:(0,v.jsx)(p.rU,{to:"/products/".concat(n.product._id),children:n.product.name})}),(0,v.jsx)("div",{className:"price",children:(0,v.jsxs)("span",{children:["BDT \u09f3",n.product.price]})}),(0,v.jsx)("div",{className:"shiping",children:(0,v.jsx)("span",{children:"Shipping: BDT \u09f35.55"})})]})]}),(0,v.jsxs)("div",{className:"fav_controller",children:[(0,v.jsx)(m.Z,{onClick:function(){return function(n){r((0,g._7)({product:n.product,quantity:1})),r((0,g.m9)({product:n.product}))}(n)},"aria-label":"favourite",size:"large",children:(0,v.jsx)(f.Z,{fontSize:"large"})}),(0,v.jsx)(m.Z,{onClick:function(){return function(n){r((0,g.m9)({product:n.product}))}(n)},"aria-label":"delete",size:"large",color:"error",children:(0,v.jsx)(h.Z,{fontSize:"large"})})]})]})},n.product._id)})))]})},Z=d.ZP.div(i||(i=(0,l.Z)(["\n  width: 100%;\n  /* min-width: 109rem; */\n  /* margin: 1rem; */\n"]))),b=d.ZP.div(t||(t=(0,l.Z)(["\n  background: #fff;\n  padding: 1rem 0 1rem 2rem;\n  margin: 1rem 1rem 1rem 0;\n  border-radius: 0.5rem;\n\n  h2 {\n    font-size: 2.5rem;\n    font-weight: 600;\n  }\n"]))),j=d.ZP.div(o||(o=(0,l.Z)([""]))),z=d.ZP.div(a||(a=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  .fav_details_box {\n    display: flex;\n    .img_box {\n      padding: 0 1rem;\n      img {\n        width: 12rem;\n        height: 12rem;\n      }\n    }\n    .dtails_box {\n      .title {\n        a {\n          font-size: 1.4rem;\n        }\n      }\n      .price {\n        margin: 1rem 0;\n        span {\n          font-weight: 600;\n          font-size: 1.6rem;\n        }\n      }\n      .shiping {\n        span {\n          margin-right: 5px;\n          color: #2e9cc3;\n          font-weight: 500;\n          line-height: 18px;\n          font-size: 12px;\n        }\n      }\n    }\n  }\n\n  .fav_controller {\n    width: 12rem;\n  }\n"]))),y=r(8269),w=function(){var n=(0,u.v9)((function(n){return n.user})).favouriteItems;return(0,v.jsx)(s.Z,{children:(0,v.jsxs)(k,{children:[(0,v.jsx)(x,{cartItem:n}),n.length<1&&(0,v.jsx)(y.Z,{text:"Oops! Your favourite list is empty.",link:"/products",btnText:"Add Product"})]})})},k=d.ZP.div(c||(c=(0,l.Z)(["\n  width: 100%;\n  max-width: 1440px;\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1rem 0;\n\n  @media screen and (max-width: 1440px) {\n    padding: 0 1rem;\n  }\n"])))},8269:function(n,e,r){var i,t,o=r(168),a=(r(2791),r(6871)),c=r(4603),l=r(184);e.Z=function(n){var e=n.text,r=n.link,i=n.btnText,t=(0,a.s0)();return(0,l.jsx)(d,{children:(0,l.jsxs)(s,{children:[(0,l.jsx)("h4",{children:e}),(0,l.jsx)("button",{onClick:function(){t(r)},children:i})]})})};var d=c.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 50vh;\n"]))),s=c.ZP.div(t||(t=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n\n  h4 {\n  }\n  button {\n    margin-top: 1rem;\n    border: none;\n    background-color: tomato;\n    padding: 1rem 2rem;\n    font-size: 1.3rem;\n    border-radius: 0.5rem;\n  }\n"])))},383:function(n,e,r){var i=r(5318);e.Z=void 0;var t=i(r(5649)),o=r(184),a=(0,t.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");e.Z=a},2588:function(n,e,r){var i=r(5318);e.Z=void 0;var t=i(r(5649)),o=r(184),a=(0,t.default)((0,o.jsx)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),"ShoppingCart");e.Z=a},3400:function(n,e,r){r.d(e,{Z:function(){return b}});var i=r(4942),t=r(3366),o=r(7462),a=r(2791),c=r(8182),l=r(767),d=r(2065),s=r(5432),u=r(1046),p=r(2814),m=r(4036),h=r(5159);function f(n){return(0,h.Z)("MuiIconButton",n)}var g=(0,r(208).Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),v=r(184),x=["edge","children","className","color","disabled","disableFocusRipple","size"],Z=(0,s.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,"default"!==r.color&&e["color".concat((0,m.Z)(r.color))],r.edge&&e["edge".concat((0,m.Z)(r.edge))],e["size".concat((0,m.Z)(r.size))]]}})((function(n){var e=n.theme,r=n.ownerState;return(0,o.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!r.disableRipple&&{"&:hover":{backgroundColor:(0,d.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12})}),(function(n){var e=n.theme,r=n.ownerState;return(0,o.Z)({},"inherit"===r.color&&{color:"inherit"},"inherit"!==r.color&&"default"!==r.color&&(0,o.Z)({color:e.palette[r.color].main},!r.disableRipple&&{"&:hover":{backgroundColor:(0,d.Fq)(e.palette[r.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===r.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===r.size&&{padding:12,fontSize:e.typography.pxToRem(28)},(0,i.Z)({},"&.".concat(g.disabled),{backgroundColor:"transparent",color:e.palette.action.disabled}))})),b=a.forwardRef((function(n,e){var r=(0,u.Z)({props:n,name:"MuiIconButton"}),i=r.edge,a=void 0!==i&&i,d=r.children,s=r.className,p=r.color,h=void 0===p?"default":p,g=r.disabled,b=void 0!==g&&g,j=r.disableFocusRipple,z=void 0!==j&&j,y=r.size,w=void 0===y?"medium":y,k=(0,t.Z)(r,x),R=(0,o.Z)({},r,{edge:a,color:h,disabled:b,disableFocusRipple:z,size:w}),S=function(n){var e=n.classes,r=n.disabled,i=n.color,t=n.edge,o=n.size,a={root:["root",r&&"disabled","default"!==i&&"color".concat((0,m.Z)(i)),t&&"edge".concat((0,m.Z)(t)),"size".concat((0,m.Z)(o))]};return(0,l.Z)(a,f,e)}(R);return(0,v.jsx)(Z,(0,o.Z)({className:(0,c.Z)(S.root,s),centerRipple:!0,focusRipple:!z,disabled:b,ref:e,ownerState:R},k,{children:d}))}))}}]);
//# sourceMappingURL=545.57867b92.chunk.js.map