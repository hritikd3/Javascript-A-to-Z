const songs = {
  punjabi: " kehndi hundi si",
  english: "let me love you",
  hindi: "Chehra hai kya chand khila hai",
};
const interestedIn= prompt('which song do you want list about? 👉 Punjabi, english, hindi')

if(songs[interestedIn]){
    console.log(songs[interestedIn])
    
}else{
    console.log('wrong answer please selct from the mention options😲')
}