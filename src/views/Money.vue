<template>
  <Layout class-prefix="layout">
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>
    <Tags @update:value="record.tags = $event"/>
    <div class="createdAt">
      <FormItem field-name="日期"
                type="date"
                placeholder="在这里输入日期"
                :value.sync="record.createdAt"
      />
    </div>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                :value.sync="record.note"
      />
    </div>
    <NumberPad @submit="saveRecord" @update:value="onUpdateAmount"/>
  </Layout>
</template>
<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
import Tabs from '@/components/Tabs.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';
@Component({
  components: {Tabs, NumberPad, Tags, FormItem},
})
export default class Money extends Vue {
  recordTypeList = recordTypeList;
  record = {
    tags: [], note: '', type: '-', amount: 0, createdAt: new Date().toISOString()
  };
  get recordList() {
    return this.$store.state.recordList;
  }
  created() {
    this.$store.commit('fetchRecords');
  }
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }
  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('请至少选择一个标签');
    }
    if(this.record.amount<=0){
      return window.alert('请输入金额')
    }
    this.$store.commit('createRecord', this.record);
    this.record.note = '';
    this.record.tags=[];
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>
