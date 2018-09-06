import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
import Index from '@/components/index'
import myInformation from '@/components/myInformation'
import docDetails from '@/components/docDetails'
import doc from '@/components/doc'
import wordcloud from '@/components/wordcloud'
import hobby from '@/components/hobby'
Vue.use(Router)
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';
import Highmaps from 'highcharts/modules/map';


HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
Highmaps(Highcharts);
export default new Router({
  routes: [
    {path: '/',name: 'index',component: Index  },
     {path:'/myInformation',component:myInformation},
      {path:'/docDetails',name:'docDetails',component:docDetails},
{path:'/doc',component:doc},
{path:'/wordcloud',component:wordcloud},
{path:'/hobby',component:hobby}
  ]
})
