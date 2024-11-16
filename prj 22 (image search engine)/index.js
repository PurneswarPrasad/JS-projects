const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");

const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

const ACCESS_KEY = "0FkKWwkv8_Rwux9EDnVn9mC0lRynnp9S9GSKG2fFkwc";

const API_URL = "https://api.unsplash.com/search/photos?";

let page = 1;
async function searchImages() {
  let query = searchBox.value;

  const res = await fetch(
    API_URL + `page=${page}&query=${query}&client_id=${ACCESS_KEY}&per_page=12`
  );
  const data = await res.json();

  const results = data.results;

  // this check ig given to ensure that if we're querying something new the search results should initially be empty and then get filled
  if (page === 1) {
    searchResult.innerHTML = "";
  }
  results.map((dt) => {
    const image = document.createElement("img");
    image.src = dt.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = dt.links.html;
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });

  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++; //increasing the pages to the next page of results
  searchImages();
});
