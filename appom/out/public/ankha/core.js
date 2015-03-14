// Compiled by ClojureScript 0.0-2850 {}
goog.provide('ankha.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
ankha.core.empty_QMARK_ = (function empty_QMARK_(x){
if(cljs.core.object_QMARK_.call(null,x)){
return goog.object.isEmpty(x);
} else {
return cljs.core.empty_QMARK_.call(null,x);

}
});
ankha.core.record_QMARK_ = (function record_QMARK_(x){
var G__35680 = x;
if(G__35680){
var bit__4488__auto__ = (G__35680.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__4488__auto__) || (G__35680.cljs$core$IRecord$)){
return true;
} else {
if((!G__35680.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__35680);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__35680);
}
});
ankha.core.regex_QMARK_ = (function regex_QMARK_(x){
return (x instanceof RegExp);
});
ankha.core.record_name = (function record_name(r){
return cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.pr_str.call(null,r),"{"));
});
ankha.core.literal = (function literal(class$,x){
return React.DOM.span({"key": x, "className": class$},cljs.core.pr_str.call(null,x));
});
ankha.core.collection = (function collection(cursor,coll,class$,opener,closer){
return om.core.build.call(null,ankha.core.view,om.core.graft.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),coll], null),cursor),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opener","opener",1027381943),opener,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"closer","closer",10992481),closer], null)], null));
});
ankha.core.inspect = (function inspect(cursor,x){
if(typeof x === 'number'){
return ankha.core.literal.call(null,"number",x);
} else {
if((x instanceof cljs.core.Keyword)){
return ankha.core.literal.call(null,"keyword",x);
} else {
if((x instanceof cljs.core.Symbol)){
return ankha.core.literal.call(null,"symbol",x);
} else {
if(typeof x === 'string'){
return ankha.core.literal.call(null,"string",x);
} else {
if(x === true){
return ankha.core.literal.call(null,"boolean",x);
} else {
if(x === false){
return ankha.core.literal.call(null,"boolean",x);
} else {
if((x == null)){
return ankha.core.literal.call(null,"nil",x);
} else {
if(cljs.core.fn_QMARK_.call(null,x)){
return ankha.core.literal.call(null,"function",x);
} else {
if(ankha.core.regex_QMARK_.call(null,x)){
return ankha.core.literal.call(null,"regex",x);
} else {
if(ankha.core.record_QMARK_.call(null,x)){
return ankha.core.collection.call(null,cursor,x,"record",[cljs.core.str(ankha.core.record_name.call(null,x)),cljs.core.str("{")].join(''),"}");
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return ankha.core.collection.call(null,cursor,x,"map","{","}");
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return ankha.core.collection.call(null,cursor,x,"vector","[","]");
} else {
if(cljs.core.set_QMARK_.call(null,x)){
return ankha.core.collection.call(null,cursor,x,"set","#{","}");
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return ankha.core.collection.call(null,cursor,x,"seq ","(",")");
} else {
if(cljs.core.object_QMARK_.call(null,x)){
return ankha.core.collection.call(null,cursor,x,"object","#js {","}");
} else {
if(x instanceof Array){
return ankha.core.collection.call(null,cursor,x,"array","#js [","]");
} else {
return ankha.core.literal.call(null,"literal",x);

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
ankha.core.associative__GT_dom = (function associative__GT_dom(data,kvs,p__35681){
var map__35691 = p__35681;
var map__35691__$1 = ((cljs.core.seq_QMARK_.call(null,map__35691))?cljs.core.apply.call(null,cljs.core.hash_map,map__35691):map__35691);
var val_class = cljs.core.get.call(null,map__35691__$1,new cljs.core.Keyword(null,"val-class","val-class",-997529322));
var key_class = cljs.core.get.call(null,map__35691__$1,new cljs.core.Keyword(null,"key-class","key-class",764049336));
var entry_class = cljs.core.get.call(null,map__35691__$1,new cljs.core.Keyword(null,"entry-class","entry-class",144705573));
return cljs.core.into_array.call(null,(function (){var iter__4563__auto__ = ((function (map__35691,map__35691__$1,val_class,key_class,entry_class){
return (function iter__35692(s__35693){
return (new cljs.core.LazySeq(null,((function (map__35691,map__35691__$1,val_class,key_class,entry_class){
return (function (){
var s__35693__$1 = s__35693;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__35693__$1);
if(temp__4406__auto__){
var s__35693__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35693__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__35693__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__35695 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__35694 = (0);
while(true){
if((i__35694 < size__4562__auto__)){
var vec__35698 = cljs.core._nth.call(null,c__4561__auto__,i__35694);
var k = cljs.core.nth.call(null,vec__35698,(0),null);
var v = cljs.core.nth.call(null,vec__35698,(1),null);
cljs.core.chunk_append.call(null,b__35695,React.DOM.li(null,React.DOM.div({"style": {"position": "relative"}, "className": [cljs.core.str("entry "),cljs.core.str(entry_class)].join('')},React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": [cljs.core.str("key "),cljs.core.str(key_class)].join('')},ankha.core.inspect.call(null,data,om.core.value.call(null,k))),React.DOM.span({"style": {"width": "1em", "display": "inline-block"}}),React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": [cljs.core.str("val "),cljs.core.str(val_class)].join('')},ankha.core.inspect.call(null,data,om.core.value.call(null,v))))));

var G__35700 = (i__35694 + (1));
i__35694 = G__35700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35695),iter__35692.call(null,cljs.core.chunk_rest.call(null,s__35693__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35695),null);
}
} else {
var vec__35699 = cljs.core.first.call(null,s__35693__$2);
var k = cljs.core.nth.call(null,vec__35699,(0),null);
var v = cljs.core.nth.call(null,vec__35699,(1),null);
return cljs.core.cons.call(null,React.DOM.li(null,React.DOM.div({"style": {"position": "relative"}, "className": [cljs.core.str("entry "),cljs.core.str(entry_class)].join('')},React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": [cljs.core.str("key "),cljs.core.str(key_class)].join('')},ankha.core.inspect.call(null,data,om.core.value.call(null,k))),React.DOM.span({"style": {"width": "1em", "display": "inline-block"}}),React.DOM.span({"style": {"verticalAlign": "top", "display": "inline-block"}, "className": [cljs.core.str("val "),cljs.core.str(val_class)].join('')},ankha.core.inspect.call(null,data,om.core.value.call(null,v))))),iter__35692.call(null,cljs.core.rest.call(null,s__35693__$2)));
}
} else {
return null;
}
break;
}
});})(map__35691,map__35691__$1,val_class,key_class,entry_class))
,null,null));
});})(map__35691,map__35691__$1,val_class,key_class,entry_class))
;
return iter__4563__auto__.call(null,kvs);
})());
});
ankha.core.map__GT_dom = (function map__GT_dom(data,m){
return ankha.core.associative__GT_dom.call(null,data,m,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry-class","entry-class",144705573),"map-entry",new cljs.core.Keyword(null,"key-class","key-class",764049336),"map-key",new cljs.core.Keyword(null,"val-class","val-class",-997529322),"map-val"], null));
});
ankha.core.object__GT_dom = (function object__GT_dom(data,o){
var _ = cljs.core.zipmap.call(null,goog.object.getKeys(o),goog.object.getValues(o));
var ___$1 = ankha.core.associative__GT_dom.call(null,data,_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry-class","entry-class",144705573),"object-entry",new cljs.core.Keyword(null,"key-class","key-class",764049336),"object-key",new cljs.core.Keyword(null,"val-class","val-class",-997529322),"object-val"], null));
return ___$1;
});
ankha.core.coll__GT_dom = (function coll__GT_dom(data,v){
return cljs.core.into_array.call(null,(function (){var iter__4563__auto__ = (function iter__35705(s__35706){
return (new cljs.core.LazySeq(null,(function (){
var s__35706__$1 = s__35706;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__35706__$1);
if(temp__4406__auto__){
var s__35706__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35706__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__35706__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__35708 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__35707 = (0);
while(true){
if((i__35707 < size__4562__auto__)){
var x = cljs.core._nth.call(null,c__4561__auto__,i__35707);
cljs.core.chunk_append.call(null,b__35708,React.DOM.li({"className": "entry"},ankha.core.inspect.call(null,data,om.core.value.call(null,x))));

var G__35709 = (i__35707 + (1));
i__35707 = G__35709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35708),iter__35705.call(null,cljs.core.chunk_rest.call(null,s__35706__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35708),null);
}
} else {
var x = cljs.core.first.call(null,s__35706__$2);
return cljs.core.cons.call(null,React.DOM.li({"className": "entry"},ankha.core.inspect.call(null,data,om.core.value.call(null,x))),iter__35705.call(null,cljs.core.rest.call(null,s__35706__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4563__auto__.call(null,v);
})());
});
ankha.core.toggle_button = (function toggle_button(owner,p__35710){
var map__35712 = p__35710;
var map__35712__$1 = ((cljs.core.seq_QMARK_.call(null,map__35712))?cljs.core.apply.call(null,cljs.core.hash_map,map__35712):map__35712);
var disable_QMARK_ = cljs.core.get.call(null,map__35712__$1,new cljs.core.Keyword(null,"disable?","disable?",1101284546));
return React.DOM.button({"style": {"border": "none", "display": "inline-block", "outline": "none", "verticalAlign": "top", "fontWeight": "bold", "padding": "0", "opacity": (cljs.core.truth_(disable_QMARK_)?"0.5":"1.0"), "cursor": "pointer", "background": "none"}, "onClick": ((function (map__35712,map__35712__$1,disable_QMARK_){
return (function (_){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125))));
});})(map__35712,map__35712__$1,disable_QMARK_))
, "disabled": disable_QMARK_, "className": "toggle-button"},(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125)))?"-":"+"));
});
ankha.core.view = (function view(data,owner,p__35713){
var map__35718 = p__35713;
var map__35718__$1 = ((cljs.core.seq_QMARK_.call(null,map__35718))?cljs.core.apply.call(null,cljs.core.hash_map,map__35718):map__35718);
var opts = map__35718__$1;
var closer = cljs.core.get.call(null,map__35718__$1,new cljs.core.Keyword(null,"closer","closer",10992481));
var opener = cljs.core.get.call(null,map__35718__$1,new cljs.core.Keyword(null,"opener","opener",1027381943));
var class$ = cljs.core.get.call(null,map__35718__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(data);
var value_QMARK_ = ankha.core.empty_QMARK_.call(null,value);
var open_QMARK_ = ((function (value,value_QMARK_,map__35718,map__35718__$1,opts,closer,opener,class$){
return (function (){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(value,value_QMARK_,map__35718,map__35718__$1,opts,closer,opener,class$))
;
if(typeof ankha.core.t35719 !== 'undefined'){
} else {

/**
* @constructor
*/
ankha.core.t35719 = (function (p__35713,owner,view,data,closer,value,map__35718,value_QMARK_,class$,open_QMARK_,opts,opener,meta35720){
this.p__35713 = p__35713;
this.owner = owner;
this.view = view;
this.data = data;
this.closer = closer;
this.value = value;
this.map__35718 = map__35718;
this.value_QMARK_ = value_QMARK_;
this.class$ = class$;
this.open_QMARK_ = open_QMARK_;
this.opts = opts;
this.opener = opener;
this.meta35720 = meta35720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ankha.core.t35719.prototype.om$core$IRender$ = true;

ankha.core.t35719.prototype.om$core$IRender$render$arity$1 = ((function (value,value_QMARK_,open_QMARK_,map__35718,map__35718__$1,opts,closer,opener,class$){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": self__.class$},ankha.core.toggle_button.call(null,self__.owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable?","disable?",1101284546),self__.value_QMARK_], null)),React.DOM.span({"style": {"display": "inline-block"}, "className": "opener"},self__.opener),React.DOM.ul({"style": {"margin": "0", "listStyleType": "none", "display": (cljs.core.truth_(self__.open_QMARK_.call(null))?"block":"none")}, "className": "values"},(function (){var f = ((cljs.core.map_QMARK_.call(null,self__.value))?ankha.core.map__GT_dom:((cljs.core.object_QMARK_.call(null,self__.value))?ankha.core.object__GT_dom:ankha.core.coll__GT_dom
));
return f.call(null,self__.data,self__.value);
})()),React.DOM.span({"style": {"display": (cljs.core.truth_(self__.open_QMARK_.call(null))?"none":(cljs.core.truth_(self__.value_QMARK_)?"none":"inline"
))}, "className": "ellipsis"},"\u2026"),React.DOM.span({"style": {"display": ((cljs.core.not.call(null,self__.value_QMARK_))?"inline-block":(cljs.core.truth_(self__.open_QMARK_.call(null))?"block":"inline-block"
))}, "className": "closer"},self__.closer));
});})(value,value_QMARK_,open_QMARK_,map__35718,map__35718__$1,opts,closer,opener,class$))
;

ankha.core.t35719.prototype.om$core$IInitState$ = true;

ankha.core.t35719.prototype.om$core$IInitState$init_state$arity$1 = ((function (value,value_QMARK_,open_QMARK_,map__35718,map__35718__$1,opts,closer,opener,class$){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),(!(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(self__.opts) === false)) && (cljs.core.not.call(null,self__.value_QMARK_))], null);
});})(value,value_QMARK_,open_QMARK_,map__35718,map__35718__$1,opts,closer,opener,class$))
;

ankha.core.t35719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (value,value_QMARK_,open_QMARK_,map__35718,map__35718__$1,opts,closer,opener,class$){
return (function (_35721){
var self__ = this;
var _35721__$1 = this;
return self__.meta35720;
});})(value,value_QMARK_,open_QMARK_,map__35718,map__35718__$1,opts,closer,opener,class$))
;

ankha.core.t35719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (value,value_QMARK_,open_QMARK_,map__35718,map__35718__$1,opts,closer,opener,class$){
return (function (_35721,meta35720__$1){
var self__ = this;
var _35721__$1 = this;
return (new ankha.core.t35719(self__.p__35713,self__.owner,self__.view,self__.data,self__.closer,self__.value,self__.map__35718,self__.value_QMARK_,self__.class$,self__.open_QMARK_,self__.opts,self__.opener,meta35720__$1));
});})(value,value_QMARK_,open_QMARK_,map__35718,map__35718__$1,opts,closer,opener,class$))
;

ankha.core.t35719.cljs$lang$type = true;

ankha.core.t35719.cljs$lang$ctorStr = "ankha.core/t35719";

ankha.core.t35719.cljs$lang$ctorPrWriter = ((function (value,value_QMARK_,open_QMARK_,map__35718,map__35718__$1,opts,closer,opener,class$){
return (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"ankha.core/t35719");
});})(value,value_QMARK_,open_QMARK_,map__35718,map__35718__$1,opts,closer,opener,class$))
;

ankha.core.__GT_t35719 = ((function (value,value_QMARK_,open_QMARK_,map__35718,map__35718__$1,opts,closer,opener,class$){
return (function __GT_t35719(p__35713__$1,owner__$1,view__$1,data__$1,closer__$1,value__$1,map__35718__$2,value_QMARK___$1,class$__$1,open_QMARK___$1,opts__$1,opener__$1,meta35720){
return (new ankha.core.t35719(p__35713__$1,owner__$1,view__$1,data__$1,closer__$1,value__$1,map__35718__$2,value_QMARK___$1,class$__$1,open_QMARK___$1,opts__$1,opener__$1,meta35720));
});})(value,value_QMARK_,open_QMARK_,map__35718,map__35718__$1,opts,closer,opener,class$))
;

}

return (new ankha.core.t35719(p__35713,owner,view,data,closer,value,map__35718__$1,value_QMARK_,class$,open_QMARK_,opts,opener,cljs.core.PersistentArrayMap.EMPTY));
});
ankha.core.inspector = (function() {
var inspector = null;
var inspector__2 = (function (data,owner){
return inspector.call(null,data,owner,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inspector"], null)], null));
});
var inspector__3 = (function (data,owner,opts){
var map__35726 = opts;
var map__35726__$1 = ((cljs.core.seq_QMARK_.call(null,map__35726))?cljs.core.apply.call(null,cljs.core.hash_map,map__35726):map__35726);
var class$ = cljs.core.get.call(null,map__35726__$1,new cljs.core.Keyword(null,"class","class",-2030961996),"inspector");
if(typeof ankha.core.t35727 !== 'undefined'){
} else {

/**
* @constructor
*/
ankha.core.t35727 = (function (class$,map__35726,opts,owner,data,inspector,meta35728){
this.class$ = class$;
this.map__35726 = map__35726;
this.opts = opts;
this.owner = owner;
this.data = data;
this.inspector = inspector;
this.meta35728 = meta35728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
ankha.core.t35727.prototype.om$core$IRender$ = true;

ankha.core.t35727.prototype.om$core$IRender$render$arity$1 = ((function (map__35726,map__35726__$1,class$){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"style": {"overflowX": "scroll", "width": "100%", "whiteSpace": "pre-wrap", "fontFamily": "monospace"}, "className": "inspector"},ankha.core.inspect.call(null,self__.data,om.core.value.call(null,self__.data)));
});})(map__35726,map__35726__$1,class$))
;

ankha.core.t35727.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35726,map__35726__$1,class$){
return (function (_35729){
var self__ = this;
var _35729__$1 = this;
return self__.meta35728;
});})(map__35726,map__35726__$1,class$))
;

ankha.core.t35727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35726,map__35726__$1,class$){
return (function (_35729,meta35728__$1){
var self__ = this;
var _35729__$1 = this;
return (new ankha.core.t35727(self__.class$,self__.map__35726,self__.opts,self__.owner,self__.data,self__.inspector,meta35728__$1));
});})(map__35726,map__35726__$1,class$))
;

ankha.core.t35727.cljs$lang$type = true;

ankha.core.t35727.cljs$lang$ctorStr = "ankha.core/t35727";

ankha.core.t35727.cljs$lang$ctorPrWriter = ((function (map__35726,map__35726__$1,class$){
return (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"ankha.core/t35727");
});})(map__35726,map__35726__$1,class$))
;

ankha.core.__GT_t35727 = ((function (map__35726,map__35726__$1,class$){
return (function __GT_t35727(class$__$1,map__35726__$2,opts__$1,owner__$1,data__$1,inspector__$1,meta35728){
return (new ankha.core.t35727(class$__$1,map__35726__$2,opts__$1,owner__$1,data__$1,inspector__$1,meta35728));
});})(map__35726,map__35726__$1,class$))
;

}

return (new ankha.core.t35727(class$,map__35726__$1,opts,owner,data,inspector,cljs.core.PersistentArrayMap.EMPTY));
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