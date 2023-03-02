import { posts } from "../../server/db/database.js";

function addMainPost() {
  document.querySelector(".text .title").innerHTML = posts[0].title;
  document.querySelector(".text .description").innerHTML = posts[0].description;
  document
    .querySelector("#main-news .news-image #img")
    .setAttribute("src", posts[0].image);
}

function addSecondaryPosts() {
  document.querySelector(".highlights-news .text h2").innerHTML =
    posts[1].title;
  document.querySelector(".highlights-news .text p").innerHTML =
    posts[1].description;
  document
    .querySelector(".highlights-news .card-news #img")
    .setAttribute("src", posts[1].image);

  var contentNews = document.querySelector(".content-news");
  for (let i = 2; i < 4; i++) {
    contentNews.innerHTML += `<a class="news">
    <span class="date">23/02/2023</span>
      <h2 class="title">${posts[i].title}</h2>
    <p class="description">
      ${posts[i].description}
    </p>
</a>`;
  }
}

addMainPost();
addSecondaryPosts();
