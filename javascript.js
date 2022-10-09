const container = document.querySelector(".container");

function generateMasonryGrid(columns, posts) {
  container.innerHTML = "";
  let columnWrappers = {};

  // create column item array and add it this to column wrapper object
  for (let i = 0; i < columns; i++) {
    columnWrappers[`column${i}`] = [];
  }

  // which post should the column be assigned to
  for (let i = 0; i < posts.length; i++) {
    const column = i % columns;
    columnWrappers[`column${column}`].push(posts[i]);
  }
  console.log(columnWrappers);

  // fourth loop

  for (let i = 0; i < columns; i++) {
    let columnPosts = columnWrappers[`column${i}`];
    let column = document.createElement("div");
    column.classList.add("column");
    // loop through the columns

    columnPosts.forEach((post) => {
      let postDiv = document.createElement("div");
      postDiv.classList.add("post");
      let image = document.createElement("img");
      image.src = post.image;
      let overlay = document.createElement("div");
      overlay.classList.add("overlay");
      let title = document.createElement("h5");
      title.innerText = post.title;

      overlay.appendChild(title);
      postDiv.append(image, overlay);
      column.appendChild(postDiv);
    });
    container.appendChild(column);
  }
}

// making this responsive
let previousScreenSize = window.innerWidth;
console.log(previousScreenSize);

window.addEventListener("resize", () => {
  imageIndex = 0;
  if (window.innerWidth < 600 && previousScreenSize >= 600) {
    generateMasonryGrid(1, posts);
  } else if (
    window.innerWidth >= 600 &&
    window.innerWidth < 1000 &&
    (previousScreenSize < 600 || previousScreenSize >= 1000)
  ) {
    generateMasonryGrid(2, posts);
  } else if (window.innerWidth >= 1000 && previousScreenSize < 1000) {
    generateMasonryGrid(4, posts);
  }
  previousScreenSize = window.innerWidth;
});

if (previousScreenSize < 600) {
  generateMasonryGrid(1, posts);
} else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
  generateMasonryGrid(2, posts);
} else {
  generateMasonryGrid(3, posts);
}

// collect Lisbon images and upload them to my FTP
// Use own pictures for the gallery

// or also

// look into other projects where they use similar grid with text
// text that can be different
