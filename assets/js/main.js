function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

function validate() {
  var mail = document.getElementById("email").value;
  var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (regx.test(mail)) {
    alert("valid email id, form submitted");
    return true;
  } else if(mail=='') {
    alert("Please enter your email address, it's empty");
    return false;
  } else {
    alert("incorrect email address, please enter valid email address");
    return false;
  }
}