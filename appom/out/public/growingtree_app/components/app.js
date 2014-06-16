// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.components.app');
goog.require('cljs.core');
goog.require('growingtree_app.utils');
goog.require('cljs.core.async');
goog.require('growingtree_app.components.main_area');
goog.require('sablono.core');
goog.require('growingtree_app.components.navbar');
goog.require('cljs.core.async');
goog.require('growingtree_app.components.key_queue');
goog.require('sablono.core');
goog.require('cljs.reader');
goog.require('om.core');
goog.require('growingtree_app.components.sidebar');
goog.require('growingtree_app.components.draggable_window');
goog.require('growingtree_app.components.navbar');
goog.require('om.core');
goog.require('growingtree_app.components.main_area');
goog.require('growingtree_app.components.draggable_window');
goog.require('growingtree_app.components.sidebar');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('cljs.reader');
goog.require('ankha.core');
goog.require('ankha.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.components.key_queue');
growingtree_app.components.app.keymap = cljs.core.atom.call(null,null);
growingtree_app.components.app.app = (function app(app__$1,owner,opts){if(typeof growingtree_app.components.app.t11078 !== 'undefined')
{} else
{
/**
* @constructor
*/
growingtree_app.components.app.t11078 = (function (opts,owner,app,meta11079){
this.opts = opts;
this.owner = owner;
this.app = app;
this.meta11079 = meta11079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
growingtree_app.components.app.t11078.cljs$lang$type = true;
growingtree_app.components.app.t11078.cljs$lang$ctorStr = "growingtree-app.components.app/t11078";
growingtree_app.components.app.t11078.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"growingtree-app.components.app/t11078");
});
growingtree_app.components.app.t11078.prototype.om$core$IRender$ = true;
growingtree_app.components.app.t11078.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var nav_path = cljs.core.last.call(null,cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path","nav-path",3061255681)], null)));var thing_type = cljs.core.last.call(null,new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(nav_path));var nav_path_things = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav-path-things","nav-path-things",3876793781)], null));var selected_channel = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(self__.app)], null));var current_user = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(self__.app)], null));var controls_ch = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var open_player_BANG_ = ((function (nav_path,thing_type,nav_path_things,selected_channel,current_user,controls_ch){
return (function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history-player-opened","history-player-opened",3054141134)], null));
});})(nav_path,thing_type,nav_path_things,selected_channel,current_user,controls_ch))
;var message_input_focused_QMARK_ = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"focused","focused",4617830121)], null));var search_input_focused_QMARK_ = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"focused","focused",4617830121)], null));var focus_search_BANG_ = ((function (nav_path,thing_type,nav_path_things,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_){
return (function (){if(cljs.core.truth_(message_input_focused_QMARK_))
{return null;
} else
{return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-focus-key-pressed","search-focus-key-pressed",1169113036)], null));
}
});})(nav_path,thing_type,nav_path_things,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_))
;var inspector_path = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"inspector","inspector",931868265),new cljs.core.Keyword(null,"path","path",1017337751)], null));var inspector_path_s = cljs.core.pr_str.call(null,inspector_path);var blur_current_field_BANG_ = ((function (nav_path,thing_type,nav_path_things,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s){
return (function (){if(cljs.core.truth_(message_input_focused_QMARK_))
{return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-blur-key-pressed","user-message-blur-key-pressed",3460583048)], null));
} else
{if(cljs.core.truth_(search_input_focused_QMARK_))
{return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-form-blur-key-pressed","search-form-blur-key-pressed",2923548996)], null));
} else
{return null;
}
}
});})(nav_path,thing_type,nav_path_things,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s))
;var change_inspector_path_BANG_ = ((function (nav_path,thing_type,nav_path_things,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,blur_current_field_BANG_){
return (function (){var path_string = prompt("New path (must be edn-compatible)",inspector_path_s);try{return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inspector-path-updated","inspector-path-updated",848746907),cljs.reader.read_string.call(null,path_string)], null));
}catch (e11081){if((e11081 instanceof Error))
{var e = e11081;return growingtree_app.utils.mprint.call(null,"Not edn-compatible: ",path_string);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11081;
} else
{return null;
}
}
}});})(nav_path,thing_type,nav_path_things,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,blur_current_field_BANG_))
;var persist_local_state_BANG_ = ((function (nav_path,thing_type,nav_path_things,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,blur_current_field_BANG_,change_inspector_path_BANG_){
return (function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-persisted","state-persisted",2957998761)], null));
});})(nav_path,thing_type,nav_path_things,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,blur_current_field_BANG_,change_inspector_path_BANG_))
;var restore_local_state_BANG_ = ((function (nav_path,thing_type,nav_path_things,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,blur_current_field_BANG_,change_inspector_path_BANG_,persist_local_state_BANG_){
return (function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-restored","state-restored",2236662980)], null));
});})(nav_path,thing_type,nav_path_things,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,blur_current_field_BANG_,change_inspector_path_BANG_,persist_local_state_BANG_))
;var toggle_inspector_BANG_ = ((function (nav_path,thing_type,nav_path_things,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,blur_current_field_BANG_,change_inspector_path_BANG_,persist_local_state_BANG_,restore_local_state_BANG_){
return (function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-inspector-key-pressed","toggle-inspector-key-pressed",2594666135)], null));
});})(nav_path,thing_type,nav_path_things,selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_,inspector_path,inspector_path_s,blur_current_field_BANG_,change_inspector_path_BANG_,persist_local_state_BANG_,restore_local_state_BANG_))
;var _ = cljs.core.reset_BANG_.call(null,growingtree_app.components.app.keymap,new cljs.core.PersistentArrayMap(null, 7, ["ctrl+slash",open_player_BANG_,"ctrl+esc",toggle_inspector_BANG_,"ctrl+1",change_inspector_path_BANG_,"ctrl+s",persist_local_state_BANG_,"ctrl+r",restore_local_state_BANG_,"slash",focus_search_BANG_,"esc",blur_current_field_BANG_], null));console.log("app state change, re-render all ",cljs.core.pr_str.call(null,nav_path));
return React.DOM.div({"className": [cljs.core.str((cljs.core.truth_(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"sidebar","sidebar",3099131598),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"open","open",1017321916)], null)))?"slide-left ":null)),cljs.core.str((cljs.core.truth_(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"sidebar","sidebar",3099131598),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"open","open",1017321916)], null)))?"slide-right ":null))].join('')},sablono.interpreter.interpret.call(null,(cljs.core.truth_(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"windows","windows",2363397621),new cljs.core.Keyword(null,"window-inspector","window-inspector",2735849676),new cljs.core.Keyword(null,"open","open",1017321916)], null)))?(function (){var temp__4092__auto__ = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"inspector","inspector",931868265),new cljs.core.Keyword(null,"path","path",1017337751)], null));if(cljs.core.truth_(temp__4092__auto__))
{var path = temp__4092__auto__;return om.core.build.call(null,growingtree_app.components.draggable_window.draggable_window,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",1124275658),[cljs.core.str("Data Inspector: "),cljs.core.str(cljs.core.pr_str.call(null,path))].join(''),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"window-inspector","window-inspector",2735849676),new cljs.core.Keyword(null,"window","window",4521119586),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"windows","windows",2363397621),new cljs.core.Keyword(null,"window-inspector","window-inspector",2735849676)], null)),new cljs.core.Keyword(null,"comm","comm",1016963710),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null)),new cljs.core.Keyword(null,"content-com","content-com",623589791),ankha.core.inspector,new cljs.core.Keyword(null,"content-data","content-data",1799074800),cljs.core.get_in.call(null,self__.app,path),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934),cljs.core.PersistentArrayMap.EMPTY], null));
} else
{return null;
}
})():null)),sablono.interpreter.interpret.call(null,om.core.build.call(null,growingtree_app.components.key_queue.KeyboardHandler,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keymap","keymap",4174211599),growingtree_app.components.app.keymap,new cljs.core.Keyword(null,"error-ch","error-ch",2409970108),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"error","error",1110689146)], null))], null)], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,growingtree_app.components.sidebar.sidebar,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"channel","channel",1752854645),selected_channel,new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"settings","settings",2448535445).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"search-filter","search-filter",674207407),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"value","value",1125876963)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"users","users",1125482874).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"channels","channels",2446530370).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,growingtree_app.components.main_area.main_area,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"app","app",1014001043),self__.app,new cljs.core.Keyword(null,"nav-path","nav-path",3061255681),nav_path,new cljs.core.Keyword(null,"nav-path-things","nav-path-things",3876793781),nav_path_things,new cljs.core.Keyword(null,"channel","channel",1752854645),selected_channel,new cljs.core.Keyword(null,"search-filter","search-filter",674207407),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"value","value",1125876963)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"users","users",1125482874).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"input-focused?","input-focused?",2338465213),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"focused","focused",4617830121)], null)),new cljs.core.Keyword(null,"input-value","input-value",3916329248),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"value","value",1125876963)], null))], null)], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,growingtree_app.components.navbar.navbar,cljs.core.select_keys.call(null,self__.app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"things","things",4434169015),new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"settings","settings",2448535445)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(self__.opts)], null)], null))));
});
growingtree_app.components.app.t11078.prototype.om$core$IDisplayName$ = true;
growingtree_app.components.app.t11078.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var or__3443__auto__ = new cljs.core.Keyword(null,"react-name","react-name",4800236939).cljs$core$IFn$_invoke$arity$1(self__.opts);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return "growingtree-app";
}
});
growingtree_app.components.app.t11078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11080){var self__ = this;
var _11080__$1 = this;return self__.meta11079;
});
growingtree_app.components.app.t11078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11080,meta11079__$1){var self__ = this;
var _11080__$1 = this;return (new growingtree_app.components.app.t11078(self__.opts,self__.owner,self__.app,meta11079__$1));
});
growingtree_app.components.app.__GT_t11078 = (function __GT_t11078(opts__$1,owner__$1,app__$2,meta11079){return (new growingtree_app.components.app.t11078(opts__$1,owner__$1,app__$2,meta11079));
});
}
return (new growingtree_app.components.app.t11078(opts,owner,app__$1,null));
});

//# sourceMappingURL=app.js.map