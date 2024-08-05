function scrollGallery(direction) {
    const gallery = document.querySelector('.gallery');
    const scrollAmount = 300; // Adjust the scroll amount as needed
    gallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
