# 围城市政 Fortress City Gov.

一个 **虚构城市政府** 的官方网站，复刻自 <https://toki.my.canvasite.cn/fc-gov> 的排版：
纯黑舞台、白色字、暖琥珀文字光晕、超大的幽灵水印字。

纯静态 HTML / CSS / JS，零构建、零依赖，可直接部署到 GitHub Pages。

**线上地址：** <https://ichiyotsu.github.io/FortressCity/>
**仓库：** <https://github.com/ichiyotsu/FortressCity>

| 首页 | 新闻 |
| --- | --- |
| ![首页](docs/preview-home.png) | ![新闻](docs/preview-news.png) |

| 交通部子站 | 周边商城 |
| --- | --- |
| ![交通](docs/preview-transport.png) | ![商城](docs/preview-shop.png) |

---

## 页面

| 路径 | 内容 |
| --- | --- |
| `/` | **TokiPage 式首页**：欢迎语 + 头条新闻卡 + 巨型 `FCG at 26` 泛光声明 |
| `/news/` | **新闻**：`Welcome to Official News Page!` + 幽灵字 `News` + 5 条按日期排列的公告 |
| `/news/2026-08-23/` 等 | 5 篇新闻详情页（2026-08-23 / 08-21 / 07-07 / 06-25 / 06-24 / 06-23） |
| `/transport/` | **交通**：围城市政 26 交通部官方网站，彩色 26 图形、四栏导航、运营主体数据表 |
| `/transport/metro/` | 围城轨道交通（表格里唯一可点击的公司） |
| `/transport/lines/` | 运营线路图（仍在绘制） |
| `/transport/culture/` | 交通文化（整理中） |
| `/livelihood/` | **民生**：幽灵字 `Livelihood` + 民生服务中心设立公告 |
| `/me/` | **我的**：`您还不是围城市的市民` 身份闸门页 |
| `/shop/` | **官方周边**：礼品商城，八周年 / 七周年 / 六周年 |
| `/en/` | 英文版说明页（对应「正在测试英文版内容」那条新闻） |
| `/404.html` | 页面不存在 |

## 设计语言

| 元素 | 做法 |
| --- | --- |
| 舞台 | 纯黑 `#000`，叠加三层极淡的暖色径向光，避免死板 |
| 公告条 | `#3a3a3a` 灰底居中小字：观影须知 // 仅供娱乐 请勿当真 // … |
| 页头 | 三段条纹字标 + `2026 / Test Version` 上标 + 右侧导航（当前页加粗并带光晕） |
| Hero | `Welcome to` / 英文页名 / `欢迎来到 …` 三行，左对齐 |
| 幽灵字 | 巨型暗色水印（`News` / `Livelihood` / `404`），右对齐到内容边缘 |
| 光晕 | 取自原站的暖琥珀色 `text-shadow`：`rgba(165,108,68)` + `rgba(165,137,118)` 三层 |
| 列表 | 日期在上、粗标题在下，悬停时标题泛光 |
| 页脚 | `EN↗` / `官方周边↗`，再一行 `围城市政 Fortress City Gov.` 与 `©2026` |

原站里「头条新闻 / FCG at 26 / 第八届」三个入口其实都指向同一个 `#page-4`（周边商城），属于没做完的状态；
这里把它们拆成了真正的新闻详情页，`官方周边` 才指向商城。

## 视觉资源

所有图像都是本项目自绘的 SVG，没有引用原站的 Canva 素材：

| 文件 | 用途 |
| --- | --- |
| `assets/img/logo.svg` | 三段条纹字标 |
| `assets/img/starfield.svg` | 头条卡星空图（560 颗星 + 屋顶 + 悬浮纸箱） |
| `assets/img/fcg26.svg` | 交通部彩色 26 标识 |
| `assets/img/product-hoodie.svg` / `product-pillow.svg` | 八周年卫衣与抱枕 |
| `assets/img/product-nuts.svg` | 七周年坚果礼盒 |
| `assets/img/shop-waves.svg` / `shop-sixth.svg` | 七周年蓝波浪、六周年 SIXTH |
| `assets/img/og.png` | 社交分享图（由 `_build/og.svg` 渲染） |

字体：Latin 用 [Instrument Sans](https://github.com/Instrument/instrument-sans)（SIL OFL 1.1，见 `assets/fonts/OFL-InstrumentSans.txt`）；
中文走系统字体栈（PingFang SC / 思源黑体 / 微软雅黑），不额外加载中文字体文件。

## 目录

```text
.
├─ index.html                # 首页
├─ news/
│  ├─ index.html             # 新闻列表
│  └─ 2026-08-23/ …          # 5 篇详情
├─ transport/
│  ├─ index.html             # 交通部（关于我们）
│  ├─ metro/  lines/  culture/
├─ livelihood/index.html
├─ me/index.html
├─ shop/index.html
├─ en/index.html
├─ 404.html
├─ assets/
│  ├─ css/  tokens · base · site · shop · transport
│  ├─ js/   site.js          # 只做 IntersectionObserver 淡入与年份
│  ├─ img/  全部自绘 SVG + og.png
│  └─ fonts/ Instrument Sans + OFL
├─ robots.txt · sitemap.xml · site.webmanifest · .nojekyll
└─ README.md
```

## 本地预览

任选一种，不需要装任何东西：

```powershell
# A. 直接双击 index.html
# B. 起一个本地服务器（推荐，路径行为与线上一致）
python -m http.server 4173
# http://127.0.0.1:4173/
```

## 多仓库多站点

GitHub Pages 的规则只有两条，理解这两条就能一个账号挂任意多个网站：

| 仓库名 | 站点地址 | 说明 |
| --- | --- | --- |
| `<用户名>.github.io` | `https://<用户名>.github.io/` | **每个账号只有一个**，挂在根路径。这里就是 `ichiyotsu/ichiyotsu.github.io`（TokiPage） |
| 任意其它名字 | `https://<用户名>.github.io/<仓库名>/` | **数量不限**，每个仓库一个独立站点。这里就是 `ichiyotsu/FortressCity` |

所以本站的结构是：

```text
ichiyotsu.github.io/                 → 根站点（另一个仓库，TokiPage）
ichiyotsu.github.io/FortressCity/    → 本站（本仓库，独立部署、互不影响）
```

要点：

- 两个仓库各自有独立的 Pages 配置、独立的构建记录，推哪个只更新哪个。
- 项目站点是**子路径**，所以本站所有链接都用相对路径，迁到任何路径下都能用（`canonical` / `sitemap` 里写的是绝对地址，换域名时记得一起改）。
- 想再开第三个站（比如 `ichiyotsu/SomeApp`），照这个仓库复制一遍、开启 Pages 即可，不用动根站点。
- 项目站点不能放在根路径；想变根路径只能换仓库名或换账号。
- 自定义域名（CNAME）是**一个仓库一个域名**，根站点和项目站点可以各绑各的。

## 部署（本仓库已完成）

仓库 <https://github.com/ichiyotsu/FortressCity> 已推送，Pages 设置：

- **Settings → Pages → Deploy from a branch**
- Branch **main**、目录 **/(root)**

`.nojekyll` 已经放好，带下划线的目录不会被 Jekyll 忽略。

以后只改内容再发布：

```powershell
git add .
git commit -m "update content"
git push
```

Pages 会自动重建，一两分钟后生效。想从零重建同样的仓库：

```powershell
git init
git add .
git commit -m "Fortress City Gov. initial site"
git branch -M main
git remote add origin https://github.com/ichiyotsu/FortressCity.git
git push -u origin main
```

## 改内容

| 想改什么 | 去哪里 |
| --- | --- |
| 首页欢迎语 / 头条卡 / FCG at 26 | `index.html` |
| 新闻条目与详情 | `news/index.html`、`news/<日期>/index.html` |
| 民生公告 | `livelihood/index.html` |
| 我的页面文案 | `me/index.html` |
| 商城商品、价格、年份 | `shop/index.html`、`assets/css/shop.css` |
| 交通部表格数据 | `transport/index.html` |
| 颜色、圆角、字号、光晕 | `assets/css/tokens.css` |
| 页头 / 页脚 / 列表 / 详情页样式 | `assets/css/site.css` |
| 交通部专用样式 | `assets/css/transport.css` |
| 公告条文案 | 每个页面顶部的 `<p class="notice">` |

## 说明

- 页面文案来自原站，属于**虚构城市设定**，与任何真实政府机构无关。
- 新闻详情页的正文是把标题改写成短段落，没有新增虚构事实；如需替换成你写的原文，直接改那几个 `article__body`。
- `_build/`（生成用临时文件）和 `_shots/`（本地截图）都在 `.gitignore` 里，不会发布。

## License

页面代码可自由参考和修改。城市设定与文案归原作者所有。
