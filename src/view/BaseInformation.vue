<template>
    <Card>
        <div>
            <i-form :model="formItem" :label-width="80">
            <Row>
                <i-col span="4">
                    <div class="img">
                        <img src='./../assets/images/print.jpg' />
                    </div>
                </i-col>
                <i-col span="18"> 
                        <div class="centont"> 
                        <Form-item label="机构id">
                            <i-input :value.sync="formItem.input" style="width:10%;" disabled="true" placeholder="请输入"></i-input>
                        </Form-item> 
                        <Form-item label="状态">
                            <i-Switch :checked.sync="formItem.switch" disabled="true" size="large">
                                <span slot="open">启用</span>
                                <span slot="close">停用</span>
                            </i-Switch>
                        </Form-item>
                        <Form-item label="医院名称">
                            <i-input :value.sync="formItem.input" placeholder="请输入"></i-input>
                        </Form-item> 
                   
                        </div>
                </i-col> 
            </Row>
            <Row>
                <i-col span="22">
                     <Form-item label="联系方式">
                            <i-input :value.sync="formItem.input"    placeholder="请输入"></i-input>
                        </Form-item> 
                    <Form-item label="地址">
                        <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
                    </Form-item>
                    <Form-item>
            <i-button type="primary">更新</i-button>
            <i-button type="ghost" style="margin-left: 8px">重置</i-button>
        </Form-item>
                </i-col>
            </Row>
             </i-form>
        </div>
    </Card>
</template>
<script>
export default {
    data(){
        return{
            formItem:{
                input:0,
                switch:false,
                slider:[0-100],
                textarea:null
            }
        }
    }
}
</script>

<style scoped>
    .img{
      
        margin: 1%;
        
    }
    .img img{
        width: 150px;
        height: 150px;
        margin: 1%; 
        border-radius:50% 50% 50% 50%;
             /* border: 1px solid red; */
    }
   .img{
  
    border-radius:70%
} 
</style>