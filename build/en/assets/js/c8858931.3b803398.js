/*! For license information please see c8858931.3b803398.js.LICENSE.txt */
(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[15707],{91262:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var s=a(67294),n=a(72389);function r(e){let{children:t,fallback:a}=e;return(0,n.Z)()?s.createElement(s.Fragment,null,t?.()):a??null}},35138:(e,t,a)=>{"use strict";a.d(t,{$Q:()=>m,zx:()=>o,$_:()=>E,JO:()=>c,iR:()=>g});var s=a(67294),n=a(94184),r=a.n(n),i=a(81876);const l={type:"primary",link:"",target:"_self"},o=function(e){return void 0===e&&(e=l),s.createElement("a",{className:r()({button:!0,[`button-${e.type}`]:!0}),target:e.target||"_self",href:(0,i.Rg)(e.link,e.language)},e.children||null)},c=e=>{const{type:t}=e;return s.createElement("i",{className:r()({"docsite-icon":!0,[`docsite-icon-${t}`]:!0})})},m=e=>{const{text:t,img:a}=e,n=r()({bar:!0});return s.createElement("div",{className:n},s.createElement("div",{className:"bar-body"},s.createElement("img",{src:(0,i.Rg)(a),className:"front-img"}),s.createElement("span",null,t),s.createElement("img",{src:(0,i.Rg)(a),className:"back-img"})))};var d=a(73935);class u extends s.Component{constructor(e){super(e),this.container=null,this.state={screenIndex:0,visibleNum:1}}componentDidMount(){this.throttleAdjust=(0,i.P2)((()=>{this.setState({visibleNum:this.getVisibleNum()})}),200),window?.addEventListener?.("resize",this.throttleAdjust),this.setState({visibleNum:this.getVisibleNum()})}componentWillUnmount(){window?.removeEventListener?.("resize",this.throttleAdjust)}getVisibleNum=()=>{let e=1;const t=this.container?.getBoundingClientRect().width,a=this.sliderItemChild0?.getBoundingClientRect?this.sliderItemChild0?.getBoundingClientRect().width:d.findDOMNode(this.sliderItemChild0)?.getBoundingClientRect().width;return t&&a&&(e=Math.floor(t/a)),e||1};getListWidth=()=>{let e=0;const{children:t}=this.props,{visibleNum:a}=this.state,n=s.Children.count(t),r=Math.ceil(n/a);if(this.container){const t=this.container?.getBoundingClientRect().width;e=t*r}return e};changeScreen=e=>{const{screenIndex:t}=this.state;e!==t&&this.setState({screenIndex:e})};renderSliderList=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:a}=this.state,n=[],r=s.Children.count(e),i=Math.ceil(r/a);for(let s=0;s<i;s++)n.push(Array.from(e).slice(s*a,(s+1)*a));return s.createElement("div",{className:"slider-list",style:{transform:`translateX(-${t*(this.container&&this.container?.getBoundingClientRect().width||0)}px)`,transition:"transform 500ms ease",width:this.getListWidth()}},n.map(((e,t)=>s.createElement("div",{className:"slider-screen",style:{width:this.container&&this.container?.getBoundingClientRect().width||0},key:t,ref:e=>{this[`sliderScreen${t}`]=e}},e.map(((e,n)=>s.createElement("div",{className:"slider-item",key:n},s.cloneElement(e,{ref:e=>{this[`sliderItemChild${t*a+n}`]=e}}))))))))};renderControl=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:a}=this.state,n=s.Children.count(e),i=Math.ceil(n/a),l=[];for(let o=0;o<i;o++)l.push(s.createElement("span",{key:o,className:r()({"slider-control-item":!0,"slider-control-item-active":o===t}),onClick:this.changeScreen.bind(this,o)}));return s.createElement("div",{className:"slider-control"},l)};render(){return s.createElement("div",{className:"slider",ref:e=>{this.container=e}},this.renderSliderList(),this.renderControl())}}const g=u;s.Component;var h=a(95999),p=a(52263);const f={vision:{title:(0,h.I)({id:"homepage.footerVersionTitle",message:"\u613f\u666f"}),content:(0,h.I)({id:"homepage.footerVersionContent",message:"Seata \u662f\u4e00\u6b3e\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002"})},documentation:{title:(0,h.I)({id:"homepage.footerDocTitle",message:"\u6587\u6863"}),list:[{text:(0,h.I)({id:"homepage.footerDocListText1",message:"Seata \u662f\u4ec0\u4e48\uff1f"}),link:"/docs/overview/what-is-seata",target:""},{text:(0,h.I)({id:"homepage.footerDocListText2",message:"\u5feb\u901f\u5f00\u59cb"}),link:"/docs/user/quickstart",target:""},{text:(0,h.I)({id:"homepage.footerDocListText3",message:"\u62a5\u544a\u6587\u6863\u95ee\u9898"}),link:"https://github.com/seata/seata.github.io/issues/new",target:"_blank"},{text:(0,h.I)({id:"homepage.footerDocListText4",message:"\u5728Github\u4e0a\u7f16\u8f91\u6b64\u6587\u6863"}),link:"https://github.com/seata/seata.github.io",target:"_blank"}]},resources:{title:(0,h.I)({id:"homepage.footerResourcesTitle",message:"\u8d44\u6e90"}),list:[{text:(0,h.I)({id:"homepage.footerResourcesListText1",message:"\u535a\u5ba2"}),link:"/blog",target:""},{text:(0,h.I)({id:"homepage.footerResourcesListText2",message:"\u793e\u533a"}),link:"/community",target:""}]},copyright:`Copyright \xa9 ${(new Date).getFullYear()} Seata`},E=e=>{const{logo:t}=e,{i18n:a}=(0,p.Z)(),n=a.currentLocale;return s.createElement("footer",{className:"footer-container"},s.createElement("div",{className:"footer-body"},s.createElement("img",{style:{marginTop:"4px",maxWidth:"120px",height:"auto"},src:t}),s.createElement("br",null),s.createElement("br",null),s.createElement("div",{className:"cols-container"},s.createElement("div",{className:"col col-12"},s.createElement("h3",null,f.vision.title),s.createElement("p",null,f.vision.content)),s.createElement("div",{className:"col col-6"},s.createElement("dl",null,s.createElement("dt",null,f.documentation.title),f.documentation.list.map(((e,t)=>s.createElement("dd",{key:t},"http"===e.link?.substr(0,4)&&s.createElement("a",{href:e.link,target:e.target||"_self"},e.text),"http"!==e.link?.substr(0,4)&&s.createElement("a",{href:`/${n}${e.link}`,target:e.target||"_self"},e.text)))))),s.createElement("div",{className:"col col-6"},s.createElement("dl",null,s.createElement("dt",null,f.resources.title),f.resources.list.map(((e,t)=>s.createElement("dd",{key:t},s.createElement("a",{href:`/${n}${e.link}`,target:e.target||"_self"},e.text))))))),s.createElement("div",{className:"copyright"},s.createElement("span",null,f.copyright))))}},68726:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var s=a(67294),n=a(95999),r=a(35138),i=a(91262);const l={brandName:"Seata",briefIntroduction:(0,n.I)({id:"homepage.briefIntroduction",message:"Seata \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u81f4\u529b\u4e8e\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e0b\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u7b80\u5355\u6613\u7528\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u670d\u52a1\u3002"}),buttons:[{text:(0,n.I)({id:"homepage.quickstartButton",message:"\u5feb\u901f\u5165\u95e8"}),link:"/docs/user/quickstart",type:"normal"},{text:(0,n.I)({id:"homepage.userregistrationButton",message:"\u7528\u6237\u767b\u8bb0"}),link:"https://github.com/seata/seata/issues/1246",type:"normal",target:"_blank"},{text:"GitHub-Java",link:"https://github.com/seata/seata",type:"normal",target:"_blank"},{text:"GitHub-Golang",link:"https://github.com/seata/seata-go",type:"normal",target:"_blank"},{text:"Docker Image",link:"https://hub.docker.com/repository/docker/seataio/seata-server/tags?page=1&ordering=last_updated",type:"normal",target:"_blank"}]},o=e=>{let{language:t}=e;const[a,n]=s.useState({starCount:"",forkCount:""}),[o,c]=s.useState({version:"v1.7.1",url:"https://github.com/seata/seata/releases/tag/v1.7.1",date:"2023/9/5"});return s.useEffect((()=>{fetch("//api.github.com/repos/seata/seata").then((e=>e.json())).then((e=>{n({starCount:`${e.stargazers_count}`,forkCount:`${e.forks_count}`})})),fetch("https://api.github.com/repos/seata/seata/releases/latest").then((e=>e.json())).then((e=>{c({version:e.name,url:e.html_url,date:new Date(e.published_at).toLocaleDateString()})}))}),[]),s.createElement(i.Z,null,(()=>s.createElement("section",{className:"top-section"},s.createElement("div",{className:"top-body"},s.createElement("div",{className:"vertical-middle"},s.createElement("div",{className:"product-name"},s.createElement("h2",null,l.brandName)),s.createElement("p",{className:"product-desc"},l.briefIntroduction),s.createElement("div",{className:"button-area"},l.buttons.map((e=>s.createElement(r.zx,{type:e.type,key:e.text,link:e.link,target:e.target,language:t},e.text)))),s.createElement("div",{className:"github-buttons"},s.createElement("a",{href:"https://github.com/seata/seata",target:"_blank",rel:"noopener noreferrer"},s.createElement("div",{className:"star"},s.createElement("img",{src:"https://img.alicdn.com/tfs/TB1FlB1JwHqK1RjSZFPXXcwapXa-32-32.png"}),s.createElement("span",{className:"type"},"Star"),s.createElement("span",{className:"line"}),s.createElement("span",{className:"count"},a.starCount))),s.createElement("a",{href:"https://github.com/seata/seata/fork",target:"_blank",rel:"noopener noreferrer"},s.createElement("div",{className:"fork"},s.createElement("img",{src:"https://img.alicdn.com/tfs/TB1zbxSJwDqK1RjSZSyXXaxEVXa-32-32.png"}),s.createElement("span",{className:"type"},"Fork"),s.createElement("span",{className:"line"}),s.createElement("span",{className:"count"},a.forkCount)))),s.createElement("div",{className:"version-note"},s.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:o.url},"Release Note of ",o.version)),s.createElement("div",{className:"release-date"},"Released on ",o.date)),s.createElement("div",{className:"animation"},s.createElement("img",{className:"img1",src:"//img.alicdn.com/tfs/TB1evnpJhnaK1RjSZFBXXcW7VXa-702-312.png"}),s.createElement("img",{className:"img2",src:"//img.alicdn.com/tfs/TB1iau9JcbpK1RjSZFyXXX_qFXa-914-1156.png"}),s.createElement("div",{className:"outer-circle"}),s.createElement("div",{className:"rotate-circle"},s.createElement("svg",{viewBox:"0 0 404 404",xmlns:"http://www.w3.org/2000/svg"},s.createElement("defs",null,s.createElement("linearGradient",{id:"linear",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},s.createElement("stop",{offset:"0%",stopColor:"rgba(17, 186, 250, 1)"}),s.createElement("stop",{offset:"50%",stopColor:"rgba(17, 186, 250, 0.1)"}),s.createElement("stop",{offset:"50%",stopColor:"rgba(17, 186, 250, 1)"}),s.createElement("stop",{offset:"100%",stopColor:"rgba(17, 186, 250, 0.1)"}))),s.createElement("circle",{cx:"202",cy:"202",r:"200",fill:"rgba(0, 0, 0, 0)",stroke:"url(#linear)",strokeWidth:"4"}))),s.createElement("img",{className:"img3",src:"//img.alicdn.com/tfs/TB1EBu.JgHqK1RjSZJnXXbNLpXa-914-1156.png"}),s.createElement("img",{className:"img4",src:"//img.alicdn.com/tfs/TB115i2JmzqK1RjSZPxXXc4tVXa-186-78.png"}),s.createElement("img",{className:"img5",src:"//img.alicdn.com/tfs/TB115i2JmzqK1RjSZPxXXc4tVXa-186-78.png"}))))))}},81876:(e,t,a)=>{"use strict";a.d(t,{P2:()=>s,Rg:()=>n});const s=(e,t)=>{let a=null;return function(){for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];const i=this;clearTimeout(a),a=setTimeout((()=>{e.apply(i,n)}),t)}},n=(e,t)=>`${e}`.length>1&&/^\/[^/]/.test(`${e}`)?`${window.rootPath||""}${"default"===t?"/zh-cn":`/${t}`}${e}`:e},94184:(e,t)=>{var a;!function(){"use strict";var s={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var i=n.apply(null,a);i&&e.push(i)}}else if("object"===r){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var l in a)s.call(a,l)&&a[l]&&e.push(l)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()}}]);