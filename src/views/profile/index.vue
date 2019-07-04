<template>
    <div class="app">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>信息</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                    </div>
                    <div class="content">
                        <div class="content-avatar">
                            <img :src="user.avatar" alt class="avatar" />
                        </div>
                        <div class="detail">
                            <h3>Admin</h3>
                            <p>楼梯上的灵光</p>
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>修改资料</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                    </div>
                    <div class="form-area">
                        <el-form label-position="left" label-width="auto">
                            <el-form-item label="密码">
                                <el-input v-model="password"></el-input>
                            </el-form-item>
                            <el-form-item label="确定密码">
                                <el-input></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary">立即修改</el-button>
                                <!-- <el-button>取消</el-button> -->
                            </el-form-item>

                            <el-form-item label="用户名">
                                <el-input></el-input>
                            </el-form-item>
                            <el-form-item label="描述">
                                <el-input></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary">确认修改</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            password: ''
        }
    },
    computed: {
        ...mapState(["user"])
    },
    created() {
        // console.log(this.user);
    }
};
</script>


<style lang="scss" scoped>
.app {
    padding: 20px;
}
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .content-avatar {
        width: 100%;
        padding: 40px;
    }
    .avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 2px solid #000;
        box-sizing: border-box;
        box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.4);
    }
}
</style>
