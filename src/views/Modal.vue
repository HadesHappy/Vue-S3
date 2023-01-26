<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import fetchData from '../composable/FetchData'
import PrimaryModal from './PrimaryModal.vue'
import FullScreenModal from './FullScreenModal.vue'
// import ShareModal from './ShareModal.vue'
import ModalHeader from '../components/ModalHeader.vue'
import ModalBody from '../components/ModalBody.vue'
import ModalThumbnails from '../components/ModalThumbnails.vue'
import SizesComp from '../components/SizesComp.vue'
import ModalFooter from '../components/ModalFooter.vue'
import closeBtn from '@/assets/x.svg'
import ButtonComp from '../components/ButtonComp.vue'
import router from '@/router'
// importing composable
const { load } = fetchData()
const store = useStore()

load()

/*
const localUserData = ref({
	clientId: route.query.clientId,
	productId: route.query.productId,
	trackingId: route.query.trackingId,
})

store.commit('setUserData', localUserData)
*/

const imageCont = ref()

const zoomCoordData = ref({ zoomX: '', zoomY: '' })
const handleZoom = (data) => {
	zoomCoordData.value.zoomX = -35 + data.zoomX * 2.9
	zoomCoordData.value.zoomY = -80 + data.zoomY * 3.2
}
	/* data fetch
const fetchData = async () => {
try {
// const response = await fetch('/data.json')
const response = await fetch('/new-data.json')
const jsonData = await response.json()
console.log(jsonData.data)
store.commit('setMediaArray', jsonData.data)
store.commit('setActiveImg', jsonData.data[0])
} catch (err) {
console.log(err)
}
}
fetchData()
*/

/*

buscar el client_id luego el product_id
y luego permitir cuales son las urls que se pueden utilizar


del json solo usar names y id's
las medias no
*/
</script>

<template>
	<div>
		<transition name="mainTransition">
			<primary-modal class="absolute left-[50%] top-10 translate-x-[-50%]"
				v-if="store.state.showModal && !store.state.showFullScreenModal">
				<div class="block md:hidden">
					<!--- only shows in mobile    --->
					<ModalHeader />
					<ModalBody class="max-w-sm mx-auto" />
					<ModalThumbnails />
					<SizesComp class="mt-[10px]" />
					<ModalFooter />
				</div>
				<div class="hidden md:flex">
					<!--- only shows after  ('md': '768px')   --->
					<ModalBody @zoomCoord="handleZoom" class="w-1/2" />
					<div v-if="!store.state.desktopZoom" class="grid grid-cols-3 w-1/2">
						<ModalThumbnails />
						<div class="col-span-2 relative">
							<ModalHeader />
							<SizesComp />
							<ModalFooter class="absolute bottom-4 right-4" />
						</div>
					</div>
					<!---  ZOOMED CONTAINER  -->
					<div v-if="store.state.desktopZoom"
						class="h-[33.7rem] w-1/2 max-w-[605px] bg-slate-300 flex items-center justify-center overflow-hidden relative translate-y-6"
						ref="imageCont">
						<div class="w-full h-full zoomedImg" :style="{
							backgroundImage: 'url(' + store.state.zoomedImg + ')',
							backgroundPosition:
								'-' +
								zoomCoordData.zoomX +
								'px -' +
								zoomCoordData.zoomY +
								'px',
						}"></div>
					</div>
				</div>
			</primary-modal>
		</transition>

		<full-screen-modal class="absolute left-[50%] translate-x-[-50%] top-4" v-if="store.state.showFullScreenModal">
			<div class="flex items-center justify-center relative max-w-[890px] overflow-hidden m-auto">
				<button class="absolute w-[40px] top-2 right-2 bg-white rounded-full p-2"
					@click="store.commit('toggleFullScreenModal', null)" aria-label="Close">
					<img :src="closeBtn" alt="close button" />
				</button>
				<img class="" :src="store.state.fullScreenImg" alt="full screen size image" />
			</div>
		</full-screen-modal>

    <ButtonComp btnMsg="See It In My Size" />
		<!---
			<share-modal
			class="absolute left-[50%] translate-x-[-50%] top-2"
			v-if="store.state.shareModal"></share-modal>
		-->
	</div>
</template>

<style scoped>
.zoomedImg {
	background-repeat: no-repeat;
	transform: scale(2) translate(90px, 134px);
}

footer {
	font-family: 'Helvetica Now Text ';
	font-weight: 300;
}

/*  transitions   */
.mainTransition-enter-active {
	animation: finished 0.5s reverse ease-in-out;
}

.mainTransition-leave-active {
	animation: finished 0.5s ease-in-out;
}

@keyframes finished {
	0% {
		opacity: 1;
	}

	100% {
		opacity: 0;
		top: -100px;
	}
}
</style>
