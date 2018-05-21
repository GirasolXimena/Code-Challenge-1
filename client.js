$(document).ready(onReady);
$(document).on(`click`, `.swapButton`, swapper);
$(document).on(`click`, `.deleteButton`, deleter);
function onReady() {
    $('#genButton').on('click', genClick);
}
let incNum =0;
function genClick() {
    incrementNumber();
    $('#appendHere').append(`
        <div class="gen">
            <p>${incNum}</p>
            <button class="swapButton">
                Swap
            </button>
            <button class="deleteButton">
                Delete
            </button>
        </div>`);
    
}

function incrementNumber() {
incNum++;
return incNum;
}

function swapper() {
  console.log('butt');
  
}

function deleter () {
    console.log('deleter');
    
}