const state = {
	isLoading: false,
	productList: [
		{
			id: 1,
			title: 'Ananas gold',
			thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/instantavite-1ea10.appspot.com/o/product-img%2Fananas-gold.PNG?alt=media&token=3c2a775a-a4bc-4977-a4f1-9488c6c8307f',
			price: 0.80,
			quantity: 10,
			category: "Fruits et Légumes",
			description: "Ananas gold"
		},{
			id: 2,
			title: 'Ananas tranché',
			thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/instantavite-1ea10.appspot.com/o/product-img%2Fananas-tranche.PNG?alt=media&token=928f12b0-fc91-41cb-a09e-1a4b5a06ba60',
			price: 4.00,
			quantity: 15,
			category: "Fruits et Légumes",
			description: 'Fruits et Légumes'
		},{
			id: 3,
			title: 'Avocat',
			thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/instantavite-1ea10.appspot.com/o/product-img%2Favocat.PNG?alt=media&token=e9db5ee0-bfcb-43a6-8bc3-c4840dbfb50b',
			price: 1.99,
			quantity: 1,
			category: "Fruits et Légumes",
			description: "Fruits et Légumes"
		},{
			id: 4,
			title: 'Bananes',
			thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/instantavite-1ea10.appspot.com/o/product-img%2Fbananes.PNG?alt=media&token=446c594e-513c-4296-b698-0a80dfc79880',
			price: 1.73,
			quantity: 10,
			category: "Fruits et Légumes",
			description: "Fruits et Légumes"
		},
	],
	legumeList: [
		{
			id: 1,
			title: 'Laitue Romaine',
			thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/instantavite-1ea10.appspot.com/o/product-img%2Flaitue-romaine.PNG?alt=media&token=4334b35b-28d9-46fb-bc37-19e0cdae718f',
			price: 1.98,
			quantity: 10,
			category: "Légumes",
			description: "Légumes"
		},{
			id: 2,
			title: 'Laitue Iceberg',
			thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/instantavite-1ea10.appspot.com/o/product-img%2Flaitue.PNG?alt=media&token=b8e2359e-34e9-4784-ac5e-1861dd98f975',
			price: 2.20,
			quantity: 15,
			category: "Légumes",
			description: 'Légumes'
		},{
			id: 3,
			title: 'Concombre Anglais',
			thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/instantavite-1ea10.appspot.com/o/product-img%2Fconcombre-ang.PNG?alt=media&token=c0d6e95c-707f-4631-897e-0fb590f57e29',
			price: 0.99,
			quantity: 1,
			category: "Légumes",
			description: "Légumes"
		},{
			id: 4,
			title: 'Courgette Zucchini',
			thumbnail_url: 'https://firebasestorage.googleapis.com/v0/b/instantavite-1ea10.appspot.com/o/product-img%2Fcourgette-zucchini.PNG?alt=media&token=bb277d2e-86ee-4884-ba10-5a49cf7b9caf',
			price: 1.50,
			quantity: 10,
			category: "Légumes",
			description: "Légumes"
		},
	]
}

const mutations = {
	'UPDATE_PRODUCT_LIST'(state, productList) {
		state.productList = productList;
		state.isLoading = false;
	}
}

const actions = {

}

const getters = {
	products: (state) => {
		return state.productList;
	},
	isProductLoading: (state) => {
		return state.isLoading;
	},
	legumeProducts: (state) => {
		return state.legumeList;
	},
}

export default {
	state,
	mutations,
	actions,
	getters
}