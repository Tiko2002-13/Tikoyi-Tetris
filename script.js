const rowCount = 20;
const columnCount = 10;
const container = document.querySelector(".container");
let activeElements = [];
let item = 1;
let num = 1;
let obj = {};
const arr = [];

function createBlock() {
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < columnCount; j++) {
            const element = document.createElement("div");
            element.classList.add("kubik");
            container.append(element);
            const number = i * columnCount + j;
            element.dataset.number = number;
            if (activeElements.includes(number)) {
                element.classList.add("type" + (index + 1));
            }
        }
    }
}

function moveBlock(direction, offset) {
    if (activeElements.every(num => num % 10 !== 0 || arr.includes(num + offset))) return;
    activeElements = activeElements.map(num => num + offset);
    createBlock();
}

document.body.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
        moveBlock("down", columnCount);
    } else if (event.key === "ArrowLeft") {
        moveBlock("left", -1);
    } else if (event.key === "ArrowRight") {
        moveBlock("right", 1);
    }
});
