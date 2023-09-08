if(document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function() {
      console.log("Document is ready after waiting!");
      initializeCode();
  })
}

function initializeCode() { 
  const addButton = document.getElementById("add-data");
  const myButton = document.getElementById("my-button");
  const heading = document.querySelector("h1");
  const list = document.getElementById("mylist");

  const textArea = document.getElementById("textArea")

  addButton.addEventListener("click", function() {

    const newItem = document.createElement("li");
    const text = document.createTextNode(textArea.value);
    newItem.appendChild(text);
    list.appendChild(newItem);
  });
  myButton.addEventListener("click", function() {
    heading.textContent = "Moi maailma";
    console.log("hello world");
  });
}
