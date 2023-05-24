const pixelgrid = document.querySelector('.pixelgrid')
const sizeGrid = document.querySelector('.size')
let size = sizeGrid.value 
const color = document.querySelector('.color')
const resetButton = document.querySelector('.button')
let draw = false 

function increase(size) {
    pixelgrid.style.setProperty('--grid_size', size)
    for(let i=0; i < size * size; i++){
        const div = document.createElement('div')
        div.classList.add('pixel')

        div.addEventListener('mouseover', function() {
            if (!draw) { return } 
            div.style.backgroundColor = color.value
        })
        div.addEventListener('mousedown', function() {
            div.style.backgroundColor = color.value
        })
        pixelgrid.appendChild(div)

    }
    
}

window.addEventListener('mousedown', function() {
    draw = true
})

window.addEventListener('mouseup', function() {
    draw = false 
})

function reset() {
    pixelgrid.innerHTML = ''
    increase(size)
}

resetButton.addEventListener('click', reset)

sizeGrid.addEventListener('keyup', function() {
    size = sizeGrid.value
    reset()
})
increase(size)