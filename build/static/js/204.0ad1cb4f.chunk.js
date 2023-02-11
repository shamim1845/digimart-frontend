"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[204],{2204:function(n,e,r){r.r(e),r.d(e,{default:function(){return L}});var t,i,o,a,d,c=r(168),l=r(885),s=r(2791),u=r(4603),m=r(6030),p=r(2210),x=r(9634),h=r(6144),g=r(6871),f=r(5156),v=r(428),j=r(184);function Z(n){var e,r=n.currentPage,t=n.setCurrentPage,i=(0,s.useState)([0,2e5]),o=(0,l.Z)(i,2),a=o[0],d=o[1],c=(0,m.I0)(),u=(0,g.s0)(),p=(0,m.v9)((function(n){return n.products})).allCategories,x=(0,m.v9)((function(n){return n.productFilter})),Z=x.keyword,w=x.category;return(0,s.useEffect)((function(){""===Z&&""===w&&0===a[0]&&2e5===a[1]?c((0,f.SZ)(r)):c((0,f.w5)({keyword:Z,category:w,pricestart:a[0],priceend:a[1],currentPage:r}))}),[w,c,a,Z,r,u]),(0,j.jsx)(C,{children:p.categories&&(0,j.jsxs)(z,{children:[(0,j.jsxs)(N,{children:[(0,j.jsx)("p",{className:"title",children:"Price"}),(0,j.jsx)(h.ZP,{value:a,onChangeCommitted:function(n,e){d(e)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",min:0,max:2e5})]}),(0,j.jsxs)(S,{children:[(0,j.jsx)("p",{className:"title",children:"Categories"}),(0,j.jsx)("ul",{children:null===p||void 0===p||null===(e=p.categories)||void 0===e?void 0:e.map((function(n,e){return(0,j.jsx)("li",{style:w===n?{color:"tomato"}:{},onClick:function(){return function(n){t(1),c((0,v.i8)(n))}(n)},children:n},e)}))})]}),(0,j.jsx)(_,{children:(0,j.jsx)("button",{onClick:function(){(Z||w||1!==r||0!==a[0]||2e5!==a[1])&&(c((0,v.c9)("")),c((0,v.i8)("")),d([0,2e5]),t(1))},children:"Clear filter"})})]})})}var w,b,P,y,k,C=u.ZP.div(t||(t=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n  .title {\n    font-size: 14px;\n    color: #212121;\n    font-weight: 400;\n    width: 100%;\n  }\n"]))),z=u.ZP.div(i||(i=(0,c.Z)(["\n  min-width: 50%;\n"]))),N=u.ZP.div(o||(o=(0,c.Z)(["\n  margin-bottom: 1.5rem;\n\n  .MuiSlider-colorPrimary {\n    color: tomato;\n  }\n  @media screen and (max-width: 768px) {\n    text-align: start;\n  }\n"]))),S=u.ZP.div(a||(a=(0,c.Z)(["\n  ul {\n    margin-top: 0.5rem;\n    padding-left: 0;\n    li {\n      text-transform: capitalize;\n      font-size: 1.3rem;\n      color: #757575;\n      line-height: 2rem;\n      cursor: pointer;\n      &:hover {\n        color: tomato;\n      }\n    }\n    .active {\n      color: tomato;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    text-align: start;\n    margin: auto;\n    ul {\n      column-count: 3;\n\n      li {\n      }\n    }\n  }\n"]))),_=u.ZP.div(d||(d=(0,c.Z)(["\n  @media screen and (max-width: 768px) {\n    display: flex;\n    justify-content: start;\n    margin: 2rem 0;\n    width: 100%;\n  }\n  button {\n    background: tomato;\n    border: none;\n    outline: none;\n    padding: 0.5rem;\n    font-size: 1.2rem;\n  }\n"]))),D=r(1915),F=r(8765),L=function(){var n,e,r,t=(0,s.useState)(1),i=(0,l.Z)(t,2),o=i[0],a=i[1],d=(0,m.v9)((function(n){return n.products})),c=d.loading,u=d.allProducts;return(0,j.jsxs)(j.Fragment,{children:[c&&(0,j.jsx)(x.Z,{}),(0,j.jsxs)(p.Z,{children:[(0,j.jsx)(I,{children:(0,j.jsx)("h2",{children:"Product List"})}),(0,j.jsxs)(M,{children:[(0,j.jsx)(O,{children:(0,j.jsx)(Z,{currentPage:o,setCurrentPage:a})}),(null===u||void 0===u||null===(n=u.products)||void 0===n?void 0:n.length)>0&&(0,j.jsx)(R,{children:u.products.map((function(n){return(0,j.jsx)(D.Z,{product:n},n._id)}))}),0===(null===u||void 0===u||null===(e=u.products)||void 0===e?void 0:e.length)&&(0,j.jsx)(E,{children:(0,j.jsx)("h3",{children:"No products found..."})})]}),(null===u||void 0===u||null===(r=u.page)||void 0===r?void 0:r.length)>1&&(0,j.jsx)(F.Z,{currentPage:o,setCurrentPage:a,pages:u.page})]})]})},E=u.ZP.div(w||(w=(0,c.Z)(["\n  width: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),I=u.ZP.div(b||(b=(0,c.Z)(["\n  margin: 3rem 0 2rem 0;\n  h2 {\n    border-bottom: 4px solid #ddd;\n    font-size: 3rem;\n  }\n"]))),M=u.ZP.div(P||(P=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  max-width: 1440px;\n  margin-bottom: 2rem;\n  /* background-color: rebeccapurple; */\n\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),O=u.ZP.div(y||(y=(0,c.Z)(["\n  padding: 0 1.5rem;\n\n  @media screen and (max-width: 768px) {\n    width: 100%;\n  }\n"]))),R=u.ZP.div(k||(k=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  place-items: center;\n  gap: 1.5rem;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n"])))},1915:function(n,e,r){var t,i,o,a=r(168),d=r(8316),c=(r(2791),r(3504)),l=r(4603),s=r(184);e.Z=function(n){var e=n.product;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(u,{children:(0,s.jsxs)(c.rU,{to:"/products/".concat(e._id),children:[(0,s.jsx)(m,{children:(0,s.jsx)("img",{src:e.images[0].url,alt:""})}),(0,s.jsxs)(p,{children:[(0,s.jsx)("div",{className:"title",children:e.name.length>35?(0,s.jsx)("p",{children:"".concat(e.name.slice(0,35),"...")}):(0,s.jsx)("p",{children:e.name})}),(0,s.jsx)("div",{className:"price",children:(0,s.jsx)("p",{children:"$ ".concat(e.price)})}),(0,s.jsx)("div",{className:"rating",children:(0,s.jsx)(d.Z,{name:"half-rating-read",value:e.avgRatings,precision:.1,readOnly:!0})})]})]})})})};var u=l.ZP.div(t||(t=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  position: relative;\n  padding: 1rem;\n  width: 100%;\n  height: 100%;\n  transition: all 0.5s;\n  overflow: hidden;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n\n  &:hover {\n    transform: translateY(-1rem);\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,\n      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;\n  }\n\n  @media screen and (max-width: 576px) {\n    margin: 1rem 0;\n  }\n"]))),m=l.ZP.div(i||(i=(0,a.Z)(["\n  img {\n    min-height: 24rem;\n    max-height: 100%;\n    width: 100%;\n    max-width: 24rem;\n    object-fit: cover;\n    transition: all 0.5s;\n    margin-bottom: 0.5rem;\n  }\n"]))),p=l.ZP.div(o||(o=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .title {\n    padding: 0 1.5rem;\n    p {\n      color: #000;\n      font-size: 1.4rem;\n      font-weight: 500;\n    }\n  }\n  .price {\n    p {\n      color: #666;\n      font-size: 1.3rem;\n      font-weight: 400;\n    }\n  }\n"])))},8765:function(n,e,r){var t,i,o,a,d=r(168),c=(r(2791),r(4603)),l=r(184);e.Z=function(n){var e=n.currentPage,r=n.setCurrentPage,t=n.pages;return(0,l.jsxs)(s,{children:[(0,l.jsx)(u,{children:(0,l.jsx)("button",{onClick:function(n){n.preventDefault(),e>1&&r(e-1)},children:"prev"})}),(0,l.jsx)(m,{children:t&&(null===t||void 0===t?void 0:t.map((function(n){return(0,l.jsx)("p",{style:n===e?{background:"#666",color:"#fff"}:null,onClick:function(){return function(n){r(n)}(n)},children:n},n)})))}),(0,l.jsx)(p,{children:(0,l.jsx)("button",{onClick:function(n){n.preventDefault(),e<t.length&&r(e+1)},children:"Next"})})]})};var s=c.ZP.div(t||(t=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 1rem;\n  padding: 1rem;\n  overflow: hidden;\n  width: 100%;\n  max-width: 1440px;\n"]))),u=c.ZP.div(i||(i=(0,d.Z)(["\n  button {\n    background-color: tomato;\n    border: none;\n    overflow-x: auto;\n    white-space: nowrap;\n    padding: 0.5rem 2rem;\n    border-radius: 3px;\n    cursor: pointer;\n  }\n"]))),m=c.ZP.div(o||(o=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  p {\n    font-size: 2rem;\n    padding: 0 0.7rem;\n    margin: 0 0.5rem;\n    border-radius: 0.3rem;\n    cursor: pointer;\n    &:hover {\n      background: #666;\n      color: #fff;\n    }\n  }\n"]))),p=(0,c.ZP)(u)(a||(a=(0,d.Z)([""])))}}]);
//# sourceMappingURL=204.0ad1cb4f.chunk.js.map