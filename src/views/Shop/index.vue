<template>
	<div>分类</div>
	<!-- <video-player
		class="video-player-box"
		:options="playerOptions"
		:playsinline="true"
		customEventName="customstatechangedeventname"
	></video-player> -->
	<video
		ref="videoPlayer"
		id="video-image"
		src="https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
		type="video/mp4"
		width="240"
		height="100"
		controls
		autoplay
		muted
		preload="metadata"
		crossOrigin="anonymous"
	></video>

	<button @click="jiep">截屏</button>
	<img :src="images" alt="" width="200" height="200" />
</template>

<script>
import 'video.js/dist/video-js.css'
// import { videoPlayer } from 'vue-video-player/src'
import 'videojs-flash' // 如果是直播或者是视频流，注意需要引入这个模块
import { reactive, toRefs, onMounted, ref } from 'vue'
// import html2canvas from 'html2canvas'
export default {
	setup() {
		const videoPlayer = ref(null)
		const data = reactive({
			images: '',
			playerOptions: {
				// videojs options
				muted: true,
				// language: 'en',
				playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
				autoplay: false, // 如果为true,浏览器准备好时开始回放。
				// muted: false, // 默认情况下将会消除任何音频。
				loop: false, // 是否视频一结束就重新开始。
				preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
				language: 'zh-CN',
				aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
				fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
				sources: [
					{
						type: 'video/mp4',
						src:
							'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
					},
				],
				poster: '/static/images/author.jpg',
			},
		})

		onMounted(() => {
			// console.log('videoPlayer.value', videoPlayer.value.player)
			// videoPlayer.value.player.play() // 播放
		})
		const jiep = () => {
			let video = document.getElementById('video-image')
			// html2canvas(video, {
			// 	useCORS: true,
			// 	allowTaint: true,
			// 	width: 200,
			// 	height: 200,
			// 	windowHeight: video.scrollHeight,
			// 	windowWidth: video.scrollWidth,
			// 	x: 0,
			// 	y: 200,
			// }).then((canvas) => {
			// 	console.log(canvas.toDataURL('image/png'))
			// 	data.images = canvas.toDataURL('image/png')
			// })
			let canvas = document.createElement('canvas')
			// let img = document.createElement('img')
			let ctx = canvas.getContext('2d')
			// video.crossOrigin = 'Anonymous'
			canvas.width = video.videoWidth
			canvas.height = video.videoHeight
			ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
			data.images = canvas.toDataURL('image/png')
			console.log(canvas.toDataURL('image/png'))
			// document.body.append(img)
		}
		return {
			...toRefs(data),
			videoPlayer,
			jiep,
		}
	},
	components: {
		// videoPlayer,
	},
}
</script>

<style lang="scss" scoped></style>
