// Compiled by ClojureScript 0.0-2173
goog.provide('omchaya.test.components.common');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.core');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('cemerick.cljs.test');
goog.require('cemerick.cljs.test');
omchaya.test.components.common.container_div = (function container_div(){var id = [cljs.core.str("container-"),cljs.core.str(cljs.core.gensym.call(null))].join('');return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var dom24012 = document.createElement("div");if(cljs.core.truth_(id))
{dom24012.setAttribute("id",id);
} else
{}
return dom24012;
})(),[cljs.core.str("#"),cljs.core.str(id)].join('')], null);
});
omchaya.test.components.common.insert_container_BANG_ = (function insert_container_BANG_(container){return dommy.core.append_BANG_.call(null,document.body,container);
});
omchaya.test.components.common.new_container_BANG_ = (function new_container_BANG_(){var vec__24014 = omchaya.test.components.common.container_div.call(null);var n = cljs.core.nth.call(null,vec__24014,0,null);var s = cljs.core.nth.call(null,vec__24014,1,null);omchaya.test.components.common.insert_container_BANG_.call(null,n);
return document.querySelector(dommy.core.selector.call(null,s));
});
