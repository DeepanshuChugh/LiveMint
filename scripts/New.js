// import { navbar } from "../components/navbar.js";

import { appendNews, searchNews } from "../components/fetch.js";

// let n = document.getElementById("navbar")
// n.innerHTML = navbar()

let news = JSON.parse(localStorage.getItem("news"))
console.log("news: ", news);

function append() {
    let container = document.getElementById("detailed-news")
    container.innerHTML = null;
    news.map(function(el) {
        // console.log("ggg",el.title)
        let div = document.createElement("div")
        div.setAttribute("class", "box")
        let img = document.createElement("img")
        img.setAttribute("class", "img1")
        let h2 = document.createElement("h1")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")

        img.src = el.urlToImage
        h2.innerText = el.title;
        h3.innerText = el.description
        p.innerText = el.content



        /////////////this is readmore and audio and fb insta///////

        let socialHolder = document.createElement("div")
        let socialIcons = document.createElement("div")
        socialIcons.setAttribute("class", "socialIcons")
        let bookmark = document.createElement("a")
        bookmark.innerHTML = `<i class="fa-solid fa-bookmark"></i>`
        let fb = document.createElement("a")
        fb.innerHTML = `<i class="fa-brands fa-facebook-square"></i>`
        fb.setAttribute("href", "https://www.facebook.com/")
        let linkedin = document.createElement("a")
        linkedin.innerHTML = `<i class="fa-brands fa-linkedin"></i>`
        linkedin.setAttribute("href", "https://in.linkedin.com/")
        let twitter = document.createElement("a")
        twitter.innerHTML = `<i class="fa-brands fa-twitter"></i>`
        twitter.setAttribute("href", "https://www.instagram.com/")
            let textToSpeech = document.createElement("div")
            let textToSpeechLabel = document.createElement("p")
            textToSpeechLabel.setAttribute("class", "textToSpeechLabel")
            textToSpeechLabel.innerText = "Listen to this article"
            let audioBox = document.createElement("div")
            audioBox.setAttribute("id", "audioBox")
            let audio = document.createElement("button")
            audio.addEventListener("click", function() {
                responsiveVoice.speak(el.content);
            })
            audio.innerText = "Play"
            let audio2 = document.createElement("button")
            audio2.innerText = "Stop"
            audio2.addEventListener("click", function() {
                responsiveVoice.pause();
            })
            let content = document.createElement("div")
            content.innerHTML = `${el.content}`;
        let readmore = document.createElement("a")
        readmore.setAttribute("href", `${el.url}`)
        readmore.innerText = "Read More..."

        audioBox.append(audio, audio2)
        textToSpeech.append(textToSpeechLabel, audioBox)
        // imageBox.append(img, caption)
        socialIcons.append(bookmark, fb, linkedin, twitter)
        socialHolder.append(socialIcons, readmore)




        div.append(h2, img, h3, textToSpeech, p, socialHolder)
        container.append(div)
    })
}

append()


let query;
let search = (e) => {
    if (e.key == "Enter") {
        query = null;
        query = document.getElementById("search_input").value;
        localStorage.setItem("query", JSON.stringify(query))

        window.location.href = "search.html";
        //  let query = document.getElementById("search_input").value;
        //console.log("query: ", query);
        searchNews(query).then((data) => {
            console.log("data: ", data);
            let container = document.getElementById("detailed-news")
            container.innerHTML = null;
            appendNews(data.articles, container)


        });


    }
}



document.getElementById("search_input").addEventListener("keydown", search)