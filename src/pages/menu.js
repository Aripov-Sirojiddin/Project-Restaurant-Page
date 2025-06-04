import { tagMaker } from "./tag_maker";

export const menu = function() {
    const content = tagMaker("div", "carousell-wrapper");
    const btnPrev = tagMaker("button", "carousell-prev-button");
    const btnNext = tagMaker("button", "carousell-next-button");

    btnPrev.content = "933";
    btnNext.content = "449";
    content.appendChild(btnPrev);
    content.appendChild(btnNext);
    return content;
}