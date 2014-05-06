// Compiled by ClojureScript 0.0-2173
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.empty_QMARK_.call(null,x);
} else
{return null;
}
}
});
ankha.core.record_QMARK_ = (function record_QMARK_(x){var G__29089 = x;if(G__29089)
{var bit__4093__auto__ = (G__29089.cljs$lang$protocol_mask$partition0$ & 67108864);if((bit__4093__auto__) || (G__29089.cljs$core$IRecord$))
{return true;
} else
{if((!G__29089.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__29089);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__29089);
}
});
ankha.core.regex_QMARK_ = (function regex_QMARK_(x){return (x instanceof RegExp);
});
ankha.core.record_name = (function record_name(r){return cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.pr_str.call(null,r),"{"));
});
ankha.core.literal = (function literal(class$,x){return React.DOM.span({"key": x, "className": class$},cljs.core.pr_str.call(null,x));
});
ankha.core.collection = (function collection(cursor,coll,class$,opener,closer){return om.core.build.call(null,ankha.core.view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),coll], null),cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opener","opener",4298292201),opener,new cljs.core.Keyword(null,"class","class",1108647146),class$,new cljs.core.Keyword(null,"closer","closer",3951351020),closer], null)], null));
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
{return ankha.core.collection.call(null,cursor,x,"record",[cljs.core.str(ankha.core.record_name.call(null,x)),cljs.core.str("{")].join(''),"}");
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
ankha.core.associative__GT_dom = (function associative__GT_dom(data,kvs,p__29090){var map__29100 = p__29090;var map__29100__$1 = ((cljs.core.seq_QMARK_.call(null,map__29100))?cljs.core.apply.call(null,cljs.core.hash_map,map__29100):map__29100);var val_class = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"val-class","val-class",2480724798));var key_class = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"key-class","key-class",2216807420));var entry_class = cljs.core.get.call(null,map__29100__$1,new cljs.core.Keyword(null,"entry-class","entry-class",3066174415));return cljs.core.into_array.call(null,(function (){var iter__4160__auto__ = (function iter__29101(s__29102){return (new cljs.core.LazySeq(null,(function (){var s__29102__$1 = s__29102;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29102__$1);if(temp__4092__auto__)
{var s__29102__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29102__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__29102__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__29104 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__29103 = 0;while(true){
if((i__29103 < size__4159__auto__))
{var vec__29107 = cljs.core._nth.call(null,c__4158__auto__,i__29103);var k = cljs.core.nth.call(null,vec__29107,0,null);var v = cljs.core.nth.call(null,vec__29107,1,null);cljs.core.chunk_append.call(null,b__29104,React.DOM.li(null,React.DOM.div({"style": {"position": "relative"}, "className": [cljs.core.str("entry "),cljs.core.str(entry_class)].join('')},React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": [cljs.core.str("key "),cljs.core.str(key_class)].join('')},ankha.core.inspect.call(null,data,om.core.value.call(null,k))),React.DOM.span({"style": {"width": "1em", "display": "inline-block"}}),React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": [cljs.core.str("val "),cljs.core.str(val_class)].join('')},ankha.core.inspect.call(null,data,om.core.value.call(null,v))))));
{
var G__29109 = (i__29103 + 1);
i__29103 = G__29109;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29104),iter__29101.call(null,cljs.core.chunk_rest.call(null,s__29102__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29104),null);
}
} else
{var vec__29108 = cljs.core.first.call(null,s__29102__$2);var k = cljs.core.nth.call(null,vec__29108,0,null);var v = cljs.core.nth.call(null,vec__29108,1,null);return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.div({"style": {"position": "relative"}, "className": [cljs.core.str("entry "),cljs.core.str(entry_class)].join('')},React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": [cljs.core.str("key "),cljs.core.str(key_class)].join('')},ankha.core.inspect.call(null,data,om.core.value.call(null,k))),React.DOM.span({"style": {"width": "1em", "display": "inline-block"}}),React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": [cljs.core.str("val "),cljs.core.str(val_class)].join('')},ankha.core.inspect.call(null,data,om.core.value.call(null,v))))),iter__29101.call(null,cljs.core.rest.call(null,s__29102__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,kvs);
})());
});
ankha.core.map__GT_dom = (function map__GT_dom(data,m){return ankha.core.associative__GT_dom.call(null,data,m,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry-class","entry-class",3066174415),"map-entry",new cljs.core.Keyword(null,"key-class","key-class",2216807420),"map-key",new cljs.core.Keyword(null,"val-class","val-class",2480724798),"map-val"], null));
});
ankha.core.object__GT_dom = (function object__GT_dom(data,o){var _ = cljs.core.zipmap.call(null,goog.object.getKeys(o),goog.object.getValues(o));var ___$1 = ankha.core.associative__GT_dom.call(null,data,_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry-class","entry-class",3066174415),"object-entry",new cljs.core.Keyword(null,"key-class","key-class",2216807420),"object-key",new cljs.core.Keyword(null,"val-class","val-class",2480724798),"object-val"], null));return ___$1;
});
ankha.core.coll__GT_dom = (function coll__GT_dom(data,v){return cljs.core.into_array.call(null,(function (){var iter__4160__auto__ = (function iter__29114(s__29115){return (new cljs.core.LazySeq(null,(function (){var s__29115__$1 = s__29115;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__29115__$1);if(temp__4092__auto__)
{var s__29115__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29115__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__29115__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__29117 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__29116 = 0;while(true){
if((i__29116 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__29116);cljs.core.chunk_append.call(null,b__29117,React.DOM.li({"className": "entry"},ankha.core.inspect.call(null,data,om.core.value.call(null,x))));
{
var G__29118 = (i__29116 + 1);
i__29116 = G__29118;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29117),iter__29114.call(null,cljs.core.chunk_rest.call(null,s__29115__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29117),null);
}
} else
{var x = cljs.core.first.call(null,s__29115__$2);return cljs.core.cons.call(null,React.DOM.li({"className": "entry"},ankha.core.inspect.call(null,data,om.core.value.call(null,x))),iter__29114.call(null,cljs.core.rest.call(null,s__29115__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,v);
})());
});
ankha.core.toggle_button = (function toggle_button(owner,p__29119){var map__29121 = p__29119;var map__29121__$1 = ((cljs.core.seq_QMARK_.call(null,map__29121))?cljs.core.apply.call(null,cljs.core.hash_map,map__29121):map__29121);var disable_QMARK_ = cljs.core.get.call(null,map__29121__$1,new cljs.core.Keyword(null,"disable?","disable?",1284845001));return React.DOM.button({"style": {"fontWeight": "bold", "cursor": "pointer", "opacity": (cljs.core.truth_(disable_QMARK_)?"0.5":"1.0"), "padding": "0", "display": "inline-block", "outline": "none", "verticalAlign": "top", "background": "none", "border": "none"}, "onClick": (function (_){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1119852199),cljs.core.not.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1119852199))));
}), "disabled": disable_QMARK_, "className": "toggle-button"},(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1119852199)))?"-":"+"));
});
ankha.core.view = (function view(data,owner,p__29122){var map__29127 = p__29122;var map__29127__$1 = ((cljs.core.seq_QMARK_.call(null,map__29127))?cljs.core.apply.call(null,cljs.core.hash_map,map__29127):map__29127);var opts = map__29127__$1;var closer = cljs.core.get.call(null,map__29127__$1,new cljs.core.Keyword(null,"closer","closer",3951351020));var opener = cljs.core.get.call(null,map__29127__$1,new cljs.core.Keyword(null,"opener","opener",4298292201));var class$ = cljs.core.get.call(null,map__29127__$1,new cljs.core.Keyword(null,"class","class",1108647146));var value = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(data);var value_QMARK_ = ankha.core.empty_QMARK_.call(null,value);var open_QMARK_ = ((function (value,value_QMARK_){
return (function (){return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1119852199));
});})(value,value_QMARK_))
;if(typeof ankha.core.t29128 !== 'undefined')
{} else
{
/**
* @constructor
*/
ankha.core.t29128 = (function (opener,opts,value,view,data,closer,class$,open_QMARK_,owner,value_QMARK_,p__29122,map__29127,meta29129){
this.opener = opener;
this.opts = opts;
this.value = value;
this.view = view;
this.data = data;
this.closer = closer;
this.class$ = class$;
this.open_QMARK_ = open_QMARK_;
this.owner = owner;
this.value_QMARK_ = value_QMARK_;
this.p__29122 = p__29122;
this.map__29127 = map__29127;
this.meta29129 = meta29129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ankha.core.t29128.cljs$lang$type = true;
ankha.core.t29128.cljs$lang$ctorStr = "ankha.core/t29128";
ankha.core.t29128.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"ankha.core/t29128");
});
ankha.core.t29128.prototype.om$core$IRender$ = true;
ankha.core.t29128.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": self__.class$},ankha.core.toggle_button.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable?","disable?",1284845001),self__.value_QMARK_], null)),React.DOM.span({"style": {"display": "inline-block"}, "className": "opener"},self__.opener),React.DOM.ul({"style": {"margin": "0", "listStyleType": "none", "display": (cljs.core.truth_(self__.open_QMARK_.call(null))?"block":"none")}, "className": "values"},(function (){var f = ((cljs.core.map_QMARK_.call(null,self__.value))?ankha.core.map__GT_dom:((cljs.core.object_QMARK_.call(null,self__.value))?ankha.core.object__GT_dom:((new cljs.core.Keyword(null,"else","else",1017020587))?ankha.core.coll__GT_dom:null)));return f.call(null,self__.data,self__.value);
})()),React.DOM.span({"style": {"display": (cljs.core.truth_(self__.open_QMARK_.call(null))?"none":(cljs.core.truth_(self__.value_QMARK_)?"none":((new cljs.core.Keyword(null,"else","else",1017020587))?"inline":null)))}, "className": "ellipsis"},"\u2026"),React.DOM.span({"style": {"display": ((cljs.core.not.call(null,self__.value_QMARK_))?"inline-block":(cljs.core.truth_(self__.open_QMARK_.call(null))?"block":((new cljs.core.Keyword(null,"else","else",1017020587))?"inline-block":null)))}, "className": "closer"},self__.closer));
});
ankha.core.t29128.prototype.om$core$IInitState$ = true;
ankha.core.t29128.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1119852199),(!(new cljs.core.Keyword(null,"open?","open?",1119852199).cljs$core$IFn$_invoke$arity$1(self__.opts) === false)) && (cljs.core.not.call(null,self__.value_QMARK_))], null);
});
ankha.core.t29128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29130){var self__ = this;
var _29130__$1 = this;return self__.meta29129;
});
ankha.core.t29128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29130,meta29129__$1){var self__ = this;
var _29130__$1 = this;return (new ankha.core.t29128(self__.opener,self__.opts,self__.value,self__.view,self__.data,self__.closer,self__.class$,self__.open_QMARK_,self__.owner,self__.value_QMARK_,self__.p__29122,self__.map__29127,meta29129__$1));
});
ankha.core.__GT_t29128 = (function __GT_t29128(opener__$1,opts__$1,value__$1,view__$1,data__$1,closer__$1,class$__$1,open_QMARK___$1,owner__$1,value_QMARK___$1,p__29122__$1,map__29127__$2,meta29129){return (new ankha.core.t29128(opener__$1,opts__$1,value__$1,view__$1,data__$1,closer__$1,class$__$1,open_QMARK___$1,owner__$1,value_QMARK___$1,p__29122__$1,map__29127__$2,meta29129));
});
}
return (new ankha.core.t29128(opener,opts,value,view,data,closer,class$,open_QMARK_,owner,value_QMARK_,p__29122,map__29127__$1,null));
});
ankha.core.inspector = (function() {
var inspector = null;
var inspector__2 = (function (data,owner){return inspector.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"inspector"], null)], null));
});
var inspector__3 = (function (data,owner,opts){var map__29135 = opts;var map__29135__$1 = ((cljs.core.seq_QMARK_.call(null,map__29135))?cljs.core.apply.call(null,cljs.core.hash_map,map__29135):map__29135);var class$ = cljs.core.get.call(null,map__29135__$1,new cljs.core.Keyword(null,"class","class",1108647146),"inspector");if(typeof ankha.core.t29136 !== 'undefined')
{} else
{
/**
* @constructor
*/
ankha.core.t29136 = (function (class$,map__29135,opts,owner,data,inspector,meta29137){
this.class$ = class$;
this.map__29135 = map__29135;
this.opts = opts;
this.owner = owner;
this.data = data;
this.inspector = inspector;
this.meta29137 = meta29137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ankha.core.t29136.cljs$lang$type = true;
ankha.core.t29136.cljs$lang$ctorStr = "ankha.core/t29136";
ankha.core.t29136.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"ankha.core/t29136");
});
ankha.core.t29136.prototype.om$core$IRender$ = true;
ankha.core.t29136.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"style": {"overflowX": "scroll", "width": "100%", "whiteSpace": "pre-wrap", "fontFamily": "monospace"}, "className": "inspector"},ankha.core.inspect.call(null,self__.data,om.core.value.call(null,self__.data)));
});
ankha.core.t29136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29138){var self__ = this;
var _29138__$1 = this;return self__.meta29137;
});
ankha.core.t29136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29138,meta29137__$1){var self__ = this;
var _29138__$1 = this;return (new ankha.core.t29136(self__.class$,self__.map__29135,self__.opts,self__.owner,self__.data,self__.inspector,meta29137__$1));
});
ankha.core.__GT_t29136 = (function __GT_t29136(class$__$1,map__29135__$2,opts__$1,owner__$1,data__$1,inspector__$1,meta29137){return (new ankha.core.t29136(class$__$1,map__29135__$2,opts__$1,owner__$1,data__$1,inspector__$1,meta29137));
});
}
return (new ankha.core.t29136(class$,map__29135__$1,opts,owner,data,inspector,null));
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
