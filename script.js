// ... restante do código permanece igual ...

document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('uploadInput');
    const file = fileInput.files[0];

    if (!file) {
        alert("Por favor, selecione uma imagem para enviar.");
        return;
    }

    document.getElementById('status').textContent = "Enviando...";

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'preset_padrao'); // <<< SUBSTITUA X PELO NOME DO SEU UPLOAD PRESET

    // URL do Cloudinary
    const url = 'diiv5x8ub'; // <<< SUBSTITUA X PELO SEU CLOUD NAME

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const imageUrl = data.secure_url;
        document.getElementById('status').textContent = "Upload concluído!";

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Imagem enviada';

        const newImageContainer = document.createElement('div');
        newImageContainer.classList.add('imagem-container');

        const newImageLink = document.createElement('a');
        newImageLink.href = imageUrl;
        newImageLink.classList.add('lightbox');

        newImageLink.appendChild(img);
        newImageContainer.appendChild(newImageLink);

        const gallery = document.getElementById('gallery');
        gallery.appendChild(newImageContainer);
    })
    .catch(error => {
        console.error("Erro no upload:", error);
        document.getElementById('status').textContent = "Erro no upload. Tente novamente.";
    });
});
