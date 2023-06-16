<template>
  <ContentBase>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            当前充电功率
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong></strong>
            <ul class="list-group">
              <li class="list-group-item">快充 30度/小时</li>
              <li class="list-group-item">慢充 7度/小时</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
            aria-expanded="false" aria-controls="collapseTwo">
            当前计费费率
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul class="list-group">
              <li class="list-group-item">峰时 1.0元/度</li>
              <li class="list-group-item">平时 0.7元/度</li>
              <li class="list-group-item">谷时 0.4元/度</li>
              <li class="list-group-item">服务费单价 0.8元/度</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            充电桩数量
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul class="list-group">
              <li class="list-group-item">快充 2</li>
              <li class="list-group-item">慢充 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </ContentBase>
</template>


<script>
import ContentBase from '@/components/ContentBase.vue';


export default {
  name: 'HomeView',
  components: {
    ContentBase,
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
