<template>
  <div>
    <exchange-list @change="onChange"></exchange-list>
    <simple-grid
      :grid_data="{{ name }}sData"
      :static_columns="columns"
      id_field="stkNo"
      :rules="rule"
      :loading="loading"
      @rowClick="onRowClick"
    ></simple-grid>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import SimpleGrid from '@/components/kendo/grid/SimpleGrid.vue'
import { MutationType } from '@/models/store'
import { use{{ Name }}sStore } from '@/module/{{ name }}/store'
import { useLogger } from '@/plugins/vue-logger-plugin'
import ExchangeList from '@/components/exchanges/ExchangeList.vue'

const logger = useLogger()
const {{ name }}sStore = use{{ Name }}sStore()

const {{ name }}sData = computed(() => {
  // console.log('computed')
  // console.log({{ name }}sStore.state.categoryData)
  // console.log({{ name }}sStore.state.boardData)
  return {{ name }}sStore.state.{{ name }}s
})

const loading = computed(() => {
  return {{ name }}sStore.state.loading
})

let interval

onMounted(() => {
  logger.debug('onMounted')
  // setInterval(() => {
  //   console.log('run it tiem')
  //   {{ name }}sStore.action(MutationType.sectors.loadSector)
  // }, 10000)
  {{ name }}sStore.action(MutationType.{{ name }}s.load{{ Name }}s)
  interval = setInterval(() => {
    logger.debug('run it timer')
    {{ name }}sStore.action(MutationType.{{ name }}s.load{{ Name }}s)
  }, 30000)
})

onUnmounted(() => {
  clearInterval(interval)
  logger.debug('clear data')
})

const columns = ref([
  { field: 'stkNo', editable: false, title: 'stkNo' },
  { field: 'sectorID', title: 'sectorID' },
  { field: 'name', title: 'name' },
  { field: 'symbol', title: 'symbol' },
  { field: 'compName', title: 'compName' },
  { field: 'sharePerLot', title: 'sharePerLot' },
  { field: 'shareIssued', title: 'shareIssued' },
  { field: 'prevClose', title: 'prevClose', cell: 'myChangeCell' },
  { field: 'LACP', title: 'LACP' },
  { field: 'textType', title: 'textType' },
  { field: 'parVal', title: 'parVal' },
  { field: 'EPS', title: 'EPS' },
  { field: 'currency', title: 'currency' },
  { field: 'PERatio', title: 'PERatio' },
  { field: 'marketCode', title: 'marketCode', cell: 'myChangeCell' },
  { field: 'settlePrice', title: 'settlePrice' },
  { field: 'foreignLimit', title: 'foreignLimit' },
  { field: 'ISIN', title: 'ISIN' },
  { field: 'floorPrice', title: 'floorPrice', cell: 'myChangeCell' },
  { field: 'ceilingPrice', title: 'ceilingPrice', cell: 'myChangeCell' }
  // { field: 'last', title: 'Last', cell: 'myChangeCell' }
])

const rule = { prevClose: 'blue', marketCode: 'green', floorPrice: 'red', ceilingPrice: 'yellow' }

const onRowClick = (data) => {
  console.log(data)
  // lineData.value.push({ time: new Date(), value: data.stkNo })
  // {{ name }}sStore.action(MutationType.{{ name }}s.setStockNo, data.stkNo)
}

const onChange = (value) => {
  console.log(value)
  // {{ name }}sStore.action(MutationType.{{ name }}s.setExchCode, value)
}
</script>

<style lang="scss" scoped>
.sector-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  background-color: #100c2a;
  grid-template-columns: 1fr 400px;
  grid-template-rows: 1fr 1fr;
  grid-gap: 20px;
  grid-template-areas:
    'a c'
    'b c';
  .grid-a {
    grid-area: a;
    overflow: hidden;
  }
  .grid-b {
    grid-area: b;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 1);
  }
  .grid-c {
    grid-area: c;
  }
}
</style>

function use{{ Name }}sStore() {
  throw new Error('Function not implemented.')
}
