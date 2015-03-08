// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.routes');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('secretary.core');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('growingtree_app.history');
goog.require('goog.net.Jsonp');
goog.require('growingtree_app.mock_data');
goog.require('goog.History');
goog.require('goog.events');
goog.require('growingtree_app.utils');
growingtree_app.routes.listen_once_for_app_BANG_ = (function listen_once_for_app_BANG_(app,pred,on_loaded){
var listener_id = cljs.core.keyword.call(null,growingtree_app.utils.uuid.call(null));
var sentinel = ((function (listener_id){
return (function (_,___$1,___$2,new_state){
if(cljs.core.truth_(pred.call(null,new_state))){
cljs.core.remove_watch.call(null,app,listener_id);

return on_loaded.call(null,new_state);
} else {
return null;
}
});})(listener_id))
;
if(cljs.core.truth_(pred.call(null,cljs.core.deref.call(null,app)))){
return on_loaded.call(null,cljs.core.deref.call(null,app));
} else {
return cljs.core.add_watch.call(null,app,listener_id,sentinel);
}
});
growingtree_app.routes.open_to_channel_BANG_ = (function open_to_channel_BANG_(app,controls_ch,channel_id){
console.log("channel route handle open-to-channel ",channel_id);

return growingtree_app.routes.listen_once_for_app_BANG_.call(null,app,(function (p1__21684_SHARP_){
return cljs.core.get_in.call(null,p1__21684_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id], null));
}),(function (){
return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-things","all-things",1825895767),channel_id], null));
}));
});
growingtree_app.routes.thing_nodes_BANG_ = (function thing_nodes_BANG_(app,controls_ch,thing_type){
console.log("thing type thing-nodes ",thing_type);

return growingtree_app.routes.listen_once_for_app_BANG_.call(null,app,(function (p1__21685_SHARP_){
return cljs.core.get_in.call(null,p1__21685_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"things","things",1255021880),thing_type], null));
}),(function (){
return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-things","all-things",1825895767),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[thing_type],null))], null));
}));
});
growingtree_app.routes.set_window_href_BANG_ = (function set_window_href_BANG_(title,path){
return cljs.core.swap_BANG_.call(null,growingtree_app.history.state,growingtree_app.history.push_state_BANG_,"",path);
});
growingtree_app.routes.listen = (function listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});
growingtree_app.routes.window_location = (function window_location(){
var location = window.location.toString();
var url = cljs.core.last.call(null,cljs.core.re_find.call(null,/https?:\/\/.*?\/v\d+\/(.*)/,location));
console.log(cljs.core.pr_str.call(null,"window location ",url));

return url;
});
growingtree_app.routes.onpopstate = (function onpopstate(comm,e){
var url = growingtree_app.routes.window_location.call(null);
return cljs.core.async.put_BANG_.call(null,comm,growingtree_app.mock_data.popstate_msg.call(null,url));
});
growingtree_app.routes.define_routes_BANG_ = (function define_routes_BANG_(app,history_el){
var controls_ch_21764 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
var api_ch_21765 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null));
var action__20545__auto___21766 = ((function (controls_ch_21764,api_ch_21765){
return (function (params__20546__auto__){
if(cljs.core.map_QMARK_.call(null,params__20546__auto__)){
var map__21725 = params__20546__auto__;
var map__21725__$1 = ((cljs.core.seq_QMARK_.call(null,map__21725))?cljs.core.apply.call(null,cljs.core.hash_map,map__21725):map__21725);
var channel_id = cljs.core.get.call(null,map__21725__$1,new cljs.core.Keyword(null,"channel-id","channel-id",138191095));
return growingtree_app.routes.open_to_channel_BANG_.call(null,app,controls_ch_21764,growingtree_app.utils.safe_sel.call(null,channel_id));
} else {
if(cljs.core.vector_QMARK_.call(null,params__20546__auto__)){
var vec__21726 = params__20546__auto__;
var channel_id = cljs.core.nth.call(null,vec__21726,(0),null);
return growingtree_app.routes.open_to_channel_BANG_.call(null,app,controls_ch_21764,growingtree_app.utils.safe_sel.call(null,channel_id));
} else {
return null;
}
}
});})(controls_ch_21764,api_ch_21765))
;
secretary.core.add_route_BANG_.call(null,"/v1/channels/:channel-id",action__20545__auto___21766);

/**
* @param {...*} var_args
*/
growingtree_app.routes.v1_channel_link = ((function (action__20545__auto___21766,controls_ch_21764,api_ch_21765){
return (function() { 
var v1_channel_link__delegate = function (args__20544__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/channels/:channel-id",args__20544__auto__);
};
var v1_channel_link = function (var_args){
var args__20544__auto__ = null;
if (arguments.length > 0) {
var G__21767__i = 0, G__21767__a = new Array(arguments.length -  0);
while (G__21767__i < G__21767__a.length) {G__21767__a[G__21767__i] = arguments[G__21767__i + 0]; ++G__21767__i;}
  args__20544__auto__ = new cljs.core.IndexedSeq(G__21767__a,0);
} 
return v1_channel_link__delegate.call(this,args__20544__auto__);};
v1_channel_link.cljs$lang$maxFixedArity = 0;
v1_channel_link.cljs$lang$applyTo = (function (arglist__21768){
var args__20544__auto__ = cljs.core.seq(arglist__21768);
return v1_channel_link__delegate(args__20544__auto__);
});
v1_channel_link.cljs$core$IFn$_invoke$arity$variadic = v1_channel_link__delegate;
return v1_channel_link;
})()
;})(action__20545__auto___21766,controls_ch_21764,api_ch_21765))
;

var action__20545__auto___21769 = ((function (controls_ch_21764,api_ch_21765){
return (function (params__20546__auto__){
if(cljs.core.map_QMARK_.call(null,params__20546__auto__)){
var map__21727 = params__20546__auto__;
var map__21727__$1 = ((cljs.core.seq_QMARK_.call(null,map__21727))?cljs.core.apply.call(null,cljs.core.hash_map,map__21727):map__21727);
var thing_type = cljs.core.get.call(null,map__21727__$1,new cljs.core.Keyword(null,"thing-type","thing-type",15521235));
return console.log(cljs.core.pr_str.call(null,"matching all things route ",thing_type));
} else {
if(cljs.core.vector_QMARK_.call(null,params__20546__auto__)){
var vec__21728 = params__20546__auto__;
var thing_type = cljs.core.nth.call(null,vec__21728,(0),null);
return console.log(cljs.core.pr_str.call(null,"matching all things route ",thing_type));
} else {
return null;
}
}
});})(controls_ch_21764,api_ch_21765))
;
secretary.core.add_route_BANG_.call(null,"/v1/:thing-type",action__20545__auto___21769);

/**
* @param {...*} var_args
*/
growingtree_app.routes.v1_all_things = ((function (action__20545__auto___21769,controls_ch_21764,api_ch_21765){
return (function() { 
var v1_all_things__delegate = function (args__20544__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/:thing-type",args__20544__auto__);
};
var v1_all_things = function (var_args){
var args__20544__auto__ = null;
if (arguments.length > 0) {
var G__21770__i = 0, G__21770__a = new Array(arguments.length -  0);
while (G__21770__i < G__21770__a.length) {G__21770__a[G__21770__i] = arguments[G__21770__i + 0]; ++G__21770__i;}
  args__20544__auto__ = new cljs.core.IndexedSeq(G__21770__a,0);
} 
return v1_all_things__delegate.call(this,args__20544__auto__);};
v1_all_things.cljs$lang$maxFixedArity = 0;
v1_all_things.cljs$lang$applyTo = (function (arglist__21771){
var args__20544__auto__ = cljs.core.seq(arglist__21771);
return v1_all_things__delegate(args__20544__auto__);
});
v1_all_things.cljs$core$IFn$_invoke$arity$variadic = v1_all_things__delegate;
return v1_all_things;
})()
;})(action__20545__auto___21769,controls_ch_21764,api_ch_21765))
;

var action__20545__auto___21772 = ((function (controls_ch_21764,api_ch_21765){
return (function (params__20546__auto__){
if(cljs.core.map_QMARK_.call(null,params__20546__auto__)){
var map__21729 = params__20546__auto__;
var map__21729__$1 = ((cljs.core.seq_QMARK_.call(null,map__21729))?cljs.core.apply.call(null,cljs.core.hash_map,map__21729):map__21729);
var filtered = cljs.core.get.call(null,map__21729__$1,new cljs.core.Keyword(null,"filtered","filtered",-437499761));
var id = cljs.core.get.call(null,map__21729__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var head = cljs.core.get.call(null,map__21729__$1,new cljs.core.Keyword(null,"head","head",-771383919));
return console.log(cljs.core.pr_str.call(null,"matching filtered things route ",head,id,filtered));
} else {
if(cljs.core.vector_QMARK_.call(null,params__20546__auto__)){
var vec__21730 = params__20546__auto__;
var head = cljs.core.nth.call(null,vec__21730,(0),null);
var id = cljs.core.nth.call(null,vec__21730,(1),null);
var filtered = cljs.core.nth.call(null,vec__21730,(2),null);
return console.log(cljs.core.pr_str.call(null,"matching filtered things route ",head,id,filtered));
} else {
return null;
}
}
});})(controls_ch_21764,api_ch_21765))
;
secretary.core.add_route_BANG_.call(null,"/v1/:head/:id/:filtered",action__20545__auto___21772);

/**
* @param {...*} var_args
*/
growingtree_app.routes.v1_filter_things = ((function (action__20545__auto___21772,controls_ch_21764,api_ch_21765){
return (function() { 
var v1_filter_things__delegate = function (args__20544__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/:head/:id/:filtered",args__20544__auto__);
};
var v1_filter_things = function (var_args){
var args__20544__auto__ = null;
if (arguments.length > 0) {
var G__21773__i = 0, G__21773__a = new Array(arguments.length -  0);
while (G__21773__i < G__21773__a.length) {G__21773__a[G__21773__i] = arguments[G__21773__i + 0]; ++G__21773__i;}
  args__20544__auto__ = new cljs.core.IndexedSeq(G__21773__a,0);
} 
return v1_filter_things__delegate.call(this,args__20544__auto__);};
v1_filter_things.cljs$lang$maxFixedArity = 0;
v1_filter_things.cljs$lang$applyTo = (function (arglist__21774){
var args__20544__auto__ = cljs.core.seq(arglist__21774);
return v1_filter_things__delegate(args__20544__auto__);
});
v1_filter_things.cljs$core$IFn$_invoke$arity$variadic = v1_filter_things__delegate;
return v1_filter_things;
})()
;})(action__20545__auto___21772,controls_ch_21764,api_ch_21765))
;

var history = (new goog.History(false,null,history_el));
var navigation = growingtree_app.routes.listen.call(null,history,goog.history.EventType.POPSTATE);
var G__21731_21775 = history;
G__21731_21775.setEnabled(true);


var c__6704__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6704__auto__,history,navigation){
return (function (){
var f__6705__auto__ = (function (){var switch__6639__auto__ = ((function (c__6704__auto__,history,navigation){
return (function (state_21748){
var state_val_21749 = (state_21748[(1)]);
if((state_val_21749 === (7))){
var inst_21735 = (state_21748[(2)]);
var inst_21736 = inst_21735.token;
var inst_21737 = growingtree_app.history.current_state.call(null);
var inst_21738 = cljs.core.pr_str.call(null,"dispatch goog.history navigation token ",inst_21736," url ",inst_21737);
var inst_21739 = console.log(inst_21738);
var inst_21740 = secretary.core.dispatch_BANG_.call(null,inst_21736);
var state_21748__$1 = (function (){var statearr_21750 = state_21748;
(statearr_21750[(7)] = inst_21739);

(statearr_21750[(8)] = inst_21740);

return statearr_21750;
})();
var statearr_21751_21776 = state_21748__$1;
(statearr_21751_21776[(2)] = null);

(statearr_21751_21776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21749 === (6))){
var inst_21744 = (state_21748[(2)]);
var state_21748__$1 = state_21748;
var statearr_21752_21777 = state_21748__$1;
(statearr_21752_21777[(2)] = inst_21744);

(statearr_21752_21777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21749 === (5))){
var state_21748__$1 = state_21748;
var statearr_21753_21778 = state_21748__$1;
(statearr_21753_21778[(2)] = null);

(statearr_21753_21778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21749 === (4))){
var state_21748__$1 = state_21748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21748__$1,(7),navigation);
} else {
if((state_val_21749 === (3))){
var inst_21746 = (state_21748[(2)]);
var state_21748__$1 = state_21748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21748__$1,inst_21746);
} else {
if((state_val_21749 === (2))){
var state_21748__$1 = state_21748;
var statearr_21754_21779 = state_21748__$1;
(statearr_21754_21779[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21749 === (1))){
var state_21748__$1 = state_21748;
var statearr_21756_21780 = state_21748__$1;
(statearr_21756_21780[(2)] = null);

(statearr_21756_21780[(1)] = (2));


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
});})(c__6704__auto__,history,navigation))
;
return ((function (switch__6639__auto__,c__6704__auto__,history,navigation){
return (function() {
var state_machine__6640__auto__ = null;
var state_machine__6640__auto____0 = (function (){
var statearr_21760 = [null,null,null,null,null,null,null,null,null];
(statearr_21760[(0)] = state_machine__6640__auto__);

(statearr_21760[(1)] = (1));

return statearr_21760;
});
var state_machine__6640__auto____1 = (function (state_21748){
while(true){
var ret_value__6641__auto__ = (function (){try{while(true){
var result__6642__auto__ = switch__6639__auto__.call(null,state_21748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6642__auto__;
}
break;
}
}catch (e21761){if((e21761 instanceof Object)){
var ex__6643__auto__ = e21761;
var statearr_21762_21781 = state_21748;
(statearr_21762_21781[(5)] = ex__6643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21782 = state_21748;
state_21748 = G__21782;
continue;
} else {
return ret_value__6641__auto__;
}
break;
}
});
state_machine__6640__auto__ = function(state_21748){
switch(arguments.length){
case 0:
return state_machine__6640__auto____0.call(this);
case 1:
return state_machine__6640__auto____1.call(this,state_21748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6640__auto____0;
state_machine__6640__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6640__auto____1;
return state_machine__6640__auto__;
})()
;})(switch__6639__auto__,c__6704__auto__,history,navigation))
})();
var state__6706__auto__ = (function (){var statearr_21763 = f__6705__auto__.call(null);
(statearr_21763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6704__auto__);

return statearr_21763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6706__auto__);
});})(c__6704__auto__,history,navigation))
);

return c__6704__auto__;
});
growingtree_app.routes.v1_all_things_route = (function v1_all_things_route(nav_path){
return growingtree_app.routes.v1_all_things.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thing-type","thing-type",15521235),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(2)], null)))], null));
});
growingtree_app.routes.v1_filter_things_route = (function v1_filter_things_route(nav_path){
return growingtree_app.routes.v1_filter_things.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"head","head",-771383919),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(0)], null))),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(1)], null)),new cljs.core.Keyword(null,"filtered","filtered",-437499761),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(2)], null)))], null));
});

//# sourceMappingURL=routes.js.map