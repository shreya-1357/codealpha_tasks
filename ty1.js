const overlay = document.getElementById('overlay');
        const overlayImg = document.getElementById('overlayImg');
        const galleryImgs = document.querySelectorAll('.gallery img');

        galleryImgs.forEach(img => {
            img.addEventListener('click', () => {
                overlayImg.src = img.src;
                overlay.classList.add('show');
            });
        });

        overlay.addEventListener('click', () => {
            overlay.classList.remove('show');
        });