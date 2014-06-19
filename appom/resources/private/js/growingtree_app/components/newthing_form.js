// Compiled by ClojureScript 0.0-2173
goog.provide('growingtree_app.components.newthing_form');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.plugins');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('growingtree_app.datetime');
goog.require('om.core');
goog.require('growingtree_app.plugins');
goog.require('clojure.string');
goog.require('growingtree_app.utils');
goog.require('growingtree_app.utils');
goog.require('om.dom');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('growingtree_app.datetime');
goog.require('dommy.core');
growingtree_app.components.newthing_form.add_form = (function (){var method_table__4301__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4302__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4303__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4304__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4305__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("add-form",(function (thing_type,comm){return thing_type;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4305__auto__,method_table__4301__auto__,prefer_table__4302__auto__,method_cache__4303__auto__,cached_hierarchy__4304__auto__));
})();
cljs.core._add_method.call(null,growingtree_app.components.newthing_form.add_form,new cljs.core.Keyword(null,"default","default",2558708147),(function (thing_type,comm){return console.log("add-form ",cljs.core.pr_str.call(null,thing_type)," defaults ");
}));
cljs.core._add_method.call(null,growingtree_app.components.newthing_form.add_form,new cljs.core.Keyword(null,"add-parent","add-parent",1545021128),(function (thing_type,comm){var submit_fn = (function (e){var input_fields = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("person","title","person/title",2822782252),".person-title",new cljs.core.Keyword("person","lname","person/lname",2832628553),".person-lname",new cljs.core.Keyword("person","type","person/type",2862995478),".person-type",new cljs.core.Keyword("person","email","person/email",2838598648),".person-email",new cljs.core.Keyword("person","phone","person/phone",2827575842),".person-phone",new cljs.core.Keyword("person","address","person/address",3846489168),".person-address",new cljs.core.Keyword("person","url","person/url",2868042273),".person-url"], null);var data = cljs.core.reduce.call(null,((function (input_fields){
return (function (tot,p__11273){var vec__11274 = p__11273;var k = cljs.core.nth.call(null,vec__11274,0,null);var clz = cljs.core.nth.call(null,vec__11274,1,null);return cljs.core.assoc.call(null,tot,k,dommy.core.value.call(null,document.querySelector(dommy.core.selector.call(null,clz))));
});})(input_fields))
,cljs.core.PersistentArrayMap.EMPTY,input_fields);console.log("person form ",cljs.core.pr_str.call(null,data));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-thing","add-thing",4221519924),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",4313447452),data], null)], null));
});return cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.create-form","div.create-form",742041738),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form-horizontal","form.form-horizontal",3586580245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",4202297215),"Parent Details"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"person-name"], null),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"person-title",new cljs.core.Keyword(null,"class","class",1108647146),"person-title",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"user name"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"person-lname"], null),"Last Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"person-lname",new cljs.core.Keyword(null,"class","class",1108647146),"person-lname",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"user last name"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"person-type"], null),"Type"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"person-type",new cljs.core.Keyword(null,"class","class",1108647146),"person-type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"M"], null),"Dad"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"F"], null),"Mom"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"T"], null),"Teacher"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"person-email"], null),"Email"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"person-email",new cljs.core.Keyword(null,"class","class",1108647146),"person-email",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"user email"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"person-phone"], null),"Phone"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"person-phone",new cljs.core.Keyword(null,"class","class",1108647146),"person-phone",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"user phone"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"person-address"], null),"Address"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"person-address",new cljs.core.Keyword(null,"class","class",1108647146),"person-address",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"user address"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"person-url"], null),"Social Network"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"person-url",new cljs.core.Keyword(null,"class","class",1108647146),"person-url",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"social network url"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.usertext-buttons.control-group","div.usertext-buttons.control-group",3401337404),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",1128936373),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),"submit",new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"on-click","on-click",1416542092),submit_fn], null),"OK"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",1371314450),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"cancel",new cljs.core.Keyword(null,"type","type",1017479852),"button"], null),"Cancel"], null)], null)], null)], null));
}));
cljs.core._add_method.call(null,growingtree_app.components.newthing_form.add_form,new cljs.core.Keyword(null,"add-child","add-child",4205820002),(function (thing_type,comm){var submit_fn = (function (e){var input_fields = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("person","title","person/title",2822782252),".person-title",new cljs.core.Keyword("person","lname","person/lname",2832628553),".person-lname",new cljs.core.Keyword("person","type","person/type",2862995478),".person-type",new cljs.core.Keyword("person","email","person/email",2838598648),".person-email",new cljs.core.Keyword("person","phone","person/phone",2827575842),".person-phone",new cljs.core.Keyword("person","address","person/address",3846489168),".person-address",new cljs.core.Keyword("person","url","person/url",2868042273),".person-url"], null);var data = cljs.core.reduce.call(null,((function (input_fields){
return (function (tot,p__11275){var vec__11276 = p__11275;var k = cljs.core.nth.call(null,vec__11276,0,null);var clz = cljs.core.nth.call(null,vec__11276,1,null);return cljs.core.assoc.call(null,tot,k,dommy.core.value.call(null,document.querySelector(dommy.core.selector.call(null,clz))));
});})(input_fields))
,cljs.core.PersistentArrayMap.EMPTY,input_fields);console.log("person form ",cljs.core.pr_str.call(null,data));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-thing","add-thing",4221519924),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child","child",1108535438),data], null)], null));
});return cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.create-form","div.create-form",742041738),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form-horizontal","form.form-horizontal",3586580245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",4202297215),"Child Details"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"person-name"], null),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"person-title",new cljs.core.Keyword(null,"class","class",1108647146),"person-title",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"user name"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"person-lname"], null),"Last Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"person-lname",new cljs.core.Keyword(null,"class","class",1108647146),"person-lname",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"user last name"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"person-type"], null),"Type"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"person-type",new cljs.core.Keyword(null,"class","class",1108647146),"person-type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"S"], null),"Son"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"D"], null),"Daughter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"M"], null),"Dad"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"F"], null),"Mom"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"T"], null),"Teacher"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"person-email"], null),"Email"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"person-email",new cljs.core.Keyword(null,"class","class",1108647146),"person-email",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"user email"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"person-phone"], null),"Phone"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"person-phone",new cljs.core.Keyword(null,"class","class",1108647146),"person-phone",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"user phone"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"person-address"], null),"Address"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"person-address",new cljs.core.Keyword(null,"class","class",1108647146),"person-address",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"user address"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"person-url"], null),"Social Network"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"person-url",new cljs.core.Keyword(null,"class","class",1108647146),"person-url",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"social network url"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.usertext-buttons.control-group","div.usertext-buttons.control-group",3401337404),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",1128936373),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),"submit",new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"on-click","on-click",1416542092),submit_fn], null),"OK"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",1371314450),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"cancel",new cljs.core.Keyword(null,"type","type",1017479852),"button"], null),"Cancel"], null)], null)], null)], null));
}));
cljs.core._add_method.call(null,growingtree_app.components.newthing_form.add_form,new cljs.core.Keyword(null,"add-course","add-course",1185873465),(function (thing_type,comm){var submit_fn = (function (e){var input_fields = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("course","title","course/title",1817064581),".course-title",new cljs.core.Keyword("course","content","course/content",3664578204),".course-content",new cljs.core.Keyword("course","type","course/type",2481693019),".course-type",new cljs.core.Keyword("course","author","course/author",1206334410),".course-author",new cljs.core.Keyword("course","url","course/url",2478479278),".course-url",new cljs.core.Keyword("course","email","course/email",1844960697),".course-email",new cljs.core.Keyword("course","wiki","course/wiki",2481750509),".course-wiki"], null);var data = growingtree_app.utils.update_enum.call(null,cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (input_fields){
return (function (tot,p__11277){var vec__11278 = p__11277;var k = cljs.core.nth.call(null,vec__11278,0,null);var clz = cljs.core.nth.call(null,vec__11278,1,null);return cljs.core.assoc.call(null,tot,k,dommy.core.value.call(null,document.querySelector(dommy.core.selector.call(null,clz))));
});})(input_fields))
,cljs.core.PersistentArrayMap.EMPTY,input_fields),new cljs.core.Keyword(null,"author","author",3902543101),"rich-dad"),new cljs.core.Keyword(null,"course","course",3954299789),"type",false);console.log("course form ",cljs.core.pr_str.call(null,data));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-thing","add-thing",4221519924),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",3954299789),data], null)], null));
});return cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.create-form","div.create-form",742041738),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form-horizontal","form.form-horizontal",3586580245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",4202297215),"Course Details"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"course-title"], null),"Title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"course-title",new cljs.core.Keyword(null,"class","class",1108647146),"course-title",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"the title of course ..."], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"course-author"], null),"Author"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"course-author",new cljs.core.Keyword(null,"class","class",1108647146),"course-author",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"the author ..."], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"course-type"], null),"Type"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"course-type",new cljs.core.Keyword(null,"class","class",1108647146),"course-type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"math"], null),"Math"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"science"], null),"Science"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"reading"], null),"Reading"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"art"], null),"Art"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"sports"], null),"Sports"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"course-content"], null),"content"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"course-content",new cljs.core.Keyword(null,"class","class",1108647146),"course-content",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"brief content of the this course"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"course-url"], null),"url"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"course-url",new cljs.core.Keyword(null,"class","class",1108647146),"course-url",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"growingtrees.com/courses"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"course-email"], null),"group email"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"course-email",new cljs.core.Keyword(null,"class","class",1108647146),"course-email",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"course@group.growingtrees.com"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control-group","div.control-group",935401188),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",3438948476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),"course-wiki"], null),"Wiki Page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"course-wiki",new cljs.core.Keyword(null,"class","class",1108647146),"course-wiki",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"wiki of the course"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.usertext-buttons.control-group","div.usertext-buttons.control-group",3401337404),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",1128936373),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),"submit",new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"on-click","on-click",1416542092),submit_fn], null),"OK"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",1371314450),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"cancel",new cljs.core.Keyword(null,"type","type",1017479852),"button"], null),"Cancel"], null)], null)], null)], null));
}));
