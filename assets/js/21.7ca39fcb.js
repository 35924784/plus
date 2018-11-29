(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{171:function(e,t,r){"use strict";r.r(t);var a=r(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("Plus（ThinkSNS Plus 缩写） 是基于 "),r("a",{ref:"noopener noreferrer",attrs:{href:"https://github.com/laravel/laravel",target:"_blank",rel:"noopener noreferrer"}},[e._v("laravel/laravel"),r("OutboundLink")],1),e._v(" 仓库进行开发的一个程序，\n前期是无纪律的直接向 Plus "),r("code",[e._v("master")]),e._v(" 分支进行 「merge」 操作，造成 Plus 的 Commits 线并非存粹，\n而是包含了 Laravel 的 Commits。")]),e._v(" "),r("p",[e._v("本指南从而解决这个问题，本指南将指导如何干净的跟随 Laravel 的更新。")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),r("p",[e._v("首先，我们应当牢记或者合并前查看 "),r("a",{ref:"noopener noreferrer",attrs:{href:"https://github.com/slimkit/thinksns-plus/tree/merge_laravel",target:"_blank",rel:"noopener noreferrer"}},[e._v("slimkit/thinksns-plus:merge_laravel"),r("OutboundLink")],1),e._v(" 上次合并 Laravel 的 commit hash，当然，会在本节下记录当前合并信息。")]),e._v(" "),r("p",[e._v("其次，更应当至少以 "),r("strong",[e._v("周")]),e._v(" 为节点关注 "),r("a",{ref:"noopener noreferrer",attrs:{href:"https://github.com/laravel/laravel/tree/master",target:"_blank",rel:"noopener noreferrer"}},[e._v("laravel/laravel:master"),r("OutboundLink")],1),e._v(" 的变动情况，\n但是这不是必须的。我们更应关注的是 "),r("a",{ref:"noopener noreferrer",attrs:{href:"https://github.com/laravel/laravel/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Releases"),r("OutboundLink")],1),e._v(" 一旦发现基于 "),r("code",[e._v("master")]),e._v(" 分支的新「tag」或者 "),r("code",[e._v("release")]),e._v(" 发布时，我们应当进行 "),r("code",[e._v("merge")]),e._v(" 操作。")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),r("p",[e._v("解决完冲突的代码结构就与 Laravel 官方一致了，而且这种合并方式不会让落下任何一个不同的地方。")]),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._m(36),e._v(" "),e._m(37),e._v(" "),r("p",[e._v("Commit message 推荐写法：")]),e._v(" "),e._m(38)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"合并-laravel-master-分支至-plus-master-指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并-laravel-master-分支至-plus-master-指南","aria-hidden":"true"}},[this._v("#")]),this._v(" 合并 Laravel "),t("code",[this._v("master")]),this._v(" 分支至 Plus "),t("code",[this._v("master")]),this._v(" 指南")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"#overview"}},[e._v("场景描述")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#merging-time"}},[e._v("Merging 时机")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#add-laravel-repo"}},[e._v("添加 Laravel 远端到本地仓库")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#merged-plus-master-branch"}},[e._v("步骤 1（合并 Plus "),r("code",[e._v("master")]),e._v(" 分支）")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#merged-laravel-master-branch"}},[e._v("步骤 2（合并 Laravel "),r("code",[e._v("master")]),e._v(" 分支）")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#resolve-conflict"}},[e._v("解决合并冲突")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#push-merge-laravel-branch"}},[e._v("步骤 3 提交 "),r("code",[e._v("merge_laravel")])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#merged-merge-laravel-branch-to-master"}},[e._v("步骤 4 将 "),r("code",[e._v("merge_laravel")]),e._v(" 合并至 "),r("code",[e._v("master")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{name:"overview"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"场景描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景描述","aria-hidden":"true"}},[this._v("#")]),this._v(" 场景描述")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{name:"merging-time"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"merging-时机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#merging-时机","aria-hidden":"true"}},[this._v("#")]),this._v(" Merging 时机")])},function(){var e=this.$createElement,t=this._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[this._v("上次 Merge 的 Larave 版本")]),this._v(" "),t("th",[this._v("上次 Merge 操作执行时间")])])]),this._v(" "),t("tbody",[t("tr",[t("td",[this._v("5.7.*")]),this._v(" "),t("td",[this._v("2018-09-21")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{name:"add-laravel-repo"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"添加-laravel-远端到本地仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加-laravel-远端到本地仓库","aria-hidden":"true"}},[this._v("#")]),this._v(" 添加 Laravel 远端到本地仓库")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("首先记住一个重要信息，Laravel 远端仓库为："),t("code",[this._v("https://github.com/laravel/laravel")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("执行 "),t("code",[this._v("git remote add laravel https://github.com/laravel/laravel")]),this._v(" 此时，你本地已经添加了 Laravel 远端在本地，")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("如果上述你本地早已完成，可忽略。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{name:"merged-plus-master-branch"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"步骤-1（合并-plus-master-分支）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-1（合并-plus-master-分支）","aria-hidden":"true"}},[this._v("#")]),this._v(" 步骤 1（合并 Plus "),t("code",[this._v("master")]),this._v(" 分支）")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("当我们发现可以 "),t("code",[this._v("merge")]),this._v(" 操作的版本时，不要着急去进行合并。")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("首先我们使用 "),r("code",[e._v("git checkout merge_laravel")]),e._v(" 进入 "),r("strong",[e._v("合并操作分支")]),e._v("，进入 "),r("code",[e._v("merge_laravel")]),e._v(" 分支后我们应该使用常规 "),r("code",[e._v("merge")]),e._v(" 将 "),r("code",[e._v("master")]),e._v("\n分支代码合并过来，我们现在执行 "),r("code",[e._v("git merge master")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("blockquote",[r("p",[e._v("此时，我们已经把 master 代码合并到了 "),r("code",[e._v("merge_laravel")]),e._v(" 分支了，如果你出现了冲突，那只能说明一个问题，团队成员以前的 "),r("code",[e._v("merge")]),e._v(" 操作对 "),r("code",[e._v("merge_laravel")]),e._v(" 产生了干扰。\n还有可能是另一个问题，团队成员在 "),r("code",[e._v("merge_laravel")]),e._v(" 分支做出了非 merged 的干扰提交。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{name:"merged-laravel-master-branch"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"步骤-2（合并-laravel-master-分支）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-2（合并-laravel-master-分支）","aria-hidden":"true"}},[this._v("#")]),this._v(" 步骤 2（合并 Laravel "),t("code",[this._v("master")]),this._v(" 分支）")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("首先，我们应该切换到 "),t("code",[this._v("merge_laravel")]),this._v(" 分支，可以执行 "),t("code",[this._v("git checkout merge_laravel")]),this._v(" 切换。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("注意：在我们拉取 Laravel 源的代码前，请确认你的修改都已经保存并 commit。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("接下来我们从 Laravel 远端的 "),t("code",[this._v("master")]),this._v(" 拉取提交到本地的 "),t("code",[this._v("merge_laravel")]),this._v(" 分支：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("git pull laravel master\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{name:"resolve-conflict"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"解决合并冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决合并冲突","aria-hidden":"true"}},[this._v("#")]),this._v(" 解决合并冲突")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("大多数情况下，因为我们也需要再 Laravel 远端的代码上增加我们自己的代码。一般拉取完成后基本上都会出现冲突的，冲突的部分就是 Laravel 更新，我们也修改过的地方，此时你应该根据合并结果找到 "),t("code",[this._v("CONFLICT (content): Merge conflict in xxxx.xxx")]),this._v(" 部分的文件打开，找到\n冲突的地方合并修正就好了。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{name:"push-merge-laravel-branch"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"步骤-3-提交-merge-laravel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-3-提交-merge-laravel","aria-hidden":"true"}},[this._v("#")]),this._v(" 步骤 3 提交 "),t("code",[this._v("merge_laravel")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("上面步骤都完成后，你会在 "),t("code",[this._v("merge_laravel")]),this._v(" 分支下产生几条 Commit 记录，此时，你应该先将这些没有提交到 Plus 远端的 Commit 提交上去，并且等待 "),t("strong",[this._v("持续集成")]),this._v(" 的测试结果，以此类方式与官方保持一致很少会出现持续集成失败的。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("很多时候失败都是更新了一些配置版本导致，尤其是前端，此时请在 "),t("code",[this._v("merge_laravel")]),this._v("\n下解决合并带来的不兼容问题。然后执行 "),t("code",[this._v("git push")]),this._v(" 将 Commit 推到远端。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("a",{attrs:{name:"merged-merge-laravel-branch-to-master"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"步骤-4-将-merge-laravel-合并至-master"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤-4-将-merge-laravel-合并至-master","aria-hidden":"true"}},[this._v("#")]),this._v(" 步骤 4 将 "),t("code",[this._v("merge_laravel")]),this._v(" 合并至 "),t("code",[this._v("master")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("此时，我们距离合并工作只只剩下最后一步了，就是将 "),t("code",[this._v("merge_laravel")]),this._v(" 合并完成并解决了冲入的 Laravel 最新代码结构合并到 "),t("code",[this._v("master")]),this._v(" 分支中。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("此时我们的合并必须采用 "),t("code",[this._v("squash")]),this._v(" 模式进行合并，以免 Laravel 的更新工作给 Plus 的 Commits 线带来分叉扰乱团队的历史记录。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("首要任务是切换回 "),t("code",[this._v("master")]),this._v(" 分支："),t("code",[this._v("git checkout master")]),this._v("，然后我们执行 "),t("code",[this._v("squash")]),this._v(" 进行合并：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("git merge --squash merge_laravel\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("一般这个步骤都不会报错，如果报错，一定是团队有成员扰乱了 "),t("code",[this._v("merge_laravel")]),this._v(" 的 Commits，因为我们已经解决了 Laravel 在 Plus 中的冲突，这一步骤不会报错。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("好了，我们合并完成，剩下的就是将 "),t("code",[this._v("master")]),this._v(" 提交到远端即可。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("chore: Merged laravel:master to master branch, Updated Laravel version to x.x.x\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])}],!1,null,null,null);s.options.__file="merge-laravel-master-branch-to-plus-master-guide.md";t.default=s.exports}}]);