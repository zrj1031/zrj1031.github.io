import{r as n,o as a,c as p,a as e,b as d,F as s,e as l,d as c}from"./app.25546b90.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";var t="/assets/pnpm/pnpm.webp",u="/assets/pnpm/pnpm-vue.png",m="/assets/pnpm/pnpm-dependency.png";const i={},v=l('<h1 id="\u6D45\u8C08pnpm" tabindex="-1"><a class="header-anchor" href="#\u6D45\u8C08pnpm" aria-hidden="true">#</a> \u6D45\u8C08pnpm</h1><blockquote><p>npm\u5B58\u5728\u7684\u7F3A\u9677\uFF0Cpnpm\u662F\u600E\u6837\u89E3\u51B3\u4ED6\u4EEC\u7684</p></blockquote><h2 id="npm-\u5B58\u5728\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#npm-\u5B58\u5728\u7684\u95EE\u9898" aria-hidden="true">#</a> npm \u5B58\u5728\u7684\u95EE\u9898</h2><p>\u5148\u6765\u770B<code>npm</code>\u7684\u5DE5\u4F5C\u6A21\u5F0F, \u5B58\u5728<code>vue</code>\u4F9D\u8D56<code>foo</code>,<code>bar</code>, <code>react</code>\u4F9D\u8D56<code>foo</code>,<code>bar</code>\u7684\u5173\u7CFB</p><p>\u5728<code>npm3</code>\u4E4B\u524D\uFF0C\u4F1A\u5728<code>node_modules</code>\u76EE\u5F55\u4E0B\u5206\u522B\u5B89\u88C5<code>vue</code>,<code>react</code>, \u7136\u540E<code>vue</code>\u76EE\u5F55\u4E0B\u5B89\u88C5<code>foo</code>\u3001<code>bar</code>, <code>react</code>\u76EE\u5F55\u4E0B\u5B89\u88C5<code>foo</code>\u3001<code>bar</code></p><ul><li><p>\u4E00\u65B9\u9762\u8FD9\u4F1A\u9020\u6210<code>foo</code>\u3001<code>bar</code>\u91CD\u590D\u5B89\u88C5</p></li><li><p>\u53E6\u4E00\u65B9\u9762\u5982\u679C<code>foo</code>\u53C8\u4F9D\u8D56\u4E86<code>base-1</code>, <code>base1</code>\u53C8\u4F9D\u8D56\u4E86<code>base-2</code>...\u65E0\u9650\u5957\u5A03\u540E\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u7684\u76EE\u5F55\u4E5F\u4F1A\u8FC7\u957F\uFF0C\u8D85\u51FAwindows\u7684\u6587\u4EF6\u76EE\u5F55\u957F\u5EA6\u9650\u5236</p></li></ul><p>\u4E3A\u4E86\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898, \u5728<code>npm3</code>\u4E4B\u540E\uFF0C\u9009\u62E9\u4E86\u4E00\u4E2A\u5E73\u94FA\u7684\u65B9\u5F0F</p><p>\u8FD8\u662F\u4E0A\u9762\u7684\u573A\u666F\uFF0C\u4F1A\u5728<code>node_modules</code>\u76EE\u5F55\u4E0B\u5B89\u88C5<code>vue</code>, \u53D1\u73B0<code>vue</code>\u4F9D\u8D56\u4E86<code>foo</code>,<code>bar</code>, \u5219\u76F4\u63A5\u628A<code>foo</code>,<code>bar</code>\u5B89\u88C5\u5728<code>node_modules</code>\u4E0B\uFF0C\u518D\u5B89\u88C5<code>react</code>,\u6B64\u65F6\u53D1\u73B0<code>react</code>\u4E5F\u4F9D\u8D56\u4E86<code>foo</code>,<code>bar</code>, \u5219\u4E0D\u4F1A\u91CD\u590D\u5B89\u88C5, \u4F46\u4E5F\u5E26\u6765\u4E86\u65B0\u7684\u95EE\u9898\uFF0C\u6211\u5728<code>package.json</code>\u7684<code>dependency</code>\u4E0A\u6CA1\u6709\u58F0\u660E\u8FC7<code>foo</code>,<code>bar</code>,\u4E5F\u53EF\u4EE5\u5728<code>src</code>\u6587\u4EF6\u4E0B\u76F4\u63A5<code>import</code>\u4F7F\u7528\uFF0C\u5373\u5E38\u8BF4\u7684<code>\u5E7B\u5F71\u4F9D\u8D56</code>\uFF0C\u53E6\u4E00\u65B9\u9762\u5982\u679C\u7248\u672C\u4E0D\u4E00\u6837\u7684\u65F6\u5019\uFF0C\u4E5F\u4E0D\u80FD\u4F5C\u51FA\u6700\u4F18\u89E3\uFF0C\u5982\u679C<code>vue</code>\u4F9D\u8D56<code>foo(v1)</code>,<code>react</code>\u4F9D\u8D56<code>foo(v2)</code>,<code>angular</code>\u4F9D\u8D56<code>foo(v2)</code>,\u6211\u4EEC\u5148\u5B89\u88C5<code>vue</code>, \u7136\u540E\u5B89\u88C5\u4E86<code>foo(v1)</code>,\u5E76\u63D0\u5347\u5230\u4E86<code>node_modules</code>\u7684\u5C42\u7EA7\u4E0B\uFF0C\u518D\u5B89\u88C5<code>react</code>,\u53D1\u73B0<code>node_modules</code>\u5DF2\u7ECF\u6709\u4E86<code>foo</code>,\u4F46\u662F\u7248\u672C\u53F7\u4E0D\u5BF9\uFF0C\u5219\u9009\u62E9\u5728<code>react</code>\u76EE\u5F55\u4E0B\u7EE7\u7EED\u5B89\u88C5<code>foo(v2)</code>\uFF0C<code>angular</code>\u540C\u7406\u4F1A\u5728<code>angular</code>\u76EE\u5F55\u4E0B\u5B89\u88C5<code>foo(v2)</code>,\u8FD9\u6837<code>foo(v2)</code>\u5C31\u88AB\u91CD\u590D\u5B89\u88C5\u4E862\u6B21</p><ul><li>\u5E7B\u5F71\u4F9D\u8D56</li></ul><blockquote><p>\u56E0\u4E3A\u5B58\u5728level\u63D0\u5347\uFF0C\u6CA1\u5B89\u88C5\u7684\u5305\u4E5F\u53EF\u4EE5\u4F7F\u7528</p></blockquote><ul><li>\u91CD\u590D\u4F9D\u8D56</li></ul><blockquote><p>\u4E0D\u80FD\u4FDD\u8BC1\u67D0\u4E2A\u5305\u7684\u67D0\u4E2A\u7248\u672C\u53EA\u88AB\u5B89\u88C5\u4E00\u6B21\uFF0C\u770B\u5305\u5B89\u88C5\u7684\u987A\u5E8F</p></blockquote><ul><li>\u591A\u4E2A\u9879\u76EE\u4E0B\u4E0D\u80FD\u91CD\u590D\u5229\u7528</li></ul><blockquote><p>\u6211\u670910\u4E2A\u9879\u76EE\u90FD\u4F9D\u8D56\u4E86<code>vue</code>, \u7248\u672C\u53F7\u4E5F\u4E00\u81F4\uFF0C\u4F46\u6211\u9700\u8981\u5728\u7535\u8111\u78C1\u76D8\u4E0A\u5B89\u88C510\u904D\u4F9D\u8D56\uFF0C<code>vue</code>\u53C8\u4F9D\u8D56<code>foo</code>, <code>foo</code>\u4E5F\u5B89\u88C510\u904D\uFF0C\u4E0D\u65AD\u5957\u5A03\uFF0C\u5BF9\u78C1\u76D8\u7684\u5B58\u50A8\u6027\u80FD\u662F\u5F88\u5927\u7684\u6D6A\u8D39</p></blockquote><h2 id="pnpm\u662F\u5982\u4F55\u8BBE\u8BA1\u7684" tabindex="-1"><a class="header-anchor" href="#pnpm\u662F\u5982\u4F55\u8BBE\u8BA1\u7684" aria-hidden="true">#</a> pnpm\u662F\u5982\u4F55\u8BBE\u8BA1\u7684</h2><blockquote><p>\u8F6F\u94FE\u548C\u786C\u94FE\u7684\u5DE7\u5999\u7ED3\u5408, \u901A\u8FC7 <code>hardLink</code>(\u786C\u94FE) \u5728\u5168\u5C40\u91CC\u9762\u641E\u4E2A <code>store</code> \u76EE\u5F55\u6765\u5B58\u50A8 <code>node_modules</code> \u4F9D\u8D56\u91CC\u9762\u7684 <code>hard link</code> \u5730\u5740\uFF0C\u7136\u540E\u5728\u5F15\u7528\u4F9D\u8D56\u7684\u65F6\u5019\u5219\u662F\u901A\u8FC7 <code>symlink</code>(\u8F6F\u94FE) \u53BB\u627E\u5230\u5BF9\u5E94\u865A\u62DF\u78C1\u76D8\u76EE\u5F55\u4E0B(.pnpm \u76EE\u5F55)\u7684\u4F9D\u8D56\u5730\u5740\u3002</p></blockquote><p>\u67B6\u6784\u56FE <img src="'+t+`" alt="\u67B6\u6784\u56FE"></p><h3 id="\u8F6F\u94FE" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u94FE" aria-hidden="true">#</a> \u8F6F\u94FE</h3><p>\u6211\u4EEC\u5148\u5B89\u88C5\u4E00\u4E2Avue\u4F9D\u8D56\u770B\u770B\u6587\u4EF6\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="`+u+`" alt="pnpm vue"></p><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u5728node_modules\u4E0B\u53EA\u6709vue\u7684\u5B89\u88C5\u5305\uFF0C\u5E76\u4E14\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u8FD9\u662F\u4E2A\u8F6F\u94FE</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> node_modules <span class="token operator">&amp;&amp;</span> ll
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>result</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vue -<span class="token operator">&gt;</span> .pnpm/vue@3.2.33/node_modules/vue
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5F53\u6211\u4EEC\u5728 <code>src</code> \u4E0B <code>import Vue from &#39;vue&#39;</code> \u7684\u65F6\u5019\uFF0C\u6839\u636E <code>node</code> \u7684\u8DEF\u5F84\u5206\u6790\u89C4\u5219\uFF0C\u4ED6\u4F1A\u53BB <code>node_modules/vue</code> \u4E2D\u67E5\u627E\uFF0C\u800C <code>node_modules/vue</code> \u5B9E\u9645\u662F <code>.pnpm/vue@3.2.33/node_modules/vue</code> \u7684\u8F6F\u8FDE\u63A5</p><p>\u8FD9\u6837\u6211\u4EEC\u5C31\u89E3\u51B3\u4E86 <code>npm</code> \u6A21\u5F0F\u4E0B\u5E7B\u5F71\u4F9D\u8D56\u7684\u95EE\u9898, \u6211\u4EEC\u76F4\u63A5\u5728 <code>src</code> \u9879\u76EE\u4E0B<code>import Foo from &#39;foo&#39;</code> \u65F6\u4F1A\u627E\u4E0D\u5230\u5BF9\u5E94\u7684\u5305</p><p>\u4F46\u4E3A\u4EC0\u4E48\u662F <code>.pnpm/&lt;packageName&gt;@&lt;version&gt;/node_modules/&lt;packageName&gt;</code>\u7684\u683C\u5F0F, \u5176\u5B9E\u8FD9\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u5C55\u5F00.pnpm\u6587\u4EF6\u5177\u4F53\u770B</p><p><img src="`+m+'" alt="pnpm dependency"></p><p>\u6211\u4EEC\u4F1A\u53D1\u73B0\u9664\u4E86<code>vue</code>\u8FD8\u6709\u5176\u4ED6\u4E0A\u6587\u63D0\u5230\u7684\u5E7B\u5F71\u4F9D\u8D56, \u5728<code>vue</code>\u7684<code>node_modules</code>\u4E0B\u4E5F\u505A\u4E86\u8F6F\u94FE</p><blockquote><p>\u8FD9\u6837\u505A\u7684\u597D\u5904, \u4E00\u65B9\u9762\u53EF\u4EE5\u907F\u514D\u91CD\u590D\u5B89\u88C5\uFF0C\u53E6\u4E00\u65B9\u9762\u53EF\u4EE5\u89E3\u51B3\u53EF\u80FD\u9020\u6210\u7684\u8DEF\u5F84\u8FC7\u957F\u95EE\u9898</p></blockquote><ul><li><p><code>vue</code>(\u4F9D\u8D56foo@v1),\u6211\u4EEC\u5728\u9879\u76EE\u53C8\u5B89\u88C5\u4E86<code>angular</code>\uFF08\u4F9D\u8D56foo@v2\uFF09\u3001<code>react</code>(\u4F9D\u8D56foo@v2)</p><ul><li><p>\u5728npm\u6A21\u5F0F\u4E0B\uFF0C\u5982\u679Cvue\u5148\u5B89\u88C5\u4E86\uFF0C\u6B64\u65F6<code>foo@v1</code>\u5DF2\u7ECF\u88AB\u63D0\u5347\u5230<code>node_modules</code>\u4E0B\u4E86\uFF0C<code>foo@v2</code>\u8FD9\u4E2A\u5305\u5206\u522B\u4F1A\u88AB\u5B9E\u9645\u5B89\u88C5\u5728<code>angular</code>\u3001<code>react</code>\u5404\u81EA\u76EE\u5F55\u7684 <code>node_modules</code> \u76EE\u5F55\u4E0B\uFF0C\u76F8\u5F53\u4E8E\u88AB\u5B89\u88C5\u4E862\u6B21</p></li><li><p>\u5728pnpm\u6A21\u5F0F\u4E0B, <code>vue</code>\u6307\u5411\u4E86\u4E00\u4E2A\u8F6F\u94FE\u5230<code>.pnpm/foo@v1/node_modules/foo</code>, <code>angular</code>\u6307\u5411\u4E86\u4E00\u4E2A\u8F6F\u94FE\u5230<code>.pnpm/foo@v2/node_modules/foo</code>, <code>react</code>\u6307\u5411\u4E86\u4E00\u4E2A\u8F6F\u94FE\u5230<code>.pnpm/foo@v2/node_modules/foo</code>, \u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u5404\u4E2A\u7248\u672C\u53EA\u4F1A\u5B89\u88C5\u4E00\u6B21</p></li></ul></li><li><p>\u9879\u76EE\u4E2D\u5F15\u7528\u4E86 <code>vue</code> , \u4F9D\u8D56\u7BA1\u7406\u7684\u89C4\u5219\u4F1A\u53BB <code>node_modules</code> \u91CC\u9762\u67E5\u627E <code>vue</code>, \u5B9E\u9645\u662F <code>.pnpm/vue@3.2.33/node_modules/vue</code> \u7684\u8F6F\u94FE \u5F53\u627E\u5230 <code>vue</code> \u4E4B\u540E\uFF0C\u5728\u4EE3\u7801\u6267\u884C\u8FC7\u7A0B\u4E2D\u53C8\u53D1\u73B0 <code>vue</code> \u4F9D\u8D56\u4E86 <code>foo</code>, <code>foo</code>\u53C8\u662F\u4E2A\u6307\u5411<code>.pnpm/foo@v1/node_modules/foo</code>\u7684\u8F6F\u94FE, \u5982\u679C<code>foo</code>\u53C8\u4F9D\u8D56\u4E86<code>bar</code>, \u540C\u7406\uFF0C\u56E0\u6B64\u65E0\u8BBA\u5D4C\u5957\u6709\u591A\u6DF1, \u8FD9\u4E2A\u5305\u7684\u8DEF\u5F84<code>.pnpm/&lt;packageName&gt;@&lt;version&gt;/node_modules/&lt;packageName&gt;</code>, \u5C31\u5DE7\u5999\u7684\u89E3\u51B3\u4E86\u8DEF\u5F84\u8FC7\u957F\u7684\u95EE\u9898</p></li></ul><h3 id="\u786C\u94FE" tabindex="-1"><a class="header-anchor" href="#\u786C\u94FE" aria-hidden="true">#</a> \u786C\u94FE</h3><p>\u6211\u4EEC\u5E73\u65F6\u5199\u4EE3\u7801\u4E00\u822C\u4E5F\u4E0D\u4F1A\u53EA\u6709\u4E00\u4E2A\u9879\u76EE\uFF0C\u90A3A\u9879\u76EE\u4F9D\u8D56\u4E86foo, B\u9879\u76EE\u4F9D\u8D56\u4E86foo, \u6211\u4EEC\u5982\u679C\u5728\u7535\u8111\u7684\u78C1\u76D8\u90FD\u91CD\u590D\u4F9D\u8D56foo, \u4E5F\u662F\u4E2A\u6D6A\u8D39, \u786C\u94FE\u5C31\u662F\u5E2E\u6211\u4EEC\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684</p><p>\u6211\u4EEC\u5B9E\u9645\u5B89\u88C5\u4E86<code>foo</code>, \u8F6F\u94FE\u6307\u5411\u4E86 <code>.pnpm/foo@v1/node_modules/foo</code>\uFF0C\u6B64\u65F6\u518D\u6B21\u786C\u94FE\u6307\u5411\u78C1\u76D8\u7A7A\u95F4\u4E0B<code>pnpm</code>\u5F00\u8F9F\u51FA\u6765\u7684<code>store</code>\u5904</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',36),f={href:"https://juejin.cn/post/7044807973868142622",target:"_blank",rel:"noopener noreferrer"},h=c("https://juejin.cn/post/7044807973868142622"),b={href:"https://juejin.cn/post/7001794162970361892",target:"_blank",rel:"noopener noreferrer"},_=c("https://juejin.cn/post/7001794162970361892");function g(k,x){const o=n("ExternalLinkIcon");return a(),p(s,null,[v,e("p",null,[e("a",f,[h,d(o)])]),e("p",null,[e("a",b,[_,d(o)])])],64)}var N=r(i,[["render",g]]);export{N as default};
