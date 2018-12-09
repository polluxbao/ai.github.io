(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{166:function(a,t,i){"use strict";i.r(t);var e=i(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"使用rap2模拟假数据实现前后端分离"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#使用rap2模拟假数据实现前后端分离","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用RAP2模拟假数据实现前后端分离")]),a._v(" "),i("h2",{attrs:{id:"一、为什么使用rap2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#一、为什么使用rap2","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、为什么使用RAP2")]),a._v(" "),i("p",[a._v(" 　　在一个项目的开发中，在页面需要使用大量数据进行渲染生成前，后端开发人员的接口可能还没有写完, 当前端没有后端数据支持的情况下，我们使用"),i("code",[a._v("mock.js")]),a._v("(mock.js用于生成随机数据，拦截ajax请求)模拟假数据，实现前后端分离。开发中我们也可以使用"),i("code",[a._v("RAP2")]),a._v("(这里面生成的数据基于mock.js)在线模拟假数据。")]),a._v(" "),i("h2",{attrs:{id:"二、关于rap2的一些学习网址"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#二、关于rap2的一些学习网址","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、关于RAP2的一些学习网址")]),a._v(" "),i("blockquote",[i("p",[i("a",{attrs:{href:"http://mockjs.com/"}},[a._v("mock.js网址")]),i("br"),a._v(" "),i("a",{attrs:{href:"http://rap2.taobao.org/"}},[a._v("RAP2网址")]),i("br"),a._v(" "),i("a",{attrs:{href:"https://github.com/thx/rap2-delos"}},[a._v("RAP2官方文档")]),i("br"),a._v(" "),i("a",{attrs:{href:"https://github.com/nuysoft/Mock/wiki/Syntax-Specification"}},[a._v("mock.js语法规范文档")]),a._v("s")])]),a._v(" "),i("h2",{attrs:{id:"三、与rap2同类型的jsonplaceholder"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#三、与rap2同类型的jsonplaceholder","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、与RAP2同类型的jsonplaceholder")]),a._v(" "),i("p",[a._v(" 　　jsonplaceholder也是模拟假数据，和RAP2差别是jsonplaceholder模拟出来的假数据只有固定值。")]),a._v(" "),i("blockquote",[i("p",[i("a",{attrs:{href:"http://jsonplaceholder.typicode.com/"}},[a._v("jsonplaceholder网址")])])]),a._v(" "),i("h2",{attrs:{id:"四、rap2使用步骤"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#四、rap2使用步骤","aria-hidden":"true"}},[a._v("#")]),a._v(" 四、RAP2使用步骤")]),a._v(" "),i("ol",[i("li",[a._v("进入RAP2网址账号注册成功以后，我们首先创建一个项目仓库，如下图所示：\n"),i("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/13479263-42662d6b0c93a5af.png?imageMogr2/auto-orient/strip%7CimageView2/2/",alt:"pic_1"}}),a._v(" "),i("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/13479263-046c84f4cd106ad1.png?imageMogr2/auto-orient/strip%7CimageView2/2/",alt:"pic_2"}})]),a._v(" "),i("li",[a._v("仓库建好以后，我们进入仓库，点击新建接口\n"),i("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/13479263-7af801f3120012e6.png?imageMogr2/auto-orient/strip%7CimageView2/2/",alt:"pic_3"}}),a._v(" "),i("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/13479263-a071bbd4935b0a5c.png?imageMogr2/auto-orient/strip%7CimageView2/2/",alt:"pic_4"}})]),a._v(" "),i("li",[a._v("新建接口完毕以后，我们可以看到如下图所示，我们点击商品列表，右图可以根据设置请求参数，和响应内容（点击绿色的编辑按钮），右图中还有一个地址，点击这个地址，进入以后内容如图pic_6所示\n"),i("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/13479263-67bad0a59894603a.png?imageMogr2/auto-orient/strip%7CimageView2/2/",alt:"pic_5"}}),a._v(" "),i("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/13479263-8a77f08dcb46e2ab.png?imageMogr2/auto-orient/strip%7CimageView2/2/",alt:"pic_6"}})]),a._v(" "),i("li",[a._v("接下来设置请求参数和响应参数，这里以响应参数举例，点击响应内容右边的新建创建响应属性，如下图所示：\n"),i("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/13479263-00358db2f1ba3387.png?imageMogr2/auto-orient/strip%7CimageView2/2/",alt:"pic_7"}})]),a._v(" "),i("li",[a._v("根据所创建的数据类型不同，左侧会出现pic_8所示“+”号，点击“+”号可以向其内部添加属性，\n图pic_8为按照填写的生成规则生成的响应数据。【"),i("code",[a._v("生成规则")]),a._v("有7中格式，关于生成规则可以查看文章开头的链接mock.js语法规范文档】，例如图pic_8中"),i("code",[a._v("data")]),a._v("属性的生成规则为9，表示生成9个元素。"),i("code",[a._v("id")]),a._v("属性的生成规则为1-9999，表示生成1-9999的随机数字。\n"),i("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/13479263-678ef11e9670bce9.png?imageMogr2/auto-orient/strip%7CimageView2/2/",alt:"pic_8"}})]),a._v(" "),i("li",[i("code",[a._v("mock.js")]),a._v("文档中关于"),i("code",[a._v("mock.random")]),a._v("的方法在数据模板中称为『占位符』，书写格式为 "),i("code",[a._v("@占位符(参数 [, 参数])")]),a._v("，可以用在初始值的设置中，随机生成一段内容。\n"),i("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/13479263-695f582b2939cc2a.png?imageMogr2/auto-orient/strip%7CimageView2/2/",alt:"pic_9"}})])]),a._v(" "),i("p",[a._v("转载文章请注名出处")])])}],!1,null,null,null);s.options.__file="rap2.md";t.default=s.exports}}]);