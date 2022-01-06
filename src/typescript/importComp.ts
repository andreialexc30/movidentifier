import SearchQuery from '../components/SearchQuery.vue';
import Movies from '../components/Movies.vue';

export default {
    components: { SearchQuery, Movies },
    name: 'App',
    methods: {
        log() {
            console.log('working')
        }
    }
}