let fft;
let song;

// Read the README.md if no songs are playing. 
// Token has a lifetime of a few hours (Spotify does not specify)
const bearerToken = "BQB2DsSTBTXb_56PJ6juv9vFZ2ua3ZkANXbttAvhkwiayejykbpFv4EAcFhZ0aJizAQ1Jd79EouOCZoCk7KRqcwD4KZqaRWfJpu6URAF-bIrndbNmF6IwmOxYAjDzktjhXs-wnBZlJ5YBNix2WAyUeUVXp0GSyw";

const playlistID = "37i9dQZEVXbMDoHDwVN2tF";
const spotifyAPIUri = `https://api.spotify.com/v1/playlists/${playlistID}`


let playlistUrl;

const setURL = (url) => {
  playlistUrl = url;
  song = new p5.SoundFile(playlistUrl);
}

const spotifyAPIRequest = () => {
  
  const response = fetch(spotifyAPIUri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'ACCEPT': 'application/json',
      'Authorization': `Bearer ${bearerToken}`
    }
  }).then(data => {
    return data.json()
  }).then(jsonData => {
    if (jsonData.error && jsonData.error.status == 404) {
      throw 'The spotify API either is currently rate-limiting you or has encountered an error.';
    } else if (jsonData.error && jsonData.error.status == 401) {
      throw 'The access (bearer) token expired. Please read the comments above on resolving this error';
    }
    // console.log(jsonData);
    const url = jsonData.tracks.items[0].track.preview_url;
    setURL(url);
    return url;
  }).catch(err => {
    console.log(err);
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  colorMode(HSB);
  noFill();
  stroke(199, 80, 88);
  strokeWeight(3);
  
  spotifyAPIRequest();

  fft = new p5.FFT();
}

function draw() {
  background(230,50,15);
  orbitControl(4,4);

  let wave = fft.waveform();

  rotateY(90);
  rotateZ(65);

  let circ = new NoodleSphereVisualizer()
  switch(selectedVisualizer) {
    case 'noodlesphere':
      circ = new NoodleSphereVisualizer();
      break
    case 'sphere':
      circ = new SphereVisualizer();
      break
    case 'lissajous':
      circ = new LissajousVisualizer();
      break
    case 'anamorphicsphere':
      circ = new AnamorphicSphere();
      break
    case 'galaxy':
      circ = new GalaxyVisualizer();
      break
    case 'biconal':
      circ = new BiconalVisualizer();
      break
    case 'sauron':
      circ = new SauronVisualizer();
      break;
  }

  circ.spawn(wave);
}

function mouseClicked() {
  if(!song) return;
  if(song.isPlaying()) {
    song.pause()
  } else {
    song.play()
  }
}