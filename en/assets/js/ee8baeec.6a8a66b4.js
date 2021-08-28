"use strict";(self.webpackChunkrm_controls_tutorial=self.webpackChunkrm_controls_tutorial||[]).push([[350],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(n),k=r,d=m["".concat(o,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(d,p(p({ref:t},s),{},{components:n})):a.createElement(d,p({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<l;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8469:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),p=["components"],c={},o="\u4ee3\u7801\u90e8\u7f72",i={unversionedId:"quick_start/deploy",id:"quick_start/deploy",isDocsHomePage:!1,title:"\u4ee3\u7801\u90e8\u7f72",description:"\u5feb\u901f\u6d4b\u8bd5",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/quick_start/deploy.md",sourceDirName:"quick_start",slug:"/quick_start/deploy",permalink:"/rm-controls-docs/en/docs/quick_start/deploy",editUrl:"https://github.com/rm-controls/rm-controls-docs/current_docs/quick_start/deploy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/rm-controls-docs/en/docs/quick_start/code_configuration"},next:{title:"installation",permalink:"/rm-controls-docs/en/docs/quick_start/installation"}},s=[{value:"\u5feb\u901f\u6d4b\u8bd5",id:"\u5feb\u901f\u6d4b\u8bd5",children:[{value:"\u6d4b\u8bd5can",id:"\u6d4b\u8bd5can",children:[]},{value:"\u4fee\u6539can\u7269\u7406\u5730\u5740",id:"\u4fee\u6539can\u7269\u7406\u5730\u5740",children:[]},{value:"\u8fd0\u884c\u4ee3\u7801",id:"\u8fd0\u884c\u4ee3\u7801",children:[]}]},{value:"\u5b9e\u673a\u90e8\u7f72",id:"\u5b9e\u673a\u90e8\u7f72",children:[]}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4ee3\u7801\u90e8\u7f72"},"\u4ee3\u7801\u90e8\u7f72"),(0,l.kt)("h2",{id:"\u5feb\u901f\u6d4b\u8bd5"},"\u5feb\u901f\u6d4b\u8bd5"),(0,l.kt)("h3",{id:"\u6d4b\u8bd5can"},"\u6d4b\u8bd5can"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u521d\u59cb\u5316can0\u548ccan1"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ip link set can0 up type can bitrate 1000000\nsudo ip link set can1 up type can bitrate 1000000\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u76d1\u542ccan\u4e0a\u7684\u6570\u636e"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install can-utils\ncandump can0\n")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"[!Tip]","\n\u6b64\u65f6\u8f6c\u52a8\u7535\u673a\u53ef\u76d1\u542c\u5230\u7535\u673a\u53c2\u6570\u53d8\u5316"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u53d1\u9001\u6570\u636e\u9a71\u52a8\u7535\u673a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cansend can0 200#05000000000000000\n")),(0,l.kt)("p",{parentName:"li"},"\u5177\u4f53\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://rm-static.djicdn.com/tem/17348/RoboMaster%20C620%E6%97%A0%E5%88%B7%E7%94%B5%E6%9C%BA%E8%B0%83%E9%80%9F%E5%99%A8%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E%EF%BC%88%E4%B8%AD%E8%8B%B1%E6%97%A5%EF%BC%89V1.01.pdf"},"\u5b98\u65b9\u6587\u6863")))),(0,l.kt)("h3",{id:"\u4fee\u6539can\u7269\u7406\u5730\u5740"},"\u4fee\u6539can\u7269\u7406\u5730\u5740"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"pc\u8fde\u63a5usb2xxx")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u8be2can0\u548ccan1\u7269\u7406\u5730\u5740"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls /sys/class/tty/ttyUSB* -l\n")),(0,l.kt)("p",{parentName:"li"},"\u5f97\u5230\u5982\u4e0b\uff1a"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/11/7f51b4bda7bb8037.png",alt:null})),(0,l.kt)("p",{parentName:"li"},"\u5176\u4e2d\uff0c'3-2.3:1.0'\u4e3acan0\u7684\u7269\u7406\u5730\u5740")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fee\u6539can0\u548ccan1\u7269\u7406\u5730\u5740"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd /home/chenzheng/RM-Software/rm_ws/src/rm_bringup/scripts/udev/\nvim rm.rules\n")),(0,l.kt)("p",{parentName:"li"},'\u4fee\u6539KERNELS=="${can\u7269\u7406\u5730\u5740}"'),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./create_udev_rules.sh\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u770b\u662f\u5426\u6620\u5c04\u6210\u529f"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls /dev/ | grep usb\n")),(0,l.kt)("p",{parentName:"li"},"\u5b58\u5728usbDbus\u548cusbImu\u5373\u6620\u5c04\u6210\u529f"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"[!Tip]","\n\u82e5\u627e\u4e0d\u5230\uff0c\u91cd\u542f\uff1b\u8fd8\u662f\u6ca1\u6709\uff0c\u6362usb\u53e3\u91cd\u65b0\u6267\u884c\u4e0a\u8ff0\u6b65\u9aa4")))),(0,l.kt)("h3",{id:"\u8fd0\u884c\u4ee3\u7801"},"\u8fd0\u884c\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"roslaunch rm_bringup standard.launch\n")),(0,l.kt)("p",null,"\u5982\u679c\u51fa\u73b0\u5982\u4e0b\u9519\u8bef\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/11/06ff5fa7f0ca50a2.png",alt:null})),(0,l.kt)("p",null,"\u9700\u8981\u8bbe\u7f6e\u8d85\u7ea7\u7528\u6237\u514d\u5bc6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo visudo\n")),(0,l.kt)("p",null,"\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/11/912617950455359d.png",alt:null})),(0,l.kt)("p",null,"\u91cd\u65b0\u8fd0\u884c\u4ee3\u7801"),(0,l.kt)("h2",{id:"\u5b9e\u673a\u90e8\u7f72"},"\u5b9e\u673a\u90e8\u7f72"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u5b9e\u65f6\u5185\u6838\uff0c\u53c2\u8003\u6b64",(0,l.kt)("a",{parentName:"p",href:"dev_guide/rt_kernel.md"},"\u6587\u6863"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u5f00\u673a\u81ea\u52a8\u8fd0\u884c\u4ee3\u7801\u811a\u672c"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd /home/chenzheng/RM-Software/rm_ws/src/rm_bringup/scripts/auto_start/\n./create_rm_start_service.sh\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8c03\u8bd5"),(0,l.kt)("p",{parentName:"li"},"\u53c2\u8003\u5feb\u901f\u6d4b\u8bd5"))))}m.isMDXComponent=!0}}]);