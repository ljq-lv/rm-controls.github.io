"use strict";(self.webpackChunkrm_controls_tutorial=self.webpackChunkrm_controls_tutorial||[]).push([[615],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6959:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={},c="Prerequisite",l={unversionedId:"overview/prerequisite",id:"overview/prerequisite",isDocsHomePage:!1,title:"Prerequisite",description:"\u4e0b\u9762\u9610\u8ff0 ros-control \u5728\u5b9e\u7269\u4e2d\u548c Gazebo \u4eff\u771f\u4e2d\u7684\u76f8\u5173\u673a\u5236\u3002",source:"@site/current_docs/overview/prerequisite.md",sourceDirName:"overview",slug:"/overview/prerequisite",permalink:"/rm-controls-docs/en/docs/overview/prerequisite",editUrl:"https://github.com/rm-controls/rm-controls-docs/current_docs/overview/prerequisite.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Why rm-controls\uff1f",permalink:"/rm-controls-docs/en/docs/overview/intro"},next:{title:"hardware_specifications",permalink:"/rm-controls-docs/en/docs/overview/hardware_specifications"}},p=[{value:"ros-control \u4e0e\u771f\u5b9e\u786c\u4ef6",id:"ros-control-\u4e0e\u771f\u5b9e\u786c\u4ef6",children:[{value:"\u786c\u4ef6\u63a5\u53e3",id:"\u786c\u4ef6\u63a5\u53e3",children:[]},{value:"Transmissions",id:"transmissions",children:[]}]},{value:"ros-control \u4e0e Gazebo",id:"ros-control-\u4e0e-gazebo",children:[]}],u={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("p",null,"\u4e0b\u9762\u9610\u8ff0 ros-control \u5728\u5b9e\u7269\u4e2d\u548c Gazebo \u4eff\u771f\u4e2d\u7684\u76f8\u5173\u673a\u5236\u3002"),(0,i.kt)("h2",{id:"ros-control-\u4e0e\u771f\u5b9e\u786c\u4ef6"},"ros-control \u4e0e\u771f\u5b9e\u786c\u4ef6"),(0,i.kt)("p",null,"\u5982\u4e0b\u56fe\uff0cros-control \u63d0\u4f9b\u8fd9\u6837\u7684\u673a\u5236\uff1a \u6267\u884c\u5668\uff08Actuator\uff09\u7684\u7f16\u7801\u5668\u7b49\u4f20\u611f\u5668\u6570\u636e\u88ab\u8bfb\u53d6\u540e\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"http://wiki.ros.org/transmission_interface"},(0,i.kt)("inlineCode",{parentName:"a"},"TransmissionsInterface"))," \u6620\u5c04\u6210\u5173\u8282 (Joint) \u7b49\u673a\u5668\u4eba\u72b6\u6001\uff0c\u5c06\u8fd9\u4e9b\u72b6\u6001\u63a5\u53e3\u63d0\u4f9b\u7ed9\u63a7\u5236\u5668\uff1b\u7ecf\u8fc7\u63a7\u5236\u5668\u8ba1\u7b97\u540e\u5f97\u5230\u5173\u8282\u6307\u4ee4\u7ecf\u8fc7\u9650\u5236\uff0c\u518d\u6620\u5c04\u4e3a\u7535\u673a\u7684\u6307\u4ee4\uff0c\u53d1\u9001\u7ed9\u7535\u673a\u3002\u63a7\u5236\u5668\u7ba1\u7406\u5668\u53ef\u4ee5\u5b9e\u65f6\u52a0\u8f7d\u3001\u5f00\u59cb\u548c\u505c\u6b62\u5404\u79cd\u63a7\u5236\u5668\uff08\u4ee5\u52a8\u6001\u5e93\u7684\u5f62\u5f0f\u7f16\u8bd1\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://wiki.ros.org/ros_control?action=AttachFile&do=get&target=gazebo_ros_control.png",alt:"ros_control \u6846\u56fe"})),(0,i.kt)("h3",{id:"\u786c\u4ef6\u63a5\u53e3"},"\u786c\u4ef6\u63a5\u53e3"),(0,i.kt)("p",null,"\u63d0\u4f9b\u7ed9\u63a7\u5236\u5668\u5e38\u89c1\u786c\u4ef6\u63a5\u53e3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Joint Command Interface - \u5173\u8282\u6307\u4ee4\u53d1\u9001\u63a5\u53e3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Effort Joint Interface - \u7528\u4e8e\u5411\u6307\u4ee4\u662f\u529b\u77e9/\u529b\u7684\u6267\u884c\u5668 (\u5982: RoboMaster 3508) \u5bf9\u5e94\u7684\u5173\u8282\u53d1\u9001\u6307\u4ee4"),(0,i.kt)("li",{parentName:"ul"},"Velocity Joint Interface  - \u7528\u4e8e\u5411\u6307\u4ee4\u662f\u901f\u5ea6\u6267\u884c\u5668 (\u5982: \u90e8\u5206\u8235\u673a) \u5bf9\u5e94\u7684\u5173\u8282"),(0,i.kt)("li",{parentName:"ul"},"Position Joint Interface  - \u7528\u4e8e\u5411\u6307\u4ee4\u662f\u4f4d\u7f6e\u6267\u884c\u5668 (\u5982: \u5927\u90e8\u5206\u8235\u673a) \u5bf9\u5e94\u7684\u5173\u8282"))),(0,i.kt)("li",{parentName:"ul"},"Joint State Interfaces - \u5173\u8282\u72b6\u6001\u83b7\u53d6\u63a5\u53e3\uff0c\u7528\u4e8e\u83b7\u53d6\u5173\u8282\u7684\u4f4d\u7f6e\u3001\u901f\u5ea6\u548c\u4f5c\u7528\u529b\uff08\u529b\u6216\u626d\u77e9\uff09"),(0,i.kt)("li",{parentName:"ul"},"Actuator State Interfaces - \u6267\u884c\u5668\u72b6\u6001\u83b7\u53d6\u63a5\u53e3\uff0c\u7528\u4e8e\u83b7\u53d6\u6267\u884c\u5668\u7684\u4f4d\u7f6e\u3001\u901f\u5ea6\u548c\u4f5c\u7528\u529b\uff08\u529b\u6216\u626d\u77e9\uff09"),(0,i.kt)("li",{parentName:"ul"},"Actuator Command Interfaces - \u6267\u884c\u5668\u6307\u4ee4\u53d1\u9001\u63a5\u53e3\uff0c\u548c\u5173\u8282\u6307\u4ee4\u63a5\u53e3\u7c7b\u4f3c"),(0,i.kt)("li",{parentName:"ul"},"Force-torque sensor Interface - \u529b-\u529b\u77e9\u4f20\u611f\u5668\u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},"IMU sensor Interface - IMU \u4f20\u611f\u5668\u63a5\u53e3")),(0,i.kt)("h3",{id:"transmissions"},"Transmissions"),(0,i.kt)("p",null,"Transmissions \u662f\u5b9e\u9645\u673a\u5668\u4eba\u6267\u884c\u5668\u4e8e\u5173\u8282\u7684\u72b6\u6001\u548c\u6307\u4ee4\u6620\u5c04\uff0c\u6709\u7b80\u5355\u51cf\u901f\u6bd4\uff08\u6539\u53d8\u6b63\u8d1f\u53ef\u4ee5\u5c06\u7535\u673a\u53cd\u5411\uff09\u3001\u5dee\u901f\u5668\uff08\u5e38\u89c1\u4e8e\u673a\u68b0\u81c2\u672b\u7aef\u4e24\u4e2a\u5173\u8282\uff09\u3001\u53cc\u6267\u884c\u5668\uff08\u4e24\u4e2a\u7535\u673a\u5e26\u52a8\u4e00\u4e2a\u5173\u8282\uff09\u3002\u4e0b\u56fe\u5c55\u793a\u4e86\u5dee\u5206 Transmissions \u7684\u7b80\u56fe\u548c\u8ba1\u7b97\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u5dee\u5206 transmission",src:r(8203).Z})," "),(0,i.kt)("p",null,"\u4e0b\u5217\u4ee3\u7801\u4e3a\u6b65\u5175\u673a\u5668\u4eba URDF \u4e2d\u4e91\u53f0 pitch \u8f74\u6267\u884c\u5668\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},"pitch_joint_motor")," \u4e0e\u4e91\u53f0 pitch \u5173\u8282 ",(0,i.kt)("inlineCode",{parentName:"p"},"pitch_joint")," \u7684 ",(0,i.kt)("a",{parentName:"p",href:"http://docs.ros.org/en/melodic/api/transmission_interface/html/c++/classtransmission__interface_1_1SimpleTransmission.html"},(0,i.kt)("inlineCode",{parentName:"a"},"simple_transmission"))," \uff0c\u7531\u4e8e pitch \u8f74\u662f 6020 \u7535\u673a\u76f4\u9a71\uff0c\u51cf\u901f\u6bd4\u4e3a 1.0\uff0c\u53c8\u5b9e\u9645\u7535\u673a\u8f6c\u5411\u4e8e\u5173\u8282\u5b9a\u4e49\u7684\u8f6c\u5411\u76f8\u53cd\uff0c\u53d6\u51cf\u901f\u6bd4\u4e3a -1.0\uff0c\u5728\u6821\u51c6\u65f6\u5b9e\u6d4b\u5f97\u504f\u79fb\u4e3a 1.559rad\u3002\u6709\u4e86\u8fd9\u4e00\u4e2a\u7684\u6620\u5c04\uff0c\u4e91\u53f0\u63a7\u5236\u5668\u53ea\u4f7f\u7528\u5173\u8282\u72b6\u6001\u4e0d\u9700\u8981\u8003\u8651\u4e0d\u540c\u673a\u5668\u4eba\u7535\u673a\u5b89\u88c5\u4f4d\u7f6e\u3001\u65b9\u5411\u548c\u521d\u59cb\u503c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<transmission name="trans_pitch_joint">\n    <type>transmission_interface/SimpleTransmission</type>\n    <actuator name="pitch_joint_motor">\n        <mechanicalReduction>-1</mechanicalReduction>\n    </actuator>\n    <joint name="pitch_joint">\n        <offset>1.559</offset>\n        <hardwareInterface>hardware_interface/EffortJointInterface</hardwareInterface>\n    </joint>\n</transmission>\n')),(0,i.kt)("h2",{id:"ros-control-\u4e0e-gazebo"},"ros-control \u4e0e Gazebo"),(0,i.kt)("p",null,"\u5f97\u76ca\u4e8e\u4e0a\u8ff0\u7684\u673a\u5236\uff0c\u63a7\u5236\u5668\u53ef\u4ee5\u88ab\u52a0\u8f7d\u5230\u786c\u4ef6\u63a5\u53e3\u4e0a\uff0c\u4e5f\u53ef\u4ee5\u88ab\u52a0\u8f7d\u5230Gazebo\u6a21\u62df\u5668\u4e2d, \u5982\u4e0b\u56fe\u6240\u793a\u3002\u503c\u5f97\u4e00\u63d0\u7684\u662f\u5b9e\u8f66\u786c\u4ef6\u548c\u4eff\u771f\u7528\u7684\u63a7\u5236\u5668\u90fd\u662f\u540c\u4e00\u4efd\u4ee3\u7801\uff0c\u4e0d\u5b58\u5728\u79fb\u690d\u6216\u91cd\u65b0\u7f16\u8bd1\u7684\u8fc7\u7a0b\uff0c\u751a\u81f3\u4f7f\u7528\u7684\u662f\u540c\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\uff08\u7531\u670d\u52a1\u5668CI\u7f16\u8bd1\u6d4b\u8bd5\u5e76\u53d1\u5e03\u5230apt\u6e90\u5e76\u5b89\u88c5\uff09\u3002\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/osrf/gazebo_tutorials/raw/master/ros_control/Gazebo_ros_transmission.png",alt:"Gazebo_ros_transmission"})))}m.isMDXComponent=!0},8203:function(e,t,r){t.Z=r.p+"assets/images/transmission-d67d944d41e85f85542912564165b444.png"}}]);