webpackJsonp([1],{171:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(30),o=s(97),r=s.n(o),i=s(95),a=s.n(i),l=s(47),c=(s.n(l),s(94)),u=s(46),d=s(93),f=s(96),v=s.n(f);n.a.use(r.a),n.a.config.productionTip=!1,n.a.filter("date",d.a),n.a.component("app-alert",v.a),new n.a({el:"#app",router:c.a,store:u.a,render:function(t){return t(a.a)},created:function(){var t=this;l.initializeApp({apiKey:"AIzaSyC_f2DZdRUDx4L7P3hpOObRNkupJrMrTiY",authDomain:"notesapp-5681d.firebaseapp.com",databaseURL:"https://notesapp-5681d.firebaseio.com",projectId:"notesapp-5681d",storageBucket:"notesapp-5681d.appspot.com"}),l.auth().onAuthStateChanged(function(e){e&&t.$store.dispatch("autoSignIn",e)}),this.$store.dispatch("loadConfessions")}})},172:function(t,e,s){"use strict";var n=s(46);e.a=function(t,e,s){n.a.getters.user?s():s("/signin")}},173:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{sideNav:!1}},computed:{menuItems:function(){var t=[{icon:"face",title:"Sign up",link:"/signup"},{icon:"lock_open",title:"Sign in",link:"/signin"}];return this.userIsAuthenticated&&(t=[{icon:"supervisor_account",title:"Your Confessions",link:"/confessions"},{icon:"edit",title:"Shout a Confession",link:"/confessions/new"},{icon:"person",title:"Profile",link:"/profile"}]),t},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user}},methods:{onLogout:function(){this.$store.dispatch("logout")}}}},174:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["id"],computed:{meetup:function(){return this.$store.getters.loadedMeetup(this.id)}}}},175:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{confessions:function(){return this.$store.getters.loadedConfessions}}}},176:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{title:"",location:"",imageUrl:"",description:"",date:new Date,time:new Date}},computed:{formIsValid:function(){return""!==this.title&&""!==this.description},submittableDateTime:function(){var t=new Date(this.date);return t.setHours(this.time.getHours()),t.setMinutes(this.time.getMinutes()),t}},methods:{onCreateConfession:function(){if(this.formIsValid){var t={title:this.title,location:this.location,imageUrl:this.imageUrl,description:this.description,date:this.submittableDateTime};this.$store.dispatch("createConfession",t),this.$router.push("/confessions")}}}}},177:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{confessions:function(){return this.$store.getters.allConfessions},loading:function(){return this.$store.getters.loading}},methods:{}}},178:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["text"],methods:{onClose:function(){this.$emit("dismissed")}}}},179:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{email:"",password:""}},computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignin:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}}},180:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{email:"",password:"",confirmPassword:""}},computed:{comparePasswords:function(){return this.password!==this.confirmPassword?"Passwords do not match":""},user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignup:function(){this.$store.dispatch("signUserUp",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}}},210:function(t,e){},211:function(t,e){},219:function(t,e,s){var n=s(8)(s(174),s(231),null,null);t.exports=n.exports},220:function(t,e,s){var n=s(8)(s(175),s(226),null,null);t.exports=n.exports},221:function(t,e,s){var n=s(8)(s(176),s(227),null,null);t.exports=n.exports},222:function(t,e,s){s(211);var n=s(8)(s(177),s(234),"data-v-cd6c2014",null);t.exports=n.exports},223:function(t,e,s){var n=s(8)(null,s(228),null,null);t.exports=n.exports},224:function(t,e,s){var n=s(8)(s(179),s(233),null,null);t.exports=n.exports},225:function(t,e,s){var n=s(8)(s(180),s(232),null,null);t.exports=n.exports},226:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:"","grid-list-md":""}},[s("v-layout",{attrs:{column:""}},t._l(t.confessions,function(e){return s("v-flex",{key:e.title},[s("v-card",[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("h3",{staticClass:"headline mb-0",domProps:{textContent:t._s(e.title)}}),t._v(" "),s("div",{domProps:{textContent:t._s(e.description)}})])]),t._v(" "),s("v-card-media"),t._v(" "),s("v-card-actions",{staticClass:"white"},[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{icon:""}},[s("v-icon",[t._v("thumb_up")])],1),t._v(" "),s("v-btn",{attrs:{icon:""}},[s("v-icon",[t._v("thumb_down")])],1),t._v(" "),s("v-btn",{attrs:{icon:""}},[s("v-icon",[t._v("delete")])],1)],1)],1)],1)}))],1)},staticRenderFns:[]}},227:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h4",[t._v("Shout a Confession")])])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("form",{on:{submit:function(e){e.preventDefault(),t.onCreateConfession(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"description",label:"Description",id:"description","multi-line":"",required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"primary",attrs:{disabled:!t.formIsValid,type:"submit"}},[t._v("Create Meetup")])],1)],1)],1)])],1)],1)},staticRenderFns:[]}},228:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",[t._v("The User Page")])])}]}},229:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-navigation-drawer",{attrs:{temporary:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[s("v-list",[t._l(t.menuItems,function(e){return s("v-list-tile",{key:e.title,attrs:{to:e.link}},[s("v-list-tile-action",[s("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),s("v-list-tile-content",[t._v(t._s(e.title))])],1)}),t._v(" "),t.userIsAuthenticated?s("v-list-tile",{on:{click:t.onLogout}},[s("v-list-tile-action",[s("v-icon",[t._v("exit_to_app")])],1),t._v(" "),s("v-list-tile-content",[t._v("Logout")])],1):t._e()],2)],1),t._v(" "),s("v-toolbar",{staticClass:"primary",attrs:{dark:""}},[s("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up ",on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),t._v(" "),s("v-toolbar-title",[s("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("Confessions")])],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",{staticClass:"hidden-xs-only"},[t._l(t.menuItems,function(e){return s("v-btn",{key:e.title,attrs:{flat:"",to:e.link}},[s("v-icon",{attrs:{left:"",dark:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n\n      ")],1)}),t._v(" "),t.userIsAuthenticated?s("v-btn",{attrs:{flat:""},on:{click:t.onLogout}},[s("v-icon",{attrs:{left:"",dark:""}},[t._v("exit_to_app")]),t._v("\n        Logout\n      ")],1):t._e()],2)],1),t._v(" "),s("main",[s("router-view")],1)],1)},staticRenderFns:[]}},230:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-alert",{attrs:{error:"",dismissible:"",value:!0},on:{input:t.onClose}},[t._v("\n  "+t._s(t.text)+"\n")])},staticRenderFns:[]}},231:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",[s("v-card-title",[s("h6",{staticClass:"primary--text"},[t._v(t._s(t.meetup.title))])]),t._v(" "),s("v-card-media",{attrs:{src:t.meetup.imageUrl,height:"400px"}}),t._v(" "),s("v-card-text",[s("div",{staticClass:"info--text"},[t._v(t._s(t._f("date")(t.meetup.date))+" - "+t._s(t.meetup.location))]),t._v(" "),s("div",[t._v(t._s(t.meetup.description))])]),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"primary"},[t._v("Register")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},232:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(e){e.preventDefault(),t.onSignup(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"Mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",rules:[t.comparePasswords]},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("\n                    Sign up\n                     "),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]}},233:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(e){e.preventDefault(),t.onSignin(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"Mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("\n                    Sign in\n                     "),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]}},234:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("pre",[t._v(t._s(t.confessions))]),t._v(" "),s("pre",[t._v(t._s(t.loading))])])},staticRenderFns:[]}},46:function(t,e,s){"use strict";s.d(e,"a",function(){return l});var n=s(182),o=s.n(n),r=s(30),i=s(237),a=s(47);s.n(a);r.a.use(i.a);var l=new i.a.Store({state:{loadedConfessions:[],allConfessions:[],user:null,loading:!1,error:null},mutations:{setLoadedConfessions:function(t,e){t.loadedConfessions=e},setAllConfessions:function(t,e){t.allConfessions=e},createConfession:function(t,e){t.loadedConfessions.push(e)},setUser:function(t,e){t.user=e},setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{loadConfessions:function(t){var e=t.commit;e("setLoading",!0),a.database().ref("confessions").once("value").then(function(t){var s=[],n=t.val();for(var o in n)s.push({id:o,title:n[o].title,description:n[o].description,imageUrl:n[o].imageUrl,date:n[o].date,creatorId:n[o].creatorId});e("setLoadedConfessions",s),e("setLoading",!1)}).catch(function(t){console.log(t),e("setLoading",!1)})},createConfession:function(t,e){var s=t.commit,n=t.getters,r={title:e.title,description:e.description,date:e.date.toISOString(),creatorId:n.user.id};a.database().ref("confessions").push(r).then(function(t){var e=t.key;s("createConfession",o()({},r,{id:e}))}).catch(function(t){console.log(t)})},signUserUp:function(t,e){var s=t.commit;s("setLoading",!0),s("clearError"),a.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1);var e={id:t.uid,registeredConfessions:[]};s("setUser",e)}).catch(function(t){s("setLoading",!1),s("setError",t),console.log(t)})},signUserIn:function(t,e){var s=t.commit;s("setLoading",!0),s("clearError"),a.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1);var e={id:t.uid,registeredConfessions:[]};s("setUser",e)}).catch(function(t){s("setLoading",!1),s("setError",t),console.log(t)})},autoSignIn:function(t,e){(0,t.commit)("setUser",{id:e.uid,registeredConfessions:[]})},logout:function(t){var e=t.commit;a.auth().signOut(),e("setUser",null)},clearError:function(t){(0,t.commit)("clearError")}},getters:{loadedConfessions:function(t){return t.loadedConfessions},allConfessions:function(t){return t.allConfessions},featuredConfessions:function(t,e){return e.loadedConfessions.slice(0,5)},loadedConfession:function(t){return function(e){return t.loadedConfessions.find(function(t){return t.id===e})}},user:function(t){return t.user},loading:function(t){return t.loading},error:function(t){return t.error}}})},93:function(t,e,s){"use strict";e.a=function(t){return new Date(t).toLocaleString(["en-US"],{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}},94:function(t,e,s){"use strict";var n=s(30),o=s(235),r=s(222),i=s.n(r),a=s(220),l=s.n(a),c=s(221),u=s.n(c),d=s(223),f=s.n(d),v=s(225),p=s.n(v),m=s(224),h=s.n(m),_=s(219),g=s.n(_),x=s(172);n.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"Home",component:i.a},{path:"/confessions",name:"Confessions",component:l.a},{path:"/confessions/new",name:"CreateConfession",component:u.a,beforeEnter:x.a},{path:"/confessions/:id",name:"Confession",props:!0,component:g.a},{path:"/profile",name:"Profile",component:f.a,beforeEnter:x.a},{path:"/signup",name:"Signup",component:p.a},{path:"/signin",name:"Signin",component:h.a}],mode:"history"})},95:function(t,e,s){s(210);var n=s(8)(s(173),s(229),null,null);t.exports=n.exports},96:function(t,e,s){var n=s(8)(s(178),s(230),null,null);t.exports=n.exports}},[171]);
//# sourceMappingURL=app.5ef99cb982f54f787519.js.map