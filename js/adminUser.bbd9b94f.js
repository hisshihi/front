"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[116],{5885:function(e,t,o){o.r(t),o.d(t,{default:function(){return m}});var l=o(3396),s=o(7139);const n={class:"table"},r=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"#"),(0,l._)("th",{scope:"col"},"Имя"),(0,l._)("th",{scope:"col"},"Фамилия"),(0,l._)("th",{scope:"col"},"Email"),(0,l._)("th",{scope:"col"},"Телефон"),(0,l._)("th",{scope:"col"},"Роль"),(0,l._)("th",{scope:"col"},"Удалить")])],-1),c={scope:"row"},a=["onChange"],u=["selected","value"];function h(e,t,o,h,d,i){const p=(0,l.up)("button-component");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("table",n,[r,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.users,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("th",c,(0,s.zw)(e.id),1),(0,l._)("td",null,(0,s.zw)(e.firstname),1),(0,l._)("td",null,(0,s.zw)(e.lastname),1),(0,l._)("td",null,(0,s.zw)(e.email),1),(0,l._)("td",null,(0,s.zw)(e.phone),1),(0,l._)("td",null,[(0,l._)("select",{onChange:t=>i.updateRoleUser(e.id,t)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.userRoles,(t=>((0,l.wg)(),(0,l.iD)("option",{key:t,selected:e.role==t,value:t},(0,s.zw)(t),9,u)))),128))],40,a)]),(0,l._)("td",null,[(0,l.Wm)(p,{name:"Удалить",type:"button",onClick:t=>i.deleteUser(e.id)},null,8,["onClick"])])])))),128))])])])}var d=o(1076),i=o(1449),p={components:{ButtonComponent:i.Z},data(){return{users:[],userId:null,userRoles:["ADMIN","USER","MANAGER"]}},mounted(){this.getUsers()},methods:{getUsers(){const e=localStorage.getItem("token"),t={Authorization:`Bearer ${e}`};d.Z.get("http://localhost:8080/users",{headers:t}).then((e=>{this.users=e.data})).catch((e=>console.log(e)))},deleteUser(e){const t=localStorage.getItem("token");console.log(t);const o={Authorization:`Bearer ${t}`};this.userId=e,d.Z.delete("http://localhost:8080/users/"+this.userId,{headers:o}).then((e=>{this.users=this.users.filter((e=>e.id!==this.userId));const t=e.data;localStorage.removeItem(t)})).catch((e=>console.log(e)))},updateRoleUser(e,t){const o=localStorage.getItem("token");console.log(o);const l={Authorization:`Bearer ${o}`},s=t.target.value;d.Z.patch("http://localhost:8080/users/"+e,{role:s},{headers:l}).then((e=>{})).catch((e=>console.log(e)))}}},g=o(89);const _=(0,g.Z)(p,[["render",h]]);var m=_}}]);
//# sourceMappingURL=adminUser.bbd9b94f.js.map