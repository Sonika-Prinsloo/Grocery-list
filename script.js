let text = document.getElementById("text");
let add = document.getElementById("add");
let unorderedList = document.getElementById("container2");
let item = "";

text.addEventListener("keydown",function(event){
  if (event.key == "Enter")
  addItem();
})
function addItem() {
  item += text.value;
  let listItem = document.createElement("li");
  let itemContent = document.createTextNode(item);
  unorderedList.appendChild(listItem);
  listItem.appendChild(itemContent);
  item = "";
  text.value = "";

  listItem.addEventListener("click", function(){
    if (listItem.style.textDecoration != "line-through") {
      listItem.style.textDecoration = "line-through";

    } else {
      unorderedList.removeChild(listItem);
      listItem.removeChild(itemContent);  
    }
  })

  // let done = listItem.style.textDecoration = "line-through";
  // done.addEventListener("click", function(){
  //   unorderedList.removeChild(listItem);
  //   listItem.removeChild(itemContent);
  // })
}
