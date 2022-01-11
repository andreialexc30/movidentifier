import SearchQuery from '../components/SearchQuery.vue';
import Movies from '../components/Movies.vue';
import Cart from '../components/Cart.vue';

export default {
    components: { SearchQuery, Movies, Cart },
    name: 'App',
    data() {
        return {
            movie: {
                movieTitle: '',
                movieDirector: '',
                movieDate: '',
                movieGenres: [],
                movieSynopsis: ''
            },
            toggleCart: false,
        }
    },
    mounted() {
        console.log(this.movie.movieGenres)
    },
    methods: {
        toggleCartDisplay() {
            // console.log('hello')
            this.toggleCart = !this.toggleCart
            setTimeout(() => {
                const cart: Element | null = document.querySelector('.shopping-cart');
                cart?.classList.toggle('shopping-cart_fall');
            }, 250)
        },
        searchMovie() {
            const endpoint = `https://api.themoviedb.org/3/movie/550?api_key=ea54e1e7356bf3e94f014195f1140836`
            fetch(endpoint)
                .then((response) => {
                    if(!response.ok) {
                        throw new Error(`There was an error. ${response.status}`)
                    }

                    return response.json();
                }).then((movieData) => {
                    this.movie.movieTitle = movieData.title;
                    this.movie.movieDirector = movieData.status;
                    this.movie.movieDate = movieData.release_date;
                    this.movie.movieSynopsis = movieData.overview;
                    this.movie.movieGenres.push(movieData.genres[0].name)
                    // console.log(movieData.genres[0].name)
                }).catch((error) => {
                    console.error('There was an error with fetchin your data', error);
                })
        }
    }
}