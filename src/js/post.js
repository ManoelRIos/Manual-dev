import { posts } from "../../server/db/database.js";

function addMainPost() {
  var img = document.querySelector("#main-news .news-image #img");
  document.querySelector("#main-news .text .title").innerHTML = posts[0].title;
  document.querySelector("#main-news .text .description").innerHTML =
    posts[0].description;
  img.setAttribute("src", posts[0].image);
  img.setAttribute("alt", posts[0].title);
}

function addSecondaryPosts() {
  var img = document.querySelector(".highlights-news .card-news #img");
  document.querySelector(".highlights-news .text h2").innerHTML =
    posts[1].title;
  document.querySelector(".highlights-news .text p").innerHTML =
    posts[1].description;

  img.setAttribute("src", posts[1].image);
  img.setAttribute("alt", posts[1].title);

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

function addNewsContainer() {
  var newsContainer = document.querySelector(".news-container");
  newsContainer.innerHtml = `<a class="news">
  <img
    id="img"
    src="../public/assets/images/posts/fire-tv-stick-shutterstock_1116971222.jpg"
    alt=""
  />
  <span class="date">23/02/2023</span>

  <div class="text">
    <h2 class="title">Lorem ipsum dolor, sits!</h2>
    <p class="description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Asperiores optio aspernatur nostrum reprehenderit, doloribus
      exercitationem aliquam vitae fugiat eum reiciendis culpa ad
      perferendis nobis amet, est maiores dignissimos laudantium
      incidunt?
    </p>
  </div>
</a>`;
}

addNewsContainer();
addMainPost();
addSecondaryPosts();
