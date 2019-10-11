<template>
    <div class="PrintTemps">
        <div v-for="(item,index) in names" :key="index" style="width:13%;float:left;margin:1%;">   
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
                {name: '3',imageUrl: '@/assets/images/print.jpg'}
                ]
        }
    }
}
</script>
<style>
.PrintTemps .ivu-card-body{
    padding: 1% !important;
}
</style>