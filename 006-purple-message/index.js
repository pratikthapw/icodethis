const frnds = document.getElementById("frnds");
const messages = document.getElementById("messages");
const msgBox = document.getElementById("msgBox");
const backBtn = document.getElementById("backBtn");

const datas = [
  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Nisha Bhandari",
    description:
      "Should the header hide and login button to be lifted above the",
    time: "18:20",
    badge: "",
  },
  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Kiran Shrestha",
    description:
      "The field of user experience design is a conceptual design discipline and",
    time: "18:20",
    badge: "8",
  },
  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Pooja Khadka",
    description: "The contextual environments.",
    time: "18:20",
    badge: "",
  },
  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Amit Singh",
    description:
      "Visual design, also commonly known as graphic design, user interface",
    time: "18:20",
    badge: "5",
  },
];

const conversations = [
  {
    frdMsg1: "Hey there, how are you?",
    myMsg1: "I am good, thanks for asking!",
    myMsg2: "Just worked on some projects. How about you?",
  },
  {
    myMsg1: "Yes, it was quite productive. Yours?",
    frdMsg2: "Not bad. Any exciting plans for the weekend?",
    myMsg2: "I am thinking of going hiking. How about you?",
    frdMsg1: "Hi, hope you had a great day!",
  },
  {
    frdMsg1: "Hey! Did you watch that new movie?",
    myMsg2: "Absolutely, the cast did a fantastic job.",
    frdMsg2: "I heard the acting was superb too.",
  },
  {
    frdMsg2: "Busy with work, but things are good.",
    myMsg1: "I know, right? How have you been?",
    frdMsg1: "Hi there, long time no see!",
    myMsg2: "Glad to hear that. We should catch up soon!",
    frdMsg3: "I have been wanting to try that new restaurant.",
  },
];

let baseStyle = "flex gap-x-4 items-start cursor-pointer p-6";

for (data in datas) {
  frnds.insertAdjacentHTML(
    "beforeend",
    `
       <div class="totalFrnds flex gap-x-4 items-start cursor-pointer p-6 hover:bg-[#5F38A6]">
           <img src="${
             datas[data].avatar + data
           }" class="rounded-full ring-4 ring-[#9172CB]" />
           <div class="text-white">
               <h3 class="font-medium"> ${datas[data].name} 
               <span class="${
                 datas[data].badge
                   ? "ml-4 text-xs bg-[#FF4081] px-2 py-1 rounded-full"
                   : ""
               }"> 
                 ${datas[data].badge} 
               </span></h3>
               <p class="text-sm"> ${datas[data].description} </p>
           </div>
           <time class="ml-auto"> ${datas[data].time} </time>
       </div>
    `
  );
}

const totalFrnds = document.querySelectorAll(".totalFrnds");

for (let i = 0; i < totalFrnds.length; i++) {
  totalFrnds[i].addEventListener("click", function (e) {
    totalFrnds.forEach((frnd) => {
      frnd.classList.remove("bg-[#5F38A6]");
    });

    // Adding active class
    totalFrnds[i].classList.add("bg-[#5F38A6]");
    messages.innerHTML = "";
    msgBox.classList.remove("hidden");
    frnds.classList.add("hidden", "sm:block");

    for (let [key, value] of Object.entries(conversations[i])) {
      const whoseMsg = key.slice(0, 3) === "frd";

      messages.innerHTML += `
        <div class="flex totalMsgs gap-x-4 ${
          whoseMsg && "flex-row-reverse"
        } items-center mt-4 mx-2">
            <img src='https://i.pravatar.cc/48?img=${
              whoseMsg ? 15 : i
            }' class="rounded-full ring-4 ring-white"/>
            <p class="bg-white shadow-lg p-2 text-stone-600"> ${value} </p>
        </div>
    `;
    }
  });
}

backBtn.addEventListener("click", function () {
  msgBox.classList.add("hidden");
  frnds.classList.remove("hidden", "sm:block");
});
