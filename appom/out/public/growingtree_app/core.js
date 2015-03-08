// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.core');
goog.require('cljs.core');
goog.require('growingtree_app.controllers.api');
goog.require('growingtree_app.controllers.requester');
goog.require('om.dom');
goog.require('growingtree_app.components.app');
goog.require('cljs.core.async');
goog.require('growingtree_app.routes');
goog.require('dommy.core');
goog.require('growingtree_app.controllers.post_api');
goog.require('growingtree_app.ui');
goog.require('growingtree_app.api.kandan');
goog.require('growingtree_app.api.mock');
goog.require('growingtree_app.controllers.states');
goog.require('growingtree_app.components.login');
goog.require('growingtree_app.mock_data');
goog.require('growingtree_app.datetime');
goog.require('growingtree_app.api.communicator');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
growingtree_app.core.controls_ch = cljs.core.async.chan.call(null);
growingtree_app.core.api_ch = cljs.core.async.chan.call(null);
growingtree_app.core.stats_ch = cljs.core.async.chan.call(null);
growingtree_app.core.app_state = cljs.core.atom.call(null,growingtree_app.mock_data.initial_state.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controls","controls",1340701452),growingtree_app.core.controls_ch,new cljs.core.Keyword(null,"api","api",-899839580),growingtree_app.core.api_ch,new cljs.core.Keyword(null,"stats","stats",-85643011),growingtree_app.core.stats_ch], null)));
growingtree_app.core.history = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
growingtree_app.core.filtered_message_QMARK_ = (function filtered_message_QMARK_(message){
return cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"credit-card-updated","credit-card-updated",-917292515),null], null), null),message);
});
growingtree_app.core.update_history_BANG_ = (function update_history_BANG_(history,channel,message){
var m = cljs.core.first.call(null,message);
var record = (cljs.core.truth_(growingtree_app.core.filtered_message_QMARK_.call(null,m))?m:message);
return cljs.core.swap_BANG_.call(null,history,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [channel,record], null));
});
growingtree_app.core.detach_login_show_app = (function detach_login_show_app(){
var login_el = document.getElementById("login");
growingtree_app.ui.hide_div.call(null,"#login");

growingtree_app.ui.show_div.call(null,"#app");

return om.core.detach_root.call(null,login_el);
});
growingtree_app.core.process_control_event = (function (){var method_table__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4705__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4706__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4708__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"growingtree-app.core","process-control-event"),((function (method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__,hierarchy__4708__auto__){
return (function (app_el,state,msg_type,msg_data){
return msg_type;
});})(method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__,hierarchy__4708__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4708__auto__,method_table__4704__auto__,prefer_table__4705__auto__,method_cache__4706__auto__,cached_hierarchy__4707__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.core.process_control_event,new cljs.core.Keyword(null,"login-success","login-success",1089283105),(function (el,state,msg_type,msg_data){
return growingtree_app.core.detach_login_show_app.call(null);
}));
cljs.core._add_method.call(null,growingtree_app.core.process_control_event,new cljs.core.Keyword(null,"login-error","login-error",-1290265439),(function (el,state,msg_type,msg_data){
console.log(cljs.core.pr_str.call(null,"login error ",msg_data));

return growingtree_app.ui.set_text.call(null,"#login-error",msg_data);
}));
cljs.core._add_method.call(null,growingtree_app.core.process_control_event,new cljs.core.Keyword(null,"default","default",-1987822328),(function (el,state,msg_type,msg_data){
var previous_state = cljs.core.deref.call(null,state);
cljs.core.swap_BANG_.call(null,state,cljs.core.partial.call(null,growingtree_app.controllers.states.transition,el,msg_type,msg_data));

return growingtree_app.controllers.requester.request.call(null,el,msg_type,msg_data,previous_state,cljs.core.deref.call(null,state));
}));
cljs.core._add_method.call(null,growingtree_app.core.process_control_event,new cljs.core.Keyword(null,"popstate","popstate",942216014),(function (el,state,msg_type,msg_data){
var previous_state = cljs.core.deref.call(null,state);
return cljs.core.swap_BANG_.call(null,state,cljs.core.partial.call(null,growingtree_app.controllers.states.transition,el,msg_type,msg_data));
}));
growingtree_app.core.process_api_event = (function process_api_event(el,state,msg_type,msg_data){
var previous_state = cljs.core.deref.call(null,state);
return cljs.core.swap_BANG_.call(null,state,cljs.core.partial.call(null,growingtree_app.controllers.states.transition,el,msg_type,msg_data));
});
growingtree_app.core.main = (function main(state){
var comms = new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var history = (function (){var or__3807__auto__ = growingtree_app.core.history;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
})();
var app_el = document.getElementById("app");
var login_el = document.getElementById("login");
var hist_el = document.getElementById("history-container");
growingtree_app.routes.define_routes_BANG_.call(null,state,hist_el);

dommy.core.listen_BANG_.call(null,window,new cljs.core.Keyword(null,"popstate","popstate",942216014),cljs.core.partial.call(null,growingtree_app.routes.onpopstate,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms)));

om.core.root.call(null,growingtree_app.components.login.login,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),login_el,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",460172477),comms], null)], null));

om.core.root.call(null,growingtree_app.components.app.app,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),app_el,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",460172477),comms], null)], null));

var c__6704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6704__auto__,comms,history,app_el,login_el,hist_el){
return (function (){
var f__6705__auto__ = (function (){var switch__6639__auto__ = ((function (c__6704__auto__,comms,history,app_el,login_el,hist_el){
return (function (state_22329){
var state_val_22330 = (state_22329[(1)]);
if((state_val_22330 === (7))){
var inst_22286 = (state_22329[(7)]);
var inst_22277 = (state_22329[(8)]);
var inst_22284 = (state_22329[(9)]);
var inst_22284__$1 = (state_22329[(2)]);
var inst_22285 = cljs.core.nth.call(null,inst_22284__$1,(0),null);
var inst_22286__$1 = cljs.core.nth.call(null,inst_22284__$1,(1),null);
var inst_22287 = cljs.core._EQ_.call(null,inst_22286__$1,inst_22277);
var state_22329__$1 = (function (){var statearr_22331 = state_22329;
(statearr_22331[(7)] = inst_22286__$1);

(statearr_22331[(10)] = inst_22285);

(statearr_22331[(9)] = inst_22284__$1);

return statearr_22331;
})();
if(inst_22287){
var statearr_22332_22365 = state_22329__$1;
(statearr_22332_22365[(1)] = (8));

} else {
var statearr_22333_22366 = state_22329__$1;
(statearr_22333_22366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (1))){
var state_22329__$1 = state_22329;
var statearr_22334_22367 = state_22329__$1;
(statearr_22334_22367[(2)] = null);

(statearr_22334_22367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (4))){
var inst_22279 = (state_22329[(11)]);
var inst_22277 = (state_22329[(8)]);
var inst_22278 = (state_22329[(12)]);
var inst_22277__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);
var inst_22278__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);
var inst_22279__$1 = cljs.core.async.timeout.call(null,(30000));
var inst_22280 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22281 = [inst_22277__$1,inst_22278__$1,inst_22279__$1];
var inst_22282 = (new cljs.core.PersistentVector(null,3,(5),inst_22280,inst_22281,null));
var state_22329__$1 = (function (){var statearr_22335 = state_22329;
(statearr_22335[(11)] = inst_22279__$1);

(statearr_22335[(8)] = inst_22277__$1);

(statearr_22335[(12)] = inst_22278__$1);

return statearr_22335;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22329__$1,(7),inst_22282);
} else {
if((state_val_22330 === (15))){
var inst_22286 = (state_22329[(7)]);
var inst_22311 = cljs.core._EQ_.call(null,inst_22286,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_22329__$1 = state_22329;
if(inst_22311){
var statearr_22336_22368 = state_22329__$1;
(statearr_22336_22368[(1)] = (17));

} else {
var statearr_22337_22369 = state_22329__$1;
(statearr_22337_22369[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (13))){
var inst_22319 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
var statearr_22338_22370 = state_22329__$1;
(statearr_22338_22370[(2)] = inst_22319);

(statearr_22338_22370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (6))){
var inst_22325 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
var statearr_22339_22371 = state_22329__$1;
(statearr_22339_22371[(2)] = inst_22325);

(statearr_22339_22371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (17))){
var inst_22285 = (state_22329[(10)]);
var state_22329__$1 = state_22329;
var statearr_22340_22372 = state_22329__$1;
(statearr_22340_22372[(2)] = inst_22285);

(statearr_22340_22372[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (3))){
var inst_22327 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22329__$1,inst_22327);
} else {
if((state_val_22330 === (12))){
var inst_22286 = (state_22329[(7)]);
var inst_22279 = (state_22329[(11)]);
var inst_22305 = cljs.core._EQ_.call(null,inst_22286,inst_22279);
var state_22329__$1 = state_22329;
if(inst_22305){
var statearr_22341_22373 = state_22329__$1;
(statearr_22341_22373[(1)] = (14));

} else {
var statearr_22342_22374 = state_22329__$1;
(statearr_22342_22374[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (2))){
var state_22329__$1 = state_22329;
var statearr_22343_22375 = state_22329__$1;
(statearr_22343_22375[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (19))){
var inst_22315 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
var statearr_22345_22376 = state_22329__$1;
(statearr_22345_22376[(2)] = inst_22315);

(statearr_22345_22376[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (11))){
var inst_22284 = (state_22329[(9)]);
var inst_22299 = cljs.core.nth.call(null,inst_22284,(0),null);
var inst_22300 = cljs.core.deref.call(null,state);
var inst_22301 = cljs.core.first.call(null,inst_22299);
var inst_22302 = cljs.core.last.call(null,inst_22299);
var inst_22303 = growingtree_app.core.process_api_event.call(null,app_el,state,inst_22301,inst_22302);
var state_22329__$1 = (function (){var statearr_22346 = state_22329;
(statearr_22346[(13)] = inst_22300);

return statearr_22346;
})();
var statearr_22347_22377 = state_22329__$1;
(statearr_22347_22377[(2)] = inst_22303);

(statearr_22347_22377[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (9))){
var inst_22286 = (state_22329[(7)]);
var inst_22278 = (state_22329[(12)]);
var inst_22296 = cljs.core._EQ_.call(null,inst_22286,inst_22278);
var state_22329__$1 = state_22329;
if(inst_22296){
var statearr_22348_22378 = state_22329__$1;
(statearr_22348_22378[(1)] = (11));

} else {
var statearr_22349_22379 = state_22329__$1;
(statearr_22349_22379[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (5))){
var state_22329__$1 = state_22329;
var statearr_22350_22380 = state_22329__$1;
(statearr_22350_22380[(2)] = null);

(statearr_22350_22380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (14))){
var inst_22307 = cljs.core.deref.call(null,history);
var inst_22308 = cljs.core.pr_str.call(null,inst_22307);
var inst_22309 = growingtree_app.utils.mprint.call(null,inst_22308);
var state_22329__$1 = state_22329;
var statearr_22351_22381 = state_22329__$1;
(statearr_22351_22381[(2)] = inst_22309);

(statearr_22351_22381[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (16))){
var inst_22317 = (state_22329[(2)]);
var state_22329__$1 = state_22329;
var statearr_22352_22382 = state_22329__$1;
(statearr_22352_22382[(2)] = inst_22317);

(statearr_22352_22382[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (10))){
var inst_22321 = (state_22329[(2)]);
var state_22329__$1 = (function (){var statearr_22353 = state_22329;
(statearr_22353[(14)] = inst_22321);

return statearr_22353;
})();
var statearr_22354_22383 = state_22329__$1;
(statearr_22354_22383[(2)] = null);

(statearr_22354_22383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (18))){
var state_22329__$1 = state_22329;
var statearr_22355_22384 = state_22329__$1;
(statearr_22355_22384[(2)] = null);

(statearr_22355_22384[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22330 === (8))){
var inst_22284 = (state_22329[(9)]);
var inst_22290 = cljs.core.nth.call(null,inst_22284,(0),null);
var inst_22291 = cljs.core.deref.call(null,state);
var inst_22292 = cljs.core.first.call(null,inst_22290);
var inst_22293 = cljs.core.last.call(null,inst_22290);
var inst_22294 = growingtree_app.core.process_control_event.call(null,app_el,state,inst_22292,inst_22293);
var state_22329__$1 = (function (){var statearr_22356 = state_22329;
(statearr_22356[(15)] = inst_22291);

return statearr_22356;
})();
var statearr_22357_22385 = state_22329__$1;
(statearr_22357_22385[(2)] = inst_22294);

(statearr_22357_22385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6704__auto__,comms,history,app_el,login_el,hist_el))
;
return ((function (switch__6639__auto__,c__6704__auto__,comms,history,app_el,login_el,hist_el){
return (function() {
var state_machine__6640__auto__ = null;
var state_machine__6640__auto____0 = (function (){
var statearr_22361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22361[(0)] = state_machine__6640__auto__);

(statearr_22361[(1)] = (1));

return statearr_22361;
});
var state_machine__6640__auto____1 = (function (state_22329){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_22329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e22362){if((e22362 instanceof Object)){
var ex__6643__auto__ = e22362;
var statearr_22363_22386 = state_22329;
(statearr_22363_22386[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22387 = state_22329;
state_22329 = G__22387;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
state_machine__6640__auto__ = function(state_22329){
switch(arguments.length){
case 0:
return state_machine__6640__auto____0.call(this);
case 1:
return state_machine__6640__auto____1.call(this,state_22329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6640__auto____0;
state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6640__auto____1;
return state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6704__auto__,comms,history,app_el,login_el,hist_el))
})();
var state__6706__auto__ = (function (){var statearr_22364 = f__6705__auto__.call(null);
(statearr_22364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6704__auto__);

return statearr_22364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6706__auto__);
});})(c__6704__auto__,comms,history,app_el,login_el,hist_el))
);

return c__6704__auto__;
});
growingtree_app.core.init_state_BANG_ = (function init_state_BANG_(){
var comms = new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,growingtree_app.core.app_state));
growingtree_app.core.main.call(null,growingtree_app.core.app_state);

if(cljs.core.truth_(new cljs.core.Keyword(null,"restore-state?","restore-state?",-1143283431).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map))){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-restored","state-restored",450621293)], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"kandan-client?","kandan-client?",998337099).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map))){
var api_key = new cljs.core.Keyword(null,"kandan-api-key","kandan-api-key",1285411267).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);
var kandan_client = growingtree_app.api.kandan.make_client.call(null,api_key,"http://localhost:3000/remote/faye");
var channels = new cljs.core.Keyword(null,"kandan-channels","kandan-channels",-1827680736).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-key-updated","api-key-updated",-1848658586),api_key], null));

var seq__22392 = cljs.core.seq.call(null,channels);
var chunk__22393 = null;
var count__22394 = (0);
var i__22395 = (0);
while(true){
if((i__22395 < count__22394)){
var channel = cljs.core._nth.call(null,chunk__22393,i__22395);
growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));

var G__22396 = seq__22392;
var G__22397 = chunk__22393;
var G__22398 = count__22394;
var G__22399 = (i__22395 + (1));
seq__22392 = G__22396;
chunk__22393 = G__22397;
count__22394 = G__22398;
i__22395 = G__22399;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22392);
if(temp__4126__auto__){
var seq__22392__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22392__$1)){
var c__4594__auto__ = cljs.core.chunk_first.call(null,seq__22392__$1);
var G__22400 = cljs.core.chunk_rest.call(null,seq__22392__$1);
var G__22401 = c__4594__auto__;
var G__22402 = cljs.core.count.call(null,c__4594__auto__);
var G__22403 = (0);
seq__22392 = G__22400;
chunk__22393 = G__22401;
count__22394 = G__22402;
i__22395 = G__22403;
continue;
} else {
var channel = cljs.core.first.call(null,seq__22392__$1);
growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));

var G__22404 = cljs.core.next.call(null,seq__22392__$1);
var G__22405 = null;
var G__22406 = (0);
var G__22407 = (0);
seq__22392 = G__22404;
chunk__22393 = G__22405;
count__22394 = G__22406;
i__22395 = G__22407;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
window.onload = growingtree_app.core.init_state_BANG_;
growingtree_app.core.send_async_message = (function send_async_message(ch_name,message,data){
return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,growingtree_app.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),cljs.core.keyword.call(null,ch_name)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,message),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null));
});
goog.exportSymbol('growingtree_app.core.send_async_message', growingtree_app.core.send_async_message);
growingtree_app.core.remove_channel_BANG_ = (function remove_channel_BANG_(channel_id){
return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,growingtree_app.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",-727239593),channel_id], null));
});
goog.exportSymbol('growingtree_app.core.remove_channel_BANG_', growingtree_app.core.remove_channel_BANG_);

//# sourceMappingURL=core.js.map