<template>
    <div class="wrapper-model">
        <el-form :model="form" ref="formRef"  label-width="100px">
            <el-form-item label="通告主题" prop="title">
                <el-input 
                    v-model="form.title" 
                    placeholder="您发布的通告主题" 
                    clearable 
                    size="small"
                />
            </el-form-item>
            <el-form-item label="通告类别" prop="type">
                <el-radio-group 
                    v-model="form.type"
                    size="small"
                >
                    <el-radio label="公告"></el-radio>
                    <el-radio label="通知"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="有效时间" prop="time">
                <el-date-picker 
                    type="date" 
                    size="small"
                    placeholder="请选择通告有效期" 
                    v-model="form.time" 
                    style="width: 100%;"
                ></el-date-picker>
            </el-form-item>
            <el-form-item label="通告对象">
                <el-select 
                    v-model="form.objType" 
                    size="small"
                    placeholder="您需要通告的对象类型"
                    style="width:100%"
                >
                    <el-option label="本公司全员" value="0"></el-option>
                    <el-option label="部门" value="1"></el-option>
                    <el-option label="指定人员" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="审核类型" prop="auditType">
                <el-radio-group 
                    v-model="form.auditType"
                    size="small"
                    @change="changeAutityType"
                >
                    <el-radio  value="0" label="无需审核"></el-radio>
                    <el-radio  value="1" label="指定审核人"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="上传">
                <el-upload
                    ref="upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :auto-upload="false">
                    <el-button 
                        slot="trigger" 
                        size="small" 
                        type="primary"
                        icon="el-icon-plus"
                    >上传</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="通告正文" prop="content">
                <el-tiptap 
                    v-model="form.content" 
                    :extensions="extensions" 
                    lang="zh"  
                    height="300px"
                    placeholder="请输入通告正文" 
                />
            </el-form-item>
        </el-form>
        <div class="footer">
            <el-button 
                size="mini"
                type="primary"
            >确定</el-button>
            <el-button size="mini" @click="handleView">预览</el-button>
            <el-button size="mini" @click="canel">取消</el-button>
        </div>
    </div>
</template>

<script>
import {
    ElementTiptap,
    Doc,
    Text,
    Paragraph,
    Heading,
    Bold,
    Underline,
    Link,
    Italic,
    Image,
    Strike,
    ListItem,
    BulletList,
    OrderedList,
    TodoItem,
    TodoList,
    HorizontalRule,
    Fullscreen,
    Preview,
    CodeBlock,
    TextColor
} from 'element-tiptap'
import 'element-tiptap/lib/index.css'
export default {
    name: 'PublishPage',
    components: {
        'el-tiptap': ElementTiptap
    },
    data() {
        return {
            form: {
                title: '',
                type: '',
                time: '',
                objType: '',
                auditType: '',
                content: ''
            },
            extensions: [
                new Doc(),
                new Text(),
                new Paragraph(),
                new Heading({ level: 3 }),
                new Bold({ bubble: true }), // 在气泡菜单中渲染菜单按钮
                new Link(),
                new Image({
                // 默认会把图片生成 base64 字符串和内容存储在一起，如果需要自定义图片上传
                uploadRequest (file) {
                    // 如果接口要求 Content-Type 是 multipart/form-data，则请求体必须使用 FormData
                    const fd = new FormData()
                    fd.append('image', file)
                    // 第1个 return 是返回 Promise 对象
                    // 为什么？因为 axios 本身就是返回 Promise 对象
                    return uploadImage(fd).then(res => {
                    // 这个 return 是返回最后的结果
                    return res.data.data.url
                    })
                } // 图片的上传方法，返回一个 Promise<url>
                }),
                new Underline(), // 下划线
                new Italic(), // 斜体
                new Strike(), // 删除线
                new HorizontalRule(), // 华丽的分割线
                new ListItem(),
                new BulletList(), // 无序列表
                new OrderedList(), // 有序列表
                new TodoItem(),
                new TodoList(),
                new Fullscreen(),
                new Preview(),
                new CodeBlock(), // 代码块
                new TextColor()
            ],
        }
    },
    methods: {
        handlePreview() {},
        handleRemove () {},
        // 审核类型
        changeAutityType(val) {
            if (val === '指定审核人') {
                
            }
        },
        // 预览按钮操作
        handleView () {
            this.$router.push('/view')
        },
        // 取消按钮操作
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