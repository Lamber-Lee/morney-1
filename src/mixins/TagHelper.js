import { __decorate } from "tslib";
import Vue from 'vue';
import Component from 'vue-class-component';

let TagHelper = class TagHelper extends Vue {
    createTag() {
        const name = window.prompt('请输入标签名');
        if (!name) {
            return window.alert('标签名不能为空');
        } else if (name.length > 3) {
            return window.alert('标签名不能超过三个字');
        }
        this.$store.commit('createTag', name);
        window.alert('添加成功');
    }
};
TagHelper = __decorate([
    Component
], TagHelper);
export { TagHelper };
export default TagHelper;
//# sourceMappingURL=TagHelper.js.map