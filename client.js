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
            <p> You have pressed the button
            ${incNum} times!</p>
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
  console.log($(this).parent());
  $(this).parent().toggleClass('yellow');
  
}

function deleter () {
    $(this).parent().empty();
    
}