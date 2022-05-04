async function fetchdata(){
    let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=004ab6ddbcf145ebb1ba618f7df8fb2a'
      let temp= await fetch(url);
     let data= await temp.json();
     let fdata= data.articles;
 
 
     fdata.forEach(({author,title,publishedAt,content,description,urlToImage}) => {
 
        let bag = document.createElement("div");
        bag.style.display = "flex"
        bag.style.borderBottom = "1px solid grey"
        let bagleft=document.createElement("div");
        bagleft.style.width="75%";
        bagleft.style.lineHeight="20px";
        bagleft.style.display="flex";
        bagleft.style.padding="10px";
        bagleft.style.flexDirection="column";
        bagleft.style.justifyContent="space-between";
        let bagleftcontainer=document.createElement("div");
        bagleftcontainer.style.display="flex";
        bagleftcontainer.style.justifyContent="space-between";
        let bagleftleft=document.createElement("div");
        let bagleftright=document.createElement("div")
        let heading=document.createElement("p");
        heading.innerHTML=`<b>${title}</b>`;
        let para=document.createElement("p");
        para.innerText=`2 min read . ${publishedAt}`;
        para.style.margin="0"; 
        let shareoption=document.createElement("div");
        shareoption.style.display="flex";
        shareoption.style.alignContent="center";
        let bookmark=document.createElement("i");
        bookmark.setAttribute("class","fa-regular fa-bookmark");
        bookmark.style.fontSize="20px";
        let share=document.createElement("i");
        share.setAttribute("class","fa fa-share-alt");
        share.style.fontSize="20px";
        share.style.paddingLeft="10px";
        shareoption.append(bookmark,share);
        bagleftcontainer.append(para,shareoption);
        bagleft.append(heading,bagleftcontainer);
        let bagright=document.createElement("div");
        bagright.style.display="flex";
        bagright.style.justifyContent="center";
        bagright.style.padding="20px";
        bagright.style.width="25%";
        let img=document.createElement("img");
        img.src=urlToImage;
        img.style.borderRadius="10px";
        img.style.width="100%";
        bagright.append(img);
        bag.append(bagleft,bagright);
        bag.setAttribute("id","bot-news")
        document.getElementById("bot-news").append(bag); 
  
        bag.addEventListener("click",function(){
          myFn({author,title,publishedAt,content,description,urlToImage})
       })
    
       
     });
        
 }
 fetchdata();
 function myFn({author,title,publishedAt,content,description,urlToImage}){
    let data = {author:author,title:title,publishedAt:publishedAt,content:content,description:description,urlToImage:urlToImage}
    localStorage.setItem("newsData",JSON.stringify(data))
    window.location.href = "news.html"
 }