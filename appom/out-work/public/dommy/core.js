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
var append_BANG___2 = (function (parent,child){var G__16356 = dommy.template.__GT_node_like.call(null,parent);G__16356.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__16356;
});
var append_BANG___3 = (function() { 
var G__16361__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16357_16362 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16358_16363 = null;var count__16359_16364 = 0;var i__16360_16365 = 0;while(true){
if((i__16360_16365 < count__16359_16364))
{var c_16366 = cljs.core._nth.call(null,chunk__16358_16363,i__16360_16365);append_BANG_.call(null,parent__$1,c_16366);
{
var G__16367 = seq__16357_16362;
var G__16368 = chunk__16358_16363;
var G__16369 = count__16359_16364;
var G__16370 = (i__16360_16365 + 1);
seq__16357_16362 = G__16367;
chunk__16358_16363 = G__16368;
count__16359_16364 = G__16369;
i__16360_16365 = G__16370;
continue;
}
} else
{var temp__4092__auto___16371 = cljs.core.seq.call(null,seq__16357_16362);if(temp__4092__auto___16371)
{var seq__16357_16372__$1 = temp__4092__auto___16371;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16357_16372__$1))
{var c__4191__auto___16373 = cljs.core.chunk_first.call(null,seq__16357_16372__$1);{
var G__16374 = cljs.core.chunk_rest.call(null,seq__16357_16372__$1);
var G__16375 = c__4191__auto___16373;
var G__16376 = cljs.core.count.call(null,c__4191__auto___16373);
var G__16377 = 0;
seq__16357_16362 = G__16374;
chunk__16358_16363 = G__16375;
count__16359_16364 = G__16376;
i__16360_16365 = G__16377;
continue;
}
} else
{var c_16378 = cljs.core.first.call(null,seq__16357_16372__$1);append_BANG_.call(null,parent__$1,c_16378);
{
var G__16379 = cljs.core.next.call(null,seq__16357_16372__$1);
var G__16380 = null;
var G__16381 = 0;
var G__16382 = 0;
seq__16357_16362 = G__16379;
chunk__16358_16363 = G__16380;
count__16359_16364 = G__16381;
i__16360_16365 = G__16382;
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
var G__16361 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16361__delegate.call(this,parent,child,more_children);};
G__16361.cljs$lang$maxFixedArity = 2;
G__16361.cljs$lang$applyTo = (function (arglist__16383){
var parent = cljs.core.first(arglist__16383);
arglist__16383 = cljs.core.next(arglist__16383);
var child = cljs.core.first(arglist__16383);
var more_children = cljs.core.rest(arglist__16383);
return G__16361__delegate(parent,child,more_children);
});
G__16361.cljs$core$IFn$_invoke$arity$variadic = G__16361__delegate;
return G__16361;
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
var G__16392__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16388_16393 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16389_16394 = null;var count__16390_16395 = 0;var i__16391_16396 = 0;while(true){
if((i__16391_16396 < count__16390_16395))
{var c_16397 = cljs.core._nth.call(null,chunk__16389_16394,i__16391_16396);prepend_BANG_.call(null,parent__$1,c_16397);
{
var G__16398 = seq__16388_16393;
var G__16399 = chunk__16389_16394;
var G__16400 = count__16390_16395;
var G__16401 = (i__16391_16396 + 1);
seq__16388_16393 = G__16398;
chunk__16389_16394 = G__16399;
count__16390_16395 = G__16400;
i__16391_16396 = G__16401;
continue;
}
} else
{var temp__4092__auto___16402 = cljs.core.seq.call(null,seq__16388_16393);if(temp__4092__auto___16402)
{var seq__16388_16403__$1 = temp__4092__auto___16402;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16388_16403__$1))
{var c__4191__auto___16404 = cljs.core.chunk_first.call(null,seq__16388_16403__$1);{
var G__16405 = cljs.core.chunk_rest.call(null,seq__16388_16403__$1);
var G__16406 = c__4191__auto___16404;
var G__16407 = cljs.core.count.call(null,c__4191__auto___16404);
var G__16408 = 0;
seq__16388_16393 = G__16405;
chunk__16389_16394 = G__16406;
count__16390_16395 = G__16407;
i__16391_16396 = G__16408;
continue;
}
} else
{var c_16409 = cljs.core.first.call(null,seq__16388_16403__$1);prepend_BANG_.call(null,parent__$1,c_16409);
{
var G__16410 = cljs.core.next.call(null,seq__16388_16403__$1);
var G__16411 = null;
var G__16412 = 0;
var G__16413 = 0;
seq__16388_16393 = G__16410;
chunk__16389_16394 = G__16411;
count__16390_16395 = G__16412;
i__16391_16396 = G__16413;
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
var G__16392 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16392__delegate.call(this,parent,child,more_children);};
G__16392.cljs$lang$maxFixedArity = 2;
G__16392.cljs$lang$applyTo = (function (arglist__16414){
var parent = cljs.core.first(arglist__16414);
arglist__16414 = cljs.core.next(arglist__16414);
var child = cljs.core.first(arglist__16414);
var more_children = cljs.core.rest(arglist__16414);
return G__16392__delegate(parent,child,more_children);
});
G__16392.cljs$core$IFn$_invoke$arity$variadic = G__16392__delegate;
return G__16392;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___16415 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___16415))
{var next_16416 = temp__4090__auto___16415;parent.insertBefore(actual_node,next_16416);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__16418 = dommy.template.__GT_node_like.call(null,parent);G__16418.innerHTML = "";
dommy.core.append_BANG_.call(null,G__16418,node_like);
return G__16418;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__16420 = elem__$1.parentNode;G__16420.removeChild(elem__$1);
return G__16420;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16426){var vec__16427 = p__16426;var k = cljs.core.nth.call(null,vec__16427,0,null);var v = cljs.core.nth.call(null,vec__16427,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t16428 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t16428 = (function (v,k,vec__16427,p__16426,container,key_selectors_map,template,selector_map,meta16429){
this.v = v;
this.k = k;
this.vec__16427 = vec__16427;
this.p__16426 = p__16426;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta16429 = meta16429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t16428.cljs$lang$type = true;
dommy.core.t16428.cljs$lang$ctorStr = "dommy.core/t16428";
dommy.core.t16428.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"dommy.core/t16428");
});
dommy.core.t16428.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t16428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16430){var self__ = this;
var _16430__$1 = this;return self__.meta16429;
});
dommy.core.t16428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16430,meta16429__$1){var self__ = this;
var _16430__$1 = this;return (new dommy.core.t16428(self__.v,self__.k,self__.vec__16427,self__.p__16426,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta16429__$1));
});
dommy.core.__GT_t16428 = (function __GT_t16428(v__$1,k__$1,vec__16427__$1,p__16426__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16429){return (new dommy.core.t16428(v__$1,k__$1,vec__16427__$1,p__16426__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16429));
});
}
return (new dommy.core.t16428(v,k,vec__16427,p__16426,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__16431_SHARP_){return p1__16431_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__16432_SHARP_){return !((p1__16432_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16433){var vec__16434 = p__16433;var special_mouse_event = cljs.core.nth.call(null,vec__16434,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__16434,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3443__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3443__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__16435){
var elem = cljs.core.first(arglist__16435);
arglist__16435 = cljs.core.next(arglist__16435);
var f = cljs.core.first(arglist__16435);
var args = cljs.core.rest(arglist__16435);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__16436_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__16436_SHARP_));
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
var vec__16460_16483 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16484 = cljs.core.nth.call(null,vec__16460_16483,0,null);var selector_16485 = cljs.core.nth.call(null,vec__16460_16483,1,null);var seq__16461_16486 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16468_16487 = null;var count__16469_16488 = 0;var i__16470_16489 = 0;while(true){
if((i__16470_16489 < count__16469_16488))
{var vec__16477_16490 = cljs.core._nth.call(null,chunk__16468_16487,i__16470_16489);var orig_type_16491 = cljs.core.nth.call(null,vec__16477_16490,0,null);var f_16492 = cljs.core.nth.call(null,vec__16477_16490,1,null);var seq__16471_16493 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16491,new cljs.core.PersistentArrayMap.fromArray([orig_type_16491,cljs.core.identity], true, false)));var chunk__16473_16494 = null;var count__16474_16495 = 0;var i__16475_16496 = 0;while(true){
if((i__16475_16496 < count__16474_16495))
{var vec__16478_16497 = cljs.core._nth.call(null,chunk__16473_16494,i__16475_16496);var actual_type_16498 = cljs.core.nth.call(null,vec__16478_16497,0,null);var factory_16499 = cljs.core.nth.call(null,vec__16478_16497,1,null);var canonical_f_16500 = (cljs.core.truth_(selector_16485)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16484,selector_16485):cljs.core.identity).call(null,factory_16499.call(null,f_16492));dommy.core.update_event_listeners_BANG_.call(null,elem_16484,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16485,actual_type_16498,f_16492], null),canonical_f_16500);
if(cljs.core.truth_(elem_16484.addEventListener))
{elem_16484.addEventListener(cljs.core.name.call(null,actual_type_16498),canonical_f_16500);
} else
{elem_16484.attachEvent(cljs.core.name.call(null,actual_type_16498),canonical_f_16500);
}
{
var G__16501 = seq__16471_16493;
var G__16502 = chunk__16473_16494;
var G__16503 = count__16474_16495;
var G__16504 = (i__16475_16496 + 1);
seq__16471_16493 = G__16501;
chunk__16473_16494 = G__16502;
count__16474_16495 = G__16503;
i__16475_16496 = G__16504;
continue;
}
} else
{var temp__4092__auto___16505 = cljs.core.seq.call(null,seq__16471_16493);if(temp__4092__auto___16505)
{var seq__16471_16506__$1 = temp__4092__auto___16505;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16471_16506__$1))
{var c__4191__auto___16507 = cljs.core.chunk_first.call(null,seq__16471_16506__$1);{
var G__16508 = cljs.core.chunk_rest.call(null,seq__16471_16506__$1);
var G__16509 = c__4191__auto___16507;
var G__16510 = cljs.core.count.call(null,c__4191__auto___16507);
var G__16511 = 0;
seq__16471_16493 = G__16508;
chunk__16473_16494 = G__16509;
count__16474_16495 = G__16510;
i__16475_16496 = G__16511;
continue;
}
} else
{var vec__16479_16512 = cljs.core.first.call(null,seq__16471_16506__$1);var actual_type_16513 = cljs.core.nth.call(null,vec__16479_16512,0,null);var factory_16514 = cljs.core.nth.call(null,vec__16479_16512,1,null);var canonical_f_16515 = (cljs.core.truth_(selector_16485)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16484,selector_16485):cljs.core.identity).call(null,factory_16514.call(null,f_16492));dommy.core.update_event_listeners_BANG_.call(null,elem_16484,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16485,actual_type_16513,f_16492], null),canonical_f_16515);
if(cljs.core.truth_(elem_16484.addEventListener))
{elem_16484.addEventListener(cljs.core.name.call(null,actual_type_16513),canonical_f_16515);
} else
{elem_16484.attachEvent(cljs.core.name.call(null,actual_type_16513),canonical_f_16515);
}
{
var G__16516 = cljs.core.next.call(null,seq__16471_16506__$1);
var G__16517 = null;
var G__16518 = 0;
var G__16519 = 0;
seq__16471_16493 = G__16516;
chunk__16473_16494 = G__16517;
count__16474_16495 = G__16518;
i__16475_16496 = G__16519;
continue;
}
}
} else
{}
}
break;
}
{
var G__16520 = seq__16461_16486;
var G__16521 = chunk__16468_16487;
var G__16522 = count__16469_16488;
var G__16523 = (i__16470_16489 + 1);
seq__16461_16486 = G__16520;
chunk__16468_16487 = G__16521;
count__16469_16488 = G__16522;
i__16470_16489 = G__16523;
continue;
}
} else
{var temp__4092__auto___16524 = cljs.core.seq.call(null,seq__16461_16486);if(temp__4092__auto___16524)
{var seq__16461_16525__$1 = temp__4092__auto___16524;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16461_16525__$1))
{var c__4191__auto___16526 = cljs.core.chunk_first.call(null,seq__16461_16525__$1);{
var G__16527 = cljs.core.chunk_rest.call(null,seq__16461_16525__$1);
var G__16528 = c__4191__auto___16526;
var G__16529 = cljs.core.count.call(null,c__4191__auto___16526);
var G__16530 = 0;
seq__16461_16486 = G__16527;
chunk__16468_16487 = G__16528;
count__16469_16488 = G__16529;
i__16470_16489 = G__16530;
continue;
}
} else
{var vec__16480_16531 = cljs.core.first.call(null,seq__16461_16525__$1);var orig_type_16532 = cljs.core.nth.call(null,vec__16480_16531,0,null);var f_16533 = cljs.core.nth.call(null,vec__16480_16531,1,null);var seq__16462_16534 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16532,new cljs.core.PersistentArrayMap.fromArray([orig_type_16532,cljs.core.identity], true, false)));var chunk__16464_16535 = null;var count__16465_16536 = 0;var i__16466_16537 = 0;while(true){
if((i__16466_16537 < count__16465_16536))
{var vec__16481_16538 = cljs.core._nth.call(null,chunk__16464_16535,i__16466_16537);var actual_type_16539 = cljs.core.nth.call(null,vec__16481_16538,0,null);var factory_16540 = cljs.core.nth.call(null,vec__16481_16538,1,null);var canonical_f_16541 = (cljs.core.truth_(selector_16485)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16484,selector_16485):cljs.core.identity).call(null,factory_16540.call(null,f_16533));dommy.core.update_event_listeners_BANG_.call(null,elem_16484,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16485,actual_type_16539,f_16533], null),canonical_f_16541);
if(cljs.core.truth_(elem_16484.addEventListener))
{elem_16484.addEventListener(cljs.core.name.call(null,actual_type_16539),canonical_f_16541);
} else
{elem_16484.attachEvent(cljs.core.name.call(null,actual_type_16539),canonical_f_16541);
}
{
var G__16542 = seq__16462_16534;
var G__16543 = chunk__16464_16535;
var G__16544 = count__16465_16536;
var G__16545 = (i__16466_16537 + 1);
seq__16462_16534 = G__16542;
chunk__16464_16535 = G__16543;
count__16465_16536 = G__16544;
i__16466_16537 = G__16545;
continue;
}
} else
{var temp__4092__auto___16546__$1 = cljs.core.seq.call(null,seq__16462_16534);if(temp__4092__auto___16546__$1)
{var seq__16462_16547__$1 = temp__4092__auto___16546__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16462_16547__$1))
{var c__4191__auto___16548 = cljs.core.chunk_first.call(null,seq__16462_16547__$1);{
var G__16549 = cljs.core.chunk_rest.call(null,seq__16462_16547__$1);
var G__16550 = c__4191__auto___16548;
var G__16551 = cljs.core.count.call(null,c__4191__auto___16548);
var G__16552 = 0;
seq__16462_16534 = G__16549;
chunk__16464_16535 = G__16550;
count__16465_16536 = G__16551;
i__16466_16537 = G__16552;
continue;
}
} else
{var vec__16482_16553 = cljs.core.first.call(null,seq__16462_16547__$1);var actual_type_16554 = cljs.core.nth.call(null,vec__16482_16553,0,null);var factory_16555 = cljs.core.nth.call(null,vec__16482_16553,1,null);var canonical_f_16556 = (cljs.core.truth_(selector_16485)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16484,selector_16485):cljs.core.identity).call(null,factory_16555.call(null,f_16533));dommy.core.update_event_listeners_BANG_.call(null,elem_16484,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16485,actual_type_16554,f_16533], null),canonical_f_16556);
if(cljs.core.truth_(elem_16484.addEventListener))
{elem_16484.addEventListener(cljs.core.name.call(null,actual_type_16554),canonical_f_16556);
} else
{elem_16484.attachEvent(cljs.core.name.call(null,actual_type_16554),canonical_f_16556);
}
{
var G__16557 = cljs.core.next.call(null,seq__16462_16547__$1);
var G__16558 = null;
var G__16559 = 0;
var G__16560 = 0;
seq__16462_16534 = G__16557;
chunk__16464_16535 = G__16558;
count__16465_16536 = G__16559;
i__16466_16537 = G__16560;
continue;
}
}
} else
{}
}
break;
}
{
var G__16561 = cljs.core.next.call(null,seq__16461_16525__$1);
var G__16562 = null;
var G__16563 = 0;
var G__16564 = 0;
seq__16461_16486 = G__16561;
chunk__16468_16487 = G__16562;
count__16469_16488 = G__16563;
i__16470_16489 = G__16564;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__16565){
var elem_sel = cljs.core.first(arglist__16565);
var type_fs = cljs.core.rest(arglist__16565);
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
var vec__16589_16612 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16613 = cljs.core.nth.call(null,vec__16589_16612,0,null);var selector_16614 = cljs.core.nth.call(null,vec__16589_16612,1,null);var seq__16590_16615 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16597_16616 = null;var count__16598_16617 = 0;var i__16599_16618 = 0;while(true){
if((i__16599_16618 < count__16598_16617))
{var vec__16606_16619 = cljs.core._nth.call(null,chunk__16597_16616,i__16599_16618);var orig_type_16620 = cljs.core.nth.call(null,vec__16606_16619,0,null);var f_16621 = cljs.core.nth.call(null,vec__16606_16619,1,null);var seq__16600_16622 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16620,new cljs.core.PersistentArrayMap.fromArray([orig_type_16620,cljs.core.identity], true, false)));var chunk__16602_16623 = null;var count__16603_16624 = 0;var i__16604_16625 = 0;while(true){
if((i__16604_16625 < count__16603_16624))
{var vec__16607_16626 = cljs.core._nth.call(null,chunk__16602_16623,i__16604_16625);var actual_type_16627 = cljs.core.nth.call(null,vec__16607_16626,0,null);var __16628 = cljs.core.nth.call(null,vec__16607_16626,1,null);var keys_16629 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16614,actual_type_16627,f_16621], null);var canonical_f_16630 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16613),keys_16629);dommy.core.update_event_listeners_BANG_.call(null,elem_16613,dommy.utils.dissoc_in,keys_16629);
if(cljs.core.truth_(elem_16613.removeEventListener))
{elem_16613.removeEventListener(cljs.core.name.call(null,actual_type_16627),canonical_f_16630);
} else
{elem_16613.detachEvent(cljs.core.name.call(null,actual_type_16627),canonical_f_16630);
}
{
var G__16631 = seq__16600_16622;
var G__16632 = chunk__16602_16623;
var G__16633 = count__16603_16624;
var G__16634 = (i__16604_16625 + 1);
seq__16600_16622 = G__16631;
chunk__16602_16623 = G__16632;
count__16603_16624 = G__16633;
i__16604_16625 = G__16634;
continue;
}
} else
{var temp__4092__auto___16635 = cljs.core.seq.call(null,seq__16600_16622);if(temp__4092__auto___16635)
{var seq__16600_16636__$1 = temp__4092__auto___16635;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16600_16636__$1))
{var c__4191__auto___16637 = cljs.core.chunk_first.call(null,seq__16600_16636__$1);{
var G__16638 = cljs.core.chunk_rest.call(null,seq__16600_16636__$1);
var G__16639 = c__4191__auto___16637;
var G__16640 = cljs.core.count.call(null,c__4191__auto___16637);
var G__16641 = 0;
seq__16600_16622 = G__16638;
chunk__16602_16623 = G__16639;
count__16603_16624 = G__16640;
i__16604_16625 = G__16641;
continue;
}
} else
{var vec__16608_16642 = cljs.core.first.call(null,seq__16600_16636__$1);var actual_type_16643 = cljs.core.nth.call(null,vec__16608_16642,0,null);var __16644 = cljs.core.nth.call(null,vec__16608_16642,1,null);var keys_16645 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16614,actual_type_16643,f_16621], null);var canonical_f_16646 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16613),keys_16645);dommy.core.update_event_listeners_BANG_.call(null,elem_16613,dommy.utils.dissoc_in,keys_16645);
if(cljs.core.truth_(elem_16613.removeEventListener))
{elem_16613.removeEventListener(cljs.core.name.call(null,actual_type_16643),canonical_f_16646);
} else
{elem_16613.detachEvent(cljs.core.name.call(null,actual_type_16643),canonical_f_16646);
}
{
var G__16647 = cljs.core.next.call(null,seq__16600_16636__$1);
var G__16648 = null;
var G__16649 = 0;
var G__16650 = 0;
seq__16600_16622 = G__16647;
chunk__16602_16623 = G__16648;
count__16603_16624 = G__16649;
i__16604_16625 = G__16650;
continue;
}
}
} else
{}
}
break;
}
{
var G__16651 = seq__16590_16615;
var G__16652 = chunk__16597_16616;
var G__16653 = count__16598_16617;
var G__16654 = (i__16599_16618 + 1);
seq__16590_16615 = G__16651;
chunk__16597_16616 = G__16652;
count__16598_16617 = G__16653;
i__16599_16618 = G__16654;
continue;
}
} else
{var temp__4092__auto___16655 = cljs.core.seq.call(null,seq__16590_16615);if(temp__4092__auto___16655)
{var seq__16590_16656__$1 = temp__4092__auto___16655;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16590_16656__$1))
{var c__4191__auto___16657 = cljs.core.chunk_first.call(null,seq__16590_16656__$1);{
var G__16658 = cljs.core.chunk_rest.call(null,seq__16590_16656__$1);
var G__16659 = c__4191__auto___16657;
var G__16660 = cljs.core.count.call(null,c__4191__auto___16657);
var G__16661 = 0;
seq__16590_16615 = G__16658;
chunk__16597_16616 = G__16659;
count__16598_16617 = G__16660;
i__16599_16618 = G__16661;
continue;
}
} else
{var vec__16609_16662 = cljs.core.first.call(null,seq__16590_16656__$1);var orig_type_16663 = cljs.core.nth.call(null,vec__16609_16662,0,null);var f_16664 = cljs.core.nth.call(null,vec__16609_16662,1,null);var seq__16591_16665 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16663,new cljs.core.PersistentArrayMap.fromArray([orig_type_16663,cljs.core.identity], true, false)));var chunk__16593_16666 = null;var count__16594_16667 = 0;var i__16595_16668 = 0;while(true){
if((i__16595_16668 < count__16594_16667))
{var vec__16610_16669 = cljs.core._nth.call(null,chunk__16593_16666,i__16595_16668);var actual_type_16670 = cljs.core.nth.call(null,vec__16610_16669,0,null);var __16671 = cljs.core.nth.call(null,vec__16610_16669,1,null);var keys_16672 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16614,actual_type_16670,f_16664], null);var canonical_f_16673 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16613),keys_16672);dommy.core.update_event_listeners_BANG_.call(null,elem_16613,dommy.utils.dissoc_in,keys_16672);
if(cljs.core.truth_(elem_16613.removeEventListener))
{elem_16613.removeEventListener(cljs.core.name.call(null,actual_type_16670),canonical_f_16673);
} else
{elem_16613.detachEvent(cljs.core.name.call(null,actual_type_16670),canonical_f_16673);
}
{
var G__16674 = seq__16591_16665;
var G__16675 = chunk__16593_16666;
var G__16676 = count__16594_16667;
var G__16677 = (i__16595_16668 + 1);
seq__16591_16665 = G__16674;
chunk__16593_16666 = G__16675;
count__16594_16667 = G__16676;
i__16595_16668 = G__16677;
continue;
}
} else
{var temp__4092__auto___16678__$1 = cljs.core.seq.call(null,seq__16591_16665);if(temp__4092__auto___16678__$1)
{var seq__16591_16679__$1 = temp__4092__auto___16678__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16591_16679__$1))
{var c__4191__auto___16680 = cljs.core.chunk_first.call(null,seq__16591_16679__$1);{
var G__16681 = cljs.core.chunk_rest.call(null,seq__16591_16679__$1);
var G__16682 = c__4191__auto___16680;
var G__16683 = cljs.core.count.call(null,c__4191__auto___16680);
var G__16684 = 0;
seq__16591_16665 = G__16681;
chunk__16593_16666 = G__16682;
count__16594_16667 = G__16683;
i__16595_16668 = G__16684;
continue;
}
} else
{var vec__16611_16685 = cljs.core.first.call(null,seq__16591_16679__$1);var actual_type_16686 = cljs.core.nth.call(null,vec__16611_16685,0,null);var __16687 = cljs.core.nth.call(null,vec__16611_16685,1,null);var keys_16688 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16614,actual_type_16686,f_16664], null);var canonical_f_16689 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16613),keys_16688);dommy.core.update_event_listeners_BANG_.call(null,elem_16613,dommy.utils.dissoc_in,keys_16688);
if(cljs.core.truth_(elem_16613.removeEventListener))
{elem_16613.removeEventListener(cljs.core.name.call(null,actual_type_16686),canonical_f_16689);
} else
{elem_16613.detachEvent(cljs.core.name.call(null,actual_type_16686),canonical_f_16689);
}
{
var G__16690 = cljs.core.next.call(null,seq__16591_16679__$1);
var G__16691 = null;
var G__16692 = 0;
var G__16693 = 0;
seq__16591_16665 = G__16690;
chunk__16593_16666 = G__16691;
count__16594_16667 = G__16692;
i__16595_16668 = G__16693;
continue;
}
}
} else
{}
}
break;
}
{
var G__16694 = cljs.core.next.call(null,seq__16590_16656__$1);
var G__16695 = null;
var G__16696 = 0;
var G__16697 = 0;
seq__16590_16615 = G__16694;
chunk__16597_16616 = G__16695;
count__16598_16617 = G__16696;
i__16599_16618 = G__16697;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__16698){
var elem_sel = cljs.core.first(arglist__16698);
var type_fs = cljs.core.rest(arglist__16698);
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
var vec__16706_16713 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16714 = cljs.core.nth.call(null,vec__16706_16713,0,null);var selector_16715 = cljs.core.nth.call(null,vec__16706_16713,1,null);var seq__16707_16716 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16708_16717 = null;var count__16709_16718 = 0;var i__16710_16719 = 0;while(true){
if((i__16710_16719 < count__16709_16718))
{var vec__16711_16720 = cljs.core._nth.call(null,chunk__16708_16717,i__16710_16719);var type_16721 = cljs.core.nth.call(null,vec__16711_16720,0,null);var f_16722 = cljs.core.nth.call(null,vec__16711_16720,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16721,((function (seq__16707_16716,chunk__16708_16717,count__16709_16718,i__16710_16719,vec__16711_16720,type_16721,f_16722){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16721,this_fn);
return f_16722.call(null,e);
});})(seq__16707_16716,chunk__16708_16717,count__16709_16718,i__16710_16719,vec__16711_16720,type_16721,f_16722))
);
{
var G__16723 = seq__16707_16716;
var G__16724 = chunk__16708_16717;
var G__16725 = count__16709_16718;
var G__16726 = (i__16710_16719 + 1);
seq__16707_16716 = G__16723;
chunk__16708_16717 = G__16724;
count__16709_16718 = G__16725;
i__16710_16719 = G__16726;
continue;
}
} else
{var temp__4092__auto___16727 = cljs.core.seq.call(null,seq__16707_16716);if(temp__4092__auto___16727)
{var seq__16707_16728__$1 = temp__4092__auto___16727;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16707_16728__$1))
{var c__4191__auto___16729 = cljs.core.chunk_first.call(null,seq__16707_16728__$1);{
var G__16730 = cljs.core.chunk_rest.call(null,seq__16707_16728__$1);
var G__16731 = c__4191__auto___16729;
var G__16732 = cljs.core.count.call(null,c__4191__auto___16729);
var G__16733 = 0;
seq__16707_16716 = G__16730;
chunk__16708_16717 = G__16731;
count__16709_16718 = G__16732;
i__16710_16719 = G__16733;
continue;
}
} else
{var vec__16712_16734 = cljs.core.first.call(null,seq__16707_16728__$1);var type_16735 = cljs.core.nth.call(null,vec__16712_16734,0,null);var f_16736 = cljs.core.nth.call(null,vec__16712_16734,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16735,((function (seq__16707_16716,chunk__16708_16717,count__16709_16718,i__16710_16719,vec__16712_16734,type_16735,f_16736,seq__16707_16728__$1,temp__4092__auto___16727){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16735,this_fn);
return f_16736.call(null,e);
});})(seq__16707_16716,chunk__16708_16717,count__16709_16718,i__16710_16719,vec__16712_16734,type_16735,f_16736,seq__16707_16728__$1,temp__4092__auto___16727))
);
{
var G__16737 = cljs.core.next.call(null,seq__16707_16728__$1);
var G__16738 = null;
var G__16739 = 0;
var G__16740 = 0;
seq__16707_16716 = G__16737;
chunk__16708_16717 = G__16738;
count__16709_16718 = G__16739;
i__16710_16719 = G__16740;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__16741){
var elem_sel = cljs.core.first(arglist__16741);
var type_fs = cljs.core.rest(arglist__16741);
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
var fire_BANG___delegate = function (node,event_type,p__16742){var vec__16744 = p__16742;var update_event_BANG_ = cljs.core.nth.call(null,vec__16744,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__16742 = null;if (arguments.length > 2) {
  p__16742 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__16742);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__16745){
var node = cljs.core.first(arglist__16745);
arglist__16745 = cljs.core.next(arglist__16745);
var event_type = cljs.core.first(arglist__16745);
var p__16742 = cljs.core.rest(arglist__16745);
return fire_BANG___delegate(node,event_type,p__16742);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map