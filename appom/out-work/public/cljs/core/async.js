// Compiled by ClojureScript 0.0-2277
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13991 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13991 = (function (f,fn_handler,meta13992){
this.f = f;
this.fn_handler = fn_handler;
this.meta13992 = meta13992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13991.cljs$lang$type = true;
cljs.core.async.t13991.cljs$lang$ctorStr = "cljs.core.async/t13991";
cljs.core.async.t13991.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t13991");
});
cljs.core.async.t13991.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13991.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13991.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13993){var self__ = this;
var _13993__$1 = this;return self__.meta13992;
});
cljs.core.async.t13991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13993,meta13992__$1){var self__ = this;
var _13993__$1 = this;return (new cljs.core.async.t13991(self__.f,self__.fn_handler,meta13992__$1));
});
cljs.core.async.__GT_t13991 = (function __GT_t13991(f__$1,fn_handler__$1,meta13992){return (new cljs.core.async.t13991(f__$1,fn_handler__$1,meta13992));
});
}
return (new cljs.core.async.t13991(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13995 = buff;if(G__13995)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__13995.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13995.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13995);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13995);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_13996 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13996);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_13996,ret){
return (function (){return fn1.call(null,val_13996);
});})(val_13996,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3531__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___13997 = n;var x_13998 = (0);while(true){
if((x_13998 < n__4399__auto___13997))
{(a[x_13998] = (0));
{
var G__13999 = (x_13998 + (1));
x_13998 = G__13999;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14000 = (i + (1));
i = G__14000;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14004 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14004 = (function (flag,alt_flag,meta14005){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14005 = meta14005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14004.cljs$lang$type = true;
cljs.core.async.t14004.cljs$lang$ctorStr = "cljs.core.async/t14004";
cljs.core.async.t14004.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14004");
});})(flag))
;
cljs.core.async.t14004.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14004.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t14004.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t14004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14006){var self__ = this;
var _14006__$1 = this;return self__.meta14005;
});})(flag))
;
cljs.core.async.t14004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14006,meta14005__$1){var self__ = this;
var _14006__$1 = this;return (new cljs.core.async.t14004(self__.flag,self__.alt_flag,meta14005__$1));
});})(flag))
;
cljs.core.async.__GT_t14004 = ((function (flag){
return (function __GT_t14004(flag__$1,alt_flag__$1,meta14005){return (new cljs.core.async.t14004(flag__$1,alt_flag__$1,meta14005));
});})(flag))
;
}
return (new cljs.core.async.t14004(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14010 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14010 = (function (cb,flag,alt_handler,meta14011){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14011 = meta14011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14010.cljs$lang$type = true;
cljs.core.async.t14010.cljs$lang$ctorStr = "cljs.core.async/t14010";
cljs.core.async.t14010.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14010");
});
cljs.core.async.t14010.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14010.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14010.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14012){var self__ = this;
var _14012__$1 = this;return self__.meta14011;
});
cljs.core.async.t14010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14012,meta14011__$1){var self__ = this;
var _14012__$1 = this;return (new cljs.core.async.t14010(self__.cb,self__.flag,self__.alt_handler,meta14011__$1));
});
cljs.core.async.__GT_t14010 = (function __GT_t14010(cb__$1,flag__$1,alt_handler__$1,meta14011){return (new cljs.core.async.t14010(cb__$1,flag__$1,alt_handler__$1,meta14011));
});
}
return (new cljs.core.async.t14010(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14013_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14013_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14014 = (i + (1));
i = G__14014;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__14015){var map__14017 = p__14015;var map__14017__$1 = ((cljs.core.seq_QMARK_.call(null,map__14017))?cljs.core.apply.call(null,cljs.core.hash_map,map__14017):map__14017);var opts = map__14017__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14015 = null;if (arguments.length > 1) {
  p__14015 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14015);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14018){
var ports = cljs.core.first(arglist__14018);
var p__14015 = cljs.core.rest(arglist__14018);
return alts_BANG___delegate(ports,p__14015);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14026 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14026 = (function (ch,f,map_LT_,meta14027){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14027 = meta14027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14026.cljs$lang$type = true;
cljs.core.async.t14026.cljs$lang$ctorStr = "cljs.core.async/t14026";
cljs.core.async.t14026.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14026");
});
cljs.core.async.t14026.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14026.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14026.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14026.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14029 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14029 = (function (fn1,_,meta14027,ch,f,map_LT_,meta14030){
this.fn1 = fn1;
this._ = _;
this.meta14027 = meta14027;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14030 = meta14030;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14029.cljs$lang$type = true;
cljs.core.async.t14029.cljs$lang$ctorStr = "cljs.core.async/t14029";
cljs.core.async.t14029.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14029");
});})(___$1))
;
cljs.core.async.t14029.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14029.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14019_SHARP_){return f1.call(null,(((p1__14019_SHARP_ == null))?null:self__.f.call(null,p1__14019_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14029.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14031){var self__ = this;
var _14031__$1 = this;return self__.meta14030;
});})(___$1))
;
cljs.core.async.t14029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14031,meta14030__$1){var self__ = this;
var _14031__$1 = this;return (new cljs.core.async.t14029(self__.fn1,self__._,self__.meta14027,self__.ch,self__.f,self__.map_LT_,meta14030__$1));
});})(___$1))
;
cljs.core.async.__GT_t14029 = ((function (___$1){
return (function __GT_t14029(fn1__$1,___$2,meta14027__$1,ch__$2,f__$2,map_LT___$2,meta14030){return (new cljs.core.async.t14029(fn1__$1,___$2,meta14027__$1,ch__$2,f__$2,map_LT___$2,meta14030));
});})(___$1))
;
}
return (new cljs.core.async.t14029(fn1,___$1,self__.meta14027,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14026.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14026.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14028){var self__ = this;
var _14028__$1 = this;return self__.meta14027;
});
cljs.core.async.t14026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14028,meta14027__$1){var self__ = this;
var _14028__$1 = this;return (new cljs.core.async.t14026(self__.ch,self__.f,self__.map_LT_,meta14027__$1));
});
cljs.core.async.__GT_t14026 = (function __GT_t14026(ch__$1,f__$1,map_LT___$1,meta14027){return (new cljs.core.async.t14026(ch__$1,f__$1,map_LT___$1,meta14027));
});
}
return (new cljs.core.async.t14026(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14035 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14035 = (function (ch,f,map_GT_,meta14036){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14036 = meta14036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14035.cljs$lang$type = true;
cljs.core.async.t14035.cljs$lang$ctorStr = "cljs.core.async/t14035";
cljs.core.async.t14035.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14035");
});
cljs.core.async.t14035.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14035.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14035.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14035.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14035.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14035.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14037){var self__ = this;
var _14037__$1 = this;return self__.meta14036;
});
cljs.core.async.t14035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14037,meta14036__$1){var self__ = this;
var _14037__$1 = this;return (new cljs.core.async.t14035(self__.ch,self__.f,self__.map_GT_,meta14036__$1));
});
cljs.core.async.__GT_t14035 = (function __GT_t14035(ch__$1,f__$1,map_GT___$1,meta14036){return (new cljs.core.async.t14035(ch__$1,f__$1,map_GT___$1,meta14036));
});
}
return (new cljs.core.async.t14035(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14041 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14041 = (function (ch,p,filter_GT_,meta14042){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14042 = meta14042;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14041.cljs$lang$type = true;
cljs.core.async.t14041.cljs$lang$ctorStr = "cljs.core.async/t14041";
cljs.core.async.t14041.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14041");
});
cljs.core.async.t14041.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14041.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14041.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14041.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14041.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14041.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14043){var self__ = this;
var _14043__$1 = this;return self__.meta14042;
});
cljs.core.async.t14041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14043,meta14042__$1){var self__ = this;
var _14043__$1 = this;return (new cljs.core.async.t14041(self__.ch,self__.p,self__.filter_GT_,meta14042__$1));
});
cljs.core.async.__GT_t14041 = (function __GT_t14041(ch__$1,p__$1,filter_GT___$1,meta14042){return (new cljs.core.async.t14041(ch__$1,p__$1,filter_GT___$1,meta14042));
});
}
return (new cljs.core.async.t14041(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6345__auto___14126 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto___14126,out){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto___14126,out){
return (function (state_14105){var state_val_14106 = (state_14105[(1)]);if((state_val_14106 === (7)))
{var inst_14101 = (state_14105[(2)]);var state_14105__$1 = state_14105;var statearr_14107_14127 = state_14105__$1;(statearr_14107_14127[(2)] = inst_14101);
(statearr_14107_14127[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14106 === (1)))
{var state_14105__$1 = state_14105;var statearr_14108_14128 = state_14105__$1;(statearr_14108_14128[(2)] = null);
(statearr_14108_14128[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14106 === (4)))
{var inst_14087 = (state_14105[(7)]);var inst_14087__$1 = (state_14105[(2)]);var inst_14088 = (inst_14087__$1 == null);var state_14105__$1 = (function (){var statearr_14109 = state_14105;(statearr_14109[(7)] = inst_14087__$1);
return statearr_14109;
})();if(cljs.core.truth_(inst_14088))
{var statearr_14110_14129 = state_14105__$1;(statearr_14110_14129[(1)] = (5));
} else
{var statearr_14111_14130 = state_14105__$1;(statearr_14111_14130[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14106 === (6)))
{var inst_14087 = (state_14105[(7)]);var inst_14092 = p.call(null,inst_14087);var state_14105__$1 = state_14105;if(cljs.core.truth_(inst_14092))
{var statearr_14112_14131 = state_14105__$1;(statearr_14112_14131[(1)] = (8));
} else
{var statearr_14113_14132 = state_14105__$1;(statearr_14113_14132[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14106 === (3)))
{var inst_14103 = (state_14105[(2)]);var state_14105__$1 = state_14105;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14105__$1,inst_14103);
} else
{if((state_val_14106 === (2)))
{var state_14105__$1 = state_14105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14105__$1,(4),ch);
} else
{if((state_val_14106 === (11)))
{var inst_14095 = (state_14105[(2)]);var state_14105__$1 = state_14105;var statearr_14114_14133 = state_14105__$1;(statearr_14114_14133[(2)] = inst_14095);
(statearr_14114_14133[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14106 === (9)))
{var state_14105__$1 = state_14105;var statearr_14115_14134 = state_14105__$1;(statearr_14115_14134[(2)] = null);
(statearr_14115_14134[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14106 === (5)))
{var inst_14090 = cljs.core.async.close_BANG_.call(null,out);var state_14105__$1 = state_14105;var statearr_14116_14135 = state_14105__$1;(statearr_14116_14135[(2)] = inst_14090);
(statearr_14116_14135[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14106 === (10)))
{var inst_14098 = (state_14105[(2)]);var state_14105__$1 = (function (){var statearr_14117 = state_14105;(statearr_14117[(8)] = inst_14098);
return statearr_14117;
})();var statearr_14118_14136 = state_14105__$1;(statearr_14118_14136[(2)] = null);
(statearr_14118_14136[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14106 === (8)))
{var inst_14087 = (state_14105[(7)]);var state_14105__$1 = state_14105;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14105__$1,(11),out,inst_14087);
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
});})(c__6345__auto___14126,out))
;return ((function (switch__6280__auto__,c__6345__auto___14126,out){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_14122 = [null,null,null,null,null,null,null,null,null];(statearr_14122[(0)] = state_machine__6281__auto__);
(statearr_14122[(1)] = (1));
return statearr_14122;
});
var state_machine__6281__auto____1 = (function (state_14105){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_14105);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e14123){if((e14123 instanceof Object))
{var ex__6284__auto__ = e14123;var statearr_14124_14137 = state_14105;(statearr_14124_14137[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14105);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14138 = state_14105;
state_14105 = G__14138;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_14105){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_14105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto___14126,out))
})();var state__6347__auto__ = (function (){var statearr_14125 = f__6346__auto__.call(null);(statearr_14125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto___14126);
return statearr_14125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto___14126,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6345__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto__){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto__){
return (function (state_14290){var state_val_14291 = (state_14290[(1)]);if((state_val_14291 === (7)))
{var inst_14286 = (state_14290[(2)]);var state_14290__$1 = state_14290;var statearr_14292_14329 = state_14290__$1;(statearr_14292_14329[(2)] = inst_14286);
(statearr_14292_14329[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14291 === (20)))
{var inst_14261 = (state_14290[(7)]);var inst_14272 = (state_14290[(2)]);var inst_14273 = cljs.core.next.call(null,inst_14261);var inst_14247 = inst_14273;var inst_14248 = null;var inst_14249 = (0);var inst_14250 = (0);var state_14290__$1 = (function (){var statearr_14293 = state_14290;(statearr_14293[(8)] = inst_14272);
(statearr_14293[(9)] = inst_14248);
(statearr_14293[(10)] = inst_14249);
(statearr_14293[(11)] = inst_14247);
(statearr_14293[(12)] = inst_14250);
return statearr_14293;
})();var statearr_14294_14330 = state_14290__$1;(statearr_14294_14330[(2)] = null);
(statearr_14294_14330[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14291 === (1)))
{var state_14290__$1 = state_14290;var statearr_14295_14331 = state_14290__$1;(statearr_14295_14331[(2)] = null);
(statearr_14295_14331[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14291 === (4)))
{var inst_14236 = (state_14290[(13)]);var inst_14236__$1 = (state_14290[(2)]);var inst_14237 = (inst_14236__$1 == null);var state_14290__$1 = (function (){var statearr_14299 = state_14290;(statearr_14299[(13)] = inst_14236__$1);
return statearr_14299;
})();if(cljs.core.truth_(inst_14237))
{var statearr_14300_14332 = state_14290__$1;(statearr_14300_14332[(1)] = (5));
} else
{var statearr_14301_14333 = state_14290__$1;(statearr_14301_14333[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14291 === (15)))
{var state_14290__$1 = state_14290;var statearr_14302_14334 = state_14290__$1;(statearr_14302_14334[(2)] = null);
(statearr_14302_14334[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14291 === (13)))
{var inst_14248 = (state_14290[(9)]);var inst_14249 = (state_14290[(10)]);var inst_14247 = (state_14290[(11)]);var inst_14250 = (state_14290[(12)]);var inst_14257 = (state_14290[(2)]);var inst_14258 = (inst_14250 + (1));var tmp14296 = inst_14248;var tmp14297 = inst_14249;var tmp14298 = inst_14247;var inst_14247__$1 = tmp14298;var inst_14248__$1 = tmp14296;var inst_14249__$1 = tmp14297;var inst_14250__$1 = inst_14258;var state_14290__$1 = (function (){var statearr_14303 = state_14290;(statearr_14303[(9)] = inst_14248__$1);
(statearr_14303[(10)] = inst_14249__$1);
(statearr_14303[(14)] = inst_14257);
(statearr_14303[(11)] = inst_14247__$1);
(statearr_14303[(12)] = inst_14250__$1);
return statearr_14303;
})();var statearr_14304_14335 = state_14290__$1;(statearr_14304_14335[(2)] = null);
(statearr_14304_14335[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14291 === (6)))
{var inst_14236 = (state_14290[(13)]);var inst_14241 = f.call(null,inst_14236);var inst_14246 = cljs.core.seq.call(null,inst_14241);var inst_14247 = inst_14246;var inst_14248 = null;var inst_14249 = (0);var inst_14250 = (0);var state_14290__$1 = (function (){var statearr_14305 = state_14290;(statearr_14305[(9)] = inst_14248);
(statearr_14305[(10)] = inst_14249);
(statearr_14305[(11)] = inst_14247);
(statearr_14305[(12)] = inst_14250);
return statearr_14305;
})();var statearr_14306_14336 = state_14290__$1;(statearr_14306_14336[(2)] = null);
(statearr_14306_14336[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14291 === (17)))
{var inst_14261 = (state_14290[(7)]);var inst_14265 = cljs.core.chunk_first.call(null,inst_14261);var inst_14266 = cljs.core.chunk_rest.call(null,inst_14261);var inst_14267 = cljs.core.count.call(null,inst_14265);var inst_14247 = inst_14266;var inst_14248 = inst_14265;var inst_14249 = inst_14267;var inst_14250 = (0);var state_14290__$1 = (function (){var statearr_14307 = state_14290;(statearr_14307[(9)] = inst_14248);
(statearr_14307[(10)] = inst_14249);
(statearr_14307[(11)] = inst_14247);
(statearr_14307[(12)] = inst_14250);
return statearr_14307;
})();var statearr_14308_14337 = state_14290__$1;(statearr_14308_14337[(2)] = null);
(statearr_14308_14337[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14291 === (3)))
{var inst_14288 = (state_14290[(2)]);var state_14290__$1 = state_14290;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14290__$1,inst_14288);
} else
{if((state_val_14291 === (12)))
{var inst_14281 = (state_14290[(2)]);var state_14290__$1 = state_14290;var statearr_14309_14338 = state_14290__$1;(statearr_14309_14338[(2)] = inst_14281);
(statearr_14309_14338[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14291 === (2)))
{var state_14290__$1 = state_14290;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14290__$1,(4),in$);
} else
{if((state_val_14291 === (19)))
{var inst_14276 = (state_14290[(2)]);var state_14290__$1 = state_14290;var statearr_14310_14339 = state_14290__$1;(statearr_14310_14339[(2)] = inst_14276);
(statearr_14310_14339[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14291 === (11)))
{var inst_14247 = (state_14290[(11)]);var inst_14261 = (state_14290[(7)]);var inst_14261__$1 = cljs.core.seq.call(null,inst_14247);var state_14290__$1 = (function (){var statearr_14311 = state_14290;(statearr_14311[(7)] = inst_14261__$1);
return statearr_14311;
})();if(inst_14261__$1)
{var statearr_14312_14340 = state_14290__$1;(statearr_14312_14340[(1)] = (14));
} else
{var statearr_14313_14341 = state_14290__$1;(statearr_14313_14341[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14291 === (9)))
{var inst_14283 = (state_14290[(2)]);var state_14290__$1 = (function (){var statearr_14314 = state_14290;(statearr_14314[(15)] = inst_14283);
return statearr_14314;
})();var statearr_14315_14342 = state_14290__$1;(statearr_14315_14342[(2)] = null);
(statearr_14315_14342[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14291 === (5)))
{var inst_14239 = cljs.core.async.close_BANG_.call(null,out);var state_14290__$1 = state_14290;var statearr_14316_14343 = state_14290__$1;(statearr_14316_14343[(2)] = inst_14239);
(statearr_14316_14343[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14291 === (14)))
{var inst_14261 = (state_14290[(7)]);var inst_14263 = cljs.core.chunked_seq_QMARK_.call(null,inst_14261);var state_14290__$1 = state_14290;if(inst_14263)
{var statearr_14317_14344 = state_14290__$1;(statearr_14317_14344[(1)] = (17));
} else
{var statearr_14318_14345 = state_14290__$1;(statearr_14318_14345[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14291 === (16)))
{var inst_14279 = (state_14290[(2)]);var state_14290__$1 = state_14290;var statearr_14319_14346 = state_14290__$1;(statearr_14319_14346[(2)] = inst_14279);
(statearr_14319_14346[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14291 === (10)))
{var inst_14248 = (state_14290[(9)]);var inst_14250 = (state_14290[(12)]);var inst_14255 = cljs.core._nth.call(null,inst_14248,inst_14250);var state_14290__$1 = state_14290;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14290__$1,(13),out,inst_14255);
} else
{if((state_val_14291 === (18)))
{var inst_14261 = (state_14290[(7)]);var inst_14270 = cljs.core.first.call(null,inst_14261);var state_14290__$1 = state_14290;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14290__$1,(20),out,inst_14270);
} else
{if((state_val_14291 === (8)))
{var inst_14249 = (state_14290[(10)]);var inst_14250 = (state_14290[(12)]);var inst_14252 = (inst_14250 < inst_14249);var inst_14253 = inst_14252;var state_14290__$1 = state_14290;if(cljs.core.truth_(inst_14253))
{var statearr_14320_14347 = state_14290__$1;(statearr_14320_14347[(1)] = (10));
} else
{var statearr_14321_14348 = state_14290__$1;(statearr_14321_14348[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__6345__auto__))
;return ((function (switch__6280__auto__,c__6345__auto__){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_14325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14325[(0)] = state_machine__6281__auto__);
(statearr_14325[(1)] = (1));
return statearr_14325;
});
var state_machine__6281__auto____1 = (function (state_14290){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_14290);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e14326){if((e14326 instanceof Object))
{var ex__6284__auto__ = e14326;var statearr_14327_14349 = state_14290;(statearr_14327_14349[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14290);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14326;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14350 = state_14290;
state_14290 = G__14350;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_14290){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_14290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__))
})();var state__6347__auto__ = (function (){var statearr_14328 = f__6346__auto__.call(null);(statearr_14328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_14328;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto__))
);
return c__6345__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6345__auto___14431 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto___14431){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto___14431){
return (function (state_14410){var state_val_14411 = (state_14410[(1)]);if((state_val_14411 === (7)))
{var inst_14406 = (state_14410[(2)]);var state_14410__$1 = state_14410;var statearr_14412_14432 = state_14410__$1;(statearr_14412_14432[(2)] = inst_14406);
(statearr_14412_14432[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14411 === (1)))
{var state_14410__$1 = state_14410;var statearr_14413_14433 = state_14410__$1;(statearr_14413_14433[(2)] = null);
(statearr_14413_14433[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14411 === (4)))
{var inst_14393 = (state_14410[(7)]);var inst_14393__$1 = (state_14410[(2)]);var inst_14394 = (inst_14393__$1 == null);var state_14410__$1 = (function (){var statearr_14414 = state_14410;(statearr_14414[(7)] = inst_14393__$1);
return statearr_14414;
})();if(cljs.core.truth_(inst_14394))
{var statearr_14415_14434 = state_14410__$1;(statearr_14415_14434[(1)] = (5));
} else
{var statearr_14416_14435 = state_14410__$1;(statearr_14416_14435[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14411 === (6)))
{var inst_14393 = (state_14410[(7)]);var state_14410__$1 = state_14410;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14410__$1,(11),to,inst_14393);
} else
{if((state_val_14411 === (3)))
{var inst_14408 = (state_14410[(2)]);var state_14410__$1 = state_14410;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14410__$1,inst_14408);
} else
{if((state_val_14411 === (2)))
{var state_14410__$1 = state_14410;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14410__$1,(4),from);
} else
{if((state_val_14411 === (11)))
{var inst_14403 = (state_14410[(2)]);var state_14410__$1 = (function (){var statearr_14417 = state_14410;(statearr_14417[(8)] = inst_14403);
return statearr_14417;
})();var statearr_14418_14436 = state_14410__$1;(statearr_14418_14436[(2)] = null);
(statearr_14418_14436[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14411 === (9)))
{var state_14410__$1 = state_14410;var statearr_14419_14437 = state_14410__$1;(statearr_14419_14437[(2)] = null);
(statearr_14419_14437[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14411 === (5)))
{var state_14410__$1 = state_14410;if(cljs.core.truth_(close_QMARK_))
{var statearr_14420_14438 = state_14410__$1;(statearr_14420_14438[(1)] = (8));
} else
{var statearr_14421_14439 = state_14410__$1;(statearr_14421_14439[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14411 === (10)))
{var inst_14400 = (state_14410[(2)]);var state_14410__$1 = state_14410;var statearr_14422_14440 = state_14410__$1;(statearr_14422_14440[(2)] = inst_14400);
(statearr_14422_14440[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14411 === (8)))
{var inst_14397 = cljs.core.async.close_BANG_.call(null,to);var state_14410__$1 = state_14410;var statearr_14423_14441 = state_14410__$1;(statearr_14423_14441[(2)] = inst_14397);
(statearr_14423_14441[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6345__auto___14431))
;return ((function (switch__6280__auto__,c__6345__auto___14431){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_14427 = [null,null,null,null,null,null,null,null,null];(statearr_14427[(0)] = state_machine__6281__auto__);
(statearr_14427[(1)] = (1));
return statearr_14427;
});
var state_machine__6281__auto____1 = (function (state_14410){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_14410);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e14428){if((e14428 instanceof Object))
{var ex__6284__auto__ = e14428;var statearr_14429_14442 = state_14410;(statearr_14429_14442[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14410);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14428;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14443 = state_14410;
state_14410 = G__14443;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_14410){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_14410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto___14431))
})();var state__6347__auto__ = (function (){var statearr_14430 = f__6346__auto__.call(null);(statearr_14430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto___14431);
return statearr_14430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto___14431))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6345__auto___14530 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto___14530,tc,fc){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto___14530,tc,fc){
return (function (state_14508){var state_val_14509 = (state_14508[(1)]);if((state_val_14509 === (7)))
{var inst_14504 = (state_14508[(2)]);var state_14508__$1 = state_14508;var statearr_14510_14531 = state_14508__$1;(statearr_14510_14531[(2)] = inst_14504);
(statearr_14510_14531[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14509 === (1)))
{var state_14508__$1 = state_14508;var statearr_14511_14532 = state_14508__$1;(statearr_14511_14532[(2)] = null);
(statearr_14511_14532[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14509 === (4)))
{var inst_14489 = (state_14508[(7)]);var inst_14489__$1 = (state_14508[(2)]);var inst_14490 = (inst_14489__$1 == null);var state_14508__$1 = (function (){var statearr_14512 = state_14508;(statearr_14512[(7)] = inst_14489__$1);
return statearr_14512;
})();if(cljs.core.truth_(inst_14490))
{var statearr_14513_14533 = state_14508__$1;(statearr_14513_14533[(1)] = (5));
} else
{var statearr_14514_14534 = state_14508__$1;(statearr_14514_14534[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14509 === (6)))
{var inst_14489 = (state_14508[(7)]);var inst_14495 = p.call(null,inst_14489);var state_14508__$1 = state_14508;if(cljs.core.truth_(inst_14495))
{var statearr_14515_14535 = state_14508__$1;(statearr_14515_14535[(1)] = (9));
} else
{var statearr_14516_14536 = state_14508__$1;(statearr_14516_14536[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14509 === (3)))
{var inst_14506 = (state_14508[(2)]);var state_14508__$1 = state_14508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14508__$1,inst_14506);
} else
{if((state_val_14509 === (2)))
{var state_14508__$1 = state_14508;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14508__$1,(4),ch);
} else
{if((state_val_14509 === (11)))
{var inst_14489 = (state_14508[(7)]);var inst_14499 = (state_14508[(2)]);var state_14508__$1 = state_14508;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14508__$1,(8),inst_14499,inst_14489);
} else
{if((state_val_14509 === (9)))
{var state_14508__$1 = state_14508;var statearr_14517_14537 = state_14508__$1;(statearr_14517_14537[(2)] = tc);
(statearr_14517_14537[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14509 === (5)))
{var inst_14492 = cljs.core.async.close_BANG_.call(null,tc);var inst_14493 = cljs.core.async.close_BANG_.call(null,fc);var state_14508__$1 = (function (){var statearr_14518 = state_14508;(statearr_14518[(8)] = inst_14492);
return statearr_14518;
})();var statearr_14519_14538 = state_14508__$1;(statearr_14519_14538[(2)] = inst_14493);
(statearr_14519_14538[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14509 === (10)))
{var state_14508__$1 = state_14508;var statearr_14520_14539 = state_14508__$1;(statearr_14520_14539[(2)] = fc);
(statearr_14520_14539[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14509 === (8)))
{var inst_14501 = (state_14508[(2)]);var state_14508__$1 = (function (){var statearr_14521 = state_14508;(statearr_14521[(9)] = inst_14501);
return statearr_14521;
})();var statearr_14522_14540 = state_14508__$1;(statearr_14522_14540[(2)] = null);
(statearr_14522_14540[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6345__auto___14530,tc,fc))
;return ((function (switch__6280__auto__,c__6345__auto___14530,tc,fc){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_14526 = [null,null,null,null,null,null,null,null,null,null];(statearr_14526[(0)] = state_machine__6281__auto__);
(statearr_14526[(1)] = (1));
return statearr_14526;
});
var state_machine__6281__auto____1 = (function (state_14508){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_14508);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e14527){if((e14527 instanceof Object))
{var ex__6284__auto__ = e14527;var statearr_14528_14541 = state_14508;(statearr_14528_14541[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14508);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14542 = state_14508;
state_14508 = G__14542;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_14508){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_14508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto___14530,tc,fc))
})();var state__6347__auto__ = (function (){var statearr_14529 = f__6346__auto__.call(null);(statearr_14529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto___14530);
return statearr_14529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto___14530,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6345__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto__){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto__){
return (function (state_14589){var state_val_14590 = (state_14589[(1)]);if((state_val_14590 === (7)))
{var inst_14585 = (state_14589[(2)]);var state_14589__$1 = state_14589;var statearr_14591_14607 = state_14589__$1;(statearr_14591_14607[(2)] = inst_14585);
(statearr_14591_14607[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14590 === (6)))
{var inst_14575 = (state_14589[(7)]);var inst_14578 = (state_14589[(8)]);var inst_14582 = f.call(null,inst_14575,inst_14578);var inst_14575__$1 = inst_14582;var state_14589__$1 = (function (){var statearr_14592 = state_14589;(statearr_14592[(7)] = inst_14575__$1);
return statearr_14592;
})();var statearr_14593_14608 = state_14589__$1;(statearr_14593_14608[(2)] = null);
(statearr_14593_14608[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14590 === (5)))
{var inst_14575 = (state_14589[(7)]);var state_14589__$1 = state_14589;var statearr_14594_14609 = state_14589__$1;(statearr_14594_14609[(2)] = inst_14575);
(statearr_14594_14609[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14590 === (4)))
{var inst_14578 = (state_14589[(8)]);var inst_14578__$1 = (state_14589[(2)]);var inst_14579 = (inst_14578__$1 == null);var state_14589__$1 = (function (){var statearr_14595 = state_14589;(statearr_14595[(8)] = inst_14578__$1);
return statearr_14595;
})();if(cljs.core.truth_(inst_14579))
{var statearr_14596_14610 = state_14589__$1;(statearr_14596_14610[(1)] = (5));
} else
{var statearr_14597_14611 = state_14589__$1;(statearr_14597_14611[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14590 === (3)))
{var inst_14587 = (state_14589[(2)]);var state_14589__$1 = state_14589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14589__$1,inst_14587);
} else
{if((state_val_14590 === (2)))
{var state_14589__$1 = state_14589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14589__$1,(4),ch);
} else
{if((state_val_14590 === (1)))
{var inst_14575 = init;var state_14589__$1 = (function (){var statearr_14598 = state_14589;(statearr_14598[(7)] = inst_14575);
return statearr_14598;
})();var statearr_14599_14612 = state_14589__$1;(statearr_14599_14612[(2)] = null);
(statearr_14599_14612[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6345__auto__))
;return ((function (switch__6280__auto__,c__6345__auto__){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_14603 = [null,null,null,null,null,null,null,null,null];(statearr_14603[(0)] = state_machine__6281__auto__);
(statearr_14603[(1)] = (1));
return statearr_14603;
});
var state_machine__6281__auto____1 = (function (state_14589){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_14589);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e14604){if((e14604 instanceof Object))
{var ex__6284__auto__ = e14604;var statearr_14605_14613 = state_14589;(statearr_14605_14613[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14589);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14614 = state_14589;
state_14589 = G__14614;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_14589){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_14589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__))
})();var state__6347__auto__ = (function (){var statearr_14606 = f__6346__auto__.call(null);(statearr_14606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_14606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto__))
);
return c__6345__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6345__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto__){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto__){
return (function (state_14676){var state_val_14677 = (state_14676[(1)]);if((state_val_14677 === (7)))
{var inst_14657 = (state_14676[(7)]);var inst_14662 = (state_14676[(2)]);var inst_14663 = cljs.core.next.call(null,inst_14657);var inst_14657__$1 = inst_14663;var state_14676__$1 = (function (){var statearr_14678 = state_14676;(statearr_14678[(8)] = inst_14662);
(statearr_14678[(7)] = inst_14657__$1);
return statearr_14678;
})();var statearr_14679_14697 = state_14676__$1;(statearr_14679_14697[(2)] = null);
(statearr_14679_14697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14677 === (1)))
{var inst_14656 = cljs.core.seq.call(null,coll);var inst_14657 = inst_14656;var state_14676__$1 = (function (){var statearr_14680 = state_14676;(statearr_14680[(7)] = inst_14657);
return statearr_14680;
})();var statearr_14681_14698 = state_14676__$1;(statearr_14681_14698[(2)] = null);
(statearr_14681_14698[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14677 === (4)))
{var inst_14657 = (state_14676[(7)]);var inst_14660 = cljs.core.first.call(null,inst_14657);var state_14676__$1 = state_14676;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14676__$1,(7),ch,inst_14660);
} else
{if((state_val_14677 === (6)))
{var inst_14672 = (state_14676[(2)]);var state_14676__$1 = state_14676;var statearr_14682_14699 = state_14676__$1;(statearr_14682_14699[(2)] = inst_14672);
(statearr_14682_14699[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14677 === (3)))
{var inst_14674 = (state_14676[(2)]);var state_14676__$1 = state_14676;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14676__$1,inst_14674);
} else
{if((state_val_14677 === (2)))
{var inst_14657 = (state_14676[(7)]);var state_14676__$1 = state_14676;if(cljs.core.truth_(inst_14657))
{var statearr_14683_14700 = state_14676__$1;(statearr_14683_14700[(1)] = (4));
} else
{var statearr_14684_14701 = state_14676__$1;(statearr_14684_14701[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14677 === (9)))
{var state_14676__$1 = state_14676;var statearr_14685_14702 = state_14676__$1;(statearr_14685_14702[(2)] = null);
(statearr_14685_14702[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14677 === (5)))
{var state_14676__$1 = state_14676;if(cljs.core.truth_(close_QMARK_))
{var statearr_14686_14703 = state_14676__$1;(statearr_14686_14703[(1)] = (8));
} else
{var statearr_14687_14704 = state_14676__$1;(statearr_14687_14704[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14677 === (10)))
{var inst_14670 = (state_14676[(2)]);var state_14676__$1 = state_14676;var statearr_14688_14705 = state_14676__$1;(statearr_14688_14705[(2)] = inst_14670);
(statearr_14688_14705[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14677 === (8)))
{var inst_14667 = cljs.core.async.close_BANG_.call(null,ch);var state_14676__$1 = state_14676;var statearr_14689_14706 = state_14676__$1;(statearr_14689_14706[(2)] = inst_14667);
(statearr_14689_14706[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6345__auto__))
;return ((function (switch__6280__auto__,c__6345__auto__){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_14693 = [null,null,null,null,null,null,null,null,null];(statearr_14693[(0)] = state_machine__6281__auto__);
(statearr_14693[(1)] = (1));
return statearr_14693;
});
var state_machine__6281__auto____1 = (function (state_14676){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_14676);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e14694){if((e14694 instanceof Object))
{var ex__6284__auto__ = e14694;var statearr_14695_14707 = state_14676;(statearr_14695_14707[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14676);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14694;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14708 = state_14676;
state_14676 = G__14708;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_14676){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_14676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__))
})();var state__6347__auto__ = (function (){var statearr_14696 = f__6346__auto__.call(null);(statearr_14696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_14696;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto__))
);
return c__6345__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj14710 = {};return obj14710;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14712 = {};return obj14712;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14936 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14936 = (function (cs,ch,mult,meta14937){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14937 = meta14937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14936.cljs$lang$type = true;
cljs.core.async.t14936.cljs$lang$ctorStr = "cljs.core.async/t14936";
cljs.core.async.t14936.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14936");
});})(cs))
;
cljs.core.async.t14936.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14936.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14936.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14936.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14936.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14936.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14936.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14938){var self__ = this;
var _14938__$1 = this;return self__.meta14937;
});})(cs))
;
cljs.core.async.t14936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14938,meta14937__$1){var self__ = this;
var _14938__$1 = this;return (new cljs.core.async.t14936(self__.cs,self__.ch,self__.mult,meta14937__$1));
});})(cs))
;
cljs.core.async.__GT_t14936 = ((function (cs){
return (function __GT_t14936(cs__$1,ch__$1,mult__$1,meta14937){return (new cljs.core.async.t14936(cs__$1,ch__$1,mult__$1,meta14937));
});})(cs))
;
}
return (new cljs.core.async.t14936(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6345__auto___15159 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto___15159,cs,m,dchan,dctr,done){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto___15159,cs,m,dchan,dctr,done){
return (function (state_15073){var state_val_15074 = (state_15073[(1)]);if((state_val_15074 === (7)))
{var inst_15069 = (state_15073[(2)]);var state_15073__$1 = state_15073;var statearr_15075_15160 = state_15073__$1;(statearr_15075_15160[(2)] = inst_15069);
(statearr_15075_15160[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (20)))
{var inst_14970 = (state_15073[(7)]);var inst_14980 = cljs.core.first.call(null,inst_14970);var inst_14981 = cljs.core.nth.call(null,inst_14980,(0),null);var inst_14982 = cljs.core.nth.call(null,inst_14980,(1),null);var state_15073__$1 = (function (){var statearr_15076 = state_15073;(statearr_15076[(8)] = inst_14981);
return statearr_15076;
})();if(cljs.core.truth_(inst_14982))
{var statearr_15077_15161 = state_15073__$1;(statearr_15077_15161[(1)] = (22));
} else
{var statearr_15078_15162 = state_15073__$1;(statearr_15078_15162[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (27)))
{var inst_15012 = (state_15073[(9)]);var inst_15010 = (state_15073[(10)]);var inst_15017 = cljs.core._nth.call(null,inst_15010,inst_15012);var state_15073__$1 = (function (){var statearr_15079 = state_15073;(statearr_15079[(11)] = inst_15017);
return statearr_15079;
})();var statearr_15080_15163 = state_15073__$1;(statearr_15080_15163[(2)] = null);
(statearr_15080_15163[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (1)))
{var state_15073__$1 = state_15073;var statearr_15081_15164 = state_15073__$1;(statearr_15081_15164[(2)] = null);
(statearr_15081_15164[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (24)))
{var inst_14970 = (state_15073[(7)]);var inst_14987 = (state_15073[(2)]);var inst_14988 = cljs.core.next.call(null,inst_14970);var inst_14950 = inst_14988;var inst_14951 = null;var inst_14952 = (0);var inst_14953 = (0);var state_15073__$1 = (function (){var statearr_15082 = state_15073;(statearr_15082[(12)] = inst_14950);
(statearr_15082[(13)] = inst_14987);
(statearr_15082[(14)] = inst_14951);
(statearr_15082[(15)] = inst_14953);
(statearr_15082[(16)] = inst_14952);
return statearr_15082;
})();var statearr_15083_15165 = state_15073__$1;(statearr_15083_15165[(2)] = null);
(statearr_15083_15165[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (39)))
{var inst_15030 = (state_15073[(17)]);var inst_15048 = (state_15073[(2)]);var inst_15049 = cljs.core.next.call(null,inst_15030);var inst_15009 = inst_15049;var inst_15010 = null;var inst_15011 = (0);var inst_15012 = (0);var state_15073__$1 = (function (){var statearr_15087 = state_15073;(statearr_15087[(18)] = inst_15048);
(statearr_15087[(19)] = inst_15009);
(statearr_15087[(9)] = inst_15012);
(statearr_15087[(20)] = inst_15011);
(statearr_15087[(10)] = inst_15010);
return statearr_15087;
})();var statearr_15088_15166 = state_15073__$1;(statearr_15088_15166[(2)] = null);
(statearr_15088_15166[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (4)))
{var inst_14941 = (state_15073[(21)]);var inst_14941__$1 = (state_15073[(2)]);var inst_14942 = (inst_14941__$1 == null);var state_15073__$1 = (function (){var statearr_15089 = state_15073;(statearr_15089[(21)] = inst_14941__$1);
return statearr_15089;
})();if(cljs.core.truth_(inst_14942))
{var statearr_15090_15167 = state_15073__$1;(statearr_15090_15167[(1)] = (5));
} else
{var statearr_15091_15168 = state_15073__$1;(statearr_15091_15168[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (15)))
{var inst_14950 = (state_15073[(12)]);var inst_14951 = (state_15073[(14)]);var inst_14953 = (state_15073[(15)]);var inst_14952 = (state_15073[(16)]);var inst_14966 = (state_15073[(2)]);var inst_14967 = (inst_14953 + (1));var tmp15084 = inst_14950;var tmp15085 = inst_14951;var tmp15086 = inst_14952;var inst_14950__$1 = tmp15084;var inst_14951__$1 = tmp15085;var inst_14952__$1 = tmp15086;var inst_14953__$1 = inst_14967;var state_15073__$1 = (function (){var statearr_15092 = state_15073;(statearr_15092[(22)] = inst_14966);
(statearr_15092[(12)] = inst_14950__$1);
(statearr_15092[(14)] = inst_14951__$1);
(statearr_15092[(15)] = inst_14953__$1);
(statearr_15092[(16)] = inst_14952__$1);
return statearr_15092;
})();var statearr_15093_15169 = state_15073__$1;(statearr_15093_15169[(2)] = null);
(statearr_15093_15169[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (21)))
{var inst_14991 = (state_15073[(2)]);var state_15073__$1 = state_15073;var statearr_15094_15170 = state_15073__$1;(statearr_15094_15170[(2)] = inst_14991);
(statearr_15094_15170[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (31)))
{var inst_15017 = (state_15073[(11)]);var inst_15018 = (state_15073[(2)]);var inst_15019 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15020 = cljs.core.async.untap_STAR_.call(null,m,inst_15017);var state_15073__$1 = (function (){var statearr_15095 = state_15073;(statearr_15095[(23)] = inst_15019);
(statearr_15095[(24)] = inst_15018);
return statearr_15095;
})();var statearr_15096_15171 = state_15073__$1;(statearr_15096_15171[(2)] = inst_15020);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15073__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (32)))
{var inst_15017 = (state_15073[(11)]);var inst_14941 = (state_15073[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15073,(31),Object,null,(30));var inst_15024 = cljs.core.async.put_BANG_.call(null,inst_15017,inst_14941,done);var state_15073__$1 = state_15073;var statearr_15097_15172 = state_15073__$1;(statearr_15097_15172[(2)] = inst_15024);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15073__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (40)))
{var inst_15039 = (state_15073[(25)]);var inst_15040 = (state_15073[(2)]);var inst_15041 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15042 = cljs.core.async.untap_STAR_.call(null,m,inst_15039);var state_15073__$1 = (function (){var statearr_15098 = state_15073;(statearr_15098[(26)] = inst_15040);
(statearr_15098[(27)] = inst_15041);
return statearr_15098;
})();var statearr_15099_15173 = state_15073__$1;(statearr_15099_15173[(2)] = inst_15042);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15073__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (33)))
{var inst_15030 = (state_15073[(17)]);var inst_15032 = cljs.core.chunked_seq_QMARK_.call(null,inst_15030);var state_15073__$1 = state_15073;if(inst_15032)
{var statearr_15100_15174 = state_15073__$1;(statearr_15100_15174[(1)] = (36));
} else
{var statearr_15101_15175 = state_15073__$1;(statearr_15101_15175[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (13)))
{var inst_14960 = (state_15073[(28)]);var inst_14963 = cljs.core.async.close_BANG_.call(null,inst_14960);var state_15073__$1 = state_15073;var statearr_15102_15176 = state_15073__$1;(statearr_15102_15176[(2)] = inst_14963);
(statearr_15102_15176[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (22)))
{var inst_14981 = (state_15073[(8)]);var inst_14984 = cljs.core.async.close_BANG_.call(null,inst_14981);var state_15073__$1 = state_15073;var statearr_15103_15177 = state_15073__$1;(statearr_15103_15177[(2)] = inst_14984);
(statearr_15103_15177[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (36)))
{var inst_15030 = (state_15073[(17)]);var inst_15034 = cljs.core.chunk_first.call(null,inst_15030);var inst_15035 = cljs.core.chunk_rest.call(null,inst_15030);var inst_15036 = cljs.core.count.call(null,inst_15034);var inst_15009 = inst_15035;var inst_15010 = inst_15034;var inst_15011 = inst_15036;var inst_15012 = (0);var state_15073__$1 = (function (){var statearr_15104 = state_15073;(statearr_15104[(19)] = inst_15009);
(statearr_15104[(9)] = inst_15012);
(statearr_15104[(20)] = inst_15011);
(statearr_15104[(10)] = inst_15010);
return statearr_15104;
})();var statearr_15105_15178 = state_15073__$1;(statearr_15105_15178[(2)] = null);
(statearr_15105_15178[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (41)))
{var inst_15039 = (state_15073[(25)]);var inst_14941 = (state_15073[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15073,(40),Object,null,(39));var inst_15046 = cljs.core.async.put_BANG_.call(null,inst_15039,inst_14941,done);var state_15073__$1 = state_15073;var statearr_15106_15179 = state_15073__$1;(statearr_15106_15179[(2)] = inst_15046);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15073__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (43)))
{var state_15073__$1 = state_15073;var statearr_15107_15180 = state_15073__$1;(statearr_15107_15180[(2)] = null);
(statearr_15107_15180[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (29)))
{var inst_15057 = (state_15073[(2)]);var state_15073__$1 = state_15073;var statearr_15108_15181 = state_15073__$1;(statearr_15108_15181[(2)] = inst_15057);
(statearr_15108_15181[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (44)))
{var inst_15066 = (state_15073[(2)]);var state_15073__$1 = (function (){var statearr_15109 = state_15073;(statearr_15109[(29)] = inst_15066);
return statearr_15109;
})();var statearr_15110_15182 = state_15073__$1;(statearr_15110_15182[(2)] = null);
(statearr_15110_15182[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (6)))
{var inst_15001 = (state_15073[(30)]);var inst_15000 = cljs.core.deref.call(null,cs);var inst_15001__$1 = cljs.core.keys.call(null,inst_15000);var inst_15002 = cljs.core.count.call(null,inst_15001__$1);var inst_15003 = cljs.core.reset_BANG_.call(null,dctr,inst_15002);var inst_15008 = cljs.core.seq.call(null,inst_15001__$1);var inst_15009 = inst_15008;var inst_15010 = null;var inst_15011 = (0);var inst_15012 = (0);var state_15073__$1 = (function (){var statearr_15111 = state_15073;(statearr_15111[(31)] = inst_15003);
(statearr_15111[(19)] = inst_15009);
(statearr_15111[(9)] = inst_15012);
(statearr_15111[(20)] = inst_15011);
(statearr_15111[(10)] = inst_15010);
(statearr_15111[(30)] = inst_15001__$1);
return statearr_15111;
})();var statearr_15112_15183 = state_15073__$1;(statearr_15112_15183[(2)] = null);
(statearr_15112_15183[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (28)))
{var inst_15009 = (state_15073[(19)]);var inst_15030 = (state_15073[(17)]);var inst_15030__$1 = cljs.core.seq.call(null,inst_15009);var state_15073__$1 = (function (){var statearr_15113 = state_15073;(statearr_15113[(17)] = inst_15030__$1);
return statearr_15113;
})();if(inst_15030__$1)
{var statearr_15114_15184 = state_15073__$1;(statearr_15114_15184[(1)] = (33));
} else
{var statearr_15115_15185 = state_15073__$1;(statearr_15115_15185[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (25)))
{var inst_15012 = (state_15073[(9)]);var inst_15011 = (state_15073[(20)]);var inst_15014 = (inst_15012 < inst_15011);var inst_15015 = inst_15014;var state_15073__$1 = state_15073;if(cljs.core.truth_(inst_15015))
{var statearr_15116_15186 = state_15073__$1;(statearr_15116_15186[(1)] = (27));
} else
{var statearr_15117_15187 = state_15073__$1;(statearr_15117_15187[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (34)))
{var state_15073__$1 = state_15073;var statearr_15118_15188 = state_15073__$1;(statearr_15118_15188[(2)] = null);
(statearr_15118_15188[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (17)))
{var state_15073__$1 = state_15073;var statearr_15119_15189 = state_15073__$1;(statearr_15119_15189[(2)] = null);
(statearr_15119_15189[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (3)))
{var inst_15071 = (state_15073[(2)]);var state_15073__$1 = state_15073;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15073__$1,inst_15071);
} else
{if((state_val_15074 === (12)))
{var inst_14996 = (state_15073[(2)]);var state_15073__$1 = state_15073;var statearr_15120_15190 = state_15073__$1;(statearr_15120_15190[(2)] = inst_14996);
(statearr_15120_15190[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (2)))
{var state_15073__$1 = state_15073;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15073__$1,(4),ch);
} else
{if((state_val_15074 === (23)))
{var state_15073__$1 = state_15073;var statearr_15121_15191 = state_15073__$1;(statearr_15121_15191[(2)] = null);
(statearr_15121_15191[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (35)))
{var inst_15055 = (state_15073[(2)]);var state_15073__$1 = state_15073;var statearr_15122_15192 = state_15073__$1;(statearr_15122_15192[(2)] = inst_15055);
(statearr_15122_15192[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (19)))
{var inst_14970 = (state_15073[(7)]);var inst_14974 = cljs.core.chunk_first.call(null,inst_14970);var inst_14975 = cljs.core.chunk_rest.call(null,inst_14970);var inst_14976 = cljs.core.count.call(null,inst_14974);var inst_14950 = inst_14975;var inst_14951 = inst_14974;var inst_14952 = inst_14976;var inst_14953 = (0);var state_15073__$1 = (function (){var statearr_15123 = state_15073;(statearr_15123[(12)] = inst_14950);
(statearr_15123[(14)] = inst_14951);
(statearr_15123[(15)] = inst_14953);
(statearr_15123[(16)] = inst_14952);
return statearr_15123;
})();var statearr_15124_15193 = state_15073__$1;(statearr_15124_15193[(2)] = null);
(statearr_15124_15193[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (11)))
{var inst_14950 = (state_15073[(12)]);var inst_14970 = (state_15073[(7)]);var inst_14970__$1 = cljs.core.seq.call(null,inst_14950);var state_15073__$1 = (function (){var statearr_15125 = state_15073;(statearr_15125[(7)] = inst_14970__$1);
return statearr_15125;
})();if(inst_14970__$1)
{var statearr_15126_15194 = state_15073__$1;(statearr_15126_15194[(1)] = (16));
} else
{var statearr_15127_15195 = state_15073__$1;(statearr_15127_15195[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (9)))
{var inst_14998 = (state_15073[(2)]);var state_15073__$1 = state_15073;var statearr_15128_15196 = state_15073__$1;(statearr_15128_15196[(2)] = inst_14998);
(statearr_15128_15196[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (5)))
{var inst_14948 = cljs.core.deref.call(null,cs);var inst_14949 = cljs.core.seq.call(null,inst_14948);var inst_14950 = inst_14949;var inst_14951 = null;var inst_14952 = (0);var inst_14953 = (0);var state_15073__$1 = (function (){var statearr_15129 = state_15073;(statearr_15129[(12)] = inst_14950);
(statearr_15129[(14)] = inst_14951);
(statearr_15129[(15)] = inst_14953);
(statearr_15129[(16)] = inst_14952);
return statearr_15129;
})();var statearr_15130_15197 = state_15073__$1;(statearr_15130_15197[(2)] = null);
(statearr_15130_15197[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (14)))
{var state_15073__$1 = state_15073;var statearr_15131_15198 = state_15073__$1;(statearr_15131_15198[(2)] = null);
(statearr_15131_15198[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (45)))
{var inst_15063 = (state_15073[(2)]);var state_15073__$1 = state_15073;var statearr_15132_15199 = state_15073__$1;(statearr_15132_15199[(2)] = inst_15063);
(statearr_15132_15199[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (26)))
{var inst_15001 = (state_15073[(30)]);var inst_15059 = (state_15073[(2)]);var inst_15060 = cljs.core.seq.call(null,inst_15001);var state_15073__$1 = (function (){var statearr_15133 = state_15073;(statearr_15133[(32)] = inst_15059);
return statearr_15133;
})();if(inst_15060)
{var statearr_15134_15200 = state_15073__$1;(statearr_15134_15200[(1)] = (42));
} else
{var statearr_15135_15201 = state_15073__$1;(statearr_15135_15201[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (16)))
{var inst_14970 = (state_15073[(7)]);var inst_14972 = cljs.core.chunked_seq_QMARK_.call(null,inst_14970);var state_15073__$1 = state_15073;if(inst_14972)
{var statearr_15139_15202 = state_15073__$1;(statearr_15139_15202[(1)] = (19));
} else
{var statearr_15140_15203 = state_15073__$1;(statearr_15140_15203[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (38)))
{var inst_15052 = (state_15073[(2)]);var state_15073__$1 = state_15073;var statearr_15141_15204 = state_15073__$1;(statearr_15141_15204[(2)] = inst_15052);
(statearr_15141_15204[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (30)))
{var inst_15009 = (state_15073[(19)]);var inst_15012 = (state_15073[(9)]);var inst_15011 = (state_15073[(20)]);var inst_15010 = (state_15073[(10)]);var inst_15026 = (state_15073[(2)]);var inst_15027 = (inst_15012 + (1));var tmp15136 = inst_15009;var tmp15137 = inst_15011;var tmp15138 = inst_15010;var inst_15009__$1 = tmp15136;var inst_15010__$1 = tmp15138;var inst_15011__$1 = tmp15137;var inst_15012__$1 = inst_15027;var state_15073__$1 = (function (){var statearr_15142 = state_15073;(statearr_15142[(19)] = inst_15009__$1);
(statearr_15142[(9)] = inst_15012__$1);
(statearr_15142[(20)] = inst_15011__$1);
(statearr_15142[(10)] = inst_15010__$1);
(statearr_15142[(33)] = inst_15026);
return statearr_15142;
})();var statearr_15143_15205 = state_15073__$1;(statearr_15143_15205[(2)] = null);
(statearr_15143_15205[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (10)))
{var inst_14951 = (state_15073[(14)]);var inst_14953 = (state_15073[(15)]);var inst_14959 = cljs.core._nth.call(null,inst_14951,inst_14953);var inst_14960 = cljs.core.nth.call(null,inst_14959,(0),null);var inst_14961 = cljs.core.nth.call(null,inst_14959,(1),null);var state_15073__$1 = (function (){var statearr_15144 = state_15073;(statearr_15144[(28)] = inst_14960);
return statearr_15144;
})();if(cljs.core.truth_(inst_14961))
{var statearr_15145_15206 = state_15073__$1;(statearr_15145_15206[(1)] = (13));
} else
{var statearr_15146_15207 = state_15073__$1;(statearr_15146_15207[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (18)))
{var inst_14994 = (state_15073[(2)]);var state_15073__$1 = state_15073;var statearr_15147_15208 = state_15073__$1;(statearr_15147_15208[(2)] = inst_14994);
(statearr_15147_15208[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (42)))
{var state_15073__$1 = state_15073;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15073__$1,(45),dchan);
} else
{if((state_val_15074 === (37)))
{var inst_15030 = (state_15073[(17)]);var inst_15039 = cljs.core.first.call(null,inst_15030);var state_15073__$1 = (function (){var statearr_15148 = state_15073;(statearr_15148[(25)] = inst_15039);
return statearr_15148;
})();var statearr_15149_15209 = state_15073__$1;(statearr_15149_15209[(2)] = null);
(statearr_15149_15209[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15074 === (8)))
{var inst_14953 = (state_15073[(15)]);var inst_14952 = (state_15073[(16)]);var inst_14955 = (inst_14953 < inst_14952);var inst_14956 = inst_14955;var state_15073__$1 = state_15073;if(cljs.core.truth_(inst_14956))
{var statearr_15150_15210 = state_15073__$1;(statearr_15150_15210[(1)] = (10));
} else
{var statearr_15151_15211 = state_15073__$1;(statearr_15151_15211[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6345__auto___15159,cs,m,dchan,dctr,done))
;return ((function (switch__6280__auto__,c__6345__auto___15159,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_15155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15155[(0)] = state_machine__6281__auto__);
(statearr_15155[(1)] = (1));
return statearr_15155;
});
var state_machine__6281__auto____1 = (function (state_15073){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_15073);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e15156){if((e15156 instanceof Object))
{var ex__6284__auto__ = e15156;var statearr_15157_15212 = state_15073;(statearr_15157_15212[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15073);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15213 = state_15073;
state_15073 = G__15213;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_15073){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_15073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto___15159,cs,m,dchan,dctr,done))
})();var state__6347__auto__ = (function (){var statearr_15158 = f__6346__auto__.call(null);(statearr_15158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto___15159);
return statearr_15158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto___15159,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj15215 = {};return obj15215;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15325 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15325 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15326){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15326 = meta15326;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15325.cljs$lang$type = true;
cljs.core.async.t15325.cljs$lang$ctorStr = "cljs.core.async/t15325";
cljs.core.async.t15325.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15325");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15325.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15325.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15325.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15325.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15325.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15325.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15325.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15325.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15325.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15327){var self__ = this;
var _15327__$1 = this;return self__.meta15326;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15327,meta15326__$1){var self__ = this;
var _15327__$1 = this;return (new cljs.core.async.t15325(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15326__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15325 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15325(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15326){return (new cljs.core.async.t15325(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15326));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15325(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6345__auto___15434 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto___15434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto___15434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15392){var state_val_15393 = (state_15392[(1)]);if((state_val_15393 === (7)))
{var inst_15341 = (state_15392[(7)]);var inst_15346 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15341);var state_15392__$1 = state_15392;var statearr_15394_15435 = state_15392__$1;(statearr_15394_15435[(2)] = inst_15346);
(statearr_15394_15435[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (20)))
{var inst_15356 = (state_15392[(8)]);var state_15392__$1 = state_15392;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15392__$1,(23),out,inst_15356);
} else
{if((state_val_15393 === (1)))
{var inst_15331 = (state_15392[(9)]);var inst_15331__$1 = calc_state.call(null);var inst_15332 = cljs.core.seq_QMARK_.call(null,inst_15331__$1);var state_15392__$1 = (function (){var statearr_15395 = state_15392;(statearr_15395[(9)] = inst_15331__$1);
return statearr_15395;
})();if(inst_15332)
{var statearr_15396_15436 = state_15392__$1;(statearr_15396_15436[(1)] = (2));
} else
{var statearr_15397_15437 = state_15392__$1;(statearr_15397_15437[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (4)))
{var inst_15331 = (state_15392[(9)]);var inst_15337 = (state_15392[(2)]);var inst_15338 = cljs.core.get.call(null,inst_15337,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_15339 = cljs.core.get.call(null,inst_15337,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_15340 = cljs.core.get.call(null,inst_15337,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_15341 = inst_15331;var state_15392__$1 = (function (){var statearr_15398 = state_15392;(statearr_15398[(7)] = inst_15341);
(statearr_15398[(10)] = inst_15339);
(statearr_15398[(11)] = inst_15338);
(statearr_15398[(12)] = inst_15340);
return statearr_15398;
})();var statearr_15399_15438 = state_15392__$1;(statearr_15399_15438[(2)] = null);
(statearr_15399_15438[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (15)))
{var state_15392__$1 = state_15392;var statearr_15400_15439 = state_15392__$1;(statearr_15400_15439[(2)] = null);
(statearr_15400_15439[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (21)))
{var state_15392__$1 = state_15392;var statearr_15401_15440 = state_15392__$1;(statearr_15401_15440[(2)] = null);
(statearr_15401_15440[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (13)))
{var inst_15388 = (state_15392[(2)]);var state_15392__$1 = state_15392;var statearr_15402_15441 = state_15392__$1;(statearr_15402_15441[(2)] = inst_15388);
(statearr_15402_15441[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (22)))
{var inst_15349 = (state_15392[(13)]);var inst_15385 = (state_15392[(2)]);var inst_15341 = inst_15349;var state_15392__$1 = (function (){var statearr_15403 = state_15392;(statearr_15403[(7)] = inst_15341);
(statearr_15403[(14)] = inst_15385);
return statearr_15403;
})();var statearr_15404_15442 = state_15392__$1;(statearr_15404_15442[(2)] = null);
(statearr_15404_15442[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (6)))
{var inst_15390 = (state_15392[(2)]);var state_15392__$1 = state_15392;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15392__$1,inst_15390);
} else
{if((state_val_15393 === (17)))
{var inst_15371 = (state_15392[(15)]);var state_15392__$1 = state_15392;var statearr_15405_15443 = state_15392__$1;(statearr_15405_15443[(2)] = inst_15371);
(statearr_15405_15443[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (3)))
{var inst_15331 = (state_15392[(9)]);var state_15392__$1 = state_15392;var statearr_15406_15444 = state_15392__$1;(statearr_15406_15444[(2)] = inst_15331);
(statearr_15406_15444[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (12)))
{var inst_15371 = (state_15392[(15)]);var inst_15357 = (state_15392[(16)]);var inst_15352 = (state_15392[(17)]);var inst_15371__$1 = inst_15352.call(null,inst_15357);var state_15392__$1 = (function (){var statearr_15407 = state_15392;(statearr_15407[(15)] = inst_15371__$1);
return statearr_15407;
})();if(cljs.core.truth_(inst_15371__$1))
{var statearr_15408_15445 = state_15392__$1;(statearr_15408_15445[(1)] = (17));
} else
{var statearr_15409_15446 = state_15392__$1;(statearr_15409_15446[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (2)))
{var inst_15331 = (state_15392[(9)]);var inst_15334 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15331);var state_15392__$1 = state_15392;var statearr_15410_15447 = state_15392__$1;(statearr_15410_15447[(2)] = inst_15334);
(statearr_15410_15447[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (23)))
{var inst_15382 = (state_15392[(2)]);var state_15392__$1 = state_15392;var statearr_15411_15448 = state_15392__$1;(statearr_15411_15448[(2)] = inst_15382);
(statearr_15411_15448[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (19)))
{var inst_15379 = (state_15392[(2)]);var state_15392__$1 = state_15392;if(cljs.core.truth_(inst_15379))
{var statearr_15412_15449 = state_15392__$1;(statearr_15412_15449[(1)] = (20));
} else
{var statearr_15413_15450 = state_15392__$1;(statearr_15413_15450[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (11)))
{var inst_15356 = (state_15392[(8)]);var inst_15362 = (inst_15356 == null);var state_15392__$1 = state_15392;if(cljs.core.truth_(inst_15362))
{var statearr_15414_15451 = state_15392__$1;(statearr_15414_15451[(1)] = (14));
} else
{var statearr_15415_15452 = state_15392__$1;(statearr_15415_15452[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (9)))
{var inst_15349 = (state_15392[(13)]);var inst_15349__$1 = (state_15392[(2)]);var inst_15350 = cljs.core.get.call(null,inst_15349__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_15351 = cljs.core.get.call(null,inst_15349__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_15352 = cljs.core.get.call(null,inst_15349__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_15392__$1 = (function (){var statearr_15416 = state_15392;(statearr_15416[(18)] = inst_15351);
(statearr_15416[(17)] = inst_15352);
(statearr_15416[(13)] = inst_15349__$1);
return statearr_15416;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15392__$1,(10),inst_15350);
} else
{if((state_val_15393 === (5)))
{var inst_15341 = (state_15392[(7)]);var inst_15344 = cljs.core.seq_QMARK_.call(null,inst_15341);var state_15392__$1 = state_15392;if(inst_15344)
{var statearr_15417_15453 = state_15392__$1;(statearr_15417_15453[(1)] = (7));
} else
{var statearr_15418_15454 = state_15392__$1;(statearr_15418_15454[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (14)))
{var inst_15357 = (state_15392[(16)]);var inst_15364 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15357);var state_15392__$1 = state_15392;var statearr_15419_15455 = state_15392__$1;(statearr_15419_15455[(2)] = inst_15364);
(statearr_15419_15455[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (16)))
{var inst_15367 = (state_15392[(2)]);var inst_15368 = calc_state.call(null);var inst_15341 = inst_15368;var state_15392__$1 = (function (){var statearr_15420 = state_15392;(statearr_15420[(7)] = inst_15341);
(statearr_15420[(19)] = inst_15367);
return statearr_15420;
})();var statearr_15421_15456 = state_15392__$1;(statearr_15421_15456[(2)] = null);
(statearr_15421_15456[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (10)))
{var inst_15357 = (state_15392[(16)]);var inst_15356 = (state_15392[(8)]);var inst_15355 = (state_15392[(2)]);var inst_15356__$1 = cljs.core.nth.call(null,inst_15355,(0),null);var inst_15357__$1 = cljs.core.nth.call(null,inst_15355,(1),null);var inst_15358 = (inst_15356__$1 == null);var inst_15359 = cljs.core._EQ_.call(null,inst_15357__$1,change);var inst_15360 = (inst_15358) || (inst_15359);var state_15392__$1 = (function (){var statearr_15422 = state_15392;(statearr_15422[(16)] = inst_15357__$1);
(statearr_15422[(8)] = inst_15356__$1);
return statearr_15422;
})();if(cljs.core.truth_(inst_15360))
{var statearr_15423_15457 = state_15392__$1;(statearr_15423_15457[(1)] = (11));
} else
{var statearr_15424_15458 = state_15392__$1;(statearr_15424_15458[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (18)))
{var inst_15357 = (state_15392[(16)]);var inst_15351 = (state_15392[(18)]);var inst_15352 = (state_15392[(17)]);var inst_15374 = cljs.core.empty_QMARK_.call(null,inst_15352);var inst_15375 = inst_15351.call(null,inst_15357);var inst_15376 = cljs.core.not.call(null,inst_15375);var inst_15377 = (inst_15374) && (inst_15376);var state_15392__$1 = state_15392;var statearr_15425_15459 = state_15392__$1;(statearr_15425_15459[(2)] = inst_15377);
(statearr_15425_15459[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15393 === (8)))
{var inst_15341 = (state_15392[(7)]);var state_15392__$1 = state_15392;var statearr_15426_15460 = state_15392__$1;(statearr_15426_15460[(2)] = inst_15341);
(statearr_15426_15460[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__6345__auto___15434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6280__auto__,c__6345__auto___15434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_15430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15430[(0)] = state_machine__6281__auto__);
(statearr_15430[(1)] = (1));
return statearr_15430;
});
var state_machine__6281__auto____1 = (function (state_15392){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_15392);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e15431){if((e15431 instanceof Object))
{var ex__6284__auto__ = e15431;var statearr_15432_15461 = state_15392;(statearr_15432_15461[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15392);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15431;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15462 = state_15392;
state_15392 = G__15462;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_15392){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_15392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto___15434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6347__auto__ = (function (){var statearr_15433 = f__6346__auto__.call(null);(statearr_15433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto___15434);
return statearr_15433;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto___15434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj15464 = {};return obj15464;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3543__auto__,mults){
return (function (p1__15465_SHARP_){if(cljs.core.truth_(p1__15465_SHARP_.call(null,topic)))
{return p1__15465_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15465_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15590 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15590 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15591){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15591 = meta15591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15590.cljs$lang$type = true;
cljs.core.async.t15590.cljs$lang$ctorStr = "cljs.core.async/t15590";
cljs.core.async.t15590.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15590");
});})(mults,ensure_mult))
;
cljs.core.async.t15590.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15590.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15590.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15590.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15590.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15590.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15590.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15592){var self__ = this;
var _15592__$1 = this;return self__.meta15591;
});})(mults,ensure_mult))
;
cljs.core.async.t15590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15592,meta15591__$1){var self__ = this;
var _15592__$1 = this;return (new cljs.core.async.t15590(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15591__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15590 = ((function (mults,ensure_mult){
return (function __GT_t15590(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15591){return (new cljs.core.async.t15590(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15591));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15590(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6345__auto___15714 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto___15714,mults,ensure_mult,p){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto___15714,mults,ensure_mult,p){
return (function (state_15666){var state_val_15667 = (state_15666[(1)]);if((state_val_15667 === (7)))
{var inst_15662 = (state_15666[(2)]);var state_15666__$1 = state_15666;var statearr_15668_15715 = state_15666__$1;(statearr_15668_15715[(2)] = inst_15662);
(statearr_15668_15715[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (20)))
{var state_15666__$1 = state_15666;var statearr_15669_15716 = state_15666__$1;(statearr_15669_15716[(2)] = null);
(statearr_15669_15716[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (1)))
{var state_15666__$1 = state_15666;var statearr_15670_15717 = state_15666__$1;(statearr_15670_15717[(2)] = null);
(statearr_15670_15717[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (24)))
{var inst_15595 = (state_15666[(7)]);var inst_15645 = (state_15666[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15666,(23),Object,null,(22));var inst_15652 = cljs.core.async.muxch_STAR_.call(null,inst_15645);var state_15666__$1 = state_15666;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15666__$1,(25),inst_15652,inst_15595);
} else
{if((state_val_15667 === (4)))
{var inst_15595 = (state_15666[(7)]);var inst_15595__$1 = (state_15666[(2)]);var inst_15596 = (inst_15595__$1 == null);var state_15666__$1 = (function (){var statearr_15671 = state_15666;(statearr_15671[(7)] = inst_15595__$1);
return statearr_15671;
})();if(cljs.core.truth_(inst_15596))
{var statearr_15672_15718 = state_15666__$1;(statearr_15672_15718[(1)] = (5));
} else
{var statearr_15673_15719 = state_15666__$1;(statearr_15673_15719[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (15)))
{var inst_15637 = (state_15666[(2)]);var state_15666__$1 = state_15666;var statearr_15674_15720 = state_15666__$1;(statearr_15674_15720[(2)] = inst_15637);
(statearr_15674_15720[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (21)))
{var inst_15659 = (state_15666[(2)]);var state_15666__$1 = (function (){var statearr_15675 = state_15666;(statearr_15675[(9)] = inst_15659);
return statearr_15675;
})();var statearr_15676_15721 = state_15666__$1;(statearr_15676_15721[(2)] = null);
(statearr_15676_15721[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (13)))
{var inst_15619 = (state_15666[(10)]);var inst_15621 = cljs.core.chunked_seq_QMARK_.call(null,inst_15619);var state_15666__$1 = state_15666;if(inst_15621)
{var statearr_15677_15722 = state_15666__$1;(statearr_15677_15722[(1)] = (16));
} else
{var statearr_15678_15723 = state_15666__$1;(statearr_15678_15723[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (22)))
{var inst_15656 = (state_15666[(2)]);var state_15666__$1 = state_15666;var statearr_15679_15724 = state_15666__$1;(statearr_15679_15724[(2)] = inst_15656);
(statearr_15679_15724[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (6)))
{var inst_15595 = (state_15666[(7)]);var inst_15645 = (state_15666[(8)]);var inst_15643 = (state_15666[(11)]);var inst_15643__$1 = topic_fn.call(null,inst_15595);var inst_15644 = cljs.core.deref.call(null,mults);var inst_15645__$1 = cljs.core.get.call(null,inst_15644,inst_15643__$1);var state_15666__$1 = (function (){var statearr_15680 = state_15666;(statearr_15680[(8)] = inst_15645__$1);
(statearr_15680[(11)] = inst_15643__$1);
return statearr_15680;
})();if(cljs.core.truth_(inst_15645__$1))
{var statearr_15681_15725 = state_15666__$1;(statearr_15681_15725[(1)] = (19));
} else
{var statearr_15682_15726 = state_15666__$1;(statearr_15682_15726[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (25)))
{var inst_15654 = (state_15666[(2)]);var state_15666__$1 = state_15666;var statearr_15683_15727 = state_15666__$1;(statearr_15683_15727[(2)] = inst_15654);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15666__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (17)))
{var inst_15619 = (state_15666[(10)]);var inst_15628 = cljs.core.first.call(null,inst_15619);var inst_15629 = cljs.core.async.muxch_STAR_.call(null,inst_15628);var inst_15630 = cljs.core.async.close_BANG_.call(null,inst_15629);var inst_15631 = cljs.core.next.call(null,inst_15619);var inst_15605 = inst_15631;var inst_15606 = null;var inst_15607 = (0);var inst_15608 = (0);var state_15666__$1 = (function (){var statearr_15684 = state_15666;(statearr_15684[(12)] = inst_15630);
(statearr_15684[(13)] = inst_15607);
(statearr_15684[(14)] = inst_15606);
(statearr_15684[(15)] = inst_15605);
(statearr_15684[(16)] = inst_15608);
return statearr_15684;
})();var statearr_15685_15728 = state_15666__$1;(statearr_15685_15728[(2)] = null);
(statearr_15685_15728[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (3)))
{var inst_15664 = (state_15666[(2)]);var state_15666__$1 = state_15666;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15666__$1,inst_15664);
} else
{if((state_val_15667 === (12)))
{var inst_15639 = (state_15666[(2)]);var state_15666__$1 = state_15666;var statearr_15686_15729 = state_15666__$1;(statearr_15686_15729[(2)] = inst_15639);
(statearr_15686_15729[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (2)))
{var state_15666__$1 = state_15666;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15666__$1,(4),ch);
} else
{if((state_val_15667 === (23)))
{var inst_15643 = (state_15666[(11)]);var inst_15647 = (state_15666[(2)]);var inst_15648 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15643);var state_15666__$1 = (function (){var statearr_15687 = state_15666;(statearr_15687[(17)] = inst_15647);
return statearr_15687;
})();var statearr_15688_15730 = state_15666__$1;(statearr_15688_15730[(2)] = inst_15648);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15666__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (19)))
{var state_15666__$1 = state_15666;var statearr_15689_15731 = state_15666__$1;(statearr_15689_15731[(2)] = null);
(statearr_15689_15731[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (11)))
{var inst_15605 = (state_15666[(15)]);var inst_15619 = (state_15666[(10)]);var inst_15619__$1 = cljs.core.seq.call(null,inst_15605);var state_15666__$1 = (function (){var statearr_15690 = state_15666;(statearr_15690[(10)] = inst_15619__$1);
return statearr_15690;
})();if(inst_15619__$1)
{var statearr_15691_15732 = state_15666__$1;(statearr_15691_15732[(1)] = (13));
} else
{var statearr_15692_15733 = state_15666__$1;(statearr_15692_15733[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (9)))
{var inst_15641 = (state_15666[(2)]);var state_15666__$1 = state_15666;var statearr_15693_15734 = state_15666__$1;(statearr_15693_15734[(2)] = inst_15641);
(statearr_15693_15734[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (5)))
{var inst_15602 = cljs.core.deref.call(null,mults);var inst_15603 = cljs.core.vals.call(null,inst_15602);var inst_15604 = cljs.core.seq.call(null,inst_15603);var inst_15605 = inst_15604;var inst_15606 = null;var inst_15607 = (0);var inst_15608 = (0);var state_15666__$1 = (function (){var statearr_15694 = state_15666;(statearr_15694[(13)] = inst_15607);
(statearr_15694[(14)] = inst_15606);
(statearr_15694[(15)] = inst_15605);
(statearr_15694[(16)] = inst_15608);
return statearr_15694;
})();var statearr_15695_15735 = state_15666__$1;(statearr_15695_15735[(2)] = null);
(statearr_15695_15735[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (14)))
{var state_15666__$1 = state_15666;var statearr_15699_15736 = state_15666__$1;(statearr_15699_15736[(2)] = null);
(statearr_15699_15736[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (16)))
{var inst_15619 = (state_15666[(10)]);var inst_15623 = cljs.core.chunk_first.call(null,inst_15619);var inst_15624 = cljs.core.chunk_rest.call(null,inst_15619);var inst_15625 = cljs.core.count.call(null,inst_15623);var inst_15605 = inst_15624;var inst_15606 = inst_15623;var inst_15607 = inst_15625;var inst_15608 = (0);var state_15666__$1 = (function (){var statearr_15700 = state_15666;(statearr_15700[(13)] = inst_15607);
(statearr_15700[(14)] = inst_15606);
(statearr_15700[(15)] = inst_15605);
(statearr_15700[(16)] = inst_15608);
return statearr_15700;
})();var statearr_15701_15737 = state_15666__$1;(statearr_15701_15737[(2)] = null);
(statearr_15701_15737[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (10)))
{var inst_15607 = (state_15666[(13)]);var inst_15606 = (state_15666[(14)]);var inst_15605 = (state_15666[(15)]);var inst_15608 = (state_15666[(16)]);var inst_15613 = cljs.core._nth.call(null,inst_15606,inst_15608);var inst_15614 = cljs.core.async.muxch_STAR_.call(null,inst_15613);var inst_15615 = cljs.core.async.close_BANG_.call(null,inst_15614);var inst_15616 = (inst_15608 + (1));var tmp15696 = inst_15607;var tmp15697 = inst_15606;var tmp15698 = inst_15605;var inst_15605__$1 = tmp15698;var inst_15606__$1 = tmp15697;var inst_15607__$1 = tmp15696;var inst_15608__$1 = inst_15616;var state_15666__$1 = (function (){var statearr_15702 = state_15666;(statearr_15702[(18)] = inst_15615);
(statearr_15702[(13)] = inst_15607__$1);
(statearr_15702[(14)] = inst_15606__$1);
(statearr_15702[(15)] = inst_15605__$1);
(statearr_15702[(16)] = inst_15608__$1);
return statearr_15702;
})();var statearr_15703_15738 = state_15666__$1;(statearr_15703_15738[(2)] = null);
(statearr_15703_15738[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (18)))
{var inst_15634 = (state_15666[(2)]);var state_15666__$1 = state_15666;var statearr_15704_15739 = state_15666__$1;(statearr_15704_15739[(2)] = inst_15634);
(statearr_15704_15739[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15667 === (8)))
{var inst_15607 = (state_15666[(13)]);var inst_15608 = (state_15666[(16)]);var inst_15610 = (inst_15608 < inst_15607);var inst_15611 = inst_15610;var state_15666__$1 = state_15666;if(cljs.core.truth_(inst_15611))
{var statearr_15705_15740 = state_15666__$1;(statearr_15705_15740[(1)] = (10));
} else
{var statearr_15706_15741 = state_15666__$1;(statearr_15706_15741[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
});})(c__6345__auto___15714,mults,ensure_mult,p))
;return ((function (switch__6280__auto__,c__6345__auto___15714,mults,ensure_mult,p){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_15710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15710[(0)] = state_machine__6281__auto__);
(statearr_15710[(1)] = (1));
return statearr_15710;
});
var state_machine__6281__auto____1 = (function (state_15666){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_15666);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e15711){if((e15711 instanceof Object))
{var ex__6284__auto__ = e15711;var statearr_15712_15742 = state_15666;(statearr_15712_15742[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15666);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15711;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15743 = state_15666;
state_15666 = G__15743;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_15666){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_15666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto___15714,mults,ensure_mult,p))
})();var state__6347__auto__ = (function (){var statearr_15713 = f__6346__auto__.call(null);(statearr_15713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto___15714);
return statearr_15713;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto___15714,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6345__auto___15880 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto___15880,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto___15880,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15850){var state_val_15851 = (state_15850[(1)]);if((state_val_15851 === (7)))
{var state_15850__$1 = state_15850;var statearr_15852_15881 = state_15850__$1;(statearr_15852_15881[(2)] = null);
(statearr_15852_15881[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15851 === (1)))
{var state_15850__$1 = state_15850;var statearr_15853_15882 = state_15850__$1;(statearr_15853_15882[(2)] = null);
(statearr_15853_15882[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15851 === (4)))
{var inst_15814 = (state_15850[(7)]);var inst_15816 = (inst_15814 < cnt);var state_15850__$1 = state_15850;if(cljs.core.truth_(inst_15816))
{var statearr_15854_15883 = state_15850__$1;(statearr_15854_15883[(1)] = (6));
} else
{var statearr_15855_15884 = state_15850__$1;(statearr_15855_15884[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15851 === (15)))
{var inst_15846 = (state_15850[(2)]);var state_15850__$1 = state_15850;var statearr_15856_15885 = state_15850__$1;(statearr_15856_15885[(2)] = inst_15846);
(statearr_15856_15885[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15851 === (13)))
{var inst_15839 = cljs.core.async.close_BANG_.call(null,out);var state_15850__$1 = state_15850;var statearr_15857_15886 = state_15850__$1;(statearr_15857_15886[(2)] = inst_15839);
(statearr_15857_15886[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15851 === (6)))
{var state_15850__$1 = state_15850;var statearr_15858_15887 = state_15850__$1;(statearr_15858_15887[(2)] = null);
(statearr_15858_15887[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15851 === (3)))
{var inst_15848 = (state_15850[(2)]);var state_15850__$1 = state_15850;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15850__$1,inst_15848);
} else
{if((state_val_15851 === (12)))
{var inst_15836 = (state_15850[(8)]);var inst_15836__$1 = (state_15850[(2)]);var inst_15837 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15836__$1);var state_15850__$1 = (function (){var statearr_15859 = state_15850;(statearr_15859[(8)] = inst_15836__$1);
return statearr_15859;
})();if(cljs.core.truth_(inst_15837))
{var statearr_15860_15888 = state_15850__$1;(statearr_15860_15888[(1)] = (13));
} else
{var statearr_15861_15889 = state_15850__$1;(statearr_15861_15889[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15851 === (2)))
{var inst_15813 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15814 = (0);var state_15850__$1 = (function (){var statearr_15862 = state_15850;(statearr_15862[(7)] = inst_15814);
(statearr_15862[(9)] = inst_15813);
return statearr_15862;
})();var statearr_15863_15890 = state_15850__$1;(statearr_15863_15890[(2)] = null);
(statearr_15863_15890[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15851 === (11)))
{var inst_15814 = (state_15850[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15850,(10),Object,null,(9));var inst_15823 = chs__$1.call(null,inst_15814);var inst_15824 = done.call(null,inst_15814);var inst_15825 = cljs.core.async.take_BANG_.call(null,inst_15823,inst_15824);var state_15850__$1 = state_15850;var statearr_15864_15891 = state_15850__$1;(statearr_15864_15891[(2)] = inst_15825);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15850__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15851 === (9)))
{var inst_15814 = (state_15850[(7)]);var inst_15827 = (state_15850[(2)]);var inst_15828 = (inst_15814 + (1));var inst_15814__$1 = inst_15828;var state_15850__$1 = (function (){var statearr_15865 = state_15850;(statearr_15865[(7)] = inst_15814__$1);
(statearr_15865[(10)] = inst_15827);
return statearr_15865;
})();var statearr_15866_15892 = state_15850__$1;(statearr_15866_15892[(2)] = null);
(statearr_15866_15892[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15851 === (5)))
{var inst_15834 = (state_15850[(2)]);var state_15850__$1 = (function (){var statearr_15867 = state_15850;(statearr_15867[(11)] = inst_15834);
return statearr_15867;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15850__$1,(12),dchan);
} else
{if((state_val_15851 === (14)))
{var inst_15836 = (state_15850[(8)]);var inst_15841 = cljs.core.apply.call(null,f,inst_15836);var state_15850__$1 = state_15850;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15850__$1,(16),out,inst_15841);
} else
{if((state_val_15851 === (16)))
{var inst_15843 = (state_15850[(2)]);var state_15850__$1 = (function (){var statearr_15868 = state_15850;(statearr_15868[(12)] = inst_15843);
return statearr_15868;
})();var statearr_15869_15893 = state_15850__$1;(statearr_15869_15893[(2)] = null);
(statearr_15869_15893[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15851 === (10)))
{var inst_15818 = (state_15850[(2)]);var inst_15819 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15850__$1 = (function (){var statearr_15870 = state_15850;(statearr_15870[(13)] = inst_15818);
return statearr_15870;
})();var statearr_15871_15894 = state_15850__$1;(statearr_15871_15894[(2)] = inst_15819);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15850__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15851 === (8)))
{var inst_15832 = (state_15850[(2)]);var state_15850__$1 = state_15850;var statearr_15872_15895 = state_15850__$1;(statearr_15872_15895[(2)] = inst_15832);
(statearr_15872_15895[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6345__auto___15880,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6280__auto__,c__6345__auto___15880,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_15876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15876[(0)] = state_machine__6281__auto__);
(statearr_15876[(1)] = (1));
return statearr_15876;
});
var state_machine__6281__auto____1 = (function (state_15850){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_15850);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e15877){if((e15877 instanceof Object))
{var ex__6284__auto__ = e15877;var statearr_15878_15896 = state_15850;(statearr_15878_15896[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15850);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15877;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15897 = state_15850;
state_15850 = G__15897;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_15850){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_15850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto___15880,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6347__auto__ = (function (){var statearr_15879 = f__6346__auto__.call(null);(statearr_15879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto___15880);
return statearr_15879;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto___15880,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6345__auto___16005 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto___16005,out){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto___16005,out){
return (function (state_15981){var state_val_15982 = (state_15981[(1)]);if((state_val_15982 === (7)))
{var inst_15960 = (state_15981[(7)]);var inst_15961 = (state_15981[(8)]);var inst_15960__$1 = (state_15981[(2)]);var inst_15961__$1 = cljs.core.nth.call(null,inst_15960__$1,(0),null);var inst_15962 = cljs.core.nth.call(null,inst_15960__$1,(1),null);var inst_15963 = (inst_15961__$1 == null);var state_15981__$1 = (function (){var statearr_15983 = state_15981;(statearr_15983[(9)] = inst_15962);
(statearr_15983[(7)] = inst_15960__$1);
(statearr_15983[(8)] = inst_15961__$1);
return statearr_15983;
})();if(cljs.core.truth_(inst_15963))
{var statearr_15984_16006 = state_15981__$1;(statearr_15984_16006[(1)] = (8));
} else
{var statearr_15985_16007 = state_15981__$1;(statearr_15985_16007[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15982 === (1)))
{var inst_15952 = cljs.core.vec.call(null,chs);var inst_15953 = inst_15952;var state_15981__$1 = (function (){var statearr_15986 = state_15981;(statearr_15986[(10)] = inst_15953);
return statearr_15986;
})();var statearr_15987_16008 = state_15981__$1;(statearr_15987_16008[(2)] = null);
(statearr_15987_16008[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15982 === (4)))
{var inst_15953 = (state_15981[(10)]);var state_15981__$1 = state_15981;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15981__$1,(7),inst_15953);
} else
{if((state_val_15982 === (6)))
{var inst_15977 = (state_15981[(2)]);var state_15981__$1 = state_15981;var statearr_15988_16009 = state_15981__$1;(statearr_15988_16009[(2)] = inst_15977);
(statearr_15988_16009[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15982 === (3)))
{var inst_15979 = (state_15981[(2)]);var state_15981__$1 = state_15981;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15981__$1,inst_15979);
} else
{if((state_val_15982 === (2)))
{var inst_15953 = (state_15981[(10)]);var inst_15955 = cljs.core.count.call(null,inst_15953);var inst_15956 = (inst_15955 > (0));var state_15981__$1 = state_15981;if(cljs.core.truth_(inst_15956))
{var statearr_15990_16010 = state_15981__$1;(statearr_15990_16010[(1)] = (4));
} else
{var statearr_15991_16011 = state_15981__$1;(statearr_15991_16011[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15982 === (11)))
{var inst_15953 = (state_15981[(10)]);var inst_15970 = (state_15981[(2)]);var tmp15989 = inst_15953;var inst_15953__$1 = tmp15989;var state_15981__$1 = (function (){var statearr_15992 = state_15981;(statearr_15992[(11)] = inst_15970);
(statearr_15992[(10)] = inst_15953__$1);
return statearr_15992;
})();var statearr_15993_16012 = state_15981__$1;(statearr_15993_16012[(2)] = null);
(statearr_15993_16012[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15982 === (9)))
{var inst_15961 = (state_15981[(8)]);var state_15981__$1 = state_15981;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15981__$1,(11),out,inst_15961);
} else
{if((state_val_15982 === (5)))
{var inst_15975 = cljs.core.async.close_BANG_.call(null,out);var state_15981__$1 = state_15981;var statearr_15994_16013 = state_15981__$1;(statearr_15994_16013[(2)] = inst_15975);
(statearr_15994_16013[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15982 === (10)))
{var inst_15973 = (state_15981[(2)]);var state_15981__$1 = state_15981;var statearr_15995_16014 = state_15981__$1;(statearr_15995_16014[(2)] = inst_15973);
(statearr_15995_16014[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15982 === (8)))
{var inst_15953 = (state_15981[(10)]);var inst_15962 = (state_15981[(9)]);var inst_15960 = (state_15981[(7)]);var inst_15961 = (state_15981[(8)]);var inst_15965 = (function (){var c = inst_15962;var v = inst_15961;var vec__15958 = inst_15960;var cs = inst_15953;return ((function (c,v,vec__15958,cs,inst_15953,inst_15962,inst_15960,inst_15961,state_val_15982,c__6345__auto___16005,out){
return (function (p1__15898_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15898_SHARP_);
});
;})(c,v,vec__15958,cs,inst_15953,inst_15962,inst_15960,inst_15961,state_val_15982,c__6345__auto___16005,out))
})();var inst_15966 = cljs.core.filterv.call(null,inst_15965,inst_15953);var inst_15953__$1 = inst_15966;var state_15981__$1 = (function (){var statearr_15996 = state_15981;(statearr_15996[(10)] = inst_15953__$1);
return statearr_15996;
})();var statearr_15997_16015 = state_15981__$1;(statearr_15997_16015[(2)] = null);
(statearr_15997_16015[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6345__auto___16005,out))
;return ((function (switch__6280__auto__,c__6345__auto___16005,out){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_16001 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16001[(0)] = state_machine__6281__auto__);
(statearr_16001[(1)] = (1));
return statearr_16001;
});
var state_machine__6281__auto____1 = (function (state_15981){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_15981);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e16002){if((e16002 instanceof Object))
{var ex__6284__auto__ = e16002;var statearr_16003_16016 = state_15981;(statearr_16003_16016[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15981);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16002;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16017 = state_15981;
state_15981 = G__16017;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_15981){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_15981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto___16005,out))
})();var state__6347__auto__ = (function (){var statearr_16004 = f__6346__auto__.call(null);(statearr_16004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto___16005);
return statearr_16004;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto___16005,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6345__auto___16110 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto___16110,out){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto___16110,out){
return (function (state_16087){var state_val_16088 = (state_16087[(1)]);if((state_val_16088 === (7)))
{var inst_16069 = (state_16087[(7)]);var inst_16069__$1 = (state_16087[(2)]);var inst_16070 = (inst_16069__$1 == null);var inst_16071 = cljs.core.not.call(null,inst_16070);var state_16087__$1 = (function (){var statearr_16089 = state_16087;(statearr_16089[(7)] = inst_16069__$1);
return statearr_16089;
})();if(inst_16071)
{var statearr_16090_16111 = state_16087__$1;(statearr_16090_16111[(1)] = (8));
} else
{var statearr_16091_16112 = state_16087__$1;(statearr_16091_16112[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16088 === (1)))
{var inst_16064 = (0);var state_16087__$1 = (function (){var statearr_16092 = state_16087;(statearr_16092[(8)] = inst_16064);
return statearr_16092;
})();var statearr_16093_16113 = state_16087__$1;(statearr_16093_16113[(2)] = null);
(statearr_16093_16113[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16088 === (4)))
{var state_16087__$1 = state_16087;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16087__$1,(7),ch);
} else
{if((state_val_16088 === (6)))
{var inst_16082 = (state_16087[(2)]);var state_16087__$1 = state_16087;var statearr_16094_16114 = state_16087__$1;(statearr_16094_16114[(2)] = inst_16082);
(statearr_16094_16114[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16088 === (3)))
{var inst_16084 = (state_16087[(2)]);var inst_16085 = cljs.core.async.close_BANG_.call(null,out);var state_16087__$1 = (function (){var statearr_16095 = state_16087;(statearr_16095[(9)] = inst_16084);
return statearr_16095;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16087__$1,inst_16085);
} else
{if((state_val_16088 === (2)))
{var inst_16064 = (state_16087[(8)]);var inst_16066 = (inst_16064 < n);var state_16087__$1 = state_16087;if(cljs.core.truth_(inst_16066))
{var statearr_16096_16115 = state_16087__$1;(statearr_16096_16115[(1)] = (4));
} else
{var statearr_16097_16116 = state_16087__$1;(statearr_16097_16116[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16088 === (11)))
{var inst_16064 = (state_16087[(8)]);var inst_16074 = (state_16087[(2)]);var inst_16075 = (inst_16064 + (1));var inst_16064__$1 = inst_16075;var state_16087__$1 = (function (){var statearr_16098 = state_16087;(statearr_16098[(10)] = inst_16074);
(statearr_16098[(8)] = inst_16064__$1);
return statearr_16098;
})();var statearr_16099_16117 = state_16087__$1;(statearr_16099_16117[(2)] = null);
(statearr_16099_16117[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16088 === (9)))
{var state_16087__$1 = state_16087;var statearr_16100_16118 = state_16087__$1;(statearr_16100_16118[(2)] = null);
(statearr_16100_16118[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16088 === (5)))
{var state_16087__$1 = state_16087;var statearr_16101_16119 = state_16087__$1;(statearr_16101_16119[(2)] = null);
(statearr_16101_16119[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16088 === (10)))
{var inst_16079 = (state_16087[(2)]);var state_16087__$1 = state_16087;var statearr_16102_16120 = state_16087__$1;(statearr_16102_16120[(2)] = inst_16079);
(statearr_16102_16120[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16088 === (8)))
{var inst_16069 = (state_16087[(7)]);var state_16087__$1 = state_16087;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16087__$1,(11),out,inst_16069);
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
});})(c__6345__auto___16110,out))
;return ((function (switch__6280__auto__,c__6345__auto___16110,out){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_16106 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16106[(0)] = state_machine__6281__auto__);
(statearr_16106[(1)] = (1));
return statearr_16106;
});
var state_machine__6281__auto____1 = (function (state_16087){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_16087);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e16107){if((e16107 instanceof Object))
{var ex__6284__auto__ = e16107;var statearr_16108_16121 = state_16087;(statearr_16108_16121[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16087);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16107;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16122 = state_16087;
state_16087 = G__16122;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_16087){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_16087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto___16110,out))
})();var state__6347__auto__ = (function (){var statearr_16109 = f__6346__auto__.call(null);(statearr_16109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto___16110);
return statearr_16109;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto___16110,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6345__auto___16219 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto___16219,out){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto___16219,out){
return (function (state_16194){var state_val_16195 = (state_16194[(1)]);if((state_val_16195 === (7)))
{var inst_16189 = (state_16194[(2)]);var state_16194__$1 = state_16194;var statearr_16196_16220 = state_16194__$1;(statearr_16196_16220[(2)] = inst_16189);
(statearr_16196_16220[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16195 === (1)))
{var inst_16171 = null;var state_16194__$1 = (function (){var statearr_16197 = state_16194;(statearr_16197[(7)] = inst_16171);
return statearr_16197;
})();var statearr_16198_16221 = state_16194__$1;(statearr_16198_16221[(2)] = null);
(statearr_16198_16221[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16195 === (4)))
{var inst_16174 = (state_16194[(8)]);var inst_16174__$1 = (state_16194[(2)]);var inst_16175 = (inst_16174__$1 == null);var inst_16176 = cljs.core.not.call(null,inst_16175);var state_16194__$1 = (function (){var statearr_16199 = state_16194;(statearr_16199[(8)] = inst_16174__$1);
return statearr_16199;
})();if(inst_16176)
{var statearr_16200_16222 = state_16194__$1;(statearr_16200_16222[(1)] = (5));
} else
{var statearr_16201_16223 = state_16194__$1;(statearr_16201_16223[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16195 === (6)))
{var state_16194__$1 = state_16194;var statearr_16202_16224 = state_16194__$1;(statearr_16202_16224[(2)] = null);
(statearr_16202_16224[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16195 === (3)))
{var inst_16191 = (state_16194[(2)]);var inst_16192 = cljs.core.async.close_BANG_.call(null,out);var state_16194__$1 = (function (){var statearr_16203 = state_16194;(statearr_16203[(9)] = inst_16191);
return statearr_16203;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16194__$1,inst_16192);
} else
{if((state_val_16195 === (2)))
{var state_16194__$1 = state_16194;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16194__$1,(4),ch);
} else
{if((state_val_16195 === (11)))
{var inst_16174 = (state_16194[(8)]);var inst_16183 = (state_16194[(2)]);var inst_16171 = inst_16174;var state_16194__$1 = (function (){var statearr_16204 = state_16194;(statearr_16204[(10)] = inst_16183);
(statearr_16204[(7)] = inst_16171);
return statearr_16204;
})();var statearr_16205_16225 = state_16194__$1;(statearr_16205_16225[(2)] = null);
(statearr_16205_16225[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16195 === (9)))
{var inst_16174 = (state_16194[(8)]);var state_16194__$1 = state_16194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16194__$1,(11),out,inst_16174);
} else
{if((state_val_16195 === (5)))
{var inst_16171 = (state_16194[(7)]);var inst_16174 = (state_16194[(8)]);var inst_16178 = cljs.core._EQ_.call(null,inst_16174,inst_16171);var state_16194__$1 = state_16194;if(inst_16178)
{var statearr_16207_16226 = state_16194__$1;(statearr_16207_16226[(1)] = (8));
} else
{var statearr_16208_16227 = state_16194__$1;(statearr_16208_16227[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16195 === (10)))
{var inst_16186 = (state_16194[(2)]);var state_16194__$1 = state_16194;var statearr_16209_16228 = state_16194__$1;(statearr_16209_16228[(2)] = inst_16186);
(statearr_16209_16228[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16195 === (8)))
{var inst_16171 = (state_16194[(7)]);var tmp16206 = inst_16171;var inst_16171__$1 = tmp16206;var state_16194__$1 = (function (){var statearr_16210 = state_16194;(statearr_16210[(7)] = inst_16171__$1);
return statearr_16210;
})();var statearr_16211_16229 = state_16194__$1;(statearr_16211_16229[(2)] = null);
(statearr_16211_16229[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6345__auto___16219,out))
;return ((function (switch__6280__auto__,c__6345__auto___16219,out){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_16215 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16215[(0)] = state_machine__6281__auto__);
(statearr_16215[(1)] = (1));
return statearr_16215;
});
var state_machine__6281__auto____1 = (function (state_16194){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_16194);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e16216){if((e16216 instanceof Object))
{var ex__6284__auto__ = e16216;var statearr_16217_16230 = state_16194;(statearr_16217_16230[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16194);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16216;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16231 = state_16194;
state_16194 = G__16231;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_16194){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_16194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto___16219,out))
})();var state__6347__auto__ = (function (){var statearr_16218 = f__6346__auto__.call(null);(statearr_16218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto___16219);
return statearr_16218;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto___16219,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6345__auto___16366 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto___16366,out){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto___16366,out){
return (function (state_16336){var state_val_16337 = (state_16336[(1)]);if((state_val_16337 === (7)))
{var inst_16332 = (state_16336[(2)]);var state_16336__$1 = state_16336;var statearr_16338_16367 = state_16336__$1;(statearr_16338_16367[(2)] = inst_16332);
(statearr_16338_16367[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16337 === (1)))
{var inst_16299 = (new Array(n));var inst_16300 = inst_16299;var inst_16301 = (0);var state_16336__$1 = (function (){var statearr_16339 = state_16336;(statearr_16339[(7)] = inst_16301);
(statearr_16339[(8)] = inst_16300);
return statearr_16339;
})();var statearr_16340_16368 = state_16336__$1;(statearr_16340_16368[(2)] = null);
(statearr_16340_16368[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16337 === (4)))
{var inst_16304 = (state_16336[(9)]);var inst_16304__$1 = (state_16336[(2)]);var inst_16305 = (inst_16304__$1 == null);var inst_16306 = cljs.core.not.call(null,inst_16305);var state_16336__$1 = (function (){var statearr_16341 = state_16336;(statearr_16341[(9)] = inst_16304__$1);
return statearr_16341;
})();if(inst_16306)
{var statearr_16342_16369 = state_16336__$1;(statearr_16342_16369[(1)] = (5));
} else
{var statearr_16343_16370 = state_16336__$1;(statearr_16343_16370[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16337 === (15)))
{var inst_16326 = (state_16336[(2)]);var state_16336__$1 = state_16336;var statearr_16344_16371 = state_16336__$1;(statearr_16344_16371[(2)] = inst_16326);
(statearr_16344_16371[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16337 === (13)))
{var state_16336__$1 = state_16336;var statearr_16345_16372 = state_16336__$1;(statearr_16345_16372[(2)] = null);
(statearr_16345_16372[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16337 === (6)))
{var inst_16301 = (state_16336[(7)]);var inst_16322 = (inst_16301 > (0));var state_16336__$1 = state_16336;if(cljs.core.truth_(inst_16322))
{var statearr_16346_16373 = state_16336__$1;(statearr_16346_16373[(1)] = (12));
} else
{var statearr_16347_16374 = state_16336__$1;(statearr_16347_16374[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16337 === (3)))
{var inst_16334 = (state_16336[(2)]);var state_16336__$1 = state_16336;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16336__$1,inst_16334);
} else
{if((state_val_16337 === (12)))
{var inst_16300 = (state_16336[(8)]);var inst_16324 = cljs.core.vec.call(null,inst_16300);var state_16336__$1 = state_16336;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16336__$1,(15),out,inst_16324);
} else
{if((state_val_16337 === (2)))
{var state_16336__$1 = state_16336;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16336__$1,(4),ch);
} else
{if((state_val_16337 === (11)))
{var inst_16316 = (state_16336[(2)]);var inst_16317 = (new Array(n));var inst_16300 = inst_16317;var inst_16301 = (0);var state_16336__$1 = (function (){var statearr_16348 = state_16336;(statearr_16348[(7)] = inst_16301);
(statearr_16348[(10)] = inst_16316);
(statearr_16348[(8)] = inst_16300);
return statearr_16348;
})();var statearr_16349_16375 = state_16336__$1;(statearr_16349_16375[(2)] = null);
(statearr_16349_16375[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16337 === (9)))
{var inst_16300 = (state_16336[(8)]);var inst_16314 = cljs.core.vec.call(null,inst_16300);var state_16336__$1 = state_16336;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16336__$1,(11),out,inst_16314);
} else
{if((state_val_16337 === (5)))
{var inst_16309 = (state_16336[(11)]);var inst_16301 = (state_16336[(7)]);var inst_16300 = (state_16336[(8)]);var inst_16304 = (state_16336[(9)]);var inst_16308 = (inst_16300[inst_16301] = inst_16304);var inst_16309__$1 = (inst_16301 + (1));var inst_16310 = (inst_16309__$1 < n);var state_16336__$1 = (function (){var statearr_16350 = state_16336;(statearr_16350[(11)] = inst_16309__$1);
(statearr_16350[(12)] = inst_16308);
return statearr_16350;
})();if(cljs.core.truth_(inst_16310))
{var statearr_16351_16376 = state_16336__$1;(statearr_16351_16376[(1)] = (8));
} else
{var statearr_16352_16377 = state_16336__$1;(statearr_16352_16377[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16337 === (14)))
{var inst_16329 = (state_16336[(2)]);var inst_16330 = cljs.core.async.close_BANG_.call(null,out);var state_16336__$1 = (function (){var statearr_16354 = state_16336;(statearr_16354[(13)] = inst_16329);
return statearr_16354;
})();var statearr_16355_16378 = state_16336__$1;(statearr_16355_16378[(2)] = inst_16330);
(statearr_16355_16378[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16337 === (10)))
{var inst_16320 = (state_16336[(2)]);var state_16336__$1 = state_16336;var statearr_16356_16379 = state_16336__$1;(statearr_16356_16379[(2)] = inst_16320);
(statearr_16356_16379[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16337 === (8)))
{var inst_16309 = (state_16336[(11)]);var inst_16300 = (state_16336[(8)]);var tmp16353 = inst_16300;var inst_16300__$1 = tmp16353;var inst_16301 = inst_16309;var state_16336__$1 = (function (){var statearr_16357 = state_16336;(statearr_16357[(7)] = inst_16301);
(statearr_16357[(8)] = inst_16300__$1);
return statearr_16357;
})();var statearr_16358_16380 = state_16336__$1;(statearr_16358_16380[(2)] = null);
(statearr_16358_16380[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6345__auto___16366,out))
;return ((function (switch__6280__auto__,c__6345__auto___16366,out){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_16362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16362[(0)] = state_machine__6281__auto__);
(statearr_16362[(1)] = (1));
return statearr_16362;
});
var state_machine__6281__auto____1 = (function (state_16336){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_16336);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e16363){if((e16363 instanceof Object))
{var ex__6284__auto__ = e16363;var statearr_16364_16381 = state_16336;(statearr_16364_16381[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16336);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16382 = state_16336;
state_16336 = G__16382;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_16336){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_16336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto___16366,out))
})();var state__6347__auto__ = (function (){var statearr_16365 = f__6346__auto__.call(null);(statearr_16365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto___16366);
return statearr_16365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto___16366,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6345__auto___16525 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto___16525,out){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto___16525,out){
return (function (state_16495){var state_val_16496 = (state_16495[(1)]);if((state_val_16496 === (7)))
{var inst_16491 = (state_16495[(2)]);var state_16495__$1 = state_16495;var statearr_16497_16526 = state_16495__$1;(statearr_16497_16526[(2)] = inst_16491);
(statearr_16497_16526[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16496 === (1)))
{var inst_16454 = [];var inst_16455 = inst_16454;var inst_16456 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_16495__$1 = (function (){var statearr_16498 = state_16495;(statearr_16498[(7)] = inst_16455);
(statearr_16498[(8)] = inst_16456);
return statearr_16498;
})();var statearr_16499_16527 = state_16495__$1;(statearr_16499_16527[(2)] = null);
(statearr_16499_16527[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16496 === (4)))
{var inst_16459 = (state_16495[(9)]);var inst_16459__$1 = (state_16495[(2)]);var inst_16460 = (inst_16459__$1 == null);var inst_16461 = cljs.core.not.call(null,inst_16460);var state_16495__$1 = (function (){var statearr_16500 = state_16495;(statearr_16500[(9)] = inst_16459__$1);
return statearr_16500;
})();if(inst_16461)
{var statearr_16501_16528 = state_16495__$1;(statearr_16501_16528[(1)] = (5));
} else
{var statearr_16502_16529 = state_16495__$1;(statearr_16502_16529[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16496 === (15)))
{var inst_16485 = (state_16495[(2)]);var state_16495__$1 = state_16495;var statearr_16503_16530 = state_16495__$1;(statearr_16503_16530[(2)] = inst_16485);
(statearr_16503_16530[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16496 === (13)))
{var state_16495__$1 = state_16495;var statearr_16504_16531 = state_16495__$1;(statearr_16504_16531[(2)] = null);
(statearr_16504_16531[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16496 === (6)))
{var inst_16455 = (state_16495[(7)]);var inst_16480 = inst_16455.length;var inst_16481 = (inst_16480 > (0));var state_16495__$1 = state_16495;if(cljs.core.truth_(inst_16481))
{var statearr_16505_16532 = state_16495__$1;(statearr_16505_16532[(1)] = (12));
} else
{var statearr_16506_16533 = state_16495__$1;(statearr_16506_16533[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16496 === (3)))
{var inst_16493 = (state_16495[(2)]);var state_16495__$1 = state_16495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16495__$1,inst_16493);
} else
{if((state_val_16496 === (12)))
{var inst_16455 = (state_16495[(7)]);var inst_16483 = cljs.core.vec.call(null,inst_16455);var state_16495__$1 = state_16495;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16495__$1,(15),out,inst_16483);
} else
{if((state_val_16496 === (2)))
{var state_16495__$1 = state_16495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16495__$1,(4),ch);
} else
{if((state_val_16496 === (11)))
{var inst_16463 = (state_16495[(10)]);var inst_16459 = (state_16495[(9)]);var inst_16473 = (state_16495[(2)]);var inst_16474 = [];var inst_16475 = inst_16474.push(inst_16459);var inst_16455 = inst_16474;var inst_16456 = inst_16463;var state_16495__$1 = (function (){var statearr_16507 = state_16495;(statearr_16507[(7)] = inst_16455);
(statearr_16507[(11)] = inst_16475);
(statearr_16507[(12)] = inst_16473);
(statearr_16507[(8)] = inst_16456);
return statearr_16507;
})();var statearr_16508_16534 = state_16495__$1;(statearr_16508_16534[(2)] = null);
(statearr_16508_16534[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16496 === (9)))
{var inst_16455 = (state_16495[(7)]);var inst_16471 = cljs.core.vec.call(null,inst_16455);var state_16495__$1 = state_16495;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16495__$1,(11),out,inst_16471);
} else
{if((state_val_16496 === (5)))
{var inst_16463 = (state_16495[(10)]);var inst_16459 = (state_16495[(9)]);var inst_16456 = (state_16495[(8)]);var inst_16463__$1 = f.call(null,inst_16459);var inst_16464 = cljs.core._EQ_.call(null,inst_16463__$1,inst_16456);var inst_16465 = cljs.core.keyword_identical_QMARK_.call(null,inst_16456,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_16466 = (inst_16464) || (inst_16465);var state_16495__$1 = (function (){var statearr_16509 = state_16495;(statearr_16509[(10)] = inst_16463__$1);
return statearr_16509;
})();if(cljs.core.truth_(inst_16466))
{var statearr_16510_16535 = state_16495__$1;(statearr_16510_16535[(1)] = (8));
} else
{var statearr_16511_16536 = state_16495__$1;(statearr_16511_16536[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16496 === (14)))
{var inst_16488 = (state_16495[(2)]);var inst_16489 = cljs.core.async.close_BANG_.call(null,out);var state_16495__$1 = (function (){var statearr_16513 = state_16495;(statearr_16513[(13)] = inst_16488);
return statearr_16513;
})();var statearr_16514_16537 = state_16495__$1;(statearr_16514_16537[(2)] = inst_16489);
(statearr_16514_16537[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16496 === (10)))
{var inst_16478 = (state_16495[(2)]);var state_16495__$1 = state_16495;var statearr_16515_16538 = state_16495__$1;(statearr_16515_16538[(2)] = inst_16478);
(statearr_16515_16538[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16496 === (8)))
{var inst_16463 = (state_16495[(10)]);var inst_16455 = (state_16495[(7)]);var inst_16459 = (state_16495[(9)]);var inst_16468 = inst_16455.push(inst_16459);var tmp16512 = inst_16455;var inst_16455__$1 = tmp16512;var inst_16456 = inst_16463;var state_16495__$1 = (function (){var statearr_16516 = state_16495;(statearr_16516[(7)] = inst_16455__$1);
(statearr_16516[(8)] = inst_16456);
(statearr_16516[(14)] = inst_16468);
return statearr_16516;
})();var statearr_16517_16539 = state_16495__$1;(statearr_16517_16539[(2)] = null);
(statearr_16517_16539[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__6345__auto___16525,out))
;return ((function (switch__6280__auto__,c__6345__auto___16525,out){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_16521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16521[(0)] = state_machine__6281__auto__);
(statearr_16521[(1)] = (1));
return statearr_16521;
});
var state_machine__6281__auto____1 = (function (state_16495){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_16495);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e16522){if((e16522 instanceof Object))
{var ex__6284__auto__ = e16522;var statearr_16523_16540 = state_16495;(statearr_16523_16540[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16541 = state_16495;
state_16495 = G__16541;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_16495){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_16495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto___16525,out))
})();var state__6347__auto__ = (function (){var statearr_16524 = f__6346__auto__.call(null);(statearr_16524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto___16525);
return statearr_16524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto___16525,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map