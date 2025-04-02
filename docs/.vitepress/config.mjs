  import { defineConfig } from 'vitepress'
  import markdownItKatex from 'markdown-it-katex'
  // https://vitepress.dev/reference/site-config
  const customElements = [
    'math',
    'maction',
    'maligngroup',
    'malignmark',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mi',
    'mlongdiv',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mscarries',
    'mscarry',
    'mscarries',
    'msgroup',
    'mstack',
    'mlongdiv',
    'msline',
    'mstack',
    'mspace',
    'msqrt',
    'msrow',
    'mstack',
    'mstack',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'semantics',
    'math',
    'mi',
    'mn',
    'mo',
    'ms',
    'mspace',
    'mtext',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'msqrt',
    'mstyle',
    'mmultiscripts',
    'mover',
    'mprescripts',
    'msub',
    'msubsup',
    'msup',
    'munder',
    'munderover',
    'none',
    'maligngroup',
    'malignmark',
    'mtable',
    'mtd',
    'mtr',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'msline',
    'msrow',
    'mstack',
    'maction',
    'semantics',
    'annotation',
    'annotation-xml'
  ]
  
  export default defineConfig({
    markdown: {
      config: (md) => {
        md.use(markdownItKatex)
      }
    },
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customElements.includes(tag)
        }
      }
    },
    lastUpdated: true,
    lang : 'zh-CN',
    title: "用户注册",
    description: "zzzz",
    logo: "img/favicon.ico",
    appearance: 'dark',
    head: [
      [
        'script', 
        { id: 'register-sw' },
        `;(() => {
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
          }
          //alert('Service worker has been registered!'); 
        })()`
      ]
    ],
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      outlineTitle: '目录',
      //右上角导航栏
      nav: [

        //Home
        { text: '首页', link: '/' },
        
        //Guide
        {
          text: '关于我们',
          items: [
            {
              text: 'CPP课程项目',
              items: [
                { text: '项目一', link: '/cpp_1' },
                { text: '项目二', link: '/cpp_2' },
                { text: '项目三', link: '/cpp_3' },
              ]
            },
          ]
        },

        //😭
        { text:'用户社区',
          items:[
            { text: '🤡', link: 'https://www.emojiall.com/zh-hans/emoji/%F0%9F%A4%A1'},
            { text: '🤓', link:'https://www.emojiall.com/zh-hans/emoji/%F0%9F%A4%93'},
            { text: '😤', link:'https://www.emojiall.com/zh-hans/emoji/%F0%9F%98%A4'},
          ]
        },

        {
          text: '产品商城',
          items:[
            {text: 'Cubism 2',link: 'https://klizz.online/z_live2D/indexe.html'},
            {text: 'Cubism 3',link: 'https://klizz.online/z_live2D/live2d_3/indexe.html'},
          ]
        },

        //About me
        { text: '文化探索', link: 'https://github.com/klizz111' },
      ],


      //左侧导航栏
      sidebar: [
        {
          text: '😆😅🤣',
          items: [
            { text: '远程桌面', link: '/rdp' },
            { text: 'C++项目', link: '/cpp_project_list' },
          ]
        },
      ],

      //socialLinks: [
        //{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      //]

      //搜索框
      search: {
        provider: 'local',
        options: {
              translations: {
                button: {
                  buttonText: '搜索文档',
                  buttonAriaLabel: '搜索文档'
                },
                modal: {
                  noResultsText: '无法找到相关结果',
                  resetButtonTitle: '清除查询条件',
                  footer: {
                    selectText: '选择',
                    navigateText: '切换'
                  }
                }
              }
            }
      },

      // 页脚
      footer:{
        copyright:"CopyRight@ 2024 Klizz",
      }, 
        
      
      //编辑链接
      editLink: {
        pattern: 'https://github.com/klizz111/klizz111.github.me/',
        text: 'Edit this page on GitHub'
      },

      //最后更新时间
      lastUpdated: 
      {
        text: 'Updated at',
        formatOptions:
        {
          dateStyle: 'full',
          timeStyle: 'short',
        }
      },
    },
    
  })

  
