// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.controllers.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.mock_data');
goog.require('growingtree_app.mock_data');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
growingtree_app.controllers.api.append_activity_to_channel = (function append_activity_to_channel(state,channel_id,activity){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id,new cljs.core.Keyword(null,"activities","activities",1654844313)], null),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.sort_by,new cljs.core.Keyword(null,"created_at","created_at",1484050750)),cljs.core.conj),activity);
});
growingtree_app.controllers.api.append_thing_node = (function append_thing_node(state,type,thing_node){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"things","things",1255021880),type,new cljs.core.Keyword(null,"things","things",1255021880)], null),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.sort_by,new cljs.core.Keyword(null,"created_at","created_at",1484050750)),cljs.core.conj),thing_node);
});
growingtree_app.controllers.api.drop_old_activity_from_channel = (function drop_old_activity_from_channel(state,channel_id,message_limit){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),channel_id,new cljs.core.Keyword(null,"activities","activities",1654844313)], null),cljs.core.partial.call(null,cljs.core.take_last,message_limit));
});

//# sourceMappingURL=api.js.map