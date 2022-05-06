let searchCountry = async(query) => {
    //let url = "https://masai-mock-api.herokuapp.com/news?q={query}" 
    try {
        //let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`)
        let data = await res.json()
        console.log("data: ", data);
        return data;



    } catch (error) {
        console.log("error: ", error);

    }

}

//22222222222222nd one country

let searchNews = async(query) => {
    //let url = "https://masai-mock-api.herokuapp.com/news?q={query}" 
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
            // let res = await fetch( `https://newsdata.io/api/1/news?apikey=pub_70517a63b7dc4fedee0cbdb5368f58f834be&category=${query}`)
            // let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`)
        let data = await res.json()
            // console.log("data: ", data);
        return data;





    } catch (error) {
        console.log("error: ", error);

    }

}



//#########Append part############

let arrnews = []
let appendNews = (data, container) => {
    data.forEach(({ title, urlToImage, description, publishedAt, content }) => {
        let div = document.createElement("div")
        let b = document.createElement("div")
        b.setAttribute("class", "b1")
        let c = document.createElement("div")
        c.setAttribute("class", "c1")
        div.setAttribute("class", "box")
        div.style.height = "300px"

        let bagleftcontainer = document.createElement("div");
        bagleftcontainer.style.display = "flex";
        bagleftcontainer.style.justifyContent = "space-between";

        div.addEventListener("click", function() {
            let obj = {
                    title: title,
                    urlToImage: urlToImage,
                    description: description,
                    publishedAt: publishedAt,
                    content: content,
                }
                //arrnews.push(title,urlToImage,description,content)
            arrnews.push(obj)
            localStorage.setItem("news", JSON.stringify(arrnews));
            window.location.href = "New.html"
        })
        let img = document.createElement("img")
        let h2 = document.createElement("h2")
            // let h3 = document.createElement("h3")
        let p = document.createElement("p")

        img.src = urlToImage
        h2.innerText = title;

        let shareoption = document.createElement("div");

        shareoption.style.display = "flex";
        shareoption.style.alignContent = "center";

        let bookmark = document.createElement("i");
        bookmark.setAttribute("class", "fa-regular fa-bookmark");
        bookmark.style.fontSize = "20px";

        bookmark.style.cursor = "pointer";
        bookmark.addEventListener("click", function() {
            togglePopup();
        })

        let para = document.createElement("p");
        para.innerText = `2 min read . ${publishedAt}`;
        para.style.margin = "0";

        let share = document.createElement("i");
        share.setAttribute("class", "fa fa-share-alt");
        share.style.fontSize = "20px";
        share.style.paddingLeft = "10px";
        shareoption.append(bookmark, share);



        // h3.innerText = description
        // p.innerText = content
        bagleftcontainer.append(para, shareoption);
        b.append(img)
        c.append(h2, bagleftcontainer)
        div.append(c, b)
        container.append(div)
    })
}



export { searchCountry, appendNews, searchNews }