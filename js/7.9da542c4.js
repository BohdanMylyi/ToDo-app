(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"311b":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e._self._c;return t("q-page",{attrs:{padding:""}},[t("q-list",{staticClass:"q-mb-md",attrs:{bordered:"",padding:""}},[t("q-item-label",{attrs:{header:""}},[e._v("Settings")]),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[t("q-item-section",[t("q-item-label",[e._v("Show 12 hour time format")])],1),t("q-item-section",{attrs:{side:""}},[t("q-toggle",{attrs:{color:"blue"},model:{value:e.show12HourTimeFormat,callback:function(t){e.show12HourTimeFormat=t},expression:"show12HourTimeFormat"}})],1)],1),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[t("q-item-section",[t("q-item-label",[e._v("Show tasks in one list")])],1),t("q-item-section",{attrs:{side:""}},[t("q-toggle",{attrs:{color:"blue"},model:{value:e.showTasksInOneList,callback:function(t){e.showTasksInOneList=t},expression:"showTasksInOneList"}})],1)],1)],1),t("q-list",{attrs:{bordered:"",padding:""}},[t("q-item-label",{attrs:{header:""}},[e._v("More")]),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{to:"/settings/help",tag:"label"}},[t("q-item-section",[t("q-item-label",[e._v("Help")])],1),t("q-item-section",{attrs:{side:""}},[t("q-icon",{attrs:{name:"chevron_right"}})],1)],1),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"},on:{click:e.visitOurWebsite}},[t("q-item-section",[t("q-item-label",[e._v("Visit our website")])],1),t("q-item-section",{attrs:{side:""}},[t("q-icon",{attrs:{name:"chevron_right"}})],1)],1),t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"},on:{click:e.emailUs}},[t("q-item-section",[t("q-item-label",[e._v("Email us")])],1),t("q-item-section",{attrs:{side:""}},[t("q-icon",{attrs:{name:"chevron_right"}})],1)],1)],1)],1)},a=[],o=s("2f62"),r=s("b06b"),n={computed:{...Object(o["c"])("settings",["settings"]),show12HourTimeFormat:{get(){return this.settings.show12HourTimeFormat},set(e){this.setShow12HourTimeFormat(e)}},showTasksInOneList:{get(){return this.settings.showTasksInOneList},set(e){this.setShowTasksInOneList(e)}}},methods:{...Object(o["b"])("settings",["setShow12HourTimeFormat","setShowTasksInOneList"]),visitOurWebsite(){Object(r["a"])("http://www.google.com")},emailUs(){window.location.href="mailto:hello@awesometodo.com?subject=Awesome Todo Feedback"}}},l=n,m=s("2877"),c=s("9989"),p=s("1c1c"),b=s("0170"),h=s("66e5"),d=s("4074"),w=s("9564"),q=s("0016"),u=s("714f"),g=s("eebe"),v=s.n(g),T=Object(m["a"])(l,i,a,!1,null,null,null);t["default"]=T.exports;v()(T,"components",{QPage:c["a"],QList:p["a"],QItemLabel:b["a"],QItem:h["a"],QItemSection:d["a"],QToggle:w["a"],QIcon:q["a"]}),v()(T,"directives",{Ripple:u["a"]})}}]);