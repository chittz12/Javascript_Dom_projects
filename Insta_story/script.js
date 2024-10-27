var arr  = [
    {dp:"chitz.jpg", story:"chitz.jpg"},
    {dp:"ankit.png", story:"ankit.png"},
    {dp:"depak.png", story:"depak.png"},
    {dp:"arpit.jpeg", story:"arpit.jpeg"},
]
var storiyan = document.querySelector(".storiyan")
var clutter = "";

arr.forEach(function(elem,idx){
    clutter += `<div class="stories">
                    <img id = ${idx} src="${elem.dp}" alt="">
                </div>`
})

storiyan.innerHTML = clutter;

storiyan.addEventListener("click" , function(dets){
    document.querySelector(".full_screen").style.display = "block"; 
    document.querySelector(".full_screen").style.backgroundImage =`url(${arr[dets.target.id].story})`;
    setTimeout(function(){
        document.querySelector(".full_screen").style.display = "none";
   },3000)
})



