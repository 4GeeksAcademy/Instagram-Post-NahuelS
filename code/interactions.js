

// Dar me gusta //

function likePicture(){   
    this.classList.toggle('fa-regular'); // Alterna entre fa-regular y fa-solid
    this.classList.toggle('fa-solid');

    if(this.classList.contains('fa-solid')){
        // aumentar tamaño por 0.3 segundo //
        const originalSize = window.getComputedStyle(this).fontSize;
        this.style.fontSize = `calc(${originalSize} + 3px)`;
    
        // Restaurar el tamaño original después de 1 segundo
        setTimeout(() => {
            this.style.fontSize = originalSize;
        }, 300); 
    }

}
document.getElementById('btn_like').addEventListener('click', likePicture);


