<template> 
        <div>
           <LineChart :options="option" :className="className" :id="id" :width="width" :height="height" :title="this.options.Diaplay"></LineChart> 
        </div> 
</template>
<script>
const echarts = require('echarts');
import data from '@/api.json'
import LineChart from '@/components/echarts/lineChart'
import {formatDate} from '@/util'
export default {
    name: 'lineSing',
    components: { LineChart },
     props: {
         id: {
             type: String,
             default: 'chart'
            },
        options:{
            type: Object,
            default: ()=>[]
        }
     },
    data(){
        return{
            option: {},
            className:'chart',
            width:'100%',
            height:'400px'

        }
    },
    created(){

    },
    mounted(){ 
        if(this.options!=null)
         this.drawLine();
    },
    watch:{
        options(){
            this.drawLine();
        }
    },
    methods:{
        drawLine(){ 
            let ZMax=parseFloat(this.options.Max);
            //if(this.options.ResultDatas!=null){
                let data=this.options.ResultDatas;
                
                for(var i=0;i<data.length;i++){ 
                    let max=parseFloat(data[i].Value);
                    if(parseFloat(ZMax)<parseFloat(max)){
                        ZMax=parseFloat(max);
                    } 
                }  

             let ZMin=parseFloat(this.options.Min);
            //if(this.options.ResultDatas!=null){
                let data1=this.options.ResultDatas;
                
                for(var i=0;i<data1.length;i++){ 
                    let min=parseFloat(data1[i].Value);
                    if(parseFloat(ZMin)>parseFloat(min)){
                        ZMin=parseFloat(min);
                    } 
                }  
                 
           // }
            
        this.option={
        // title: {
        //     text: this.options.Diaplay
        // },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: this.options.ResultDatas.map(function (item) {
                return formatDate(item.Date,'yyyy-mm-dd hh:ss');
            })
        },
        yAxis: {
            splitLine: {
                show: false
            },
           // scale: true,
            max: parseInt(ZMax*1.2+1),
            min: parseInt(ZMin-1),
            // splitNumber:this.options.Max/8
            minInterval : 1,
            boundaryGap : [ 0.2, 0.2 ],
        },
        toolbox: {
            left: 'center',
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [{
            startValue: '2014-06-01'
        }, {
            type: 'inside'
        }],
        visualMap: {
            top: 10,
            right: 10,
            pieces: [{
                gt: -0.01,
                lte: this.options.Min,
                color: '#191970'
            },{
                gt: this.options.Max,
                color: '#7e0023'
            }],
            outOfRange: {
                color: '#1E90FF'
            }
        },
        series: {
            name:this.options.Diaplay,
            type: 'line',
            data:this.options.ResultDatas.map(function (item) {
                return item.Value;
            }),
            // areaStyle: {
            //     normal: {
            //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //             offset: 0,
            //             color: '#8ec6ad'
            //         }, {
            //             offset: 1,
            //             color: '#ffe'
            //         }])
            //     }
            // },
            markLine: {
                silent: true,
                areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#8ec6ad'
                    }, {
                        offset: 1,
                        color: '#ffe'
                    }])
                }
            },
                data: [{
                    yAxis: this.options.Min,
                    silent:false,             //鼠标悬停事件  true没有，false有
					lineStyle:{         
					    color:"#191970",
                            },
                            
                }, {
                    yAxis: this.options.Max
                }],
                label:{
						position:"end"          //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
							},
            }
        }
    }; 
    }}
}
</script> 