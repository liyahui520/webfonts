<template>
    <Card dis-hover>
        <p slot="title" style="text-align: left;" :title="Name">
            <span class="iconfont icon-shebei"></span>
            {{Name | ellipsis}}
        </p>
        <a href="#" slot="extra" @click="changeLimit">
            <Icon type="ios-loop-strong"></Icon>
            更换模板
        </a>
        <div>
        <span style="float:left;">{{PrintName}}</span>
        <span style="float:right;color:#D3D3D3">2019-10-10</span>
        </div>
        <div class="box">
            <div class="content" > 
              <img width="90%" height="90%" src="./../assets/images/print.jpg" />
            </div> 
        </div>
        
    </Card>
</template>

<script>
export default {
    props:{
        Name:{
            type: String,
            default: ''
        },
        PrintName:{
            type: String,
            default: ''
        },
        Author:{
            type: String,
            default: ''
        }
    },
    filters: {
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 18) {
        return value.slice(0,18) + '...'
      }
      return value
    }
  },
  methods:{
      changeLimit:function(params) {
          this.$parent.changeLimit(this.Name);
      }
  }
}
</script>


<style scoped>
*{
      font-size: 12px !important; 
}
.box {
    width: 100%;
    background: repeating-linear-gradient(135deg, transparent, transparent 4px, #34538b 3px, #cd0000 8px);
    animation: shine 1s infinite linear;
    overflow: hidden;
}
.ivu-card-extra{
    top: 16px !important;
}
.content {
    height: 320px;
    margin: 1px;
    background-color: #fff;    
}
@keyframes shine {
    0% { background-position: -1px -1px;}
    100% { background-position: -12px -12px;}
} 

.icon-shebei{
    color: blue;
}
</style>