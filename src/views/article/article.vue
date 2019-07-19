<template>
    <el-table :data="test" stripe style="width: 100%">
        <el-table-column prop="id" label="文章 ID" width="180"></el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { getArticleList } from '@/api/article'
export default {
    data() {
        return {
            tableData: [
                {   
                    id: '1',
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    id: '2',
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄"
                },
                {
                    id: '3',
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄"
                },
                {
                    id: '4',
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄"
                }
            ],
            test: []
        };
    },
    methods: {
        handleClick(row) {
            const id = row.id
            this.$router.push({
                path: '/article/detail/' + id
            })
        }
    },
    mounted() {
        getArticleList({
            page: 1
        }).then(res => {
            // console.log(res);
            this.test = res.data.array
        })
    }
};
</script>