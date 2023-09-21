const fulimgbox = document.getElementById("fulimgbox");
fulimg = document.getElementById("fulimg")
function openFulImg(reference){
    fulimgbox.style.display = "flex";
    fulimg.src = reference
}
function closeclip(){
    fulimgbox.style.display ="none";
}