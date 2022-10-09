const posts = [];

const images = [
  "https://monikattei.com/picturesoflisbon/metro.jpg",
  "https://monikattei.com/picturesoflisbon/shrimps.jpg",
  "https://monikattei.com/picturesoflisbon/fiasco.jpg",
  "https://monikattei.com/picturesoflisbon/cat.jpg",
  "https://monikattei.com/picturesoflisbon/pina-colada.jpg",
  "https://monikattei.com/picturesoflisbon/plants.jpg",
  "https://monikattei.com/picturesoflisbon/studio.jpg",
  "https://monikattei.com/picturesoflisbon/tilewall.jpg",

  "https://monikattei.com/picturesoflisbon/hostel-view.jpg",
  "https://monikattei.com/picturesoflisbon/coffee.jpg",
  "https://monikattei.com/picturesoflisbon/metro-map.jpg",
  "https://monikattei.com/picturesoflisbon/details.jpg",
  "https://monikattei.com/picturesoflisbon/tattoo.png",
  "https://monikattei.com/picturesoflisbon/tiles.jpg",
  "https://monikattei.com/picturesoflisbon/note.jpg",
  "https://monikattei.com/picturesoflisbon/teeth-gem.jpg",
  "https://monikattei.com/picturesoflisbon/ornaments.jpg",

  // "https://dr.savee-cdn.com/things/6/2/9dfef10c4f56f52a8c765f.webp",
  // "https://dr.savee-cdn.com/things/thumbnails/6/3/22a14a4c98ef1518063882.webp",
  // "https://dr.savee-cdn.com/things/thumbnails/6/3/30cb5389464bc6d21202fb.webp",
  // "https://dr.savee-cdn.com/things/thumbnails/6/1/489592692934eb88fd34bd.webp",
  // "https://dr.savee-cdn.com/things/thumbnails/6/1/9c3654947d84e487ebcfae.webp",
  // "https://dr.savee-cdn.com/things/thumbnails/6/0/6378c5f5b3ad69d3d80b34.webp",
  // "https://dr.savee-cdn.com/things/thumbnails/5/c/6cd1306b86e75e7e5eb8da.webp",
];

let imageIndex = 0;

for (let i = 1; i <= 80; i++) {
  let item = {
    id: i,
    title: `Lisbon ${i}`,
    image: images[imageIndex],
  };
  posts.push(item);
  imageIndex++;
  if (imageIndex > images.length - 1) imageIndex = 0;
}
