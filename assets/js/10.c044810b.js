(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{177:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"使用node-js抓取其他网站数据，以及cheerio的介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用node-js抓取其他网站数据，以及cheerio的介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用node.js抓取其他网站数据，以及cheerio的介绍")]),t._v(" "),n("h2",{attrs:{id:"一、基本思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、基本思路","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、基本思路")]),t._v(" "),n("p",[t._v(" 　　首先寻找一个网址：http://tech.ifeng.com/，因为这个是http协议，所以我们需要用到node.js的HTTP模块，我们使用HTTP模块中的get()方法进行抓取。其中假如我们不需要抓取的所有数据，而我们只需要其中的部分数据，比如某个类下面的a标签里的文字，这时如果是在前端中我们可以用DOM操作找到这个节点，但是node.js中没有DOM操作，所以这里我们需要用到cheerio这个库。既然抓取了网站上的数据就会涉及到文件的写入，这时需要用到node.js中的fs模块。")]),t._v(" "),n("h2",{attrs:{id:"二、学习网址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、学习网址","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、学习网址")]),t._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://cheerio.js.org/"}},[t._v("cheerio官方学习文档")]),n("br"),t._v(" "),n("a",{attrs:{href:"https://www.npmjs.com/package/cheerio"}},[t._v("cheerio npm网址")]),n("br"),t._v(" "),n("a",{attrs:{href:"https://nodejs.org/dist/latest-v10.x/docs/api/"}},[t._v("node.js官方文档")]),n("br"),t._v(" "),n("a",{attrs:{href:"http://nodejs.cn/api/"}},[t._v("node.js中文文档")]),n("br")])]),t._v(" "),n("h2",{attrs:{id:"二、什么是cheerio以及如何使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、什么是cheerio以及如何使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、什么是cheerio以及如何使用")]),t._v(" "),n("p",[t._v(" 　　cheerio是专为服务器设计的核心jQuery的快速，灵活和精益实现。他可以像jquery一样操作字符串。")]),t._v(" "),n("p",[t._v("安装cheerio")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("npm install cheerio\n")])])]),n("p",[t._v("具体使用")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cheerio "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'cheerio'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" $ "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cheerio"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("load")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'<h2 class=\"title\">Hello world</h2>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("$")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'h2.title'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("text")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'Hello there!'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("$")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'h2'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addClass")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'welcome'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n$"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("html")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v('//=> <h2 class="title welcome">Hello there!</h2>')]),t._v("\n")])])]),n("h2",{attrs:{id:"三、具体代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、具体代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、具体代码")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"http"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"fs"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cheerio "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"cheerio"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nhttp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"http://tech.ifeng.com/"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{attrs:{class:"token comment"}},[t._v("// 设置编码")]),t._v("\n\tres"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("setEncoding")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"utf8"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{attrs:{class:"token comment"}},[t._v('// 当接收到数据时，会触发 "data" 事件的执行')]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" html "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('""')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tres"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"data"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\thtml "),n("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{attrs:{class:"token comment"}},[t._v('// 数据接收完毕，会触发 "end" 事件的执行')]),t._v("\n\tres"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"end"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{attrs:{class:"token comment"}},[t._v("// 待保存到文件中的字符串")]),t._v("\n\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fileData "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('""')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{attrs:{class:"token comment"}},[t._v("// 调用 cheerio.load() 方法，生成一个类似于 jQuery 的对象")]),t._v("\n\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" $ "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cheerio"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("load")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{attrs:{class:"token comment"}},[t._v("// 接下来像使用 jQuery 一样来使用 cheerio")]),t._v("\n\t\t"),n("span",{attrs:{class:"token function"}},[t._v("$")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('".pictxt02"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("each")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" element"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" el "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("$")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" link "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("find")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"h3 a"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("attr")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"href"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\ttitle "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("find")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"h3 a"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("text")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\tdesc "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("children")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"p"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("text")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t\tfileData "),n("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{attrs:{class:"token template-string"}},[n("span",{attrs:{class:"token string"}},[t._v("`")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("link"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("\\r\\n")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("title"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("\\r\\n\\t")]),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("desc"),n("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{attrs:{class:"token string"}},[t._v("\\r\\n\\r\\n`")])]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),n("span",{attrs:{class:"token comment"}},[t._v('// console.log("读取结束，内容：");')]),t._v("\n\t\t"),n("span",{attrs:{class:"token comment"}},[t._v("// console.log(html);")]),t._v("\n\t\tfs"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("writeFile")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"./dist/source.txt"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fileData"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tconsole"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"成功"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="spider.md";s.default=o.exports}}]);