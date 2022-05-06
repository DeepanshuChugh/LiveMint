function navbar() {
    return `<div id="leftNav">
  
    </div>
    
    <div id="midNav">
        <a href="index.html"><img src="https://images.livemint.com/static/livemint-logo-v2.svg" alt=""></a>
    </div>
    <div id="rightNav">
    <div class="search-box">
            <input id="search-txt" type="text" name="" placeholder="Type to search">
            <a class="search-btn" href="search.html">
                <i class="fas fa-search"></i>
            </a>
    </div>
        <ul>

            <li><a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1827/1827504.png" style="height: 18px; width:18px;" alt=""></a></i></li>
            <br><br>            
            <li style="color: gray;" >|</li>
            <li ><a href="#" >e-paper</a></li>
            <li style="color: gray;">|</li>
            <li id="signInData"></li>
        </ul>
        
    </div>`;
}
export default navbar;