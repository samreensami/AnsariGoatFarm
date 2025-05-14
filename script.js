function showImages(productId) {
    const modal = document.getElementById("modal");
    const modalImages = document.getElementById("modal-images");
  
    // Clear previous content
    modalImages.innerHTML = "";
  
    // Example image sets for each product
    const images = {
      1: ["image/3.png", "image/1.png", "image/14.png"],
      2: ["image/15.png", "image/2.png", "image/23.png"],
      3: ["image/11.png", "image/4.png", "image/25.png"],
      4: ["image/16.png", "image/5.png", "image/21.jpg"],
      5: ["image/8.png", "image/7.png", "image/17.jpg"],
      6: ["image/22.jpg", "image/24.jpg", "image/12.png"]
    };
  
    images[productId].forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      modalImages.appendChild(img);
    });
  
    modal.style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  