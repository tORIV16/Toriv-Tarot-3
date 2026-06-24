const contentBlock = document.querySelector("#content-area");
const fullscreenBlock = document.querySelector("#fullscreen-area")
function toTop () {window.scrollTo(0, 0)} ;

// --------TEMPLATES----------- //

const getElement = (block, attribute) => {
    return block.querySelector(attribute);
}

const getAllElements = (block, attribute) => {
    return [...block.querySelectorAll(attribute)];
}

const getTemplate = (id, selector) => {
    return document.querySelector(id).content.querySelector(selector);
}

const getTemplateClone = (id, selector) => {
    return document.querySelector(id).content.querySelector(selector).cloneNode(true);
}

const clearLog = (element) => {
    const deleteItems = [...element.children];
    deleteItems.forEach(item => {
        item.remove();
    })
}

const mainTitlePage = getTemplateClone("#welcome-title-template", ".welcome-title__container");
const shuffling = getTemplateClone("#shuffling-template", ".shuffling__container");
contentBlock.append(mainTitlePage);

const startButton = contentBlock.querySelector(".welcome-title__button")
const welcomePage = startButton.addEventListener("click", () => {
    toTop();
    clearLog(contentBlock);
    const welcomeTemplate = getTemplateClone("#welcome-template", ".welcome-card__container");
    const cardSelection = getTemplateClone("#card-selection-template", ".card-selection__container");
    
    contentBlock.append(welcomeTemplate, cardSelection);
    const aboutTarotButton = getElement(contentBlock, ".welcome-card__more-button");
    const oneCardPull = getElement(contentBlock, ".card-selection__card--emerald");
    const threeCardPull = getElement(contentBlock, ".card-selection__card--gold");
    const fiveCardPull = getElement(contentBlock, ".card-selection__card--diamond");

    aboutTarotButton.addEventListener("click", () => {
        const welcomeSpeech = contentBlock.querySelector(".welcome-card__speech-bubble_content")
        const moreAboutTemplate = getTemplateClone("#more-about-tarot-template", ".more-about-tarot__container");

        clearLog(welcomeSpeech);
        
        welcomeSpeech.classList.add("size-l");
        welcomeSpeech.scrollTop=0;
        welcomeSpeech.append(moreAboutTemplate);

        aboutTarotButton.disabled=true;
    });

    oneCardPull.addEventListener("click", () => {

        clearLog(contentBlock);
        contentBlock.append(shuffling);window.scrollTo({
                top: 50% 0,
                behavior: "smooth"
            });




        setTimeout(() => {
            clearLog(contentBlock);
            const pickACard = Math.floor(Math.random() * tarotCards.length);
            const randomFortune = Math.floor(Math.random() * fortuneCookie.length);
            
            const selectedTarotCard = tarotCards[pickACard];
            const selectedfortune = fortuneCookie[randomFortune];

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            const oneCardTemplate = getTemplateClone("#one-card-reading-template", ".one-card-reading__container");
            const openCard =getElement(oneCardTemplate, ".one-card-reading__card");
            const oneCardImage = getElement(oneCardTemplate, ".one-card-reading__card-image");
            const oneCardName = getElement(oneCardTemplate, ".one-card-reading__card-details--name");
            const oneCardIsReversed = getElement(oneCardTemplate, ".one-card-reading__card-details--isreversed");
            const oneCardKeywords = getElement(oneCardTemplate, ".one-card-reading__card-details--keywords");
            const oneCardDescription = getElement(oneCardTemplate, ".one-card-reading__card-details--description");
            const oneCardReading = getElement(oneCardTemplate, ".one-card-reading__card-insight");
            const readingMeaning = getElement(oneCardReading, ".one-card-reading__card-insight--card-insight");
            const readingFortune = getElement(oneCardReading, ".one-card-reading__card-insight--fortune-insight");
            const readingFortuneRemark = getElement(oneCardReading, ".one-card-reading__card-insight--fortune-remark");

            if (selectedTarotCard.side === "B") {
                oneCardImage.classList.add("reversed")
                oneCardIsReversed.classList.remove("is__not-visible");
            } else {
                oneCardImage.classList.add("rightside");
            }
            oneCardImage.src = selectedTarotCard.image;
            oneCardImage.alt = selectedTarotCard.name;
            oneCardName.append(selectedTarotCard.name);
            oneCardKeywords.append(selectedTarotCard.keyword);
            oneCardDescription.append(selectedTarotCard.meaning);
            readingMeaning.append(selectedTarotCard.message);
            readingFortune.append(selectedfortune.fortune);
            readingFortuneRemark.append(selectedfortune.remark);



            contentBlock.append(oneCardTemplate, cardSelection);

            openCard.addEventListener("click", () => {
                fullscreenBlock.classList.toggle("is__not-visible");
                fullscreenBlock.classList.toggle("appear");
                const fullscreenModal = getTemplateClone("#card-focus-template", ".card-focus__container");
                const imageFullscreen = getElement(fullscreenModal, ".card-focus__card");
                const detailsFullscreen = getElement(fullscreenModal, ".card-focus__details");
                const exitFullscreenBtn = getAllElements(fullscreenModal, ".exit");
                imageFullscreen.src = selectedTarotCard.image;
                imageFullscreen.alt = selectedTarotCard.name;
                detailsFullscreen.append(selectedTarotCard.keyword);

                fullscreenBlock.append(fullscreenModal);
                exitFullscreenBtn.forEach(item => item.addEventListener("click", () => {
                    setTimeout(() => {
                        clearLog(fullscreenBlock);
                        fullscreenBlock.classList.toggle("is__not-visible");
                    }, 250);
                }));
            });


        }, 6000);
    })
});

