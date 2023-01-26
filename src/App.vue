<script setup>
	import { ref } from 'vue'
	import { useStore } from 'vuex'

	const store = useStore()
	const imageCont = ref()
	const toggleModal = () => {
		store.commit('toggleModal', null)
	}
	const zoomCoordData = ref({ zoomX: '', zoomY: '' })
	const ratio = 0.6367
	const handleZoom = (data) => {
		zoomCoordData.value.zoomX = 180 + data.zoomX / 2.8
		zoomCoordData.value.zoomY = data.zoomY / 2
	}
</script>
<script>
	export default {
		created() {
			this.userData = initData()
			console.log(this.userData)
			this.$store.commit('setUserData', this.userData)
		},
		data() {
			return {
				userData: null,
			}
		},
	}
</script>

<template>
	<router-view />
</template>
