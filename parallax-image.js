function parallax_scroll_handler (image) {
    //const scrollTop = window.scrollTop || window.scrollY
    const imgTag = image.querySelector('img.parallax-image')
    const height = imgTag.getAttribute('data-height') || '500px'
    const speed = parseFloat(imgTag.getAttribute('data-speed')) || 0.3
    const rect = image.getBoundingClientRect()
    const imagePos = rect.top
    const winH = window.innerHeight
    const scrollPos = imagePos

    const imgHeight = `calc((${winH}px - ${height}) * ${speed} + ${height})`

    imgTag.style.transform = `translateY(${scrollPos * -speed}px)`
    imgTag.style.height = `${imgHeight}`
}

function init_parallax () {
    const imageDoms = document.querySelectorAll('img.parallax-image')
    const images = Array.from(imageDoms)

    images.forEach(image => {
        const imageEl = document.createElement('div')
        imageEl.className = 'parallax-image-wrapper'
        imageEl.innerHTML = image.outerHTML
        imageEl.style.height = image.getAttribute('data-height') || '500px'
        image.replaceWith(imageEl)
        parallax_scroll_handler(imageEl)
        window.addEventListener('scroll', () => parallax_scroll_handler(imageEl))
    })
}

(function() {
    init_parallax()
})();
