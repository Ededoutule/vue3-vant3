<template>
	<div class="user" @click="show = true">
		<div class="ic">
			<img src="../../assets/logo.png" alt="" class="img" />
		</div>
		<div class="name">未登录</div>
		<van-icon name="arrow" />
	</div>
	<van-grid>
		<van-grid-item icon="photo-o" text="文字" />
		<van-grid-item icon="photo-o" text="文字" />
		<van-grid-item icon="photo-o" text="文字" />
		<van-grid-item icon="photo-o" text="文字" />
	</van-grid>

	<van-overlay :show="show">
		<div class="wrapper" @click.stop>
			<div class="block">
				<van-form @submit="onSubmit">
					<van-field
						v-model="state.username"
						name="用户名"
						label="用户名"
						placeholder="用户名"
						:rules="[{ required: true, message: '请填写用户名' }]"
					/>
					<van-field
						v-model="state.password"
						type="password"
						name="密码"
						label="密码"
						placeholder="密码"
						:rules="[{ required: true, message: '请填写密码' }]"
					/>
					<div style="margin: 16px">
						<van-button
							round
							block
							type="primary"
							:loading="state.loading"
							native-type="submit"
						>
							提交
						</van-button>
					</div>
				</van-form>
			</div>
		</div>
	</van-overlay>
</template>

<script>
import { ref, reactive } from 'vue'
import { Login } from '@/api/login'
import { Notify } from 'vant'
export default {
	setup() {
		const state = reactive({
			username: '',
			password: '',
			loading: false,
		})
		const show = ref(false)
		const onSubmit = async () => {
			try {
				state.loading = true
				let res = await Login({ username: state.username, pwd: state.password })
				if (res.errno === 602) {
					Notify({ type: 'primary', message: '密码错误' })
				}
				console.log('res :>> ', res)
			} catch (error) {
				console.log('error :>> ', error)
			} finally {
				state.loading = false
				show.value = false
			}
		}

		return { show, state, onSubmit }
	},
}
</script>

<style lang="scss" scoped>
.user {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 10px 10px;
	.ic {
		width: 100px;
		height: 50px;
		.img {
			width: 100%;
			height: 100%;
		}
	}
}

.wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}

.block {
	// width: 120px;
	// height: 120px;
	border-radius: 10px;
	background-color: #fff;
	overflow: hidden;
}
</style>
