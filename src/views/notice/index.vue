<template>
    <div class="common-layout">
        <!-- 左侧菜单栏目 start -->
        <div class="common-layout-left">
            <div class="common-title">
                <el-button
                    class="publish-btn"
                    type="primary" 
                    icon="el-icon-plus"
                    @click="handlePublish"
                >发布公告</el-button>
            </div>
            <div class="common-scrollbar el-scrollbar">
                <div class="scrollbar-wrap">
                    <ul class="menu">
                        <li 
                            :class="currentIndex === index ? 'active': ''" 
                            v-for="(item, index) in menuList" 
                            :key="index"
                            @click="handleTabs(index)"
                        >
                            <i class="iconfont" :class="item.icon"></i>
                            <span class="name">
                                {{item.text}}
                            </span>
                            <span v-if="item.text === '我审核的'" class="badge ">8</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 左侧菜单栏目 end -->

        <!-- 内容区域 start  -->
        <div class="common-layout-center clearfix">

            <div class="message-list-con">
                <div class="header-title">
                    <div class="all-num">全部 ( 21 )</div>
                    <div class="tools"  @click="handleFilter">
                        <i class="iconfont icon1tubiao-shaixuan"></i>
                        <span>筛选</span>
                    </div>
                </div>
                <div class="list-scrollbar">
                    <all-notice-list  
                        v-if="currentIndex === 0" 
                        :allDataList="allDataList" 
                        @detailList="detailList"
                        @getpageData="getpageData"
                        ref="getLoading"
                    />
                    <publish-list 
                        v-else-if="currentIndex === 1" 
                    />
                    <autity-list v-else />
                </div>
            </div>

            <!-- 预览详情 start -->
            <div class="message-view-con">
                <div class="wrapper">
                    <notice-view v-if="currentIndex === 0"  :noticeViewList="noticeViewList"></notice-view>
                    <publish-view v-else-if="currentIndex === 1"></publish-view>
                    <autity-view v-else></autity-view>
                </div>
            </div>
            <!-- 预览详情 end -->
            
        </div>
        <!-- 内容区域 end  -->

        
    </div>
</template>

<script>
import { queryAll } from '@/api/notice'

// 列表
import allNoticeList from  './components/allnotice-list'
import publishList from './components/publish-list'
import autityList from './components/autity-list'

// 预览
import NoticeView from '../preview/notice-view.vue'
import PublishView from '../preview/publish-view'
import AutityView from '../preview/autity-view'


export default {
    name: 'NoticeIndex',
    components: {
        allNoticeList,
        publishList,
        autityList,
        NoticeView,
        PublishView,
        AutityView
    },
    data () {
        return {
            currentIndex: 0,
            menuList: [
                { icon: 'icon1tubiao-quanbugonggao', text: '全部公告'},
                { icon: 'icon1tubiao-wofabude', text: '我发布的'},
                { icon: 'icon1tubiao-woshenhede', text: '我审核的'}
            ],
            // 查询参数
            pageIndex: 1,
            pageSize: 13,
            total: '', // 总页数
            sysid: "8a8185e2703f4fcb017066dbb3fc003a",  
            unitId: "8a8185d87134eef001715502214400d2",
            userdept: "0000000071ab98eb0171b02360c10004",
            userid: "8a8185d87134eef001715d2ed85b016f" ,  
            
            allDataList: [],
            pageArr: [], //分页数据数组
            noticeViewList: {}
        }
    },
    created () {
        this.loadAllData((this.currentIndex+1).toString())
    },
    methods: {
        loadAllData(index) {
            queryAll({
                pageIndex: this.pageIndex,
                pageSize: this.pageSize,
                queryType: 100,
                selectAuditType: index,
                sysid: this.sysid,
                unitId: this.unitId,
                userdept: this.userdept,
                userid: this.userid
            }).then(res => {
                let result = res.resultValue.list
                this.total = res.resultValue.total
                result.forEach((item) => {
                    this.allDataList.push(item)
                })
            })
        },

        //判断pageNum的值，并显示加载loading
        getpageData() {
            let that = this
            if(that.pageIndex<that.total){	
                that.pageIndex++
                setTimeout(()=> {
                    // debugger
                    console.log(that.$refs.getLoading.loading)
                    that.$refs.getLoading.loading = true
                    that.loadAllData((that.currentIndex+1).toString())
                })
            } else {
                setTimeout(() => {

                },5000)
            }
        },
        
        // 详情
        detailList(val) {
            this.noticeViewList = val
        },
        handleTabs (index) {
            this.currentIndex =  index
            this.loadAllData((index+1).toString())
        },
        // 发布按钮操作
        handlePublish () {
            this.$router.push('/publish')
        },
        // 筛选按钮操作
        handleFilter () {
            this.$router.push('/filters')
        }
    }

}
</script>

<style>

</style>