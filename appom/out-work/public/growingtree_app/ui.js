// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.ui');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('om.core');
goog.require('dommy.core');
goog.require('om.core');
goog.require('clojure.string');
growingtree_app.ui.toggle_hide_fn = (function toggle_hide_fn(div){return (function (_){var f = document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,div)));return dommy.core.toggle_class_BANG_.call(null,f,"hide");
});
});
growingtree_app.ui.hide_div = (function hide_div(div){var f = document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,div)));return dommy.core.add_class_BANG_.call(null,f,"hide");
});
growingtree_app.ui.show_div = (function show_div(div){var f = document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,div)));return dommy.core.remove_class_BANG_.call(null,f,"hide");
});
growingtree_app.ui.hide_all_forms = (function hide_all_forms(thing_id){var forms = cljs.core.PersistentVector.EMPTY;return null;
});
growingtree_app.ui.set_text = (function set_text(span,text){var el = document.querySelector(dommy.core.selector.call(null,cljs.core.keyword.call(null,span)));return dommy.core.set_text_BANG_.call(null,el,text);
});
growingtree_app.ui.scroll_to_latest_message_BANG_ = (function scroll_to_latest_message_BANG_(target,thing_type){var thing_type__$1 = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,("#channels-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,thing_type)))));var activities = (function (){var and__3531__auto__ = thing_type__$1;if(cljs.core.truth_(and__3531__auto__))
{return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,thing_type__$1).getElementsByClassName("activity"));
} else
{return and__3531__auto__;
}
})();var latest = cljs.core.last.call(null,activities);if(cljs.core.truth_((function (){var and__3531__auto__ = thing_type__$1;if(cljs.core.truth_(and__3531__auto__))
{return latest;
} else
{return and__3531__auto__;
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
growingtree_app.ui.scroll_to_latest_message_when_appropriate_BANG_ = (function scroll_to_latest_message_when_appropriate_BANG_(target,channel_id){var channel_el = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,("#channels-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel_id))));var activities_els = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,channel_el).getElementsByClassName("activity"));var second_latest_el = cljs.core.last.call(null,cljs.core.drop_last.call(null,activities_els));var latest_el = cljs.core.last.call(null,activities_els);if(cljs.core.truth_((function (){var and__3531__auto__ = channel_el;if(cljs.core.truth_(and__3531__auto__))
{return second_latest_el;
} else
{return and__3531__auto__;
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

//# sourceMappingURL=ui.js.map