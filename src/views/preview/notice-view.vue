<template>
    <div class="preview-wrap">
        <div class="tools-title clearfix">
            <div class="header">
                <h2 class="title">
                    {{noticeViewList.bulletinName}}
                </h2>
                <div class="sub-info">
                    <span>发布人：{{noticeViewList.bulletinUserName}}</span>
                    <span>单位：{{noticeViewList.toobjName}}/{{noticeViewList.bulletinDept}}</span>
                    <span>发布时间：{{noticeViewList.startDate}}</span>
                    <span>浏览量：<span class="num">238</span></span>
                </div>
            </div>
            <div class="top">
                <el-tooltip content="置顶" placement="bottom">
                    <div class="top-btn"><i class="iconfont icon1tubiao-zhiding-2"></i></div>
                </el-tooltip>
            </div>
        </div>

        <el-card class="box-card">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="公告正文" name="first">
                    <div class="markdown-body" v-html="noticeViewList.bulletinInfo"></div>
                </el-tab-pane>
                <el-tab-pane label="查阅日志" name="second">
                    <div class="search-wrap clearfix">
                        <div class="info">已下发29人，查阅日志17人。</div>
                        <div class="sort">
                            <el-select v-model="value" placeholder="请选择" size="small" style="width:112px">
                                <el-option value="dept" label="按机构排序"></el-option>
                                <el-option value="time" label="按时间排序"></el-option>
                            </el-select>
                        </div>
                    </div>
                    <el-table 
                        border
                        :data="logData"
                    >
                        <el-table-column label="单位/部门" prop="dept"></el-table-column>
                        <el-table-column label="查阅人" prop="name"></el-table-column>
                        <el-table-column label="查询时间" prop="date"></el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import './github-markdown.css'
export default {
    name: 'NoticeView',
    props:{
        noticeViewList: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    data () {
        return {
            activeName: 'first',
            value: '',
            logData: [
                {
                    dept: '信通公司 / 技术创新室',
                    name: '王小虎',
                    date: '2016-05-02',
                },
                {
                    dept: '信通公司 / 技术创新室',
                    name: '王小虎',
                    date: '2016-05-02',
                },
                {
                    dept: '信通公司 / 技术创新室',
                    name: '王小虎',
                    date: '2016-05-02',
                },
                {
                    dept: '信通公司 / 技术创新室',
                    name: '王小虎',
                    date: '2016-05-02',
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