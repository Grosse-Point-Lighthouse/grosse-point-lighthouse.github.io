var change_image = function () {
    var image_number = window.location.hash.substr(1);
    var image_path = "/assets/images/gallery/" + image_number + ".jpg";
    document.getElementById("image-holder").style.backgroundImage = "url(" + image_path + ")";
};
window.addEventListener("DOMContentLoaded", change_image);
window.addEventListener("hashchange", change_image);
