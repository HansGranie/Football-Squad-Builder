const gk = document.getElementById("gk_click")
const list = document.getElementById("list")
gk.addEventListener("click", Assign_Player)

function Assign_Player() {
    if (list.style.display=="none") {
        list.style.display="flex";
        list.innerHTML = ""
        for (let i = 0; i < gk_list.length; i++) { 
            let sel_gk = gk_list[i]
            const square = document.createElement("div");
            square.classList.add("select")
            list.appendChild(square) 
            const info = document.createElement("div")
            info.classList.add("box_small")
            square.appendChild(info)
            info.setAttribute("id", "infobox")
            const ovr = document.createElement("div")
            ovr.classList.add("box_text")
            info.appendChild(ovr)
            ovr.textContent = sel_gk.ovr
            const name = document.createElement("div")
            name.classList.add("box_text")
            info.appendChild(name)
            name.textContent = sel_gk.name
            const flag = document.createElement("img")
            flag.setAttribute("src", flags[sel_gk.nation])
            info.appendChild(flag)
            const badge = document.createElement("img")
            badge.setAttribute("src", badges[sel_gk.club])
            info.appendChild(badge)
            const stat = document.createElement("div"); 
            stat.classList.add("box_large") 
            square.appendChild(stat) 
            for (let i = 0; i < 6; i++) {
                const text = document.createElement("div")
                text.classList.add("box_text")
                stat.appendChild(text)
                text.textContent = stats_gk[i].toUpperCase()
            }
            for (let i = 0; i < 6; i++) {
                const text = document.createElement("div")
                text.classList.add("box_text")
                stat.appendChild(text)
                text.textContent = sel_gk[stats_gk[i]]
            }
            square.setAttribute("id", sel_gk.name)
            square.addEventListener("click", () => {Input_Player(square.id);})
        }
    }
    else {
        list.style.display="none";
    }
}

function Input_Player(sel_player) {
    console.log("Działa")
    const label = document.createElement("h1")
    label.textContent = sel_player
    const select = document.getElementById("gk")
    select.appendChild(label)
    list.style.display="none";
}

const gk_list = [{
    name: "David Raya",
    nation: "Spain",
    club: "Arsenal",
    "div": 86,
    "han": 84,
    "kic": 87,
    "ref": 87, 
    "spd": 62,
    "pos": 85,
    "ovr": 87,
},{
    name: "Joan Garcia",
    nation: "Spain",
    club: "FC Barcelona",
    "div": 81, 
    "han": 82,
    "kic": 77,
    "ref": 86,
    "spd": 46,
    "pos": 83,
    "ovr": 83,
}] 

const flags = {
    "Spain" : "https://flagsapi.com/ES/flat/64.png",
}

const badges = {
    "Arsenal" : "Arsenal2.png",
    "FC Barcelona" : "FC Barcelona.png",
}

const stats_gk = ["div", "han", "kic", "ref", "spd", "pos", "ovr"]
