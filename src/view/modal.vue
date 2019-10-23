<template>
<div ref="modal">
    <Modal :IsModel="IsModel" v-model="modal1"
        :title="SingData.dev.Name"
        @on-ok="ok" 
        @on-cancel="cancel"
        :fullscreen="true">
        <PrintTemps :NewEntity="SingData"></PrintTemps>
    </Modal>
</div>
  
</template>
<script>
import PrintTemps from './eqManagement/PrintTemps'
    export default {
        components: { PrintTemps },
        name:'modal',
        props:{
            IsModel:{
                type: Boolean,
                required: true
            },
            SingData:{
                type: Object,
                required: ()=>[]
            }
        },
        data () {
            return {
                modal1: false
            }
        },
        mounted:function(){
            console.log(this.SingData)
        },
        methods: {
            ok () {
                this.$parent.ok();
            },
            cancel () {
                this.$parent.ok();
            },
             beforeDestroy: function(e) {  
                 console.log(1111) 
                          },
       
        },
        watch:{
            IsModel(oldVal,newVal) {
                //this.IsModel=newVal;
                console.log(this.IsModel)
                this.modal1 = oldVal;
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