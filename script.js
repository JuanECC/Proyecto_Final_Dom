
const form = document.getElementById("commentForm");
const input = document.getElementById("commentInput");
const container = document.getElementById("commentsContainer");

// Escuchar evento submit
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const commentText = input.value.trim();

    if (commentText === "") {
        return;
    }

    // Crear elemento del comentario
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    // Obtener fecha y hora actual
    const now = new Date();
    const dateTime = now.toLocaleString();

    // Crear contenido
    commentDiv.innerHTML = `
        <p>${commentText}</p>
        <small>Publicado el: ${dateTime}</small>
    `;

    // Crear botón eliminar
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", function() {
        commentDiv.remove();
    });

    commentDiv.appendChild(deleteButton);

    // Agregar comentario al contenedor
    container.appendChild(commentDiv);

    // Limpiar input
    input.value = "";
});