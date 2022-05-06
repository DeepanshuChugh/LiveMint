// import navbar from "../components/nav.js";
// document.getElementById("navbar").innerHTML = navbar();


import { searchNews, appendNews } from "../components/fetch.js"

let query = JSON.parse(localStorage.getItem("query"))
console.log("query: ", query);
searchNews(query).then((data) => {
    console.log("data: ", data);
    let container = document.getElementById("rleft")
    container.innerHTML = null;
    appendNews(data.articles, container)


});


let search = (e) => {
    if (e.key == "Enter") {
        query = document.getElementById("search-txt").value;
        //console.log("query: ", query);
        searchNews(query).then((data) => {
            console.log("data: ", data);
            // let container = document.getElementById("detailed_news")
            let container = document.getElementById("detailed-news")
            container.innerHTML = null;
            appendNews(data.articles, container)


        });


    }
}



document.getElementById("search-txt").addEventListener("keydown", search)