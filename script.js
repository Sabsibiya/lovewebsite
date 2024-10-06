const noButton = document.getElementById('noButton');

noButton.addEventListener('mouseover', function() {
    // Move the "No" button randomly around the screen
    const x = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));

    noButton.style.position = "absolute";
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
});
