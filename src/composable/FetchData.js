import { ref } from 'vue'
import { useStore } from 'vuex'

//import idArrays from './idArray'
import Media from '../models/DataModel'

//console.log(idArrays)

const fetchData = () => {
	const store = useStore()
	const media = ref([])
	const error = ref(null)

	const load = async () => {
		try {
			const remote_url = `https://staging-meta.reflektme.app/${store.state.userData.clientId}/${store.state.userData.productId}.json`

			// const local_url = '/new-data.json'
			const response = await fetch(remote_url)
			if (!response.ok) {
				throw Error('no data available')
			}

			/*
			code for the new version with json file
			*/

			const jsonData = await response.json()
			let localMediaArr = []

			// data refacturing to accommodate date to the static json file
			jsonData.variants.forEach((media) => {
				const photo = new Media(media)
				localMediaArr.push(photo.demoMedia)
			})

			store.commit('setMediaArray', localMediaArr)
			store.commit('setActiveImg', localMediaArr[0])
			store.commit('setValid', true)
		} catch (err) {
			error.value = err.message
			store.commit('setValid', false)
			console.log(error.value)
		}
	}

	return { media, error, load }
}

export default fetchData

/*
versiones de imagenes

Df9M11J8C1Oo5UjBBdffRA

hero="$basename-hero.webp"
thumbnail="$basename-thumbnail.webp"
fullscreen="$basename-fullscreen.webp"
zoom="$basename-zoom.webp"

*/
