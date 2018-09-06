<template lang="html">
  <div class="love">
    <el-tabs :tab-position="left" >
        <el-tab-pane label="爱看的书">
          <el-carousel :interval="4000000" type="card" height="600px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
        </el-tab-pane>
          <el-tab-pane label="爱看的电视">
              <el-carousel :interval="4000000" type="card" height="600px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
          </el-tab-pane>
          <el-tab-pane label="爱玩的游戏">
              <el-carousel :interval="4000000" type="card" height="600px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
          </el-tab-pane>
          <el-tab-pane label="爱做的事情">
              <el-carousel :interval="4000000" type="card" height="600px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
          </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
love{
  position: absolute;
  top: 100%;
  left: 10%;

}
.el-tabs{
  width: 80%;
  height: 100%;
    margin:0 auto;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
