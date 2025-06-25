---
title: "github-markdown-css"
slug: "github-markdown-css"
---

來源：[npm - github-markdown-css](https://www.npmjs.com/package/github-markdown-css/v/4.0.0)

一種 css 套件，引入後的樣式就如同 github 的 readme 的樣式。
可以快速幫你的網頁（尤其是使用 markdown 編寫）添加樣式。

專案中引入套件：
```shell
 npm install github-markdown-css
```

接著在想要用的頁面中引入 css，想要引入的元件上加上 `markdown-body` 的 className 就可以了。

```javascript
import 'github-markdown-css/github-markdown.css';
export default function Article({ contentHtml }: { contentHtml: string }) {
    return (
        <article
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
    );
}
```

看起來會跟 github 的文件檔看起來一模一樣，熟悉他們文件檔的會看得很習慣。
