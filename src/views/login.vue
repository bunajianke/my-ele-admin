<template>
    <div class="login-wrapper">
        <el-row type="flex" justify="center">
            <el-col :span="5" :xs="{span:18}">
                <h3>Admin-Demo</h3>
                <el-form label-position="top" label-width="80px" :model="formData">
                    <el-form-item label="用户名">
                        <el-input v-model="formData.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="formData.password" type="password"></el-input>
                    </el-form-item>
                    <el-button type="primary" @click="toLog">登录</el-button>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            formData: {
                username: "admin",
                password: "admin"
            }
        };
    },
    methods: {
        ...mapActions({
            userLogin: "user/userLogin"
        }),
        toLog() {
            var { formData } = this
            this.userLogin(formData).then(res => {
                console.log(res)
                if(res.code == '0000') {
                    this.$router.push({ path: '/' })
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped>
#app {
    width: 100%;
    height: 100%;
}
.el-row {
    padding-top: 20vh;
    .el-col {
        padding: 24px 30px 46px;
        background-color: #e6e6e6;
        border-radius: 6px;
        h3 {
            color: #666;
            text-align: center;
        }
    }
}
.el-form {
    padding-top: 2px;
    .el-button {
        width: 100%;
        margin-top: 20px;
    }
}
</style>
