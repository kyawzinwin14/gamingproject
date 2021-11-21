const taskbar = document.querySelector("#task-bar");
const taskbars = document.querySelectorAll(".li");
const seeboxes = document.querySelectorAll(".seebox");

let already;

taskbar.addEventListener("click", (e) => {
    hidenavbox();
    if (already === e.target.innerText) {
        if (already === e.target.innerText && e.target.className === "li") {
            e.target.className = "li see";
            already = e.target.innerText;
            shownavbox(e.target);
        } else {
            e.target.className = "li";
            already = e.target.innerText;
            hidenavbox();
            shownavbox(e.target);
        }
    } else {
        removesee();
        e.target.className = "li see";
        already = e.target.innerText;
        shownavbox(e.target);
    }
});

function removesee() {
    taskbars.forEach(taskbar => {
        if (taskbar.classList.contains("see")) {
            taskbar.classList.remove("see");
        }
    });
}

function shownavbox(a) {
    if (a.innerText === "Games " && a.classList.contains("see")) {
        seeboxes[0].className = "seebox game see1";
    } else if (a.innerText === "Hardwares " && a.classList.contains("see")) {
        seeboxes[1].className = "seebox hardware see1";
    } else if (a.innerText === "Services " && a.classList.contains("see")) {
        seeboxes[2].className = "seebox services see1";
    } else if (a.innerText === "News " && a.classList.contains("see")) {
        seeboxes[3].className = "seebox news see1"
    } else if (a.innerText === "Shop " && a.classList.contains("see")) {
        seeboxes[4].className = "seebox shop see1";
    } else if (a.innerText === "Support " && a.classList.contains("see")) {
        seeboxes[5].className = "seebox support see1";
    }
}

function hidenavbox() {
    let i;
    for (i = 0; i <= seeboxes.length - 1; i++) {
        if (seeboxes[i].classList.contains("see1")) {
            seeboxes[i].classList.remove("see1");
        }
    }
}

const coverboxes = document.querySelectorAll(".ps");
const previewboxes = document.querySelectorAll(".cp");
const preview = document.querySelector(".cover-preview");

let current = 0;

function slidecover() {
    removepv();
    hideslide();
    if (current === 0 || current === coverboxes.length) {
        current = 0;
        coverboxes[current].style.display = "flex";
    } else {
        coverboxes[current].style.display = "flex";
    }
    previewboxes[current].classList.add("see2");
    current++;
}

function removepv() {
    previewboxes.forEach(preview => {
        if (preview.classList.contains("see2")) {
            preview.classList.remove("see2");
        }
    });
}

function hideslide() {
    for (let i = 0; i < coverboxes.length; i++) {
        coverboxes[i].style.display = "none";
    }
}

preview.addEventListener("click", (e) => {
    removepv();
    e.target.classList.add("see2");
    switch (e.target.className) {
        case "cp cp1 see2":
            current = 0;
            break;
        case "cp cp2 see2":
            current = 1;
            break;
        case "cp cp3 see2":
            current = 2;
            break;
        default:
            current = 3;
            break;
    }
    slidecover();
});

slidecover();
setInterval(slidecover, 12000);

const hsboxes = document.querySelectorAll(".hs");
const hspres = document.querySelectorAll(".hs-pre");
const hspreview = document.querySelector(".hs-preview");

hspreview.addEventListener("click", (e) => {
    for (let a = 0; a < hsboxes.length; a++) {
        hsboxes[a].className = "hs";
        hspres[a].classList.remove("see3");
    }
    e.target.parentNode.classList.add("see3");
    switch (e.target.parentNode.className) {
        case "hs-pre hs1 see3":
            hsboxes[0].className = "hs see3";
            break;
        case "hs-pre hs2 see3":
            hsboxes[1].className = "hs see3";
            break;
        case "hs-pre hs3 see3":
            hsboxes[2].className = "hs see3";
            break;
        case "hs-pre hs4 see3":
            hsboxes[3].className = "hs see3";
            break;
        case "hs-pre hs5 see3":
            hsboxes[4].className = "hs see3";
            break;
        default:
            hsboxes[5].className = "hs see3";
            break;
    }
});

const nrleftbtn = document.querySelector(".left-btn");
const nrrightbtn = document.querySelector(".right-btn");

let nrsee, nrhide;

nrleftbtn.addEventListener("click", (e) => {
    nrsee = document.querySelector(".nr-see");
    nrhide = document.querySelector(".nr-hide");

    if (nrsee.className === "nr-box nr-box-1 nr-see") {
        nrsee.style.animation = "leftbtnh1 0.2s 1 ease";
        nrhide.style.animation = "leftbtns1 0.2s 1 ease";
        nrsee.classList.replace("nr-see", "nr-hide");
        nrhide.classList.replace("nr-hide", "nr-see");
    } else if (nrsee.className === "nr-box nr-box-2 nr-see") {
        nrsee.style.animation = "leftbtnh2 0.2s 1 ease";
        nrhide.style.animation = "leftbtns2 0.2s 1 ease";
        nrsee.classList.replace("nr-see", "nr-hide");
        nrhide.classList.replace("nr-hide", "nr-see");
    }
});

nrrightbtn.addEventListener("click", () => {
    nrsee = document.querySelector(".nr-see");
    nrhide = document.querySelector(".nr-hide");

    if (nrsee.className === "nr-box nr-box-1 nr-see") {
        nrsee.style.animation = "rightbtnh1 0.2s 1 ease";
        nrhide.style.animation = "rightbtns1 0.22s 1 ease";
        nrsee.classList.replace("nr-see", "nr-hide");
        nrhide.classList.replace("nr-hide", "nr-see");
    } else if (nrsee.className === "nr-box nr-box-2 nr-see") {
        nrsee.style.animation = "rightbtnh2 0.2s 1 ease";
        nrhide.style.animation = "rightbtns2 0.22s 1 ease";
        nrsee.classList.replace("nr-see", "nr-hide");
        nrhide.classList.replace("nr-hide", "nr-see");
    }
});