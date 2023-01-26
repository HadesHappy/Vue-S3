import { ref } from 'vue'

// by convention, composable function names start with "use"
export function useMouse() {
	// state encapsulated and managed by the composable
	const x = ref(0)
	const y = ref(0)
	console.log('runnning ...')
	// a composable can update its managed state over time.
	function update(event) {
		console.log('runnning update ...')
		x.value = event.pageX
		y.value = event.pageY
	}

	return { x, y }
}
