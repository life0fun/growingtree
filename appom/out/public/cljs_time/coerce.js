// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('goog.date');
goog.require('cljs_time.format');

cljs_time.coerce.ICoerce = (function (){var obj34739 = {};
return obj34739;
})();

cljs_time.coerce.to_date_time = (function to_date_time(obj){
if((function (){var and__3795__auto__ = obj;
if(and__3795__auto__){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1;
} else {
return and__3795__auto__;
}
})()){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__4451__auto__ = (((obj == null))?null:obj);
return (function (){var or__3807__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4451__auto__)]);
if(or__3807__auto__){
return or__3807__auto__;
} else {
var or__3807__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(or__3807__auto____$1){
return or__3807__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
})().call(null,obj);
}
});

/**
* Returns a DateTime instance in the UTC time zone corresponding to the given
* number of milliseconds after the Unix epoch.
*/
cljs_time.coerce.from_long = (function from_long(millis){
var G__34741 = (new goog.date.UtcDateTime());
G__34741.setTime(millis);

return G__34741;
});
/**
* Returns DateTime instance from string using formatters in clj-time.format,
* returning first which parses
*/
cljs_time.coerce.from_string = (function from_string(s){
return cljs.core.first.call(null,(function (){var iter__4563__auto__ = (function iter__34750(s__34751){
return (new cljs.core.LazySeq(null,(function (){
var s__34751__$1 = s__34751;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34751__$1);
if(temp__4126__auto__){
var s__34751__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34751__$2)){
var c__4561__auto__ = cljs.core.chunk_first.call(null,s__34751__$2);
var size__4562__auto__ = cljs.core.count.call(null,c__4561__auto__);
var b__34753 = cljs.core.chunk_buffer.call(null,size__4562__auto__);
if((function (){var i__34752 = (0);
while(true){
if((i__34752 < size__4562__auto__)){
var f = cljs.core._nth.call(null,c__4561__auto__,i__34752);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e34756){if((e34756 instanceof Error)){
var _ = e34756;
return null;
} else {
throw e34756;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__34753,d);

var G__34758 = (i__34752 + (1));
i__34752 = G__34758;
continue;
} else {
var G__34759 = (i__34752 + (1));
i__34752 = G__34759;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34753),iter__34750.call(null,cljs.core.chunk_rest.call(null,s__34751__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34753),null);
}
} else {
var f = cljs.core.first.call(null,s__34751__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e34757){if((e34757 instanceof Error)){
var _ = e34757;
return null;
} else {
throw e34757;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,iter__34750.call(null,cljs.core.rest.call(null,s__34751__$2)));
} else {
var G__34760 = cljs.core.rest.call(null,s__34751__$2);
s__34751__$1 = G__34760;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4563__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
});
/**
* Returns a DateTime instance in the UTC time zone corresponding to the given
* Java Date object.
*/
cljs_time.coerce.from_date = (function from_date(date){
return cljs_time.coerce.from_long.call(null,date.getTime());
});
/**
* Convert `obj` to the number of milliseconds after the Unix epoch.
*/
cljs_time.coerce.to_long = (function to_long(obj){
var temp__4124__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4124__auto__)){
var dt = temp__4124__auto__;
return dt.getTime();
} else {
return null;
}
});
/**
* Convert `obj` to Unix epoch.
*/
cljs_time.coerce.to_epoch = (function to_epoch(obj){
var millis = cljs_time.coerce.to_long.call(null,obj);
var and__3795__auto__ = millis;
if(cljs.core.truth_(and__3795__auto__)){
return (millis / (1000));
} else {
return and__3795__auto__;
}
});
/**
* Convert `obj` to a JavaScript Date instance.
*/
cljs_time.coerce.to_date = (function to_date(obj){
var temp__4124__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4124__auto__)){
var dt = temp__4124__auto__;
return (new Date(dt.getTime()));
} else {
return null;
}
});
/**
* Returns a string representation of obj in UTC time-zone
* using (ISODateTimeFormat/dateTime) date-time representation.
*/
cljs_time.coerce.to_string = (function to_string(obj){
var temp__4124__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4124__auto__)){
var dt = temp__4124__auto__;
return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),dt);
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string.call(null,string);
}));

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long.call(null,long$);
}));

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_midnight){
var date_midnight__$1 = this;
var G__34761 = date_midnight__$1;
G__34761.set(date_midnight__$1);

return G__34761;
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

Date.prototype.cljs_time$coerce$ICoerce$ = true;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date.call(null,date__$1);
});

(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

//# sourceMappingURL=coerce.js.map