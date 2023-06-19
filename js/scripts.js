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
  const heading = document.querySelector("h1");
  const list = document.getElementById("mylist");

  const textArea = document.getElementById("textArea")

  addButton.addEventListener("click", function() {
    console.log("Hello World");
    heading.textContent = "My notebook";

    const newItem = document.createElement("li");
    const text = document.createTextNode(textArea.value);
    newItem.appendChild(text);
    list.appendChild(newItem);
  });
}
