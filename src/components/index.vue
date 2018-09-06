<template lang="html">
  <el-container class="con">
    <el-aside class="aside">

      <div class="picture">

      </div>
      <div class="sign">
        <router-link to="/wordcloud" class="aa">文章</router-link>
          </br>
          <router-link to="/hobby" class="aa">爱好</router-link>
          </br>
          <router-link to="/myInformation" class="aa">关于</router-link>
      </div>
      <div class="">
        <a href="https://github.com/tianhongguo" target="_blank" id="github">
　　        <img id="githubImg" src="/static/github.png" >
      </a>
      </div>

    </el-aside>
    <el-main class="main">
      <el-card shadow="hover" @click.native="goDetails()">
         <span class="docTitle">github是什么</span></br>
         <div class="">
           作为开源代码库以及版本控制系统，Github拥有超过900万开发者用户。随着越来越多的应用程序转移到了云上，Github已经成为了管理软件开发以及发现已有代码的首选方法。
     如前所述，作为一个分布式的版本控制系统，在Git中并不存在主库这样的概念，每一份复制出的库都可以独立使用，任何两个库之间的不一致之处都可以进行合并。
     GitHub可以托管各种git库，并提供一个web界面，但与其它像 SourceForge或Google Code这样的服务不同，GitHub的独特卖点在于从另外一个项目进行分支的简易性。为一个项目贡献代码非常简单：首先点击项目站点的“fork”的按钮，然后将代码检出并将修改加入到刚才分出的代码库中，最后通过内建的“pull request”机制向项目负责人申请代码合并。已经有人将GitHub称为代码玩家的MySpace。
     在GitHub进行分支就像在Myspace（或Facebook…）进行交友一样，在社会关系图的节点中不断的连线。
         </div>
         <div class="">
           <time class="time">{{ currentDate }}</time>
           <el-badge :value="12" class="item">
             <el-button size="small" class="doc-comments">评论</el-button>
           </el-badge>
         </div>
    </el-card>
    <el-card shadow="hover">
      我们一直用GitHub作为免费的远程仓库，如果是个人的开源项目，放到GitHub上是完全没有问题的。其实GitHub还是一个开源协作社区，通过GitHub，既可以让别人参与你的开源项目，也可以参与别人的开源项目。

  在GitHub出现以前，开源项目开源容易，但让广大人民群众参与进来比较困难，因为要参与，就要提交代码，而给每个想提交代码的群众都开一个账号那是不现实的，因此，群众也仅限于报个bug，即使能改掉bug，也只能把diff文件用邮件发过去，很不方便。

  但是在GitHub上，利用Git极其强大的克隆和分支功能，广大人民群众真正可以第一次自由参与各种开源项目了。
    </el-card>
    <el-card shadow="hover">
      文章
    </el-card>
    <el-card shadow="hover">
    文章
    </el-card>
<el-card shadow="hover">
文章
</el-card>
  </el-main>
  </el-container>
  </div>
</template>

<script>
export default {
  data() {
      return {
        currentDate: new Date()
      };
    },
  methods:{
    goDetails(){
      console.log(123)
      this.$router.push('/docDetails');
    }
  }
}

</script>

<style lang="css">
.doc-comments{
  background-color: #D4D4D4;
  color:black
}
.time {
    font-size: 13px;
    color: #999;
  }
.docTitle{
  font-size:20px;
  font-weight:bold
}
#github{

}
#githubImg{
  position: absolute;
  z-index: 10
}
.sign{
position: relative;
  height: 300px;
   left: auto;
   top: 200px;
}
.aa{
  color: black;
  display: block;
  text-align:center
}
.el-container{
  height: 100%;
}
.aside{
  height: 100%;
  width: 200px;
  color:black;
  background-color:#CDCDB4
}
.main{
  height: 100%;
  width: 90%;
  color: black
}
.el-card{
  background-color: #D4D4D4;
  height: 200px
}
</style>
