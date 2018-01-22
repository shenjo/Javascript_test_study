<template>
    <div>
        <h1>hello,{{ user}}</h1>
        <div>study this plugin syntax.</div>
        <input type="text" id="inputTest" v-model="obj.message">
    </div>
</template>

<script>
    export default {
        name: "vue-test-unit-syntax-study",
        data: () => {
            return {
                firstName: 'joey',
                lastName: 'shen',
                obj:{
                    fixedMessage:'this is fixed Message',
                    message:''
                }
            };
        },
        computed: {
            user() {
                return this.firstName + ' ' + this.lastName
            }
        }
    }
</script>

<style scoped>

</style>