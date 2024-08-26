// Dar me gusta //
function likePicture(){   
    this.classList.toggle('fa-regular'); 
    this.classList.toggle('fa-solid');

    if(this.classList.contains('fa-solid')){
        const originalSize = window.getComputedStyle(this).fontSize;
        this.style.fontSize = `calc(${originalSize} + 3px)`;
    
        setTimeout(() => {
            this.style.fontSize = originalSize;
        }, 300); 
    }
}
document.getElementById('btn_like').addEventListener('click', likePicture);

// Animación double click //
const postImage = document.querySelector('.post-img img'); 
const heartOverlay = document.querySelector('.heart-overlay');
const likeButton = document.getElementById('btn_like');

postImage.addEventListener('dblclick', () => {
    heartOverlay.classList.add('show-heart');

    likeButton.classList.add('fa-solid');
    likeButton.classList.remove('fa-regular');

    setTimeout(() => {
        heartOverlay.classList.remove('show-heart');
    }, 2000); 
});

// Guardar publicación //
function savePicture() {   
    this.classList.toggle('fa-regular'); 
    this.classList.toggle('fa-solid');

    if(this.classList.contains('fa-solid')){
        const message = document.createElement('div');
        message.textContent = "Publicación guardada";
        message.classList.add('notification');
        
        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 2000);
    }
}
document.getElementById('btn_savePost').addEventListener('click', savePicture);

// "Comentar" //
function commentPost() {   
    document.getElementById('comment_modal').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block'; 
}
document.getElementById('btn_comment').addEventListener('click', commentPost);

function closeModal() {
    document.getElementById('comment_modal').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none'; 
}

document.querySelector('.close-comment').addEventListener('click', closeModal);
document.querySelector('.overlay').addEventListener('click', closeModal);
