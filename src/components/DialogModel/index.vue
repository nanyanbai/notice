<template>
    <el-dialog  
        :title="config.title"
        :visible.sync="visible" 
        :width="config.width"
        :close-on-click-modal="false"
        :before-close="beClose"
    >
        <slot name="content"></slot>
    </el-dialog>
</template>

<script>
export default {
    name: 'Dialog',
    props: {
        config: Object,
        visible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        beClose() {
            this.$emit('beforeClose')
        }
    }

}
</script>

<style>

</style>