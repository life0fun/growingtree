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
var append_BANG___2 = (function (parent,child){var G__16069 = dommy.template.__GT_node_like.call(null,parent);G__16069.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__16069;
});
var append_BANG___3 = (function() { 
var G__16074__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16070_16075 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16071_16076 = null;var count__16072_16077 = 0;var i__16073_16078 = 0;while(true){
if((i__16073_16078 < count__16072_16077))
{var c_16079 = cljs.core._nth.call(null,chunk__16071_16076,i__16073_16078);append_BANG_.call(null,parent__$1,c_16079);
{
var G__16080 = seq__16070_16075;
var G__16081 = chunk__16071_16076;
var G__16082 = count__16072_16077;
var G__16083 = (i__16073_16078 + 1);
seq__16070_16075 = G__16080;
chunk__16071_16076 = G__16081;
count__16072_16077 = G__16082;
i__16073_16078 = G__16083;
continue;
}
} else
{var temp__4092__auto___16084 = cljs.core.seq.call(null,seq__16070_16075);if(temp__4092__auto___16084)
{var seq__16070_16085__$1 = temp__4092__auto___16084;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16070_16085__$1))
{var c__4191__auto___16086 = cljs.core.chunk_first.call(null,seq__16070_16085__$1);{
var G__16087 = cljs.core.chunk_rest.call(null,seq__16070_16085__$1);
var G__16088 = c__4191__auto___16086;
var G__16089 = cljs.core.count.call(null,c__4191__auto___16086);
var G__16090 = 0;
seq__16070_16075 = G__16087;
chunk__16071_16076 = G__16088;
count__16072_16077 = G__16089;
i__16073_16078 = G__16090;
continue;
}
} else
{var c_16091 = cljs.core.first.call(null,seq__16070_16085__$1);append_BANG_.call(null,parent__$1,c_16091);
{
var G__16092 = cljs.core.next.call(null,seq__16070_16085__$1);
var G__16093 = null;
var G__16094 = 0;
var G__16095 = 0;
seq__16070_16075 = G__16092;
chunk__16071_16076 = G__16093;
count__16072_16077 = G__16094;
i__16073_16078 = G__16095;
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
var G__16074 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16074__delegate.call(this,parent,child,more_children);};
G__16074.cljs$lang$maxFixedArity = 2;
G__16074.cljs$lang$applyTo = (function (arglist__16096){
var parent = cljs.core.first(arglist__16096);
arglist__16096 = cljs.core.next(arglist__16096);
var child = cljs.core.first(arglist__16096);
var more_children = cljs.core.rest(arglist__16096);
return G__16074__delegate(parent,child,more_children);
});
G__16074.cljs$core$IFn$_invoke$arity$variadic = G__16074__delegate;
return G__16074;
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
var G__16105__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16101_16106 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16102_16107 = null;var count__16103_16108 = 0;var i__16104_16109 = 0;while(true){
if((i__16104_16109 < count__16103_16108))
{var c_16110 = cljs.core._nth.call(null,chunk__16102_16107,i__16104_16109);prepend_BANG_.call(null,parent__$1,c_16110);
{
var G__16111 = seq__16101_16106;
var G__16112 = chunk__16102_16107;
var G__16113 = count__16103_16108;
var G__16114 = (i__16104_16109 + 1);
seq__16101_16106 = G__16111;
chunk__16102_16107 = G__16112;
count__16103_16108 = G__16113;
i__16104_16109 = G__16114;
continue;
}
} else
{var temp__4092__auto___16115 = cljs.core.seq.call(null,seq__16101_16106);if(temp__4092__auto___16115)
{var seq__16101_16116__$1 = temp__4092__auto___16115;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16101_16116__$1))
{var c__4191__auto___16117 = cljs.core.chunk_first.call(null,seq__16101_16116__$1);{
var G__16118 = cljs.core.chunk_rest.call(null,seq__16101_16116__$1);
var G__16119 = c__4191__auto___16117;
var G__16120 = cljs.core.count.call(null,c__4191__auto___16117);
var G__16121 = 0;
seq__16101_16106 = G__16118;
chunk__16102_16107 = G__16119;
count__16103_16108 = G__16120;
i__16104_16109 = G__16121;
continue;
}
} else
{var c_16122 = cljs.core.first.call(null,seq__16101_16116__$1);prepend_BANG_.call(null,parent__$1,c_16122);
{
var G__16123 = cljs.core.next.call(null,seq__16101_16116__$1);
var G__16124 = null;
var G__16125 = 0;
var G__16126 = 0;
seq__16101_16106 = G__16123;
chunk__16102_16107 = G__16124;
count__16103_16108 = G__16125;
i__16104_16109 = G__16126;
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
var G__16105 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16105__delegate.call(this,parent,child,more_children);};
G__16105.cljs$lang$maxFixedArity = 2;
G__16105.cljs$lang$applyTo = (function (arglist__16127){
var parent = cljs.core.first(arglist__16127);
arglist__16127 = cljs.core.next(arglist__16127);
var child = cljs.core.first(arglist__16127);
var more_children = cljs.core.rest(arglist__16127);
return G__16105__delegate(parent,child,more_children);
});
G__16105.cljs$core$IFn$_invoke$arity$variadic = G__16105__delegate;
return G__16105;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___16128 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___16128))
{var next_16129 = temp__4090__auto___16128;parent.insertBefore(actual_node,next_16129);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__16131 = dommy.template.__GT_node_like.call(null,parent);G__16131.innerHTML = "";
dommy.core.append_BANG_.call(null,G__16131,node_like);
return G__16131;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__16133 = elem__$1.parentNode;G__16133.removeChild(elem__$1);
return G__16133;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16139){var vec__16140 = p__16139;var k = cljs.core.nth.call(null,vec__16140,0,null);var v = cljs.core.nth.call(null,vec__16140,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t16141 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t16141 = (function (v,k,vec__16140,p__16139,container,key_selectors_map,template,selector_map,meta16142){
this.v = v;
this.k = k;
this.vec__16140 = vec__16140;
this.p__16139 = p__16139;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta16142 = meta16142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t16141.cljs$lang$type = true;
dommy.core.t16141.cljs$lang$ctorStr = "dommy.core/t16141";
dommy.core.t16141.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"dommy.core/t16141");
});
dommy.core.t16141.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t16141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16143){var self__ = this;
var _16143__$1 = this;return self__.meta16142;
});
dommy.core.t16141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16143,meta16142__$1){var self__ = this;
var _16143__$1 = this;return (new dommy.core.t16141(self__.v,self__.k,self__.vec__16140,self__.p__16139,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta16142__$1));
});
dommy.core.__GT_t16141 = (function __GT_t16141(v__$1,k__$1,vec__16140__$1,p__16139__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16142){return (new dommy.core.t16141(v__$1,k__$1,vec__16140__$1,p__16139__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16142));
});
}
return (new dommy.core.t16141(v,k,vec__16140,p__16139,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__16144_SHARP_){return p1__16144_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__16145_SHARP_){return !((p1__16145_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16146){var vec__16147 = p__16146;var special_mouse_event = cljs.core.nth.call(null,vec__16147,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__16147,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3443__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3443__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__16148){
var elem = cljs.core.first(arglist__16148);
arglist__16148 = cljs.core.next(arglist__16148);
var f = cljs.core.first(arglist__16148);
var args = cljs.core.rest(arglist__16148);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__16149_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__16149_SHARP_));
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
var vec__16173_16196 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16197 = cljs.core.nth.call(null,vec__16173_16196,0,null);var selector_16198 = cljs.core.nth.call(null,vec__16173_16196,1,null);var seq__16174_16199 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16181_16200 = null;var count__16182_16201 = 0;var i__16183_16202 = 0;while(true){
if((i__16183_16202 < count__16182_16201))
{var vec__16190_16203 = cljs.core._nth.call(null,chunk__16181_16200,i__16183_16202);var orig_type_16204 = cljs.core.nth.call(null,vec__16190_16203,0,null);var f_16205 = cljs.core.nth.call(null,vec__16190_16203,1,null);var seq__16184_16206 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16204,new cljs.core.PersistentArrayMap.fromArray([orig_type_16204,cljs.core.identity], true, false)));var chunk__16186_16207 = null;var count__16187_16208 = 0;var i__16188_16209 = 0;while(true){
if((i__16188_16209 < count__16187_16208))
{var vec__16191_16210 = cljs.core._nth.call(null,chunk__16186_16207,i__16188_16209);var actual_type_16211 = cljs.core.nth.call(null,vec__16191_16210,0,null);var factory_16212 = cljs.core.nth.call(null,vec__16191_16210,1,null);var canonical_f_16213 = (cljs.core.truth_(selector_16198)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16197,selector_16198):cljs.core.identity).call(null,factory_16212.call(null,f_16205));dommy.core.update_event_listeners_BANG_.call(null,elem_16197,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16198,actual_type_16211,f_16205], null),canonical_f_16213);
if(cljs.core.truth_(elem_16197.addEventListener))
{elem_16197.addEventListener(cljs.core.name.call(null,actual_type_16211),canonical_f_16213);
} else
{elem_16197.attachEvent(cljs.core.name.call(null,actual_type_16211),canonical_f_16213);
}
{
var G__16214 = seq__16184_16206;
var G__16215 = chunk__16186_16207;
var G__16216 = count__16187_16208;
var G__16217 = (i__16188_16209 + 1);
seq__16184_16206 = G__16214;
chunk__16186_16207 = G__16215;
count__16187_16208 = G__16216;
i__16188_16209 = G__16217;
continue;
}
} else
{var temp__4092__auto___16218 = cljs.core.seq.call(null,seq__16184_16206);if(temp__4092__auto___16218)
{var seq__16184_16219__$1 = temp__4092__auto___16218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16184_16219__$1))
{var c__4191__auto___16220 = cljs.core.chunk_first.call(null,seq__16184_16219__$1);{
var G__16221 = cljs.core.chunk_rest.call(null,seq__16184_16219__$1);
var G__16222 = c__4191__auto___16220;
var G__16223 = cljs.core.count.call(null,c__4191__auto___16220);
var G__16224 = 0;
seq__16184_16206 = G__16221;
chunk__16186_16207 = G__16222;
count__16187_16208 = G__16223;
i__16188_16209 = G__16224;
continue;
}
} else
{var vec__16192_16225 = cljs.core.first.call(null,seq__16184_16219__$1);var actual_type_16226 = cljs.core.nth.call(null,vec__16192_16225,0,null);var factory_16227 = cljs.core.nth.call(null,vec__16192_16225,1,null);var canonical_f_16228 = (cljs.core.truth_(selector_16198)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16197,selector_16198):cljs.core.identity).call(null,factory_16227.call(null,f_16205));dommy.core.update_event_listeners_BANG_.call(null,elem_16197,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16198,actual_type_16226,f_16205], null),canonical_f_16228);
if(cljs.core.truth_(elem_16197.addEventListener))
{elem_16197.addEventListener(cljs.core.name.call(null,actual_type_16226),canonical_f_16228);
} else
{elem_16197.attachEvent(cljs.core.name.call(null,actual_type_16226),canonical_f_16228);
}
{
var G__16229 = cljs.core.next.call(null,seq__16184_16219__$1);
var G__16230 = null;
var G__16231 = 0;
var G__16232 = 0;
seq__16184_16206 = G__16229;
chunk__16186_16207 = G__16230;
count__16187_16208 = G__16231;
i__16188_16209 = G__16232;
continue;
}
}
} else
{}
}
break;
}
{
var G__16233 = seq__16174_16199;
var G__16234 = chunk__16181_16200;
var G__16235 = count__16182_16201;
var G__16236 = (i__16183_16202 + 1);
seq__16174_16199 = G__16233;
chunk__16181_16200 = G__16234;
count__16182_16201 = G__16235;
i__16183_16202 = G__16236;
continue;
}
} else
{var temp__4092__auto___16237 = cljs.core.seq.call(null,seq__16174_16199);if(temp__4092__auto___16237)
{var seq__16174_16238__$1 = temp__4092__auto___16237;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16174_16238__$1))
{var c__4191__auto___16239 = cljs.core.chunk_first.call(null,seq__16174_16238__$1);{
var G__16240 = cljs.core.chunk_rest.call(null,seq__16174_16238__$1);
var G__16241 = c__4191__auto___16239;
var G__16242 = cljs.core.count.call(null,c__4191__auto___16239);
var G__16243 = 0;
seq__16174_16199 = G__16240;
chunk__16181_16200 = G__16241;
count__16182_16201 = G__16242;
i__16183_16202 = G__16243;
continue;
}
} else
{var vec__16193_16244 = cljs.core.first.call(null,seq__16174_16238__$1);var orig_type_16245 = cljs.core.nth.call(null,vec__16193_16244,0,null);var f_16246 = cljs.core.nth.call(null,vec__16193_16244,1,null);var seq__16175_16247 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16245,new cljs.core.PersistentArrayMap.fromArray([orig_type_16245,cljs.core.identity], true, false)));var chunk__16177_16248 = null;var count__16178_16249 = 0;var i__16179_16250 = 0;while(true){
if((i__16179_16250 < count__16178_16249))
{var vec__16194_16251 = cljs.core._nth.call(null,chunk__16177_16248,i__16179_16250);var actual_type_16252 = cljs.core.nth.call(null,vec__16194_16251,0,null);var factory_16253 = cljs.core.nth.call(null,vec__16194_16251,1,null);var canonical_f_16254 = (cljs.core.truth_(selector_16198)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16197,selector_16198):cljs.core.identity).call(null,factory_16253.call(null,f_16246));dommy.core.update_event_listeners_BANG_.call(null,elem_16197,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16198,actual_type_16252,f_16246], null),canonical_f_16254);
if(cljs.core.truth_(elem_16197.addEventListener))
{elem_16197.addEventListener(cljs.core.name.call(null,actual_type_16252),canonical_f_16254);
} else
{elem_16197.attachEvent(cljs.core.name.call(null,actual_type_16252),canonical_f_16254);
}
{
var G__16255 = seq__16175_16247;
var G__16256 = chunk__16177_16248;
var G__16257 = count__16178_16249;
var G__16258 = (i__16179_16250 + 1);
seq__16175_16247 = G__16255;
chunk__16177_16248 = G__16256;
count__16178_16249 = G__16257;
i__16179_16250 = G__16258;
continue;
}
} else
{var temp__4092__auto___16259__$1 = cljs.core.seq.call(null,seq__16175_16247);if(temp__4092__auto___16259__$1)
{var seq__16175_16260__$1 = temp__4092__auto___16259__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16175_16260__$1))
{var c__4191__auto___16261 = cljs.core.chunk_first.call(null,seq__16175_16260__$1);{
var G__16262 = cljs.core.chunk_rest.call(null,seq__16175_16260__$1);
var G__16263 = c__4191__auto___16261;
var G__16264 = cljs.core.count.call(null,c__4191__auto___16261);
var G__16265 = 0;
seq__16175_16247 = G__16262;
chunk__16177_16248 = G__16263;
count__16178_16249 = G__16264;
i__16179_16250 = G__16265;
continue;
}
} else
{var vec__16195_16266 = cljs.core.first.call(null,seq__16175_16260__$1);var actual_type_16267 = cljs.core.nth.call(null,vec__16195_16266,0,null);var factory_16268 = cljs.core.nth.call(null,vec__16195_16266,1,null);var canonical_f_16269 = (cljs.core.truth_(selector_16198)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16197,selector_16198):cljs.core.identity).call(null,factory_16268.call(null,f_16246));dommy.core.update_event_listeners_BANG_.call(null,elem_16197,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16198,actual_type_16267,f_16246], null),canonical_f_16269);
if(cljs.core.truth_(elem_16197.addEventListener))
{elem_16197.addEventListener(cljs.core.name.call(null,actual_type_16267),canonical_f_16269);
} else
{elem_16197.attachEvent(cljs.core.name.call(null,actual_type_16267),canonical_f_16269);
}
{
var G__16270 = cljs.core.next.call(null,seq__16175_16260__$1);
var G__16271 = null;
var G__16272 = 0;
var G__16273 = 0;
seq__16175_16247 = G__16270;
chunk__16177_16248 = G__16271;
count__16178_16249 = G__16272;
i__16179_16250 = G__16273;
continue;
}
}
} else
{}
}
break;
}
{
var G__16274 = cljs.core.next.call(null,seq__16174_16238__$1);
var G__16275 = null;
var G__16276 = 0;
var G__16277 = 0;
seq__16174_16199 = G__16274;
chunk__16181_16200 = G__16275;
count__16182_16201 = G__16276;
i__16183_16202 = G__16277;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__16278){
var elem_sel = cljs.core.first(arglist__16278);
var type_fs = cljs.core.rest(arglist__16278);
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
var vec__16302_16325 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16326 = cljs.core.nth.call(null,vec__16302_16325,0,null);var selector_16327 = cljs.core.nth.call(null,vec__16302_16325,1,null);var seq__16303_16328 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16310_16329 = null;var count__16311_16330 = 0;var i__16312_16331 = 0;while(true){
if((i__16312_16331 < count__16311_16330))
{var vec__16319_16332 = cljs.core._nth.call(null,chunk__16310_16329,i__16312_16331);var orig_type_16333 = cljs.core.nth.call(null,vec__16319_16332,0,null);var f_16334 = cljs.core.nth.call(null,vec__16319_16332,1,null);var seq__16313_16335 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16333,new cljs.core.PersistentArrayMap.fromArray([orig_type_16333,cljs.core.identity], true, false)));var chunk__16315_16336 = null;var count__16316_16337 = 0;var i__16317_16338 = 0;while(true){
if((i__16317_16338 < count__16316_16337))
{var vec__16320_16339 = cljs.core._nth.call(null,chunk__16315_16336,i__16317_16338);var actual_type_16340 = cljs.core.nth.call(null,vec__16320_16339,0,null);var __16341 = cljs.core.nth.call(null,vec__16320_16339,1,null);var keys_16342 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16327,actual_type_16340,f_16334], null);var canonical_f_16343 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16326),keys_16342);dommy.core.update_event_listeners_BANG_.call(null,elem_16326,dommy.utils.dissoc_in,keys_16342);
if(cljs.core.truth_(elem_16326.removeEventListener))
{elem_16326.removeEventListener(cljs.core.name.call(null,actual_type_16340),canonical_f_16343);
} else
{elem_16326.detachEvent(cljs.core.name.call(null,actual_type_16340),canonical_f_16343);
}
{
var G__16344 = seq__16313_16335;
var G__16345 = chunk__16315_16336;
var G__16346 = count__16316_16337;
var G__16347 = (i__16317_16338 + 1);
seq__16313_16335 = G__16344;
chunk__16315_16336 = G__16345;
count__16316_16337 = G__16346;
i__16317_16338 = G__16347;
continue;
}
} else
{var temp__4092__auto___16348 = cljs.core.seq.call(null,seq__16313_16335);if(temp__4092__auto___16348)
{var seq__16313_16349__$1 = temp__4092__auto___16348;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16313_16349__$1))
{var c__4191__auto___16350 = cljs.core.chunk_first.call(null,seq__16313_16349__$1);{
var G__16351 = cljs.core.chunk_rest.call(null,seq__16313_16349__$1);
var G__16352 = c__4191__auto___16350;
var G__16353 = cljs.core.count.call(null,c__4191__auto___16350);
var G__16354 = 0;
seq__16313_16335 = G__16351;
chunk__16315_16336 = G__16352;
count__16316_16337 = G__16353;
i__16317_16338 = G__16354;
continue;
}
} else
{var vec__16321_16355 = cljs.core.first.call(null,seq__16313_16349__$1);var actual_type_16356 = cljs.core.nth.call(null,vec__16321_16355,0,null);var __16357 = cljs.core.nth.call(null,vec__16321_16355,1,null);var keys_16358 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16327,actual_type_16356,f_16334], null);var canonical_f_16359 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16326),keys_16358);dommy.core.update_event_listeners_BANG_.call(null,elem_16326,dommy.utils.dissoc_in,keys_16358);
if(cljs.core.truth_(elem_16326.removeEventListener))
{elem_16326.removeEventListener(cljs.core.name.call(null,actual_type_16356),canonical_f_16359);
} else
{elem_16326.detachEvent(cljs.core.name.call(null,actual_type_16356),canonical_f_16359);
}
{
var G__16360 = cljs.core.next.call(null,seq__16313_16349__$1);
var G__16361 = null;
var G__16362 = 0;
var G__16363 = 0;
seq__16313_16335 = G__16360;
chunk__16315_16336 = G__16361;
count__16316_16337 = G__16362;
i__16317_16338 = G__16363;
continue;
}
}
} else
{}
}
break;
}
{
var G__16364 = seq__16303_16328;
var G__16365 = chunk__16310_16329;
var G__16366 = count__16311_16330;
var G__16367 = (i__16312_16331 + 1);
seq__16303_16328 = G__16364;
chunk__16310_16329 = G__16365;
count__16311_16330 = G__16366;
i__16312_16331 = G__16367;
continue;
}
} else
{var temp__4092__auto___16368 = cljs.core.seq.call(null,seq__16303_16328);if(temp__4092__auto___16368)
{var seq__16303_16369__$1 = temp__4092__auto___16368;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16303_16369__$1))
{var c__4191__auto___16370 = cljs.core.chunk_first.call(null,seq__16303_16369__$1);{
var G__16371 = cljs.core.chunk_rest.call(null,seq__16303_16369__$1);
var G__16372 = c__4191__auto___16370;
var G__16373 = cljs.core.count.call(null,c__4191__auto___16370);
var G__16374 = 0;
seq__16303_16328 = G__16371;
chunk__16310_16329 = G__16372;
count__16311_16330 = G__16373;
i__16312_16331 = G__16374;
continue;
}
} else
{var vec__16322_16375 = cljs.core.first.call(null,seq__16303_16369__$1);var orig_type_16376 = cljs.core.nth.call(null,vec__16322_16375,0,null);var f_16377 = cljs.core.nth.call(null,vec__16322_16375,1,null);var seq__16304_16378 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16376,new cljs.core.PersistentArrayMap.fromArray([orig_type_16376,cljs.core.identity], true, false)));var chunk__16306_16379 = null;var count__16307_16380 = 0;var i__16308_16381 = 0;while(true){
if((i__16308_16381 < count__16307_16380))
{var vec__16323_16382 = cljs.core._nth.call(null,chunk__16306_16379,i__16308_16381);var actual_type_16383 = cljs.core.nth.call(null,vec__16323_16382,0,null);var __16384 = cljs.core.nth.call(null,vec__16323_16382,1,null);var keys_16385 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16327,actual_type_16383,f_16377], null);var canonical_f_16386 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16326),keys_16385);dommy.core.update_event_listeners_BANG_.call(null,elem_16326,dommy.utils.dissoc_in,keys_16385);
if(cljs.core.truth_(elem_16326.removeEventListener))
{elem_16326.removeEventListener(cljs.core.name.call(null,actual_type_16383),canonical_f_16386);
} else
{elem_16326.detachEvent(cljs.core.name.call(null,actual_type_16383),canonical_f_16386);
}
{
var G__16387 = seq__16304_16378;
var G__16388 = chunk__16306_16379;
var G__16389 = count__16307_16380;
var G__16390 = (i__16308_16381 + 1);
seq__16304_16378 = G__16387;
chunk__16306_16379 = G__16388;
count__16307_16380 = G__16389;
i__16308_16381 = G__16390;
continue;
}
} else
{var temp__4092__auto___16391__$1 = cljs.core.seq.call(null,seq__16304_16378);if(temp__4092__auto___16391__$1)
{var seq__16304_16392__$1 = temp__4092__auto___16391__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16304_16392__$1))
{var c__4191__auto___16393 = cljs.core.chunk_first.call(null,seq__16304_16392__$1);{
var G__16394 = cljs.core.chunk_rest.call(null,seq__16304_16392__$1);
var G__16395 = c__4191__auto___16393;
var G__16396 = cljs.core.count.call(null,c__4191__auto___16393);
var G__16397 = 0;
seq__16304_16378 = G__16394;
chunk__16306_16379 = G__16395;
count__16307_16380 = G__16396;
i__16308_16381 = G__16397;
continue;
}
} else
{var vec__16324_16398 = cljs.core.first.call(null,seq__16304_16392__$1);var actual_type_16399 = cljs.core.nth.call(null,vec__16324_16398,0,null);var __16400 = cljs.core.nth.call(null,vec__16324_16398,1,null);var keys_16401 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16327,actual_type_16399,f_16377], null);var canonical_f_16402 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16326),keys_16401);dommy.core.update_event_listeners_BANG_.call(null,elem_16326,dommy.utils.dissoc_in,keys_16401);
if(cljs.core.truth_(elem_16326.removeEventListener))
{elem_16326.removeEventListener(cljs.core.name.call(null,actual_type_16399),canonical_f_16402);
} else
{elem_16326.detachEvent(cljs.core.name.call(null,actual_type_16399),canonical_f_16402);
}
{
var G__16403 = cljs.core.next.call(null,seq__16304_16392__$1);
var G__16404 = null;
var G__16405 = 0;
var G__16406 = 0;
seq__16304_16378 = G__16403;
chunk__16306_16379 = G__16404;
count__16307_16380 = G__16405;
i__16308_16381 = G__16406;
continue;
}
}
} else
{}
}
break;
}
{
var G__16407 = cljs.core.next.call(null,seq__16303_16369__$1);
var G__16408 = null;
var G__16409 = 0;
var G__16410 = 0;
seq__16303_16328 = G__16407;
chunk__16310_16329 = G__16408;
count__16311_16330 = G__16409;
i__16312_16331 = G__16410;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__16411){
var elem_sel = cljs.core.first(arglist__16411);
var type_fs = cljs.core.rest(arglist__16411);
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
var vec__16419_16426 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16427 = cljs.core.nth.call(null,vec__16419_16426,0,null);var selector_16428 = cljs.core.nth.call(null,vec__16419_16426,1,null);var seq__16420_16429 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16421_16430 = null;var count__16422_16431 = 0;var i__16423_16432 = 0;while(true){
if((i__16423_16432 < count__16422_16431))
{var vec__16424_16433 = cljs.core._nth.call(null,chunk__16421_16430,i__16423_16432);var type_16434 = cljs.core.nth.call(null,vec__16424_16433,0,null);var f_16435 = cljs.core.nth.call(null,vec__16424_16433,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16434,((function (seq__16420_16429,chunk__16421_16430,count__16422_16431,i__16423_16432,vec__16424_16433,type_16434,f_16435){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16434,this_fn);
return f_16435.call(null,e);
});})(seq__16420_16429,chunk__16421_16430,count__16422_16431,i__16423_16432,vec__16424_16433,type_16434,f_16435))
);
{
var G__16436 = seq__16420_16429;
var G__16437 = chunk__16421_16430;
var G__16438 = count__16422_16431;
var G__16439 = (i__16423_16432 + 1);
seq__16420_16429 = G__16436;
chunk__16421_16430 = G__16437;
count__16422_16431 = G__16438;
i__16423_16432 = G__16439;
continue;
}
} else
{var temp__4092__auto___16440 = cljs.core.seq.call(null,seq__16420_16429);if(temp__4092__auto___16440)
{var seq__16420_16441__$1 = temp__4092__auto___16440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16420_16441__$1))
{var c__4191__auto___16442 = cljs.core.chunk_first.call(null,seq__16420_16441__$1);{
var G__16443 = cljs.core.chunk_rest.call(null,seq__16420_16441__$1);
var G__16444 = c__4191__auto___16442;
var G__16445 = cljs.core.count.call(null,c__4191__auto___16442);
var G__16446 = 0;
seq__16420_16429 = G__16443;
chunk__16421_16430 = G__16444;
count__16422_16431 = G__16445;
i__16423_16432 = G__16446;
continue;
}
} else
{var vec__16425_16447 = cljs.core.first.call(null,seq__16420_16441__$1);var type_16448 = cljs.core.nth.call(null,vec__16425_16447,0,null);var f_16449 = cljs.core.nth.call(null,vec__16425_16447,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16448,((function (seq__16420_16429,chunk__16421_16430,count__16422_16431,i__16423_16432,vec__16425_16447,type_16448,f_16449,seq__16420_16441__$1,temp__4092__auto___16440){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16448,this_fn);
return f_16449.call(null,e);
});})(seq__16420_16429,chunk__16421_16430,count__16422_16431,i__16423_16432,vec__16425_16447,type_16448,f_16449,seq__16420_16441__$1,temp__4092__auto___16440))
);
{
var G__16450 = cljs.core.next.call(null,seq__16420_16441__$1);
var G__16451 = null;
var G__16452 = 0;
var G__16453 = 0;
seq__16420_16429 = G__16450;
chunk__16421_16430 = G__16451;
count__16422_16431 = G__16452;
i__16423_16432 = G__16453;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__16454){
var elem_sel = cljs.core.first(arglist__16454);
var type_fs = cljs.core.rest(arglist__16454);
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
var fire_BANG___delegate = function (node,event_type,p__16455){var vec__16457 = p__16455;var update_event_BANG_ = cljs.core.nth.call(null,vec__16457,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__16455 = null;if (arguments.length > 2) {
  p__16455 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__16455);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__16458){
var node = cljs.core.first(arglist__16458);
arglist__16458 = cljs.core.next(arglist__16458);
var event_type = cljs.core.first(arglist__16458);
var p__16455 = cljs.core.rest(arglist__16458);
return fire_BANG___delegate(node,event_type,p__16455);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map