const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const cardContainer = document.getElementById("card-container");

for (let i = 0; i < teamMembers.length; i++) {
  console.log(i)
  cardContainer.innerHTML += `
            <!-- col -->
            <div class="col-span-full sm:col-span-2 md:col-span-4">
                <!-- card -->
                <div class="flex flex-col lg:flex-row justify-between items-center rounded-md overflow-hidden p-4u max-lg:pb-7u lg:pr-7u bg-white border-1 border-smoke-100 gap-5u shadow-md shadow-smoke-100">
                    <!-- img -->
                    <figure class="w-full self-stretch max-lg:max-h-60u lg:w-[48%] overflow-hidden rounded">
                        <img src="${teamMembers[i].img}" alt="${teamMembers[i].name}" class="img-responsive">
                    </figure>
                    <!-- card info -->
                    <div class="flex flex-col gap-2u w-full">
                        <p class="font-semibold text-2xl">${teamMembers[i].name}</p>
                        <p class="px-3u py-u bg-blue-50 text-blue-500 rounded-full self-start text-sm">${teamMembers[i].role}</p>
                        <a href="#" class="text-indigo-500 font-medium">${teamMembers[i].email}</a>
                    </div>
                </div>
            </div>
  `;

}