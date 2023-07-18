const container = document.querySelector("#container");
const button = document.querySelector('#newGrid');
const gridLines = document.querySelector('#gridLines');
const black = document.querySelector('#black');
const rainbow = document.querySelector('#rand');
let toggled = false;
let blackToggle = false;
button.addEventListener('click',newGrid);
black.addEventListener('click',toggleBlack);
rainbow.addEventListener('click',toggleBlack);
gridLines.addEventListener('click',gridLineToggle);

function toggleBlack(){
    if(blackToggle) {
        blackToggle = false;
        rainbow.classList.add('selected')
        black.classList.remove('selected')
    } else{
        blackToggle = true;
        rainbow.classList.remove('selected')
        black.classList.add('selected')
    }
}

function drawGrid(Length){
    for(let y = 0; y < Length; y++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for(let x = 0; x < Length; x++){
            const column = document.createElement('div');
            column.classList.add('column');
            column.addEventListener("mouseover",() => {if(blackToggle === false) column.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`; else column.style.backgroundColor = `rgb(0,0,0)`});
            row.appendChild(column);
        }
    }   
}
function newGrid(){
    let choice = prompt("Enter number of squares per side (max 100)");
    if(choice > 100 || choice < 0 || choice % 1 !== 0)return;
    while (container.firstChild) { //removes all child nodes
        container.removeChild(container.lastChild);
    }
    toggled = true
    drawGrid(choice);
    gridLineToggle();
}
function gridLineToggle(){
    const columns = document.querySelectorAll('.column');
    if(toggled === false){
        columns.forEach(column => {
            column.style.border = "0px";
        });
        gridLines.style.backgroundColor = "green";
        gridLines.textContent = "Enable Gridlines";
        toggled = true;
    }
    else{
        columns.forEach(column => {
            column.style.border = "solid 0.25px rgb(209, 209, 209)";
        });
        gridLines.style.backgroundColor = "red";
        gridLines.textContent = "Disable Gridlines";
        toggled = false;
    }
}
drawGrid(16);
