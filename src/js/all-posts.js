import { posts } from "../../server/db/database.js";

function chargeAllPosts() {
  posts.forEach((post) => {
    console.log(post);
    document.querySelector(".news-container").innerHTML += `<div class="news">
    <img id="img" src="${post.image}" alt="${post.title}" />
    <div class="text">
    <span class="date">23/02/2023</span>
      <h2 class="title">${post.title}</h2>
      <p class="description">
      ${post.description}
      </p>
    </div>
  </div>`;
  });
}

chargeAllPosts();