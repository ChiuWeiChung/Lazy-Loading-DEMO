const img = document.querySelectorAll('img');
const imgCallback = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
        // console.log(entry.target.dataset.img);
        const url = entry.target.dataset.img;
        entry.target.classList.remove('img-blur')
        entry.target.src = `./img/${url}.jpg`;
    }
    observer.unobserve(entry.target);
}


const imgObserver = new IntersectionObserver(imgCallback, { root: null, threshold: 0.35 })
img.forEach((el) => {
    imgObserver.observe(el)
    el.classList.add('img-blur');
});