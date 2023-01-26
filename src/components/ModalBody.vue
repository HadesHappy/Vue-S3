<script setup>
	import { ref } from 'vue'
	import { useStore } from 'vuex'
	import shareBtn from '../assets/share-btn.svg'
	import { useRouter } from 'vue-router'

	const router = useRouter()

	const emit = defineEmits(['zoomCoord'])

	const store = useStore()

	const image = ref()

	const toggleFullScreen = () => {
		const localActiveThumbnail = store.state.activeThumbnail
		const fullScreenImg =
			store.state.activeImg.bigSizes[localActiveThumbnail].fullScreeen
		store.commit('setFullScreenImg', fullScreenImg)
		store.commit('toggleFullScreenModal', true)
		store.commit('toggleDesktopZoom', false)
		store.dispatch('userBehavior', {
			btn: 'fullScreen',
		})
	}

	// brings the zoomed image on hover (desktop only)
	const getZoomedImg = async () => {
		const localActiveThumbnail = store.state.activeThumbnail
		const newZoomedImg =
			store.state.activeImg.bigSizes[localActiveThumbnail].zoomOpt
		const fullScreenImg =
			store.state.activeImg.bigSizes[localActiveThumbnail].fullScreeen
		store.commit('setZoomedImg', newZoomedImg)
		store.commit('setFullScreenImg', fullScreenImg)
	}

	const handleShareClick = (e) => {
		e.stopPropagation()
		store.commit('toggleDesktopZoom', false)
		router.push('/share')
		store.dispatch('userBehavior', {
			btn: 'share',
		})
	}

	const triggerZoom = (e) => {
		getZoomedImg()
		const img = image.value.getBoundingClientRect()
		const zoomX = e.pageX - img.left
		const zoomY = e.pageY - img.top
		emit('zoomCoord', { zoomX, zoomY })
	}
</script>

<template>
	<section class="flex items-end mt-6 md:block md:relative">
		<div
			role="button"
			aria-pressed="false"
			@click="toggleFullScreen"
			@mousemove="triggerZoom"
			@mouseenter="store.commit('toggleDesktopZoom', true)"
			@mouseleave="store.commit('toggleDesktopZoom', false)"
			class="img-container flex justify-center items-center mx-auto w-[255px] max-w-[405px] h-[340px] relative md:w-full md:h-full md:top-0"
			ref="image">
			<div
				class="flex items-end left-[0px] -translate-x-8 absolute z-50 md:bottom-0 md:-left-[1em] bg-[#ffffff87] h-full">
				<span v-if="store.state.activeImg" class="block mb-2 rotate-90">
					{{ store.state.activeThumbnail + 1 }} /
					{{ store.state.activeImg.smallOpt.length }}
				</span>
			</div>
			<img
				v-if="store.state.activeImg"
				:src="store.state.activeImg.smallOpt[store.state.activeThumbnail].hero"
				alt="levis image"
				@onmousemove="triggerZoom(e)"
				class="mx-auto z-40" />
			<button
				@click="handleShareClick"
				class="md:translate-x-[-10px] right-0 translate-x-12 bottom-0 absolute md:transform-none md:right-[1em] md:top-[1.2em] md:h-2 z-50 share-btn">
				<img :src="shareBtn" alt="share button" />
			</button>
		</div>
	</section>
</template>
