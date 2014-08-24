// Compiled by ClojureScript 0.0-2277
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
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
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
return growingtree_app.routes.listen_once_for_app_BANG_.call(null,app,(function (p1__12689_SHARP_){return cljs.core.get_in.call(null,p1__12689_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id], null));
}),(function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-things","all-things",1825895767),channel_id], null));
}));
});
growingtree_app.routes.thing_nodes_BANG_ = (function thing_nodes_BANG_(app,controls_ch,thing_type){console.log("thing type thing-nodes ",thing_type);
return growingtree_app.routes.listen_once_for_app_BANG_.call(null,app,(function (p1__12690_SHARP_){return cljs.core.get_in.call(null,p1__12690_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"things","things",1255021880),thing_type], null));
}),(function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-things","all-things",1825895767),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[thing_type],null))], null));
}));
});
growingtree_app.routes.define_routes_BANG_ = (function define_routes_BANG_(app,history_el){var controls_ch_12702 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var api_ch_12703 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"api","api",-899839580)], null));var action__11284__auto___12704 = ((function (controls_ch_12702,api_ch_12703){
return (function (params__11285__auto__){if(cljs.core.map_QMARK_.call(null,params__11285__auto__))
{var map__12697 = params__11285__auto__;var map__12697__$1 = ((cljs.core.seq_QMARK_.call(null,map__12697))?cljs.core.apply.call(null,cljs.core.hash_map,map__12697):map__12697);var channel_id = cljs.core.get.call(null,map__12697__$1,new cljs.core.Keyword(null,"channel-id","channel-id",138191095));return growingtree_app.routes.open_to_channel_BANG_.call(null,app,controls_ch_12702,growingtree_app.utils.safe_sel.call(null,channel_id));
} else
{if(cljs.core.vector_QMARK_.call(null,params__11285__auto__))
{var vec__12698 = params__11285__auto__;var channel_id = cljs.core.nth.call(null,vec__12698,(0),null);return growingtree_app.routes.open_to_channel_BANG_.call(null,app,controls_ch_12702,growingtree_app.utils.safe_sel.call(null,channel_id));
} else
{return null;
}
}
});})(controls_ch_12702,api_ch_12703))
;secretary.core.add_route_BANG_.call(null,"/v1/channels/:channel-id",action__11284__auto___12704);
/**
* @param {...*} var_args
*/
growingtree_app.routes.v1_channel_link = ((function (action__11284__auto___12704,controls_ch_12702,api_ch_12703){
return (function() { 
var v1_channel_link__delegate = function (args__11283__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/channels/:channel-id",args__11283__auto__);
};
var v1_channel_link = function (var_args){
var args__11283__auto__ = null;if (arguments.length > 0) {
  args__11283__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return v1_channel_link__delegate.call(this,args__11283__auto__);};
v1_channel_link.cljs$lang$maxFixedArity = 0;
v1_channel_link.cljs$lang$applyTo = (function (arglist__12705){
var args__11283__auto__ = cljs.core.seq(arglist__12705);
return v1_channel_link__delegate(args__11283__auto__);
});
v1_channel_link.cljs$core$IFn$_invoke$arity$variadic = v1_channel_link__delegate;
return v1_channel_link;
})()
;})(action__11284__auto___12704,controls_ch_12702,api_ch_12703))
;
var action__11284__auto___12706 = ((function (controls_ch_12702,api_ch_12703){
return (function (params__11285__auto__){if(cljs.core.map_QMARK_.call(null,params__11285__auto__))
{var map__12699 = params__11285__auto__;var map__12699__$1 = ((cljs.core.seq_QMARK_.call(null,map__12699))?cljs.core.apply.call(null,cljs.core.hash_map,map__12699):map__12699);var thing_type = cljs.core.get.call(null,map__12699__$1,new cljs.core.Keyword(null,"thing-type","thing-type",15521235));return growingtree_app.routes.thing_nodes_BANG_.call(null,app,controls_ch_12702,growingtree_app.utils.safe_sel.call(null,thing_type));
} else
{if(cljs.core.vector_QMARK_.call(null,params__11285__auto__))
{var vec__12700 = params__11285__auto__;var thing_type = cljs.core.nth.call(null,vec__12700,(0),null);return growingtree_app.routes.thing_nodes_BANG_.call(null,app,controls_ch_12702,growingtree_app.utils.safe_sel.call(null,thing_type));
} else
{return null;
}
}
});})(controls_ch_12702,api_ch_12703))
;secretary.core.add_route_BANG_.call(null,"/v1/things/:thing-type",action__11284__auto___12706);
/**
* @param {...*} var_args
*/
growingtree_app.routes.v1_thing_nodes = ((function (action__11284__auto___12706,controls_ch_12702,api_ch_12703){
return (function() { 
var v1_thing_nodes__delegate = function (args__11283__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/things/:thing-type",args__11283__auto__);
};
var v1_thing_nodes = function (var_args){
var args__11283__auto__ = null;if (arguments.length > 0) {
  args__11283__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return v1_thing_nodes__delegate.call(this,args__11283__auto__);};
v1_thing_nodes.cljs$lang$maxFixedArity = 0;
v1_thing_nodes.cljs$lang$applyTo = (function (arglist__12707){
var args__11283__auto__ = cljs.core.seq(arglist__12707);
return v1_thing_nodes__delegate(args__11283__auto__);
});
v1_thing_nodes.cljs$core$IFn$_invoke$arity$variadic = v1_thing_nodes__delegate;
return v1_thing_nodes;
})()
;})(action__11284__auto___12706,controls_ch_12702,api_ch_12703))
;
var history_el__$1 = (new goog.History(false,null,history_el));console.log(" ",history_el__$1);
goog.events.listen(history_el__$1,goog.history.EventType.NAVIGATE,((function (history_el__$1){
return (function (p1__12691_SHARP_){return secretary.core.dispatch_BANG_.call(null,p1__12691_SHARP_.token);
});})(history_el__$1))
);
var G__12701 = history_el__$1;G__12701.setEnabled(true);
return G__12701;
});

//# sourceMappingURL=routes.js.map