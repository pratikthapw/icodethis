const showProgress = document.getElementById("showProgress");
const inputProgress = document.getElementById("inputProgress");

inputProgress.addEventListener("input", function (e) {
  if (e.target.value > 100) {
    // showProgress.classList.add("w-[100%]");
    showProgress.style.width = "100%";
    inputProgress.value = 100;
  }
  showProgress.style.width = e.target.value + "%";
});
