const checkbox = document.getElementById("checkbox");

//submit button

const submitBtn = document.querySelector("button[type=submit]")

//disable check
checkbox.disabled = true;
submitBtn.disabled = true;



const elements = document.querySelectorAll('.element')

const selectColor = document.getElementById('selectColor')

elements.forEach(function(element){
    const color = getRandomColor();

    element.style.backgroundColor = color;
    element.innerHTML = color;
    selectColor.innerHTML = color;
});

function getRandomColor() {
    const letter = "0123456789ABCDEFGHIJK";
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color
}


elements.forEach(function(element){
    element.addEventListener('click', function(){
        if(element.innerHTML === selectColor.innerHTML){
            checkbox.checked = true;
            submitBtn.disabled = false;
            submitBtn.classList.remove('btn-light');
            submitBtn.classList.add('btn-success');
            alert("you are a human");
        } else{
            alert("please verify that you are a human")
            location.reload(true);
        }
    });
   
});




