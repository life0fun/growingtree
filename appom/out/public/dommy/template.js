// Compiled by ClojureScript 0.0-2850 {}
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);

dommy.template.PElement = (function (){var obj35521 = {};
return obj35521;
})();

dommy.template._elem = (function _elem(this$){
if((function (){var and__3795__auto__ = this$;
if(and__3795__auto__){
return this$.dommy$template$PElement$_elem$arity$1;
} else {
return and__3795__auto__;
}
})()){
return this$.dommy$template$PElement$_elem$arity$1(this$);
} else {
var x__4451__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3807__auto__ = (dommy.template._elem[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (dommy.template._elem["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});

/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){
var id_idx = s.indexOf("#",start_idx);
var class_idx = s.indexOf(".",start_idx);
var idx = Math.min(id_idx,class_idx);
if((idx < (0))){
return Math.max(id_idx,class_idx);
} else {
return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){
var node_str = cljs.core.name.call(null,node_key);
var base_idx = dommy.template.next_css_index.call(null,node_str,(0));
var tag = (((base_idx > (0)))?node_str.substring((0),base_idx):(((base_idx === (0)))?"div":node_str
));
var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));
if((base_idx >= (0))){
var str_35524 = node_str.substring(base_idx);
while(true){
var next_idx_35525 = dommy.template.next_css_index.call(null,str_35524,(1));
var frag_35526 = (((next_idx_35525 >= (0)))?str_35524.substring((0),next_idx_35525):str_35524);
var G__35523_35527 = frag_35526.charAt((0));
switch (G__35523_35527) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_35526.substring((1)));

break;
case "#":
node.setAttribute("id",frag_35526.substring((1)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_35526.charAt((0)))].join('')));

}

if((next_idx_35525 >= (0))){
var G__35529 = str_35524.substring(next_idx_35525);
str_35524 = G__35529;
continue;
} else {
}
break;
}
} else {
}

return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){
throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){
return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){
if((function (){var G__35535 = data;
if(G__35535){
var bit__4488__auto__ = null;
if(cljs.core.truth_((function (){var or__3807__auto__ = bit__4488__auto__;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return G__35535.dommy$template$PElement$;
}
})())){
return true;
} else {
if((!G__35535.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35535);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35535);
}
})()){
result_frag.appendChild(dommy.template._elem.call(null,data));

return result_frag;
} else {
if(cljs.core.seq_QMARK_.call(null,data)){
var seq__35536_35540 = cljs.core.seq.call(null,data);
var chunk__35537_35541 = null;
var count__35538_35542 = (0);
var i__35539_35543 = (0);
while(true){
if((i__35539_35543 < count__35538_35542)){
var child_35544 = cljs.core._nth.call(null,chunk__35537_35541,i__35539_35543);
__GT_document_fragment.call(null,result_frag,child_35544);

var G__35545 = seq__35536_35540;
var G__35546 = chunk__35537_35541;
var G__35547 = count__35538_35542;
var G__35548 = (i__35539_35543 + (1));
seq__35536_35540 = G__35545;
chunk__35537_35541 = G__35546;
count__35538_35542 = G__35547;
i__35539_35543 = G__35548;
continue;
} else {
var temp__4406__auto___35549 = cljs.core.seq.call(null,seq__35536_35540);
if(temp__4406__auto___35549){
var seq__35536_35550__$1 = temp__4406__auto___35549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35536_35550__$1)){
var c__4594__auto___35551 = cljs.core.chunk_first.call(null,seq__35536_35550__$1);
var G__35552 = cljs.core.chunk_rest.call(null,seq__35536_35550__$1);
var G__35553 = c__4594__auto___35551;
var G__35554 = cljs.core.count.call(null,c__4594__auto___35551);
var G__35555 = (0);
seq__35536_35540 = G__35552;
chunk__35537_35541 = G__35553;
count__35538_35542 = G__35554;
i__35539_35543 = G__35555;
continue;
} else {
var child_35556 = cljs.core.first.call(null,seq__35536_35550__$1);
__GT_document_fragment.call(null,result_frag,child_35556);

var G__35557 = cljs.core.next.call(null,seq__35536_35550__$1);
var G__35558 = null;
var G__35559 = (0);
var G__35560 = (0);
seq__35536_35540 = G__35557;
chunk__35537_35541 = G__35558;
count__35538_35542 = G__35559;
i__35539_35543 = G__35560;
continue;
}
} else {
}
}
break;
}

return result_frag;
} else {
if((data == null)){
return result_frag;
} else {
return dommy.template.throw_unable_to_make_node.call(null,data);

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
dommy.template.__GT_node_like = (function __GT_node_like(data){
if((function (){var G__35562 = data;
if(G__35562){
var bit__4488__auto__ = null;
if(cljs.core.truth_((function (){var or__3807__auto__ = bit__4488__auto__;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return G__35562.dommy$template$PElement$;
}
})())){
return true;
} else {
if((!G__35562.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35562);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35562);
}
})()){
return dommy.template._elem.call(null,data);
} else {
return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__35563){
var vec__35583 = p__35563;
var tag_name = cljs.core.nth.call(null,vec__35583,(0),null);
var maybe_attrs = cljs.core.nth.call(null,vec__35583,(1),null);
var children = cljs.core.nthnext.call(null,vec__35583,(2));
var n = dommy.template.base_element.call(null,tag_name);
var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__35585 = maybe_attrs;
if(G__35585){
var bit__4488__auto__ = null;
if(cljs.core.truth_((function (){var or__3807__auto__ = bit__4488__auto__;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return G__35585.dommy$template$PElement$;
}
})())){
return true;
} else {
if((!G__35585.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35585);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35585);
}
})())))?maybe_attrs:null);
var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));
var seq__35586_35602 = cljs.core.seq.call(null,attrs);
var chunk__35587_35603 = null;
var count__35588_35604 = (0);
var i__35589_35605 = (0);
while(true){
if((i__35589_35605 < count__35588_35604)){
var vec__35590_35606 = cljs.core._nth.call(null,chunk__35587_35603,i__35589_35605);
var k_35607 = cljs.core.nth.call(null,vec__35590_35606,(0),null);
var v_35608 = cljs.core.nth.call(null,vec__35590_35606,(1),null);
var G__35591_35609 = (((k_35607 instanceof cljs.core.Keyword))?k_35607.fqn:null);
switch (G__35591_35609) {
case "classes":
var seq__35592_35611 = cljs.core.seq.call(null,v_35608);
var chunk__35593_35612 = null;
var count__35594_35613 = (0);
var i__35595_35614 = (0);
while(true){
if((i__35595_35614 < count__35594_35613)){
var c_35615 = cljs.core._nth.call(null,chunk__35593_35612,i__35595_35614);
dommy.attrs.add_class_BANG_.call(null,n,c_35615);

var G__35616 = seq__35592_35611;
var G__35617 = chunk__35593_35612;
var G__35618 = count__35594_35613;
var G__35619 = (i__35595_35614 + (1));
seq__35592_35611 = G__35616;
chunk__35593_35612 = G__35617;
count__35594_35613 = G__35618;
i__35595_35614 = G__35619;
continue;
} else {
var temp__4406__auto___35620 = cljs.core.seq.call(null,seq__35592_35611);
if(temp__4406__auto___35620){
var seq__35592_35621__$1 = temp__4406__auto___35620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35592_35621__$1)){
var c__4594__auto___35622 = cljs.core.chunk_first.call(null,seq__35592_35621__$1);
var G__35623 = cljs.core.chunk_rest.call(null,seq__35592_35621__$1);
var G__35624 = c__4594__auto___35622;
var G__35625 = cljs.core.count.call(null,c__4594__auto___35622);
var G__35626 = (0);
seq__35592_35611 = G__35623;
chunk__35593_35612 = G__35624;
count__35594_35613 = G__35625;
i__35595_35614 = G__35626;
continue;
} else {
var c_35627 = cljs.core.first.call(null,seq__35592_35621__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_35627);

var G__35628 = cljs.core.next.call(null,seq__35592_35621__$1);
var G__35629 = null;
var G__35630 = (0);
var G__35631 = (0);
seq__35592_35611 = G__35628;
chunk__35593_35612 = G__35629;
count__35594_35613 = G__35630;
i__35595_35614 = G__35631;
continue;
}
} else {
}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_35608);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_35607,v_35608);

}

var G__35632 = seq__35586_35602;
var G__35633 = chunk__35587_35603;
var G__35634 = count__35588_35604;
var G__35635 = (i__35589_35605 + (1));
seq__35586_35602 = G__35632;
chunk__35587_35603 = G__35633;
count__35588_35604 = G__35634;
i__35589_35605 = G__35635;
continue;
} else {
var temp__4406__auto___35636 = cljs.core.seq.call(null,seq__35586_35602);
if(temp__4406__auto___35636){
var seq__35586_35637__$1 = temp__4406__auto___35636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35586_35637__$1)){
var c__4594__auto___35638 = cljs.core.chunk_first.call(null,seq__35586_35637__$1);
var G__35639 = cljs.core.chunk_rest.call(null,seq__35586_35637__$1);
var G__35640 = c__4594__auto___35638;
var G__35641 = cljs.core.count.call(null,c__4594__auto___35638);
var G__35642 = (0);
seq__35586_35602 = G__35639;
chunk__35587_35603 = G__35640;
count__35588_35604 = G__35641;
i__35589_35605 = G__35642;
continue;
} else {
var vec__35596_35643 = cljs.core.first.call(null,seq__35586_35637__$1);
var k_35644 = cljs.core.nth.call(null,vec__35596_35643,(0),null);
var v_35645 = cljs.core.nth.call(null,vec__35596_35643,(1),null);
var G__35597_35646 = (((k_35644 instanceof cljs.core.Keyword))?k_35644.fqn:null);
switch (G__35597_35646) {
case "classes":
var seq__35598_35648 = cljs.core.seq.call(null,v_35645);
var chunk__35599_35649 = null;
var count__35600_35650 = (0);
var i__35601_35651 = (0);
while(true){
if((i__35601_35651 < count__35600_35650)){
var c_35652 = cljs.core._nth.call(null,chunk__35599_35649,i__35601_35651);
dommy.attrs.add_class_BANG_.call(null,n,c_35652);

var G__35653 = seq__35598_35648;
var G__35654 = chunk__35599_35649;
var G__35655 = count__35600_35650;
var G__35656 = (i__35601_35651 + (1));
seq__35598_35648 = G__35653;
chunk__35599_35649 = G__35654;
count__35600_35650 = G__35655;
i__35601_35651 = G__35656;
continue;
} else {
var temp__4406__auto___35657__$1 = cljs.core.seq.call(null,seq__35598_35648);
if(temp__4406__auto___35657__$1){
var seq__35598_35658__$1 = temp__4406__auto___35657__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35598_35658__$1)){
var c__4594__auto___35659 = cljs.core.chunk_first.call(null,seq__35598_35658__$1);
var G__35660 = cljs.core.chunk_rest.call(null,seq__35598_35658__$1);
var G__35661 = c__4594__auto___35659;
var G__35662 = cljs.core.count.call(null,c__4594__auto___35659);
var G__35663 = (0);
seq__35598_35648 = G__35660;
chunk__35599_35649 = G__35661;
count__35600_35650 = G__35662;
i__35601_35651 = G__35663;
continue;
} else {
var c_35664 = cljs.core.first.call(null,seq__35598_35658__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_35664);

var G__35665 = cljs.core.next.call(null,seq__35598_35658__$1);
var G__35666 = null;
var G__35667 = (0);
var G__35668 = (0);
seq__35598_35648 = G__35665;
chunk__35599_35649 = G__35666;
count__35600_35650 = G__35667;
i__35601_35651 = G__35668;
continue;
}
} else {
}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_35645);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_35644,v_35645);

}

var G__35669 = cljs.core.next.call(null,seq__35586_35637__$1);
var G__35670 = null;
var G__35671 = (0);
var G__35672 = (0);
seq__35586_35602 = G__35669;
chunk__35587_35603 = G__35670;
count__35588_35604 = G__35671;
i__35589_35605 = G__35672;
continue;
}
} else {
}
}
break;
}

n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));

return n;
});
(dommy.template.PElement["string"] = true);

(dommy.template._elem["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return dommy.template.base_element.call(null,this$);
} else {
return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));

(dommy.template.PElement["number"] = true);

(dommy.template._elem["number"] = (function (this$){
return document.createTextNode([cljs.core.str(this$)].join(''));
}));

cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;

cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return dommy.template.compound_element.call(null,this$__$1);
});

SVGElement.prototype.dommy$template$PElement$ = true;

SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

Document.prototype.dommy$template$PElement$ = true;

Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

Text.prototype.dommy$template$PElement$ = true;

Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

DocumentFragment.prototype.dommy$template$PElement$ = true;

DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

HTMLElement.prototype.dommy$template$PElement$ = true;

HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;

Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
}catch (e35673){if((e35673 instanceof ReferenceError)){
var __35674 = e35673;
console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else {
throw e35673;

}
}dommy.template.node = (function node(data){
if((function (){var G__35676 = data;
if(G__35676){
var bit__4488__auto__ = null;
if(cljs.core.truth_((function (){var or__3807__auto__ = bit__4488__auto__;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return G__35676.dommy$template$PElement$;
}
})())){
return true;
} else {
if((!G__35676.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35676);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35676);
}
})()){
return dommy.template._elem.call(null,data);
} else {
return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){
var parent = document.createElement("div");
parent.insertAdjacentHTML("beforeend",html);

return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map