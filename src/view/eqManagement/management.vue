<template>
<div style="margin:0 auto;width:100%;">
    <div style="margin:1%;margin-left:60px;">
    <!-- <Row type="flex" justify="center" class="code-row-bg"> -->
        <div class="div" v-for="(item,index) in lists" :key="index"> 
        <LineDiv></LineDiv> 
        </div>
    <!-- </Row> -->
    </div>
</div>
</template>

<script>
import LineDiv from '@/components/lineDiv'
export default {
    name: 'management',
    components: { LineDiv },
    data(){
        return{
            lists:[
                {name:'设备1'}, 
                {name:'设备2'},
                {name:'设备3'},
                {name:'设备4'},
                 {name:'设备5'},
                {name:'设备6'},
                {name:'设备7'},
                 {name:'设备8'},
                {name:'设备9'},
            ]
        }
    }
}
</script>


<style scoped> 
.div{ 
    width: 280px;
    margin: 1%; 
    display: -webkit-inline-box;
    text-align: -webkit-center;
} 
</style>