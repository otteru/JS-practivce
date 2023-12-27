// document.body.children[1].children[0].href = "https://google.com"

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("p a");//CSS 선택자에 의해 충족/선택된 첫 번째 일치
anchorElement.href = "https://www.udemy.com/";

anchorElement = document.querySelectorAll("#external-link");
anchorElement.href = "https://www.goorm.io/dashboard";

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google!";

let firstParagraph = document.querySelector("p");

firstParagraph.append(newAnchorElement);