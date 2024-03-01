"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[20460],{15640:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var t=i(74848),r=i(28453);const s={title:"\u5982\u4f55\u5728seata\u4e2d\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",keywords:["Seata","unit test","junit","mockito","assertj"],description:"\u8fd9\u7bc7\u6587\u7ae0\u4e3b\u8981\u4ecb\u7ecd\u4e86Seata\u4e2d\u5df2\u7ecf\u4f7f\u7528\u7684\u6d4b\u8bd5\u7528\u4f8b\u76f8\u5173\u6846\u67b6\uff0c\u4ee5\u53ca\u793e\u533a\u5efa\u8bae\u5f00\u53d1\u8005\u5982\u4f55\u66f4\u597d\u7684\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",author:"\u6c6a\u5fe0\u7965 - Apache Seata committer,trustdecision \u6280\u672f\u4e13\u5bb6",date:new Date("2024-02-20T00:00:00.000Z")},c=void 0,d={permalink:"/zh-cn/blog/how-to-write-unit-tests",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-blog/how-to-write-unit-tests.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/how-to-write-unit-tests.md",title:"\u5982\u4f55\u5728seata\u4e2d\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",description:"\u8fd9\u7bc7\u6587\u7ae0\u4e3b\u8981\u4ecb\u7ecd\u4e86Seata\u4e2d\u5df2\u7ecf\u4f7f\u7528\u7684\u6d4b\u8bd5\u7528\u4f8b\u76f8\u5173\u6846\u67b6\uff0c\u4ee5\u53ca\u793e\u533a\u5efa\u8bae\u5f00\u53d1\u8005\u5982\u4f55\u66f4\u597d\u7684\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",date:"2024-02-20T00:00:00.000Z",formattedDate:"2024\u5e742\u670820\u65e5",tags:[],readingTime:9.385,hasTruncateMarker:!1,authors:[{name:"\u6c6a\u5fe0\u7965 - Apache Seata committer,trustdecision \u6280\u672f\u4e13\u5bb6"}],frontMatter:{title:"\u5982\u4f55\u5728seata\u4e2d\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",keywords:["Seata","unit test","junit","mockito","assertj"],description:"\u8fd9\u7bc7\u6587\u7ae0\u4e3b\u8981\u4ecb\u7ecd\u4e86Seata\u4e2d\u5df2\u7ecf\u4f7f\u7528\u7684\u6d4b\u8bd5\u7528\u4f8b\u76f8\u5173\u6846\u67b6\uff0c\u4ee5\u53ca\u793e\u533a\u5efa\u8bae\u5f00\u53d1\u8005\u5982\u4f55\u66f4\u597d\u7684\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b",author:"\u6c6a\u5fe0\u7965 - Apache Seata committer,trustdecision \u6280\u672f\u4e13\u5bb6",date:"2024-02-20T00:00:00.000Z"},unlisted:!1,nextItem:{title:"\u63a2\u7d22 Seata \u9879\u76ee\u5f00\u6e90\u5f00\u53d1\u4e4b\u65c5",permalink:"/zh-cn/blog/explore-seata-journey"}},o={authorsImageUrls:[void 0]},a=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u63a8\u8350\u7684\u6846\u67b6",id:"\u63a8\u8350\u7684\u6846\u67b6",level:2},{value:"junit5",id:"junit5",level:3},{value:"mockito",id:"mockito",level:3},{value:"assertj",id:"assertj",level:3},{value:"\u89c4\u8303",id:"\u89c4\u8303",level:2},{value:"1.\u3010\u5f3a\u5236\u3011\u5355\u5143\u6d4b\u8bd5\u5fc5\u987b\u9075\u5b88 AIR \u539f\u5219\u3002",id:"1\u5f3a\u5236\u5355\u5143\u6d4b\u8bd5\u5fc5\u987b\u9075\u5b88-air-\u539f\u5219",level:5},{value:"2.\u3010\u5f3a\u5236\u3011\u5355\u5143\u6d4b\u8bd5\u5e94\u8be5\u662f\u5168\u81ea\u52a8\u6267\u884c\u7684\uff0c\u5e76\u4e14\u975e\u4ea4\u4e92\u5f0f\u7684\u3002",id:"2\u5f3a\u5236\u5355\u5143\u6d4b\u8bd5\u5e94\u8be5\u662f\u5168\u81ea\u52a8\u6267\u884c\u7684\u5e76\u4e14\u975e\u4ea4\u4e92\u5f0f\u7684",level:5},{value:"3.\u3010\u5f3a\u5236\u3011\u4fdd\u6301\u5355\u5143\u6d4b\u8bd5\u7684\u72ec\u7acb\u6027\u3002\u4e3a\u4e86\u4fdd\u8bc1\u5355\u5143\u6d4b\u8bd5\u7a33\u5b9a\u53ef\u9760\u4e14\u4fbf\u4e8e\u7ef4\u62a4\uff0c\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u4e4b\u95f4\u51b3\u4e0d\u80fd\u4e92\u76f8\u8c03\u7528\uff0c\u4e5f\u4e0d\u80fd\u4f9d\u8d56\u6267\u884c\u7684\u5148\u540e\u6b21\u5e8f\u3002",id:"3\u5f3a\u5236\u4fdd\u6301\u5355\u5143\u6d4b\u8bd5\u7684\u72ec\u7acb\u6027\u4e3a\u4e86\u4fdd\u8bc1\u5355\u5143\u6d4b\u8bd5\u7a33\u5b9a\u53ef\u9760\u4e14\u4fbf\u4e8e\u7ef4\u62a4\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u4e4b\u95f4\u51b3\u4e0d\u80fd\u4e92\u76f8\u8c03\u7528\u4e5f\u4e0d\u80fd\u4f9d\u8d56\u6267\u884c\u7684\u5148\u540e\u6b21\u5e8f",level:5},{value:"4.\u3010\u5f3a\u5236\u3011\u5355\u5143\u6d4b\u8bd5\u662f\u53ef\u4ee5\u91cd\u590d\u6267\u884c\u7684\uff0c\u4e0d\u80fd\u53d7\u5230\u5916\u754c\u73af\u5883\u7684\u5f71\u54cd\u3002",id:"4\u5f3a\u5236\u5355\u5143\u6d4b\u8bd5\u662f\u53ef\u4ee5\u91cd\u590d\u6267\u884c\u7684\u4e0d\u80fd\u53d7\u5230\u5916\u754c\u73af\u5883\u7684\u5f71\u54cd",level:5},{value:"5.\u3010\u5f3a\u5236\u3011\u5bf9\u4e8e\u5355\u5143\u6d4b\u8bd5\uff0c\u8981\u4fdd\u8bc1\u6d4b\u8bd5\u7c92\u5ea6\u8db3\u591f\u5c0f\uff0c\u6709\u52a9\u4e8e\u7cbe\u786e\u5b9a\u4f4d\u95ee\u9898\u3002\u5355\u6d4b\u7c92\u5ea6\u81f3\u591a\u662f\u7c7b\u7ea7\u522b\uff0c\u4e00\u822c\u662f\u65b9\u6cd5\u7ea7\u522b\u3002",id:"5\u5f3a\u5236\u5bf9\u4e8e\u5355\u5143\u6d4b\u8bd5\u8981\u4fdd\u8bc1\u6d4b\u8bd5\u7c92\u5ea6\u8db3\u591f\u5c0f\u6709\u52a9\u4e8e\u7cbe\u786e\u5b9a\u4f4d\u95ee\u9898\u5355\u6d4b\u7c92\u5ea6\u81f3\u591a\u662f\u7c7b\u7ea7\u522b\u4e00\u822c\u662f\u65b9\u6cd5\u7ea7\u522b",level:5},{value:"6.\u3010\u5f3a\u5236\u3011\u6838\u5fc3\u4e1a\u52a1\u3001\u6838\u5fc3\u5e94\u7528\u3001\u6838\u5fc3\u6a21\u5757\u7684\u589e\u91cf\u4ee3\u7801\u786e\u4fdd\u5355\u5143\u6d4b\u8bd5\u901a\u8fc7\u3002",id:"6\u5f3a\u5236\u6838\u5fc3\u4e1a\u52a1\u6838\u5fc3\u5e94\u7528\u6838\u5fc3\u6a21\u5757\u7684\u589e\u91cf\u4ee3\u7801\u786e\u4fdd\u5355\u5143\u6d4b\u8bd5\u901a\u8fc7",level:5},{value:"7.\u3010\u5f3a\u5236\u3011\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801\u5fc5\u987b\u5199\u5728\u5982\u4e0b\u5de5\u7a0b\u76ee\u5f55\uff1asrc/test/java\uff0c\u4e0d\u5141\u8bb8\u5199\u5728\u4e1a\u52a1\u4ee3\u7801\u76ee\u5f55\u4e0b\u3002",id:"7\u5f3a\u5236\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801\u5fc5\u987b\u5199\u5728\u5982\u4e0b\u5de5\u7a0b\u76ee\u5f55srctestjava\u4e0d\u5141\u8bb8\u5199\u5728\u4e1a\u52a1\u4ee3\u7801\u76ee\u5f55\u4e0b",level:5},{value:"8.\u3010\u5f3a\u5236\u3011\u5355\u5143\u6d4b\u8bd5\u7684\u57fa\u672c\u76ee\u6807\uff1a\u8bed\u53e5\u8986\u76d6\u7387\u8fbe\u5230 70%\uff1b\u6838\u5fc3\u6a21\u5757\u7684\u8bed\u53e5\u8986\u76d6\u7387\u548c\u5206\u652f\u8986\u76d6\u7387\u90fd\u8981\u8fbe\u5230 100%\u3002",id:"8\u5f3a\u5236\u5355\u5143\u6d4b\u8bd5\u7684\u57fa\u672c\u76ee\u6807\u8bed\u53e5\u8986\u76d6\u7387\u8fbe\u5230-70\u6838\u5fc3\u6a21\u5757\u7684\u8bed\u53e5\u8986\u76d6\u7387\u548c\u5206\u652f\u8986\u76d6\u7387\u90fd\u8981\u8fbe\u5230-100",level:5},{value:"9.\u3010\u63a8\u8350\u3011\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801\u9075\u5b88 BCDE \u539f\u5219\uff0c\u4ee5\u4fdd\u8bc1\u88ab\u6d4b\u8bd5\u6a21\u5757\u7684\u4ea4\u4ed8\u8d28\u91cf\u3002",id:"9\u63a8\u8350\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801\u9075\u5b88-bcde-\u539f\u5219\u4ee5\u4fdd\u8bc1\u88ab\u6d4b\u8bd5\u6a21\u5757\u7684\u4ea4\u4ed8\u8d28\u91cf",level:5},{value:"10.\u3010\u63a8\u8350\u3011\u5bf9\u4e8e\u6570\u636e\u5e93\u76f8\u5173\u7684\u67e5\u8be2\uff0c\u66f4\u65b0\uff0c\u5220\u9664\u7b49\u64cd\u4f5c\uff0c\u4e0d\u80fd\u5047\u8bbe\u6570\u636e\u5e93\u91cc\u7684\u6570\u636e\u662f\u5b58\u5728\u7684\uff0c\u6216\u8005\u76f4\u63a5\u64cd\u4f5c\u6570\u636e\u5e93\u628a\u6570\u636e\u63d2\u5165\u8fdb\u53bb\uff0c\u8bf7\u4f7f\u7528\u7a0b\u5e8f\u63d2\u5165\u6216\u8005\u5bfc\u5165\u6570\u636e\u7684\u65b9\u5f0f\u6765\u51c6\u5907\u6570\u636e\u3002",id:"10\u63a8\u8350\u5bf9\u4e8e\u6570\u636e\u5e93\u76f8\u5173\u7684\u67e5\u8be2\u66f4\u65b0\u5220\u9664\u7b49\u64cd\u4f5c\u4e0d\u80fd\u5047\u8bbe\u6570\u636e\u5e93\u91cc\u7684\u6570\u636e\u662f\u5b58\u5728\u7684\u6216\u8005\u76f4\u63a5\u64cd\u4f5c\u6570\u636e\u5e93\u628a\u6570\u636e\u63d2\u5165\u8fdb\u53bb\u8bf7\u4f7f\u7528\u7a0b\u5e8f\u63d2\u5165\u6216\u8005\u5bfc\u5165\u6570\u636e\u7684\u65b9\u5f0f\u6765\u51c6\u5907\u6570\u636e",level:5},{value:"11.\u3010\u63a8\u8350\u3011\u548c\u6570\u636e\u5e93\u76f8\u5173\u7684\u5355\u5143\u6d4b\u8bd5\uff0c\u53ef\u4ee5\u8bbe\u5b9a\u81ea\u52a8\u56de\u6eda\u673a\u5236\uff0c\u4e0d\u7ed9\u6570\u636e\u5e93\u9020\u6210\u810f\u6570\u636e\u3002\u6216\u8005\u5bf9\u5355\u5143\u6d4b\u8bd5\u4ea7\u751f\u7684\u6570\u636e\u6709\u660e\u786e\u7684\u524d\u540e\u7f00\u6807\u8bc6\u3002",id:"11\u63a8\u8350\u548c\u6570\u636e\u5e93\u76f8\u5173\u7684\u5355\u5143\u6d4b\u8bd5\u53ef\u4ee5\u8bbe\u5b9a\u81ea\u52a8\u56de\u6eda\u673a\u5236\u4e0d\u7ed9\u6570\u636e\u5e93\u9020\u6210\u810f\u6570\u636e\u6216\u8005\u5bf9\u5355\u5143\u6d4b\u8bd5\u4ea7\u751f\u7684\u6570\u636e\u6709\u660e\u786e\u7684\u524d\u540e\u7f00\u6807\u8bc6",level:5},{value:"12.\u3010\u63a8\u8350\u3011\u5bf9\u4e8e\u4e0d\u53ef\u6d4b\u7684\u4ee3\u7801\u5728\u9002\u5f53\u7684\u65f6\u673a\u505a\u5fc5\u8981\u7684\u91cd\u6784\uff0c\u4f7f\u4ee3\u7801\u53d8\u5f97\u53ef\u6d4b\uff0c\u907f\u514d\u4e3a\u4e86\u8fbe\u5230\u6d4b\u8bd5\u8981\u6c42\u800c\u4e66\u5199\u4e0d\u89c4\u8303\u6d4b\u8bd5\u4ee3\u7801\u3002",id:"12\u63a8\u8350\u5bf9\u4e8e\u4e0d\u53ef\u6d4b\u7684\u4ee3\u7801\u5728\u9002\u5f53\u7684\u65f6\u673a\u505a\u5fc5\u8981\u7684\u91cd\u6784\u4f7f\u4ee3\u7801\u53d8\u5f97\u53ef\u6d4b\u907f\u514d\u4e3a\u4e86\u8fbe\u5230\u6d4b\u8bd5\u8981\u6c42\u800c\u4e66\u5199\u4e0d\u89c4\u8303\u6d4b\u8bd5\u4ee3\u7801",level:5},{value:"13.\u3010\u63a8\u8350\u3011\u5355\u5143\u6d4b\u8bd5\u4f5c\u4e3a\u4e00\u79cd\u8d28\u91cf\u4fdd\u969c\u624b\u6bb5\uff0c\u5728\u63d0\u4ea4pr\u524d\u5b8c\u6210\u5355\u5143\u6d4b\u8bd5\u7684\u7f16\u5199\u53ca\u9a8c\u8bc1\u3002",id:"13\u63a8\u8350\u5355\u5143\u6d4b\u8bd5\u4f5c\u4e3a\u4e00\u79cd\u8d28\u91cf\u4fdd\u969c\u624b\u6bb5\u5728\u63d0\u4ea4pr\u524d\u5b8c\u6210\u5355\u5143\u6d4b\u8bd5\u7684\u7f16\u5199\u53ca\u9a8c\u8bc1",level:5},{value:"14.\u3010\u53c2\u8003\u3011\u4e3a\u4e86\u66f4\u65b9\u4fbf\u5730\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\uff0c\u4e1a\u52a1\u4ee3\u7801\u5e94\u907f\u514d\u4ee5\u4e0b\u60c5\u51b5\uff1a",id:"14\u53c2\u8003\u4e3a\u4e86\u66f4\u65b9\u4fbf\u5730\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u4e1a\u52a1\u4ee3\u7801\u5e94\u907f\u514d\u4ee5\u4e0b\u60c5\u51b5",level:5}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u80cc\u666f",children:"\u80cc\u666f"}),"\n",(0,t.jsx)(n.p,{children:"\u968f\u7740 Seata \u9879\u76ee\u7684\u4e0d\u65ad\u53d1\u5c55\u548c\u58ee\u5927\uff0c\u6211\u4eec\u7684\u8d21\u732e\u8005\u7fa4\u4f53\u4e5f\u5728\u6301\u7eed\u6269\u5927\u3002\u9879\u76ee\u7684\u529f\u80fd\u4e0d\u65ad\u589e\u5f3a\uff0c\u5bf9\u4e8e\u4ee3\u7801\u8d28\u91cf\u7684\u8981\u6c42\u4e5f\u5728\u63d0\u9ad8\u3002\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u671f\u671b\u6bcf\u4e00\u4f4d\u8d21\u732e\u8005\u5728\u63d0\u4ea4\u529f\u80fd\u4ee3\u7801\u7684\u540c\u65f6\uff0c\u80fd\u591f\u9644\u5e26\u89c4\u8303\u3001\u5b8c\u5907\u7684\u6d4b\u8bd5\u7528\u4f8b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u4e2a\u4f18\u79c0\u7684\u9879\u76ee\uff0c\u5176\u5b8c\u5907\u7684\u5355\u5143\u6d4b\u8bd5\u662f\u57fa\u672c\u4fdd\u969c\u3002Test-Driven Development\uff08TDD\uff09\u7406\u5ff5\u5df2\u7ecf\u63d0\u51fa\u591a\u5e74\uff0c\u5b83\u5f3a\u8c03\u5728\u7f16\u5199\u529f\u80fd\u4ee3\u7801\u4e4b\u524d\u5148\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b\u3002\u901a\u8fc7\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u66f4\u6df1\u5165\u5730\u7406\u89e3\u4ee3\u7801\u4e2d\u76f8\u5173\u7c7b\u548c\u65b9\u6cd5\u7684\u4f5c\u7528\uff0c\u638c\u63e1\u6838\u5fc3\u903b\u8f91\uff0c\u719f\u6089\u5404\u79cd\u573a\u666f\u7684\u8fd0\u884c\u60c5\u51b5\u3002\u540c\u65f6\uff0c\u5355\u5143\u6d4b\u8bd5\u4e5f\u4e3a\u5f00\u6e90\u9879\u76ee\u63d0\u4f9b\u4e86\u7a33\u5b9a\u5b89\u5168\u7684\u4fdd\u969c\uff0c\u4f7f\u5f97\u9879\u76ee\u5728\u63a5\u53d7\u8d21\u732e\u8005\u4ee3\u7801\u65f6\uff0c\u80fd\u591f\u786e\u4fdd\u4ee3\u7801\u7684\u8d28\u91cf\u548c\u7a33\u5b9a\u6027\u3002  \u5355\u5143\u6d4b\u8bd5\u662f\u8d28\u91cf\u4fdd\u969c\u7684\u7b2c\u4e00\u73af\uff0c\u6709\u6548\u7684\u5355\u5143\u6d4b\u8bd5\u80fd\u591f\u63d0\u524d\u53d1\u73b090%\u4ee5\u4e0a\u7684\u4ee3\u7801Bug\u95ee\u9898\uff0c\u540c\u65f6\u4e5f\u80fd\u9632\u6b62\u4ee3\u7801\u7684\u8150\u5316\u3002\u5728\u9879\u76ee\u91cd\u6784\u548c\u6f14\u8fdb\u8fc7\u7a0b\u4e2d\uff0c\u5355\u5143\u6d4b\u8bd5\u8d77\u5230\u4e86\u81f3\u5173\u91cd\u8981\u7684\u4f5c\u7528\uff0c\u5b83\u80fd\u591f\u786e\u4fdd\u91cd\u6784\u540e\u7684\u4ee3\u7801\u4ecd\u7136\u80fd\u591f\u6b63\u5e38\u5de5\u4f5c\uff0c\u4e0d\u4f1a\u5f15\u5165\u65b0\u7684Bug\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u793e\u533a\u770b\u6765\uff0c\u8d21\u732e\u5408\u7406\u7684\u6d4b\u8bd5\u7528\u4f8b\u4ee3\u7801\u548c\u8d21\u732e\u529f\u80fd\u4ee3\u7801\u540c\u6837\u91cd\u8981\uff0c\u4e3a\u4e86\u5e2e\u52a9\u5f00\u53d1\u8005\u7f16\u5199\u51fa\u9ad8\u8d28\u91cf\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u672c\u6587\u7ed9\u51fa\u4e00\u4e9b\u57fa\u7840\u7684\u89c4\u8303\u548c\u5efa\u8bae\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u63a8\u8350\u7684\u6846\u67b6",children:"\u63a8\u8350\u7684\u6846\u67b6"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u524d\u793e\u533a\u4f7f\u7528\u4ee5\u4e0b\u4e09\u4e2a\u6846\u67b6\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b\uff1b"}),"\n",(0,t.jsx)(n.h3,{id:"junit5",children:"junit5"}),"\n",(0,t.jsx)(n.p,{children:"junit\u662fJava\u4e2d\u6700\u5e38\u7528\u7684\u5355\u5143\u6d4b\u8bd5\u6846\u67b6\uff0c\u7528\u4e8e\u7f16\u5199\u548c\u8fd0\u884c\u53ef\u91cd\u590d\u7684\u6d4b\u8bd5\u7528\u4f8b\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"        <junit-jupiter.version>5.8.2</junit-jupiter.version>\n        <dependency>\n            <groupId>org.junit</groupId>\n            <artifactId>junit-bom</artifactId>\n            <version>${junit-jupiter.version}</version>\n        </dependency>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mockito",children:"mockito"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://javadoc.io/static/org.mockito/mockito-core/5.10.0/org/mockito/Mockito.html",children:"mockito"}),"\u662f\u4e00\u4e2amock\u6846\u67b6\uff0c\u4e3b\u8981\u662f\u7528\u6765\u505amock\u6d4b\u8bd5\uff0c\u4ed6\u53ef\u4ee5\u6a21\u62df\u4efb\u4f55 Spring\u7ba1\u7406\u7684 bean\u3001\u6a21\u62df\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u3001\u6a21\u62df\u629b\u51fa\u5f02\u5e38\u7b49\uff0c\u53ef\u4ee5\u8ba9\u6211\u4eec\u5728\u7f3a\u4e4f\u4e00\u4e9b\u4f9d\u8d56\u7684\u60c5\u51b5\u4e0b\uff0c\u5b8c\u6210\u6d4b\u8bd5\u53ca\u9a8c\u8bc1\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"        <mockito.version>4.11.0</mockito.version>\n        <dependency>\n            <groupId>org.mockito</groupId>\n            <artifactId>mockito-core</artifactId>\n            <version>${mockito.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.mockito</groupId>\n            <artifactId>mockito-junit-jupiter</artifactId>\n            <version>${mockito.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.mockito</groupId>\n            <artifactId>mockito-inline</artifactId>\n            <version>${mockito.version}</version>\n        </dependency>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"assertj",children:"assertj"}),"\n",(0,t.jsx)(n.p,{children:"assertj\u662f\u4e00\u4e2a\u65ad\u8a00\u5e93\uff0c\u63d0\u4f9b\u4e86\u4e00\u7ec4\u6613\u4e8e\u4f7f\u7528\u548c\u53ef\u8bfb\u6027\u5f88\u5f3a\u7684\u65ad\u8a00\u65b9\u6cd5\uff0c\u5f53junit\u7684\u65ad\u8a00\u96be\u4ee5\u6ee1\u8db3\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528assertj\u8fdb\u884c\u65ad\u8a00\uff1b"}),"\n",(0,t.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\uff1a\u6211\u4eec\u5728seata-dependencies\u7684pom.xml\u4e2d\u7edf\u4e00\u7ba1\u7406\u4e86\u8fd9\u4e09\u4e2a\u5e93\u7684\u7248\u672c\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"        <assertj-core.version>3.12.2</assertj-core.version>\n        <dependency>\n            <groupId>org.assertj</groupId>\n            <artifactId>assertj-core</artifactId>\n            <version>${assertj-core.version}</version>\n        </dependency>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u89c4\u8303",children:"\u89c4\u8303"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u53c2\u8003\u963f\u91cc\u5df4\u5df4JAVA\u5f00\u53d1\u624b\u518c\uff0c\u6574\u7406\u4e86\u4e00\u4e9b\u5efa\u8bae\u53ca\u89c4\u8303\uff0c\u5206\u4e3a\u4e0d\u540c\u7684\u7ea7\u522b\uff0c\u5176\u4e2d\u3010\u3010\u5f3a\u5236\u3011\u90e8\u5206\uff0c\u5f00\u53d1\u8005\u9700\u8981\u4e25\u683c\u9075\u5b88\uff0c\u793e\u533a\u5728\u5408\u5e76\u4ee3\u7801\u65f6\u4f1a\u6309\u7167\u5f3a\u5236\u89c4\u5219\u8fdb\u884creview\uff0c\u3010\u3010\u63a8\u8350\u3011\u3010\u53c2\u8003\u3011\u90e8\u5206\uff0c\u65b9\u4fbf\u5927\u5bb6\u66f4\u597d\u7684\u4e86\u89e3\u6211\u4eec\u5bf9\u4e8e\u6d4b\u8bd5\u7528\u4f8b\u7684\u8003\u91cf\u548c\u539f\u5219\u3002"}),"\n",(0,t.jsx)(n.h5,{id:"1\u5f3a\u5236\u5355\u5143\u6d4b\u8bd5\u5fc5\u987b\u9075\u5b88-air-\u539f\u5219",children:"1.\u3010\u5f3a\u5236\u3011\u5355\u5143\u6d4b\u8bd5\u5fc5\u987b\u9075\u5b88 AIR \u539f\u5219\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8bf4\u660e\uff1a\u597d\u7684\u5355\u5143\u6d4b\u8bd5\u5b8f\u89c2\u4e0a\u6765\u8bf4\uff0c\u5177\u6709\u81ea\u52a8\u5316\u3001\u72ec\u7acb\u6027\u3001\u53ef\u91cd\u590d\u6267\u884c\u7684\u7279\u70b9\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A\uff1aAutomatic\uff08\u81ea\u52a8\u5316\uff09"}),"\n",(0,t.jsx)(n.li,{children:"I\uff1aIndependent\uff08\u72ec\u7acb\u6027\uff09"}),"\n",(0,t.jsx)(n.li,{children:"R\uff1aRepeatable\uff08\u53ef\u91cd\u590d\uff09"}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"2\u5f3a\u5236\u5355\u5143\u6d4b\u8bd5\u5e94\u8be5\u662f\u5168\u81ea\u52a8\u6267\u884c\u7684\u5e76\u4e14\u975e\u4ea4\u4e92\u5f0f\u7684",children:"2.\u3010\u5f3a\u5236\u3011\u5355\u5143\u6d4b\u8bd5\u5e94\u8be5\u662f\u5168\u81ea\u52a8\u6267\u884c\u7684\uff0c\u5e76\u4e14\u975e\u4ea4\u4e92\u5f0f\u7684\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6d4b\u8bd5\u7528\u4f8b\u901a\u5e38\u662f\u88ab\u5b9a\u671f\u6267\u884c\u7684\uff0c\u6267\u884c\u8fc7\u7a0b\u5fc5\u987b\u5b8c\u5168\u81ea\u52a8\u5316\u624d\u6709\u610f\u4e49\u3002\u8f93\u51fa\u7ed3\u679c\u9700\u8981\u4eba\u5de5\u68c0\u67e5\u7684\u6d4b\u8bd5\u4e0d\u662f\u4e00\u4e2a\u597d\u7684\u5355\u5143\u6d4b\u8bd5\u3002\u5355\u5143\u6d4b\u8bd5\u4e2d\u4e0d\u51c6\u4f7f\u7528 System.out \u6765\u8fdb\u884c\u4eba\u8089\u9a8c\u8bc1\uff0c\u5fc5\u987b\u4f7f\u7528 assert \u6765\u9a8c\u8bc1\u3002"}),"\n",(0,t.jsx)(n.h5,{id:"3\u5f3a\u5236\u4fdd\u6301\u5355\u5143\u6d4b\u8bd5\u7684\u72ec\u7acb\u6027\u4e3a\u4e86\u4fdd\u8bc1\u5355\u5143\u6d4b\u8bd5\u7a33\u5b9a\u53ef\u9760\u4e14\u4fbf\u4e8e\u7ef4\u62a4\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u4e4b\u95f4\u51b3\u4e0d\u80fd\u4e92\u76f8\u8c03\u7528\u4e5f\u4e0d\u80fd\u4f9d\u8d56\u6267\u884c\u7684\u5148\u540e\u6b21\u5e8f",children:"3.\u3010\u5f3a\u5236\u3011\u4fdd\u6301\u5355\u5143\u6d4b\u8bd5\u7684\u72ec\u7acb\u6027\u3002\u4e3a\u4e86\u4fdd\u8bc1\u5355\u5143\u6d4b\u8bd5\u7a33\u5b9a\u53ef\u9760\u4e14\u4fbf\u4e8e\u7ef4\u62a4\uff0c\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u4e4b\u95f4\u51b3\u4e0d\u80fd\u4e92\u76f8\u8c03\u7528\uff0c\u4e5f\u4e0d\u80fd\u4f9d\u8d56\u6267\u884c\u7684\u5148\u540e\u6b21\u5e8f\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u53cd\u4f8b\uff1amethod2 \u9700\u8981\u4f9d\u8d56 method1 \u7684\u6267\u884c\uff0c\u5c06\u6267\u884c\u7ed3\u679c\u4f5c\u4e3a method2 \u7684\u8f93\u5165\u3002"}),"\n",(0,t.jsx)(n.h5,{id:"4\u5f3a\u5236\u5355\u5143\u6d4b\u8bd5\u662f\u53ef\u4ee5\u91cd\u590d\u6267\u884c\u7684\u4e0d\u80fd\u53d7\u5230\u5916\u754c\u73af\u5883\u7684\u5f71\u54cd",children:"4.\u3010\u5f3a\u5236\u3011\u5355\u5143\u6d4b\u8bd5\u662f\u53ef\u4ee5\u91cd\u590d\u6267\u884c\u7684\uff0c\u4e0d\u80fd\u53d7\u5230\u5916\u754c\u73af\u5883\u7684\u5f71\u54cd\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8bf4\u660e\uff1a\u5355\u5143\u6d4b\u8bd5\u901a\u5e38\u4f1a\u88ab\u653e\u5230\u6301\u7eed\u96c6\u6210\u4e2d\uff0c\u6bcf\u6b21\u6709\u4ee3\u7801 check in \u65f6\u5355\u5143\u6d4b\u8bd5\u90fd\u4f1a\u88ab\u6267\u884c\u3002\u5982\u679c\u5355\u6d4b\u5bf9\u5916\u90e8\u73af\u5883\uff08\u7f51\u7edc\u3001\u670d\u52a1\u3001\u4e2d\u95f4\u4ef6\u7b49\uff09\u6709\u4f9d\u8d56\uff0c\u5bb9\u6613\u5bfc\u81f4\u6301\u7eed\u96c6\u6210\u673a\u5236\u7684\u4e0d\u53ef\u7528\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6b63\u4f8b\uff1a\u4e3a\u4e86\u4e0d\u53d7\u5916\u754c\u73af\u5883\u5f71\u54cd\uff0c\u8981\u6c42\u8bbe\u8ba1\u4ee3\u7801\u65f6\u5c31\u628a SUT \u7684\u4f9d\u8d56\u6539\u6210\u6ce8\u5165\uff0c\u5728\u6d4b\u8bd5\u65f6\u7528 spring \u8fd9\u6837\u7684 DI\u6846\u67b6\u6ce8\u5165\u4e00\u4e2a\u672c\u5730\uff08\u5185\u5b58\uff09\u5b9e\u73b0\u6216\u8005 Mock \u5b9e\u73b0\u3002"}),"\n",(0,t.jsx)(n.h5,{id:"5\u5f3a\u5236\u5bf9\u4e8e\u5355\u5143\u6d4b\u8bd5\u8981\u4fdd\u8bc1\u6d4b\u8bd5\u7c92\u5ea6\u8db3\u591f\u5c0f\u6709\u52a9\u4e8e\u7cbe\u786e\u5b9a\u4f4d\u95ee\u9898\u5355\u6d4b\u7c92\u5ea6\u81f3\u591a\u662f\u7c7b\u7ea7\u522b\u4e00\u822c\u662f\u65b9\u6cd5\u7ea7\u522b",children:"5.\u3010\u5f3a\u5236\u3011\u5bf9\u4e8e\u5355\u5143\u6d4b\u8bd5\uff0c\u8981\u4fdd\u8bc1\u6d4b\u8bd5\u7c92\u5ea6\u8db3\u591f\u5c0f\uff0c\u6709\u52a9\u4e8e\u7cbe\u786e\u5b9a\u4f4d\u95ee\u9898\u3002\u5355\u6d4b\u7c92\u5ea6\u81f3\u591a\u662f\u7c7b\u7ea7\u522b\uff0c\u4e00\u822c\u662f\u65b9\u6cd5\u7ea7\u522b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8bf4\u660e\uff1a\u53ea\u6709\u6d4b\u8bd5\u7c92\u5ea6\u5c0f\u624d\u80fd\u5728\u51fa\u9519\u65f6\u5c3d\u5feb\u5b9a\u4f4d\u5230\u51fa\u9519\u4f4d\u7f6e\u3002\u5355\u6d4b\u4e0d\u8d1f\u8d23\u68c0\u67e5\u8de8\u7c7b\u6216\u8005\u8de8\u7cfb\u7edf\u7684\u4ea4\u4e92\u903b\u8f91\uff0c\u90a3\u662f\u96c6\u6210\u6d4b\u8bd5\u7684\u9886\u57df\u3002"}),"\n",(0,t.jsx)(n.h5,{id:"6\u5f3a\u5236\u6838\u5fc3\u4e1a\u52a1\u6838\u5fc3\u5e94\u7528\u6838\u5fc3\u6a21\u5757\u7684\u589e\u91cf\u4ee3\u7801\u786e\u4fdd\u5355\u5143\u6d4b\u8bd5\u901a\u8fc7",children:"6.\u3010\u5f3a\u5236\u3011\u6838\u5fc3\u4e1a\u52a1\u3001\u6838\u5fc3\u5e94\u7528\u3001\u6838\u5fc3\u6a21\u5757\u7684\u589e\u91cf\u4ee3\u7801\u786e\u4fdd\u5355\u5143\u6d4b\u8bd5\u901a\u8fc7\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8bf4\u660e\uff1a\u65b0\u589e\u4ee3\u7801\u53ca\u65f6\u8865\u5145\u5355\u5143\u6d4b\u8bd5\uff0c\u5982\u679c\u65b0\u589e\u4ee3\u7801\u5f71\u54cd\u4e86\u539f\u6709\u5355\u5143\u6d4b\u8bd5\uff0c\u8bf7\u53ca\u65f6\u4fee\u6b63\u3002"}),"\n",(0,t.jsx)(n.h5,{id:"7\u5f3a\u5236\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801\u5fc5\u987b\u5199\u5728\u5982\u4e0b\u5de5\u7a0b\u76ee\u5f55srctestjava\u4e0d\u5141\u8bb8\u5199\u5728\u4e1a\u52a1\u4ee3\u7801\u76ee\u5f55\u4e0b",children:"7.\u3010\u5f3a\u5236\u3011\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801\u5fc5\u987b\u5199\u5728\u5982\u4e0b\u5de5\u7a0b\u76ee\u5f55\uff1asrc/test/java\uff0c\u4e0d\u5141\u8bb8\u5199\u5728\u4e1a\u52a1\u4ee3\u7801\u76ee\u5f55\u4e0b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8bf4\u660e\uff1a\u6e90\u7801\u7f16\u8bd1\u65f6\u4f1a\u8df3\u8fc7\u6b64\u76ee\u5f55\uff0c\u800c\u5355\u5143\u6d4b\u8bd5\u6846\u67b6\u9ed8\u8ba4\u662f\u626b\u63cf\u6b64\u76ee\u5f55\u3002"}),"\n",(0,t.jsx)(n.h5,{id:"8\u5f3a\u5236\u5355\u5143\u6d4b\u8bd5\u7684\u57fa\u672c\u76ee\u6807\u8bed\u53e5\u8986\u76d6\u7387\u8fbe\u5230-70\u6838\u5fc3\u6a21\u5757\u7684\u8bed\u53e5\u8986\u76d6\u7387\u548c\u5206\u652f\u8986\u76d6\u7387\u90fd\u8981\u8fbe\u5230-100",children:"8.\u3010\u5f3a\u5236\u3011\u5355\u5143\u6d4b\u8bd5\u7684\u57fa\u672c\u76ee\u6807\uff1a\u8bed\u53e5\u8986\u76d6\u7387\u8fbe\u5230 70%\uff1b\u6838\u5fc3\u6a21\u5757\u7684\u8bed\u53e5\u8986\u76d6\u7387\u548c\u5206\u652f\u8986\u76d6\u7387\u90fd\u8981\u8fbe\u5230 100%\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8bf4\u660e\uff1a\u5728\u5de5\u7a0b\u89c4\u7ea6\u7684\u5e94\u7528\u5206\u5c42\u4e2d\u63d0\u5230\u7684 DAO \u5c42\uff0cManager \u5c42\uff0c\u53ef\u91cd\u7528\u5ea6\u9ad8\u7684 Service\uff0c\u90fd\u5e94\u8be5\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u3002"}),"\n",(0,t.jsx)(n.h5,{id:"9\u63a8\u8350\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801\u9075\u5b88-bcde-\u539f\u5219\u4ee5\u4fdd\u8bc1\u88ab\u6d4b\u8bd5\u6a21\u5757\u7684\u4ea4\u4ed8\u8d28\u91cf",children:"9.\u3010\u63a8\u8350\u3011\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u4ee3\u7801\u9075\u5b88 BCDE \u539f\u5219\uff0c\u4ee5\u4fdd\u8bc1\u88ab\u6d4b\u8bd5\u6a21\u5757\u7684\u4ea4\u4ed8\u8d28\u91cf\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"B\uff1aBorder\uff0c\u8fb9\u754c\u503c\u6d4b\u8bd5\uff0c\u5305\u62ec\u5faa\u73af\u8fb9\u754c\u3001\u7279\u6b8a\u53d6\u503c\u3001\u7279\u6b8a\u65f6\u95f4\u70b9\u3001\u6570\u636e\u987a\u5e8f\u7b49\u3002"}),"\n",(0,t.jsx)(n.li,{children:"C\uff1aCorrect\uff0c\u6b63\u786e\u7684\u8f93\u5165\uff0c\u5e76\u5f97\u5230\u9884\u671f\u7684\u7ed3\u679c\u3002"}),"\n",(0,t.jsx)(n.li,{children:"D\uff1aDesign\uff0c\u4e0e\u8bbe\u8ba1\u6587\u6863\u76f8\u7ed3\u5408\uff0c\u6765\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u3002"}),"\n",(0,t.jsx)(n.li,{children:"E\uff1aError\uff0c\u5f3a\u5236\u9519\u8bef\u4fe1\u606f\u8f93\u5165\uff08\u5982\uff1a\u975e\u6cd5\u6570\u636e\u3001\u5f02\u5e38\u6d41\u7a0b\u3001\u4e1a\u52a1\u5141\u8bb8\u5916\u7b49\uff09\uff0c\u5e76\u5f97\u5230\u9884\u671f\u7684\u7ed3\u679c\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"10\u63a8\u8350\u5bf9\u4e8e\u6570\u636e\u5e93\u76f8\u5173\u7684\u67e5\u8be2\u66f4\u65b0\u5220\u9664\u7b49\u64cd\u4f5c\u4e0d\u80fd\u5047\u8bbe\u6570\u636e\u5e93\u91cc\u7684\u6570\u636e\u662f\u5b58\u5728\u7684\u6216\u8005\u76f4\u63a5\u64cd\u4f5c\u6570\u636e\u5e93\u628a\u6570\u636e\u63d2\u5165\u8fdb\u53bb\u8bf7\u4f7f\u7528\u7a0b\u5e8f\u63d2\u5165\u6216\u8005\u5bfc\u5165\u6570\u636e\u7684\u65b9\u5f0f\u6765\u51c6\u5907\u6570\u636e",children:"10.\u3010\u63a8\u8350\u3011\u5bf9\u4e8e\u6570\u636e\u5e93\u76f8\u5173\u7684\u67e5\u8be2\uff0c\u66f4\u65b0\uff0c\u5220\u9664\u7b49\u64cd\u4f5c\uff0c\u4e0d\u80fd\u5047\u8bbe\u6570\u636e\u5e93\u91cc\u7684\u6570\u636e\u662f\u5b58\u5728\u7684\uff0c\u6216\u8005\u76f4\u63a5\u64cd\u4f5c\u6570\u636e\u5e93\u628a\u6570\u636e\u63d2\u5165\u8fdb\u53bb\uff0c\u8bf7\u4f7f\u7528\u7a0b\u5e8f\u63d2\u5165\u6216\u8005\u5bfc\u5165\u6570\u636e\u7684\u65b9\u5f0f\u6765\u51c6\u5907\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u53cd\u4f8b\uff1a\u5220\u9664\u67d0\u4e00\u884c\u6570\u636e\u7684\u5355\u5143\u6d4b\u8bd5\uff0c\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u5148\u76f4\u63a5\u624b\u52a8\u589e\u52a0\u4e00\u884c\u4f5c\u4e3a\u5220\u9664\u76ee\u6807\uff0c\u4f46\u662f\u8fd9\u4e00\u884c\u65b0\u589e\u6570\u636e\u5e76\u4e0d\u7b26\u5408\u4e1a\u52a1\u63d2\u5165\u89c4\u5219\uff0c\u5bfc\u81f4\u6d4b\u8bd5\u7ed3\u679c\u5f02\u5e38\u3002"}),"\n",(0,t.jsx)(n.h5,{id:"11\u63a8\u8350\u548c\u6570\u636e\u5e93\u76f8\u5173\u7684\u5355\u5143\u6d4b\u8bd5\u53ef\u4ee5\u8bbe\u5b9a\u81ea\u52a8\u56de\u6eda\u673a\u5236\u4e0d\u7ed9\u6570\u636e\u5e93\u9020\u6210\u810f\u6570\u636e\u6216\u8005\u5bf9\u5355\u5143\u6d4b\u8bd5\u4ea7\u751f\u7684\u6570\u636e\u6709\u660e\u786e\u7684\u524d\u540e\u7f00\u6807\u8bc6",children:"11.\u3010\u63a8\u8350\u3011\u548c\u6570\u636e\u5e93\u76f8\u5173\u7684\u5355\u5143\u6d4b\u8bd5\uff0c\u53ef\u4ee5\u8bbe\u5b9a\u81ea\u52a8\u56de\u6eda\u673a\u5236\uff0c\u4e0d\u7ed9\u6570\u636e\u5e93\u9020\u6210\u810f\u6570\u636e\u3002\u6216\u8005\u5bf9\u5355\u5143\u6d4b\u8bd5\u4ea7\u751f\u7684\u6570\u636e\u6709\u660e\u786e\u7684\u524d\u540e\u7f00\u6807\u8bc6\u3002"}),"\n",(0,t.jsx)(n.h5,{id:"12\u63a8\u8350\u5bf9\u4e8e\u4e0d\u53ef\u6d4b\u7684\u4ee3\u7801\u5728\u9002\u5f53\u7684\u65f6\u673a\u505a\u5fc5\u8981\u7684\u91cd\u6784\u4f7f\u4ee3\u7801\u53d8\u5f97\u53ef\u6d4b\u907f\u514d\u4e3a\u4e86\u8fbe\u5230\u6d4b\u8bd5\u8981\u6c42\u800c\u4e66\u5199\u4e0d\u89c4\u8303\u6d4b\u8bd5\u4ee3\u7801",children:"12.\u3010\u63a8\u8350\u3011\u5bf9\u4e8e\u4e0d\u53ef\u6d4b\u7684\u4ee3\u7801\u5728\u9002\u5f53\u7684\u65f6\u673a\u505a\u5fc5\u8981\u7684\u91cd\u6784\uff0c\u4f7f\u4ee3\u7801\u53d8\u5f97\u53ef\u6d4b\uff0c\u907f\u514d\u4e3a\u4e86\u8fbe\u5230\u6d4b\u8bd5\u8981\u6c42\u800c\u4e66\u5199\u4e0d\u89c4\u8303\u6d4b\u8bd5\u4ee3\u7801\u3002"}),"\n",(0,t.jsx)(n.h5,{id:"13\u63a8\u8350\u5355\u5143\u6d4b\u8bd5\u4f5c\u4e3a\u4e00\u79cd\u8d28\u91cf\u4fdd\u969c\u624b\u6bb5\u5728\u63d0\u4ea4pr\u524d\u5b8c\u6210\u5355\u5143\u6d4b\u8bd5\u7684\u7f16\u5199\u53ca\u9a8c\u8bc1",children:"13.\u3010\u63a8\u8350\u3011\u5355\u5143\u6d4b\u8bd5\u4f5c\u4e3a\u4e00\u79cd\u8d28\u91cf\u4fdd\u969c\u624b\u6bb5\uff0c\u5728\u63d0\u4ea4pr\u524d\u5b8c\u6210\u5355\u5143\u6d4b\u8bd5\u7684\u7f16\u5199\u53ca\u9a8c\u8bc1\u3002"}),"\n",(0,t.jsx)(n.h5,{id:"14\u53c2\u8003\u4e3a\u4e86\u66f4\u65b9\u4fbf\u5730\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u4e1a\u52a1\u4ee3\u7801\u5e94\u907f\u514d\u4ee5\u4e0b\u60c5\u51b5",children:"14.\u3010\u53c2\u8003\u3011\u4e3a\u4e86\u66f4\u65b9\u4fbf\u5730\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\uff0c\u4e1a\u52a1\u4ee3\u7801\u5e94\u907f\u514d\u4ee5\u4e0b\u60c5\u51b5\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6784\u9020\u65b9\u6cd5\u4e2d\u505a\u7684\u4e8b\u60c5\u8fc7\u591a\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5b58\u5728\u8fc7\u591a\u7684\u5168\u5c40\u53d8\u91cf\u548c\u9759\u6001\u65b9\u6cd5\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5b58\u5728\u8fc7\u591a\u7684\u5916\u90e8\u4f9d\u8d56\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u5b58\u5728\u8fc7\u591a\u7684\u6761\u4ef6\u8bed\u53e5\u3002\n\u8bf4\u660e\uff1a\u591a\u5c42\u6761\u4ef6\u8bed\u53e5\u5efa\u8bae\u4f7f\u7528\u536b\u8bed\u53e5\u3001\u7b56\u7565\u6a21\u5f0f\u3001\u72b6\u6001\u6a21\u5f0f\u7b49\u65b9\u5f0f\u91cd\u6784\u3002"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>d});var t=i(96540);const r={},s=t.createContext(r);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);