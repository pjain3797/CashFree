function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");

    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function changeBtnText() {
  var ul = document.getElementById("myDropdown");
  var lis = ul.getElementsByTagName("li");

  for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function (e) {
      document.getElementById("btn").innerText = this.innerText;
    });
  }
}
