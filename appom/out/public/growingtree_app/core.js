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

var c__6715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto__,comms,history,app_el,login_el,hist_el){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto__,comms,history,app_el,login_el,hist_el){
return (function (state_23240){
var state_val_23241 = (state_23240[(1)]);
if((state_val_23241 === (7))){
var inst_23195 = (state_23240[(7)]);
var inst_23197 = (state_23240[(8)]);
var inst_23188 = (state_23240[(9)]);
var inst_23195__$1 = (state_23240[(2)]);
var inst_23196 = cljs.core.nth.call(null,inst_23195__$1,(0),null);
var inst_23197__$1 = cljs.core.nth.call(null,inst_23195__$1,(1),null);
var inst_23198 = cljs.core._EQ_.call(null,inst_23197__$1,inst_23188);
var state_23240__$1 = (function (){var statearr_23242 = state_23240;
(statearr_23242[(7)] = inst_23195__$1);

(statearr_23242[(8)] = inst_23197__$1);

(statearr_23242[(10)] = inst_23196);

return statearr_23242;
})();
if(inst_23198){
var statearr_23243_23276 = state_23240__$1;
(statearr_23243_23276[(1)] = (8));

} else {
var statearr_23244_23277 = state_23240__$1;
(statearr_23244_23277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (1))){
var state_23240__$1 = state_23240;
var statearr_23245_23278 = state_23240__$1;
(statearr_23245_23278[(2)] = null);

(statearr_23245_23278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (4))){
var inst_23189 = (state_23240[(11)]);
var inst_23190 = (state_23240[(12)]);
var inst_23188 = (state_23240[(9)]);
var inst_23188__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);
var inst_23189__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);
var inst_23190__$1 = cljs.core.async.timeout.call(null,(30000));
var inst_23191 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23192 = [inst_23188__$1,inst_23189__$1,inst_23190__$1];
var inst_23193 = (new cljs.core.PersistentVector(null,3,(5),inst_23191,inst_23192,null));
var state_23240__$1 = (function (){var statearr_23246 = state_23240;
(statearr_23246[(11)] = inst_23189__$1);

(statearr_23246[(12)] = inst_23190__$1);

(statearr_23246[(9)] = inst_23188__$1);

return statearr_23246;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23240__$1,(7),inst_23193);
} else {
if((state_val_23241 === (15))){
var inst_23197 = (state_23240[(8)]);
var inst_23222 = cljs.core._EQ_.call(null,inst_23197,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_23240__$1 = state_23240;
if(inst_23222){
var statearr_23247_23279 = state_23240__$1;
(statearr_23247_23279[(1)] = (17));

} else {
var statearr_23248_23280 = state_23240__$1;
(statearr_23248_23280[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (13))){
var inst_23230 = (state_23240[(2)]);
var state_23240__$1 = state_23240;
var statearr_23249_23281 = state_23240__$1;
(statearr_23249_23281[(2)] = inst_23230);

(statearr_23249_23281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (6))){
var inst_23236 = (state_23240[(2)]);
var state_23240__$1 = state_23240;
var statearr_23250_23282 = state_23240__$1;
(statearr_23250_23282[(2)] = inst_23236);

(statearr_23250_23282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (17))){
var inst_23196 = (state_23240[(10)]);
var state_23240__$1 = state_23240;
var statearr_23251_23283 = state_23240__$1;
(statearr_23251_23283[(2)] = inst_23196);

(statearr_23251_23283[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (3))){
var inst_23238 = (state_23240[(2)]);
var state_23240__$1 = state_23240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23240__$1,inst_23238);
} else {
if((state_val_23241 === (12))){
var inst_23197 = (state_23240[(8)]);
var inst_23190 = (state_23240[(12)]);
var inst_23216 = cljs.core._EQ_.call(null,inst_23197,inst_23190);
var state_23240__$1 = state_23240;
if(inst_23216){
var statearr_23252_23284 = state_23240__$1;
(statearr_23252_23284[(1)] = (14));

} else {
var statearr_23253_23285 = state_23240__$1;
(statearr_23253_23285[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (2))){
var state_23240__$1 = state_23240;
var statearr_23254_23286 = state_23240__$1;
(statearr_23254_23286[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (19))){
var inst_23226 = (state_23240[(2)]);
var state_23240__$1 = state_23240;
var statearr_23256_23287 = state_23240__$1;
(statearr_23256_23287[(2)] = inst_23226);

(statearr_23256_23287[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (11))){
var inst_23195 = (state_23240[(7)]);
var inst_23210 = cljs.core.nth.call(null,inst_23195,(0),null);
var inst_23211 = cljs.core.deref.call(null,state);
var inst_23212 = cljs.core.first.call(null,inst_23210);
var inst_23213 = cljs.core.last.call(null,inst_23210);
var inst_23214 = growingtree_app.core.process_api_event.call(null,app_el,state,inst_23212,inst_23213);
var state_23240__$1 = (function (){var statearr_23257 = state_23240;
(statearr_23257[(13)] = inst_23211);

return statearr_23257;
})();
var statearr_23258_23288 = state_23240__$1;
(statearr_23258_23288[(2)] = inst_23214);

(statearr_23258_23288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (9))){
var inst_23189 = (state_23240[(11)]);
var inst_23197 = (state_23240[(8)]);
var inst_23207 = cljs.core._EQ_.call(null,inst_23197,inst_23189);
var state_23240__$1 = state_23240;
if(inst_23207){
var statearr_23259_23289 = state_23240__$1;
(statearr_23259_23289[(1)] = (11));

} else {
var statearr_23260_23290 = state_23240__$1;
(statearr_23260_23290[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (5))){
var state_23240__$1 = state_23240;
var statearr_23261_23291 = state_23240__$1;
(statearr_23261_23291[(2)] = null);

(statearr_23261_23291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (14))){
var inst_23218 = cljs.core.deref.call(null,history);
var inst_23219 = cljs.core.pr_str.call(null,inst_23218);
var inst_23220 = growingtree_app.utils.mprint.call(null,inst_23219);
var state_23240__$1 = state_23240;
var statearr_23262_23292 = state_23240__$1;
(statearr_23262_23292[(2)] = inst_23220);

(statearr_23262_23292[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (16))){
var inst_23228 = (state_23240[(2)]);
var state_23240__$1 = state_23240;
var statearr_23263_23293 = state_23240__$1;
(statearr_23263_23293[(2)] = inst_23228);

(statearr_23263_23293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (10))){
var inst_23232 = (state_23240[(2)]);
var state_23240__$1 = (function (){var statearr_23264 = state_23240;
(statearr_23264[(14)] = inst_23232);

return statearr_23264;
})();
var statearr_23265_23294 = state_23240__$1;
(statearr_23265_23294[(2)] = null);

(statearr_23265_23294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (18))){
var state_23240__$1 = state_23240;
var statearr_23266_23295 = state_23240__$1;
(statearr_23266_23295[(2)] = null);

(statearr_23266_23295[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23241 === (8))){
var inst_23195 = (state_23240[(7)]);
var inst_23201 = cljs.core.nth.call(null,inst_23195,(0),null);
var inst_23202 = cljs.core.deref.call(null,state);
var inst_23203 = cljs.core.first.call(null,inst_23201);
var inst_23204 = cljs.core.last.call(null,inst_23201);
var inst_23205 = growingtree_app.core.process_control_event.call(null,app_el,state,inst_23203,inst_23204);
var state_23240__$1 = (function (){var statearr_23267 = state_23240;
(statearr_23267[(15)] = inst_23202);

return statearr_23267;
})();
var statearr_23268_23296 = state_23240__$1;
(statearr_23268_23296[(2)] = inst_23205);

(statearr_23268_23296[(1)] = (10));


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
});})(c__6715__auto__,comms,history,app_el,login_el,hist_el))
;
return ((function (switch__6659__auto__,c__6715__auto__,comms,history,app_el,login_el,hist_el){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_23272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23272[(0)] = state_machine__6660__auto__);

(statearr_23272[(1)] = (1));

return statearr_23272;
});
var state_machine__6660__auto____1 = (function (state_23240){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_23240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e23273){if((e23273 instanceof Object)){
var ex__6663__auto__ = e23273;
var statearr_23274_23297 = state_23240;
(statearr_23274_23297[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23298 = state_23240;
state_23240 = G__23298;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_23240){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_23240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto__,comms,history,app_el,login_el,hist_el))
})();
var state__6717__auto__ = (function (){var statearr_23275 = f__6716__auto__.call(null);
(statearr_23275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto__);

return statearr_23275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto__,comms,history,app_el,login_el,hist_el))
);

return c__6715__auto__;
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

var seq__23303 = cljs.core.seq.call(null,channels);
var chunk__23304 = null;
var count__23305 = (0);
var i__23306 = (0);
while(true){
if((i__23306 < count__23305)){
var channel = cljs.core._nth.call(null,chunk__23304,i__23306);
growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));

var G__23307 = seq__23303;
var G__23308 = chunk__23304;
var G__23309 = count__23305;
var G__23310 = (i__23306 + (1));
seq__23303 = G__23307;
chunk__23304 = G__23308;
count__23305 = G__23309;
i__23306 = G__23310;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__23303);
if(temp__4406__auto__){
var seq__23303__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23303__$1)){
var c__4594__auto__ = cljs.core.chunk_first.call(null,seq__23303__$1);
var G__23311 = cljs.core.chunk_rest.call(null,seq__23303__$1);
var G__23312 = c__4594__auto__;
var G__23313 = cljs.core.count.call(null,c__4594__auto__);
var G__23314 = (0);
seq__23303 = G__23311;
chunk__23304 = G__23312;
count__23305 = G__23313;
i__23306 = G__23314;
continue;
} else {
var channel = cljs.core.first.call(null,seq__23303__$1);
growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,[cljs.core.str("/channels/"),cljs.core.str(channel)].join(''),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));

var G__23315 = cljs.core.next.call(null,seq__23303__$1);
var G__23316 = null;
var G__23317 = (0);
var G__23318 = (0);
seq__23303 = G__23315;
chunk__23304 = G__23316;
count__23305 = G__23317;
i__23306 = G__23318;
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