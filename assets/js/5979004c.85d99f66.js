"use strict";(self.webpackChunkhanamaru_openchat_pages=self.webpackChunkhanamaru_openchat_pages||[]).push([[74],{8468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(4848),r=n(8453);const s={slug:"get-chat",title:"\u7279\u5b9a\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u306e\u30c1\u30e3\u30c3\u30c8\u3092\u6642\u671f\u3092\u6307\u5b9a\u3057\u3066CSV\u3067\u53d6\u5f97\u3059\u308b\uff08Python\uff09",authors:["hanamaru"],tags:["Python","API","CSV"]},o=void 0,i={permalink:"/hanamaru-openchat-pages/blog/get-chat",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-05-12-markdown.md",source:"@site/blog/2024-05-12-markdown.md",title:"\u7279\u5b9a\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u306e\u30c1\u30e3\u30c3\u30c8\u3092\u6642\u671f\u3092\u6307\u5b9a\u3057\u3066CSV\u3067\u53d6\u5f97\u3059\u308b\uff08Python\uff09",description:"CSV \u3068 TXT \u3067\u4fdd\u5b58\u3057\u3066\u3044\u308b\u3002API \u306a\u306e\u3067\u3001\u3042\u307e\u308a\u30eb\u30fc\u30d7\u3055\u305b\u308b\u3068\u76f8\u624b\u306e\u30b5\u30fc\u30d0\u306b\u8ff7\u60d1\u304c\u304b\u304b\u308b\u306e\u3067\u7559\u610f\u3002",date:"2024-05-12T00:00:00.000Z",tags:[{label:"Python",permalink:"/hanamaru-openchat-pages/blog/tags/python"},{label:"API",permalink:"/hanamaru-openchat-pages/blog/tags/api"},{label:"CSV",permalink:"/hanamaru-openchat-pages/blog/tags/csv"}],readingTime:1.455,hasTruncateMarker:!1,authors:[{name:"Hanamaru",title:"Openchat Owner",url:"https://www.openrec.tv/user/bw3hyfknoish",imageURL:"https://image-handler.openrec.tv/eyJidWNrZXQiOiJvcGVucmVjLWFwcGRhdGEiLCJrZXkiOiJ1c2VyLzEyMDk4MjU5LzEyMDk4MjU4NDUucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsIndpZHRoIjoiMzIwIn19LCJvdXRwdXRGb3JtYXQiOiJwbmcifQ==?version=1655862983.png",key:"hanamaru"}],frontMatter:{slug:"get-chat",title:"\u7279\u5b9a\u306e\u30c1\u30e3\u30f3\u30cd\u30eb\u306e\u30c1\u30e3\u30c3\u30c8\u3092\u6642\u671f\u3092\u6307\u5b9a\u3057\u3066CSV\u3067\u53d6\u5f97\u3059\u308b\uff08Python\uff09",authors:["hanamaru"],tags:["Python","API","CSV"]},unlisted:!1,prevItem:{title:"txt\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u6587\u3092\u62fe\u3063\u3066MeCab\u3067\u5f62\u614b\u7d20\u89e3\u6790\u3092\u3057\u3066WordCloud\u3092\u51fa\u529b\u3059\u308b",permalink:"/hanamaru-openchat-pages/blog/make-wordcloud"}},m={authorsImageUrls:[void 0]},p=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"CSV \u3068 TXT \u3067\u4fdd\u5b58\u3057\u3066\u3044\u308b\u3002API \u306a\u306e\u3067\u3001\u3042\u307e\u308a\u30eb\u30fc\u30d7\u3055\u305b\u308b\u3068\u76f8\u624b\u306e\u30b5\u30fc\u30d0\u306b\u8ff7\u60d1\u304c\u304b\u304b\u308b\u306e\u3067\u7559\u610f\u3002"}),"\n",(0,a.jsx)(t.p,{children:"\u30d1\u30b9\u3092\u6307\u5b9a\u3057\u306a\u3044\u3068\u3001Windows \u306a\u3089\u30e6\u30fc\u30b6\u30fc\u76f4\u4e0b\u306b\u4fdd\u5b58\u3055\u308c\u308b\uff08\u306f\u305a\uff09"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'import requests\nimport csv\nfrom datetime import datetime, timedelta, date\n\n\'\'\'\nM_ID \u306fhttps://www.openrec.tv/live/gkrpkm6ljz5 \u306e gkrpkm6ljz5 \u304c\u8a72\u5f53\nstart_at \u306f\u30c1\u30e3\u30c3\u30c8\u53d6\u5f97\u306e\u8d77\u70b9\u3068\u3059\u308b\u65e5\u6642\nfilename \u306b\u306f\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u7b49\u3092\u6307\u5b9a\ntoday \u306f\u5b9f\u884c\u6642\u306e\u65e5\u6642\u304c\u30bb\u30c3\u30c8\u3055\u308c\u308b \u2192 \u7d42\u70b9\u306e\u6642\u9593\u6307\u5b9a\u3092\u3057\u305f\u3044\u5834\u5408\u306f\u66f8\u304d\u63db\u3048\n\'\'\'\n\nM_ID = \'gkrpkm6ljz5\'\nstart_at = \'2024-01-01T15:00:00\'\nfilename = "chat_data.csv"\ntoday = date.today().isoformat()\n\n# API \u3092\u53e9\u304f\nendpoint = f"https://public.openrec.tv/external/api/v5/movies/{M_ID}/chats"\nlimit = 300\n\nparams = {\n"from_created_at": start_at,\n"is_including_system_message": "false",\n"limit": str(limit)\n}\n\nheaders = ["Posted At", "Nickname", "User ID", "Message", "Recxuser ID"]\n\n# \u30eb\u30fc\u30d7\u56de\u6570\u306e\u30ab\u30a6\u30f3\u30bf\u30fc\u3092\u521d\u671f\u5316\nloop_count = 0\n\nwith open(filename, "w", newline="", encoding="utf-8") as file:\nwriter = csv.writer(file)\nwriter.writerow(headers)\n\n    while True:\n        response = requests.get(endpoint, params=params)\n        data = response.json()\n\n        if not data:\n            break\n\n        # \u30eb\u30fc\u30d7\u56de\u6570\u306e\u30ab\u30a6\u30f3\u30bf\u30fc\u3092\u30a4\u30f3\u30af\u30ea\u30e1\u30f3\u30c8\n        loop_count += 1\n\n        for item in data:\n            nickname = item["user"]["nickname"]\n            user_id = item["user"]["id"]\n            message = item["message"]\n            posted_at = item["posted_at"]\n            recxuser_id = item["user"]["recxuser_id"]\n\n            posted_at_datetime = datetime.fromisoformat(posted_at)\n            formatted_posted_at = posted_at_datetime.strftime("%Y/%m/%d %H:%M:%S")\n\n            row = [formatted_posted_at, nickname, user_id, message, recxuser_id]\n            writer.writerow(row)\n\n        last_posted_at = data[-1]["posted_at"]\n        next_posted_at_datetime = datetime.fromisoformat(last_posted_at) + timedelta(seconds=1)\n        next_posted_at_str = next_posted_at_datetime.strftime("%Y-%m-%dT%H:%M:%S")\n\n        if next_posted_at_str[:10] >= today:\n            break\n\n        params["from_created_at"] = next_posted_at_str\n        print(next_posted_at_str)\n\n# \u30eb\u30fc\u30d7\u56de\u6570\uff08\u7d2f\u8a08\uff09\u3092\u8868\u793a\nprint("Total loop count:", loop_count)\n'})})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);