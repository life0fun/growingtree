// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj28401 = {};return obj28401;
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
{var str_28404 = node_str.substring(base_idx);while(true){
var next_idx_28405 = dommy.template.next_css_index.call(null,str_28404,1);var frag_28406 = (((next_idx_28405 >= 0))?str_28404.substring(0,next_idx_28405):str_28404);var G__28403_28407 = frag_28406.charAt(0);if(cljs.core._EQ_.call(null,"#",G__28403_28407))
{node.setAttribute("id",frag_28406.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__28403_28407))
{dommy.attrs.add_class_BANG_.call(null,node,frag_28406.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_28406.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_28405 >= 0))
{{
var G__28408 = str_28404.substring(next_idx_28405);
str_28404 = G__28408;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__28414 = data;if(G__28414)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__28414.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__28414.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28414);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28414);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__28415_28419 = cljs.core.seq.call(null,data);var chunk__28416_28420 = null;var count__28417_28421 = 0;var i__28418_28422 = 0;while(true){
if((i__28418_28422 < count__28417_28421))
{var child_28423 = cljs.core._nth.call(null,chunk__28416_28420,i__28418_28422);__GT_document_fragment.call(null,result_frag,child_28423);
{
var G__28424 = seq__28415_28419;
var G__28425 = chunk__28416_28420;
var G__28426 = count__28417_28421;
var G__28427 = (i__28418_28422 + 1);
seq__28415_28419 = G__28424;
chunk__28416_28420 = G__28425;
count__28417_28421 = G__28426;
i__28418_28422 = G__28427;
continue;
}
} else
{var temp__4092__auto___28428 = cljs.core.seq.call(null,seq__28415_28419);if(temp__4092__auto___28428)
{var seq__28415_28429__$1 = temp__4092__auto___28428;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28415_28429__$1))
{var c__4191__auto___28430 = cljs.core.chunk_first.call(null,seq__28415_28429__$1);{
var G__28431 = cljs.core.chunk_rest.call(null,seq__28415_28429__$1);
var G__28432 = c__4191__auto___28430;
var G__28433 = cljs.core.count.call(null,c__4191__auto___28430);
var G__28434 = 0;
seq__28415_28419 = G__28431;
chunk__28416_28420 = G__28432;
count__28417_28421 = G__28433;
i__28418_28422 = G__28434;
continue;
}
} else
{var child_28435 = cljs.core.first.call(null,seq__28415_28429__$1);__GT_document_fragment.call(null,result_frag,child_28435);
{
var G__28436 = cljs.core.next.call(null,seq__28415_28429__$1);
var G__28437 = null;
var G__28438 = 0;
var G__28439 = 0;
seq__28415_28419 = G__28436;
chunk__28416_28420 = G__28437;
count__28417_28421 = G__28438;
i__28418_28422 = G__28439;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__28441 = data;if(G__28441)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__28441.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__28441.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28441);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28441);
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
dommy.template.compound_element = (function compound_element(p__28442){var vec__28462 = p__28442;var tag_name = cljs.core.nth.call(null,vec__28462,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__28462,1,null);var children = cljs.core.nthnext.call(null,vec__28462,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__28464 = maybe_attrs;if(G__28464)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__28464.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__28464.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28464);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28464);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__28465_28481 = cljs.core.seq.call(null,attrs);var chunk__28466_28482 = null;var count__28467_28483 = 0;var i__28468_28484 = 0;while(true){
if((i__28468_28484 < count__28467_28483))
{var vec__28469_28485 = cljs.core._nth.call(null,chunk__28466_28482,i__28468_28484);var k_28486 = cljs.core.nth.call(null,vec__28469_28485,0,null);var v_28487 = cljs.core.nth.call(null,vec__28469_28485,1,null);var G__28470_28488 = k_28486;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__28470_28488))
{var seq__28471_28489 = cljs.core.seq.call(null,v_28487);var chunk__28472_28490 = null;var count__28473_28491 = 0;var i__28474_28492 = 0;while(true){
if((i__28474_28492 < count__28473_28491))
{var c_28493 = cljs.core._nth.call(null,chunk__28472_28490,i__28474_28492);dommy.attrs.add_class_BANG_.call(null,n,c_28493);
{
var G__28494 = seq__28471_28489;
var G__28495 = chunk__28472_28490;
var G__28496 = count__28473_28491;
var G__28497 = (i__28474_28492 + 1);
seq__28471_28489 = G__28494;
chunk__28472_28490 = G__28495;
count__28473_28491 = G__28496;
i__28474_28492 = G__28497;
continue;
}
} else
{var temp__4092__auto___28498 = cljs.core.seq.call(null,seq__28471_28489);if(temp__4092__auto___28498)
{var seq__28471_28499__$1 = temp__4092__auto___28498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28471_28499__$1))
{var c__4191__auto___28500 = cljs.core.chunk_first.call(null,seq__28471_28499__$1);{
var G__28501 = cljs.core.chunk_rest.call(null,seq__28471_28499__$1);
var G__28502 = c__4191__auto___28500;
var G__28503 = cljs.core.count.call(null,c__4191__auto___28500);
var G__28504 = 0;
seq__28471_28489 = G__28501;
chunk__28472_28490 = G__28502;
count__28473_28491 = G__28503;
i__28474_28492 = G__28504;
continue;
}
} else
{var c_28505 = cljs.core.first.call(null,seq__28471_28499__$1);dommy.attrs.add_class_BANG_.call(null,n,c_28505);
{
var G__28506 = cljs.core.next.call(null,seq__28471_28499__$1);
var G__28507 = null;
var G__28508 = 0;
var G__28509 = 0;
seq__28471_28489 = G__28506;
chunk__28472_28490 = G__28507;
count__28473_28491 = G__28508;
i__28474_28492 = G__28509;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__28470_28488))
{dommy.attrs.add_class_BANG_.call(null,n,v_28487);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_28486,v_28487);
} else
{}
}
}
{
var G__28510 = seq__28465_28481;
var G__28511 = chunk__28466_28482;
var G__28512 = count__28467_28483;
var G__28513 = (i__28468_28484 + 1);
seq__28465_28481 = G__28510;
chunk__28466_28482 = G__28511;
count__28467_28483 = G__28512;
i__28468_28484 = G__28513;
continue;
}
} else
{var temp__4092__auto___28514 = cljs.core.seq.call(null,seq__28465_28481);if(temp__4092__auto___28514)
{var seq__28465_28515__$1 = temp__4092__auto___28514;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28465_28515__$1))
{var c__4191__auto___28516 = cljs.core.chunk_first.call(null,seq__28465_28515__$1);{
var G__28517 = cljs.core.chunk_rest.call(null,seq__28465_28515__$1);
var G__28518 = c__4191__auto___28516;
var G__28519 = cljs.core.count.call(null,c__4191__auto___28516);
var G__28520 = 0;
seq__28465_28481 = G__28517;
chunk__28466_28482 = G__28518;
count__28467_28483 = G__28519;
i__28468_28484 = G__28520;
continue;
}
} else
{var vec__28475_28521 = cljs.core.first.call(null,seq__28465_28515__$1);var k_28522 = cljs.core.nth.call(null,vec__28475_28521,0,null);var v_28523 = cljs.core.nth.call(null,vec__28475_28521,1,null);var G__28476_28524 = k_28522;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__28476_28524))
{var seq__28477_28525 = cljs.core.seq.call(null,v_28523);var chunk__28478_28526 = null;var count__28479_28527 = 0;var i__28480_28528 = 0;while(true){
if((i__28480_28528 < count__28479_28527))
{var c_28529 = cljs.core._nth.call(null,chunk__28478_28526,i__28480_28528);dommy.attrs.add_class_BANG_.call(null,n,c_28529);
{
var G__28530 = seq__28477_28525;
var G__28531 = chunk__28478_28526;
var G__28532 = count__28479_28527;
var G__28533 = (i__28480_28528 + 1);
seq__28477_28525 = G__28530;
chunk__28478_28526 = G__28531;
count__28479_28527 = G__28532;
i__28480_28528 = G__28533;
continue;
}
} else
{var temp__4092__auto___28534__$1 = cljs.core.seq.call(null,seq__28477_28525);if(temp__4092__auto___28534__$1)
{var seq__28477_28535__$1 = temp__4092__auto___28534__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28477_28535__$1))
{var c__4191__auto___28536 = cljs.core.chunk_first.call(null,seq__28477_28535__$1);{
var G__28537 = cljs.core.chunk_rest.call(null,seq__28477_28535__$1);
var G__28538 = c__4191__auto___28536;
var G__28539 = cljs.core.count.call(null,c__4191__auto___28536);
var G__28540 = 0;
seq__28477_28525 = G__28537;
chunk__28478_28526 = G__28538;
count__28479_28527 = G__28539;
i__28480_28528 = G__28540;
continue;
}
} else
{var c_28541 = cljs.core.first.call(null,seq__28477_28535__$1);dommy.attrs.add_class_BANG_.call(null,n,c_28541);
{
var G__28542 = cljs.core.next.call(null,seq__28477_28535__$1);
var G__28543 = null;
var G__28544 = 0;
var G__28545 = 0;
seq__28477_28525 = G__28542;
chunk__28478_28526 = G__28543;
count__28479_28527 = G__28544;
i__28480_28528 = G__28545;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__28476_28524))
{dommy.attrs.add_class_BANG_.call(null,n,v_28523);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_28522,v_28523);
} else
{}
}
}
{
var G__28546 = cljs.core.next.call(null,seq__28465_28515__$1);
var G__28547 = null;
var G__28548 = 0;
var G__28549 = 0;
seq__28465_28481 = G__28546;
chunk__28466_28482 = G__28547;
count__28467_28483 = G__28548;
i__28468_28484 = G__28549;
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
}catch (e28550){if((e28550 instanceof ReferenceError))
{var __28551 = e28550;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28550;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__28553 = data;if(G__28553)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__28553.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__28553.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28553);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28553);
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
