// Compiled by ClojureScript 0.0-2850 {}
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);

dommy.template.PElement = (function (){var obj34072 = {};
return obj34072;
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
var str_34075 = node_str.substring(base_idx);
while(true){
var next_idx_34076 = dommy.template.next_css_index.call(null,str_34075,(1));
var frag_34077 = (((next_idx_34076 >= (0)))?str_34075.substring((0),next_idx_34076):str_34075);
var G__34074_34078 = frag_34077.charAt((0));
switch (G__34074_34078) {
case ".":
dommy.attrs.add_class_BANG_.call(null,node,frag_34077.substring((1)));

break;
case "#":
node.setAttribute("id",frag_34077.substring((1)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_34077.charAt((0)))].join('')));

}

if((next_idx_34076 >= (0))){
var G__34080 = str_34075.substring(next_idx_34076);
str_34075 = G__34080;
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
if((function (){var G__34086 = data;
if(G__34086){
var bit__4488__auto__ = null;
if(cljs.core.truth_((function (){var or__3807__auto__ = bit__4488__auto__;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return G__34086.dommy$template$PElement$;
}
})())){
return true;
} else {
if((!G__34086.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__34086);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__34086);
}
})()){
result_frag.appendChild(dommy.template._elem.call(null,data));

return result_frag;
} else {
if(cljs.core.seq_QMARK_.call(null,data)){
var seq__34087_34091 = cljs.core.seq.call(null,data);
var chunk__34088_34092 = null;
var count__34089_34093 = (0);
var i__34090_34094 = (0);
while(true){
if((i__34090_34094 < count__34089_34093)){
var child_34095 = cljs.core._nth.call(null,chunk__34088_34092,i__34090_34094);
__GT_document_fragment.call(null,result_frag,child_34095);

var G__34096 = seq__34087_34091;
var G__34097 = chunk__34088_34092;
var G__34098 = count__34089_34093;
var G__34099 = (i__34090_34094 + (1));
seq__34087_34091 = G__34096;
chunk__34088_34092 = G__34097;
count__34089_34093 = G__34098;
i__34090_34094 = G__34099;
continue;
} else {
var temp__4126__auto___34100 = cljs.core.seq.call(null,seq__34087_34091);
if(temp__4126__auto___34100){
var seq__34087_34101__$1 = temp__4126__auto___34100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34087_34101__$1)){
var c__4594__auto___34102 = cljs.core.chunk_first.call(null,seq__34087_34101__$1);
var G__34103 = cljs.core.chunk_rest.call(null,seq__34087_34101__$1);
var G__34104 = c__4594__auto___34102;
var G__34105 = cljs.core.count.call(null,c__4594__auto___34102);
var G__34106 = (0);
seq__34087_34091 = G__34103;
chunk__34088_34092 = G__34104;
count__34089_34093 = G__34105;
i__34090_34094 = G__34106;
continue;
} else {
var child_34107 = cljs.core.first.call(null,seq__34087_34101__$1);
__GT_document_fragment.call(null,result_frag,child_34107);

var G__34108 = cljs.core.next.call(null,seq__34087_34101__$1);
var G__34109 = null;
var G__34110 = (0);
var G__34111 = (0);
seq__34087_34091 = G__34108;
chunk__34088_34092 = G__34109;
count__34089_34093 = G__34110;
i__34090_34094 = G__34111;
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
if((function (){var G__34113 = data;
if(G__34113){
var bit__4488__auto__ = null;
if(cljs.core.truth_((function (){var or__3807__auto__ = bit__4488__auto__;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return G__34113.dommy$template$PElement$;
}
})())){
return true;
} else {
if((!G__34113.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__34113);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__34113);
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
dommy.template.compound_element = (function compound_element(p__34114){
var vec__34134 = p__34114;
var tag_name = cljs.core.nth.call(null,vec__34134,(0),null);
var maybe_attrs = cljs.core.nth.call(null,vec__34134,(1),null);
var children = cljs.core.nthnext.call(null,vec__34134,(2));
var n = dommy.template.base_element.call(null,tag_name);
var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__34136 = maybe_attrs;
if(G__34136){
var bit__4488__auto__ = null;
if(cljs.core.truth_((function (){var or__3807__auto__ = bit__4488__auto__;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return G__34136.dommy$template$PElement$;
}
})())){
return true;
} else {
if((!G__34136.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__34136);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__34136);
}
})())))?maybe_attrs:null);
var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));
var seq__34137_34153 = cljs.core.seq.call(null,attrs);
var chunk__34138_34154 = null;
var count__34139_34155 = (0);
var i__34140_34156 = (0);
while(true){
if((i__34140_34156 < count__34139_34155)){
var vec__34141_34157 = cljs.core._nth.call(null,chunk__34138_34154,i__34140_34156);
var k_34158 = cljs.core.nth.call(null,vec__34141_34157,(0),null);
var v_34159 = cljs.core.nth.call(null,vec__34141_34157,(1),null);
var G__34142_34160 = (((k_34158 instanceof cljs.core.Keyword))?k_34158.fqn:null);
switch (G__34142_34160) {
case "classes":
var seq__34143_34162 = cljs.core.seq.call(null,v_34159);
var chunk__34144_34163 = null;
var count__34145_34164 = (0);
var i__34146_34165 = (0);
while(true){
if((i__34146_34165 < count__34145_34164)){
var c_34166 = cljs.core._nth.call(null,chunk__34144_34163,i__34146_34165);
dommy.attrs.add_class_BANG_.call(null,n,c_34166);

var G__34167 = seq__34143_34162;
var G__34168 = chunk__34144_34163;
var G__34169 = count__34145_34164;
var G__34170 = (i__34146_34165 + (1));
seq__34143_34162 = G__34167;
chunk__34144_34163 = G__34168;
count__34145_34164 = G__34169;
i__34146_34165 = G__34170;
continue;
} else {
var temp__4126__auto___34171 = cljs.core.seq.call(null,seq__34143_34162);
if(temp__4126__auto___34171){
var seq__34143_34172__$1 = temp__4126__auto___34171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34143_34172__$1)){
var c__4594__auto___34173 = cljs.core.chunk_first.call(null,seq__34143_34172__$1);
var G__34174 = cljs.core.chunk_rest.call(null,seq__34143_34172__$1);
var G__34175 = c__4594__auto___34173;
var G__34176 = cljs.core.count.call(null,c__4594__auto___34173);
var G__34177 = (0);
seq__34143_34162 = G__34174;
chunk__34144_34163 = G__34175;
count__34145_34164 = G__34176;
i__34146_34165 = G__34177;
continue;
} else {
var c_34178 = cljs.core.first.call(null,seq__34143_34172__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_34178);

var G__34179 = cljs.core.next.call(null,seq__34143_34172__$1);
var G__34180 = null;
var G__34181 = (0);
var G__34182 = (0);
seq__34143_34162 = G__34179;
chunk__34144_34163 = G__34180;
count__34145_34164 = G__34181;
i__34146_34165 = G__34182;
continue;
}
} else {
}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_34159);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_34158,v_34159);

}

var G__34183 = seq__34137_34153;
var G__34184 = chunk__34138_34154;
var G__34185 = count__34139_34155;
var G__34186 = (i__34140_34156 + (1));
seq__34137_34153 = G__34183;
chunk__34138_34154 = G__34184;
count__34139_34155 = G__34185;
i__34140_34156 = G__34186;
continue;
} else {
var temp__4126__auto___34187 = cljs.core.seq.call(null,seq__34137_34153);
if(temp__4126__auto___34187){
var seq__34137_34188__$1 = temp__4126__auto___34187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34137_34188__$1)){
var c__4594__auto___34189 = cljs.core.chunk_first.call(null,seq__34137_34188__$1);
var G__34190 = cljs.core.chunk_rest.call(null,seq__34137_34188__$1);
var G__34191 = c__4594__auto___34189;
var G__34192 = cljs.core.count.call(null,c__4594__auto___34189);
var G__34193 = (0);
seq__34137_34153 = G__34190;
chunk__34138_34154 = G__34191;
count__34139_34155 = G__34192;
i__34140_34156 = G__34193;
continue;
} else {
var vec__34147_34194 = cljs.core.first.call(null,seq__34137_34188__$1);
var k_34195 = cljs.core.nth.call(null,vec__34147_34194,(0),null);
var v_34196 = cljs.core.nth.call(null,vec__34147_34194,(1),null);
var G__34148_34197 = (((k_34195 instanceof cljs.core.Keyword))?k_34195.fqn:null);
switch (G__34148_34197) {
case "classes":
var seq__34149_34199 = cljs.core.seq.call(null,v_34196);
var chunk__34150_34200 = null;
var count__34151_34201 = (0);
var i__34152_34202 = (0);
while(true){
if((i__34152_34202 < count__34151_34201)){
var c_34203 = cljs.core._nth.call(null,chunk__34150_34200,i__34152_34202);
dommy.attrs.add_class_BANG_.call(null,n,c_34203);

var G__34204 = seq__34149_34199;
var G__34205 = chunk__34150_34200;
var G__34206 = count__34151_34201;
var G__34207 = (i__34152_34202 + (1));
seq__34149_34199 = G__34204;
chunk__34150_34200 = G__34205;
count__34151_34201 = G__34206;
i__34152_34202 = G__34207;
continue;
} else {
var temp__4126__auto___34208__$1 = cljs.core.seq.call(null,seq__34149_34199);
if(temp__4126__auto___34208__$1){
var seq__34149_34209__$1 = temp__4126__auto___34208__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34149_34209__$1)){
var c__4594__auto___34210 = cljs.core.chunk_first.call(null,seq__34149_34209__$1);
var G__34211 = cljs.core.chunk_rest.call(null,seq__34149_34209__$1);
var G__34212 = c__4594__auto___34210;
var G__34213 = cljs.core.count.call(null,c__4594__auto___34210);
var G__34214 = (0);
seq__34149_34199 = G__34211;
chunk__34150_34200 = G__34212;
count__34151_34201 = G__34213;
i__34152_34202 = G__34214;
continue;
} else {
var c_34215 = cljs.core.first.call(null,seq__34149_34209__$1);
dommy.attrs.add_class_BANG_.call(null,n,c_34215);

var G__34216 = cljs.core.next.call(null,seq__34149_34209__$1);
var G__34217 = null;
var G__34218 = (0);
var G__34219 = (0);
seq__34149_34199 = G__34216;
chunk__34150_34200 = G__34217;
count__34151_34201 = G__34218;
i__34152_34202 = G__34219;
continue;
}
} else {
}
}
break;
}

break;
case "class":
dommy.attrs.add_class_BANG_.call(null,n,v_34196);

break;
default:
dommy.attrs.set_attr_BANG_.call(null,n,k_34195,v_34196);

}

var G__34220 = cljs.core.next.call(null,seq__34137_34188__$1);
var G__34221 = null;
var G__34222 = (0);
var G__34223 = (0);
seq__34137_34153 = G__34220;
chunk__34138_34154 = G__34221;
count__34139_34155 = G__34222;
i__34140_34156 = G__34223;
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
}catch (e34224){if((e34224 instanceof ReferenceError)){
var __34225 = e34224;
console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else {
throw e34224;

}
}dommy.template.node = (function node(data){
if((function (){var G__34227 = data;
if(G__34227){
var bit__4488__auto__ = null;
if(cljs.core.truth_((function (){var or__3807__auto__ = bit__4488__auto__;
if(cljs.core.truth_(or__3807__auto__)){
return or__3807__auto__;
} else {
return G__34227.dommy$template$PElement$;
}
})())){
return true;
} else {
if((!G__34227.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__34227);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__34227);
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