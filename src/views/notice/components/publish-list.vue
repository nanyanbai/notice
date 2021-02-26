<template>
    <div class="list-item">
        <!-- 选中的背景激活样式 active -->
        <div class="drop">
            <div class="drop-left">
                <img  :src="imgSrc" />
            </div>
            <div class="drop-right">
                <div class="header-top">
                    <div class="title max-w172" title="同兴智能公司关于开展“i国网”移动门户 安装使用及提高办文效率的通知">
                        同兴智能公司关于开展“i国网”移动门户 安装使用及提高办文效率的通知
                    </div>
                    <div class="top">
                        <i class="iconfont icon1tubiao-zhiding-2"></i>
                    </div>
                </div>
                <div class="body">
                    <button class="btn-plain success">已发布</button>
                    <span class="name">李方军</span>
                    <span class="date">01-20</span>
                </div>
            </div>
        </div>
        <div class="drop active">
            <div class="drop-left">
                <img  :src="imgSrc" />
            </div>
            <div class="drop-right">
                <div class="header-top">
                    <div class="title max-w172" title="同兴智能公司关于开展“i国网”移动门户 安装使用及提高办文效率的通知">
                        同兴智能公司关于开展“i国网”移动门户 安装使用及提高办文效率的通知
                    </div>
                    <div class="top">
                        <i class="iconfont icon1tubiao-zhiding-2"></i>
                    </div>
                </div>
                <div class="body">
                    <button class="btn-plain success">已发布</button>
                    <span class="name">李方军</span>
                    <span class="date">01-20</span>
                </div>
            </div>
        </div>
        <div class="drop">
            <div class="drop-left">
                <img  :src="imgSrc1" />
            </div>
            <div class="drop-right">
                <div class="header-top">
                    <div class="title max-w172" title="同兴智能公司关于开展“i国网”移动门户 安装使用及提高办文效率的通知">
                        同兴智能公司关于开展“i国网”移动门户 安装使用及提高办文效率的通知
                    </div>
                    <div class="top">
                        <i class="iconfont icon1tubiao-zhiding-2"></i>
                    </div>
                </div>
                <div class="body">
                    <button class="btn-plain success">已发布</button>
                    <span class="name">李方军</span>
                    <span class="date">01-20</span>
                </div>
            </div>
        </div>
        <div class="drop">
            <div class="drop-left">
                <img  :src="imgSrc1" />
            </div>
            <div class="drop-right">
                <div class="header-top">
                    <div class="title max-w172" title="同兴智能公司关于开展“i国网”移动门户 安装使用及提高办文效率的通知">
                        同兴智能公司关于开展“i国网”移动门户 安装使用及提高办文效率的通知
                    </div>
                    <div class="top">
                        <i class="iconfont icon1tubiao-zhiding-2"></i>
                    </div>
                </div>
                <div class="body">
                    <!-- <button class="btn-plain success">已发布</button> -->
                    --
                    <span class="name">李方军</span>
                    <span class="date">01-20</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AllNoticeList',
    data() {
        return {
            imgSrc: require('../../../assets/images/notice.png'),
            imgSrc1: require('../../../assets/images/news.png')
        }
    }
}
</script>

<style scoped  lang="scss">
.max-w172{
    max-width: 172px;
}
</style>