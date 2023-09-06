// Add JavaScript code here
const datas = [
  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Sankalpa Thapa",
    description: "Uploaded 4 new pictures into album Landskapes",
    time: "Just Now",
    badge: "new",
  },

  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Rijan Rai",
    description: "Liked 3 posts from Pratik Thapa",
    time: "2 minutes ago",
    badge: "new",
  },
  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Rajesh Sharma",
    description: "Commented on a picture from album Landskapes",
    time: "5 minutes ago",
    badge: "new",
  },
  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Anita Lama",
    description: "Shared a link to a blog post about photography",
    time: "10 minutes ago",
    badge: "new",
  },
  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Bikash Gurung",
    description: "Followed Pratik Thapa and Sunita Rai",
    time: "15 minutes ago",
    badge: "new",
  },
  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Nisha Bhandari",
    description: "Posted a new picture in album Flowers",
    time: "20 minutes ago",
    badge: "new",
  },
  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Kiran Shrestha",
    description: "Updated profile picture and bio",
    time: "25 minutes ago",
    badge: "old",
  },
  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Pooja Khadka",
    description: "Joined the group Nature Lovers",
    time: "30 minutes ago",
    badge: "new",
  },
  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Amit Singh",
    description: "Created a new album called Mountains",
    time: "35 minutes ago",
    badge: "old",
  },
];
const details = document.querySelector("#noti-details");

let randomImg = 1;
for (let data of datas) {
  const detail = document.createElement("div");
  detail.classList = "detail flex gap-x-5";

  const img = document.createElement("img");
  img.classList = "rounded-full w-[48px] h-[48px]";
  img.src = data.avatar + randomImg;
  detail.appendChild(img);

  const texts = document.createElement("div");
  texts.classList = "w-full flex flex-col gap-y-0.5 text-[10px]";
  detail.appendChild(texts);

  const header = document.createElement("div");
  header.classList = "flex items-center justify-between text-slate-300";
  texts.appendChild(header);

  const h3 = document.createElement("h3");
  h3.classList = "font-medium text-[11px]";
  h3.textContent = data.name;
  header.appendChild(h3);

  const button = document.createElement("button");
  button.textContent = data.badge;
  button.classList = `uppercase font-medium ${
    data.badge === "new" ? "bg-[#588FE3]" : "bg-[#FD356E]"
  } px-2 rounded-lg`;
  header.appendChild(button);

  const p = document.createElement("p");
  p.textContent = data.description;
  texts.appendChild(p);

  const time = document.createElement("time");
  time.textContent = data.time;
  texts.appendChild(time);

  details.appendChild(detail);
  randomImg += 2;
}

const allDetails = document.querySelectorAll(".detail");

function showHide(displayValue) {
  for (let i = 0; i < allDetails.length; i++) {
    if (i >= 5) {
      allDetails[i].style.display = displayValue;
    }
  }
}

showHide("none");

// onclick view
const view = document.querySelector("#view");

view.addEventListener("click", function () {
  if (view.innerHTML === "View More") {
    showHide("");
    view.textContent = "View Less";
  } else {
    showHide("none");
    view.textContent = "View More";
  }
});
