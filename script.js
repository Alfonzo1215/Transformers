var wrapper = document.body.querySelector(".wrapper");
function transformers() {
  var chrs = [
    {
      name: "Optimus Prime",
      class: "leader",
      afl: "autobot",
      vehicle: "truck"
    },
    {
      name: "Megatron",
      class: "leader",
      afl: "decepticon",
      vehicle: "tank"
    },
    {
      name: "Bumblebee",
      class: "scout",
      afl: "autobot",
      vehicle: "car"
    },
    {
      name: "Starscream",
      class: "scout",
      afl: "decepticon",
      vehicle: "plane"
    },
    {
      name: "Ironhide",
      class: "soldier",
      afl: "autobot",
      vehicle: "truck"
    },
    {
      name: "Brawl",
      class: "soldier",
      afl: "decepticon",
      vehicle: "tank"
    }
  ];

  for (var i = 0; i < chrs.length; i++) {
    var pEle = document.createElement("div");
    var nameEle = document.createElement("h4");
    var classEle = document.createElement("h4");
    var vehicleEle = document.createElement("h4");
    var logoEle = document.createElement("img");
    pEle.classList.add("character");

    //Colors based on vehicle type//
    if (chrs[i].vehicle == "tank") {
      vehicleEle.style.color = "green";
    } else if (chrs[i].vehicle == "plane") {
      vehicleEle.style.color = "white";
    } else if (chrs[i].vehicle == "truck") {
      vehicleEle.style.color = "blue";
    } else if (chrs[i].vehicle == "car") {
      vehicleEle.stylecolor = "gold";
    }

    nameEle.innerHTML = "Name " + chrs[i].name;
    vehicleEle.innerHTML = "Vehicle " + chrs[i].vehicle;
    classEle.innerHTML = "Class " + chrs[i].class;

    if (chrs[i].afl == "autobot") {
      logoEle.setAttribute(
        "src",
        "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png"
      );
      pEle.classList.add("autobot");
    } else if (chrs[i].afl == "decepticon") {
      logoEle.setAttribute(
        "src",
        "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png"
      );
      pEle.classList.add("decepticon");
    }

    pEle.appendChild(nameEle);
    pEle.appendChild(classEle);
    pEle.appendChild(vehicleEle);
    pEle.appendChild(logoEle);
    wrapper.appendChild(pEle);
  }
}

transformers();