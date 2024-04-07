const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("display");

// the clue for using arrow keys or left and right buttons
let imageIndex = 0; // this currently does nothing, but is a start

//put images into an array
const images = [
  {
    url: "./cookie_argentina.jpg",
    alt: "Biscuits from Argentina called alfajores",
    title: "alfajores",
    arialabel: "Biscuits from Argentina called alfa jaw res",
  },
  {
    url: "./cookie_france.jpg",
    alt: "Biscuits from France called macarons",
    title: "macarons",
    arialabel: "Biscuits from France called macarons",
  },

  {
    url: "./cookie_sicily.jpg",
    alt: "Biscuits from Sicily called pasticcine di mandorle",
    title: "pasticcine di mandorle",
    arialabel: "Biscuits from Sicily called pasty chee nee dee mandorlay",
  },

  {
    url: "./cookie_india.jpg",
    alt: "Biscuits from India called nankhatai",
    title: "nankhatai",
    arialabel: "Biscuits from India called nankhatai",
  },

  {
    url: "./cookie_nigeria.jpg",
    alt: "Fried dough from Nigeria called puff puff",
    title: "puff puff",
    arialabel: "Fried dough from Nigeria called puff puff",
  },
];

function createThumbnails() {
  images.forEach(function (image) {
    //create an img DOM node
    const img = document.createElement("img");

    // add the src and alt and title to the img
    img.src = image.url;
    img.alt = image.alt;
    img.title = image.title;
    img.ariaLabel = image.arialabel;
    img.tabIndex = "0";
    //put the img onto page
    thumbContainer.appendChild(img);

    // make it so when we click the image something happens
    img.addEventListener("click", function () {
      createBigImage(image);
    });

    // when I focus and click enter the large version populates
    img.addEventListener("keydown", function (event) {
      if (event.key === "Enter") createBigImage(image);
    });
  });
}
//display the large image
function createBigImage(image) {
  //clear out display image div first by setting it to be nothing
  displayImage.innerHTML = "";
  //create our big image
  const bigImg = document.createElement("img");
  bigImg.src = image.url;
  bigImg.alt = image.alt;
  bigImg.title = image.title;

  //display on page
  displayImage.appendChild(bigImg);
}

//call the functions and do the things
createThumbnails();
createBigImage(images[0]);
