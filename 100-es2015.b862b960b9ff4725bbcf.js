(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{"f+ep":function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class i{}var s=e("pMnS"),o=e("MKJQ"),u=e("sZkV"),r=e("SVse"),a=e("s7LF");class d{constructor(l,n){this.el=l,this.renderer=n,this.offset=10}onMouseEnter(){this.tooltip||this.show()}onMouseLeave(){this.tooltip&&this.hide()}show(){this.create(),this.setPosition(),this.renderer.addClass(this.tooltip,"ng-tooltip-show")}hide(){this.renderer.removeClass(this.tooltip,"ng-tooltip-show"),window.setTimeout(()=>{this.renderer.removeChild(document.body,this.tooltip),this.tooltip=null})}create(){this.tooltip=this.renderer.createElement("span"),this.renderer.appendChild(this.tooltip,this.renderer.createText(this.tooltipTitle)),this.renderer.appendChild(document.body,this.tooltip),this.renderer.addClass(this.tooltip,"ng-tooltip"),this.renderer.addClass(this.tooltip,`ng-tooltip-${this.placement}`),this.renderer.setStyle(this.tooltip,"-webkit-transition",`opacity ${this.delay}ms`),this.renderer.setStyle(this.tooltip,"-moz-transition",`opacity ${this.delay}ms`),this.renderer.setStyle(this.tooltip,"-o-transition",`opacity ${this.delay}ms`),this.renderer.setStyle(this.tooltip,"transition",`opacity ${this.delay}ms`)}setPosition(){const l=this.el.nativeElement.getBoundingClientRect(),n=this.tooltip.getBoundingClientRect(),e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let t,i;"top"===this.placement&&(t=l.top-n.height-this.offset,i=l.left+(l.width-n.width)/2),"bottom"===this.placement&&(t=l.bottom+this.offset,i=l.left+(l.width-n.width)/2),"left"===this.placement&&(t=l.top+(l.height-n.height)/2,i=l.left-n.width-this.offset),"right"===this.placement&&(t=l.top+(l.height-n.height)/2,i=l.right+this.offset),this.renderer.setStyle(this.tooltip,"top",`${t+e}px`),this.renderer.setStyle(this.tooltip,"left",`${i}px`)}}var c=e("TESy"),g=e("H+bZ"),p=e("fL5g"),m=e("EVdn");class b{constructor(l,n,e,t){this.router=l,this.apiservices=n,this.socailAuthService=e,this.http=t,this.emailaddress="",this.passwordvalid=!1,this.user_password="",this.type="password",this.submit=!1,this.validateemail=!0,this.validatepassword=!0,this.rememberme=!1,this.socialdata=[],this.social_res=[],this.incrt="",this.vermsg="",this.incrtmsg=!1,this.veruser=!1}ionViewDidEnter(){this.submit=!1,this.incrtmsg=!1,this.emailaddress="",this.user_password="",localStorage.removeItem("socialuser"),"true"==localStorage.getItem("rememberme")?(this.rememberme=!0,this.emailaddress=localStorage.getItem("user_email"),this.user_password=localStorage.getItem("user_password")):this.rememberme=!1}password_toggle(){var l=this;"text"==this.type?this.type="password":(this.type="text",setTimeout((function(){l.type="password"}),1e3))}onSubmit(l){}signup(){this.router.navigate(["/signup"])}forgot_password(){this.router.navigate(["/forgotpassword"])}verification(){this.router.navigate(["/verification"])}ngOnInit(){m("#remember_text").prop("checked")}onChangeemail(){""!==this.emailaddress&&(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.emailaddress)?(this.valid=!1,this.validateemail=!0):(this.validateemail=!1,this.valid=!0))}onChangepassword(){""!=this.user_password&&(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this.user_password)?(this.passwordvalid=!1,this.validatepassword=!0):(this.validatepassword=!1,this.passwordvalid=!0))}signin_user(){this.submit=!0,""!==this.emailaddress&&(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.emailaddress)?(this.valid=!1,this.validateemail=!0):(this.validateemail=!1,this.valid=!0)),""!=this.user_password&&(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this.user_password)?(this.passwordvalid=!1,this.validatepassword=!0):(this.validatepassword=!1,this.passwordvalid=!0)),""!=this.emailaddress&&""!=this.user_password&&""!=this.emailaddress&&this.validateemail&&this.validatepassword&&this.sign_in()}sign_in(){this.incrtmsg=!1,this.veruser=!1;let l=this;var n=new c.a({Username:l.emailaddress,Password:l.user_password}),e=new c.d({UserPoolId:this.apiservices.UserPoolId,ClientId:this.apiservices.ClientId});new c.b({Username:l.emailaddress,Pool:e}).authenticateUser(n,{onSuccess:function(n){var e=n.getAccessToken().getJwtToken();console.log(e),this.login_user=n.getIdToken().payload,l.apiservices.loginuser_details(this.login_user.email,this.login_user["custom:zippcode"]),localStorage.setItem("rememberme",l.rememberme),localStorage.setItem("user_email",l.emailaddress),localStorage.setItem("login_id",l.emailaddress),localStorage.setItem("user_password",l.user_password),localStorage.setItem("userlogged","true"),l.router.navigate(["/questions"])},onFailure:function(n){"User is not confirmed."==n.message?(l.apiservices.emailaddress=l.emailaddress,l.veruser=!0,l.incrtmsg=!1,setTimeout((function(){l.router.navigate(["/verification"])}),5e3),l.vermsg="Verification not confirmed.Please check your email."):(l.incrtmsg=!0,l.veruser=!1,l.incrt="*Incorrect username or password.")}})}signInWithGoogle(){let l=this;l.socailAuthService.signIn(p.d.PROVIDER_ID).then(n=>{l.socailAuthService.signOut(),l.socialdata=n,localStorage.setItem("socialuser",JSON.stringify(l.socialdata)),l.verifyuser(l.socialdata.email)})}signInWithFB(){let l=this;l.socailAuthService.signIn(p.c.PROVIDER_ID).then(n=>{l.socailAuthService.signOut(),l.socialdata=n,localStorage.setItem("socialuser",JSON.stringify(l.socialdata)),l.verifyfb(l.socialdata.email)})}verifyuser(l){this.apiservices.google_login("userlogin?user_email="+l).subscribe(l=>{this.social_res=l;let n=JSON.parse(this.social_res.body);if(n!=[]&&""!=n){let l=n[0];if(console.log("res.........",l),""!=l.usr_id&&null!=l.user_id){var e=l.user_type.toLowerCase();"google"==e?(this.apiservices.loginuser_details(l.user_email,l.zipcode),localStorage.setItem("userlogged","true"),this.router.navigate(["/questions"])):"facebook"==e?alert("Email ID already exists,Try to login with Facebook"):(this.router.navigate(["/login"]),alert("Email ID already exists,Try to login."))}else this.router.navigate(["/socialsignup"])}else this.router.navigate(["/socialsignup"])},l=>{})}verifyfb(l){this.apiservices.facebook_login("userlogin?user_email="+l).subscribe(l=>{this.social_res=l;let n=JSON.parse(this.social_res.body);if(n!=[]&&""!=n){let l=n[0];if(""!=l.usr_id&&null!=l.user_id){var e=l.user_type.toLowerCase();"facebook"==e?(this.apiservices.loginuser_details(l.user_email,l.zipcode),localStorage.setItem("userlogged","true"),this.router.navigate(["/questions"])):"google"==e?alert("Email ID already exists,Try to login with Google"):(this.router.navigate(["/login"]),alert("Email ID already exists,Try to login."))}else this.router.navigate(["/socialsignup"])}else this.router.navigate(["/socialsignup"])},l=>{})}}var h=e("iInd"),_=e("IheW"),f=t.nb({encapsulation:0,styles:[[".log_sec[_ngcontent-%COMP%]{padding:5%}.proj_name[_ngcontent-%COMP%]{color:#fff;margin-top:3%}.login_text[_ngcontent-%COMP%]{color:#fff;text-align:center;margin-top:12%;padding-bottom:4%}.social_btn[_ngcontent-%COMP%]{width:100%;background-color:transparent;padding-bottom:2%;text-align:center;cursor:pointer}.other_icons[_ngcontent-%COMP%]{margin-top:3%;margin-left:-3%}.other_icons_space[_ngcontent-%COMP%]{margin-top:5%;margin-bottom:5%}.title[_ngcontent-%COMP%]{padding:1% 9%;color:#2d385e;font-weight:700}.sub_title[_ngcontent-%COMP%]{text-align:center}.input[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #ccc;margin-top:-8%}.input_password[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #ccc;margin-top:-11%}.ion_item[_ngcontent-%COMP%]{margin-bottom:-5%}.remember[_ngcontent-%COMP%]{margin-top:25%;width:25px}.remember_text[_ngcontent-%COMP%]{color:#7e7c7c}.forgot[_ngcontent-%COMP%]{margin-top:9%}a[_ngcontent-%COMP%]:hover{text-decoration:none}.login[_ngcontent-%COMP%]{box-shadow:0 3px 6px #00000029;border-radius:7px;width:100%;padding-top:2%;padding-bottom:2%;margin-top:3%}.click_btn[_ngcontent-%COMP%]{color:#4f77ff;cursor:pointer}.click_btn[_ngcontent-%COMP%]:hover{color:#4f77ff}.card_bg[_ngcontent-%COMP%]{box-shadow:none}.sc-ion-input-md-h[_ngcontent-%COMP%]{--padding-top:0px;--padding-end:0;--padding-bottom:0px}.form_fileds[_ngcontent-%COMP%]{border-left:none!important;border-right:none!important;border-top:none!important;border-radius:0!important}.form_fileds[_ngcontent-%COMP%]:active, .form_fileds[_ngcontent-%COMP%]:hover, [_ngcontent-%COMP%]:focus{border-left:none!important;border-right:none!important;border-top:none!important}.tagline[_ngcontent-%COMP%]{text-align:center;color:#fff}.middle[_ngcontent-%COMP%]{padding-top:20%!important}.pass_eye[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;margin-top:-11%}.rememberme[_ngcontent-%COMP%]{margin-top:-7%}.incorrect_account[_ngcontent-%COMP%]{color:red;margin-left:60px}.ion_list[_ngcontent-%COMP%]{margin-top:-7%}.social_bot_space[_ngcontent-%COMP%]{margin-bottom:5%}@media screen and (min-width:0px) and (max-width:575px){.middle[_ngcontent-%COMP%]{padding-top:0!important}}@media screen and (min-width:300px) and (max-width:380px){.sub_title[_ngcontent-%COMP%]{text-align:left;margin-left:9%;margin-bottom:2%}.rememberme[_ngcontent-%COMP%]{margin-top:-15%}.title[_ngcontent-%COMP%]{padding:5% 9% 1%;color:#2d385e;font-weight:700}}@media screen and (min-width:381px) and (max-width:450px){.sub_title[_ngcontent-%COMP%]{text-align:left;margin-left:9%;margin-bottom:4%}.rememberme[_ngcontent-%COMP%]{margin-top:-16%}}@media screen and (min-width:451px) and (max-width:767px){.sub_title[_ngcontent-%COMP%]{text-align:left;margin-left:7%;margin-bottom:6%}.title[_ngcontent-%COMP%]{padding:5% 9% 1% 7%;color:#2d385e;font-weight:700}.input_password[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #ccc;margin-top:-7%}.rememberme[_ngcontent-%COMP%]{margin-top:-20%}.pass_eye[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;margin-top:-7%}}@media screen and (min-width:768px) and (max-width:991px){.title[_ngcontent-%COMP%]{padding:1% 0;color:#2d385e;font-weight:700}.sub_title[_ngcontent-%COMP%]{text-align:left}.incorrect_account[_ngcontent-%COMP%]{margin-left:0}.ion_list[_ngcontent-%COMP%]{margin-top:-13%;margin-left:-17%}.rememberme[_ngcontent-%COMP%]{margin-left:-3%}}.img[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;margin-top:6%}.heading[_ngcontent-%COMP%], .sub-heading[_ngcontent-%COMP%]{-webkit-text-fill-color:#fff;text-align:center}.errtext[_ngcontent-%COMP%]{color:red}.pass_word[_ngcontent-%COMP%]{margin-top:15px}"]],data:{}});function v(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","errtext"]],null,null,null,null,null)),(l()(),t.Eb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.vermsg)}))}function w(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","incorrect_account"]],null,null,null,null,null)),(l()(),t.Eb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.incrt)}))}function C(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","errtext"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["*Please enter Email address"]))],null,null)}function y(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","errtext"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["*Please enter valid Email address"]))],null,null)}function x(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","errtext"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["*Please enter password"]))],null,null)}function P(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","errtext"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["*Please enter valid password"]))],null,null)}function M(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,111,"ion-content",[["style","--background: url(./assets/images/bg.png) 0 0/100% 100% no-repeat !important;"]],null,null,null,o.w,o.g)),t.ob(1,49152,null,0,u.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,109,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,108,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,0,"div",[["class","col-sm-2"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,105,"div",[["class","col-sm-8"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,104,"div",[["class","row middle"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,15,"div",[["class","col-md-6 sec1"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,6,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,0,"img",[["class","img"],["src","../../assets/images/logo.png"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,1,"h3",[["class","heading"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["WHERE IT SPREADS "])),(l()(),t.pb(14,0,null,null,1,"h6",[["class","sub-heading"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Together we can be the first line of defense "])),(l()(),t.pb(16,0,null,null,1,"p",[["class","login_text"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Login using social media to get quick access "])),(l()(),t.pb(18,0,null,null,4,"div",[["class","social_bot_space"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,1,"div",[["class","social_btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.signInWithFB()&&t),t}),null,null)),(l()(),t.pb(20,0,null,null,0,"img",[["src","../../assets/images/fb.png"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,1,"div",[["class","social_btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.signInWithGoogle()&&t),t}),null,null)),(l()(),t.pb(22,0,null,null,0,"img",[["src","../../assets/images/google.png"]],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,87,"div",[["class","col-md-6 sec2"]],null,null,null,null,null)),(l()(),t.pb(24,0,null,null,86,"ion-card",[["class","card_bg"]],null,null,null,o.v,o.d)),t.ob(25,49152,null,0,u.j,[t.h,t.k,t.x],null,null),(l()(),t.pb(26,0,null,0,3,"ion-card-title",[],null,null,null,o.u,o.f)),t.ob(27,49152,null,0,u.n,[t.h,t.k,t.x],null,null),(l()(),t.pb(28,0,null,0,1,"h3",[["class","title"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" SignIn "])),(l()(),t.pb(30,0,null,0,3,"h6",[["class","sub_title"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Don't have an account? "])),(l()(),t.pb(32,0,null,null,1,"a",[["class","click_btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.signup()&&t),t}),null,null)),(l()(),t.Eb(-1,null,["Sign Up Free! "])),(l()(),t.eb(16777216,null,0,1,null,v)),t.ob(35,16384,null,0,r.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,w)),t.ob(37,16384,null,0,r.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(38,0,null,0,72,"ion-card-content",[["text-center",""]],null,null,null,o.t,o.e)),t.ob(39,49152,null,0,u.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(40,0,null,0,70,"ion-list",[["class","ion_list"],["lines","none"],["text-center",""]],null,null,null,o.C,o.m)),t.ob(41,49152,null,0,u.L,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(42,0,null,0,68,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var i=!0;return"submit"===n&&(i=!1!==t.Ab(l,44).onSubmit(e)&&i),"reset"===n&&(i=!1!==t.Ab(l,44).onReset()&&i),i}),null,null)),t.ob(43,16384,null,0,a.q,[],null,null),t.ob(44,4210688,[["form",4]],0,a.i,[[8,null],[8,null]],null,null),t.Bb(2048,null,a.b,null,[a.i]),t.ob(46,16384,null,0,a.h,[[4,a.b]],null,null),(l()(),t.pb(47,0,null,null,4,"ion-item",[["lines","none"]],null,null,null,o.A,o.k)),t.ob(48,49152,null,0,u.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(49,0,null,0,2,"ion-label",[],null,null,null,o.B,o.l)),t.ob(50,49152,null,0,u.K,[t.h,t.k,t.x],null,null),(l()(),t.Eb(-1,0,["Email Address"])),(l()(),t.pb(52,0,null,null,10,"ion-item",[["lines","none"]],null,null,null,o.A,o.k)),t.ob(53,49152,null,0,u.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(54,0,null,0,8,"ion-input",[["class","input"],["name","emailaddress"],["placeholder","Enter Your Email Address"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var i=!0,s=l.component;return"ionBlur"===n&&(i=!1!==t.Ab(l,57)._handleBlurEvent(e.target)&&i),"ionChange"===n&&(i=!1!==t.Ab(l,57)._handleInputEvent(e.target)&&i),"ngModelChange"===n&&(i=!1!==(s.emailaddress=e)&&i),"ionChange"===n&&(i=!1!==s.onChangeemail()&&i),i}),o.z,o.j)),t.ob(55,16384,null,0,a.l,[],{required:[0,"required"]},null),t.Bb(1024,null,a.d,(function(l){return[l]}),[a.l]),t.ob(57,16384,null,0,u.Eb,[t.k],null,null),t.Bb(1024,null,a.e,(function(l){return[l]}),[u.Eb]),t.ob(59,671744,null,0,a.j,[[2,a.b],[6,a.d],[8,null],[6,a.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Bb(2048,null,a.f,null,[a.j]),t.ob(61,16384,null,0,a.g,[[4,a.f]],null,null),t.ob(62,49152,null,0,u.D,[t.h,t.k,t.x],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),t.eb(16777216,null,null,1,null,C)),t.ob(64,16384,null,0,r.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,y)),t.ob(66,16384,null,0,r.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(67,0,null,null,4,"ion-item",[["class","ion_item"],["lines","none"]],null,null,null,o.A,o.k)),t.ob(68,49152,null,0,u.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(69,0,null,0,2,"ion-label",[],null,null,null,o.B,o.l)),t.ob(70,49152,null,0,u.K,[t.h,t.k,t.x],null,null),(l()(),t.Eb(-1,0,["Password"])),(l()(),t.pb(72,0,null,null,13,"ion-item",[["class","pass_word"],["lines","none"]],null,null,null,o.A,o.k)),t.ob(73,49152,null,0,u.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(74,0,null,0,9,"ion-input",[["class","input_password"],["clear-on-edit","false"],["name","user_password"],["placeholder","Enter Your Password"],["placement","right"],["required",""],["tooltip","*Password should be at least 8 characters long, 1 Capital letter, 1 Small letter, 1 Number and 1 Special character"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"],[null,"mouseenter"],[null,"mouseleave"]],(function(l,n,e){var i=!0,s=l.component;return"ionBlur"===n&&(i=!1!==t.Ab(l,77)._handleBlurEvent(e.target)&&i),"ionChange"===n&&(i=!1!==t.Ab(l,77)._handleInputEvent(e.target)&&i),"mouseenter"===n&&(i=!1!==t.Ab(l,83).onMouseEnter()&&i),"mouseleave"===n&&(i=!1!==t.Ab(l,83).onMouseLeave()&&i),"ngModelChange"===n&&(i=!1!==(s.user_password=e)&&i),"ionChange"===n&&(i=!1!==s.onChangepassword()&&i),i}),o.z,o.j)),t.ob(75,16384,null,0,a.l,[],{required:[0,"required"]},null),t.Bb(1024,null,a.d,(function(l){return[l]}),[a.l]),t.ob(77,16384,null,0,u.Eb,[t.k],null,null),t.Bb(1024,null,a.e,(function(l){return[l]}),[u.Eb]),t.ob(79,671744,null,0,a.j,[[2,a.b],[6,a.d],[8,null],[6,a.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Bb(2048,null,a.f,null,[a.j]),t.ob(81,16384,null,0,a.g,[[4,a.f]],null,null),t.ob(82,49152,null,0,u.D,[t.h,t.k,t.x],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),t.ob(83,16384,null,0,d,[t.k,t.B],{tooltipTitle:[0,"tooltipTitle"],placement:[1,"placement"]},null),(l()(),t.pb(84,0,null,0,1,"ion-icon",[["class","pass_eye"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.password_toggle()&&t),t}),o.y,o.i)),t.ob(85,49152,null,0,u.z,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.eb(16777216,null,null,1,null,x)),t.ob(87,16384,null,0,r.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,P)),t.ob(89,16384,null,0,r.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(90,0,null,null,20,"div",[["class","row rememberme"]],null,null,null,null,null)),(l()(),t.pb(91,0,null,null,8,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.pb(92,0,null,null,5,"input",[["checked",""],["class","remember"],["name","remember"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],(function(l,n,e){var i=!0,s=l.component;return"change"===n&&(i=!1!==t.Ab(l,93).onChange(e.target.checked)&&i),"blur"===n&&(i=!1!==t.Ab(l,93).onTouched()&&i),"ngModelChange"===n&&(i=!1!==(s.rememberme=e)&&i),i}),null,null)),t.ob(93,16384,null,0,a.a,[t.B,t.k],null,null),t.Bb(1024,null,a.e,(function(l){return[l]}),[a.a]),t.ob(95,671744,null,0,a.j,[[2,a.b],[8,null],[8,null],[6,a.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Bb(2048,null,a.f,null,[a.j]),t.ob(97,16384,null,0,a.g,[[4,a.f]],null,null),(l()(),t.pb(98,0,null,null,1,"span",[["class","remember_text"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Remember me "])),(l()(),t.pb(100,0,null,null,2,"div",[["class","col-md-6 forgot"]],null,null,null,null,null)),(l()(),t.pb(101,0,null,null,1,"a",[["class","click_btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.forgot_password()&&t),t}),null,null)),(l()(),t.Eb(-1,null,[" Forgot Password? "])),(l()(),t.pb(103,0,null,null,4,"div",[["class","col-md-12"],["style","margin-top: 2%;"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" This site is for informational purposes only and does not provide health advice. Please visit the "])),(l()(),t.pb(105,0,null,null,1,"a",[["href","https://www.cdc.gov/coronavirus/2019-ncov/index.html"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["CDC "])),(l()(),t.Eb(-1,null,[" site to learn more about what your symptoms may mean. "])),(l()(),t.pb(108,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t.pb(109,0,null,null,1,"button",[["class","btn-primary login"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.signin_user()&&t),t}),null,null)),(l()(),t.Eb(-1,null,[" Login "])),(l()(),t.pb(111,0,null,null,0,"div",[["class","col-sm-2"]],null,null,null,null,null))],(function(l,n){var e=n.component;l(n,35,0,1==e.veruser),l(n,37,0,1==e.incrtmsg),l(n,41,0,"none"),l(n,48,0,"none"),l(n,53,0,"none"),l(n,55,0,""),l(n,59,0,"emailaddress",e.emailaddress),l(n,62,0,"emailaddress","Enter Your Email Address","","text"),l(n,64,0,""==e.emailaddress&&e.submit),l(n,66,0,e.valid&&""!=e.emailaddress),l(n,68,0,"none"),l(n,73,0,"none"),l(n,75,0,""),l(n,79,0,"user_password",e.user_password),l(n,82,0,"user_password","Enter Your Password","",e.type),l(n,83,0,"*Password should be at least 8 characters long, 1 Capital letter, 1 Small letter, 1 Number and 1 Special character","right"),l(n,85,0,"text"==e.type?"eye-outline":"eye-off-outline"),l(n,87,0,""==e.user_password&&e.submit),l(n,89,0,e.passwordvalid&&""!=e.user_password),l(n,95,0,"remember",e.rememberme)}),(function(l,n){l(n,42,0,t.Ab(n,46).ngClassUntouched,t.Ab(n,46).ngClassTouched,t.Ab(n,46).ngClassPristine,t.Ab(n,46).ngClassDirty,t.Ab(n,46).ngClassValid,t.Ab(n,46).ngClassInvalid,t.Ab(n,46).ngClassPending),l(n,54,0,t.Ab(n,55).required?"":null,t.Ab(n,61).ngClassUntouched,t.Ab(n,61).ngClassTouched,t.Ab(n,61).ngClassPristine,t.Ab(n,61).ngClassDirty,t.Ab(n,61).ngClassValid,t.Ab(n,61).ngClassInvalid,t.Ab(n,61).ngClassPending),l(n,74,0,t.Ab(n,75).required?"":null,t.Ab(n,81).ngClassUntouched,t.Ab(n,81).ngClassTouched,t.Ab(n,81).ngClassPristine,t.Ab(n,81).ngClassDirty,t.Ab(n,81).ngClassValid,t.Ab(n,81).ngClassInvalid,t.Ab(n,81).ngClassPending),l(n,92,0,t.Ab(n,97).ngClassUntouched,t.Ab(n,97).ngClassTouched,t.Ab(n,97).ngClassPristine,t.Ab(n,97).ngClassDirty,t.Ab(n,97).ngClassValid,t.Ab(n,97).ngClassInvalid,t.Ab(n,97).ngClassPending)}))}function k(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-login",[],null,null,null,M,f)),t.ob(1,114688,null,0,b,[h.m,g.a,p.a,_.c],null,null)],(function(l,n){l(n,1,0)}),null)}var O=t.lb("app-login",b,k,{},{},[]);class A{}e.d(n,"LoginPageModuleNgFactory",(function(){return E}));var E=t.mb(i,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[s.a,O]],[3,t.j],t.v]),t.yb(4608,r.l,r.k,[t.s,[2,r.t]]),t.yb(4608,a.o,a.o,[]),t.yb(4608,u.a,u.a,[t.x,t.g]),t.yb(4608,u.Ab,u.Ab,[u.a,t.j,t.p]),t.yb(4608,u.Db,u.Db,[u.a,t.j,t.p]),t.yb(1073742336,r.b,r.b,[]),t.yb(1073742336,a.n,a.n,[]),t.yb(1073742336,a.c,a.c,[]),t.yb(1073742336,u.yb,u.yb,[]),t.yb(1073742336,h.n,h.n,[[2,h.s],[2,h.m]]),t.yb(1073742336,A,A,[]),t.yb(1073742336,i,i,[]),t.yb(1024,h.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);