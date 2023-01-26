<script setup>
	import { useStore } from 'vuex'
	const store = useStore()

	const changeActive = (indx) => {
		store.commit('setActiveThumbnail', indx)
		store.dispatch('userBehavior', {
			btn: 'thumbnails',
		})
	}
</script>

<template>
	<section class="mt-5 pb-4 border-b-2 border-lightGray md:border-none">
		<div class="flex justify-around md:flex-col md:h-full">
			<button
				v-if="store.state.activeImg"
				v-for="(img, indx) in store.state.activeImg.smallOpt"
				:key="indx"
				@click="changeActive(indx)"
				class="flex justify-center items-center truncate w-[91px] h-[115px] border-4 border-white relative translate-x-2"
				:class="{
					'active-btn':
						img.hero ===
						store.state.activeImg.smallOpt[store.state.activeThumbnail].hero,
				}">
				<div class="flex justify-center items-center w-full thumb-btn">
					<img :src="img.thumbnail" :alt="img.altTxt" />
				</div>
			</button>
		</div>
	</section>
</template>

<style scoped>
	.active-btn {
		box-shadow: 0px 0px 0 2px #403e3f;
		z-index: 1050;
		border-radius: 2px;
	}
</style>
