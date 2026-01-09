import * as handTrack from 'handtrackjs';
const model =  await handTrack.load();

const img = document.getElementById("img");

const predictions = await model.detect(img); 
