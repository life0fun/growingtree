// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.components.app');
goog.require('cljs.core');
goog.require('growingtree_app.utils');
goog.require('cljs.core.async');
goog.require('growingtree_app.components.main_area');
goog.require('growingtree_app.components.key_queue');
goog.require('growingtree_app.components.main_area');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('ankha.core');
goog.require('cljs.core.async');
goog.require('ankha.core');
goog.require('sablono.core');
goog.require('growingtree_app.components.navbar');
goog.require('growingtree_app.components.sidebar');
goog.require('growingtree_app.components.sidebar');
goog.require('growingtree_app.components.key_queue');
goog.require('growingtree_app.utils');
goog.require('om.core');
goog.require('growingtree_app.components.navbar');
goog.require('om.core');
goog.require('growingtree_app.components.draggable_window');
goog.require('growingtree_app.utils');
goog.require('cljs.reader');
goog.require('growingtree_app.components.draggable_window');
goog.require('cljs.reader');
growingtree_app.components.app.keymap = cljs.core.atom.call(null,null);
growingtree_app.components.app.app = (function app(app__$1,owner,opts){if(typeof growingtree_app.components.app.t11618 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.app.t11618 = (function (opts,owner,app,meta11619){
this.opts = opts;
this.owner = owner;
this.app = app;
this.meta11619 = meta11619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.app.t11618.cljs$lang$type = true;
growingtree_app.components.app.t11618.cljs$lang$ctorStr = "growingtree-app.components.app/t11618";
growingtree_app.components.app.t11618.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"growingtree-app.components.app/t11618");
});
growingtree_app.components.app.t11618.prototype.om$core$IRender$ = true;
growingtree_app.components.app.t11618.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var nav_path = cljs.core.last.call(null,cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null)));var thing_type = cljs.core.last.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(nav_path));var login_user = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-user","login-user",1935565562)], null));var error = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null));var selected_channel = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(self__.app)], null));var current_user = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.Keyword(null,"current-user-email","current-user-email",-1030852599).cljs$core$IFn$_invoke$arity$1(self__.app)], null));var controls_ch = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null));var open_player_BANG_ = ((function (nav_path,thing_type,login_user,error,selected_channel,current_user,controls_ch,this$__$1){
return (function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history-player-opened","history-player-opened",-153644089)], null));
});})(nav_path,thing_type,login_user,error,selected_channel,current_user,controls_ch,this$__$1))
;var message_input_focused_QMARK_ = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"user-message","user-message",889829115),new cljs.core.Keyword(null,"focused","focused",1851572115)], null));var search_input_focused_QMARK_ = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"focused","focused",1851572115)], null));var focus_search_BANG_ = ((function (nav_path,thing_type,login_user,error,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,this$__$1){
return (function (){if(cljs.core.truth_(message_input_focused_QMARK_))
{return null;
} else
{return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-focus-key-pressed","search-focus-key-pressed",-469625493)], null));
}
});})(nav_path,thing_type,login_user,error,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,this$__$1))
;var inspector_path = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"inspector","inspector",1532863880),new cljs.core.Keyword(null,"path","path",-188191168)], null));var inspector_path_s = cljs.core.pr_str.call(null,inspector_path);var blur_current_field_BANG_ = ((function (nav_path,thing_type,login_user,error,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,this$__$1){
return (function (){if(cljs.core.truth_(message_input_focused_QMARK_))
{return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-blur-key-pressed","user-message-blur-key-pressed",1797856612)], null));
} else
{if(cljs.core.truth_(search_input_focused_QMARK_))
{return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-form-blur-key-pressed","search-form-blur-key-pressed",-312801117)], null));
} else
{return null;
}
}
});})(nav_path,thing_type,login_user,error,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,this$__$1))
;var change_inspector_path_BANG_ = ((function (nav_path,thing_type,login_user,error,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,blur_current_field_BANG_,this$__$1){
return (function (){var path_string = prompt("New path (must be edn-compatible)",inspector_path_s);try{return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inspector-path-updated","inspector-path-updated",-165750316),cljs.reader.read_string.call(null,path_string)], null));
}catch (e11621){if((e11621 instanceof Error))
{var e = e11621;return growingtree_app.utils.mprint.call(null,"Not edn-compatible: ",path_string);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11621;
} else
{return null;
}
}
}});})(nav_path,thing_type,login_user,error,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,blur_current_field_BANG_,this$__$1))
;var persist_local_state_BANG_ = ((function (nav_path,thing_type,login_user,error,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,blur_current_field_BANG_,change_inspector_path_BANG_,this$__$1){
return (function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-persisted","state-persisted",1492039349)], null));
});})(nav_path,thing_type,login_user,error,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,blur_current_field_BANG_,change_inspector_path_BANG_,this$__$1))
;var restore_local_state_BANG_ = ((function (nav_path,thing_type,login_user,error,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,blur_current_field_BANG_,change_inspector_path_BANG_,persist_local_state_BANG_,this$__$1){
return (function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-restored","state-restored",450621293)], null));
});})(nav_path,thing_type,login_user,error,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,blur_current_field_BANG_,change_inspector_path_BANG_,persist_local_state_BANG_,this$__$1))
;var toggle_inspector_BANG_ = ((function (nav_path,thing_type,login_user,error,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,blur_current_field_BANG_,change_inspector_path_BANG_,persist_local_state_BANG_,restore_local_state_BANG_,this$__$1){
return (function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-inspector-key-pressed","toggle-inspector-key-pressed",1257821948)], null));
});})(nav_path,thing_type,login_user,error,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,blur_current_field_BANG_,change_inspector_path_BANG_,persist_local_state_BANG_,restore_local_state_BANG_,this$__$1))
;var _ = cljs.core.reset_BANG_.call(null,growingtree_app.components.app.keymap,new cljs.core.PersistentArrayMap(null, 6, ["ctrl+slash",open_player_BANG_,"ctrl+esc",toggle_inspector_BANG_,"ctrl+1",change_inspector_path_BANG_,"ctrl+s",persist_local_state_BANG_,"ctrl+r",restore_local_state_BANG_,"esc",blur_current_field_BANG_], null));console.log(cljs.core.pr_str.call(null,"app state change, render nav-path ",new cljs.core.Keyword("person","title","person/title",1791817084).cljs$core$IFn$_invoke$arity$1(login_user)," path ",nav_path));
return React.DOM.div({"className": (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"open","open",-1763596448)], null)))?"slide-left ":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"open","open",-1763596448)], null)))?"slide-right ":null)))},sablono.interpreter.interpret.call(null,(cljs.core.truth_(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"windows","windows",2068861701),new cljs.core.Keyword(null,"window-inspector","window-inspector",889258900),new cljs.core.Keyword(null,"open","open",-1763596448)], null)))?(function (){var temp__4126__auto__ = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"inspector","inspector",1532863880),new cljs.core.Keyword(null,"path","path",-188191168)], null));if(cljs.core.truth_(temp__4126__auto__))
{var path = temp__4126__auto__;return om.core.build.call(null,growingtree_app.components.draggable_window.draggable_window,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),("Data Inspector: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,path))),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"window-inspector","window-inspector",889258900),new cljs.core.Keyword(null,"window","window",724519534),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"windows","windows",2068861701),new cljs.core.Keyword(null,"window-inspector","window-inspector",889258900)], null)),new cljs.core.Keyword(null,"comm","comm",-1689770614),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null)),new cljs.core.Keyword(null,"content-com","content-com",808014035),ankha.core.inspector,new cljs.core.Keyword(null,"content-data","content-data",1183622660),cljs.core.get_in.call(null,self__.app,path),new cljs.core.Keyword(null,"content-opts","content-opts",-409462686),cljs.core.PersistentArrayMap.EMPTY], null));
} else
{return null;
}
})():null)),sablono.interpreter.interpret.call(null,om.core.build.call(null,growingtree_app.components.key_queue.KeyboardHandler,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),growingtree_app.components.app.keymap,new cljs.core.Keyword(null,"error-ch","error-ch",-1177587736),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"error","error",-978969032)], null))], null)], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,growingtree_app.components.navbar.navbar,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(self__.opts)], null)], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,growingtree_app.components.sidebar.sidebar,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130),new cljs.core.Keyword(null,"selected-channel","selected-channel",-366010130).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,growingtree_app.components.main_area.main_area,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"app","app",-560961707),self__.app,new cljs.core.Keyword(null,"nav-path","nav-path",-444531376),nav_path,new cljs.core.Keyword(null,"channel","channel",734187692),selected_channel,new cljs.core.Keyword(null,"search-filter","search-filter",274098807),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"value","value",305978217)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"current-user-email","current-user-email",-1030852599),new cljs.core.Keyword(null,"current-user-email","current-user-email",-1030852599).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"input-focused?","input-focused?",445310096),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"user-message","user-message",889829115),new cljs.core.Keyword(null,"focused","focused",1851572115)], null)),new cljs.core.Keyword(null,"input-value","input-value",-1719954369),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"user-message","user-message",889829115),new cljs.core.Keyword(null,"value","value",305978217)], null))], null)], null))));
});
growingtree_app.components.app.t11618.prototype.om$core$IShouldUpdate$ = true;
growingtree_app.components.app.t11618.prototype.om$core$IShouldUpdate$should_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;var nav_path = cljs.core.get_in.call(null,next_props,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",-444531376)], null));var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,nav_path));if(cljs.core.truth_(body))
{return true;
} else
{return false;
}
});
growingtree_app.components.app.t11618.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.app.t11618.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3543__auto__ = new cljs.core.Keyword(null,"react-name","react-name",-834049397).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "growingtree-app";
}
});
growingtree_app.components.app.t11618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11620){var self__ = this;
var _11620__$1 = this;return self__.meta11619;
});
growingtree_app.components.app.t11618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11620,meta11619__$1){var self__ = this;
var _11620__$1 = this;return (new growingtree_app.components.app.t11618(self__.opts,self__.owner,self__.app,meta11619__$1));
});
growingtree_app.components.app.__GT_t11618 = (function __GT_t11618(opts__$1,owner__$1,app__$2,meta11619){return (new growingtree_app.components.app.t11618(opts__$1,owner__$1,app__$2,meta11619));
});
}
return (new growingtree_app.components.app.t11618(opts,owner,app__$1,null));
});

//# sourceMappingURL=app.js.map