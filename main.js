
const ratingContainer = document.querySelector('.rating');
let  currentValue = 0;
const limit = 5;

const html = Array.from(Array(limit).map((_, i) => {
    return `<div class = "item item-${i}" data-pose="${i}"></div>`;
}));

ratingContainer.innerHTML = html.join('');

document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('mouseaver', e =>{

        const pos = item.getAttribute('data-pos');
        if(currentValue === parseInt(pos)+1){
            return;
        }

        document.querySelector('.item').forEach(it =>{
            if (it.classList.contains("item-full")) {
                it.classList.remove("item-full")
                
            }
        })

        for (let i = 0; i < pos; i++) {
            const square = DOMStringList.querySelector(`.item-${i}`);
            if (!square.classList.contains("item-full")) {
                square.classList.add("item-full");
                
            }
            
        }
        currentValue = parseInt(pos) + 1;
    });

    item.addEventListener("Click", (e) => {
        const pos = item.getAttribute("data-pos");
        currentValue = parseInt(pos) + 1;
        console.log(currentValue);
    })
});