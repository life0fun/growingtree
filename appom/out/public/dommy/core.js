// Compiled by ClojureScript 0.0-2850 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.utils');
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
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.innerHTML = html;

return elem__$1;
});
dommy.core.html = (function html(elem){
return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");
(elem__$1[prop] = text);

return elem__$1;
});
dommy.core.text = (function text(elem){
var or__3807__auto__ = elem.textContent;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return elem.innerText;
}
});
dommy.core.value = (function value(elem){
return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
elem__$1.value = value;

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
var append_BANG___2 = (function (parent,child){
var G__33363 = dommy.template.__GT_node_like.call(null,parent);
G__33363.appendChild(dommy.template.__GT_node_like.call(null,child));

return G__33363;
});
var append_BANG___3 = (function() { 
var G__33368__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__33364_33369 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__33365_33370 = null;
var count__33366_33371 = (0);
var i__33367_33372 = (0);
while(true){
if((i__33367_33372 < count__33366_33371)){
var c_33373 = cljs.core._nth.call(null,chunk__33365_33370,i__33367_33372);
append_BANG_.call(null,parent__$1,c_33373);

var G__33374 = seq__33364_33369;
var G__33375 = chunk__33365_33370;
var G__33376 = count__33366_33371;
var G__33377 = (i__33367_33372 + (1));
seq__33364_33369 = G__33374;
chunk__33365_33370 = G__33375;
count__33366_33371 = G__33376;
i__33367_33372 = G__33377;
continue;
} else {
var temp__4126__auto___33378 = cljs.core.seq.call(null,seq__33364_33369);
if(temp__4126__auto___33378){
var seq__33364_33379__$1 = temp__4126__auto___33378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33364_33379__$1)){
var c__4594__auto___33380 = cljs.core.chunk_first.call(null,seq__33364_33379__$1);
var G__33381 = cljs.core.chunk_rest.call(null,seq__33364_33379__$1);
var G__33382 = c__4594__auto___33380;
var G__33383 = cljs.core.count.call(null,c__4594__auto___33380);
var G__33384 = (0);
seq__33364_33369 = G__33381;
chunk__33365_33370 = G__33382;
count__33366_33371 = G__33383;
i__33367_33372 = G__33384;
continue;
} else {
var c_33385 = cljs.core.first.call(null,seq__33364_33379__$1);
append_BANG_.call(null,parent__$1,c_33385);

var G__33386 = cljs.core.next.call(null,seq__33364_33379__$1);
var G__33387 = null;
var G__33388 = (0);
var G__33389 = (0);
seq__33364_33369 = G__33386;
chunk__33365_33370 = G__33387;
count__33366_33371 = G__33388;
i__33367_33372 = G__33389;
continue;
}
} else {
}
}
break;
}

return parent__$1;
};
var G__33368 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__33390__i = 0, G__33390__a = new Array(arguments.length -  2);
while (G__33390__i < G__33390__a.length) {G__33390__a[G__33390__i] = arguments[G__33390__i + 2]; ++G__33390__i;}
  more_children = new cljs.core.IndexedSeq(G__33390__a,0);
} 
return G__33368__delegate.call(this,parent,child,more_children);};
G__33368.cljs$lang$maxFixedArity = 2;
G__33368.cljs$lang$applyTo = (function (arglist__33391){
var parent = cljs.core.first(arglist__33391);
arglist__33391 = cljs.core.next(arglist__33391);
var child = cljs.core.first(arglist__33391);
var more_children = cljs.core.rest(arglist__33391);
return G__33368__delegate(parent,child,more_children);
});
G__33368.cljs$core$IFn$_invoke$arity$variadic = G__33368__delegate;
return G__33368;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
var G__33392 = null;
if (arguments.length > 2) {
var G__33393__i = 0, G__33393__a = new Array(arguments.length -  2);
while (G__33393__i < G__33393__a.length) {G__33393__a[G__33393__i] = arguments[G__33393__i + 2]; ++G__33393__i;}
G__33392 = new cljs.core.IndexedSeq(G__33393__a,0);
}
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__33392);
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
var prepend_BANG___2 = (function (parent,child){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__33402__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__33398_33403 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__33399_33404 = null;
var count__33400_33405 = (0);
var i__33401_33406 = (0);
while(true){
if((i__33401_33406 < count__33400_33405)){
var c_33407 = cljs.core._nth.call(null,chunk__33399_33404,i__33401_33406);
prepend_BANG_.call(null,parent__$1,c_33407);

var G__33408 = seq__33398_33403;
var G__33409 = chunk__33399_33404;
var G__33410 = count__33400_33405;
var G__33411 = (i__33401_33406 + (1));
seq__33398_33403 = G__33408;
chunk__33399_33404 = G__33409;
count__33400_33405 = G__33410;
i__33401_33406 = G__33411;
continue;
} else {
var temp__4126__auto___33412 = cljs.core.seq.call(null,seq__33398_33403);
if(temp__4126__auto___33412){
var seq__33398_33413__$1 = temp__4126__auto___33412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33398_33413__$1)){
var c__4594__auto___33414 = cljs.core.chunk_first.call(null,seq__33398_33413__$1);
var G__33415 = cljs.core.chunk_rest.call(null,seq__33398_33413__$1);
var G__33416 = c__4594__auto___33414;
var G__33417 = cljs.core.count.call(null,c__4594__auto___33414);
var G__33418 = (0);
seq__33398_33403 = G__33415;
chunk__33399_33404 = G__33416;
count__33400_33405 = G__33417;
i__33401_33406 = G__33418;
continue;
} else {
var c_33419 = cljs.core.first.call(null,seq__33398_33413__$1);
prepend_BANG_.call(null,parent__$1,c_33419);

var G__33420 = cljs.core.next.call(null,seq__33398_33413__$1);
var G__33421 = null;
var G__33422 = (0);
var G__33423 = (0);
seq__33398_33403 = G__33420;
chunk__33399_33404 = G__33421;
count__33400_33405 = G__33422;
i__33401_33406 = G__33423;
continue;
}
} else {
}
}
break;
}

return parent__$1;
};
var G__33402 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__33424__i = 0, G__33424__a = new Array(arguments.length -  2);
while (G__33424__i < G__33424__a.length) {G__33424__a[G__33424__i] = arguments[G__33424__i + 2]; ++G__33424__i;}
  more_children = new cljs.core.IndexedSeq(G__33424__a,0);
} 
return G__33402__delegate.call(this,parent,child,more_children);};
G__33402.cljs$lang$maxFixedArity = 2;
G__33402.cljs$lang$applyTo = (function (arglist__33425){
var parent = cljs.core.first(arglist__33425);
arglist__33425 = cljs.core.next(arglist__33425);
var child = cljs.core.first(arglist__33425);
var more_children = cljs.core.rest(arglist__33425);
return G__33402__delegate(parent,child,more_children);
});
G__33402.cljs$core$IFn$_invoke$arity$variadic = G__33402__delegate;
return G__33402;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
var G__33426 = null;
if (arguments.length > 2) {
var G__33427__i = 0, G__33427__a = new Array(arguments.length -  2);
while (G__33427__i < G__33427__a.length) {G__33427__a[G__33427__i] = arguments[G__33427__i + 2]; ++G__33427__i;}
G__33426 = new cljs.core.IndexedSeq(G__33427__a,0);
}
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__33426);
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
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
if(cljs.core.truth_(other__$1.parentNode)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"other","other",-1658642225,null))))].join('')));
}

other__$1.parentNode.insertBefore(actual_node,other__$1);

return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){
var actual_node = dommy.template.__GT_node_like.call(null,elem);
var other__$1 = dommy.template.__GT_node_like.call(null,other);
var parent = other__$1.parentNode;
var temp__4124__auto___33428 = other__$1.nextSibling;
if(cljs.core.truth_(temp__4124__auto___33428)){
var next_33429 = temp__4124__auto___33428;
parent.insertBefore(actual_node,next_33429);
} else {
parent.appendChild(actual_node);
}

return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){
var new$__$1 = dommy.template.__GT_node_like.call(null,new$);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
if(cljs.core.truth_(elem__$1.parentNode)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",-1418255893,null),new cljs.core.Symbol(null,"elem","elem",-2035804713,null))))].join('')));
}

elem__$1.parentNode.replaceChild(new$__$1,elem__$1);

return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){
var G__33431 = dommy.template.__GT_node_like.call(null,parent);
G__33431.innerHTML = "";

dommy.core.append_BANG_.call(null,G__33431,node_like);

return G__33431;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__33433 = elem__$1.parentNode;
G__33433.removeChild(elem__$1);

return G__33433;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){
return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){
var container = dommy.template.__GT_node_like.call(null,template);
if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",-1736937707)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",1212911103,null),new cljs.core.Keyword(null,"container","container",-1736937707)))))].join('')));
}

return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (container){
return (function (p__33439){
var vec__33440 = p__33439;
var k = cljs.core.nth.call(null,vec__33440,(0),null);
var v = cljs.core.nth.call(null,vec__33440,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){
if(typeof dommy.core.t33441 !== 'undefined'){
} else {

/**
* @constructor
*/
dommy.core.t33441 = (function (v,k,vec__33440,p__33439,container,key_selectors_map,template,selector_map,meta33442){
this.v = v;
this.k = k;
this.vec__33440 = vec__33440;
this.p__33439 = p__33439;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta33442 = meta33442;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t33441.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__33440,k,v,container){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__33440,k,v,container))
;

dommy.core.t33441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__33440,k,v,container){
return (function (_33443){
var self__ = this;
var _33443__$1 = this;
return self__.meta33442;
});})(vec__33440,k,v,container))
;

dommy.core.t33441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__33440,k,v,container){
return (function (_33443,meta33442__$1){
var self__ = this;
var _33443__$1 = this;
return (new dommy.core.t33441(self__.v,self__.k,self__.vec__33440,self__.p__33439,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta33442__$1));
});})(vec__33440,k,v,container))
;

dommy.core.t33441.cljs$lang$type = true;

dommy.core.t33441.cljs$lang$ctorStr = "dommy.core/t33441";

dommy.core.t33441.cljs$lang$ctorPrWriter = ((function (vec__33440,k,v,container){
return (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"dommy.core/t33441");
});})(vec__33440,k,v,container))
;

dommy.core.__GT_t33441 = ((function (vec__33440,k,v,container){
return (function __GT_t33441(v__$1,k__$1,vec__33440__$1,p__33439__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta33442){
return (new dommy.core.t33441(v__$1,k__$1,vec__33440__$1,p__33439__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta33442));
});})(vec__33440,k,v,container))
;

}

return (new dommy.core.t33441(v,k,vec__33440,p__33439,container,key_selectors_map,template,selector_map,cljs.core.PersistentArrayMap.EMPTY));
})()
:dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__33444_SHARP_){
return p1__33444_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){
return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
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
var closest__2 = (function (elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){
var base__$1 = dommy.template.__GT_node_like.call(null,base);
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,((function (base__$1,elem__$1){
return (function (p1__33445_SHARP_){
return !((p1__33445_SHARP_ === base__$1));
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
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){
var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);
var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);
if(cljs.core.truth_(ancestor__$1.contains)){
return ancestor__$1.contains(descendant__$1);
} else {
if(cljs.core.truth_(ancestor__$1.compareDocumentPosition)){
return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << (4))) != 0);
} else {
return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__33446){
var vec__33447 = p__33446;
var special_mouse_event = cljs.core.nth.call(null,vec__33447,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__33447,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__33447,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__33447,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__3807__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__3795__auto__ = related_target;
if(cljs.core.truth_(and__3795__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__3795__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__33447,special_mouse_event,real_mouse_event))
});})(vec__33447,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);
if(cljs.core.truth_((function (){var and__3795__auto__ = selected_target;
if(cljs.core.truth_(and__3795__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__3795__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){
var or__3807__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__33448__i = 0, G__33448__a = new Array(arguments.length -  2);
while (G__33448__i < G__33448__a.length) {G__33448__a[G__33448__i] = arguments[G__33448__i + 2]; ++G__33448__i;}
  args = new cljs.core.IndexedSeq(G__33448__a,0);
} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__33449){
var elem = cljs.core.first(arglist__33449);
arglist__33449 = cljs.core.next(arglist__33449);
var f = cljs.core.first(arglist__33449);
var args = cljs.core.rest(arglist__33449);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,(function (p1__33450_SHARP_){
return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__33450_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
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
var listen_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__33474_33497 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_33498 = cljs.core.nth.call(null,vec__33474_33497,(0),null);
var selector_33499 = cljs.core.nth.call(null,vec__33474_33497,(1),null);
var seq__33475_33500 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__33482_33501 = null;
var count__33483_33502 = (0);
var i__33484_33503 = (0);
while(true){
if((i__33484_33503 < count__33483_33502)){
var vec__33491_33504 = cljs.core._nth.call(null,chunk__33482_33501,i__33484_33503);
var orig_type_33505 = cljs.core.nth.call(null,vec__33491_33504,(0),null);
var f_33506 = cljs.core.nth.call(null,vec__33491_33504,(1),null);
var seq__33485_33507 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_33505,new cljs.core.PersistentArrayMap.fromArray([orig_type_33505,cljs.core.identity], true, false)));
var chunk__33487_33508 = null;
var count__33488_33509 = (0);
var i__33489_33510 = (0);
while(true){
if((i__33489_33510 < count__33488_33509)){
var vec__33492_33511 = cljs.core._nth.call(null,chunk__33487_33508,i__33489_33510);
var actual_type_33512 = cljs.core.nth.call(null,vec__33492_33511,(0),null);
var factory_33513 = cljs.core.nth.call(null,vec__33492_33511,(1),null);
var canonical_f_33514 = (cljs.core.truth_(selector_33499)?cljs.core.partial.call(null,dommy.core.live_listener,elem_33498,selector_33499):cljs.core.identity).call(null,factory_33513.call(null,f_33506));
dommy.core.update_event_listeners_BANG_.call(null,elem_33498,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_33499,actual_type_33512,f_33506], null),canonical_f_33514);

if(cljs.core.truth_(elem_33498.addEventListener)){
elem_33498.addEventListener(cljs.core.name.call(null,actual_type_33512),canonical_f_33514);
} else {
elem_33498.attachEvent(cljs.core.name.call(null,actual_type_33512),canonical_f_33514);
}

var G__33515 = seq__33485_33507;
var G__33516 = chunk__33487_33508;
var G__33517 = count__33488_33509;
var G__33518 = (i__33489_33510 + (1));
seq__33485_33507 = G__33515;
chunk__33487_33508 = G__33516;
count__33488_33509 = G__33517;
i__33489_33510 = G__33518;
continue;
} else {
var temp__4126__auto___33519 = cljs.core.seq.call(null,seq__33485_33507);
if(temp__4126__auto___33519){
var seq__33485_33520__$1 = temp__4126__auto___33519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33485_33520__$1)){
var c__4594__auto___33521 = cljs.core.chunk_first.call(null,seq__33485_33520__$1);
var G__33522 = cljs.core.chunk_rest.call(null,seq__33485_33520__$1);
var G__33523 = c__4594__auto___33521;
var G__33524 = cljs.core.count.call(null,c__4594__auto___33521);
var G__33525 = (0);
seq__33485_33507 = G__33522;
chunk__33487_33508 = G__33523;
count__33488_33509 = G__33524;
i__33489_33510 = G__33525;
continue;
} else {
var vec__33493_33526 = cljs.core.first.call(null,seq__33485_33520__$1);
var actual_type_33527 = cljs.core.nth.call(null,vec__33493_33526,(0),null);
var factory_33528 = cljs.core.nth.call(null,vec__33493_33526,(1),null);
var canonical_f_33529 = (cljs.core.truth_(selector_33499)?cljs.core.partial.call(null,dommy.core.live_listener,elem_33498,selector_33499):cljs.core.identity).call(null,factory_33528.call(null,f_33506));
dommy.core.update_event_listeners_BANG_.call(null,elem_33498,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_33499,actual_type_33527,f_33506], null),canonical_f_33529);

if(cljs.core.truth_(elem_33498.addEventListener)){
elem_33498.addEventListener(cljs.core.name.call(null,actual_type_33527),canonical_f_33529);
} else {
elem_33498.attachEvent(cljs.core.name.call(null,actual_type_33527),canonical_f_33529);
}

var G__33530 = cljs.core.next.call(null,seq__33485_33520__$1);
var G__33531 = null;
var G__33532 = (0);
var G__33533 = (0);
seq__33485_33507 = G__33530;
chunk__33487_33508 = G__33531;
count__33488_33509 = G__33532;
i__33489_33510 = G__33533;
continue;
}
} else {
}
}
break;
}

var G__33534 = seq__33475_33500;
var G__33535 = chunk__33482_33501;
var G__33536 = count__33483_33502;
var G__33537 = (i__33484_33503 + (1));
seq__33475_33500 = G__33534;
chunk__33482_33501 = G__33535;
count__33483_33502 = G__33536;
i__33484_33503 = G__33537;
continue;
} else {
var temp__4126__auto___33538 = cljs.core.seq.call(null,seq__33475_33500);
if(temp__4126__auto___33538){
var seq__33475_33539__$1 = temp__4126__auto___33538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33475_33539__$1)){
var c__4594__auto___33540 = cljs.core.chunk_first.call(null,seq__33475_33539__$1);
var G__33541 = cljs.core.chunk_rest.call(null,seq__33475_33539__$1);
var G__33542 = c__4594__auto___33540;
var G__33543 = cljs.core.count.call(null,c__4594__auto___33540);
var G__33544 = (0);
seq__33475_33500 = G__33541;
chunk__33482_33501 = G__33542;
count__33483_33502 = G__33543;
i__33484_33503 = G__33544;
continue;
} else {
var vec__33494_33545 = cljs.core.first.call(null,seq__33475_33539__$1);
var orig_type_33546 = cljs.core.nth.call(null,vec__33494_33545,(0),null);
var f_33547 = cljs.core.nth.call(null,vec__33494_33545,(1),null);
var seq__33476_33548 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_33546,new cljs.core.PersistentArrayMap.fromArray([orig_type_33546,cljs.core.identity], true, false)));
var chunk__33478_33549 = null;
var count__33479_33550 = (0);
var i__33480_33551 = (0);
while(true){
if((i__33480_33551 < count__33479_33550)){
var vec__33495_33552 = cljs.core._nth.call(null,chunk__33478_33549,i__33480_33551);
var actual_type_33553 = cljs.core.nth.call(null,vec__33495_33552,(0),null);
var factory_33554 = cljs.core.nth.call(null,vec__33495_33552,(1),null);
var canonical_f_33555 = (cljs.core.truth_(selector_33499)?cljs.core.partial.call(null,dommy.core.live_listener,elem_33498,selector_33499):cljs.core.identity).call(null,factory_33554.call(null,f_33547));
dommy.core.update_event_listeners_BANG_.call(null,elem_33498,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_33499,actual_type_33553,f_33547], null),canonical_f_33555);

if(cljs.core.truth_(elem_33498.addEventListener)){
elem_33498.addEventListener(cljs.core.name.call(null,actual_type_33553),canonical_f_33555);
} else {
elem_33498.attachEvent(cljs.core.name.call(null,actual_type_33553),canonical_f_33555);
}

var G__33556 = seq__33476_33548;
var G__33557 = chunk__33478_33549;
var G__33558 = count__33479_33550;
var G__33559 = (i__33480_33551 + (1));
seq__33476_33548 = G__33556;
chunk__33478_33549 = G__33557;
count__33479_33550 = G__33558;
i__33480_33551 = G__33559;
continue;
} else {
var temp__4126__auto___33560__$1 = cljs.core.seq.call(null,seq__33476_33548);
if(temp__4126__auto___33560__$1){
var seq__33476_33561__$1 = temp__4126__auto___33560__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33476_33561__$1)){
var c__4594__auto___33562 = cljs.core.chunk_first.call(null,seq__33476_33561__$1);
var G__33563 = cljs.core.chunk_rest.call(null,seq__33476_33561__$1);
var G__33564 = c__4594__auto___33562;
var G__33565 = cljs.core.count.call(null,c__4594__auto___33562);
var G__33566 = (0);
seq__33476_33548 = G__33563;
chunk__33478_33549 = G__33564;
count__33479_33550 = G__33565;
i__33480_33551 = G__33566;
continue;
} else {
var vec__33496_33567 = cljs.core.first.call(null,seq__33476_33561__$1);
var actual_type_33568 = cljs.core.nth.call(null,vec__33496_33567,(0),null);
var factory_33569 = cljs.core.nth.call(null,vec__33496_33567,(1),null);
var canonical_f_33570 = (cljs.core.truth_(selector_33499)?cljs.core.partial.call(null,dommy.core.live_listener,elem_33498,selector_33499):cljs.core.identity).call(null,factory_33569.call(null,f_33547));
dommy.core.update_event_listeners_BANG_.call(null,elem_33498,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_33499,actual_type_33568,f_33547], null),canonical_f_33570);

if(cljs.core.truth_(elem_33498.addEventListener)){
elem_33498.addEventListener(cljs.core.name.call(null,actual_type_33568),canonical_f_33570);
} else {
elem_33498.attachEvent(cljs.core.name.call(null,actual_type_33568),canonical_f_33570);
}

var G__33571 = cljs.core.next.call(null,seq__33476_33561__$1);
var G__33572 = null;
var G__33573 = (0);
var G__33574 = (0);
seq__33476_33548 = G__33571;
chunk__33478_33549 = G__33572;
count__33479_33550 = G__33573;
i__33480_33551 = G__33574;
continue;
}
} else {
}
}
break;
}

var G__33575 = cljs.core.next.call(null,seq__33475_33539__$1);
var G__33576 = null;
var G__33577 = (0);
var G__33578 = (0);
seq__33475_33500 = G__33575;
chunk__33482_33501 = G__33576;
count__33483_33502 = G__33577;
i__33484_33503 = G__33578;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__33579__i = 0, G__33579__a = new Array(arguments.length -  1);
while (G__33579__i < G__33579__a.length) {G__33579__a[G__33579__i] = arguments[G__33579__i + 1]; ++G__33579__i;}
  type_fs = new cljs.core.IndexedSeq(G__33579__a,0);
} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__33580){
var elem_sel = cljs.core.first(arglist__33580);
var type_fs = cljs.core.rest(arglist__33580);
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
var unlisten_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__33604_33627 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_33628 = cljs.core.nth.call(null,vec__33604_33627,(0),null);
var selector_33629 = cljs.core.nth.call(null,vec__33604_33627,(1),null);
var seq__33605_33630 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__33612_33631 = null;
var count__33613_33632 = (0);
var i__33614_33633 = (0);
while(true){
if((i__33614_33633 < count__33613_33632)){
var vec__33621_33634 = cljs.core._nth.call(null,chunk__33612_33631,i__33614_33633);
var orig_type_33635 = cljs.core.nth.call(null,vec__33621_33634,(0),null);
var f_33636 = cljs.core.nth.call(null,vec__33621_33634,(1),null);
var seq__33615_33637 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_33635,new cljs.core.PersistentArrayMap.fromArray([orig_type_33635,cljs.core.identity], true, false)));
var chunk__33617_33638 = null;
var count__33618_33639 = (0);
var i__33619_33640 = (0);
while(true){
if((i__33619_33640 < count__33618_33639)){
var vec__33622_33641 = cljs.core._nth.call(null,chunk__33617_33638,i__33619_33640);
var actual_type_33642 = cljs.core.nth.call(null,vec__33622_33641,(0),null);
var __33643 = cljs.core.nth.call(null,vec__33622_33641,(1),null);
var keys_33644 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_33629,actual_type_33642,f_33636], null);
var canonical_f_33645 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_33628),keys_33644);
dommy.core.update_event_listeners_BANG_.call(null,elem_33628,dommy.utils.dissoc_in,keys_33644);

if(cljs.core.truth_(elem_33628.removeEventListener)){
elem_33628.removeEventListener(cljs.core.name.call(null,actual_type_33642),canonical_f_33645);
} else {
elem_33628.detachEvent(cljs.core.name.call(null,actual_type_33642),canonical_f_33645);
}

var G__33646 = seq__33615_33637;
var G__33647 = chunk__33617_33638;
var G__33648 = count__33618_33639;
var G__33649 = (i__33619_33640 + (1));
seq__33615_33637 = G__33646;
chunk__33617_33638 = G__33647;
count__33618_33639 = G__33648;
i__33619_33640 = G__33649;
continue;
} else {
var temp__4126__auto___33650 = cljs.core.seq.call(null,seq__33615_33637);
if(temp__4126__auto___33650){
var seq__33615_33651__$1 = temp__4126__auto___33650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33615_33651__$1)){
var c__4594__auto___33652 = cljs.core.chunk_first.call(null,seq__33615_33651__$1);
var G__33653 = cljs.core.chunk_rest.call(null,seq__33615_33651__$1);
var G__33654 = c__4594__auto___33652;
var G__33655 = cljs.core.count.call(null,c__4594__auto___33652);
var G__33656 = (0);
seq__33615_33637 = G__33653;
chunk__33617_33638 = G__33654;
count__33618_33639 = G__33655;
i__33619_33640 = G__33656;
continue;
} else {
var vec__33623_33657 = cljs.core.first.call(null,seq__33615_33651__$1);
var actual_type_33658 = cljs.core.nth.call(null,vec__33623_33657,(0),null);
var __33659 = cljs.core.nth.call(null,vec__33623_33657,(1),null);
var keys_33660 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_33629,actual_type_33658,f_33636], null);
var canonical_f_33661 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_33628),keys_33660);
dommy.core.update_event_listeners_BANG_.call(null,elem_33628,dommy.utils.dissoc_in,keys_33660);

if(cljs.core.truth_(elem_33628.removeEventListener)){
elem_33628.removeEventListener(cljs.core.name.call(null,actual_type_33658),canonical_f_33661);
} else {
elem_33628.detachEvent(cljs.core.name.call(null,actual_type_33658),canonical_f_33661);
}

var G__33662 = cljs.core.next.call(null,seq__33615_33651__$1);
var G__33663 = null;
var G__33664 = (0);
var G__33665 = (0);
seq__33615_33637 = G__33662;
chunk__33617_33638 = G__33663;
count__33618_33639 = G__33664;
i__33619_33640 = G__33665;
continue;
}
} else {
}
}
break;
}

var G__33666 = seq__33605_33630;
var G__33667 = chunk__33612_33631;
var G__33668 = count__33613_33632;
var G__33669 = (i__33614_33633 + (1));
seq__33605_33630 = G__33666;
chunk__33612_33631 = G__33667;
count__33613_33632 = G__33668;
i__33614_33633 = G__33669;
continue;
} else {
var temp__4126__auto___33670 = cljs.core.seq.call(null,seq__33605_33630);
if(temp__4126__auto___33670){
var seq__33605_33671__$1 = temp__4126__auto___33670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33605_33671__$1)){
var c__4594__auto___33672 = cljs.core.chunk_first.call(null,seq__33605_33671__$1);
var G__33673 = cljs.core.chunk_rest.call(null,seq__33605_33671__$1);
var G__33674 = c__4594__auto___33672;
var G__33675 = cljs.core.count.call(null,c__4594__auto___33672);
var G__33676 = (0);
seq__33605_33630 = G__33673;
chunk__33612_33631 = G__33674;
count__33613_33632 = G__33675;
i__33614_33633 = G__33676;
continue;
} else {
var vec__33624_33677 = cljs.core.first.call(null,seq__33605_33671__$1);
var orig_type_33678 = cljs.core.nth.call(null,vec__33624_33677,(0),null);
var f_33679 = cljs.core.nth.call(null,vec__33624_33677,(1),null);
var seq__33606_33680 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_33678,new cljs.core.PersistentArrayMap.fromArray([orig_type_33678,cljs.core.identity], true, false)));
var chunk__33608_33681 = null;
var count__33609_33682 = (0);
var i__33610_33683 = (0);
while(true){
if((i__33610_33683 < count__33609_33682)){
var vec__33625_33684 = cljs.core._nth.call(null,chunk__33608_33681,i__33610_33683);
var actual_type_33685 = cljs.core.nth.call(null,vec__33625_33684,(0),null);
var __33686 = cljs.core.nth.call(null,vec__33625_33684,(1),null);
var keys_33687 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_33629,actual_type_33685,f_33679], null);
var canonical_f_33688 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_33628),keys_33687);
dommy.core.update_event_listeners_BANG_.call(null,elem_33628,dommy.utils.dissoc_in,keys_33687);

if(cljs.core.truth_(elem_33628.removeEventListener)){
elem_33628.removeEventListener(cljs.core.name.call(null,actual_type_33685),canonical_f_33688);
} else {
elem_33628.detachEvent(cljs.core.name.call(null,actual_type_33685),canonical_f_33688);
}

var G__33689 = seq__33606_33680;
var G__33690 = chunk__33608_33681;
var G__33691 = count__33609_33682;
var G__33692 = (i__33610_33683 + (1));
seq__33606_33680 = G__33689;
chunk__33608_33681 = G__33690;
count__33609_33682 = G__33691;
i__33610_33683 = G__33692;
continue;
} else {
var temp__4126__auto___33693__$1 = cljs.core.seq.call(null,seq__33606_33680);
if(temp__4126__auto___33693__$1){
var seq__33606_33694__$1 = temp__4126__auto___33693__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33606_33694__$1)){
var c__4594__auto___33695 = cljs.core.chunk_first.call(null,seq__33606_33694__$1);
var G__33696 = cljs.core.chunk_rest.call(null,seq__33606_33694__$1);
var G__33697 = c__4594__auto___33695;
var G__33698 = cljs.core.count.call(null,c__4594__auto___33695);
var G__33699 = (0);
seq__33606_33680 = G__33696;
chunk__33608_33681 = G__33697;
count__33609_33682 = G__33698;
i__33610_33683 = G__33699;
continue;
} else {
var vec__33626_33700 = cljs.core.first.call(null,seq__33606_33694__$1);
var actual_type_33701 = cljs.core.nth.call(null,vec__33626_33700,(0),null);
var __33702 = cljs.core.nth.call(null,vec__33626_33700,(1),null);
var keys_33703 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_33629,actual_type_33701,f_33679], null);
var canonical_f_33704 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_33628),keys_33703);
dommy.core.update_event_listeners_BANG_.call(null,elem_33628,dommy.utils.dissoc_in,keys_33703);

if(cljs.core.truth_(elem_33628.removeEventListener)){
elem_33628.removeEventListener(cljs.core.name.call(null,actual_type_33701),canonical_f_33704);
} else {
elem_33628.detachEvent(cljs.core.name.call(null,actual_type_33701),canonical_f_33704);
}

var G__33705 = cljs.core.next.call(null,seq__33606_33694__$1);
var G__33706 = null;
var G__33707 = (0);
var G__33708 = (0);
seq__33606_33680 = G__33705;
chunk__33608_33681 = G__33706;
count__33609_33682 = G__33707;
i__33610_33683 = G__33708;
continue;
}
} else {
}
}
break;
}

var G__33709 = cljs.core.next.call(null,seq__33605_33671__$1);
var G__33710 = null;
var G__33711 = (0);
var G__33712 = (0);
seq__33605_33630 = G__33709;
chunk__33612_33631 = G__33710;
count__33613_33632 = G__33711;
i__33614_33633 = G__33712;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__33713__i = 0, G__33713__a = new Array(arguments.length -  1);
while (G__33713__i < G__33713__a.length) {G__33713__a[G__33713__i] = arguments[G__33713__i + 1]; ++G__33713__i;}
  type_fs = new cljs.core.IndexedSeq(G__33713__a,0);
} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__33714){
var elem_sel = cljs.core.first(arglist__33714);
var type_fs = cljs.core.rest(arglist__33714);
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
var listen_once_BANG___delegate = function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__33722_33729 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_33730 = cljs.core.nth.call(null,vec__33722_33729,(0),null);
var selector_33731 = cljs.core.nth.call(null,vec__33722_33729,(1),null);
var seq__33723_33732 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__33724_33733 = null;
var count__33725_33734 = (0);
var i__33726_33735 = (0);
while(true){
if((i__33726_33735 < count__33725_33734)){
var vec__33727_33736 = cljs.core._nth.call(null,chunk__33724_33733,i__33726_33735);
var type_33737 = cljs.core.nth.call(null,vec__33727_33736,(0),null);
var f_33738 = cljs.core.nth.call(null,vec__33727_33736,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_33737,((function (seq__33723_33732,chunk__33724_33733,count__33725_33734,i__33726_33735,vec__33727_33736,type_33737,f_33738,vec__33722_33729,elem_33730,selector_33731){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_33737,this_fn);

return f_33738.call(null,e);
});})(seq__33723_33732,chunk__33724_33733,count__33725_33734,i__33726_33735,vec__33727_33736,type_33737,f_33738,vec__33722_33729,elem_33730,selector_33731))
);

var G__33739 = seq__33723_33732;
var G__33740 = chunk__33724_33733;
var G__33741 = count__33725_33734;
var G__33742 = (i__33726_33735 + (1));
seq__33723_33732 = G__33739;
chunk__33724_33733 = G__33740;
count__33725_33734 = G__33741;
i__33726_33735 = G__33742;
continue;
} else {
var temp__4126__auto___33743 = cljs.core.seq.call(null,seq__33723_33732);
if(temp__4126__auto___33743){
var seq__33723_33744__$1 = temp__4126__auto___33743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33723_33744__$1)){
var c__4594__auto___33745 = cljs.core.chunk_first.call(null,seq__33723_33744__$1);
var G__33746 = cljs.core.chunk_rest.call(null,seq__33723_33744__$1);
var G__33747 = c__4594__auto___33745;
var G__33748 = cljs.core.count.call(null,c__4594__auto___33745);
var G__33749 = (0);
seq__33723_33732 = G__33746;
chunk__33724_33733 = G__33747;
count__33725_33734 = G__33748;
i__33726_33735 = G__33749;
continue;
} else {
var vec__33728_33750 = cljs.core.first.call(null,seq__33723_33744__$1);
var type_33751 = cljs.core.nth.call(null,vec__33728_33750,(0),null);
var f_33752 = cljs.core.nth.call(null,vec__33728_33750,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_33751,((function (seq__33723_33732,chunk__33724_33733,count__33725_33734,i__33726_33735,vec__33728_33750,type_33751,f_33752,seq__33723_33744__$1,temp__4126__auto___33743,vec__33722_33729,elem_33730,selector_33731){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_33751,this_fn);

return f_33752.call(null,e);
});})(seq__33723_33732,chunk__33724_33733,count__33725_33734,i__33726_33735,vec__33728_33750,type_33751,f_33752,seq__33723_33744__$1,temp__4126__auto___33743,vec__33722_33729,elem_33730,selector_33731))
);

var G__33753 = cljs.core.next.call(null,seq__33723_33744__$1);
var G__33754 = null;
var G__33755 = (0);
var G__33756 = (0);
seq__33723_33732 = G__33753;
chunk__33724_33733 = G__33754;
count__33725_33734 = G__33755;
i__33726_33735 = G__33756;
continue;
}
} else {
}
}
break;
}

return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;
if (arguments.length > 1) {
var G__33757__i = 0, G__33757__a = new Array(arguments.length -  1);
while (G__33757__i < G__33757__a.length) {G__33757__a[G__33757__i] = arguments[G__33757__i + 1]; ++G__33757__i;}
  type_fs = new cljs.core.IndexedSeq(G__33757__a,0);
} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__33758){
var elem_sel = cljs.core.first(arglist__33758);
var type_fs = cljs.core.rest(arglist__33758);
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
var fire_BANG___delegate = function (node,event_type,p__33759){
var vec__33761 = p__33759;
var update_event_BANG_ = cljs.core.nth.call(null,vec__33761,(0),null);
if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1027057938,null),new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",1597931428,null))))].join('')));
}

var update_event_BANG___$1 = (function (){var or__3807__auto__ = update_event_BANG_;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return cljs.core.identity;
}
})();
if(cljs.core.truth_(document.createEvent)){
var event = document.createEvent("Event");
event.initEvent(cljs.core.name.call(null,event_type),true,true);

return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else {
return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__33759 = null;
if (arguments.length > 2) {
var G__33762__i = 0, G__33762__a = new Array(arguments.length -  2);
while (G__33762__i < G__33762__a.length) {G__33762__a[G__33762__i] = arguments[G__33762__i + 2]; ++G__33762__i;}
  p__33759 = new cljs.core.IndexedSeq(G__33762__a,0);
} 
return fire_BANG___delegate.call(this,node,event_type,p__33759);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__33763){
var node = cljs.core.first(arglist__33763);
arglist__33763 = cljs.core.next(arglist__33763);
var event_type = cljs.core.first(arglist__33763);
var p__33759 = cljs.core.rest(arglist__33763);
return fire_BANG___delegate(node,event_type,p__33759);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map