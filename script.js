```javascript
// ==========================================
// ❤️ LIKES
// ==========================================

function toggleLike(button) {

    const counter = button.querySelector(".action-number");

    let likes = Number(counter.textContent);

    if (button.classList.contains("liked")) {

        likes--;

        button.classList.remove("liked");

    } else {

        likes++;

        button.classList.add("liked");

    }

    counter.textContent = likes;
}


// ==========================================
// 💬 ABRIR COMENTARIOS
// ==========================================

function openComments() {

    const overlay = document.getElementById("commentsOverlay");

    overlay.classList.add("show");

}


// ==========================================
// ❌ CERRAR COMENTARIOS
// ==========================================

function closeComments() {

    const overlay = document.getElementById("commentsOverlay");

    overlay.classList.remove("show");

}


// ==========================================
// 💬 ENVIAR COMENTARIO
// ==========================================

function sendComment() {

    const input = document.getElementById("commentInput");

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    const commentsList = document.querySelector(".comments-list");

    const comment = document.createElement("div");

    comment.className = "comment";

    comment.innerHTML = `
        <div class="comment-avatar">D</div>

        <div>
            <strong>@duvan</strong>
            <p>${escapeHTML(text)}</p>
        </div>
    `;

    commentsList.appendChild(comment);

    input.value = "";

    commentsList.scrollTop = commentsList.scrollHeight;
}


// ==========================================
// 🔐 SEGURIDAD PARA COMENTARIOS
// ==========================================

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


// ==========================================
// ↗️ COMPARTIR
// ==========================================

async function shareVideo() {

    const shareData = {

        title: "VIBRA",

        text: "🔥 Mira este video en VIBRA",

        url: window.location.href

    };


    try {

        if (navigator.share) {

            await navigator.share(shareData);

        } else {

            await navigator.clipboard.writeText(
                window.location.href
            );

            alert("🔗 Enlace copiado");

        }

    } catch (error) {

        console.log("Compartir cancelado.");

    }
}


// ==========================================
// 👤 SEGUIR
// ==========================================

document.querySelectorAll(".follow-button").forEach(button => {

    button.addEventListener("click", () => {

        if (button.classList.contains("following")) {

            button.textContent = "Seguir";

            button.classList.remove("following");

        } else {

            button.textContent = "Siguiendo";

            button.classList.add("following");

        }

    });

});


// ==========================================
// 🎬 REPRODUCCIÓN AUTOMÁTICA
// ==========================================

const videos = document.querySelectorAll(".video-player");


const videoObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            const video = entry.target;

            if (entry.isIntersecting) {

                video.play().catch(() => {});

            } else {

                video.pause();

            }

        });

    },

    {
        threshold: 0.7
    }

);


videos.forEach(video => {

    videoObserver.observe(video);

});


// ==========================================
// 🔍 BUSCADOR
// ==========================================

function openSearch() {

    const search = prompt(
        "🔍 ¿Qué quieres buscar en VIBRA?"
    );

    if (search && search.trim() !== "") {

        alert(
            "Buscando: " + search.trim()
        );

    }

}


document
    .getElementById("searchButton")
    .addEventListener("click", openSearch);


// ==========================================
// 🔔 NOTIFICACIONES
// ==========================================

document
    .getElementById("notificationsButton")
    .addEventListener("click", () => {

        alert(
            "🔔 No tienes nuevas notificaciones."
        );

    });


// ==========================================
// 🏠 INICIO
// ==========================================

function goHome() {

    const feed = document.querySelector(".video-feed");

    feed.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ==========================================
// 🔥 TENDENCIAS
// ==========================================

function showTrending() {

    alert(
        "🔥 Próximamente: las tendencias de VIBRA."
    );

}


// ==========================================
// ➕ CREAR VIDEO
// ==========================================

function createVideo() {

    alert(
        "🎬 Próximamente podrás subir tu propio video a VIBRA."
    );

}


// ==========================================
// 👤 PERFIL
// ==========================================

function openProfile() {

    alert(
        "👤 Próximamente: tu perfil de VIBRA."
    );

}


// ==========================================
// 🖱️ CERRAR COMENTARIOS AL TOCAR FUERA
// ==========================================

document
    .getElementById("commentsOverlay")
    .addEventListener("click", event => {

        if (
            event.target.id === "commentsOverlay"
        ) {

            closeComments();

        }

    });


// ==========================================
// ⌨️ ENTER PARA COMENTAR
// ==========================================

document
    .getElementById("commentInput")
    .addEventListener("keydown", event => {

        if (event.key === "Enter") {

            sendComment();

        }

    });


// ==========================================
// 📱 EVITAR ZOOM ACCIDENTAL
// ==========================================

document.addEventListener(
    "gesturestart",
    event => {
        event.preventDefault();
    }
);
```
