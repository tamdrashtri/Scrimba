// Define API key and channel ID
const apiKey = 'AIzaSyAMpp5upnOEQ5RdkQuMbEVpO97je-GwWFc';
const channelId = 'UCmGSJVG3mCRXVOP4yZrU1Dw';

// Define URL for initial video search
const initialUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&channelId=${channelId}&maxResults=6`;

// Select DOM elements
const searchBtn = document.querySelector('.btn-search');
const videoSection = document.querySelector('.video-section');
const inputEl = document.querySelector('#search');

// Fetch videos from API
const getVideos = async (url) => {
  try {
    const response = await fetch(url);
    const { items } = await response.json();
    return items;
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Map videos to HTML
const renderVideos = (videos) => {
  const videoList = videos.map((video) => {
    return `
        <div class="main-card">
          <img src="${video.snippet.thumbnails.medium.url}" alt="" srcset="">
          <p class="main-movie-title">${video.snippet.title}</p>
        </div>
    `;
  });
  videoSection.innerHTML = videoList.join('');
};

// Search for videos based on user input
const searchVideos = async () => {
  const inputValue = inputEl.value;
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&channelId=${channelId}&maxResults=6&q=${inputValue}`;
  const videos = await getVideos(searchUrl);
  renderVideos(videos);
};

// Event listener for search button
searchBtn.addEventListener('click', searchVideos);

// Initial video load on page load
window.onload = async () => {
  try {
    const initialVideos = await getVideos(initialUrl);
    renderVideos(initialVideos);
  } catch (e) {
    console.error(e)
  }
};