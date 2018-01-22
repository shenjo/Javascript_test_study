import test from 'ava';


test('this test is ignored in package.json file.', t => {
    // 不会执行
    t.pass();
});