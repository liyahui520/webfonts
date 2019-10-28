<template>
    <Card dis-hover>
        <p slot="title" style="text-align: left;" :title="ItemData.dev.Name">
            <span class="iconfont icon-shebei"></span>
            {{ItemData.dev.Name | ellipsis}}
        </p>
        <a href="#" slot="extra" @click="changeLimit">
            <Icon type="ios-loop-strong"></Icon>
            更换模板
        </a>
        <div>
        <span style="float:left;"  v-if="ItemData.print!=null">{{ItemData.print==null?'':ItemData.print.PrintInfo.Name}}</span>
        <span style="float:right;color:#D3D3D3"  v-if="ItemData.print!=null">2019-10-10</span>
        </div>
        <div class="box">
            <div class="content" v-if="ItemData.print!=null"> 
                 <VueHoverMask @click="PrintViewer">
              <img width="90%" height="90%" src="./../assets/images/print.jpg" />
               
                    <template v-slot:action>
                          <Row type="flex"  class="code-row-bg" style="margin:2%;">
                                <i-col span="6" >作者：</i-col>
                                <i-col span="12" style="text-align:left;">{{ItemData.print.PrintInfo.Author}} </i-col>
                          </Row>
                           <Row type="flex"  class="code-row-bg" style="margin:2%;">
                                <i-col span="6" >描述：</i-col>
                                <i-col span="12" style="text-align:left;">{{ItemData.print.PrintInfo.Describe}} </i-col>
                          </Row> 
                          <i class="iconfont icon-bianji-copy">点击预览</i>
                    </template>
                    
                </VueHoverMask>
            </div> 
            
        </div>
        <div class="content" v-if="ItemData.print==null">
             <img width="90%" height="90%"  src="./../assets/images/print.jpg" />
                <p  width="90%" style="color:red;" >暂无模板</p>
            </div>
    </Card>
</template>

<script>
import VueHoverMask  from './VueHoverMask';
export default {
    components: { VueHoverMask },
    props:{
        ItemData:{
            type: Object,
            default:   {print:{PrintInfo:{Name:'',Author:'',Describe:''},dev:{Name:''}}}
        }
    },
    data(){
        return{
         // Entity:JSON.parse(this.ItemData)
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
          this.$parent.changeLimit(this.ItemData);
      },
      PrintViewer:function(params) {
           this.$emit('PrintViewer',this.ItemData);
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