(this.webpackJsonplazyform=this.webpackJsonplazyform||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t(1),i=t(10),c=t.n(i),o=t(4),u=t(6),l=t(14),d=t(2),b=t(3);function p(){var n=Object(d.a)(["\n  display: block;\n  width: 92px;\n  height: 40px;\n  margin-bottom: 21px;\n  border: none;\n  border-radius: 3px;\n  background-color: #fad312;\n  cursor: pointer;\n"]);return p=function(){return n},n}function j(){var n=Object(d.a)(["\n  margin: 0;\n  margin-bottom: 24px;\n  font-size: 14px;\n"]);return j=function(){return n},n}function s(){var n=Object(d.a)(["\n  display: block;\n\n  & + & {\n    margin-top: 23px;\n  }\n"]);return s=function(){return n},n}function x(){var n=Object(d.a)(["\n  display: inline-block;\n  margin-right: 8px;\n"]);return x=function(){return n},n}function h(){var n=Object(d.a)(["\n  width: 287px;\n  border: 1px solid #d0d0d0;\n  display: block;\n"]);return h=function(){return n},n}function f(){var n=Object(d.a)(["\n  display: inline-block;\n  margin-bottom: 20px;\n  font-size: 20px;\n"]);return f=function(){return n},n}function m(){var n=Object(d.a)(["\n  margin: 50px 0px;\n"]);return m=function(){return n},n}function O(){var n=Object(d.a)(["\n  display: ",";\n  color: #e74149;\n"]);return O=function(){return n},n}function g(){var n=Object(d.a)(["\n  margin: 0;\n  font-size: 14px;\n\n  & + & {\n    margin-top: 11px;\n    margin-bottom: 22px;\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(d.a)(["\n  width: 100vw;\n  padding-top: 26px;\n  padding-bottom: 21px;\n  border-top: 3px solid #fad312;\n  background: black;\n  color: #999999;\n  text-align: center;\n  font-size: 13px;\n  font-family: \u5fae\u8edf\u6b63\u9ed1\u9ad4;\n"]);return v=function(){return n},n}function y(){var n=Object(d.a)(["\n  margin: 0;\n  margin-bottom: 36px;\n  font-size: 36px;\n  letter-spacing: -1.8px;\n"]);return y=function(){return n},n}function k(){var n=Object(d.a)(["\n  display: block;\n  width: 645px;\n  padding: 54px 42px;\n  border-top: 8px solid #fad312;\n  margin: 0 auto;\n  background: white;\n  font-family: \u5fae\u8edf\u6b63\u9ed1\u9ad4;\n  box-shadow: 1.8px 2.4px 5px 0 rgba(0, 0, 0, 0.3);\n"]);return k=function(){return n},n}function C(){var n=Object(d.a)(["\n  width: 100vw;\n  padding-top: 100px;\n  padding-bottom: 66px;\n  background: #f0f0f0;\n"]);return C=function(){return n},n}var q=b.a.div(C()),w=b.a.form(k()),z=b.a.h1(y()),I=b.a.footer(v()),$=b.a.p(g()),J=b.a.div(O(),(function(n){return n.$isInline?"inline":"block"})),S=b.a.div(m()),A=b.a.label(f()),B=b.a.input(h()),D=b.a.input(x()),E=b.a.div(s()),F=b.a.p(j()),R=b.a.button(p()),G="\u8eba\u5728\u5e8a\u4e0a\u7528\u60f3\u50cf\u529b\u5be6\u4f5c",H="\u8db4\u5728\u5730\u4e0a\u6ed1\u624b\u6a5f\u627e\u73fe\u6210\u7684",K=function(n){var e=n.label,t=n.required,a=n.subtitle,i=n.value,c=n.handleChange,o=n.type,u=n.name;return Object(r.jsxs)(S,{children:[Object(r.jsx)(A,{children:e}),t&&Object(r.jsx)(J,{$isInline:!0,children:" *"}),a&&Object(r.jsx)(F,{children:a}),Object(r.jsx)(B,{required:t,value:i,onChange:c,type:o,name:u})]})},L=function(n){var e=n.label,t=n.required,a=n.handleChange,i=n.value,c=n.name,o=n.type;return Object(r.jsxs)(S,{children:[Object(r.jsx)(A,{children:e}),t&&Object(r.jsx)(J,{$isInline:!0,children:" *"}),Object(r.jsxs)(E,{children:[Object(r.jsx)(D,{type:o,name:c,value:G,onChange:a,required:t,checked:i===G}),G]}),Object(r.jsxs)(E,{children:[Object(r.jsx)(D,{type:o,name:c,value:H,required:t,onChange:a,checked:i===H}),H]})]})},M=function(){return Object(r.jsx)(R,{type:"submit",children:"\u63d0\u4ea4"})},N=function(){var n=Object(a.useState)({nickname:"",email:"",phone:"",informed:"",others:"",type:""}),e=Object(l.a)(n,2),t=e[0],i=e[1],c=function(n){i(Object(u.a)(Object(u.a)({},t),{},Object(o.a)({},n.target.name,n.target.value)))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(q,{children:Object(r.jsxs)(w,{onSubmit:function(n){n.preventDefault(),alert("\u5831\u540d\u6210\u529f!\u60a8\u7684\u5831\u540d\u8cc7\u6599\u70ba:\n\u66b1\u7a31:".concat(t.nickname,"\n\u96fb\u5b50\u90f5\u4ef6:").concat(t.email,"\n\u600e\u9ebc\u77e5\u9053\u9019\u500b\u6d3b\u52d5\u7684?:").concat(t.informed,"\n\u5831\u540d\u985e\u578b:").concat(t.type,"\n\u5176\u4ed6:").concat(t.others,"\n    "))},children:[Object(r.jsx)(z,{children:"\u65b0\u62d6\u5ef6\u904b\u52d5\u5831\u540d\u8868\u55ae"}),Object(r.jsx)($,{children:"\u6d3b\u52d5\u65e5\u671f\uff1a2020/12/10 ~ 2020/12/11"}),Object(r.jsx)($,{children:"\u6d3b\u52d5\u5730\u9ede\uff1a\u53f0\u5317\u5e02\u5927\u5b89\u5340\u65b0\u751f\u5357\u8def\u4e8c\u6bb51\u865f"}),Object(r.jsx)(J,{$isInline:!1,children:"* \u5fc5\u586b"}),Object(r.jsx)(K,{label:"\u66b1\u7a31",required:!0,value:t.nickname,type:"text",name:"nickname",handleChange:c}),Object(r.jsx)(K,{label:"\u96fb\u5b50\u90f5\u4ef6",required:!0,value:t.email,type:"email",name:"email",handleChange:c}),Object(r.jsx)(K,{label:"\u624b\u6a5f\u865f\u78bc",required:!0,value:t.phone,type:"number",name:"phone",handleChange:c}),Object(r.jsx)(L,{label:"\u5831\u540d\u985e\u578b",required:!0,value:t.type,type:"radio",name:"phone",handleChange:c}),Object(r.jsx)(K,{label:"\u600e\u9ebc\u77e5\u9053\u9019\u500b\u6d3b\u52d5\u7684\uff1f",required:!0,value:t.informed,type:"informed",name:"phone",handleChange:c}),Object(r.jsx)(K,{label:"\u5176\u4ed6",required:!1,subtitle:"\u5c0d\u6d3b\u52d5\u7684\u4e00\u4e9b\u5efa\u8b70",value:t.others,type:"text",name:"others",handleChange:c}),Object(r.jsx)(M,{}),Object(r.jsx)($,{children:"\u8acb\u52ff\u900f\u904e\u8868\u55ae\u9001\u51fa\u60a8\u7684\u5bc6\u78bc\u3002"})]})}),Object(r.jsx)(I,{children:"\xa9 2020 \xa9 Copyright. All rights Reserved."})]})};c.a.render(Object(r.jsx)(N,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.321e7b7e.chunk.js.map