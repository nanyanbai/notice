<template>
    <div class="scrollbar-wrapper" ref="scrollH">
        <ul class="list-item">
            <!-- 选中的背景激活样式 active -->
            <li class="drop" 
                :class="currentIndex === index ? 'active' : ''"
                v-for="(item, index) in allDataList" 
                :key="index"  
                @click="handleQueryDetail(item.id, index)"
            >
                <div class="drop-left">
                    <img  :src="imgSrc" />
                </div>
                <div class="drop-right">
                    <div class="header-top">
                        <div class="title max-w172" :title="item.bulletinName">
                            {{item.bulletinName}}
                        </div>
                        <div class="top">
                            <i class="iconfont icon1tubiao-zhiding-2"></i>
                        </div>
                    </div>
                    <div class="body">
                        <button class="btn-plain success">已发布</button>
                        <span class="name">
                            {{item.bulletinUserName}}
                        </span>
                        <span class="date">
                            {{item.startDate}}
                        </span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="loading-wrap" v-show="loading">
            拼命加载中...
        </div>
        <!-- <div v-show="noMore">没有更多了</div> -->

    </div>
</template>

<script>
import { queryDetail } from '@/api/notice' 
export default {
    name: 'AllNoticeList',
    props: {
        allDataList:{
            type: Array,
            default: () => {
                return []
            }
        }
    },
    watch:{
        allDataList: {
            handler(nVal) {
                this.handleQueryDetail(nVal[0]['id'], 0)
            }
        }
    },
    data() {
        return {
            loading: false,
            noMore: false,
            currentIndex: 0,
            imgSrc: require('../../../assets/images/notice.png'),
            imgSrc1: require('../../../assets/images/news.png')
        }
    },
    mounted() {
        this.$refs.scrollH.addEventListener('scroll',  this.handleScroll)
    },
    methods: {

        handleScroll() {
            let dom = this.$refs.scrollH
            let scrolTop = dom.scrollTop
            let domH = dom.offsetHeight 
            let scrolH = dom.scrollHeight
            if(scrolH >= scrolTop + domH ) {
                // debugger
                this.$emit('getpageData')
            }
        },

        handleQueryDetail (id, index) {
            this.currentIndex = index
            queryDetail({id}).then(res => {
                const result  =  res.resultValue
                this.$emit('detailList', result)
            })
        }
    }
}
</script>

<style scoped  lang="scss">
.max-w172{
    max-width: 172px;
}
</style>