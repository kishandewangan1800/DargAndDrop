const input = document.getElementById("input");
const button = document.getElementById("button");
const addnewlist = document.getElementById("addlistitem")

const color = ["white", "yellow", "lightgreen"]
// const addList = document.querySelector(".main-list"); 

const lists = document.querySelector(".lists");

lists.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    if(e.target.classList.contains('list-item')){
        let flag = confirm("Want to delete List ?")
            if (flag) {
                e.target.remove();
            }
    }
})

lists.addEventListener("dblclick",(e)=>{
    e.preventDefault();
    if(e.target.classList.contains('list-item')){
        let name = prompt("Enter Name")
            if (name) {
                e.target.innerHTML = name;
            }
    }
})





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
        addnewlist.appendChild(div);
        input.value = "";
        
        updateList();
    }
})



updateList();

function updateList() {
    const list = document.querySelectorAll(".list");
    let listItem = document.querySelectorAll(".list-item");
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

        let x = 0;
        item.addEventListener("click", (e) => {
            // e.preventDefault();
            if (e.detail === 1) {
                if (x >= 2) {
                    x = -1;
                }
                setTimeout(()=>{
                item.style.backgroundColor = color[++x]
            },200)
            } else if (e.detail == 2) {
                item.style.backgroundColor = color[--x]
            }
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