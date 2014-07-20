// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.routes');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('secretary.core');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),"#");
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
return growingtree_app.routes.listen_once_for_app_BANG_.call(null,app,(function (p1__12357_SHARP_){return cljs.core.get_in.call(null,p1__12357_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id], null));
}),(function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-things","all-things",1148589667),channel_id], null));
}));
});
growingtree_app.routes.thing_nodes_BANG_ = (function thing_nodes_BANG_(app,controls_ch,thing_type){console.log("thing type thing-nodes ",thing_type);
return growingtree_app.routes.listen_once_for_app_BANG_.call(null,app,(function (p1__12358_SHARP_){return cljs.core.get_in.call(null,p1__12358_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"things","things",4434169015),thing_type], null));
}),(function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-things","all-things",1148589667),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[thing_type],null))], null));
}));
});
growingtree_app.routes.define_routes_BANG_ = (function define_routes_BANG_(app,history_el){var controls_ch_12370 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var api_ch_12371 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"api","api",1014001036)], null));var action__10590__auto___12372 = (function (params__10591__auto__){if(cljs.core.map_QMARK_.call(null,params__10591__auto__))
{var map__12365 = params__10591__auto__;var map__12365__$1 = ((cljs.core.seq_QMARK_.call(null,map__12365))?cljs.core.apply.call(null,cljs.core.hash_map,map__12365):map__12365);var channel_id = cljs.core.get.call(null,map__12365__$1,new cljs.core.Keyword(null,"channel-id","channel-id",3378014615));return growingtree_app.routes.open_to_channel_BANG_.call(null,app,controls_ch_12370,growingtree_app.utils.safe_sel.call(null,channel_id));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10591__auto__))
{var vec__12366 = params__10591__auto__;var channel_id = cljs.core.nth.call(null,vec__12366,0,null);return growingtree_app.routes.open_to_channel_BANG_.call(null,app,controls_ch_12370,growingtree_app.utils.safe_sel.call(null,channel_id));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/v1/channels/:channel-id",action__10590__auto___12372);
/**
* @param {...*} var_args
*/
growingtree_app.routes.v1_channel_link = (function() { 
var v1_channel_link__delegate = function (args__10589__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/channels/:channel-id",args__10589__auto__);
};
var v1_channel_link = function (var_args){
var args__10589__auto__ = null;if (arguments.length > 0) {
  args__10589__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return v1_channel_link__delegate.call(this,args__10589__auto__);};
v1_channel_link.cljs$lang$maxFixedArity = 0;
v1_channel_link.cljs$lang$applyTo = (function (arglist__12373){
var args__10589__auto__ = cljs.core.seq(arglist__12373);
return v1_channel_link__delegate(args__10589__auto__);
});
v1_channel_link.cljs$core$IFn$_invoke$arity$variadic = v1_channel_link__delegate;
return v1_channel_link;
})()
;
var action__10590__auto___12374 = (function (params__10591__auto__){if(cljs.core.map_QMARK_.call(null,params__10591__auto__))
{var map__12367 = params__10591__auto__;var map__12367__$1 = ((cljs.core.seq_QMARK_.call(null,map__12367))?cljs.core.apply.call(null,cljs.core.hash_map,map__12367):map__12367);var thing_type = cljs.core.get.call(null,map__12367__$1,new cljs.core.Keyword(null,"thing-type","thing-type",843056171));return growingtree_app.routes.thing_nodes_BANG_.call(null,app,controls_ch_12370,growingtree_app.utils.safe_sel.call(null,thing_type));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10591__auto__))
{var vec__12368 = params__10591__auto__;var thing_type = cljs.core.nth.call(null,vec__12368,0,null);return growingtree_app.routes.thing_nodes_BANG_.call(null,app,controls_ch_12370,growingtree_app.utils.safe_sel.call(null,thing_type));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/v1/things/:thing-type",action__10590__auto___12374);
/**
* @param {...*} var_args
*/
growingtree_app.routes.v1_thing_nodes = (function() { 
var v1_thing_nodes__delegate = function (args__10589__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/things/:thing-type",args__10589__auto__);
};
var v1_thing_nodes = function (var_args){
var args__10589__auto__ = null;if (arguments.length > 0) {
  args__10589__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return v1_thing_nodes__delegate.call(this,args__10589__auto__);};
v1_thing_nodes.cljs$lang$maxFixedArity = 0;
v1_thing_nodes.cljs$lang$applyTo = (function (arglist__12375){
var args__10589__auto__ = cljs.core.seq(arglist__12375);
return v1_thing_nodes__delegate(args__10589__auto__);
});
v1_thing_nodes.cljs$core$IFn$_invoke$arity$variadic = v1_thing_nodes__delegate;
return v1_thing_nodes;
})()
;
var history_el__$1 = (new goog.History(false,null,history_el));console.log(" ",history_el__$1);
goog.events.listen(history_el__$1,goog.history.EventType.NAVIGATE,(function (p1__12359_SHARP_){return secretary.core.dispatch_BANG_.call(null,p1__12359_SHARP_.token);
}));
var G__12369 = history_el__$1;G__12369.setEnabled(true);
return G__12369;
});

//# sourceMappingURL=routes.js.map