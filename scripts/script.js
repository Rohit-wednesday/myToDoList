let button = document.getElementById("button");

button.addEventListener("click", () => {
  let value = document.getElementById("element").value;
  value.trim();

  if (value !== '') {
    let entry = document.createElement("li");
    entry.innerHTML = '<i class="fas fa-check centerBox__tick"></i>' + value + '<i class="fas fa-trash centerBox__bin"></i>';
    let list = document.getElementById("add-to-list");
    list.appendChild(entry);
    
    let subList = document.createElement("ul");
    

    document.getElementById("element").value='';
  }
});

document.getElementById("element").addEventListener("keyup", (event) => {
  if(event.keyCode === 13) {
    event.preventDefault();
    button.click();
  }
});

let entry = document.createElement("li");
let list = document.getElementsByTagName("ul")[0];
list.onclick = () => {
  if (event.target.className === 'fas fa-trash centerBox__bin') {
    entry = event.target.parentNode;
    event.target.parentNode.remove();
  } else {
    if(event.target.tagName !== 'I'){
      event.target.children[0].classList.toggle("centerBox__tick");
    }
    event.target.classList.toggle("centerBox__changeOnClick");
  }
};

let undo = document.getElementById("undo");
undo.addEventListener("click", () => {
  if (entry.innerText !== ''){
    document.getElementById("add-to-list").appendChild(entry);
  }
});
