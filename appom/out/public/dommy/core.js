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
var append_BANG___2 = (function (parent,child){var G__16582 = dommy.template.__GT_node_like.call(null,parent);G__16582.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__16582;
});
var append_BANG___3 = (function() { 
var G__16587__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16583_16588 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16584_16589 = null;var count__16585_16590 = 0;var i__16586_16591 = 0;while(true){
if((i__16586_16591 < count__16585_16590))
{var c_16592 = cljs.core._nth.call(null,chunk__16584_16589,i__16586_16591);append_BANG_.call(null,parent__$1,c_16592);
{
var G__16593 = seq__16583_16588;
var G__16594 = chunk__16584_16589;
var G__16595 = count__16585_16590;
var G__16596 = (i__16586_16591 + 1);
seq__16583_16588 = G__16593;
chunk__16584_16589 = G__16594;
count__16585_16590 = G__16595;
i__16586_16591 = G__16596;
continue;
}
} else
{var temp__4092__auto___16597 = cljs.core.seq.call(null,seq__16583_16588);if(temp__4092__auto___16597)
{var seq__16583_16598__$1 = temp__4092__auto___16597;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16583_16598__$1))
{var c__4191__auto___16599 = cljs.core.chunk_first.call(null,seq__16583_16598__$1);{
var G__16600 = cljs.core.chunk_rest.call(null,seq__16583_16598__$1);
var G__16601 = c__4191__auto___16599;
var G__16602 = cljs.core.count.call(null,c__4191__auto___16599);
var G__16603 = 0;
seq__16583_16588 = G__16600;
chunk__16584_16589 = G__16601;
count__16585_16590 = G__16602;
i__16586_16591 = G__16603;
continue;
}
} else
{var c_16604 = cljs.core.first.call(null,seq__16583_16598__$1);append_BANG_.call(null,parent__$1,c_16604);
{
var G__16605 = cljs.core.next.call(null,seq__16583_16598__$1);
var G__16606 = null;
var G__16607 = 0;
var G__16608 = 0;
seq__16583_16588 = G__16605;
chunk__16584_16589 = G__16606;
count__16585_16590 = G__16607;
i__16586_16591 = G__16608;
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
var G__16587 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16587__delegate.call(this,parent,child,more_children);};
G__16587.cljs$lang$maxFixedArity = 2;
G__16587.cljs$lang$applyTo = (function (arglist__16609){
var parent = cljs.core.first(arglist__16609);
arglist__16609 = cljs.core.next(arglist__16609);
var child = cljs.core.first(arglist__16609);
var more_children = cljs.core.rest(arglist__16609);
return G__16587__delegate(parent,child,more_children);
});
G__16587.cljs$core$IFn$_invoke$arity$variadic = G__16587__delegate;
return G__16587;
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
var G__16618__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16614_16619 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16615_16620 = null;var count__16616_16621 = 0;var i__16617_16622 = 0;while(true){
if((i__16617_16622 < count__16616_16621))
{var c_16623 = cljs.core._nth.call(null,chunk__16615_16620,i__16617_16622);prepend_BANG_.call(null,parent__$1,c_16623);
{
var G__16624 = seq__16614_16619;
var G__16625 = chunk__16615_16620;
var G__16626 = count__16616_16621;
var G__16627 = (i__16617_16622 + 1);
seq__16614_16619 = G__16624;
chunk__16615_16620 = G__16625;
count__16616_16621 = G__16626;
i__16617_16622 = G__16627;
continue;
}
} else
{var temp__4092__auto___16628 = cljs.core.seq.call(null,seq__16614_16619);if(temp__4092__auto___16628)
{var seq__16614_16629__$1 = temp__4092__auto___16628;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16614_16629__$1))
{var c__4191__auto___16630 = cljs.core.chunk_first.call(null,seq__16614_16629__$1);{
var G__16631 = cljs.core.chunk_rest.call(null,seq__16614_16629__$1);
var G__16632 = c__4191__auto___16630;
var G__16633 = cljs.core.count.call(null,c__4191__auto___16630);
var G__16634 = 0;
seq__16614_16619 = G__16631;
chunk__16615_16620 = G__16632;
count__16616_16621 = G__16633;
i__16617_16622 = G__16634;
continue;
}
} else
{var c_16635 = cljs.core.first.call(null,seq__16614_16629__$1);prepend_BANG_.call(null,parent__$1,c_16635);
{
var G__16636 = cljs.core.next.call(null,seq__16614_16629__$1);
var G__16637 = null;
var G__16638 = 0;
var G__16639 = 0;
seq__16614_16619 = G__16636;
chunk__16615_16620 = G__16637;
count__16616_16621 = G__16638;
i__16617_16622 = G__16639;
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
var G__16618 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16618__delegate.call(this,parent,child,more_children);};
G__16618.cljs$lang$maxFixedArity = 2;
G__16618.cljs$lang$applyTo = (function (arglist__16640){
var parent = cljs.core.first(arglist__16640);
arglist__16640 = cljs.core.next(arglist__16640);
var child = cljs.core.first(arglist__16640);
var more_children = cljs.core.rest(arglist__16640);
return G__16618__delegate(parent,child,more_children);
});
G__16618.cljs$core$IFn$_invoke$arity$variadic = G__16618__delegate;
return G__16618;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___16641 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___16641))
{var next_16642 = temp__4090__auto___16641;parent.insertBefore(actual_node,next_16642);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__16644 = dommy.template.__GT_node_like.call(null,parent);G__16644.innerHTML = "";
dommy.core.append_BANG_.call(null,G__16644,node_like);
return G__16644;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__16646 = elem__$1.parentNode;G__16646.removeChild(elem__$1);
return G__16646;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16652){var vec__16653 = p__16652;var k = cljs.core.nth.call(null,vec__16653,0,null);var v = cljs.core.nth.call(null,vec__16653,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t16654 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t16654 = (function (v,k,vec__16653,p__16652,container,key_selectors_map,template,selector_map,meta16655){
this.v = v;
this.k = k;
this.vec__16653 = vec__16653;
this.p__16652 = p__16652;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta16655 = meta16655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t16654.cljs$lang$type = true;
dommy.core.t16654.cljs$lang$ctorStr = "dommy.core/t16654";
dommy.core.t16654.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"dommy.core/t16654");
});
dommy.core.t16654.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t16654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16656){var self__ = this;
var _16656__$1 = this;return self__.meta16655;
});
dommy.core.t16654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16656,meta16655__$1){var self__ = this;
var _16656__$1 = this;return (new dommy.core.t16654(self__.v,self__.k,self__.vec__16653,self__.p__16652,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta16655__$1));
});
dommy.core.__GT_t16654 = (function __GT_t16654(v__$1,k__$1,vec__16653__$1,p__16652__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16655){return (new dommy.core.t16654(v__$1,k__$1,vec__16653__$1,p__16652__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16655));
});
}
return (new dommy.core.t16654(v,k,vec__16653,p__16652,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__16657_SHARP_){return p1__16657_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__16658_SHARP_){return !((p1__16658_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16659){var vec__16660 = p__16659;var special_mouse_event = cljs.core.nth.call(null,vec__16660,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__16660,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3443__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3443__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__16661){
var elem = cljs.core.first(arglist__16661);
arglist__16661 = cljs.core.next(arglist__16661);
var f = cljs.core.first(arglist__16661);
var args = cljs.core.rest(arglist__16661);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__16662_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__16662_SHARP_));
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
var vec__16686_16709 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16710 = cljs.core.nth.call(null,vec__16686_16709,0,null);var selector_16711 = cljs.core.nth.call(null,vec__16686_16709,1,null);var seq__16687_16712 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16694_16713 = null;var count__16695_16714 = 0;var i__16696_16715 = 0;while(true){
if((i__16696_16715 < count__16695_16714))
{var vec__16703_16716 = cljs.core._nth.call(null,chunk__16694_16713,i__16696_16715);var orig_type_16717 = cljs.core.nth.call(null,vec__16703_16716,0,null);var f_16718 = cljs.core.nth.call(null,vec__16703_16716,1,null);var seq__16697_16719 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16717,new cljs.core.PersistentArrayMap.fromArray([orig_type_16717,cljs.core.identity], true, false)));var chunk__16699_16720 = null;var count__16700_16721 = 0;var i__16701_16722 = 0;while(true){
if((i__16701_16722 < count__16700_16721))
{var vec__16704_16723 = cljs.core._nth.call(null,chunk__16699_16720,i__16701_16722);var actual_type_16724 = cljs.core.nth.call(null,vec__16704_16723,0,null);var factory_16725 = cljs.core.nth.call(null,vec__16704_16723,1,null);var canonical_f_16726 = (cljs.core.truth_(selector_16711)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16710,selector_16711):cljs.core.identity).call(null,factory_16725.call(null,f_16718));dommy.core.update_event_listeners_BANG_.call(null,elem_16710,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16711,actual_type_16724,f_16718], null),canonical_f_16726);
if(cljs.core.truth_(elem_16710.addEventListener))
{elem_16710.addEventListener(cljs.core.name.call(null,actual_type_16724),canonical_f_16726);
} else
{elem_16710.attachEvent(cljs.core.name.call(null,actual_type_16724),canonical_f_16726);
}
{
var G__16727 = seq__16697_16719;
var G__16728 = chunk__16699_16720;
var G__16729 = count__16700_16721;
var G__16730 = (i__16701_16722 + 1);
seq__16697_16719 = G__16727;
chunk__16699_16720 = G__16728;
count__16700_16721 = G__16729;
i__16701_16722 = G__16730;
continue;
}
} else
{var temp__4092__auto___16731 = cljs.core.seq.call(null,seq__16697_16719);if(temp__4092__auto___16731)
{var seq__16697_16732__$1 = temp__4092__auto___16731;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16697_16732__$1))
{var c__4191__auto___16733 = cljs.core.chunk_first.call(null,seq__16697_16732__$1);{
var G__16734 = cljs.core.chunk_rest.call(null,seq__16697_16732__$1);
var G__16735 = c__4191__auto___16733;
var G__16736 = cljs.core.count.call(null,c__4191__auto___16733);
var G__16737 = 0;
seq__16697_16719 = G__16734;
chunk__16699_16720 = G__16735;
count__16700_16721 = G__16736;
i__16701_16722 = G__16737;
continue;
}
} else
{var vec__16705_16738 = cljs.core.first.call(null,seq__16697_16732__$1);var actual_type_16739 = cljs.core.nth.call(null,vec__16705_16738,0,null);var factory_16740 = cljs.core.nth.call(null,vec__16705_16738,1,null);var canonical_f_16741 = (cljs.core.truth_(selector_16711)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16710,selector_16711):cljs.core.identity).call(null,factory_16740.call(null,f_16718));dommy.core.update_event_listeners_BANG_.call(null,elem_16710,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16711,actual_type_16739,f_16718], null),canonical_f_16741);
if(cljs.core.truth_(elem_16710.addEventListener))
{elem_16710.addEventListener(cljs.core.name.call(null,actual_type_16739),canonical_f_16741);
} else
{elem_16710.attachEvent(cljs.core.name.call(null,actual_type_16739),canonical_f_16741);
}
{
var G__16742 = cljs.core.next.call(null,seq__16697_16732__$1);
var G__16743 = null;
var G__16744 = 0;
var G__16745 = 0;
seq__16697_16719 = G__16742;
chunk__16699_16720 = G__16743;
count__16700_16721 = G__16744;
i__16701_16722 = G__16745;
continue;
}
}
} else
{}
}
break;
}
{
var G__16746 = seq__16687_16712;
var G__16747 = chunk__16694_16713;
var G__16748 = count__16695_16714;
var G__16749 = (i__16696_16715 + 1);
seq__16687_16712 = G__16746;
chunk__16694_16713 = G__16747;
count__16695_16714 = G__16748;
i__16696_16715 = G__16749;
continue;
}
} else
{var temp__4092__auto___16750 = cljs.core.seq.call(null,seq__16687_16712);if(temp__4092__auto___16750)
{var seq__16687_16751__$1 = temp__4092__auto___16750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16687_16751__$1))
{var c__4191__auto___16752 = cljs.core.chunk_first.call(null,seq__16687_16751__$1);{
var G__16753 = cljs.core.chunk_rest.call(null,seq__16687_16751__$1);
var G__16754 = c__4191__auto___16752;
var G__16755 = cljs.core.count.call(null,c__4191__auto___16752);
var G__16756 = 0;
seq__16687_16712 = G__16753;
chunk__16694_16713 = G__16754;
count__16695_16714 = G__16755;
i__16696_16715 = G__16756;
continue;
}
} else
{var vec__16706_16757 = cljs.core.first.call(null,seq__16687_16751__$1);var orig_type_16758 = cljs.core.nth.call(null,vec__16706_16757,0,null);var f_16759 = cljs.core.nth.call(null,vec__16706_16757,1,null);var seq__16688_16760 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16758,new cljs.core.PersistentArrayMap.fromArray([orig_type_16758,cljs.core.identity], true, false)));var chunk__16690_16761 = null;var count__16691_16762 = 0;var i__16692_16763 = 0;while(true){
if((i__16692_16763 < count__16691_16762))
{var vec__16707_16764 = cljs.core._nth.call(null,chunk__16690_16761,i__16692_16763);var actual_type_16765 = cljs.core.nth.call(null,vec__16707_16764,0,null);var factory_16766 = cljs.core.nth.call(null,vec__16707_16764,1,null);var canonical_f_16767 = (cljs.core.truth_(selector_16711)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16710,selector_16711):cljs.core.identity).call(null,factory_16766.call(null,f_16759));dommy.core.update_event_listeners_BANG_.call(null,elem_16710,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16711,actual_type_16765,f_16759], null),canonical_f_16767);
if(cljs.core.truth_(elem_16710.addEventListener))
{elem_16710.addEventListener(cljs.core.name.call(null,actual_type_16765),canonical_f_16767);
} else
{elem_16710.attachEvent(cljs.core.name.call(null,actual_type_16765),canonical_f_16767);
}
{
var G__16768 = seq__16688_16760;
var G__16769 = chunk__16690_16761;
var G__16770 = count__16691_16762;
var G__16771 = (i__16692_16763 + 1);
seq__16688_16760 = G__16768;
chunk__16690_16761 = G__16769;
count__16691_16762 = G__16770;
i__16692_16763 = G__16771;
continue;
}
} else
{var temp__4092__auto___16772__$1 = cljs.core.seq.call(null,seq__16688_16760);if(temp__4092__auto___16772__$1)
{var seq__16688_16773__$1 = temp__4092__auto___16772__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16688_16773__$1))
{var c__4191__auto___16774 = cljs.core.chunk_first.call(null,seq__16688_16773__$1);{
var G__16775 = cljs.core.chunk_rest.call(null,seq__16688_16773__$1);
var G__16776 = c__4191__auto___16774;
var G__16777 = cljs.core.count.call(null,c__4191__auto___16774);
var G__16778 = 0;
seq__16688_16760 = G__16775;
chunk__16690_16761 = G__16776;
count__16691_16762 = G__16777;
i__16692_16763 = G__16778;
continue;
}
} else
{var vec__16708_16779 = cljs.core.first.call(null,seq__16688_16773__$1);var actual_type_16780 = cljs.core.nth.call(null,vec__16708_16779,0,null);var factory_16781 = cljs.core.nth.call(null,vec__16708_16779,1,null);var canonical_f_16782 = (cljs.core.truth_(selector_16711)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16710,selector_16711):cljs.core.identity).call(null,factory_16781.call(null,f_16759));dommy.core.update_event_listeners_BANG_.call(null,elem_16710,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16711,actual_type_16780,f_16759], null),canonical_f_16782);
if(cljs.core.truth_(elem_16710.addEventListener))
{elem_16710.addEventListener(cljs.core.name.call(null,actual_type_16780),canonical_f_16782);
} else
{elem_16710.attachEvent(cljs.core.name.call(null,actual_type_16780),canonical_f_16782);
}
{
var G__16783 = cljs.core.next.call(null,seq__16688_16773__$1);
var G__16784 = null;
var G__16785 = 0;
var G__16786 = 0;
seq__16688_16760 = G__16783;
chunk__16690_16761 = G__16784;
count__16691_16762 = G__16785;
i__16692_16763 = G__16786;
continue;
}
}
} else
{}
}
break;
}
{
var G__16787 = cljs.core.next.call(null,seq__16687_16751__$1);
var G__16788 = null;
var G__16789 = 0;
var G__16790 = 0;
seq__16687_16712 = G__16787;
chunk__16694_16713 = G__16788;
count__16695_16714 = G__16789;
i__16696_16715 = G__16790;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__16791){
var elem_sel = cljs.core.first(arglist__16791);
var type_fs = cljs.core.rest(arglist__16791);
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
var vec__16815_16838 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16839 = cljs.core.nth.call(null,vec__16815_16838,0,null);var selector_16840 = cljs.core.nth.call(null,vec__16815_16838,1,null);var seq__16816_16841 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16823_16842 = null;var count__16824_16843 = 0;var i__16825_16844 = 0;while(true){
if((i__16825_16844 < count__16824_16843))
{var vec__16832_16845 = cljs.core._nth.call(null,chunk__16823_16842,i__16825_16844);var orig_type_16846 = cljs.core.nth.call(null,vec__16832_16845,0,null);var f_16847 = cljs.core.nth.call(null,vec__16832_16845,1,null);var seq__16826_16848 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16846,new cljs.core.PersistentArrayMap.fromArray([orig_type_16846,cljs.core.identity], true, false)));var chunk__16828_16849 = null;var count__16829_16850 = 0;var i__16830_16851 = 0;while(true){
if((i__16830_16851 < count__16829_16850))
{var vec__16833_16852 = cljs.core._nth.call(null,chunk__16828_16849,i__16830_16851);var actual_type_16853 = cljs.core.nth.call(null,vec__16833_16852,0,null);var __16854 = cljs.core.nth.call(null,vec__16833_16852,1,null);var keys_16855 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16840,actual_type_16853,f_16847], null);var canonical_f_16856 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16839),keys_16855);dommy.core.update_event_listeners_BANG_.call(null,elem_16839,dommy.utils.dissoc_in,keys_16855);
if(cljs.core.truth_(elem_16839.removeEventListener))
{elem_16839.removeEventListener(cljs.core.name.call(null,actual_type_16853),canonical_f_16856);
} else
{elem_16839.detachEvent(cljs.core.name.call(null,actual_type_16853),canonical_f_16856);
}
{
var G__16857 = seq__16826_16848;
var G__16858 = chunk__16828_16849;
var G__16859 = count__16829_16850;
var G__16860 = (i__16830_16851 + 1);
seq__16826_16848 = G__16857;
chunk__16828_16849 = G__16858;
count__16829_16850 = G__16859;
i__16830_16851 = G__16860;
continue;
}
} else
{var temp__4092__auto___16861 = cljs.core.seq.call(null,seq__16826_16848);if(temp__4092__auto___16861)
{var seq__16826_16862__$1 = temp__4092__auto___16861;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16826_16862__$1))
{var c__4191__auto___16863 = cljs.core.chunk_first.call(null,seq__16826_16862__$1);{
var G__16864 = cljs.core.chunk_rest.call(null,seq__16826_16862__$1);
var G__16865 = c__4191__auto___16863;
var G__16866 = cljs.core.count.call(null,c__4191__auto___16863);
var G__16867 = 0;
seq__16826_16848 = G__16864;
chunk__16828_16849 = G__16865;
count__16829_16850 = G__16866;
i__16830_16851 = G__16867;
continue;
}
} else
{var vec__16834_16868 = cljs.core.first.call(null,seq__16826_16862__$1);var actual_type_16869 = cljs.core.nth.call(null,vec__16834_16868,0,null);var __16870 = cljs.core.nth.call(null,vec__16834_16868,1,null);var keys_16871 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16840,actual_type_16869,f_16847], null);var canonical_f_16872 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16839),keys_16871);dommy.core.update_event_listeners_BANG_.call(null,elem_16839,dommy.utils.dissoc_in,keys_16871);
if(cljs.core.truth_(elem_16839.removeEventListener))
{elem_16839.removeEventListener(cljs.core.name.call(null,actual_type_16869),canonical_f_16872);
} else
{elem_16839.detachEvent(cljs.core.name.call(null,actual_type_16869),canonical_f_16872);
}
{
var G__16873 = cljs.core.next.call(null,seq__16826_16862__$1);
var G__16874 = null;
var G__16875 = 0;
var G__16876 = 0;
seq__16826_16848 = G__16873;
chunk__16828_16849 = G__16874;
count__16829_16850 = G__16875;
i__16830_16851 = G__16876;
continue;
}
}
} else
{}
}
break;
}
{
var G__16877 = seq__16816_16841;
var G__16878 = chunk__16823_16842;
var G__16879 = count__16824_16843;
var G__16880 = (i__16825_16844 + 1);
seq__16816_16841 = G__16877;
chunk__16823_16842 = G__16878;
count__16824_16843 = G__16879;
i__16825_16844 = G__16880;
continue;
}
} else
{var temp__4092__auto___16881 = cljs.core.seq.call(null,seq__16816_16841);if(temp__4092__auto___16881)
{var seq__16816_16882__$1 = temp__4092__auto___16881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16816_16882__$1))
{var c__4191__auto___16883 = cljs.core.chunk_first.call(null,seq__16816_16882__$1);{
var G__16884 = cljs.core.chunk_rest.call(null,seq__16816_16882__$1);
var G__16885 = c__4191__auto___16883;
var G__16886 = cljs.core.count.call(null,c__4191__auto___16883);
var G__16887 = 0;
seq__16816_16841 = G__16884;
chunk__16823_16842 = G__16885;
count__16824_16843 = G__16886;
i__16825_16844 = G__16887;
continue;
}
} else
{var vec__16835_16888 = cljs.core.first.call(null,seq__16816_16882__$1);var orig_type_16889 = cljs.core.nth.call(null,vec__16835_16888,0,null);var f_16890 = cljs.core.nth.call(null,vec__16835_16888,1,null);var seq__16817_16891 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16889,new cljs.core.PersistentArrayMap.fromArray([orig_type_16889,cljs.core.identity], true, false)));var chunk__16819_16892 = null;var count__16820_16893 = 0;var i__16821_16894 = 0;while(true){
if((i__16821_16894 < count__16820_16893))
{var vec__16836_16895 = cljs.core._nth.call(null,chunk__16819_16892,i__16821_16894);var actual_type_16896 = cljs.core.nth.call(null,vec__16836_16895,0,null);var __16897 = cljs.core.nth.call(null,vec__16836_16895,1,null);var keys_16898 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16840,actual_type_16896,f_16890], null);var canonical_f_16899 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16839),keys_16898);dommy.core.update_event_listeners_BANG_.call(null,elem_16839,dommy.utils.dissoc_in,keys_16898);
if(cljs.core.truth_(elem_16839.removeEventListener))
{elem_16839.removeEventListener(cljs.core.name.call(null,actual_type_16896),canonical_f_16899);
} else
{elem_16839.detachEvent(cljs.core.name.call(null,actual_type_16896),canonical_f_16899);
}
{
var G__16900 = seq__16817_16891;
var G__16901 = chunk__16819_16892;
var G__16902 = count__16820_16893;
var G__16903 = (i__16821_16894 + 1);
seq__16817_16891 = G__16900;
chunk__16819_16892 = G__16901;
count__16820_16893 = G__16902;
i__16821_16894 = G__16903;
continue;
}
} else
{var temp__4092__auto___16904__$1 = cljs.core.seq.call(null,seq__16817_16891);if(temp__4092__auto___16904__$1)
{var seq__16817_16905__$1 = temp__4092__auto___16904__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16817_16905__$1))
{var c__4191__auto___16906 = cljs.core.chunk_first.call(null,seq__16817_16905__$1);{
var G__16907 = cljs.core.chunk_rest.call(null,seq__16817_16905__$1);
var G__16908 = c__4191__auto___16906;
var G__16909 = cljs.core.count.call(null,c__4191__auto___16906);
var G__16910 = 0;
seq__16817_16891 = G__16907;
chunk__16819_16892 = G__16908;
count__16820_16893 = G__16909;
i__16821_16894 = G__16910;
continue;
}
} else
{var vec__16837_16911 = cljs.core.first.call(null,seq__16817_16905__$1);var actual_type_16912 = cljs.core.nth.call(null,vec__16837_16911,0,null);var __16913 = cljs.core.nth.call(null,vec__16837_16911,1,null);var keys_16914 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16840,actual_type_16912,f_16890], null);var canonical_f_16915 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16839),keys_16914);dommy.core.update_event_listeners_BANG_.call(null,elem_16839,dommy.utils.dissoc_in,keys_16914);
if(cljs.core.truth_(elem_16839.removeEventListener))
{elem_16839.removeEventListener(cljs.core.name.call(null,actual_type_16912),canonical_f_16915);
} else
{elem_16839.detachEvent(cljs.core.name.call(null,actual_type_16912),canonical_f_16915);
}
{
var G__16916 = cljs.core.next.call(null,seq__16817_16905__$1);
var G__16917 = null;
var G__16918 = 0;
var G__16919 = 0;
seq__16817_16891 = G__16916;
chunk__16819_16892 = G__16917;
count__16820_16893 = G__16918;
i__16821_16894 = G__16919;
continue;
}
}
} else
{}
}
break;
}
{
var G__16920 = cljs.core.next.call(null,seq__16816_16882__$1);
var G__16921 = null;
var G__16922 = 0;
var G__16923 = 0;
seq__16816_16841 = G__16920;
chunk__16823_16842 = G__16921;
count__16824_16843 = G__16922;
i__16825_16844 = G__16923;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__16924){
var elem_sel = cljs.core.first(arglist__16924);
var type_fs = cljs.core.rest(arglist__16924);
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
var vec__16932_16939 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16940 = cljs.core.nth.call(null,vec__16932_16939,0,null);var selector_16941 = cljs.core.nth.call(null,vec__16932_16939,1,null);var seq__16933_16942 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16934_16943 = null;var count__16935_16944 = 0;var i__16936_16945 = 0;while(true){
if((i__16936_16945 < count__16935_16944))
{var vec__16937_16946 = cljs.core._nth.call(null,chunk__16934_16943,i__16936_16945);var type_16947 = cljs.core.nth.call(null,vec__16937_16946,0,null);var f_16948 = cljs.core.nth.call(null,vec__16937_16946,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16947,((function (seq__16933_16942,chunk__16934_16943,count__16935_16944,i__16936_16945,vec__16937_16946,type_16947,f_16948){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16947,this_fn);
return f_16948.call(null,e);
});})(seq__16933_16942,chunk__16934_16943,count__16935_16944,i__16936_16945,vec__16937_16946,type_16947,f_16948))
);
{
var G__16949 = seq__16933_16942;
var G__16950 = chunk__16934_16943;
var G__16951 = count__16935_16944;
var G__16952 = (i__16936_16945 + 1);
seq__16933_16942 = G__16949;
chunk__16934_16943 = G__16950;
count__16935_16944 = G__16951;
i__16936_16945 = G__16952;
continue;
}
} else
{var temp__4092__auto___16953 = cljs.core.seq.call(null,seq__16933_16942);if(temp__4092__auto___16953)
{var seq__16933_16954__$1 = temp__4092__auto___16953;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16933_16954__$1))
{var c__4191__auto___16955 = cljs.core.chunk_first.call(null,seq__16933_16954__$1);{
var G__16956 = cljs.core.chunk_rest.call(null,seq__16933_16954__$1);
var G__16957 = c__4191__auto___16955;
var G__16958 = cljs.core.count.call(null,c__4191__auto___16955);
var G__16959 = 0;
seq__16933_16942 = G__16956;
chunk__16934_16943 = G__16957;
count__16935_16944 = G__16958;
i__16936_16945 = G__16959;
continue;
}
} else
{var vec__16938_16960 = cljs.core.first.call(null,seq__16933_16954__$1);var type_16961 = cljs.core.nth.call(null,vec__16938_16960,0,null);var f_16962 = cljs.core.nth.call(null,vec__16938_16960,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16961,((function (seq__16933_16942,chunk__16934_16943,count__16935_16944,i__16936_16945,vec__16938_16960,type_16961,f_16962,seq__16933_16954__$1,temp__4092__auto___16953){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16961,this_fn);
return f_16962.call(null,e);
});})(seq__16933_16942,chunk__16934_16943,count__16935_16944,i__16936_16945,vec__16938_16960,type_16961,f_16962,seq__16933_16954__$1,temp__4092__auto___16953))
);
{
var G__16963 = cljs.core.next.call(null,seq__16933_16954__$1);
var G__16964 = null;
var G__16965 = 0;
var G__16966 = 0;
seq__16933_16942 = G__16963;
chunk__16934_16943 = G__16964;
count__16935_16944 = G__16965;
i__16936_16945 = G__16966;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__16967){
var elem_sel = cljs.core.first(arglist__16967);
var type_fs = cljs.core.rest(arglist__16967);
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
var fire_BANG___delegate = function (node,event_type,p__16968){var vec__16970 = p__16968;var update_event_BANG_ = cljs.core.nth.call(null,vec__16970,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__16968 = null;if (arguments.length > 2) {
  p__16968 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__16968);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__16971){
var node = cljs.core.first(arglist__16971);
arglist__16971 = cljs.core.next(arglist__16971);
var event_type = cljs.core.first(arglist__16971);
var p__16968 = cljs.core.rest(arglist__16971);
return fire_BANG___delegate(node,event_type,p__16968);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map