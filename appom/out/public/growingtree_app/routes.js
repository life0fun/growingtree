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

return growingtree_app.routes.listen_once_for_app_BANG_.call(null,app,(function (p1__23361_SHARP_){
return cljs.core.get_in.call(null,p1__23361_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id], null));
}),(function (){
return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-things","all-things",1825895767),channel_id], null));
}));
});
growingtree_app.routes.thing_nodes_BANG_ = (function thing_nodes_BANG_(app,controls_ch,thing_type){
console.log("thing type thing-nodes ",thing_type);

return growingtree_app.routes.listen_once_for_app_BANG_.call(null,app,(function (p1__23362_SHARP_){
return cljs.core.get_in.call(null,p1__23362_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"things","things",1255021880),thing_type], null));
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
var controls_ch_23441 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));
var api_ch_23442 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null));
var action__21456__auto___23443 = ((function (controls_ch_23441,api_ch_23442){
return (function (params__21457__auto__){
if(cljs.core.map_QMARK_.call(null,params__21457__auto__)){
var map__23402 = params__21457__auto__;
var map__23402__$1 = ((cljs.core.seq_QMARK_.call(null,map__23402))?cljs.core.apply.call(null,cljs.core.hash_map,map__23402):map__23402);
var channel_id = cljs.core.get.call(null,map__23402__$1,new cljs.core.Keyword(null,"channel-id","channel-id",138191095));
return growingtree_app.routes.open_to_channel_BANG_.call(null,app,controls_ch_23441,growingtree_app.utils.safe_sel.call(null,channel_id));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21457__auto__)){
var vec__23403 = params__21457__auto__;
var channel_id = cljs.core.nth.call(null,vec__23403,(0),null);
return growingtree_app.routes.open_to_channel_BANG_.call(null,app,controls_ch_23441,growingtree_app.utils.safe_sel.call(null,channel_id));
} else {
return null;
}
}
});})(controls_ch_23441,api_ch_23442))
;
secretary.core.add_route_BANG_.call(null,"/v1/channels/:channel-id",action__21456__auto___23443);

/**
* @param {...*} var_args
*/
growingtree_app.routes.v1_channel_link = ((function (action__21456__auto___23443,controls_ch_23441,api_ch_23442){
return (function() { 
var v1_channel_link__delegate = function (args__21455__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/channels/:channel-id",args__21455__auto__);
};
var v1_channel_link = function (var_args){
var args__21455__auto__ = null;
if (arguments.length > 0) {
var G__23444__i = 0, G__23444__a = new Array(arguments.length -  0);
while (G__23444__i < G__23444__a.length) {G__23444__a[G__23444__i] = arguments[G__23444__i + 0]; ++G__23444__i;}
  args__21455__auto__ = new cljs.core.IndexedSeq(G__23444__a,0);
} 
return v1_channel_link__delegate.call(this,args__21455__auto__);};
v1_channel_link.cljs$lang$maxFixedArity = 0;
v1_channel_link.cljs$lang$applyTo = (function (arglist__23445){
var args__21455__auto__ = cljs.core.seq(arglist__23445);
return v1_channel_link__delegate(args__21455__auto__);
});
v1_channel_link.cljs$core$IFn$_invoke$arity$variadic = v1_channel_link__delegate;
return v1_channel_link;
})()
;})(action__21456__auto___23443,controls_ch_23441,api_ch_23442))
;

var action__21456__auto___23446 = ((function (controls_ch_23441,api_ch_23442){
return (function (params__21457__auto__){
if(cljs.core.map_QMARK_.call(null,params__21457__auto__)){
var map__23404 = params__21457__auto__;
var map__23404__$1 = ((cljs.core.seq_QMARK_.call(null,map__23404))?cljs.core.apply.call(null,cljs.core.hash_map,map__23404):map__23404);
var thing_type = cljs.core.get.call(null,map__23404__$1,new cljs.core.Keyword(null,"thing-type","thing-type",15521235));
return console.log(cljs.core.pr_str.call(null,"matching all things route ",thing_type));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21457__auto__)){
var vec__23405 = params__21457__auto__;
var thing_type = cljs.core.nth.call(null,vec__23405,(0),null);
return console.log(cljs.core.pr_str.call(null,"matching all things route ",thing_type));
} else {
return null;
}
}
});})(controls_ch_23441,api_ch_23442))
;
secretary.core.add_route_BANG_.call(null,"/v1/:thing-type",action__21456__auto___23446);

/**
* @param {...*} var_args
*/
growingtree_app.routes.v1_all_things = ((function (action__21456__auto___23446,controls_ch_23441,api_ch_23442){
return (function() { 
var v1_all_things__delegate = function (args__21455__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/:thing-type",args__21455__auto__);
};
var v1_all_things = function (var_args){
var args__21455__auto__ = null;
if (arguments.length > 0) {
var G__23447__i = 0, G__23447__a = new Array(arguments.length -  0);
while (G__23447__i < G__23447__a.length) {G__23447__a[G__23447__i] = arguments[G__23447__i + 0]; ++G__23447__i;}
  args__21455__auto__ = new cljs.core.IndexedSeq(G__23447__a,0);
} 
return v1_all_things__delegate.call(this,args__21455__auto__);};
v1_all_things.cljs$lang$maxFixedArity = 0;
v1_all_things.cljs$lang$applyTo = (function (arglist__23448){
var args__21455__auto__ = cljs.core.seq(arglist__23448);
return v1_all_things__delegate(args__21455__auto__);
});
v1_all_things.cljs$core$IFn$_invoke$arity$variadic = v1_all_things__delegate;
return v1_all_things;
})()
;})(action__21456__auto___23446,controls_ch_23441,api_ch_23442))
;

var action__21456__auto___23449 = ((function (controls_ch_23441,api_ch_23442){
return (function (params__21457__auto__){
if(cljs.core.map_QMARK_.call(null,params__21457__auto__)){
var map__23406 = params__21457__auto__;
var map__23406__$1 = ((cljs.core.seq_QMARK_.call(null,map__23406))?cljs.core.apply.call(null,cljs.core.hash_map,map__23406):map__23406);
var filtered = cljs.core.get.call(null,map__23406__$1,new cljs.core.Keyword(null,"filtered","filtered",-437499761));
var id = cljs.core.get.call(null,map__23406__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var head = cljs.core.get.call(null,map__23406__$1,new cljs.core.Keyword(null,"head","head",-771383919));
return console.log(cljs.core.pr_str.call(null,"matching filtered things route ",head,id,filtered));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21457__auto__)){
var vec__23407 = params__21457__auto__;
var head = cljs.core.nth.call(null,vec__23407,(0),null);
var id = cljs.core.nth.call(null,vec__23407,(1),null);
var filtered = cljs.core.nth.call(null,vec__23407,(2),null);
return console.log(cljs.core.pr_str.call(null,"matching filtered things route ",head,id,filtered));
} else {
return null;
}
}
});})(controls_ch_23441,api_ch_23442))
;
secretary.core.add_route_BANG_.call(null,"/v1/:head/:id/:filtered",action__21456__auto___23449);

/**
* @param {...*} var_args
*/
growingtree_app.routes.v1_filter_things = ((function (action__21456__auto___23449,controls_ch_23441,api_ch_23442){
return (function() { 
var v1_filter_things__delegate = function (args__21455__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/:head/:id/:filtered",args__21455__auto__);
};
var v1_filter_things = function (var_args){
var args__21455__auto__ = null;
if (arguments.length > 0) {
var G__23450__i = 0, G__23450__a = new Array(arguments.length -  0);
while (G__23450__i < G__23450__a.length) {G__23450__a[G__23450__i] = arguments[G__23450__i + 0]; ++G__23450__i;}
  args__21455__auto__ = new cljs.core.IndexedSeq(G__23450__a,0);
} 
return v1_filter_things__delegate.call(this,args__21455__auto__);};
v1_filter_things.cljs$lang$maxFixedArity = 0;
v1_filter_things.cljs$lang$applyTo = (function (arglist__23451){
var args__21455__auto__ = cljs.core.seq(arglist__23451);
return v1_filter_things__delegate(args__21455__auto__);
});
v1_filter_things.cljs$core$IFn$_invoke$arity$variadic = v1_filter_things__delegate;
return v1_filter_things;
})()
;})(action__21456__auto___23449,controls_ch_23441,api_ch_23442))
;

var history = (new goog.History(false,null,history_el));
var navigation = growingtree_app.routes.listen.call(null,history,goog.history.EventType.POPSTATE);
var G__23408_23452 = history;
G__23408_23452.setEnabled(true);


var c__6715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6715__auto__,history,navigation){
return (function (){
var f__6716__auto__ = (function (){var switch__6659__auto__ = ((function (c__6715__auto__,history,navigation){
return (function (state_23425){
var state_val_23426 = (state_23425[(1)]);
if((state_val_23426 === (7))){
var inst_23412 = (state_23425[(2)]);
var inst_23413 = inst_23412.token;
var inst_23414 = growingtree_app.history.current_state.call(null);
var inst_23415 = cljs.core.pr_str.call(null,"dispatch goog.history navigation token ",inst_23413," url ",inst_23414);
var inst_23416 = console.log(inst_23415);
var inst_23417 = secretary.core.dispatch_BANG_.call(null,inst_23413);
var state_23425__$1 = (function (){var statearr_23427 = state_23425;
(statearr_23427[(7)] = inst_23417);

(statearr_23427[(8)] = inst_23416);

return statearr_23427;
})();
var statearr_23428_23453 = state_23425__$1;
(statearr_23428_23453[(2)] = null);

(statearr_23428_23453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (6))){
var inst_23421 = (state_23425[(2)]);
var state_23425__$1 = state_23425;
var statearr_23429_23454 = state_23425__$1;
(statearr_23429_23454[(2)] = inst_23421);

(statearr_23429_23454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (5))){
var state_23425__$1 = state_23425;
var statearr_23430_23455 = state_23425__$1;
(statearr_23430_23455[(2)] = null);

(statearr_23430_23455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (4))){
var state_23425__$1 = state_23425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23425__$1,(7),navigation);
} else {
if((state_val_23426 === (3))){
var inst_23423 = (state_23425[(2)]);
var state_23425__$1 = state_23425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23425__$1,inst_23423);
} else {
if((state_val_23426 === (2))){
var state_23425__$1 = state_23425;
var statearr_23431_23456 = state_23425__$1;
(statearr_23431_23456[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23426 === (1))){
var state_23425__$1 = state_23425;
var statearr_23433_23457 = state_23425__$1;
(statearr_23433_23457[(2)] = null);

(statearr_23433_23457[(1)] = (2));


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
});})(c__6715__auto__,history,navigation))
;
return ((function (switch__6659__auto__,c__6715__auto__,history,navigation){
return (function() {
var state_machine__6660__auto__ = null;
var state_machine__6660__auto____0 = (function (){
var statearr_23437 = [null,null,null,null,null,null,null,null,null];
(statearr_23437[(0)] = state_machine__6660__auto__);

(statearr_23437[(1)] = (1));

return statearr_23437;
});
var state_machine__6660__auto____1 = (function (state_23425){
while(true){
var ret_value__6661__auto__ = (function (){try{while(true){
var result__6662__auto__ = switch__6659__auto__.call(null,state_23425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6662__auto__;
}
break;
}
}catch (e23438){if((e23438 instanceof Object)){
var ex__6663__auto__ = e23438;
var statearr_23439_23458 = state_23425;
(statearr_23439_23458[(5)] = ex__6663__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23459 = state_23425;
state_23425 = G__23459;
continue;
} else {
return ret_value__6661__auto__;
}
break;
}
});
state_machine__6660__auto__ = function(state_23425){
switch(arguments.length){
case 0:
return state_machine__6660__auto____0.call(this);
case 1:
return state_machine__6660__auto____1.call(this,state_23425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6660__auto____0;
state_machine__6660__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6660__auto____1;
return state_machine__6660__auto__;
})()
;})(switch__6659__auto__,c__6715__auto__,history,navigation))
})();
var state__6717__auto__ = (function (){var statearr_23440 = f__6716__auto__.call(null);
(statearr_23440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6715__auto__);

return statearr_23440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6717__auto__);
});})(c__6715__auto__,history,navigation))
);

return c__6715__auto__;
});
growingtree_app.routes.v1_all_things_route = (function v1_all_things_route(nav_path){
return growingtree_app.routes.v1_all_things.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thing-type","thing-type",15521235),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(2)], null)))], null));
});
growingtree_app.routes.v1_filter_things_route = (function v1_filter_things_route(nav_path){
return growingtree_app.routes.v1_filter_things.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"head","head",-771383919),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(0)], null))),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(1)], null)),new cljs.core.Keyword(null,"filtered","filtered",-437499761),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(2)], null)))], null));
});

//# sourceMappingURL=routes.js.map