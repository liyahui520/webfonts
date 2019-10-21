<template>
<div> 
     <Card>
        <div style="text-align:center;position:relative;">
    
            <p class="title">{{cardName}}</p>
            <div style="margin:0%;" class="con">
                <img width="90%" height="220px" src="./../assets/images/print.jpg" /> 
                <div class="subscript">
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
        <p>使用</p>
        </div>
    </Card>
    </div>
</template>

<script>
export default {
    props:{
        titleName:{
            type: String,
            default: '测试模板'
        },
        imageUrl:{
            type: String,
            default: ''
        }
    },
    data(){
        return{
            cardName: this.titleName,
            images: this.imageUrl
        }
    }
}
</script>

<style scoped>
.title{
    background-color: cornflowerblue;
}
 
 .con{
            margin: 0 auto;
            overflow: hidden; 
            position: relative; 
          }
      .subscript{
          text-align: center;
        color: #fff;
        height: 10%;
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