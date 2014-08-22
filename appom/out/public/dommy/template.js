// Compiled by ClojureScript 0.0-2277
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj17810 = {};return obj17810;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3531__auto__ = this$;if(and__3531__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3531__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4170__auto__ = (((this$ == null))?null:this$);return (function (){var or__3543__auto__ = (dommy.template._elem[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (dommy.template._elem["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < (0)))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,(0));var tag = (((base_idx > (0)))?node_str.substring((0),base_idx):(((base_idx === (0)))?"div":((new cljs.core.Keyword(null,"else","else",-1508377146))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= (0)))
{var str_17813 = node_str.substring(base_idx);while(true){
var next_idx_17814 = dommy.template.next_css_index.call(null,str_17813,(1));var frag_17815 = (((next_idx_17814 >= (0)))?str_17813.substring((0),next_idx_17814):str_17813);var G__17812_17816 = frag_17815.charAt((0));switch (G__17812_17816) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_17815.substring((1)));

break;
case "#":
node.setAttribute("id",frag_17815.substring((1)));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(frag_17815.charAt((0))))));

}
if((next_idx_17814 >= (0)))
{{
var G__17818 = str_17813.substring(next_idx_17814);
str_17813 = G__17818;
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
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw ("Don't know how to make node from: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,node_data)));
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__17824 = data;if(G__17824)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__17824.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17824.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17824);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17824);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__17825_17829 = cljs.core.seq.call(null,data);var chunk__17826_17830 = null;var count__17827_17831 = (0);var i__17828_17832 = (0);while(true){
if((i__17828_17832 < count__17827_17831))
{var child_17833 = cljs.core._nth.call(null,chunk__17826_17830,i__17828_17832);__GT_document_fragment.call(null,result_frag,child_17833);
{
var G__17834 = seq__17825_17829;
var G__17835 = chunk__17826_17830;
var G__17836 = count__17827_17831;
var G__17837 = (i__17828_17832 + (1));
seq__17825_17829 = G__17834;
chunk__17826_17830 = G__17835;
count__17827_17831 = G__17836;
i__17828_17832 = G__17837;
continue;
}
} else
{var temp__4126__auto___17838 = cljs.core.seq.call(null,seq__17825_17829);if(temp__4126__auto___17838)
{var seq__17825_17839__$1 = temp__4126__auto___17838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17825_17839__$1))
{var c__4299__auto___17840 = cljs.core.chunk_first.call(null,seq__17825_17839__$1);{
var G__17841 = cljs.core.chunk_rest.call(null,seq__17825_17839__$1);
var G__17842 = c__4299__auto___17840;
var G__17843 = cljs.core.count.call(null,c__4299__auto___17840);
var G__17844 = (0);
seq__17825_17829 = G__17841;
chunk__17826_17830 = G__17842;
count__17827_17831 = G__17843;
i__17828_17832 = G__17844;
continue;
}
} else
{var child_17845 = cljs.core.first.call(null,seq__17825_17839__$1);__GT_document_fragment.call(null,result_frag,child_17845);
{
var G__17846 = cljs.core.next.call(null,seq__17825_17839__$1);
var G__17847 = null;
var G__17848 = (0);
var G__17849 = (0);
seq__17825_17829 = G__17846;
chunk__17826_17830 = G__17847;
count__17827_17831 = G__17848;
i__17828_17832 = G__17849;
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
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__17851 = data;if(G__17851)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__17851.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17851.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17851);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17851);
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
dommy.template.compound_element = (function compound_element(p__17852){var vec__17872 = p__17852;var tag_name = cljs.core.nth.call(null,vec__17872,(0),null);var maybe_attrs = cljs.core.nth.call(null,vec__17872,(1),null);var children = cljs.core.nthnext.call(null,vec__17872,(2));var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__17874 = maybe_attrs;if(G__17874)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__17874.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17874.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17874);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17874);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__17875_17891 = cljs.core.seq.call(null,attrs);var chunk__17876_17892 = null;var count__17877_17893 = (0);var i__17878_17894 = (0);while(true){
if((i__17878_17894 < count__17877_17893))
{var vec__17879_17895 = cljs.core._nth.call(null,chunk__17876_17892,i__17878_17894);var k_17896 = cljs.core.nth.call(null,vec__17879_17895,(0),null);var v_17897 = cljs.core.nth.call(null,vec__17879_17895,(1),null);var G__17880_17898 = (((k_17896 instanceof cljs.core.Keyword))?k_17896.fqn:null);switch (G__17880_17898) {
case "classes":
var seq__17881_17900 = cljs.core.seq.call(null,v_17897);var chunk__17882_17901 = null;var count__17883_17902 = (0);var i__17884_17903 = (0);while(true){
if((i__17884_17903 < count__17883_17902))
{var c_17904 = cljs.core._nth.call(null,chunk__17882_17901,i__17884_17903);dommy.attrs.add_class_BANG_.call(null,n,c_17904);
{
var G__17905 = seq__17881_17900;
var G__17906 = chunk__17882_17901;
var G__17907 = count__17883_17902;
var G__17908 = (i__17884_17903 + (1));
seq__17881_17900 = G__17905;
chunk__17882_17901 = G__17906;
count__17883_17902 = G__17907;
i__17884_17903 = G__17908;
continue;
}
} else
{var temp__4126__auto___17909 = cljs.core.seq.call(null,seq__17881_17900);if(temp__4126__auto___17909)
{var seq__17881_17910__$1 = temp__4126__auto___17909;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17881_17910__$1))
{var c__4299__auto___17911 = cljs.core.chunk_first.call(null,seq__17881_17910__$1);{
var G__17912 = cljs.core.chunk_rest.call(null,seq__17881_17910__$1);
var G__17913 = c__4299__auto___17911;
var G__17914 = cljs.core.count.call(null,c__4299__auto___17911);
var G__17915 = (0);
seq__17881_17900 = G__17912;
chunk__17882_17901 = G__17913;
count__17883_17902 = G__17914;
i__17884_17903 = G__17915;
continue;
}
} else
{var c_17916 = cljs.core.first.call(null,seq__17881_17910__$1);dommy.attrs.add_class_BANG_.call(null,n,c_17916);
{
var G__17917 = cljs.core.next.call(null,seq__17881_17910__$1);
var G__17918 = null;
var G__17919 = (0);
var G__17920 = (0);
seq__17881_17900 = G__17917;
chunk__17882_17901 = G__17918;
count__17883_17902 = G__17919;
i__17884_17903 = G__17920;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_17897);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_17896,v_17897);

}
{
var G__17921 = seq__17875_17891;
var G__17922 = chunk__17876_17892;
var G__17923 = count__17877_17893;
var G__17924 = (i__17878_17894 + (1));
seq__17875_17891 = G__17921;
chunk__17876_17892 = G__17922;
count__17877_17893 = G__17923;
i__17878_17894 = G__17924;
continue;
}
} else
{var temp__4126__auto___17925 = cljs.core.seq.call(null,seq__17875_17891);if(temp__4126__auto___17925)
{var seq__17875_17926__$1 = temp__4126__auto___17925;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17875_17926__$1))
{var c__4299__auto___17927 = cljs.core.chunk_first.call(null,seq__17875_17926__$1);{
var G__17928 = cljs.core.chunk_rest.call(null,seq__17875_17926__$1);
var G__17929 = c__4299__auto___17927;
var G__17930 = cljs.core.count.call(null,c__4299__auto___17927);
var G__17931 = (0);
seq__17875_17891 = G__17928;
chunk__17876_17892 = G__17929;
count__17877_17893 = G__17930;
i__17878_17894 = G__17931;
continue;
}
} else
{var vec__17885_17932 = cljs.core.first.call(null,seq__17875_17926__$1);var k_17933 = cljs.core.nth.call(null,vec__17885_17932,(0),null);var v_17934 = cljs.core.nth.call(null,vec__17885_17932,(1),null);var G__17886_17935 = (((k_17933 instanceof cljs.core.Keyword))?k_17933.fqn:null);switch (G__17886_17935) {
case "classes":
var seq__17887_17937 = cljs.core.seq.call(null,v_17934);var chunk__17888_17938 = null;var count__17889_17939 = (0);var i__17890_17940 = (0);while(true){
if((i__17890_17940 < count__17889_17939))
{var c_17941 = cljs.core._nth.call(null,chunk__17888_17938,i__17890_17940);dommy.attrs.add_class_BANG_.call(null,n,c_17941);
{
var G__17942 = seq__17887_17937;
var G__17943 = chunk__17888_17938;
var G__17944 = count__17889_17939;
var G__17945 = (i__17890_17940 + (1));
seq__17887_17937 = G__17942;
chunk__17888_17938 = G__17943;
count__17889_17939 = G__17944;
i__17890_17940 = G__17945;
continue;
}
} else
{var temp__4126__auto___17946__$1 = cljs.core.seq.call(null,seq__17887_17937);if(temp__4126__auto___17946__$1)
{var seq__17887_17947__$1 = temp__4126__auto___17946__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17887_17947__$1))
{var c__4299__auto___17948 = cljs.core.chunk_first.call(null,seq__17887_17947__$1);{
var G__17949 = cljs.core.chunk_rest.call(null,seq__17887_17947__$1);
var G__17950 = c__4299__auto___17948;
var G__17951 = cljs.core.count.call(null,c__4299__auto___17948);
var G__17952 = (0);
seq__17887_17937 = G__17949;
chunk__17888_17938 = G__17950;
count__17889_17939 = G__17951;
i__17890_17940 = G__17952;
continue;
}
} else
{var c_17953 = cljs.core.first.call(null,seq__17887_17947__$1);dommy.attrs.add_class_BANG_.call(null,n,c_17953);
{
var G__17954 = cljs.core.next.call(null,seq__17887_17947__$1);
var G__17955 = null;
var G__17956 = (0);
var G__17957 = (0);
seq__17887_17937 = G__17954;
chunk__17888_17938 = G__17955;
count__17889_17939 = G__17956;
i__17890_17940 = G__17957;
continue;
}
}
} else
{}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_17934);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_17933,v_17934);

}
{
var G__17958 = cljs.core.next.call(null,seq__17875_17926__$1);
var G__17959 = null;
var G__17960 = (0);
var G__17961 = (0);
seq__17875_17891 = G__17958;
chunk__17876_17892 = G__17959;
count__17877_17893 = G__17960;
i__17878_17894 = G__17961;
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
{return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)));
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
}catch (e17962){if((e17962 instanceof ReferenceError))
{var __17963 = e17962;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17962;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__17965 = data;if(G__17965)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__17965.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17965.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17965);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17965);
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