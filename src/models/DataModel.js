class Media {
	constructor(photo) {
		this.id = photo.id ?? null
		this.medias = photo.medias ?? null
		this.size = photo.name ?? null
		this.uid = photo.uid ?? null
	}

	get fileName() {
		let namesArray = []
		this.medias.forEach((media) => {
			let result = media.full.substr(37, 36)
			namesArray.push(result)
		})
		return namesArray
	}

	// function to recreate what the API data model should have been
	get demoMedia() {
		const size = this.size
		let smallOpt = []
		let bigSizes = []
		const rootMediaApp = 'https://staging-assets.reflektme.app'
		this.medias.forEach((media) => {
			let fileName = media.full.substr(37, 36)
			const optionObj = {
				thumbnail: `${rootMediaApp}/${fileName}/${fileName}-thumbnail.webp`,
				hero: `${rootMediaApp}/${fileName}/${fileName}-hero.webp`,
				altTxt: `Levis ${this.size}`,
			}
			smallOpt.push(optionObj)

			const bigObj = {
				fullScreeen: `${rootMediaApp}/${fileName}/${fileName}-fullscreen.webp`,
				zoomOpt: `${rootMediaApp}/${fileName}/${fileName}-zoom.webp`,
			}
			bigSizes.push(bigObj)
		})

		return {
			id: this.id,
			size,
			smallOpt,
			bigSizes,
		}
	}
}

export default Media

/*

https://staging-assets.reflektme.app/
+
4d6f4d61-6956-4d01-808d-1bb150091bf2-hero.webp


{
			"id": "sdkfjvgskdjvsdv465465",
			"size": "A",
			"smallOpt": [
				{
					"thumbnail": "/imgs/new-imgs/A/A_thumbnail.webp",
					"hero": "/imgs/new-imgs/A/A_Hero.webp",
					"altTxt": "Levis' 721 High Rise Skinny"
				},
				{
					"thumbnail": "/imgs/new-imgs/A/A_thumbnail-04.jpg",
					"hero": "/imgs/new-imgs/A/A_Hero-04.jpg",
					"altTxt": "Levis' 721 High Rise Skinny"
				},
				{
					"thumbnail": "/imgs/new-imgs/A/A_thumbnail-03.jpg",
					"hero": "/imgs/new-imgs/A/A_Hero-03.jpg",
					"altTxt": "Levis' 721 High Rise Skinny"
				}
			],
			"bigSizes": [
				{
					"fullScreeen": "/imgs/new-imgs/A/A_fullscreen.webp",
					"zoomOpt": "/imgs/new-imgs/A/A_zoom.webp"
				},
				{
					"fullScreeen": "/imgs/new-imgs/A/A_fullscreen-04.jpg",
					"zoomOpt": "/imgs/new-imgs/A/A_zoom-04.jpg"
				},
				{
					"fullScreeen": "/imgs/new-imgs/A/A_fullscreen-03.jpg",
					"zoomOpt": "/imgs/new-imgs/A/A_zoom-03.jpg"
				}
			]
		},
        */
