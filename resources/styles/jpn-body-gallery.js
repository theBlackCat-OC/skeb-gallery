const tagContainer = document.getElementById('tagContainer');
const galleriesContainer = document.getElementById('galleries');
const urlParams = new URLSearchParams(window.location.search);
const selectedGallery = urlParams.get('gallery');

const tags = [
  { name: '全身', backgroundColor: '#2ac955' },    // 360º
  { name: '胸', backgroundColor: '#f5a92f' },     // Breasts
  { name: '顔', backgroundColor: '#f75a2a' },     // Face
  { name: '髪型', backgroundColor: '#ff392b' },   // Hairstyles 
  { name: '両手', backgroundColor: '#b62af7' },     // Hands 
  { name: '宝石', backgroundColor: '#f57dad' },     // Jewelry
  { name: '刺青', backgroundColor: '#2a83f7' },     // Tattoos
  { name: '服装', backgroundColor: '#ffffff' },     // Attires
];
const galleries = [
  {
    name: '全身 (両形)',
    url_id: 'fullbody-futanari',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1hZUPjMAKtc7mMYvsjmIUd50ZrOWk64Gw?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',
    images: [
      { src: 'https://cdn.theblack.cat/gallery/fullbody/1.png', tags: '全身' },
      { src: 'https://cdn.theblack.cat/gallery/fullbody/2.png', tags: '全身' },
      { src: 'https://cdn.theblack.cat/gallery/fullbody/3.png', tags: '全身' },
      { src: 'https://cdn.theblack.cat/gallery/fullbody/4.png', tags: '全身' },
    ],
  },

  {
    name: '全身',
    url_id: 'fullbody',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1rK4cF_DiEXPA7bVPu2YhdLnVt5vzs-93?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',
    images: [
      { src: 'https://cdn.theblack.cat/gallery/fullbody-vagina/1.png', tags: '全身' },
      { src: 'https://cdn.theblack.cat/gallery/fullbody-vagina/2.png', tags: '全身' },
      { src: 'https://cdn.theblack.cat/gallery/fullbody-vagina/3.png', tags: '全身' },
      { src: 'https://cdn.theblack.cat/gallery/fullbody-vagina/4.png', tags: '全身' },
    ],
  },

  {
    name: '胸',
    url_id: 'breasts',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/10TOcT8cfFCJ26IX-54VsAnuUy-86rVuL?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/breasts/1.png', tags: '胸' },
      { src: 'https://cdn.theblack.cat/gallery/breasts/2.png', tags: '胸' },
      { src: 'https://cdn.theblack.cat/gallery/breasts/3.png', tags: '胸' },
      { src: 'https://cdn.theblack.cat/gallery/breasts/4.png', tags: '胸' },
      { src: 'https://cdn.theblack.cat/gallery/breasts/5.png', tags: '胸' },
      { src: 'https://cdn.theblack.cat/gallery/breasts/6.png', tags: '胸' },
    ],
  },

  {
    name: '顔',
    url_id: 'face',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1MLSlZleS4qGhkDU-G8R2cdips7rQcZvD?usp=drive_lin" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/face/1.png', tags: '顔' },
      { src: 'https://cdn.theblack.cat/gallery/face/2.png', tags: '顔' },
      { src: 'https://cdn.theblack.cat/gallery/face/3.png', tags: '顔' },
      { src: 'https://cdn.theblack.cat/gallery/face/4.png', tags: '顔' },
      { src: 'https://cdn.theblack.cat/gallery/face/5.png', tags: '顔' },
      { src: 'https://cdn.theblack.cat/gallery/face/6.png', tags: '顔' },
      { src: 'https://cdn.theblack.cat/gallery/face/7.png', tags: '顔' },
      { src: 'https://cdn.theblack.cat/gallery/face/8.png', tags: '顔' },
    ],
  },

  {
    name: 'ヘアスタイル 三つ編みポニーテール',
    url_id: 'ponytail-braids',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1dbLyfEcCTjjmnsJD_o-9WgqsNz8pv-aJ?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hair/1.png', tags: '髪型' },
      { src: 'https://cdn.theblack.cat/gallery/hair/2.png', tags: '髪型' },
      { src: 'https://cdn.theblack.cat/gallery/hair/3.png', tags: '髪型' },
      { src: 'https://cdn.theblack.cat/gallery/hair/4.png', tags: '髪型' },
      { src: 'https://cdn.theblack.cat/gallery/hair/5.png', tags: '髪型' },
      { src: 'https://cdn.theblack.cat/gallery/hair/6.png', tags: '髪型' },
    ],
  },
  
  {
    name: '両手',
    url_id: 'hands',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1zyr_lSEilFrZaxrTOpuajAVBfFEby80N?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hands/1.png', tags: '両手' },
      { src: 'https://cdn.theblack.cat/gallery/hands/2.png', tags: '両手' },
      { src: 'https://cdn.theblack.cat/gallery/sfw-hands/1.png', tags: '両手' },
      { src: 'https://cdn.theblack.cat/gallery/sfw-hands/2.png', tags: '両手' },
      { src: 'https://cdn.theblack.cat/gallery/hands/3.png', tags: '両手' },
      { src: 'https://cdn.theblack.cat/gallery/hands/4.png', tags: '両手' },
      { src: 'https://cdn.theblack.cat/gallery/sfw-hands/4.png', tags: '両手' },  
    ],
  },

  {
    name: '宝石',
    url_id: 'Jewelry',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1ae_L5VYMx6kc3nytSS4XHdRrhikMbSWF?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/jewelry/1.png', tags: '宝石' },
      { src: 'https://cdn.theblack.cat/gallery/jewelry/2.png', tags: '宝石' },
      { src: 'https://cdn.theblack.cat/gallery/jewelry/3.png', tags: '宝石' },
      { src: 'https://cdn.theblack.cat/gallery/jewelry/4.png', tags: '宝石' },
    ],
  },

  {
    name: '刺青 (両形)',
    url_id: 'tattoos-futanari',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1-0kvdh6IKrGv-y8SozTgy6o3eF31a-Jn?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/tattoo/1.png', tags: '刺青' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo/2.png', tags: '刺青' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo/3.png', tags: '刺青' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo/4.png', tags: '刺青' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo/5.png', tags: '刺青' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo/6.png', tags: '刺青' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo/7.png', tags: '刺青' },
    ],
  },

  {
    name: '刺青',
    url_id: 'tattoos',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1-0kvdh6IKrGv-y8SozTgy6o3eF31a-Jn?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/tattoo-vagina/1.png', tags: '刺青' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo-vagina/2.png', tags: '刺青' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo-vagina/3.png', tags: '刺青' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo-vagina/5.png', tags: '刺青' },
      { src: 'https://cdn.theblack.cat/gallery/tattoo-vagina/6.png', tags: '刺青' },
    ],
  },

  {
    name: 'タトゥー・テクスチャー',
    url_id: 'tattoos-texture',
    download_icon: '&nbsp<a href="https://drive.google.com/drive/folders/1-0kvdh6IKrGv-y8SozTgy6o3eF31a-Jn?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/hidden/reference-textures/tattoo-texture/1.png' },
      { src: 'https://cdn.theblack.cat/gallery/hidden/reference-textures/tattoo-texture/2.png' },
    ],
  },

  {
    name: '両形',
    url_id: 'futanari',
    download_icon: '&nbsp<a href="hhttps://drive.google.com/drive/folders/1SXLYg_-aAxMfmwW9sC1Azlsuaym4-6lc?usp=drive_link" target="_blank"><img src="https://cdn.theblack.cat/resources/thank-you-flaticons/colordrive.svg" width="22" height="22" class="selector-drive" style="right:1px";>&nbsp;</a>',  
    images: [
      { src: 'https://cdn.theblack.cat/gallery/futanari/1.png', tags: 'Futanari' },
      { src: 'https://cdn.theblack.cat/gallery/futanari/2.png', tags: 'Futanari' },
      { src: 'https://cdn.theblack.cat/gallery/futanari/3.png', tags: 'Futanari' },
      { src: 'https://cdn.theblack.cat/gallery/futanari/4.png', tags: 'Futanari' },
      { src: 'https://cdn.theblack.cat/gallery/futanari/5.png', tags: 'Futanari' },
      { src: 'https://cdn.theblack.cat/gallery/futanari/6.png', tags: 'Futanari' },
    ],
  },

];


function createGallery(gallery) {
  const galleryElement = document.createElement('div');
  galleryElement.classList.add('gallery');
  galleryElement.dataset.tags = gallery.images.reduce((tags, image) => `${tags} ${image.tags}`, '');


  // Create the gallery title element
  const titleElement = document.createElement('div');
  titleElement.classList.add('gallery-title');

  // Create the download icon element and add the download_icon HTML
  const downloadIconElement = document.createElement('div');
  downloadIconElement.classList.add('download-icon');
  downloadIconElement.innerHTML = gallery.download_icon;

  // Add the download icon and gallery name to the title element
  titleElement.appendChild(downloadIconElement);
  const nameElement = document.createElement('span'); // Use a <span> instead of <div> for the name
  nameElement.innerHTML = gallery.name;
  titleElement.appendChild(nameElement);

  // Append the title element to the gallery element
  galleryElement.appendChild(titleElement);

  // ... Rest of the function remains the same ...
  const largeImageContainer = document.createElement('div');
  largeImageContainer.classList.add('large-image-container');
  const largeImage = document.createElement('img');
  largeImage.src = gallery.images[0].src;
  largeImageContainer.appendChild(largeImage);

  const thumbnailsContainer = document.createElement('div');
  thumbnailsContainer.classList.add('thumbnails-container');

  gallery.images.forEach((image) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image.src;
    thumbnail.classList.add('thumbnail'); // Add a class for thumbnail images
    thumbnail.addEventListener('click', () => {
      largeImage.src = image.src;
    });
    thumbnailsContainer.appendChild(thumbnail);
  });

  galleryElement.appendChild(largeImageContainer);
  galleryElement.appendChild(thumbnailsContainer);

  // Check if the current gallery's url_id matches the selectedGallery from the URL
  if (gallery.url_id === selectedGallery) {
    galleryElement.classList.add('selected-gallery');
  }

  return galleryElement;
}


function addTagToContainer(tag) {
  const tagElement = document.createElement('div');
  tagElement.classList.add('tag', 'tag-' + tag.name.toLowerCase());
  tagElement.innerText = tag.name;
  tagElement.style.backgroundColor = tag.backgroundColor;

  if (tag.name === '服装') {
    tagElement.addEventListener('click', function () {
      // Redirect to the desired website when the "Attires" tag is clicked
      window.location.href = 'attire-gallery'; // Replace with the desired URL
    });
  } else {
    tagElement.addEventListener('click', function () {
      // Deselect all tags first
      const selectedTags = Array.from(tagContainer.getElementsByClassName('tag-selected'));
      for (const selectedTag of selectedTags) {
        selectedTag.classList.remove('tag-selected');
      }
      // Select the clicked tag
      tagElement.classList.add('tag-selected');

      // Update the galleries based on the selected tag.
      updateGalleries();
    });
  }

  tagContainer.appendChild(tagElement);
}

function updateGalleries() {
    const selectedTag = tagContainer.querySelector('.tag-selected');
    const allGalleries = galleriesContainer.getElementsByClassName('gallery');
  
    if (!selectedTag) {
      // If no tag is selected, show all galleries
      for (const gallery of allGalleries) {
        gallery.style.display = 'block';
      }
    } else {
      const selectedTagName = selectedTag.innerText.toLowerCase();
      // Show galleries that have the selected tag (using "AND" operation)
      for (const gallery of allGalleries) {
        const galleryTags = gallery.dataset.tags.toLowerCase().split(' ');
        const displayGallery = galleryTags.includes(selectedTagName);
        gallery.style.display = displayGallery ? 'block' : 'none';
      }
    }
  }

function addGalleryToContainer(gallery) {
  const galleryElement = createGallery(gallery);

  // Check if any galleries are currently displayed in the container
  if (galleriesContainer.firstChild) {
    // Get the first gallery element currently in the container
    const firstGallery = galleriesContainer.firstChild;
    
    // Insert the new gallery element before the first gallery
    galleriesContainer.insertBefore(galleryElement, firstGallery);
  } else {
    // If no galleries are displayed, simply append the new gallery to the container
    galleriesContainer.appendChild(galleryElement);
  }
}


tags.forEach(tag => addTagToContainer(tag));
galleries.forEach(gallery => addGalleryToContainer(gallery));

document.addEventListener('click', (event) => {
  const zoomedGallery = galleriesContainer.querySelector('.gallery.zoomed');
  if (zoomedGallery && !zoomedGallery.contains(event.target)) {
    // If a zoomed gallery exists and the click is outside of it, revert the zoom
    if (zoomedImage) {
      zoomedImage.classList.remove('zoomed');
      zoomedImage = null;
    }
  }
});

function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function showGalleryByName(galleryName) {
  const galleryId = galleryName.toLowerCase().replace(/\s/g, '-');
  const galleryElement = document.getElementById(galleryId);
  if (galleryElement) {
    galleryElement.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const allGalleries = galleriesContainer.getElementsByClassName('gallery');

  for (const gallery of allGalleries) {
    if (gallery.classList.contains('selected-gallery')) {
      gallery.style.display = 'block';
    } else {
      gallery.style.display = 'none';
    }
  }
});