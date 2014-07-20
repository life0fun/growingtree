// Compiled by ClojureScript 0.0-2173
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj16976 = {};return obj16976;
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
{var str_16979 = node_str.substring(base_idx);while(true){
var next_idx_16980 = dommy.template.next_css_index.call(null,str_16979,1);var frag_16981 = (((next_idx_16980 >= 0))?str_16979.substring(0,next_idx_16980):str_16979);var G__16978_16982 = frag_16981.charAt(0);if(cljs.core._EQ_.call(null,"#",G__16978_16982))
{node.setAttribute("id",frag_16981.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__16978_16982))
{dommy.attrs.add_class_BANG_.call(null,node,frag_16981.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_16981.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_16980 >= 0))
{{
var G__16983 = str_16979.substring(next_idx_16980);
str_16979 = G__16983;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__16989 = data;if(G__16989)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__16989.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16989.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16989);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16989);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__16990_16994 = cljs.core.seq.call(null,data);var chunk__16991_16995 = null;var count__16992_16996 = 0;var i__16993_16997 = 0;while(true){
if((i__16993_16997 < count__16992_16996))
{var child_16998 = cljs.core._nth.call(null,chunk__16991_16995,i__16993_16997);__GT_document_fragment.call(null,result_frag,child_16998);
{
var G__16999 = seq__16990_16994;
var G__17000 = chunk__16991_16995;
var G__17001 = count__16992_16996;
var G__17002 = (i__16993_16997 + 1);
seq__16990_16994 = G__16999;
chunk__16991_16995 = G__17000;
count__16992_16996 = G__17001;
i__16993_16997 = G__17002;
continue;
}
} else
{var temp__4092__auto___17003 = cljs.core.seq.call(null,seq__16990_16994);if(temp__4092__auto___17003)
{var seq__16990_17004__$1 = temp__4092__auto___17003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16990_17004__$1))
{var c__4191__auto___17005 = cljs.core.chunk_first.call(null,seq__16990_17004__$1);{
var G__17006 = cljs.core.chunk_rest.call(null,seq__16990_17004__$1);
var G__17007 = c__4191__auto___17005;
var G__17008 = cljs.core.count.call(null,c__4191__auto___17005);
var G__17009 = 0;
seq__16990_16994 = G__17006;
chunk__16991_16995 = G__17007;
count__16992_16996 = G__17008;
i__16993_16997 = G__17009;
continue;
}
} else
{var child_17010 = cljs.core.first.call(null,seq__16990_17004__$1);__GT_document_fragment.call(null,result_frag,child_17010);
{
var G__17011 = cljs.core.next.call(null,seq__16990_17004__$1);
var G__17012 = null;
var G__17013 = 0;
var G__17014 = 0;
seq__16990_16994 = G__17011;
chunk__16991_16995 = G__17012;
count__16992_16996 = G__17013;
i__16993_16997 = G__17014;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__17016 = data;if(G__17016)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__17016.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17016.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17016);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17016);
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
dommy.template.compound_element = (function compound_element(p__17017){var vec__17037 = p__17017;var tag_name = cljs.core.nth.call(null,vec__17037,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__17037,1,null);var children = cljs.core.nthnext.call(null,vec__17037,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__17039 = maybe_attrs;if(G__17039)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__17039.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17039.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17039);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17039);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__17040_17056 = cljs.core.seq.call(null,attrs);var chunk__17041_17057 = null;var count__17042_17058 = 0;var i__17043_17059 = 0;while(true){
if((i__17043_17059 < count__17042_17058))
{var vec__17044_17060 = cljs.core._nth.call(null,chunk__17041_17057,i__17043_17059);var k_17061 = cljs.core.nth.call(null,vec__17044_17060,0,null);var v_17062 = cljs.core.nth.call(null,vec__17044_17060,1,null);var G__17045_17063 = k_17061;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__17045_17063))
{var seq__17046_17064 = cljs.core.seq.call(null,v_17062);var chunk__17047_17065 = null;var count__17048_17066 = 0;var i__17049_17067 = 0;while(true){
if((i__17049_17067 < count__17048_17066))
{var c_17068 = cljs.core._nth.call(null,chunk__17047_17065,i__17049_17067);dommy.attrs.add_class_BANG_.call(null,n,c_17068);
{
var G__17069 = seq__17046_17064;
var G__17070 = chunk__17047_17065;
var G__17071 = count__17048_17066;
var G__17072 = (i__17049_17067 + 1);
seq__17046_17064 = G__17069;
chunk__17047_17065 = G__17070;
count__17048_17066 = G__17071;
i__17049_17067 = G__17072;
continue;
}
} else
{var temp__4092__auto___17073 = cljs.core.seq.call(null,seq__17046_17064);if(temp__4092__auto___17073)
{var seq__17046_17074__$1 = temp__4092__auto___17073;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17046_17074__$1))
{var c__4191__auto___17075 = cljs.core.chunk_first.call(null,seq__17046_17074__$1);{
var G__17076 = cljs.core.chunk_rest.call(null,seq__17046_17074__$1);
var G__17077 = c__4191__auto___17075;
var G__17078 = cljs.core.count.call(null,c__4191__auto___17075);
var G__17079 = 0;
seq__17046_17064 = G__17076;
chunk__17047_17065 = G__17077;
count__17048_17066 = G__17078;
i__17049_17067 = G__17079;
continue;
}
} else
{var c_17080 = cljs.core.first.call(null,seq__17046_17074__$1);dommy.attrs.add_class_BANG_.call(null,n,c_17080);
{
var G__17081 = cljs.core.next.call(null,seq__17046_17074__$1);
var G__17082 = null;
var G__17083 = 0;
var G__17084 = 0;
seq__17046_17064 = G__17081;
chunk__17047_17065 = G__17082;
count__17048_17066 = G__17083;
i__17049_17067 = G__17084;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__17045_17063))
{dommy.attrs.add_class_BANG_.call(null,n,v_17062);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_17061,v_17062);
} else
{}
}
}
{
var G__17085 = seq__17040_17056;
var G__17086 = chunk__17041_17057;
var G__17087 = count__17042_17058;
var G__17088 = (i__17043_17059 + 1);
seq__17040_17056 = G__17085;
chunk__17041_17057 = G__17086;
count__17042_17058 = G__17087;
i__17043_17059 = G__17088;
continue;
}
} else
{var temp__4092__auto___17089 = cljs.core.seq.call(null,seq__17040_17056);if(temp__4092__auto___17089)
{var seq__17040_17090__$1 = temp__4092__auto___17089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17040_17090__$1))
{var c__4191__auto___17091 = cljs.core.chunk_first.call(null,seq__17040_17090__$1);{
var G__17092 = cljs.core.chunk_rest.call(null,seq__17040_17090__$1);
var G__17093 = c__4191__auto___17091;
var G__17094 = cljs.core.count.call(null,c__4191__auto___17091);
var G__17095 = 0;
seq__17040_17056 = G__17092;
chunk__17041_17057 = G__17093;
count__17042_17058 = G__17094;
i__17043_17059 = G__17095;
continue;
}
} else
{var vec__17050_17096 = cljs.core.first.call(null,seq__17040_17090__$1);var k_17097 = cljs.core.nth.call(null,vec__17050_17096,0,null);var v_17098 = cljs.core.nth.call(null,vec__17050_17096,1,null);var G__17051_17099 = k_17097;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__17051_17099))
{var seq__17052_17100 = cljs.core.seq.call(null,v_17098);var chunk__17053_17101 = null;var count__17054_17102 = 0;var i__17055_17103 = 0;while(true){
if((i__17055_17103 < count__17054_17102))
{var c_17104 = cljs.core._nth.call(null,chunk__17053_17101,i__17055_17103);dommy.attrs.add_class_BANG_.call(null,n,c_17104);
{
var G__17105 = seq__17052_17100;
var G__17106 = chunk__17053_17101;
var G__17107 = count__17054_17102;
var G__17108 = (i__17055_17103 + 1);
seq__17052_17100 = G__17105;
chunk__17053_17101 = G__17106;
count__17054_17102 = G__17107;
i__17055_17103 = G__17108;
continue;
}
} else
{var temp__4092__auto___17109__$1 = cljs.core.seq.call(null,seq__17052_17100);if(temp__4092__auto___17109__$1)
{var seq__17052_17110__$1 = temp__4092__auto___17109__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17052_17110__$1))
{var c__4191__auto___17111 = cljs.core.chunk_first.call(null,seq__17052_17110__$1);{
var G__17112 = cljs.core.chunk_rest.call(null,seq__17052_17110__$1);
var G__17113 = c__4191__auto___17111;
var G__17114 = cljs.core.count.call(null,c__4191__auto___17111);
var G__17115 = 0;
seq__17052_17100 = G__17112;
chunk__17053_17101 = G__17113;
count__17054_17102 = G__17114;
i__17055_17103 = G__17115;
continue;
}
} else
{var c_17116 = cljs.core.first.call(null,seq__17052_17110__$1);dommy.attrs.add_class_BANG_.call(null,n,c_17116);
{
var G__17117 = cljs.core.next.call(null,seq__17052_17110__$1);
var G__17118 = null;
var G__17119 = 0;
var G__17120 = 0;
seq__17052_17100 = G__17117;
chunk__17053_17101 = G__17118;
count__17054_17102 = G__17119;
i__17055_17103 = G__17120;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__17051_17099))
{dommy.attrs.add_class_BANG_.call(null,n,v_17098);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_17097,v_17098);
} else
{}
}
}
{
var G__17121 = cljs.core.next.call(null,seq__17040_17090__$1);
var G__17122 = null;
var G__17123 = 0;
var G__17124 = 0;
seq__17040_17056 = G__17121;
chunk__17041_17057 = G__17122;
count__17042_17058 = G__17123;
i__17043_17059 = G__17124;
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
}catch (e17125){if((e17125 instanceof ReferenceError))
{var __17126 = e17125;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17125;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__17128 = data;if(G__17128)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__17128.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__17128.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17128);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__17128);
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