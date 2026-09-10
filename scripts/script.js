const contentBlock = document.querySelector("#content-area");
const fullscreenBlock = document.querySelector("#fullscreen-area")
const root = document.documentElement;
const glow = (color) => root.style.setProperty("--card-highlight", color);
function toTop () {window.scrollTo({top: 0, behavior: "smooth"})} ;


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

const startButton = contentBlock.querySelector(".welcome-title__button");
const cardSelection = getTemplateClone("#card-selection-template", ".card-selection__container");
const welcomeTemplate = getTemplateClone("#welcome-template", ".welcome-card__container");
const welcomePage = startButton.addEventListener("click", () => {
    toTop();
    clearLog(contentBlock);
    
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
            
    const newCard = getTemplateClone("#new-card-selection-template", ".new-card-selection__container");
    const newCardComment = getElement(newCard, ".new-card-selection__text-container_text");

    oneCardPull.addEventListener("click", () => {
        newCardComment.textContent = "";
        clearLog(contentBlock);
        toTop();
        contentBlock.append(shuffling);




        setTimeout(() => {
            toTop();
            clearLog(contentBlock);
            const pickACard = Math.floor(Math.random() * tarotCards.length);
            const randomFortune = Math.floor(Math.random() * fortuneCookie.length);
            
            const selectedTarotCard = tarotCards[pickACard];
            const selectedfortune = fortuneCookie[randomFortune];
            glow(selectedTarotCard.color);

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
            oneCardKeywords.append(selectedTarotCard.keyword.join(", "));
            oneCardDescription.append(selectedTarotCard.meaning);
            readingMeaning.append(selectedTarotCard.message);
            readingFortune.append(selectedfortune.fortune);
            readingFortuneRemark.append(selectedfortune.remark);
            newCardComment.append(conclusionReading[Math.floor(Math.random() * conclusionReading.length)], " ", newCardSegway[Math.floor(Math.random() * newCardSegway.length)]);

            contentBlock.append(oneCardTemplate, newCard, cardSelection);

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

    threeCardPull.addEventListener("click", () => {
        newCardComment.textContent = "";
        toTop();
        clearLog(contentBlock);
        
        contentBlock.append(shuffling);


        setTimeout(() => {
            clearLog(contentBlock);
            // Clears Keywords Array
            keywordsReading.length = 0;

            // Selects Three Random Cards
            const hand = [];
            let tension = 0;

            while (hand.length < 3) {
                const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
                const alreadyHave = hand.some(v => v.card === card.card && v.side === card.side);
                if (!alreadyHave) {
                    hand.push(card);
                    keywordsReading.push(card.keyword[Math.floor(Math.random() * card.keyword.length)])
                }
            }

            // Define Cards
            const mainCard = hand[1];
            const comingFromCard = hand[0];
            const movingforwardCard = hand[2];
            

            // Template
            const threeCardTemplate = getTemplateClone("#three-card-reading-template", ".three-card-reading__container");

            //  Collection of Buttons(Cards)
            const cardHand = getElement(threeCardTemplate, ".three-card-reading__card-hand");

            // Displayed Cards
            const myCards = getAllElements(cardHand, ".three-card-reading__card-image");

            for (let v = 0; v < hand.length; v++) {
                myCards[v].src = hand[v].image;
                myCards[v].alt = hand[v].altText;
                tension += hand[v].tension;
                if (hand[v].side === "B") {
                    myCards[v].classList.add("reversed");
                }  
                else {
                    myCards[v].classList.add("rightside");
                }
            }

            // Main Card Name
            const threeCardName = getElement(threeCardTemplate, ".three-card-reading__card-details--name");
            threeCardName.append(mainCard.name);

            // Main Card Description
            const threeCardDescription = getElement(threeCardTemplate, ".three-card-reading__card-details--description");
            threeCardDescription.append(mainCard.meaning);

            // READING
            const threeCardReading = getElement(threeCardTemplate, ".three-card-reading__card-insight");

            const mainReading = getElement(threeCardReading, ".three-card-reading__card-insight--card-insight-one");
            const middleReading = getElement(threeCardReading, ".three-card-reading__card-insight--card-insight-two");
            const adviceReading = getElement(threeCardReading, ".three-card-reading__card-insight--card-insight-three");
            const adviceReadingAdvice = getElement(threeCardReading, ".three-card-reading__card-insight--card-insight-advice");
            const adviceQuote = buildingAdviceQuotes(keywordsReading);

            if (tension == 0) {
                mainReading.append(openingLines[0][Math.floor(Math.random() * openingLines[0].length)], " ")
            } else if (tension > 0 && tension <= 5) {
                mainReading.append(openingLines[1][Math.floor(Math.random() * openingLines[1].length)], " ")
            } else if (tension > 5 && tension <= 10) {
                mainReading.append(openingLines[2][Math.floor(Math.random() * openingLines[2].length)], " ")
            } else if (tension > 10 && tension <= 15) {
                mainReading.append(openingLines[3][Math.floor(Math.random() * openingLines[3].length)], " ")
            }



            mainReading.append(mainCard.opener, " ", mainCard.message);
            middleReading.append(comingFromCard.bridge, " ", movingforwardCard.closer);
            adviceReading.append(adviceQuote[Math.floor(Math.random() * adviceQuote.length)], )
            adviceReadingAdvice.append(movingforwardCard.advice)
            newCardComment.append(conclusionReading[Math.floor(Math.random() * conclusionReading.length)], " ", newCardSegway[Math.floor(Math.random() * newCardSegway.length)]);

            contentBlock.append(threeCardTemplate, newCard, cardSelection);


        }, 6000);




            

    });

    fiveCardPull.addEventListener("click", () => {
        newCardComment.textContent = "";
        toTop();
        clearLog(contentBlock);
        
        contentBlock.append(shuffling);
        setTimeout(() => {
            clearLog(contentBlock);
            // Clears Keywords Array
            keywordsReading.length = 0;

            // Selects five Random Cards
            const hand = [];
            let tension = 0;

            while (hand.length < 5) {
                const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
                const alreadyHave = hand.some(v => v.card === card.card && v.side === card.side);
                if (!alreadyHave) {
                    hand.push(card);
                    keywordsReading.push(card.keyword[Math.floor(Math.random() * card.keyword.length)])
                }
            }
            console.log(hand);

            // Define Cards
            const comingFromCardOne = hand[0];
            const comingFromCardTwo = hand[1]
            const mainCard = hand[2];
            const movingforwardCardOne = hand[3];
            const movingforwardCardTwo = hand[4];

            
            // Template
            const fiveCardTemplate = getTemplateClone("#five-card-reading-template", ".five-card-reading__container");

            //  Collection of Buttons(Cards)
            const cardHand = getElement(fiveCardTemplate, ".five-card-reading__card-hand");

            // Displayed Cards
            const myCards = getAllElements(cardHand, ".five-card-reading__card-image");
            console.log(myCards);

            for (let v = 0; v < hand.length; v++) {
                myCards[v].src = hand[v].image;
                myCards[v].alt = hand[v].altText;
                tension += hand[v].tension;
                if (hand[v].side === "B") {
                    myCards[v].classList.add("reversed");
                }  
                else {
                    myCards[v].classList.add("rightside");
                }
            }

            // Main Card Name
            const fiveCardName = getElement(fiveCardTemplate, ".five-card-reading__card-details--name");
            fiveCardName.append(mainCard.name);

            // Main Card Description
            const fiveCardDescription = getElement(fiveCardTemplate, ".five-card-reading__card-details--description");
            fiveCardDescription.append(mainCard.meaning);

            // READING
            const fiveCardReading = getElement(fiveCardTemplate, ".five-card-reading__card-insight");

            const introReading = getElement(fiveCardReading, ".five-card-reading__card-insight--card-intro");
            const mainReading = getElement(fiveCardReading, ".five-card-reading__card-insight--card-insight");

            if (tension == 0) {
                mainReading.append(openingLinesTwo[0][Math.floor(Math.random() * openingLinesTwo[0].length)], " ")
            } else if (tension > 0 && tension <= 8) {
                mainReading.append(openingLinesTwo[1][Math.floor(Math.random() * openingLinesTwo[1].length)], " ")
            } else if (tension > 8 && tension <= 16) {
                mainReading.append(openingLinesTwo[2][Math.floor(Math.random() * openingLinesTwo[2].length)], " ")
            } else if (tension > 16 && tension <= 25) {
                mainReading.append(openingLinesTwo[3][Math.floor(Math.random() * openingLinesTwo[3].length)], " ")
            }


            introReading.append(readingSegues[Math.floor(Math.random() * readingSegues.length)]);
            mainReading.append(
                comingFromCardOne.spreadFocus, " ",
                comingFromCardTwo.spreadChallenge, " ",
                mainCard.spreadAdvice, " ",
                movingforwardCardOne.spreadSuccess, " ",
                movingforwardCardTwo.spreadMoveForward
            );



            newCardComment.append(conclusionReading[Math.floor(Math.random() * conclusionReading.length)], " ", newCardSegway[Math.floor(Math.random() * newCardSegway.length)]);

            contentBlock.append(fiveCardTemplate, newCard, cardSelection);


        }, 6000);

    });
});

