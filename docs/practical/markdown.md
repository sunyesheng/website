---
id: markdown
title: MarkDown 基础使用
---

工欲善其事，必先利其器；MarkDown 是做好开发的不可或缺的工具。

## 1. 什么是 MarkDown？

> Markdown 是一种轻量级标记语言，创始人为約翰·格魯伯。它允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的 XHTML（或者 HTML）文档。这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。-维基百科

## 2. MarkDown 基本语法

### 2.1 文本

**粗体**和*斜体*，\*\*忽略转义符号使用\*\*

```
使用两个**将粗体内容包裹起来
使用一个*将斜体内容包裹起来
`高亮块`
忽略*，使用/*
```

### 2.2 标题

使用#数量代表标题

```
# 一级标题
## 二级标题
###*N N级标题
```

### 2.3 链接

内联链接的 Markdown 语法由 [link text] 部分 + (file-name.md) 部分组成，前部分是将被添加超链接的文本，后部分是链接到的 URL 或文件名
[百度](https://www.baidu.com)

```
[百度](https://www.baidu.com)
```

### 2.4 代码

使用反撇号 (` ) 在段落中创建内联代码样式。要创建特定的多行代码块，在代码块之前和之后添加三个反撇号 (```)（在 Markdown 中称为“受防护的代码块”，在 AEM 中只是一个“代码块”组件）。对于受保护的代码块，在第一组反撇号之后添加代码语言，以便 Markdown 正确地高亮显示代码语法。

内连代码块 `高亮块`
多行代码块

````
`内联代码块`

```
多行代码块
```

```javascript
指定语法代码块
console.log("hello world")
```
````

```javascript
console.log('hello world') //javasrcipt 语法代码块
```

### 2.5 图像

![Adobe Logo](../../static/img/docusaurus.png 'Hover text')

```
![Adobe Logo](url 'Hover text')
```

### 2.6 表格

虽然表格不是核心 Markdown 规范的一部分，但 Adobe 仍在一定程度上支持它们。Markdown 不支持在单元格中使用多个行列表。最佳做法是避免在表格中使用多个行。您可以通过使用管道 (|) 字符绘制列和行来创建表格。连字符用于创建每个列的标题，而管道符用于分隔每个列。在表格前面添加一个空白行，以便该表格可正确呈现。

| Header | Another header | Yet another header |
| ------ | -------------- | ------------------ |
| row 1  | column 2       | column 3           |
| row 2  | row 2 column 2 | row 2 column 3     |

```
| Header | Another header | Yet another header |
|--- |--- |--- |
| row 1 | column 2 | column 3 |
| row 2 | row 2 column 2 | row 2 column 3 |
```

## 3. MarkDown 扩展语法

### 3.1 分割线语法

要创建分隔线，在单独一行上使用三个或多个星号 (\*\*\*)、破折号 (---) 或下划线 (\_\_\_) ，并且不能包含其他内容。

---

---

---

```
***

---

_________________
```

### 3.2 内嵌 HTML 标签

### 3.3 列表语法

要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始。

1. First item
2. Second item
3. Third item
4. Fourth item

```
1. First item
2. Second item
3. Third item
4. Fourth item
```

要创建无序列表，请在每个列表项前面添加破折号 (-)、星号 (\*) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表。

- First item
- Second item
- Third item
  - Indented item
  - Indented item
- Fourth item

```
- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item
```

### 3.4 转义字符语法

对于 Markdown 涵盖范围之外的标签，都可以直接在文件里面用 HTML 本身。如需使用 HTML，不需要额外标注这是 HTML 或是 Markdown，只需 HTML 标签添加到 Markdown 文本中即可。

This **word** is bold. This <em>word</em> is italic.

```
This **word** is bold. This <em>word</em> is italic.
```

This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.

```
This is a regular paragraph.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

This is another regular paragraph.
```

## 结尾

MarkDown 非常简单、实用，能够节省用于文档和排版上的时间；使研发人员更多的精力用于开发。
