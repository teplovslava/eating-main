document.addEventListener('DOMContentLoaded', () => {
    const burgerbtn = document.querySelector('.burger-btn')
    const nav = document.querySelector('.nav')
    const table = document.querySelector('.choose-table ')



    const tabs = document.querySelectorAll('.acordeon-item')
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            tabs.forEach(item => {
                item.classList.remove('active-accordeon')
            })
            this.classList.add('active-accordeon')
            switch (index) {
                case 1:
                    table.classList.remove('table-active-green', 'table-active-pirple')
                    table.classList.add('table-active-green')
                    break;
                case 2:
                    table.classList.remove('table-active-green', 'table-active-pirple')
                    table.classList.add('table-active-pirple')
                    break;
                case 0:
                    table.classList.remove('table-active-green', 'table-active-pirple')
                    break;
            }
        })
    })


    burgerbtn.addEventListener('click', () => {
        burgerbtn.classList.toggle('openedBurger')
        nav.classList.toggle('openNav')
    })



})