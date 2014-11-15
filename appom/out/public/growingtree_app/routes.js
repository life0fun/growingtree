// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.routes');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('secretary.core');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('growingtree_app.history');
goog.require('goog.history.EventType');
goog.require('goog.net.Jsonp');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('growingtree_app.utils');
goog.require('dommy.core');
goog.require('secretary.core');
goog.require('growingtree_app.utils');
goog.require('goog.events');
goog.require('growingtree_app.history');
growingtree_app.routes.listen_once_for_app_BANG_ = (function listen_once_for_app_BANG_(app,pred,on_loaded){var listener_id = cljs.core.keyword.call(null,growingtree_app.utils.uuid.call(null));var sentinel = ((function (listener_id){
return (function (_,___$1,___$2,new_state){if(cljs.core.truth_(pred.call(null,new_state)))
{cljs.core.remove_watch.call(null,app,listener_id);
return on_loaded.call(null,new_state);
} else
{return null;
}
});})(listener_id))
;if(cljs.core.truth_(pred.call(null,cljs.core.deref.call(null,app))))
{return on_loaded.call(null,cljs.core.deref.call(null,app));
} else
{return cljs.core.add_watch.call(null,app,listener_id,sentinel);
}
});
growingtree_app.routes.open_to_channel_BANG_ = (function open_to_channel_BANG_(app,controls_ch,channel_id){console.log("channel route handle open-to-channel ",channel_id);
return growingtree_app.routes.listen_once_for_app_BANG_.call(null,app,(function (p1__12030_SHARP_){return cljs.core.get_in.call(null,p1__12030_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id], null));
}),(function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-things","all-things",1825895767),channel_id], null));
}));
});
growingtree_app.routes.thing_nodes_BANG_ = (function thing_nodes_BANG_(app,controls_ch,thing_type){console.log("thing type thing-nodes ",thing_type);
return growingtree_app.routes.listen_once_for_app_BANG_.call(null,app,(function (p1__12031_SHARP_){return cljs.core.get_in.call(null,p1__12031_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"things","things",1255021880),thing_type], null));
}),(function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-things","all-things",1825895767),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[thing_type],null))], null));
}));
});
growingtree_app.routes.set_window_href_BANG_ = (function set_window_href_BANG_(title,path){return cljs.core.swap_BANG_.call(null,growingtree_app.history.state,growingtree_app.history.push_state_BANG_,"",path);
});
growingtree_app.routes.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,((function (out){
return (function (e){return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);
return out;
});
growingtree_app.routes.onpopstate = (function onpopstate(e){var cur = growingtree_app.history.current_state.call(null);return console.log(cljs.core.pr_str.call(null,"window onpopstate ",cur,e.state));
});
growingtree_app.routes.define_routes_BANG_ = (function define_routes_BANG_(app,history_el){var controls_ch_12110 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var api_ch_12111 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null));var action__11321__auto___12112 = ((function (controls_ch_12110,api_ch_12111){
return (function (params__11322__auto__){if(cljs.core.map_QMARK_.call(null,params__11322__auto__))
{var map__12071 = params__11322__auto__;var map__12071__$1 = ((cljs.core.seq_QMARK_.call(null,map__12071))?cljs.core.apply.call(null,cljs.core.hash_map,map__12071):map__12071);var channel_id = cljs.core.get.call(null,map__12071__$1,new cljs.core.Keyword(null,"channel-id","channel-id",138191095));return growingtree_app.routes.open_to_channel_BANG_.call(null,app,controls_ch_12110,growingtree_app.utils.safe_sel.call(null,channel_id));
} else
{if(cljs.core.vector_QMARK_.call(null,params__11322__auto__))
{var vec__12072 = params__11322__auto__;var channel_id = cljs.core.nth.call(null,vec__12072,(0),null);return growingtree_app.routes.open_to_channel_BANG_.call(null,app,controls_ch_12110,growingtree_app.utils.safe_sel.call(null,channel_id));
} else
{return null;
}
}
});})(controls_ch_12110,api_ch_12111))
;secretary.core.add_route_BANG_.call(null,"/v1/channels/:channel-id",action__11321__auto___12112);
/**
* @param {...*} var_args
*/
growingtree_app.routes.v1_channel_link = ((function (action__11321__auto___12112,controls_ch_12110,api_ch_12111){
return (function() { 
var v1_channel_link__delegate = function (args__11320__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/channels/:channel-id",args__11320__auto__);
};
var v1_channel_link = function (var_args){
var args__11320__auto__ = null;if (arguments.length > 0) {
  args__11320__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return v1_channel_link__delegate.call(this,args__11320__auto__);};
v1_channel_link.cljs$lang$maxFixedArity = 0;
v1_channel_link.cljs$lang$applyTo = (function (arglist__12113){
var args__11320__auto__ = cljs.core.seq(arglist__12113);
return v1_channel_link__delegate(args__11320__auto__);
});
v1_channel_link.cljs$core$IFn$_invoke$arity$variadic = v1_channel_link__delegate;
return v1_channel_link;
})()
;})(action__11321__auto___12112,controls_ch_12110,api_ch_12111))
;
var action__11321__auto___12114 = ((function (controls_ch_12110,api_ch_12111){
return (function (params__11322__auto__){if(cljs.core.map_QMARK_.call(null,params__11322__auto__))
{var map__12073 = params__11322__auto__;var map__12073__$1 = ((cljs.core.seq_QMARK_.call(null,map__12073))?cljs.core.apply.call(null,cljs.core.hash_map,map__12073):map__12073);var thing_type = cljs.core.get.call(null,map__12073__$1,new cljs.core.Keyword(null,"thing-type","thing-type",15521235));return console.log(cljs.core.pr_str.call(null,"matching all things route ",thing_type));
} else
{if(cljs.core.vector_QMARK_.call(null,params__11322__auto__))
{var vec__12074 = params__11322__auto__;var thing_type = cljs.core.nth.call(null,vec__12074,(0),null);return console.log(cljs.core.pr_str.call(null,"matching all things route ",thing_type));
} else
{return null;
}
}
});})(controls_ch_12110,api_ch_12111))
;secretary.core.add_route_BANG_.call(null,"/v1/:thing-type",action__11321__auto___12114);
/**
* @param {...*} var_args
*/
growingtree_app.routes.v1_all_things = ((function (action__11321__auto___12114,controls_ch_12110,api_ch_12111){
return (function() { 
var v1_all_things__delegate = function (args__11320__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/:thing-type",args__11320__auto__);
};
var v1_all_things = function (var_args){
var args__11320__auto__ = null;if (arguments.length > 0) {
  args__11320__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return v1_all_things__delegate.call(this,args__11320__auto__);};
v1_all_things.cljs$lang$maxFixedArity = 0;
v1_all_things.cljs$lang$applyTo = (function (arglist__12115){
var args__11320__auto__ = cljs.core.seq(arglist__12115);
return v1_all_things__delegate(args__11320__auto__);
});
v1_all_things.cljs$core$IFn$_invoke$arity$variadic = v1_all_things__delegate;
return v1_all_things;
})()
;})(action__11321__auto___12114,controls_ch_12110,api_ch_12111))
;
var action__11321__auto___12116 = ((function (controls_ch_12110,api_ch_12111){
return (function (params__11322__auto__){if(cljs.core.map_QMARK_.call(null,params__11322__auto__))
{var map__12075 = params__11322__auto__;var map__12075__$1 = ((cljs.core.seq_QMARK_.call(null,map__12075))?cljs.core.apply.call(null,cljs.core.hash_map,map__12075):map__12075);var filtered = cljs.core.get.call(null,map__12075__$1,new cljs.core.Keyword(null,"filtered","filtered",-437499761));var id = cljs.core.get.call(null,map__12075__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var head = cljs.core.get.call(null,map__12075__$1,new cljs.core.Keyword(null,"head","head",-771383919));return console.log(cljs.core.pr_str.call(null,"matching filtered things route ",head,id,filtered));
} else
{if(cljs.core.vector_QMARK_.call(null,params__11322__auto__))
{var vec__12076 = params__11322__auto__;var head = cljs.core.nth.call(null,vec__12076,(0),null);var id = cljs.core.nth.call(null,vec__12076,(1),null);var filtered = cljs.core.nth.call(null,vec__12076,(2),null);return console.log(cljs.core.pr_str.call(null,"matching filtered things route ",head,id,filtered));
} else
{return null;
}
}
});})(controls_ch_12110,api_ch_12111))
;secretary.core.add_route_BANG_.call(null,"/v1/:head/:id/:filtered",action__11321__auto___12116);
/**
* @param {...*} var_args
*/
growingtree_app.routes.v1_filter_things = ((function (action__11321__auto___12116,controls_ch_12110,api_ch_12111){
return (function() { 
var v1_filter_things__delegate = function (args__11320__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/:head/:id/:filtered",args__11320__auto__);
};
var v1_filter_things = function (var_args){
var args__11320__auto__ = null;if (arguments.length > 0) {
  args__11320__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return v1_filter_things__delegate.call(this,args__11320__auto__);};
v1_filter_things.cljs$lang$maxFixedArity = 0;
v1_filter_things.cljs$lang$applyTo = (function (arglist__12117){
var args__11320__auto__ = cljs.core.seq(arglist__12117);
return v1_filter_things__delegate(args__11320__auto__);
});
v1_filter_things.cljs$core$IFn$_invoke$arity$variadic = v1_filter_things__delegate;
return v1_filter_things;
})()
;})(action__11321__auto___12116,controls_ch_12110,api_ch_12111))
;
var history = (new goog.History(false,null,history_el));var navigation = growingtree_app.routes.listen.call(null,history,goog.history.EventType.POPSTATE);var G__12077_12118 = history;G__12077_12118.setEnabled(true);
dommy.core.listen_BANG_.call(null,window,new cljs.core.Keyword(null,"popstate","popstate",942216014),growingtree_app.routes.onpopstate);
var c__6345__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto__,history,navigation){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto__,history,navigation){
return (function (state_12094){var state_val_12095 = (state_12094[(1)]);if((state_val_12095 === (7)))
{var inst_12081 = (state_12094[(2)]);var inst_12082 = inst_12081.token;var inst_12083 = growingtree_app.history.current_state.call(null);var inst_12084 = cljs.core.pr_str.call(null,"dispatch goog.history navigation token ",inst_12082," url ",inst_12083);var inst_12085 = console.log(inst_12084);var inst_12086 = secretary.core.dispatch_BANG_.call(null,inst_12082);var state_12094__$1 = (function (){var statearr_12096 = state_12094;(statearr_12096[(7)] = inst_12086);
(statearr_12096[(8)] = inst_12085);
return statearr_12096;
})();var statearr_12097_12119 = state_12094__$1;(statearr_12097_12119[(2)] = null);
(statearr_12097_12119[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12095 === (6)))
{var inst_12090 = (state_12094[(2)]);var state_12094__$1 = state_12094;var statearr_12098_12120 = state_12094__$1;(statearr_12098_12120[(2)] = inst_12090);
(statearr_12098_12120[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12095 === (5)))
{var state_12094__$1 = state_12094;var statearr_12099_12121 = state_12094__$1;(statearr_12099_12121[(2)] = null);
(statearr_12099_12121[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12095 === (4)))
{var state_12094__$1 = state_12094;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12094__$1,(7),navigation);
} else
{if((state_val_12095 === (3)))
{var inst_12092 = (state_12094[(2)]);var state_12094__$1 = state_12094;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12094__$1,inst_12092);
} else
{if((state_val_12095 === (2)))
{var state_12094__$1 = state_12094;if(true)
{var statearr_12100_12122 = state_12094__$1;(statearr_12100_12122[(1)] = (4));
} else
{var statearr_12101_12123 = state_12094__$1;(statearr_12101_12123[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12095 === (1)))
{var state_12094__$1 = state_12094;var statearr_12102_12124 = state_12094__$1;(statearr_12102_12124[(2)] = null);
(statearr_12102_12124[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6345__auto__,history,navigation))
;return ((function (switch__6280__auto__,c__6345__auto__,history,navigation){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_12106 = [null,null,null,null,null,null,null,null,null];(statearr_12106[(0)] = state_machine__6281__auto__);
(statearr_12106[(1)] = (1));
return statearr_12106;
});
var state_machine__6281__auto____1 = (function (state_12094){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_12094);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e12107){if((e12107 instanceof Object))
{var ex__6284__auto__ = e12107;var statearr_12108_12125 = state_12094;(statearr_12108_12125[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12094);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12107;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12126 = state_12094;
state_12094 = G__12126;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_12094){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_12094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,history,navigation))
})();var state__6347__auto__ = (function (){var statearr_12109 = f__6346__auto__.call(null);(statearr_12109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12109;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto__,history,navigation))
);
return c__6345__auto__;
});
growingtree_app.routes.v1_all_things_route = (function v1_all_things_route(nav_path){return growingtree_app.routes.v1_all_things.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thing-type","thing-type",15521235),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(2)], null)))], null));
});
growingtree_app.routes.v1_filter_things_route = (function v1_filter_things_route(nav_path){return growingtree_app.routes.v1_filter_things.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"head","head",-771383919),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(0)], null))),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(1)], null)),new cljs.core.Keyword(null,"filtered","filtered",-437499761),cljs.core.name.call(null,cljs.core.get_in.call(null,nav_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),(1),(2)], null)))], null));
});

//# sourceMappingURL=routes.js.map