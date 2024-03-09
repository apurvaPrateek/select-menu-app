let selectField = document.getElementById("select-field");
let options = document.getElementById("select-options");
let arrow = document.querySelector("#select-field img");
let Items = document.querySelectorAll("li");
let input = document.querySelector("input");

function fieldSelect(){
    if(options.style.display == "none") {options.style.display = "block";
    arrow.style.transform = "rotate(180deg)";}
    else {options.style.display = "none";
    arrow.style.transform = "rotate(0)";}
}

selectField.addEventListener("click", fieldSelect);

Items.forEach((item)=>{
    item.addEventListener("click",()=>{
        fieldSelect();
        if(item.innerText == "none")
        selectField.querySelector("p") = "Select Social Media";
        else selectField.querySelector("p").innerHTML = item.innerText;

        input.value = item.innerText;

        console.log(input.value);
    })
})