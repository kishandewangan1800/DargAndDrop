const input = document.getElementById("input");
const button = document.getElementById("button");

const color = ["white", "yellow", "lightgreen"]
// const addList = document.querySelector(".main-list"); 

const list = document.querySelectorAll(".list");
let listItem = document.querySelectorAll(".list-item");


input.addEventListener("keydown", (e) => {

    if (e.keyCode === 13) {
        button.click();
    }
})

button.addEventListener("click", () => {
    if (input.value === "") {
        alert("Enter List Name")
    } else {
        const div = document.createElement("div");
        div.classList.add("list-item");
        div.draggable = true;
        div.innerHTML = input.value;
        list[0].appendChild(div);
        input.value = "";
        unpdate.disabled = false;
    }
})

const unpdate = document.getElementById("update")
unpdate.addEventListener("click",()=>{
        updatClick();
        updatedouble();
        updateDeletList();
        updateList();
        unpdate.disabled = true;
})


function updateDeletList() {
    listItem = document.querySelectorAll(".list-item")
    listItem.forEach(list => {
        list.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            let flag = confirm("Want to delete List ?")
            if (flag) {
                list.remove();
            }
        })
    })
}

function updatedouble() {
    listItem = document.querySelectorAll(".list-item")
    listItem.forEach(list => {
        list.addEventListener("dblclick", (e) => {
            e.preventDefault();
            let name = prompt("Enter Name")
            if (name) {
                list.innerHTML = name;
            }
        })
    })
}



function updatClick() {
    listItem = document.querySelectorAll(".list-item")
    listItem.forEach(list => {
        let x = 0;
        list.addEventListener("click", (e) => {
            // e.preventDefault();
            if (e.detail === 1) {
                if (x >= 2) {
                    x = -1;
                }
                list.style.backgroundColor = color[++x]
            } else if (e.detail == 2) {
                list.style.backgroundColor = color[--x]
            }
        })
    })
}


// updatClick();
// updatedouble();
// updateDeletList();
updateList();

function updateList() {
    listItem = document.querySelectorAll(".list-item")
    listItem.forEach(item => {
        item.addEventListener("dragstart", () => {
            draggedItem = item;
            // draggedItem.style.opacity = 0.1
            setTimeout(() => {
                item.style.display = "none"
            }, 0)
        });

        item.addEventListener("dragend", () => {
            setTimeout(() => {
                item.style.display = "flex"
                draggedIten = null;
            }, 0)
        })

        list.forEach(li => {
            li.addEventListener("dragover", (e) => {
                e.preventDefault();
                li.style.backgroundColor = "rgb(3, 110, 105)"
            });

            li.addEventListener("dreaenter", (e) => {
                e.preventDefault();
                // li.style.backgroundColor = "rgb(3, 110, 105)"
            });

            li.addEventListener("dragleave", (e) => {
                e.preventDefault();
                li.style.backgroundColor = "#43a791"
            })

            li.addEventListener("drop", (e) => {
                // draggedItem.style.opacity = 1;
                li.appendChild(draggedItem);

                li.style.backgroundColor = "#43a791"
            })
        })
    })
}