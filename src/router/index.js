import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/DetailView.vue'
// import store from '../store/index'

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('../views/HomeView.vue'),
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue'),
	},
	{
		path: '/detail',
		name: 'detail',
		component: () => import('../views/DetailView.vue'),
	},
	{
		path: '/share',
		name: 'share',
		component: () => import('../views/ShareModal.vue'),
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

/*
trytin to use store
didn't work dynamically to share ...
router.beforeEach((to, from, next) => {
	document.title = ` ${process.env.VUE_APP_TITLE} - ${to.name} `
	// console.log(document.querySelectorAll('meta')[6].content)
	let img = { txt: store.state.activeImg }
	// document.querySelectorAll('meta')[6].content = img
	//document.querySelectorAll('meta')[6].setAttribute('content', img.txt)
	//document.querySelectorAll('meta')[9].setAttribute('content', img.txt)
	next()
})
*/
export default router
