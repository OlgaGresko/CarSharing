import{i as m,k as q,l as F,u as R,r as d,j as e,n as A,o as L,c as I}from"./index-3406340c.js";import{s as j,l as v}from"./sprite-b1c22a03.js";function C(s=m){const a=s===m?q:F(s);return function(){const{store:i}=a();return i}}const D=C();function H(s=m){const a=s===m?D:C(s);return function(){return a().dispatch}}const T=H(),M=s=>s.slice(1),U="_container_1rm7f_1",z="_cars_container_1rm7f_8",N={container:U,cars_container:z};let O=(s=21)=>crypto.getRandomValues(new Uint8Array(s)).reduce((a,c)=>(c&=63,c<36?a+=c.toString(36):c<62?a+=(c-26).toString(36).toUpperCase():c>62?a+="-":a+="_",a),"");const V="_container_yid0q_1",Y="_image_container_yid0q_7",B="_image_yid0q_7",G="_gradient_overlay_yid0q_23",K="_icon_yid0q_37",X="_icon_active_yid0q_46",J="_presentation_yid0q_56",Q="_name_yid0q_63",W="_model_yid0q_75",Z="_description_yid0q_79",ss="_line_yid0q_83",es="_details_yid0q_89",ns="_separator_yid0q_95",as="_button_yid0q_105",o={container:V,image_container:Y,image:B,gradient_overlay:G,icon:K,icon_active:X,presentation:J,name:Q,model:W,description:Z,line:ss,details:es,separator:ns,button:as},Ds=s=>s.makes.makes,Hs=s=>s.cars.adverts,Ts=s=>s.cars.firstAdverts,Ms=s=>s.cars.filteredAdverts,Us=s=>s.cars.isLoading,zs=s=>s.cars.error,cs=s=>s.favorites.favorites,k=s=>s.split(", ")[1],b=s=>s.split(", ")[2],$=s=>s.charAt(0).toUpperCase()+s.slice(1).toLowerCase(),u=(s,a)=>s.split(`
`)[a],g=(s,a)=>u(s,0).split(": ")[a],os=s=>{if(typeof s!="number")return;const a=s.toString(),c=a.length;if(c<=3)return a;const i=a.slice(0,c%3||3),l=[];for(let t=c%3||3;t<c;t+=3)l.push(a.slice(t,t+3));return i+","+l.join(",")},ts=s=>{if(typeof s!="string"||s.indexOf("$")===-1)return;const c=s.slice(1),i=s.slice(0,1);return`${c}${i}`},f=10,Os=["30","40","50","60","70","80","90","100","110","120","130","140","150","160","170","180","190","200","250","300","350","400","450","500"],y="/CarSharing/assets/default-car-img-4f9df667.png",is=({advert:s,toggleCarModal:a})=>{const c=T(),i=R(cs),[l,t]=d.useState(!1),[_,p]=d.useState(!1),[w,S]=d.useState(s.img||y);d.useEffect(()=>{p(i.some(h=>h.id===s.id))},[i,s.id]),d.useEffect(()=>{parseInt(M(s.rentalPrice))>=100&&t(!0)},[s.rentalPrice]);const P=()=>{_?(c(A({id:s.id})),p(!1)):(c(L(s)),p(!0))},E=()=>{S(y)};return e.jsxs("div",{className:o.container,children:[e.jsxs("div",{className:o.image_container,children:[e.jsx("img",{className:o.image,src:w,onError:E,alt:"Photo of a car"}),e.jsx("div",{className:o.gradient_overlay})]}),e.jsx("div",{className:o.icons,onClick:P,children:_?e.jsx("svg",{className:o.icon_active,children:e.jsx("use",{href:j+"#icon-heart-active"})}):e.jsx("svg",{className:o.icon,children:e.jsx("use",{href:j+"#icon-heart"})})}),e.jsxs("div",{className:o.presentation,children:[e.jsxs("span",{className:o.name,children:[s.make,s.make.length<=f&&s.model.length<=f&&e.jsx("span",{className:o.model,children:` ${s.model}`}),", ",s.year]}),e.jsx("span",{className:o.name,children:s.rentalPrice})]}),e.jsxs("div",{className:o.description,children:[e.jsxs("p",{className:o.line,children:[e.jsx("span",{className:o.details,children:k(s.address)}),e.jsx("span",{className:o.separator}),e.jsx("span",{className:o.details,children:b(s.address)}),e.jsx("span",{className:o.separator}),e.jsx("span",{className:o.details,children:s.rentalCompany}),l&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:o.separator}),e.jsx("span",{className:o.details,children:"Premium"})]})]}),e.jsxs("p",{className:o.line,children:[e.jsx("span",{className:o.details,children:$(s.type)}),e.jsx("span",{className:o.separator}),e.jsx("span",{className:o.details,children:s.model}),e.jsx("span",{className:o.separator}),e.jsx("span",{className:o.details,children:s.id}),e.jsx("span",{className:o.separator}),e.jsx("span",{className:o.details,children:s.functionalities[0]})]})]}),e.jsx("button",{className:o.button,type:"button",onClick:h=>a(s)(h),children:"Learn more"})]})},Vs=({cars:s,toggleCarModal:a})=>e.jsx("div",{className:N.container,children:e.jsx("div",{className:N.cars_container,children:s.map(c=>e.jsx(is,{advert:c,toggleCarModal:a},O()))})}),rs="_container_1jawh_1",ls="_photo_1jawh_7",ds="_name_1jawh_15",_s="_model_1jawh_22",ms="_first_line_1jawh_26",ps="_details_1jawh_30",hs="_separator_1jawh_36",xs="_description_1jawh_46",js="_accessories_1jawh_52",us="_conditions_section_1jawh_58",Ns="_conditions_1jawh_58",gs="_conditions_block_1jawh_69",fs="_condition_1jawh_58",ys="_condition_meaning_1jawh_86",Cs="_button_1jawh_95",n={container:rs,photo:ls,name:ds,model:_s,first_line:ms,details:ps,separator:hs,description:xs,accessories:js,conditions_section:us,conditions:Ns,conditions_block:gs,condition:fs,condition_meaning:ys,button:Cs},Ys=({advert:s,toggleCarModal:a})=>e.jsxs("div",{className:n.container,children:[e.jsxs("div",{children:[e.jsx("img",{className:n.photo,src:s.img,alt:"Car photo"}),e.jsxs("p",{className:n.name,children:[s.make," ",e.jsx("span",{className:n.model,children:s.model}),","," ",s.year]}),e.jsxs("p",{className:n.first_line,children:[e.jsx("span",{className:n.details,children:k(s.address)}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:b(s.address)}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:`Id: ${s.id}`}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:`Year: ${s.year}`}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:`Type: ${$(s.type)}`})]}),e.jsxs("p",{children:[e.jsx("span",{className:n.details,children:`Fuel Consumption: ${s.fuelConsumption}`}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:`Engine Size: ${s.engineSize}`})]}),e.jsx("p",{className:n.description,children:s.description})]}),e.jsxs("div",{children:[e.jsx("p",{className:n.accessories,children:"Accessories and functionalities:"}),e.jsxs("p",{className:n.first_line,children:[e.jsx("span",{className:n.details,children:s.accessories[0]}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:s.accessories[1]}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:s.accessories[2]})]}),e.jsxs("p",{className:n.second_line,children:[e.jsx("span",{className:n.details,children:s.functionalities[0]}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:s.functionalities[1]}),e.jsx("span",{className:n.separator}),e.jsx("span",{className:n.details,children:s.functionalities[2]})]})]}),e.jsxs("div",{className:n.conditions_section,children:[e.jsx("p",{className:n.conditions,children:"Rental Conditions:"}),e.jsxs("div",{className:n.conditions_block,children:[e.jsxs("span",{className:n.condition,children:[`${g(s.rentalConditions,0)}: `,e.jsx("span",{className:n.condition_meaning,children:g(s.rentalConditions,1)})]}),e.jsx("span",{className:n.condition,children:u(s.rentalConditions,1)})]}),e.jsxs("div",{className:n.conditions_block,children:[e.jsx("span",{className:n.condition,children:u(s.rentalConditions,2)}),e.jsxs("span",{className:n.condition,children:["Mileage:"," ",e.jsx("span",{className:n.condition_meaning,children:os(s.mileage)})]}),e.jsxs("span",{className:n.condition,children:["Price:"," ",e.jsx("span",{className:n.condition_meaning,children:ts(s.rentalPrice)})]})]})]}),e.jsx("button",{className:n.button,onClick:c=>a(s)(c),type:"button",id:"modal",children:"Rental car"})]}),ks="_modal_backdrop_19gcu_1",bs="_modal_content_19gcu_10",$s="_close_x_19gcu_23",x={modal_backdrop:ks,modal_content:bs,close_x:$s},ws=document.querySelector("#modal-root"),Bs=({toggleCarModal:s,children:a,advert:c})=>{d.useEffect(()=>{const t=_=>{_.code==="Escape"&&s(c)(_)};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[s]);const i=t=>{t.currentTarget===t.target&&s(c)(t)},l=t=>{s(c)(t)};return I.createPortal(e.jsx("div",{className:x.modal_backdrop,onClick:i,children:e.jsxs("div",{className:x.modal_content,children:[e.jsx("svg",{className:x.close_x,onClick:l,children:e.jsx("use",{href:j+"#icon-x"})}),a]})}),ws)},Ss="_container_h7iai_1",Ps="_logotype_h7iai_7",Es="_logo_h7iai_7",qs="_slogan_h7iai_19",Fs="_photo_h7iai_26",Rs="_description_block_h7iai_33",As="_description_h7iai_33",Ls="_button_h7iai_45",r={container:Ss,logotype:Ps,logo:Es,slogan:qs,photo:Fs,description_block:Rs,description:As,button:Ls},Gs=({advert:s,toggleCarModal:a})=>e.jsxs("div",{className:r.container,children:[e.jsxs("div",{className:r.logotype,children:[e.jsx("img",{className:r.logo,src:v,alt:"Logo"}),e.jsx("p",{className:r.slogan,children:"CARS FOR EVERYONE"})]}),e.jsx("img",{className:r.photo,src:s.img,alt:"Car photo"}),e.jsxs("div",{className:r.description_block,children:[e.jsx("p",{className:r.description,children:"Please feel free to contact us to finalize your car rental:"}),e.jsx("a",{href:"tel:+380730000000",children:"+38 (073) 000 00 00"}),e.jsx("p",{className:r.description,children:"Thanks for choosing us!"})]}),e.jsx("button",{className:r.button,onClick:a,type:"button",children:"Close"})]});export{Vs as C,Bs as M,Os as P,Gs as S,Hs as a,Ms as b,Us as c,zs as d,M as e,Ts as f,Ys as g,cs as h,Ds as s,T as u};
