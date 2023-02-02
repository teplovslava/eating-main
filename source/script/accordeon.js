document.addEventListener('DOMContentLoaded', () => {
    const accordeonItems = document.querySelectorAll('.questions-item')

    accordeonItems.forEach(item => {
        item.addEventListener('click', function () {
            accordeonItems.forEach(obj => (
                obj !== item && obj.classList.remove('opened__accorderon-item')

            ))
            if (item.classList.contains('opened__accorderon-item')) {
                item.classList.remove('opened__accorderon-item')
            }
            else {
                item.classList.add('opened__accorderon-item')
            }

        })
    })
})