const mix = document.getElementById("mix");

const data = [
  {
    id: 1,
    title: "Interstellar: A Trip Hop Mix",
    desc: "Confused Bi-Prodcut if a Minisinformed Culture",
    img: "https://images.unsplash.com/photo-1442504028989-ab58b5f29a4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
    url: "",
    time: "1:15:55",
  },
  {
    id: 1,
    title:
      "Best of Trip-Hop & Downtempo & Lofi & Hip-Hop instrumental Vol.3 Re - Upload",
    desc: "SiX - Music",
    img: "https://images.unsplash.com/photo-1608433299744-f1d2abfda5b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
    url: "",
    time: "1:15:55",
  },
  {
    id: 1,
    title:
      "Inspiring mix | lofi hipo hop |Chillhop, Jazzhop, Chillout [study/slepp/game]",
    desc: "Dreamy",
    img: "https://images.unsplash.com/photo-1466554934129-f71df54ebb27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
    url: "",
    time: "1:15:55",
  },
  {
    id: 1,
    title: "Chill study Beats 4 - jazz & lofi hiphop Mix [2017]",
    desc: "Chilling Music",
    img: "https://images.unsplash.com/photo-1502519144081-acca18599776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=120&q=60",
    url: "",
    time: "1:15:55",
  },
  {
    id: 1,
    title: "Hipo Hop `Funk`Jazz - ours Samplus",
    desc: "Stay See",
    img: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
    url: "",
    time: "1:15:55",
  },
  {
    id: 1,
    title: "another one",
    desc: "Wonderworld",
    img: "https://images.unsplash.com/photo-1466554934129-f71df54ebb27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80",
    url: "",
    time: "1:05:23",
  },
];

for (let content of data) {
  mix.insertAdjacentHTML(
    "beforeend",
    `<div class="
     grid grid-rows-[6rem] grid-cols-5 gap-x-2 sm:gap-x-4 text-sm sm:text-lg hover:cursor-pointer group p-3 overflow-hidden transition-all
    hover:bg-gradient-to-r
    hover:from-blue-400
    hover:to-blue-500
    hover:rounded-xl
    hover:scale-105
    ">
  <div class='col-span-2 row-auto rounded-sm relative bg-no-repeat'>
    <img src=${content.img} class="object-cover w-full h-full" />
    <time class="bg-stone-500/80 text-slate-300 py-1 rounded-full bottom-1 left-1 px-3 font-medium absolute text-sm">
      ${content.time}
    </time>
  </div>

  <div class='col-start-3 row-auto  col-end-6'>
    <h3 class="capitalize text-sm font-medium group-hover:text-white">
      ${content.title}
    </h3>
    <p class="text-blue-500 group-hover:text-blue-200 font-bold text-xs">
      ${content.desc}
    </p>
  </div>

</div>`
  );
}

const showHide = document.getElementById("showHide");
showHide.addEventListener("click", function () {
  mix.classList.toggle("hidden");
  const condition = mix.classList.contains("hidden");
  if (condition) {
    showHide.classList.remove("fa-chevron-up");
    showHide.classList.add("fa-chevron-down");
  } else {
    showHide.classList.remove("fa-chevron-down");
    showHide.classList.add("fa-chevron-up");
  }
});
