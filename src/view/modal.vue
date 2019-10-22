<template>
<div ref="modal">
    <Modal :IsModel="IsModel" v-model="modal1"
        :title="title"
        @on-ok="ok" 
        @on-cancel="cancel"
        :fullscreen="true">
        <PrintTemps></PrintTemps>
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
            title:{
                type: String,
                required: true
            }
        },
        data () {
            return {
                modal1: false
            }
        },
        mounted:function(){
            alert(this.IsModel)
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