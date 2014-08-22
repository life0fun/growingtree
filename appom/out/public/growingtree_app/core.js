// Compiled by ClojureScript 0.0-2277
goog.provide('growingtree_app.core');
goog.require('cljs.core');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.utils');
goog.require('cljs.core.async');
goog.require('growingtree_app.controllers.api');
goog.require('om.dom');
goog.require('growingtree_app.controllers.post_controls');
goog.require('growingtree_app.components.app');
goog.require('cljs.core.async');
goog.require('growingtree_app.routes');
goog.require('dommy.core');
goog.require('growingtree_app.controllers.post_api');
goog.require('om.dom');
goog.require('growingtree_app.api.kandan');
goog.require('growingtree_app.api.mock');
goog.require('cljs.core.async');
goog.require('growingtree_app.mock_data');
goog.require('growingtree_app.datetime');
goog.require('growingtree_app.datetime');
goog.require('growingtree_app.useful');
goog.require('growingtree_app.controllers.controls');
goog.require('growingtree_app.utils');
goog.require('clojure.string');
goog.require('om.core');
goog.require('dommy.core');
goog.require('growingtree_app.mock_data');
goog.require('om.core');
goog.require('growingtree_app.controllers.post_api');
goog.require('growingtree_app.routes');
goog.require('growingtree_app.controllers.api');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.useful');
goog.require('clojure.string');
goog.require('growingtree_app.controllers.post_controls');
goog.require('growingtree_app.controllers.controls');
goog.require('growingtree_app.components.app');
goog.require('growingtree_app.api.kandan');
goog.require('growingtree_app.api.mock');
cljs.core.enable_console_print_BANG_.call(null);
growingtree_app.core.controls_ch = cljs.core.async.chan.call(null);
growingtree_app.core.api_ch = cljs.core.async.chan.call(null);
growingtree_app.core.app_state = cljs.core.atom.call(null,growingtree_app.mock_data.initial_state.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",1340701452),growingtree_app.core.controls_ch,new cljs.core.Keyword(null,"api","api",-899839580),growingtree_app.core.api_ch], null)));
growingtree_app.core.history = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
growingtree_app.core.filtered_message_QMARK_ = (function filtered_message_QMARK_(message){return cljs.core.get.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"credit-card-updated","credit-card-updated",-917292515),null], null), null),message);
});
growingtree_app.core.update_history_BANG_ = (function update_history_BANG_(history,channel,message){var m = cljs.core.first.call(null,message);var record = (cljs.core.truth_(growingtree_app.core.filtered_message_QMARK_.call(null,m))?m:message);return cljs.core.swap_BANG_.call(null,history,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [channel,record], null));
});
growingtree_app.core.main = (function main(target,state){var comms = new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var history = (function (){var or__3543__auto__ = growingtree_app.core.history;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
})();growingtree_app.routes.define_routes_BANG_.call(null,state,document.getElementById("history-container"));
om.core.root.call(null,growingtree_app.components.app.app,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",460172477),comms], null)], null));
var c__6345__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6345__auto__,comms,history){
return (function (){var f__6346__auto__ = (function (){var switch__6280__auto__ = ((function (c__6345__auto__,comms,history){
return (function (state_12543){var state_val_12544 = (state_12543[(1)]);if((state_val_12544 === (7)))
{var inst_12455 = (state_12543[(7)]);var inst_12449 = (state_12543[(8)]);var inst_12457 = (state_12543[(9)]);var inst_12455__$1 = (state_12543[(2)]);var inst_12456 = cljs.core.nth.call(null,inst_12455__$1,(0),null);var inst_12457__$1 = cljs.core.nth.call(null,inst_12455__$1,(1),null);var inst_12458 = cljs.core._EQ_.call(null,inst_12457__$1,inst_12449);var state_12543__$1 = (function (){var statearr_12545 = state_12543;(statearr_12545[(7)] = inst_12455__$1);
(statearr_12545[(10)] = inst_12456);
(statearr_12545[(9)] = inst_12457__$1);
return statearr_12545;
})();if(inst_12458)
{var statearr_12546_12603 = state_12543__$1;(statearr_12546_12603[(1)] = (8));
} else
{var statearr_12547_12604 = state_12543__$1;(statearr_12547_12604[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (20)))
{var inst_12481 = (state_12543[(11)]);var inst_12484 = [new cljs.core.Keyword(null,"body","body",-2049205669),(0)];var inst_12485 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12484,null));var inst_12486 = cljs.core.get_in.call(null,inst_12481,inst_12485);var state_12543__$1 = state_12543;var statearr_12548_12605 = state_12543__$1;(statearr_12548_12605[(2)] = inst_12486);
(statearr_12548_12605[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (27)))
{var state_12543__$1 = state_12543;var statearr_12549_12606 = state_12543__$1;(statearr_12549_12606[(2)] = null);
(statearr_12549_12606[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (1)))
{var state_12543__$1 = state_12543;var statearr_12550_12607 = state_12543__$1;(statearr_12550_12607[(2)] = null);
(statearr_12550_12607[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (24)))
{var inst_12451 = (state_12543[(12)]);var inst_12457 = (state_12543[(9)]);var inst_12519 = cljs.core._EQ_.call(null,inst_12457,inst_12451);var state_12543__$1 = state_12543;if(inst_12519)
{var statearr_12551_12608 = state_12543__$1;(statearr_12551_12608[(1)] = (29));
} else
{var statearr_12552_12609 = state_12543__$1;(statearr_12552_12609[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (4)))
{var inst_12451 = (state_12543[(12)]);var inst_12449 = (state_12543[(8)]);var inst_12450 = (state_12543[(13)]);var inst_12449__$1 = new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms);var inst_12450__$1 = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms);var inst_12451__$1 = cljs.core.async.timeout.call(null,(30000));var inst_12452 = [inst_12449__$1,inst_12450__$1,inst_12451__$1];var inst_12453 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12452,null));var state_12543__$1 = (function (){var statearr_12553 = state_12543;(statearr_12553[(12)] = inst_12451__$1);
(statearr_12553[(8)] = inst_12449__$1);
(statearr_12553[(13)] = inst_12450__$1);
return statearr_12553;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12543__$1,(7),inst_12453);
} else
{if((state_val_12544 === (15)))
{var state_12543__$1 = state_12543;if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var statearr_12554_12610 = state_12543__$1;(statearr_12554_12610[(1)] = (17));
} else
{var statearr_12555_12611 = state_12543__$1;(statearr_12555_12611[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (21)))
{var inst_12469 = (state_12543[(14)]);var state_12543__$1 = state_12543;var statearr_12556_12612 = state_12543__$1;(statearr_12556_12612[(2)] = inst_12469);
(statearr_12556_12612[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (31)))
{var inst_12531 = (state_12543[(2)]);var state_12543__$1 = state_12543;var statearr_12557_12613 = state_12543__$1;(statearr_12557_12613[(2)] = inst_12531);
(statearr_12557_12613[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (32)))
{var inst_12456 = (state_12543[(10)]);var state_12543__$1 = state_12543;var statearr_12558_12614 = state_12543__$1;(statearr_12558_12614[(2)] = inst_12456);
(statearr_12558_12614[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (33)))
{var state_12543__$1 = state_12543;var statearr_12559_12615 = state_12543__$1;(statearr_12559_12615[(2)] = null);
(statearr_12559_12615[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (13)))
{var inst_12461 = (state_12543[(15)]);var inst_12469 = (state_12543[(14)]);var inst_12467 = (state_12543[(2)]);var inst_12468 = cljs.core.deref.call(null,state);var inst_12469__$1 = cljs.core.first.call(null,inst_12461);var inst_12470 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refresh","refresh",1947415525),inst_12469__$1);var state_12543__$1 = (function (){var statearr_12560 = state_12543;(statearr_12560[(16)] = inst_12467);
(statearr_12560[(14)] = inst_12469__$1);
(statearr_12560[(17)] = inst_12468);
return statearr_12560;
})();if(inst_12470)
{var statearr_12561_12616 = state_12543__$1;(statearr_12561_12616[(1)] = (14));
} else
{var statearr_12562_12617 = state_12543__$1;(statearr_12562_12617[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (22)))
{var inst_12481 = (state_12543[(11)]);var inst_12468 = (state_12543[(17)]);var inst_12489 = (state_12543[(2)]);var inst_12490 = cljs.core.pr_str.call(null,"controls chan event: ",inst_12489,inst_12481);var inst_12491 = console.log(inst_12490);var inst_12492 = cljs.core.partial.call(null,growingtree_app.controllers.controls.control_event,target,inst_12489,inst_12481);var inst_12493 = cljs.core.swap_BANG_.call(null,state,inst_12492);var inst_12494 = cljs.core.deref.call(null,state);var inst_12495 = growingtree_app.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_12489,inst_12481,inst_12468,inst_12494);var state_12543__$1 = (function (){var statearr_12563 = state_12543;(statearr_12563[(18)] = inst_12491);
(statearr_12563[(19)] = inst_12493);
return statearr_12563;
})();var statearr_12564_12618 = state_12543__$1;(statearr_12564_12618[(2)] = inst_12495);
(statearr_12564_12618[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (29)))
{var inst_12521 = cljs.core.deref.call(null,history);var inst_12522 = cljs.core.pr_str.call(null,inst_12521);var inst_12523 = growingtree_app.utils.mprint.call(null,inst_12522);var state_12543__$1 = state_12543;var statearr_12565_12619 = state_12543__$1;(statearr_12565_12619[(2)] = inst_12523);
(statearr_12565_12619[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (6)))
{var inst_12539 = (state_12543[(2)]);var state_12543__$1 = state_12543;var statearr_12566_12620 = state_12543__$1;(statearr_12566_12620[(2)] = inst_12539);
(statearr_12566_12620[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (28)))
{var inst_12500 = (state_12543[(20)]);var inst_12506 = (state_12543[(2)]);var inst_12507 = cljs.core.deref.call(null,state);var inst_12508 = cljs.core.first.call(null,inst_12500);var inst_12509 = cljs.core.last.call(null,inst_12500);var inst_12510 = new cljs.core.Keyword(null,"things-vec","things-vec",-1363222375).cljs$core$IFn$_invoke$arity$1(inst_12509);var inst_12511 = cljs.core.pr_str.call(null,"api chan event : type ",inst_12508," data ",inst_12509);var inst_12512 = console.log(inst_12511);var inst_12513 = growingtree_app.core.update_history_BANG_.call(null,history,new cljs.core.Keyword(null,"api","api",-899839580),inst_12500);var inst_12514 = cljs.core.partial.call(null,growingtree_app.controllers.api.api_event,target,inst_12508,inst_12509);var inst_12515 = cljs.core.swap_BANG_.call(null,state,inst_12514);var inst_12516 = cljs.core.deref.call(null,state);var inst_12517 = growingtree_app.controllers.post_api.post_api_event_BANG_.call(null,target,inst_12508,inst_12509,inst_12507,inst_12516);var state_12543__$1 = (function (){var statearr_12567 = state_12543;(statearr_12567[(21)] = inst_12510);
(statearr_12567[(22)] = inst_12515);
(statearr_12567[(23)] = inst_12513);
(statearr_12567[(24)] = inst_12506);
(statearr_12567[(25)] = inst_12512);
return statearr_12567;
})();var statearr_12568_12621 = state_12543__$1;(statearr_12568_12621[(2)] = inst_12517);
(statearr_12568_12621[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (25)))
{var inst_12533 = (state_12543[(2)]);var state_12543__$1 = state_12543;var statearr_12569_12622 = state_12543__$1;(statearr_12569_12622[(2)] = inst_12533);
(statearr_12569_12622[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (34)))
{var inst_12529 = (state_12543[(2)]);var state_12543__$1 = state_12543;var statearr_12570_12623 = state_12543__$1;(statearr_12570_12623[(2)] = inst_12529);
(statearr_12570_12623[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (17)))
{var inst_12461 = (state_12543[(15)]);var inst_12476 = cljs.core.last.call(null,inst_12461);var state_12543__$1 = state_12543;var statearr_12571_12624 = state_12543__$1;(statearr_12571_12624[(2)] = inst_12476);
(statearr_12571_12624[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (3)))
{var inst_12541 = (state_12543[(2)]);var state_12543__$1 = state_12543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12543__$1,inst_12541);
} else
{if((state_val_12544 === (12)))
{var state_12543__$1 = state_12543;var statearr_12572_12625 = state_12543__$1;(statearr_12572_12625[(2)] = null);
(statearr_12572_12625[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (2)))
{var state_12543__$1 = state_12543;if(true)
{var statearr_12573_12626 = state_12543__$1;(statearr_12573_12626[(1)] = (4));
} else
{var statearr_12574_12627 = state_12543__$1;(statearr_12574_12627[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (23)))
{var inst_12455 = (state_12543[(7)]);var inst_12500 = cljs.core.nth.call(null,inst_12455,(0),null);var state_12543__$1 = (function (){var statearr_12575 = state_12543;(statearr_12575[(20)] = inst_12500);
return statearr_12575;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12576_12628 = state_12543__$1;(statearr_12576_12628[(1)] = (26));
} else
{var statearr_12577_12629 = state_12543__$1;(statearr_12577_12629[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (19)))
{var inst_12479 = (state_12543[(2)]);var state_12543__$1 = state_12543;var statearr_12578_12630 = state_12543__$1;(statearr_12578_12630[(2)] = inst_12479);
(statearr_12578_12630[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (11)))
{var inst_12461 = (state_12543[(15)]);var inst_12463 = cljs.core.pr_str.call(null,inst_12461);var inst_12464 = growingtree_app.utils.mprint.call(null,"Controls Verbose: ",inst_12463);var state_12543__$1 = state_12543;var statearr_12579_12631 = state_12543__$1;(statearr_12579_12631[(2)] = inst_12464);
(statearr_12579_12631[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (9)))
{var inst_12450 = (state_12543[(13)]);var inst_12457 = (state_12543[(9)]);var inst_12497 = cljs.core._EQ_.call(null,inst_12457,inst_12450);var state_12543__$1 = state_12543;if(inst_12497)
{var statearr_12580_12632 = state_12543__$1;(statearr_12580_12632[(1)] = (23));
} else
{var statearr_12581_12633 = state_12543__$1;(statearr_12581_12633[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (5)))
{var state_12543__$1 = state_12543;var statearr_12582_12634 = state_12543__$1;(statearr_12582_12634[(2)] = null);
(statearr_12582_12634[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (14)))
{var inst_12461 = (state_12543[(15)]);var inst_12472 = cljs.core.last.call(null,inst_12461);var inst_12473 = cljs.core.deref.call(null,inst_12472);var state_12543__$1 = state_12543;var statearr_12583_12635 = state_12543__$1;(statearr_12583_12635[(2)] = inst_12473);
(statearr_12583_12635[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (26)))
{var inst_12500 = (state_12543[(20)]);var inst_12502 = cljs.core.pr_str.call(null,inst_12500);var inst_12503 = growingtree_app.utils.mprint.call(null,"API Verbose: ",inst_12502);var state_12543__$1 = state_12543;var statearr_12584_12636 = state_12543__$1;(statearr_12584_12636[(2)] = inst_12503);
(statearr_12584_12636[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (16)))
{var inst_12469 = (state_12543[(14)]);var inst_12481 = (state_12543[(2)]);var inst_12482 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"refresh","refresh",1947415525),inst_12469);var state_12543__$1 = (function (){var statearr_12585 = state_12543;(statearr_12585[(11)] = inst_12481);
return statearr_12585;
})();if(inst_12482)
{var statearr_12586_12637 = state_12543__$1;(statearr_12586_12637[(1)] = (20));
} else
{var statearr_12587_12638 = state_12543__$1;(statearr_12587_12638[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (30)))
{var inst_12457 = (state_12543[(9)]);var inst_12525 = cljs.core._EQ_.call(null,inst_12457,new cljs.core.Keyword(null,"default","default",-1987822328));var state_12543__$1 = state_12543;if(inst_12525)
{var statearr_12588_12639 = state_12543__$1;(statearr_12588_12639[(1)] = (32));
} else
{var statearr_12589_12640 = state_12543__$1;(statearr_12589_12640[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (10)))
{var inst_12535 = (state_12543[(2)]);var state_12543__$1 = (function (){var statearr_12590 = state_12543;(statearr_12590[(26)] = inst_12535);
return statearr_12590;
})();var statearr_12591_12641 = state_12543__$1;(statearr_12591_12641[(2)] = null);
(statearr_12591_12641[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (18)))
{var state_12543__$1 = state_12543;var statearr_12592_12642 = state_12543__$1;(statearr_12592_12642[(2)] = null);
(statearr_12592_12642[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12544 === (8)))
{var inst_12455 = (state_12543[(7)]);var inst_12461 = cljs.core.nth.call(null,inst_12455,(0),null);var state_12543__$1 = (function (){var statearr_12593 = state_12543;(statearr_12593[(15)] = inst_12461);
return statearr_12593;
})();if(cljs.core.truth_(growingtree_app.utils.logging_enabled_QMARK_))
{var statearr_12594_12643 = state_12543__$1;(statearr_12594_12643[(1)] = (11));
} else
{var statearr_12595_12644 = state_12543__$1;(statearr_12595_12644[(1)] = (12));
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
});})(c__6345__auto__,comms,history))
;return ((function (switch__6280__auto__,c__6345__auto__,comms,history){
return (function() {
var state_machine__6281__auto__ = null;
var state_machine__6281__auto____0 = (function (){var statearr_12599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12599[(0)] = state_machine__6281__auto__);
(statearr_12599[(1)] = (1));
return statearr_12599;
});
var state_machine__6281__auto____1 = (function (state_12543){while(true){
var ret_value__6282__auto__ = (function (){try{while(true){
var result__6283__auto__ = switch__6280__auto__.call(null,state_12543);if(cljs.core.keyword_identical_QMARK_.call(null,result__6283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6283__auto__;
}
break;
}
}catch (e12600){if((e12600 instanceof Object))
{var ex__6284__auto__ = e12600;var statearr_12601_12645 = state_12543;(statearr_12601_12645[(5)] = ex__6284__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12543);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12600;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12646 = state_12543;
state_12543 = G__12646;
continue;
}
} else
{return ret_value__6282__auto__;
}
break;
}
});
state_machine__6281__auto__ = function(state_12543){
switch(arguments.length){
case 0:
return state_machine__6281__auto____0.call(this);
case 1:
return state_machine__6281__auto____1.call(this,state_12543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6281__auto____0;
state_machine__6281__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6281__auto____1;
return state_machine__6281__auto__;
})()
;})(switch__6280__auto__,c__6345__auto__,comms,history))
})();var state__6347__auto__ = (function (){var statearr_12602 = f__6346__auto__.call(null);(statearr_12602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6345__auto__);
return statearr_12602;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6347__auto__);
});})(c__6345__auto__,comms,history))
);
return c__6345__auto__;
});
growingtree_app.core.setup_BANG_ = (function setup_BANG_(){var comms = new cljs.core.Keyword(null,"comms","comms",460172477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,growingtree_app.core.app_state));growingtree_app.core.main.call(null,document.getElementById("app"),growingtree_app.core.app_state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"restore-state?","restore-state?",-1143283431).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-restored","state-restored",450621293)], null));
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"kandan-client?","kandan-client?",998337099).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map)))
{var api_key = new cljs.core.Keyword(null,"kandan-api-key","kandan-api-key",1285411267).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);var kandan_client = growingtree_app.api.kandan.make_client.call(null,api_key,"http://localhost:3000/remote/faye");var channels = new cljs.core.Keyword(null,"kandan-channels","kandan-channels",-1827680736).cljs$core$IFn$_invoke$arity$1(growingtree_app.utils.initial_query_map);cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(comms),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-key-updated","api-key-updated",-1848658586),api_key], null));
var seq__12651 = cljs.core.seq.call(null,channels);var chunk__12652 = null;var count__12653 = (0);var i__12654 = (0);while(true){
if((i__12654 < count__12653))
{var channel = cljs.core._nth.call(null,chunk__12652,i__12654);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12655 = seq__12651;
var G__12656 = chunk__12652;
var G__12657 = count__12653;
var G__12658 = (i__12654 + (1));
seq__12651 = G__12655;
chunk__12652 = G__12656;
count__12653 = G__12657;
i__12654 = G__12658;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12651);if(temp__4126__auto__)
{var seq__12651__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12651__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__12651__$1);{
var G__12659 = cljs.core.chunk_rest.call(null,seq__12651__$1);
var G__12660 = c__4299__auto__;
var G__12661 = cljs.core.count.call(null,c__4299__auto__);
var G__12662 = (0);
seq__12651 = G__12659;
chunk__12652 = G__12660;
count__12653 = G__12661;
i__12654 = G__12662;
continue;
}
} else
{var channel = cljs.core.first.call(null,seq__12651__$1);growingtree_app.api.kandan.subscribe_BANG_.call(null,kandan_client,("/channels/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(comms));
{
var G__12663 = cljs.core.next.call(null,seq__12651__$1);
var G__12664 = null;
var G__12665 = (0);
var G__12666 = (0);
seq__12651 = G__12663;
chunk__12652 = G__12664;
count__12653 = G__12665;
i__12654 = G__12666;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
window.onload = growingtree_app.core.setup_BANG_;
growingtree_app.core.send_async_message = (function send_async_message(ch_name,message,data){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,growingtree_app.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),cljs.core.keyword.call(null,ch_name)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,message),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null));
});
goog.exportSymbol('growingtree_app.core.send_async_message', growingtree_app.core.send_async_message);
growingtree_app.core.remove_channel_BANG_ = (function remove_channel_BANG_(channel_id){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,growingtree_app.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",460172477),new cljs.core.Keyword(null,"controls","controls",1340701452)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",-727239593),channel_id], null));
});
goog.exportSymbol('growingtree_app.core.remove_channel_BANG_', growingtree_app.core.remove_channel_BANG_);

//# sourceMappingURL=core.js.map