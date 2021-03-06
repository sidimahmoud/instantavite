//import Store from './components/Store.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import ProductDetails from './components/ProductDetails.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import AccueilPage from './components/AccueilPage.vue'
import OthersProducts from './components/OthersProducts.vue'
import Apropos from './components/Apropos.vue'

export const routes = [
	//{path: '/', component: Store, name: 'mainpage'},
	{path: '/', component: AccueilPage, name: 'mainpage'},
	{path: '/product/:id', component: ProductDetails, name: 'product'},
	{path: '/cart', component: ShoppingCart, name: 'shoppingcart'},
	{path: '/login', component: Login, name: 'login', onlyGuest: true },
	{path: '/register', component: Register, name: 'register', onlyGuest: true},
	{path: '/other-products', component: OthersProducts, name: 'other-products'},
	{path: '/apropos', component: Apropos, name: 'apropos'},
	{path: '*', redirect: '/' }
];