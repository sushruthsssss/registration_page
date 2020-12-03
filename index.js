import "../styles.css";

const submitButton = document.getElementById("submit");

document.addEventListener("DOMContentLoaded", () => {
  console.log("vscode");
  localStorage.getItem();
});

if (document.readyState !== "loading") {
  console.log("vscode");
  var keys = Object.keys(localStorage), //taking out all the keys that are there in the local storage
    i = keys.length;

  while (i--) {
    if (keys[i].match(/userDetails/g)) {
      //we only care about keys that start with userDetails
      //this is called regex matching
      const stringifiedDetailsOfPeople = localStorage.getItem(keys[i]);
      console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
      const detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
      console.log("details", detailsOfPeople);

      addNewLineElement(detailsOfPeople);
    }
  }
}
// const listOfPeople = []
submitButton.addEventListener("click", () => {
  const emailId = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  if (emailId.length > 0 && name.length > 0) {
    const object = {
      name: name,
      emailId: emailId //unique
    };
    localStorage.setItem("userDetails" + emailId, JSON.stringify(object));
    // localStorage.setItem("userDetailEmail" + emailId, emailId);
    // listOfPeople.push(object)
    addNewLineElement(object);
  }
});

function addNewLineElement(object) {
  const ul = document.getElementById("listOfPeople");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(object.name + " " + object.emailId));
  ul.appendChild(li);
  console.log(object);
}
