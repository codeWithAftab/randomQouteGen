let qoute = document.getElementById("text");
let author = document.getElementById("author");
let next = document.getElementById("next");
let tweet = document.getElementById("tweet");
let texts, authorName;
async function getQoute() {
  qoute.textContent = "please wait we rendering your Qoute....";
  author.textContent = "";
  let n = Math.floor(Math.random() * 8000);
  console.log(n);
  let r = await fetch("https://goquotes-api.herokuapp.com/api/v1/all/quotes")
    .then((r) => {
      return r.json();
    })
    .catch((err) => {
      console.log(err);
    });
  texts = r.quotes[n].text;
  authorName = r.quotes[n].author;
  console.log(texts);
  qoute.textContent = `“${r.quotes[n].text}”`;
  author.textContent = `“${r.quotes[n].author}”`;
  console.log(author);
}

function postQoute() {
  let url = `https://twitter.com/intent/tweet?text=${texts} \t by ${authorName}--`;
  window.open(url);
}
getQoute();
next.addEventListener("click", getQoute);
tweet.addEventListener("click", postQoute);
