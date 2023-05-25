function buy() {
  let name = prompt("What is you name?");
  let email = prompt("What is your email address?");
  let opinion = prompt("Do you like Golden Retrievers?");

  if (opinion === "yes") {
    alert(
      "Thank you, " +
        name +
        "! We'll be in touch. Meanwhile, enjoy your fur buddy!🐕💕"
    );
  } else {
    if (opinion !== "yes")
      alert(
        "Thank you " +
          name +
          " for your honesty. Maybe a different pet will better suit you."
      );
  }
}
let button = document.querySelector("button");
button.addEventListener("click", buy);
