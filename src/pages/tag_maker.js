export const tagMaker = function(tag, classes) {
    const tag = document.childElement(tag);
    classes.forEach(element => {
        tag.className += element;
    });
    return tag;
}