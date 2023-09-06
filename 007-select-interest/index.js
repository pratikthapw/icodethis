const interests = [
  {
    img: "https://i.ytimg.com/vi/mZb_0gUTnTY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDVM1HEKZsdYVGwUOqjKIC5R5clGQ",
    name: "code",
  },
  {
    img: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    name: "Fitness",
  },
  {
    img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    name: "soccer",
  },
  {
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    name: "Music",
  },
  {
    img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9iYnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    name: "Games",
  },
  {
    img: "https://images.unsplash.com/photo-1611834422006-f5c6cae90cc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvYmJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    name: "Fishing",
  },
  {
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "Cars",
  },
  {
    img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60",
    name: "Food",
  },
  {
    img: "https://images.unsplash.com/photo-1656218257936-8384471a0258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    name: "Sleeping",
  },
  {
    img: "https://images.unsplash.com/photo-1606103920295-9a091573f160?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9yZWR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60",
    name: "Nothingggggg",
  },
];
const renderInterest = document.getElementById("renderInterest");

for (interest of interests) {
  renderInterest.insertAdjacentHTML(
    "beforeend",
    `
       <li class="imageItem cursor-pointer flex flex-col items-center">
          <label class='relative'>
             <span class="tickItem absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-16 h-16 bg-gray-300/70 rounded-full cursor-pointer grid place-items-center text-3xl text-slate-700 hidden prevent-select"> ✔ </span>
             <img src=${interest.img} class="rounded-full cursor-pointer w-16 h-16" />
          </label>
          <p class="mt-2 uppercase text-xs text-center font-semibold text-slate-600"> ${interest.name} </p>
       </li>
    `
  );
}

const imageItem = document.querySelectorAll(".imageItem");
const tickItem = document.querySelectorAll(".tickItem");

for (let i = 0; i < imageItem.length; i++) {
  tickItem[0].classList.remove("hidden");
  tickItem[3].classList.remove("hidden");
  imageItem[i].addEventListener("click", function () {
    tickItem[i].classList.toggle("hidden");
  });
}
