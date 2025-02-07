const grid = document.querySelector("#grid");


function createSquare(){
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("style", "border: solid; flex: 1 1 0;");
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



createGrid();