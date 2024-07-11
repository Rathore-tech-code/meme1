
const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML =`Meme by:${author}`;
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes/2")
        .then((response) => response.json())
        .then((data) => {
            console.log(data); 
            if (data.memes && data.memes.length > 0) {
                const meme = data.memes[0]; 
                updateDetails(meme.url, meme.title || "Random Meme", meme.author || "Anonymous");
            } else {
                updateDetails("", "No meme found", "");
            }
        })
        .catch((error) => {
            console.error('Error fetching meme:', error);
            memeTitle.innerHTML = 'Failed to load meme.';
        });
};

generateMemeBtn.addEventListener("click", generateMeme);

