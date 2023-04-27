import React from "react";
import memeData from "./memedata";

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState("");

  const [meme, setMeme] = React.useState({
    // The "setMeme" function is used to update the meme state.
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  const randomMeme = () => {
    const memesArray = allMemeImages.data.memes; // First need to define the deepness of memedata
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomIndex].url; // Then returning random index of it
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
      // This line uses the setMeme function to update the state of meme by using the previous state object
      //  prevMeme and the spread operator to create a new object that includes all of the previous properties of meme,
      //  but with the randomImage property updated to the newly generated url.
    }));
  };

  // function randomMemeImage() {
  //   setMemeImage(randomMeme());
  // }

  return (
    <main>
      <div className="meme--form">
        <input className="meme--input" type="text" placeholder="Top text" />
        <input className="meme--input" type="text" placeholder="Bottom text" />
        {/* <button onClick={randomMemeImage} className="meme--button"> */}
        <button onClick={randomMeme} className="meme--button">
          Get new meme image🖼
        </button>
        <img src={meme.randomImage} alt="Meme image" className="meme--image" />
      </div>
    </main>
  );
}
