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
goog.require('growingtree_app.mock_data');
goog.require('goog.History');
goog.require('goog.events');
goog.require('growingtree_app.utils');
goog.require('dommy.core');
goog.require('growingtree_app.mock_data');
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
return growingtree_app.routes.listen_once_for_app_BANG_.call(null,app,(function (p1__12109_SHARP_){return cljs.core.get_in.call(null,p1__12109_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id], null));
}),(function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-things","all-things",1825895767),channel_id], null));
}));
});
growingtree_app.routes.thing_nodes_BANG_ = (function thing_nodes_BANG_(app,controls_ch,thing_type){console.log("thing type thing-nodes ",thing_type);
return growingtree_app.routes.listen_once_for_app_BANG_.call(null,app,(function (p1__12110_SHARP_){return cljs.core.get_in.call(null,p1__12110_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"things","things",1255021880),thing_type], null));
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
growingtree_app.routes.window_location = (function window_location(){var location = window.location.toString();var url = cljs.core.last.call(null,cljs.core.re_find.call(null,/https?:\/\/.*?\/v\d+\/(.*)/,location));console.log(cljs.core.pr_str.call(null,"window location ",url));
return url;
});
growingtree_app.routes.onpopstate = (function onpopstate(comm,e){var url = growingtree_app.routes.window_location.call(null);return cljs.core.async.put_BANG_.call(null,comm,growingtree_app.mock_data.popstate_msg.call(null,url));
});
growingtree_app.routes.define_routes_BANG_ = (function define_routes_BANG_(app,history_el){var controls_ch_12189 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var api_ch_12190 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null));var action__10949__auto___12191 = ((function (controls_ch_12189,api_ch_12190){
return (function (params__10950__auto__){if(cljs.core.map_QMARK_.call(null,params__10950__auto__))
{var map__12150 = params__10950__auto__;var map__12150__$1 = ((cljs.core.seq_QMARK_.call(null,map__12150))?cljs.core.apply.call(null,cljs.core.hash_map,map__12150):map__12150);var channel_id = cljs.core.get.call(null,map__12150__$1,new cljs.core.Keyword(null,"channel-id","channel-id",138191095));return growingtree_app.routes.open_to_channel_BANG_.call(null,app,controls_ch_12189,growingtree_app.utils.safe_sel.call(null,channel_id));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10950__auto__))
{var vec__12151 = params__10950__auto__;var channel_id = cljs.core.nth.call(null,vec__12151,(0),null);return growingtree_app.routes.open_to_channel_BANG_.call(null,app,controls_ch_12189,growingtree_app.utils.safe_sel.call(null,channel_id));
} else
{return null;
}
}
});})(controls_ch_12189,api_ch_12190))
;secretary.core.add_route_BANG_.call(null,"/v1/channels/:channel-id",action__10949__auto___12191);
/**
* @param {...*} var_args
*/
growingtree_app.routes.v1_channel_link = ((function (action__10949__auto___12191,controls_ch_12189,api_ch_12190){
return (function() { 
var v1_channel_link__delegate = function (args__10948__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/channels/:channel-id",args__10948__auto__);
};
var v1_channel_link = function (var_args){
var args__10948__auto__ = null;if (arguments.length > 0) {
  args__10948__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return v1_channel_link__delegate.call(this,args__10948__auto__);};
v1_channel_link.cljs$lang$maxFixedArity = 0;
v1_channel_link.cljs$lang$applyTo = (function (arglist__12192){
var args__10948__auto__ = cljs.core.seq(arglist__12192);
return v1_channel_link__delegate(args__10948__auto__);
});
v1_channel_link.cljs$core$IFn$_invoke$arity$variadic = v1_channel_link__delegate;
return v1_channel_link;
})()
;})(action__10949__auto___12191,controls_ch_12189,api_ch_12190))
;
var action__10949__auto___12193 = ((function (controls_ch_12189,api_ch_12190){
return (function (params__10950__auto__){if(cljs.core.map_QMARK_.call(null,params__10950__auto__))
{var map__12152 = params__10950__auto__;var map__12152__$1 = ((cljs.core.seq_QMARK_.call(null,map__12152))?cljs.core.apply.call(null,cljs.core.hash_map,map__12152):map__12152);var thing_type = cljs.core.get.call(null,map__12152__$1,new cljs.core.Keyword(null,"thing-type","thing-type",15521235));return console.log(cljs.core.pr_str.call(null,"matching all things route ",thing_type));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10950__auto__))
{var vec__12153 = params__10950__auto__;var thing_type = cljs.core.nth.call(null,vec__12153,(0),null);return console.log(cljs.core.pr_str.call(null,"matching all things route ",thing_type));
} else
{return null;
}
}
});})(controls_ch_12189,api_ch_12190))
;secretary.core.add_route_BANG_.call(null,"/v1/:thing-type",action__10949__auto___12193);
/**
* @param {...*} var_args
*/
growingtree_app.routes.v1_all_things = ((function (action__10949__auto___12193,controls_ch_12189,api_ch_12190){
return (function() { 
var v1_all_things__delegate = function (args__10948__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/:thing-type",args__10948__auto__);
};
var v1_all_things = function (var_args){
var args__10948__auto__ = null;if (arguments.length > 0) {
  args__10948__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return v1_all_things__delegate.call(this,args__10948__auto__);};
v1_all_things.cljs$lang$maxFixedArity = 0;
v1_all_things.cljs$lang$applyTo = (function (arglist__12194){
var args__10948__auto__ = cljs.core.seq(arglist__12194);
return v1_all_things__delegate(args__10948__auto__);
});
v1_all_things.cljs$core$IFn$_invoke$arity$variadic = v1_all_things__delegate;
return v1_all_things;
})()
;})(action__10949__auto___12193,controls_ch_12189,api_ch_12190))
;
var action__10949__auto___12195 = ((function (controls_ch_12189,api_ch_12190){
return (function (params__10950__auto__){if(cljs.core.map_QMARK_.call(null,params__10950__auto__))
{var map__12154 = params__10950__auto__;var map__12154__$1 = ((cljs.core.seq_QMARK_.call(null,map__12154))?cljs.core.apply.call(null,cljs.core.hash_map,map__12154):map__12154);var filtered = cljs.core.get.call(null,map__12154__$1,new cljs.core.Keyword(null,"filtered","filtered",-437499761));var id = cljs.core.get.call(null,map__12154__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var head = cljs.core.get.call(null,map__12154__$1,new cljs.core.Keyword(null,"head","head",-771383919));return console.log(cljs.core.pr_str.call(null,"matching filtered things route ",head,id,filtered));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10950__auto__))
{var vec__12155 = params__10950__auto__;var head = cljs.core.nth.call(null,vec__12155,(0),null);var id = cljs.core.nth.call(null,vec__12155,(1),null);var filtered = cljs.core.nth.call(null,vec__12155,(2),null);return console.log(cljs.core.pr_str.call(null,"matching filtered things route ",head,id,filtered));
} else
{return null;
}
}
});})(controls_ch_12189,api_ch_12190))
;secretary.core.add_route_BANG_.call(null,"/v1/:head/:id/:filtered",action__10949__auto___12195);
/**
* @param {...*} var_args
*/
growingtree_app.routes.v1_filter_things = ((function (action__10949__auto___12195,controls_ch_12189,api_ch_12190){
return (function() { 
var v1_filter_things__delegate = function (args__10948__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/:head/:id/:filtered",args__10948__auto__);
};
var v1_filter_things = function (var_args){
var args__10948__auto__ = null;if (arguments.length > 0) {
  args__10948__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return v1_filter_things__delegate.call(this,args__10948__auto__);};
v1_filter_things.cljs$lang$maxFixedArity = 0;
v1_filter_things.cljs$lang$applyTo = (function (arglist__12196){
var args__10948__auto__ = cljs.core.seq(arglist__12196);
return v1_filter_things__delegate(args__10948__auto__);
});
v1_filter_things.cljs$core$IFn$_invoke$arity$variadic = v1_filter_things__delegate;
return v1_filter_things;
})()
;})(action__10949__auto___12195,controls_ch_12189,api_ch_12190))
;
var history = (new goog.History(false,null,history_el));var navigation = growingtree_app.routes.listen.call(null,history,goog.history.EventType.POPSTATE);var G__12156_12197 = history;G__12156_12197.setEnabled(true);
var c__6345__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto__,history,navigation){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto__,history,navigation){
return (function (state_12173){var state_val_12174 = (state_12173[(1)]);if((state_val_12174 === (7)))
{var inst_12160 = (state_12173[(2)]);var inst_12161 = inst_12160.token;var inst_12162 = growingtree_app.history.current_state.call(null);var inst_12163 = cljs.core.pr_str.call(null,"dispatch goog.history navigation token ",inst_12161," url ",inst_12162);var inst_12164 = console.log(inst_12163);var inst_12165 = secretary.core.dispatch_BANG_.call(null,inst_12161);var state_12173__$1 = (function (){var statearr_12175 = state_12173;(statearr_12175[(7)] = inst_12164);
(statearr_12175[(8)] = inst_12165);
return statearr_12175;
})();var statearr_12176_12198 = state_12173__$1;(statearr_12176_12198[(2)] = null);
(statearr_12176_12198[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12174 === (6)))
{var inst_12169 = (state_12173[(2)]);var state_12173__$1 = state_12173;var statearr_12177_12199 = state_12173__$1;(statearr_12177_12199[(2)] = inst_12169);
(statearr_12177_12199[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12174 === (5)))
{var state_12173__$1 = state_12173;var statearr_12178_12200 = state_12173__$1;(statearr_12178_12200[(2)] = null);
(statearr_12178_12200[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12174 === (4)))
{var state_12173__$1 = state_12173;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12173__$1,(7),navigation);
} else
{if((state_val_12174 === (3)))
{var inst_12171 = (state_12173[(2)]);var state_12173__$1 = state_12173;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12173__$1,inst_12171);
} else
{if((state_val_12174 === (2)))
{var state_12173__$1 = state_12173;if(true)
{var statearr_12179_12201 = state_12173__$1;(statearr_12179_12201[(1)] = (4));
} else
{var statearr_12180_12202 = state_12173__$1;(statearr_12180_12202[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12174 === (1)))
{var state_12173__$1 = state_12173;var statearr_12181_12203 = state_12173__$1;(statearr_12181_12203[(2)] = null);
(statearr_12181_12203[(1)] = (2));
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
var state_machine__6281__auto____0 = (function (){var statearr_12185 = [null,null,null,null,null,null,null,null,null];(statearr_12185[(0)] = state_machine__6281__auto__);
(statearr_12185[(1)] = (1));
return statearr_12185;
});
var state_machine__6281__auto____1 = (function (state_12173){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_12173);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e12186){if((e12186 instanceof Object))
{var ex__6284__auto__ = e12186;var statearr_12187_12204 = state_12173;(statearr_12187_12204[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12173);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12186;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12205 = state_12173;
state_12173 = G__12205;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_12173){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_12173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,history,navigation))
})();var state__6347__auto__ = (function (){var statearr_12188 = f__6346__auto__.call(null);(statearr_12188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12188;
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