<template lang="html">
  <div class="doc">
    <div class="query">
      <p id="pp">搜索</p>
        <el-input class="input" v-model="input" placeholder="请输入关键字"></el-input>
    </div>
    <div id="container">
      <XChart :id="id" :option="option"></XChart>
    </div>
  </div>
</template>

<script>
import XChart from '@/components/doc'
export default{

data(){
  return{
    id:id,
    option:null
  }

},
methods:{
  getWordcloud(){
    var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum erat ac justo sollicitudin, quis lacinia ligula fringilla. Pellentesque hendrerit, nisi vitae posuere condimentum, lectus urna accumsan libero, rutrum commodo mi lacus pretium erat. Phasellus pretium ultrices mi sed semper. Praesent ut tristique magna. Donec nisl tellus, sagittis ut tempus sit amet, consectetur eget erat. Sed ornare gravida lacinia. Curabitur iaculis metus purus, eget pretium est laoreet ut. Quisque tristique augue ac eros malesuada, vitae facilisis mauris sollicitudin. Mauris ac molestie nulla, vitae facilisis quam. Curabitur placerat ornare sem, in mattis purus posuere eget. Praesent non condimentum odio. Nunc aliquet, odio nec auctor congue, sapien justo dictum massa, nec fermentum massa sapien non tellus. Praesent luctus eros et nunc pretium hendrerit. In consequat et eros nec interdum. Ut neque dui, maximus id elit ac, consequat pretium tellus. Nullam vel accumsan lorem.';
    var data = text
    .split(/[,\. ]+/g)
    .reduce(function (arr, word) {
      var obj = arr.find(function (obj) {
        return obj.name === word;
      });
      if (obj) {
        obj.weight += 1;
      } else {
        obj = {
          name: word,
          weight: 1
        };
        arr.push(obj);
      }
      return arr;
    }, []);

        this.option={
          series: [{
        		type: 'wordcloud',
        		data: data
        	}],
        	title: {
        		text: '词云图'
        	}
      }
  }
},
components: {
              XChart
          },
  created(){
    getWordcloud()
}
}
</script>

<style lang="css">
.query{
  position: absolute;
left: 40%;
top: 10%
}
.input{
  width: 200px;
  margin:0 auto;
}
#pp{
  text-align: center;
}
#container{
  position: absolute;
left: 40%;
top: 30%
}
</style>
