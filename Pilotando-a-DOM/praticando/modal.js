const openModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('modal-wrapper')

openModal.onclick = function() {
    modalWrapper.
    classList.
    remove('invisible')
}


document.addEventListener('keypress', function(event) {
    const isEsc = event.key === 'escape'

    if (isEsc) {
        modalWrapper.classList.add('invisible')
    }
})