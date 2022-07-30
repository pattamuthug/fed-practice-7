var button = document.querySelectorAll(".calculate");


function calculate() {
    var qty = parseInt(this.parentNode.previousElementSibling.firstChild.value);
    var price = parseInt(this.parentNode.previousElementSibling.previousElementSibling.firstChild.value);
    var Totalprice = qty * price;
    console.log(Totalprice);
    
    var tot = this.parentNode.nextElementSibling;
    tot.innerText = Totalprice;

}

function actionevent(btn) {
    btn.addEventListener("click", calculate)
}

button.forEach(actionevent)