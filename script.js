const container = document.querySelector("#container");
for(let y = 0; y < 16; y++){
    for(let x = 0; x < 16; x++){
        const pixel = document.createElement('div');
        pixel.innerHTML = "hello";
        container.appendChild(pixel);
        console.log('help');
    }
}