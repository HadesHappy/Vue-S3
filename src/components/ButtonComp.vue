<script setup>
	const props = defineProps({
		btnMsg: String,
	})
</script>

<template>
	<button>{{ btnMsg }}</button>
</template>
