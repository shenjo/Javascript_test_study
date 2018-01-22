import {mount} from 'vue-test-utils'
import Element_Form from '../../../../src/components/ElementForm'
import test from 'ava'


const wrapper = mount(Element_Form);

const vm = wrapper.vm;

test('component data test', t => {
    const activityName = 'basketball';
    wrapper.setData({
        form: {
            ...vm.form,
            name:activityName
        }
    });
    t.is(vm.$refs.formName.currentValue,activityName,`name should be ${activityName}`)
});
