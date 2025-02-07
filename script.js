const grid = document.querySelector("#grid");


function createSquare(){
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("style", "border: solid; flex: 1 1 0;");
    square.addEventListener("mouseover", (event)=>{
        event.target.style.background = "black";
    });
    return square;
}

function createRow(squares = 16){
    const row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("style", "display: flex; flex: 1 1 0;");
    for (let i = 0; i < squares; i++){
        const square = createSquare();
        row.appendChild(square);
    }
    return row;
}

function createGrid(rows = 16){
    const body = document.querySelector("body");
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.setAttribute("style", "width: 960px; height: 960px; display: flex; flex-direction: column;");
    for (let i = 0; i < rows; i++){
        const row = createRow(rows);

        grid.appendChild(row);
    }
    body.appendChild(grid);
}

const button = document.querySelector("button");
button.addEventListener("click", () =>{
    let input = prompt("How many squares would you like in one side of the grid?\nPlease enter a value from 1-100");
    while (!isValidNumber(input)){
        input = prompt("Invalid input.\nHow many squares would you like in one side of the grid?\nPlease enter a value from 1-100");
    }
    if (input == null){
        return;
    }
    const body = document.querySelector("body");
    const grid = document.querySelector(".grid");
    body.removeChild(grid);
    createGrid(input);
});

function isValidNumber(value){
    if (value == null){
        return true;
    }
    if (!Number.isNaN(value)){
        if (value > 0 && value < 101){
            return true;
        }
    }
    return false;
}

createGrid();