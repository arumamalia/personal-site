(function(){"use strict";var s={5644:function(s,i,e){var a=e(9242),t=e(3396),l=e(4870),c=e.p+"img/Logo.86a21d9e.svg",d=e.p+"img/linkedin-logo.9bb4ddf6.svg",o=e.p+"img/github-log.bbead809.svg",n=e.p+"img/contact-me.2c4a9b30.svg",r=e.p+"img/close.3ab131ef.svg";const v={class:"modal fade",id:"myModal"},u={class:"modal-dialog modal-xl"},m={class:"modal-content"},p={class:"group-popup d-flex justify-content-center w-100",id:"myPopup"},g={class:"popup-style"},b={class:"container-popup"},f=(0,t._)("img",{class:"img-contact-me",src:n},null,-1),h={class:"form-close"},_={class:"group"},w={class:"group-half"},y={class:"form-half"},x=(0,t._)("label",{class:"tag"},"Name",-1),j={class:"form-half"},E=(0,t._)("label",{class:"tag"},"Email",-1),k={class:"group-full-sub"},A=(0,t._)("label",{class:"tag"},"Subject",-1),S={class:"group-full-mes"},M=(0,t._)("label",{class:"tag"},"Message",-1),C={class:"button btn-send",type:"submit",ref:"Close","data-bs-dismiss":"modal"},U=(0,t._)("div",{class:"close"},[(0,t._)("img",{type:"button","data-bs-dismiss":"modal",class:"close-img",src:r})],-1);function D(s,i,e,l,c,d){const o=(0,t.up)("lord-icon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(o,{type:"button",class:"mail",src:"https://cdn.lordicon.com/pdpnqfoe.json",trigger:"hover",colors:"primary:#426e86,secondary:#f8f1e5",style:{width:"100px",height:"100px"},"data-bs-toggle":"modal","data-bs-target":"#myModal"}),(0,t._)("div",v,[(0,t._)("div",u,[(0,t._)("div",m,[(0,t._)("div",p,[(0,t._)("div",g,[(0,t._)("div",b,[f,(0,t._)("div",h,[(0,t._)("form",{ref:"form",onSubmit:i[4]||(i[4]=(0,a.iM)(((...s)=>d.sendEmail&&d.sendEmail(...s)),["prevent"]))},[(0,t._)("div",_,[(0,t._)("div",w,[(0,t._)("div",y,[x,(0,t.wy)((0,t._)("input",{class:"form-control",type:"text","onUpdate:modelValue":i[0]||(i[0]=s=>c.name=s),id:"name",name:"name"},null,512),[[a.nr,c.name]])]),(0,t._)("div",j,[E,(0,t.wy)((0,t._)("input",{class:"form-control",type:"email","onUpdate:modelValue":i[1]||(i[1]=s=>c.email=s),id:"email",name:"email"},null,512),[[a.nr,c.email]])])]),(0,t._)("div",k,[A,(0,t.wy)((0,t._)("input",{class:"form-control",type:"text","onUpdate:modelValue":i[2]||(i[2]=s=>c.subject=s),id:"subject",name:"subject"},null,512),[[a.nr,c.subject]])]),(0,t._)("div",S,[M,(0,t.wy)((0,t._)("input",{class:"form-control",type:"text","onUpdate:modelValue":i[3]||(i[3]=s=>c.message=s),id:"message",name:"message"},null,512),[[a.nr,c.message]])]),(0,t._)("div",null,[(0,t._)("button",C,"Send Message",512)])])],544),U])])])])])])])],64)}var P=e(4294),F={name:"ContactUs",data(){return{name:"",email:"",subject:"",message:""}},methods:{sendEmail(){P.ZP.sendForm("service_r60eb88","template_xdyoa4b",this.$refs.form,"DI9XZ7hLB5o6MgX7Q").then((s=>{console.log("SUCCESS!",s.text)}),(s=>{console.log("FAILED...",s.text)})),this.name="",this.email="",this.subject="",this.message=""}}},O=e(89);const H=(0,O.Z)(F,[["render",D]]);var W=H,I=e(678);const L={class:"header fixed-top"},T={class:"container header-item",id:"app"},B=(0,t._)("img",{src:c,alt:"Logo"},null,-1),Z={class:"nav"},J=(0,t.uE)('<footer class="footer"><div class="social-media"><a href="https://www.linkedin.com/in/arum-amalia/" target="_blank"><img class="social-media-logo" src="'+d+'"></a><a href="https://github.com/arumamalia" target="_blank"><img class="social-media-logo" src="'+o+'"></a></div><div class="bottom-footer"><p id="copy">©</p><p class="by">2022 designed by arum amalia</p></div></footer>',1),Q={components:{RouterLink:I.rH}};var G=Object.assign(Q,{__name:"App",setup(s){return(s,i)=>{const e=(0,t.up)("router-view");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("header",L,[(0,t._)("div",T,[(0,t.Wm)((0,l.SU)(I.rH),{to:"/"},{default:(0,t.w5)((()=>[B])),_:1}),(0,t._)("div",Z,[(0,t.Wm)((0,l.SU)(I.rH),{to:"/",class:"nav-item"},{default:(0,t.w5)((()=>[(0,t.Uk)("HOME")])),_:1}),(0,t.Wm)((0,l.SU)(I.rH),{to:"/aboutme",class:"nav-item"},{default:(0,t.w5)((()=>[(0,t.Uk)("ABOUT ME")])),_:1}),(0,t.Wm)((0,l.SU)(I.rH),{to:"/contactme",class:"nav-item","data-bs-toggle":"modal","data-bs-target":"#myModal"},{default:(0,t.w5)((()=>[(0,t.Uk)("CONTACT ME")])),_:1})])])]),(0,t.Wm)(e),(0,t._)("main",null,[(0,t.Wm)(W),J])],64)}}});const V=G;var q=V,z=e.p+"img/astronaut1.8cc89b4c.svg",N=e.p+"img/fotopic.e7f62d52.svg",R=e.p+"img/astronaut2.894a579f.svg",X=e.p+"img/BE-icon.264f4c44.svg",Y=e.p+"img/FE-icon.04b5f45f.svg",K=e.p+"img/UI-UX-icon.af28dc21.svg",$=e.p+"img/astronaut3.46fbe83f.svg",ss=e.p+"img/big-star.78fc7fa9.svg",is=e.p+"img/lil-star.4b7a193b.svg",es=e.p+"img/arrow-left.96d5d85d.svg",as=e.p+"img/arrow-right.aa7141a4.svg",ts=e(1658);const ls={class:"container profile"},cs=(0,t.uE)('<div class="profile-desc"><div><p class="greet"></p><p class="name">Arum Amalia</p></div><div><p class="desc">An independent and highly-motivated Developer with experience in software programming. </p></div><div><button class="button" id="btn-contact" data-bs-toggle="modal" data-bs-target="#myModal">Contact Me</button></div></div>',1),ds={class:"profile-pic"},os=(0,t._)("img",{class:"rotate-center rotate",src:z},null,-1),ns=(0,t._)("div",{class:"card-name shake-vertical"},[(0,t._)("img",{class:"img-small",src:N}),(0,t._)("div",{class:"job-name"},[(0,t._)("p",{class:"name-small"},"Arum Amalia"),(0,t._)("p",{class:"job"},"Front End Developer")])],-1),rs=(0,t.uE)('<div class="container services"><div class="title-services"><img class="img-services" src="'+R+'"><div class="services-desc"><div><p class="coal-font">My</p><p class="yellow-font">Services</p></div><p class="desc-font">Provide development, innovation, collaboration, and creativity in Information Technology sector.</p></div></div><div class="group-services"><div class="group-services1"><div class="sub-services be-sub-services"><img class="icon" src="'+X+'"><p class="job-services">Back End</p><p class="job-desc-services">PHP, Javascript, Golang, SQL Server, Postman.</p></div></div><div class="group-services2"><div class="sub-services fe-sub-services"><img class="icon" src="'+Y+'"><p class="job-services">Front End</p><p class="job-desc-services">HTML, CSS, jQuery, Vue.js, CodeIgniter.</p></div><div class="sub-services uiux-sub-services"><img class="icon" src="'+K+'"><p class="job-services">UI/UX</p><p class="job-desc-services">Figma</p></div></div></div></div><div class="container projects"><div class="title-projects"><div class="img-title-projects"><img class="img-project-1" src="'+$+'"><img class="img-project-2 rotate-center-360deg" src="'+ss+'"><img class="img-project-3" src="'+is+'"></div><div class="sub-desc-title-projects"><div class="sub-title-projects"><p id="my">My</p><p id="projects">Projects</p></div></div></div></div>',2),vs={class:"d-flex align-items-center"},us=(0,t._)("img",{src:es},null,-1),ms=[us],ps={class:"carousel__item slide-item"},gs=["src"],bs={class:"nav-page"},fs=(0,t._)("img",{src:as},null,-1),hs=[fs],_s=(0,t._)("br",null,null,-1),ws=(0,l.iH)(null),ys={name:"App",data:()=>({currentSlide:0,breakpoints:{700:{itemsToShow:3.5,snapAlign:"center"},1024:{itemsToShow:3,snapAlign:"center"}},contentIndex:0,slides:[{id:"1",image:e(9432)},{id:"2",image:e(3356)},{id:"3",image:e(1795)},{id:"4",image:e(3356)},{id:"5",image:e(1795)},{id:"6",image:e(9432)},{id:"7",image:e(3356)},{id:"8",image:e(9432)}],long_scrollbar_width:744,adjust_scrollbar:0,scrollbar:0}),methods:{next(){ws.value.next()},prev(){ws.value.prev()},adjust_scrollbar_prev(){this.adjust_scrollbar=this.long_scrollbar_width/this.slides.length,this.scrollbar>this.adjust_scrollbar?this.scrollbar-=this.adjust_scrollbar:this.scrollbar=this.long_scrollbar_width},adjust_scrollbar_next(){this.adjust_scrollbar=this.long_scrollbar_width/this.slides.length,this.scrollbar<this.long_scrollbar_width?this.scrollbar+=this.adjust_scrollbar:this.scrollbar=this.adjust_scrollbar}},mounted(){this.scrollbar=this.long_scrollbar_width/this.slides.length},updated(){console.log(this.scrollbar)}};var xs=Object.assign(ys,{setup(s){return(s,i)=>{const e=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",ls,[cs,(0,t._)("div",ds,[os,(0,t.Wm)(e,{to:"/aboutme"},{default:(0,t.w5)((()=>[ns])),_:1})])]),rs,(0,t._)("div",vs,[(0,t._)("button",{class:"btn",onClick:i[0]||(i[0]=i=>{s.prev(),s.adjust_scrollbar_prev()})},ms),(0,t.Wm)((0,l.SU)(ts.lr),{"wrap-around":!0,breakpoints:s.breakpoints,class:"wrap",ref_key:"navigation",ref:ws},{addons:(0,t.w5)((()=>[(0,t._)("div",bs,[(0,t.Wm)((0,l.SU)(ts.tl))])])),default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.slides,(s=>((0,t.wg)(),(0,t.j4)((0,l.SU)(ts.Mi),{key:s.id},{default:(0,t.w5)((()=>[(0,t._)("div",ps,[(0,t._)("img",{src:s.image},null,8,gs)])])),_:2},1024)))),128))])),_:1},8,["breakpoints"]),(0,t._)("button",{class:"btn",onClick:i[1]||(i[1]=i=>{s.next(),s.adjust_scrollbar_next()})},hs)]),_s],64)}}});const js=xs;var Es=js,ks=e(7139),As=e.p+"img/sun-bright.c34d3cdf.svg",Ss=e.p+"img/sun-flex.e989c25d.svg",Ms=e.p+"img/experience-planet.0ba03cb7.svg",Cs=e.p+"img/education.a4465ba7.svg",Us=e.p+"img/expertise-planet.1d86c9d8.svg",Ds=e.p+"img/languages-planet.2d87ae60.svg",Ps=e.p+"img/achievements-planet.6d65412e.svg",Fs=e.p+"img/volunteer-planet.004ee25b.svg",Os=e.p+"img/path-experience.eebb42a7.svg",Hs=e.p+"img/star-3.f1300b78.svg",Ws=e.p+"img/star-1.d774e3e4.svg";const Is=(0,t.uE)('<div class="container-2"><div class="star-path path-exp"><img src="'+Os+'"></div><div class="display-aboutme"><div class="list-aboutme"><div class="container-desc-left"><div class="periode-aboutme periode-aboutme-left"><div class="date-periode-aboutme">Jul 2021 - Present</div></div></div><div class="star"><img src="'+Hs+'"></div><div class="container-desc-right"><div class="desc-aboutme desc-aboutme-right"><div class="font-16-semibold title-aboutme-right">PT. KB Finansia Multi Finance</div><div class="desc-univ"><div class="font-18-semibold">Front End Developer</div><ul class="list-activities"><li>Learning new programming languages such as CSS, HTML, jQuery, PHP, et cetera</li><li>Implementing my new skills to the projects</li><li>Maintaining the existing website</li><li>Improving company website due to the increasing traffic using updated technologie</li><li>Implementing query of database SQL on my work</li><li>Developing website according to the requirements</li></ul></div></div></div></div><div class="list-aboutme"><div class="container-desc-left"><div class="desc-aboutme desc-aboutme-right"><div class="font-16-semibold title-aboutme-right">Glints Academy - Final Project (Photo Galleries App)</div><div class="desc-univ"><div class="font-18-semibold">Back End Developer</div><ul class="list-activities"><li>Experienced on sequelize</li><li>Implementing file upload into sequelize</li><li>Handling privacy on collection</li><li>Experienced on image compress and how to download collection in zip</li><li>Experienced on using Amazon S3</li></ul></div></div></div><div class="star"><img src="'+Ws+'"></div><div class="container-desc-right"><div class="periode-aboutme periode-aboutme-right"><div class="date-periode-aboutme">Apr 2021 - Jun 2021</div></div></div></div><div class="list-aboutme"><div class="container-desc-left"><div class="periode-aboutme periode-aboutme-left"><div class="date-periode-aboutme">Apr 2021 - Apr 2021</div></div></div><div class="star"><img src="'+Hs+'"></div><div class="container-desc-right"><div class="desc-aboutme desc-aboutme-right"><div class="font-16-semibold title-aboutme-right">Glints Academy - Mini Project (Movie Review App)</div><div class="desc-univ"><div class="font-18-semibold">Back End Developer</div><ul class="list-activities"><li>Experienced on Mongoose</li><li>Handling uploading image</li></ul></div></div></div></div></div></div>',1),Ls=[Is];function Ts(s,i,e,l,c,d){return(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",null,Ls,512)),[[a.F8,e.show]])}var Bs={props:["show"]};const Zs=(0,O.Z)(Bs,[["render",Ts]]);var Js=Zs,Qs=e.p+"img/path-languages.afffe168.svg",Gs=e.p+"img/star-2.e0a6665b.svg";const Vs=(0,t.uE)('<div class="container-2"><div class="star-path"><img src="'+Qs+'"></div><div class="display-aboutme"><div class="list-aboutme"><div class="container-desc-left"><div class="desc-aboutme desc-aboutme-left"><div class="font-16-semibold">Glints Academy X Binar Academy</div><div class="font-18-semibold">Back End Developer</div></div></div><div class="star"><img src="'+Ws+'"></div><div class="container-desc-right"><div class="periode-aboutme periode-aboutme-right"><div class="date-periode-aboutme">Mar 2021 - Jun 2021</div></div></div></div><div class="list-aboutme"><div class="container-desc-left"><div class="periode-aboutme periode-aboutme-left"><div class="date-periode-aboutme">Jul 2016 - Jul 2020</div></div></div><div class="star"><img src="'+Gs+'"></div><div class="container-desc-right"><div class="desc-aboutme desc-aboutme-right"><div class="font-16-semibold title-aboutme-right">Udayana University</div><div class="desc-univ"><div class="font-18-semibold">Mechanical Engineering</div><div class="gpa">GPA: 3.65</div><ul class="list-activities"><li>Tresurer at Student Association of Mechanical Engineering</li><li>Photography Staff at Udayana Focus</li></ul></div></div></div></div></div></div>',1),qs=[Vs];function zs(s,i,e,l,c,d){return(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",null,qs,512)),[[a.F8,e.show]])}var Ns={props:["show"]};const Rs=(0,O.Z)(Ns,[["render",zs]]);var Xs=Rs;const Ys=(0,t.uE)('<div class="container-2"><div class="star-path"><img src="'+Qs+'"></div><div class="display-aboutme"><div class="list-aboutme"><div class="container-desc-left"><div class="periode-aboutme periode-aboutme-left"><div class="date-periode-aboutme">2014</div></div></div><div class="star"><img src="'+Hs+'"></div><div class="container-desc-right"><div class="desc-aboutme desc-aboutme-right"><div class="font-18-semibold">3rd place winner for women’s chess competition</div><div class="font-16-medium">Organized by Department of Education of Bojonegoro Regency</div></div></div></div><div class="list-aboutme"><div class="container-desc-left"><div class="desc-aboutme desc-aboutme-left"><div class="font-18-semibold title-aboutme-left">3rd place winner for women’s chess competition </div><div class="font-16-medium major-aboutme-left">Organized by Department of Education of Bojonegoro Regency</div></div></div><div class="star"><img src="'+Ws+'"></div><div class="container-desc-right"><div class="periode-aboutme periode-aboutme-right"><div class="date-periode-aboutme">2013</div></div></div></div></div></div>',1),Ks=[Ys];function $s(s,i,e,l,c,d){return(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",null,Ks,512)),[[a.F8,e.show]])}var si={props:["show"]};const ii=(0,O.Z)(si,[["render",$s]]);var ei=ii,ai=e.p+"img/list-star.d5073949.svg";const ti=(0,t.uE)('<div class="container-2"><div class="expertise"><div class="sub-list-expertise"><div class="list-expertise"><img src="'+ai+'"><div class="font-16-semibold">Javascript - Node.js</div></div><div class="list-expertise"><img src="'+ai+'"><div class="font-16-semibold">PHP - Code Igniter</div></div><div class="list-expertise"><img src="'+ai+'"><div class="font-16-semibold">Golang - Echo</div></div><div class="list-expertise"><img src="'+ai+'"><div class="font-16-semibold">SQL - MySQL</div></div></div><div class="sub-list-expertise"><div class="list-expertise"><img src="'+ai+'"><div class="font-16-semibold">NoSQL - Mongoose</div></div><div class="list-expertise"><img src="'+ai+'"><div class="font-16-semibold">AWS</div></div><div class="list-expertise"><img src="'+ai+'"><div class="font-16-semibold">HTML</div></div><div class="list-expertise"><img src="'+ai+'"><div class="font-16-semibold">CSS</div></div></div><div class="sub-list-expertise"><div class="list-expertise"><img src="'+ai+'"><div class="font-16-semibold">Vue.js</div></div><div class="list-expertise"><img src="'+ai+'"><div class="font-16-semibold">Figma</div></div><div class="list-expertise"><img src="'+ai+'"><div class="font-16-semibold">Adobe Photoshop</div></div></div></div></div>',1),li=[ti];function ci(s,i,e,l,c,d){return(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",null,li,512)),[[a.F8,e.show]])}var di={props:["show"]};const oi=(0,O.Z)(di,[["render",ci]]);var ni=oi;const ri={class:"container-2"},vi=(0,t.uE)('<div class="star-path"><img src="'+Qs+'"></div><div class="display-aboutme"><div class="list-aboutme"><div class="container-desc-left"></div><div class="star"><img src="'+Gs+'"></div><div class="container-desc-right"><div class="desc-aboutme desc-aboutme-right"><p class="font-16-semibold">English - Upper Intermediate</p></div></div></div><div class="list-aboutme"><div class="container-desc-left"><div class="desc-aboutme desc-aboutme-right"><p class="font-16-semibold">Bahasa Indonesia - Native</p></div></div><div class="star"><img src="'+Gs+'"></div><div class="container-desc-right"></div></div></div>',2),ui=[vi];function mi(s,i,e,l,c,d){return(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",ri,ui,512)),[[a.F8,e.show]])}var pi={props:["show"]};const gi=(0,O.Z)(pi,[["render",mi]]);var bi=gi;const fi={class:"container-2"},hi=(0,t.uE)('<div class="star-path"><img src="'+Qs+'"></div><div class="display-aboutme"><div class="list-aboutme"><div class="container-desc-left"><div class="desc-aboutme desc-aboutme-left"><div class="font-18-semibold">Udayana peduli</div><div class="font-16-medium">Dedicated myself in fundraising and mentoring victims of Mount Agung eruption</div></div></div><div class="star"><img src="'+Ws+'"></div><div class="container-desc-right"><div class="periode-aboutme periode-aboutme-right"><div class="date-periode-aboutme">Sept 2017 - Nov 2017</div></div></div></div><div class="list-aboutme list-aboutme-right"><div class="container-desc-left"><div class="periode-aboutme periode-aboutme-left"><div class="date-periode-aboutme">Sep 2017 - Jun 2018</div></div></div><div class="star"><img src="'+Gs+'"></div><div class="container-desc-right"><div class="desc-aboutme desc-aboutme-right"><div class="font-18-semibold">Udayana Mengajar</div><div class="font-16-medium">Dedicated myself to improving the quality of educating in rural villages </div></div></div></div></div>',2),_i=[hi];function wi(s,i,e,l,c,d){return(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",fi,_i,512)),[[a.F8,e.show]])}var yi={props:["show"]};const xi=(0,O.Z)(yi,[["render",wi]]);var ji=xi;const Ei={class:"container about-me"},ki=(0,t._)("img",{width:"356",src:N},null,-1),Ai={class:"profile-about-me"},Si=(0,t._)("div",{class:"name-job"},[(0,t._)("p",{class:"name-about-me"},"ARUM AMALIA"),(0,t._)("p",{class:"job-about-me"},"Front End Developer")],-1),Mi={class:"location"},Ci={class:"logo-location"},Ui=(0,t._)("p",{class:"font-location"},"Jakarta, Indonesia",-1),Di=(0,t._)("div",null,[(0,t._)("button",{class:"button","data-bs-toggle":"modal","data-bs-target":"#myModal"},"Contact Me")],-1),Pi={class:"planets"},Fi=(0,t._)("div",{class:"sun"},[(0,t._)("img",{class:"rotate-sun-bright",src:As}),(0,t._)("img",{class:"sun-flex rotate-sun-flex",src:Ss})],-1),Oi=(0,t.uE)('<div class="tag-planet"><p class="font-planet">Experience</p><div class="arrow-tag"><div class="bullet-tag"></div><div class="line-tag"></div></div></div>',1),Hi=(0,t._)("img",{class:"experience-planet-main",src:Ms},null,-1),Wi=[Hi],Ii=(0,t.uE)('<div class="tag-planet"><p class="font-planet">Education</p><div class="arrow-tag"><div class="bullet-tag"></div><div class="line-tag"></div></div></div>',1),Li=(0,t._)("img",{class:"education-planet-main",src:Cs},null,-1),Ti=[Li],Bi=(0,t.uE)('<div class="tag-planet"><p class="font-planet">Expertise</p><div class="arrow-tag"><div class="bullet-tag"></div><div class="line-tag"></div></div></div>',1),Zi=(0,t._)("img",{class:"expertise-planet-main",src:Us},null,-1),Ji=[Zi],Qi=(0,t.uE)('<div class="tag-planet"><p class="font-planet">Languages</p><div class="arrow-tag"><div class="bullet-tag"></div><div class="line-tag"></div></div></div>',1),Gi=(0,t._)("img",{class:"languages-planet-main",src:Ds},null,-1),Vi=[Gi],qi=(0,t.uE)('<div class="tag-planet"><p class="font-planet">Achievements</p><div class="arrow-tag"><div class="bullet-tag"></div><div class="line-tag"></div></div></div>',1),zi=(0,t._)("img",{class:"achievements-planet-main",src:Ps},null,-1),Ni=[zi],Ri=(0,t.uE)('<div class="tag-planet"><p class="font-planet">Volunteer</p><div class="arrow-tag"><div class="bullet-tag"></div><div class="line-tag"></div></div></div>',1),Xi=(0,t._)("img",{class:"volunteer-planet-main",src:Fs},null,-1),Yi=[Xi],Ki={data(){return{active:""}},methods:{setActive(s){s===this.active?this.active="":this.active=s}}};var $i=Object.assign(Ki,{__name:"AboutMe",setup(s){return(s,i)=>{const e=(0,t.up)("lord-icon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",Ei,[ki,(0,t._)("div",Ai,[Si,(0,t._)("div",Mi,[(0,t._)("div",Ci,[(0,t.Wm)(e,{src:"https://cdn.lordicon.com/oaflahpk.json",trigger:"loop",delay:"500",colors:"primary:#AC0F0F",state:"hover-jump",style:{width:"250px",height:"250px"}})]),Ui]),Di])]),(0,t._)("div",Pi,[Fi,(0,t._)("div",{class:(0,ks.C_)(["experience-planet sub-planet shake-vertical-up",{active:"experience"===s.active}])},[Oi,(0,t._)("button",{class:"button-image",onClick:i[0]||(i[0]=i=>s.setActive("experience"))},Wi)],2),(0,t._)("div",{class:(0,ks.C_)(["education-planet sub-planet shake-vertical-down",{active:"education"===s.active}])},[Ii,(0,t._)("button",{class:"button-image",onClick:i[1]||(i[1]=i=>s.setActive("education"))},Ti)],2),(0,t._)("div",{class:(0,ks.C_)(["expertise-planet sub-planet shake-vertical-up",{active:"expertise"===s.active}])},[Bi,(0,t._)("button",{class:"button-image",onClick:i[2]||(i[2]=i=>s.setActive("expertise"))},Ji)],2),(0,t._)("div",{class:(0,ks.C_)(["languages-planet sub-planet shake-vertical-down",{active:"languages"===s.active}])},[Qi,(0,t._)("button",{class:"button-image",onClick:i[3]||(i[3]=i=>s.setActive("languages"))},Vi)],2),(0,t._)("div",{class:(0,ks.C_)(["achievements-planet sub-planet shake-vertical-up",{active:"achievements"===s.active}])},[qi,(0,t._)("button",{class:"button-image",onClick:i[4]||(i[4]=i=>s.setActive("achievements"))},Ni)],2),(0,t._)("div",{class:(0,ks.C_)(["volunteer-planet sub-planet shake-vertical-down",{active:"volunteer"===s.active}])},[Ri,(0,t._)("button",{class:"button-image",onClick:i[5]||(i[5]=i=>s.setActive("volunteer"))},Yi)],2)]),(0,t._)("div",null,[(0,t.Wm)(Js,{show:"experience"===s.active},null,8,["show"]),(0,t.Wm)(ei,{show:"achievements"===s.active},null,8,["show"]),(0,t.Wm)(Xs,{show:"education"===s.active},null,8,["show"]),(0,t.Wm)(ni,{show:"expertise"===s.active},null,8,["show"]),(0,t.Wm)(bi,{show:"languages"===s.active},null,8,["show"]),(0,t.Wm)(ji,{show:"volunteer"===s.active},null,8,["show"])])],64)}}});const se=$i;var ie=se;const ee=[{name:"Home",path:"/",component:Es},{name:"AboutMe",path:"/aboutme",component:ie}],ae=(0,I.p7)({history:(0,I.PO)(),routes:ee});var te=ae,le=(e(7154),e(1190));const ce=(0,a.ri)(q);ce.use(le.ZP),ce.use(te),ce.mount("#app")},9432:function(s,i,e){s.exports=e.p+"img/content1.41be87cc.svg"},3356:function(s,i,e){s.exports=e.p+"img/content2.0dbd70cb.svg"},1795:function(s,i,e){s.exports=e.p+"img/content3.423b3381.svg"}},i={};function e(a){var t=i[a];if(void 0!==t)return t.exports;var l=i[a]={exports:{}};return s[a].call(l.exports,l,l.exports,e),l.exports}e.m=s,function(){var s=[];e.O=function(i,a,t,l){if(!a){var c=1/0;for(r=0;r<s.length;r++){a=s[r][0],t=s[r][1],l=s[r][2];for(var d=!0,o=0;o<a.length;o++)(!1&l||c>=l)&&Object.keys(e.O).every((function(s){return e.O[s](a[o])}))?a.splice(o--,1):(d=!1,l<c&&(c=l));if(d){s.splice(r--,1);var n=t();void 0!==n&&(i=n)}}return i}l=l||0;for(var r=s.length;r>0&&s[r-1][2]>l;r--)s[r]=s[r-1];s[r]=[a,t,l]}}(),function(){e.n=function(s){var i=s&&s.__esModule?function(){return s["default"]}:function(){return s};return e.d(i,{a:i}),i}}(),function(){e.d=function(s,i){for(var a in i)e.o(i,a)&&!e.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:i[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"===typeof window)return window}}()}(),function(){e.o=function(s,i){return Object.prototype.hasOwnProperty.call(s,i)}}(),function(){e.r=function(s){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}}(),function(){e.p="/personal-site/"}(),function(){var s={143:0};e.O.j=function(i){return 0===s[i]};var i=function(i,a){var t,l,c=a[0],d=a[1],o=a[2],n=0;if(c.some((function(i){return 0!==s[i]}))){for(t in d)e.o(d,t)&&(e.m[t]=d[t]);if(o)var r=o(e)}for(i&&i(a);n<c.length;n++)l=c[n],e.o(s,l)&&s[l]&&s[l][0](),s[l]=0;return e.O(r)},a=self["webpackChunkpersonal_site"]=self["webpackChunkpersonal_site"]||[];a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(5644)}));a=e.O(a)})();
//# sourceMappingURL=app.c48921ed.js.map