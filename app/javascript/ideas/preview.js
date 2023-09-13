document.addEventListener("DOMContentLoaded", function() {
  const pictureInput = document.getElementById("picture-input");
  const picturePreview = document.getElementById("picture-preview");

  pictureInput.addEventListener("change", function() {
    const file = pictureInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function(event) {
        const img = document.createElement("img");
        img.src = event.target.result;
        img.style.width = "600px";
        picturePreview.innerHTML = "";
        picturePreview.appendChild(img);
      }

      reader.readAsDataURL(file);
    } else {
      picturePreview.innerHTML = "";
    }
  });
});
