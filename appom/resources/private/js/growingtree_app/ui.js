// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.ui');
goog.require('cljs.core');
goog.require('growingtree_app.useful');
goog.require('cljs.core.async');
goog.require('growingtree_app.api.mock');
goog.require('growingtree_app.components.app');
goog.require('growingtree_app.components.app');
goog.require('cljs.core.async');
goog.require('growingtree_app.api.mock');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.mock_data');
goog.require('growingtree_app.useful');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('growingtree_app.datetime');
goog.require('om.core');
goog.require('growingtree_app.mock_data');
goog.require('clojure.string');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('om.dom');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.datetime');
goog.require('dommy.core');
growingtree_app.ui.scroll_to_latest_message_BANG_ = (function scroll_to_latest_message_BANG_(target,thing_type){var thing_type__$1 = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,[cljs.core.str("#channels-"),cljs.core.str(cljs.core.name.call(null,thing_type))].join('')));var activities = (function (){var and__3431__auto__ = thing_type__$1;if(cljs.core.truth_(and__3431__auto__))
{return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,thing_type__$1).getElementsByClassName("activity"));
} else
{return and__3431__auto__;
}
})();var latest = cljs.core.last.call(null,activities);if(cljs.core.truth_((function (){var and__3431__auto__ = thing_type__$1;if(cljs.core.truth_(and__3431__auto__))
{return latest;
} else
{return and__3431__auto__;
}
})()))
{return thing_type__$1.scrollTop = latest.offsetTop;
} else
{return null;
}
});
/**
* If the second-to-last message is visible in the chat viewport, then
* scroll to the latest message
*/
growingtree_app.ui.scroll_to_latest_message_when_appropriate_BANG_ = (function scroll_to_latest_message_when_appropriate_BANG_(target,channel_id){var channel_el = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,[cljs.core.str("#channels-"),cljs.core.str(channel_id)].join('')));var activities_els = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,channel_el).getElementsByClassName("activity"));var second_latest_el = cljs.core.last.call(null,cljs.core.drop_last.call(null,activities_els));var latest_el = cljs.core.last.call(null,activities_els);if(cljs.core.truth_((function (){var and__3431__auto__ = channel_el;if(cljs.core.truth_(and__3431__auto__))
{return second_latest_el;
} else
{return and__3431__auto__;
}
})()))
{var channel_view_bottom = (channel_el.scrollTop + channel_el.clientHeight);if((channel_view_bottom > second_latest_el.offsetTop))
{return channel_el.scrollTop = latest_el.offsetTop;
} else
{return null;
}
} else
{return null;
}
});
