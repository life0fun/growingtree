// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj16750 = {};return obj16750;
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
{var str_16753 = node_str.substring(base_idx);while(true){
var next_idx_16754 = dommy.template.next_css_index.call(null,str_16753,1);var frag_16755 = (((next_idx_16754 >= 0))?str_16753.substring(0,next_idx_16754):str_16753);var G__16752_16756 = frag_16755.charAt(0);if(cljs.core._EQ_.call(null,"#",G__16752_16756))
{node.setAttribute("id",frag_16755.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__16752_16756))
{dommy.attrs.add_class_BANG_.call(null,node,frag_16755.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_16755.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_16754 >= 0))
{{
var G__16757 = str_16753.substring(next_idx_16754);
str_16753 = G__16757;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__16763 = data;if(G__16763)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__16763.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16763.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16763);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16763);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__16764_16768 = cljs.core.seq.call(null,data);var chunk__16765_16769 = null;var count__16766_16770 = 0;var i__16767_16771 = 0;while(true){
if((i__16767_16771 < count__16766_16770))
{var child_16772 = cljs.core._nth.call(null,chunk__16765_16769,i__16767_16771);__GT_document_fragment.call(null,result_frag,child_16772);
{
var G__16773 = seq__16764_16768;
var G__16774 = chunk__16765_16769;
var G__16775 = count__16766_16770;
var G__16776 = (i__16767_16771 + 1);
seq__16764_16768 = G__16773;
chunk__16765_16769 = G__16774;
count__16766_16770 = G__16775;
i__16767_16771 = G__16776;
continue;
}
} else
{var temp__4092__auto___16777 = cljs.core.seq.call(null,seq__16764_16768);if(temp__4092__auto___16777)
{var seq__16764_16778__$1 = temp__4092__auto___16777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16764_16778__$1))
{var c__4191__auto___16779 = cljs.core.chunk_first.call(null,seq__16764_16778__$1);{
var G__16780 = cljs.core.chunk_rest.call(null,seq__16764_16778__$1);
var G__16781 = c__4191__auto___16779;
var G__16782 = cljs.core.count.call(null,c__4191__auto___16779);
var G__16783 = 0;
seq__16764_16768 = G__16780;
chunk__16765_16769 = G__16781;
count__16766_16770 = G__16782;
i__16767_16771 = G__16783;
continue;
}
} else
{var child_16784 = cljs.core.first.call(null,seq__16764_16778__$1);__GT_document_fragment.call(null,result_frag,child_16784);
{
var G__16785 = cljs.core.next.call(null,seq__16764_16778__$1);
var G__16786 = null;
var G__16787 = 0;
var G__16788 = 0;
seq__16764_16768 = G__16785;
chunk__16765_16769 = G__16786;
count__16766_16770 = G__16787;
i__16767_16771 = G__16788;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__16790 = data;if(G__16790)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__16790.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16790.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16790);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16790);
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
dommy.template.compound_element = (function compound_element(p__16791){var vec__16811 = p__16791;var tag_name = cljs.core.nth.call(null,vec__16811,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__16811,1,null);var children = cljs.core.nthnext.call(null,vec__16811,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__16813 = maybe_attrs;if(G__16813)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__16813.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16813.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16813);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16813);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__16814_16830 = cljs.core.seq.call(null,attrs);var chunk__16815_16831 = null;var count__16816_16832 = 0;var i__16817_16833 = 0;while(true){
if((i__16817_16833 < count__16816_16832))
{var vec__16818_16834 = cljs.core._nth.call(null,chunk__16815_16831,i__16817_16833);var k_16835 = cljs.core.nth.call(null,vec__16818_16834,0,null);var v_16836 = cljs.core.nth.call(null,vec__16818_16834,1,null);var G__16819_16837 = k_16835;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__16819_16837))
{var seq__16820_16838 = cljs.core.seq.call(null,v_16836);var chunk__16821_16839 = null;var count__16822_16840 = 0;var i__16823_16841 = 0;while(true){
if((i__16823_16841 < count__16822_16840))
{var c_16842 = cljs.core._nth.call(null,chunk__16821_16839,i__16823_16841);dommy.attrs.add_class_BANG_.call(null,n,c_16842);
{
var G__16843 = seq__16820_16838;
var G__16844 = chunk__16821_16839;
var G__16845 = count__16822_16840;
var G__16846 = (i__16823_16841 + 1);
seq__16820_16838 = G__16843;
chunk__16821_16839 = G__16844;
count__16822_16840 = G__16845;
i__16823_16841 = G__16846;
continue;
}
} else
{var temp__4092__auto___16847 = cljs.core.seq.call(null,seq__16820_16838);if(temp__4092__auto___16847)
{var seq__16820_16848__$1 = temp__4092__auto___16847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16820_16848__$1))
{var c__4191__auto___16849 = cljs.core.chunk_first.call(null,seq__16820_16848__$1);{
var G__16850 = cljs.core.chunk_rest.call(null,seq__16820_16848__$1);
var G__16851 = c__4191__auto___16849;
var G__16852 = cljs.core.count.call(null,c__4191__auto___16849);
var G__16853 = 0;
seq__16820_16838 = G__16850;
chunk__16821_16839 = G__16851;
count__16822_16840 = G__16852;
i__16823_16841 = G__16853;
continue;
}
} else
{var c_16854 = cljs.core.first.call(null,seq__16820_16848__$1);dommy.attrs.add_class_BANG_.call(null,n,c_16854);
{
var G__16855 = cljs.core.next.call(null,seq__16820_16848__$1);
var G__16856 = null;
var G__16857 = 0;
var G__16858 = 0;
seq__16820_16838 = G__16855;
chunk__16821_16839 = G__16856;
count__16822_16840 = G__16857;
i__16823_16841 = G__16858;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__16819_16837))
{dommy.attrs.add_class_BANG_.call(null,n,v_16836);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_16835,v_16836);
} else
{}
}
}
{
var G__16859 = seq__16814_16830;
var G__16860 = chunk__16815_16831;
var G__16861 = count__16816_16832;
var G__16862 = (i__16817_16833 + 1);
seq__16814_16830 = G__16859;
chunk__16815_16831 = G__16860;
count__16816_16832 = G__16861;
i__16817_16833 = G__16862;
continue;
}
} else
{var temp__4092__auto___16863 = cljs.core.seq.call(null,seq__16814_16830);if(temp__4092__auto___16863)
{var seq__16814_16864__$1 = temp__4092__auto___16863;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16814_16864__$1))
{var c__4191__auto___16865 = cljs.core.chunk_first.call(null,seq__16814_16864__$1);{
var G__16866 = cljs.core.chunk_rest.call(null,seq__16814_16864__$1);
var G__16867 = c__4191__auto___16865;
var G__16868 = cljs.core.count.call(null,c__4191__auto___16865);
var G__16869 = 0;
seq__16814_16830 = G__16866;
chunk__16815_16831 = G__16867;
count__16816_16832 = G__16868;
i__16817_16833 = G__16869;
continue;
}
} else
{var vec__16824_16870 = cljs.core.first.call(null,seq__16814_16864__$1);var k_16871 = cljs.core.nth.call(null,vec__16824_16870,0,null);var v_16872 = cljs.core.nth.call(null,vec__16824_16870,1,null);var G__16825_16873 = k_16871;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__16825_16873))
{var seq__16826_16874 = cljs.core.seq.call(null,v_16872);var chunk__16827_16875 = null;var count__16828_16876 = 0;var i__16829_16877 = 0;while(true){
if((i__16829_16877 < count__16828_16876))
{var c_16878 = cljs.core._nth.call(null,chunk__16827_16875,i__16829_16877);dommy.attrs.add_class_BANG_.call(null,n,c_16878);
{
var G__16879 = seq__16826_16874;
var G__16880 = chunk__16827_16875;
var G__16881 = count__16828_16876;
var G__16882 = (i__16829_16877 + 1);
seq__16826_16874 = G__16879;
chunk__16827_16875 = G__16880;
count__16828_16876 = G__16881;
i__16829_16877 = G__16882;
continue;
}
} else
{var temp__4092__auto___16883__$1 = cljs.core.seq.call(null,seq__16826_16874);if(temp__4092__auto___16883__$1)
{var seq__16826_16884__$1 = temp__4092__auto___16883__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16826_16884__$1))
{var c__4191__auto___16885 = cljs.core.chunk_first.call(null,seq__16826_16884__$1);{
var G__16886 = cljs.core.chunk_rest.call(null,seq__16826_16884__$1);
var G__16887 = c__4191__auto___16885;
var G__16888 = cljs.core.count.call(null,c__4191__auto___16885);
var G__16889 = 0;
seq__16826_16874 = G__16886;
chunk__16827_16875 = G__16887;
count__16828_16876 = G__16888;
i__16829_16877 = G__16889;
continue;
}
} else
{var c_16890 = cljs.core.first.call(null,seq__16826_16884__$1);dommy.attrs.add_class_BANG_.call(null,n,c_16890);
{
var G__16891 = cljs.core.next.call(null,seq__16826_16884__$1);
var G__16892 = null;
var G__16893 = 0;
var G__16894 = 0;
seq__16826_16874 = G__16891;
chunk__16827_16875 = G__16892;
count__16828_16876 = G__16893;
i__16829_16877 = G__16894;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__16825_16873))
{dommy.attrs.add_class_BANG_.call(null,n,v_16872);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_16871,v_16872);
} else
{}
}
}
{
var G__16895 = cljs.core.next.call(null,seq__16814_16864__$1);
var G__16896 = null;
var G__16897 = 0;
var G__16898 = 0;
seq__16814_16830 = G__16895;
chunk__16815_16831 = G__16896;
count__16816_16832 = G__16897;
i__16817_16833 = G__16898;
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
}catch (e16899){if((e16899 instanceof ReferenceError))
{var __16900 = e16899;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16899;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__16902 = data;if(G__16902)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__16902.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16902.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16902);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16902);
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