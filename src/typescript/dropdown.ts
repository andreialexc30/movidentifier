export default {
    props: ['fetchedMovies'],
    data() {
        return {}
    },
    mounted() {
        const buttons = document.querySelectorAll('.Filters-categories--pill');
        buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                console.log(btn)
                let btnName = 'Action'
                this.getMovieGenre(btnName)
            })
        })
    },
    methods: {
        toggleDropdown() {
            const dropdown = document.querySelector('.dropdown_list');
            dropdown?.classList.toggle('dropdown_list-toggle');
            this.fadeElements(dropdown);
        },
        fadeElements(dropdown: Element | null) {
            const categoryBtn = document.querySelectorAll('.Mobile-categories--pill');
            if(dropdown?.classList.contains('dropdown_list-toggle')) {
                for(let i = 0; i < categoryBtn.length; i++) {
                    let multiplied: number = i * 100;
                    setTimeout(() => {
                        categoryBtn[i].classList.add('Mobile-categories--pill_unhide')
                    }, 900 + multiplied)
                }
            }
        },
        getMovieGenre(genre: string) {
            // console.log(this.fetchedMovies[0])
            for(let i = 0; i < this.fetchedMovies.length; i++) {
                let currentMovie = this.fetchedMovies[i]

                currentMovie.genres.forEach((genreObj: Object) => {
                    if(Object.values(genreObj).includes(genre)) {
                        this.fetchedMovies = new Array();
                        this.fetchedMovies.push(currentMovie)
                    }
                })
            }
        }
    }
}