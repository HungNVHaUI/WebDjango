var dropdown_home = document.getElementsByClassName("homedropdown");
var i;
console.log(dropdown_home.length);
for (i = 0; i < dropdown_home.length; i++) {
    dropdown_home[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        // console.log(dropdownContent);
        if (dropdownContent.style.display == "block")
        {
            dropdownContent.style.display = "none";

        }
        else
        {
            dropdownContent.style.display = "block";

        }
    });
}





function check_click() {
    var  a = 0;
    var checkBox = document.getElementById("check_menu");
    var item = document.getElementById("menu_item");
    var block = document.getElementById("block");


    if (checkBox.checked == true){
        a = 1;
        var width_item = 150;
        var width_block = width_item + 15;
        var W_block = width_block.toString() + "px";
        var W_item = width_item.toString() + "px";
        item.style.width = W_item;
        block.style.marginLeft = W_block;
        block.style.transition = "0.5s easeinout"
        console.log(a);


    }
    if (checkBox.checked == false) {
        a = 0;
        console.log(a);
        block.style.marginLeft = "50px";
    }


}