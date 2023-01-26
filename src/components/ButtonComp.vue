<script setup>
	import { useStore } from 'vuex'
	const props = defineProps({
		btnMsg: String,
	})
	const store = useStore()

	const toggleModal = () => {
		store.commit('toggleModal', null)
		router.push({ name: 'detail' })
	}

</script>

<template>
	<button @click="toggleModal" class="mx-auto my-2 block p-4 border rounded-sm">{{ btnMsg }}</button>
</template>
