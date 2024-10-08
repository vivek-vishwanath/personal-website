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
    console.log(progress);
    bars[0].style.height = Math.min(progress * 2000/3, 100) + '%'
    bars[1].style.height = Math.min((progress - 0.15) * 1000, 100) + '%'
    bars[2].style.height = Math.min((progress - 0.25) * 500/3, 100) + '%'
    console.log(progress)
    if (progress < 0.15) reselect(0)
    else if(progress < 0.3) reselect(1)
    else if(progress < 0.9) reselect(2)
    else reselect(3)
});
const images = document.querySelectorAll('.diagonal-image');

const options = {
  root: null, // Use the viewport as the root
  threshold: 0.1, // Trigger when 10% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, options);

images.forEach(image => {
  observer.observe(image);
});
