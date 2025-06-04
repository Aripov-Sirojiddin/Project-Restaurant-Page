export const tagMaker = function(name, classes) {
    const tag = document.createElement(name);
    classes.forEach(element => {
        tag.className += element;
    });
    return tag;
}