var certificates = [
    { title: "MSBTE State Level Paper Presentation", image: "msc.jpg" },
    { title: "VIT Hackathon", image: "VIT.png" },
    { title: "Internship At Thermax", image: "th.jpg" },
    { title: "Internship At CorizoEdtech", image: "corizo.jpg" }
];

function main() {
    var wall = document.getElementById("gallery-wall");
    
    for (var i = 0; i < certificates.length; i++) {
        var frame = document.createElement("div");
        frame.className = "painting-frame";
        
        var img = document.createElement("img");
        img.src = certificates[i].image;
        
        var plaque = document.createElement("div");
        plaque.className = "plaque";
        plaque.innerHTML = certificates[i].title;
        
        frame.appendChild(img);
        frame.appendChild(plaque);
        
        wall.appendChild(frame);
    }
}
function setupImageZoom() {
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("zoomed-image");
    var closeBtn = document.getElementsByClassName("close-modal")[0];

    // Find all images inside your cards
    var images = document.querySelectorAll(".painting-frame img");
    
    // Add click event to each image
    for (var i = 0; i < images.length; i++) {
        images[i].style.cursor = "pointer"; // Changes mouse to a pointer
        images[i].onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src; // Puts the clicked image into the modal
        }
    }

    // Close the modal when clicking the 'X'
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal if you click anywhere outside the image
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

// Make sure to call this function at the very end of your main() function!
// Example:
// function main() {
//     // ... your code that generates the cards ...
//     setupImageZoom(); 
// }

main();
setupImageZoom();