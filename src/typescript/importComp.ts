import SearchQuery from '../components/SearchQuery.vue';
import Movies from '../components/Movies.vue';
import Cart from '../components/Cart.vue';

export default {
    components: { SearchQuery, Movies, Cart },
    name: 'App',
    data() {
        return {
            toggleCart: false,
        }
    },
    methods: {
        toggleCart: false,
        toggleCartDisplay() {
            // console.log('hello')
            this.toggleCart = !this.toggleCart
            setTimeout(() => {
                const cart: Element | null = document.querySelector('.shopping-cart');
                cart?.classList.toggle('shopping-cart_fall');
            }, 250)
        }
    }
}