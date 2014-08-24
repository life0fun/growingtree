// Compiled by ClojureScript 0.0-2277
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('goog.date');
goog.require('goog.date');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
cljs_time.coerce.ICoerce = (function (){var obj18279 = {};return obj18279;
})();
cljs_time.coerce.to_date_time = (function to_date_time(obj){if((function (){var and__3531__auto__ = obj;if(and__3531__auto__)
{return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1;
} else
{return and__3531__auto__;
}
})())
{return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else
{var x__4170__auto__ = (((obj == null))?null:obj);return (function (){var or__3543__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs_time.coerce.to_date_time["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
})().call(null,obj);
}
});
/**
* Returns a DateTime instance in the UTC time zone corresponding to the given
* number of milliseconds after the Unix epoch.
*/
cljs_time.coerce.from_long = (function from_long(millis){var G__18281 = (new goog.date.UtcDateTime());G__18281.setTime(millis);
return G__18281;
});
/**
* Returns DateTime instance from string using formatters in clj-time.format,
* returning first which parses
*/
cljs_time.coerce.from_string = (function from_string(s){return cljs.core.first.call(null,(function (){var iter__4268__auto__ = (function iter__18290(s__18291){return (new cljs.core.LazySeq(null,(function (){var s__18291__$1 = s__18291;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18291__$1);if(temp__4126__auto__)
{var s__18291__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18291__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18291__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18293 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18292 = (0);while(true){
if((i__18292 < size__4267__auto__))
{var f = cljs.core._nth.call(null,c__4266__auto__,i__18292);var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e18296){if((e18296 instanceof Error))
{var _ = e18296;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18296;
} else
{return null;
}
}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append.call(null,b__18293,d);
{
var G__18298 = (i__18292 + (1));
i__18292 = G__18298;
continue;
}
} else
{{
var G__18299 = (i__18292 + (1));
i__18292 = G__18299;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18293),iter__18290.call(null,cljs.core.chunk_rest.call(null,s__18291__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18293),null);
}
} else
{var f = cljs.core.first.call(null,s__18291__$2);var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e18297){if((e18297 instanceof Error))
{var _ = e18297;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18297;
} else
{return null;
}
}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons.call(null,d,iter__18290.call(null,cljs.core.rest.call(null,s__18291__$2)));
} else
{{
var G__18300 = cljs.core.rest.call(null,s__18291__$2);
s__18291__$1 = G__18300;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4268__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
});
/**
* Returns a DateTime instance in the UTC time zone corresponding to the given
* Java Date object.
*/
cljs_time.coerce.from_date = (function from_date(date){return cljs_time.coerce.from_long.call(null,date.getTime());
});
/**
* Convert `obj` to the number of milliseconds after the Unix epoch.
*/
cljs_time.coerce.to_long = (function to_long(obj){var temp__4124__auto__ = cljs_time.coerce.to_date_time.call(null,obj);if(cljs.core.truth_(temp__4124__auto__))
{var dt = temp__4124__auto__;return dt.getTime();
} else
{return null;
}
});
/**
* Convert `obj` to Unix epoch.
*/
cljs_time.coerce.to_epoch = (function to_epoch(obj){var millis = cljs_time.coerce.to_long.call(null,obj);var and__3531__auto__ = millis;if(cljs.core.truth_(and__3531__auto__))
{return (millis / (1000));
} else
{return and__3531__auto__;
}
});
/**
* Convert `obj` to a JavaScript Date instance.
*/
cljs_time.coerce.to_date = (function to_date(obj){var temp__4124__auto__ = cljs_time.coerce.to_date_time.call(null,obj);if(cljs.core.truth_(temp__4124__auto__))
{var dt = temp__4124__auto__;return (new Date(dt.getTime()));
} else
{return null;
}
});
/**
* Returns a string representation of obj in UTC time-zone
* using (ISODateTimeFormat/dateTime) date-time representation.
*/
cljs_time.coerce.to_string = (function to_string(obj){var temp__4124__auto__ = cljs_time.coerce.to_date_time.call(null,obj);if(cljs.core.truth_(temp__4124__auto__))
{var dt = temp__4124__auto__;return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),dt);
} else
{return null;
}
});
(cljs_time.coerce.ICoerce["string"] = true);
(cljs_time.coerce.to_date_time["string"] = (function (string){return cljs_time.coerce.from_string.call(null,string);
}));
(cljs_time.coerce.ICoerce["number"] = true);
(cljs_time.coerce.to_date_time["number"] = (function (long$){return cljs_time.coerce.from_long.call(null,long$);
}));
goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = true;
goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_midnight){var date_midnight__$1 = this;var G__18301 = date_midnight__$1;G__18301.set(date_midnight__$1);
return G__18301;
});
goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = true;
goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){var date_time__$1 = this;return date_time__$1;
});
Date.prototype.cljs_time$coerce$ICoerce$ = true;
Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){var date__$1 = this;return cljs_time.coerce.from_date.call(null,date__$1);
});
(cljs_time.coerce.ICoerce["null"] = true);
(cljs_time.coerce.to_date_time["null"] = (function (_){return null;
}));

//# sourceMappingURL=coerce.js.map