<template>
    <ContentBase>
        <WaitCar1 v-bind:carList="carList" />
    </ContentBase>
</template>
  
  
<script>
import ContentBase from '@/components/ContentBase.vue';
import WaitCar1 from '@/components/WaitCar1.vue';
import { reactive } from 'vue';
import { ref } from 'vue';
import $ from 'jquery';

export default {
    name: 'WaitingCarsInfoView',
    components: {
        ContentBase,
        WaitCar1,
    },
    setup() {
        // 发送请求，获得每个充电桩队列的车辆数据
        //
        const carList = reactive({
            arr: []
        })
        const pileIdList = ["CTA", "CTB", "CTC", "CFA", "CFB"];
        // 获取后端数据，用于控制开关和充电桩状态
        let users = ref([]);
        // 首先获取充电桩状态
        for (let index = 0; index < pileIdList.length; index++) {
            const pileId = pileIdList[index];
            $.ajax({
                url: process.env.VUE_APP_BACKEND_URL + '/admin/checkChargerQueue',
                type: "get",
                // 需要传递参数，String 类型是 carId
                data: {
                    pileId: pileId
                },
                success(resp) {
                    var cars = resp.data['cars']
                    for (let index = 0; index < cars.length; index++) {
                        const element = cars[index];
                        var res = {}
                        res['carName'] = element['carId']
                        res['area'] = element['area']
                        res['queueNo'] = element['queueNo']
                        res['status'] = element['status']
                        res['enWaitingQTime'] = element['enWaitingQTime']
                        if (res == null || Object.keys(res).length != 0) {
                            users.value.push(res)
                        }
                    }

                }
            });
        }
        carList.arr = users.value;
        // 更新carList的数组
        return {
            carList,
        }
    }
}
</script>
  
<style scoped>
/* .container {
    margin-top: 20px;
} */
</style>
  