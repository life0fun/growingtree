// Compiled by ClojureScript 0.0-2277
goog.provide('ankha.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
ankha.core.empty_QMARK_ = (function empty_QMARK_(x){if(cljs.core.object_QMARK_.call(null,x))
{return goog.object.isEmpty(x);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.empty_QMARK_.call(null,x);
} else
{return null;
}
}
});
ankha.core.record_QMARK_ = (function record_QMARK_(x){var G__17967 = x;if(G__17967)
{var bit__4193__auto__ = (G__17967.cljs$lang$protocol_mask$partition0$ & (67108864));if((bit__4193__auto__) || (G__17967.cljs$core$IRecord$))
{return true;
} else
{if((!G__17967.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__17967);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__17967);
}
});
ankha.core.regex_QMARK_ = (function regex_QMARK_(x){return (x instanceof RegExp);
});
ankha.core.record_name = (function record_name(r){return cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.pr_str.call(null,r),"{"));
});
ankha.core.literal = (function literal(class$,x){return React.DOM.span({"key": x, "className": class$},cljs.core.pr_str.call(null,x));
});
ankha.core.collection = (function collection(cursor,coll,class$,opener,closer){return om.core.build.call(null,ankha.core.view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),coll], null),cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opener","opener",1027381943),opener,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"closer","closer",10992481),closer], null)], null));
});
ankha.core.inspect = (function inspect(cursor,x){if(typeof x === 'number')
{return ankha.core.literal.call(null,"number",x);
} else
{if((x instanceof cljs.core.Keyword))
{return ankha.core.literal.call(null,"keyword",x);
} else
{if((x instanceof cljs.core.Symbol))
{return ankha.core.literal.call(null,"symbol",x);
} else
{if(typeof x === 'string')
{return ankha.core.literal.call(null,"string",x);
} else
{if(x === true)
{return ankha.core.literal.call(null,"boolean",x);
} else
{if(x === false)
{return ankha.core.literal.call(null,"boolean",x);
} else
{if((x == null))
{return ankha.core.literal.call(null,"nil",x);
} else
{if(cljs.core.fn_QMARK_.call(null,x))
{return ankha.core.literal.call(null,"function",x);
} else
{if(ankha.core.regex_QMARK_.call(null,x))
{return ankha.core.literal.call(null,"regex",x);
} else
{if(ankha.core.record_QMARK_.call(null,x))
{return ankha.core.collection.call(null,cursor,x,"record",(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ankha.core.record_name.call(null,x))+"{"),"}");
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return ankha.core.collection.call(null,cursor,x,"map","{","}");
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return ankha.core.collection.call(null,cursor,x,"vector","[","]");
} else
{if(cljs.core.set_QMARK_.call(null,x))
{return ankha.core.collection.call(null,cursor,x,"set","#{","}");
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return ankha.core.collection.call(null,cursor,x,"seq ","(",")");
} else
{if(cljs.core.object_QMARK_.call(null,x))
{return ankha.core.collection.call(null,cursor,x,"object","#js {","}");
} else
{if(x instanceof Array)
{return ankha.core.collection.call(null,cursor,x,"array","#js [","]");
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return ankha.core.literal.call(null,"literal",x);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
ankha.core.associative__GT_dom = (function associative__GT_dom(data,kvs,p__17968){var map__17978 = p__17968;var map__17978__$1 = ((cljs.core.seq_QMARK_.call(null,map__17978))?cljs.core.apply.call(null,cljs.core.hash_map,map__17978):map__17978);var val_class = cljs.core.get.call(null,map__17978__$1,new cljs.core.Keyword(null,"val-class","val-class",-997529322));var key_class = cljs.core.get.call(null,map__17978__$1,new cljs.core.Keyword(null,"key-class","key-class",764049336));var entry_class = cljs.core.get.call(null,map__17978__$1,new cljs.core.Keyword(null,"entry-class","entry-class",144705573));return cljs.core.into_array.call(null,(function (){var iter__4268__auto__ = ((function (map__17978,map__17978__$1,val_class,key_class,entry_class){
return (function iter__17979(s__17980){return (new cljs.core.LazySeq(null,((function (map__17978,map__17978__$1,val_class,key_class,entry_class){
return (function (){var s__17980__$1 = s__17980;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17980__$1);if(temp__4126__auto__)
{var s__17980__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17980__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__17980__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__17982 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__17981 = (0);while(true){
if((i__17981 < size__4267__auto__))
{var vec__17985 = cljs.core._nth.call(null,c__4266__auto__,i__17981);var k = cljs.core.nth.call(null,vec__17985,(0),null);var v = cljs.core.nth.call(null,vec__17985,(1),null);cljs.core.chunk_append.call(null,b__17982,React.DOM.li(null,React.DOM.div({"style": {"position": "relative"}, "className": ("entry "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(entry_class))},React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": ("key "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_class))},ankha.core.inspect.call(null,data,om.core.value.call(null,k))),React.DOM.span({"style": {"width": "1em", "display": "inline-block"}}),React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": ("val "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_class))},ankha.core.inspect.call(null,data,om.core.value.call(null,v))))));
{
var G__17987 = (i__17981 + (1));
i__17981 = G__17987;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17982),iter__17979.call(null,cljs.core.chunk_rest.call(null,s__17980__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17982),null);
}
} else
{var vec__17986 = cljs.core.first.call(null,s__17980__$2);var k = cljs.core.nth.call(null,vec__17986,(0),null);var v = cljs.core.nth.call(null,vec__17986,(1),null);return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.div({"style": {"position": "relative"}, "className": ("entry "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(entry_class))},React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": ("key "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_class))},ankha.core.inspect.call(null,data,om.core.value.call(null,k))),React.DOM.span({"style": {"width": "1em", "display": "inline-block"}}),React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": ("val "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_class))},ankha.core.inspect.call(null,data,om.core.value.call(null,v))))),iter__17979.call(null,cljs.core.rest.call(null,s__17980__$2)));
}
} else
{return null;
}
break;
}
});})(map__17978,map__17978__$1,val_class,key_class,entry_class))
,null,null));
});})(map__17978,map__17978__$1,val_class,key_class,entry_class))
;return iter__4268__auto__.call(null,kvs);
})());
});
ankha.core.map__GT_dom = (function map__GT_dom(data,m){return ankha.core.associative__GT_dom.call(null,data,m,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry-class","entry-class",144705573),"map-entry",new cljs.core.Keyword(null,"key-class","key-class",764049336),"map-key",new cljs.core.Keyword(null,"val-class","val-class",-997529322),"map-val"], null));
});
ankha.core.object__GT_dom = (function object__GT_dom(data,o){var _ = cljs.core.zipmap.call(null,goog.object.getKeys(o),goog.object.getValues(o));var ___$1 = ankha.core.associative__GT_dom.call(null,data,_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry-class","entry-class",144705573),"object-entry",new cljs.core.Keyword(null,"key-class","key-class",764049336),"object-key",new cljs.core.Keyword(null,"val-class","val-class",-997529322),"object-val"], null));return ___$1;
});
ankha.core.coll__GT_dom = (function coll__GT_dom(data,v){return cljs.core.into_array.call(null,(function (){var iter__4268__auto__ = (function iter__17992(s__17993){return (new cljs.core.LazySeq(null,(function (){var s__17993__$1 = s__17993;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17993__$1);if(temp__4126__auto__)
{var s__17993__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17993__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__17993__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__17995 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__17994 = (0);while(true){
if((i__17994 < size__4267__auto__))
{var x = cljs.core._nth.call(null,c__4266__auto__,i__17994);cljs.core.chunk_append.call(null,b__17995,React.DOM.li({"className": "entry"},ankha.core.inspect.call(null,data,om.core.value.call(null,x))));
{
var G__17996 = (i__17994 + (1));
i__17994 = G__17996;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17995),iter__17992.call(null,cljs.core.chunk_rest.call(null,s__17993__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17995),null);
}
} else
{var x = cljs.core.first.call(null,s__17993__$2);return cljs.core.cons.call(null,React.DOM.li({"className": "entry"},ankha.core.inspect.call(null,data,om.core.value.call(null,x))),iter__17992.call(null,cljs.core.rest.call(null,s__17993__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,v);
})());
});
ankha.core.toggle_button = (function toggle_button(owner,p__17997){var map__17999 = p__17997;var map__17999__$1 = ((cljs.core.seq_QMARK_.call(null,map__17999))?cljs.core.apply.call(null,cljs.core.hash_map,map__17999):map__17999);var disable_QMARK_ = cljs.core.get.call(null,map__17999__$1,new cljs.core.Keyword(null,"disable?","disable?",1101284546));return React.DOM.button({"style": {"border": "none", "display": "inline-block", "outline": "none", "verticalAlign": "top", "fontWeight": "bold", "padding": "0", "opacity": (cljs.core.truth_(disable_QMARK_)?"0.5":"1.0"), "cursor": "pointer", "background": "none"}, "onClick": ((function (map__17999,map__17999__$1,disable_QMARK_){
return (function (_){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125))));
});})(map__17999,map__17999__$1,disable_QMARK_))
, "disabled": disable_QMARK_, "className": "toggle-button"},(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125)))?"-":"+"));
});
ankha.core.view = (function view(data,owner,p__18000){var map__18005 = p__18000;var map__18005__$1 = ((cljs.core.seq_QMARK_.call(null,map__18005))?cljs.core.apply.call(null,cljs.core.hash_map,map__18005):map__18005);var opts = map__18005__$1;var closer = cljs.core.get.call(null,map__18005__$1,new cljs.core.Keyword(null,"closer","closer",10992481));var opener = cljs.core.get.call(null,map__18005__$1,new cljs.core.Keyword(null,"opener","opener",1027381943));var class$ = cljs.core.get.call(null,map__18005__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(data);var value_QMARK_ = ankha.core.empty_QMARK_.call(null,value);var open_QMARK_ = ((function (value,value_QMARK_,map__18005,map__18005__$1,opts,closer,opener,class$){
return (function (){return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(value,value_QMARK_,map__18005,map__18005__$1,opts,closer,opener,class$))
;if(typeof ankha.core.t18006 !== 'undefined')
{} else
{
/**
* @constructor
*/
ankha.core.t18006 = (function (owner,view,data,closer,map__18005,value,value_QMARK_,class$,open_QMARK_,opts,opener,p__18000,meta18007){
this.owner = owner;
this.view = view;
this.data = data;
this.closer = closer;
this.map__18005 = map__18005;
this.value = value;
this.value_QMARK_ = value_QMARK_;
this.class$ = class$;
this.open_QMARK_ = open_QMARK_;
this.opts = opts;
this.opener = opener;
this.p__18000 = p__18000;
this.meta18007 = meta18007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ankha.core.t18006.cljs$lang$type = true;
ankha.core.t18006.cljs$lang$ctorStr = "ankha.core/t18006";
ankha.core.t18006.cljs$lang$ctorPrWriter = ((function (value,value_QMARK_,open_QMARK_,map__18005,map__18005__$1,opts,closer,opener,class$){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"ankha.core/t18006");
});})(value,value_QMARK_,open_QMARK_,map__18005,map__18005__$1,opts,closer,opener,class$))
;
ankha.core.t18006.prototype.om$core$IRender$ = true;
ankha.core.t18006.prototype.om$core$IRender$render$arity$1 = ((function (value,value_QMARK_,open_QMARK_,map__18005,map__18005__$1,opts,closer,opener,class$){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": self__.class$},ankha.core.toggle_button.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable?","disable?",1101284546),self__.value_QMARK_], null)),React.DOM.span({"style": {"display": "inline-block"}, "className": "opener"},self__.opener),React.DOM.ul({"style": {"margin": "0", "listStyleType": "none", "display": (cljs.core.truth_(self__.open_QMARK_.call(null))?"block":"none")}, "className": "values"},(function (){var f = ((cljs.core.map_QMARK_.call(null,self__.value))?ankha.core.map__GT_dom:((cljs.core.object_QMARK_.call(null,self__.value))?ankha.core.object__GT_dom:((new cljs.core.Keyword(null,"else","else",-1508377146))?ankha.core.coll__GT_dom:null)));return f.call(null,self__.data,self__.value);
})()),React.DOM.span({"style": {"display": (cljs.core.truth_(self__.open_QMARK_.call(null))?"none":(cljs.core.truth_(self__.value_QMARK_)?"none":((new cljs.core.Keyword(null,"else","else",-1508377146))?"inline":null)))}, "className": "ellipsis"},"\u2026"),React.DOM.span({"style": {"display": ((cljs.core.not.call(null,self__.value_QMARK_))?"inline-block":(cljs.core.truth_(self__.open_QMARK_.call(null))?"block":((new cljs.core.Keyword(null,"else","else",-1508377146))?"inline-block":null)))}, "className": "closer"},self__.closer));
});})(value,value_QMARK_,open_QMARK_,map__18005,map__18005__$1,opts,closer,opener,class$))
;
ankha.core.t18006.prototype.om$core$IInitState$ = true;
ankha.core.t18006.prototype.om$core$IInitState$init_state$arity$1 = ((function (value,value_QMARK_,open_QMARK_,map__18005,map__18005__$1,opts,closer,opener,class$){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),(!(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(self__.opts) === false)) && (cljs.core.not.call(null,self__.value_QMARK_))], null);
});})(value,value_QMARK_,open_QMARK_,map__18005,map__18005__$1,opts,closer,opener,class$))
;
ankha.core.t18006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (value,value_QMARK_,open_QMARK_,map__18005,map__18005__$1,opts,closer,opener,class$){
return (function (_18008){var self__ = this;
var _18008__$1 = this;return self__.meta18007;
});})(value,value_QMARK_,open_QMARK_,map__18005,map__18005__$1,opts,closer,opener,class$))
;
ankha.core.t18006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (value,value_QMARK_,open_QMARK_,map__18005,map__18005__$1,opts,closer,opener,class$){
return (function (_18008,meta18007__$1){var self__ = this;
var _18008__$1 = this;return (new ankha.core.t18006(self__.owner,self__.view,self__.data,self__.closer,self__.map__18005,self__.value,self__.value_QMARK_,self__.class$,self__.open_QMARK_,self__.opts,self__.opener,self__.p__18000,meta18007__$1));
});})(value,value_QMARK_,open_QMARK_,map__18005,map__18005__$1,opts,closer,opener,class$))
;
ankha.core.__GT_t18006 = ((function (value,value_QMARK_,open_QMARK_,map__18005,map__18005__$1,opts,closer,opener,class$){
return (function __GT_t18006(owner__$1,view__$1,data__$1,closer__$1,map__18005__$2,value__$1,value_QMARK___$1,class$__$1,open_QMARK___$1,opts__$1,opener__$1,p__18000__$1,meta18007){return (new ankha.core.t18006(owner__$1,view__$1,data__$1,closer__$1,map__18005__$2,value__$1,value_QMARK___$1,class$__$1,open_QMARK___$1,opts__$1,opener__$1,p__18000__$1,meta18007));
});})(value,value_QMARK_,open_QMARK_,map__18005,map__18005__$1,opts,closer,opener,class$))
;
}
return (new ankha.core.t18006(owner,view,data,closer,map__18005__$1,value,value_QMARK_,class$,open_QMARK_,opts,opener,p__18000,null));
});
ankha.core.inspector = (function() {
var inspector = null;
var inspector__2 = (function (data,owner){return inspector.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inspector"], null)], null));
});
var inspector__3 = (function (data,owner,opts){var map__18013 = opts;var map__18013__$1 = ((cljs.core.seq_QMARK_.call(null,map__18013))?cljs.core.apply.call(null,cljs.core.hash_map,map__18013):map__18013);var class$ = cljs.core.get.call(null,map__18013__$1,new cljs.core.Keyword(null,"class","class",-2030961996),"inspector");if(typeof ankha.core.t18014 !== 'undefined')
{} else
{
/**
* @constructor
*/
ankha.core.t18014 = (function (class$,map__18013,opts,owner,data,inspector,meta18015){
this.class$ = class$;
this.map__18013 = map__18013;
this.opts = opts;
this.owner = owner;
this.data = data;
this.inspector = inspector;
this.meta18015 = meta18015;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ankha.core.t18014.cljs$lang$type = true;
ankha.core.t18014.cljs$lang$ctorStr = "ankha.core/t18014";
ankha.core.t18014.cljs$lang$ctorPrWriter = ((function (map__18013,map__18013__$1,class$){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"ankha.core/t18014");
});})(map__18013,map__18013__$1,class$))
;
ankha.core.t18014.prototype.om$core$IRender$ = true;
ankha.core.t18014.prototype.om$core$IRender$render$arity$1 = ((function (map__18013,map__18013__$1,class$){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"style": {"overflowX": "scroll", "width": "100%", "whiteSpace": "pre-wrap", "fontFamily": "monospace"}, "className": "inspector"},ankha.core.inspect.call(null,self__.data,om.core.value.call(null,self__.data)));
});})(map__18013,map__18013__$1,class$))
;
ankha.core.t18014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18013,map__18013__$1,class$){
return (function (_18016){var self__ = this;
var _18016__$1 = this;return self__.meta18015;
});})(map__18013,map__18013__$1,class$))
;
ankha.core.t18014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18013,map__18013__$1,class$){
return (function (_18016,meta18015__$1){var self__ = this;
var _18016__$1 = this;return (new ankha.core.t18014(self__.class$,self__.map__18013,self__.opts,self__.owner,self__.data,self__.inspector,meta18015__$1));
});})(map__18013,map__18013__$1,class$))
;
ankha.core.__GT_t18014 = ((function (map__18013,map__18013__$1,class$){
return (function __GT_t18014(class$__$1,map__18013__$2,opts__$1,owner__$1,data__$1,inspector__$1,meta18015){return (new ankha.core.t18014(class$__$1,map__18013__$2,opts__$1,owner__$1,data__$1,inspector__$1,meta18015));
});})(map__18013,map__18013__$1,class$))
;
}
return (new ankha.core.t18014(class$,map__18013__$1,opts,owner,data,inspector,null));
});
inspector = function(data,owner,opts){
switch(arguments.length){
case 2:
return inspector__2.call(this,data,owner);
case 3:
return inspector__3.call(this,data,owner,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
inspector.cljs$core$IFn$_invoke$arity$2 = inspector__2;
inspector.cljs$core$IFn$_invoke$arity$3 = inspector__3;
return inspector;
})()
;

//# sourceMappingURL=core.js.map