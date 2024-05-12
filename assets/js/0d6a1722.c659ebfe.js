"use strict";(self.webpackChunkhanamaru_openchat_pages=self.webpackChunkhanamaru_openchat_pages||[]).push([[460],{5025:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(4848),a=t(8453);const r={slug:"make-wordcloud",title:"txt\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u6587\u3092\u62fe\u3063\u3066MeCab\u3067\u5f62\u614b\u7d20\u89e3\u6790\u3092\u3057\u3066WordCloud\u3092\u51fa\u529b\u3059\u308b",authors:["hanamaru"],tags:["Python","API","CSV"]},i=void 0,s={permalink:"/hanamaru-openchat-pages/blog/make-wordcloud",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-05-13-markdown.md",source:"@site/blog/2024-05-13-markdown.md",title:"txt\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u6587\u3092\u62fe\u3063\u3066MeCab\u3067\u5f62\u614b\u7d20\u89e3\u6790\u3092\u3057\u3066WordCloud\u3092\u51fa\u529b\u3059\u308b",description:"\u4efb\u610f\u306e\u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u6587\u304c\u66f8\u304d\u8fbc\u307e\u308c\u3066\u3044\u308b\u3068\u3059\u308b\u3002",date:"2024-05-13T00:00:00.000Z",tags:[{label:"Python",permalink:"/hanamaru-openchat-pages/blog/tags/python"},{label:"API",permalink:"/hanamaru-openchat-pages/blog/tags/api"},{label:"CSV",permalink:"/hanamaru-openchat-pages/blog/tags/csv"}],readingTime:3.41,hasTruncateMarker:!1,authors:[{name:"Hanamaru",title:"Openchat Owner",url:"https://www.openrec.tv/user/bw3hyfknoish",imageURL:"https://image-handler.openrec.tv/eyJidWNrZXQiOiJvcGVucmVjLWFwcGRhdGEiLCJrZXkiOiJ1c2VyLzEyMDk4MjU5LzEyMDk4MjU4NDUucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoiMzIwIn19LCJvdXRwdXRGb3JtYXQiOiJwbmcifQ==?version=1655862983.png",key:"hanamaru"}],frontMatter:{slug:"make-wordcloud",title:"txt\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u6587\u3092\u62fe\u3063\u3066MeCab\u3067\u5f62\u614b\u7d20\u89e3\u6790\u3092\u3057\u3066WordCloud\u3092\u51fa\u529b\u3059\u308b",authors:["hanamaru"],tags:["Python","API","CSV"]},unlisted:!1,nextItem:{title:"\u7279\u5b9a\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u306e\u30c1\u30e3\u30c3\u30c8\u3092\u6642\u671f\u3092\u6307\u5b9a\u3057\u3066CSV\u3067\u53d6\u5f97\u3059\u308b\uff08Python\uff09",permalink:"/hanamaru-openchat-pages/blog/get-chat"}},d={authorsImageUrls:[void 0]},c=[];function l(n){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"\u4efb\u610f\u306e\u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u6587\u304c\u66f8\u304d\u8fbc\u307e\u308c\u3066\u3044\u308b\u3068\u3059\u308b\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"\u306d\u3080\n\u306a\u3093\u3060\u3053\u308c\u306f\uff01\n\u304d\u3064\n\u3064\u3089\n\u2728\n\u5bdd\u305f\u304b\n\u5bdd\u3066\u306a\u3044\u3088\n\u8d77\u304d\u305f\n\u3060\u308b\n\u304a\u306f\u3088\u3046\n\u306a\u3093\u304b\u30aa\u30d7\u30c1\u30e3\u3067\u6ed1\u308b\u306e\u6065\u305a\u304b\u3057\u3044\u3088\u306d\n\u7686\u3055\u3093\u3053\u3093\u306b\u3061\u306f\n\u3053\u3093\u306b\u3061\u306f\n\u3072\u30fc\u3061\u3083\u3093\u30b9\u30d7\u30e9\u8cb7\u308f\u306a\u3044\u306e?\n\ud83d\ude05\n\u2026\u2026\u2026\n\u3069\u3046\u3057\u3088\u3002\u3002\u3002\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u3053\u306e\u3068\u304d\u3001\u3053\u306e\u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u6587\u3092\u57fa\u306b\u30ef\u30fc\u30c9\u30af\u30e9\u30a6\u30c9\u3092\u4f5c\u6210\u3059\u308b\u30b3\u30fc\u30c9\u3092\u793a\u3059\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-py",children:"from wordcloud import WordCloud\nimport MeCab\nimport os\n\n# \u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\ntext_file_path = \"***\u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\u3092\u6307\u5b9a***\"\n# \u4fdd\u5b58\u5148\u306e\u30d5\u30a9\u30eb\u30c0\u30d1\u30b9\nfolder_path = \"***\u753b\u50cf\u51fa\u529b\u5148\u3092\u6307\u5b9a***\"\n# \u53c2\u7167\u3059\u308b\u30d5\u30a9\u30f3\u30c8\u306e\u30d5\u30a9\u30eb\u30c0\u30d1\u30b9\nfont_path = \"***.ttf\u3092\u6307\u5b9a***\"\n\n# \u30c6\u30ad\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30c6\u30ad\u30b9\u30c8\u3092\u8aad\u307f\u8fbc\u3080\nwith open(text_file_path, 'r', encoding='utf-8') as file:\n    text = file.read()\n\n# MeCab\u306e\u521d\u671f\u5316\nmecab = MeCab.Tagger(\"C:\\Program Files\\MeCab\\dic\\ipadic\")\n\n# \u5f62\u614b\u7d20\u89e3\u6790\nnode = mecab.parseToNode(text)\noutput = []\n#\u610f\u5473\u3092\u306a\u3055\u306a\u3044\u3088\u3046\u306a\u5358\u8a9e\u3092\u9664\u5916\u3059\u308b\u3002\nstoplist = ['\u3042', '\u3044', '\u3046', '\u3048', '\u304a', '\u304b', '\u304d', '\u304f', '\u3051', '\u3053', '\u3055', '\u3057', '\u3059', '\u305b', '\u305d',\n            '\u305f', '\u3061', '\u3064', '\u3066', '\u3068', '\u306a', '\u306b', '\u306c', '\u306d', '\u306e', '\u306f', '\u3072', '\u3075', '\u3078', '\u307b',\n            '\u307e', '\u307f', '\u3080', '\u3081', '\u3082', '\u3084', '\u3086', '\u3088', '\u3089', '\u308a', '\u308b', '\u308c', '\u308d', '\u308f', '\u3092', '\u3093',\n            '\u30a2', '\u30a4', '\u30a6', '\u30a8', '\u30aa', '\u30ab', '\u30ad', '\u30af', '\u30b1', '\u30b3', '\u30b5', '\u30b7', '\u30b9', '\u30bb', '\u30bd',\n            '\u30bf', '\u30c1', '\u30c4', '\u30c6', '\u30c8', '\u30ca', '\u30cb', '\u30cc', '\u30cd', '\u30ce', '\u30cf', '\u30d2', '\u30d5', '\u30d8', '\u30db',\n            '\u30de', '\u30df', '\u30e0', '\u30e1', '\u30e2', '\u30e4', '\u30e6', '\u30e8', '\u30e9', '\u30ea', '\u30eb', '\u30ec', '\u30ed', '\u30ef', '\u30f2', '\u30f3',\n            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',\n            'U', 'V', 'W', 'X', 'Y', 'Z',\n            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',\n            '\uff41', '\uff42', '\uff43', '\uff44', '\uff45', '\uff46', '\uff47', '\uff48', '\uff49', '\uff4a', '\uff4b', '\uff4c', '\uff4d', '\uff4e', '\uff4f', '\uff50', '\uff51', '\uff52', '\uff53', '\uff54', '\uff55', '\uff56', '\uff57', '\uff58', '\uff59', '\uff5a',\n            '\uff21', '\uff22', '\uff23', '\uff24', '\uff25', '\uff26', '\uff27', '\uff28', '\uff29', '\uff2a', '\uff2b', '\uff2c', '\uff2d', '\uff2e', '\uff2f', '\uff30', '\uff31', '\uff32', '\uff33', '\uff34', '\uff35', '\uff36', '\uff37', '\uff38', '\uff39', '\uff3a',\n            '\u3042\u308b', '\u306a\u3044', '\u3059\u308b', '\u3044\u3044', '\u304d\u3063', '\u306a\u3063', '\u306a\u3055\u3044', '\u3082\u3093', '\u305f\u3081', '\u304a\u308a', '\u3042\u308a', '\u3044\u3063']\n\nwhile node:\n    word_type = node.feature.split(\",\")[0]\n    if word_type in [\"\u540d\u8a5e\",\"\u5f62\u5bb9\u8a5e\",\"\u52d5\u8a5e\"]:\n        if not node.surface in stoplist and not node.surface.isdigit():\n            output.append(node.surface.upper())\n    node = node.next\n\n#print(output)\n#print(len(output))\n\n#\u5f62\u614b\u7d20\u89e3\u6790\u3055\u308c\u305f\u5358\u8a9e\u306e\u30ea\u30b9\u30c8\u3092WordCloud\u7528\u306b\u51e6\u7406\ntext = ' '.join(output)\n\nprint(text)\n\n# \u30ef\u30fc\u30c9\u30af\u30e9\u30a6\u30c9\u306e\u751f\u6210\n# collocations\u3092False\u306b\u3057\u306a\u3044\u3068\u91cd\u8907\u3057\u3066\u73fe\u308c\u308b\u5358\u8a9e\u304c\u3042\u308b\n# \u8272\u306fbackground_color=(255, 202, 191)\u3067\u3082\u6307\u5b9a\u53ef\u80fd\uff08RGB\uff09\nwordcloud = WordCloud(background_color='white', font_path=font_path, collocations = False, width=1920,height=1080).generate(text)\n\n# \u30d5\u30a9\u30eb\u30c0\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u4f5c\u6210\u3059\u308b\nif not os.path.exists(folder_path):\n    os.makedirs(folder_path)\n\n# WordCloud\u3092\u753b\u50cf\u3068\u3057\u3066\u4fdd\u5b58\nwordcloud_file_path = os.path.join(folder_path, \"wordcloud.png\")\nwordcloud.to_file(wordcloud_file_path)\n\n# \u4fdd\u5b58\u3057\u305f\u30d1\u30b9\u3092\u8868\u793a\nprint(\"\u30ef\u30fc\u30c9\u30af\u30e9\u30a6\u30c9\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f:\", wordcloud_file_path)\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u306a\u304a\u3001\u3042\u3089\u304b\u3058\u3081\u4ee5\u4e0b\u306e\u30da\u30fc\u30b8\u304b\u3089 MeCab \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001\u8f9e\u66f8\u3092\u30b3\u30fc\u30c9\u5185\u3067\u660e\u793a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\uff08# MeCab \u306e\u521d\u671f\u5316\u3000\u306e\u90e8\u5206\uff09"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://github.com/ikegami-yukino/mecab/releases",children:"https://github.com/ikegami-yukino/mecab/releases"})}),"\n",(0,o.jsx)(e.p,{children:"\u5b8c\u6210\u54c1\u306f\u300c\u6708\u5225\u30aa\u30d7\u30c1\u30e3\u30c8\u30ec\u30f3\u30c9\u300d\u3092\u898b\u3066\u307b\u3057\u3044\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u4e0a\u8a18\u306b\u63b2\u8f09\u3057\u305f\u56f3\u306f\u3053\u308c\u3089\u306e\u4ed6\u3001\u8272\u3005\u8abf\u6574\u3057\u3066\u3042\u308b\u3002"})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>s});var o=t(6540);const a={},r=o.createContext(a);function i(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);