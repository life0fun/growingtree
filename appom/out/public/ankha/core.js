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
ankha.core.record_QMARK_ = (function record_QMARK_(x){var G__17335 = x;if(G__17335)
{var bit__4093__auto__ = (G__17335.cljs$lang$protocol_mask$partition0$ & 67108864);if((bit__4093__auto__) || (G__17335.cljs$core$IRecord$))
{return true;
} else
{if((!G__17335.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__17335);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__17335);
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
ankha.core.associative__GT_dom = (function associative__GT_dom(data,kvs,p__17336){var map__17346 = p__17336;var map__17346__$1 = ((cljs.core.seq_QMARK_.call(null,map__17346))?cljs.core.apply.call(null,cljs.core.hash_map,map__17346):map__17346);var val_class = cljs.core.get.call(null,map__17346__$1,new cljs.core.Keyword(null,"val-class","val-class",2480724798));var key_class = cljs.core.get.call(null,map__17346__$1,new cljs.core.Keyword(null,"key-class","key-class",2216807420));var entry_class = cljs.core.get.call(null,map__17346__$1,new cljs.core.Keyword(null,"entry-class","entry-class",3066174415));return cljs.core.into_array.call(null,(function (){var iter__4160__auto__ = (function iter__17347(s__17348){return (new cljs.core.LazySeq(null,(function (){var s__17348__$1 = s__17348;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17348__$1);if(temp__4092__auto__)
{var s__17348__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17348__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__17348__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__17350 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__17349 = 0;while(true){
if((i__17349 < size__4159__auto__))
{var vec__17353 = cljs.core._nth.call(null,c__4158__auto__,i__17349);var k = cljs.core.nth.call(null,vec__17353,0,null);var v = cljs.core.nth.call(null,vec__17353,1,null);cljs.core.chunk_append.call(null,b__17350,React.DOM.li(null,React.DOM.div({"style": {"position": "relative"}, "className": [cljs.core.str("entry "),cljs.core.str(entry_class)].join('')},React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": [cljs.core.str("key "),cljs.core.str(key_class)].join('')},ankha.core.inspect.call(null,data,om.core.value.call(null,k))),React.DOM.span({"style": {"width": "1em", "display": "inline-block"}}),React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": [cljs.core.str("val "),cljs.core.str(val_class)].join('')},ankha.core.inspect.call(null,data,om.core.value.call(null,v))))));
{
var G__17355 = (i__17349 + 1);
i__17349 = G__17355;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17350),iter__17347.call(null,cljs.core.chunk_rest.call(null,s__17348__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17350),null);
}
} else
{var vec__17354 = cljs.core.first.call(null,s__17348__$2);var k = cljs.core.nth.call(null,vec__17354,0,null);var v = cljs.core.nth.call(null,vec__17354,1,null);return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.div({"style": {"position": "relative"}, "className": [cljs.core.str("entry "),cljs.core.str(entry_class)].join('')},React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": [cljs.core.str("key "),cljs.core.str(key_class)].join('')},ankha.core.inspect.call(null,data,om.core.value.call(null,k))),React.DOM.span({"style": {"width": "1em", "display": "inline-block"}}),React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": [cljs.core.str("val "),cljs.core.str(val_class)].join('')},ankha.core.inspect.call(null,data,om.core.value.call(null,v))))),iter__17347.call(null,cljs.core.rest.call(null,s__17348__$2)));
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
ankha.core.coll__GT_dom = (function coll__GT_dom(data,v){return cljs.core.into_array.call(null,(function (){var iter__4160__auto__ = (function iter__17360(s__17361){return (new cljs.core.LazySeq(null,(function (){var s__17361__$1 = s__17361;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17361__$1);if(temp__4092__auto__)
{var s__17361__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17361__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__17361__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__17363 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__17362 = 0;while(true){
if((i__17362 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__17362);cljs.core.chunk_append.call(null,b__17363,React.DOM.li({"className": "entry"},ankha.core.inspect.call(null,data,om.core.value.call(null,x))));
{
var G__17364 = (i__17362 + 1);
i__17362 = G__17364;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17363),iter__17360.call(null,cljs.core.chunk_rest.call(null,s__17361__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17363),null);
}
} else
{var x = cljs.core.first.call(null,s__17361__$2);return cljs.core.cons.call(null,React.DOM.li({"className": "entry"},ankha.core.inspect.call(null,data,om.core.value.call(null,x))),iter__17360.call(null,cljs.core.rest.call(null,s__17361__$2)));
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
ankha.core.toggle_button = (function toggle_button(owner,p__17365){var map__17367 = p__17365;var map__17367__$1 = ((cljs.core.seq_QMARK_.call(null,map__17367))?cljs.core.apply.call(null,cljs.core.hash_map,map__17367):map__17367);var disable_QMARK_ = cljs.core.get.call(null,map__17367__$1,new cljs.core.Keyword(null,"disable?","disable?",1284845001));return React.DOM.button({"style": {"fontWeight": "bold", "cursor": "pointer", "opacity": (cljs.core.truth_(disable_QMARK_)?"0.5":"1.0"), "padding": "0", "display": "inline-block", "outline": "none", "verticalAlign": "top", "background": "none", "border": "none"}, "onClick": (function (_){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1119852199),cljs.core.not.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1119852199))));
}), "disabled": disable_QMARK_, "className": "toggle-button"},(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1119852199)))?"-":"+"));
});
ankha.core.view = (function view(data,owner,p__17368){var map__17373 = p__17368;var map__17373__$1 = ((cljs.core.seq_QMARK_.call(null,map__17373))?cljs.core.apply.call(null,cljs.core.hash_map,map__17373):map__17373);var opts = map__17373__$1;var closer = cljs.core.get.call(null,map__17373__$1,new cljs.core.Keyword(null,"closer","closer",3951351020));var opener = cljs.core.get.call(null,map__17373__$1,new cljs.core.Keyword(null,"opener","opener",4298292201));var class$ = cljs.core.get.call(null,map__17373__$1,new cljs.core.Keyword(null,"class","class",1108647146));var value = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(data);var value_QMARK_ = ankha.core.empty_QMARK_.call(null,value);var open_QMARK_ = ((function (value,value_QMARK_){
return (function (){return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1119852199));
});})(value,value_QMARK_))
;if(typeof ankha.core.t17374 !== 'undefined')
{} else
{
/**
* @constructor
*/
ankha.core.t17374 = (function (opener,opts,value,p__17368,view,map__17373,data,closer,class$,open_QMARK_,owner,value_QMARK_,meta17375){
this.opener = opener;
this.opts = opts;
this.value = value;
this.p__17368 = p__17368;
this.view = view;
this.map__17373 = map__17373;
this.data = data;
this.closer = closer;
this.class$ = class$;
this.open_QMARK_ = open_QMARK_;
this.owner = owner;
this.value_QMARK_ = value_QMARK_;
this.meta17375 = meta17375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ankha.core.t17374.cljs$lang$type = true;
ankha.core.t17374.cljs$lang$ctorStr = "ankha.core/t17374";
ankha.core.t17374.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"ankha.core/t17374");
});
ankha.core.t17374.prototype.om$core$IRender$ = true;
ankha.core.t17374.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": self__.class$},ankha.core.toggle_button.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable?","disable?",1284845001),self__.value_QMARK_], null)),React.DOM.span({"style": {"display": "inline-block"}, "className": "opener"},self__.opener),React.DOM.ul({"style": {"margin": "0", "listStyleType": "none", "display": (cljs.core.truth_(self__.open_QMARK_.call(null))?"block":"none")}, "className": "values"},(function (){var f = ((cljs.core.map_QMARK_.call(null,self__.value))?ankha.core.map__GT_dom:((cljs.core.object_QMARK_.call(null,self__.value))?ankha.core.object__GT_dom:((new cljs.core.Keyword(null,"else","else",1017020587))?ankha.core.coll__GT_dom:null)));return f.call(null,self__.data,self__.value);
})()),React.DOM.span({"style": {"display": (cljs.core.truth_(self__.open_QMARK_.call(null))?"none":(cljs.core.truth_(self__.value_QMARK_)?"none":((new cljs.core.Keyword(null,"else","else",1017020587))?"inline":null)))}, "className": "ellipsis"},"\u2026"),React.DOM.span({"style": {"display": ((cljs.core.not.call(null,self__.value_QMARK_))?"inline-block":(cljs.core.truth_(self__.open_QMARK_.call(null))?"block":((new cljs.core.Keyword(null,"else","else",1017020587))?"inline-block":null)))}, "className": "closer"},self__.closer));
});
ankha.core.t17374.prototype.om$core$IInitState$ = true;
ankha.core.t17374.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1119852199),(!(new cljs.core.Keyword(null,"open?","open?",1119852199).cljs$core$IFn$_invoke$arity$1(self__.opts) === false)) && (cljs.core.not.call(null,self__.value_QMARK_))], null);
});
ankha.core.t17374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17376){var self__ = this;
var _17376__$1 = this;return self__.meta17375;
});
ankha.core.t17374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17376,meta17375__$1){var self__ = this;
var _17376__$1 = this;return (new ankha.core.t17374(self__.opener,self__.opts,self__.value,self__.p__17368,self__.view,self__.map__17373,self__.data,self__.closer,self__.class$,self__.open_QMARK_,self__.owner,self__.value_QMARK_,meta17375__$1));
});
ankha.core.__GT_t17374 = (function __GT_t17374(opener__$1,opts__$1,value__$1,p__17368__$1,view__$1,map__17373__$2,data__$1,closer__$1,class$__$1,open_QMARK___$1,owner__$1,value_QMARK___$1,meta17375){return (new ankha.core.t17374(opener__$1,opts__$1,value__$1,p__17368__$1,view__$1,map__17373__$2,data__$1,closer__$1,class$__$1,open_QMARK___$1,owner__$1,value_QMARK___$1,meta17375));
});
}
return (new ankha.core.t17374(opener,opts,value,p__17368,view,map__17373__$1,data,closer,class$,open_QMARK_,owner,value_QMARK_,null));
});
ankha.core.inspector = (function() {
var inspector = null;
var inspector__2 = (function (data,owner){return inspector.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"inspector"], null)], null));
});
var inspector__3 = (function (data,owner,opts){var map__17381 = opts;var map__17381__$1 = ((cljs.core.seq_QMARK_.call(null,map__17381))?cljs.core.apply.call(null,cljs.core.hash_map,map__17381):map__17381);var class$ = cljs.core.get.call(null,map__17381__$1,new cljs.core.Keyword(null,"class","class",1108647146),"inspector");if(typeof ankha.core.t17382 !== 'undefined')
{} else
{
/**
* @constructor
*/
ankha.core.t17382 = (function (class$,map__17381,opts,owner,data,inspector,meta17383){
this.class$ = class$;
this.map__17381 = map__17381;
this.opts = opts;
this.owner = owner;
this.data = data;
this.inspector = inspector;
this.meta17383 = meta17383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ankha.core.t17382.cljs$lang$type = true;
ankha.core.t17382.cljs$lang$ctorStr = "ankha.core/t17382";
ankha.core.t17382.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"ankha.core/t17382");
});
ankha.core.t17382.prototype.om$core$IRender$ = true;
ankha.core.t17382.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"style": {"overflowX": "scroll", "width": "100%", "whiteSpace": "pre-wrap", "fontFamily": "monospace"}, "className": "inspector"},ankha.core.inspect.call(null,self__.data,om.core.value.call(null,self__.data)));
});
ankha.core.t17382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17384){var self__ = this;
var _17384__$1 = this;return self__.meta17383;
});
ankha.core.t17382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17384,meta17383__$1){var self__ = this;
var _17384__$1 = this;return (new ankha.core.t17382(self__.class$,self__.map__17381,self__.opts,self__.owner,self__.data,self__.inspector,meta17383__$1));
});
ankha.core.__GT_t17382 = (function __GT_t17382(class$__$1,map__17381__$2,opts__$1,owner__$1,data__$1,inspector__$1,meta17383){return (new ankha.core.t17382(class$__$1,map__17381__$2,opts__$1,owner__$1,data__$1,inspector__$1,meta17383));
});
}
return (new ankha.core.t17382(class$,map__17381__$1,opts,owner,data,inspector,null));
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