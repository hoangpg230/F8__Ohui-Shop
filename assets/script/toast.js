var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

function toast({
    title = "",
    message = "",
    type = "success",
    duration = 0
}) {

    const main = $('#toast');
    const toast = document.createElement('div')
    toast.classList.add('toast', `toast--${type}`)
    var delay = duration / 1000
    toast.style.animation = `slideInleft ease-in .2s, fadeOut linear 1s ${delay}s forwards`
    const icons = {
        success: 'fas fa-check',
        warn: 'fas fa-exclamation',
        error: 'fas fa-exclamation',
    }
    toast.innerHTML = `<div class="toast__icon">
                                    <i class="${icons[type]}"></i>
                                </div>
                                <div class="toast__body">
                                    <div class="toast__title">${title}</div>
                                    <div class="toast__msg">${message}</div>
                                </div>
                                <div class="toast__close">
                                    <i class="fas fa-times"></i>
                                </div>`

    main.appendChild(toast)
    removeToast = setTimeout(function() {
        main.removeChild(toast)
    }, duration + 1000)

    toast.onclick = function(e) {
        if (e.target.closest('.toast__close')) {
            main.removeChild(toast)
            clearTimeout(removeToast);
        }
    }
}

// toast({
//     title: "Lỗi",
//     message: "Đã có lỗi xảy ra vui lòng thử lại.",
//     type: "error",
//     duration: 3000
// })