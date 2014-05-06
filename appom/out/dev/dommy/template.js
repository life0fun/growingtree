// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj16463 = {};return obj16463;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (dommy.template._elem[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (dommy.template._elem["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_16466 = node_str.substring(base_idx);while(true){
var next_idx_16467 = dommy.template.next_css_index.call(null,str_16466,1);var frag_16468 = (((next_idx_16467 >= 0))?str_16466.substring(0,next_idx_16467):str_16466);var G__16465_16469 = frag_16468.charAt(0);if(cljs.core._EQ_.call(null,"#",G__16465_16469))
{node.setAttribute("id",frag_16468.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__16465_16469))
{dommy.attrs.add_class_BANG_.call(null,node,frag_16468.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_16468.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_16467 >= 0))
{{
var G__16470 = str_16466.substring(next_idx_16467);
str_16466 = G__16470;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__16476 = data;if(G__16476)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__16476.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16476.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16476);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16476);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__16477_16481 = cljs.core.seq.call(null,data);var chunk__16478_16482 = null;var count__16479_16483 = 0;var i__16480_16484 = 0;while(true){
if((i__16480_16484 < count__16479_16483))
{var child_16485 = cljs.core._nth.call(null,chunk__16478_16482,i__16480_16484);__GT_document_fragment.call(null,result_frag,child_16485);
{
var G__16486 = seq__16477_16481;
var G__16487 = chunk__16478_16482;
var G__16488 = count__16479_16483;
var G__16489 = (i__16480_16484 + 1);
seq__16477_16481 = G__16486;
chunk__16478_16482 = G__16487;
count__16479_16483 = G__16488;
i__16480_16484 = G__16489;
continue;
}
} else
{var temp__4092__auto___16490 = cljs.core.seq.call(null,seq__16477_16481);if(temp__4092__auto___16490)
{var seq__16477_16491__$1 = temp__4092__auto___16490;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16477_16491__$1))
{var c__4191__auto___16492 = cljs.core.chunk_first.call(null,seq__16477_16491__$1);{
var G__16493 = cljs.core.chunk_rest.call(null,seq__16477_16491__$1);
var G__16494 = c__4191__auto___16492;
var G__16495 = cljs.core.count.call(null,c__4191__auto___16492);
var G__16496 = 0;
seq__16477_16481 = G__16493;
chunk__16478_16482 = G__16494;
count__16479_16483 = G__16495;
i__16480_16484 = G__16496;
continue;
}
} else
{var child_16497 = cljs.core.first.call(null,seq__16477_16491__$1);__GT_document_fragment.call(null,result_frag,child_16497);
{
var G__16498 = cljs.core.next.call(null,seq__16477_16491__$1);
var G__16499 = null;
var G__16500 = 0;
var G__16501 = 0;
seq__16477_16481 = G__16498;
chunk__16478_16482 = G__16499;
count__16479_16483 = G__16500;
i__16480_16484 = G__16501;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__16503 = data;if(G__16503)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__16503.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16503.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16503);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16503);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__16504){var vec__16524 = p__16504;var tag_name = cljs.core.nth.call(null,vec__16524,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__16524,1,null);var children = cljs.core.nthnext.call(null,vec__16524,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__16526 = maybe_attrs;if(G__16526)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__16526.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16526.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16526);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16526);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__16527_16543 = cljs.core.seq.call(null,attrs);var chunk__16528_16544 = null;var count__16529_16545 = 0;var i__16530_16546 = 0;while(true){
if((i__16530_16546 < count__16529_16545))
{var vec__16531_16547 = cljs.core._nth.call(null,chunk__16528_16544,i__16530_16546);var k_16548 = cljs.core.nth.call(null,vec__16531_16547,0,null);var v_16549 = cljs.core.nth.call(null,vec__16531_16547,1,null);var G__16532_16550 = k_16548;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__16532_16550))
{var seq__16533_16551 = cljs.core.seq.call(null,v_16549);var chunk__16534_16552 = null;var count__16535_16553 = 0;var i__16536_16554 = 0;while(true){
if((i__16536_16554 < count__16535_16553))
{var c_16555 = cljs.core._nth.call(null,chunk__16534_16552,i__16536_16554);dommy.attrs.add_class_BANG_.call(null,n,c_16555);
{
var G__16556 = seq__16533_16551;
var G__16557 = chunk__16534_16552;
var G__16558 = count__16535_16553;
var G__16559 = (i__16536_16554 + 1);
seq__16533_16551 = G__16556;
chunk__16534_16552 = G__16557;
count__16535_16553 = G__16558;
i__16536_16554 = G__16559;
continue;
}
} else
{var temp__4092__auto___16560 = cljs.core.seq.call(null,seq__16533_16551);if(temp__4092__auto___16560)
{var seq__16533_16561__$1 = temp__4092__auto___16560;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16533_16561__$1))
{var c__4191__auto___16562 = cljs.core.chunk_first.call(null,seq__16533_16561__$1);{
var G__16563 = cljs.core.chunk_rest.call(null,seq__16533_16561__$1);
var G__16564 = c__4191__auto___16562;
var G__16565 = cljs.core.count.call(null,c__4191__auto___16562);
var G__16566 = 0;
seq__16533_16551 = G__16563;
chunk__16534_16552 = G__16564;
count__16535_16553 = G__16565;
i__16536_16554 = G__16566;
continue;
}
} else
{var c_16567 = cljs.core.first.call(null,seq__16533_16561__$1);dommy.attrs.add_class_BANG_.call(null,n,c_16567);
{
var G__16568 = cljs.core.next.call(null,seq__16533_16561__$1);
var G__16569 = null;
var G__16570 = 0;
var G__16571 = 0;
seq__16533_16551 = G__16568;
chunk__16534_16552 = G__16569;
count__16535_16553 = G__16570;
i__16536_16554 = G__16571;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__16532_16550))
{dommy.attrs.add_class_BANG_.call(null,n,v_16549);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_16548,v_16549);
} else
{}
}
}
{
var G__16572 = seq__16527_16543;
var G__16573 = chunk__16528_16544;
var G__16574 = count__16529_16545;
var G__16575 = (i__16530_16546 + 1);
seq__16527_16543 = G__16572;
chunk__16528_16544 = G__16573;
count__16529_16545 = G__16574;
i__16530_16546 = G__16575;
continue;
}
} else
{var temp__4092__auto___16576 = cljs.core.seq.call(null,seq__16527_16543);if(temp__4092__auto___16576)
{var seq__16527_16577__$1 = temp__4092__auto___16576;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16527_16577__$1))
{var c__4191__auto___16578 = cljs.core.chunk_first.call(null,seq__16527_16577__$1);{
var G__16579 = cljs.core.chunk_rest.call(null,seq__16527_16577__$1);
var G__16580 = c__4191__auto___16578;
var G__16581 = cljs.core.count.call(null,c__4191__auto___16578);
var G__16582 = 0;
seq__16527_16543 = G__16579;
chunk__16528_16544 = G__16580;
count__16529_16545 = G__16581;
i__16530_16546 = G__16582;
continue;
}
} else
{var vec__16537_16583 = cljs.core.first.call(null,seq__16527_16577__$1);var k_16584 = cljs.core.nth.call(null,vec__16537_16583,0,null);var v_16585 = cljs.core.nth.call(null,vec__16537_16583,1,null);var G__16538_16586 = k_16584;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__16538_16586))
{var seq__16539_16587 = cljs.core.seq.call(null,v_16585);var chunk__16540_16588 = null;var count__16541_16589 = 0;var i__16542_16590 = 0;while(true){
if((i__16542_16590 < count__16541_16589))
{var c_16591 = cljs.core._nth.call(null,chunk__16540_16588,i__16542_16590);dommy.attrs.add_class_BANG_.call(null,n,c_16591);
{
var G__16592 = seq__16539_16587;
var G__16593 = chunk__16540_16588;
var G__16594 = count__16541_16589;
var G__16595 = (i__16542_16590 + 1);
seq__16539_16587 = G__16592;
chunk__16540_16588 = G__16593;
count__16541_16589 = G__16594;
i__16542_16590 = G__16595;
continue;
}
} else
{var temp__4092__auto___16596__$1 = cljs.core.seq.call(null,seq__16539_16587);if(temp__4092__auto___16596__$1)
{var seq__16539_16597__$1 = temp__4092__auto___16596__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16539_16597__$1))
{var c__4191__auto___16598 = cljs.core.chunk_first.call(null,seq__16539_16597__$1);{
var G__16599 = cljs.core.chunk_rest.call(null,seq__16539_16597__$1);
var G__16600 = c__4191__auto___16598;
var G__16601 = cljs.core.count.call(null,c__4191__auto___16598);
var G__16602 = 0;
seq__16539_16587 = G__16599;
chunk__16540_16588 = G__16600;
count__16541_16589 = G__16601;
i__16542_16590 = G__16602;
continue;
}
} else
{var c_16603 = cljs.core.first.call(null,seq__16539_16597__$1);dommy.attrs.add_class_BANG_.call(null,n,c_16603);
{
var G__16604 = cljs.core.next.call(null,seq__16539_16597__$1);
var G__16605 = null;
var G__16606 = 0;
var G__16607 = 0;
seq__16539_16587 = G__16604;
chunk__16540_16588 = G__16605;
count__16541_16589 = G__16606;
i__16542_16590 = G__16607;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__16538_16586))
{dommy.attrs.add_class_BANG_.call(null,n,v_16585);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_16584,v_16585);
} else
{}
}
}
{
var G__16608 = cljs.core.next.call(null,seq__16527_16577__$1);
var G__16609 = null;
var G__16610 = 0;
var G__16611 = 0;
seq__16527_16543 = G__16608;
chunk__16528_16544 = G__16609;
count__16529_16545 = G__16610;
i__16530_16546 = G__16611;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e16612){if((e16612 instanceof ReferenceError))
{var __16613 = e16612;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16612;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__16615 = data;if(G__16615)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__16615.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16615.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16615);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16615);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map