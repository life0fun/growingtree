// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.controllers.post_api');
goog.require('cljs.core');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.useful');
goog.require('cljs.core.async');
goog.require('growingtree_app.commands');
goog.require('cljs.core.async');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.ui');
goog.require('growingtree_app.useful');
goog.require('clojure.string');
goog.require('growingtree_app.commands');
goog.require('growingtree_app.ui');
goog.require('clojure.string');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('cljs.core.async');
growingtree_app.controllers.post_api.notify_if_mentioned_BANG_ = (function notify_if_mentioned_BANG_(activity,state){var current_user = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(state)], null));var comm = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));if(cljs.core.truth_((function (){var and__3431__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(current_user),new cljs.core.Keyword(null,"author","author",3902543101).cljs$core$IFn$_invoke$arity$1(activity));if(and__3431__auto__)
{return growingtree_app.useful.ffilter.call(null,(function (piece){var vec__11759 = cljs.core.re_find.call(null,/(.*)@(\w+)(.*)/,piece);var _ = cljs.core.nth.call(null,vec__11759,0,null);var pre = cljs.core.nth.call(null,vec__11759,1,null);var username = cljs.core.nth.call(null,vec__11759,2,null);var post = cljs.core.nth.call(null,vec__11759,3,null);return cljs.core._EQ_.call(null,username,new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(current_user));
}),clojure.string.split.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(activity),/ /));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",1125795533),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [activity,"/assets/audio/threetone-alert.wav"], null)], null));
} else
{return null;
}
});
growingtree_app.controllers.post_api.post_api_event_BANG_ = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-api-event!",(function (target,message,previous_state,current_state){return message;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.controllers.post_api.post_api_event_BANG_,new cljs.core.Keyword(null,"default","default",2558708147),(function (target,message,previous_state,current_state){return growingtree_app.utils.mprint.call(null,"No post-api handler for: ",message);
}));
cljs.core._add_method.call(null,growingtree_app.controllers.post_api.post_api_event_BANG_,new cljs.core.Keyword(null,"channel-activity-received","channel-activity-received",3517943815),(function (target,message,activity,previous_state,current_state){growingtree_app.commands.handle_maybe_command.call(null,target,activity,current_state);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state)))
{setTimeout((function (){return growingtree_app.ui.scroll_to_latest_message_when_appropriate_BANG_.call(null,target,new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity));
}),35);
if(cljs.core.truth_((function (){var or__3443__auto__ = new cljs.core.Keyword(null,"live?","live?",1116889157).cljs$core$IFn$_invoke$arity$1(activity);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return true;
}
})()))
{return growingtree_app.controllers.post_api.notify_if_mentioned_BANG_.call(null,activity,current_state);
} else
{return null;
}
} else
{return null;
}
}));

//# sourceMappingURL=post_api.js.map