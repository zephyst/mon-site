let circle = document.getElementById('circle');
let fixedCircle = document.getElementById('fixedCircle');
function resizeDiv() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const size = Math.min(width, height);

    circle.style.width = size + 'px';
    circle.style.height = size + 'px';

    fixedCircle.style.width = size-100 + 'px';
    fixedCircle.style.height = size-100 + 'px';
}

resizeDiv();
window.addEventListener('resize', resizeDiv);

document.addEventListener('mousemove', function(e) {
    let heroBanner = document.getElementById('heroBanner');
    let left = e.offsetX;
    let top = e.offsetY;
    circle.style.left = left-20 + 'px';
    circle.style.top = top-20 + 'px';
});
