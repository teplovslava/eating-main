document.addEventListener('DOMContentLoaded', () => {
    const accordeonItems = document.querySelectorAll('.questions-item')

    accordeonItems.forEach(item => {
        item.addEventListener('click', function () {
            item.classList.toggle('opened__accorderon-item')
        })
    })
})