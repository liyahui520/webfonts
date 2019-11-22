<template> 
    <Card dis-hover>
        <Row :gutter="16">
        <i-col span="8" style="margin-top:1%;" v-for="(index,item) in data" :key="item">
            <div>
           <lineSing  :id="'chart'+item" :options="index"></lineSing> 
        </div> 
        </i-col>
        <!-- <i-col span="12">
           <div>
           <lineSing :id="'chart2'"></lineSing> 
        </div>  
        </i-col>
        <i-col span="12">
           <div>
           <lineSing :id="'chart2'"></lineSing> 
        </div>  
        </i-col> -->
    </Row>
        
    </Card>
</template>
<script> 
import lineSing from '@/view/echarts/lineSing'
export default {
    name: 'chart',
    components: { lineSing },
    data(){
        return{ 
            rouId:-1,
            data:[{"Max":55.0,"Min":37.0,"Diaplay":"红细胞压积(HCT)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":18.8},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":22.8},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":12.8}]},{"Max":8.5,"Min":5.5,"Diaplay":"红细胞数目(RBC)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":3.88},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":4.88},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":3.88}]},{"Max":77.0,"Min":60.0,"Diaplay":"平均红细胞休积(MCV)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":58.8},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":48.8},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":58.8}]},{"Max":24.5,"Min":19.4,"Diaplay":"平均血红细胞蛋白含量 (MCH)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":20.6},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":20.6},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":20.6}]},{"Max":36.0,"Min":32.0,"Diaplay":"平均红细胞血红蛋白浓度(MCHC)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":35.1},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":35.1},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":35.1}]},{"Max":16.0,"Min":12.0,"Diaplay":"红细胞分布宽度变异系数(RDW)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":12.8},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":12.8},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":12.8}]},{"Max":17.0,"Min":6.0,"Diaplay":"白细胞数目(WBC)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":50.4},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":50.4},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":50.4}]},{"Max":30.0,"Min":12.0,"Diaplay":"淋巴细胞百分比(LY%)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":13.5},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":13.5},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":13.5}]},{"Max":10.0,"Min":3.0,"Diaplay":"单核细胞百分比(MO%)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":4.5},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":4.5},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":4.5}]},{"Max":10.0,"Min":2.0,"Diaplay":"嗜酸性细胞百分率(EO%)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":2.3},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":2.3},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":2.3}]},{"Max":80.0,"Min":60.0,"Diaplay":"中性粒细胞百分比(GR%)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":79.7},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":79.7},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":79.7}]},{"Max":4.8,"Min":1.0,"Diaplay":"淋巴细胞数目(LY#)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":6.8},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":6.8},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":6.8}]},{"Max":1.4,"Min":0.2,"Diaplay":"单核细胞数目(MO#)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":2.3},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":2.3},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":2.3}]},{"Max":1.3,"Min":0.1,"Diaplay":"嗜酸性细胞数目(EO#)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":1.2},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":1.2},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":1.2}]},{"Max":11.8,"Min":3.0,"Diaplay":"中性粒细胞数目(GR#)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":40.1},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":40.1},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":40.1}]},{"Max":500.0,"Min":200.0,"Diaplay":"血小板数目(PLT)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":112.0},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":112.0},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":112.0}]},{"Max":2.9,"Min":0.0,"Diaplay":"血小板压积(PCT)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":0.09},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":0.09},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":0.09}]},{"Max":11.1,"Min":6.7,"Diaplay":"平均血小板体积(MPV)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":7.9},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":7.9},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":7.9}]},{"Max":50.0,"Min":0.0,"Diaplay":"血小板分布宽度(PDW)","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":16.4},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":16.4},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":16.4}]},{"Max":0.0,"Min":0.0,"Diaplay":"HGB","ResultDatas":[{"Date":"2019-09-19T17:26:47.4029749+08:00","Value":8.0},{"Date":"2019-09-22T14:20:11.4312312+08:00","Value":8.0},{"Date":"2019-09-23T14:20:16.670043+08:00","Value":8.0}]}]
        }
    },
    created(){

    },
    mounted(){
         window.iniCharts = this.iniCharts;
         this.rouId=this.$route.params.id;
           this.GetData();
    },
    methods:{
        GetData:function(){
            client_object.Invoke("GetDiagram", this.rouId, "iniCharts","");
        },
        iniCharts:function(json){
            console.log(json);
        }
    },
       
}
</script> 