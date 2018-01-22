// 从测试实用工具集中导入 `mount()` 方法
// 同时导入你要测试的组件
import {shallow} from 'vue-test-utils'
import Vue_Test_Unit_Syntax from '../../../../src/components/VueTestUnitSyntaxStudy'
import test from 'ava'
import Vue from 'vue';

Vue.use(Vue_Test_Unit_Syntax)

// 现在挂载组件，你便得到了这个包裹器
const wrapper = shallow(Vue_Test_Unit_Syntax)

// 你可以通过 `wrapper.vm` 访问实际的 Vue 实例
const vm = wrapper.vm

// 在控制台将其记录下来即可深度审阅包裹器
// 我们对 `vue-test-utils` 的探索也由此开始

test('component data test', t => {
    t.is(vm.firstName, 'joey', `${vm.firstName} is not expected`)
    t.is(vm.lastName, 'shen', `${vm.lastName} is not expected`)
});

test('component html content test', t => {
    t.regex(wrapper.html(), /<div>study this plugin syntax.<\/div>/, 'html content not correct')
    t.regex(wrapper.html(), /<h1>hello,joey shen<\/h1>/, 'html content not correct')
});

test('id=testInput ele should change by vm data', t => {
    const givenMessage = 'this is test message.';
    wrapper.setData({
        obj: {
            ...vm.obj,
            message:givenMessage
        }
    });
    t.is(vm.obj.message, givenMessage, 'vm data should equals given message');
    t.is(vm.obj.fixedMessage, 'this is fixed Message', 'vm data should equals given message');
    t.is(wrapper.find('#inputTest').element.value, givenMessage, 'html element value should equals given message')
});