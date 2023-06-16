<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link class="navbar-brand" :to="{ name: 'home' }" href="#">波普特大学</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" href="#"
                            :to="{ name: 'home' }">首页</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" href="#" :to="{ name: 'chargingpilegeneral' }">各充电桩当前状态信息</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" href="#" :to="{ name: 'waitingcarsinfo' }">各充电桩等候服务的车辆信息</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" href="#" :to="{ name: 'reportdisplay' }">报表展示</router-link>
                    </li>
                </ul>
                <span class="navbar-text">
                    管理员端
                </span>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
}
</script>

<style scoped></style>