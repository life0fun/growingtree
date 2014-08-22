// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.controllers.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
growingtree_app.controllers.api.api_event = (function (){var method_table__4409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4413__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("api-event",((function (method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__){
return (function (target,msg_type,msg_data,state){return msg_type;
});})(method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.controllers.api.api_event,new cljs.core.Keyword(null,"api-data","api-data",103234986),(function (target,msg_type,msg_data,state){var things_vec = new cljs.core.Keyword(null,"things-vec","things-vec",-1363222375).cljs$core$IFn$_invoke$arity$1(msg_data);var nav_path = new cljs.core.Keyword(null,"nav-path","nav-path",-444531376).cljs$core$IFn$_invoke$arity$1(msg_data);console.log(cljs.core.pr_str.call(null,"api-data set :body things-vec ",nav_path,msg_data));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),things_vec);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.api.api_event,new cljs.core.Keyword(null,"api-success","api-success",1221200738),(function (target,msg_type,msg_data,state){var last_nav_path = cljs.core.last.call(null,cljs.core.drop_last.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null))));console.log(cljs.core.pr_str.call(null,"api-success : re-direct with update-in to ",last_nav_path));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null),cljs.core.conj,last_nav_path);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.api.api_event,new cljs.core.Keyword(null,"api-error","api-error",1506636439),(function (target,msg_type,msg_data,state){var error = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(msg_data);var nav_path = new cljs.core.Keyword(null,"nav-path","nav-path",-444531376).cljs$core$IFn$_invoke$arity$1(msg_data);var last_nav_path = cljs.core.last.call(null,cljs.core.drop_last.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null))));return console.log(cljs.core.pr_str.call(null,"api-error set state [:error] ",cljs.core.get_in.call(null,msg_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"status-text","status-text",-1834235478)], null))));
}));
cljs.core._add_method.call(null,growingtree_app.controllers.api.api_event,new cljs.core.Keyword(null,"channel-activity-received","channel-activity-received",303694233),(function (target,msg_type,msg_data,state){var message_limit = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"message-limit","message-limit",1186131685)], null));return growingtree_app.controllers.api.drop_old_activity_from_channel.call(null,growingtree_app.controllers.api.append_activity_to_channel.call(null,state,new cljs.core.Keyword(null,"channel-id","channel-id",138191095).cljs$core$IFn$_invoke$arity$1(msg_data),msg_data),new cljs.core.Keyword(null,"channel-id","channel-id",138191095).cljs$core$IFn$_invoke$arity$1(msg_data),message_limit);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.api.api_event,new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",-727239593),(function (target,msg_type,channel_id,state){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174)], null),cljs.core.dissoc,channel_id);
}));
growingtree_app.controllers.api.append_activity_to_channel = (function append_activity_to_channel(state,channel_id,activity){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id,new cljs.core.Keyword(null,"activities","activities",1654844313)], null),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.sort_by,new cljs.core.Keyword(null,"created_at","created_at",1484050750)),cljs.core.conj),activity);
});
growingtree_app.controllers.api.append_thing_node = (function append_thing_node(state,type,thing_node){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"things","things",1255021880),type,new cljs.core.Keyword(null,"things","things",1255021880)], null),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.sort_by,new cljs.core.Keyword(null,"created_at","created_at",1484050750)),cljs.core.conj),thing_node);
});
growingtree_app.controllers.api.drop_old_activity_from_channel = (function drop_old_activity_from_channel(state,channel_id,message_limit){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id,new cljs.core.Keyword(null,"activities","activities",1654844313)], null),cljs.core.partial.call(null,cljs.core.take_last,message_limit));
});

//# sourceMappingURL=api.js.map