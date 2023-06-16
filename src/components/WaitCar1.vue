<template>
    <li v-for="item in carList.arr" :key="item.CarID">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-1">
                        <img class="img-thumbnail"
                            src="https://img2.baidu.com/it/u=3620943236,590199335&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500"
                            alt="">
                    </div>
                    <div class="col-8">
                        <div class="UserID">车辆ID:{{ item.carName }}</div>
                        <div class="TotalBatteryCapacity">所属区域：{{ item.area }}</div>
                        <div class="RequestAChargeAmount">所属充电桩：{{ item.queueNo }}</div>
                        <div class="QueueingTime">状态：{{ item.status }}</div>
                        <div class="QueueingTime">进入等候区时间：{{ item.enWaitingQTime }}</div>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>


<script>

export default {
    name: "WaitCar1",
    props: {
        carList: {
            type: Object,
            required: true,
        },
    },
}
</script>


<style scoped>
image {
    border-radius: 50%;
}

.UserID {
    font-weight: bold;
}

.TotalBatteryCapacity {
    font-size: 12px;
    color: gray;
}

.RequestAChargeAmount {
    font-size: 12px;
    color: gray;
}

.QueueingTime {
    font-size: 12px;
    color: gray;
}
</style>