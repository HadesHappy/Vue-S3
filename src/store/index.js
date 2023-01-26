import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
	state: {
		valid: false,
		showModal: false,
		showFullScreenModal: false,
		shareModal: false,
		zoomedImg: '',
		activeImg: null,
		mediaArray: [],
		activeMediaInd: 0,
		activeThumbnail: 0,
		desktopZoom: false,
		fullScreenImg: '',

		// agent data
		userData: {
			clientID: null,
			productId: null,
			trackingId: null,
		},

		/*  URLS   */
		url_meta: '',
		url_assets: '',
		url_widget: '',
	},
	getters: {},
	mutations: {
		toggleModal(state) {
			state.showModal = !state.showModal
		},
		toggleFullScreenModal(state) {
			state.showFullScreenModal = !state.showFullScreenModal
		},
		toggleShareModal(state) {
			state.shareModal = !state.shareModal
		},
		setActiveImg(state, payload) {
			state.activeImg = payload
		},
		setMediaArray(state, payload) {
			state.mediaArray = payload
		},
		setActiveMediaInd(state, payload) {
			state.activeMediaInd = payload
		},
		setActiveThumbnail(state, payload) {
			state.activeThumbnail = payload
		},
		toggleDesktopZoom(state, payload) {
			state.desktopZoom = payload
		},
		setZoomedImg(state, payload) {
			state.zoomedImg = payload
		},
		setFullScreenImg(state, payload) {
			state.fullScreenImg = payload
		},
		setUserData(state, payload) {
			state.userData = payload
		},
		setValid(state, payload) {
			state.valid = payload
		},
	},
	actions: {
		async userBehavior({ state }, payload) {
			const currentDate = new Date()
			const currentMonth = currentDate.getMonth() + 1
			const currentDay = currentDate.getDate()
			const currentYear = currentDate.getFullYear()
			let [hour, minute] = currentDate.toLocaleTimeString('en-US').split(/:| /)

			const formatDate = `${currentMonth}/${currentDay}/${currentYear}-${hour}:${minute}`
			const data = {
				...payload,
				userId: state.userData.userID, // this is where it clicks
				clientId: state.userData.clientId,
				productId: state.userData.productId,
				widgetOpen: state.showModal,
				size: state.activeImg.size,
				trackingId: state.userData.trackingId,
				localTime: formatDate
				
			}
			console.log(data)
			try {
				var config = {
					method: 'post',
					url: 'https://dev-analytics.reflektme.app/analytics', //'https://widget-levis.reflektme.app/analytics',
					headers: { 
					  'x-api-key': 'n0b0GSGjv95QMCcCi4sw157Ip4AThTHk2bYYmHzR'
					},
					data : data
				  };
				const rest = await axios(config)
				// disable original method as it now requires headers to authenticate
				  // const res = await axios.post('https://dev-analytics.reflektme.app/analytics', data)
			} catch (err) {
				console.log(err, 'not able to dispatch userBehavior')
			}
		},
	},
	modules: {},
})
