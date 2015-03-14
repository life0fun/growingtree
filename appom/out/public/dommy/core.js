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
var G__34812 = dommy.template.__GT_node_like.call(null,parent);
G__34812.appendChild(dommy.template.__GT_node_like.call(null,child));

return G__34812;
});
var append_BANG___3 = (function() { 
var G__34817__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__34813_34818 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__34814_34819 = null;
var count__34815_34820 = (0);
var i__34816_34821 = (0);
while(true){
if((i__34816_34821 < count__34815_34820)){
var c_34822 = cljs.core._nth.call(null,chunk__34814_34819,i__34816_34821);
append_BANG_.call(null,parent__$1,c_34822);

var G__34823 = seq__34813_34818;
var G__34824 = chunk__34814_34819;
var G__34825 = count__34815_34820;
var G__34826 = (i__34816_34821 + (1));
seq__34813_34818 = G__34823;
chunk__34814_34819 = G__34824;
count__34815_34820 = G__34825;
i__34816_34821 = G__34826;
continue;
} else {
var temp__4406__auto___34827 = cljs.core.seq.call(null,seq__34813_34818);
if(temp__4406__auto___34827){
var seq__34813_34828__$1 = temp__4406__auto___34827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34813_34828__$1)){
var c__4594__auto___34829 = cljs.core.chunk_first.call(null,seq__34813_34828__$1);
var G__34830 = cljs.core.chunk_rest.call(null,seq__34813_34828__$1);
var G__34831 = c__4594__auto___34829;
var G__34832 = cljs.core.count.call(null,c__4594__auto___34829);
var G__34833 = (0);
seq__34813_34818 = G__34830;
chunk__34814_34819 = G__34831;
count__34815_34820 = G__34832;
i__34816_34821 = G__34833;
continue;
} else {
var c_34834 = cljs.core.first.call(null,seq__34813_34828__$1);
append_BANG_.call(null,parent__$1,c_34834);

var G__34835 = cljs.core.next.call(null,seq__34813_34828__$1);
var G__34836 = null;
var G__34837 = (0);
var G__34838 = (0);
seq__34813_34818 = G__34835;
chunk__34814_34819 = G__34836;
count__34815_34820 = G__34837;
i__34816_34821 = G__34838;
continue;
}
} else {
}
}
break;
}

return parent__$1;
};
var G__34817 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__34839__i = 0, G__34839__a = new Array(arguments.length -  2);
while (G__34839__i < G__34839__a.length) {G__34839__a[G__34839__i] = arguments[G__34839__i + 2]; ++G__34839__i;}
  more_children = new cljs.core.IndexedSeq(G__34839__a,0);
} 
return G__34817__delegate.call(this,parent,child,more_children);};
G__34817.cljs$lang$maxFixedArity = 2;
G__34817.cljs$lang$applyTo = (function (arglist__34840){
var parent = cljs.core.first(arglist__34840);
arglist__34840 = cljs.core.next(arglist__34840);
var child = cljs.core.first(arglist__34840);
var more_children = cljs.core.rest(arglist__34840);
return G__34817__delegate(parent,child,more_children);
});
G__34817.cljs$core$IFn$_invoke$arity$variadic = G__34817__delegate;
return G__34817;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
var G__34841 = null;
if (arguments.length > 2) {
var G__34842__i = 0, G__34842__a = new Array(arguments.length -  2);
while (G__34842__i < G__34842__a.length) {G__34842__a[G__34842__i] = arguments[G__34842__i + 2]; ++G__34842__i;}
G__34841 = new cljs.core.IndexedSeq(G__34842__a,0);
}
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__34841);
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
var G__34851__delegate = function (parent,child,more_children){
var parent__$1 = dommy.template.__GT_node_like.call(null,parent);
var seq__34847_34852 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__34848_34853 = null;
var count__34849_34854 = (0);
var i__34850_34855 = (0);
while(true){
if((i__34850_34855 < count__34849_34854)){
var c_34856 = cljs.core._nth.call(null,chunk__34848_34853,i__34850_34855);
prepend_BANG_.call(null,parent__$1,c_34856);

var G__34857 = seq__34847_34852;
var G__34858 = chunk__34848_34853;
var G__34859 = count__34849_34854;
var G__34860 = (i__34850_34855 + (1));
seq__34847_34852 = G__34857;
chunk__34848_34853 = G__34858;
count__34849_34854 = G__34859;
i__34850_34855 = G__34860;
continue;
} else {
var temp__4406__auto___34861 = cljs.core.seq.call(null,seq__34847_34852);
if(temp__4406__auto___34861){
var seq__34847_34862__$1 = temp__4406__auto___34861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34847_34862__$1)){
var c__4594__auto___34863 = cljs.core.chunk_first.call(null,seq__34847_34862__$1);
var G__34864 = cljs.core.chunk_rest.call(null,seq__34847_34862__$1);
var G__34865 = c__4594__auto___34863;
var G__34866 = cljs.core.count.call(null,c__4594__auto___34863);
var G__34867 = (0);
seq__34847_34852 = G__34864;
chunk__34848_34853 = G__34865;
count__34849_34854 = G__34866;
i__34850_34855 = G__34867;
continue;
} else {
var c_34868 = cljs.core.first.call(null,seq__34847_34862__$1);
prepend_BANG_.call(null,parent__$1,c_34868);

var G__34869 = cljs.core.next.call(null,seq__34847_34862__$1);
var G__34870 = null;
var G__34871 = (0);
var G__34872 = (0);
seq__34847_34852 = G__34869;
chunk__34848_34853 = G__34870;
count__34849_34854 = G__34871;
i__34850_34855 = G__34872;
continue;
}
} else {
}
}
break;
}

return parent__$1;
};
var G__34851 = function (parent,child,var_args){
var more_children = null;
if (arguments.length > 2) {
var G__34873__i = 0, G__34873__a = new Array(arguments.length -  2);
while (G__34873__i < G__34873__a.length) {G__34873__a[G__34873__i] = arguments[G__34873__i + 2]; ++G__34873__i;}
  more_children = new cljs.core.IndexedSeq(G__34873__a,0);
} 
return G__34851__delegate.call(this,parent,child,more_children);};
G__34851.cljs$lang$maxFixedArity = 2;
G__34851.cljs$lang$applyTo = (function (arglist__34874){
var parent = cljs.core.first(arglist__34874);
arglist__34874 = cljs.core.next(arglist__34874);
var child = cljs.core.first(arglist__34874);
var more_children = cljs.core.rest(arglist__34874);
return G__34851__delegate(parent,child,more_children);
});
G__34851.cljs$core$IFn$_invoke$arity$variadic = G__34851__delegate;
return G__34851;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
var G__34875 = null;
if (arguments.length > 2) {
var G__34876__i = 0, G__34876__a = new Array(arguments.length -  2);
while (G__34876__i < G__34876__a.length) {G__34876__a[G__34876__i] = arguments[G__34876__i + 2]; ++G__34876__i;}
G__34875 = new cljs.core.IndexedSeq(G__34876__a,0);
}
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, G__34875);
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
var temp__4404__auto___34877 = other__$1.nextSibling;
if(cljs.core.truth_(temp__4404__auto___34877)){
var next_34878 = temp__4404__auto___34877;
parent.insertBefore(actual_node,next_34878);
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
var G__34880 = dommy.template.__GT_node_like.call(null,parent);
G__34880.innerHTML = "";

dommy.core.append_BANG_.call(null,G__34880,node_like);

return G__34880;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);
var G__34882 = elem__$1.parentNode;
G__34882.removeChild(elem__$1);

return G__34882;
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
return (function (p__34888){
var vec__34889 = p__34888;
var k = cljs.core.nth.call(null,vec__34889,(0),null);
var v = cljs.core.nth.call(null,vec__34889,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",-1610148039).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){
if(typeof dommy.core.t34890 !== 'undefined'){
} else {

/**
* @constructor
*/
dommy.core.t34890 = (function (v,k,vec__34889,p__34888,container,key_selectors_map,template,selector_map,meta34891){
this.v = v;
this.k = k;
this.vec__34889 = vec__34889;
this.p__34888 = p__34888;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta34891 = meta34891;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t34890.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (vec__34889,k,v,container){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});})(vec__34889,k,v,container))
;

dommy.core.t34890.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__34889,k,v,container){
return (function (_34892){
var self__ = this;
var _34892__$1 = this;
return self__.meta34891;
});})(vec__34889,k,v,container))
;

dommy.core.t34890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__34889,k,v,container){
return (function (_34892,meta34891__$1){
var self__ = this;
var _34892__$1 = this;
return (new dommy.core.t34890(self__.v,self__.k,self__.vec__34889,self__.p__34888,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta34891__$1));
});})(vec__34889,k,v,container))
;

dommy.core.t34890.cljs$lang$type = true;

dommy.core.t34890.cljs$lang$ctorStr = "dommy.core/t34890";

dommy.core.t34890.cljs$lang$ctorPrWriter = ((function (vec__34889,k,v,container){
return (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"dommy.core/t34890");
});})(vec__34889,k,v,container))
;

dommy.core.__GT_t34890 = ((function (vec__34889,k,v,container){
return (function __GT_t34890(v__$1,k__$1,vec__34889__$1,p__34888__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta34891){
return (new dommy.core.t34890(v__$1,k__$1,vec__34889__$1,p__34888__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta34891));
});})(vec__34889,k,v,container))
;

}

return (new dommy.core.t34890(v,k,vec__34889,p__34888,container,key_selectors_map,template,selector_map,cljs.core.PersistentArrayMap.EMPTY));
})()
:dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
});})(container))
,key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__34893_SHARP_){
return p1__34893_SHARP_.parentNode;
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
return (function (p1__34894_SHARP_){
return !((p1__34894_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__34895){
var vec__34896 = p__34895;
var special_mouse_event = cljs.core.nth.call(null,vec__34896,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__34896,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__34896,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__34896,special_mouse_event,real_mouse_event){
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
;})(vec__34896,special_mouse_event,real_mouse_event))
});})(vec__34896,special_mouse_event,real_mouse_event))
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
var G__34897__i = 0, G__34897__a = new Array(arguments.length -  2);
while (G__34897__i < G__34897__a.length) {G__34897__a[G__34897__i] = arguments[G__34897__i + 2]; ++G__34897__i;}
  args = new cljs.core.IndexedSeq(G__34897__a,0);
} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__34898){
var elem = cljs.core.first(arglist__34898);
arglist__34898 = cljs.core.next(arglist__34898);
var f = cljs.core.first(arglist__34898);
var args = cljs.core.rest(arglist__34898);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,(function (p1__34899_SHARP_){
return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__34899_SHARP_));
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

var vec__34923_34946 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_34947 = cljs.core.nth.call(null,vec__34923_34946,(0),null);
var selector_34948 = cljs.core.nth.call(null,vec__34923_34946,(1),null);
var seq__34924_34949 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__34931_34950 = null;
var count__34932_34951 = (0);
var i__34933_34952 = (0);
while(true){
if((i__34933_34952 < count__34932_34951)){
var vec__34940_34953 = cljs.core._nth.call(null,chunk__34931_34950,i__34933_34952);
var orig_type_34954 = cljs.core.nth.call(null,vec__34940_34953,(0),null);
var f_34955 = cljs.core.nth.call(null,vec__34940_34953,(1),null);
var seq__34934_34956 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_34954,new cljs.core.PersistentArrayMap.fromArray([orig_type_34954,cljs.core.identity], true, false)));
var chunk__34936_34957 = null;
var count__34937_34958 = (0);
var i__34938_34959 = (0);
while(true){
if((i__34938_34959 < count__34937_34958)){
var vec__34941_34960 = cljs.core._nth.call(null,chunk__34936_34957,i__34938_34959);
var actual_type_34961 = cljs.core.nth.call(null,vec__34941_34960,(0),null);
var factory_34962 = cljs.core.nth.call(null,vec__34941_34960,(1),null);
var canonical_f_34963 = (cljs.core.truth_(selector_34948)?cljs.core.partial.call(null,dommy.core.live_listener,elem_34947,selector_34948):cljs.core.identity).call(null,factory_34962.call(null,f_34955));
dommy.core.update_event_listeners_BANG_.call(null,elem_34947,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_34948,actual_type_34961,f_34955], null),canonical_f_34963);

if(cljs.core.truth_(elem_34947.addEventListener)){
elem_34947.addEventListener(cljs.core.name.call(null,actual_type_34961),canonical_f_34963);
} else {
elem_34947.attachEvent(cljs.core.name.call(null,actual_type_34961),canonical_f_34963);
}

var G__34964 = seq__34934_34956;
var G__34965 = chunk__34936_34957;
var G__34966 = count__34937_34958;
var G__34967 = (i__34938_34959 + (1));
seq__34934_34956 = G__34964;
chunk__34936_34957 = G__34965;
count__34937_34958 = G__34966;
i__34938_34959 = G__34967;
continue;
} else {
var temp__4406__auto___34968 = cljs.core.seq.call(null,seq__34934_34956);
if(temp__4406__auto___34968){
var seq__34934_34969__$1 = temp__4406__auto___34968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34934_34969__$1)){
var c__4594__auto___34970 = cljs.core.chunk_first.call(null,seq__34934_34969__$1);
var G__34971 = cljs.core.chunk_rest.call(null,seq__34934_34969__$1);
var G__34972 = c__4594__auto___34970;
var G__34973 = cljs.core.count.call(null,c__4594__auto___34970);
var G__34974 = (0);
seq__34934_34956 = G__34971;
chunk__34936_34957 = G__34972;
count__34937_34958 = G__34973;
i__34938_34959 = G__34974;
continue;
} else {
var vec__34942_34975 = cljs.core.first.call(null,seq__34934_34969__$1);
var actual_type_34976 = cljs.core.nth.call(null,vec__34942_34975,(0),null);
var factory_34977 = cljs.core.nth.call(null,vec__34942_34975,(1),null);
var canonical_f_34978 = (cljs.core.truth_(selector_34948)?cljs.core.partial.call(null,dommy.core.live_listener,elem_34947,selector_34948):cljs.core.identity).call(null,factory_34977.call(null,f_34955));
dommy.core.update_event_listeners_BANG_.call(null,elem_34947,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_34948,actual_type_34976,f_34955], null),canonical_f_34978);

if(cljs.core.truth_(elem_34947.addEventListener)){
elem_34947.addEventListener(cljs.core.name.call(null,actual_type_34976),canonical_f_34978);
} else {
elem_34947.attachEvent(cljs.core.name.call(null,actual_type_34976),canonical_f_34978);
}

var G__34979 = cljs.core.next.call(null,seq__34934_34969__$1);
var G__34980 = null;
var G__34981 = (0);
var G__34982 = (0);
seq__34934_34956 = G__34979;
chunk__34936_34957 = G__34980;
count__34937_34958 = G__34981;
i__34938_34959 = G__34982;
continue;
}
} else {
}
}
break;
}

var G__34983 = seq__34924_34949;
var G__34984 = chunk__34931_34950;
var G__34985 = count__34932_34951;
var G__34986 = (i__34933_34952 + (1));
seq__34924_34949 = G__34983;
chunk__34931_34950 = G__34984;
count__34932_34951 = G__34985;
i__34933_34952 = G__34986;
continue;
} else {
var temp__4406__auto___34987 = cljs.core.seq.call(null,seq__34924_34949);
if(temp__4406__auto___34987){
var seq__34924_34988__$1 = temp__4406__auto___34987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34924_34988__$1)){
var c__4594__auto___34989 = cljs.core.chunk_first.call(null,seq__34924_34988__$1);
var G__34990 = cljs.core.chunk_rest.call(null,seq__34924_34988__$1);
var G__34991 = c__4594__auto___34989;
var G__34992 = cljs.core.count.call(null,c__4594__auto___34989);
var G__34993 = (0);
seq__34924_34949 = G__34990;
chunk__34931_34950 = G__34991;
count__34932_34951 = G__34992;
i__34933_34952 = G__34993;
continue;
} else {
var vec__34943_34994 = cljs.core.first.call(null,seq__34924_34988__$1);
var orig_type_34995 = cljs.core.nth.call(null,vec__34943_34994,(0),null);
var f_34996 = cljs.core.nth.call(null,vec__34943_34994,(1),null);
var seq__34925_34997 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_34995,new cljs.core.PersistentArrayMap.fromArray([orig_type_34995,cljs.core.identity], true, false)));
var chunk__34927_34998 = null;
var count__34928_34999 = (0);
var i__34929_35000 = (0);
while(true){
if((i__34929_35000 < count__34928_34999)){
var vec__34944_35001 = cljs.core._nth.call(null,chunk__34927_34998,i__34929_35000);
var actual_type_35002 = cljs.core.nth.call(null,vec__34944_35001,(0),null);
var factory_35003 = cljs.core.nth.call(null,vec__34944_35001,(1),null);
var canonical_f_35004 = (cljs.core.truth_(selector_34948)?cljs.core.partial.call(null,dommy.core.live_listener,elem_34947,selector_34948):cljs.core.identity).call(null,factory_35003.call(null,f_34996));
dommy.core.update_event_listeners_BANG_.call(null,elem_34947,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_34948,actual_type_35002,f_34996], null),canonical_f_35004);

if(cljs.core.truth_(elem_34947.addEventListener)){
elem_34947.addEventListener(cljs.core.name.call(null,actual_type_35002),canonical_f_35004);
} else {
elem_34947.attachEvent(cljs.core.name.call(null,actual_type_35002),canonical_f_35004);
}

var G__35005 = seq__34925_34997;
var G__35006 = chunk__34927_34998;
var G__35007 = count__34928_34999;
var G__35008 = (i__34929_35000 + (1));
seq__34925_34997 = G__35005;
chunk__34927_34998 = G__35006;
count__34928_34999 = G__35007;
i__34929_35000 = G__35008;
continue;
} else {
var temp__4406__auto___35009__$1 = cljs.core.seq.call(null,seq__34925_34997);
if(temp__4406__auto___35009__$1){
var seq__34925_35010__$1 = temp__4406__auto___35009__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34925_35010__$1)){
var c__4594__auto___35011 = cljs.core.chunk_first.call(null,seq__34925_35010__$1);
var G__35012 = cljs.core.chunk_rest.call(null,seq__34925_35010__$1);
var G__35013 = c__4594__auto___35011;
var G__35014 = cljs.core.count.call(null,c__4594__auto___35011);
var G__35015 = (0);
seq__34925_34997 = G__35012;
chunk__34927_34998 = G__35013;
count__34928_34999 = G__35014;
i__34929_35000 = G__35015;
continue;
} else {
var vec__34945_35016 = cljs.core.first.call(null,seq__34925_35010__$1);
var actual_type_35017 = cljs.core.nth.call(null,vec__34945_35016,(0),null);
var factory_35018 = cljs.core.nth.call(null,vec__34945_35016,(1),null);
var canonical_f_35019 = (cljs.core.truth_(selector_34948)?cljs.core.partial.call(null,dommy.core.live_listener,elem_34947,selector_34948):cljs.core.identity).call(null,factory_35018.call(null,f_34996));
dommy.core.update_event_listeners_BANG_.call(null,elem_34947,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_34948,actual_type_35017,f_34996], null),canonical_f_35019);

if(cljs.core.truth_(elem_34947.addEventListener)){
elem_34947.addEventListener(cljs.core.name.call(null,actual_type_35017),canonical_f_35019);
} else {
elem_34947.attachEvent(cljs.core.name.call(null,actual_type_35017),canonical_f_35019);
}

var G__35020 = cljs.core.next.call(null,seq__34925_35010__$1);
var G__35021 = null;
var G__35022 = (0);
var G__35023 = (0);
seq__34925_34997 = G__35020;
chunk__34927_34998 = G__35021;
count__34928_34999 = G__35022;
i__34929_35000 = G__35023;
continue;
}
} else {
}
}
break;
}

var G__35024 = cljs.core.next.call(null,seq__34924_34988__$1);
var G__35025 = null;
var G__35026 = (0);
var G__35027 = (0);
seq__34924_34949 = G__35024;
chunk__34931_34950 = G__35025;
count__34932_34951 = G__35026;
i__34933_34952 = G__35027;
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
var G__35028__i = 0, G__35028__a = new Array(arguments.length -  1);
while (G__35028__i < G__35028__a.length) {G__35028__a[G__35028__i] = arguments[G__35028__i + 1]; ++G__35028__i;}
  type_fs = new cljs.core.IndexedSeq(G__35028__a,0);
} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__35029){
var elem_sel = cljs.core.first(arglist__35029);
var type_fs = cljs.core.rest(arglist__35029);
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

var vec__35053_35076 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_35077 = cljs.core.nth.call(null,vec__35053_35076,(0),null);
var selector_35078 = cljs.core.nth.call(null,vec__35053_35076,(1),null);
var seq__35054_35079 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__35061_35080 = null;
var count__35062_35081 = (0);
var i__35063_35082 = (0);
while(true){
if((i__35063_35082 < count__35062_35081)){
var vec__35070_35083 = cljs.core._nth.call(null,chunk__35061_35080,i__35063_35082);
var orig_type_35084 = cljs.core.nth.call(null,vec__35070_35083,(0),null);
var f_35085 = cljs.core.nth.call(null,vec__35070_35083,(1),null);
var seq__35064_35086 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35084,new cljs.core.PersistentArrayMap.fromArray([orig_type_35084,cljs.core.identity], true, false)));
var chunk__35066_35087 = null;
var count__35067_35088 = (0);
var i__35068_35089 = (0);
while(true){
if((i__35068_35089 < count__35067_35088)){
var vec__35071_35090 = cljs.core._nth.call(null,chunk__35066_35087,i__35068_35089);
var actual_type_35091 = cljs.core.nth.call(null,vec__35071_35090,(0),null);
var __35092 = cljs.core.nth.call(null,vec__35071_35090,(1),null);
var keys_35093 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35078,actual_type_35091,f_35085], null);
var canonical_f_35094 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35077),keys_35093);
dommy.core.update_event_listeners_BANG_.call(null,elem_35077,dommy.utils.dissoc_in,keys_35093);

if(cljs.core.truth_(elem_35077.removeEventListener)){
elem_35077.removeEventListener(cljs.core.name.call(null,actual_type_35091),canonical_f_35094);
} else {
elem_35077.detachEvent(cljs.core.name.call(null,actual_type_35091),canonical_f_35094);
}

var G__35095 = seq__35064_35086;
var G__35096 = chunk__35066_35087;
var G__35097 = count__35067_35088;
var G__35098 = (i__35068_35089 + (1));
seq__35064_35086 = G__35095;
chunk__35066_35087 = G__35096;
count__35067_35088 = G__35097;
i__35068_35089 = G__35098;
continue;
} else {
var temp__4406__auto___35099 = cljs.core.seq.call(null,seq__35064_35086);
if(temp__4406__auto___35099){
var seq__35064_35100__$1 = temp__4406__auto___35099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35064_35100__$1)){
var c__4594__auto___35101 = cljs.core.chunk_first.call(null,seq__35064_35100__$1);
var G__35102 = cljs.core.chunk_rest.call(null,seq__35064_35100__$1);
var G__35103 = c__4594__auto___35101;
var G__35104 = cljs.core.count.call(null,c__4594__auto___35101);
var G__35105 = (0);
seq__35064_35086 = G__35102;
chunk__35066_35087 = G__35103;
count__35067_35088 = G__35104;
i__35068_35089 = G__35105;
continue;
} else {
var vec__35072_35106 = cljs.core.first.call(null,seq__35064_35100__$1);
var actual_type_35107 = cljs.core.nth.call(null,vec__35072_35106,(0),null);
var __35108 = cljs.core.nth.call(null,vec__35072_35106,(1),null);
var keys_35109 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35078,actual_type_35107,f_35085], null);
var canonical_f_35110 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35077),keys_35109);
dommy.core.update_event_listeners_BANG_.call(null,elem_35077,dommy.utils.dissoc_in,keys_35109);

if(cljs.core.truth_(elem_35077.removeEventListener)){
elem_35077.removeEventListener(cljs.core.name.call(null,actual_type_35107),canonical_f_35110);
} else {
elem_35077.detachEvent(cljs.core.name.call(null,actual_type_35107),canonical_f_35110);
}

var G__35111 = cljs.core.next.call(null,seq__35064_35100__$1);
var G__35112 = null;
var G__35113 = (0);
var G__35114 = (0);
seq__35064_35086 = G__35111;
chunk__35066_35087 = G__35112;
count__35067_35088 = G__35113;
i__35068_35089 = G__35114;
continue;
}
} else {
}
}
break;
}

var G__35115 = seq__35054_35079;
var G__35116 = chunk__35061_35080;
var G__35117 = count__35062_35081;
var G__35118 = (i__35063_35082 + (1));
seq__35054_35079 = G__35115;
chunk__35061_35080 = G__35116;
count__35062_35081 = G__35117;
i__35063_35082 = G__35118;
continue;
} else {
var temp__4406__auto___35119 = cljs.core.seq.call(null,seq__35054_35079);
if(temp__4406__auto___35119){
var seq__35054_35120__$1 = temp__4406__auto___35119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35054_35120__$1)){
var c__4594__auto___35121 = cljs.core.chunk_first.call(null,seq__35054_35120__$1);
var G__35122 = cljs.core.chunk_rest.call(null,seq__35054_35120__$1);
var G__35123 = c__4594__auto___35121;
var G__35124 = cljs.core.count.call(null,c__4594__auto___35121);
var G__35125 = (0);
seq__35054_35079 = G__35122;
chunk__35061_35080 = G__35123;
count__35062_35081 = G__35124;
i__35063_35082 = G__35125;
continue;
} else {
var vec__35073_35126 = cljs.core.first.call(null,seq__35054_35120__$1);
var orig_type_35127 = cljs.core.nth.call(null,vec__35073_35126,(0),null);
var f_35128 = cljs.core.nth.call(null,vec__35073_35126,(1),null);
var seq__35055_35129 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35127,new cljs.core.PersistentArrayMap.fromArray([orig_type_35127,cljs.core.identity], true, false)));
var chunk__35057_35130 = null;
var count__35058_35131 = (0);
var i__35059_35132 = (0);
while(true){
if((i__35059_35132 < count__35058_35131)){
var vec__35074_35133 = cljs.core._nth.call(null,chunk__35057_35130,i__35059_35132);
var actual_type_35134 = cljs.core.nth.call(null,vec__35074_35133,(0),null);
var __35135 = cljs.core.nth.call(null,vec__35074_35133,(1),null);
var keys_35136 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35078,actual_type_35134,f_35128], null);
var canonical_f_35137 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35077),keys_35136);
dommy.core.update_event_listeners_BANG_.call(null,elem_35077,dommy.utils.dissoc_in,keys_35136);

if(cljs.core.truth_(elem_35077.removeEventListener)){
elem_35077.removeEventListener(cljs.core.name.call(null,actual_type_35134),canonical_f_35137);
} else {
elem_35077.detachEvent(cljs.core.name.call(null,actual_type_35134),canonical_f_35137);
}

var G__35138 = seq__35055_35129;
var G__35139 = chunk__35057_35130;
var G__35140 = count__35058_35131;
var G__35141 = (i__35059_35132 + (1));
seq__35055_35129 = G__35138;
chunk__35057_35130 = G__35139;
count__35058_35131 = G__35140;
i__35059_35132 = G__35141;
continue;
} else {
var temp__4406__auto___35142__$1 = cljs.core.seq.call(null,seq__35055_35129);
if(temp__4406__auto___35142__$1){
var seq__35055_35143__$1 = temp__4406__auto___35142__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35055_35143__$1)){
var c__4594__auto___35144 = cljs.core.chunk_first.call(null,seq__35055_35143__$1);
var G__35145 = cljs.core.chunk_rest.call(null,seq__35055_35143__$1);
var G__35146 = c__4594__auto___35144;
var G__35147 = cljs.core.count.call(null,c__4594__auto___35144);
var G__35148 = (0);
seq__35055_35129 = G__35145;
chunk__35057_35130 = G__35146;
count__35058_35131 = G__35147;
i__35059_35132 = G__35148;
continue;
} else {
var vec__35075_35149 = cljs.core.first.call(null,seq__35055_35143__$1);
var actual_type_35150 = cljs.core.nth.call(null,vec__35075_35149,(0),null);
var __35151 = cljs.core.nth.call(null,vec__35075_35149,(1),null);
var keys_35152 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35078,actual_type_35150,f_35128], null);
var canonical_f_35153 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35077),keys_35152);
dommy.core.update_event_listeners_BANG_.call(null,elem_35077,dommy.utils.dissoc_in,keys_35152);

if(cljs.core.truth_(elem_35077.removeEventListener)){
elem_35077.removeEventListener(cljs.core.name.call(null,actual_type_35150),canonical_f_35153);
} else {
elem_35077.detachEvent(cljs.core.name.call(null,actual_type_35150),canonical_f_35153);
}

var G__35154 = cljs.core.next.call(null,seq__35055_35143__$1);
var G__35155 = null;
var G__35156 = (0);
var G__35157 = (0);
seq__35055_35129 = G__35154;
chunk__35057_35130 = G__35155;
count__35058_35131 = G__35156;
i__35059_35132 = G__35157;
continue;
}
} else {
}
}
break;
}

var G__35158 = cljs.core.next.call(null,seq__35054_35120__$1);
var G__35159 = null;
var G__35160 = (0);
var G__35161 = (0);
seq__35054_35079 = G__35158;
chunk__35061_35080 = G__35159;
count__35062_35081 = G__35160;
i__35063_35082 = G__35161;
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
var G__35162__i = 0, G__35162__a = new Array(arguments.length -  1);
while (G__35162__i < G__35162__a.length) {G__35162__a[G__35162__i] = arguments[G__35162__i + 1]; ++G__35162__i;}
  type_fs = new cljs.core.IndexedSeq(G__35162__a,0);
} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__35163){
var elem_sel = cljs.core.first(arglist__35163);
var type_fs = cljs.core.rest(arglist__35163);
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

var vec__35171_35178 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_35179 = cljs.core.nth.call(null,vec__35171_35178,(0),null);
var selector_35180 = cljs.core.nth.call(null,vec__35171_35178,(1),null);
var seq__35172_35181 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__35173_35182 = null;
var count__35174_35183 = (0);
var i__35175_35184 = (0);
while(true){
if((i__35175_35184 < count__35174_35183)){
var vec__35176_35185 = cljs.core._nth.call(null,chunk__35173_35182,i__35175_35184);
var type_35186 = cljs.core.nth.call(null,vec__35176_35185,(0),null);
var f_35187 = cljs.core.nth.call(null,vec__35176_35185,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_35186,((function (seq__35172_35181,chunk__35173_35182,count__35174_35183,i__35175_35184,vec__35176_35185,type_35186,f_35187,vec__35171_35178,elem_35179,selector_35180){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_35186,this_fn);

return f_35187.call(null,e);
});})(seq__35172_35181,chunk__35173_35182,count__35174_35183,i__35175_35184,vec__35176_35185,type_35186,f_35187,vec__35171_35178,elem_35179,selector_35180))
);

var G__35188 = seq__35172_35181;
var G__35189 = chunk__35173_35182;
var G__35190 = count__35174_35183;
var G__35191 = (i__35175_35184 + (1));
seq__35172_35181 = G__35188;
chunk__35173_35182 = G__35189;
count__35174_35183 = G__35190;
i__35175_35184 = G__35191;
continue;
} else {
var temp__4406__auto___35192 = cljs.core.seq.call(null,seq__35172_35181);
if(temp__4406__auto___35192){
var seq__35172_35193__$1 = temp__4406__auto___35192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35172_35193__$1)){
var c__4594__auto___35194 = cljs.core.chunk_first.call(null,seq__35172_35193__$1);
var G__35195 = cljs.core.chunk_rest.call(null,seq__35172_35193__$1);
var G__35196 = c__4594__auto___35194;
var G__35197 = cljs.core.count.call(null,c__4594__auto___35194);
var G__35198 = (0);
seq__35172_35181 = G__35195;
chunk__35173_35182 = G__35196;
count__35174_35183 = G__35197;
i__35175_35184 = G__35198;
continue;
} else {
var vec__35177_35199 = cljs.core.first.call(null,seq__35172_35193__$1);
var type_35200 = cljs.core.nth.call(null,vec__35177_35199,(0),null);
var f_35201 = cljs.core.nth.call(null,vec__35177_35199,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_35200,((function (seq__35172_35181,chunk__35173_35182,count__35174_35183,i__35175_35184,vec__35177_35199,type_35200,f_35201,seq__35172_35193__$1,temp__4406__auto___35192,vec__35171_35178,elem_35179,selector_35180){
return (function this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_35200,this_fn);

return f_35201.call(null,e);
});})(seq__35172_35181,chunk__35173_35182,count__35174_35183,i__35175_35184,vec__35177_35199,type_35200,f_35201,seq__35172_35193__$1,temp__4406__auto___35192,vec__35171_35178,elem_35179,selector_35180))
);

var G__35202 = cljs.core.next.call(null,seq__35172_35193__$1);
var G__35203 = null;
var G__35204 = (0);
var G__35205 = (0);
seq__35172_35181 = G__35202;
chunk__35173_35182 = G__35203;
count__35174_35183 = G__35204;
i__35175_35184 = G__35205;
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
var G__35206__i = 0, G__35206__a = new Array(arguments.length -  1);
while (G__35206__i < G__35206__a.length) {G__35206__a[G__35206__i] = arguments[G__35206__i + 1]; ++G__35206__i;}
  type_fs = new cljs.core.IndexedSeq(G__35206__a,0);
} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__35207){
var elem_sel = cljs.core.first(arglist__35207);
var type_fs = cljs.core.rest(arglist__35207);
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
var fire_BANG___delegate = function (node,event_type,p__35208){
var vec__35210 = p__35208;
var update_event_BANG_ = cljs.core.nth.call(null,vec__35210,(0),null);
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
var p__35208 = null;
if (arguments.length > 2) {
var G__35211__i = 0, G__35211__a = new Array(arguments.length -  2);
while (G__35211__i < G__35211__a.length) {G__35211__a[G__35211__i] = arguments[G__35211__i + 2]; ++G__35211__i;}
  p__35208 = new cljs.core.IndexedSeq(G__35211__a,0);
} 
return fire_BANG___delegate.call(this,node,event_type,p__35208);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__35212){
var node = cljs.core.first(arglist__35212);
arglist__35212 = cljs.core.next(arglist__35212);
var event_type = cljs.core.first(arglist__35212);
var p__35208 = cljs.core.rest(arglist__35212);
return fire_BANG___delegate(node,event_type,p__35208);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map