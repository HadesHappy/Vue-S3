<script setup>
	import { useStore } from 'vuex'
	import { useRouter, useRoute } from 'vue-router'
	import icon from '@/assets/levis.svg'
	import closeBtn from '@/assets/x.svg'
	const store = useStore()
	const router = useRouter()
	const route = useRoute()

	const haddleClick = () => {
		if (store.state.showModal) {
			store.commit('toggleModal', null)
			router.push('/')
		} else {
			store.commit('toggleShareModal', null)
			store.commit('toggleModal', null)
		}
	}
</script>

<template>
	<header>
		<div class="flex justify-end items-center relative">
			<img
				:src="icon"
				alt="Levis Icon"
				class="absolute left-[51%] translate-x-[-50%]" />
			<button
				@click="haddleClick"
				class="w-[40px] p-2 m-2 mr-0 mt-0 pt-0 pr-0"
				aria-label="Close">
				<img
					:src="closeBtn"
					alt="close button"
					class="max-w-[24px] translate-x-2" />
			</button>
		</div>
		<h2 class="text-center text-redPrimary text-lg uppercase font-bold">
			See it in my size
		</h2>
	</header>
</template>
