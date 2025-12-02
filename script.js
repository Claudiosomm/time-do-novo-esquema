script

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



elenco.html



    <script src="https://cdn.jsdelivr.net/npm/simplelightbox@2.4.0/dist/simple-lightbox.min.js"></script>
    
    <script>
        // Inicializa o SimpleLightbox com opções de responsividade
        var lightbox = new SimpleLightbox('.lightbox', {
            // Configuração para a responsividade da imagem
            maxWidth: '90%',
            maxHeight: '90vh',  // Limita a altura máxima da imagem
            closeText: 'X',  // Fechar com um X
        });
    </script>

    <footer>
        &trade; Site criado pelo Cláudio para o time Novo Esquema F.C.
    </footer>
</body>
</html>
