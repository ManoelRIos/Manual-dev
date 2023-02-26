import { posts } from "../../server/db/database.js";

function addMainPost() {
  document.querySelector(".text .title").innerHTML = posts[0].title;
  document.querySelector(".text .description").innerHTML = posts[0].description;
  document
    .querySelector("#main-news .news-image #img")
    .setAttribute("src", posts[0].image);
}

function addSecondaryPosts() {
  document.querySelector(".highlights-news .text h2").innerHTML = posts[1].title;
  document.querySelector(".highlights-news .text p").innerHTML =
    posts[1].description;
  document
    .querySelector(".highlights-news .card-news #img")
    .setAttribute("src", posts[1].image);
  posts.forEach((post) => {});
}

addMainPost();
addSecondaryPosts();
