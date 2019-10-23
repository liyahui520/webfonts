<template>
<div> 
     <Card>
        <div style="text-align:center;position:relative;">
    
            <p class="title">{{EntityItem.Name}}</p>
            <div style="margin:0%;" class="con">
                <VueHoverMask >
                    <img width="90%" height="260px" src="./../assets/images/print.jpg" /> 
                    <template v-slot:action>
                          <Row type="flex"  class="code-row-bg" style="margin:2%;">
                                <i-col span="6" >作者：</i-col>
                                <i-col span="12" style="text-align:left;">{{EntityItem.Author}} </i-col>
                          </Row>
                           <Row type="flex"  class="code-row-bg" style="margin:2%;">
                                <i-col span="6" >描述：</i-col>
                                <i-col span="12" style="text-align:left;">{{EntityItem.Describe}} </i-col>
                          </Row> 
                          <i class="iconfont icon-bianji-copy">点击预览</i>
                    </template>
                    
                </VueHoverMask>
                <div class="subscript" v-if="IsShow">
                    使用中
                </div>
            </div>
            <!-- <div class="project-tag" style="position:absolute; width:75%; height:70%; right:45%; top:20px; ">
                <div>123131</div>
            </div> -->
            <!-- <b style=" position:absolute; width:70%; height:70%; right:45%; top:20px; ">                       
                <img src="./../assets/images/sy.png" width="60%"/> 
                
            </b>  
            <p style="position:absolute; width:70%; height:70%; right:45%; top:20px;">使用</p> -->
        <i-button type="success" size="small" @click="Qy"  v-if="!IsShow" long>启用</i-button>
        <i-button type="error" size="small"  v-if="IsShow" long>启用中</i-button>
        </div>
    </Card>
    </div>
</template>

<script>
import VueHoverMask  from './VueHoverMask';
export default {
     components: { VueHoverMask },
    props:{
        EntityItem:{
            type: Object,
            default: ()=>[]
        },
        IsShow:{
            type: Boolean,
            default: true
        }
    },
    data(){
        return{
            cardName: this.titleName,
            images: this.imageUrl
        }
    },
    mounted:function() {
    },
    methods:{
        Qy:function() { 
        }
    }
}
</script>

<style scoped>
.title{
    background-color: #3399ff;
    color:#fff;
}
 
 .con{
            margin: 0 auto;
            overflow: hidden; 
            position: relative; 
          }
      .subscript{
          text-align: center;
        color: #fff;
        height: 11%;
        width: 90%;
        position: absolute;
        right: -19%;
        top: 10%;
        text-align: center;
        line-height: 24px;
        font-family: "黑体";
        background-color: #0c60ee;
        -moz-transform:rotate(45deg);
        -webkit-transform:rotate(45deg);
        -o-transform:rotate(45deg);
        -ms-transform:rotate(45deg);
        transform:rotate(45deg);
      } 
</style>