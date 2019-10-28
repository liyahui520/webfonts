<template>
<div ref="modal">
    <Modal :IsModel="IsModel" v-model="modal1"
        :title="SingData.dev.Name"
        @on-ok="ok" 
        @on-cancel="cancel"
        :fullscreen="true">
        <PrintTemps :NewEntity="SingData" @Qy="Qy"></PrintTemps>
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
        },
        methods: {
            ok () {
                this.$parent.ok();
            },
            cancel () {
                this.$parent.ok();
            },
             beforeDestroy: function(e) {  
                          },
            Qy:function(oldData){
               this.$emit('Qy',oldData);
         }
       
        },
        watch:{
            IsModel(oldVal,newVal) {
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