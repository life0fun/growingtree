// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.datetime');
goog.require('cljs.core');
goog.require('goog.i18n.DateTimeFormat.Format');
growingtree_app.datetime.full_date_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.FULL_DATE));
growingtree_app.datetime.full_datetime_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.FULL_DATETIME));
growingtree_app.datetime.full_time_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.FULL_TIME));
growingtree_app.datetime.long_date_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.LONG_DATE));
growingtree_app.datetime.long_datetime_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.LONG_DATETIME));
growingtree_app.datetime.long_time_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.LONG_TIME));
growingtree_app.datetime.medium_date_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.MEDIUM_DATE));
growingtree_app.datetime.medium_datetime_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.MEDIUM_DATETIME));
growingtree_app.datetime.medium_time_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.MEDIUM_TIME));
growingtree_app.datetime.short_date_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.SHORT_DATE));
growingtree_app.datetime.short_datetime_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.SHORT_DATETIME));
growingtree_app.datetime.short_time_format = (new goog.i18n.DateTimeFormat(goog.i18n.DateTimeFormat.Format.SHORT_TIME));
growingtree_app.datetime.format_date = (function format_date(date_format,date){
return date_format.format((new Date(date)));
});
growingtree_app.datetime.full_date = cljs.core.partial.call(null,growingtree_app.datetime.format_date,growingtree_app.datetime.full_date_format);
growingtree_app.datetime.full_datetime_format = cljs.core.partial.call(null,growingtree_app.datetime.format_date,growingtree_app.datetime.full_datetime_format);
growingtree_app.datetime.full_time = cljs.core.partial.call(null,growingtree_app.datetime.format_date,growingtree_app.datetime.full_time_format);
growingtree_app.datetime.long_date = cljs.core.partial.call(null,growingtree_app.datetime.format_date,growingtree_app.datetime.long_date_format);
growingtree_app.datetime.long_datetime = cljs.core.partial.call(null,growingtree_app.datetime.format_date,growingtree_app.datetime.long_datetime_format);
growingtree_app.datetime.long_time = cljs.core.partial.call(null,growingtree_app.datetime.format_date,growingtree_app.datetime.long_time_format);
growingtree_app.datetime.medium_date = cljs.core.partial.call(null,growingtree_app.datetime.format_date,growingtree_app.datetime.medium_date_format);
growingtree_app.datetime.medium_datetime = cljs.core.partial.call(null,growingtree_app.datetime.format_date,growingtree_app.datetime.medium_datetime_format);
growingtree_app.datetime.medium_time = cljs.core.partial.call(null,growingtree_app.datetime.format_date,growingtree_app.datetime.medium_time_format);
growingtree_app.datetime.short_date = cljs.core.partial.call(null,growingtree_app.datetime.format_date,growingtree_app.datetime.short_date_format);
growingtree_app.datetime.short_datetime = cljs.core.partial.call(null,growingtree_app.datetime.format_date,growingtree_app.datetime.short_datetime_format);
growingtree_app.datetime.short_time = cljs.core.partial.call(null,growingtree_app.datetime.format_date,growingtree_app.datetime.short_time_format);
growingtree_app.datetime.medium_consistent_date_format = (new goog.i18n.DateTimeFormat("MMM dd, yyyy"));
growingtree_app.datetime.medium_consistent_date = cljs.core.partial.call(null,growingtree_app.datetime.format_date,growingtree_app.datetime.medium_consistent_date_format);
growingtree_app.datetime.calendar_date_format = (new goog.i18n.DateTimeFormat("EEE, MMM dd, yyyy 'at' hh:mma"));
growingtree_app.datetime.calendar_date = cljs.core.partial.call(null,growingtree_app.datetime.format_date,growingtree_app.datetime.calendar_date_format);
growingtree_app.datetime.date_in_ms = (function date_in_ms(date){
var vec__22411 = cljs.core.map.call(null,parseInt,cljs.core.name.call(null,date).split(/-/));
var y = cljs.core.nth.call(null,vec__22411,(0),null);
var m = cljs.core.nth.call(null,vec__22411,(1),null);
var d = cljs.core.nth.call(null,vec__22411,(2),null);
return (new Date(Date.UTC(y,(m - (1)),(d - (1)),(0),(0),(0)))).getTime();
});
growingtree_app.datetime.day_in_ms = (((1000) * (3600)) * (24));
growingtree_app.datetime.minute = (60);
growingtree_app.datetime.hour = (growingtree_app.datetime.minute * (60));
growingtree_app.datetime.day = (growingtree_app.datetime.hour * (24));
growingtree_app.datetime.month = (growingtree_app.datetime.day * (30));
growingtree_app.datetime.year = (growingtree_app.datetime.month * (12));
growingtree_app.datetime.time_ago = (function time_ago(time){
var now = (new Date()).getTime();
var ago = Math.floor(((now - time) / (1000)));
var interval = (((ago < growingtree_app.datetime.hour))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"divisor","divisor",-25029120),growingtree_app.datetime.minute,new cljs.core.Keyword(null,"unit","unit",375175175),"minute"], null):(((ago < growingtree_app.datetime.day))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"divisor","divisor",-25029120),growingtree_app.datetime.hour,new cljs.core.Keyword(null,"unit","unit",375175175),"hour"], null):(((ago < growingtree_app.datetime.month))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"divisor","divisor",-25029120),growingtree_app.datetime.day,new cljs.core.Keyword(null,"unit","unit",375175175),"day"], null):(((ago < growingtree_app.datetime.year))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"divisor","divisor",-25029120),growingtree_app.datetime.month,new cljs.core.Keyword(null,"unit","unit",375175175),"month"], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"divisor","divisor",-25029120),growingtree_app.datetime.year,new cljs.core.Keyword(null,"unit","unit",375175175),"year"], null)
))));
var count = Math.round((ago / new cljs.core.Keyword(null,"divisor","divisor",-25029120).cljs$core$IFn$_invoke$arity$1(interval)));
return [cljs.core.str(count),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(interval)),cljs.core.str(((cljs.core._EQ_.call(null,(1),count))?null:"s"))].join('');
});

//# sourceMappingURL=datetime.js.map