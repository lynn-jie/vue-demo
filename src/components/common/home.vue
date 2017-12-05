<template>
	<div class='mians'>

		<div class="left-nav">
			<ul>
				<li>
					<i class="icon iconfont icon-wodezichan"></i>
					<div>收银</div>
				</li>

				<li>
					<router-link to="table.vue">
						<i class="icon iconfont icon-dianpu"></i>
						<div>店铺</div>
					</router-link>
				</li>

				<li>
					<i class="icon iconfont icon-hanbao"></i>
					<div>商品</div>
				</li>

				<li>
					<i class="icon iconfont icon-huiyuanqia"></i>
					<div>会员</div>
				</li>

				<li>
					<i class="icon iconfont icon-shijian"></i>
					<div>抢购</div>
				</li>

				<li>
					<i class="icon iconfont icon-tongji"></i>
					<div>统计</div>
				</li>

			</ul>
			<router-view></router-view>

		</div>

		<div class="right-nav">
			<div class="top">客户管理</div>

			<div class="r-mian">

				<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border style="width: 100%" @selection-change="handleSelectionChange">

					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column fixed prop="date" label="日期" width="150">
					</el-table-column>
					<el-table-column prop="name" label="姓名" width="120">
					</el-table-column>
					<el-table-column prop="province" label="省份" width="120">
					</el-table-column>
					<el-table-column prop="city" label="市区" width="120">
					</el-table-column>
					<el-table-column prop="address" label="地址" width="300">
					</el-table-column>
					<el-table-column prop="zip" label="邮编" width="120">
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="160">

						<template slot-scope="scope">
							<el-button size="mini" @click="dialogTableVisible = true">编辑</el-button>

							

							<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
							
							
							<!--表格嵌套里面内容 s-->
							<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
								<el-form :model="form">
									<el-form-item label="活动名称" :label-width="formLabelWidth">
										<el-input v-model="form.name" auto-complete="off"></el-input>
									</el-form-item>
									<el-form-item label="活动区域" :label-width="formLabelWidth">
										<el-select v-model="form.region" placeholder="请选择活动区域">
											<el-option label="区域一" value="shanghai"></el-option>
											<el-option label="区域二" value="beijing"></el-option>
										</el-select>
									</el-form-item>
								</el-form>
								<div slot="footer" class="dialog-footer">
									<el-button @click="dialogFormVisible = false">取 消</el-button>
									<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
								</div>
							</el-dialog>
					</el-table-column>
				</el-table>
			</div>
			<div class="btn">
				<el-button type="warning">新增</el-button>
				<el-button type="danger">跳转</el-button>
				
			</div>
		</div>

	</div>

</template>

<script>
	import table from '@/components/common/table.vue'
	
	
	export default {
		name: 'home',
		data() {
			return {
				tableData: [{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}],
				dialogTableVisible: false,
				dialogFormVisible: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px'

			};
		},
		methods: {
			handleClick(row) {
				console.log(row);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.mians {
		width: 100%;
		height: 800px;
		background: cornsilk;
	}
	
	.left-nav {
		color: #fff;
		font-size: 10px;
		height: 800px;
		background-color: #1D8ce0;
		float: left;
		width: 10%;
	}
	
	.iconfont {
		font-size: 24px;
	}
	
	.left-nav ul {
		padding: 0px;
		margin: 0px;
	}
	
	.left-nav li {
		list-style: none;
		text-align: center;
		border-bottom: 1px solid #20a0ff;
		padding: 10px;
	}
	
	.right-nav {
		width: 89%;
		height: 800px;
		border: 1px solid black;
		float: right;
	}
	
	.right-nav .top {
		text-align: center;
		width: 100%;
		height: 30px;
		line-height: 30px;
		font-family: "microsoft yahei";
		background: silver;
	}
	
	.btn {
		margin-top: 20px;
	}
</style>