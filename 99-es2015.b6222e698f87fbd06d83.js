(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{ozLD:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var i=e("pMnS"),o=e("MKJQ"),a=e("sZkV"),s=e("s7LF"),r=e("SVse"),c=e("TESy"),d=e("H+bZ"),g=e("EVdn"),b=e("fL5g");class p{constructor(l,n,e,t){this.router=l,this.apiservice=n,this.socailAuthService=e,this.http=t,this.emailaddress="",this.submit=!1,this.validemail=!0,this.validateemail=!0,this.socialdata=[],this.social_res=[]}ionViewDidEnter(){this.emailaddress="",this.submit=!1,this.validemail=!0}send(){this.submit=!0,""!=this.emailaddress&&(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.emailaddress)?(this.valid=!1,this.validemail=!0):(this.validemail=!1,this.valid=!0)),""!=this.emailaddress&&this.validemail&&this.forgotpassword()}goback(){this.router.navigate(["/login"])}onChangeemail(){""!==this.emailaddress&&(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.emailaddress)?(this.valid=!1,this.validateemail=!0):(this.validateemail=!1,this.valid=!0))}forgotpassword(){let l=this;var n=new c.d({UserPoolId:this.apiservice.UserPoolId,ClientId:this.apiservice.ClientId});new c.b({Username:this.emailaddress,Pool:n}).forgotPassword({onSuccess:function(n){localStorage.setItem("email",l.emailaddress),l.router.navigate(["/changepassword"])},onFailure:function(l){alert(l)}})}login(){this.router.navigate(["/login"])}signup(){this.router.navigate(["/signup"])}verification(){this.router.navigate(["/verification"])}ngOnInit(){g("#forgotemail").val("")}signInWithGoogle(){let l=this;l.socailAuthService.signIn(b.d.PROVIDER_ID).then(n=>{l.socailAuthService.signOut(),l.socialdata=n,localStorage.setItem("socialuser",JSON.stringify(l.socialdata)),l.verifyuser(l.socialdata.email)})}signInWithFB(){let l=this;l.socailAuthService.signIn(b.c.PROVIDER_ID).then(n=>{l.socailAuthService.signOut(),l.socialdata=n,localStorage.setItem("socialuser",JSON.stringify(l.socialdata)),l.verifyfb(l.socialdata.email)})}verifyuser(l){this.apiservice.google_login("userlogin?user_email="+l).subscribe(l=>{this.social_res=l;let n=JSON.parse(this.social_res.body);if(n!=[]&&""!=n){let l=n[0];if(""!=l.usr_id&&null!=l.user_id){var e=l.user_type.toLowerCase();"google"==e?(this.apiservice.loginuser_details(l.user_email,l.zipcode),localStorage.setItem("userlogged","true"),this.router.navigate(["/questions"])):"facebook"==e?alert("Email ID already exists,Try to login with Facebook"):(this.router.navigate(["/login"]),alert("Email ID already exists,Try to login."))}else this.router.navigate(["/socialsignup"])}else this.router.navigate(["/socialsignup"])},l=>{})}verifyfb(l){this.apiservice.facebook_login("userlogin?user_email="+l).subscribe(l=>{this.social_res=l;let n=JSON.parse(this.social_res.body);if(n!=[]&&""!=n){let l=n[0];if(""!=l.usr_id&&null!=l.user_id){var e=l.user_type.toLowerCase();"facebook"==e?(this.apiservice.loginuser_details(l.user_email,l.zipcode),localStorage.setItem("userlogged","true"),this.router.navigate(["/questions"])):"google"==e?alert("Email ID already exists,Try to login with Google"):(this.router.navigate(["/login"]),alert("Email ID already exists,Try to login."))}else this.router.navigate(["/socialsignup"])}else this.router.navigate(["/socialsignup"])},l=>{})}}var m=e("iInd"),h=e("IheW"),f=t.nb({encapsulation:0,styles:[[".middle[_ngcontent-%COMP%]{padding-top:20%}.sec1[_ngcontent-%COMP%]{background-color:#2c314d;padding:2.5%}.sec2[_ngcontent-%COMP%]{background-color:#fff}.log_sec[_ngcontent-%COMP%]{padding:5%}.proj_name[_ngcontent-%COMP%]{color:#fff;margin-top:3%}.login_text[_ngcontent-%COMP%]{color:#fff;text-align:center;margin-top:14%;padding-bottom:0}.fb[_ngcontent-%COMP%]{background-color:#3b5998;color:#fff}.twitter[_ngcontent-%COMP%]{background-color:#55acee;color:#fff}.google[_ngcontent-%COMP%]{background-color:#dd4b39;color:#fff}.social_btn[_ngcontent-%COMP%]{width:100%;background-color:transparent;padding-bottom:2%;text-align:center;cursor:pointer}.other_icons[_ngcontent-%COMP%]{margin-top:3%;margin-left:-3%;display:none}.other_icons_space[_ngcontent-%COMP%]{margin-top:5%;margin-bottom:5%}.title[_ngcontent-%COMP%]{padding:6% 9% 1%;color:#2d385e;font-weight:700}.sub_title[_ngcontent-%COMP%]{text-align:left;padding-left:9%}.input[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #ccc;margin-top:-8%}.input_password[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #ccc;margin-top:-11%}.ion_item[_ngcontent-%COMP%]{margin-bottom:-5%}.remember[_ngcontent-%COMP%]{margin-top:25%;width:25px}.remember_text[_ngcontent-%COMP%]{color:#7e7c7c}.forgot[_ngcontent-%COMP%]{margin-top:9%}a[_ngcontent-%COMP%]:hover{text-decoration:none}.login[_ngcontent-%COMP%]{box-shadow:0 3px 6px #00000029;border-radius:7px;width:100%;padding-top:2%;padding-bottom:2%;margin-top:3%;margin-bottom:5%}.click_btn[_ngcontent-%COMP%]{color:#4f77ff;cursor:pointer;font-size:1rem}.click_btn[_ngcontent-%COMP%]:hover{color:#4f77ff}.card_bg[_ngcontent-%COMP%]{box-shadow:none}.sc-ion-input-md-h[_ngcontent-%COMP%]{--padding-top:0px;--padding-end:0;--padding-bottom:0px}.form_fileds[_ngcontent-%COMP%]{border-left:none!important;border-right:none!important;border-top:none!important;border-radius:0!important}.form_fileds[_ngcontent-%COMP%]:active, .form_fileds[_ngcontent-%COMP%]:hover, [_ngcontent-%COMP%]:focus{border-left:none!important;border-right:none!important;border-top:none!important}.ion_list[_ngcontent-%COMP%]{margin-top:-5%}.social_bot_space[_ngcontent-%COMP%]{margin-bottom:5%}@media screen and (min-width:0px) and (max-width:575px){.middle[_ngcontent-%COMP%]{padding-top:0}}@media screen and (min-width:576px) and (max-width:1000px){.middle[_ngcontent-%COMP%]{padding-top:0}.ion_list[_ngcontent-%COMP%]{margin-top:-5%;margin-left:-10%}}.img[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;margin-top:20%}.heading[_ngcontent-%COMP%], .sub-heading[_ngcontent-%COMP%]{-webkit-text-fill-color:#fff;text-align:center}.errtext[_ngcontent-%COMP%]{color:red}"]],data:{}});function v(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","errtext"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["*Please enter Email address"]))],null,null)}function _(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","errtext"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["*Please enter valid Email address"]))],null,null)}function C(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,71,"ion-content",[["style","--background: url(./assets/images/bg.png) 0 0/100% 100% no-repeat !important;"]],null,null,null,o.w,o.g)),t.ob(1,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,69,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,68,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,0,"div",[["class","col-sm-2"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,65,"div",[["class","col-sm-8"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,64,"div",[["class","row middle"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,15,"div",[["class","col-md-6 sec1"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,6,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,0,"img",[["class","img"],["src","../../assets/images/logo.png"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,1,"h3",[["class","heading"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["WHERE IT SPREADS "])),(l()(),t.pb(14,0,null,null,1,"h6",[["class","sub-heading"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Together we can be the first line of defense "])),(l()(),t.pb(16,0,null,null,1,"p",[["class","login_text"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Login using social media to get quick access "])),(l()(),t.pb(18,0,null,null,4,"div",[["class","social_bot_space"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,1,"div",[["class","social_btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.signInWithFB()&&t),t}),null,null)),(l()(),t.pb(20,0,null,null,0,"img",[["src","../../assets/images/fb.png"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,1,"div",[["class","social_btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.signInWithGoogle()&&t),t}),null,null)),(l()(),t.pb(22,0,null,null,0,"img",[["src","../../assets/images/google.png"]],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,47,"div",[["class","col-md-6 sec2"]],null,null,null,null,null)),(l()(),t.pb(24,0,null,null,46,"ion-card",[["class","card_bg"]],null,null,null,o.v,o.d)),t.ob(25,49152,null,0,a.j,[t.h,t.k,t.x],null,null),(l()(),t.pb(26,0,null,0,3,"ion-card-title",[],null,null,null,o.u,o.f)),t.ob(27,49152,null,0,a.n,[t.h,t.k,t.x],null,null),(l()(),t.pb(28,0,null,0,1,"h3",[["class","title"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Recover password "])),(l()(),t.pb(30,0,null,0,1,"h6",[["class","sub_title"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Fill in your Email address below and we will send you an Email with further instructions. "])),(l()(),t.pb(32,0,null,0,38,"ion-card-content",[["text-center",""]],null,null,null,o.t,o.e)),t.ob(33,49152,null,0,a.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(34,0,null,0,36,"ion-list",[["class","ion_list"],["lines","none"],["text-center",""]],null,null,null,o.C,o.m)),t.ob(35,49152,null,0,a.L,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(36,0,null,0,34,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var u=!0;return"submit"===n&&(u=!1!==t.Ab(l,38).onSubmit(e)&&u),"reset"===n&&(u=!1!==t.Ab(l,38).onReset()&&u),u}),null,null)),t.ob(37,16384,null,0,s.q,[],null,null),t.ob(38,4210688,[["form",4]],0,s.i,[[8,null],[8,null]],null,null),t.Bb(2048,null,s.b,null,[s.i]),t.ob(40,16384,null,0,s.h,[[4,s.b]],null,null),(l()(),t.pb(41,0,null,null,4,"ion-item",[["lines","none"]],null,null,null,o.A,o.k)),t.ob(42,49152,null,0,a.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(43,0,null,0,2,"ion-label",[],null,null,null,o.B,o.l)),t.ob(44,49152,null,0,a.K,[t.h,t.k,t.x],null,null),(l()(),t.Eb(-1,0,["Email Address"])),(l()(),t.pb(46,0,null,null,10,"ion-item",[["lines","none"]],null,null,null,o.A,o.k)),t.ob(47,49152,null,0,a.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(48,0,null,0,8,"ion-input",[["class","input"],["id","forgotemail"],["name","emailaddress"],["placeholder","Enter Your Email here"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==t.Ab(l,51)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ab(l,51)._handleInputEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(i.emailaddress=e)&&u),"ionChange"===n&&(u=!1!==i.onChangeemail()&&u),u}),o.z,o.j)),t.ob(49,16384,null,0,s.l,[],{required:[0,"required"]},null),t.Bb(1024,null,s.d,(function(l){return[l]}),[s.l]),t.ob(51,16384,null,0,a.Eb,[t.k],null,null),t.Bb(1024,null,s.e,(function(l){return[l]}),[a.Eb]),t.ob(53,671744,null,0,s.j,[[2,s.b],[6,s.d],[8,null],[6,s.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Bb(2048,null,s.f,null,[s.j]),t.ob(55,16384,null,0,s.g,[[4,s.f]],null,null),t.ob(56,49152,null,0,a.D,[t.h,t.k,t.x],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),t.eb(16777216,null,null,1,null,v)),t.ob(58,16384,null,0,r.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,_)),t.ob(60,16384,null,0,r.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(61,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(62,0,null,null,8,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t.pb(63,0,null,null,1,"button",[["class","btn-primary login"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.send()&&t),t}),null,null)),(l()(),t.Eb(-1,null,[" Submit "])),(l()(),t.pb(65,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.pb(66,0,null,null,1,"a",[["class","click_btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.login()&&t),t}),null,null)),(l()(),t.Eb(-1,null,["Already have an account? "])),(l()(),t.pb(68,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.pb(69,0,null,null,1,"a",[["class","click_btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.signup()&&t),t}),null,null)),(l()(),t.Eb(-1,null,["Don't have an account? "])),(l()(),t.pb(71,0,null,null,0,"div",[["class","col-sm-2"]],null,null,null,null,null))],(function(l,n){var e=n.component;l(n,35,0,"none"),l(n,42,0,"none"),l(n,47,0,"none"),l(n,49,0,""),l(n,53,0,"emailaddress",e.emailaddress),l(n,56,0,"emailaddress","Enter Your Email here","","email"),l(n,58,0,""==e.emailaddress&&e.submit),l(n,60,0,e.valid&&""!=e.emailaddress)}),(function(l,n){l(n,36,0,t.Ab(n,40).ngClassUntouched,t.Ab(n,40).ngClassTouched,t.Ab(n,40).ngClassPristine,t.Ab(n,40).ngClassDirty,t.Ab(n,40).ngClassValid,t.Ab(n,40).ngClassInvalid,t.Ab(n,40).ngClassPending),l(n,48,0,t.Ab(n,49).required?"":null,t.Ab(n,55).ngClassUntouched,t.Ab(n,55).ngClassTouched,t.Ab(n,55).ngClassPristine,t.Ab(n,55).ngClassDirty,t.Ab(n,55).ngClassValid,t.Ab(n,55).ngClassInvalid,t.Ab(n,55).ngClassPending)}))}function w(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-forgotpassword",[],null,null,null,C,f)),t.ob(1,114688,null,0,p,[m.m,d.a,b.a,h.c],null,null)],(function(l,n){l(n,1,0)}),null)}var P=t.lb("app-forgotpassword",p,w,{},{},[]);class y{}e.d(n,"ForgotpasswordPageModuleNgFactory",(function(){return O}));var O=t.mb(u,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[i.a,P]],[3,t.j],t.v]),t.yb(4608,r.l,r.k,[t.s,[2,r.t]]),t.yb(4608,s.o,s.o,[]),t.yb(4608,a.a,a.a,[t.x,t.g]),t.yb(4608,a.Ab,a.Ab,[a.a,t.j,t.p]),t.yb(4608,a.Db,a.Db,[a.a,t.j,t.p]),t.yb(1073742336,r.b,r.b,[]),t.yb(1073742336,s.n,s.n,[]),t.yb(1073742336,s.c,s.c,[]),t.yb(1073742336,a.yb,a.yb,[]),t.yb(1073742336,m.n,m.n,[[2,m.s],[2,m.m]]),t.yb(1073742336,y,y,[]),t.yb(1073742336,u,u,[]),t.yb(1024,m.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);