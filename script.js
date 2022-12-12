const container = document.querySelector("#container");
const button = document.querySelector('#newGrid');
button.addEventListener('click',newGrid);

function drawGrid(Length){
    for(let y = 0; y < Length; y++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let x = 0; x < Length; x++){
            const column = document.createElement('div');
            column.classList.add('column');
            column.addEventListener("mouseover",() => {column.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`});
            row.appendChild(column);
        }
    }   
}
function newGrid(){
    let choice = prompt("Enter number of squares per side (max 100)");
    if(choice > 100 || choice < 0) return;
    while (container.firstChild) { //removes all child nodes
        container.removeChild(container.lastChild);
    }
    drawGrid(choice);
}
drawGrid(16);
