// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.components.login');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.routes');
goog.require('dommy.core');
goog.require('growingtree_app.ui');
goog.require('growingtree_app.mock_data');
goog.require('growingtree_app.utils');
goog.require('om.core');
growingtree_app.components.login.submit_form_fn = (function submit_form_fn(app,form_name,base_data,fields){
var comm = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
return ((function (comm){
return (function (_){
var data = cljs.core.reduce.call(null,((function (comm){
return (function (tot,p__21994){
var vec__21995 = p__21994;
var attr = cljs.core.nth.call(null,vec__21995,(0),null);
var fieldid = cljs.core.nth.call(null,vec__21995,(1),null);
return cljs.core.assoc.call(null,tot,attr,dommy.core.value.call(null,document.querySelector(dommy.core.selector.call(null,fieldid))));
});})(comm))
,cljs.core.PersistentArrayMap.EMPTY,fields);
var form_data = growingtree_app.utils.set_time.call(null,growingtree_app.utils.set_time.call(null,cljs.core.merge.call(null,base_data,data),new cljs.core.Keyword(null,"assignment","assignment",1330426519),"end"),new cljs.core.Keyword(null,"activity","activity",-1179221455),"start");
console.log(cljs.core.pr_str.call(null,form_name," data ",form_data));

return cljs.core.async.put_BANG_.call(null,comm,growingtree_app.mock_data.login_msg_nav_path.call(null,form_name,form_data));
});
;})(comm))
});
growingtree_app.components.login.login = (function login(app,owner,opts){
if(typeof growingtree_app.components.login.t21999 !== 'undefined'){
} else {

/**
* @constructor
*/
growingtree_app.components.login.t21999 = (function (opts,owner,app,login,meta22000){
this.opts = opts;
this.owner = owner;
this.app = app;
this.login = login;
this.meta22000 = meta22000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.login.t21999.prototype.om$core$IRender$ = true;

growingtree_app.components.login.t21999.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
var settings = new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(self__.app);
var login_form_fields = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("#login-name")].join(''),new cljs.core.Keyword(null,"pass","pass",1574159993),[cljs.core.str("#login-password")].join('')], null);
var signup_form_fields = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"role","role",-736691072),[cljs.core.str("#signup-type")].join(''),new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("#signup-name")].join(''),new cljs.core.Keyword(null,"pass","pass",1574159993),[cljs.core.str("#signup-password")].join(''),new cljs.core.Keyword(null,"email","email",1415816706),[cljs.core.str("#signup-email")].join('')], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.center.span5","div.center.span5",278725029),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form#login-form.login-name","form#login-form.login-name",-2072313144),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),"",new cljs.core.Keyword(null,"method","method",55703592),"post"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.app-name","span.app-name",2131244200),"GrowingTree"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span#login-error.error","span#login-error.error",857082890)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.lable","label.lable",1019019113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"login-name"], null),"Username or Email"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.login-name","input.login-name",2002697895),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"login-name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"user name or email"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.fieldset-password","fieldset.fieldset-password",-341517383),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.lable","label.lable",1019019113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"login-password"], null),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.login-password","input.login-password",-2126766965),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"login-password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.fieldset-rememberMe.fieldset-checkbox","fieldset.fieldset-rememberMe.fieldset-checkbox",-234814200),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.lable","label.lable",1019019113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"rememberMe-input"], null),"Remember Me"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.remembrMe-input","input.remembrMe-input",1709596195),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"rememberMe-input",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),"remember",new cljs.core.Keyword(null,"value:","value:",-1810219570),"1"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-block","button.btn.btn-primary.btn-block",788068819),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"login-button",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),growingtree_app.components.login.submit_form_fn.call(null,self__.app,"login-form",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"login","login",55217519)], null),login_form_fields)], null),"Sign In"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#signup-link","p#signup-link",-1208571646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.option.active","a.option.active",-7117666),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (comm,settings,login_form_fields,signup_form_fields,this$__$1){
return (function (_){
return growingtree_app.ui.show_div.call(null,"#signup-form");
});})(comm,settings,login_form_fields,signup_form_fields,this$__$1))
], null),"Create an account ?"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#signup-form.hide","div#signup-form.hide",-2032657925),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Create an Account"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.fieldset-accountType","fieldset.fieldset-accountType",-1688787047),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Account Type"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"What account type do you want to create ?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"signup-type",new cljs.core.Keyword(null,"class","class",-2030961996),"account-type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"parent"], null),"Parent"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"child"], null),"Child"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"teacher"], null),"Teacher"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.signup-name","input.signup-name",-1685766361),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"signup-name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"user name"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.signup-email","input.signup-email",1910480960),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"signup-email",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"email"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.fieldset-password","fieldset.fieldset-password",-341517383),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.signup-password","input.signup-password",-1648975536),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"signup-password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.fieldset-password","fieldset.fieldset-password",-341517383),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.signup-password-rep","input.signup-password-rep",-484841204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"signup-password-rep",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Repeat Password"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-block","button.btn.btn-primary.btn-block",788068819),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"signup-button",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),growingtree_app.components.login.submit_form_fn.call(null,self__.app,"signup-form",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"signup","signup",1961016747)], null),signup_form_fields)], null),"Sign Up"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-center.center","p.text-center.center",-990587820),"Copyright 2014 - 2015, GrowingTree Inc."], null)], null);
})());
});

growingtree_app.components.login.t21999.prototype.om$core$IDisplayName$ = true;

growingtree_app.components.login.t21999.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__3807__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return "login";
}
});

growingtree_app.components.login.t21999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22001){
var self__ = this;
var _22001__$1 = this;
return self__.meta22000;
});

growingtree_app.components.login.t21999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22001,meta22000__$1){
var self__ = this;
var _22001__$1 = this;
return (new growingtree_app.components.login.t21999(self__.opts,self__.owner,self__.app,self__.login,meta22000__$1));
});

growingtree_app.components.login.t21999.cljs$lang$type = true;

growingtree_app.components.login.t21999.cljs$lang$ctorStr = "growingtree-app.components.login/t21999";

growingtree_app.components.login.t21999.cljs$lang$ctorPrWriter = (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"growingtree-app.components.login/t21999");
});

growingtree_app.components.login.__GT_t21999 = (function __GT_t21999(opts__$1,owner__$1,app__$1,login__$1,meta22000){
return (new growingtree_app.components.login.t21999(opts__$1,owner__$1,app__$1,login__$1,meta22000));
});

}

return (new growingtree_app.components.login.t21999(opts,owner,app,login,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=login.js.map