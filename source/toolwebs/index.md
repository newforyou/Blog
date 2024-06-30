---
title: 工具分享
date: 2024-06-28 15:23:12
type: "toolwebs"
---

{% raw %}

<div class="flink">
  <script>
    (() => {
      const replaceSymbol = (str) => {
        return str.replace(/[\p{P}\p{S}]/gu, "-");
      };

      let result = "";
      const add = (str) => {
        for (let i = 0; i < str.length; i++) {
          const replaceClassName = replaceSymbol(str[i].class_name);
          const className = str[i].class_name
            ? `<h2 id="${replaceClassName}"><a href="#${replaceClassName}" class="headerlink" title="${str[i].class_name}"></a>${str[i].class_name}</h2>`
            : "";
          const classDesc = str[i].class_desc
            ? `<div class="flink-desc">${str[i].class_desc}</div>`
            : "";

          let listResult = "";
          const lists = str[i].link_list;
          if (true) {
            lists.sort(() => Math.random() - 0.5);
          }
          for (let j = 0; j < lists.length; j++) {
            listResult += `
          <div class="flink-list-item">
            <a href="${lists[j].link}" title="${lists[j].name}" target="_blank">
              <div class="flink-item-icon">
                <img class="no-lightbox" src="${lists[j].avatar}" onerror='this.onerror=null;this.src="/Blog/img/friend_404.gif"' alt="${lists[j].name}" />
              </div>
              <div class="flink-item-name">${lists[j].name}</div>
              <div class="flink-item-desc" title="${lists[j].descr}">${lists[j].descr}</div>
            </a>
          </div>`;
          }

          result += `${className}${classDesc} <div class="flink-list">${listResult}</div>`;
        }

        document
          .querySelector(".flink")
          .insertAdjacentHTML("afterbegin", result);
        window.lazyLoadInstance && window.lazyLoadInstance.update();
      };

      const linkData = [
        {
          class_name: "工具类",
          class_desc: "有用的工具网站",
          link_list: [
            {
              name: "Reference",
              link: "https://wangchujiang.com/reference/",
              avatar: "https://cheatsheets.zip/images/favicon.png?v=1",
              descr: "编程速查",
            },
            {
              name: "IT Tool",
              link: "https://it-tools.tech/",
              avatar: "https://it-tools.tech/favicon.ico",
              descr: "IT 工具箱",
            },
            {
              name: "网站Icon获取",
              link: "https://gonglue.qinggl.com/app/img/icon.jsp",
              avatar: "https://qglimg.qinglm.com/qinggl/favicon.ico",
              descr: "获取网站icon",
            },
            {
              name: "Coverview",
              link: "https://coverview.vercel.app/editor",
              avatar: "https://coverview.vercel.app/static/media/logo.5d3dd1b68da4b08fcf92.png",
              descr: "文章cover生成",
            },
          ],
        },
        {
          class_name: "文档类",
          class_desc: "官方文档",
          link_list: [
            {
              name: "PyTorch",
              link: "https://pytorch.org/docs/stable/torch.html",
              avatar: "https://pytorch.org/assets/images/logo-icon.svg",
              descr: "PyTorch官方文档",
            },
            {
              name: "Axios",
              link: "https://www.axios-http.cn/docs/intro",
              avatar: "https://www.axios-http.cn/img/favicon.ico",
              descr: "Axios官方文档",
            },
            {
              name: "Pinia",
              link: "https://pinia.vuejs.org/zh/",
              avatar: "https://pinia.vuejs.org/logo.svg",
              descr: "Pinia官方文档",
            },
          ],
        },
        {
          class_name: "学习资源",
          class_desc: "学习网站",
          link_list: [
            {
              name: "JavaGuide",
              link: "https://javaguide.cn/",
              avatar: "https://javaguide.cn/logo.svg",
              descr: "Java",
            },
            {
              name: "Deep Learning",
              link: "https://zh-v2.d2l.ai/",
              avatar: "https://zh-v2.d2l.ai/_static/favicon.png",
              descr: "Axios官方文档",
            },
          ],
        },
        {
          class_name: "社区",
          class_desc: "软件社区",
          link_list: [
            {
              name: "PKMER",
              link: "https://pkmer.cn/#home",
              avatar: "https://pkmer.cn/img/favicon.ico",
              descr: "Obsidian中文社区",
            },
            {
              name: "Zotero",
              link: "https://zotero-chinese.com/",
              avatar: "https://zotero-chinese.com/logo.png",
              descr: "Zotero 中文社区",
            },
          ],
        },


      ];
      if (false) {
        fetch("/blog/")
          .then((response) => response.json())
          .then(add);
      } else if (linkData) {
        add(linkData);
      }
    })();

  </script>
</div>

{% endraw %}
