<template>
    <div>
        test
        <button @click="log">click</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions({
            userInfo: 'user/userInfo'
        }),
        log() {
            this.userInfo().then(res => {
                console.log(res)
            })
        }
    }
}
</script>
