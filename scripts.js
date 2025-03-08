window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function adjustBannerImageHeight() {
    const banner = document.querySelector('.banner');
    const bannerImage = document.querySelector('.banner-image');
    const viewportWidth = window.innerWidth;
    
    const bannerHeight = banner.offsetHeight;
    const bannerMarginTop = parseFloat(window.getComputedStyle(banner).marginTop);
    const bannerMarginBottom = parseFloat(window.getComputedStyle(banner).marginBottom);
    const totalHeight = bannerHeight + bannerMarginTop + bannerMarginBottom;

    if (viewportWidth > 1200) {
        bannerImage.style.height = totalHeight + 'px';
        bannerImage.style.width = '40vw';
    } else {
        bannerImage.style.width = '100vw';
    }
}

window.addEventListener('load', adjustBannerImageHeight);
window.addEventListener('resize', adjustBannerImageHeight);
