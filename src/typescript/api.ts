import SearchQuery from '../components/SearchQuery.vue';
import Movies from '../components/Movies.vue';
import Cart from '../components/Cart.vue';

export default {
    components: { SearchQuery, Movies, Cart },
    name: 'App',
    data() {
        return {
            foundMovie: false,
            toggleCart: false,
            API_KEY: 'ea54e1e7356bf3e94f014195f1140836',
            fetchedMovies: [],
            movie_id: []
        }
    },
    methods: {
        toggleCartDisplay() {
                this.toggleCart = !this.toggleCart
            setTimeout(() => {
                const cart: Element | null = document.querySelector('.shopping-cart');
                cart?.classList.toggle('shopping-cart_fall');
            }, 250)
        },
        searchMovie() {
            if(this.fetchedMovies.length === 10 && this.movie_id.length === 10) {
                this.fetchedMovies = new Array();
                this.movie_id = new Array();
            }

            const getQuery = (<HTMLInputElement>document.querySelector('.searchQuery_input')).value;
            const queryEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${getQuery}`;
            console.log(getQuery)
            fetch(queryEndpoint)
                .then((response) => {
                    if(!response.ok) {
                        throw new Error(`There was an error fetching the movie. ${response.status}`)
                    }

                    this.foundMovie = true;
                    return response.json();
                }).then((queryData) => {
                    for(let i = 0; i < queryData.results.length; i++) {
                        if(this.movie_id.length < 10) {
                            this.movie_id.push(queryData.results[i].id)
                        }
                    }
                    this.displayMovie();
                }).catch((error) => {
                    console.error('Ther was an error fetching the data', error);
                })
        },
        displayMovie() {
            this.movie_id.forEach((id: number) => {
                const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}`
                fetch(endpoint)
                .then((response) => {
                    if(!response.ok) {
                        throw new Error(`There was an error getting the movie details. ${response.status}`)
                    }

                    return response.json();
                }).then((movieData) => {
                    let movieDetails = {
                        id: id,
                        title: movieData.title,
                        alt: movieData.original_title,
                        status: movieData.status,
                        release: movieData.release_date,
                        synopsis: movieData.overview,
                        genres: movieData.genres,
                        poster: 'https://image.tmdb.org/t' + '/p/w500' + movieData.poster_path
                    }

                    if(this.fetchedMovies.length < 10) {
                        this.fetchedMovies.push(movieDetails)
                    }
                }).catch((error) => {
                    console.error('There was an error fetching your data', error);
                })
            })
        },
    }
}