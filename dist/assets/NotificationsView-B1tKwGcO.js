import{m as n,B as p,r,o as c,c as v,h as d,g as u,b as t,d as e,F as w}from"./index-CzjaVJUo.js";const f={class:"content"},y={class:"row items-push"},g={class:"col-lg-8"},k={__name:"NotificationsView",setup(x){const o=n(null),l=n(null),i=n(null);return p(()=>{o.value=new window.bootstrap.Toast(document.getElementById("toast-example-1")),l.value=new window.bootstrap.Toast(document.getElementById("toast-example-2")),i.value=new window.bootstrap.Toast(document.getElementById("toast-example-3"))}),(B,s)=>{const m=r("BasePageHeading"),b=r("BaseBlock");return c(),v(w,null,[d(m,{title:"Notifications",subtitle:"Powerful alerts based on Bootstrap Toasts."},{extra:u(()=>s[3]||(s[3]=[t("nav",{"aria-label":"breadcrumb"},[t("ol",{class:"breadcrumb breadcrumb-alt"},[t("li",{class:"breadcrumb-item"},[t("a",{class:"link-fx",href:"javascript:void(0)"},"Plugins")]),t("li",{class:"breadcrumb-item","aria-current":"page"},"Notifications")])],-1)])),_:1}),t("div",f,[s[14]||(s[14]=t("div",{class:"position-fixed bottom-0 end-0 p-3 space-y-3",style:{"z-index":"9999"}},[t("div",{id:"toast-example-1",class:"toast fade hide","data-delay":"4000",role:"alert","aria-live":"assertive","aria-atomic":"true"},[t("div",{class:"toast-header"},[t("i",{class:"si si-bubble text-primary me-2"}),t("strong",{class:"me-auto"},"Title"),t("small",{class:"text-muted"},"just now"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})]),t("div",{class:"toast-body"}," This is a nice notification based on Bootstrap implementation. ")]),t("div",{id:"toast-example-2",class:"toast fade hide","data-delay":"4000",role:"alert","aria-live":"assertive","aria-atomic":"true"},[t("div",{class:"toast-header"},[t("i",{class:"si si-wrench text-danger me-2"}),t("strong",{class:"me-auto"},"System"),t("small",{class:"text-muted"},"just now"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})]),t("div",{class:"toast-body"}," You can alert the user with a system message! ")]),t("div",{id:"toast-example-3",class:"toast fade hide","data-delay":"4000",role:"alert","aria-live":"assertive","aria-atomic":"true"},[t("div",{class:"toast-header"},[t("i",{class:"fa fa-user-plus opacity-50 me-2"}),t("strong",{class:"me-auto"},"New Friend Request"),t("small",{class:"text-muted"},"just now"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})]),t("div",{class:"toast-body"},[t("a",{class:"fw-bold",href:"javascript:void(0)"},"John Doe"),e(" send you a friend request. "),t("div",{class:"mt-2 pt-2 border-top space-x-2"},[t("button",{type:"button",class:"btn btn-sm btn-primary"},[t("i",{class:"fa fa-check me-1 opacity-50"}),e(" Accept ")]),t("button",{type:"button",class:"btn btn-sm btn-alt-primary","data-bs-dismiss":"toast"}," Close ")])])])],-1)),d(b,{title:"Bootstrap Toasts"},{default:u(()=>[t("div",y,[s[13]||(s[13]=t("div",{class:"col-lg-4"},[t("p",{class:"fs-sm text-muted"},"A nice toast with a message")],-1)),t("div",g,[t("button",{type:"button",class:"btn btn-alt-primary push",onClick:s[0]||(s[0]=(...a)=>o.value.show&&o.value.show(...a))},s[4]||(s[4]=[t("i",{class:"fa fa-bell me-1 opacity-50"},null,-1),e(" Open Toast 1 ")])),s[7]||(s[7]=t("p",{class:"fw-semibold mb-0"},"You can trigger it with JS:",-1)),s[8]||(s[8]=t("p",null,[t("code",null,"toast1.show();")],-1)),t("button",{type:"button",class:"btn btn-alt-primary push",onClick:s[1]||(s[1]=(...a)=>l.value.show&&l.value.show(...a))},s[5]||(s[5]=[t("i",{class:"fa fa-bell me-1 opacity-50"},null,-1),e(" Open Toast 2 ")])),s[9]||(s[9]=t("p",{class:"fw-semibold mb-0"},"You can trigger it with JS:",-1)),s[10]||(s[10]=t("p",null,[t("code",null,"toast2.show();")],-1)),t("button",{type:"button",class:"btn btn-alt-primary push",onClick:s[2]||(s[2]=(...a)=>i.value.show&&i.value.show(...a))},s[6]||(s[6]=[t("i",{class:"fa fa-bell me-1 opacity-50"},null,-1),e(" Open Toast 3 ")])),s[11]||(s[11]=t("p",{class:"fw-semibold mb-0"},"You can trigger it with JS:",-1)),s[12]||(s[12]=t("p",null,[t("code",null,"toast3.show();")],-1))])])]),_:1})])],64)}}};export{k as default};
