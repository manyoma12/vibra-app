function likeVideo(button) {

    const counter = button.querySelector("span");

    let likes = Number(counter.textContent);

    likes++;

    counter.textContent = likes;

}


function commentVideo() {

    const comment = prompt("Escribe tu comentario:");

    if (comment) {

        alert("Comentario publicado: " + comment);

    }

}


function shareVideo() {

    if (navigator.share) {

        navigator.share({
            title: "Vibra",
            text: "Mira este video en Vibra"
        });

    } else {

        alert("¡Enlace copiado!");

    }

}


/* REPRODUCCIÓN AUTOMÁTICA */

const videos = document.querySelectorAll("video");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.play();

            } else {

                entry.target.pause();

            }

        });

    },
    {
        threshold: 0.7
    }
);


videos.forEach(video => {

    observer.observe(video);

});
