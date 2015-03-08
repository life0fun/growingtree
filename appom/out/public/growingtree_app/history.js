// Compiled by ClojureScript 0.0-2850 {}
goog.provide('growingtree_app.history');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('growingtree_app.utils');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('cljs.core.async');
growingtree_app.history.back_BANG_ = (function back_BANG_(){
return history.back();
});
growingtree_app.history.forward_BANG_ = (function forward_BANG_(){
return history.forward();
});
growingtree_app.history.go_BANG_ = (function go_BANG_(idx){
return history.go(idx);
});
growingtree_app.history.replace_state_BANG_ = (function() {
var replace_state_BANG_ = null;
var replace_state_BANG___1 = (function (state){
return replace_state_BANG_.call(null,state,document.title);
});
var replace_state_BANG___2 = (function (state,title){
return history.replaceState(state,title);
});
var replace_state_BANG___3 = (function (state,title,path){
return history.replaceState(state,title,path);
});
replace_state_BANG_ = function(state,title,path){
switch(arguments.length){
case 1:
return replace_state_BANG___1.call(this,state);
case 2:
return replace_state_BANG___2.call(this,state,title);
case 3:
return replace_state_BANG___3.call(this,state,title,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace_state_BANG_.cljs$core$IFn$_invoke$arity$1 = replace_state_BANG___1;
replace_state_BANG_.cljs$core$IFn$_invoke$arity$2 = replace_state_BANG___2;
replace_state_BANG_.cljs$core$IFn$_invoke$arity$3 = replace_state_BANG___3;
return replace_state_BANG_;
})()
;
growingtree_app.history.push_state_BANG_ = (function() {
var push_state_BANG_ = null;
var push_state_BANG___2 = (function (state,title){
return history.pushState(state,title);
});
var push_state_BANG___3 = (function (state,title,path){
return history.pushState(state,title,path);
});
push_state_BANG_ = function(state,title,path){
switch(arguments.length){
case 2:
return push_state_BANG___2.call(this,state,title);
case 3:
return push_state_BANG___3.call(this,state,title,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = push_state_BANG___2;
push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = push_state_BANG___3;
return push_state_BANG_;
})()
;
/**
* Returns current JS value of history.state
*/
growingtree_app.history.current_state = (function current_state(){
return history.state;
});
growingtree_app.history.state = (function (){var clj_state = (function (){
return cljs.core.js__GT_clj.call(null,history.state,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
if(typeof growingtree_app.history.t22414 !== 'undefined'){
} else {

/**
* @constructor
*/
growingtree_app.history.t22414 = (function (clj_state,meta22415){
this.clj_state = clj_state;
this.meta22415 = meta22415;
this.cljs$lang$protocol_mask$partition1$ = 98304;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
growingtree_app.history.t22414.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = ((function (clj_state){
return (function (s,f){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,f.call(null,self__.clj_state.call(null)));
});})(clj_state))
;

growingtree_app.history.t22414.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = ((function (clj_state){
return (function (s,f,x){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,f.call(null,self__.clj_state.call(null),x));
});})(clj_state))
;

growingtree_app.history.t22414.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = ((function (clj_state){
return (function (s,f,x,y){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,f.call(null,self__.clj_state.call(null),x,y));
});})(clj_state))
;

growingtree_app.history.t22414.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = ((function (clj_state){
return (function (s,f,x,y,more){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,cljs.core.apply.call(null,f,self__.clj_state.call(null),x,y,more));
});})(clj_state))
;

growingtree_app.history.t22414.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = ((function (clj_state){
return (function (_,v){
var self__ = this;
var ___$1 = this;
return growingtree_app.history.replace_state_BANG_.call(null,cljs.core.clj__GT_js.call(null,v));
});})(clj_state))
;

growingtree_app.history.t22414.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (clj_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.clj_state.call(null);
});})(clj_state))
;

growingtree_app.history.t22414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (clj_state){
return (function (_22416){
var self__ = this;
var _22416__$1 = this;
return self__.meta22415;
});})(clj_state))
;

growingtree_app.history.t22414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (clj_state){
return (function (_22416,meta22415__$1){
var self__ = this;
var _22416__$1 = this;
return (new growingtree_app.history.t22414(self__.clj_state,meta22415__$1));
});})(clj_state))
;

growingtree_app.history.t22414.cljs$lang$type = true;

growingtree_app.history.t22414.cljs$lang$ctorStr = "growingtree-app.history/t22414";

growingtree_app.history.t22414.cljs$lang$ctorPrWriter = ((function (clj_state){
return (function (this__4394__auto__,writer__4395__auto__,opt__4396__auto__){
return cljs.core._write.call(null,writer__4395__auto__,"growingtree-app.history/t22414");
});})(clj_state))
;

growingtree_app.history.__GT_t22414 = ((function (clj_state){
return (function __GT_t22414(clj_state__$1,meta22415){
return (new growingtree_app.history.t22414(clj_state__$1,meta22415));
});})(clj_state))
;

}

return (new growingtree_app.history.t22414(clj_state,cljs.core.PersistentArrayMap.EMPTY));
})();

//# sourceMappingURL=history.js.map