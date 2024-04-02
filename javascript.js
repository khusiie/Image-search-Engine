const accessKey = "dVbp5wX4YHlb9mkiBqDB4BiqldEQtlBwCEn8T_evJFU";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreButton = document.getElementById("show-more-button");

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();
  if(page== 1){
    searchResult.innerHTML= "";
  }
  const results = data.results; // Corrected 'console.results' to 'const results'
  results.forEach((result) => { // Changed 'map' to 'forEach'
    const image = document.createElement("img");
    image.src = result.urls.small; // Changed 'img' to 'image'
    const imageLink = document.createElement('a'); // Changed 'imagelink' to 'imageLink'
    imageLink.href = result.links.html;
    imageLink.target = "_blank"; // Changed 'blank' to '_blank'
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });

  showMoreButton.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

showMoreButton.addEventListener("click",()=>{
    page++;
    searchImage();

})