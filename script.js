// Highlight the current section in the TOC
const tocItems = document.querySelectorAll('.toc-item');

let selectedItem = 0;

function reselect(i) {
    selectedItem = i
    tocItems.forEach(b => b.style.backgroundColor = "#F8F8F8")
    console.log(i);
    tocItems[i].style.backgroundColor = "#ABEFEF"
}

reselect(0)

tocItems.forEach((button, key, _) => {
    button.addEventListener('click', function() {
        reselect(key);
    });
});
const sections = document.querySelector('.main-content');
const bars = document.querySelectorAll('.bar-fill')

const totalHeight = sections.scrollHeight - sections.clientHeight;
sections.addEventListener('scroll', () => {
    let progress = sections.scrollTop / totalHeight;
    if (progress >= 1) progress = 0.9999;
    for (let i = 0; i < bars.length; i++)
    bars[i].style.height = Math.min((progress * (bars.length + 1)- i) * 100, 100) + '%'
    console.log(progress)
    reselect(Math.floor(progress * tocItems.length));
});

console.log(`${scrollX}, ${scrollY}`);
//document.querySelector('section').addEventListener('scroll', () => {
//    console.log("scrolling ... ")
//    let current = '';
//
//    sections.forEach(section => {
//        const sectionTop = section.offsetTop;
//        const sectionHeight = section.clientHeight;
//        if (scrollY >= sectionTop - sectionHeight / 3) {
//            current = section.getAttribute('id');
//        }
//    });
//    console.log("current = " + current);
//
//    tocItems.forEach(item => {
//        item.classList.remove('active');
//        if (item.getAttribute('href') === `#${current}`) {
//            item.classList.add('active');
//        }
//    });
//});
// Smooth scrolling when clicking TOC links
//tocItems.forEach(item => {
//    item.addEventListener('click', function(e) {
//        e.preventDefault();
//        document.querySelector(this.getAttribute('href')).scrollIntoView({
//            behavior: 'smooth'
//        });
//    });
//});
