<template>
  <div class="params" v-if="Object.keys(params).length !== 0">
    <table>
      <tr v-for="(item,index) in params.rule.tables[0]" :key="index">
        <td>
          <tr class="inner-tr">
            <td v-for="(_item,_index) in item" :key="_index" class="inner-td">{{_item}}</td>
          </tr>
        </td>
      </tr>
    </table>

    <div v-for="(item,index) in params.info.set" :key="index" class="info">
      <span class="key">{{item.key}}</span>
      <div class="value">{{item.value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsParams",
  props: {
    params: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {}
};
</script>

<style scoped lang="less">
.params {
  font-size: 14px;
  color: #555;
  padding: 10px;
  
  table {
    width: 100%;
    .inner-tr {
      display: flex;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      .inner-td {
        flex: 1;
      }
    }
  }

  .info{
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #ccc;

    .value{
      color: #ff5777;
      padding-left: 50px;
    }
  }
}
</style>