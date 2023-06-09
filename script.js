console.log("Here we learn about drag and drop");

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart', (e) => {
    console.log("Drag start has been triggered");
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});
 
imgBox.addEventListener('dragend', (e) => {
    console.log("DragEnd has been triggered");
    e.target.className = 'imgBox';
})

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("Drag over has been triggered");
    });
    whiteBox.addEventListener('dragenter', (e) => {
        console.log("DragEnter has been triggered");
        e.target.className += ' dashed';
    });
    whiteBox.addEventListener('dragleave', (e) => {
        console.log("Dragleave has been triggered");
        e.target.className = 'whiteBox';
    });

    whiteBox.addEventListener('drop', (e) => {
        console.log("Drop has been triggered");
        e.target.append(imgBox);
    });
}