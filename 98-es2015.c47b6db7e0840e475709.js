(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{DLVS:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var o=e("pMnS"),i=e("MKJQ"),s=e("sZkV"),a=e("SVse"),r=e("s7LF"),c=e("TESy"),d=e("H+bZ"),g=e("fL5g");class p{constructor(l,n,e){this.router=l,this.apiservice=n,this.socailAuthService=e,this.verificationcode=!0,this.new_password="",this.passwordvalid=!0,this.confirmpasswordvalid=!0,this.confirm_password="",this.submit=!1,this.mismatch=!0,this.submitpassword=!1,this.type1="password",this.type2="password",this.code="",this.emailaddress="",this.type="password",this.socialdata=[],this.social_res=[],this.invalidmsg="",this.invalidcode=!1,this.limitmsg="",this.codesuccess="",this.codemsg=!1,this.submit=!1,this.code="",this.new_password="",this.confirm_password="",this.emailaddress=localStorage.getItem("email")}ionViewDidEnter(){this.submit=!1,this.code="",this.new_password="",this.confirm_password="",this.confirm_password="",this.invalidcode=!1,this.codemsg=!1,this.shwerr=""}code_toggle(){var l=this;"text"==this.type?this.type="password":(this.type="text",setTimeout((function(){l.type="password"}),1e3))}login(){this.router.navigate(["/login"])}signup(){this.router.navigate(["/signup"])}ngOnInit(){this.submit=!1,this.code="",this.new_password="",this.confirm_password=""}onChangenewpassword(){""!=this.new_password&&(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this.new_password)?(this.valid=!1,this.passwordvalid=!0):(this.passwordvalid=!1,this.valid=!0))}onChangeverifypassword(){""!=this.confirm_password&&(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this.confirm_password)&&this.new_password==this.confirm_password?(this.confirmvalid=!1,this.confirmpasswordvalid=!0):(this.confirmpasswordvalid=!1,this.confirmvalid=!0))}changepassword(){this.submit=!0,this.submitpassword=!0,""!=this.new_password&&(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this.new_password)?(this.valid=!1,this.passwordvalid=!0):(this.passwordvalid=!1,this.valid=!0)),""!=this.confirm_password&&(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(this.confirm_password)?(this.confirmvalid=!1,this.confirmpasswordvalid=!0):(this.confirmpasswordvalid=!1,this.confirmvalid=!0)),""!==this.new_password&&""!=this.confirm_password&&this.passwordvalid&&(this.new_password==this.confirm_password?this.changepasswordapi():this.mismatch=!1)}changepasswordapi(){this.invalidcode=!1;let l=this;var n=new c.d({UserPoolId:this.apiservice.UserPoolId,ClientId:this.apiservice.ClientId});new c.b({Username:this.emailaddress,Pool:n}).confirmPassword(this.code,this.new_password,{onSuccess:()=>{l.invalidcode=!1,l.router.navigate(["/login"])},onFailure:n=>{l.shwerr=!1,l.codemsg=!1,l.invalidcode=!0,l.invalidmsg="*Invalid verification code provided, please try again.","CodeMismatchException"==n.name&&(l.verificationcode=!0)}})}signInWithGoogle(){let l=this;l.socailAuthService.signIn(g.d.PROVIDER_ID).then(n=>{l.socailAuthService.signOut(),l.socialdata=n,localStorage.setItem("socialuser",JSON.stringify(l.socialdata)),l.verifyuser(l.socialdata.email)})}signInWithFB(){let l=this;l.socailAuthService.signIn(g.c.PROVIDER_ID).then(n=>{l.socailAuthService.signOut(),l.socialdata=n,localStorage.setItem("socialuser",JSON.stringify(l.socialdata)),l.verifyfb(l.socialdata.email)})}verifyuser(l){this.apiservice.google_login("userlogin?user_email="+l).subscribe(l=>{this.social_res=l;let n=JSON.parse(this.social_res.body);if(n!=[]&&""!=n){let l=n[0];if(""!=l.usr_id&&null!=l.user_id){var e=l.user_type.toLowerCase();"google"==e?(this.apiservice.loginuser_details(l.user_email,l.zipcode),localStorage.setItem("userlogged","true"),this.router.navigate(["/questions"])):"facebook"==e?alert("Email ID already exists,Try to login with Facebook"):(this.router.navigate(["/login"]),alert("Email ID already exists,Try to login."))}else this.router.navigate(["/socialsignup"])}else this.router.navigate(["/socialsignup"])},l=>{})}verifyfb(l){this.apiservice.facebook_login("userlogin?user_email="+l).subscribe(l=>{this.social_res=l;let n=JSON.parse(this.social_res.body);if(n!=[]&&""!=n){let l=n[0];if(""!=l.usr_id&&null!=l.user_id){var e=l.user_type.toLowerCase();"facebook"==e?(this.apiservice.loginuser_details(l.user_email,l.zipcode),localStorage.setItem("userlogged","true"),this.router.navigate(["/questions"])):"google"==e?alert("Email ID already exists,Try to login with Google"):(this.router.navigate(["/login"]),alert("Email ID already exists,Try to login."))}else this.router.navigate(["/socialsignup"])}else this.router.navigate(["/socialsignup"])},l=>{})}forgotpassword(){this.codemsg=!1,this.shwerr=!1,this.code="",this.invalidcode=!1;let l=this;var n=new c.d({UserPoolId:this.apiservice.UserPoolId,ClientId:this.apiservice.ClientId});new c.b({Username:this.emailaddress,Pool:n}).forgotPassword({onSuccess:function(){l.shwerr=!1,l.codemsg=!0,l.codesuccess="*Code resent successfully"},onFailure:function(){l.codemsg=!1,l.shwerr=!0,l.limitmsg="*Attempt limit exceeded, please try after some time"}})}}var b=e("iInd"),h=t.nb({encapsulation:0,styles:[[".middle[_ngcontent-%COMP%]{padding-top:20%}.sec1[_ngcontent-%COMP%]{background-color:#2c314d;padding:2.5%}.sec2[_ngcontent-%COMP%]{background-color:#fff}.log_sec[_ngcontent-%COMP%]{padding:5%}.proj_name[_ngcontent-%COMP%]{color:#fff;margin-top:3%}.login_text[_ngcontent-%COMP%]{color:#fff;text-align:center;margin-top:14%;padding-bottom:0}.fb[_ngcontent-%COMP%]{background-color:#3b5998;color:#fff}.twitter[_ngcontent-%COMP%]{background-color:#55acee;color:#fff}.google[_ngcontent-%COMP%]{background-color:#dd4b39;color:#fff}.social_btn[_ngcontent-%COMP%]{width:100%;background-color:transparent;padding-bottom:2%;text-align:center;cursor:pointer}.other_icons[_ngcontent-%COMP%]{margin-top:3%;margin-left:-3%;display:none}.other_icons_space[_ngcontent-%COMP%]{margin-top:5%;margin-bottom:5%}.title[_ngcontent-%COMP%]{padding:6% 9% 1%;color:#2d385e;font-weight:700}.sub_title[_ngcontent-%COMP%]{text-align:left;padding-left:8%}.input[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #ccc;margin-top:-8%}.input_password[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #ccc;margin-top:-11%}.ion_item[_ngcontent-%COMP%]{margin-bottom:-5%}.remember[_ngcontent-%COMP%]{margin-top:25%;width:25px}.remember_text[_ngcontent-%COMP%]{color:#7e7c7c}.forgot[_ngcontent-%COMP%]{margin-top:9%}a[_ngcontent-%COMP%]:hover{text-decoration:none}.login[_ngcontent-%COMP%]{box-shadow:0 3px 6px #00000029;border-radius:7px;width:100%;padding-top:2%;padding-bottom:2%;margin-top:1%;margin-bottom:3%}.click_btn[_ngcontent-%COMP%]{color:#4f77ff;cursor:pointer;font-size:1rem}.click_btn[_ngcontent-%COMP%]:hover{color:#4f77ff}.card_bg[_ngcontent-%COMP%]{box-shadow:none}.sc-ion-input-md-h[_ngcontent-%COMP%]{--padding-top:0px;--padding-end:0;--padding-bottom:0px}.form_fileds[_ngcontent-%COMP%]{border-left:none!important;border-right:none!important;border-top:none!important;border-radius:0!important}.form_fileds[_ngcontent-%COMP%]:active, .form_fileds[_ngcontent-%COMP%]:hover, [_ngcontent-%COMP%]:focus{border-left:none!important;border-right:none!important;border-top:none!important}.social_bot_space[_ngcontent-%COMP%]{margin-bottom:5%}.ion_list[_ngcontent-%COMP%]{margin-top:-5%}@media screen and (min-width:0px) and (max-width:575px){.middle[_ngcontent-%COMP%]{padding-top:0}}@media screen and (min-width:576px) and (max-width:1000px){.middle[_ngcontent-%COMP%]{padding-top:0}.ion_list[_ngcontent-%COMP%]{margin-top:-5%;margin-left:-10%}}.img[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;margin-top:25%}.heading[_ngcontent-%COMP%], .sub-heading[_ngcontent-%COMP%]{-webkit-text-fill-color:#fff;text-align:center}.errtext[_ngcontent-%COMP%]{color:red}.errtext1[_ngcontent-%COMP%]{margin-left:10px;color:red}.errtext2[_ngcontent-%COMP%]{margin-left:30px;color:red}.eye-icon[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;margin-top:-8%}.verification_code[_ngcontent-%COMP%]{margin-top:-5%;margin-bottom:-3%}.ion-item2[_ngcontent-%COMP%]{margin-top:-4%;margin-bottom:-1%}.ion-item3[_ngcontent-%COMP%]{margin-top:-2%;margin-bottom:-3%}"]],data:{}});function m(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","errtext1"]],null,null,null,null,null)),(l()(),t.Eb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.invalidmsg)}))}function f(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","errtext1"]],null,null,null,null,null)),(l()(),t.Eb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.limitmsg)}))}function w(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","errtext2"]],null,null,null,null,null)),(l()(),t.Eb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.codesuccess)}))}function _(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","errtext"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["*Please enter verification code"]))],null,null)}function v(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","errtext"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["*Please enter new password "]))],null,null)}function C(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","errtext"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["*Password should be at least 8 characters long, 1 Capital letter, 1 Small letter, 1 Integer and 1 Special character"]))],null,null)}function y(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","errtext"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["*Please enter confirm password"]))],null,null)}function P(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[["class","errtext"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["*Password Mismatch"]))],null,null)}function x(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,120,"ion-content",[["style","--background: url(./assets/images/bg.png) 0 0/100% 100% no-repeat !important;"]],null,null,null,i.w,i.g)),t.ob(1,49152,null,0,s.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,118,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,117,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,0,"div",[["class","col-sm-2"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,114,"div",[["class","col-sm-8"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,113,"div",[["class","row middle"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,15,"div",[["class","col-md-6 sec1"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,6,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,0,"img",[["class","img"],["src","../../assets/images/logo.png"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,1,"h3",[["class","heading"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["WHERE IT SPREADS "])),(l()(),t.pb(14,0,null,null,1,"h6",[["class","sub-heading"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Together we can be the first line of defense "])),(l()(),t.pb(16,0,null,null,1,"p",[["class","login_text"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Login using social media to get quick access "])),(l()(),t.pb(18,0,null,null,4,"div",[["class","social_bot_space"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,1,"div",[["class","social_btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.signInWithFB()&&t),t}),null,null)),(l()(),t.pb(20,0,null,null,0,"img",[["src","../../assets/images/fb.png"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,1,"div",[["class","social_btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.signInWithGoogle()&&t),t}),null,null)),(l()(),t.pb(22,0,null,null,0,"img",[["src","../../assets/images/google.png"]],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,96,"div",[["class","col-md-6 sec2"]],null,null,null,null,null)),(l()(),t.pb(24,0,null,null,95,"ion-card",[["class","card_bg"]],null,null,null,i.v,i.d)),t.ob(25,49152,null,0,s.j,[t.h,t.k,t.x],null,null),(l()(),t.pb(26,0,null,0,3,"ion-card-title",[],null,null,null,i.u,i.f)),t.ob(27,49152,null,0,s.n,[t.h,t.k,t.x],null,null),(l()(),t.pb(28,0,null,0,1,"h3",[["class","title"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Reset password "])),(l()(),t.pb(30,0,null,0,1,"h6",[["class","sub_title"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" You can reset the password using below fields. "])),(l()(),t.eb(16777216,null,0,1,null,m)),t.ob(33,16384,null,0,a.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,f)),t.ob(35,16384,null,0,a.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,0,1,null,w)),t.ob(37,16384,null,0,a.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(38,0,null,0,81,"ion-card-content",[["text-center",""]],null,null,null,i.t,i.e)),t.ob(39,49152,null,0,s.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(40,0,null,0,79,"ion-list",[["class","ion_list"],["lines","none"],["text-center",""]],null,null,null,i.C,i.m)),t.ob(41,49152,null,0,s.L,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(42,0,null,0,77,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var u=!0;return"submit"===n&&(u=!1!==t.Ab(l,44).onSubmit(e)&&u),"reset"===n&&(u=!1!==t.Ab(l,44).onReset()&&u),u}),null,null)),t.ob(43,16384,null,0,r.q,[],null,null),t.ob(44,4210688,[["form",4]],0,r.i,[[8,null],[8,null]],null,null),t.Bb(2048,null,r.b,null,[r.i]),t.ob(46,16384,null,0,r.h,[[4,r.b]],null,null),(l()(),t.pb(47,0,null,null,4,"ion-item",[["class","verification_code"],["lines","none"]],null,null,null,i.A,i.k)),t.ob(48,49152,null,0,s.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(49,0,null,0,2,"ion-label",[["class","input_label"]],null,null,null,i.B,i.l)),t.ob(50,49152,null,0,s.K,[t.h,t.k,t.x],null,null),(l()(),t.Eb(-1,0,["Verification Code"])),(l()(),t.pb(52,0,null,null,12,"ion-item",[["class","ion-item2"],["lines","none"]],null,null,null,i.A,i.k)),t.ob(53,49152,null,0,s.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(54,0,null,0,8,"ion-input",[["class","input"],["name","code"],["placeholder","Enter Your Verification Code"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==t.Ab(l,57)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ab(l,57)._handleInputEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(o.code=e)&&u),u}),i.z,i.j)),t.ob(55,16384,null,0,r.l,[],{required:[0,"required"]},null),t.Bb(1024,null,r.d,(function(l){return[l]}),[r.l]),t.ob(57,16384,null,0,s.Eb,[t.k],null,null),t.Bb(1024,null,r.e,(function(l){return[l]}),[s.Eb]),t.ob(59,671744,null,0,r.j,[[2,r.b],[6,r.d],[8,null],[6,r.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Bb(2048,null,r.f,null,[r.j]),t.ob(61,16384,null,0,r.g,[[4,r.f]],null,null),t.ob(62,49152,null,0,s.D,[t.h,t.k,t.x],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),t.pb(63,0,null,0,1,"ion-icon",[["class","eye-icon"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.code_toggle()&&t),t}),i.y,i.i)),t.ob(64,49152,null,0,s.z,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.eb(16777216,null,null,1,null,_)),t.ob(66,16384,null,0,a.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(67,0,null,null,4,"ion-item",[["class","ion-item3"],["lines","none"]],null,null,null,i.A,i.k)),t.ob(68,49152,null,0,s.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(69,0,null,0,2,"ion-label",[["class","input_label"]],null,null,null,i.B,i.l)),t.ob(70,49152,null,0,s.K,[t.h,t.k,t.x],null,null),(l()(),t.Eb(-1,0,["New Password "])),(l()(),t.pb(72,0,null,null,10,"ion-item",[["class","ion-item2"],["lines","none"]],null,null,null,i.A,i.k)),t.ob(73,49152,null,0,s.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(74,0,null,0,8,"ion-input",[["class","input"],["name","new_password"],["placeholder","Enter Your New Password"],["placement","right"],["required",""],["tooltip","*Password should be at least 8 characters long, 1 Capital letter, 1 Small letter, 1 Integer and 1 Special character"],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==t.Ab(l,77)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ab(l,77)._handleInputEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(o.new_password=e)&&u),"ionChange"===n&&(u=!1!==o.onChangenewpassword()&&u),u}),i.z,i.j)),t.ob(75,16384,null,0,r.l,[],{required:[0,"required"]},null),t.Bb(1024,null,r.d,(function(l){return[l]}),[r.l]),t.ob(77,16384,null,0,s.Eb,[t.k],null,null),t.Bb(1024,null,r.e,(function(l){return[l]}),[s.Eb]),t.ob(79,671744,null,0,r.j,[[2,r.b],[6,r.d],[8,null],[6,r.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Bb(2048,null,r.f,null,[r.j]),t.ob(81,16384,null,0,r.g,[[4,r.f]],null,null),t.ob(82,49152,null,0,s.D,[t.h,t.k,t.x],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),t.eb(16777216,null,null,1,null,v)),t.ob(84,16384,null,0,a.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,C)),t.ob(86,16384,null,0,a.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(87,0,null,null,4,"ion-item",[["class","ion-item3"],["lines","none"]],null,null,null,i.A,i.k)),t.ob(88,49152,null,0,s.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(89,0,null,0,2,"ion-label",[["class","input_label"]],null,null,null,i.B,i.l)),t.ob(90,49152,null,0,s.K,[t.h,t.k,t.x],null,null),(l()(),t.Eb(-1,0,["Confirm Password "])),(l()(),t.pb(92,0,null,null,10,"ion-item",[["class","ion-item2"],["lines","none"]],null,null,null,i.A,i.k)),t.ob(93,49152,null,0,s.E,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(94,0,null,0,8,"ion-input",[["class","input"],["name","confirm_password"],["placeholder","Enter Your Confirm Password"],["placement","right"],["required",""],["tooltip","Password must have at least 8 characters \n and contain a mix of lower case \n and upper case letters,numbers and  \n special characters(e.g.!#$)"],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,e){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==t.Ab(l,97)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ab(l,97)._handleInputEvent(e.target)&&u),"ngModelChange"===n&&(u=!1!==(o.confirm_password=e)&&u),"ionChange"===n&&(u=!1!==o.onChangeverifypassword()&&u),u}),i.z,i.j)),t.ob(95,16384,null,0,r.l,[],{required:[0,"required"]},null),t.Bb(1024,null,r.d,(function(l){return[l]}),[r.l]),t.ob(97,16384,null,0,s.Eb,[t.k],null,null),t.Bb(1024,null,r.e,(function(l){return[l]}),[s.Eb]),t.ob(99,671744,null,0,r.j,[[2,r.b],[6,r.d],[8,null],[6,r.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Bb(2048,null,r.f,null,[r.j]),t.ob(101,16384,null,0,r.g,[[4,r.f]],null,null),t.ob(102,49152,null,0,s.D,[t.h,t.k,t.x],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),(l()(),t.eb(16777216,null,null,1,null,y)),t.ob(104,16384,null,0,a.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,P)),t.ob(106,16384,null,0,a.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(107,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(108,0,null,null,11,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),t.pb(109,0,null,null,1,"button",[["class","btn-primary login"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.changepassword()&&t),t}),null,null)),(l()(),t.Eb(-1,null,[" Submit Password "])),(l()(),t.pb(111,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.pb(112,0,null,null,1,"a",[["class","click_btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.login()&&t),t}),null,null)),(l()(),t.Eb(-1,null,["Already have an account? "])),(l()(),t.pb(114,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.pb(115,0,null,null,1,"a",[["class","click_btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.signup()&&t),t}),null,null)),(l()(),t.Eb(-1,null,["Don't have an account? "])),(l()(),t.pb(117,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.pb(118,0,null,null,1,"a",[["class","click_btn"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.forgotpassword()&&t),t}),null,null)),(l()(),t.Eb(-1,null,["Resend verification code "])),(l()(),t.pb(120,0,null,null,0,"div",[["class","col-sm-2"]],null,null,null,null,null))],(function(l,n){var e=n.component;l(n,33,0,1==e.invalidcode),l(n,35,0,1==e.shwerr),l(n,37,0,1==e.codemsg),l(n,41,0,"none"),l(n,48,0,"none"),l(n,53,0,"none"),l(n,55,0,""),l(n,59,0,"code",e.code),l(n,62,0,"code","Enter Your Verification Code","",e.type),l(n,64,0,"text"==e.type?"eye-outline":"eye-off-outline"),l(n,66,0,""==e.code&&e.submit),l(n,68,0,"none"),l(n,73,0,"none"),l(n,75,0,""),l(n,79,0,"new_password",e.new_password),l(n,82,0,"new_password","Enter Your New Password","",e.type1),l(n,84,0,""==e.new_password&&e.submit),l(n,86,0,e.valid&&""!=e.new_password),l(n,88,0,"none"),l(n,93,0,"none"),l(n,95,0,""),l(n,99,0,"confirm_password",e.confirm_password),l(n,102,0,"confirm_password","Enter Your Confirm Password","",e.type2),l(n,104,0,""==e.confirm_password&&e.submit),l(n,106,0,e.confirmvalid&&""!=e.confirm_password&&e.confirm_password!=e.new_password)}),(function(l,n){l(n,42,0,t.Ab(n,46).ngClassUntouched,t.Ab(n,46).ngClassTouched,t.Ab(n,46).ngClassPristine,t.Ab(n,46).ngClassDirty,t.Ab(n,46).ngClassValid,t.Ab(n,46).ngClassInvalid,t.Ab(n,46).ngClassPending),l(n,54,0,t.Ab(n,55).required?"":null,t.Ab(n,61).ngClassUntouched,t.Ab(n,61).ngClassTouched,t.Ab(n,61).ngClassPristine,t.Ab(n,61).ngClassDirty,t.Ab(n,61).ngClassValid,t.Ab(n,61).ngClassInvalid,t.Ab(n,61).ngClassPending),l(n,74,0,t.Ab(n,75).required?"":null,t.Ab(n,81).ngClassUntouched,t.Ab(n,81).ngClassTouched,t.Ab(n,81).ngClassPristine,t.Ab(n,81).ngClassDirty,t.Ab(n,81).ngClassValid,t.Ab(n,81).ngClassInvalid,t.Ab(n,81).ngClassPending),l(n,94,0,t.Ab(n,95).required?"":null,t.Ab(n,101).ngClassUntouched,t.Ab(n,101).ngClassTouched,t.Ab(n,101).ngClassPristine,t.Ab(n,101).ngClassDirty,t.Ab(n,101).ngClassValid,t.Ab(n,101).ngClassInvalid,t.Ab(n,101).ngClassPending)}))}function M(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-changepassword",[],null,null,null,x,h)),t.ob(1,114688,null,0,p,[b.m,d.a,g.a],null,null)],(function(l,n){l(n,1,0)}),null)}var k=t.lb("app-changepassword",p,M,{},{},[]);class A{}e.d(n,"ChangepasswordPageModuleNgFactory",(function(){return E}));var E=t.mb(u,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[o.a,k]],[3,t.j],t.v]),t.yb(4608,a.l,a.k,[t.s,[2,a.t]]),t.yb(4608,r.o,r.o,[]),t.yb(4608,s.a,s.a,[t.x,t.g]),t.yb(4608,s.Ab,s.Ab,[s.a,t.j,t.p]),t.yb(4608,s.Db,s.Db,[s.a,t.j,t.p]),t.yb(1073742336,a.b,a.b,[]),t.yb(1073742336,r.n,r.n,[]),t.yb(1073742336,r.c,r.c,[]),t.yb(1073742336,s.yb,s.yb,[]),t.yb(1073742336,b.n,b.n,[[2,b.s],[2,b.m]]),t.yb(1073742336,A,A,[]),t.yb(1073742336,u,u,[]),t.yb(1024,b.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);