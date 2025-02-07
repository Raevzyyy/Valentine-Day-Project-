function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    document.body.appendChild(heart);
    
    const size = Math.random() * 20 + 10 + 'px';
    heart.style.fontSize = size;
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';

    setTimeout(() => { heart.remove(); }, 5000);
}

function createRose() {
    const rose = document.createElement('img');
    rose.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fid.pngtree.com%2Ffreepng%2Frose-icon-design-template_6261877.html&psig=AOvVaw32Wj4jU5zyhXYZmteOAQ3I&ust=1738985179914000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJi6xeHOsIsDFQAAAAAdAAAAABAE'; // Gambar mawar
    rose.classList.add('rose');
    rose.style.width = '50px';
    rose.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(rose);

    setTimeout(() => { rose.remove(); }, 8000);
}

function createStar() {
    const star = document.createElement('div');
    star.innerHTML = '✨';
    star.classList.add('star');
    document.body.appendChild(star);
    
    const size = Math.random() * 15 + 10 + 'px';
    star.style.fontSize = size;
    star.style.left = Math.random() * 100 + 'vw';
    star.style.animationDuration = Math.random() * 2 + 1 + 's';

    setTimeout(() => { star.remove(); }, 3000);
}

setInterval(createHeart, 300);
setInterval(createRose, 2000);
setInterval(createStar, 1000);
