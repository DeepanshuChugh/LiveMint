let id;
function debounce(func,delay)
{
    if (id) {
    clearTimeout(id);}
     id = setTimeout(() => {
    func();
     }, delay);
}

function validation(){
    var input = document.getElementById("input").value;
    var btn = document.getElementById("continueBtn");
    let pattern1 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;;
    var pattern2 =/^(\+\d{1,3}[- ]?)?\d{10}$/
    
    if(input.match(pattern2) || input.match(pattern1))
    {
        btn.disabled=false;   
    }
    else{;
    btn.disabled=true;
    }
    if(input=="")
    {
        btn.disabled=true;
    }
   

}