// Menu hambúrguer (mantém igual)
document.getElementById("menu-btn").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// -------------------------------
// LIGHTBOX
// -------------------------------
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightbox-img");

document.querySelectorAll(".foto-jogador").forEach(img => {
    img.addEventListener("click", () => {
        lightImg.src = img.src;
        lightbox.style.display = "flex";
    });
});

// -------------------------------
// COMENTÁRIOS
// -------------------------------
function carregarComentarios(id) {
    let lista = localStorage.getItem("comentarios-" + id);
    return lista ? JSON.parse(lista) : [];
}

function salvarComentario(id, texto) {
    const lista = carregarComentarios(id);
    lista.push(texto);
    localStorage.setItem("comentarios-" + id, JSON.stringify(lista));
}

function atualizarComentarios(id) {
    const div = document.getElementById("comentarios-" + id);
    const lista = carregarComentarios(id);

    div.innerHTML = "";

    lista.forEach(c => {
        const p = document.createElement("p");
        p.textContent = c;
        div.appendChild(p);
    });
}

document.querySelectorAll(".form-comentario").forEach(form => {
    form.addEventListener("submit", e => {
        e.preventDefault();
        const id = form.getAttribute("data-id");
        const input = form.querySelector("input");

        salvarComentario(id, input.value);
        atualizarComentarios(id);
        input.value = "";
    });
});

// Carrega comentários ao abrir a página
document.querySelectorAll(".form-comentario").forEach(form => {
    atualizarComentarios(form.getAttribute("data-id"));
});
