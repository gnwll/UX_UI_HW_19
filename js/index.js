const questlineImage = document.getElementById('questline-image');
const vfwImage = document.getElementById('vfw-image');

function addImageFadeEffect(imageElement) {
    imageElement.addEventListener('mouseover', () => {
        imageElement.style.opacity = '0.7';
    });

    imageElement.addEventListener('mouseout', () => {
        imageElement.style.opacity = '1';
    });
}

addImageFadeEffect(questlineImage);
addImageFadeEffect(vfwImage);
