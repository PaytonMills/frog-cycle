function toggleImage() {
    var img1 = img;
    var img2 = "./frog-grapics/tadpole-graphic-light.png";
    
    var imgElement = document.getElementById('toggleImage');
 
    imgElement.src = (imgElement.src === img1)? img2 : img1;
}