function displaySingleImg(currentImg){
    //Change img
    for (var i = 0; i < imgs.length; i++) {
        //console.log("->", i, imgs[i])
        if (i != currentImg){
            imgs[i].style.display = "none";
        }
        else{
            imgs[i].style.display = "inline";
        }
    }
}

function fun(param){
    if(param == "next"){currentImg += 1}
    if(param == "prev"){currentImg -= 1}

    if (currentImg == imgs.length){currentImg = 0}
    if (currentImg < 0) {currentImg = imgs.length-1}

    var description = document.getElementById("description")
    newDescription = objects[currentImg].name
    description.innerHTML = newDescription

    var newURL = "./page2.html?imgId="+currentImg
    anchor.href = newURL
    console.log(newURL)
    
    //Change text of the current img (es. 2/3)
    document.getElementById("currentImg").innerHTML = currentImg+1+"/"+imgs.length;
    displaySingleImg(currentImg)
}



currentImg = 0
var imgs = document.getElementsByTagName("img");
var anchor = document.getElementById("anchor");

document.addEventListener("DOMContentLoaded", function () 
{ 
    const sliderContainer = document.getElementById('slider'); 
    document.getElementById("currentImg").innerHTML = currentImg+1+"/"+imgs.length;
    displaySingleImg(currentImg)
    
});
