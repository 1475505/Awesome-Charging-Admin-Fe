<!-- //基本卡片元素 -->
<template>
    <div class="home">
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <!-- 作为子元素引入的可用slot实现 -->
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ContentBase',
    components: {
    }
}
</script>
  
<style scoped>
.container {
    margin-top: 20px;
}
</style>