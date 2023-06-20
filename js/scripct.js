let counter = document.querySelectorAll('.counter')
let arr =Array.from(counter)
arr.map((items)=>{
    let count=0;
    function counterUp() {
        count++
        items.innerHTML=count;
        if (items.dataset.number == count) {
            clearInterval(stopSet)
        }
    }
    let stopSet= setInterval(()=>{
       counterUp()
    },items.dataset.speed/items.dataset.number)
})