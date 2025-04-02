// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'


/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      default: () => [
        h(DefaultTheme.Content),
        //h(MyCustomElement)
      ]
    })
  },
  async enhanceApp() {
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      const oml2d = loadOml2d({
        models: [
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/aidang_2/aidang_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/aierdeliqi_4/aierdeliqi_4.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/aierdeliqi_5/aierdeliqi_5.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/aimierbeierding_2/aimierbeierding_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/banrenma_2/banrenma_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/beierfasite_2/beierfasite_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/biaoqiang/biaoqiang.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/biaoqiang_3/biaoqiang_3.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/bisimai_2/3712cc44403f6c247db4d7c0edd16016.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/bisimai_2/bisimai_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/chuixue_3/chuixue_3.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/dafeng_2/dafeng_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/deyizhi_3/deyizhi_3.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/dujiaoshou_4/dujiaoshou_4.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/dunkeerke_2/dunkeerke_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/genaisennao_2/genaisennao_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/heitaizi_2/heitaizi_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/huangjiafangzhou_3/huangjiafangzhou_3.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/huonululu_3/huonululu_3.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/huonululu_5/huonululu_5.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/kelifulan_3/kelifulan_3.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/lafei/lafei.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/lafei_4/lafei_4.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/lingbo/lingbo.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/mingshi/mingshi.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/ninghai_4/ninghai_4.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/pinghai_4/pinghai_4.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/qibolin_2/qibolin_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/shengluyisi_2/shengluyisi_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/shengluyisi_3/shengluyisi_3.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/sipeibojue_5/sipeibojue_5.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/taiyuan_2/taiyuan_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/tianlangxing_3/tianlangxing_3.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/tierbici_2/tierbici_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/xianghe_2/xianghe_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/xixuegui_4/xixuegui_4.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/xuefeng/xuefeng.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/yichui_2/yichui_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/z23/z23.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/z46_2/z46_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        {
            path: 'https://klizz.online/z_live2D/live2d_3/model/Azue%20Lane(JP)/zhala_2/zhala_2.model3.json',
            position: [-10, 10],
            scale: 0.06,
        },
        ]
    });
    oml2d.loadRandomModel();    
    oml2d.clearTips();
    oml2d.stopTipsIdle();
    console.log(oml2d.modelIndex)
    }
},
};



