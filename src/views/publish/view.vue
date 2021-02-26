<template>
    <div class="preview-wrap">
        <div class="tools-title clearfix">
            <div class="header">
                <h2 class="title">同兴智能公司关于开展“i国网”移动门户 网”移动门户 安装使用及提高办文效率的通知</h2>
                <div class="sub-info">
                    <span>发布人：李方军</span>
                    <span>单位：省公司本部/互联网部</span>
                    <span>发布时间：2021-02-02 19:34:02</span>
                </div>
            </div>
        </div>

        <el-card class="box-card">
            <div class="receiver">
                <div class="scroll-wrapper">
                    <div class="item clearfix">
                        <label>接收人</label>
                        <div class="content">
                            <button class="btn-plain primary space" v-for="item in  200">张三</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="markdown-body">
                “i国网”是国网公司外网移动应用统一登录门户，是外网移动APP统一入口。按照国网公司统一要求，原移动办公APP已经下线，导致手机客户端无法登录，无法实现外网移动办公，现按照国网公司关于推广新一代移动门户要求，请各位领导及已申请协同办公账号的各部门、中心人员安装“i国网”APP，以方便外出时及时批阅待办文件、进行网络大学学习、召开视频会议等，具体要求如下：

                1.新一代“i国网”平台集成了视频会议、移动办公等功能，按照国网公司及省公司保密要求，线上会议原则上尽量以“i国网”形式召开，安装地址详见附件。

                2.按照省公司及集团公司考核标准，已申请协同办公账号的人员必须下载“i国网”，并确保每月每人至少登陆一次。“i国网”登录采用统一权限账号密码登录。

                3.各部门、中心高度重视协同办公办文工作，按照对标要求，每个环节不能超过24小时，全流程不能超过96小时。发文和签报提请部门、中心是流程环节甄选、流程时长管控的主体责任部门。拟稿人（流程发起人）要认真遵循文件生命周期规律，务必全过程管控、动态跟踪、随时沟通、及时催办，严格管控发文流程时长不超时，各部门办文人员严禁在下午4点之后发文，周五下班前未办结的发文及签报请及时撤办。

                4.因公司部分员工账号为临时账号，账号使用期限为三个月，为了不影响正常工作，请临时账号人员及时办理续期，防止因账号过期影响正常工作办理和办文超时情况。

                5.请各部门、中心认真督促本部门所有人员提高办文效率，“日空日结”个人全部待办，可通过“收藏”、设为“我的关注”、“另存为”本地三种方式保存需保留的文件。

                综合管理部（纪委办公室）
            </div>
            
            <div class="file-wrapper">
                <div class="file-num">3个附件：</div>
                <div class="file-list clearfix">
                    <div class="item clearfix">
                        <div class="left">
                            <img src="./../../assets/images/Vector.png"/>
                        </div>
                        <div class="right">
                            <div class="name">“i国网”下载二维码</div>
                            <div class="size">49.67 Kb</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            <img src="./../../assets/images/Vector.png"/>
                        </div>
                        <div class="right">
                            <div class="name">“i国网”下载二维码</div>
                            <div class="size">49.67 Kb</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            <img src="./../../assets/images/Vector.png"/>
                        </div>
                        <div class="right">
                            <div class="name">“i国网”下载二维码</div>
                            <div class="size">49.67 Kb</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </el-card>

        <div class="footer">
            <el-button size="mini" type="primary" @click="handleBack">返回</el-button>
        </div>
    </div>
</template>

<script>
import '../preview/github-markdown.css'
export default {
    name: 'NoticeView',
    data () {
        return {
            
        }
    },
    methods: {
        handleBack() {
            this.$router.push('/publish')
        }
    }
}
</script>

<style lang="scss" scoped>
.receiver{
    padding: 16px;
    background: #F5F7FA;
    border-radius: 4px;
    margin-bottom: 16px;
    .item{
        label{
            width: 62px;
            text-align: right;
            float: left;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.45);
            padding: 0 12px 0 0;
            box-sizing: border-box;
        }
        .content{
            position: relative;
            margin-left: 74px;
        }
    }
    .scroll-wrapper{
        overflow: hidden;
        overflow-y: auto;
        max-height: 91px;
    }
}
.markdown-body{
    margin-bottom: 16px;                          
}
.file-wrapper{
    .file-num{
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        line-height: 22px;
        margin-bottom: 12px;
    }
    .file-list{
        position: relative;
        .item{
            float: left;
            padding: 16px;
            background: #F5F7FA;
            border-radius: 4px; 
            margin-right: 16px;  
            .left{
                float: left;
                margin-right: 5px;
            } 
            .right{
                float: right;
                .name{
                    font-size: 14px;
                    color: #000;
                    margin-bottom: 6px;
                }
                .size{
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.45);
                }
            } 
        }
    }
    
}
.space{
    margin-right: 12px;
    margin-bottom: 12px;
}
.footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 52px;
    line-height: 52px;
    z-index: 9999;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    text-align: center;
}
</style>>
