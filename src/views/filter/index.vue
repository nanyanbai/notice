<template>
    <div class="wrapper-model">
        <el-form :model="form" ref="formRef"  label-width="100px">
            <el-form-item label="通告名称" prop="name">
                <el-input 
                    v-model="form.name" 
                    placeholder="请输入" 
                    clearable 
                    size="small"
                />
            </el-form-item>
            <el-form-item label="通告类别" prop="type">
                <el-radio-group 
                    v-model="form.type"
                    size="small"
                >
                    <el-radio label="不限"></el-radio>
                    <el-radio label="公告"></el-radio>
                    <el-radio label="通知"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="接受对象" prop="objType">
                <el-select 
                    v-model="form.objType" 
                    size="small"
                    placeholder="请选择"
                    style="width:100%"
                >
                    <el-option label="本公司全员" value="0"></el-option>
                    <el-option label="部门" value="1"></el-option>
                    <el-option label="指定人员" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="时间范围" prop="time">
                <el-date-picker 
                    type="date" 
                    size="small"
                    placeholder="请选择" 
                    v-model="form.time" 
                    style="width: 100%;"
                ></el-date-picker>
            </el-form-item>
        </el-form>
        <div class="footer">
            <el-button 
                size="mini"
                type="primary"
            >审核</el-button>
            <el-button size="mini" @click="canel">取消</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FilterPage',
    data() {
        return {
            form: {
                name: '',
                type: '',
                time: '',
                objType: ''
            }
        }
    },
    methods: {
        canel () {
            this.$router.push('/')
        }
    }

}
</script>

<style scoped>
.wrapper-model{
    padding: 24px  64px;
}
.footer{
    position: fixed;
}
</style>