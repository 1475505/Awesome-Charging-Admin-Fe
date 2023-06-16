<!-- <template>
    <ContentBase>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">时间(日，周，月)</th>
                    <th scope="col">充电桩编号</th>
                    <th scope="col">累计充电次数</th>
                    <th scope="col">累计充电时长</th>
                    <th scope="col">累计充电量</th>
                    <th scope="col">累计充电费用</th>
                    <th scope="col">累计服务费用</th>
                    <th scope="col">累计总费用</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>1</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </ContentBase>
</template> -->
  
<template>
    <ContentBase>
        <div class="card" v-for="user in users" :key="user.id">
            <div class="card-body">
                <div class="row">
                    <div class="col-1 img-field">
                        <img class="img-fluid" :src="user.photo" alt="">
                    </div>
                    <div class="col-11">
                    </div>
                </div>
            </div>
        </div>
    </ContentBase>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue';
import $ from 'jquery';
import { ref } from 'vue';

export default {
    name: 'ReportDisplayView',
    components: {
        ContentBase,
    },
    setup() {
        let users = ref([]);
        alert(process.env.VUE_APP_BACKEND_URL)

        $.ajax({

            url: process.env.VUE_APP_BACKEND_URL + 'admin/startCharger',
            type: "post",
            success(resp) {
                console.log(resp);
                //users.value = resp;
            }
        });
        return {
            users
        };

    }
}
</script>
  
<style scoped>
.container {
    margin-top: 20px;
}
</style>
  