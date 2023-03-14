const api = 'AIzaSyAMpp5upnOEQ5RdkQuMbEVpO97je-GwWFc'
const channelId = 'AIzaSyAMpp5upnOEQ5R'

// get all videos from the channelId, add try catch too and incoporate options object
const getVideos = async () => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBbtIwT2evvIo19XmO1vKUphn6vjqmdOPQ&channelId=UCqZQlzSHbVJrwrn5XvzrzcA&maxResults=6&q=video`
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data.items
  } catch (err) {
    console.error(err)
  }
}

document.addEventListener('click', getVideos)