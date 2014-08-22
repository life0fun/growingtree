// Compiled by ClojureScript 0.0-2277
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
dommy.core.text = (function text(elem){var or__3543__auto__ = elem.textContent;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
var append_BANG___2 = (function (parent,child){var G__17132 = dommy.template.__GT_node_like.call(null,parent);G__17132.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__17132;
});
var append_BANG___3 = (function() { 
var G__17137__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__17133_17138 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__17134_17139 = null;var count__17135_17140 = (0);var i__17136_17141 = (0);while(true){
if((i__17136_17141 < count__17135_17140))
{var c_17142 = cljs.core._nth.call(null,chunk__17134_17139,i__17136_17141);append_BANG_.call(null,parent__$1,c_17142);
{
var G__17143 = seq__17133_17138;
var G__17144 = chunk__17134_17139;
var G__17145 = count__17135_17140;
var G__17146 = (i__17136_17141 + (1));
seq__17133_17138 = G__17143;
chunk__17134_17139 = G__17144;
count__17135_17140 = G__17145;
i__17136_17141 = G__17146;
continue;
}
} else
{var temp__4126__auto___17147 = cljs.core.seq.call(null,seq__17133_17138);if(temp__4126__auto___17147)
{var seq__17133_17148__$1 = temp__4126__auto___17147;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17133_17148__$1))
{var c__4299__auto___17149 = cljs.core.chunk_first.call(null,seq__17133_17148__$1);{
var G__17150 = cljs.core.chunk_rest.call(null,seq__17133_17148__$1);
var G__17151 = c__4299__auto___17149;
var G__17152 = cljs.core.count.call(null,c__4299__auto___17149);
var G__17153 = (0);
seq__17133_17138 = G__17150;
chunk__17134_17139 = G__17151;
count__17135_17140 = G__17152;
i__17136_17141 = G__17153;
continue;
}
} else
{var c_17154 = cljs.core.first.call(null,seq__17133_17148__$1);append_BANG_.call(null,parent__$1,c_17154);
{
var G__17155 = cljs.core.next.call(null,seq__17133_17148__$1);
var G__17156 = null;
var G__17157 = (0);
var G__17158 = (0);
seq__17133_17138 = G__17155;
chunk__17134_17139 = G__17156;
count__17135_17140 = G__17157;
i__17136_17141 = G__17158;
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
var G__17137 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17137__delegate.call(this,parent,child,more_children);};
G__17137.cljs$lang$maxFixedArity = 2;
G__17137.cljs$lang$applyTo = (function (arglist__17159){
var parent = cljs.core.first(arglist__17159);
arglist__17159 = cljs.core.next(arglist__17159);
var child = cljs.core.first(arglist__17159);
var more_children = cljs.core.rest(arglist__17159);
return G__17137__delegate(parent,child,more_children);
});
G__17137.cljs$core$IFn$_invoke$arity$variadic = G__17137__delegate;
return G__17137;
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
var G__17168__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__17164_17169 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__17165_17170 = null;var count__17166_17171 = (0);var i__17167_17172 = (0);while(true){
if((i__17167_17172 < count__17166_17171))
{var c_17173 = cljs.core._nth.call(null,chunk__17165_17170,i__17167_17172);prepend_BANG_.call(null,parent__$1,c_17173);
{
var G__17174 = seq__17164_17169;
var G__17175 = chunk__17165_17170;
var G__17176 = count__17166_17171;
var G__17177 = (i__17167_17172 + (1));
seq__17164_17169 = G__17174;
chunk__17165_17170 = G__17175;
count__17166_17171 = G__17176;
i__17167_17172 = G__17177;
continue;
}
} else
{var temp__4126__auto___17178 = cljs.core.seq.call(null,seq__17164_17169);if(temp__4126__auto___17178)
{var seq__17164_17179__$1 = temp__4126__auto___17178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17164_17179__$1))
{var c__4299__auto___17180 = cljs.core.chunk_first.call(null,seq__17164_17179__$1);{
var G__17181 = cljs.core.chunk_rest.call(null,seq__17164_17179__$1);
var G__17182 = c__4299__auto___17180;
var G__17183 = cljs.core.count.call(null,c__4299__auto___17180);
var G__17184 = (0);
seq__17164_17169 = G__17181;
chunk__17165_17170 = G__17182;
count__17166_17171 = G__17183;
i__17167_17172 = G__17184;
continue;
}
} else
{var c_17185 = cljs.core.first.call(null,seq__17164_17179__$1);prepend_BANG_.call(null,parent__$1,c_17185);
{
var G__17186 = cljs.core.next.call(null,seq__17164_17179__$1);
var G__17187 = null;
var G__17188 = (0);
var G__17189 = (0);
seq__17164_17169 = G__17186;
chunk__17165_17170 = G__17187;
count__17166_17171 = G__17188;
i__17167_17172 = G__17189;
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
var G__17168 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__17168__delegate.call(this,parent,child,more_children);};
G__17168.cljs$lang$maxFixedArity = 2;
G__17168.cljs$lang$applyTo = (function (arglist__17190){
var parent = cljs.core.first(arglist__17190);
arglist__17190 = cljs.core.next(arglist__17190);
var child = cljs.core.first(arglist__17190);
var more_children = cljs.core.rest(arglist__17190);
return G__17168__delegate(parent,child,more_children);
});
G__17168.cljs$core$IFn$_invoke$arity$variadic = G__17168__delegate;
return G__17168;
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
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"other","other",-1658642225,null)))))));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4124__auto___17191 = other__$1.nextSibling;if(cljs.core.truth_(temp__4124__auto___17191))
{var next_17192 = temp__4124__auto___17191;parent.insertBefore(actual_node,next_17192);
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
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"elem","elem",-2035804713,null)))))));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__17194 = dommy.template.__GT_node_like.call(null,parent);G__17194.innerHTML = "";
dommy.core.append_BANG_.call(null,G__17194,node_like);
return G__17194;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__17196 = elem__$1.parentNode;G__17196.removeChild(elem__$1);
return G__17196;
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
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",-1736937707))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Keyword(null,"container","container",-1736937707))))))));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__17202){var vec__17203 = p__17202;var k = cljs.core.nth.call(null,vec__17203,(0),null);var v = cljs.core.nth.call(null,vec__17203,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t17204 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t17204 = (function (v,k,vec__17203,p__17202,container,key_selectors_map,template,selector_map,meta17205){
this.v = v;
this.k = k;
this.vec__17203 = vec__17203;
this.p__17202 = p__17202;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta17205 = meta17205;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t17204.cljs$lang$type = true;
dommy.core.t17204.cljs$lang$ctorStr = "dommy.core/t17204";
dommy.core.t17204.cljs$lang$ctorPrWriter = ((function (vec__17203,k,v,container){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"dommy.core/t17204");
});})(vec__17203,k,v,container))
;
dommy.core.t17204.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__17203,k,v,container){
return (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__17203,k,v,container))
;
dommy.core.t17204.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__17203,k,v,container){
return (function (_17206){var self__ = this;
var _17206__$1 = this;return self__.meta17205;
});})(vec__17203,k,v,container))
;
dommy.core.t17204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__17203,k,v,container){
return (function (_17206,meta17205__$1){var self__ = this;
var _17206__$1 = this;return (new dommy.core.t17204(self__.v,self__.k,self__.vec__17203,self__.p__17202,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta17205__$1));
});})(vec__17203,k,v,container))
;
dommy.core.__GT_t17204 = ((function (vec__17203,k,v,container){
return (function __GT_t17204(v__$1,k__$1,vec__17203__$1,p__17202__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta17205){return (new dommy.core.t17204(v__$1,k__$1,vec__17203__$1,p__17202__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta17205));
});})(vec__17203,k,v,container))
;
}
return (new dommy.core.t17204(v,k,vec__17203,p__17202,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__17207_SHARP_){return p1__17207_SHARP_.parentNode;
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
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__17208_SHARP_){return !((p1__17208_SHARP_ === base__$1));
});})(base__$1,elem__$1))
,dommy.core.ancestor_nodes.call(null,elem__$1))));
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
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << (4))) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__17209){var vec__17210 = p__17209;var special_mouse_event = cljs.core.nth.call(null,vec__17210,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__17210,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__17210,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__17210,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3543__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3531__auto__ = related_target;if(cljs.core.truth_(and__3531__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3531__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__17210,special_mouse_event,real_mouse_event))
});})(vec__17210,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3531__auto__ = selected_target;if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3531__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__3543__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__17211){
var elem = cljs.core.first(arglist__17211);
arglist__17211 = cljs.core.next(arglist__17211);
var f = cljs.core.first(arglist__17211);
var args = cljs.core.rest(arglist__17211);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__17212_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__17212_SHARP_));
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
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__17236_17259 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_17260 = cljs.core.nth.call(null,vec__17236_17259,(0),null);var selector_17261 = cljs.core.nth.call(null,vec__17236_17259,(1),null);var seq__17237_17262 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__17244_17263 = null;var count__17245_17264 = (0);var i__17246_17265 = (0);while(true){
if((i__17246_17265 < count__17245_17264))
{var vec__17253_17266 = cljs.core._nth.call(null,chunk__17244_17263,i__17246_17265);var orig_type_17267 = cljs.core.nth.call(null,vec__17253_17266,(0),null);var f_17268 = cljs.core.nth.call(null,vec__17253_17266,(1),null);var seq__17247_17269 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_17267,new cljs.core.PersistentArrayMap.fromArray([orig_type_17267,cljs.core.identity], true, false)));var chunk__17249_17270 = null;var count__17250_17271 = (0);var i__17251_17272 = (0);while(true){
if((i__17251_17272 < count__17250_17271))
{var vec__17254_17273 = cljs.core._nth.call(null,chunk__17249_17270,i__17251_17272);var actual_type_17274 = cljs.core.nth.call(null,vec__17254_17273,(0),null);var factory_17275 = cljs.core.nth.call(null,vec__17254_17273,(1),null);var canonical_f_17276 = (cljs.core.truth_(selector_17261)?cljs.core.partial.call(null,dommy.core.live_listener,elem_17260,selector_17261):cljs.core.identity).call(null,factory_17275.call(null,f_17268));dommy.core.update_event_listeners_BANG_.call(null,elem_17260,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_17261,actual_type_17274,f_17268], null),canonical_f_17276);
if(cljs.core.truth_(elem_17260.addEventListener))
{elem_17260.addEventListener(cljs.core.name.call(null,actual_type_17274),canonical_f_17276);
} else
{elem_17260.attachEvent(cljs.core.name.call(null,actual_type_17274),canonical_f_17276);
}
{
var G__17277 = seq__17247_17269;
var G__17278 = chunk__17249_17270;
var G__17279 = count__17250_17271;
var G__17280 = (i__17251_17272 + (1));
seq__17247_17269 = G__17277;
chunk__17249_17270 = G__17278;
count__17250_17271 = G__17279;
i__17251_17272 = G__17280;
continue;
}
} else
{var temp__4126__auto___17281 = cljs.core.seq.call(null,seq__17247_17269);if(temp__4126__auto___17281)
{var seq__17247_17282__$1 = temp__4126__auto___17281;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17247_17282__$1))
{var c__4299__auto___17283 = cljs.core.chunk_first.call(null,seq__17247_17282__$1);{
var G__17284 = cljs.core.chunk_rest.call(null,seq__17247_17282__$1);
var G__17285 = c__4299__auto___17283;
var G__17286 = cljs.core.count.call(null,c__4299__auto___17283);
var G__17287 = (0);
seq__17247_17269 = G__17284;
chunk__17249_17270 = G__17285;
count__17250_17271 = G__17286;
i__17251_17272 = G__17287;
continue;
}
} else
{var vec__17255_17288 = cljs.core.first.call(null,seq__17247_17282__$1);var actual_type_17289 = cljs.core.nth.call(null,vec__17255_17288,(0),null);var factory_17290 = cljs.core.nth.call(null,vec__17255_17288,(1),null);var canonical_f_17291 = (cljs.core.truth_(selector_17261)?cljs.core.partial.call(null,dommy.core.live_listener,elem_17260,selector_17261):cljs.core.identity).call(null,factory_17290.call(null,f_17268));dommy.core.update_event_listeners_BANG_.call(null,elem_17260,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_17261,actual_type_17289,f_17268], null),canonical_f_17291);
if(cljs.core.truth_(elem_17260.addEventListener))
{elem_17260.addEventListener(cljs.core.name.call(null,actual_type_17289),canonical_f_17291);
} else
{elem_17260.attachEvent(cljs.core.name.call(null,actual_type_17289),canonical_f_17291);
}
{
var G__17292 = cljs.core.next.call(null,seq__17247_17282__$1);
var G__17293 = null;
var G__17294 = (0);
var G__17295 = (0);
seq__17247_17269 = G__17292;
chunk__17249_17270 = G__17293;
count__17250_17271 = G__17294;
i__17251_17272 = G__17295;
continue;
}
}
} else
{}
}
break;
}
{
var G__17296 = seq__17237_17262;
var G__17297 = chunk__17244_17263;
var G__17298 = count__17245_17264;
var G__17299 = (i__17246_17265 + (1));
seq__17237_17262 = G__17296;
chunk__17244_17263 = G__17297;
count__17245_17264 = G__17298;
i__17246_17265 = G__17299;
continue;
}
} else
{var temp__4126__auto___17300 = cljs.core.seq.call(null,seq__17237_17262);if(temp__4126__auto___17300)
{var seq__17237_17301__$1 = temp__4126__auto___17300;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17237_17301__$1))
{var c__4299__auto___17302 = cljs.core.chunk_first.call(null,seq__17237_17301__$1);{
var G__17303 = cljs.core.chunk_rest.call(null,seq__17237_17301__$1);
var G__17304 = c__4299__auto___17302;
var G__17305 = cljs.core.count.call(null,c__4299__auto___17302);
var G__17306 = (0);
seq__17237_17262 = G__17303;
chunk__17244_17263 = G__17304;
count__17245_17264 = G__17305;
i__17246_17265 = G__17306;
continue;
}
} else
{var vec__17256_17307 = cljs.core.first.call(null,seq__17237_17301__$1);var orig_type_17308 = cljs.core.nth.call(null,vec__17256_17307,(0),null);var f_17309 = cljs.core.nth.call(null,vec__17256_17307,(1),null);var seq__17238_17310 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_17308,new cljs.core.PersistentArrayMap.fromArray([orig_type_17308,cljs.core.identity], true, false)));var chunk__17240_17311 = null;var count__17241_17312 = (0);var i__17242_17313 = (0);while(true){
if((i__17242_17313 < count__17241_17312))
{var vec__17257_17314 = cljs.core._nth.call(null,chunk__17240_17311,i__17242_17313);var actual_type_17315 = cljs.core.nth.call(null,vec__17257_17314,(0),null);var factory_17316 = cljs.core.nth.call(null,vec__17257_17314,(1),null);var canonical_f_17317 = (cljs.core.truth_(selector_17261)?cljs.core.partial.call(null,dommy.core.live_listener,elem_17260,selector_17261):cljs.core.identity).call(null,factory_17316.call(null,f_17309));dommy.core.update_event_listeners_BANG_.call(null,elem_17260,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_17261,actual_type_17315,f_17309], null),canonical_f_17317);
if(cljs.core.truth_(elem_17260.addEventListener))
{elem_17260.addEventListener(cljs.core.name.call(null,actual_type_17315),canonical_f_17317);
} else
{elem_17260.attachEvent(cljs.core.name.call(null,actual_type_17315),canonical_f_17317);
}
{
var G__17318 = seq__17238_17310;
var G__17319 = chunk__17240_17311;
var G__17320 = count__17241_17312;
var G__17321 = (i__17242_17313 + (1));
seq__17238_17310 = G__17318;
chunk__17240_17311 = G__17319;
count__17241_17312 = G__17320;
i__17242_17313 = G__17321;
continue;
}
} else
{var temp__4126__auto___17322__$1 = cljs.core.seq.call(null,seq__17238_17310);if(temp__4126__auto___17322__$1)
{var seq__17238_17323__$1 = temp__4126__auto___17322__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17238_17323__$1))
{var c__4299__auto___17324 = cljs.core.chunk_first.call(null,seq__17238_17323__$1);{
var G__17325 = cljs.core.chunk_rest.call(null,seq__17238_17323__$1);
var G__17326 = c__4299__auto___17324;
var G__17327 = cljs.core.count.call(null,c__4299__auto___17324);
var G__17328 = (0);
seq__17238_17310 = G__17325;
chunk__17240_17311 = G__17326;
count__17241_17312 = G__17327;
i__17242_17313 = G__17328;
continue;
}
} else
{var vec__17258_17329 = cljs.core.first.call(null,seq__17238_17323__$1);var actual_type_17330 = cljs.core.nth.call(null,vec__17258_17329,(0),null);var factory_17331 = cljs.core.nth.call(null,vec__17258_17329,(1),null);var canonical_f_17332 = (cljs.core.truth_(selector_17261)?cljs.core.partial.call(null,dommy.core.live_listener,elem_17260,selector_17261):cljs.core.identity).call(null,factory_17331.call(null,f_17309));dommy.core.update_event_listeners_BANG_.call(null,elem_17260,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_17261,actual_type_17330,f_17309], null),canonical_f_17332);
if(cljs.core.truth_(elem_17260.addEventListener))
{elem_17260.addEventListener(cljs.core.name.call(null,actual_type_17330),canonical_f_17332);
} else
{elem_17260.attachEvent(cljs.core.name.call(null,actual_type_17330),canonical_f_17332);
}
{
var G__17333 = cljs.core.next.call(null,seq__17238_17323__$1);
var G__17334 = null;
var G__17335 = (0);
var G__17336 = (0);
seq__17238_17310 = G__17333;
chunk__17240_17311 = G__17334;
count__17241_17312 = G__17335;
i__17242_17313 = G__17336;
continue;
}
}
} else
{}
}
break;
}
{
var G__17337 = cljs.core.next.call(null,seq__17237_17301__$1);
var G__17338 = null;
var G__17339 = (0);
var G__17340 = (0);
seq__17237_17262 = G__17337;
chunk__17244_17263 = G__17338;
count__17245_17264 = G__17339;
i__17246_17265 = G__17340;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__17341){
var elem_sel = cljs.core.first(arglist__17341);
var type_fs = cljs.core.rest(arglist__17341);
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
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__17365_17388 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_17389 = cljs.core.nth.call(null,vec__17365_17388,(0),null);var selector_17390 = cljs.core.nth.call(null,vec__17365_17388,(1),null);var seq__17366_17391 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__17373_17392 = null;var count__17374_17393 = (0);var i__17375_17394 = (0);while(true){
if((i__17375_17394 < count__17374_17393))
{var vec__17382_17395 = cljs.core._nth.call(null,chunk__17373_17392,i__17375_17394);var orig_type_17396 = cljs.core.nth.call(null,vec__17382_17395,(0),null);var f_17397 = cljs.core.nth.call(null,vec__17382_17395,(1),null);var seq__17376_17398 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_17396,new cljs.core.PersistentArrayMap.fromArray([orig_type_17396,cljs.core.identity], true, false)));var chunk__17378_17399 = null;var count__17379_17400 = (0);var i__17380_17401 = (0);while(true){
if((i__17380_17401 < count__17379_17400))
{var vec__17383_17402 = cljs.core._nth.call(null,chunk__17378_17399,i__17380_17401);var actual_type_17403 = cljs.core.nth.call(null,vec__17383_17402,(0),null);var __17404 = cljs.core.nth.call(null,vec__17383_17402,(1),null);var keys_17405 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_17390,actual_type_17403,f_17397], null);var canonical_f_17406 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_17389),keys_17405);dommy.core.update_event_listeners_BANG_.call(null,elem_17389,dommy.utils.dissoc_in,keys_17405);
if(cljs.core.truth_(elem_17389.removeEventListener))
{elem_17389.removeEventListener(cljs.core.name.call(null,actual_type_17403),canonical_f_17406);
} else
{elem_17389.detachEvent(cljs.core.name.call(null,actual_type_17403),canonical_f_17406);
}
{
var G__17407 = seq__17376_17398;
var G__17408 = chunk__17378_17399;
var G__17409 = count__17379_17400;
var G__17410 = (i__17380_17401 + (1));
seq__17376_17398 = G__17407;
chunk__17378_17399 = G__17408;
count__17379_17400 = G__17409;
i__17380_17401 = G__17410;
continue;
}
} else
{var temp__4126__auto___17411 = cljs.core.seq.call(null,seq__17376_17398);if(temp__4126__auto___17411)
{var seq__17376_17412__$1 = temp__4126__auto___17411;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17376_17412__$1))
{var c__4299__auto___17413 = cljs.core.chunk_first.call(null,seq__17376_17412__$1);{
var G__17414 = cljs.core.chunk_rest.call(null,seq__17376_17412__$1);
var G__17415 = c__4299__auto___17413;
var G__17416 = cljs.core.count.call(null,c__4299__auto___17413);
var G__17417 = (0);
seq__17376_17398 = G__17414;
chunk__17378_17399 = G__17415;
count__17379_17400 = G__17416;
i__17380_17401 = G__17417;
continue;
}
} else
{var vec__17384_17418 = cljs.core.first.call(null,seq__17376_17412__$1);var actual_type_17419 = cljs.core.nth.call(null,vec__17384_17418,(0),null);var __17420 = cljs.core.nth.call(null,vec__17384_17418,(1),null);var keys_17421 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_17390,actual_type_17419,f_17397], null);var canonical_f_17422 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_17389),keys_17421);dommy.core.update_event_listeners_BANG_.call(null,elem_17389,dommy.utils.dissoc_in,keys_17421);
if(cljs.core.truth_(elem_17389.removeEventListener))
{elem_17389.removeEventListener(cljs.core.name.call(null,actual_type_17419),canonical_f_17422);
} else
{elem_17389.detachEvent(cljs.core.name.call(null,actual_type_17419),canonical_f_17422);
}
{
var G__17423 = cljs.core.next.call(null,seq__17376_17412__$1);
var G__17424 = null;
var G__17425 = (0);
var G__17426 = (0);
seq__17376_17398 = G__17423;
chunk__17378_17399 = G__17424;
count__17379_17400 = G__17425;
i__17380_17401 = G__17426;
continue;
}
}
} else
{}
}
break;
}
{
var G__17427 = seq__17366_17391;
var G__17428 = chunk__17373_17392;
var G__17429 = count__17374_17393;
var G__17430 = (i__17375_17394 + (1));
seq__17366_17391 = G__17427;
chunk__17373_17392 = G__17428;
count__17374_17393 = G__17429;
i__17375_17394 = G__17430;
continue;
}
} else
{var temp__4126__auto___17431 = cljs.core.seq.call(null,seq__17366_17391);if(temp__4126__auto___17431)
{var seq__17366_17432__$1 = temp__4126__auto___17431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17366_17432__$1))
{var c__4299__auto___17433 = cljs.core.chunk_first.call(null,seq__17366_17432__$1);{
var G__17434 = cljs.core.chunk_rest.call(null,seq__17366_17432__$1);
var G__17435 = c__4299__auto___17433;
var G__17436 = cljs.core.count.call(null,c__4299__auto___17433);
var G__17437 = (0);
seq__17366_17391 = G__17434;
chunk__17373_17392 = G__17435;
count__17374_17393 = G__17436;
i__17375_17394 = G__17437;
continue;
}
} else
{var vec__17385_17438 = cljs.core.first.call(null,seq__17366_17432__$1);var orig_type_17439 = cljs.core.nth.call(null,vec__17385_17438,(0),null);var f_17440 = cljs.core.nth.call(null,vec__17385_17438,(1),null);var seq__17367_17441 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_17439,new cljs.core.PersistentArrayMap.fromArray([orig_type_17439,cljs.core.identity], true, false)));var chunk__17369_17442 = null;var count__17370_17443 = (0);var i__17371_17444 = (0);while(true){
if((i__17371_17444 < count__17370_17443))
{var vec__17386_17445 = cljs.core._nth.call(null,chunk__17369_17442,i__17371_17444);var actual_type_17446 = cljs.core.nth.call(null,vec__17386_17445,(0),null);var __17447 = cljs.core.nth.call(null,vec__17386_17445,(1),null);var keys_17448 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_17390,actual_type_17446,f_17440], null);var canonical_f_17449 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_17389),keys_17448);dommy.core.update_event_listeners_BANG_.call(null,elem_17389,dommy.utils.dissoc_in,keys_17448);
if(cljs.core.truth_(elem_17389.removeEventListener))
{elem_17389.removeEventListener(cljs.core.name.call(null,actual_type_17446),canonical_f_17449);
} else
{elem_17389.detachEvent(cljs.core.name.call(null,actual_type_17446),canonical_f_17449);
}
{
var G__17450 = seq__17367_17441;
var G__17451 = chunk__17369_17442;
var G__17452 = count__17370_17443;
var G__17453 = (i__17371_17444 + (1));
seq__17367_17441 = G__17450;
chunk__17369_17442 = G__17451;
count__17370_17443 = G__17452;
i__17371_17444 = G__17453;
continue;
}
} else
{var temp__4126__auto___17454__$1 = cljs.core.seq.call(null,seq__17367_17441);if(temp__4126__auto___17454__$1)
{var seq__17367_17455__$1 = temp__4126__auto___17454__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17367_17455__$1))
{var c__4299__auto___17456 = cljs.core.chunk_first.call(null,seq__17367_17455__$1);{
var G__17457 = cljs.core.chunk_rest.call(null,seq__17367_17455__$1);
var G__17458 = c__4299__auto___17456;
var G__17459 = cljs.core.count.call(null,c__4299__auto___17456);
var G__17460 = (0);
seq__17367_17441 = G__17457;
chunk__17369_17442 = G__17458;
count__17370_17443 = G__17459;
i__17371_17444 = G__17460;
continue;
}
} else
{var vec__17387_17461 = cljs.core.first.call(null,seq__17367_17455__$1);var actual_type_17462 = cljs.core.nth.call(null,vec__17387_17461,(0),null);var __17463 = cljs.core.nth.call(null,vec__17387_17461,(1),null);var keys_17464 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_17390,actual_type_17462,f_17440], null);var canonical_f_17465 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_17389),keys_17464);dommy.core.update_event_listeners_BANG_.call(null,elem_17389,dommy.utils.dissoc_in,keys_17464);
if(cljs.core.truth_(elem_17389.removeEventListener))
{elem_17389.removeEventListener(cljs.core.name.call(null,actual_type_17462),canonical_f_17465);
} else
{elem_17389.detachEvent(cljs.core.name.call(null,actual_type_17462),canonical_f_17465);
}
{
var G__17466 = cljs.core.next.call(null,seq__17367_17455__$1);
var G__17467 = null;
var G__17468 = (0);
var G__17469 = (0);
seq__17367_17441 = G__17466;
chunk__17369_17442 = G__17467;
count__17370_17443 = G__17468;
i__17371_17444 = G__17469;
continue;
}
}
} else
{}
}
break;
}
{
var G__17470 = cljs.core.next.call(null,seq__17366_17432__$1);
var G__17471 = null;
var G__17472 = (0);
var G__17473 = (0);
seq__17366_17391 = G__17470;
chunk__17373_17392 = G__17471;
count__17374_17393 = G__17472;
i__17375_17394 = G__17473;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__17474){
var elem_sel = cljs.core.first(arglist__17474);
var type_fs = cljs.core.rest(arglist__17474);
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
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__17482_17489 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_17490 = cljs.core.nth.call(null,vec__17482_17489,(0),null);var selector_17491 = cljs.core.nth.call(null,vec__17482_17489,(1),null);var seq__17483_17492 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__17484_17493 = null;var count__17485_17494 = (0);var i__17486_17495 = (0);while(true){
if((i__17486_17495 < count__17485_17494))
{var vec__17487_17496 = cljs.core._nth.call(null,chunk__17484_17493,i__17486_17495);var type_17497 = cljs.core.nth.call(null,vec__17487_17496,(0),null);var f_17498 = cljs.core.nth.call(null,vec__17487_17496,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_17497,((function (seq__17483_17492,chunk__17484_17493,count__17485_17494,i__17486_17495,vec__17487_17496,type_17497,f_17498,vec__17482_17489,elem_17490,selector_17491){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_17497,this_fn);
return f_17498.call(null,e);
});})(seq__17483_17492,chunk__17484_17493,count__17485_17494,i__17486_17495,vec__17487_17496,type_17497,f_17498,vec__17482_17489,elem_17490,selector_17491))
);
{
var G__17499 = seq__17483_17492;
var G__17500 = chunk__17484_17493;
var G__17501 = count__17485_17494;
var G__17502 = (i__17486_17495 + (1));
seq__17483_17492 = G__17499;
chunk__17484_17493 = G__17500;
count__17485_17494 = G__17501;
i__17486_17495 = G__17502;
continue;
}
} else
{var temp__4126__auto___17503 = cljs.core.seq.call(null,seq__17483_17492);if(temp__4126__auto___17503)
{var seq__17483_17504__$1 = temp__4126__auto___17503;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17483_17504__$1))
{var c__4299__auto___17505 = cljs.core.chunk_first.call(null,seq__17483_17504__$1);{
var G__17506 = cljs.core.chunk_rest.call(null,seq__17483_17504__$1);
var G__17507 = c__4299__auto___17505;
var G__17508 = cljs.core.count.call(null,c__4299__auto___17505);
var G__17509 = (0);
seq__17483_17492 = G__17506;
chunk__17484_17493 = G__17507;
count__17485_17494 = G__17508;
i__17486_17495 = G__17509;
continue;
}
} else
{var vec__17488_17510 = cljs.core.first.call(null,seq__17483_17504__$1);var type_17511 = cljs.core.nth.call(null,vec__17488_17510,(0),null);var f_17512 = cljs.core.nth.call(null,vec__17488_17510,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_17511,((function (seq__17483_17492,chunk__17484_17493,count__17485_17494,i__17486_17495,vec__17488_17510,type_17511,f_17512,seq__17483_17504__$1,temp__4126__auto___17503,vec__17482_17489,elem_17490,selector_17491){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_17511,this_fn);
return f_17512.call(null,e);
});})(seq__17483_17492,chunk__17484_17493,count__17485_17494,i__17486_17495,vec__17488_17510,type_17511,f_17512,seq__17483_17504__$1,temp__4126__auto___17503,vec__17482_17489,elem_17490,selector_17491))
);
{
var G__17513 = cljs.core.next.call(null,seq__17483_17504__$1);
var G__17514 = null;
var G__17515 = (0);
var G__17516 = (0);
seq__17483_17492 = G__17513;
chunk__17484_17493 = G__17514;
count__17485_17494 = G__17515;
i__17486_17495 = G__17516;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__17517){
var elem_sel = cljs.core.first(arglist__17517);
var type_fs = cljs.core.rest(arglist__17517);
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
var fire_BANG___delegate = function (node,event_type,p__17518){var vec__17520 = p__17518;var update_event_BANG_ = cljs.core.nth.call(null,vec__17520,(0),null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null)))))));
}
var update_event_BANG___$1 = (function (){var or__3543__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent(("on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,event_type))),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__17518 = null;if (arguments.length > 2) {
  p__17518 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__17518);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__17521){
var node = cljs.core.first(arglist__17521);
arglist__17521 = cljs.core.next(arglist__17521);
var event_type = cljs.core.first(arglist__17521);
var p__17518 = cljs.core.rest(arglist__17521);
return fire_BANG___delegate(node,event_type,p__17518);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map