import{i as m,k as w,l as P,u as S,r as _,j as e,n as E,o as q,c as F}from"./index-9ba482fb.js";import{s as j,l as R}from"./sprite-75d8b8d6.js";function y(s=m){const a=s===m?w:P(s);return function(){const{store:t}=a();return t}}const A=y();function L(s=m){const a=s===m?A:y(s);return function(){return a().dispatch}}const I=L(),v=s=>s.slice(1),D="_container_1rm7f_1",T="_cars_container_1rm7f_8",N={container:D,cars_container:T};let H=(s=21)=>crypto.getRandomValues(new Uint8Array(s)).reduce((a,c)=>(c&=63,c<36?a+=c.toString(36):c<62?a+=(c-26).toString(36).toUpperCase():c>62?a+="-":a+="_",a),"");const M="_container_yid0q_1",U="_image_container_yid0q_7",z="_image_yid0q_7",O="_gradient_overlay_yid0q_23",V="_icon_yid0q_37",Y="_icon_active_yid0q_46",B="_presentation_yid0q_56",G="_name_yid0q_63",K="_model_yid0q_75",X="_description_yid0q_79",J="_line_yid0q_83",Q="_details_yid0q_89",W="_separator_yid0q_95",Z="_button_yid0q_105",o={container:M,image_container:U,image:z,gradient_overlay:O,icon:V,icon_active:Y,presentation:B,name:G,model:K,description:X,line:J,details:Q,separator:W,button:Z},As=s=>s.makes.makes,Ls=s=>s.cars.adverts,Is=s=>s.cars.firstAdverts,vs=s=>s.cars.filteredAdverts,Ds=s=>s.cars.isLoading,Ts=s=>s.cars.error,ss=s=>s.favorites.favorites,C=s=>s.split(", ")[1],k=s=>s.split(", ")[2],b=s=>s.charAt(0).toUpperCase()+s.slice(1).toLowerCase(),u=(s,a)=>s.split(`
`)[a],f=(s,a)=>u(s,0).split(": ")[a],es=s=>{if(typeof s!="number")return;const a=s.toString(),c=a.length;if(c<=3)return a;const t=a.slice(0,c%3||3),l=[];for(let i=c%3||3;i<c;i+=3)l.push(a.slice(i,i+3));return t+","+l.join(",")},ns=s=>{if(typeof s!="string"||s.indexOf("$")===-1)return;const c=s.slice(1),t=s.slice(0,1);return`${c}${t}`},g=10,Hs=["30","40","50","60","70","80","90","100","110","120","130","140","150","160","170","180","190","200","250","300","350","400","450","500"],as=({advert:s,toggleCarModal:a})=>{const c=I(),t=S(ss),[l,i]=_.useState(!1),[d,p]=_.useState(!1);_.useEffect(()=>{p(t.some(h=>h.id===s.id))},[t,s.id]),_.useEffect(()=>{parseInt(v(s.rentalPrice))>=100&&i(!0)},[s.rentalPrice]);const $=()=>{d?(c(E({id:s.id})),p(!1)):(c(q(s)),p(!0))};return e.jsxs("div",{className:o.container,children:[e.jsxs("div",{className:o.image_container,children:[e.jsx("img",{className:o.image,src:s.img,alt:"Photo of a car"}),e.jsx("div",{className:o.gradient_overlay})]}),e.jsx("div",{className:o.icons,onClick:$,children:d?e.jsx("svg",{className:o.icon_active,children:e.jsx("use",{href:j+"#icon-heart-active"})}):e.jsx("svg",{className:o.icon,children:e.jsx("use",{href:j+"#icon-heart"})})}),e.jsxs("div",{className:o.presentation,children:[e.jsxs("span",{className:o.name,children:[s.make,s.make.length<=g&&s.model.length<=g&&e.jsx("span",{className:o.model,children:` ${s.model}`}),", ",s.year]}),e.jsx("span",{className:o.name,children:s.rentalPrice})]}),e.jsxs("div",{className:o.description,children:[e.jsxs("p",{className:o.line,children:[e.jsx("span",{className:o.details,children:C(s.address)}),e.jsx("span",{className:o.separator}),e.jsx("span",{className:o.details,children:k(s.address)}),e.jsx("span",{className:o.separator}),e.jsx("span",{className:o.details,children:s.rentalCompany}),l&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:o.separator}),e.jsx("span",{className:o.details,children:"Premium"})]})]}),e.jsxs("p",{className:o.line,children:[e.jsx("span",{className:o.details,children:b(s.type)}),e.jsx("span",{className:o.separator}),e.jsx("span",{className:o.details,children:s.model}),e.jsx("span",{className:o.separator}),e.jsx("span",{className:o.details,children:s.id}),e.jsx("span",{className:o.separator}),e.jsx("span",{className:o.details,children:s.functionalities[0]})]})]}),e.jsx("button",{className:o.button,type:"button",onClick:h=>a(s)(h),children:"Learn more"})]})},Ms=({cars:s,toggleCarModal:a})=>e.jsx("div",{className:N.container,children:e.jsx("div",{className:N.cars_container,children:s.map(c=>e.jsx(as,{advert:c,toggleCarModal:a},H()))})}),cs="_container_1jawh_1",os="_photo_1jawh_7",is="_name_1jawh_15",ts="_model_1jawh_22",rs="_first_line_1jawh_26",ls="_details_1jawh_30",ds="_separator_1jawh_36",_s="_description_1jawh_46",ms="_accessories_1jawh_52",ps="_conditions_section_1jawh_58",hs="_conditions_1jawh_58",xs="_conditions_block_1jawh_69",js="_condition_1jawh_58",us="_condition_meaning_1jawh_86",Ns="_button_1jawh_95",n={container:cs,photo:os,name:is,model:ts,first_line:rs,details:ls,separator:ds,description:_s,accessories:ms,conditions_section:ps,conditions:hs,conditions_block:xs,condition:js,condition_meaning:us,button:Ns},Us=({advert:s,toggleCarModal:a})=>e.jsxs("div",{className:n.container,children:[e.jsxs("div",{children:[e.jsx("img",{className:n.photo,src:s.img,alt:"Car photo"}),e.jsxs("p",{className:n.name,children:[s.make," ",e.jsx("span",{className:n.model,children:s.model}),","," ",s.year]}),e.jsxs("p",{className:n.first_line,children:[e.jsx("span",{className:n.details,children:C(s.address)}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:k(s.address)}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:`Id: ${s.id}`}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:`Year: ${s.year}`}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:`Type: ${b(s.type)}`})]}),e.jsxs("p",{children:[e.jsx("span",{className:n.details,children:`Fuel Consumption: ${s.fuelConsumption}`}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:`Engine Size: ${s.engineSize}`})]}),e.jsx("p",{className:n.description,children:s.description})]}),e.jsxs("div",{children:[e.jsx("p",{className:n.accessories,children:"Accessories and functionalities:"}),e.jsxs("p",{className:n.first_line,children:[e.jsx("span",{className:n.details,children:s.accessories[0]}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:s.accessories[1]}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:s.accessories[2]})]}),e.jsxs("p",{className:n.second_line,children:[e.jsx("span",{className:n.details,children:s.functionalities[0]}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:s.functionalities[1]}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:s.functionalities[2]})]})]}),e.jsxs("div",{className:n.conditions_section,children:[e.jsx("p",{className:n.conditions,children:"Rental Conditions:"}),e.jsxs("div",{className:n.conditions_block,children:[e.jsxs("span",{className:n.condition,children:[`${f(s.rentalConditions,0)}: `,e.jsx("span",{className:n.condition_meaning,children:f(s.rentalConditions,1)})]}),e.jsx("span",{className:n.condition,children:u(s.rentalConditions,1)})]}),e.jsxs("div",{className:n.conditions_block,children:[e.jsx("span",{className:n.condition,children:u(s.rentalConditions,2)}),e.jsxs("span",{className:n.condition,children:["Mileage:"," ",e.jsx("span",{className:n.condition_meaning,children:es(s.mileage)})]}),e.jsxs("span",{className:n.condition,children:["Price:"," ",e.jsx("span",{className:n.condition_meaning,children:ns(s.rentalPrice)})]})]})]}),e.jsx("button",{className:n.button,onClick:c=>a(s)(c),type:"button",id:"modal",children:"Rental car"})]}),fs="_modal_backdrop_19gcu_1",gs="_modal_content_19gcu_10",ys="_close_x_19gcu_23",x={modal_backdrop:fs,modal_content:gs,close_x:ys},Cs=document.querySelector("#modal-root"),zs=({toggleCarModal:s,children:a,advert:c})=>{_.useEffect(()=>{const i=d=>{d.code==="Escape"&&s(c)(d)};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[s]);const t=i=>{i.currentTarget===i.target&&s(c)(i)},l=i=>{s(c)(i)};return F.createPortal(e.jsx("div",{className:x.modal_backdrop,onClick:t,children:e.jsxs("div",{className:x.modal_content,children:[e.jsx("svg",{className:x.close_x,onClick:l,children:e.jsx("use",{href:j+"#icon-x"})}),a]})}),Cs)},ks="_container_h7iai_1",bs="_logotype_h7iai_7",$s="_logo_h7iai_7",ws="_slogan_h7iai_19",Ps="_photo_h7iai_26",Ss="_description_block_h7iai_33",Es="_description_h7iai_33",qs="_button_h7iai_45",r={container:ks,logotype:bs,logo:$s,slogan:ws,photo:Ps,description_block:Ss,description:Es,button:qs},Os=({advert:s,toggleCarModal:a})=>e.jsxs("div",{className:r.container,children:[e.jsxs("div",{className:r.logotype,children:[e.jsx("img",{className:r.logo,src:R,alt:"Logo"}),e.jsx("p",{className:r.slogan,children:"CARS FOR EVERYONE"})]}),e.jsx("img",{className:r.photo,src:s.img,alt:"Car photo"}),e.jsxs("div",{className:r.description_block,children:[e.jsx("p",{className:r.description,children:"Please feel free to contact us to finalize your car rental:"}),e.jsx("a",{href:"tel:+380730000000",children:"+38 (073) 000 00 00"}),e.jsx("p",{className:r.description,children:"Thanks for choosing us!"})]}),e.jsx("button",{className:r.button,onClick:a,type:"button",children:"Close"})]});export{Ms as C,zs as M,Hs as P,Os as S,Ls as a,vs as b,Ds as c,Ts as d,v as e,Is as f,Us as g,ss as h,As as s,I as u};