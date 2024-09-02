document.addEventListener('DOMContentLoaded', () => {
    const foodTruckIcon = document.getElementById('food-truck-icon');
    const quarterlyMenu = document.getElementById('quarterly-menu');
    const devFavorites = document.getElementById('dev-favorites');
    const devFavoritesImages = document.querySelectorAll('.dev-favorites-img');
    const locationHours = document.getElementById('location-hours');

    const fadeInElement = (element, delay) => {
        setTimeout(() => {
            element.classList.add('fade-in-active');
        }, delay);
    };

    // Add the initial fade-in class
    foodTruckIcon.classList.add('fade-in');
    quarterlyMenu.classList.add('fade-in');
    devFavorites.classList.add('fade-in');
    locationHours.classList.add('fade-in');
    devFavoritesImages.forEach((img) => img.classList.add('fade-in'));

    fadeInElement(foodTruckIcon, 100);
    fadeInElement(quarterlyMenu, 300);
    fadeInElement(devFavorites, 500);
    devFavoritesImages.forEach((img, index) => fadeInElement(img, 700 + index * 200));
    fadeInElement(locationHours, 1500);
});
