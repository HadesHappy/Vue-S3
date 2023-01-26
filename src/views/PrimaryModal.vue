<script setup></script>

<template>
	<div
		class="inset-y-1 bg-white w-11/12 h-screen max-w-screen-sm md:max-w-screen-xl">
		<slot></slot>
	</div>
</template>

<style>
	html {
		overflow: scroll;
		overflow-x: hidden;
	}

	::-webkit-scrollbar {
		width: 0px;
	}

	::-webkit-scrollbar-thumb {
		background: #ff0000;
	}
</style>
