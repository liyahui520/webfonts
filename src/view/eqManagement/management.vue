<template>
<div>
    <!-- <Row type="flex" justify="center" class="code-row-bg"> -->
        <div class="div" v-for="(item,index) in lists" :key="index"> 
        <LineDiv></LineDiv> 
        </div>
    <!-- </Row> -->
    
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
    float: left;
    width: 14%;
    margin: 1%;
}
</style>