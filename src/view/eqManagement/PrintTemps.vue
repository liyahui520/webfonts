<template>

    <div class="PrintTemps" :NewEntity="NewEntity">
     
         <div v-for="(item,index) in printTemps" :key="index" class="prints">    
            <FCard :EntityItem="item" @PrintViewer="PrintViewer" @Qy="Qy" :imagesUrl="'./../../assets/images/print.jpg'"></FCard>
        </div> 
       
    </div>
  
</template>

<script>
import FCard from '@/components/FCard'
import Api from '@/api/printApi'
import { compreObj } from "@/util/common.js";
export default {
    name: 'PrintTemps',
    components: { FCard },
    props:{
        IsModel:{
            type: Boolean,
            default: true
        },
        NewEntity:{
            type: Object,
            default: () => []
        }
    },
    data(){
        return{
            printTemps:[
                // {name:1,imagesUrl:'./../../assets/images/print.jpg'},
                // {name:1,imagesUrl:'./../../assets/images/print.jpg'},
                // {name:1,imagesUrl:'./../../assets/images/print.jpg'},
                // {name:1,imagesUrl:'./../../assets/images/print.jpg'},
                // {name:1,imagesUrl:'./../../assets/images/print.jpg'},
                // {name:1,imagesUrl:'./../../assets/images/print.jpg'},
                // {name:1,imagesUrl:'./../../assets/images/print.jpg'},
                // {name:1,imagesUrl:'./../../assets/images/print.jpg'},
                // {name:1,imagesUrl:'./../../assets/images/print.jpg'}
                ],
            modal6: this.IsModel,
            loading: true
        }
    },
     mounted:function(){
        window.initprintTemps = this.initprintTemps;
        window.Load=this.Load;
        this.printtempsTest();
        //this.printTemps = [{"Author":"咸菜","Name":"基础打印","Describe":"基础打印","Dll":"Print.dll","ClassName":"Devices.Print.UniversalPrint","UsableDeviceType":1,"Images":["print.jpg"],"Tag":null},{"Author":"yhli","Name":"测试打印","Describe":"测试打印","Dll":"Print.dll","ClassName":"Devices.Print.Y_UniversalPrint","UsableDeviceType":1,"Images":["print.jpg"],"Tag":null}];
    },
    methods:{
         printtempsTest:function() {
              client_object.Invoke("GetPrints", "", "initprintTemps","");
         },
         initprintTemps(json) {
             //this.printTemps =JSON.parse(json); //[{"dev":{"Num":2,"Id":null,"Name":"Mindray 三分群血液细胞分析仪 BC-2800","Model":"BC-2800","Brand":"Mindray","Code":"Mindray 三分群血液细胞分析仪 BC-2800","Remarks":"Mindray 血液细胞分析仪","Url":"http://www.mindray.com/cn/product/ba17524d-5c96-4fda-bb50-33a599e68460.html","ImagePath":"BC_2800.png","ClassInfo":"Devices.Mindray.BC_2800"},"print":{"PrintInfo":{"Author":"咸菜","Name":"基础打印","Describe":"基础打印","Dll":"Print.dll","ClassName":"Devices.Print.UniversalPrint","UsableDeviceType":1,"Images":["print.jpg"],"Tag":null}}},{"dev":{"Num":1,"Id":null,"Name":"IDEXX 工作站","Model":"IDEXX VetLab-Station","Brand":"IDEXX","Code":"IDEXX_VetLab_Station","Remarks":"IDEXX 工作站","Url":"https://www.idexx.de/de/veterinary/analyzers/idexx-vet-lab-station/","ImagePath":"vetlab-station.jpg","ClassInfo":"Devices.IDEXX.IDEXX_VetLab_Station"},"print":{"PrintInfo":{"Author":"咸菜","Name":"基础打印","Describe":"基础打印","Dll":"Print.dll","ClassName":"Devices.Print.UniversalPrint","UsableDeviceType":1,"Images":["print.jpg"],"Tag":null}}},{"dev":{"Num":4,"Id":null,"Name":"FUJI DRI-CHEM NX700iVC干式生化仪","Model":"FUJI DRI-CHEM NX700iVC","Brand":"fujifilm","Code":"FUJI_DRI_CHEM_NX700iVC","Remarks":"富士生化","Url":"http://www.fujifilm.com.cn/products/medical/animal/","ImagePath":"nx700ivc.png","ClassInfo":"Devices.Fujifilm.DRI_CHEM_NX700iVC"},"print":{"PrintInfo":{"Author":"咸菜","Name":"基础打印","Describe":"基础打印","Dll":"Print.dll","ClassName":"Devices.Print.UniversalPrint","UsableDeviceType":1,"Images":["print.jpg"],"Tag":null}}},{"dev":{"Num":5,"Id":null,"Name":"全自动血细胞分析仪 FF-6450","Model":"FUJI FF-6450","Brand":"fujifilm","Code":"FUJI_FF_6450","Remarks":"富士全自动血细胞分析仪","Url":"http://www.fujifilm.com.cn/products/medical/dri_chem/ff6450/","ImagePath":"ff_6450.png","ClassInfo":"Devices.Fujifilm.FF_6450"},"print":{"PrintInfo":{"Author":"咸菜","Name":"基础打印","Describe":"基础打印","Dll":"Print.dll","ClassName":"Devices.Print.UniversalPrint","UsableDeviceType":1,"Images":["print.jpg"],"Tag":null}}},{"dev":{"Num":3,"Id":null,"Name":"FUJI DRI-CHEM NX500iVC干式生化仪","Model":"FUJI DRI-CHEM NX500iVC","Brand":"fujifilm","Code":"FUJI_DRI_CHEM_NX500iVC","Remarks":"富士生化","Url":"http://www.fujifilm.com.cn/products/medical/animal/","ImagePath":"FUJIDRI-CHEMNX500iVC.png","ClassInfo":"Devices.Fujifilm.DRI_CHEM_NX500iVC"},"print":{"PrintInfo":{"Author":"咸菜","Name":"基础打印","Describe":"基础打印","Dll":"Print.dll","ClassName":"Devices.Print.UniversalPrint","UsableDeviceType":1,"Images":["print.jpg"],"Tag":null}}},{"dev":{"Num":7,"Id":null,"Name":"爱倍思 HM5c血常规","Model":"Abaxis VetScan HM5c","Brand":"Abaxis","Code":"Abaxis_VetScan_HM5c","Remarks":"爱倍思 HM5c血常规","Url":"https://www.abaxis.com/veterinary/products/vetscan-vs2","ImagePath":"VS2_600x600_FE.png","ClassInfo":"Devices.Abaxis.VetScan_HM5c"},"print":{"PrintInfo":{"Author":"咸菜","Name":"基础打印","Describe":"基础打印","Dll":"Print.dll","ClassName":"Devices.Print.UniversalPrint","UsableDeviceType":1,"Images":["print.jpg"],"Tag":null}}},{"dev":{"Num":6,"Id":null,"Name":"爱倍思 VS2生化分析仪","Model":"Abaxis Vetscan-VS2","Brand":"Abaxis","Code":"Abaxis_Vetscan_VS2","Remarks":"爱倍思 VS2生化分析仪","Url":"https://www.abaxis.com/veterinary/products/vetscan-vs2","ImagePath":"VS2_600x600_FE.png","ClassInfo":"Devices.Abaxis.Vetscan_VS2"},"print":{"PrintInfo":{"Author":"咸菜","Name":"基础打印","Describe":"基础打印","Dll":"Print.dll","ClassName":"Devices.Print.UniversalPrint","UsableDeviceType":1,"Images":["print.jpg"],"Tag":null}}}];
            let aa=[];
            JSON.parse(json).forEach(s=>{ 
                s.IsShow=compreObj(s,this.NewEntity.print.PrintInfo),
               this.printTemps.push(s)
            })
            // console.log(aa);
            // this.printTemps=aa.sort(s=>s.isAdd);
            //   console.log(json);
         }, 
         asyncOK:function(params) {
             
         },
         PrintViewer:function(printData){
              client_object.Invoke('PrintViewer', JSON.stringify(printData), "","");
         },
         Qy:function(oldData){
             let printdata=this.NewEntity;
             printdata.print.PrintInfo=oldData;
             console.log(JSON.stringify(printdata))
             client_object.Invoke('SavePrintConfig',JSON.stringify(printdata),'Load','');
              // this.$emit('Qy',oldData);
         },
         Load:function(){
            this.commonInit(this.NewEntity);
         },
         commonInit:function(newNewEntity){
              let  arr=this.printTemps;
            this.printTemps=[];
             arr.forEach(s=>{  
                s.IsShow=s.ClassName==newNewEntity.print.PrintInfo.ClassName,
               this.printTemps.push(s)
            })
         }
    },
    watch:{
        NewEntity(a,b){
            this.commonInit(a);
        }
    }
}
</script>
<style>
.PrintTemps .ivu-card-body{
    padding: 0% !important;
}
.PrintTemps{
    margin: 1%;
    margin-left: 100px;
}
.prints{
    width:220px;
    margin:1%;
    display: -webkit-inline-box;
    text-align: center;
}
</style>