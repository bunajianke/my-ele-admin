<template>
    <div>
        <label for="">

            <input type="file" @change="selectImg">
        </label>
        <img :src="img" alt="">
    </div>
</template>

<script>
import { get, post } from '@/utils/request'
export default {
    data() {
        return {
            img: ''
        }
    },
    methods: {
        selectImg(e) {
            let file = e.target.files[0]
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                let data
                this.img = e.target.result
                post("http://hq1.zhongbencard.com/app/images/card_front1", {
                    file: this.img,
                    type: 'chuanchuanchuanchuan'
                }).then(res => {
                    console.log(res);
                })
            }
        }
    }
}
</script>
