const grid = document.querySelector(".gridContainer")

let x = prompt('enter in squares')





for (let i = 0; i<x; i++ ){
    const gridSquare = document.createElement("div")
    gridSquare.classList.add('grid-items');
    grid.appendChild(gridSquare)
}

const container = Array.from(document.querySelectorAll('.grid-items'));
container.forEach(key => key.addEventListener('mouseover', e =>{
    e.target.style.backgroundColor = 'red';
} ));

console.log(container)

function restart(){
    container.forEach(res => res.style.backgroundColor = "white")
}





