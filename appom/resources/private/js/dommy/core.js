// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3443__auto__ = elem.textContent;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__28007 = dommy.template.__GT_node_like.call(null,parent);G__28007.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__28007;
});
var append_BANG___3 = (function() { 
var G__28012__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__28008_28013 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__28009_28014 = null;var count__28010_28015 = 0;var i__28011_28016 = 0;while(true){
if((i__28011_28016 < count__28010_28015))
{var c_28017 = cljs.core._nth.call(null,chunk__28009_28014,i__28011_28016);append_BANG_.call(null,parent__$1,c_28017);
{
var G__28018 = seq__28008_28013;
var G__28019 = chunk__28009_28014;
var G__28020 = count__28010_28015;
var G__28021 = (i__28011_28016 + 1);
seq__28008_28013 = G__28018;
chunk__28009_28014 = G__28019;
count__28010_28015 = G__28020;
i__28011_28016 = G__28021;
continue;
}
} else
{var temp__4092__auto___28022 = cljs.core.seq.call(null,seq__28008_28013);if(temp__4092__auto___28022)
{var seq__28008_28023__$1 = temp__4092__auto___28022;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28008_28023__$1))
{var c__4191__auto___28024 = cljs.core.chunk_first.call(null,seq__28008_28023__$1);{
var G__28025 = cljs.core.chunk_rest.call(null,seq__28008_28023__$1);
var G__28026 = c__4191__auto___28024;
var G__28027 = cljs.core.count.call(null,c__4191__auto___28024);
var G__28028 = 0;
seq__28008_28013 = G__28025;
chunk__28009_28014 = G__28026;
count__28010_28015 = G__28027;
i__28011_28016 = G__28028;
continue;
}
} else
{var c_28029 = cljs.core.first.call(null,seq__28008_28023__$1);append_BANG_.call(null,parent__$1,c_28029);
{
var G__28030 = cljs.core.next.call(null,seq__28008_28023__$1);
var G__28031 = null;
var G__28032 = 0;
var G__28033 = 0;
seq__28008_28013 = G__28030;
chunk__28009_28014 = G__28031;
count__28010_28015 = G__28032;
i__28011_28016 = G__28033;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__28012 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28012__delegate.call(this,parent,child,more_children);};
G__28012.cljs$lang$maxFixedArity = 2;
G__28012.cljs$lang$applyTo = (function (arglist__28034){
var parent = cljs.core.first(arglist__28034);
arglist__28034 = cljs.core.next(arglist__28034);
var child = cljs.core.first(arglist__28034);
var more_children = cljs.core.rest(arglist__28034);
return G__28012__delegate(parent,child,more_children);
});
G__28012.cljs$core$IFn$_invoke$arity$variadic = G__28012__delegate;
return G__28012;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__28043__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__28039_28044 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__28040_28045 = null;var count__28041_28046 = 0;var i__28042_28047 = 0;while(true){
if((i__28042_28047 < count__28041_28046))
{var c_28048 = cljs.core._nth.call(null,chunk__28040_28045,i__28042_28047);prepend_BANG_.call(null,parent__$1,c_28048);
{
var G__28049 = seq__28039_28044;
var G__28050 = chunk__28040_28045;
var G__28051 = count__28041_28046;
var G__28052 = (i__28042_28047 + 1);
seq__28039_28044 = G__28049;
chunk__28040_28045 = G__28050;
count__28041_28046 = G__28051;
i__28042_28047 = G__28052;
continue;
}
} else
{var temp__4092__auto___28053 = cljs.core.seq.call(null,seq__28039_28044);if(temp__4092__auto___28053)
{var seq__28039_28054__$1 = temp__4092__auto___28053;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28039_28054__$1))
{var c__4191__auto___28055 = cljs.core.chunk_first.call(null,seq__28039_28054__$1);{
var G__28056 = cljs.core.chunk_rest.call(null,seq__28039_28054__$1);
var G__28057 = c__4191__auto___28055;
var G__28058 = cljs.core.count.call(null,c__4191__auto___28055);
var G__28059 = 0;
seq__28039_28044 = G__28056;
chunk__28040_28045 = G__28057;
count__28041_28046 = G__28058;
i__28042_28047 = G__28059;
continue;
}
} else
{var c_28060 = cljs.core.first.call(null,seq__28039_28054__$1);prepend_BANG_.call(null,parent__$1,c_28060);
{
var G__28061 = cljs.core.next.call(null,seq__28039_28054__$1);
var G__28062 = null;
var G__28063 = 0;
var G__28064 = 0;
seq__28039_28044 = G__28061;
chunk__28040_28045 = G__28062;
count__28041_28046 = G__28063;
i__28042_28047 = G__28064;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__28043 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28043__delegate.call(this,parent,child,more_children);};
G__28043.cljs$lang$maxFixedArity = 2;
G__28043.cljs$lang$applyTo = (function (arglist__28065){
var parent = cljs.core.first(arglist__28065);
arglist__28065 = cljs.core.next(arglist__28065);
var child = cljs.core.first(arglist__28065);
var more_children = cljs.core.rest(arglist__28065);
return G__28043__delegate(parent,child,more_children);
});
G__28043.cljs$core$IFn$_invoke$arity$variadic = G__28043__delegate;
return G__28043;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___28066 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___28066))
{var next_28067 = temp__4090__auto___28066;parent.insertBefore(actual_node,next_28067);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__28069 = dommy.template.__GT_node_like.call(null,parent);G__28069.innerHTML = "";
dommy.core.append_BANG_.call(null,G__28069,node_like);
return G__28069;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__28071 = elem__$1.parentNode;G__28071.removeChild(elem__$1);
return G__28071;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",602947571))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),new cljs.core.Keyword(null,"container","container",602947571)))))].join('')));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28077){var vec__28078 = p__28077;var k = cljs.core.nth.call(null,vec__28078,0,null);var v = cljs.core.nth.call(null,vec__28078,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t28079 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t28079 = (function (v,k,vec__28078,p__28077,container,key_selectors_map,template,selector_map,meta28080){
this.v = v;
this.k = k;
this.vec__28078 = vec__28078;
this.p__28077 = p__28077;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta28080 = meta28080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t28079.cljs$lang$type = true;
dommy.core.t28079.cljs$lang$ctorStr = "dommy.core/t28079";
dommy.core.t28079.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"dommy.core/t28079");
});
dommy.core.t28079.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t28079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28081){var self__ = this;
var _28081__$1 = this;return self__.meta28080;
});
dommy.core.t28079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28081,meta28080__$1){var self__ = this;
var _28081__$1 = this;return (new dommy.core.t28079(self__.v,self__.k,self__.vec__28078,self__.p__28077,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta28080__$1));
});
dommy.core.__GT_t28079 = (function __GT_t28079(v__$1,k__$1,vec__28078__$1,p__28077__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta28080){return (new dommy.core.t28079(v__$1,k__$1,vec__28078__$1,p__28077__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta28080));
});
}
return (new dommy.core.t28079(v,k,vec__28078,p__28077,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__28082_SHARP_){return p1__28082_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__28083_SHARP_){return !((p1__28083_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__28084){var vec__28085 = p__28084;var special_mouse_event = cljs.core.nth.call(null,vec__28085,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__28085,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3443__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3431__auto__ = related_target;if(cljs.core.truth_(and__3431__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3431__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3431__auto__ = selected_target;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__3431__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3443__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__28086){
var elem = cljs.core.first(arglist__28086);
arglist__28086 = cljs.core.next(arglist__28086);
var f = cljs.core.first(arglist__28086);
var args = cljs.core.rest(arglist__28086);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__28087_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__28087_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__28111_28134 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_28135 = cljs.core.nth.call(null,vec__28111_28134,0,null);var selector_28136 = cljs.core.nth.call(null,vec__28111_28134,1,null);var seq__28112_28137 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__28119_28138 = null;var count__28120_28139 = 0;var i__28121_28140 = 0;while(true){
if((i__28121_28140 < count__28120_28139))
{var vec__28128_28141 = cljs.core._nth.call(null,chunk__28119_28138,i__28121_28140);var orig_type_28142 = cljs.core.nth.call(null,vec__28128_28141,0,null);var f_28143 = cljs.core.nth.call(null,vec__28128_28141,1,null);var seq__28122_28144 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28142,new cljs.core.PersistentArrayMap.fromArray([orig_type_28142,cljs.core.identity], true, false)));var chunk__28124_28145 = null;var count__28125_28146 = 0;var i__28126_28147 = 0;while(true){
if((i__28126_28147 < count__28125_28146))
{var vec__28129_28148 = cljs.core._nth.call(null,chunk__28124_28145,i__28126_28147);var actual_type_28149 = cljs.core.nth.call(null,vec__28129_28148,0,null);var factory_28150 = cljs.core.nth.call(null,vec__28129_28148,1,null);var canonical_f_28151 = (cljs.core.truth_(selector_28136)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28135,selector_28136):cljs.core.identity).call(null,factory_28150.call(null,f_28143));dommy.core.update_event_listeners_BANG_.call(null,elem_28135,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28136,actual_type_28149,f_28143], null),canonical_f_28151);
if(cljs.core.truth_(elem_28135.addEventListener))
{elem_28135.addEventListener(cljs.core.name.call(null,actual_type_28149),canonical_f_28151);
} else
{elem_28135.attachEvent(cljs.core.name.call(null,actual_type_28149),canonical_f_28151);
}
{
var G__28152 = seq__28122_28144;
var G__28153 = chunk__28124_28145;
var G__28154 = count__28125_28146;
var G__28155 = (i__28126_28147 + 1);
seq__28122_28144 = G__28152;
chunk__28124_28145 = G__28153;
count__28125_28146 = G__28154;
i__28126_28147 = G__28155;
continue;
}
} else
{var temp__4092__auto___28156 = cljs.core.seq.call(null,seq__28122_28144);if(temp__4092__auto___28156)
{var seq__28122_28157__$1 = temp__4092__auto___28156;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28122_28157__$1))
{var c__4191__auto___28158 = cljs.core.chunk_first.call(null,seq__28122_28157__$1);{
var G__28159 = cljs.core.chunk_rest.call(null,seq__28122_28157__$1);
var G__28160 = c__4191__auto___28158;
var G__28161 = cljs.core.count.call(null,c__4191__auto___28158);
var G__28162 = 0;
seq__28122_28144 = G__28159;
chunk__28124_28145 = G__28160;
count__28125_28146 = G__28161;
i__28126_28147 = G__28162;
continue;
}
} else
{var vec__28130_28163 = cljs.core.first.call(null,seq__28122_28157__$1);var actual_type_28164 = cljs.core.nth.call(null,vec__28130_28163,0,null);var factory_28165 = cljs.core.nth.call(null,vec__28130_28163,1,null);var canonical_f_28166 = (cljs.core.truth_(selector_28136)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28135,selector_28136):cljs.core.identity).call(null,factory_28165.call(null,f_28143));dommy.core.update_event_listeners_BANG_.call(null,elem_28135,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28136,actual_type_28164,f_28143], null),canonical_f_28166);
if(cljs.core.truth_(elem_28135.addEventListener))
{elem_28135.addEventListener(cljs.core.name.call(null,actual_type_28164),canonical_f_28166);
} else
{elem_28135.attachEvent(cljs.core.name.call(null,actual_type_28164),canonical_f_28166);
}
{
var G__28167 = cljs.core.next.call(null,seq__28122_28157__$1);
var G__28168 = null;
var G__28169 = 0;
var G__28170 = 0;
seq__28122_28144 = G__28167;
chunk__28124_28145 = G__28168;
count__28125_28146 = G__28169;
i__28126_28147 = G__28170;
continue;
}
}
} else
{}
}
break;
}
{
var G__28171 = seq__28112_28137;
var G__28172 = chunk__28119_28138;
var G__28173 = count__28120_28139;
var G__28174 = (i__28121_28140 + 1);
seq__28112_28137 = G__28171;
chunk__28119_28138 = G__28172;
count__28120_28139 = G__28173;
i__28121_28140 = G__28174;
continue;
}
} else
{var temp__4092__auto___28175 = cljs.core.seq.call(null,seq__28112_28137);if(temp__4092__auto___28175)
{var seq__28112_28176__$1 = temp__4092__auto___28175;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28112_28176__$1))
{var c__4191__auto___28177 = cljs.core.chunk_first.call(null,seq__28112_28176__$1);{
var G__28178 = cljs.core.chunk_rest.call(null,seq__28112_28176__$1);
var G__28179 = c__4191__auto___28177;
var G__28180 = cljs.core.count.call(null,c__4191__auto___28177);
var G__28181 = 0;
seq__28112_28137 = G__28178;
chunk__28119_28138 = G__28179;
count__28120_28139 = G__28180;
i__28121_28140 = G__28181;
continue;
}
} else
{var vec__28131_28182 = cljs.core.first.call(null,seq__28112_28176__$1);var orig_type_28183 = cljs.core.nth.call(null,vec__28131_28182,0,null);var f_28184 = cljs.core.nth.call(null,vec__28131_28182,1,null);var seq__28113_28185 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28183,new cljs.core.PersistentArrayMap.fromArray([orig_type_28183,cljs.core.identity], true, false)));var chunk__28115_28186 = null;var count__28116_28187 = 0;var i__28117_28188 = 0;while(true){
if((i__28117_28188 < count__28116_28187))
{var vec__28132_28189 = cljs.core._nth.call(null,chunk__28115_28186,i__28117_28188);var actual_type_28190 = cljs.core.nth.call(null,vec__28132_28189,0,null);var factory_28191 = cljs.core.nth.call(null,vec__28132_28189,1,null);var canonical_f_28192 = (cljs.core.truth_(selector_28136)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28135,selector_28136):cljs.core.identity).call(null,factory_28191.call(null,f_28184));dommy.core.update_event_listeners_BANG_.call(null,elem_28135,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28136,actual_type_28190,f_28184], null),canonical_f_28192);
if(cljs.core.truth_(elem_28135.addEventListener))
{elem_28135.addEventListener(cljs.core.name.call(null,actual_type_28190),canonical_f_28192);
} else
{elem_28135.attachEvent(cljs.core.name.call(null,actual_type_28190),canonical_f_28192);
}
{
var G__28193 = seq__28113_28185;
var G__28194 = chunk__28115_28186;
var G__28195 = count__28116_28187;
var G__28196 = (i__28117_28188 + 1);
seq__28113_28185 = G__28193;
chunk__28115_28186 = G__28194;
count__28116_28187 = G__28195;
i__28117_28188 = G__28196;
continue;
}
} else
{var temp__4092__auto___28197__$1 = cljs.core.seq.call(null,seq__28113_28185);if(temp__4092__auto___28197__$1)
{var seq__28113_28198__$1 = temp__4092__auto___28197__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28113_28198__$1))
{var c__4191__auto___28199 = cljs.core.chunk_first.call(null,seq__28113_28198__$1);{
var G__28200 = cljs.core.chunk_rest.call(null,seq__28113_28198__$1);
var G__28201 = c__4191__auto___28199;
var G__28202 = cljs.core.count.call(null,c__4191__auto___28199);
var G__28203 = 0;
seq__28113_28185 = G__28200;
chunk__28115_28186 = G__28201;
count__28116_28187 = G__28202;
i__28117_28188 = G__28203;
continue;
}
} else
{var vec__28133_28204 = cljs.core.first.call(null,seq__28113_28198__$1);var actual_type_28205 = cljs.core.nth.call(null,vec__28133_28204,0,null);var factory_28206 = cljs.core.nth.call(null,vec__28133_28204,1,null);var canonical_f_28207 = (cljs.core.truth_(selector_28136)?cljs.core.partial.call(null,dommy.core.live_listener,elem_28135,selector_28136):cljs.core.identity).call(null,factory_28206.call(null,f_28184));dommy.core.update_event_listeners_BANG_.call(null,elem_28135,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28136,actual_type_28205,f_28184], null),canonical_f_28207);
if(cljs.core.truth_(elem_28135.addEventListener))
{elem_28135.addEventListener(cljs.core.name.call(null,actual_type_28205),canonical_f_28207);
} else
{elem_28135.attachEvent(cljs.core.name.call(null,actual_type_28205),canonical_f_28207);
}
{
var G__28208 = cljs.core.next.call(null,seq__28113_28198__$1);
var G__28209 = null;
var G__28210 = 0;
var G__28211 = 0;
seq__28113_28185 = G__28208;
chunk__28115_28186 = G__28209;
count__28116_28187 = G__28210;
i__28117_28188 = G__28211;
continue;
}
}
} else
{}
}
break;
}
{
var G__28212 = cljs.core.next.call(null,seq__28112_28176__$1);
var G__28213 = null;
var G__28214 = 0;
var G__28215 = 0;
seq__28112_28137 = G__28212;
chunk__28119_28138 = G__28213;
count__28120_28139 = G__28214;
i__28121_28140 = G__28215;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__28216){
var elem_sel = cljs.core.first(arglist__28216);
var type_fs = cljs.core.rest(arglist__28216);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__28240_28263 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_28264 = cljs.core.nth.call(null,vec__28240_28263,0,null);var selector_28265 = cljs.core.nth.call(null,vec__28240_28263,1,null);var seq__28241_28266 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__28248_28267 = null;var count__28249_28268 = 0;var i__28250_28269 = 0;while(true){
if((i__28250_28269 < count__28249_28268))
{var vec__28257_28270 = cljs.core._nth.call(null,chunk__28248_28267,i__28250_28269);var orig_type_28271 = cljs.core.nth.call(null,vec__28257_28270,0,null);var f_28272 = cljs.core.nth.call(null,vec__28257_28270,1,null);var seq__28251_28273 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28271,new cljs.core.PersistentArrayMap.fromArray([orig_type_28271,cljs.core.identity], true, false)));var chunk__28253_28274 = null;var count__28254_28275 = 0;var i__28255_28276 = 0;while(true){
if((i__28255_28276 < count__28254_28275))
{var vec__28258_28277 = cljs.core._nth.call(null,chunk__28253_28274,i__28255_28276);var actual_type_28278 = cljs.core.nth.call(null,vec__28258_28277,0,null);var __28279 = cljs.core.nth.call(null,vec__28258_28277,1,null);var keys_28280 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28265,actual_type_28278,f_28272], null);var canonical_f_28281 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28264),keys_28280);dommy.core.update_event_listeners_BANG_.call(null,elem_28264,dommy.utils.dissoc_in,keys_28280);
if(cljs.core.truth_(elem_28264.removeEventListener))
{elem_28264.removeEventListener(cljs.core.name.call(null,actual_type_28278),canonical_f_28281);
} else
{elem_28264.detachEvent(cljs.core.name.call(null,actual_type_28278),canonical_f_28281);
}
{
var G__28282 = seq__28251_28273;
var G__28283 = chunk__28253_28274;
var G__28284 = count__28254_28275;
var G__28285 = (i__28255_28276 + 1);
seq__28251_28273 = G__28282;
chunk__28253_28274 = G__28283;
count__28254_28275 = G__28284;
i__28255_28276 = G__28285;
continue;
}
} else
{var temp__4092__auto___28286 = cljs.core.seq.call(null,seq__28251_28273);if(temp__4092__auto___28286)
{var seq__28251_28287__$1 = temp__4092__auto___28286;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28251_28287__$1))
{var c__4191__auto___28288 = cljs.core.chunk_first.call(null,seq__28251_28287__$1);{
var G__28289 = cljs.core.chunk_rest.call(null,seq__28251_28287__$1);
var G__28290 = c__4191__auto___28288;
var G__28291 = cljs.core.count.call(null,c__4191__auto___28288);
var G__28292 = 0;
seq__28251_28273 = G__28289;
chunk__28253_28274 = G__28290;
count__28254_28275 = G__28291;
i__28255_28276 = G__28292;
continue;
}
} else
{var vec__28259_28293 = cljs.core.first.call(null,seq__28251_28287__$1);var actual_type_28294 = cljs.core.nth.call(null,vec__28259_28293,0,null);var __28295 = cljs.core.nth.call(null,vec__28259_28293,1,null);var keys_28296 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28265,actual_type_28294,f_28272], null);var canonical_f_28297 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28264),keys_28296);dommy.core.update_event_listeners_BANG_.call(null,elem_28264,dommy.utils.dissoc_in,keys_28296);
if(cljs.core.truth_(elem_28264.removeEventListener))
{elem_28264.removeEventListener(cljs.core.name.call(null,actual_type_28294),canonical_f_28297);
} else
{elem_28264.detachEvent(cljs.core.name.call(null,actual_type_28294),canonical_f_28297);
}
{
var G__28298 = cljs.core.next.call(null,seq__28251_28287__$1);
var G__28299 = null;
var G__28300 = 0;
var G__28301 = 0;
seq__28251_28273 = G__28298;
chunk__28253_28274 = G__28299;
count__28254_28275 = G__28300;
i__28255_28276 = G__28301;
continue;
}
}
} else
{}
}
break;
}
{
var G__28302 = seq__28241_28266;
var G__28303 = chunk__28248_28267;
var G__28304 = count__28249_28268;
var G__28305 = (i__28250_28269 + 1);
seq__28241_28266 = G__28302;
chunk__28248_28267 = G__28303;
count__28249_28268 = G__28304;
i__28250_28269 = G__28305;
continue;
}
} else
{var temp__4092__auto___28306 = cljs.core.seq.call(null,seq__28241_28266);if(temp__4092__auto___28306)
{var seq__28241_28307__$1 = temp__4092__auto___28306;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28241_28307__$1))
{var c__4191__auto___28308 = cljs.core.chunk_first.call(null,seq__28241_28307__$1);{
var G__28309 = cljs.core.chunk_rest.call(null,seq__28241_28307__$1);
var G__28310 = c__4191__auto___28308;
var G__28311 = cljs.core.count.call(null,c__4191__auto___28308);
var G__28312 = 0;
seq__28241_28266 = G__28309;
chunk__28248_28267 = G__28310;
count__28249_28268 = G__28311;
i__28250_28269 = G__28312;
continue;
}
} else
{var vec__28260_28313 = cljs.core.first.call(null,seq__28241_28307__$1);var orig_type_28314 = cljs.core.nth.call(null,vec__28260_28313,0,null);var f_28315 = cljs.core.nth.call(null,vec__28260_28313,1,null);var seq__28242_28316 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_28314,new cljs.core.PersistentArrayMap.fromArray([orig_type_28314,cljs.core.identity], true, false)));var chunk__28244_28317 = null;var count__28245_28318 = 0;var i__28246_28319 = 0;while(true){
if((i__28246_28319 < count__28245_28318))
{var vec__28261_28320 = cljs.core._nth.call(null,chunk__28244_28317,i__28246_28319);var actual_type_28321 = cljs.core.nth.call(null,vec__28261_28320,0,null);var __28322 = cljs.core.nth.call(null,vec__28261_28320,1,null);var keys_28323 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28265,actual_type_28321,f_28315], null);var canonical_f_28324 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28264),keys_28323);dommy.core.update_event_listeners_BANG_.call(null,elem_28264,dommy.utils.dissoc_in,keys_28323);
if(cljs.core.truth_(elem_28264.removeEventListener))
{elem_28264.removeEventListener(cljs.core.name.call(null,actual_type_28321),canonical_f_28324);
} else
{elem_28264.detachEvent(cljs.core.name.call(null,actual_type_28321),canonical_f_28324);
}
{
var G__28325 = seq__28242_28316;
var G__28326 = chunk__28244_28317;
var G__28327 = count__28245_28318;
var G__28328 = (i__28246_28319 + 1);
seq__28242_28316 = G__28325;
chunk__28244_28317 = G__28326;
count__28245_28318 = G__28327;
i__28246_28319 = G__28328;
continue;
}
} else
{var temp__4092__auto___28329__$1 = cljs.core.seq.call(null,seq__28242_28316);if(temp__4092__auto___28329__$1)
{var seq__28242_28330__$1 = temp__4092__auto___28329__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28242_28330__$1))
{var c__4191__auto___28331 = cljs.core.chunk_first.call(null,seq__28242_28330__$1);{
var G__28332 = cljs.core.chunk_rest.call(null,seq__28242_28330__$1);
var G__28333 = c__4191__auto___28331;
var G__28334 = cljs.core.count.call(null,c__4191__auto___28331);
var G__28335 = 0;
seq__28242_28316 = G__28332;
chunk__28244_28317 = G__28333;
count__28245_28318 = G__28334;
i__28246_28319 = G__28335;
continue;
}
} else
{var vec__28262_28336 = cljs.core.first.call(null,seq__28242_28330__$1);var actual_type_28337 = cljs.core.nth.call(null,vec__28262_28336,0,null);var __28338 = cljs.core.nth.call(null,vec__28262_28336,1,null);var keys_28339 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28265,actual_type_28337,f_28315], null);var canonical_f_28340 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_28264),keys_28339);dommy.core.update_event_listeners_BANG_.call(null,elem_28264,dommy.utils.dissoc_in,keys_28339);
if(cljs.core.truth_(elem_28264.removeEventListener))
{elem_28264.removeEventListener(cljs.core.name.call(null,actual_type_28337),canonical_f_28340);
} else
{elem_28264.detachEvent(cljs.core.name.call(null,actual_type_28337),canonical_f_28340);
}
{
var G__28341 = cljs.core.next.call(null,seq__28242_28330__$1);
var G__28342 = null;
var G__28343 = 0;
var G__28344 = 0;
seq__28242_28316 = G__28341;
chunk__28244_28317 = G__28342;
count__28245_28318 = G__28343;
i__28246_28319 = G__28344;
continue;
}
}
} else
{}
}
break;
}
{
var G__28345 = cljs.core.next.call(null,seq__28241_28307__$1);
var G__28346 = null;
var G__28347 = 0;
var G__28348 = 0;
seq__28241_28266 = G__28345;
chunk__28248_28267 = G__28346;
count__28249_28268 = G__28347;
i__28250_28269 = G__28348;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__28349){
var elem_sel = cljs.core.first(arglist__28349);
var type_fs = cljs.core.rest(arglist__28349);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__28357_28364 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_28365 = cljs.core.nth.call(null,vec__28357_28364,0,null);var selector_28366 = cljs.core.nth.call(null,vec__28357_28364,1,null);var seq__28358_28367 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__28359_28368 = null;var count__28360_28369 = 0;var i__28361_28370 = 0;while(true){
if((i__28361_28370 < count__28360_28369))
{var vec__28362_28371 = cljs.core._nth.call(null,chunk__28359_28368,i__28361_28370);var type_28372 = cljs.core.nth.call(null,vec__28362_28371,0,null);var f_28373 = cljs.core.nth.call(null,vec__28362_28371,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_28372,((function (seq__28358_28367,chunk__28359_28368,count__28360_28369,i__28361_28370,vec__28362_28371,type_28372,f_28373){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_28372,this_fn);
return f_28373.call(null,e);
});})(seq__28358_28367,chunk__28359_28368,count__28360_28369,i__28361_28370,vec__28362_28371,type_28372,f_28373))
);
{
var G__28374 = seq__28358_28367;
var G__28375 = chunk__28359_28368;
var G__28376 = count__28360_28369;
var G__28377 = (i__28361_28370 + 1);
seq__28358_28367 = G__28374;
chunk__28359_28368 = G__28375;
count__28360_28369 = G__28376;
i__28361_28370 = G__28377;
continue;
}
} else
{var temp__4092__auto___28378 = cljs.core.seq.call(null,seq__28358_28367);if(temp__4092__auto___28378)
{var seq__28358_28379__$1 = temp__4092__auto___28378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28358_28379__$1))
{var c__4191__auto___28380 = cljs.core.chunk_first.call(null,seq__28358_28379__$1);{
var G__28381 = cljs.core.chunk_rest.call(null,seq__28358_28379__$1);
var G__28382 = c__4191__auto___28380;
var G__28383 = cljs.core.count.call(null,c__4191__auto___28380);
var G__28384 = 0;
seq__28358_28367 = G__28381;
chunk__28359_28368 = G__28382;
count__28360_28369 = G__28383;
i__28361_28370 = G__28384;
continue;
}
} else
{var vec__28363_28385 = cljs.core.first.call(null,seq__28358_28379__$1);var type_28386 = cljs.core.nth.call(null,vec__28363_28385,0,null);var f_28387 = cljs.core.nth.call(null,vec__28363_28385,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_28386,((function (seq__28358_28367,chunk__28359_28368,count__28360_28369,i__28361_28370,vec__28363_28385,type_28386,f_28387,seq__28358_28379__$1,temp__4092__auto___28378){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_28386,this_fn);
return f_28387.call(null,e);
});})(seq__28358_28367,chunk__28359_28368,count__28360_28369,i__28361_28370,vec__28363_28385,type_28386,f_28387,seq__28358_28379__$1,temp__4092__auto___28378))
);
{
var G__28388 = cljs.core.next.call(null,seq__28358_28379__$1);
var G__28389 = null;
var G__28390 = 0;
var G__28391 = 0;
seq__28358_28367 = G__28388;
chunk__28359_28368 = G__28389;
count__28360_28369 = G__28390;
i__28361_28370 = G__28391;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__28392){
var elem_sel = cljs.core.first(arglist__28392);
var type_fs = cljs.core.rest(arglist__28392);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__28393){var vec__28395 = p__28393;var update_event_BANG_ = cljs.core.nth.call(null,vec__28395,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3443__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__28393 = null;if (arguments.length > 2) {
  p__28393 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__28393);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__28396){
var node = cljs.core.first(arglist__28396);
arglist__28396 = cljs.core.next(arglist__28396);
var event_type = cljs.core.first(arglist__28396);
var p__28393 = cljs.core.rest(arglist__28396);
return fire_BANG___delegate(node,event_type,p__28393);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
