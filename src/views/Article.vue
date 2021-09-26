<template>
  <el-row :gutter="20">
    <!--文章列表-->
    <el-col :span="4" :offset="2">
      <div class="box-article">
        <div
          v-for="anchor in titles"
          :key="anchor.title"
          :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
          @click="handleAnchorClick(anchor)"
        >
          <a style="cursor: pointer">{{ anchor.title }}</a>
        </div>
      </div>
    </el-col>
    <el-col :span="16">
      <div class="box-article">
        <v-md-editor v-model="value" mode="preview" ref="preview"></v-md-editor>
      </div>
    </el-col>
  </el-row>
</template>

<script>
const text =
  "> 欢迎使用社区 Markdown 编辑器写文章！\n" +
  "\n" +
  "使用社区 Markdown 编辑器撰写技术文章，只专注于内容和技术，不再费心排版的问题。这是一份简要的 Markdown 引导指南，希望可以帮助您顺利的开始使用 Markdown 编辑器。\n" +
  "\n" +
  "## 一. 全屏模式爱上大领导卡溜达溜达代码了大量的麻辣的拉大\n" +
  "\n" +
  "两个窗口：\n" +
  "\n" +
  "![file](https://cdn.learnku.com/uploads/images/201903/14/1/a93B81omNC.png!large)\n" +
  "\n" +
  "请点击此处退出全屏模式：\n" +
  "\n" +
  "![](https://cdn.learnku.com/uploads/images/201903/01/35727/B994aLUJtZ.png!large)\n" +
  "\n" +
  "现在请按照下图指示点击进入全屏状态：\n" +
  "\n" +
  "![](https://cdn.learnku.com/uploads/images/201903/01/29454/MMyXEeL56A.png!large)\n" +
  "\n" +
  "## 二. 丰富的快捷键\n" +
  "\n" +
  "本 Markdown 编辑器支持丰富的格式快捷键，可以非常便捷、轻松的使用 Markdown 语言，形成优美的排版和内容格式。\n" +
  "\n" +
  "支持的快捷键有：\n" +
  "\n" +
  "* 加粗： `Ctrl/Cmd + B`\n" +
  "* 标题： `Ctrl/Cmd + H`\n" +
  "* 插入链接： `Ctrl/Cmd + K`\n" +
  "* 插入代码： `Ctrl/Cmd + Alt/Option + C`\n" +
  "* 行内代码： `Ctrl/Cmd + Alt/Option + C`\n" +
  "* 插入图片： `Ctrl/Cmd + Alt/Option + I`\n" +
  "* 无序列表： `Ctrl/Cmd + Alt/Option + L`\n" +
  "* 撤销： `Ctrl/Cmd + Z`\n" +
  "* 剪切： `Ctrl/Cmd + X`\n" +
  "\n" +
  "## 三. 常用语法\n" +
  "\n" +
  "### 1. 标题\n" +
  "\n" +
  "语法格式：` '#'+'空格'+'文本' `\n" +
  "\n" +
  "```\n" +
  "# 一级标题\n" +
  "## 二级标题\n" +
  "### 三级标题\n" +
  "#### 四级标题\n" +
  "##### 五级标题\n" +
  "###### 六级标题\n" +
  "```\n" +
  "\n" +
  "图例：\n" +
  "\n" +
  "![file](https://cdn.learnku.com/uploads/images/201903/14/1/QWcRU6tSST.png!large)\n" +
  "\n" +
  "> 注：\n" +
  "> 1. `#` 和标题之间建议保留一个字符的空格，这是最标准的 Markdown 写法；\n" +
  "> 2. 一般情况下，文章的标题会被系统渲染为『一级标题』，所以请避免在文章内容中使用『一级标题』。\n" +
  "> 3. 请善用二级和三级标题，LearnKu 文章模块会自动为您生成 TOC，这会让文章结构更加清晰，如下：\n" +
  "> ![file](https://cdn.learnku.com/uploads/images/201903/14/1/3TEWN0HxoI.png!large)\n" +
  "\n" +
  "### 2. 列表\n" +
  "\n" +
  "列表格式也很常用，在 Markdown 中，你只需要在文字前面加上 `-` 就可以了，例如：\n" +
  "\n" +
  "```\n" +
  "- 文本一\n" +
  "- 文本二\n" +
  "- 文本三\n" +
  "```\n" +
  "\n" +
  "如果你希望有序列表，也可以在文字前面加上 `1.` `2.` `3.` 就可以了，例如：\n" +
  "\n" +
  "```\n" +
  "1. 文本一\n" +
  "2. 文本二\n" +
  "3. 文本三\n" +
  "```\n" +
  "\n" +
  "图例：\n" +
  "\n" +
  "![file](https://cdn.learnku.com/uploads/images/201903/14/1/t3a0XC1EdX.png!large)\n" +
  "\n" +
  "### 3. 链接和图片\n" +
  "\n" +
  "在 Markdown 中插入链接需要使用 `[显示文本](链接地址)` 这样的格式语法。例如：\n" +
  "\n" +
  "```\n" +
  "[LearnKu 开发者社区](https://learnku.com)\n" +
  "```\n" +
  "\n" +
  "在 Markdown 中，插入图片不需要其他按钮，你只需要使用 `![](图片链接地址)` 这样的语法即可，例如：\n" +
  "\n" +
  "```\n" +
  "![](https://cdn.learnku.com/uploads/images/201806/12/1/Owic58YjaW.jpeg?imageView2/2/w/1240/h/0)\n" +
  "```\n" +
  "\n" +
  "> 注：插入图片的语法和链接的语法很像，只是前面多了一个 `  !  `。\n" +
  "\n" +
  "图例：\n" +
  "\n" +
  "![file](https://cdn.learnku.com/uploads/images/201903/14/1/pslq8YJ5n0.png!large)\n" +
  "\n" +
  "LearnKu 上图片显示时会加阴影，如果你想去除阴影的话，可以使用以下方式：\n" +
  "\n" +
  "```\n" +
  '<img src="https://cdn.learnku.com/uploads/images/201806/12/1/Owic58YjaW.jpeg" class="rm-style">\n' +
  "```\n" +
  "\n" +
  "图例：\n" +
  "\n" +
  "![file](https://cdn.learnku.com/uploads/images/201903/14/1/8brCBPtPoy.png!large)\n" +
  "\n" +
  "> 注：LearnKu 编辑器上传图片，只需要将图片拖拽丢入『编辑窗口』内，或者复制图片在『编辑窗口』内黏贴即可上传。\n" +
  "\n" +
  "### 4. 引用\n" +
  "\n" +
  "写作时经常需要引用他人的文字，在 Markdown 中，你只需要在你希望引用的文字前面加上 `>` 即可，例如：\n" +
  "\n" +
  "> Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，然后转换成格式丰富的 HTML 页面。\n" +
  "\n" +
  "图例：\n" +
  "\n" +
  "![file](https://cdn.learnku.com/uploads/images/201903/14/1/NKk9o3SqJl.png!large)\n" +
  "\n" +
  "\n" +
  "### 5. 行内代码\n" +
  "\n" +
  "行内的代码使用 <code>`</code> 包起来即可，一般在描述类、函数、文件名称及路径时使用，如：\n" +
  "\n" +
  "```\n" +
  "Laravel 框架的所有配置文件都保存在 `config` 目录中。可以使用 `config()` 辅助函数来读取。\n" +
  "```\n" +
  "\n" +
  "图例：\n" +
  "\n" +
  "![file](https://cdn.learnku.com/uploads/images/201903/14/1/CVajVDQJwK.png!large)\n" +
  "\n" +
  "### 6. 代码高亮\n" +
  "\n" +
  "如下是代码段的语法：\n" +
  "\n" +
  "<pre>\n" +
  "```编程语言\n" +
  " 这是代码段\n" +
  "```\n" +
  "</pre>\n" +
  "\n" +
  "例如：\n" +
  "\n" +
  "<pre>\n" +
  "```php\n" +
  "class Order extends Model\n" +
  "{\n" +
  "   ...\n" +
  "   public function scopeDelivered($query) {\n" +
  "      return $query->where('status', 'delivered');\n" +
  "   }\n" +
  "   public function scopePaid($query) {\n" +
  "      return $query->where('paid', true);\n" +
  "   }\n" +
  "}\n" +
  "\n" +
  "$orders = Order::delivered()->paid()->get();\n" +
  "```\n" +
  "</pre>\n" +
  "\n" +
  "图例：\n" +
  "\n" +
  "![file](https://cdn.learnku.com/uploads/images/201903/14/1/rHqr0WvR1u.png!large)\n" +
  "\n" +
  "> 注：在 LearnKu 上，每一个社区都设定了默认的代码高亮语法，例如 PHP 和 Laravel 社区默认使用 `php` 作为默认高亮语法，当你只使用  <code>```</code> 而未设置语法时，此功能会被用上。\n" +
  "\n" +
  "### 7. 粗体和斜体\n" +
  "\n" +
  "Markdown 的粗体和斜体非常简单，用两个 ` * ` 包含一段文本就是粗体的语法，用一个 `*` 包含一段文本就是斜体的语法。例如：\n" +
  "\n" +
  "```\n" +
  "Markdown 的 **粗体** 和 *斜体* 非常简单。\n" +
  "```\n" +
  "\n" +
  "最终显示的就是下文：\n" +
  "\n" +
  "Markdown 的 **粗体** 和 *斜体* 非常简单。\n" +
  "\n" +
  "图例：\n" +
  "\n" +
  "![file](https://cdn.learnku.com/uploads/images/201903/14/1/RLXoRtC1fM.png!large)\n" +
  "\n" +
  "### 8. 表格\n" +
  "\n" +
  "基础的表格语法：\n" +
  "\n" +
  "```\n" +
  "项目 | 价格\n" +
  "-------- | ---\n" +
  "iPhone | $560\n" +
  "iPad | $780\n" +
  "iMac | $1000\n" +
  "```\n" +
  "\n" +
  "可以使用冒号来定义对齐方式：\n" +
  "\n" +
  "```\n" +
  "| 项目 | 价格 | 数量 |\n" +
  "| :-------- | --------:| :--: |\n" +
  "| iPhone | 6000 元 | 5 |\n" +
  "| iPad | 3800 元 | 12 |\n" +
  "| iMac | 10000 元 | 234 |\n" +
  "\n" +
  "```\n" +
  "\n" +
  "图例：\n" +
  "\n" +
  "![file](https://cdn.learnku.com/uploads/images/201903/14/1/kGlQsCmbSS.png!large)\n" +
  "\n" +
  "\n" +
  "## 结语\n" +
  "\n" +
  "Markdown 编写是开发者的必备技能，尤其在撰写技术文档上，更加离不开 Markdown 语法。如果对 Markdown 语法不熟悉，本篇文章罗列了使用频率最高的 8 个语法，你可以多看几遍，或者打开 [编辑器](https://learnku.com/articles/create) 直接尝试，这样会记得更加牢固。\n" +
  "\n" +
  "在掌握了以上的简单语法后，推荐自行搜索查阅『完整 Markdown 语法』。\n" +
  "\n" +
  "[//]: # (防呆操作，防止意外提交)";
export default {
  name: "Article",
  components: {},
  data() {
    return {
      value: text,
      titles: [],
    };
  },
  created() {
    const param = this.$route.query;
    console.log(param);
  },
  mounted() {
    const anchors =
      this.$refs.preview.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");
    const titles = Array.from(anchors).filter(
      (title) => !!title.innerText.trim()
    );

    if (!titles.length) {
      this.titles = [];
      return;
    }

    const hTags = Array.from(
      new Set(titles.map((title) => title.tagName))
    ).sort();

    this.titles = titles.map((el) => ({
      title: el.innerText,
      lineIndex: el.getAttribute("data-v-md-line"),
      indent: hTags.indexOf(el.tagName),
    }));
  },
  methods: {
    handleAnchorClick(anchor) {
      const that = this;
      const { preview } = that.$refs;
      const { lineIndex } = anchor;

      const heading = preview.$el.querySelector(
        `[data-v-md-line="${lineIndex}"]`
      );

      if (heading) {
        heading.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.el-row {
  text-align: left;
  .el-col {
    .box-article {
      background: #ffffff;
      border-radius: 0.5rem;
      padding: 20px;
    }
  }
}
</style>
