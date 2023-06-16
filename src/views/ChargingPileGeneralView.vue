<template>
    <ContentBase>
        <div class="row">
            <li v-for="(item, index) in pileList.arr" :key="item.pileName">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-1">
                                <img class="img-fluid"
                                    src="https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/1d/46/a6/1d46a62f-6c9e-5030-01d6-6c8a28058bac/source/1024x1024bb.jpg"
                                    alt="">
                                <button @click="turn_off(index)" v-if="item.isOn" type="button"
                                    class="btn btn-success btn-sm">充电中</button>
                                <button @click="turn_on(index)" v-if="!item.isOn" type="button"
                                    class="btn btn-secondary">已关闭</button>
                            </div>
                            <div class="col-9">
                                <div class="Type">充电桩名字为：{{ item.pileName }}</div>
                                <div class="ChargedCount">系统启动后累计充电次数：{{ item.ChargedCount }}</div>
                                <div class="TotalChargingTime">充电总时长：{{ item.TotalChargingTime }}</div>
                                <div class="TotalChargingCapacity">充电总电量：{{ item.TotalChargingCapacity }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    </ContentBase>
</template>
  
  
<script>
import ContentBase from '@/components/ContentBase.vue';
import $ from 'jquery';
import { ref } from 'vue';
import { reactive } from 'vue';

export default {
    name: 'ChargingPileGeneralView',
    components: {
        ContentBase,
    },
    methods: {
        turn_off(index) {
            // 关闭充电桩，表示故障
            // 获取本充电桩的pileId
            var pileId = this.pileList.arr[parseInt(index)].pileName
            const data = {
                pileId: pileId
            }
            // 调用请求 /admin/diePile
            $.ajax({
                url: process.env.VUE_APP_BACKEND_URL + '/admin/diePile',
                type: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                // 需要传递参数，String 类型是 pileId
                data: JSON.stringify(data),
                success(resp) {
                    console.log(resp)
                }
            });
            this.pileList.arr[parseInt(index)].isOn = false
        },
        turn_on(index) {
            // 打开充电桩/恢复
            var pileId = String(this.pileList.arr[parseInt(index)].pileName)
            const data = {
                pileId: pileId
            }
            // 调用请求 
            $.ajax({
                url: process.env.VUE_APP_BACKEND_URL + '/admin/startCharger',

                type: "post",
                // 需要传递参数，String 类型是 pileId
                data: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
                success(resp) {
                    console.log(resp)
                }
            });
            this.pileList.arr[parseInt(index)].isOn = true
        }
    },
    setup() {
        const pileList = reactive({ arr: [] });
        function getPileInfo() {
            const pileIdList = ["CTA", "CTB", "CTC", "CFA", "CFB"];
            // 获取后端数据，用于控制开关和充电桩状态
            let users = ref([]);
            // 首先获取充电桩状态
            for (let index = 0; index < pileIdList.length; index++) {
                const pileId = pileIdList[index];
                $.ajax({
                    url: process.env.VUE_APP_BACKEND_URL + '/admin/checkCharger',
                    type: "get",
                    // 需要传递参数，String 类型是 pileId
                    data: {
                        pileId: pileId
                    },
                    success(resp) {
                        var res = {}
                        res['pileName'] = pileId
                        res['ChargedCount'] = resp.data['total_charge_num']
                        res['TotalChargingTime'] = resp.data['total_charge_time']
                        res['TotalChargingCapacity'] = resp.data['total_capacity']
                        res['isOn'] = resp.data['working_state'] == -1 || resp.data['working_state'] == 0 ? false : true

                        users.value.push(res)
                    }
                });
            }
            return users.value
        }

        // 初始化函数
        pileList.arr = getPileInfo();
        console.log(pileList.arr)
        // 更新pileList的数组
        return {
            pileList, getPileInfo
        }
    }
}
</script>
  
<style scoped>
image {
    border-radius: 50%;
}

.Type {
    font-weight: bold;
}

.ChargedCount {
    font-size: 12px;
    color: gray;
}

.TotalChargingTime {
    font-size: 12px;
    color: gray;
}

.TotalChargingCapacity {
    font-size: 12px;
    color: gray;
}

button {
    padding: 2px 4px;
    font-size: 12px;
}
</style>
  