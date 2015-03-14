// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.controllers.states');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.routes');
goog.require('growingtree_app.mock_data');
goog.require('growingtree_app.utils');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
growingtree_app.controllers.states.transition = (function (){var method_table__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4705__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4708__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"growingtree-app.controllers.states","transition"),((function (method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__,hierarchy__4708__auto__){
return (function (target,msg_type,msg_data,state){
return msg_type;
});})(method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__,hierarchy__4708__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4708__auto__,method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"default","default",-1987822328),(function (target,msg_type,msg_data,state){
console.log(cljs.core.pr_str.call(null,"default transition : conj nav-path ",msg_type,msg_data));

if(cljs.core.truth_(msg_data)){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null),cljs.core.conj,msg_data);
} else {
return null;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"login","login",55217519),(function (target,msg_type,msg_data,state){
var cur_nav_type = growingtree_app.mock_data.get_nav_path_nxt_thing_type.call(null,msg_data);
console.log(cljs.core.pr_str.call(null,"control event :login conj nav-path ",msg_data));

var G__23060 = state;
var G__23060__$1 = cljs.core.update_in.call(null,G__23060,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null),cljs.core.conj,msg_data)
;
return G__23060__$1;
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"signup","signup",1961016747),(function (target,msg_type,msg_data,state){
var cur_nav_type = growingtree_app.mock_data.get_nav_path_nxt_thing_type.call(null,msg_data);
console.log(cljs.core.pr_str.call(null,"control event :signup conj nav-path ",msg_data));

var G__23061 = state;
var G__23061__$1 = cljs.core.update_in.call(null,G__23061,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null),cljs.core.conj,msg_data)
;
return G__23061__$1;
}));
growingtree_app.controllers.states.conj_nav_path = (function conj_nav_path(msg_type,msg_data,state){
var cur_nav_type = cljs.core.get_in.call(null,cljs.core.last.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(2)], null));
var nxt_nav_type = growingtree_app.mock_data.get_nav_path_nxt_thing_type.call(null,msg_data);
console.log(cljs.core.pr_str.call(null,"transition conj nav path ",cur_nav_type," ",nxt_nav_type," ",msg_data));

var G__23063 = state;
var G__23063__$1 = growingtree_app.controllers.states.update_navbar_selected.call(null,G__23063,cur_nav_type,nxt_nav_type)
;
var G__23063__$2 = cljs.core.update_in.call(null,G__23063__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null),cljs.core.conj,msg_data)
;
return G__23063__$2;
});
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"all-things","all-things",1825895767),(function (target,msg_type,msg_data,state){
return growingtree_app.controllers.states.conj_nav_path.call(null,msg_type,msg_data,state);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"filter-things","filter-things",-1018039660),(function (target,msg_type,msg_data,state){
return growingtree_app.controllers.states.conj_nav_path.call(null,msg_type,msg_data,state);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"message-things","message-things",-908841858),(function (target,msg_type,msg_data,state){
return growingtree_app.controllers.states.conj_nav_path.call(null,msg_type,msg_data,state);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"popstate","popstate",942216014),(function (target,msg_type,msg_data,state){
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(msg_data);
var things_vec = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url-data","url-data",-1539425798),url], null));
var nav_path = growingtree_app.mock_data.generate_nav_path_from_url.call(null,url);
console.log(cljs.core.pr_str.call(null,"popstate ",url,nav_path,things_vec));

return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null),cljs.core.conj,nav_path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),things_vec);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"add-thing","add-thing",321362583),(function (target,msg_type,msg_data,state){
console.log(cljs.core.pr_str.call(null,"control event :add-thing : conj nav-path ",msg_data));

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null),cljs.core.conj,msg_data);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"search-things","search-things",150817957),(function (target,msg_type,msg_data,state){
console.log(cljs.core.pr_str.call(null,"control event :search-thing : conj nav-path ",msg_data));

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null),cljs.core.conj,msg_data);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"api-data","api-data",103234986),(function (target,msg_type,msg_data,state){
var comm = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
var things_vec = new cljs.core.Keyword(null,"things-vec","things-vec",-1363222375).cljs$core$IFn$_invoke$arity$1(msg_data);
var nav_path = new cljs.core.Keyword(null,"nav-path","nav-path",-444531376).cljs$core$IFn$_invoke$arity$1(msg_data);
var thing_type = growingtree_app.mock_data.get_nav_path_nxt_thing_type.call(null,nav_path);
var url = growingtree_app.routes.window_location.call(null);
console.log(cljs.core.pr_str.call(null,"api-data set things-vec ",url,nav_path,msg_data));

if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([thing_type], true),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"signup","signup",1961016747),null,new cljs.core.Keyword(null,"login","login",55217519),null], null), null)))){
return growingtree_app.controllers.states.login_state_transition.call(null,target,thing_type,msg_data,state);
} else {
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url-data","url-data",-1539425798),url], null),things_vec),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),things_vec);
}
}));
growingtree_app.controllers.states.login_state_transition = (function login_state_transition(target,thing_type,msg_data,state){
var comm = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
var things_vec = new cljs.core.Keyword(null,"things-vec","things-vec",-1363222375).cljs$core$IFn$_invoke$arity$1(msg_data);
var msg = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-success","login-success",1089283105),new cljs.core.Keyword(null,"login-user","login-user",1935565562)], null);
console.log(cljs.core.pr_str.call(null,"login-state-transition nav-path ",cljs.core.last.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null)))));

cljs.core.async.put_BANG_.call(null,comm,msg);

return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-user","login-user",1935565562)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,things_vec)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all","all",892129742),(0),new cljs.core.Keyword(null,"course","course",1455432948)], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"api-success","api-success",1221200738),(function (target,msg_type,msg_data,state){
var comm = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
var prev_nav_path = growingtree_app.mock_data.get_prev_nav_path.call(null,state);
var prev_thing_type = cljs.core.get_in.call(null,prev_nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(0)], null));
var msg = (function (){var msg_type__$1 = cljs.core.get_in.call(null,prev_nav_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(0)], null));
var msg_type__$2 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"newthing-form","newthing-form",-676457503),msg_type__$1))?growingtree_app.mock_data.all_things_msg_nav_path.call(null,prev_thing_type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pid","pid",1018387698),growingtree_app.utils.get_login_id.call(null,state)], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg_type__$1,prev_nav_path], null));
return msg_type__$2;
})();
console.log(cljs.core.pr_str.call(null,"api-success : re-direct prev nav path msg ",msg));

cljs.core.async.put_BANG_.call(null,comm,msg);

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),null);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"api-error","api-error",1506636439),(function (target,msg_type,msg_data,state){
console.log(cljs.core.pr_str.call(null,"api-error ",msg_type,msg_data));

var comm = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
var nav_path = cljs.core.last.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null)));
var thing_type = cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(0)], null));
var error = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(msg_data);
var error_msg = cljs.core.get_in.call(null,msg_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"status-text","status-text",-1834235478)], null));
var nav_path__$1 = new cljs.core.Keyword(null,"nav-path","nav-path",-444531376).cljs$core$IFn$_invoke$arity$1(msg_data);
console.log(cljs.core.pr_str.call(null,"api-error [:error] ",nav_path__$1,error_msg,msg_data));

if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([thing_type], true),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"signup","signup",1961016747),null,new cljs.core.Keyword(null,"login","login",55217519),null], null), null)))){
cljs.core.async.put_BANG_.call(null,comm,growingtree_app.mock_data.retry_login_msg_nav_path.call(null,error_msg));
} else {
}

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),msg_data);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"api-key-updated","api-key-updated",-1848658586),(function (target,msg_type,api_key,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.Keyword(null,"current-user-email","current-user-email",-1030852599).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"api-key","api-key",1037904031)], null),api_key);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",134481480),(function (target,msg_type,p__23064,state){
var vec__23065 = p__23064;
var activity = cljs.core.nth.call(null,vec__23065,(0),null);
var url = cljs.core.nth.call(null,vec__23065,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"channel-id","channel-id",138191095).cljs$core$IFn$_invoke$arity$1(activity),new cljs.core.Keyword(null,"sfx","sfx",-634589668),new cljs.core.Keyword(null,"source-url","source-url",569467631)], null),url);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"user-menu-toggled","user-menu-toggled",-1800346032),(function (target,msg_type,msg_data,state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"menus","menus",-1377611675),new cljs.core.Keyword(null,"user-menu","user-menu",-395327477),new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"search-form-focused","search-form-focused",-1652397576),(function (target,msg_type,msg_data,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"focused","focused",1851572115)], null),true);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"search-form-blurred","search-form-blurred",1104978531),(function (target,msg_type,msg_data,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"focused","focused",1851572115)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"search-form-updated","search-form-updated",-868859534),(function (target,msg_type,new_value,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"value","value",305978217)], null),new_value);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"user-msg-type-focused","user-msg-type-focused",897271494),(function (target,msg_type,msg_data,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"user-msg-type","user-msg-type",1884615318),new cljs.core.Keyword(null,"focused","focused",1851572115)], null),true);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"user-msg-type-blurred","user-msg-type-blurred",-53788449),(function (target,msg_type,msg_data,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"user-msg-type","user-msg-type",1884615318),new cljs.core.Keyword(null,"focused","focused",1851572115)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"user-msg-type-updated","user-msg-type-updated",-127984657),(function (target,msg_type,msg_data,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"user-msg-type","user-msg-type",1884615318),new cljs.core.Keyword(null,"value","value",305978217)], null),msg_data);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"audio-player-started","audio-player-started",-1739082677),(function (target,msg_type,channel_id,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"playing","playing",70013335));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"audio-player-stopped","audio-player-stopped",170014150),(function (target,msg_type,channel_id,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"stopped","stopped",-1490414640));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"audio-player-muted","audio-player-muted",-131538835),(function (target,msg_type,msg_data,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.Keyword(null,"muted","muted",1275109029)], null),true);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",710141160),(function (target,msg_type,msg_data,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.Keyword(null,"muted","muted",1275109029)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",710141160),(function (target,msg_type,msg_data,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.Keyword(null,"muted","muted",1275109029)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",-983718025),(function (target,msg_type,p__23066,state){
var vec__23067 = p__23066;
var src = cljs.core.nth.call(null,vec__23067,(0),null);
var channel_id = cljs.core.nth.call(null,vec__23067,(1),null);
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"source-url","source-url",569467631)], null),src);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",710141160),(function (target,msg_type,msg_data,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.Keyword(null,"muted","muted",1275109029)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"playlist-entry-queued","playlist-entry-queued",-1071587042),(function (target,msg_type,msg_data,state){
var vec__23068 = msg_data;
var channel_id = cljs.core.nth.call(null,vec__23068,(0),null);
var url = cljs.core.nth.call(null,vec__23068,(1),null);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"playlist","playlist",1952276871)], null),((function (vec__23068,channel_id,url){
return (function (playlist){
return cljs.core.conj.call(null,playlist,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"order","order",-1254677256),(cljs.core.count.call(null,playlist) + (1)),new cljs.core.Keyword(null,"src","src",-1651076051),url], null));
});})(vec__23068,channel_id,url))
);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"playlist-entry-played","playlist-entry-played",1138783655),(function (target,msg_type,p__23069,state){
var vec__23070 = p__23069;
var order = cljs.core.nth.call(null,vec__23070,(0),null);
var channel_id = cljs.core.nth.call(null,vec__23070,(1),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"playing-order","playing-order",-1040974713)], null),order),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),true);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"user-msg-type-submitted","user-msg-type-submitted",1017951497),(function (target,msg_type,msg_data,state){
if(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"user-msg-type","user-msg-type",1884615318),new cljs.core.Keyword(null,"value","value",305978217)], null)))){
return state;
} else {
var content = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"user-msg-type","user-msg-type",1884615318),new cljs.core.Keyword(null,"value","value",305978217)], null));
var user = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.Keyword(null,"current-user-email","current-user-email",-1030852599).cljs$core$IFn$_invoke$arity$1(state)], null));
var channel = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(state)], null));
var activity = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"created_at","created_at",1484050750),(new Date())], null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"user-msg-type","user-msg-type",1884615318),new cljs.core.Keyword(null,"value","value",305978217)], null),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"activities","activities",1654844313)], null),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.sort_by,new cljs.core.Keyword(null,"created_at","created_at",1484050750)),cljs.core.conj),activity),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"activities","activities",1654844313)], null),cljs.core.vec);
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"settings-opened","settings-opened",1153146657),(function (target,msg_type,msg_data,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"menus","menus",-1377611675),new cljs.core.Keyword(null,"user-menu","user-menu",-395327477),new cljs.core.Keyword(null,"open","open",-1763596448)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"help-opened","help-opened",-1936034706),(function (target,msg_type,msg_data,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"menus","menus",-1377611675),new cljs.core.Keyword(null,"user-menu","user-menu",-395327477),new cljs.core.Keyword(null,"open","open",-1763596448)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"about-opened","about-opened",1534685245),(function (target,msg_type,msg_data,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"menus","menus",-1377611675),new cljs.core.Keyword(null,"user-menu","user-menu",-395327477),new cljs.core.Keyword(null,"open","open",-1763596448)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"user-logged-out","user-logged-out",-1569726039),(function (target,msg_type,msg_data,state){
return state;
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"audio-source-loaded","audio-source-loaded",-84261367),(function (target,msg_type,channel_id,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"channel-destroyed","channel-destroyed",-199507832),(function (target,msg_type,channel_id,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id,new cljs.core.Keyword(null,"loading","loading",-737050189)], null),true);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"right-sidebar-toggled","right-sidebar-toggled",925883782),(function (target,msg_type,channel_id,state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"left-sidebar-toggled","left-sidebar-toggled",888056217),(function (target,msg_type,channel_id,state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
}));
growingtree_app.controllers.states.window_drag_event = (function (){var method_table__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4705__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4708__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"growingtree-app.controllers.states","window-drag-event"),((function (method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__,hierarchy__4708__auto__){
return (function (msg_type,msg_data,state){
return msg_type;
});})(method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__,hierarchy__4708__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4708__auto__,method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.controllers.states.window_drag_event,new cljs.core.Keyword(null,"grabbed","grabbed",-1247636222),(function (msg_type,initial_mouse_pos,window_state){
var vec__23071 = initial_mouse_pos;
var mx = cljs.core.nth.call(null,vec__23071,(0),null);
var my = cljs.core.nth.call(null,vec__23071,(1),null);
var vec__23072 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(window_state);
var px = cljs.core.nth.call(null,vec__23072,(0),null);
var py = cljs.core.nth.call(null,vec__23072,(1),null);
var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - px),(my - py)], null);
return cljs.core.assoc.call(null,window_state,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true,new cljs.core.Keyword(null,"offset","offset",296498311),offset);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.window_drag_event,new cljs.core.Keyword(null,"released","released",381037203),(function (msg_type,data,window_state){
return cljs.core.assoc.call(null,window_state,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.window_drag_event,new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),(function (msg_type,mouse_position,window_state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(window_state))){
var vec__23073 = mouse_position;
var mx = cljs.core.nth.call(null,vec__23073,(0),null);
var my = cljs.core.nth.call(null,vec__23073,(1),null);
var vec__23074 = new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(window_state);
var off_x = cljs.core.nth.call(null,vec__23074,(0),null);
var off_y = cljs.core.nth.call(null,vec__23074,(1),null);
var vec__23075 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - off_x),(my - off_y)], null);
var tnx = cljs.core.nth.call(null,vec__23075,(0),null);
var tny = cljs.core.nth.call(null,vec__23075,(1),null);
var min_x = (-150);
var max_x = (document.body.clientWidth - (50));
var min_y = (0);
var max_y = (document.body.clientHeight - (50));
var new_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((min_x > tnx))?min_x:(((tnx > max_x))?max_x:tnx
)),(((min_y > tny))?min_y:(((tny > max_y))?max_y:tny
))], null);
return cljs.core.assoc.call(null,window_state,new cljs.core.Keyword(null,"position","position",-2011731912),new_position);
} else {
return window_state;
}
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"draggable","draggable",1676206163),(function (target,msg_type,p__23077,state){
var vec__23078 = p__23077;
var sub_msg_type = cljs.core.nth.call(null,vec__23078,(0),null);
var map__23079 = cljs.core.nth.call(null,vec__23078,(1),null);
var map__23079__$1 = ((cljs.core.seq_QMARK_.call(null,map__23079))?cljs.core.apply.call(null,cljs.core.hash_map,map__23079):map__23079);
var msg_data = map__23079__$1;
var name = cljs.core.get.call(null,map__23079__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"windows","windows",2068861701),name], null),((function (vec__23078,sub_msg_type,map__23079,map__23079__$1,msg_data,name){
return (function (p1__23076_SHARP_){
return growingtree_app.controllers.states.window_drag_event.call(null,sub_msg_type,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(msg_data),p1__23076_SHARP_);
});})(vec__23078,sub_msg_type,map__23079,map__23079__$1,msg_data,name))
);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"toggle-inspector-key-pressed","toggle-inspector-key-pressed",1257821948),(function (target,msg_type,msg_data,state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"windows","windows",2068861701),new cljs.core.Keyword(null,"window-inspector","window-inspector",889258900),new cljs.core.Keyword(null,"open","open",-1763596448)], null),cljs.core.not);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"inspector-path-updated","inspector-path-updated",-165750316),(function (target,msg_type,path,state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"inspector","inspector",1532863880),new cljs.core.Keyword(null,"path","path",-188191168)], null),path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.states.transition,new cljs.core.Keyword(null,"state-restored","state-restored",450621293),(function (target,msg_type,path,state){
var str_data = localStorage.getItem("growingtree-app-state");
if(cljs.core.seq.call(null,str_data)){
return cljs.core.assoc.call(null,cljs.reader.read_string.call(null,str_data),new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(state));
} else {
return state;
}
}));
growingtree_app.controllers.states.update_navbar_selected = (function update_navbar_selected(state,last_nav_type,cur_nav_type){
var last_nav_type__$1 = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([last_nav_type], true),growingtree_app.mock_data.nav_types);
var cur_nav_type__$1 = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cur_nav_type], true),growingtree_app.mock_data.nav_types);
console.log(cljs.core.pr_str.call(null,"upon transition, update-navbar-selected cur-nav-type ",cur_nav_type__$1," last ",last_nav_type__$1));

var G__23081 = state;
var G__23081__$1 = (cljs.core.truth_(last_nav_type__$1)?cljs.core.assoc_in.call(null,G__23081,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"things","things",1255021880),last_nav_type__$1,new cljs.core.Keyword(null,"selected","selected",574897764)], null),false):G__23081);
var G__23081__$2 = (cljs.core.truth_(cur_nav_type__$1)?cljs.core.assoc_in.call(null,G__23081__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"things","things",1255021880),cur_nav_type__$1,new cljs.core.Keyword(null,"selected","selected",574897764)], null),true):G__23081__$1);
return G__23081__$2;
});

//# sourceMappingURL=states.js.map