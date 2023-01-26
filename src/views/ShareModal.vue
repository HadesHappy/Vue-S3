<script setup>
	import { useStore } from 'vuex'
	import ModalHeader from '../components/ModalHeader.vue'
	const store = useStore()
	const handleShare = () => {
		const imgUrl = location.host + store.state.fullScreenImg
		console.log(imgUrl)
	}
</script>

<template>
	<div
		class="absolute left-[50%] translate-x-[-50%] top-2 inset-y-1 bg-white w-11/12 h-screen max-w-screen-sm md:max-w-xl">
		<ModalHeader />
		<div
			class="flex items-center justify-center overflow-hidden max-h-[422px] max-w-[315px] m-auto">
			<img
				:src="store.state.activeImg.smallOpt[store.state.activeThumbnail].hero"
				:alt="
					store.state.activeImg.smallOpt[store.state.activeThumbnail].altTxt
				" />
		</div>
		<p class="mt-8 mx-auto max-w-[286px] text-center">
			Check out my
			<!--  name VALUE from API    -->
			{{ store.state.activeImg.size }}
			Reflektion
		</p>
		<button
			@click="handleShare"
			class="mt-8 block mx-auto text-center border p-4">
			Copy link
		</button>
	</div>
</template>
