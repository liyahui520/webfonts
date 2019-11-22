<template>
<Card class="box-card"> 
      <p slot="title">{{title}}</p> 
    <!-- <span style="float: right;" class="elicon"><a href="#" @click="Setting()"><i v-if="isSetting" class="el-icon-setting"></i> </a> <a href="#"><i class="el-icon-refresh"></i> </a></span>
    -->
  <div class="text item">
     <div :class="className" :id="id" :style="{height:height,width:width}" :options="options"/>
  </div>
</Card>

</template>

<script>
const echarts = require('echarts');
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    },
    options: {
      type: Object,
      default: {}
    },
    title:{
      type: String,
      default: ''
    },
    isSetting:{
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chart: null,
      setOption:this.options
    }
  },
  mounted() { 
      if(this.options!=null&&this.options.length>0)
    this.initChart(this.options)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  watch:{
    options:{  
        handler:function (newval,oldval){
             
        if(newval==null&&newval.Min<0){
            let chart = echarts.init(document.getElementById(this.id)) 
            chart.clear()
        }else
      this.chart = echarts.init(document.getElementById(this.id)) 
       this.chart.clear()
      this.chart.setOption(newval) 
        },
        deep:true
       
    },
    // id(){
    //     if(this.options==null){
    //         this.chart = echarts.init(document.getElementById(this.id)) 
    //         this.chart.clear()
    //     }else
    //      this.initChart(this.options);
    // }
  },
  methods: {
    initChart(options) {
        console.log(options)
      this.chart = echarts.init(document.getElementById(this.id)) 
       this.chart.clear()
      this.chart.setOption(options) 
    },
    //设置弹出框
    Setting:function(){
         this.$emit('Setting')
    }
  }
}
</script>
<style>
 .clearfix{
   text-align: center;
 }
 .elicon{
   font-size: 25px;
 }
</style>
