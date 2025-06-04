import { tagMaker } from "./tag_maker";

export const about = function() {
    const content = tagMaker("div", "carousell-wrapper");
    const btnPrev = tagMaker("button", "carousell-prev-button");
    const btnNext = tagMaker("button", "carousell-next-button");

    btnPrev.content = "Green";
    btnNext.content = "Blue";
    content.appendChild(btnPrev);
    content.appendChild(btnNext);
    return content;
}