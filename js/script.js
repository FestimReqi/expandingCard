
const panels = document.querySelectorAll('.plan')


panels.forEach((panels) => {
    panels.addEventListener('click', () =>{
        removeActiveClasses();
        panels.classList.add('active')
    })
})


function removeActiveClasses() {
    panels.forEach(panels =>{
        panels.classList.remove('active');
    })
}

// change bg

let bgColor = ["#03001C" , "#2C3333","#150050","#A13333","#FEC260"]
let i = 0;

document.querySelector('button').addEventListener('click', function(){
    i = i < bgColor.length ? ++i  : 0;
    document.querySelector('body').style.backgroundColor = bgColor[i];
})
