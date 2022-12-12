const container = document.querySelector("#container");
let heightandwidth = 16;
for(let y = 0; y < heightandwidth; y++){
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for(let x = 0; x < heightandwidth; x++){
        const column = document.createElement('div');
        column.classList.add('column');
        column.addEventListener("mouseover",() => {column.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`});
        row.appendChild(column);
    }
}