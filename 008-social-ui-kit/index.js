const mainLogo = document.getElementById("mainLogo");
const profile = document.getElementById("profile");
const notifications = document.getElementById("notifications");
const gallery = document.getElementById("gallery");
const nav = document.getElementById("nav");
const about = document.getElementById("about");

// Nav Links
const navProfile = document.getElementById("navProfile");
const navGallery = document.getElementById("navGallery");
const navNotifications = document.getElementById("navNotifications");
const navAbout = document.getElementById("navAbout");

const datas = [
  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Kp Oli",
    description: "Lorem ipsum dolor sit oluptates, facere mollitia!",
    time: "2 hours ago",
  },
  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Sher Bahadur Deuba",
    description:
      "Lorem ipsum dolor eligendi saepe accusantium autem natus aliquam? Voluptates, facere mollitia!",
    time: "5 minutes ago",
  },
  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Balen Kc",
    description:
      "Lorem ipsum  autem natus aliquam? Voluptates, facere mollitia!",
    time: "5 hours ago",
  },
  {
    avatar: "https://i.pravatar.cc/48?img=",
    name: "Harka Singh",
    description:
      "Lorem ipsum dolor elit. accusantium autem natus aliquam? Voluptates, facere mollitia!",
    time: "55 minutes ago",
  },
];

for (let data of datas) {
  notifications.insertAdjacentHTML(
    "beforeend",
    `
      <div class="flex items-start gap-x-4">
              <img
                src=${data.avatar + data.name}
                class="rounded-full ring-4 ring-blue-900 cursor-pointer ring-blue-800"
              />
              <div class="text-white">
                <h3 class="font-bold">
                  ${data.name}
                  <time class="font-normal text-xs ml-4 text-blue-700"
                    > ${data.time} </time
                  >
                </h3>
                <p class="text-sm mt-1">
                  ${data.description}
                </p>
                <button class="mt-1 text-sm text-yellow-500">Reply</button>
              </div>
      </div>
      `
  );
}

mainLogo.addEventListener("click", function () {
  nav.classList.remove("hidden");
  mainLogo.classList.add("hidden");
});

function hide() {
  notifications.classList.add("hidden");
  gallery.classList.add("hidden");
  about.classList.add("hidden");
  profile.classList.add("hidden");
  navGallery.classList.remove(
    "text-slate-100",
    "stroke-slate-100",
    "border-b-2",
    "border-yellow-400"
  );
  navAbout.classList.remove(
    "text-slate-100",
    "stroke-slate-100",
    "border-b-2",
    "border-yellow-400"
  );
  navNotifications.classList.remove(
    "text-slate-100",
    "stroke-slate-100",
    "bg-blue-900"
  );
  navProfile.classList.remove("ring-blue-800");
}

navGallery.addEventListener("click", function () {
  hide();
  gallery.classList.remove("hidden");
  navGallery.classList.add(
    "text-slate-100",
    "stroke-slate-100",
    "border-b-2",
    "border-yellow-400"
  );
});

navAbout.addEventListener("click", function () {
  hide();
  about.classList.remove("hidden");
  navAbout.classList.add(
    "text-slate-100",
    "stroke-slate-100",
    "border-b-2",
    "border-yellow-400"
  );
});

navNotifications.addEventListener("click", function () {
  hide();
  notifications.classList.remove("hidden");
  navNotifications.classList.add(
    "text-slate-100",
    "stroke-slate-100",
    "bg-blue-900"
  );
});

navProfile.addEventListener("click", function () {
  hide();
  profile.classList.remove("hidden");
});
