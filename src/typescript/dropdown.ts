export default {
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
        }
    }
}