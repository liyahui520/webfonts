<template>
    <div class="PrintTemps">
        <div v-for="(item,index) in names" :key="index" class="prints">   
            <FCard :titleName="'第'+item.name+'模板'" :imagesUrl="item.imagesUrl"></FCard>
        </div>
    </div>
  
</template>

<script>
import FCard from '@/components/FCard'
export default {
    name: 'PrintTemps',
    components: { FCard },
    data(){
        return{
            names:[
                {name: '1',imageUrl: '@/assets/images/print.jpg'},
                {name: '2',imageUrl: '@/assets/images/print.jpg'},
                {name: '3',imageUrl: '@/assets/images/print.jpg'},
                {name: '1',imageUrl: '@/assets/images/print.jpg'},
                {name: '2',imageUrl: '@/assets/images/print.jpg'},
                {name: '3',imageUrl: '@/assets/images/print.jpg'},
                {name: '1',imageUrl: '@/assets/images/print.jpg'},
                {name: '2',imageUrl: '@/assets/images/print.jpg'},
                {name: '3',imageUrl: '@/assets/images/print.jpg'}
                ]
        }
    },
    mounted:function(){
        this.test();
    },
    methods:{
         test:function() {
              client_object.Invoke("GetDevices", "", "this.initData","");
         },
         initData:function(json) {
             console.log(json);
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