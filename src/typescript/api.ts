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
                movieSynopsis: '',
            },
            img: {
                base_url: 'https://image.tmdb.org/t',
                size: '/p/w500',
                file_path: ''
            },
            toggleCart: false,
            API_KEY: 'ea54e1e7356bf3e94f014195f1140836',
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
            const getQuery = (<HTMLInputElement>document.querySelector('.searchQuery_input')).value;
            const queryEndpoint = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${getQuery}`;

            fetch(queryEndpoint)
                .then((response) => {
                    if(!response.ok) {
                        throw new Error(`There was an error fetching the movie. ${response.status}`)
                    }

                    return response.json();
                }).then((queryData) => {
                    console.log(queryData.results);
                    if(this.movie_id.length < 10) {
                        for(let i = 0; i < queryData.results.length; i++) {
                            this.movie_id.push(queryData.results[i].id)
                        }
                        console.log(this.movie_id)
                    } return this.movie_id = [];
                }).catch((error) => {
                    console.error('Ther was an error fetching the data', error);
                })
        },
        displayMovie() {
            const endpoint = `https://api.themoviedb.org/3/movie/${this.movie_id}?api_key=${this.API_KEY}`
            fetch(endpoint)
                .then((response) => {
                    if(!response.ok) {
                        throw new Error(`There was an error getting the movie details. ${response.status}`)
                    }

                    return response.json();
                }).then((movieData) => {
                    this.movie.movieTitle = movieData.title;
                    this.movie.movieDirector = movieData.status;
                    this.movie.movieDate = movieData.release_date;
                    this.movie.movieSynopsis = movieData.overview;
                    this.img.file_path = movieData.poster_path;

                    this.emptyArray(movieData)
                }).catch((error) => {
                    console.error('There was an error fetching your data', error);
                })
        },
        loopGenres(data: any) {
            for(let i = 0; i < data.genres.length; i++) {
                if(this.movie.movieGenres.length < data.genres.length) {
                    this.movie.movieGenres.push(data.genres[i].name)
                }
            }

            const genreList = document.querySelector('.movie-details_genres');
            const newListItem = document.createElement('li');
            newListItem.classList.add('movie-details_genres-item')
            for(let i = 0; i < this.movie.movieGenres.length; i++) {
                newListItem.innerHTML = `${this.movie.movieGenres[i]}`
                genreList?.appendChild(newListItem)
            }
        },
        emptyArray(data: any) {
            if(this.movie.movieGenres.length === 0) {
                this.loopGenres(data);
            } else {
                return this.movie.movieGenres = []
            }
        }
    }
}