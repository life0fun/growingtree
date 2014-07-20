// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13451 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13451 = (function (f,fn_handler,meta13452){
this.f = f;
this.fn_handler = fn_handler;
this.meta13452 = meta13452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13451.cljs$lang$type = true;
cljs.core.async.t13451.cljs$lang$ctorStr = "cljs.core.async/t13451";
cljs.core.async.t13451.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13451");
});
cljs.core.async.t13451.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13451.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13451.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13453){var self__ = this;
var _13453__$1 = this;return self__.meta13452;
});
cljs.core.async.t13451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13453,meta13452__$1){var self__ = this;
var _13453__$1 = this;return (new cljs.core.async.t13451(self__.f,self__.fn_handler,meta13452__$1));
});
cljs.core.async.__GT_t13451 = (function __GT_t13451(f__$1,fn_handler__$1,meta13452){return (new cljs.core.async.t13451(f__$1,fn_handler__$1,meta13452));
});
}
return (new cljs.core.async.t13451(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13455 = buff;if(G__13455)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__13455.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13455.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13455);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13455);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
{var val_13456 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13456);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13456);
}));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___13457 = n;var x_13458 = 0;while(true){
if((x_13458 < n__4291__auto___13457))
{(a[x_13458] = 0);
{
var G__13459 = (x_13458 + 1);
x_13458 = G__13459;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__13460 = (i + 1);
i = G__13460;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13464 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13464 = (function (flag,alt_flag,meta13465){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13465 = meta13465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13464.cljs$lang$type = true;
cljs.core.async.t13464.cljs$lang$ctorStr = "cljs.core.async/t13464";
cljs.core.async.t13464.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13464");
});
cljs.core.async.t13464.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13464.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13464.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13466){var self__ = this;
var _13466__$1 = this;return self__.meta13465;
});
cljs.core.async.t13464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13466,meta13465__$1){var self__ = this;
var _13466__$1 = this;return (new cljs.core.async.t13464(self__.flag,self__.alt_flag,meta13465__$1));
});
cljs.core.async.__GT_t13464 = (function __GT_t13464(flag__$1,alt_flag__$1,meta13465){return (new cljs.core.async.t13464(flag__$1,alt_flag__$1,meta13465));
});
}
return (new cljs.core.async.t13464(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13470 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13470 = (function (cb,flag,alt_handler,meta13471){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13471 = meta13471;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13470.cljs$lang$type = true;
cljs.core.async.t13470.cljs$lang$ctorStr = "cljs.core.async/t13470";
cljs.core.async.t13470.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13470");
});
cljs.core.async.t13470.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13470.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13470.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13472){var self__ = this;
var _13472__$1 = this;return self__.meta13471;
});
cljs.core.async.t13470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13472,meta13471__$1){var self__ = this;
var _13472__$1 = this;return (new cljs.core.async.t13470(self__.cb,self__.flag,self__.alt_handler,meta13471__$1));
});
cljs.core.async.__GT_t13470 = (function __GT_t13470(cb__$1,flag__$1,alt_handler__$1,meta13471){return (new cljs.core.async.t13470(cb__$1,flag__$1,alt_handler__$1,meta13471));
});
}
return (new cljs.core.async.t13470(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13473_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13473_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__13474 = (i + 1);
i = G__13474;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__13475){var map__13477 = p__13475;var map__13477__$1 = ((cljs.core.seq_QMARK_.call(null,map__13477))?cljs.core.apply.call(null,cljs.core.hash_map,map__13477):map__13477);var opts = map__13477__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13475 = null;if (arguments.length > 1) {
  p__13475 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13475);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13478){
var ports = cljs.core.first(arglist__13478);
var p__13475 = cljs.core.rest(arglist__13478);
return alts_BANG___delegate(ports,p__13475);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13486 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13486 = (function (ch,f,map_LT_,meta13487){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13487 = meta13487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13486.cljs$lang$type = true;
cljs.core.async.t13486.cljs$lang$ctorStr = "cljs.core.async/t13486";
cljs.core.async.t13486.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13486");
});
cljs.core.async.t13486.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13486.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13486.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13486.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13489 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13489 = (function (fn1,_,meta13487,ch,f,map_LT_,meta13490){
this.fn1 = fn1;
this._ = _;
this.meta13487 = meta13487;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13490 = meta13490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13489.cljs$lang$type = true;
cljs.core.async.t13489.cljs$lang$ctorStr = "cljs.core.async/t13489";
cljs.core.async.t13489.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13489");
});
cljs.core.async.t13489.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13489.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13489.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13479_SHARP_){return f1.call(null,(((p1__13479_SHARP_ == null))?null:self__.f.call(null,p1__13479_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13491){var self__ = this;
var _13491__$1 = this;return self__.meta13490;
});
cljs.core.async.t13489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13491,meta13490__$1){var self__ = this;
var _13491__$1 = this;return (new cljs.core.async.t13489(self__.fn1,self__._,self__.meta13487,self__.ch,self__.f,self__.map_LT_,meta13490__$1));
});
cljs.core.async.__GT_t13489 = (function __GT_t13489(fn1__$1,___$2,meta13487__$1,ch__$2,f__$2,map_LT___$2,meta13490){return (new cljs.core.async.t13489(fn1__$1,___$2,meta13487__$1,ch__$2,f__$2,map_LT___$2,meta13490));
});
}
return (new cljs.core.async.t13489(fn1,___$1,self__.meta13487,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13486.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13486.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13488){var self__ = this;
var _13488__$1 = this;return self__.meta13487;
});
cljs.core.async.t13486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13488,meta13487__$1){var self__ = this;
var _13488__$1 = this;return (new cljs.core.async.t13486(self__.ch,self__.f,self__.map_LT_,meta13487__$1));
});
cljs.core.async.__GT_t13486 = (function __GT_t13486(ch__$1,f__$1,map_LT___$1,meta13487){return (new cljs.core.async.t13486(ch__$1,f__$1,map_LT___$1,meta13487));
});
}
return (new cljs.core.async.t13486(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13495 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13495 = (function (ch,f,map_GT_,meta13496){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13496 = meta13496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13495.cljs$lang$type = true;
cljs.core.async.t13495.cljs$lang$ctorStr = "cljs.core.async/t13495";
cljs.core.async.t13495.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13495");
});
cljs.core.async.t13495.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13495.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13495.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13497){var self__ = this;
var _13497__$1 = this;return self__.meta13496;
});
cljs.core.async.t13495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13497,meta13496__$1){var self__ = this;
var _13497__$1 = this;return (new cljs.core.async.t13495(self__.ch,self__.f,self__.map_GT_,meta13496__$1));
});
cljs.core.async.__GT_t13495 = (function __GT_t13495(ch__$1,f__$1,map_GT___$1,meta13496){return (new cljs.core.async.t13495(ch__$1,f__$1,map_GT___$1,meta13496));
});
}
return (new cljs.core.async.t13495(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13501 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13501 = (function (ch,p,filter_GT_,meta13502){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13502 = meta13502;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13501.cljs$lang$type = true;
cljs.core.async.t13501.cljs$lang$ctorStr = "cljs.core.async/t13501";
cljs.core.async.t13501.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13501");
});
cljs.core.async.t13501.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13501.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13501.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13501.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13501.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13501.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13503){var self__ = this;
var _13503__$1 = this;return self__.meta13502;
});
cljs.core.async.t13501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13503,meta13502__$1){var self__ = this;
var _13503__$1 = this;return (new cljs.core.async.t13501(self__.ch,self__.p,self__.filter_GT_,meta13502__$1));
});
cljs.core.async.__GT_t13501 = (function __GT_t13501(ch__$1,p__$1,filter_GT___$1,meta13502){return (new cljs.core.async.t13501(ch__$1,p__$1,filter_GT___$1,meta13502));
});
}
return (new cljs.core.async.t13501(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6188__auto___13586 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_13565){var state_val_13566 = (state_13565[1]);if((state_val_13566 === 1))
{var state_13565__$1 = state_13565;var statearr_13567_13587 = state_13565__$1;(statearr_13567_13587[2] = null);
(statearr_13567_13587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 2))
{var state_13565__$1 = state_13565;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13565__$1,4,ch);
} else
{if((state_val_13566 === 3))
{var inst_13563 = (state_13565[2]);var state_13565__$1 = state_13565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13565__$1,inst_13563);
} else
{if((state_val_13566 === 4))
{var inst_13547 = (state_13565[7]);var inst_13547__$1 = (state_13565[2]);var inst_13548 = (inst_13547__$1 == null);var state_13565__$1 = (function (){var statearr_13568 = state_13565;(statearr_13568[7] = inst_13547__$1);
return statearr_13568;
})();if(cljs.core.truth_(inst_13548))
{var statearr_13569_13588 = state_13565__$1;(statearr_13569_13588[1] = 5);
} else
{var statearr_13570_13589 = state_13565__$1;(statearr_13570_13589[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 5))
{var inst_13550 = cljs.core.async.close_BANG_.call(null,out);var state_13565__$1 = state_13565;var statearr_13571_13590 = state_13565__$1;(statearr_13571_13590[2] = inst_13550);
(statearr_13571_13590[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 6))
{var inst_13547 = (state_13565[7]);var inst_13552 = p.call(null,inst_13547);var state_13565__$1 = state_13565;if(cljs.core.truth_(inst_13552))
{var statearr_13572_13591 = state_13565__$1;(statearr_13572_13591[1] = 8);
} else
{var statearr_13573_13592 = state_13565__$1;(statearr_13573_13592[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 7))
{var inst_13561 = (state_13565[2]);var state_13565__$1 = state_13565;var statearr_13574_13593 = state_13565__$1;(statearr_13574_13593[2] = inst_13561);
(statearr_13574_13593[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 8))
{var inst_13547 = (state_13565[7]);var state_13565__$1 = state_13565;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13565__$1,11,out,inst_13547);
} else
{if((state_val_13566 === 9))
{var state_13565__$1 = state_13565;var statearr_13575_13594 = state_13565__$1;(statearr_13575_13594[2] = null);
(statearr_13575_13594[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 10))
{var inst_13558 = (state_13565[2]);var state_13565__$1 = (function (){var statearr_13576 = state_13565;(statearr_13576[8] = inst_13558);
return statearr_13576;
})();var statearr_13577_13595 = state_13565__$1;(statearr_13577_13595[2] = null);
(statearr_13577_13595[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 11))
{var inst_13555 = (state_13565[2]);var state_13565__$1 = state_13565;var statearr_13578_13596 = state_13565__$1;(statearr_13578_13596[2] = inst_13555);
(statearr_13578_13596[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_13582 = [null,null,null,null,null,null,null,null,null];(statearr_13582[0] = state_machine__6119__auto__);
(statearr_13582[1] = 1);
return statearr_13582;
});
var state_machine__6119__auto____1 = (function (state_13565){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_13565);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e13583){if((e13583 instanceof Object))
{var ex__6122__auto__ = e13583;var statearr_13584_13597 = state_13565;(statearr_13584_13597[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13565);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13598 = state_13565;
state_13565 = G__13598;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_13565){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_13565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_13585 = f__6189__auto__.call(null);(statearr_13585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___13586);
return statearr_13585;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_13750){var state_val_13751 = (state_13750[1]);if((state_val_13751 === 1))
{var state_13750__$1 = state_13750;var statearr_13752_13789 = state_13750__$1;(statearr_13752_13789[2] = null);
(statearr_13752_13789[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13751 === 2))
{var state_13750__$1 = state_13750;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13750__$1,4,in$);
} else
{if((state_val_13751 === 3))
{var inst_13748 = (state_13750[2]);var state_13750__$1 = state_13750;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13750__$1,inst_13748);
} else
{if((state_val_13751 === 4))
{var inst_13696 = (state_13750[7]);var inst_13696__$1 = (state_13750[2]);var inst_13697 = (inst_13696__$1 == null);var state_13750__$1 = (function (){var statearr_13753 = state_13750;(statearr_13753[7] = inst_13696__$1);
return statearr_13753;
})();if(cljs.core.truth_(inst_13697))
{var statearr_13754_13790 = state_13750__$1;(statearr_13754_13790[1] = 5);
} else
{var statearr_13755_13791 = state_13750__$1;(statearr_13755_13791[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13751 === 5))
{var inst_13699 = cljs.core.async.close_BANG_.call(null,out);var state_13750__$1 = state_13750;var statearr_13756_13792 = state_13750__$1;(statearr_13756_13792[2] = inst_13699);
(statearr_13756_13792[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13751 === 6))
{var inst_13696 = (state_13750[7]);var inst_13701 = f.call(null,inst_13696);var inst_13706 = cljs.core.seq.call(null,inst_13701);var inst_13707 = inst_13706;var inst_13708 = null;var inst_13709 = 0;var inst_13710 = 0;var state_13750__$1 = (function (){var statearr_13757 = state_13750;(statearr_13757[8] = inst_13710);
(statearr_13757[9] = inst_13707);
(statearr_13757[10] = inst_13708);
(statearr_13757[11] = inst_13709);
return statearr_13757;
})();var statearr_13758_13793 = state_13750__$1;(statearr_13758_13793[2] = null);
(statearr_13758_13793[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13751 === 7))
{var inst_13746 = (state_13750[2]);var state_13750__$1 = state_13750;var statearr_13759_13794 = state_13750__$1;(statearr_13759_13794[2] = inst_13746);
(statearr_13759_13794[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13751 === 8))
{var inst_13710 = (state_13750[8]);var inst_13709 = (state_13750[11]);var inst_13712 = (inst_13710 < inst_13709);var inst_13713 = inst_13712;var state_13750__$1 = state_13750;if(cljs.core.truth_(inst_13713))
{var statearr_13760_13795 = state_13750__$1;(statearr_13760_13795[1] = 10);
} else
{var statearr_13761_13796 = state_13750__$1;(statearr_13761_13796[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13751 === 9))
{var inst_13743 = (state_13750[2]);var state_13750__$1 = (function (){var statearr_13762 = state_13750;(statearr_13762[12] = inst_13743);
return statearr_13762;
})();var statearr_13763_13797 = state_13750__$1;(statearr_13763_13797[2] = null);
(statearr_13763_13797[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13751 === 10))
{var inst_13710 = (state_13750[8]);var inst_13708 = (state_13750[10]);var inst_13715 = cljs.core._nth.call(null,inst_13708,inst_13710);var state_13750__$1 = state_13750;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13750__$1,13,out,inst_13715);
} else
{if((state_val_13751 === 11))
{var inst_13721 = (state_13750[13]);var inst_13707 = (state_13750[9]);var inst_13721__$1 = cljs.core.seq.call(null,inst_13707);var state_13750__$1 = (function (){var statearr_13767 = state_13750;(statearr_13767[13] = inst_13721__$1);
return statearr_13767;
})();if(inst_13721__$1)
{var statearr_13768_13798 = state_13750__$1;(statearr_13768_13798[1] = 14);
} else
{var statearr_13769_13799 = state_13750__$1;(statearr_13769_13799[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13751 === 12))
{var inst_13741 = (state_13750[2]);var state_13750__$1 = state_13750;var statearr_13770_13800 = state_13750__$1;(statearr_13770_13800[2] = inst_13741);
(statearr_13770_13800[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13751 === 13))
{var inst_13710 = (state_13750[8]);var inst_13707 = (state_13750[9]);var inst_13708 = (state_13750[10]);var inst_13709 = (state_13750[11]);var inst_13717 = (state_13750[2]);var inst_13718 = (inst_13710 + 1);var tmp13764 = inst_13707;var tmp13765 = inst_13708;var tmp13766 = inst_13709;var inst_13707__$1 = tmp13764;var inst_13708__$1 = tmp13765;var inst_13709__$1 = tmp13766;var inst_13710__$1 = inst_13718;var state_13750__$1 = (function (){var statearr_13771 = state_13750;(statearr_13771[8] = inst_13710__$1);
(statearr_13771[9] = inst_13707__$1);
(statearr_13771[10] = inst_13708__$1);
(statearr_13771[11] = inst_13709__$1);
(statearr_13771[14] = inst_13717);
return statearr_13771;
})();var statearr_13772_13801 = state_13750__$1;(statearr_13772_13801[2] = null);
(statearr_13772_13801[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13751 === 14))
{var inst_13721 = (state_13750[13]);var inst_13723 = cljs.core.chunked_seq_QMARK_.call(null,inst_13721);var state_13750__$1 = state_13750;if(inst_13723)
{var statearr_13773_13802 = state_13750__$1;(statearr_13773_13802[1] = 17);
} else
{var statearr_13774_13803 = state_13750__$1;(statearr_13774_13803[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13751 === 15))
{var state_13750__$1 = state_13750;var statearr_13775_13804 = state_13750__$1;(statearr_13775_13804[2] = null);
(statearr_13775_13804[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13751 === 16))
{var inst_13739 = (state_13750[2]);var state_13750__$1 = state_13750;var statearr_13776_13805 = state_13750__$1;(statearr_13776_13805[2] = inst_13739);
(statearr_13776_13805[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13751 === 17))
{var inst_13721 = (state_13750[13]);var inst_13725 = cljs.core.chunk_first.call(null,inst_13721);var inst_13726 = cljs.core.chunk_rest.call(null,inst_13721);var inst_13727 = cljs.core.count.call(null,inst_13725);var inst_13707 = inst_13726;var inst_13708 = inst_13725;var inst_13709 = inst_13727;var inst_13710 = 0;var state_13750__$1 = (function (){var statearr_13777 = state_13750;(statearr_13777[8] = inst_13710);
(statearr_13777[9] = inst_13707);
(statearr_13777[10] = inst_13708);
(statearr_13777[11] = inst_13709);
return statearr_13777;
})();var statearr_13778_13806 = state_13750__$1;(statearr_13778_13806[2] = null);
(statearr_13778_13806[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13751 === 18))
{var inst_13721 = (state_13750[13]);var inst_13730 = cljs.core.first.call(null,inst_13721);var state_13750__$1 = state_13750;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13750__$1,20,out,inst_13730);
} else
{if((state_val_13751 === 19))
{var inst_13736 = (state_13750[2]);var state_13750__$1 = state_13750;var statearr_13779_13807 = state_13750__$1;(statearr_13779_13807[2] = inst_13736);
(statearr_13779_13807[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13751 === 20))
{var inst_13721 = (state_13750[13]);var inst_13732 = (state_13750[2]);var inst_13733 = cljs.core.next.call(null,inst_13721);var inst_13707 = inst_13733;var inst_13708 = null;var inst_13709 = 0;var inst_13710 = 0;var state_13750__$1 = (function (){var statearr_13780 = state_13750;(statearr_13780[8] = inst_13710);
(statearr_13780[9] = inst_13707);
(statearr_13780[10] = inst_13708);
(statearr_13780[11] = inst_13709);
(statearr_13780[15] = inst_13732);
return statearr_13780;
})();var statearr_13781_13808 = state_13750__$1;(statearr_13781_13808[2] = null);
(statearr_13781_13808[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_13785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13785[0] = state_machine__6119__auto__);
(statearr_13785[1] = 1);
return statearr_13785;
});
var state_machine__6119__auto____1 = (function (state_13750){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_13750);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e13786){if((e13786 instanceof Object))
{var ex__6122__auto__ = e13786;var statearr_13787_13809 = state_13750;(statearr_13787_13809[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13750);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13810 = state_13750;
state_13750 = G__13810;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_13750){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_13750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_13788 = f__6189__auto__.call(null);(statearr_13788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_13788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
return c__6188__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6188__auto___13891 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_13870){var state_val_13871 = (state_13870[1]);if((state_val_13871 === 1))
{var state_13870__$1 = state_13870;var statearr_13872_13892 = state_13870__$1;(statearr_13872_13892[2] = null);
(statearr_13872_13892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13871 === 2))
{var state_13870__$1 = state_13870;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13870__$1,4,from);
} else
{if((state_val_13871 === 3))
{var inst_13868 = (state_13870[2]);var state_13870__$1 = state_13870;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13870__$1,inst_13868);
} else
{if((state_val_13871 === 4))
{var inst_13853 = (state_13870[7]);var inst_13853__$1 = (state_13870[2]);var inst_13854 = (inst_13853__$1 == null);var state_13870__$1 = (function (){var statearr_13873 = state_13870;(statearr_13873[7] = inst_13853__$1);
return statearr_13873;
})();if(cljs.core.truth_(inst_13854))
{var statearr_13874_13893 = state_13870__$1;(statearr_13874_13893[1] = 5);
} else
{var statearr_13875_13894 = state_13870__$1;(statearr_13875_13894[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13871 === 5))
{var state_13870__$1 = state_13870;if(cljs.core.truth_(close_QMARK_))
{var statearr_13876_13895 = state_13870__$1;(statearr_13876_13895[1] = 8);
} else
{var statearr_13877_13896 = state_13870__$1;(statearr_13877_13896[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13871 === 6))
{var inst_13853 = (state_13870[7]);var state_13870__$1 = state_13870;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13870__$1,11,to,inst_13853);
} else
{if((state_val_13871 === 7))
{var inst_13866 = (state_13870[2]);var state_13870__$1 = state_13870;var statearr_13878_13897 = state_13870__$1;(statearr_13878_13897[2] = inst_13866);
(statearr_13878_13897[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13871 === 8))
{var inst_13857 = cljs.core.async.close_BANG_.call(null,to);var state_13870__$1 = state_13870;var statearr_13879_13898 = state_13870__$1;(statearr_13879_13898[2] = inst_13857);
(statearr_13879_13898[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13871 === 9))
{var state_13870__$1 = state_13870;var statearr_13880_13899 = state_13870__$1;(statearr_13880_13899[2] = null);
(statearr_13880_13899[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13871 === 10))
{var inst_13860 = (state_13870[2]);var state_13870__$1 = state_13870;var statearr_13881_13900 = state_13870__$1;(statearr_13881_13900[2] = inst_13860);
(statearr_13881_13900[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13871 === 11))
{var inst_13863 = (state_13870[2]);var state_13870__$1 = (function (){var statearr_13882 = state_13870;(statearr_13882[8] = inst_13863);
return statearr_13882;
})();var statearr_13883_13901 = state_13870__$1;(statearr_13883_13901[2] = null);
(statearr_13883_13901[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_13887 = [null,null,null,null,null,null,null,null,null];(statearr_13887[0] = state_machine__6119__auto__);
(statearr_13887[1] = 1);
return statearr_13887;
});
var state_machine__6119__auto____1 = (function (state_13870){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_13870);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e13888){if((e13888 instanceof Object))
{var ex__6122__auto__ = e13888;var statearr_13889_13902 = state_13870;(statearr_13889_13902[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13870);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13888;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13903 = state_13870;
state_13870 = G__13903;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_13870){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_13870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_13890 = f__6189__auto__.call(null);(statearr_13890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___13891);
return statearr_13890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6188__auto___13990 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_13968){var state_val_13969 = (state_13968[1]);if((state_val_13969 === 1))
{var state_13968__$1 = state_13968;var statearr_13970_13991 = state_13968__$1;(statearr_13970_13991[2] = null);
(statearr_13970_13991[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 2))
{var state_13968__$1 = state_13968;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13968__$1,4,ch);
} else
{if((state_val_13969 === 3))
{var inst_13966 = (state_13968[2]);var state_13968__$1 = state_13968;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13968__$1,inst_13966);
} else
{if((state_val_13969 === 4))
{var inst_13949 = (state_13968[7]);var inst_13949__$1 = (state_13968[2]);var inst_13950 = (inst_13949__$1 == null);var state_13968__$1 = (function (){var statearr_13971 = state_13968;(statearr_13971[7] = inst_13949__$1);
return statearr_13971;
})();if(cljs.core.truth_(inst_13950))
{var statearr_13972_13992 = state_13968__$1;(statearr_13972_13992[1] = 5);
} else
{var statearr_13973_13993 = state_13968__$1;(statearr_13973_13993[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 5))
{var inst_13952 = cljs.core.async.close_BANG_.call(null,tc);var inst_13953 = cljs.core.async.close_BANG_.call(null,fc);var state_13968__$1 = (function (){var statearr_13974 = state_13968;(statearr_13974[8] = inst_13952);
return statearr_13974;
})();var statearr_13975_13994 = state_13968__$1;(statearr_13975_13994[2] = inst_13953);
(statearr_13975_13994[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 6))
{var inst_13949 = (state_13968[7]);var inst_13955 = p.call(null,inst_13949);var state_13968__$1 = state_13968;if(cljs.core.truth_(inst_13955))
{var statearr_13976_13995 = state_13968__$1;(statearr_13976_13995[1] = 9);
} else
{var statearr_13977_13996 = state_13968__$1;(statearr_13977_13996[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 7))
{var inst_13964 = (state_13968[2]);var state_13968__$1 = state_13968;var statearr_13978_13997 = state_13968__$1;(statearr_13978_13997[2] = inst_13964);
(statearr_13978_13997[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 8))
{var inst_13961 = (state_13968[2]);var state_13968__$1 = (function (){var statearr_13979 = state_13968;(statearr_13979[9] = inst_13961);
return statearr_13979;
})();var statearr_13980_13998 = state_13968__$1;(statearr_13980_13998[2] = null);
(statearr_13980_13998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 9))
{var state_13968__$1 = state_13968;var statearr_13981_13999 = state_13968__$1;(statearr_13981_13999[2] = tc);
(statearr_13981_13999[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 10))
{var state_13968__$1 = state_13968;var statearr_13982_14000 = state_13968__$1;(statearr_13982_14000[2] = fc);
(statearr_13982_14000[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13969 === 11))
{var inst_13949 = (state_13968[7]);var inst_13959 = (state_13968[2]);var state_13968__$1 = state_13968;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13968__$1,8,inst_13959,inst_13949);
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
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_13986 = [null,null,null,null,null,null,null,null,null,null];(statearr_13986[0] = state_machine__6119__auto__);
(statearr_13986[1] = 1);
return statearr_13986;
});
var state_machine__6119__auto____1 = (function (state_13968){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_13968);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e13987){if((e13987 instanceof Object))
{var ex__6122__auto__ = e13987;var statearr_13988_14001 = state_13968;(statearr_13988_14001[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13968);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14002 = state_13968;
state_13968 = G__14002;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_13968){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_13968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_13989 = f__6189__auto__.call(null);(statearr_13989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___13990);
return statearr_13989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_14049){var state_val_14050 = (state_14049[1]);if((state_val_14050 === 7))
{var inst_14045 = (state_14049[2]);var state_14049__$1 = state_14049;var statearr_14051_14067 = state_14049__$1;(statearr_14051_14067[2] = inst_14045);
(statearr_14051_14067[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14050 === 6))
{var inst_14038 = (state_14049[7]);var inst_14035 = (state_14049[8]);var inst_14042 = f.call(null,inst_14035,inst_14038);var inst_14035__$1 = inst_14042;var state_14049__$1 = (function (){var statearr_14052 = state_14049;(statearr_14052[8] = inst_14035__$1);
return statearr_14052;
})();var statearr_14053_14068 = state_14049__$1;(statearr_14053_14068[2] = null);
(statearr_14053_14068[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14050 === 5))
{var inst_14035 = (state_14049[8]);var state_14049__$1 = state_14049;var statearr_14054_14069 = state_14049__$1;(statearr_14054_14069[2] = inst_14035);
(statearr_14054_14069[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14050 === 4))
{var inst_14038 = (state_14049[7]);var inst_14038__$1 = (state_14049[2]);var inst_14039 = (inst_14038__$1 == null);var state_14049__$1 = (function (){var statearr_14055 = state_14049;(statearr_14055[7] = inst_14038__$1);
return statearr_14055;
})();if(cljs.core.truth_(inst_14039))
{var statearr_14056_14070 = state_14049__$1;(statearr_14056_14070[1] = 5);
} else
{var statearr_14057_14071 = state_14049__$1;(statearr_14057_14071[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14050 === 3))
{var inst_14047 = (state_14049[2]);var state_14049__$1 = state_14049;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14049__$1,inst_14047);
} else
{if((state_val_14050 === 2))
{var state_14049__$1 = state_14049;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14049__$1,4,ch);
} else
{if((state_val_14050 === 1))
{var inst_14035 = init;var state_14049__$1 = (function (){var statearr_14058 = state_14049;(statearr_14058[8] = inst_14035);
return statearr_14058;
})();var statearr_14059_14072 = state_14049__$1;(statearr_14059_14072[2] = null);
(statearr_14059_14072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_14063 = [null,null,null,null,null,null,null,null,null];(statearr_14063[0] = state_machine__6119__auto__);
(statearr_14063[1] = 1);
return statearr_14063;
});
var state_machine__6119__auto____1 = (function (state_14049){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_14049);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e14064){if((e14064 instanceof Object))
{var ex__6122__auto__ = e14064;var statearr_14065_14073 = state_14049;(statearr_14065_14073[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14049);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14064;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14074 = state_14049;
state_14049 = G__14074;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_14049){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_14049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_14066 = f__6189__auto__.call(null);(statearr_14066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_14066;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
return c__6188__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6188__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_14136){var state_val_14137 = (state_14136[1]);if((state_val_14137 === 1))
{var inst_14116 = cljs.core.seq.call(null,coll);var inst_14117 = inst_14116;var state_14136__$1 = (function (){var statearr_14138 = state_14136;(statearr_14138[7] = inst_14117);
return statearr_14138;
})();var statearr_14139_14157 = state_14136__$1;(statearr_14139_14157[2] = null);
(statearr_14139_14157[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 2))
{var inst_14117 = (state_14136[7]);var state_14136__$1 = state_14136;if(cljs.core.truth_(inst_14117))
{var statearr_14140_14158 = state_14136__$1;(statearr_14140_14158[1] = 4);
} else
{var statearr_14141_14159 = state_14136__$1;(statearr_14141_14159[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 3))
{var inst_14134 = (state_14136[2]);var state_14136__$1 = state_14136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14136__$1,inst_14134);
} else
{if((state_val_14137 === 4))
{var inst_14117 = (state_14136[7]);var inst_14120 = cljs.core.first.call(null,inst_14117);var state_14136__$1 = state_14136;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14136__$1,7,ch,inst_14120);
} else
{if((state_val_14137 === 5))
{var state_14136__$1 = state_14136;if(cljs.core.truth_(close_QMARK_))
{var statearr_14142_14160 = state_14136__$1;(statearr_14142_14160[1] = 8);
} else
{var statearr_14143_14161 = state_14136__$1;(statearr_14143_14161[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 6))
{var inst_14132 = (state_14136[2]);var state_14136__$1 = state_14136;var statearr_14144_14162 = state_14136__$1;(statearr_14144_14162[2] = inst_14132);
(statearr_14144_14162[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 7))
{var inst_14117 = (state_14136[7]);var inst_14122 = (state_14136[2]);var inst_14123 = cljs.core.next.call(null,inst_14117);var inst_14117__$1 = inst_14123;var state_14136__$1 = (function (){var statearr_14145 = state_14136;(statearr_14145[8] = inst_14122);
(statearr_14145[7] = inst_14117__$1);
return statearr_14145;
})();var statearr_14146_14163 = state_14136__$1;(statearr_14146_14163[2] = null);
(statearr_14146_14163[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 8))
{var inst_14127 = cljs.core.async.close_BANG_.call(null,ch);var state_14136__$1 = state_14136;var statearr_14147_14164 = state_14136__$1;(statearr_14147_14164[2] = inst_14127);
(statearr_14147_14164[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 9))
{var state_14136__$1 = state_14136;var statearr_14148_14165 = state_14136__$1;(statearr_14148_14165[2] = null);
(statearr_14148_14165[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14137 === 10))
{var inst_14130 = (state_14136[2]);var state_14136__$1 = state_14136;var statearr_14149_14166 = state_14136__$1;(statearr_14149_14166[2] = inst_14130);
(statearr_14149_14166[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_14153 = [null,null,null,null,null,null,null,null,null];(statearr_14153[0] = state_machine__6119__auto__);
(statearr_14153[1] = 1);
return statearr_14153;
});
var state_machine__6119__auto____1 = (function (state_14136){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_14136);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e14154){if((e14154 instanceof Object))
{var ex__6122__auto__ = e14154;var statearr_14155_14167 = state_14136;(statearr_14155_14167[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14136);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14168 = state_14136;
state_14136 = G__14168;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_14136){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_14136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_14156 = f__6189__auto__.call(null);(statearr_14156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_14156;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
return c__6188__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj14170 = {};return obj14170;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14172 = {};return obj14172;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14396 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14396 = (function (cs,ch,mult,meta14397){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14397 = meta14397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14396.cljs$lang$type = true;
cljs.core.async.t14396.cljs$lang$ctorStr = "cljs.core.async/t14396";
cljs.core.async.t14396.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t14396");
});})(cs))
;
cljs.core.async.t14396.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14396.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14396.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14396.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14396.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14396.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14396.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14398){var self__ = this;
var _14398__$1 = this;return self__.meta14397;
});})(cs))
;
cljs.core.async.t14396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14398,meta14397__$1){var self__ = this;
var _14398__$1 = this;return (new cljs.core.async.t14396(self__.cs,self__.ch,self__.mult,meta14397__$1));
});})(cs))
;
cljs.core.async.__GT_t14396 = ((function (cs){
return (function __GT_t14396(cs__$1,ch__$1,mult__$1,meta14397){return (new cljs.core.async.t14396(cs__$1,ch__$1,mult__$1,meta14397));
});})(cs))
;
}
return (new cljs.core.async.t14396(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6188__auto___14619 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_14533){var state_val_14534 = (state_14533[1]);if((state_val_14534 === 32))
{var inst_14401 = (state_14533[7]);var inst_14477 = (state_14533[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14533,31,Object,null,30);var inst_14484 = cljs.core.async.put_BANG_.call(null,inst_14477,inst_14401,done);var state_14533__$1 = state_14533;var statearr_14535_14620 = state_14533__$1;(statearr_14535_14620[2] = inst_14484);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14533__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 1))
{var state_14533__$1 = state_14533;var statearr_14536_14621 = state_14533__$1;(statearr_14536_14621[2] = null);
(statearr_14536_14621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 33))
{var inst_14490 = (state_14533[9]);var inst_14492 = cljs.core.chunked_seq_QMARK_.call(null,inst_14490);var state_14533__$1 = state_14533;if(inst_14492)
{var statearr_14537_14622 = state_14533__$1;(statearr_14537_14622[1] = 36);
} else
{var statearr_14538_14623 = state_14533__$1;(statearr_14538_14623[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 2))
{var state_14533__$1 = state_14533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14533__$1,4,ch);
} else
{if((state_val_14534 === 34))
{var state_14533__$1 = state_14533;var statearr_14539_14624 = state_14533__$1;(statearr_14539_14624[2] = null);
(statearr_14539_14624[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 3))
{var inst_14531 = (state_14533[2]);var state_14533__$1 = state_14533;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14533__$1,inst_14531);
} else
{if((state_val_14534 === 35))
{var inst_14515 = (state_14533[2]);var state_14533__$1 = state_14533;var statearr_14540_14625 = state_14533__$1;(statearr_14540_14625[2] = inst_14515);
(statearr_14540_14625[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 4))
{var inst_14401 = (state_14533[7]);var inst_14401__$1 = (state_14533[2]);var inst_14402 = (inst_14401__$1 == null);var state_14533__$1 = (function (){var statearr_14541 = state_14533;(statearr_14541[7] = inst_14401__$1);
return statearr_14541;
})();if(cljs.core.truth_(inst_14402))
{var statearr_14542_14626 = state_14533__$1;(statearr_14542_14626[1] = 5);
} else
{var statearr_14543_14627 = state_14533__$1;(statearr_14543_14627[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 36))
{var inst_14490 = (state_14533[9]);var inst_14494 = cljs.core.chunk_first.call(null,inst_14490);var inst_14495 = cljs.core.chunk_rest.call(null,inst_14490);var inst_14496 = cljs.core.count.call(null,inst_14494);var inst_14469 = inst_14495;var inst_14470 = inst_14494;var inst_14471 = inst_14496;var inst_14472 = 0;var state_14533__$1 = (function (){var statearr_14544 = state_14533;(statearr_14544[10] = inst_14470);
(statearr_14544[11] = inst_14469);
(statearr_14544[12] = inst_14472);
(statearr_14544[13] = inst_14471);
return statearr_14544;
})();var statearr_14545_14628 = state_14533__$1;(statearr_14545_14628[2] = null);
(statearr_14545_14628[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 5))
{var inst_14408 = cljs.core.deref.call(null,cs);var inst_14409 = cljs.core.seq.call(null,inst_14408);var inst_14410 = inst_14409;var inst_14411 = null;var inst_14412 = 0;var inst_14413 = 0;var state_14533__$1 = (function (){var statearr_14546 = state_14533;(statearr_14546[14] = inst_14413);
(statearr_14546[15] = inst_14412);
(statearr_14546[16] = inst_14411);
(statearr_14546[17] = inst_14410);
return statearr_14546;
})();var statearr_14547_14629 = state_14533__$1;(statearr_14547_14629[2] = null);
(statearr_14547_14629[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 37))
{var inst_14490 = (state_14533[9]);var inst_14499 = cljs.core.first.call(null,inst_14490);var state_14533__$1 = (function (){var statearr_14548 = state_14533;(statearr_14548[18] = inst_14499);
return statearr_14548;
})();var statearr_14549_14630 = state_14533__$1;(statearr_14549_14630[2] = null);
(statearr_14549_14630[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 6))
{var inst_14461 = (state_14533[19]);var inst_14460 = cljs.core.deref.call(null,cs);var inst_14461__$1 = cljs.core.keys.call(null,inst_14460);var inst_14462 = cljs.core.count.call(null,inst_14461__$1);var inst_14463 = cljs.core.reset_BANG_.call(null,dctr,inst_14462);var inst_14468 = cljs.core.seq.call(null,inst_14461__$1);var inst_14469 = inst_14468;var inst_14470 = null;var inst_14471 = 0;var inst_14472 = 0;var state_14533__$1 = (function (){var statearr_14550 = state_14533;(statearr_14550[20] = inst_14463);
(statearr_14550[19] = inst_14461__$1);
(statearr_14550[10] = inst_14470);
(statearr_14550[11] = inst_14469);
(statearr_14550[12] = inst_14472);
(statearr_14550[13] = inst_14471);
return statearr_14550;
})();var statearr_14551_14631 = state_14533__$1;(statearr_14551_14631[2] = null);
(statearr_14551_14631[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 38))
{var inst_14512 = (state_14533[2]);var state_14533__$1 = state_14533;var statearr_14552_14632 = state_14533__$1;(statearr_14552_14632[2] = inst_14512);
(statearr_14552_14632[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 7))
{var inst_14529 = (state_14533[2]);var state_14533__$1 = state_14533;var statearr_14553_14633 = state_14533__$1;(statearr_14553_14633[2] = inst_14529);
(statearr_14553_14633[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 39))
{var inst_14490 = (state_14533[9]);var inst_14508 = (state_14533[2]);var inst_14509 = cljs.core.next.call(null,inst_14490);var inst_14469 = inst_14509;var inst_14470 = null;var inst_14471 = 0;var inst_14472 = 0;var state_14533__$1 = (function (){var statearr_14554 = state_14533;(statearr_14554[21] = inst_14508);
(statearr_14554[10] = inst_14470);
(statearr_14554[11] = inst_14469);
(statearr_14554[12] = inst_14472);
(statearr_14554[13] = inst_14471);
return statearr_14554;
})();var statearr_14555_14634 = state_14533__$1;(statearr_14555_14634[2] = null);
(statearr_14555_14634[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 8))
{var inst_14413 = (state_14533[14]);var inst_14412 = (state_14533[15]);var inst_14415 = (inst_14413 < inst_14412);var inst_14416 = inst_14415;var state_14533__$1 = state_14533;if(cljs.core.truth_(inst_14416))
{var statearr_14556_14635 = state_14533__$1;(statearr_14556_14635[1] = 10);
} else
{var statearr_14557_14636 = state_14533__$1;(statearr_14557_14636[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 40))
{var inst_14499 = (state_14533[18]);var inst_14500 = (state_14533[2]);var inst_14501 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14502 = cljs.core.async.untap_STAR_.call(null,m,inst_14499);var state_14533__$1 = (function (){var statearr_14558 = state_14533;(statearr_14558[22] = inst_14501);
(statearr_14558[23] = inst_14500);
return statearr_14558;
})();var statearr_14559_14637 = state_14533__$1;(statearr_14559_14637[2] = inst_14502);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14533__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 9))
{var inst_14458 = (state_14533[2]);var state_14533__$1 = state_14533;var statearr_14560_14638 = state_14533__$1;(statearr_14560_14638[2] = inst_14458);
(statearr_14560_14638[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 41))
{var inst_14499 = (state_14533[18]);var inst_14401 = (state_14533[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14533,40,Object,null,39);var inst_14506 = cljs.core.async.put_BANG_.call(null,inst_14499,inst_14401,done);var state_14533__$1 = state_14533;var statearr_14561_14639 = state_14533__$1;(statearr_14561_14639[2] = inst_14506);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14533__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 10))
{var inst_14413 = (state_14533[14]);var inst_14411 = (state_14533[16]);var inst_14419 = cljs.core._nth.call(null,inst_14411,inst_14413);var inst_14420 = cljs.core.nth.call(null,inst_14419,0,null);var inst_14421 = cljs.core.nth.call(null,inst_14419,1,null);var state_14533__$1 = (function (){var statearr_14562 = state_14533;(statearr_14562[24] = inst_14420);
return statearr_14562;
})();if(cljs.core.truth_(inst_14421))
{var statearr_14563_14640 = state_14533__$1;(statearr_14563_14640[1] = 13);
} else
{var statearr_14564_14641 = state_14533__$1;(statearr_14564_14641[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 42))
{var state_14533__$1 = state_14533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14533__$1,45,dchan);
} else
{if((state_val_14534 === 11))
{var inst_14410 = (state_14533[17]);var inst_14430 = (state_14533[25]);var inst_14430__$1 = cljs.core.seq.call(null,inst_14410);var state_14533__$1 = (function (){var statearr_14565 = state_14533;(statearr_14565[25] = inst_14430__$1);
return statearr_14565;
})();if(inst_14430__$1)
{var statearr_14566_14642 = state_14533__$1;(statearr_14566_14642[1] = 16);
} else
{var statearr_14567_14643 = state_14533__$1;(statearr_14567_14643[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 43))
{var state_14533__$1 = state_14533;var statearr_14568_14644 = state_14533__$1;(statearr_14568_14644[2] = null);
(statearr_14568_14644[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 12))
{var inst_14456 = (state_14533[2]);var state_14533__$1 = state_14533;var statearr_14569_14645 = state_14533__$1;(statearr_14569_14645[2] = inst_14456);
(statearr_14569_14645[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 44))
{var inst_14526 = (state_14533[2]);var state_14533__$1 = (function (){var statearr_14570 = state_14533;(statearr_14570[26] = inst_14526);
return statearr_14570;
})();var statearr_14571_14646 = state_14533__$1;(statearr_14571_14646[2] = null);
(statearr_14571_14646[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 13))
{var inst_14420 = (state_14533[24]);var inst_14423 = cljs.core.async.close_BANG_.call(null,inst_14420);var state_14533__$1 = state_14533;var statearr_14572_14647 = state_14533__$1;(statearr_14572_14647[2] = inst_14423);
(statearr_14572_14647[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 45))
{var inst_14523 = (state_14533[2]);var state_14533__$1 = state_14533;var statearr_14576_14648 = state_14533__$1;(statearr_14576_14648[2] = inst_14523);
(statearr_14576_14648[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 14))
{var state_14533__$1 = state_14533;var statearr_14577_14649 = state_14533__$1;(statearr_14577_14649[2] = null);
(statearr_14577_14649[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 15))
{var inst_14413 = (state_14533[14]);var inst_14412 = (state_14533[15]);var inst_14411 = (state_14533[16]);var inst_14410 = (state_14533[17]);var inst_14426 = (state_14533[2]);var inst_14427 = (inst_14413 + 1);var tmp14573 = inst_14412;var tmp14574 = inst_14411;var tmp14575 = inst_14410;var inst_14410__$1 = tmp14575;var inst_14411__$1 = tmp14574;var inst_14412__$1 = tmp14573;var inst_14413__$1 = inst_14427;var state_14533__$1 = (function (){var statearr_14578 = state_14533;(statearr_14578[14] = inst_14413__$1);
(statearr_14578[15] = inst_14412__$1);
(statearr_14578[16] = inst_14411__$1);
(statearr_14578[17] = inst_14410__$1);
(statearr_14578[27] = inst_14426);
return statearr_14578;
})();var statearr_14579_14650 = state_14533__$1;(statearr_14579_14650[2] = null);
(statearr_14579_14650[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 16))
{var inst_14430 = (state_14533[25]);var inst_14432 = cljs.core.chunked_seq_QMARK_.call(null,inst_14430);var state_14533__$1 = state_14533;if(inst_14432)
{var statearr_14580_14651 = state_14533__$1;(statearr_14580_14651[1] = 19);
} else
{var statearr_14581_14652 = state_14533__$1;(statearr_14581_14652[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 17))
{var state_14533__$1 = state_14533;var statearr_14582_14653 = state_14533__$1;(statearr_14582_14653[2] = null);
(statearr_14582_14653[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 18))
{var inst_14454 = (state_14533[2]);var state_14533__$1 = state_14533;var statearr_14583_14654 = state_14533__$1;(statearr_14583_14654[2] = inst_14454);
(statearr_14583_14654[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 19))
{var inst_14430 = (state_14533[25]);var inst_14434 = cljs.core.chunk_first.call(null,inst_14430);var inst_14435 = cljs.core.chunk_rest.call(null,inst_14430);var inst_14436 = cljs.core.count.call(null,inst_14434);var inst_14410 = inst_14435;var inst_14411 = inst_14434;var inst_14412 = inst_14436;var inst_14413 = 0;var state_14533__$1 = (function (){var statearr_14584 = state_14533;(statearr_14584[14] = inst_14413);
(statearr_14584[15] = inst_14412);
(statearr_14584[16] = inst_14411);
(statearr_14584[17] = inst_14410);
return statearr_14584;
})();var statearr_14585_14655 = state_14533__$1;(statearr_14585_14655[2] = null);
(statearr_14585_14655[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 20))
{var inst_14430 = (state_14533[25]);var inst_14440 = cljs.core.first.call(null,inst_14430);var inst_14441 = cljs.core.nth.call(null,inst_14440,0,null);var inst_14442 = cljs.core.nth.call(null,inst_14440,1,null);var state_14533__$1 = (function (){var statearr_14586 = state_14533;(statearr_14586[28] = inst_14441);
return statearr_14586;
})();if(cljs.core.truth_(inst_14442))
{var statearr_14587_14656 = state_14533__$1;(statearr_14587_14656[1] = 22);
} else
{var statearr_14588_14657 = state_14533__$1;(statearr_14588_14657[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 21))
{var inst_14451 = (state_14533[2]);var state_14533__$1 = state_14533;var statearr_14589_14658 = state_14533__$1;(statearr_14589_14658[2] = inst_14451);
(statearr_14589_14658[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 22))
{var inst_14441 = (state_14533[28]);var inst_14444 = cljs.core.async.close_BANG_.call(null,inst_14441);var state_14533__$1 = state_14533;var statearr_14590_14659 = state_14533__$1;(statearr_14590_14659[2] = inst_14444);
(statearr_14590_14659[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 23))
{var state_14533__$1 = state_14533;var statearr_14591_14660 = state_14533__$1;(statearr_14591_14660[2] = null);
(statearr_14591_14660[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 24))
{var inst_14430 = (state_14533[25]);var inst_14447 = (state_14533[2]);var inst_14448 = cljs.core.next.call(null,inst_14430);var inst_14410 = inst_14448;var inst_14411 = null;var inst_14412 = 0;var inst_14413 = 0;var state_14533__$1 = (function (){var statearr_14592 = state_14533;(statearr_14592[14] = inst_14413);
(statearr_14592[15] = inst_14412);
(statearr_14592[16] = inst_14411);
(statearr_14592[17] = inst_14410);
(statearr_14592[29] = inst_14447);
return statearr_14592;
})();var statearr_14593_14661 = state_14533__$1;(statearr_14593_14661[2] = null);
(statearr_14593_14661[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 25))
{var inst_14472 = (state_14533[12]);var inst_14471 = (state_14533[13]);var inst_14474 = (inst_14472 < inst_14471);var inst_14475 = inst_14474;var state_14533__$1 = state_14533;if(cljs.core.truth_(inst_14475))
{var statearr_14594_14662 = state_14533__$1;(statearr_14594_14662[1] = 27);
} else
{var statearr_14595_14663 = state_14533__$1;(statearr_14595_14663[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 26))
{var inst_14461 = (state_14533[19]);var inst_14519 = (state_14533[2]);var inst_14520 = cljs.core.seq.call(null,inst_14461);var state_14533__$1 = (function (){var statearr_14596 = state_14533;(statearr_14596[30] = inst_14519);
return statearr_14596;
})();if(inst_14520)
{var statearr_14597_14664 = state_14533__$1;(statearr_14597_14664[1] = 42);
} else
{var statearr_14598_14665 = state_14533__$1;(statearr_14598_14665[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 27))
{var inst_14470 = (state_14533[10]);var inst_14472 = (state_14533[12]);var inst_14477 = cljs.core._nth.call(null,inst_14470,inst_14472);var state_14533__$1 = (function (){var statearr_14599 = state_14533;(statearr_14599[8] = inst_14477);
return statearr_14599;
})();var statearr_14600_14666 = state_14533__$1;(statearr_14600_14666[2] = null);
(statearr_14600_14666[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 28))
{var inst_14490 = (state_14533[9]);var inst_14469 = (state_14533[11]);var inst_14490__$1 = cljs.core.seq.call(null,inst_14469);var state_14533__$1 = (function (){var statearr_14604 = state_14533;(statearr_14604[9] = inst_14490__$1);
return statearr_14604;
})();if(inst_14490__$1)
{var statearr_14605_14667 = state_14533__$1;(statearr_14605_14667[1] = 33);
} else
{var statearr_14606_14668 = state_14533__$1;(statearr_14606_14668[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 29))
{var inst_14517 = (state_14533[2]);var state_14533__$1 = state_14533;var statearr_14607_14669 = state_14533__$1;(statearr_14607_14669[2] = inst_14517);
(statearr_14607_14669[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 30))
{var inst_14470 = (state_14533[10]);var inst_14469 = (state_14533[11]);var inst_14472 = (state_14533[12]);var inst_14471 = (state_14533[13]);var inst_14486 = (state_14533[2]);var inst_14487 = (inst_14472 + 1);var tmp14601 = inst_14470;var tmp14602 = inst_14469;var tmp14603 = inst_14471;var inst_14469__$1 = tmp14602;var inst_14470__$1 = tmp14601;var inst_14471__$1 = tmp14603;var inst_14472__$1 = inst_14487;var state_14533__$1 = (function (){var statearr_14608 = state_14533;(statearr_14608[31] = inst_14486);
(statearr_14608[10] = inst_14470__$1);
(statearr_14608[11] = inst_14469__$1);
(statearr_14608[12] = inst_14472__$1);
(statearr_14608[13] = inst_14471__$1);
return statearr_14608;
})();var statearr_14609_14670 = state_14533__$1;(statearr_14609_14670[2] = null);
(statearr_14609_14670[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14534 === 31))
{var inst_14477 = (state_14533[8]);var inst_14478 = (state_14533[2]);var inst_14479 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14480 = cljs.core.async.untap_STAR_.call(null,m,inst_14477);var state_14533__$1 = (function (){var statearr_14610 = state_14533;(statearr_14610[32] = inst_14479);
(statearr_14610[33] = inst_14478);
return statearr_14610;
})();var statearr_14611_14671 = state_14533__$1;(statearr_14611_14671[2] = inst_14480);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14533__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_14615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14615[0] = state_machine__6119__auto__);
(statearr_14615[1] = 1);
return statearr_14615;
});
var state_machine__6119__auto____1 = (function (state_14533){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_14533);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e14616){if((e14616 instanceof Object))
{var ex__6122__auto__ = e14616;var statearr_14617_14672 = state_14533;(statearr_14617_14672[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14533);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14616;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14673 = state_14533;
state_14533 = G__14673;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_14533){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_14533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_14618 = f__6189__auto__.call(null);(statearr_14618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___14619);
return statearr_14618;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
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
cljs.core.async.Mix = (function (){var obj14675 = {};return obj14675;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t14785 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14785 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14786){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta14786 = meta14786;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14785.cljs$lang$type = true;
cljs.core.async.t14785.cljs$lang$ctorStr = "cljs.core.async/t14785";
cljs.core.async.t14785.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t14785");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14785.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14785.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14785.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14785.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14785.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14785.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14785.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14785.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14787){var self__ = this;
var _14787__$1 = this;return self__.meta14786;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14787,meta14786__$1){var self__ = this;
var _14787__$1 = this;return (new cljs.core.async.t14785(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14786__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14785 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14785(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14786){return (new cljs.core.async.t14785(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14786));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14785(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6188__auto___14894 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_14852){var state_val_14853 = (state_14852[1]);if((state_val_14853 === 1))
{var inst_14791 = (state_14852[7]);var inst_14791__$1 = calc_state.call(null);var inst_14792 = cljs.core.seq_QMARK_.call(null,inst_14791__$1);var state_14852__$1 = (function (){var statearr_14854 = state_14852;(statearr_14854[7] = inst_14791__$1);
return statearr_14854;
})();if(inst_14792)
{var statearr_14855_14895 = state_14852__$1;(statearr_14855_14895[1] = 2);
} else
{var statearr_14856_14896 = state_14852__$1;(statearr_14856_14896[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 2))
{var inst_14791 = (state_14852[7]);var inst_14794 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14791);var state_14852__$1 = state_14852;var statearr_14857_14897 = state_14852__$1;(statearr_14857_14897[2] = inst_14794);
(statearr_14857_14897[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 3))
{var inst_14791 = (state_14852[7]);var state_14852__$1 = state_14852;var statearr_14858_14898 = state_14852__$1;(statearr_14858_14898[2] = inst_14791);
(statearr_14858_14898[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 4))
{var inst_14791 = (state_14852[7]);var inst_14797 = (state_14852[2]);var inst_14798 = cljs.core.get.call(null,inst_14797,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14799 = cljs.core.get.call(null,inst_14797,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14800 = cljs.core.get.call(null,inst_14797,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14801 = inst_14791;var state_14852__$1 = (function (){var statearr_14859 = state_14852;(statearr_14859[8] = inst_14800);
(statearr_14859[9] = inst_14801);
(statearr_14859[10] = inst_14799);
(statearr_14859[11] = inst_14798);
return statearr_14859;
})();var statearr_14860_14899 = state_14852__$1;(statearr_14860_14899[2] = null);
(statearr_14860_14899[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 5))
{var inst_14801 = (state_14852[9]);var inst_14804 = cljs.core.seq_QMARK_.call(null,inst_14801);var state_14852__$1 = state_14852;if(inst_14804)
{var statearr_14861_14900 = state_14852__$1;(statearr_14861_14900[1] = 7);
} else
{var statearr_14862_14901 = state_14852__$1;(statearr_14862_14901[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 6))
{var inst_14850 = (state_14852[2]);var state_14852__$1 = state_14852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14852__$1,inst_14850);
} else
{if((state_val_14853 === 7))
{var inst_14801 = (state_14852[9]);var inst_14806 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14801);var state_14852__$1 = state_14852;var statearr_14863_14902 = state_14852__$1;(statearr_14863_14902[2] = inst_14806);
(statearr_14863_14902[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 8))
{var inst_14801 = (state_14852[9]);var state_14852__$1 = state_14852;var statearr_14864_14903 = state_14852__$1;(statearr_14864_14903[2] = inst_14801);
(statearr_14864_14903[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 9))
{var inst_14809 = (state_14852[12]);var inst_14809__$1 = (state_14852[2]);var inst_14810 = cljs.core.get.call(null,inst_14809__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14811 = cljs.core.get.call(null,inst_14809__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14812 = cljs.core.get.call(null,inst_14809__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14852__$1 = (function (){var statearr_14865 = state_14852;(statearr_14865[13] = inst_14811);
(statearr_14865[14] = inst_14812);
(statearr_14865[12] = inst_14809__$1);
return statearr_14865;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14852__$1,10,inst_14810);
} else
{if((state_val_14853 === 10))
{var inst_14816 = (state_14852[15]);var inst_14817 = (state_14852[16]);var inst_14815 = (state_14852[2]);var inst_14816__$1 = cljs.core.nth.call(null,inst_14815,0,null);var inst_14817__$1 = cljs.core.nth.call(null,inst_14815,1,null);var inst_14818 = (inst_14816__$1 == null);var inst_14819 = cljs.core._EQ_.call(null,inst_14817__$1,change);var inst_14820 = (inst_14818) || (inst_14819);var state_14852__$1 = (function (){var statearr_14866 = state_14852;(statearr_14866[15] = inst_14816__$1);
(statearr_14866[16] = inst_14817__$1);
return statearr_14866;
})();if(cljs.core.truth_(inst_14820))
{var statearr_14867_14904 = state_14852__$1;(statearr_14867_14904[1] = 11);
} else
{var statearr_14868_14905 = state_14852__$1;(statearr_14868_14905[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 11))
{var inst_14816 = (state_14852[15]);var inst_14822 = (inst_14816 == null);var state_14852__$1 = state_14852;if(cljs.core.truth_(inst_14822))
{var statearr_14869_14906 = state_14852__$1;(statearr_14869_14906[1] = 14);
} else
{var statearr_14870_14907 = state_14852__$1;(statearr_14870_14907[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 12))
{var inst_14817 = (state_14852[16]);var inst_14831 = (state_14852[17]);var inst_14812 = (state_14852[14]);var inst_14831__$1 = inst_14812.call(null,inst_14817);var state_14852__$1 = (function (){var statearr_14871 = state_14852;(statearr_14871[17] = inst_14831__$1);
return statearr_14871;
})();if(cljs.core.truth_(inst_14831__$1))
{var statearr_14872_14908 = state_14852__$1;(statearr_14872_14908[1] = 17);
} else
{var statearr_14873_14909 = state_14852__$1;(statearr_14873_14909[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 13))
{var inst_14848 = (state_14852[2]);var state_14852__$1 = state_14852;var statearr_14874_14910 = state_14852__$1;(statearr_14874_14910[2] = inst_14848);
(statearr_14874_14910[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 14))
{var inst_14817 = (state_14852[16]);var inst_14824 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14817);var state_14852__$1 = state_14852;var statearr_14875_14911 = state_14852__$1;(statearr_14875_14911[2] = inst_14824);
(statearr_14875_14911[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 15))
{var state_14852__$1 = state_14852;var statearr_14876_14912 = state_14852__$1;(statearr_14876_14912[2] = null);
(statearr_14876_14912[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 16))
{var inst_14827 = (state_14852[2]);var inst_14828 = calc_state.call(null);var inst_14801 = inst_14828;var state_14852__$1 = (function (){var statearr_14877 = state_14852;(statearr_14877[9] = inst_14801);
(statearr_14877[18] = inst_14827);
return statearr_14877;
})();var statearr_14878_14913 = state_14852__$1;(statearr_14878_14913[2] = null);
(statearr_14878_14913[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 17))
{var inst_14831 = (state_14852[17]);var state_14852__$1 = state_14852;var statearr_14879_14914 = state_14852__$1;(statearr_14879_14914[2] = inst_14831);
(statearr_14879_14914[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 18))
{var inst_14817 = (state_14852[16]);var inst_14811 = (state_14852[13]);var inst_14812 = (state_14852[14]);var inst_14834 = cljs.core.empty_QMARK_.call(null,inst_14812);var inst_14835 = inst_14811.call(null,inst_14817);var inst_14836 = cljs.core.not.call(null,inst_14835);var inst_14837 = (inst_14834) && (inst_14836);var state_14852__$1 = state_14852;var statearr_14880_14915 = state_14852__$1;(statearr_14880_14915[2] = inst_14837);
(statearr_14880_14915[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 19))
{var inst_14839 = (state_14852[2]);var state_14852__$1 = state_14852;if(cljs.core.truth_(inst_14839))
{var statearr_14881_14916 = state_14852__$1;(statearr_14881_14916[1] = 20);
} else
{var statearr_14882_14917 = state_14852__$1;(statearr_14882_14917[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 20))
{var inst_14816 = (state_14852[15]);var state_14852__$1 = state_14852;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14852__$1,23,out,inst_14816);
} else
{if((state_val_14853 === 21))
{var state_14852__$1 = state_14852;var statearr_14883_14918 = state_14852__$1;(statearr_14883_14918[2] = null);
(statearr_14883_14918[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 22))
{var inst_14809 = (state_14852[12]);var inst_14845 = (state_14852[2]);var inst_14801 = inst_14809;var state_14852__$1 = (function (){var statearr_14884 = state_14852;(statearr_14884[9] = inst_14801);
(statearr_14884[19] = inst_14845);
return statearr_14884;
})();var statearr_14885_14919 = state_14852__$1;(statearr_14885_14919[2] = null);
(statearr_14885_14919[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14853 === 23))
{var inst_14842 = (state_14852[2]);var state_14852__$1 = state_14852;var statearr_14886_14920 = state_14852__$1;(statearr_14886_14920[2] = inst_14842);
(statearr_14886_14920[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_14890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14890[0] = state_machine__6119__auto__);
(statearr_14890[1] = 1);
return statearr_14890;
});
var state_machine__6119__auto____1 = (function (state_14852){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_14852);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e14891){if((e14891 instanceof Object))
{var ex__6122__auto__ = e14891;var statearr_14892_14921 = state_14852;(statearr_14892_14921[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14852);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14891;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14922 = state_14852;
state_14852 = G__14922;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_14852){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_14852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_14893 = f__6189__auto__.call(null);(statearr_14893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___14894);
return statearr_14893;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
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
cljs.core.async.Pub = (function (){var obj14924 = {};return obj14924;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
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
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__14925_SHARP_){if(cljs.core.truth_(p1__14925_SHARP_.call(null,topic)))
{return p1__14925_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14925_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15050 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15050 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15051){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15051 = meta15051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15050.cljs$lang$type = true;
cljs.core.async.t15050.cljs$lang$ctorStr = "cljs.core.async/t15050";
cljs.core.async.t15050.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t15050");
});})(mults,ensure_mult))
;
cljs.core.async.t15050.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15050.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15050.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15050.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15050.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15050.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15050.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15052){var self__ = this;
var _15052__$1 = this;return self__.meta15051;
});})(mults,ensure_mult))
;
cljs.core.async.t15050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15052,meta15051__$1){var self__ = this;
var _15052__$1 = this;return (new cljs.core.async.t15050(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15051__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15050 = ((function (mults,ensure_mult){
return (function __GT_t15050(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15051){return (new cljs.core.async.t15050(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15051));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15050(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6188__auto___15174 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_15126){var state_val_15127 = (state_15126[1]);if((state_val_15127 === 1))
{var state_15126__$1 = state_15126;var statearr_15128_15175 = state_15126__$1;(statearr_15128_15175[2] = null);
(statearr_15128_15175[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 2))
{var state_15126__$1 = state_15126;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15126__$1,4,ch);
} else
{if((state_val_15127 === 3))
{var inst_15124 = (state_15126[2]);var state_15126__$1 = state_15126;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15126__$1,inst_15124);
} else
{if((state_val_15127 === 4))
{var inst_15055 = (state_15126[7]);var inst_15055__$1 = (state_15126[2]);var inst_15056 = (inst_15055__$1 == null);var state_15126__$1 = (function (){var statearr_15129 = state_15126;(statearr_15129[7] = inst_15055__$1);
return statearr_15129;
})();if(cljs.core.truth_(inst_15056))
{var statearr_15130_15176 = state_15126__$1;(statearr_15130_15176[1] = 5);
} else
{var statearr_15131_15177 = state_15126__$1;(statearr_15131_15177[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 5))
{var inst_15062 = cljs.core.deref.call(null,mults);var inst_15063 = cljs.core.vals.call(null,inst_15062);var inst_15064 = cljs.core.seq.call(null,inst_15063);var inst_15065 = inst_15064;var inst_15066 = null;var inst_15067 = 0;var inst_15068 = 0;var state_15126__$1 = (function (){var statearr_15132 = state_15126;(statearr_15132[8] = inst_15067);
(statearr_15132[9] = inst_15068);
(statearr_15132[10] = inst_15066);
(statearr_15132[11] = inst_15065);
return statearr_15132;
})();var statearr_15133_15178 = state_15126__$1;(statearr_15133_15178[2] = null);
(statearr_15133_15178[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 6))
{var inst_15055 = (state_15126[7]);var inst_15105 = (state_15126[12]);var inst_15103 = (state_15126[13]);var inst_15103__$1 = topic_fn.call(null,inst_15055);var inst_15104 = cljs.core.deref.call(null,mults);var inst_15105__$1 = cljs.core.get.call(null,inst_15104,inst_15103__$1);var state_15126__$1 = (function (){var statearr_15134 = state_15126;(statearr_15134[12] = inst_15105__$1);
(statearr_15134[13] = inst_15103__$1);
return statearr_15134;
})();if(cljs.core.truth_(inst_15105__$1))
{var statearr_15135_15179 = state_15126__$1;(statearr_15135_15179[1] = 19);
} else
{var statearr_15136_15180 = state_15126__$1;(statearr_15136_15180[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 7))
{var inst_15122 = (state_15126[2]);var state_15126__$1 = state_15126;var statearr_15137_15181 = state_15126__$1;(statearr_15137_15181[2] = inst_15122);
(statearr_15137_15181[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 8))
{var inst_15067 = (state_15126[8]);var inst_15068 = (state_15126[9]);var inst_15070 = (inst_15068 < inst_15067);var inst_15071 = inst_15070;var state_15126__$1 = state_15126;if(cljs.core.truth_(inst_15071))
{var statearr_15141_15182 = state_15126__$1;(statearr_15141_15182[1] = 10);
} else
{var statearr_15142_15183 = state_15126__$1;(statearr_15142_15183[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 9))
{var inst_15101 = (state_15126[2]);var state_15126__$1 = state_15126;var statearr_15143_15184 = state_15126__$1;(statearr_15143_15184[2] = inst_15101);
(statearr_15143_15184[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 10))
{var inst_15067 = (state_15126[8]);var inst_15068 = (state_15126[9]);var inst_15066 = (state_15126[10]);var inst_15065 = (state_15126[11]);var inst_15073 = cljs.core._nth.call(null,inst_15066,inst_15068);var inst_15074 = cljs.core.async.muxch_STAR_.call(null,inst_15073);var inst_15075 = cljs.core.async.close_BANG_.call(null,inst_15074);var inst_15076 = (inst_15068 + 1);var tmp15138 = inst_15067;var tmp15139 = inst_15066;var tmp15140 = inst_15065;var inst_15065__$1 = tmp15140;var inst_15066__$1 = tmp15139;var inst_15067__$1 = tmp15138;var inst_15068__$1 = inst_15076;var state_15126__$1 = (function (){var statearr_15144 = state_15126;(statearr_15144[8] = inst_15067__$1);
(statearr_15144[9] = inst_15068__$1);
(statearr_15144[10] = inst_15066__$1);
(statearr_15144[11] = inst_15065__$1);
(statearr_15144[14] = inst_15075);
return statearr_15144;
})();var statearr_15145_15185 = state_15126__$1;(statearr_15145_15185[2] = null);
(statearr_15145_15185[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 11))
{var inst_15065 = (state_15126[11]);var inst_15079 = (state_15126[15]);var inst_15079__$1 = cljs.core.seq.call(null,inst_15065);var state_15126__$1 = (function (){var statearr_15146 = state_15126;(statearr_15146[15] = inst_15079__$1);
return statearr_15146;
})();if(inst_15079__$1)
{var statearr_15147_15186 = state_15126__$1;(statearr_15147_15186[1] = 13);
} else
{var statearr_15148_15187 = state_15126__$1;(statearr_15148_15187[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 12))
{var inst_15099 = (state_15126[2]);var state_15126__$1 = state_15126;var statearr_15149_15188 = state_15126__$1;(statearr_15149_15188[2] = inst_15099);
(statearr_15149_15188[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 13))
{var inst_15079 = (state_15126[15]);var inst_15081 = cljs.core.chunked_seq_QMARK_.call(null,inst_15079);var state_15126__$1 = state_15126;if(inst_15081)
{var statearr_15150_15189 = state_15126__$1;(statearr_15150_15189[1] = 16);
} else
{var statearr_15151_15190 = state_15126__$1;(statearr_15151_15190[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 14))
{var state_15126__$1 = state_15126;var statearr_15152_15191 = state_15126__$1;(statearr_15152_15191[2] = null);
(statearr_15152_15191[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 15))
{var inst_15097 = (state_15126[2]);var state_15126__$1 = state_15126;var statearr_15153_15192 = state_15126__$1;(statearr_15153_15192[2] = inst_15097);
(statearr_15153_15192[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 16))
{var inst_15079 = (state_15126[15]);var inst_15083 = cljs.core.chunk_first.call(null,inst_15079);var inst_15084 = cljs.core.chunk_rest.call(null,inst_15079);var inst_15085 = cljs.core.count.call(null,inst_15083);var inst_15065 = inst_15084;var inst_15066 = inst_15083;var inst_15067 = inst_15085;var inst_15068 = 0;var state_15126__$1 = (function (){var statearr_15154 = state_15126;(statearr_15154[8] = inst_15067);
(statearr_15154[9] = inst_15068);
(statearr_15154[10] = inst_15066);
(statearr_15154[11] = inst_15065);
return statearr_15154;
})();var statearr_15155_15193 = state_15126__$1;(statearr_15155_15193[2] = null);
(statearr_15155_15193[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 17))
{var inst_15079 = (state_15126[15]);var inst_15088 = cljs.core.first.call(null,inst_15079);var inst_15089 = cljs.core.async.muxch_STAR_.call(null,inst_15088);var inst_15090 = cljs.core.async.close_BANG_.call(null,inst_15089);var inst_15091 = cljs.core.next.call(null,inst_15079);var inst_15065 = inst_15091;var inst_15066 = null;var inst_15067 = 0;var inst_15068 = 0;var state_15126__$1 = (function (){var statearr_15156 = state_15126;(statearr_15156[8] = inst_15067);
(statearr_15156[9] = inst_15068);
(statearr_15156[10] = inst_15066);
(statearr_15156[11] = inst_15065);
(statearr_15156[16] = inst_15090);
return statearr_15156;
})();var statearr_15157_15194 = state_15126__$1;(statearr_15157_15194[2] = null);
(statearr_15157_15194[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 18))
{var inst_15094 = (state_15126[2]);var state_15126__$1 = state_15126;var statearr_15158_15195 = state_15126__$1;(statearr_15158_15195[2] = inst_15094);
(statearr_15158_15195[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 19))
{var state_15126__$1 = state_15126;var statearr_15159_15196 = state_15126__$1;(statearr_15159_15196[2] = null);
(statearr_15159_15196[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 20))
{var state_15126__$1 = state_15126;var statearr_15160_15197 = state_15126__$1;(statearr_15160_15197[2] = null);
(statearr_15160_15197[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 21))
{var inst_15119 = (state_15126[2]);var state_15126__$1 = (function (){var statearr_15161 = state_15126;(statearr_15161[17] = inst_15119);
return statearr_15161;
})();var statearr_15162_15198 = state_15126__$1;(statearr_15162_15198[2] = null);
(statearr_15162_15198[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 22))
{var inst_15116 = (state_15126[2]);var state_15126__$1 = state_15126;var statearr_15163_15199 = state_15126__$1;(statearr_15163_15199[2] = inst_15116);
(statearr_15163_15199[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 23))
{var inst_15103 = (state_15126[13]);var inst_15107 = (state_15126[2]);var inst_15108 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15103);var state_15126__$1 = (function (){var statearr_15164 = state_15126;(statearr_15164[18] = inst_15107);
return statearr_15164;
})();var statearr_15165_15200 = state_15126__$1;(statearr_15165_15200[2] = inst_15108);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15126__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15127 === 24))
{var inst_15055 = (state_15126[7]);var inst_15105 = (state_15126[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15126,23,Object,null,22);var inst_15112 = cljs.core.async.muxch_STAR_.call(null,inst_15105);var state_15126__$1 = state_15126;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15126__$1,25,inst_15112,inst_15055);
} else
{if((state_val_15127 === 25))
{var inst_15114 = (state_15126[2]);var state_15126__$1 = state_15126;var statearr_15166_15201 = state_15126__$1;(statearr_15166_15201[2] = inst_15114);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15126__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_15170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15170[0] = state_machine__6119__auto__);
(statearr_15170[1] = 1);
return statearr_15170;
});
var state_machine__6119__auto____1 = (function (state_15126){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_15126);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e15171){if((e15171 instanceof Object))
{var ex__6122__auto__ = e15171;var statearr_15172_15202 = state_15126;(statearr_15172_15202[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15126);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15203 = state_15126;
state_15126 = G__15203;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_15126){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_15126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_15173 = f__6189__auto__.call(null);(statearr_15173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___15174);
return statearr_15173;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6188__auto___15340 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_15310){var state_val_15311 = (state_15310[1]);if((state_val_15311 === 1))
{var state_15310__$1 = state_15310;var statearr_15312_15341 = state_15310__$1;(statearr_15312_15341[2] = null);
(statearr_15312_15341[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15311 === 2))
{var inst_15273 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15274 = 0;var state_15310__$1 = (function (){var statearr_15313 = state_15310;(statearr_15313[7] = inst_15273);
(statearr_15313[8] = inst_15274);
return statearr_15313;
})();var statearr_15314_15342 = state_15310__$1;(statearr_15314_15342[2] = null);
(statearr_15314_15342[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15311 === 3))
{var inst_15308 = (state_15310[2]);var state_15310__$1 = state_15310;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15310__$1,inst_15308);
} else
{if((state_val_15311 === 4))
{var inst_15274 = (state_15310[8]);var inst_15276 = (inst_15274 < cnt);var state_15310__$1 = state_15310;if(cljs.core.truth_(inst_15276))
{var statearr_15315_15343 = state_15310__$1;(statearr_15315_15343[1] = 6);
} else
{var statearr_15316_15344 = state_15310__$1;(statearr_15316_15344[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15311 === 5))
{var inst_15294 = (state_15310[2]);var state_15310__$1 = (function (){var statearr_15317 = state_15310;(statearr_15317[9] = inst_15294);
return statearr_15317;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15310__$1,12,dchan);
} else
{if((state_val_15311 === 6))
{var state_15310__$1 = state_15310;var statearr_15318_15345 = state_15310__$1;(statearr_15318_15345[2] = null);
(statearr_15318_15345[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15311 === 7))
{var state_15310__$1 = state_15310;var statearr_15319_15346 = state_15310__$1;(statearr_15319_15346[2] = null);
(statearr_15319_15346[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15311 === 8))
{var inst_15292 = (state_15310[2]);var state_15310__$1 = state_15310;var statearr_15320_15347 = state_15310__$1;(statearr_15320_15347[2] = inst_15292);
(statearr_15320_15347[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15311 === 9))
{var inst_15274 = (state_15310[8]);var inst_15287 = (state_15310[2]);var inst_15288 = (inst_15274 + 1);var inst_15274__$1 = inst_15288;var state_15310__$1 = (function (){var statearr_15321 = state_15310;(statearr_15321[8] = inst_15274__$1);
(statearr_15321[10] = inst_15287);
return statearr_15321;
})();var statearr_15322_15348 = state_15310__$1;(statearr_15322_15348[2] = null);
(statearr_15322_15348[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15311 === 10))
{var inst_15278 = (state_15310[2]);var inst_15279 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15310__$1 = (function (){var statearr_15323 = state_15310;(statearr_15323[11] = inst_15278);
return statearr_15323;
})();var statearr_15324_15349 = state_15310__$1;(statearr_15324_15349[2] = inst_15279);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15310__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15311 === 11))
{var inst_15274 = (state_15310[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15310,10,Object,null,9);var inst_15283 = chs__$1.call(null,inst_15274);var inst_15284 = done.call(null,inst_15274);var inst_15285 = cljs.core.async.take_BANG_.call(null,inst_15283,inst_15284);var state_15310__$1 = state_15310;var statearr_15325_15350 = state_15310__$1;(statearr_15325_15350[2] = inst_15285);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15310__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15311 === 12))
{var inst_15296 = (state_15310[12]);var inst_15296__$1 = (state_15310[2]);var inst_15297 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15296__$1);var state_15310__$1 = (function (){var statearr_15326 = state_15310;(statearr_15326[12] = inst_15296__$1);
return statearr_15326;
})();if(cljs.core.truth_(inst_15297))
{var statearr_15327_15351 = state_15310__$1;(statearr_15327_15351[1] = 13);
} else
{var statearr_15328_15352 = state_15310__$1;(statearr_15328_15352[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15311 === 13))
{var inst_15299 = cljs.core.async.close_BANG_.call(null,out);var state_15310__$1 = state_15310;var statearr_15329_15353 = state_15310__$1;(statearr_15329_15353[2] = inst_15299);
(statearr_15329_15353[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15311 === 14))
{var inst_15296 = (state_15310[12]);var inst_15301 = cljs.core.apply.call(null,f,inst_15296);var state_15310__$1 = state_15310;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15310__$1,16,out,inst_15301);
} else
{if((state_val_15311 === 15))
{var inst_15306 = (state_15310[2]);var state_15310__$1 = state_15310;var statearr_15330_15354 = state_15310__$1;(statearr_15330_15354[2] = inst_15306);
(statearr_15330_15354[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15311 === 16))
{var inst_15303 = (state_15310[2]);var state_15310__$1 = (function (){var statearr_15331 = state_15310;(statearr_15331[13] = inst_15303);
return statearr_15331;
})();var statearr_15332_15355 = state_15310__$1;(statearr_15332_15355[2] = null);
(statearr_15332_15355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_15336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15336[0] = state_machine__6119__auto__);
(statearr_15336[1] = 1);
return statearr_15336;
});
var state_machine__6119__auto____1 = (function (state_15310){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_15310);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e15337){if((e15337 instanceof Object))
{var ex__6122__auto__ = e15337;var statearr_15338_15356 = state_15310;(statearr_15338_15356[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15310);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15357 = state_15310;
state_15310 = G__15357;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_15310){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_15310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_15339 = f__6189__auto__.call(null);(statearr_15339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___15340);
return statearr_15339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6188__auto___15465 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_15441){var state_val_15442 = (state_15441[1]);if((state_val_15442 === 1))
{var inst_15412 = cljs.core.vec.call(null,chs);var inst_15413 = inst_15412;var state_15441__$1 = (function (){var statearr_15443 = state_15441;(statearr_15443[7] = inst_15413);
return statearr_15443;
})();var statearr_15444_15466 = state_15441__$1;(statearr_15444_15466[2] = null);
(statearr_15444_15466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15442 === 2))
{var inst_15413 = (state_15441[7]);var inst_15415 = cljs.core.count.call(null,inst_15413);var inst_15416 = (inst_15415 > 0);var state_15441__$1 = state_15441;if(cljs.core.truth_(inst_15416))
{var statearr_15445_15467 = state_15441__$1;(statearr_15445_15467[1] = 4);
} else
{var statearr_15446_15468 = state_15441__$1;(statearr_15446_15468[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15442 === 3))
{var inst_15439 = (state_15441[2]);var state_15441__$1 = state_15441;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15441__$1,inst_15439);
} else
{if((state_val_15442 === 4))
{var inst_15413 = (state_15441[7]);var state_15441__$1 = state_15441;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15441__$1,7,inst_15413);
} else
{if((state_val_15442 === 5))
{var inst_15435 = cljs.core.async.close_BANG_.call(null,out);var state_15441__$1 = state_15441;var statearr_15447_15469 = state_15441__$1;(statearr_15447_15469[2] = inst_15435);
(statearr_15447_15469[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15442 === 6))
{var inst_15437 = (state_15441[2]);var state_15441__$1 = state_15441;var statearr_15448_15470 = state_15441__$1;(statearr_15448_15470[2] = inst_15437);
(statearr_15448_15470[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15442 === 7))
{var inst_15421 = (state_15441[8]);var inst_15420 = (state_15441[9]);var inst_15420__$1 = (state_15441[2]);var inst_15421__$1 = cljs.core.nth.call(null,inst_15420__$1,0,null);var inst_15422 = cljs.core.nth.call(null,inst_15420__$1,1,null);var inst_15423 = (inst_15421__$1 == null);var state_15441__$1 = (function (){var statearr_15449 = state_15441;(statearr_15449[8] = inst_15421__$1);
(statearr_15449[10] = inst_15422);
(statearr_15449[9] = inst_15420__$1);
return statearr_15449;
})();if(cljs.core.truth_(inst_15423))
{var statearr_15450_15471 = state_15441__$1;(statearr_15450_15471[1] = 8);
} else
{var statearr_15451_15472 = state_15441__$1;(statearr_15451_15472[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15442 === 8))
{var inst_15421 = (state_15441[8]);var inst_15422 = (state_15441[10]);var inst_15420 = (state_15441[9]);var inst_15413 = (state_15441[7]);var inst_15425 = (function (){var c = inst_15422;var v = inst_15421;var vec__15418 = inst_15420;var cs = inst_15413;return ((function (c,v,vec__15418,cs,inst_15421,inst_15422,inst_15420,inst_15413,state_val_15442){
return (function (p1__15358_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15358_SHARP_);
});
;})(c,v,vec__15418,cs,inst_15421,inst_15422,inst_15420,inst_15413,state_val_15442))
})();var inst_15426 = cljs.core.filterv.call(null,inst_15425,inst_15413);var inst_15413__$1 = inst_15426;var state_15441__$1 = (function (){var statearr_15452 = state_15441;(statearr_15452[7] = inst_15413__$1);
return statearr_15452;
})();var statearr_15453_15473 = state_15441__$1;(statearr_15453_15473[2] = null);
(statearr_15453_15473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15442 === 9))
{var inst_15421 = (state_15441[8]);var state_15441__$1 = state_15441;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15441__$1,11,out,inst_15421);
} else
{if((state_val_15442 === 10))
{var inst_15433 = (state_15441[2]);var state_15441__$1 = state_15441;var statearr_15455_15474 = state_15441__$1;(statearr_15455_15474[2] = inst_15433);
(statearr_15455_15474[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15442 === 11))
{var inst_15413 = (state_15441[7]);var inst_15430 = (state_15441[2]);var tmp15454 = inst_15413;var inst_15413__$1 = tmp15454;var state_15441__$1 = (function (){var statearr_15456 = state_15441;(statearr_15456[7] = inst_15413__$1);
(statearr_15456[11] = inst_15430);
return statearr_15456;
})();var statearr_15457_15475 = state_15441__$1;(statearr_15457_15475[2] = null);
(statearr_15457_15475[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_15461 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15461[0] = state_machine__6119__auto__);
(statearr_15461[1] = 1);
return statearr_15461;
});
var state_machine__6119__auto____1 = (function (state_15441){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_15441);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e15462){if((e15462 instanceof Object))
{var ex__6122__auto__ = e15462;var statearr_15463_15476 = state_15441;(statearr_15463_15476[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15441);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15462;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15477 = state_15441;
state_15441 = G__15477;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_15441){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_15441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_15464 = f__6189__auto__.call(null);(statearr_15464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___15465);
return statearr_15464;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6188__auto___15570 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_15547){var state_val_15548 = (state_15547[1]);if((state_val_15548 === 1))
{var inst_15524 = 0;var state_15547__$1 = (function (){var statearr_15549 = state_15547;(statearr_15549[7] = inst_15524);
return statearr_15549;
})();var statearr_15550_15571 = state_15547__$1;(statearr_15550_15571[2] = null);
(statearr_15550_15571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15548 === 2))
{var inst_15524 = (state_15547[7]);var inst_15526 = (inst_15524 < n);var state_15547__$1 = state_15547;if(cljs.core.truth_(inst_15526))
{var statearr_15551_15572 = state_15547__$1;(statearr_15551_15572[1] = 4);
} else
{var statearr_15552_15573 = state_15547__$1;(statearr_15552_15573[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15548 === 3))
{var inst_15544 = (state_15547[2]);var inst_15545 = cljs.core.async.close_BANG_.call(null,out);var state_15547__$1 = (function (){var statearr_15553 = state_15547;(statearr_15553[8] = inst_15544);
return statearr_15553;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15547__$1,inst_15545);
} else
{if((state_val_15548 === 4))
{var state_15547__$1 = state_15547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15547__$1,7,ch);
} else
{if((state_val_15548 === 5))
{var state_15547__$1 = state_15547;var statearr_15554_15574 = state_15547__$1;(statearr_15554_15574[2] = null);
(statearr_15554_15574[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15548 === 6))
{var inst_15542 = (state_15547[2]);var state_15547__$1 = state_15547;var statearr_15555_15575 = state_15547__$1;(statearr_15555_15575[2] = inst_15542);
(statearr_15555_15575[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15548 === 7))
{var inst_15529 = (state_15547[9]);var inst_15529__$1 = (state_15547[2]);var inst_15530 = (inst_15529__$1 == null);var inst_15531 = cljs.core.not.call(null,inst_15530);var state_15547__$1 = (function (){var statearr_15556 = state_15547;(statearr_15556[9] = inst_15529__$1);
return statearr_15556;
})();if(inst_15531)
{var statearr_15557_15576 = state_15547__$1;(statearr_15557_15576[1] = 8);
} else
{var statearr_15558_15577 = state_15547__$1;(statearr_15558_15577[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15548 === 8))
{var inst_15529 = (state_15547[9]);var state_15547__$1 = state_15547;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15547__$1,11,out,inst_15529);
} else
{if((state_val_15548 === 9))
{var state_15547__$1 = state_15547;var statearr_15559_15578 = state_15547__$1;(statearr_15559_15578[2] = null);
(statearr_15559_15578[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15548 === 10))
{var inst_15539 = (state_15547[2]);var state_15547__$1 = state_15547;var statearr_15560_15579 = state_15547__$1;(statearr_15560_15579[2] = inst_15539);
(statearr_15560_15579[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15548 === 11))
{var inst_15524 = (state_15547[7]);var inst_15534 = (state_15547[2]);var inst_15535 = (inst_15524 + 1);var inst_15524__$1 = inst_15535;var state_15547__$1 = (function (){var statearr_15561 = state_15547;(statearr_15561[10] = inst_15534);
(statearr_15561[7] = inst_15524__$1);
return statearr_15561;
})();var statearr_15562_15580 = state_15547__$1;(statearr_15562_15580[2] = null);
(statearr_15562_15580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_15566 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15566[0] = state_machine__6119__auto__);
(statearr_15566[1] = 1);
return statearr_15566;
});
var state_machine__6119__auto____1 = (function (state_15547){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_15547);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e15567){if((e15567 instanceof Object))
{var ex__6122__auto__ = e15567;var statearr_15568_15581 = state_15547;(statearr_15568_15581[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15547);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15582 = state_15547;
state_15547 = G__15582;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_15547){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_15547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_15569 = f__6189__auto__.call(null);(statearr_15569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___15570);
return statearr_15569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6188__auto___15679 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_15654){var state_val_15655 = (state_15654[1]);if((state_val_15655 === 1))
{var inst_15631 = null;var state_15654__$1 = (function (){var statearr_15656 = state_15654;(statearr_15656[7] = inst_15631);
return statearr_15656;
})();var statearr_15657_15680 = state_15654__$1;(statearr_15657_15680[2] = null);
(statearr_15657_15680[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15655 === 2))
{var state_15654__$1 = state_15654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15654__$1,4,ch);
} else
{if((state_val_15655 === 3))
{var inst_15651 = (state_15654[2]);var inst_15652 = cljs.core.async.close_BANG_.call(null,out);var state_15654__$1 = (function (){var statearr_15658 = state_15654;(statearr_15658[8] = inst_15651);
return statearr_15658;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15654__$1,inst_15652);
} else
{if((state_val_15655 === 4))
{var inst_15634 = (state_15654[9]);var inst_15634__$1 = (state_15654[2]);var inst_15635 = (inst_15634__$1 == null);var inst_15636 = cljs.core.not.call(null,inst_15635);var state_15654__$1 = (function (){var statearr_15659 = state_15654;(statearr_15659[9] = inst_15634__$1);
return statearr_15659;
})();if(inst_15636)
{var statearr_15660_15681 = state_15654__$1;(statearr_15660_15681[1] = 5);
} else
{var statearr_15661_15682 = state_15654__$1;(statearr_15661_15682[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15655 === 5))
{var inst_15631 = (state_15654[7]);var inst_15634 = (state_15654[9]);var inst_15638 = cljs.core._EQ_.call(null,inst_15634,inst_15631);var state_15654__$1 = state_15654;if(inst_15638)
{var statearr_15662_15683 = state_15654__$1;(statearr_15662_15683[1] = 8);
} else
{var statearr_15663_15684 = state_15654__$1;(statearr_15663_15684[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15655 === 6))
{var state_15654__$1 = state_15654;var statearr_15665_15685 = state_15654__$1;(statearr_15665_15685[2] = null);
(statearr_15665_15685[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15655 === 7))
{var inst_15649 = (state_15654[2]);var state_15654__$1 = state_15654;var statearr_15666_15686 = state_15654__$1;(statearr_15666_15686[2] = inst_15649);
(statearr_15666_15686[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15655 === 8))
{var inst_15631 = (state_15654[7]);var tmp15664 = inst_15631;var inst_15631__$1 = tmp15664;var state_15654__$1 = (function (){var statearr_15667 = state_15654;(statearr_15667[7] = inst_15631__$1);
return statearr_15667;
})();var statearr_15668_15687 = state_15654__$1;(statearr_15668_15687[2] = null);
(statearr_15668_15687[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15655 === 9))
{var inst_15634 = (state_15654[9]);var state_15654__$1 = state_15654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15654__$1,11,out,inst_15634);
} else
{if((state_val_15655 === 10))
{var inst_15646 = (state_15654[2]);var state_15654__$1 = state_15654;var statearr_15669_15688 = state_15654__$1;(statearr_15669_15688[2] = inst_15646);
(statearr_15669_15688[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15655 === 11))
{var inst_15634 = (state_15654[9]);var inst_15643 = (state_15654[2]);var inst_15631 = inst_15634;var state_15654__$1 = (function (){var statearr_15670 = state_15654;(statearr_15670[7] = inst_15631);
(statearr_15670[10] = inst_15643);
return statearr_15670;
})();var statearr_15671_15689 = state_15654__$1;(statearr_15671_15689[2] = null);
(statearr_15671_15689[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_15675 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15675[0] = state_machine__6119__auto__);
(statearr_15675[1] = 1);
return statearr_15675;
});
var state_machine__6119__auto____1 = (function (state_15654){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_15654);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e15676){if((e15676 instanceof Object))
{var ex__6122__auto__ = e15676;var statearr_15677_15690 = state_15654;(statearr_15677_15690[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15654);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15676;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15691 = state_15654;
state_15654 = G__15691;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_15654){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_15654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_15678 = f__6189__auto__.call(null);(statearr_15678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___15679);
return statearr_15678;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6188__auto___15826 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_15796){var state_val_15797 = (state_15796[1]);if((state_val_15797 === 1))
{var inst_15759 = (new Array(n));var inst_15760 = inst_15759;var inst_15761 = 0;var state_15796__$1 = (function (){var statearr_15798 = state_15796;(statearr_15798[7] = inst_15760);
(statearr_15798[8] = inst_15761);
return statearr_15798;
})();var statearr_15799_15827 = state_15796__$1;(statearr_15799_15827[2] = null);
(statearr_15799_15827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15797 === 2))
{var state_15796__$1 = state_15796;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15796__$1,4,ch);
} else
{if((state_val_15797 === 3))
{var inst_15794 = (state_15796[2]);var state_15796__$1 = state_15796;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15796__$1,inst_15794);
} else
{if((state_val_15797 === 4))
{var inst_15764 = (state_15796[9]);var inst_15764__$1 = (state_15796[2]);var inst_15765 = (inst_15764__$1 == null);var inst_15766 = cljs.core.not.call(null,inst_15765);var state_15796__$1 = (function (){var statearr_15800 = state_15796;(statearr_15800[9] = inst_15764__$1);
return statearr_15800;
})();if(inst_15766)
{var statearr_15801_15828 = state_15796__$1;(statearr_15801_15828[1] = 5);
} else
{var statearr_15802_15829 = state_15796__$1;(statearr_15802_15829[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15797 === 5))
{var inst_15769 = (state_15796[10]);var inst_15764 = (state_15796[9]);var inst_15760 = (state_15796[7]);var inst_15761 = (state_15796[8]);var inst_15768 = (inst_15760[inst_15761] = inst_15764);var inst_15769__$1 = (inst_15761 + 1);var inst_15770 = (inst_15769__$1 < n);var state_15796__$1 = (function (){var statearr_15803 = state_15796;(statearr_15803[11] = inst_15768);
(statearr_15803[10] = inst_15769__$1);
return statearr_15803;
})();if(cljs.core.truth_(inst_15770))
{var statearr_15804_15830 = state_15796__$1;(statearr_15804_15830[1] = 8);
} else
{var statearr_15805_15831 = state_15796__$1;(statearr_15805_15831[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15797 === 6))
{var inst_15761 = (state_15796[8]);var inst_15782 = (inst_15761 > 0);var state_15796__$1 = state_15796;if(cljs.core.truth_(inst_15782))
{var statearr_15807_15832 = state_15796__$1;(statearr_15807_15832[1] = 12);
} else
{var statearr_15808_15833 = state_15796__$1;(statearr_15808_15833[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15797 === 7))
{var inst_15792 = (state_15796[2]);var state_15796__$1 = state_15796;var statearr_15809_15834 = state_15796__$1;(statearr_15809_15834[2] = inst_15792);
(statearr_15809_15834[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15797 === 8))
{var inst_15769 = (state_15796[10]);var inst_15760 = (state_15796[7]);var tmp15806 = inst_15760;var inst_15760__$1 = tmp15806;var inst_15761 = inst_15769;var state_15796__$1 = (function (){var statearr_15810 = state_15796;(statearr_15810[7] = inst_15760__$1);
(statearr_15810[8] = inst_15761);
return statearr_15810;
})();var statearr_15811_15835 = state_15796__$1;(statearr_15811_15835[2] = null);
(statearr_15811_15835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15797 === 9))
{var inst_15760 = (state_15796[7]);var inst_15774 = cljs.core.vec.call(null,inst_15760);var state_15796__$1 = state_15796;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15796__$1,11,out,inst_15774);
} else
{if((state_val_15797 === 10))
{var inst_15780 = (state_15796[2]);var state_15796__$1 = state_15796;var statearr_15812_15836 = state_15796__$1;(statearr_15812_15836[2] = inst_15780);
(statearr_15812_15836[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15797 === 11))
{var inst_15776 = (state_15796[2]);var inst_15777 = (new Array(n));var inst_15760 = inst_15777;var inst_15761 = 0;var state_15796__$1 = (function (){var statearr_15813 = state_15796;(statearr_15813[12] = inst_15776);
(statearr_15813[7] = inst_15760);
(statearr_15813[8] = inst_15761);
return statearr_15813;
})();var statearr_15814_15837 = state_15796__$1;(statearr_15814_15837[2] = null);
(statearr_15814_15837[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15797 === 12))
{var inst_15760 = (state_15796[7]);var inst_15784 = cljs.core.vec.call(null,inst_15760);var state_15796__$1 = state_15796;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15796__$1,15,out,inst_15784);
} else
{if((state_val_15797 === 13))
{var state_15796__$1 = state_15796;var statearr_15815_15838 = state_15796__$1;(statearr_15815_15838[2] = null);
(statearr_15815_15838[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15797 === 14))
{var inst_15789 = (state_15796[2]);var inst_15790 = cljs.core.async.close_BANG_.call(null,out);var state_15796__$1 = (function (){var statearr_15816 = state_15796;(statearr_15816[13] = inst_15789);
return statearr_15816;
})();var statearr_15817_15839 = state_15796__$1;(statearr_15817_15839[2] = inst_15790);
(statearr_15817_15839[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15797 === 15))
{var inst_15786 = (state_15796[2]);var state_15796__$1 = state_15796;var statearr_15818_15840 = state_15796__$1;(statearr_15818_15840[2] = inst_15786);
(statearr_15818_15840[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_15822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15822[0] = state_machine__6119__auto__);
(statearr_15822[1] = 1);
return statearr_15822;
});
var state_machine__6119__auto____1 = (function (state_15796){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_15796);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e15823){if((e15823 instanceof Object))
{var ex__6122__auto__ = e15823;var statearr_15824_15841 = state_15796;(statearr_15824_15841[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15796);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15842 = state_15796;
state_15796 = G__15842;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_15796){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_15796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_15825 = f__6189__auto__.call(null);(statearr_15825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___15826);
return statearr_15825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6188__auto___15985 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6189__auto__ = (function (){var switch__6118__auto__ = (function (state_15955){var state_val_15956 = (state_15955[1]);if((state_val_15956 === 1))
{var inst_15914 = [];var inst_15915 = inst_15914;var inst_15916 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15955__$1 = (function (){var statearr_15957 = state_15955;(statearr_15957[7] = inst_15916);
(statearr_15957[8] = inst_15915);
return statearr_15957;
})();var statearr_15958_15986 = state_15955__$1;(statearr_15958_15986[2] = null);
(statearr_15958_15986[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15956 === 2))
{var state_15955__$1 = state_15955;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15955__$1,4,ch);
} else
{if((state_val_15956 === 3))
{var inst_15953 = (state_15955[2]);var state_15955__$1 = state_15955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15955__$1,inst_15953);
} else
{if((state_val_15956 === 4))
{var inst_15919 = (state_15955[9]);var inst_15919__$1 = (state_15955[2]);var inst_15920 = (inst_15919__$1 == null);var inst_15921 = cljs.core.not.call(null,inst_15920);var state_15955__$1 = (function (){var statearr_15959 = state_15955;(statearr_15959[9] = inst_15919__$1);
return statearr_15959;
})();if(inst_15921)
{var statearr_15960_15987 = state_15955__$1;(statearr_15960_15987[1] = 5);
} else
{var statearr_15961_15988 = state_15955__$1;(statearr_15961_15988[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15956 === 5))
{var inst_15916 = (state_15955[7]);var inst_15923 = (state_15955[10]);var inst_15919 = (state_15955[9]);var inst_15923__$1 = f.call(null,inst_15919);var inst_15924 = cljs.core._EQ_.call(null,inst_15923__$1,inst_15916);var inst_15925 = cljs.core.keyword_identical_QMARK_.call(null,inst_15916,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15926 = (inst_15924) || (inst_15925);var state_15955__$1 = (function (){var statearr_15962 = state_15955;(statearr_15962[10] = inst_15923__$1);
return statearr_15962;
})();if(cljs.core.truth_(inst_15926))
{var statearr_15963_15989 = state_15955__$1;(statearr_15963_15989[1] = 8);
} else
{var statearr_15964_15990 = state_15955__$1;(statearr_15964_15990[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15956 === 6))
{var inst_15915 = (state_15955[8]);var inst_15940 = inst_15915.length;var inst_15941 = (inst_15940 > 0);var state_15955__$1 = state_15955;if(cljs.core.truth_(inst_15941))
{var statearr_15966_15991 = state_15955__$1;(statearr_15966_15991[1] = 12);
} else
{var statearr_15967_15992 = state_15955__$1;(statearr_15967_15992[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15956 === 7))
{var inst_15951 = (state_15955[2]);var state_15955__$1 = state_15955;var statearr_15968_15993 = state_15955__$1;(statearr_15968_15993[2] = inst_15951);
(statearr_15968_15993[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15956 === 8))
{var inst_15915 = (state_15955[8]);var inst_15923 = (state_15955[10]);var inst_15919 = (state_15955[9]);var inst_15928 = inst_15915.push(inst_15919);var tmp15965 = inst_15915;var inst_15915__$1 = tmp15965;var inst_15916 = inst_15923;var state_15955__$1 = (function (){var statearr_15969 = state_15955;(statearr_15969[7] = inst_15916);
(statearr_15969[8] = inst_15915__$1);
(statearr_15969[11] = inst_15928);
return statearr_15969;
})();var statearr_15970_15994 = state_15955__$1;(statearr_15970_15994[2] = null);
(statearr_15970_15994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15956 === 9))
{var inst_15915 = (state_15955[8]);var inst_15931 = cljs.core.vec.call(null,inst_15915);var state_15955__$1 = state_15955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15955__$1,11,out,inst_15931);
} else
{if((state_val_15956 === 10))
{var inst_15938 = (state_15955[2]);var state_15955__$1 = state_15955;var statearr_15971_15995 = state_15955__$1;(statearr_15971_15995[2] = inst_15938);
(statearr_15971_15995[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15956 === 11))
{var inst_15923 = (state_15955[10]);var inst_15919 = (state_15955[9]);var inst_15933 = (state_15955[2]);var inst_15934 = [];var inst_15935 = inst_15934.push(inst_15919);var inst_15915 = inst_15934;var inst_15916 = inst_15923;var state_15955__$1 = (function (){var statearr_15972 = state_15955;(statearr_15972[12] = inst_15933);
(statearr_15972[13] = inst_15935);
(statearr_15972[7] = inst_15916);
(statearr_15972[8] = inst_15915);
return statearr_15972;
})();var statearr_15973_15996 = state_15955__$1;(statearr_15973_15996[2] = null);
(statearr_15973_15996[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15956 === 12))
{var inst_15915 = (state_15955[8]);var inst_15943 = cljs.core.vec.call(null,inst_15915);var state_15955__$1 = state_15955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15955__$1,15,out,inst_15943);
} else
{if((state_val_15956 === 13))
{var state_15955__$1 = state_15955;var statearr_15974_15997 = state_15955__$1;(statearr_15974_15997[2] = null);
(statearr_15974_15997[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15956 === 14))
{var inst_15948 = (state_15955[2]);var inst_15949 = cljs.core.async.close_BANG_.call(null,out);var state_15955__$1 = (function (){var statearr_15975 = state_15955;(statearr_15975[14] = inst_15948);
return statearr_15975;
})();var statearr_15976_15998 = state_15955__$1;(statearr_15976_15998[2] = inst_15949);
(statearr_15976_15998[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15956 === 15))
{var inst_15945 = (state_15955[2]);var state_15955__$1 = state_15955;var statearr_15977_15999 = state_15955__$1;(statearr_15977_15999[2] = inst_15945);
(statearr_15977_15999[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__6118__auto__){
return (function() {
var state_machine__6119__auto__ = null;
var state_machine__6119__auto____0 = (function (){var statearr_15981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15981[0] = state_machine__6119__auto__);
(statearr_15981[1] = 1);
return statearr_15981;
});
var state_machine__6119__auto____1 = (function (state_15955){while(true){
var ret_value__6120__auto__ = (function (){try{while(true){
var result__6121__auto__ = switch__6118__auto__.call(null,state_15955);if(cljs.core.keyword_identical_QMARK_.call(null,result__6121__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6121__auto__;
}
break;
}
}catch (e15982){if((e15982 instanceof Object))
{var ex__6122__auto__ = e15982;var statearr_15983_16000 = state_15955;(statearr_15983_16000[5] = ex__6122__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15955);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16001 = state_15955;
state_15955 = G__16001;
continue;
}
} else
{return ret_value__6120__auto__;
}
break;
}
});
state_machine__6119__auto__ = function(state_15955){
switch(arguments.length){
case 0:
return state_machine__6119__auto____0.call(this);
case 1:
return state_machine__6119__auto____1.call(this,state_15955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6119__auto____0;
state_machine__6119__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6119__auto____1;
return state_machine__6119__auto__;
})()
;})(switch__6118__auto__))
})();var state__6190__auto__ = (function (){var statearr_15984 = f__6189__auto__.call(null);(statearr_15984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___15985);
return statearr_15984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
}));
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