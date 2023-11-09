const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["/img/mine1.jpg", "/img/mine2.webp", "/img/mine3.jpg", "/img/mine4.png", "/img/mine5.jpeg"]


/* Declaring the alternative text for each image file */

const altText = {
    "image1": "An eye",
    "image2": "rock",
    "image3": "flower",
    "image4": "painting",
    "image5": "moth"
}

/* Looping through images */
for (let i = 0; i < images.length; i++)
{   
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText['image'+(i+1)]);
    thumbBar.appendChild(newImage);

    function displayImage(){
        displayedImage.setAttribute('src', images[i]);
        displayedImage.setAttribute('alt', altText['image'+(i+1)]);
    }
    newImage.addEventListener("click", displayImage);
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", ()=> {
    if(btn.getAttribute("class") == "dark")
    {
        btn.setAttribute("class", "light");
        btn.textContent  = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.setAttribute("class", "dark");
        btn.textContent  = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
    }
)
