"use strict";(self.webpackChunkrm_controls_tutorial=self.webpackChunkrm_controls_tutorial||[]).push([[146],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||r;return n?i.createElement(k,l(l({ref:t},o),{},{components:n})):i.createElement(k,l({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9394:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return o},default:function(){return c}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],p={},u="\u63d2\u4ef6",s={unversionedId:"digging_deeper/sdk_docs/rm_plugins",id:"digging_deeper/sdk_docs/rm_plugins",isDocsHomePage:!1,title:"\u63d2\u4ef6",description:"\u6a21\u5757\u4ecb\u7ecd",source:"@site/current_docs/digging_deeper/sdk_docs/rm_plugins.md",sourceDirName:"digging_deeper/sdk_docs",slug:"/digging_deeper/sdk_docs/rm_plugins",permalink:"/test-docs/docs/digging_deeper/sdk_docs/rm_plugins",editUrl:"https://github.com/rm-controls/rm-controls-docs/current_docs/digging_deeper/sdk_docs/rm_plugins.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rm_msg",permalink:"/test-docs/docs/digging_deeper/sdk_docs/rm_msg"},next:{title:"armor_kalman_filter",permalink:"/test-docs/docs/digging_deeper/theory/armor_kalman_filter"}},o=[{value:"\u6a21\u5757\u4ecb\u7ecd",id:"\u6a21\u5757\u4ecb\u7ecd",children:[]},{value:"\u5bf9\u57fa\u7c7b\u7684\u8bf4\u660e",id:"\u5bf9\u57fa\u7c7b\u7684\u8bf4\u660e",children:[]},{value:"\u5e95\u76d8\u6a21\u5757",id:"\u5e95\u76d8\u6a21\u5757",children:[{value:"1\u3001\u4e3b\u8981\u6210\u5458",id:"1\u4e3b\u8981\u6210\u5458",children:[]},{value:"2\u3001\u5e95\u76d8\u72b6\u6001\u673a",id:"2\u5e95\u76d8\u72b6\u6001\u673a",children:[]}]},{value:"\u4e91\u53f0\u6a21\u5757",id:"\u4e91\u53f0\u6a21\u5757",children:[{value:"1\u3001\u57fa\u672c\u6210\u5458",id:"1\u57fa\u672c\u6210\u5458",children:[]},{value:"2\u3001\u4e91\u53f0\u72b6\u6001\u673a",id:"2\u4e91\u53f0\u72b6\u6001\u673a",children:[]}]},{value:"\u53d1\u5c04\u673a\u6784",id:"\u53d1\u5c04\u673a\u6784",children:[{value:"1\u3001\u57fa\u672c\u6210\u5458",id:"1\u57fa\u672c\u6210\u5458-1",children:[]},{value:"2\u3001\u53d1\u5c04\u673a\u6784\u72b6\u6001\u673a\u8bf4\u660e",id:"2\u53d1\u5c04\u673a\u6784\u72b6\u6001\u673a\u8bf4\u660e",children:[]}]},{value:"Gpio",id:"gpio",children:[]},{value:"IMU",id:"imu",children:[]}],m={toc:o};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,r.kt)("h2",{id:"\u6a21\u5757\u4ecb\u7ecd"},"\u6a21\u5757\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u672c\u961f\u4f0d\u7684RoboMaster\u673a\u5668\u4eba\u5e73\u53f0\u57fa\u4e8e\u6a21\u5757\u5316\u8bbe\u8ba1\uff0c\u5404\u4e2a\u6a21\u5757\u901a\u8fc7\u63d2\u4ef6\u7684\u5f62\u5f0f\u63a5\u5165\u4e3b\u63a7\u7a0b\u5e8f\u3002"),(0,r.kt)("p",null,"\u5728rm_base\u529f\u80fd\u5305\u4e2d\uff0c\u5b9a\u4e49\u4e86\u4e00\u4e2aPluginBase\u7c7b\u4f5c\u4e3a\u63d2\u4ef6\u7684\u57fa\u7c7b\uff0c\u5728rm_plugins\u529f\u80fd\u5305\u4e2d\uff0c\u521b\u5efa\u4e86\u76f8\u5e94\u7684\u63d2\u4ef6\u7c7b\u3002"),(0,r.kt)("p",null,"\u5168\u90e8plugins\uff08\u63d2\u4ef6\uff09\u653e\u5728rm_plugins\u529f\u80fd\u5305\u4e2d\uff0c\u4e00\u5171\u67095\u79cd\u63d2\u4ef6\uff08chassis\u3001gimbal\u3001gpio\u3001imu\u3001shooter\uff09\u3002\u672c\u6587\u6863\u7528\u4e8e\u8bf4\u660e\u5404\u4e2a\u63d2\u4ef6\u7684\u5177\u4f53\u529f\u80fd\u3002"),(0,r.kt)("p",null,"rm_plugins\u529f\u80fd\u5305\u7684\u6587\u4ef6\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rm_plugins\n\u251c\u2500\u2500 cfg\n\u2502\xa0\xa0 \u251c\u2500\u2500 chassis.cfg\n|   \u2514\u2500\u2500 gimbal.cfg\n|   \u2514\u2500\u2500 shooter.cfg\n\u251c\u2500\u2500 include\n\u2502\xa0\xa0 \u2514\u2500\u2500 chassis\n\u2502\xa0\xa0     \u251c\u2500\u2500 chassis_config.h\n|       \u2514\u2500\u2500 chassis_plugins.h\n|   \u2514\u2500\u2500 gimbal\n|       \u251c\u2500\u2500 gimbal_config.h\n|       \u2514\u2500\u2500 gimbal_plugins.h\n|   \u2514\u2500\u2500 gpio\n|       \u251c\u2500\u2500 gpio_manager.h\n|       \u2514\u2500\u2500 gpio_plugins.h\n|   \u2514\u2500\u2500 imu\n|       \u2514\u2500\u2500 hi220\n|           \u251c\u2500\u2500 gpio_manager.h\n|           \u2514\u2500\u2500 gpio_plugins.h\n|       \u2514\u2500\u2500 imu_plugins.h\n|   \u2514\u2500\u2500 shooter\n|       \u251c\u2500\u2500 shooter_config.h\n|       \u2514\u2500\u2500 shooter_plugins.h\n\u251c\u2500\u2500 param\n|       \u2514\u2500\u2500 chassis\n|           \u2514\u2500\u2500 standard.yaml\n|       \u2514\u2500\u2500 gimbal\n|           \u2514\u2500\u2500 standard.yaml\n|       \u2514\u2500\u2500 joint\n|           \u251c\u2500\u2500 hero.yaml\n|           \u2514\u2500\u2500 standard.yaml\n\u251c\u2500\u2500 src\n|       \u2514\u2500\u2500 chassis\n|           \u2514\u2500\u2500 chassis_plugins.cpp\n|       \u2514\u2500\u2500 gimbal\n|           \u2514\u2500\u2500 gimbal_plugins.cpp\n|       \u2514\u2500\u2500 gpio\n|           \u251c\u2500\u2500 gpio_manager.cpp\n|           \u2514\u2500\u2500 gpio_plugins.cpp\n|       \u2514\u2500\u2500 imu\n|           \u2514\u2500\u2500 hi220\n|               \u2514\u2500\u2500 hi220.cpp\n|           \u2514\u2500\u2500 imu_plugins.cpp\n|       \u2514\u2500\u2500 shooter\n|           \u2514\u2500\u2500 shooter_plugins.cpp\n\u251c\u2500\u2500 chassis_plugins.xml\n\u251c\u2500\u2500 gimbal_plugins.xml\n\u251c\u2500\u2500 gpio_plugins.xml\n\u251c\u2500\u2500 imu_plugins.xml\n\u251c\u2500\u2500 shooter_plugins.xml\n\u251c\u2500\u2500 package.xml\n\u2514\u2500\u2500 CMakeLists.txt\n")),(0,r.kt)("h2",{id:"\u5bf9\u57fa\u7c7b\u7684\u8bf4\u660e"},"\u5bf9\u57fa\u7c7b\u7684\u8bf4\u660e"),(0,r.kt)("p",null,"\u5728\u201crm_base/include/base/plugin_base.h\u201d\u8def\u5f84\u4e0b\uff0c\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3aPluginBase\u7684\u7c7b\uff0c\u8be5\u7c7b\u662f\u6240\u6709\u63d2\u4ef6\u7684\u57fa\u7c7b\u3002\u5728PluginBase\u4e2d\uff0c\u5b9a\u4e49\u4e864\u4e2a\u57fa\u672c\u6210\u5458\u51fd\u6570\uff0c\u8fd9\u662f\u5404\u6a21\u5757\u5b9e\u73b0\u57fa\u672c\u529f\u80fd\u7684\u51fd\u6570\uff0c\u73b0\u5bf9\u5176\u8fdb\u884c\u7b80\u5355\u8bf4\u660e\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"init\uff1a\u6784\u5efa\u4e00\u4e2aROS\u5305\u88c5\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},"run\uff1a\u542f\u52a8\u72b6\u6001\u673a\uff0c\u6839\u636e\u5f53\u524d\u6a21\u5757\u7684\u8fd0\u52a8\u72b6\u6001\u6267\u884c\u76f8\u5e94\u529f\u80fd\u3002"),(0,r.kt)("li",{parentName:"ul"},"enble\uff1a\u542f\u52a8\u5173\u8282\uff08\u7535\u673a\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"disable\uff1a\u5173\u95ed\u5173\u8282\uff08\u7535\u673a\uff09\u3002")),(0,r.kt)("h2",{id:"\u5e95\u76d8\u6a21\u5757"},"\u5e95\u76d8\u6a21\u5757"),(0,r.kt)("p",null,"\u5728chassis_plugins.h\u6587\u4ef6\u4e2d\uff0c\u521b\u5efa\u4e86\u5e95\u76d8\u6a21\u5757\u5bf9\u5e94\u7684\u63d2\u4ef6\u7c7bStandChassis\u3002\u73b0\u5bf9\u8be5\u63d2\u4ef6\u7c7b\u7684\u4e3b\u8981\u6210\u5458\u548c\u8fd0\u52a8\u72b6\u6001\u8fdb\u884c\u8bf4\u660e\u3002"),(0,r.kt)("h3",{id:"1\u4e3b\u8981\u6210\u5458"},"1\u3001\u4e3b\u8981\u6210\u5458"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"state_\uff1a\u679a\u4e3e\u578b\u53d8\u91cf\uff0c\u542b5\u79cd\u53d6\u503c\uff08PASSIVE\uff0cRAW\uff0cFOLLOW\uff0cTWIST\uff0cGYRO\uff09\uff0c\u8868\u793a\u8fd0\u52a8\u72b6\u6001\u3002"),(0,r.kt)("li",{parentName:"ul"},"chass",(0,r.kt)("em",{parentName:"li"},"cmd_sub"),'\uff1aROS\u8ba2\u9605\u5668\uff0c\u542f\u52a8init\u51fd\u6570\u540e\uff0c\u8ba2\u9605"/chassis_cmd"\u8bdd\u9898\u6240\u53d1\u5e03\u7684\u6d88\u606f\uff08ChassiaCmd\uff0c\u5e95\u76d8\u7684\u8fd0\u52a8\u72b6\u6001\uff09\u3002'),(0,r.kt)("li",{parentName:"ul"},"vel",(0,r.kt)("em",{parentName:"li"},"cmd_sub"),"\uff1aROS\u8ba2\u9605\u5668\uff0c\u542f\u52a8init\u51fd\u6570\u540e\uff0c\u8ba2\u9605\u201c/vel_cmd_sub\u201d\u8bdd\u9898\u6240\u53d1\u5e03\u7684\u6d88\u606f\uff08Twist\uff0c\u5e95\u76d8\u8fd0\u52a8\u7684\u7ebf\u901f\u5ea6\u548c\u89d2\u901f\u5ea6\uff09\u3002")),(0,r.kt)("h3",{id:"2\u5e95\u76d8\u72b6\u6001\u673a"},"2\u3001\u5e95\u76d8\u72b6\u6001\u673a"),(0,r.kt)("p",null,"\u5f53\u5e95\u76d8\u72b6\u6001\u5e7f\u64ad\u5668\u6240\u53d1\u5e03\u7684\u72b6\u6001\u6d88\u606f\u6539\u53d8\u65f6\uff0cchassis",(0,r.kt)("em",{parentName:"p"},"cmd_sub"),"\u63a5\u6536\u5230\u6d88\u606f\u540e\uff0c\u4f1a\u8fdb\u5165chassisCmdCB\u56de\u8c03\u51fd\u6570\uff0c\u6539\u53d8state__\u7684\u503c\uff0c\u6b64\u65f6\uff0c\u5728run\u51fd\u6570\u4e2d\uff0c\u4fbf\u4f1a\u542f\u52a8\u76f8\u5e94\u72b6\u6001\u6240\u5bf9\u5e94\u529f\u80fd\u7684\u51fd\u6570\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53state_\u7684\u503c\u4e3aPASSIVE\u65f6\uff0c\u4f1a\u542f\u52a8passive\u51fd\u6570\uff0c\u6b64\u65f6\u5e95\u76d8\u6240\u6709\u7535\u673a\u65ad\u7535\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53state_\u7684\u503c\u4e3aRAW\u65f6\uff0c\u542f\u52a8raw\u51fd\u6570\uff0c\u4f1a\u542f\u52a8recoverK\u51fd\uff0c\u6062\u590d\u5404\u8282\u70b9\uff08\u7535\u673a\uff09\u7684\u72b6\u6001\uff0c\u5e76\u4fdd\u5b58\u539f\u59cb\u6570\u636e\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53state_\u7684\u503c\u4e3aFLLOW\u3001TWIST\u3001GYRO\u65f6\uff0c\u542f\u52a8\u76f8\u5e94\u72b6\u6001\u4e0b\u7684\u51fd\u6570\uff0c\u4f1a\u542f\u52a8recoverK\u51fd\u6570\uff0c\u6062\u590d\u5404\u8282\u70b9\uff08\u7535\u673a\uff09\u7684\u72b6\u6001"))),(0,r.kt)("h2",{id:"\u4e91\u53f0\u6a21\u5757"},"\u4e91\u53f0\u6a21\u5757"),(0,r.kt)("p",null,"\u5728gimbal_plugins.h\u6587\u4ef6\u4e2d\uff0c\u521b\u5efa\u4e86\u4e91\u53f0\u6a21\u5757\u5bf9\u5e94\u7684\u63d2\u4ef6\u7c7bStandGimbal\u3002\u73b0\u5bf9\u8be5\u63d2\u4ef6\u7c7b\u7684\u4e3b\u8981\u6210\u5458\u548c\u8fd0\u52a8\u72b6\u6001\u8fdb\u884c\u8bf4\u660e\u3002"),(0,r.kt)("h3",{id:"1\u57fa\u672c\u6210\u5458"},"1\u3001\u57fa\u672c\u6210\u5458"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"state_\uff1a\u679a\u4e3e\u578b\u53d8\u91cf\uff0c\u542b3\u79cd\u53d6\u503c\uff08PASSIVE\uff0cRATE\uff0cTRACK\uff09\uff0c\u8868\u793a\u8fd0\u52a8\u72b6\u6001\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cmd",(0,r.kt)("em",{parentName:"p"},"sub"),"\uff1aROS\u8ba2\u9605\u5668\uff0c\u542f\u52a8init\u51fd\u6570\u540e\uff0c\u8ba2\u9605\u201c/Gimbal_cmd\u201d\u8bdd\u9898\u6240\u53d1\u5e03\u7684\u6d88\u606f\uff08GimbalCmd\uff0c\u4e91\u53f0\u7684\u8fd0\u52a8\u72b6\u6001\uff0cpitch\u8f74\u548cyaw\u8f74\u7684\u8fd0\u52a8\u901f\u7387\uff09\u3002"))),(0,r.kt)("h3",{id:"2\u4e91\u53f0\u72b6\u6001\u673a"},"2\u3001\u4e91\u53f0\u72b6\u6001\u673a"),(0,r.kt)("p",null,"\u5f53\u4e91\u53f0\u72b6\u6001\u5e7f\u64ad\u5668\u6240\u53d1\u5e03\u7684\u72b6\u6001\u6d88\u606f\u6539\u53d8\u65f6\uff0ccmd",(0,r.kt)("em",{parentName:"p"},"sub"),"\u63a5\u6536\u5230\u6d88\u606f\u540e\uff0c\u4f1a\u8fdb\u5165\u4e91\u53f0\u56de\u8c03\u51fd\u6570\uff0c\u6539\u53d8state__\u7684\u503c\uff0c\u6b64\u65f6\uff0c\u5728run\u51fd\u6570\u4e2d\uff0c\u4fbf\u4f1a\u542f\u52a8\u76f8\u5e94\u72b6\u6001\u6240\u5bf9\u5e94\u529f\u80fd\u7684\u51fd\u6570\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53state_\u7684\u503c\u4e3aPASSIVE\u65f6\uff0c\u6267\u884crun\u51fd\u6570\u540e\uff0c\u4f1a\u542f\u52a8passive\u51fd\u6570\uff0c\u6b64\u65f6\uff0c\u63a7\u5236yaw\u8f74\u548cpitch\u8f74\u7684\u7535\u673a\u90fd\u4f1a\u65ad\u7535\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53state_\u7684\u503c\u4e3aRATE\u65f6\uff0c\u6267\u884crun\u51fd\u6570\u540e\uff0c\u4f1a\u542f\u52a8rate\u51fd\u6570\uff0c\u6b64\u65f6\uff0cpos loop\u542f\u52a8\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53state_\u7684\u503c\u4e3aTRACK\u65f6\uff0c\u6267\u884crun\u51fd\u6570\u540e\uff0c\u4f1a\u542f\u52a8track\u51fd\u6570\uff0c\u6b64\u65f6\uff0c\u4e91\u53f0\u5de5\u4f5c\u5728\u8ddf\u8e2a\u6a21\u5f0f\u4e0b\u3002"))),(0,r.kt)("h2",{id:"\u53d1\u5c04\u673a\u6784"},"\u53d1\u5c04\u673a\u6784"),(0,r.kt)("p",null,"\u5728shooter_plugins.h\u6587\u4ef6\u4e2d\uff0c\u521b\u5efa\u4e86\u53d1\u5c04\u673a\u6784\u5bf9\u5e94\u7684\u63d2\u4ef6\u7c7bStandShooter\u3002\u73b0\u5bf9\u8be5\u63d2\u4ef6\u7c7b\u7684\u4e3b\u8981\u6210\u5458\u548c\u8fd0\u52a8\u72b6\u6001\u8fdb\u884c\u8bf4\u660e\u3002"),(0,r.kt)("h3",{id:"1\u57fa\u672c\u6210\u5458-1"},"1\u3001\u57fa\u672c\u6210\u5458"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"shoot\uff1a\u5bf9\u53d1\u5c04\u5f39\u4e38\u7684\u6570\u91cf\u548c\u53d1\u5c04\u9891\u7387\u8fdb\u884c\u8bbe\u7f6e\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"setSpeed\uff1a\u8bbe\u7f6e\u5f39\u4e38\u7684\u53d1\u5c04\u901f\u5ea6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"state_\uff1a\u679a\u4e3e\u578b\u53d8\u91cf\uff0c\u542b5\u79cd\u53d6\u503c\uff08PASSIVE\uff0cFEED\u3001READY\u3001PUSH\u3001BLOCK\uff09\uff0c\u8868\u793a\u8fd0\u52a8\u72b6\u6001\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cmd",(0,r.kt)("em",{parentName:"p"},"sub"),"\uff1aROS\u8ba2\u9605\u5668\uff0c\u542f\u52a8init\u51fd\u6570\u540e\uff0c\u8ba2\u9605\u201c/Shooter_cmd\u201d\u8bdd\u9898\u6240\u53d1\u5e03\u7684\u6d88\u606f\uff08ShootCmd\uff0c\u53d1\u5c04\u673a\u6784\u7684\u8fd0\u52a8\u72b6\u6001\uff0c\u5f39\u4e38\u53d1\u5c04\u6570\u91cf\uff0c\u901f\u5ea6\uff0c\u9891\u7387\uff09\u3002"))),(0,r.kt)("h3",{id:"2\u53d1\u5c04\u673a\u6784\u72b6\u6001\u673a\u8bf4\u660e"},"2\u3001\u53d1\u5c04\u673a\u6784\u72b6\u6001\u673a\u8bf4\u660e"),(0,r.kt)("p",null,"\u5f53\u53d1\u5c04\u673a\u6784\u72b6\u6001\u5e7f\u64ad\u5668\u6240\u53d1\u5e03\u7684\u72b6\u6001\u6d88\u606f\u6539\u53d8\u65f6\uff0ccmd",(0,r.kt)("em",{parentName:"p"},"sub"),"\u63a5\u6536\u5230\u6d88\u606f\u540e\uff0c\u4f1a\u8fdb\u5165\u53d1\u5c04\u673a\u6784\u7684\u56de\u8c03\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u82e5\u6240\u53d1\u5e03\u7684\u6d88\u606f\u4e2d\u7684mode\u4e3a0\uff0c\u5219state_\u7684\u503c\u4fee\u6539\u4e3aPASSIVE\u3002"),(0,r.kt)("p",null,"\u5426\u5219\uff0c\u82e5\u5f53\u524d\u7684state_\u503c\u4e3aPASSIVE\uff0c\u5219\u5c06\u5176\u6539\u4e3aFEED\u3002"),(0,r.kt)("p",null,"\u63a5\u7740\uff0c\u6839\u636e\u53d1\u5e03\u7684\u53d1\u5c04\u901f\u5ea6\uff08\u4f5c\u4e3a\u51fd\u6570\u7684\u8f93\u5165\uff09\u542f\u52a8setSpeed\u51fd\u6570\uff0c\u4ee5\u53ca\u6839\u636e\u6240\u53d1\u5e03\u7684\u5f39\u4e38\u6570\u91cf\u548c\u53d1\u5c04\u9891\u7387\uff08\u4f5c\u4e3a\u51fd\u6570\u7684\u8f93\u5165\uff09\uff0c\u542f\u52a8shoot\u51fd\u6570\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53state_\u7684\u503c\u4e3aPASSIVE\u65f6\uff0c\u6267\u884crun\u51fd\u6570\u540e\uff0c\u7535\u673a\u65ad\u7535\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53state_\u7684\u503c\u4e3aFEED\u65f6\uff0c\u6267\u884crun\u51fd\u6570\u540e\uff0c\u8fdb\u884c\u8865\u5f39\u64cd\u4f5c\u3002\u6253\u5f00\u62e8\u5f39\u8f6e\u7535\u673a\uff0c\u5c06\u5f39\u4e38\u8fd0\u8f93\u81f3\u53d1\u5c04\u53e3\u3002"),(0,r.kt)("p",{parentName:"li"},"\u82e5\u8fd0\u8f93\u8fc7\u7a0b\u4e2d\uff0c\u62e8\u5f39\u8f6e\u53d1\u5c04\u5835\u585e\uff0cstate_\u503c\u4f1a\u88ab\u4fee\u6539\u4e3aBLOCK\uff1b"),(0,r.kt)("p",{parentName:"li"},"\u5f53\u5f39\u4e38\u8fd0\u8f93\u81f3\u53d1\u5c04\u53e3\u524d\uff0c\u89e6\u78b0\u5230\u53d1\u5c04\u5f00\u5173\u65f6\uff0cstate_\u7684\u503c\u4f1a\u88ab\u4fee\u6539\u4e3aREADY\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53state_\u7684\u503c\u4e3aBLOCK\u65f6\uff0c\u8868\u793a\u62e8\u5f39\u8f6e\u5835\u585e\u7684\uff0c\u6267\u884crun\u51fd\u6570\u540e\uff0c\u62e8\u5f39\u8f6e\u4f1a\u56de\u62e8\u4e00\u6bb5\u65f6\u95f4\uff0c\u89e3\u51b3\u5835\u585e\u7684\u60c5\u51b5\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53state_\u7684\u503c\u4e3aREADY\u65f6\uff0c\u6267\u884crun\u51fd\u6570\u540e\uff0c\u4f1a\u505c\u6b62\u62e8\u5f39\u8f6e\u7535\u673a\uff0c\u542f\u52a8pos\u5faa\u73af\uff0c\u540c\u65f6\u5224\u65ad\u53ef\u53d1\u5c04\u7684\u5f39\u4e38\u6570\u91cf\u548c\u53d1\u5c04\u9891\u7387\u662f\u5426\u8fbe\u5230\u53ef\u8fdb\u884c\u53d1\u5c04\u64cd\u4f5c\u7684\u8981\u6c42\uff0c\u82e5\u662f\uff0c\u5219\u5c06state__\u7684\u503c\u8f6c\u53d8\u4e3aPUSH\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53state_\u7684\u503c\u4e3aPUSH\u65f6\uff0c\u6267\u884crun\u51fd\u6570\u540e\uff0c\u6469\u64e6\u8f6e\u8f6c\u52a8\uff0c\u5c06\u5f39\u4e38\u53d1\u5c04\u51fa\u53bb\u3002"))),(0,r.kt)("h2",{id:"gpio"},"Gpio"),(0,r.kt)("p",null,"\u5728\u8be5\u529f\u80fd\u5305\u4e0b\u7684Gpio\u6587\u4ef6\u5939\u4e0b\uff0c\u5b9a\u4e49\u4e86\u4e24\u4e2a\u7c7bUpboardGpio\u548cGpioManager\uff0c\u524d\u8005\u4e3a\u63d2\u4ef6\u7c7b\uff0c\u540e\u8005\u4e3a\u662f\u4e00\u4e2aGpio\u7ba1\u7406\u5668\uff0c\u4f5c\u4e3aUpboardGpio\u7684\u4e00\u4e2apraivate\u7c7b\u578b\u7684\u6210\u5458\u53d8\u91cf\u3002"),(0,r.kt)("p",null,"\u5728gpio_plugins.h\u6587\u4ef6\u4e2d\uff0c\u521b\u5efa\u4e86Gpio\u5bf9\u5e94\u7684\u63d2\u4ef6\u7c7bUpboardGpio\u3002\u73b0\u5bf9\u8be5\u63d2\u4ef6\u7c7b\u7684\u4e3b\u8981\u6210\u5458\u51fd\u6570\u8fdb\u884c\u8bf4\u660e\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"init\uff1a\u521d\u59cb\u5316Gpio\u7ba1\u7406\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},"readInput\uff1a\u8bfb\u53d6\u76f8\u5e94\u63a5\u53e3\u7684\u6570\u636e\uff0c\u5e76\u66f4\u65b0Gpio\u7ba1\u7406\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},"setOutput\uff1a\u51fd\u6570\u7684\u8f93\u5165\u4e3a\u5f15\u811a\u53f7\uff0c\u548c\u4e00\u4e2abool\u578b\u53d8\u91cfoutput\uff0c\u53ef\u6839\u636eoutput\u7684\u503c\u9009\u62e9\u662f\u5426\u5c06\u8be5\u5f15\u811a\u8bbe\u4e3a\u8f93\u51fa\u53e3\u3002"),(0,r.kt)("li",{parentName:"ul"},"setPWM\uff1a\u8bbe\u7f6e\u5bf9\u5e94\u5f15\u811a\u53f7\u7684PWM\u8f93\u51fa\u5360\u7a7a\u6bd4\u3002")),(0,r.kt)("h2",{id:"imu"},"IMU"),(0,r.kt)("p",null,"\u5728\u8be5\u529f\u80fd\u5305\u4e0b\u7684IMU\u6587\u4ef6\u5939\u4e0b\uff0c\u5b9a\u4e49\u4e863\u4e2a\u7c7bImu\uff0cHi22Imu\u3001Hi220\u3002\u5176\u4e2d\uff0cHi220\u4e3a\u63d2\u4ef6\u7c7b\uff0cImu\u4e3a\u57fa\u7c7b\uff0cHi220Imu\u7c7b\u662fImu\u529f\u80fd\u7684\u4e00\u4e2a\u96c6\u5408\uff0c\u4f5c\u4e3aHi220\u7684\u4e00\u4e2aprivate\u6210\u5458\u53d8\u91cf\u3002"),(0,r.kt)("p",null,"\u5728hi220.h\u4e2d\u5b9a\u4e49\u4e86Hi220Imu\u7c7b\u3002\u8be5\u7c7b\u7684\u4e00\u4e2a\u5b9e\u4f8b\u4f5c\u4e3a\u63d2\u4ef6\u7c7b\u7684\u4e00\u4e2a\u6210\u5458\u53d8\u91cf\uff08hi220",(0,r.kt)("em",{parentName:"p"},"imu"),"\uff09\uff0c\u96c6\u6210\u4e86\u8bfb\u53d6IMU\u76f8\u5173\u6570\u636e\u7684\u51fd\u6570\uff0c\u73b0\u5bf9\u8be5\u7c7b\u7684\u4e3b\u8981\u6210\u5458\u51fd\u6570\u8fdb\u884c\u8bf4\u660e\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"init\uff1a\u5f00\u542f\u5e76\u8bbe\u7f6e\u4e32\u53e3\u3002"),(0,r.kt)("li",{parentName:"ul"},"getId\uff1a\u83b7\u53d6\u7528\u6237ID\u3002"),(0,r.kt)("li",{parentName:"ul"},"run\uff1a\u8bfb\u53d6\u7f13\u51b2\u533a\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"getEular\uff1a\u5c06\u5f53\u524d\u6b27\u62c9\u89d2\u5750\u6807\u7cfb\u4e0b\u7684\u5750\u6807\u6570\u636e\u62f7\u8d1d\u5230\u6307\u5b9a\u53d8\u91cf\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"getQuat\uff1a\u5c06\u5f53\u524d\u56db\u5143\u7d20\u5750\u6807\u7cfb\u4e0b\u7684\u5750\u6807\u6570\u636e\u62f7\u8d1d\u5230\u6307\u5b9a\u53d8\u91cf\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"getAcc\uff1a\u5c06\u5f53\u524d\u52a0\u901f\u5ea6\u7684\u6570\u636e\u62f7\u8d1d\u5230\u6307\u5b9a\u53d8\u91cf\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"getOmega\uff1a\u5c06\u5f53\u524d\u89d2\u901f\u5ea6\u7684\u6570\u636e\u62f7\u8d1d\u5230\u6307\u5b9a\u53d8\u91cf\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"getImuData\uff1a\u5c06IMU\u4e2d\u7684\u76f8\u5173\u6570\u636e\u5199\u5165\u4e32\u53e3\u4e2d\u3002")),(0,r.kt)("p",null,"\u5728imu_plugins.h\u6587\u4ef6\u4e2d\uff0c\u521b\u5efa\u4e86IMU\u6a21\u5757\u5bf9\u5e94\u7684\u63d2\u4ef6\u7c7bHi220\u3002\u73b0\u5bf9\u8be5\u63d2\u4ef6\u7c7b\u7684\u4e3b\u8981\u6210\u5458\u51fd\u6570\u8fdb\u884c\u8bf4\u660e\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"init\uff1a\u542f\u52a8hi220_imu\u7684init\u6210\u5458\u51fd\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},"update\uff1a\u542f\u52a8hi220",(0,r.kt)("em",{parentName:"li"},"imu"),"\u7684run\u6210\u5458\u51fd\u6570\uff0c\u5e76\u8bfb\u53d6IMU\u7684\u76f8\u5173\u6570\u636e\uff0c\u5199\u5165\u4e32\u53e3\u4e2d\uff0c\u6700\u540e\u8fdb\u884codom\u5750\u6807\u7cfb\u8f6cbase\u5750\u6807\u7cfb\u64cd\u4f5c\u5e76\u8bbe\u7f6e\u5750\u6807\u53d8\u6362\u3002")))}c.isMDXComponent=!0}}]);