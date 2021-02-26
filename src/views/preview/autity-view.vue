<template>
    <div class="preview-wrap">
        <div class="tools-title clearfix">
            <div class="header">
                <h2 class="title">同兴智能公司关于开展“i国网”移动门户 网”移动门户 安装使用及提高办文效率的通知</h2>
                <div class="sub-info">
                    <span>发布人：李方军</span>
                    <span>单位：省公司本部/互联网部</span>
                    <span>发布时间：2021-02-02 19:34:02</span>
                    <!-- <span>浏览量：<span class="num">238</span></span> -->
                </div>
            </div>
            <!-- <div class="top">
                <el-tooltip content="置顶" placement="bottom">
                    <div class="top-btn"><i class="iconfont icon1tubiao-zhiding-2"></i></div>
                </el-tooltip>
            </div> -->
        </div>

        <el-card class="box-card notice-card">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="公告正文" name="first">
                    各部门、中心：
                    “i国网”是国网公司外网移动应用统一登录门户，是外网移动APP统一入口。按照国网公司统一要求，原移动办公APP已经下线，导致手机客户端无法登录，无法实现外网移动办公，现按照国网公司关于推广新一代移动门户要求，请各位领导及已申请协同办公账号的各部门、中心人员安装“i国网”APP，以方便外出时及时批阅待办文件、进行网络大学学习、召开视频会议等，具体要求如下： 1.新一代“i国网”平台集成了视频会议、移动办公等功能，按照国网公司及省公司保密要求，线上会议原则上尽量以“i国网”形式召开，安装地址详见附件。 2.按照省公司及集团公司考核标准，已申请协同办公账号的人员必须下载“i国网”，并确保每月每人至少登陆一次。“i国网”登录采用统一权限账号密码登录。 3.各部门、中心高度重视协同办公办文工作，按照对标要求，每个环节不能超过24小时，全流程不能超过96小时。发文和签报提请部门、中心是流程环节甄选、流程时长管控的主体责任部门。拟稿人（流程发起人）要认真遵循文件生命周期规律，务必全过程管控、动态跟踪、随时沟通、及时催办，严格管控发文流程时长不超时，各部门办文人员严禁在下午4点之后发文，周五下班前未办结的发文及签报请及时撤办。 4.因公司部分员工账号为临时账号，账号使用期限为三个月，为了不影响正常工作，请临时账号人员及时办理续期，防止因账号过期影响正常工作办理和办文超时情况。 5.请各部门、中心认真督促本部门所有人员提高办文效率，“日空日结”个人全部待办，可通过“收藏”、设为“我的关注”、“另存为”本地三种方式保存需保留的文件。 综合管理部（纪委办公室）
                </el-tab-pane>
                <el-tab-pane label="审核记录" name="second">
                    <div class="autity-record-wrap">
                        <el-timeline>
                            <el-timeline-item
                                v-for="(activity, index) in activities"
                                :key="index"
                                :icon="activity.icon"
                                :type="activity.type"
                                :color="activity.color"
                                :size="activity.size"
                                :timestamp="activity.timestamp">
                                {{activity.content}}
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <div class="footer">
                <el-button type="primary" size="mini">审核</el-button>
                <el-button size="mini">取消</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'NoticeView',
    data () {
        return {
            activeName: 'first',
            activities: [
                {
                    content: '王刚 驳回了公告，意见为：公告内容正文内容不充分，未标注清楚署名。',
                    timestamp: '2021-01-20 10:34:23',
                    size: 'large',
                    color: '#1083EE'
                }, 
                {
                    content: '王刚 驳回了公告，意见为：附件无法打开，请核对！',
                    timestamp: '2021-01-20 10:34:23',
                    size: 'large',
                    color: '#1083EE'
                }, 
                {
                    content: '王刚 驳回了公告，意见为：标题内容再完善。',
                    timestamp: '2018-04-03 20:46',
                    size: 'large',
                    color: '#1083EE'
                }
            ]
        }
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>

<style>

</style>