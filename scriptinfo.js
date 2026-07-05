// Space To Include User's Spiritual Input
const userSpiritualInput = [];
const SpiritualInput = [];

// Array of Tarot Cards and Meaning
const tarotCards = [
    // The Major Arcana
    {
        card: 1,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/00-TheFool.jpg",
        name: "0 - The Fool",
        keyword: ["Beginnings", "Freedom", "Innocence"],
        meaning: "One who is enthusiastic but inattentive to details. Immature and Carefree, yet Pure of Heart.",
        message: "you're standing on the edge of something new, urging you to trust your intuition and step forward without fear of the unknown.",
        opener: "The reading opens with The Fool, stepping toward the edge of something new with wide-eyed hope.",
        bridge: "Alongside this, The Fool brings a fearless, open-hearted energy into the mix.",
        closer: "and the reading settles into The Fool's quiet reminder that some things are better leapt into than overthought.",
        advice: "Say yes to the thing that scares you a little. You don't need the whole plan figured out to take the first step.",
        color: "#FFD966",
        altText: "A young traveler in bright clothing steps toward a cliff's edge, a small white dog at their heels, a bindle over one shoulder, sun shining behind them.",
        dailyMemo: "Today favors spontaneity over planning. A new opportunity may show up looking unpolished or unexpected — don't dismiss it just because it doesn't fit the plan you had in mind."
    },
    {
        card: 1,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/00-TheFool.jpg",
        name: "0 - The Fool",
        keyword: ["Carelessness", "Recklessness", "Naivety"],
        meaning: "Poor Evaluations, Carelessness.",
        message: "you're neglecting important details or acting impulsively without fully considering the consequences.",
        opener: "The reading opens with The Fool reversed, a warning to slow down before the details slip past unnoticed.",
        bridge: "Alongside this, The Fool reversed adds a note of carelessness creeping into the picture.",
        closer: "and the reading closes with The Fool reversed cautioning against leaping before looking.",
        advice: "Slow down before you commit. A few extra minutes of thought now could save you a bigger mess later.",
        color: "#B08D57",
        altText: "The same young traveler stands at the cliff's edge, but off-balance and distracted, looking away from the drop just ahead.",
        dailyMemo: "Today carries a risk of overlooking something important. Double-check details before sending, signing, or committing to anything that matters."
    },
    {
        card: 2,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/01-TheMagician.jpg",
        name: "I - The Magician",
        keyword: ["Manifestation", "Power", "Skill"],
        meaning: "With Wisdom and Skill, He Harnesses Energy into Force, and Force into Power for the Benefit of Mankind.",
        message: "you're being reminded of your inner power and ability to manifest your desires through skill and intention.",
        opener: "The reading opens with The Magician, hands raised and ready to turn thought into action.",
        bridge: "Alongside this, The Magician adds a spark of focused, deliberate power.",
        closer: "and the reading closes with The Magician's reminder that you already hold every tool you need.",
        advice: "Stop waiting for permission. You have the skill — use it today.",
        color: "#E63946",
        altText: "A figure stands at a table with one hand raised skyward and one pointed to the earth, symbols of the four suits laid before him, an infinity symbol glowing above his head.",
        dailyMemo: "Today rewards initiative. If you've been sitting on an idea, this is a good day to act on it rather than wait."
    },
    {
        card: 2,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/01-TheMagician.jpg",
        name: "I - The Magician",
        keyword: ["Misuse", "Manipulation", "Destruction"],
        meaning: "Misuse of One's Power for Destructive Purposes.",
        message: "you're cautioned against using your abilities or influence in manipulative or destructive ways.",
        opener: "The reading opens with The Magician reversed, power present but pointed in the wrong direction.",
        bridge: "Alongside this, The Magician reversed hints at talent being misused or wasted.",
        closer: "and the reading closes with The Magician reversed asking you to check your intentions before you act.",
        advice: "Pause before you use your influence. Ask who actually benefits from what you're about to do.",
        color: "#8B4049",
        altText: "The same figure at the table, but the tools lie scattered and unused, his focus turned away from them.",
        dailyMemo: "Today carries a risk of manipulation, either being on the receiving end, or catching yourself bending the truth to get what you want."
    },
    {
        card: 3,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/02-TheHighPriestess.jpg",
        name: "II - The High Priestess",
        keyword: ["Intuition", "Secrets", "Wisdom"],
        meaning: "Penetrating Intuition and Foresight are aspects of Her Wisdom and Mystery. Her Acute Mind could be applied to The Sciences.",
        message: "it's time to listen deeply to your intuition and acknowledge the wisdom hidden beneath the surface.",
        opener: "The reading opens with The High Priestess, quietly guarding a knowledge that can't be rushed.",
        bridge: "Alongside this, The High Priestess adds a layer of intuition and unspoken understanding.",
        closer: "and the reading closes with The High Priestess urging you to trust what you sense but can't yet explain.",
        advice: "Don't force an answer today. Sit with the question a little longer — clarity is close but not instant.",
        color: "#4A5D8A",
        altText: "A veiled woman is seated between two pillars, a crescent moon at her feet, a scroll of hidden knowledge resting in her lap.",
        dailyMemo: "Today favors quiet observation over action. Pay attention to what's unsaid in conversations around you."
    },
    {
        card: 3,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/02-TheHighPriestess.jpg",
        name: "II - The High Priestess",
        keyword: ["Impatience", "Superficial", "Disconnected"],
        meaning: "Impatient, Self-Centered, Superficial in Knowledge.",
        message: "you're ignoring your deeper intuition, causing disconnection and superficial understanding.",
        opener: "The reading opens with The High Priestess reversed, her deeper knowing pushed to the side.",
        bridge: "Alongside this, The High Priestess reversed brings a note of surface-level thinking or restlessness.",
        closer: "and the reading closes with The High Priestess reversed asking you to slow down and listen inward again.",
        advice: "Resist the urge to skim past this. The answer you want is beneath the surface, not on top of it.",
        color: "#7A7D85",
        altText: "The same veiled figure, distracted, her scroll closed and set aside.",
        dailyMemo: "Today may feel scattered or impatient. Try not to make big decisions until you've had a moment of real quiet."
    },
    {
        card: 4,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/03-TheEmpress.jpg",
        name: "III - The Empress",
        keyword: ["Nurturing", "Abundance", "Growth"],
        meaning: "Wife, Mother, Companion. Through Warmth and Devotion, She Brings Pleasure and Comfort to her loved ones. Finds Practical Application and Purposes for Ideas.",
        message: "you're encouraged to nurture yourself and others, recognizing the abundance and beauty in your surroundings.",
        opener: "The reading opens with The Empress, surrounded by abundance and warmth.",
        bridge: "Alongside this, The Empress adds nurturing, fertile energy to the spread.",
        closer: "and the reading closes with The Empress reminding you that growth needs care, not force.",
        advice: "Give yourself the same care you'd give someone you love. Rest counts as productivity today.",
        color: "#8FA876",
        altText: "A regal woman reclines in a lush garden surrounded by wheat and abundant nature, a crown of stars resting on her head.",
        dailyMemo: "Today favors comfort, creativity, and connection. A good day for gentle progress rather than pushing hard."
    },
    {
        card: 4,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/03-TheEmpress.jpg",
        name: "III - The Empress",
        keyword: ["Selfishness", "Imbalance", "Demands"],
        meaning: "Demands Much to be Given and Little Returned.",
        message: "you're focusing too much on your own needs or experiencing imbalance in how you give and receive care.",
        opener: "The reading opens with The Empress reversed, abundance blocked by neglect or imbalance.",
        bridge: "Alongside this, The Empress reversed brings a note of depletion or one-sided giving.",
        closer: "and the reading closes with The Empress reversed asking where you've stopped taking care of yourself.",
        advice: "Check what you're giving away for free. It's okay to keep something for yourself today.",
        color: "#7C8265",
        altText: "The same garden, overgrown and untended, the woman turned inward and withholding.",
        dailyMemo: "Today may feel draining if you're pouring into others without refilling your own cup. Watch for burnout signs."
    },
    {
        card: 5,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/04-TheEmperor.jpg",
        name: "IV - The Emperor",
        keyword: ["Authority", "Structure", "Control"],
        meaning: "A Mature Man with Conviction and the Ability to Execute Plans and Ideas. He Maintains an Overview of All Situations with Stability, Control, and Reason.",
        message: "you're called to step into your power, create structure, and confidently guide situations to success.",
        opener: "The reading opens with The Emperor, steady and unshaken, ready to bring order.",
        bridge: "Alongside this, The Emperor adds structure and firm resolve to the spread.",
        closer: "and the reading closes with The Emperor's call to lead with clarity and discipline.",
        advice: "Set the boundary you've been avoiding. Structure isn't the enemy of freedom here — it's what makes it possible.",
        color: "#C1440E",
        altText: "A stern ruler sits on a stone throne carved with rams' heads, armor visible beneath his robe, a globe held in one hand.",
        dailyMemo: "Today favors planning, discipline, and taking charge. Good day to tackle the thing that needs a firm hand."
    },
    {
        card: 5,
        side: "B",
        tension: 4,
        image: "./images/tarot-images/04-TheEmperor.jpg",
        name: "IV - The Emperor",
        keyword: ["Unreasonable", "Shortsighted", "Tyranny"],
        meaning: "Shortsighted and Unreasonable.",
        message: "you're being warned about rigidity, unreasonable attitudes, or the misuse of your authority.",
        opener: "The reading opens with The Emperor reversed, control slipping into rigidity or excess.",
        bridge: "Alongside this, The Emperor reversed hints at stubbornness or a struggle for control.",
        closer: "and the reading closes with The Emperor reversed asking you to loosen your grip before it costs you.",
        advice: "Notice if you're gripping too tightly to how things 'should' go. Some flexibility today will save you a fight.",
        color: "#6E4B3A",
        altText: "The same throne, unsteady, the ruler's grip on his globe loosening.",
        dailyMemo: "Today may bring friction with authority, yours or someone else's. Pick your battles carefully."
    },
    {
        card: 6,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/05-TheHierophant.jpg",
        name: "V - The Hierophant",
        keyword: ["Tradition", "Guidance", "Belief"],
        meaning: "He Reflects His Spiritual Beliefs and Concern for Others Through Example.",
        message: "you're encouraged to honor traditions or seek guidance from wise mentors or spiritual teachings.",
        opener: "The reading opens with The Hierophant, offering wisdom rooted in tradition.",
        bridge: "Alongside this, The Hierophant adds guidance and grounded belief to the spread.",
        closer: "and the reading closes with The Hierophant's invitation to learn from those who've walked this path before.",
        advice: "Ask someone with more experience than you. This isn't the moment to reinvent the wheel alone.",
        color: "#A67C52",
        altText: "A robed spiritual teacher sits between two pillars, two acolytes kneeling before him, one hand raised in blessing.",
        dailyMemo: "Today favors mentorship, structure, and tradition. Good day to seek advice or revisit something tried-and-true."
    },
    {
        card: 6,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/05-TheHierophant.jpg",
        name: "V - The Hierophant",
        keyword: ["False Prophecy", "Self-Righteousness", "Arrogance"],
        meaning: "A False Prophet Presumptuous, Self-Righteous.",
        message: "you're cautioned against blindly following dogmatic beliefs or allowing arrogance to cloud your judgment.",
        opener: "The reading opens with The Hierophant reversed, tradition curdling into dogma.",
        bridge: "Alongside this, The Hierophant reversed brings a note of rigid thinking or false authority.",
        closer: "and the reading closes with The Hierophant reversed asking you to question the rules you've been following.",
        advice: "It's okay to break from the 'right' way of doing this if it's not actually working for you.",
        color: "#9C9282",
        altText: "The same teacher, rigid, his blessing withheld as the acolytes turn away.",
        dailyMemo: "Today may bring pressure to conform. Trust your own judgment over what you're 'supposed' to do."
    },
    {
        card: 7,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/06-TheLovers.jpg",
        name: "VI - The Lovers",
        keyword: ["Union", "Harmony", "Love"],
        meaning: "The End of Isolation and The Formation of a Bond based on Love, Honor, and Trust.",
        message: "you're entering a period of meaningful connection, harmony, and mutual respect in relationships.",
        opener: "The reading opens with The Lovers, a bond built on honesty and choice.",
        bridge: "Alongside this, The Lovers add warmth, connection, and mutual trust to the spread.",
        closer: "and the reading closes with The Lovers reminding you that real connection is a choice made daily.",
        advice: "Say the honest thing instead of the comfortable thing. The relationship can hold it.",
        color: "#E8A0BF",
        altText: "A man and woman stand beneath an angel's blessing, a tree of flames behind him and a tree of fruit behind her.",
        dailyMemo: "Today favors open conversations and closeness. A good day to repair, deepen, or start something honest."
    },
    {
        card: 7,
        side: "B",
        tension: 4,
        image: "./images/tarot-images/06-TheLovers.jpg",
        name: "VI - The Lovers",
        keyword: ["Infatuation", "Lust", "Disharmony"],
        meaning: "Infatuation, Lust, Conceit.",
        message: "you're warned about shallow attractions, unbalanced relationships, or conflicts arising from poor choices.",
        opener: "The reading opens with The Lovers reversed, connection strained by imbalance or doubt.",
        bridge: "Alongside this, The Lovers reversed brings a note of disharmony or misaligned values.",
        closer: "and the reading closes with The Lovers reversed asking what's really driving the choice in front of you.",
        advice: "Slow down before you commit to this relationship or decision — check if it's genuinely aligned, not just convenient.",
        color: "#8C6E7A",
        altText: "The same couple, turned away from one another, the angel's blessing distant and unnoticed.",
        dailyMemo: "Today may surface tension in a close relationship. Worth naming what's bothering you instead of letting it sit."
    },
    {
        card: 8,
        side: "A",
        tension: 3,
        image: "./images/tarot-images/07-TheChariot.jpg",
        name: "VII - The Chariot",
        keyword: ["Victory", "Determination", "Triumph"],
        meaning: "A Triumphant Victory over Life's Opposing Forces. With Difficulties Resolved, Balance is Restored.",
        message: "you're gaining momentum; keep your focus, determination, and willpower strong to overcome challenges.",
        opener: "The reading opens with The Chariot, driving forward through sheer will and focus.",
        bridge: "Alongside this, The Chariot adds momentum and determined direction to the spread.",
        closer: "and the reading closes with The Chariot's reminder that discipline is what turns effort into victory.",
        advice: "Keep your eyes on the goal, not the obstacles. You have more control here than it feels like.",
        color: "#3A5A9C",
        altText: "An armored figure rides a chariot pulled by two sphinxes, one black and one white, moving forward with sheer will.",
        dailyMemo: "Today favors pushing through resistance. A good day for follow-through on something you've been putting off."
    },
    {
        card: 8,
        side: "B",
        tension: 4,
        image: "./images/tarot-images/07-TheChariot.jpg",
        name: "VII - The Chariot",
        keyword: ["Defeat", "Imbalance", "Controversy"],
        meaning: "Controversy, Imbalance, Defeat.",
        message: "you're experiencing loss of direction or imbalance; it's time to reassess your course of action.",
        opener: "The reading opens with The Chariot reversed, momentum stalled by scattered focus.",
        bridge: "Alongside this, The Chariot reversed brings a note of losing direction or control.",
        closer: "and the reading closes with The Chariot reversed asking you to regroup before pushing further.",
        advice: "Stop and figure out what's actually pulling you off course before you spend more energy fighting it.",
        color: "#5C6B7A",
        altText: "The same chariot, its sphinxes pulling in opposite directions, the rider losing the reins.",
        dailyMemo: "Today may feel like you're spinning your wheels. Consider pausing rather than forcing progress."
    },
    {
        card: 9,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/08-Strength.jpg",
        name: "VIII - Strength",
        keyword: ["Courage", "Compassion", "Control"],
        meaning: "Courage, Compassion, and Determination Enable one to Subdue and Soothe the Hostile Forces Within Ourselves or Others.",
        message: "you're learning to tame inner turmoil with patience, compassion, and quiet resolve.",
        opener: "The reading opens with Strength, meeting hard things with a quiet, steady courage.",
        bridge: "Alongside this, Strength adds patience and gentle resolve to the spread.",
        closer: "and the reading closes with Strength's reminder that real power often looks like calm, not force.",
        advice: "You don't need to fight this head-on. Soft, steady persistence will get you further today.",
        color: "#D4A017",
        altText: "A woman gently closes a lion's mouth with her bare hands, calm and unafraid, an infinity symbol above her head.",
        dailyMemo: "Today favors patience over force. If something feels like a battle, try approaching it gently instead."
    },
    {
        card: 9,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/08-Strength.jpg",
        name: "VIII - Strength",
        keyword: ["Cowardice", "Avoidance", "Weakness"],
        meaning: "Unleashed Hostility, Cowardice, Avoidance.",
        message: "you're letting fear or insecurity dictate your actions instead of standing firm with inner strength.",
        opener: "The reading opens with Strength reversed, courage giving way to doubt or avoidance.",
        bridge: "Alongside this, Strength reversed brings a note of insecurity or an urge to retreat.",
        closer: "and the reading closes with Strength reversed asking where fear has been running the show.",
        advice: "Notice where you're avoiding something out of fear rather than genuine disinterest, then take one small step toward it.",
        color: "#8C7048",
        altText: "The same lion, no longer calmed, straining against a hand that has lost its steady grip.",
        dailyMemo: "Today may bring a wave of self-doubt. Try not to let it decide anything permanent."
    },
    {
        card: 10,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/09-TheHermit.jpg",
        name: "IX - The Hermit",
        keyword: ["Wisdom", "Reflection", "Solitude"],
        meaning: "Great Wisdom, Vision, and Counsel Selflessly Given to All Who Seek The Light of His Experience.",
        message: "you're being called to retreat inward, seek solitude, and trust your inner wisdom to light the way.",
        opener: "The reading opens with The Hermit, stepping away from the noise to find his own light.",
        bridge: "Alongside this, The Hermit adds a note of quiet reflection to the spread.",
        closer: "and the reading closes with The Hermit's reminder that some answers only come in solitude.",
        advice: "Give yourself permission to say no to plans today. The answer you need is inside, not out there.",
        color: "#6B7280",
        altText: "A cloaked figure stands alone on a mountain peak at night, holding a lantern with a six-pointed star glowing inside.",
        dailyMemo: "Today favors solitude and reflection over socializing. Don't feel guilty about needing quiet."
    },
    {
        card: 10,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/09-TheHermit.jpg",
        name: "IX - The Hermit",
        keyword: ["Isolation", "Withdrawal", "Loneliness"],
        meaning: "Withdrawal from Responsibility to Others.",
        message: "you're withdrawing too deeply or avoiding necessary connection—don't confuse isolation with introspection.",
        opener: "The reading opens with The Hermit reversed, solitude tipping into isolation.",
        bridge: "Alongside this, The Hermit reversed brings a note of withdrawal or avoidance.",
        closer: "and the reading closes with The Hermit reversed asking you to reach out before you disappear completely.",
        advice: "Reach out to one person today, even briefly. You've earned rest, not disappearance.",
        color: "#7C7C7C",
        altText: "The same figure, his lantern dimming, the mountain path lost in fog around him.",
        dailyMemo: "Today may tempt you to isolate more than is healthy. A short check-in with someone you trust could help."
    },
    {
        card: 11,
        side: "A",
        tension: 3,
        image: "./images/tarot-images/10-WheelOfFortune.jpg",
        name: "X - Wheel of Fortune",
        keyword: ["Cycles", "Destiny", "Change"],
        meaning: "The Wheel is Ever Turning, Heralding Change, and Unfolding Fate. Gain or Loss could Be Next?",
        message: "you're entering a new cycle of fate—stay open, flexible, and alert to opportunities or changes ahead.",
        opener: "The reading opens with the Wheel of Fortune, turning steadily toward whatever comes next.",
        bridge: "Alongside this, the Wheel of Fortune adds a sense of movement and shifting fate.",
        closer: "and the reading closes with the Wheel of Fortune's reminder that change is the one constant worth trusting.",
        advice: "Stay flexible today. What looks like a setback might just be the wheel turning toward something better.",
        color: "#6B4C9A",
        altText: "A great wheel turns in the sky, marked with mystical symbols, a sphinx perched atop it and figures rising and falling around its rim.",
        dailyMemo: "Today brings shifting circumstances. Stay adaptable — resisting the change will cost you more than riding it."
    },
    {
        card: 11,
        side: "B",
        tension: 4,
        image: "./images/tarot-images/10-WheelOfFortune.jpg",
        name: "X - Wheel of Fortune",
        keyword: ["Misfortune", "Stagnation", "Defeat"],
        meaning: "One Defeated by Change or Misfortune.",
        message: "you're feeling stuck or unlucky, but resisting the cycle will only prolong the hardship—flow with it.",
        opener: "The reading opens with the Wheel of Fortune reversed, momentum caught in a stubborn cycle.",
        bridge: "Alongside this, the Wheel of Fortune reversed brings a note of feeling stuck or unlucky.",
        closer: "and the reading closes with the Wheel of Fortune reversed asking you to stop fighting the current.",
        advice: "Whatever cycle you're stuck in, resisting it is using up energy you could spend adapting instead.",
        color: "#6B5B73",
        altText: "The same wheel, jammed and slowed, the figures around it straining against its stalled motion.",
        dailyMemo: "Today may feel repetitive or frustrating, like nothing's moving. It won't last — the wheel always turns again."
    },
    {
        card: 12,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/11-Justice.jpg",
        name: "XI - Justice",
        keyword: ["Balance", "Fairness", "Truth"],
        meaning: "Your Rights have been Protected by Her Word. The Scales Weigh in Your Favor to Claim Your Innocence.",
        message: "you're being asked to act with integrity, own your truth, and make choices rooted in fairness and clarity.",
        opener: "The reading opens with Justice, weighing things fairly and without flinching.",
        bridge: "Alongside this, Justice adds clarity, accountability, and balance to the spread.",
        closer: "and the reading closes with Justice's reminder that truth, once faced, tends to set things right.",
        advice: "Be honest about your part in this, even the uncomfortable bit. It's the fastest way through.",
        color: "#5B7C99",
        altText: "A robed figure sits between two pillars, a raised sword in one hand and balanced scales in the other.",
        dailyMemo: "Today favors decisions made with a clear head. A good day to settle something that's been left unresolved."
    },
    {
        card: 12,
        side: "B",
        tension: 4,
        image: "./images/tarot-images/11-Justice.jpg",
        name: "XI - Justice",
        keyword: ["Injustice", "Bias", "Dishonesty"],
        meaning: "Intolerance, Bias, Injustice.",
        message: "you're facing imbalance or dishonesty—something isn't fair, and it's time to stand up or realign.",
        opener: "The reading opens with Justice reversed, fairness thrown off balance by bias or avoidance.",
        bridge: "Alongside this, Justice reversed brings a note of dishonesty or an unresolved imbalance.",
        closer: "and the reading closes with Justice reversed asking where you've been avoiding accountability.",
        advice: "Something here isn't being weighed fairly, possibly by you. Take an honest second look.",
        color: "#7A8290",
        altText: "The same figure, scales tipped unevenly, sword lowered, the blindfold slipping to reveal a biased gaze.",
        dailyMemo: "Today may surface a situation that feels unfair. Before reacting, check whether all the facts are actually in."
    },
    {
        card: 13,
        side: "A",
        tension: 3,
        image: "./images/tarot-images/12-TheHangedMan.jpg",
        name: "XII - The Hanged Man",
        keyword: ["Sacrifice", "Perspective", "Surrender"],
        meaning: "One who has Found Equilibrium Through His Own Concept of Reality. Spirituality, Intuition, and Self-Sacrifice are Implied.",
        message: "you're being invited to pause, let go of control, and shift your perspective to gain deeper clarity.",
        opener: "The reading opens with The Hanged Man, pausing mid-motion to see things from a new angle.",
        bridge: "Alongside this, The Hanged Man adds a note of surrender and shifted perspective.",
        closer: "and the reading closes with The Hanged Man's reminder that sometimes waiting is the wisest action.",
        advice: "Stop trying to force this forward. The answer will come once you stop pushing so hard for it.",
        color: "#4A7A7A",
        altText: "A man hangs upside down by one foot from a wooden beam, calm expression, a glowing halo around his head.",
        dailyMemo: "Today favors patience over action. If you feel stuck, it may be a sign to pause rather than push harder."
    },
    {
        card: 13,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/12-TheHangedMan.jpg",
        name: "XII - The Hanged Man",
        keyword: ["Stubbornness", "Limitation", "Defeat"],
        meaning: "One Bound By Convention, Faithless.",
        message: "you're clinging too tightly to old ways or resisting necessary change—surrender is the key.",
        opener: "The reading opens with The Hanged Man reversed, resistance where surrender was needed.",
        bridge: "Alongside this, The Hanged Man reversed brings a note of stalling or stubborn resistance.",
        closer: "and the reading closes with The Hanged Man reversed asking what you're refusing to let go of.",
        advice: "Name the thing you're holding onto out of stubbornness rather than necessity, then loosen your grip a little.",
        color: "#5C6E6E",
        altText: "The same figure, straining against the rope, resisting the stillness instead of surrendering to it.",
        dailyMemo: "Today may feel frustratingly stuck. The way out might be letting go, not gripping tighter."
    },
    {
        card: 14,
        side: "A",
        tension: 4,
        image: "./images/tarot-images/13-Death.jpg",
        name: "XIII - Death",
        keyword: ["Transformation", "Endings", "Renewal"],
        meaning: "Great Change in Lifestyle, View of Self, or View of the World.",
        message: "you're undergoing a powerful transformation—something must end to make space for true renewal.",
        opener: "The reading opens with Death, clearing away what's finished to make room for what's next.",
        bridge: "Alongside this, Death adds the weight of necessary transformation to the spread.",
        closer: "and the reading closes with Death's reminder that every ending is also a beginning in disguise.",
        advice: "Let the thing that's already over actually end. Holding on is costing you more than closing it would.",
        color: "#2B2B2B",
        altText: "A skeletal figure in armor rides a pale horse, carrying a black flag with a white rose, as a sun rises behind distant towers.",
        dailyMemo: "Today may bring the sense that something needs to end. Resisting it will only make the transition harder."
    },
    {
        card: 14,
        side: "B",
        tension: 4,
        image: "./images/tarot-images/13-Death.jpg",
        name: "XIII - Death",
        keyword: ["Stagnation", "Resistance", "Fear"],
        meaning: "Stagnation, Inertia.",
        message: "you're resisting a necessary ending, which only delays the growth and rebirth waiting for you.",
        opener: "The reading opens with Death reversed, an ending being delayed rather than accepted.",
        bridge: "Alongside this, Death reversed brings a note of resistance to change.",
        closer: "and the reading closes with Death reversed asking what fear is keeping you frozen in place.",
        advice: "Name what you're afraid will happen if you let this end. It's usually smaller than the fear itself.",
        color: "#4A3A3C",
        altText: "The same rider, halted, the pale horse standing still as the world around refuses to move forward.",
        dailyMemo: "Today may feel stagnant, like you're stuck between an old chapter and a new one. That discomfort is normal — it won't last forever."
    },
    {
        card: 15,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/14-Temperance.jpg",
        name: "XIV - Temperance",
        keyword: ["Balance", "Patience", "Clarity"],
        meaning: "Clarity, Contemplation, Patience Point the Way to Understanding the Nature of Heaven or Earth.",
        message: "you're encouraged to find harmony through moderation, patience, and spiritual clarity.",
        opener: "The reading opens with Temperance, blending opposites into something steady and whole.",
        bridge: "Alongside this, Temperance adds patience and quiet balance to the spread.",
        closer: "and the reading closes with Temperance's reminder that the middle path is often the wisest one.",
        advice: "Don't rush this. Small, steady adjustments will get you further than one big leap.",
        color: "#7B9EA8",
        altText: "An angel stands with one foot on land and one in water, pouring liquid between two cups in perfect balance.",
        dailyMemo: "Today favors moderation. A good day to find the middle ground between two extremes you've been weighing."
    },
    {
        card: 15,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/14-Temperance.jpg",
        name: "XIV - Temperance",
        keyword: ["Imbalance", "Disruption", "Confusion"],
        meaning: "Scattered Forces, Conflicting Interests, Confused Direction.",
        message: "you're feeling pulled in too many directions—slow down and restore internal balance.",
        opener: "The reading opens with Temperance reversed, balance tipping into excess or scattered focus.",
        bridge: "Alongside this, Temperance reversed brings a note of overcorrection or internal conflict.",
        closer: "and the reading closes with Temperance reversed asking where you've lost your footing between extremes.",
        advice: "Pick one thing to focus on today instead of trying to hold all of them steady at once.",
        color: "#7C7488",
        altText: "The same angel, cups tipped unevenly, liquid spilling as the balance between land and water is lost.",
        dailyMemo: "Today may feel pulled in too many directions. Simplifying your to-do list will help more than pushing through it."
    },
    {
        card: 16,
        side: "A",
        tension: 5,
        image: "./images/tarot-images/15-TheDevil.jpg",
        name: "XV - The Devil",
        keyword: ["Temptation", "Addiction", "Bondage"],
        meaning: "Man's Most Destructive Qualities Unleashed. Great Caution and Awareness necessary in Business or Personal Relationships.",
        message: "you're becoming entangled in unhealthy habits or attachments that limit your freedom.",
        opener: "The reading opens with The Devil, naming the chains you've mistaken for permanent.",
        bridge: "Alongside this, The Devil adds a note of temptation or unhealthy attachment to the spread.",
        closer: "and the reading closes with The Devil's uncomfortable reminder that the chains are looser than they feel.",
        advice: "Look honestly at the habit or attachment that's been running the show. You have more choice here than it feels like.",
        color: "#5C1A1A",
        altText: "A horned, winged figure looms over a chained man and woman, their chains loose enough to remove, though neither one does.",
        dailyMemo: "Today may test your willpower around an old habit or temptation. Awareness is the first move — you don't have to fix it all today."
    },
    {
        card: 16,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/15-TheDevil.jpg",
        name: "XV - The Devil",
        keyword: ["Freedom", "Release", "Awareness"],
        meaning: "Blindness, Weakness, Submission to Evil Forces.",
        message: "you're beginning to free yourself from toxic patterns—keep going and don't look back.",
        opener: "The reading opens with The Devil reversed, chains loosening as awareness takes hold.",
        bridge: "Alongside this, The Devil reversed brings a note of breaking free from an old pattern.",
        closer: "and the reading closes with The Devil reversed encouraging you to keep walking away.",
        advice: "Whatever progress you've made in letting go of this, keep going. Don't talk yourself back into the chains.",
        color: "#6B4A4A",
        altText: "The same chained figures, now stepping free, the chains falling loose behind them.",
        dailyMemo: "Today may bring a small win in breaking an old habit or unhealthy pattern. Notice it and give yourself credit."
    },
    {
        card: 17,
        side: "A",
        tension: 5,
        image: "./images/tarot-images/16-TheTower.jpg",
        name: "XVI - The Tower",
        keyword: ["Destruction", "Sudden Change", "Chaos"],
        meaning: "In a Flash, The Road One has Traveled, Comes to a Sudden Halt. Sudden Change, Disruption, and Adversity.",
        message: "you're experiencing a breakdown of false structures—it's painful but necessary for truth to emerge.",
        opener: "The reading opens with The Tower, breaking apart something that was never as stable as it looked.",
        bridge: "Alongside this, The Tower adds sudden, disruptive change to the spread.",
        closer: "and the reading closes with The Tower's hard truth that some structures need to fall before something real can be built.",
        advice: "Don't rush to rebuild exactly what just collapsed. Take a moment to see what actually needs to exist here.",
        color: "#8C1414",
        altText: "A tall tower is struck by lightning, its crown blown off as two figures fall from the flames toward the ground below.",
        dailyMemo: "Today may bring an unexpected disruption. It will feel destabilizing at first, but it's clearing space for something more honest."
    },
    {
        card: 17,
        side: "B",
        tension: 4,
        image: "./images/tarot-images/16-TheTower.jpg",
        name: "XVI - The Tower",
        keyword: ["Avoidance", "Resistance", "Tyranny"],
        meaning: "Tyranny, Oppression.",
        message: "you're trying to avoid inevitable change, but the longer you resist, the more turbulent the shift becomes.",
        opener: "The reading opens with The Tower reversed, a collapse being delayed rather than avoided.",
        bridge: "Alongside this, The Tower reversed brings a note of resisting change that's already underway.",
        closer: "and the reading closes with The Tower reversed warning that avoidance only makes the eventual fall harder.",
        advice: "Something here is going to change whether or not you're ready. Better to loosen your grip now on your own terms.",
        color: "#7A4A3A",
        altText: "The same tower, cracked but still standing, the storm building overhead as it strains against the inevitable.",
        dailyMemo: "Today may bring pressure building toward a change you've been avoiding. Facing it early will be easier than waiting it out."
    },
    {
        card: 18,
        side: "A",
        tension: 0,
        image: "./images/tarot-images/17-TheStar.jpg",
        name: "XVII - The Star",
        keyword: ["Hope", "Inspiration", "Healing"],
        meaning: "Enlightenment, Inspiration, Purification, Finding One's Inner Light.",
        message: "you're entering a phase of healing and renewal—let your inner light guide you forward.",
        opener: "The reading opens with The Star, quiet hope returning after a hard stretch.",
        bridge: "Alongside this, The Star adds healing and gentle optimism to the spread.",
        closer: "and the reading closes with The Star's reminder that things are genuinely getting better, even slowly.",
        advice: "Let yourself believe things can get better. That hope isn't naive — it's earned.",
        color: "#6FA8A0",
        altText: "A nude woman kneels beside a pool under a starry sky, pouring water from two jugs onto the land and into the water.",
        dailyMemo: "Today favors healing and quiet optimism. A good day to rest and let good things come to you instead of chasing them."
    },
    {
        card: 18,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/17-TheStar.jpg",
        name: "XVII - The Star",
        keyword: ["Arrogance", "Defeatism", "Pessimism"],
        meaning: "Arrogance, Defeatism.",
        message: "you're losing faith in yourself or the path ahead—reconnect to hope and possibility.",
        opener: "The reading opens with The Star reversed, hope dimmed by doubt or disappointment.",
        bridge: "Alongside this, The Star reversed brings a note of discouragement or lost faith.",
        closer: "and the reading closes with The Star reversed asking you to reconnect with what still feels possible.",
        advice: "You don't have to feel hopeful today to keep going. Just don't let the doubt make permanent decisions.",
        color: "#6B7C7A",
        altText: "The same woman, her jugs empty, the stars above dimmed and out of reach.",
        dailyMemo: "Today may feel discouraging or flat. This isn't the full picture — try not to trust the pessimism too much right now."
    },
    {
        card: 19,
        side: "A",
        tension: 4,
        image: "./images/tarot-images/18-TheMoon.jpg",
        name: "XVIII - The Moon",
        keyword: ["Illusion", "Fear", "Confusion"],
        meaning: "Darkness Magnifies Fears and Dangers. Harsh Realities. Disillusionment.",
        message: "you're walking through shadowy terrain—trust your intuition and beware of illusion or deception.",
        opener: "The reading opens with The Moon, casting shadows over what isn't fully clear yet.",
        bridge: "Alongside this, The Moon adds uncertainty and a call to trust intuition over appearances.",
        closer: "and the reading closes with The Moon's reminder that not everything needs to make sense yet.",
        advice: "Don't make a big decision on unclear information today. Give it another day or two to come into focus.",
        color: "#6B6B9C",
        altText: "A full moon shines over a winding path between two towers, a dog and wolf howling below as a crayfish emerges from the water.",
        dailyMemo: "Today may bring confusing signals or unclear feelings. Trust your gut more than the surface-level story."
    },
    {
        card: 19,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/18-TheMoon.jpg",
        name: "XVIII - The Moon",
        keyword: ["Peace", "Clarity", "Resolution"],
        meaning: "Peace Follows Difficult Period.",
        message: "you're beginning to see through the fog—clarity is dawning after confusion or fear.",
        opener: "The reading opens with The Moon reversed, confusion finally starting to clear.",
        bridge: "Alongside this, The Moon reversed brings a sense of relief and returning clarity.",
        closer: "and the reading closes with The Moon reversed marking the end of a fog you've been walking through.",
        advice: "Trust the clarity that's returning, even if it's not complete yet. You're seeing more accurately now.",
        color: "#9C9CB8",
        altText: "The same path under moonlight, easier to see now, the shadows beginning to lift as dawn approaches.",
        dailyMemo: "Today may bring welcome clarity after a confusing stretch. Things should start making more sense."
    },
    {
        card: 20,
        side: "A",
        tension: 0,
        image: "./images/tarot-images/19-TheSun.jpg",
        name: "XIX - The Sun",
        keyword: ["Joy", "Vitality", "Success"],
        meaning: "Warmth and Sincerity in a Relationship. Liberation from Limitation. Growth, Expansion.",
        message: "you're radiating joy and confidence—this is a time of success, celebration, and radiant truth.",
        opener: "The reading opens with The Sun, warmth and clarity lighting up everything it touches.",
        bridge: "Alongside this, The Sun adds pure joy and confidence to the spread.",
        closer: "and the reading closes with The Sun's reminder that good things are allowed to feel this easy.",
        advice: "Let yourself enjoy this without waiting for the other shoe to drop. You've earned it.",
        color: "#F4B400",
        altText: "A joyful child rides a white horse beneath a bright sun, sunflowers blooming behind a low wall.",
        dailyMemo: "Today favors celebration, confidence, and good news. A great day to share something you're proud of."
    },
    {
        card: 20,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/19-TheSun.jpg",
        name: "XIX - The Sun",
        keyword: ["Loneliness", "Uncertainty", "Loss"],
        meaning: "Loneliness, Uncertainty, Possible Loss of Relationship.",
        message: "you're feeling dimmed or uncertain—it's time to reclaim your light and find your joy again.",
        opener: "The reading opens with The Sun reversed, warmth dimmed by doubt or disconnection.",
        bridge: "Alongside this, The Sun reversed brings a note of clouded joy or uncertain footing.",
        closer: "and the reading closes with The Sun reversed asking you to look for the light that's still there, even if it's faint.",
        advice: "The good things haven't disappeared, they're just harder to see right now. Look for one small bright spot today.",
        color: "#B08D3E",
        altText: "The same sunny scene, clouded over, the child's horse standing still beneath a dimmer sky.",
        dailyMemo: "Today may feel a bit flat or uncertain. It's temporary — don't mistake a cloudy day for a permanent forecast."
    },
    {
        card: 21,
        side: "A",
        tension: 3,
        image: "./images/tarot-images/20-Judgement.jpg",
        name: "XX - Judgement",
        keyword: ["Rebirth", "Awareness", "Purpose"],
        meaning: "An Unfolding Sense of One's Part and Purpose in the World and the Universe. Awareness of the Interrelation of All Things.",
        message: "you're awakening to a higher calling—reflect on your past and prepare to step into purpose.",
        opener: "The reading opens with Judgement, calling you toward something you can no longer ignore.",
        bridge: "Alongside this, Judgement adds a sense of awakening and reckoning to the spread.",
        closer: "and the reading closes with Judgement's reminder that you're being called forward, not punished backward.",
        advice: "Answer the call you've been putting off. It's not as scary as the waiting has made it feel.",
        color: "#7C9CC4",
        altText: "An angel sounds a trumpet from the clouds as figures below rise from open graves, arms outstretched.",
        dailyMemo: "Today favors honest self-reflection. A good day to finally admit what you already know needs to change."
    },
    {
        card: 21,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/20-Judgement.jpg",
        name: "XX - Judgement",
        keyword: ["Fear", "Isolation", "Guilt"],
        meaning: "Fear of the Unknown, Isolation, Separation.",
        message: "you're avoiding accountability or doubting your worth—release judgment and trust in your renewal.",
        opener: "The reading opens with Judgement reversed, a call being avoided out of fear or self-doubt.",
        bridge: "Alongside this, Judgement reversed brings a note of guilt or self-judgment.",
        closer: "and the reading closes with Judgement reversed asking you to be gentler with yourself than you have been.",
        advice: "Whatever you're being hard on yourself about, it's time to let it go. You don't have to earn forgiveness from yourself.",
        color: "#6B7C8C",
        altText: "The same rising figures, hesitant, half-risen from their graves, unsure whether to answer the call.",
        dailyMemo: "Today may bring old guilt or self-doubt to the surface. Try to meet it with compassion instead of more criticism."
    },
    {
        card: 22,
        side: "A",
        tension: 0,
        image: "./images/tarot-images/21-TheWorld.jpg",
        name: "XXI - The World",
        keyword: ["Completion", "Wholeness", "Fulfillment"],
        meaning: "Attainment of Wealth and Prosperity. Recognition and Rewards from Earnest Labor. Change in Status.",
        message: "you've reached a major milestone—embrace the sense of fulfillment and prepare for your next evolution.",
        opener: "The reading opens with The World, standing at the close of one chapter and the doorway to the next.",
        bridge: "Alongside this, The World adds a sense of completion and wholeness to the spread.",
        closer: "and the reading closes with The World's reminder that you've earned this moment of arrival.",
        advice: "Take a real moment to acknowledge what you've finished before jumping into the next thing.",
        color: "#3C8C6E",
        altText: "A dancing figure wrapped in a purple sash is surrounded by a laurel wreath, the four evangelist symbols in each corner.",
        dailyMemo: "Today favors closure and celebration. A good day to wrap something up and actually let yourself feel proud of it."
    },
    {
        card: 22,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/21-TheWorld.jpg",
        name: "XXI - The World",
        keyword: ["Stagnation", "Unrealistic Expectations"],
        meaning: "Superficial Vision, Outlandish Expectations.",
        message: "you're feeling incomplete or blocked—reconnect to your purpose and finish what was started.",
        opener: "The reading opens with The World reversed, completion just out of reach.",
        bridge: "Alongside this, The World reversed brings a note of unfinished business or stalled progress.",
        closer: "and the reading closes with The World reversed asking what's left to close out before you can truly move on.",
        advice: "Identify the one loose end that's actually keeping this from feeling finished, and tie it off.",
        color: "#6B8272",
        altText: "The same dancing figure, wreath incomplete, the corners left unfinished around the edges.",
        dailyMemo: "Today may feel like something's almost done but not quite. Push through that last stretch rather than starting something new."
    },


    // The Minor Arcana
        // Wands
    {
        card: 23,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Wands01.jpg",
        name: "Ace of Wands",
        keyword: ["Inspiration", "Creation", "Potential"],
        meaning: "The Source and Origin of Spiritual Strength. The Seed of Inspiration and Creation.",
        message: "a burst of inspiration or the potential for a bold new project is igniting within you.",
        opener: "The reading opens with the Ace of Wands, a spark of inspiration reaching out to be grasped.",
        bridge: "Alongside this, the Ace of Wands adds a jolt of creative potential to the spread.",
        closer: "and the reading closes with the Ace of Wands urging you to act on the idea before it fades.",
        advice: "Write the idea down before you lose it, then take one real step toward it today.",
        color: "#E85D04",
        altText: "A hand emerges from a cloud holding a budding wand, leaves sprouting from its tip, overlooking a distant landscape.",
        dailyMemo: "Today favors starting something new. A sudden idea or urge to create deserves your attention."
    },
    {
        card: 23,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Wands01.jpg",
        name: "Ace of Wands",
        keyword: ["Decadence", "Corruption", "Spiritual Poverty"],
        meaning: "Decadence, Corruption, Spiritual Poverty.",
        message: "you're missing an opportunity to create or feeling spiritually disconnected.",
        opener: "The reading opens with the Ace of Wands reversed, a spark that's fizzled before catching.",
        bridge: "Alongside this, the Ace of Wands reversed brings a note of stalled or misdirected energy.",
        closer: "and the reading closes with the Ace of Wands reversed asking what's blocking your creative spark.",
        advice: "If the excitement isn't there, don't force it today. Revisit the idea when it feels alive again.",
        color: "#8C5A2B",
        altText: "The same hand and budding wand, but the leaves are wilting, the cloud beneath it thinning.",
        dailyMemo: "Today may bring low motivation or a stalled project. Rest is more useful than pushing right now."
    },
    {
        card: 24,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/Wands02.jpg",
        name: "Two of Wands",
        keyword: ["Dominion", "Exploration", "Decisions"],
        meaning: "Though Power and Dominion are Within One's Grasp--Still One is Forlorn.",
        message: "you're facing a choice between comfort and expansion—your next move defines your path.",
        opener: "The reading opens with the Two of Wands, standing at the edge of a decision that could expand everything.",
        bridge: "Alongside this, the Two of Wands adds a note of ambition and forward planning.",
        closer: "and the reading closes with the Two of Wands reminding you that the whole world is still an option.",
        advice: "Stop planning in your head and put one real option on the table today.",
        color: "#D97A2C",
        altText: "A man stands on a castle balcony holding a globe, a wand in one hand, gazing out over distant lands.",
        dailyMemo: "Today favors big-picture thinking. Good day to weigh your options before committing to a direction."
    },
    {
        card: 24,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Wands02.jpg",
        name: "Two of Wands",
        keyword: ["Fear", "Uncertainty", "Stagnation"],
        meaning: "Emotional Disturbance, Fear of the Unknown.",
        message: "you're hesitating out of fear of the unknown—don't let doubt stop your progress.",
        opener: "The reading opens with the Two of Wands reversed, ambition frozen by fear of the unknown.",
        bridge: "Alongside this, the Two of Wands reversed brings a note of hesitation or second-guessing.",
        closer: "and the reading closes with the Two of Wands reversed asking what fear is keeping you from choosing.",
        advice: "Name the worst-case scenario out loud. It usually shrinks once you actually look at it.",
        color: "#7A5C3E",
        altText: "The same balcony, the man turned away from the globe, gripping the wand tightly instead of holding it loosely.",
        dailyMemo: "Today may bring hesitation around a decision. Don't let fear make the choice for you by default."
    },
    {
        card: 25,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Wands03.jpg",
        name: "Three of Wands",
        keyword: ["Expansion", "Progress", "Vision"],
        meaning: "Great Spiritual Strength enables One through Contemplation to Meet What Lies Ahead.",
        message: "you're gaining momentum through clarity and long-term vision—keep going.",
        opener: "The reading opens with the Three of Wands, watching the results of earlier effort finally take shape.",
        bridge: "Alongside this, the Three of Wands adds a sense of expansion and long-view confidence.",
        closer: "and the reading closes with the Three of Wands reminding you that the groundwork you laid is paying off.",
        advice: "Trust the plan you already set in motion. You don't need to start over — just keep watching it unfold.",
        color: "#E08E45",
        altText: "A man stands on a cliff's edge, back turned, watching three wands planted firmly as ships sail on the sea below.",
        dailyMemo: "Today favors patience with plans already underway. Progress may be quiet, but it's happening."
    },
    {
        card: 25,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Wands03.jpg",
        name: "Three of Wands",
        keyword: ["Disappointment", "Delay", "Failure"],
        meaning: "The End of Trials, Disappointment, and Trouble.",
        message: "you're dealing with disappointment or feeling stuck—don't give up, adjust your approach.",
        opener: "The reading opens with the Three of Wands reversed, progress stalling just short of the horizon.",
        bridge: "Alongside this, the Three of Wands reversed brings a note of delay or unmet expectations.",
        closer: "and the reading closes with the Three of Wands reversed asking you to adjust the plan, not abandon it.",
        advice: "A delay isn't a failure. Tweak your approach and give it more time before deciding it's not working.",
        color: "#8C6A4A",
        altText: "The same cliff, the ships turned back or stalled on the horizon, the man's posture slumped.",
        dailyMemo: "Today may bring a setback or slower progress than hoped. Don't mistake delay for defeat."
    },
    {
        card: 26,
        side: "A",
        tension: 0,
        image: "./images/tarot-images/Wands04.jpg",
        name: "Four of Wands",
        keyword: ["Celebration", "Harmony", "Success"],
        meaning: "Bountiful and Well-Earned Harvest of Peace, Prosperity, and Harmony.",
        message: "you're being blessed with joy, stability, and harmony in your home or community.",
        opener: "The reading opens with the Four of Wands, a moment worth pausing to celebrate.",
        bridge: "Alongside this, the Four of Wands adds harmony and well-earned joy to the spread.",
        closer: "and the reading closes with the Four of Wands reminding you that this good moment is real and deserved.",
        advice: "Actually celebrate this instead of rushing to the next task. You've earned a pause.",
        color: "#F2A65A",
        altText: "Two figures dance beneath a garland strung between four wands, a castle glowing warmly in the background.",
        dailyMemo: "Today favors gathering with people who matter to you. A good day for celebration, big or small."
    },
    {
        card: 26,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Wands04.jpg",
        name: "Four of Wands",
        keyword: ["Imbalance", "Disruption", "Unsettled"],
        meaning: "Unaltered Peace, Prosperity, and Harmony.",
        message: "you're struggling to find balance—realign with what truly matters.",
        opener: "The reading opens with the Four of Wands reversed, celebration delayed by unsettled ground.",
        bridge: "Alongside this, the Four of Wands reversed brings a note of instability at home or within a group.",
        closer: "and the reading closes with the Four of Wands reversed asking what needs to settle before you can celebrate.",
        advice: "Address the thing that's unsettled before trying to force a good mood around it.",
        color: "#A67C52",
        altText: "The same garland, sagging between the wands, the dancers absent from the scene.",
        dailyMemo: "Today may feel a little unsteady at home or with your usual people. Give it space rather than forcing harmony."
    },
    {
        card: 27,
        side: "A",
        tension: 4,
        image: "./images/tarot-images/Wands05.jpg",
        name: "Five of Wands",
        keyword: ["Competition", "Conflict", "Struggle"],
        meaning: "Competition and Struggle for Dominance and Power.",
        message: "you're challenged to stand your ground—conflict may be necessary for growth.",
        opener: "The reading opens with the Five of Wands, energy clashing but not yet causing real harm.",
        bridge: "Alongside this, the Five of Wands adds a note of competition or friction to the spread.",
        closer: "and the reading closes with the Five of Wands reminding you that some conflict is just noise, not a real threat.",
        advice: "Don't take every disagreement personally today. Some of this is just posturing, not a real fight.",
        color: "#C1440E",
        altText: "Five figures clash with raised wands in a chaotic but harmless mock battle, none clearly winning.",
        dailyMemo: "Today may bring some friction or competition. Stay grounded — most of it will pass without lasting damage."
    },
    {
        card: 27,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Wands05.jpg",
        name: "Five of Wands",
        keyword: ["Deception", "Underhandedness", "Litigation"],
        meaning: "Deception, Litigation, Underhandedness.",
        message: "you're encountering dishonesty or indirect conflict—be vigilant and clear.",
        opener: "The reading opens with the Five of Wands reversed, open conflict shifting into something quieter and less honest.",
        bridge: "Alongside this, the Five of Wands reversed brings a note of hidden agendas or unfair play.",
        closer: "and the reading closes with the Five of Wands reversed asking you to watch for what isn't being said outright.",
        advice: "If something feels off about how someone's dealing with you, trust that instinct and get things in writing.",
        color: "#7A2E10",
        altText: "The same chaotic clash, but one figure moves in from the shadows, wand aimed unfairly at another's back.",
        dailyMemo: "Today may bring some behind-the-scenes tension or dishonesty. Stay alert and keep things clear and documented."
    },
    {
        card: 28,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Wands06.jpg",
        name: "Six of Wands",
        keyword: ["Victory", "Recognition", "Accomplishment"],
        meaning: "Triumphant resolution of Difficulties. The Realization of Hopes and Desires.",
        message: "you're achieving success and public recognition—celebrate your accomplishments.",
        opener: "The reading opens with the Six of Wands, riding home to recognition well-earned.",
        bridge: "Alongside this, the Six of Wands adds a note of visible success and public approval.",
        closer: "and the reading closes with the Six of Wands reminding you to actually accept the praise coming your way.",
        advice: "Let people acknowledge what you did. You don't have to deflect the compliment today.",
        color: "#D4A017",
        altText: "A rider on a white horse holds a wreathed wand aloft, cheered on by a small crowd as he passes.",
        dailyMemo: "Today favors recognition for effort you've put in. Good day for good news or a well-deserved win."
    },
    {
        card: 28,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Wands06.jpg",
        name: "Six of Wands",
        keyword: ["Failure", "Defeat", "Disloyalty"],
        meaning: "Fear, Disloyalty, Betrayal.",
        message: "you're doubting your success or facing disloyalty—trust your inner compass.",
        opener: "The reading opens with the Six of Wands reversed, a win that doesn't feel like one yet.",
        bridge: "Alongside this, the Six of Wands reversed brings a note of self-doubt or unacknowledged effort.",
        closer: "and the reading closes with the Six of Wands reversed asking you to measure success by your own standard, not applause.",
        advice: "The lack of recognition doesn't mean the effort didn't count. Keep going regardless of who's watching.",
        color: "#8C7020",
        altText: "The same rider, wreath slipping from the wand, the crowd turned away or absent.",
        dailyMemo: "Today may feel like your effort is going unnoticed. It still matters, even without an audience."
    },
    {
        card: 29,
        side: "A",
        tension: 3,
        image: "./images/tarot-images/Wands07.jpg",
        name: "Seven of Wands",
        keyword: ["Courage", "Defense", "Resistance"],
        meaning: "Validity of One's Principles are Under Attack by Adversaries. The Courage to Uphold those Principles Creates an Advantage.",
        message: "you're defending your beliefs with courage—your resilience creates progress.",
        opener: "The reading opens with the Seven of Wands, holding ground against pressure from all sides.",
        bridge: "Alongside this, the Seven of Wands adds a note of determined self-defense to the spread.",
        closer: "and the reading closes with the Seven of Wands reminding you that your position is worth defending.",
        advice: "Stand your ground on this one. You have the higher position even if it doesn't feel like it.",
        color: "#B5651D",
        altText: "A figure stands on high ground, wand raised defensively against six wands reaching up from below.",
        dailyMemo: "Today may ask you to defend a decision or boundary. You're allowed to hold firm without over-explaining."
    },
    {
        card: 29,
        side: "B",
        tension: 4,
        image: "./images/tarot-images/Wands07.jpg",
        name: "Seven of Wands",
        keyword: ["Confusion", "Vulnerability", "Defenselessness"],
        meaning: "Confusion, Feeling Vulnerable, Defenselessness.",
        message: "you're feeling overwhelmed or unsure—ground yourself and focus your energy.",
        opener: "The reading opens with the Seven of Wands reversed, ground lost and confidence shaken.",
        bridge: "Alongside this, the Seven of Wands reversed brings a note of feeling outnumbered or unsure.",
        closer: "and the reading closes with the Seven of Wands reversed asking you to regroup before defending anything further.",
        advice: "It's okay to step back and reassess instead of fighting every battle at once today.",
        color: "#7A5230",
        altText: "The same figure, now lower on the hill, wand lowered, surrounded more closely by the rising wands below.",
        dailyMemo: "Today may feel like you're defending too many fronts at once. Pick the one that actually matters most."
    },
    {
        card: 30,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/Wands08.jpg",
        name: "Eight of Wands",
        keyword: ["Speed", "Progress", "Movement"],
        meaning: "High Hopes and Swiftly Approaching Goals Promise Success.",
        message: "you're on the brink of rapid progress—things are moving quickly in your favor.",
        opener: "The reading opens with the Eight of Wands, movement finally picking up speed.",
        bridge: "Alongside this, the Eight of Wands adds momentum and quick progress to the spread.",
        closer: "and the reading closes with the Eight of Wands reminding you that things are about to move fast.",
        advice: "Get ready to move quickly. Have what you need on hand so you're not caught off guard by the pace.",
        color: "#F0A03C",
        altText: "Eight wands fly swiftly through a clear sky over a peaceful green landscape, nothing in their path.",
        dailyMemo: "Today favors quick decisions and fast-moving events. Things may pick up speed with little warning."
    },
    {
        card: 30,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Wands08.jpg",
        name: "Eight of Wands",
        keyword: ["Delay", "Frustration", "Quarreling"],
        meaning: "Impatience, Delay, Quarreling.",
        message: "you're frustrated by delays or miscommunications—patience will serve you now.",
        opener: "The reading opens with the Eight of Wands reversed, momentum caught up in delay.",
        bridge: "Alongside this, the Eight of Wands reversed brings a note of frustration or miscommunication.",
        closer: "and the reading closes with the Eight of Wands reversed asking you to be patient with the holdup.",
        advice: "The delay isn't permanent. Use the wait productively instead of stewing in the frustration.",
        color: "#A67638",
        altText: "The same wands, tangled or grounded mid-flight, their momentum stalled before reaching the horizon.",
        dailyMemo: "Today may bring delays or crossed wires in communication. Double-check details before assuming the worst."
    },
    {
        card: 31,
        side: "A",
        tension: 3,
        image: "./images/tarot-images/Wands09.jpg",
        name: "Nine of Wands",
        keyword: ["Perseverance", "Strength", "Resilience"],
        meaning: "Strength and Readiness to Meet Opposition Boldly. A Victory after Struggle.",
        message: "you're close to the finish line—your strength and perseverance are paying off.",
        opener: "The reading opens with the Nine of Wands, worn down but still standing guard.",
        bridge: "Alongside this, the Nine of Wands adds hard-won resilience to the spread.",
        closer: "and the reading closes with the Nine of Wands reminding you that you've survived worse than this.",
        advice: "You're closer to the finish than it feels. Don't quit on the second-to-last stretch.",
        color: "#B5541A",
        altText: "A bandaged but watchful figure leans on a wand, eight more standing behind him like a fence, guarding what he's built.",
        dailyMemo: "Today may test your endurance. You have more resilience stored up than you're giving yourself credit for."
    },
    {
        card: 31,
        side: "B",
        tension: 4,
        image: "./images/tarot-images/Wands09.jpg",
        name: "Nine of Wands",
        keyword: ["Obstacles", "Indecision", "Weakness"],
        meaning: "Adversary, Indecision, Obstacles.",
        message: "you're exhausted or second-guessing yourself—reclaim your inner resolve.",
        opener: "The reading opens with the Nine of Wands reversed, exhaustion finally catching up.",
        bridge: "Alongside this, the Nine of Wands reversed brings a note of depletion or wavering resolve.",
        closer: "and the reading closes with the Nine of Wands reversed asking you to rest before pushing any further.",
        advice: "This is a sign to actually rest, not push through. Recovery isn't the same as giving up.",
        color: "#7A4A22",
        altText: "The same figure, wand no longer supporting him, the fence of wands behind him scattered and uneven.",
        dailyMemo: "Today may bring exhaustion or a dip in resolve. Give yourself permission to slow down without guilt."
    },
    {
        card: 32,
        side: "A",
        tension: 4,
        image: "./images/tarot-images/Wands10.jpg",
        name: "Ten of Wands",
        keyword: ["Burden", "Responsibility", "Perseverance"],
        meaning: "Oppression. Although a Burden Weighs Heavily upon The Figure, Still He Perseveres.",
        message: "you're carrying a heavy load—ask for help and reassess what truly matters.",
        opener: "The reading opens with the Ten of Wands, carrying more than was ever meant for one set of hands.",
        bridge: "Alongside this, the Ten of Wands adds the weight of accumulated responsibility to the spread.",
        closer: "and the reading closes with the Ten of Wands asking what you can finally set down.",
        advice: "You don't have to carry all of this alone. Delegate or drop one thing today.",
        color: "#8C4A1E",
        altText: "A figure hunches beneath a heavy bundle of ten wands, struggling toward a distant house on the horizon.",
        dailyMemo: "Today may feel heavy with obligations. Before adding one more thing to your plate, ask what can wait."
    },
    {
        card: 32,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Wands10.jpg",
        name: "Ten of Wands",
        keyword: ["Apathy", "Overwhelm", "Self-Defeat"],
        meaning: "Cloudy Perception, Apathy, Self-Defeat.",
        message: "you're feeling burdened and stuck—let go of unnecessary weight.",
        opener: "The reading opens with the Ten of Wands reversed, the weight finally too much to keep carrying.",
        bridge: "Alongside this, the Ten of Wands reversed brings a note of burnout or resignation.",
        closer: "and the reading closes with the Ten of Wands reversed asking you to actually put something down, not just endure it.",
        advice: "Something on your plate needs to go, not just be tolerated. Choose what to release today.",
        color: "#5C3616",
        altText: "The same figure, collapsed beneath the bundle, the wands scattered around him on the ground.",
        dailyMemo: "Today may bring a real sense of burnout. This is a signal to lighten the load, not push harder through it."
    },
    {
        card: 33,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Wands11.jpg",
        name: "The Page of Wands",
        keyword: ["Messenger", "Enthusiasm", "Exploration"],
        meaning: "A Young Man Bearing Information or Spiritual Importance.",
        message: "you're receiving exciting news or the urge to explore something new—follow it.",
        opener: "The reading opens with the Page of Wands, curious and eager to chase the next spark of interest.",
        bridge: "Alongside this, the Page of Wands adds fresh enthusiasm and a willingness to explore.",
        closer: "and the reading closes with the Page of Wands encouraging you to follow the thing that excites you.",
        advice: "Say yes to the thing that sounds fun, even if it's not fully thought out yet.",
        color: "#E8A33D",
        altText: "A young figure in patterned clothing holds a budding wand aloft, gazing at it with curious excitement, desert hills behind him.",
        dailyMemo: "Today favors curiosity and small adventures. Good day to try something you haven't done before."
    },
    {
        card: 33,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Wands11.jpg",
        name: "The Page of Wands",
        keyword: ["Instability", "Restlessness", "Immaturity"],
        meaning: "Instability.",
        message: "you're being impulsive or scattered—pause to find clarity.",
        opener: "The reading opens with the Page of Wands reversed, enthusiasm scattered in too many directions.",
        bridge: "Alongside this, the Page of Wands reversed brings a note of restlessness or unfinished starts.",
        closer: "and the reading closes with the Page of Wands reversed asking you to commit to one thing before chasing the next.",
        advice: "Pick one of the ideas you've been bouncing between and actually finish it before starting another.",
        color: "#A67434",
        altText: "The same figure, wand held loosely, attention scattered toward several directions at once.",
        dailyMemo: "Today may bring scattered energy or trouble focusing. Narrow down to one task and see it through."
    },
    {
        card: 34,
        side: "A",
        tension: 3,
        image: "./images/tarot-images/Wands12.jpg",
        name: "The Knight of Wands",
        keyword: ["Adventure", "Impulsiveness", "Change"],
        meaning: "A Young Man Traveling a Path Predominated by His Belief in The Unknown. Possible Change in Residence.",
        message: "you're ready for adventure or bold movement—embrace the unknown with confidence.",
        opener: "The reading opens with the Knight of Wands, charging ahead before the plan is fully formed.",
        bridge: "Alongside this, the Knight of Wands adds bold, fast-moving energy to the spread.",
        closer: "and the reading closes with the Knight of Wands urging you to trust the leap even without a net.",
        advice: "Go for it, but pack a little more preparation than usual — this energy tends to skip steps.",
        color: "#D9480F",
        altText: "An armored rider on a rearing horse charges forward, wand held high, salamanders decorating his tunic.",
        dailyMemo: "Today favors bold action. Just double-check the details before you fully commit to the leap."
    },
    {
        card: 34,
        side: "B",
        tension: 4,
        image: "./images/tarot-images/Wands12.jpg",
        name: "The Knight of Wands",
        keyword: ["Discord", "Delays", "Restlessness"],
        meaning: "Discord.",
        message: "you're facing resistance or sudden changes—stay flexible.",
        opener: "The reading opens with the Knight of Wands reversed, bold energy running without direction.",
        bridge: "Alongside this, the Knight of Wands reversed brings a note of recklessness or friction.",
        closer: "and the reading closes with the Knight of Wands reversed asking you to slow the pace before it costs you.",
        advice: "Take a breath before you send that message or make that call. The urgency might be bigger in your head than in reality.",
        color: "#8C3208",
        altText: "The same rider, horse rearing out of control, the wand aimed carelessly rather than with purpose.",
        dailyMemo: "Today may bring impatience or a short fuse. Give yourself a beat before reacting to anything frustrating."
    },
    {
        card: 35,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Wands13.jpg",
        name: "The Queen of Wands",
        keyword: ["Confidence", "Charisma", "Nurturing"],
        meaning: "An Honorable Woman, Loving, Loyal, and Spiritually Inclined.",
        message: "you're channeling charisma and creative fire—trust your instincts.",
        opener: "The reading opens with the Queen of Wands, radiating a warmth people naturally gather toward.",
        bridge: "Alongside this, the Queen of Wands adds confident, magnetic energy to the spread.",
        closer: "and the reading closes with the Queen of Wands reminding you that your presence alone moves things forward.",
        advice: "Lead with your natural confidence today, even in the small interactions. People respond to it more than you think.",
        color: "#E8791A",
        altText: "A crowned woman sits confidently on a throne flanked by lions, a sunflower in one hand, a black cat at her feet.",
        dailyMemo: "Today favors charisma and warmth. A good day to take the lead or show up fully as yourself."
    },
    {
        card: 35,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Wands13.jpg",
        name: "The Queen of Wands",
        keyword: ["Deceit", "Infidelity", "Opposition"],
        meaning: "Deceit. Infidelity, Opposition.",
        message: "you're encountering jealousy or opposition—stay true to your light.",
        opener: "The reading opens with the Queen of Wands reversed, confidence curdling into control or jealousy.",
        bridge: "Alongside this, the Queen of Wands reversed brings a note of insecurity or opposition.",
        closer: "and the reading closes with the Queen of Wands reversed asking whether jealousy is clouding your judgment.",
        advice: "Check whether you're competing with someone out of insecurity rather than real conflict.",
        color: "#8C4E12",
        altText: "The same queen, throne slightly askew, the black cat hissing as the sunflower wilts in her hand.",
        dailyMemo: "Today may bring jealousy or friction with someone close. Try to name what's actually bothering you before reacting."
    },
    {
        card: 36,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/Wands14.jpg",
        name: "The King of Wands",
        keyword: ["Leadership", "Vision", "Authority"],
        meaning: "A Noble Man, Honest, Conscientious, and Just. Spiritually Aware and In Control.",
        message: "you're stepping into leadership and long-term vision—others are ready to follow you.",
        opener: "The reading opens with the King of Wands, leading with vision others are ready to follow.",
        bridge: "Alongside this, the King of Wands adds bold, confident leadership to the spread.",
        closer: "and the reading closes with the King of Wands reminding you that your vision is worth standing behind.",
        advice: "Share the big idea out loud today instead of keeping it to yourself. People are ready to hear it.",
        color: "#C1440E",
        altText: "A crowned king sits on a throne decorated with lions and salamanders, wand in hand, gazing outward with steady authority.",
        dailyMemo: "Today favors decisive leadership. Good day to take charge of a project or conversation you've been circling."
    },
    {
        card: 36,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Wands14.jpg",
        name: "The King of Wands",
        keyword: ["Harshness", "Arrogance", "Intolerance"],
        meaning: "Stern, but Tolerant and Sincere.",
        message: "you're being overly dominant or harsh—lead with heart, not ego.",
        opener: "The reading opens with the King of Wands reversed, leadership tipping into control or harshness.",
        bridge: "Alongside this, the King of Wands reversed brings a note of impatience or rigid expectations.",
        closer: "and the reading closes with the King of Wands reversed asking you to lead with less ego and more listening.",
        advice: "Before you push your point again today, take a moment to actually hear the other side.",
        color: "#7A2E10",
        altText: "The same king, posture stiff and commanding, his gaze cold rather than steady.",
        dailyMemo: "Today may bring a tendency toward impatience or bluntness. A softer approach will get you further."
    },



        // Cups
    {
        card: 37,
        side: "A",
        tension: 0,
        image: "./images/tarot-images/Cups01.jpg",
        name: "Ace of Cups",
        keyword: ["Love", "Emotions", "Intuition"],
        meaning: "The Essence of Beauty, Joy, and Love. Peace in Matters of the Heart.",
        message: "you're opening your heart to love, spiritual insight, or emotional healing.",
        opener: "The reading opens with the Ace of Cups, a heart opening wide enough to hold something new.",
        bridge: "Alongside this, the Ace of Cups adds a wave of emotional openness to the spread.",
        closer: "and the reading closes with the Ace of Cups inviting you to let love or joy in fully.",
        advice: "Let yourself feel this fully instead of guarding against it. The openness is safe right now.",
        color: "#4A90A4",
        altText: "A hand emerges from a cloud holding an overflowing cup, a dove descending to place a wafer inside it, five streams of water flowing out below.",
        dailyMemo: "Today favors emotional openness. A good day to let someone in or notice a feeling you've been avoiding."
    },
    {
        card: 37,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Cups01.jpg",
        name: "Ace of Cups",
        keyword: ["Emotional Instability", "False Heart"],
        meaning: "Emotional Instability, A False Heart.",
        message: "you're struggling with emotional instability or false hope—reconnect with your center.",
        opener: "The reading opens with the Ace of Cups reversed, an emotional opening that never quite settles.",
        bridge: "Alongside this, the Ace of Cups reversed brings a note of guardedness or false starts in the heart.",
        closer: "and the reading closes with the Ace of Cups reversed asking you to check if this connection is as real as it seems.",
        advice: "Notice if you're performing an emotion rather than actually feeling it today.",
        color: "#6E7C8C",
        altText: "The same cup, tipped, its overflow spilling away rather than filling the streams below.",
        dailyMemo: "Today may bring emotional unsteadiness or a connection that feels less solid than it looks. Move carefully."
    },
    {
        card: 38,
        side: "A",
        tension: 0,
        image: "./images/tarot-images/Cups02.jpg",
        name: "Two of Cups",
        keyword: ["Union", "Respect", "Harmony"],
        meaning: "Two Become One in Love or Friendship. A Union Based Upon Respect.",
        message: "you're experiencing harmony and mutual respect in a relationship or connection.",
        opener: "The reading opens with the Two of Cups, two sides meeting each other as equals.",
        bridge: "Alongside this, the Two of Cups adds mutual respect and easy connection to the spread.",
        closer: "and the reading closes with the Two of Cups reminding you that this bond is built on more than attraction.",
        advice: "Say thank you to the person who's been showing up for you lately. Reciprocity deserves to be spoken out loud.",
        color: "#5B8AA6",
        altText: "A man and woman face each other, each raising a cup in a mutual toast, a winged lion above them.",
        dailyMemo: "Today favors partnership and connection. A good day for an honest conversation with someone you trust."
    },
    {
        card: 38,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Cups02.jpg",
        name: "Two of Cups",
        keyword: ["Misunderstanding", "False Love"],
        meaning: "False Love and Misunderstanding.",
        message: "you're feeling disconnected or misunderstood in love or partnership.",
        opener: "The reading opens with the Two of Cups reversed, connection strained by miscommunication.",
        bridge: "Alongside this, the Two of Cups reversed brings a note of imbalance in a close relationship.",
        closer: "and the reading closes with the Two of Cups reversed asking what's gone unsaid between you.",
        advice: "Clear up the misunderstanding directly instead of letting it sit and grow bigger than it needs to be.",
        color: "#7A8C99",
        altText: "The same two figures, cups lowered, turned slightly away from one another.",
        dailyMemo: "Today may bring friction or mixed signals in a relationship. A direct conversation will help more than assuming the worst."
    },
    {
        card: 39,
        side: "A",
        tension: 0,
        image: "./images/tarot-images/Cups03.jpg",
        name: "Three of Cups",
        keyword: ["Celebration", "Friendship", "Joy"],
        meaning: "Bountiful Outcome with Contentment and Solace.",
        message: "you're surrounded by joy, friendship, and meaningful community support.",
        opener: "The reading opens with the Three of Cups, joy shared out loud with people who matter.",
        bridge: "Alongside this, the Three of Cups adds warmth and community to the spread.",
        closer: "and the reading closes with the Three of Cups reminding you that good news is better celebrated together.",
        advice: "Call the friend who'd want to celebrate this with you. Don't keep the good news to yourself.",
        color: "#6FA0A8",
        altText: "Three women raise their cups together in a joyful toast, dancing amid a harvest of fruit and flowers.",
        dailyMemo: "Today favors friendship and shared joy. A good day to reach out to your people."
    },
    {
        card: 39,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Cups03.jpg",
        name: "Three of Cups",
        keyword: ["Disillusionment", "End of Achievement"],
        meaning: "The End of Achievement, Disillusionment.",
        message: "you're facing disappointment or feeling let down by a recent outcome.",
        opener: "The reading opens with the Three of Cups reversed, celebration that fell short or felt hollow.",
        bridge: "Alongside this, the Three of Cups reversed brings a note of disappointment within a group or friendship.",
        closer: "and the reading closes with the Three of Cups reversed asking who's actually showing up for you lately.",
        advice: "Notice which friendships feel one-sided right now, and give your energy to the ones that don't.",
        color: "#7C8E90",
        altText: "The same three figures, cups lowered, standing apart rather than together.",
        dailyMemo: "Today may bring letdown from a group or social plan. It's okay to scale back and protect your energy."
    },
    {
        card: 40,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/Cups04.jpg",
        name: "Four of Cups",
        keyword: ["Apathy", "Contemplation", "Stagnation"],
        meaning: "Despondent and Forlorn. One Hesitantly Seeks Spiritual Resolve of Inaction.",
        message: "you're pausing to reflect on what truly fulfills you emotionally.",
        opener: "The reading opens with the Four of Cups, sitting with a quiet discontent that hasn't been named yet.",
        bridge: "Alongside this, the Four of Cups adds a note of withdrawal or apathy to the spread.",
        closer: "and the reading closes with the Four of Cups asking what you're overlooking while lost in your own thoughts.",
        advice: "Look up. There may be an offer or opportunity in front of you that you're too distracted to notice.",
        color: "#5C7A82",
        altText: "A young man sits beneath a tree, arms crossed, ignoring a cup being offered to him from a cloud.",
        dailyMemo: "Today may feel flat or uninspired. Something worth noticing might be right in front of you — stay a little more open."
    },
    {
        card: 40,
        side: "B",
        tension: 1,
        image: "./images/tarot-images/Cups04.jpg",
        name: "Four of Cups",
        keyword: ["New Beginnings", "Relationships"],
        meaning: "New Instruction and New Relationships.",
        message: "you're ready for a new emotional beginning or connection.",
        opener: "The reading opens with the Four of Cups reversed, apathy finally lifting into curiosity.",
        bridge: "Alongside this, the Four of Cups reversed brings a fresh willingness to engage again.",
        closer: "and the reading closes with the Four of Cups reversed marking the start of new interest or connection.",
        advice: "Take the invitation you've been about to decline. Your motivation is coming back.",
        color: "#4A6E78",
        altText: "The same figure, now looking up, reaching toward the offered cup instead of ignoring it.",
        dailyMemo: "Today may bring renewed interest in something you'd been indifferent to. Follow that spark."
    },
    {
        card: 41,
        side: "A",
        tension: 4,
        image: "./images/tarot-images/Cups05.jpg",
        name: "Five of Cups",
        keyword: ["Regret", "Loss", "Mourning"],
        meaning: "With Remorse and Regret, One Bitterly Submits to Misfortune.",
        message: "you're grieving a loss—honor your emotions, but don't forget what still remains.",
        opener: "The reading opens with the Five of Cups, grief taking up more space than what's still standing.",
        bridge: "Alongside this, the Five of Cups adds a note of mourning or regret to the spread.",
        closer: "and the reading closes with the Five of Cups gently pointing toward what hasn't been lost.",
        advice: "Let yourself grieve fully today, but try to notice the two cups still standing before the day ends.",
        color: "#3E5C6E",
        altText: "A cloaked figure stares down at three spilled cups, unaware of two upright cups still standing behind them.",
        dailyMemo: "Today may bring a wave of sadness or regret. It's valid — just try not to let it erase what's still good."
    },
    {
        card: 41,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Cups05.jpg",
        name: "Five of Cups",
        keyword: ["Reconciliation", "Strength", "Hope"],
        meaning: "Reconciliation. Strength and Hope Return.",
        message: "you're finding strength and hope after a time of regret or sorrow.",
        opener: "The reading opens with the Five of Cups reversed, grief finally loosening its grip.",
        bridge: "Alongside this, the Five of Cups reversed brings a note of returning hope and resilience.",
        closer: "and the reading closes with the Five of Cups reversed marking the start of real healing.",
        advice: "Let yourself feel a little hope today, even if it feels premature. It isn't.",
        color: "#4A6A78",
        altText: "The same figure, turning now toward the two standing cups, the spilled ones fading into the background.",
        dailyMemo: "Today may bring a shift toward healing after a hard stretch. Notice the small signs things are getting better."
    },
    {
        card: 42,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Cups06.jpg",
        name: "Six of Cups",
        keyword: ["Nostalgia", "Innocence", "Purity"],
        meaning: "Reflecting Upon The Past. A return to Innocence, Simplicity, and Purity. A Desire for Change.",
        message: "you're reflecting on the past or longing for simpler, more innocent times.",
        opener: "The reading opens with the Six of Cups, memory offering something gentle and familiar.",
        bridge: "Alongside this, the Six of Cups adds warmth and nostalgic comfort to the spread.",
        closer: "and the reading closes with the Six of Cups reminding you that the past can be a resource, not just a memory.",
        advice: "Reach out to someone from your past today, or revisit something that used to bring you comfort.",
        color: "#6A8FA0",
        altText: "A child hands a cup filled with flowers to another child in a quiet, old-fashioned courtyard.",
        dailyMemo: "Today favors nostalgia and simple comforts. A good day to reconnect with something familiar."
    },
    {
        card: 42,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Cups06.jpg",
        name: "Six of Cups",
        keyword: ["Stagnation", "Immaturity", "Resistance"],
        meaning: "Inability to Incorporate Change Brings Stagnation in Growth and Childishness.",
        message: "you're stuck in nostalgia or resisting emotional growth.",
        opener: "The reading opens with the Six of Cups reversed, nostalgia turning into avoidance of the present.",
        bridge: "Alongside this, the Six of Cups reversed brings a note of being stuck in an old version of yourself.",
        closer: "and the reading closes with the Six of Cups reversed asking what you're using the past to avoid.",
        advice: "Notice if you're romanticizing the past to avoid dealing with something in the present.",
        color: "#7A8E96",
        altText: "The same courtyard, empty now, the flowers wilted in the cup left behind.",
        dailyMemo: "Today may bring a pull toward old patterns or people. Make sure it's genuine connection, not just avoidance."
    },
    {
        card: 43,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/Cups07.jpg",
        name: "Seven of Cups",
        keyword: ["Imagination", "Choices", "Illusion"],
        meaning: "Search for Attainment, Knowledge, Riches, etc., but Here Imagination is Stronger Than Reality.",
        message: "you're daydreaming or overwhelmed by choices—discern fantasy from reality.",
        opener: "The reading opens with the Seven of Cups, too many tempting options floating just out of reach.",
        bridge: "Alongside this, the Seven of Cups adds a note of imagination running ahead of reality.",
        closer: "and the reading closes with the Seven of Cups asking which of these visions is actually worth chasing.",
        advice: "Pick one option and actually investigate it today instead of daydreaming about all of them at once.",
        color: "#5C7C96",
        altText: "A figure stands before seven cups floating in clouds, each holding a different tempting vision — treasure, a castle, a shrouded figure.",
        dailyMemo: "Today may bring a lot of appealing options but little clarity. Narrow it down before committing to anything."
    },
    {
        card: 43,
        side: "B",
        tension: 1,
        image: "./images/tarot-images/Cups07.jpg",
        name: "Seven of Cups",
        keyword: ["Clarity", "Progress", "Completion"],
        meaning: "Great Progress Towards the Completion of a Project.",
        message: "you're gaining clarity and making progress toward emotional goals.",
        opener: "The reading opens with the Seven of Cups reversed, illusion finally giving way to a clear choice.",
        bridge: "Alongside this, the Seven of Cups reversed brings a sense of practical clarity to the spread.",
        closer: "and the reading closes with the Seven of Cups reversed marking real progress on a decision.",
        advice: "Trust the option that's become obvious. You've done enough deliberating.",
        color: "#3E6478",
        altText: "The same seven cups, but the fog around them is clearing, one option coming into sharper focus than the rest.",
        dailyMemo: "Today favors decisiveness. If one option has been standing out, that's probably your answer."
    },
    {
        card: 44,
        side: "A",
        tension: 3,
        image: "./images/tarot-images/Cups08.jpg",
        name: "Eight of Cups",
        keyword: ["Abandonment", "Disengagement", "Transition"],
        meaning: "Retreat from Emotional Involvement.",
        message: "you're choosing to walk away from something that no longer serves your growth.",
        opener: "The reading opens with the Eight of Cups, walking away from something that no longer fits.",
        bridge: "Alongside this, the Eight of Cups adds a note of quiet departure to the spread.",
        closer: "and the reading closes with the Eight of Cups reminding you that leaving something imperfect isn't failure.",
        advice: "Give yourself permission to walk away from this, even if it looks fine from the outside.",
        color: "#3A5460",
        altText: "A cloaked figure walks away from eight stacked cups under a moon and eclipsing sun, heading toward distant mountains.",
        dailyMemo: "Today may bring the urge to step back from something that's stopped serving you. Trust that instinct."
    },
    {
        card: 44,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Cups08.jpg",
        name: "Eight of Cups",
        keyword: ["Emotional Entanglement", "Stuck"],
        meaning: "Emotional Entanglement.",
        message: "you're emotionally entangled or struggling to let go of a situation.",
        opener: "The reading opens with the Eight of Cups reversed, one foot out the door but not quite leaving.",
        bridge: "Alongside this, the Eight of Cups reversed brings a note of being emotionally stuck.",
        closer: "and the reading closes with the Eight of Cups reversed asking what's keeping you from finishing the walk away.",
        advice: "Name what's actually keeping you tied to this. Fear of the unknown is a real reason, but it's not a good enough one.",
        color: "#4E6068",
        altText: "The same figure, turned back toward the stacked cups, unable to fully leave despite starting to walk away.",
        dailyMemo: "Today may bring conflicted feelings about letting go of something. That's normal — it doesn't mean you're wrong to leave."
    },
    {
        card: 45,
        side: "A",
        tension: 0,
        image: "./images/tarot-images/Cups09.jpg",
        name: "Nine of Cups",
        keyword: ["Satisfaction", "Contentment", "Fulfillment"],
        meaning: "Completion and Satisfaction Achieved. Emotional and Physical Well-Being Attained.",
        message: "you're enjoying emotional fulfillment and a sense of deep contentment.",
        opener: "The reading opens with the Nine of Cups, satisfaction that doesn't need to prove itself to anyone.",
        bridge: "Alongside this, the Nine of Cups adds quiet contentment to the spread.",
        closer: "and the reading closes with the Nine of Cups reminding you that this good feeling is allowed to just be good.",
        advice: "Enjoy this without immediately wondering what's next. You're allowed to just be satisfied.",
        color: "#4A90A4",
        altText: "A satisfied man sits with arms crossed before nine cups arranged in a neat arc behind him.",
        dailyMemo: "Today favors contentment. A good day to appreciate what you already have instead of chasing more."
    },
    {
        card: 45,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Cups09.jpg",
        name: "Nine of Cups",
        keyword: ["Misinterpretation", "Mistakes", "Loss"],
        meaning: "Misinterpretation of Relationships Leads to Costly Mistakes.",
        message: "you're feeling dissatisfied or disillusioned in your emotional life.",
        opener: "The reading opens with the Nine of Cups reversed, contentment interrupted by a small disappointment.",
        bridge: "Alongside this, the Nine of Cups reversed brings a note of things not quite living up to expectation.",
        closer: "and the reading closes with the Nine of Cups reversed asking if you're measuring satisfaction the right way.",
        advice: "Check whether the goal you're chasing is actually yours, or something you picked up from someone else.",
        color: "#6E8288",
        altText: "The same arc of cups, one knocked over, the man's satisfied posture replaced with uncertainty.",
        dailyMemo: "Today may bring a small letdown around something you expected to feel better. Adjust the expectation, not just the outcome."
    },
    {
        card: 46,
        side: "A",
        tension: 0,
        image: "./images/tarot-images/Cups10.jpg",
        name: "Ten of Cups",
        keyword: ["Bliss", "Happiness", "Emotional Richness"],
        meaning: "Bliss, Contentment, and Emotional Richness is Attained.",
        message: "you're surrounded by love and peace—this is a moment of true emotional harmony.",
        opener: "The reading opens with the Ten of Cups, a full and settled kind of happiness.",
        bridge: "Alongside this, the Ten of Cups adds deep emotional harmony to the spread.",
        closer: "and the reading closes with the Ten of Cups reminding you that this kind of peace is worth protecting.",
        advice: "Take a moment to actually notice this happiness instead of letting it pass by unnoticed.",
        color: "#5B9AA8",
        altText: "A couple stands with arms raised beneath a rainbow of ten cups, two children dancing beside them near a peaceful home.",
        dailyMemo: "Today favors family, home, and emotional closeness. A good day to be fully present with the people you love."
    },
    {
        card: 46,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Cups10.jpg",
        name: "Ten of Cups",
        keyword: ["Emotional Poverty", "Guilt", "Anger"],
        meaning: "Emotional Poverty, Anger, and Guilt.",
        message: "you're feeling disconnected or conflicted within a relationship or family dynamic.",
        opener: "The reading opens with the Ten of Cups reversed, harmony strained by something unspoken.",
        bridge: "Alongside this, the Ten of Cups reversed brings a note of tension within a close relationship or family.",
        closer: "and the reading closes with the Ten of Cups reversed asking what needs to be said before peace can return.",
        advice: "Address the tension directly instead of pretending everything's fine for the sake of harmony.",
        color: "#6E8890",
        altText: "The same scene, the rainbow of cups fading, the family figures turned away from each other.",
        dailyMemo: "Today may bring friction at home or within your close circle. Naming the issue will help more than avoiding it."
    },
    {
        card: 47,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Cups11.jpg",
        name: "The Page of Cups",
        keyword: ["Youth", "New Beginnings", "Emotions"],
        meaning: "A Youth Developing Emotional Understanding of Self and Others. A New Beginning; A Birth or Opportunity.",
        message: "you're exploring your emotional self and the potential for new beginnings.",
        opener: "The reading opens with the Page of Cups, a small, surprising spark of feeling worth paying attention to.",
        bridge: "Alongside this, the Page of Cups adds openness and emotional curiosity to the spread.",
        closer: "and the reading closes with the Page of Cups encouraging you to follow the feeling, even if it seems small.",
        advice: "Pay attention to the unexpected feeling or idea that showed up today. It's worth more than it seems.",
        color: "#5C8FA0",
        altText: "A young figure holds a cup with a fish popping out of it, standing curiously at the water's edge.",
        dailyMemo: "Today favors emotional curiosity. A message, idea, or feeling may surprise you — welcome it."
    },
    {
        card: 47,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Cups11.jpg",
        name: "The Page of Cups",
        keyword: ["Missed Opportunity", "Immaturity"],
        meaning: "Failure to Seize Opportunity.",
        message: "you're missing or ignoring a heartfelt opportunity—be more present.",
        opener: "The reading opens with the Page of Cups reversed, a feeling or message going unnoticed.",
        bridge: "Alongside this, the Page of Cups reversed brings a note of emotional immaturity or distraction.",
        closer: "and the reading closes with the Page of Cups reversed asking what you might be too distracted to feel.",
        advice: "Slow down enough today to actually notice how you're feeling, instead of rushing past it.",
        color: "#7A8E94",
        altText: "The same figure, the cup tilted, the fish slipping away unnoticed.",
        dailyMemo: "Today may bring an easy-to-miss emotional cue. Try to stay present instead of rushing through the day."
    },
    {
        card: 48,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Cups12.jpg",
        name: "The Knight of Cups",
        keyword: ["Charm", "Romance", "Idealism"],
        meaning: "A Confident and Amiable Young Man Bearing Invitation to a New Beginning.",
        message: "you're receiving an invitation or message of love or emotional connection.",
        opener: "The reading opens with the Knight of Cups, arriving with an offer made gently, not forced.",
        bridge: "Alongside this, the Knight of Cups adds romance and idealism to the spread.",
        closer: "and the reading closes with the Knight of Cups inviting you to follow your heart's invitation.",
        advice: "Say yes to the romantic or creative invitation in front of you. It's coming from a genuine place.",
        color: "#4A7C96",
        altText: "An armored knight on a calm white horse rides forward slowly, holding a cup out before him like an offering.",
        dailyMemo: "Today favors romance and heartfelt gestures. A good day to express how you feel."
    },
    {
        card: 48,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Cups12.jpg",
        name: "The Knight of Cups",
        keyword: ["Deception", "Unrealistic Expectations"],
        meaning: "A Fraudulent and Untrustworthy Relationship.",
        message: "you're encountering deception or unrealistic expectations—be discerning.",
        opener: "The reading opens with the Knight of Cups reversed, a romantic gesture that isn't quite what it seems.",
        bridge: "Alongside this, the Knight of Cups reversed brings a note of unrealistic expectation or empty promises.",
        closer: "and the reading closes with the Knight of Cups reversed asking you to look past the charm to what's real.",
        advice: "Notice if the words match the actions here. Charm alone isn't proof of sincerity.",
        color: "#5C7688",
        altText: "The same knight, cup tilting, the horse's calm pace faltering as the offer becomes less steady.",
        dailyMemo: "Today may bring a tempting offer that's worth a second look before you commit to it."
    },
    {
        card: 49,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Cups13.jpg",
        name: "The Queen of Cups",
        keyword: ["Compassion", "Nurturing", "Empathy"],
        meaning: "A Warm and Loving Woman. She has Great Emotional Depth. Which She will Gladly Share with Those in Distress.",
        message: "you're showing compassion and emotional depth to those around you.",
        opener: "The reading opens with the Queen of Cups, holding space for feelings without needing to fix them.",
        bridge: "Alongside this, the Queen of Cups adds deep compassion and emotional steadiness to the spread.",
        closer: "and the reading closes with the Queen of Cups reminding you that empathy is its own kind of strength.",
        advice: "Offer someone your full presence today rather than advice. That's what they actually need.",
        color: "#5C8AA0",
        altText: "A queen sits at the water's edge holding an ornate, closed cup, gazing thoughtfully into it.",
        dailyMemo: "Today favors emotional support and compassion. A good day to listen more than you speak."
    },
    {
        card: 49,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Cups13.jpg",
        name: "The Queen of Cups",
        keyword: ["Vain", "Self-Satisfied", "Untrustworthy"],
        meaning: "Self-Satisfied, Vain, and Untrustworthy.",
        message: "you're being overly self-focused or emotionally unavailable.",
        opener: "The reading opens with the Queen of Cups reversed, compassion turned inward and self-focused.",
        bridge: "Alongside this, the Queen of Cups reversed brings a note of emotional unavailability.",
        closer: "and the reading closes with the Queen of Cups reversed asking whether you're truly present for others right now.",
        advice: "Check in on whether you're actually listening today, or just waiting for your turn to talk.",
        color: "#7A8890",
        altText: "The same queen, her cup now open and spilling, her attention turned toward her own reflection.",
        dailyMemo: "Today may bring a tendency to withdraw emotionally. Notice it, and try to stay a little more open."
    },
    {
        card: 50,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/Cups14.jpg",
        name: "The King of Cups",
        keyword: ["Compassion", "Control", "Balance"],
        meaning: "A Man of Great Compassion and Understanding. He has Succeeded in His Endeavors and Has Found Peace and Contentment. He is Helpful and Kind to Others.",
        message: "you're offering wisdom, calm, and emotional stability to those who need it.",
        opener: "The reading opens with the King of Cups, staying calm even while the water around him moves.",
        bridge: "Alongside this, the King of Cups adds emotional steadiness and mature compassion to the spread.",
        closer: "and the reading closes with the King of Cups reminding you that calm doesn't mean unfeeling.",
        advice: "Stay steady today, even if things around you feel chaotic. You don't have to match the storm's energy.",
        color: "#3E6E82",
        altText: "A crowned king sits calmly on a throne floating on turbulent water, holding a cup steady despite the waves.",
        dailyMemo: "Today favors emotional maturity. A good day to be the calm, steady presence someone else needs."
    },
    {
        card: 50,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Cups14.jpg",
        name: "The King of Cups",
        keyword: ["Selfishness", "Shallow", "Cold"],
        meaning: "Selfish, Shallow, and Self-Satisfied.",
        message: "you're acting selfishly or suppressing emotional depth.",
        opener: "The reading opens with the King of Cups reversed, calm control giving way to coldness or detachment.",
        bridge: "Alongside this, the King of Cups reversed brings a note of emotional distance or moodiness.",
        closer: "and the reading closes with the King of Cups reversed asking where you've shut your feelings down instead of processing them.",
        advice: "Let yourself actually feel whatever you've been pushing down instead of staying composed out of habit.",
        color: "#5C7078",
        altText: "The same king, his throne tilting on the rough water, the cup nearly spilling as his composure slips.",
        dailyMemo: "Today may bring some emotional distance, from yourself or someone else. Don't mistake control for calm."
    },

        // Swords
    {
        card: 51,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/Swords01.jpg",
        name: "Ace of Swords",
        keyword: ["Triumph", "Clarity", "Power"],
        meaning: "A Triumphant Conquest; Great Power or Force.",
        message: "you're receiving a surge of mental clarity or a breakthrough in communication or truth.",
        opener: "The reading opens with the Ace of Swords, a single clear thought cutting through the noise.",
        bridge: "Alongside this, the Ace of Swords adds sharp, breakthrough clarity to the spread.",
        closer: "and the reading closes with the Ace of Swords reminding you that truth, once seen, can't be unseen.",
        advice: "Say the clear thing you've been dancing around. The clarity you have deserves to be spoken.",
        color: "#5C7C99",
        altText: "A hand emerges from a cloud gripping an upright sword crowned with a wreath, mountains visible in the distance.",
        dailyMemo: "Today favors clear thinking and honest conversations. A good day to cut through confusion."
    },
    {
        card: 51,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Swords01.jpg",
        name: "Ace of Swords",
        keyword: ["Weakness", "Dissipation", "Fragility"],
        meaning: "Weakness. Dissipation of Strength.",
        message: "you're feeling mentally scattered or lacking focus—clear your mind before acting.",
        opener: "The reading opens with the Ace of Swords reversed, clarity clouded by doubt or confusion.",
        bridge: "Alongside this, the Ace of Swords reversed brings a note of mental fog or wavering conviction.",
        closer: "and the reading closes with the Ace of Swords reversed asking you to wait for a clearer head before deciding.",
        advice: "Don't trust the first conclusion you land on today. Give it a second look once your head clears.",
        color: "#7A8C99",
        altText: "The same sword, tilting, its wreath slipping loose as the grip on it weakens.",
        dailyMemo: "Today may bring foggy thinking or trouble focusing. Save big decisions for a clearer moment."
    },
    {
        card: 52,
        side: "A",
        tension: 4,
        image: "./images/tarot-images/Swords02.jpg",
        name: "Two of Swords",
        keyword: ["Indecision", "Blind Faith", "Balance"],
        meaning: "Blind Faith in Direction. One Who Conforms to The Dictates of Authority.",
        message: "you're at a crossroads—trust yourself and seek inner balance before deciding.",
        opener: "The reading opens with the Two of Swords, a decision being held at arm's length.",
        bridge: "Alongside this, the Two of Swords adds a note of careful, guarded balance to the spread.",
        closer: "and the reading closes with the Two of Swords asking what you already know beneath the blindfold.",
        advice: "Take the blindfold off today. You know more about this decision than you're letting yourself admit.",
        color: "#4A5C78",
        altText: "A blindfolded woman sits with two crossed swords held before her, a calm sea and crescent moon behind her.",
        dailyMemo: "Today may bring an important decision you've been avoiding. Trust that you have more clarity than you think."
    },
    {
        card: 52,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Swords02.jpg",
        name: "Two of Swords",
        keyword: ["Disloyalty", "Betrayal", "Deception"],
        meaning: "Disloyalty, Scheming.",
        message: "you're uncovering hidden agendas or betrayal—look deeper before choosing sides.",
        opener: "The reading opens with the Two of Swords reversed, avoidance finally starting to crack.",
        bridge: "Alongside this, the Two of Swords reversed brings hidden truths closer to the surface.",
        closer: "and the reading closes with the Two of Swords reversed asking what's being revealed now that you can't ignore.",
        advice: "Something you've been avoiding is about to become impossible to ignore. Better to face it on your terms.",
        color: "#5C6C82",
        altText: "The same woman, blindfold slipping, one sword lowering as the standoff begins to break.",
        dailyMemo: "Today may bring a truth surfacing that you've been avoiding. Better to meet it directly than let it catch you off guard."
    },
    {
        card: 53,
        side: "A",
        tension: 5,
        image: "./images/tarot-images/Swords03.jpg",
        name: "Three of Swords",
        keyword: ["Heartbreak", "Sorrow", "Pain"],
        meaning: "Sorrow, Delay, and Disappointment. One Who Chooses Power over Emotion.",
        message: "you're experiencing heartbreak or emotional pain—acknowledge the wound to begin healing.",
        opener: "The reading opens with the Three of Swords, naming pain that's been sitting quietly underneath everything else.",
        bridge: "Alongside this, the Three of Swords adds a note of real heartbreak to the spread.",
        closer: "and the reading closes with the Three of Swords reminding you that naming the pain is the first step through it.",
        advice: "Let yourself feel this fully instead of rushing to move past it. The grief deserves acknowledgment.",
        color: "#3A4A5C",
        altText: "A heart pierced by three swords hangs against a gray, rain-streaked sky.",
        dailyMemo: "Today may bring old or new pain to the surface. Be gentle with yourself — this is part of healing, not a setback."
    },
    {
        card: 53,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Swords03.jpg",
        name: "Three of Swords",
        keyword: ["Healing", "Disorder", "Confusion"],
        meaning: "Disorder, Confusion, Alienation.",
        message: "you're beginning to heal emotional wounds but may still feel confusion or inner chaos.",
        opener: "The reading opens with the Three of Swords reversed, pain that's starting to loosen its grip.",
        bridge: "Alongside this, the Three of Swords reversed brings early signs of healing, though it's not linear.",
        closer: "and the reading closes with the Three of Swords reversed reminding you that healing doesn't erase what happened, it just makes room around it.",
        advice: "Give yourself credit for how far you've come, even if it doesn't feel finished yet.",
        color: "#4E5A6E",
        altText: "The same pierced heart, the storm behind it beginning to clear, one sword slightly loosened.",
        dailyMemo: "Today may bring a mix of relief and lingering ache. Both can be true at the same time."
    },
    {
        card: 54,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Swords04.jpg",
        name: "Four of Swords",
        keyword: ["Rest", "Retreat", "Solitude"],
        meaning: "Spiritual Retreat, Solitude, and Repose.",
        message: "you're being called to rest, recover, and step back from mental or emotional stress.",
        opener: "The reading opens with the Four of Swords, calling for a full stop before anything else.",
        bridge: "Alongside this, the Four of Swords adds a need for rest and recovery to the spread.",
        closer: "and the reading closes with the Four of Swords reminding you that rest is part of the work, not a break from it.",
        advice: "Cancel the thing you don't have energy for today. Rest isn't optional right now.",
        color: "#5C7288",
        altText: "A knight lies still in effigy atop a tomb, hands folded in prayer, a stained-glass window glowing above him.",
        dailyMemo: "Today favors rest and recovery. If you can, take the slower pace instead of pushing through."
    },
    {
        card: 54,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Swords04.jpg",
        name: "Four of Swords",
        keyword: ["Chaos", "Disharmony", "Unrest"],
        meaning: "Chaos, Disharmony.",
        message: "you're resisting the need for rest—burnout or mental overload is creeping in.",
        opener: "The reading opens with the Four of Swords reversed, rest being resisted when it's needed most.",
        bridge: "Alongside this, the Four of Swords reversed brings restlessness despite exhaustion.",
        closer: "and the reading closes with the Four of Swords reversed warning that skipping rest now will cost you later.",
        advice: "The urge to keep pushing is exactly the sign that you need to stop. Rest before you're forced to.",
        color: "#6E7E90",
        altText: "The same effigy, cracked, the stillness broken by unrest creeping in around the edges.",
        dailyMemo: "Today may bring restlessness even though you're clearly tired. Try to rest anyway — you'll thank yourself later."
    },
    {
        card: 55,
        side: "A",
        tension: 4,
        image: "./images/tarot-images/Swords05.jpg",
        name: "Five of Swords",
        keyword: ["Defeat", "Loss", "Humiliation"],
        meaning: "Dishonor, Degradation, and Humiliation.",
        message: "you're facing a hollow victory or conflict where no one truly wins—ask yourself if it's worth it.",
        opener: "The reading opens with the Five of Swords, a win that costs more than it's worth.",
        bridge: "Alongside this, the Five of Swords adds a note of hollow victory or unnecessary conflict.",
        closer: "and the reading closes with the Five of Swords asking if this fight is even worth finishing.",
        advice: "Ask yourself if winning this argument is actually worth what it'll cost the relationship.",
        color: "#4A5868",
        altText: "A smirking figure gathers up swords left behind by two retreating figures under a turbulent sky.",
        dailyMemo: "Today may tempt you into a conflict that isn't worth having. Consider walking away, even if you 'could' win."
    },
    {
        card: 55,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Swords05.jpg",
        name: "Five of Swords",
        keyword: ["Regret", "Exposure", "Weakness"],
        meaning: "Disarmed and Exposed, One has Cause for Regret.",
        message: "you're beginning to feel regret or vulnerability after conflict—there may still be room to make amends.",
        opener: "The reading opens with the Five of Swords reversed, victory souring into regret.",
        bridge: "Alongside this, the Five of Swords reversed brings a note of vulnerability after conflict.",
        closer: "and the reading closes with the Five of Swords reversed asking if it's time to make amends.",
        advice: "If you won something at someone else's expense recently, consider reaching out to repair it.",
        color: "#5C6874",
        altText: "The same scene, the smirking figure now looking uncertain, the gathered swords heavier than expected.",
        dailyMemo: "Today may bring regret over a past conflict. There may still be room to make it right if you reach out."
    },
    {
        card: 56,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/Swords06.jpg",
        name: "Six of Swords",
        keyword: ["Transition", "Journey", "Healing"],
        meaning: "A Smooth Passage from Difficulties.",
        message: "you're moving forward from a difficult situation—healing comes with time and distance.",
        opener: "The reading opens with the Six of Swords, moving quietly away from rough water toward calmer ground.",
        bridge: "Alongside this, the Six of Swords adds a sense of gradual healing through distance.",
        closer: "and the reading closes with the Six of Swords reminding you that leaving is sometimes the healing itself.",
        advice: "Give yourself credit for the distance you've already put between yourself and what hurt you.",
        color: "#5C7890",
        altText: "A ferryman rows a woman and child across calm water toward a distant shore, swords standing upright in the boat.",
        dailyMemo: "Today favors moving forward, even slowly. Distance from a hard situation is doing more good than it feels like."
    },
    {
        card: 56,
        side: "B",
        tension: 4,
        image: "./images/tarot-images/Swords06.jpg",
        name: "Six of Swords",
        keyword: ["Unresolved Anxiety", "Delay"],
        meaning: "Unresolved Anxiety.",
        message: "you're struggling to move on—emotional baggage or lingering fear is holding you back.",
        opener: "The reading opens with the Six of Swords reversed, transition stuck partway through.",
        bridge: "Alongside this, the Six of Swords reversed brings unresolved anxiety about moving on.",
        closer: "and the reading closes with the Six of Swords reversed asking what's keeping the crossing from finishing.",
        advice: "Name the one thing that's still unresolved from the situation you're trying to leave behind.",
        color: "#6E7E8C",
        altText: "The same boat, stalled mid-crossing, the water rougher than before, the shore still distant.",
        dailyMemo: "Today may bring lingering anxiety about a transition that isn't fully finished. Give it a bit more time."
    },
    {
        card: 57,
        side: "A",
        tension: 3,
        image: "./images/tarot-images/Swords07.jpg",
        name: "Seven of Swords",
        keyword: ["Deception", "Strategy", "Cunning"],
        meaning: "Partial Success in Coping With Authority.",
        message: "you're navigating a situation with caution—watch for deception, whether from others or yourself.",
        opener: "The reading opens with the Seven of Swords, a move made carefully, maybe too carefully.",
        bridge: "Alongside this, the Seven of Swords adds a note of strategy or quiet avoidance to the spread.",
        closer: "and the reading closes with the Seven of Swords asking if the shortcut is really worth the risk.",
        advice: "Consider whether the workaround you're planning is actually necessary, or just easier in the short term.",
        color: "#4A5A6C",
        altText: "A figure sneaks away from a camp carrying five swords, glancing back over his shoulder, two swords left behind.",
        dailyMemo: "Today may tempt you toward a shortcut or half-truth. Weigh the risk before you take it."
    },
    {
        card: 57,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Swords07.jpg",
        name: "Seven of Swords",
        keyword: ["Advisory", "Counsel", "Reflection"],
        meaning: "Heed Advice and Counsel.",
        message: "you're realizing the need to be honest and seek support—secrets can no longer stay hidden.",
        opener: "The reading opens with the Seven of Swords reversed, a secret finally becoming too heavy to keep.",
        bridge: "Alongside this, the Seven of Swords reversed brings pressure to come clean or seek honest advice.",
        closer: "and the reading closes with the Seven of Swords reversed encouraging you to just tell the truth.",
        advice: "Whatever you've been keeping quiet, it's time to say it out loud, even if it's uncomfortable.",
        color: "#5C6C7C",
        altText: "The same figure, pausing mid-step, looking back toward the camp instead of continuing to sneak away.",
        dailyMemo: "Today may bring pressure to be more honest, with yourself or someone else. Better to speak up now."
    },
    {
        card: 58,
        side: "A",
        tension: 4,
        image: "./images/tarot-images/Swords08.jpg",
        name: "Eight of Swords",
        keyword: ["Restriction", "Stagnation", "Crisis"],
        meaning: "Bound by The Dictates of Authority, One is Unable to Free Themself from Crisis.",
        message: "you're feeling trapped or paralyzed—your thoughts may be creating the cage you're stuck in.",
        opener: "The reading opens with the Eight of Swords, feeling trapped by walls that aren't fully real.",
        bridge: "Alongside this, the Eight of Swords adds a note of self-imposed restriction to the spread.",
        closer: "and the reading closes with the Eight of Swords reminding you that the way out has been there the whole time.",
        advice: "Question the story you're telling yourself about being stuck. There's more room to move than it feels like.",
        color: "#3E4A58",
        altText: "A blindfolded woman stands bound and surrounded by eight swords, though the path around her is actually open.",
        dailyMemo: "Today may bring a feeling of being trapped. Check whether the walls are actually there, or just assumed."
    },
    {
        card: 58,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Swords08.jpg",
        name: "Eight of Swords",
        keyword: ["Resistance", "Struggle", "Anxiety"],
        meaning: "Opposition, Struggle, Anxiety.",
        message: "you're beginning to break free from limiting beliefs—keep moving toward liberation.",
        opener: "The reading opens with the Eight of Swords reversed, the first real crack in a long-held limitation.",
        bridge: "Alongside this, the Eight of Swords reversed brings early movement toward freedom.",
        closer: "and the reading closes with the Eight of Swords reversed encouraging you to keep working the rope loose.",
        advice: "Keep chipping away at the thing you've felt stuck on. You're making more progress than it feels like.",
        color: "#4E5A68",
        altText: "The same woman, blindfold loosening, one hand starting to work free of the ropes.",
        dailyMemo: "Today may bring a small breakthrough in something you've felt stuck on. Keep going."
    },
    {
        card: 59,
        side: "A",
        tension: 5,
        image: "./images/tarot-images/Swords09.jpg",
        name: "Nine of Swords",
        keyword: ["Nightmares", "Regret", "Anxiety"],
        meaning: "Failure, Delay, and Disappointment Overshadow Desire.",
        message: "you're overwhelmed by worry or guilt—face the fear instead of feeding it.",
        opener: "The reading opens with the Nine of Swords, worry looming larger in the dark than it will in daylight.",
        bridge: "Alongside this, the Nine of Swords adds a note of anxiety or sleepless overthinking to the spread.",
        closer: "and the reading closes with the Nine of Swords reminding you that the fear is usually worse than the reality.",
        advice: "Whatever's keeping you up at night, write it down. It tends to shrink once it's out of your head.",
        color: "#2E3A48",
        altText: "A figure sits upright in bed, head in hands, nine swords looming on the wall behind them in the darkness.",
        dailyMemo: "Today may bring anxious or spiraling thoughts. Try to separate what's actually likely from what's just fear talking."
    },
    {
        card: 59,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Swords09.jpg",
        name: "Nine of Swords",
        keyword: ["Fear", "Imprisonment", "Shame"],
        meaning: "Imprisonment, Fear, and Shame.",
        message: "you're coming out of a period of emotional distress—healing is slow, but you're not alone.",
        opener: "The reading opens with the Nine of Swords reversed, the worst of the anxiety starting to ease.",
        bridge: "Alongside this, the Nine of Swords reversed brings a sense of surfacing after a hard stretch.",
        closer: "and the reading closes with the Nine of Swords reversed reminding you the fear was heavier than the truth.",
        advice: "You're coming out of a hard mental stretch. Be patient with yourself as the anxiety settles.",
        color: "#3E4A56",
        altText: "The same figure, head lifting slightly, the swords on the wall behind them dimmer than before.",
        dailyMemo: "Today may bring some relief after a period of worry. Give yourself credit for getting through it."
    },
    {
        card: 60,
        side: "A",
        tension: 5,
        image: "./images/tarot-images/Swords10.jpg",
        name: "Ten of Swords",
        keyword: ["Ruin", "Endings", "Misfortune"],
        meaning: "Sudden Misfortune, Ruin, and Pain.",
        message: "you're facing a painful ending—though it hurts, this chapter is truly over.",
        opener: "The reading opens with the Ten of Swords, an ending that's already happened, whether or not it's been named yet.",
        bridge: "Alongside this, the Ten of Swords adds the weight of a painful conclusion to the spread.",
        closer: "and the reading closes with the Ten of Swords reminding you that dawn is already visible on the horizon.",
        advice: "Stop trying to salvage what's already over. The relief comes once you let it actually end.",
        color: "#2A3038",
        altText: "A figure lies face-down with ten swords in their back, a dark sky above, but the horizon beginning to lighten with dawn.",
        dailyMemo: "Today may bring the sense that something has truly ended. As painful as it is, this is the bottom, not the whole story."
    },
    {
        card: 60,
        side: "B",
        tension: 4,
        image: "./images/tarot-images/Swords10.jpg",
        name: "Ten of Swords",
        keyword: ["Advantage", "Profit", "Recovery"],
        meaning: "A Temporary Advantage for Profit and Power.",
        message: "you're slowly recovering from a past wound—there's life after loss, and you're rebuilding.",
        opener: "The reading opens with the Ten of Swords reversed, the worst finally behind and recovery beginning.",
        bridge: "Alongside this, the Ten of Swords reversed brings the first real signs of rebuilding.",
        closer: "and the reading closes with the Ten of Swords reversed reminding you that you're already further along than it feels.",
        advice: "Take the small step forward today, even if it's tiny. Recovery counts even when it's slow.",
        color: "#3A4048",
        altText: "The same figure, beginning to rise, the swords lifting away one by one as the sky brightens fully.",
        dailyMemo: "Today may bring a sense of slowly coming back from something hard. Progress, even quiet progress, is still progress."
    },
    {
        card: 61,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/Swords11.jpg",
        name: "The Page of Swords",
        keyword: ["Youth", "Curiosity", "Observation"],
        meaning: "A Youth Engaged in Observing The Principles of Power.",
        message: "you're entering a phase of curiosity and alertness—ask questions and seek the truth.",
        opener: "The reading opens with the Page of Swords, watching closely before making a move.",
        bridge: "Alongside this, the Page of Swords adds sharp curiosity and alertness to the spread.",
        closer: "and the reading closes with the Page of Swords encouraging you to keep asking questions until you get real answers.",
        advice: "Ask the question you've been sitting on instead of assuming you already know the answer.",
        color: "#5C7284",
        altText: "A young figure stands on a hilltop holding a sword upright, alert and watchful as the wind moves the clouds.",
        dailyMemo: "Today favors curiosity and observation. A good day to gather information before acting."
    },
    {
        card: 61,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Swords11.jpg",
        name: "The Page of Swords",
        keyword: ["Betrayal", "Sickness", "Treachery"],
        meaning: "Treachery, Disloyalty, Sickness.",
        message: "you're reacting impulsively or spreading miscommunication—pause before speaking or acting.",
        opener: "The reading opens with the Page of Swords reversed, alertness curdling into suspicion or gossip.",
        bridge: "Alongside this, the Page of Swords reversed brings a note of miscommunication or impulsive words.",
        closer: "and the reading closes with the Page of Swords reversed asking you to think before you speak today.",
        advice: "Pause before sending that message or repeating that rumor. Words are landing harder than usual right now.",
        color: "#6E7E8A",
        altText: "The same figure, sword lowered, glancing over their shoulder uneasily instead of watching ahead.",
        dailyMemo: "Today may bring a risk of miscommunication or gossip. Choose your words a little more carefully than usual."
    },
    {
        card: 62,
        side: "A",
        tension: 3,
        image: "./images/tarot-images/Swords12.jpg",
        name: "The Knight of Swords",
        keyword: ["Courage", "Speed", "Action"],
        meaning: "A Brave and Skillful Warrior Capable of Meeting Opposition.",
        message: "you're charging ahead with fierce energy—focus your mind so your momentum stays clear and honorable.",
        opener: "The reading opens with the Knight of Swords, moving fast and cutting straight to the point.",
        bridge: "Alongside this, the Knight of Swords adds decisive, high-speed energy to the spread.",
        closer: "and the reading closes with the Knight of Swords urging you to act now, while the momentum is with you.",
        advice: "Move on this today while your conviction is strong. Waiting will only dull the edge.",
        color: "#4A6078",
        altText: "An armored knight charges forward on a galloping horse, sword raised high, storm clouds racing behind him.",
        dailyMemo: "Today favors fast, decisive action. A good day to say what you mean and move quickly on it."
    },
    {
        card: 62,
        side: "B",
        tension: 4,
        image: "./images/tarot-images/Swords12.jpg",
        name: "The Knight of Swords",
        keyword: ["Extravagance", "Destruction", "Delays"],
        meaning: "Extravagance Causes Destruction and Ruin.",
        message: "you're rushing into conflict or chasing a cause without clarity—slow down and realign.",
        opener: "The reading opens with the Knight of Swords reversed, speed outrunning good judgment.",
        bridge: "Alongside this, the Knight of Swords reversed brings a note of recklessness or unnecessary conflict.",
        closer: "and the reading closes with the Knight of Swords reversed asking you to slow down before you say something you can't take back.",
        advice: "Whatever you're about to say in the heat of the moment, sit on it for an hour first.",
        color: "#5C6E80",
        altText: "The same knight, horse rearing out of control, the charge turning reckless rather than purposeful.",
        dailyMemo: "Today may bring impulsiveness or a short temper. A little extra restraint will save you a headache later."
    },
    {
        card: 63,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/Swords13.jpg",
        name: "The Queen of Swords",
        keyword: ["Wisdom", "Independence", "Clarity"],
        meaning: "A Woman of Great Strength and Independence, Able to Forge Her Way in The World.",
        message: "you're being called to lead with logic and grace—honor your wisdom, even if it means being alone for now.",
        opener: "The reading opens with the Queen of Swords, seeing the situation clearly, without softening it for anyone's comfort.",
        bridge: "Alongside this, the Queen of Swords adds honest, independent clarity to the spread.",
        closer: "and the reading closes with the Queen of Swords reminding you that clear-eyed honesty is its own kind of kindness.",
        advice: "Say the honest thing plainly today, without over-explaining or apologizing for it.",
        color: "#4A5C74",
        altText: "A crowned queen sits upright on a throne, one hand raised, a single sword held steadily upright before her.",
        dailyMemo: "Today favors clear, direct communication. A good day to say exactly what you mean."
    },
    {
        card: 63,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Swords13.jpg",
        name: "The Queen of Swords",
        keyword: ["Malice", "Deceit", "Intolerance"],
        meaning: "A Woman Dominated by Malice, Deceit, and Intolerance.",
        message: "you're holding onto bitterness or mistrust—cut through the fog of your own pain before judging others.",
        opener: "The reading opens with the Queen of Swords reversed, honesty curdling into coldness or bitterness.",
        bridge: "Alongside this, the Queen of Swords reversed brings a note of guardedness or harsh judgment.",
        closer: "and the reading closes with the Queen of Swords reversed asking whether you're protecting yourself or just pushing people away.",
        advice: "Notice if you're being sharp with someone as a way to avoid being vulnerable with them.",
        color: "#5C6C7A",
        altText: "The same queen, throne tilted, her raised hand curled into something sharper and less open.",
        dailyMemo: "Today may bring a tendency toward bluntness or cynicism. Check that it's honesty, not just armor."
    },
    {
        card: 64,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/Swords14.jpg",
        name: "The King of Swords",
        keyword: ["Authority", "Command", "Logic"],
        meaning: "Mature and Full Command, He is The Law and Authority over Whatever Field He May Choose.",
        message: "you're in a position to lead with reason and fairness—use your authority wisely and with integrity.",
        opener: "The reading opens with the King of Swords, leading with reason instead of emotion.",
        bridge: "Alongside this, the King of Swords adds clear, fair authority to the spread.",
        closer: "and the reading closes with the King of Swords reminding you that fairness earns more trust than force ever will.",
        advice: "Make the decision based on the facts today, not on who's louder or more upset.",
        color: "#3E5468",
        altText: "A crowned king sits upright on a throne carved with butterflies, sword held firmly upright, gaze steady and unflinching.",
        dailyMemo: "Today favors logical, fair decision-making. A good day to handle something that requires a clear head."
    },
    {
        card: 64,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Swords14.jpg",
        name: "The King of Swords",
        keyword: ["Cruelty", "Malice", "Corruption"],
        meaning: "Power Tainted By Cruelty and Malicious Intentions.",
        message: "you're misusing your intellect or power—reevaluate your motivations and choose truth over control.",
        opener: "The reading opens with the King of Swords reversed, authority twisting into control or manipulation.",
        bridge: "Alongside this, the King of Swords reversed brings a note of cold detachment or misused power.",
        closer: "and the reading closes with the King of Swords reversed asking whether logic is being used to justify something unkind.",
        advice: "Check that the 'rational' choice you're leaning toward isn't just a convenient excuse to be harsh.",
        color: "#4E5C6C",
        altText: "The same king, throne slightly askew, his steady gaze turned cold and calculating.",
        dailyMemo: "Today may bring a temptation to use facts as a weapon rather than a tool. Lead with fairness, not just correctness."
    },

        // Pentacles
    {
        card: 65,
        side: "A",
        tension: 0,
        image: "./images/tarot-images/Pentacles01.jpg",
        name: "Ace of Pentacles",
        keyword: ["Wealth", "Prosperity", "Opportunity"],
        meaning: "The Path of Material Gain and The Attainment of Wealth and Prosperity.",
        message: "you're being offered a new financial or material opportunity—plant the seed with intention.",
        opener: "The reading opens with the Ace of Pentacles, a real, tangible opportunity landing in your hands.",
        bridge: "Alongside this, the Ace of Pentacles adds solid new potential to the spread.",
        closer: "and the reading closes with the Ace of Pentacles reminding you that this opportunity is worth planting seriously.",
        advice: "Take the practical first step today, even if it's small. This opportunity is worth building on.",
        color: "#5C8C4A",
        altText: "A hand emerges from a cloud holding a large golden coin, an archway and garden visible in the distance below.",
        dailyMemo: "Today favors new opportunities, especially around money or work. A good day to say yes to something practical."
    },
    {
        card: 65,
        side: "B",
        tension: 1,
        image: "./images/tarot-images/Pentacles01.jpg",
        name: "Ace of Pentacles",
        keyword: ["Misuse", "Poverty", "Loss"],
        meaning: "The Misuse of Wealth Causes Unhappiness and Deterioration of Character.",
        message: "you're experiencing a setback or misuse of resources—ground yourself and reassess.",
        opener: "The reading opens with the Ace of Pentacles reversed, an opportunity mishandled or let slip.",
        bridge: "Alongside this, the Ace of Pentacles reversed brings a note of missed potential or poor planning.",
        closer: "and the reading closes with the Ace of Pentacles reversed asking you to be more deliberate with what comes next.",
        advice: "Before committing resources to this, slow down and actually plan instead of rushing in.",
        color: "#7A8C5C",
        altText: "The same coin, tarnished, slipping from a looser grip as the garden below fades from view.",
        dailyMemo: "Today may bring a financial or practical misstep. Double-check the details before you commit to anything."
    },
    {
        card: 66,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/Pentacles02.jpg",
        name: "Two of Pentacles",
        keyword: ["Balance", "Adaptability", "Change"],
        meaning: "Harmony in the Midst of Change.",
        message: "you're juggling responsibilities—stay adaptable and maintain balance.",
        opener: "The reading opens with the Two of Pentacles, keeping several things moving without dropping any of them.",
        bridge: "Alongside this, the Two of Pentacles adds adaptable, juggling energy to the spread.",
        closer: "and the reading closes with the Two of Pentacles reminding you that balance is a skill, not a destination.",
        advice: "Give yourself credit for how much you're actually managing right now, even if it feels chaotic.",
        color: "#6B8C5C",
        altText: "A young man juggles two coins connected by an infinity-shaped ribbon, ships riding choppy waves behind him.",
        dailyMemo: "Today favors flexibility. A good day to juggle priorities rather than trying to do everything perfectly."
    },
    {
        card: 66,
        side: "B",
        tension: 3,
        image: "./images/tarot-images/Pentacles02.jpg",
        name: "Two of Pentacles",
        keyword: ["Instability", "Overcommitment", "Stress"],
        meaning: "News Brings Surface Pleasure, False Enjoyment.",
        message: "you're overwhelmed or out of sync—focus on one task at a time.",
        opener: "The reading opens with the Two of Pentacles reversed, too many things being juggled at once.",
        bridge: "Alongside this, the Two of Pentacles reversed brings a note of overcommitment or imbalance.",
        closer: "and the reading closes with the Two of Pentacles reversed asking what needs to be set down before something drops.",
        advice: "Pick the one thing that can wait, and actually let it wait today.",
        color: "#8C9968",
        altText: "The same juggler, coins slipping from the ribbon, the ships behind him capsizing in rougher water.",
        dailyMemo: "Today may feel overloaded. Something on your plate needs to be postponed or delegated."
    },
    {
        card: 67,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Pentacles03.jpg",
        name: "Three of Pentacles",
        keyword: ["Collaboration", "Mastery", "Craftsmanship"],
        meaning: "The Apprentice enjoys Spiritual Reward from Earnest Labor.",
        message: "you're developing mastery through dedicated work—your craft is your strength.",
        opener: "The reading opens with the Three of Pentacles, skill building on skill through steady collaboration.",
        bridge: "Alongside this, the Three of Pentacles adds craftsmanship and teamwork to the spread.",
        closer: "and the reading closes with the Three of Pentacles reminding you that good work is rarely done alone.",
        advice: "Ask for feedback on the thing you're building. Another set of eyes will strengthen it.",
        color: "#5C7C4A",
        altText: "A craftsman works on a cathedral archway while two robed figures examine his detailed plans beside him.",
        dailyMemo: "Today favors collaboration and skill-building. A good day to work with others rather than solo."
    },
    {
        card: 67,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Pentacles03.jpg",
        name: "Three of Pentacles",
        keyword: ["Mediocrity", "Pettiness", "Lack of Cooperation"],
        meaning: "Mediocrity in Work, Pettiness and Immaturity.",
        message: "you're encountering pettiness or lack of collaboration—keep standards high.",
        opener: "The reading opens with the Three of Pentacles reversed, collaboration breaking down into friction.",
        bridge: "Alongside this, the Three of Pentacles reversed brings a note of poor teamwork or low standards.",
        closer: "and the reading closes with the Three of Pentacles reversed asking if it's time to raise the bar again.",
        advice: "If the team effort isn't working, it's okay to take more ownership of the outcome yourself.",
        color: "#7A8C5E",
        altText: "The same archway, work halted, the craftsman alone now, his plans left unreviewed on the table.",
        dailyMemo: "Today may bring friction in a group project. Focus on your own standard of quality rather than the friction around you."
    },
    {
        card: 68,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/Pentacles04.jpg",
        name: "Four of Pentacles",
        keyword: ["Security", "Control", "Possession"],
        meaning: "Impressed by Wealth and Power, One Clings to Material Gain for His Identity.",
        message: "you're clinging to stability or control—check if it's helping or hindering growth.",
        opener: "The reading opens with the Four of Pentacles, holding tightly to what feels safe.",
        bridge: "Alongside this, the Four of Pentacles adds a note of caution and control to the spread.",
        closer: "and the reading closes with the Four of Pentacles asking whether the grip is protecting you or isolating you.",
        advice: "Loosen your grip on one thing today, even slightly. Security doesn't require holding everything so tightly.",
        color: "#4A6E3C",
        altText: "A figure clutches a coin to his chest, another balanced on his head, two more pinned beneath his feet.",
        dailyMemo: "Today may bring an urge to control or hold onto something tightly. Notice it, and consider whether it's necessary."
    },
    {
        card: 68,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Pentacles04.jpg",
        name: "Four of Pentacles",
        keyword: ["Loss", "Uncertainty", "Letting Go"],
        meaning: "The Walls of Material Security Crumble.",
        message: "you're being pushed to let go of attachments that no longer support you.",
        opener: "The reading opens with the Four of Pentacles reversed, the grip finally loosening, whether by choice or not.",
        bridge: "Alongside this, the Four of Pentacles reversed brings a note of unexpected change to something stable.",
        closer: "and the reading closes with the Four of Pentacles reversed reminding you that letting go can be its own kind of relief.",
        advice: "If something material or financial is shifting outside your control, focus on what you can actually influence.",
        color: "#6E8256",
        altText: "The same figure, coins slipping from his grip, scattering across the ground around his feet.",
        dailyMemo: "Today may bring an unexpected loss of control over money or resources. Stay flexible rather than gripping tighter."
    },
    {
        card: 69,
        side: "A",
        tension: 4,
        image: "./images/tarot-images/Pentacles05.jpg",
        name: "Five of Pentacles",
        keyword: ["Hardship", "Struggle", "Spiritual Loss"],
        meaning: "Spiritual Warmth Comforts Those Suffering Financial or Physical Hardships.",
        message: "you're facing hardship, but support is nearby—reach out and keep moving.",
        opener: "The reading opens with the Five of Pentacles, hardship that feels harder because help is being overlooked.",
        bridge: "Alongside this, the Five of Pentacles adds a note of struggle or scarcity to the spread.",
        closer: "and the reading closes with the Five of Pentacles gently pointing toward the shelter you may be walking past.",
        advice: "Ask for the help that's actually available to you. You don't have to get through this entirely alone.",
        color: "#5C6E4A",
        altText: "Two figures trudge through snow past a lit stained-glass window, one on crutches, neither noticing the shelter nearby.",
        dailyMemo: "Today may bring financial or material stress. Support may be closer than it feels — look for it."
    },
    {
        card: 69,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Pentacles05.jpg",
        name: "Five of Pentacles",
        keyword: ["Recovery", "Renewal", "Improvement"],
        meaning: "Disorder, Chaos, and Ruin Grasp the Inner Self, Resulting in Spiritual and Financial Discord.",
        message: "you're beginning to recover and rebuild after loss—hope is returning.",
        opener: "The reading opens with the Five of Pentacles reversed, hardship finally starting to ease.",
        bridge: "Alongside this, the Five of Pentacles reversed brings a sense of recovery and renewed support.",
        closer: "and the reading closes with the Five of Pentacles reversed marking the start of things getting easier.",
        advice: "Accept the help or opportunity that's finally showing up. You don't have to prove you can do it alone.",
        color: "#6E7E58",
        altText: "The same two figures, now approaching the lit window, reaching toward the door instead of passing it by.",
        dailyMemo: "Today may bring welcome relief after a hard stretch. Let the support in when it comes."
    },
    {
        card: 70,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Pentacles06.jpg",
        name: "Six of Pentacles",
        keyword: ["Generosity", "Charity", "Prosperity"],
        meaning: "Generosity is Repaid Through Material Prosperity.",
        message: "you're in a position to give or receive help—generosity builds prosperity.",
        opener: "The reading opens with the Six of Pentacles, generosity moving freely in both directions.",
        bridge: "Alongside this, the Six of Pentacles adds balanced giving and receiving to the spread.",
        closer: "and the reading closes with the Six of Pentacles reminding you that generosity works best as a two-way exchange.",
        advice: "If you need help right now, ask for it. If you have extra to give, offer it without keeping score.",
        color: "#6B8C4A",
        altText: "A well-dressed man holds a scale in one hand, distributing coins to two kneeling figures with the other.",
        dailyMemo: "Today favors generosity and fair exchange. A good day to give or receive help freely."
    },
    {
        card: 70,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Pentacles06.jpg",
        name: "Six of Pentacles",
        keyword: ["Envy", "Greed", "Jealousy"],
        meaning: "Jealousy and Envy Reap No Benefits.",
        message: "you're dealing with greed or envy—real abundance isn't just material.",
        opener: "The reading opens with the Six of Pentacles reversed, generosity replaced by an uneven hand.",
        bridge: "Alongside this, the Six of Pentacles reversed brings a note of imbalance in giving or receiving.",
        closer: "and the reading closes with the Six of Pentacles reversed asking whether the exchange here is actually fair.",
        advice: "Notice if a relationship or deal has become one-sided, and speak up about it plainly.",
        color: "#8C9958",
        altText: "The same man, scale tilted unevenly, coins withheld from the kneeling figures reaching toward him.",
        dailyMemo: "Today may bring imbalance around money or favors, someone giving too little or expecting too much. Name it if it applies to you."
    },
    {
        card: 71,
        side: "A",
        tension: 2,
        image: "./images/tarot-images/Pentacles07.jpg",
        name: "Seven of Pentacles",
        keyword: ["Patience", "Evaluation", "Growth"],
        meaning: "Cultivating Material Gain is a Combination of Individual Effort and Hard Labor.",
        message: "you're pausing to evaluate your efforts—patience is key to long-term growth.",
        opener: "The reading opens with the Seven of Pentacles, pausing to check on something growing slowly.",
        bridge: "Alongside this, the Seven of Pentacles adds patient evaluation to the spread.",
        closer: "and the reading closes with the Seven of Pentacles reminding you that not everything worth having grows quickly.",
        advice: "Take stock of the progress you've already made instead of only measuring what's left to do.",
        color: "#5C7C4A",
        altText: "A farmer leans on his hoe, studying a bush heavy with golden coins, weighing whether it's ready for harvest.",
        dailyMemo: "Today favors patience with something you've been working on. It's growing, even if slowly."
    },
    {
        card: 71,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Pentacles07.jpg",
        name: "Seven of Pentacles",
        keyword: ["Frustration", "Anxiety", "Impatience"],
        meaning: "Anxiety Over Economic Status.",
        message: "you're feeling anxious about progress—nurture what you've started.",
        opener: "The reading opens with the Seven of Pentacles reversed, patience wearing thin on something slow to bear fruit.",
        bridge: "Alongside this, the Seven of Pentacles reversed brings a note of anxiety around progress.",
        closer: "and the reading closes with the Seven of Pentacles reversed asking you to trust the timeline a little longer.",
        advice: "Resist the urge to force this today. Some things genuinely need more time, not more pressure.",
        color: "#7A8E5E",
        altText: "The same farmer, hoe abandoned, staring anxiously at the bush as though willing it to grow faster.",
        dailyMemo: "Today may bring frustration about slow progress. It's still moving, even if you can't see it yet."
    },
    {
        card: 72,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Pentacles08.jpg",
        name: "Eight of Pentacles",
        keyword: ["Skill", "Craft", "Focus"],
        meaning: "Craftsmanship and Skilled Labor Etch Out Financial Security.",
        message: "you're honing your skills—diligent focus brings steady success.",
        opener: "The reading opens with the Eight of Pentacles, quiet focus turning practice into skill.",
        bridge: "Alongside this, the Eight of Pentacles adds steady, dedicated effort to the spread.",
        closer: "and the reading closes with the Eight of Pentacles reminding you that mastery is built one repetition at a time.",
        advice: "Put in the focused hour today instead of the scattered effort. This is how skill actually gets built.",
        color: "#5C7838",
        altText: "A craftsman carefully carves coins at his workbench, six finished pieces already hung neatly nearby.",
        dailyMemo: "Today favors focused, hands-on work. A good day to practice or refine something you care about."
    },
    {
        card: 72,
        side: "B",
        tension: 1,
        image: "./images/tarot-images/Pentacles08.jpg",
        name: "Eight of Pentacles",
        keyword: ["Greed", "Usury", "Stagnation"],
        meaning: "Void of Ambition--Greed Leads to Usury.",
        message: "you're stagnating or working without joy—rekindle your purpose.",
        opener: "The reading opens with the Eight of Pentacles reversed, effort going through the motions without real care.",
        bridge: "Alongside this, the Eight of Pentacles reversed brings a note of burnout or lost motivation in the work.",
        closer: "and the reading closes with the Eight of Pentacles reversed asking what would make this work feel meaningful again.",
        advice: "If the work feels hollow right now, reconnect with why you started it in the first place.",
        color: "#7A8C50",
        altText: "The same workbench, tools scattered, the craftsman's attention drifting away from his unfinished coins.",
        dailyMemo: "Today may bring low motivation around routine work. A small reminder of your 'why' might help."
    },
    {
        card: 73,
        side: "A",
        tension: 0,
        image: "./images/tarot-images/Pentacles09.jpg",
        name: "Nine of Pentacles",
        keyword: ["Abundance", "Success", "Independence"],
        meaning: "One Content with Financial Success and Outward Accomplishments.",
        message: "you're enjoying the fruits of your labor—independence and beauty surround you.",
        opener: "The reading opens with the Nine of Pentacles, standing comfortably in something you built yourself.",
        bridge: "Alongside this, the Nine of Pentacles adds self-made abundance and independence to the spread.",
        closer: "and the reading closes with the Nine of Pentacles reminding you that you don't need anyone's permission to enjoy this.",
        advice: "Enjoy the results of your own effort today without waiting for someone else to validate it.",
        color: "#6B8C4A",
        altText: "A woman stands alone in a flourishing vineyard, a falcon on her gloved hand, fully at ease in her own success.",
        dailyMemo: "Today favors independence and quiet success. A good day to appreciate what you've built on your own."
    },
    {
        card: 73,
        side: "B",
        tension: 1,
        image: "./images/tarot-images/Pentacles09.jpg",
        name: "Nine of Pentacles",
        keyword: ["Facade", "Superficial", "False Success"],
        meaning: "Flagrant Displays, Facade, Bad Faith.",
        message: "you're presenting a false image of success—reconnect to what matters.",
        opener: "The reading opens with the Nine of Pentacles reversed, success that looks better from the outside than it feels.",
        bridge: "Alongside this, the Nine of Pentacles reversed brings a note of image outweighing substance.",
        closer: "and the reading closes with the Nine of Pentacles reversed asking what success would actually feel like, not just look like.",
        advice: "Stop performing for an audience today and check in with what you actually want underneath the image.",
        color: "#8C9968",
        altText: "The same vineyard, less lush than it appears at first glance, the woman's ease looking more performed than real.",
        dailyMemo: "Today may bring pressure to look successful rather than feel it. Focus on what's real, not what's visible."
    },
    {
        card: 74,
        side: "A",
        tension: 0,
        image: "./images/tarot-images/Pentacles10.jpg",
        name: "Ten of Pentacles",
        keyword: ["Legacy", "Wealth", "Family"],
        meaning: "Financial Power, Material Domination, Family Inheritance.",
        message: "you're experiencing fulfillment through family, legacy, or material security.",
        opener: "The reading opens with the Ten of Pentacles, something being built that will outlast this moment.",
        bridge: "Alongside this, the Ten of Pentacles adds legacy and long-term security to the spread.",
        closer: "and the reading closes with the Ten of Pentacles reminding you that this kind of foundation takes time to fully appreciate.",
        advice: "Think beyond today. Whatever you're building now is laying the groundwork for something longer-lasting.",
        color: "#5C7C3E",
        altText: "An elderly man sits with dogs at his feet as family members gather beneath an archway leading into a grand estate.",
        dailyMemo: "Today favors thinking about legacy, family, or long-term security. A good day to plan for the future."
    },
    {
        card: 74,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Pentacles10.jpg",
        name: "Ten of Pentacles",
        keyword: ["Loss", "Ruin", "Defamation"],
        meaning: "Loss of Reputation, Pomp, Defiling The Family Name.",
        message: "you're facing instability or family tension—refocus on long-term values.",
        opener: "The reading opens with the Ten of Pentacles reversed, stability shaken at its foundation.",
        bridge: "Alongside this, the Ten of Pentacles reversed brings a note of family tension or financial instability.",
        closer: "and the reading closes with the Ten of Pentacles reversed asking what needs repair before the foundation can hold again.",
        advice: "Address the family or financial tension directly instead of letting it erode things quietly.",
        color: "#7A8C56",
        altText: "The same estate, gates closed, the family figures scattered rather than gathered beneath the archway.",
        dailyMemo: "Today may bring tension around family or long-term plans. Worth addressing directly rather than letting it sit."
    },
    {
        card: 75,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Pentacles11.jpg",
        name: "The Page of Pentacles",
        keyword: ["Ambition", "Learning", "Opportunity"],
        meaning: "A Youthful Person--Scholarly, and Willing to Work Hard. An Apprentice with New Ideas.",
        message: "you're ready to learn and grow—new financial or practical lessons await.",
        opener: "The reading opens with the Page of Pentacles, studying an opportunity closely before committing to it.",
        bridge: "Alongside this, the Page of Pentacles adds eager, practical curiosity to the spread.",
        closer: "and the reading closes with the Page of Pentacles encouraging you to keep learning as you go.",
        advice: "Start the course, the project, the plan. You don't need to know everything before beginning.",
        color: "#6B8C4A",
        altText: "A young figure stands in a green field, holding a coin up and studying it with focused curiosity.",
        dailyMemo: "Today favors learning something new and practical. A good day to start, even if you're still figuring it out."
    },
    {
        card: 75,
        side: "B",
        tension: 1,
        image: "./images/tarot-images/Pentacles11.jpg",
        name: "The Page of Pentacles",
        keyword: ["Rebellion", "Laziness", "Distraction"],
        meaning: "Rebelliousness.",
        message: "you're distracted or unmotivated—return to your goals with fresh intent.",
        opener: "The reading opens with the Page of Pentacles reversed, ambition losing steam before it gets going.",
        bridge: "Alongside this, the Page of Pentacles reversed brings a note of distraction or unfocused effort.",
        closer: "and the reading closes with the Page of Pentacles reversed asking what's actually pulling your attention away.",
        advice: "Pick the one practical task you've been putting off and give it twenty focused minutes today.",
        color: "#8C9968",
        altText: "The same figure, coin held loosely, attention wandering away from the field toward something more distracting.",
        dailyMemo: "Today may bring distraction from a goal you care about. A small, focused step will help more than waiting for motivation."
    },
    {
        card: 76,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Pentacles12.jpg",
        name: "The Knight of Pentacles",
        keyword: ["Responsibility", "Stability", "Diligence"],
        meaning: "A Responsible and Hardworking Man. He Has Acquired Sufficient Skills To Be Of Service.",
        message: "you're moving slowly but surely—persistence will pay off.",
        opener: "The reading opens with the Knight of Pentacles, moving slowly but never off course.",
        bridge: "Alongside this, the Knight of Pentacles adds steady, dependable persistence to the spread.",
        closer: "and the reading closes with the Knight of Pentacles reminding you that slow and steady is still progress.",
        advice: "Keep doing the unglamorous, consistent work today. It's building something real, even if it's not exciting.",
        color: "#5C7838",
        altText: "An armored knight sits still on a sturdy, unmoving horse, gazing steadily at the coin held in his hand.",
        dailyMemo: "Today favors routine and reliability. A good day to keep your commitments, even the boring ones."
    },
    {
        card: 76,
        side: "B",
        tension: 1,
        image: "./images/tarot-images/Pentacles12.jpg",
        name: "The Knight of Pentacles",
        keyword: ["Stagnation", "Carelessness", "Delays"],
        meaning: "Idleness, Stagnation, and Carelessness.",
        message: "you're stuck or careless—discipline is needed to move forward.",
        opener: "The reading opens with the Knight of Pentacles reversed, steady effort slipping into stagnation.",
        bridge: "Alongside this, the Knight of Pentacles reversed brings a note of carelessness or complacency.",
        closer: "and the reading closes with the Knight of Pentacles reversed asking what's stalled that needs your attention again.",
        advice: "Pick back up the routine or responsibility you've let slide. Small consistency matters more than a big push.",
        color: "#7A8C50",
        altText: "The same knight, horse standing still entirely now, his gaze drifting away from the coin in his hand.",
        dailyMemo: "Today may bring a tendency toward procrastination. One small consistent step will get you moving again."
    },
    {
        card: 77,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Pentacles13.jpg",
        name: "The Queen of Pentacles",
        keyword: ["Nurturing", "Security", "Practicality"],
        meaning: "A Highly Intelligent Woman inclined to Order and Efficiency. She's Generous, Secure, and Free of Material Care.",
        message: "you're nurturing your world with grace and care—your presence is grounding.",
        opener: "The reading opens with the Queen of Pentacles, care shown through practical, grounded action.",
        bridge: "Alongside this, the Queen of Pentacles adds nurturing stability to the spread.",
        closer: "and the reading closes with the Queen of Pentacles reminding you that comfort and competence can coexist.",
        advice: "Take care of the practical thing today, and let that be its own form of self-care.",
        color: "#5C8C4A",
        altText: "A queen sits in a lush garden, coin held gently in her lap, a rabbit visible in the greenery nearby.",
        dailyMemo: "Today favors grounded, practical nurturing. A good day to take care of home, body, or budget."
    },
    {
        card: 77,
        side: "B",
        tension: 1,
        image: "./images/tarot-images/Pentacles13.jpg",
        name: "The Queen of Pentacles",
        keyword: ["Jealousy", "Manipulation", "Greed"],
        meaning: "Condescending, Conniving, Suspicious.",
        message: "you're being manipulative or greedy—check your intentions.",
        opener: "The reading opens with the Queen of Pentacles reversed, care turning conditional or self-serving.",
        bridge: "Alongside this, the Queen of Pentacles reversed brings a note of insecurity around resources or care.",
        closer: "and the reading closes with the Queen of Pentacles reversed asking whether your generosity has strings attached right now.",
        advice: "Check whether you're giving care freely today, or using it to get something back.",
        color: "#7A8C5E",
        altText: "The same queen, garden less lush around her, her attention on the coin turning guarded rather than warm.",
        dailyMemo: "Today may bring tension around resources, money, time, or energy. Notice if generosity has quietly become conditional."
    },
    {
        card: 78,
        side: "A",
        tension: 1,
        image: "./images/tarot-images/Pentacles14.jpg",
        name: "The King of Pentacles",
        keyword: ["Wealth", "Mastery", "Stability"],
        meaning: "Mature Man, Successful in Business Accomplishments and Secure in His Ability to Make Financial Judgements.",
        message: "you're leading with wisdom and financial mastery—others trust your guidance.",
        opener: "The reading opens with the King of Pentacles, steady mastery built over real time and effort.",
        bridge: "Alongside this, the King of Pentacles adds grounded, dependable authority to the spread.",
        closer: "and the reading closes with the King of Pentacles reminding you that this kind of security was earned, not given.",
        advice: "Trust your own track record today. You've built more stability than you're giving yourself credit for.",
        color: "#4A6E38",
        altText: "A crowned king sits on a throne decorated with grapevines, a coin resting steadily in his lap, a castle visible behind him.",
        dailyMemo: "Today favors steady, confident decision-making around money or resources. Trust your experience."
    },
    {
        card: 78,
        side: "B",
        tension: 2,
        image: "./images/tarot-images/Pentacles14.jpg",
        name: "The King of Pentacles",
        keyword: ["Corruption", "Materialism", "Decline"],
        meaning: "Corrupt, Jaded, Weak, On The Brink of Financial Peril.",
        message: "you're facing corruption or downfall—real strength comes from integrity.",
        opener: "The reading opens with the King of Pentacles reversed, stability curdling into rigidity or excess.",
        bridge: "Alongside this, the King of Pentacles reversed brings a note of materialism or losing sight of real value.",
        closer: "and the reading closes with the King of Pentacles reversed asking what's actually worth building toward.",
        advice: "Reconnect with why the security you're building matters, beyond the numbers themselves.",
        color: "#6E8250",
        altText: "The same king, throne cracked at its base, his grip on the coin tightening rather than resting easy.",
        dailyMemo: "Today may bring a temptation to over-value money or status. Check in with what actually matters to you underneath that."
    }
];

const fortuneCookie = [
    {
        slide: 1,
        fortune: "Follow the advice of experts",
        remark: "Hey, listen! This fortune says to trust the experts. They probably know what's up."
    },
    {
        slide: 2,
        fortune: "Adopt an adventurous spirit",
        remark: "Time to embrace your inner explorer! This fortune encourages you to seek new experiences."
    },
    {
        slide: 3,
        fortune: "Don't bet on it",
        remark: "This one's a bit of a gamble. Better not risk it!"
    },
    {
        slide: 4,
        fortune: "Investigate and then enjoy it",
        remark: "Do your homework first, then dive in. This fortune suggests you'll find joy after careful consideration."
    },
    {
        slide: 5,
        fortune: "Focus on your home life",
        remark: "It's all about home sweet home. This fortune advises prioritizing your domestic environment."
    },
    {
        slide: 6,
        fortune: "You could find yourself unable to compromise",
        remark: "Stubborn streak ahead! Brace yourself for a situation where flexibility might be tough."
    },
    {
        slide: 7,
        fortune: "Definitely",
        remark: "No doubt about it! This fortune is as clear as crystal."
    },
    {
        slide: 8,
        fortune: "It will remain unpredictable",
        remark: "Expect the unexpected! This fortune suggests things will keep surprising you."
    },
    {
        slide: 9,
        fortune: "Better to wait",
        remark: "Patience is a virtue. This fortune advises holding off for now."
    },
    {
        slide: 10,
        fortune: "Explore it with playful curiosity",
        remark: "Time for a little adventure! Approach this with a spirit of fun and curiosity."
    },
    {
        slide: 11,
        fortune: "Absolutely not",
        remark: "Don't even think about it! This fortune is a firm 'no'."
    },
    {
        slide: 12,
        fortune: "Keep it to yourself",
        remark: "Shh... This fortune suggests keeping your plans or thoughts under wraps for now."
    },
    {
        slide: 13,
        fortune: "Do it early",
        remark: "Don't procrastinate! This fortune advises taking action sooner rather than later."
    },
    {
        slide: 14,
        fortune: "It seems assured",
        remark: "Looks like smooth sailing ahead! This fortune suggests things are likely to go as planned."
    },
    {
        slide: 15,
        fortune: "Startling events may occur as a result",
        remark: "Hold onto your hat! This fortune warns that unexpected surprises might be on the horizon."
    },
    {
        slide: 16,
        fortune: "The answer may come to you in another language",
        remark: "Bonjour! This fortune hints that insights could arrive through a different perspective or cultural influence."
    },
    {
        slide: 17,
        fortune: "It will bring good luck",
        remark: "Feeling lucky? This fortune suggests a fortunate outcome awaits."
    },
    {
        slide: 18,
        fortune: "Doubt it",
        remark: "Hmm... This fortune casts doubt on the likelihood of success."
    },
    {
        slide: 19,
        fortune: "You will need to accommodate",
        remark: "Flexibility required! This fortune advises being adaptable to changing circumstances."
    },
    {
        slide: 20,
        fortune: "There is a substantial link to another situation",
        remark: "Connections abound! This fortune suggests a significant relationship or correlation to another matter."
    },
    {
        slide: 21,
        fortune: "You will find out everything you'll need to know",
        remark: "Get ready for answers! This fortune promises that all necessary information will soon be revealed."
    },
    {
        slide: 22,
        fortune: "Be patient",
        remark: "Patience is key. This fortune advises waiting calmly for the right moment."
    },
    {
        slide: 23,
        fortune: "You'll be happy you did",
        remark: "No regrets here! This fortune suggests that taking action will lead to happiness."
    },
    {
        slide: 24,
        fortune: "Get it in writing",
        remark: "Put it down on paper! This fortune advises securing agreements or commitments in writing."
    },
    {
        slide: 25,
        fortune: "Unfavorable at this time",
        remark: "Not looking good right now. This fortune suggests unfavorable conditions currently."
    },
    {
        slide: 26,
        fortune: "Shift your focus",
        remark: "Time to change gears! This fortune advises redirecting your attention to something else."
    },
    {
        slide: 27,
        fortune: "Don't get caught up in your emotions",
        remark: "Keep your cool! This fortune advises staying rational and not letting emotions cloud your judgment."
    },
    {
        slide: 28,
        fortune: "If it's done well; If not, don't do it at all",
        remark: "Quality matters! This fortune suggests that thorough execution is crucial for success."
    },
    {
        slide: 29,
        fortune: "If you do as you're told",
        remark: "Follow orders! This fortune hints that following instructions could lead to positive outcomes."
    },
    {
        slide: 30,
        fortune: "Upgrade any way you can",
        remark: "Time for an upgrade! This fortune advises improving your situation in any possible way."
    },
    {
        slide: 31,
        fortune: "Don't ask for any more at this time",
        remark: "Enough is enough! This fortune advises against requesting additional favors or resources for now."
    },
    {
        slide: 32,
        fortune: "Avoid the first solution",
        remark: "Skip the obvious! This fortune suggests exploring alternatives rather than settling for the initial idea."
    },
    {
        slide: 33,
        fortune: "You'll get the final word",
        remark: "Your voice will be heard! This fortune promises that you'll have the last say in a matter."
    },
    {
        slide: 34,
        fortune: "It will affect how others see you",
        remark: "Image matters! This fortune suggests that your actions will influence others' perceptions of you."
    },
    {
        slide: 35,
        fortune: "Watch and see what happens",
        remark: "Keep an eye out! This fortune advises observing events unfold before making a move."
    },
    {
        slide: 36,
        fortune: "Remain flexible",
        remark: "Stay adaptable! This fortune advises being open to changes and adjustments."
    },
    {
        slide: 37,
        fortune: "The best situation may not be the obvious one",
        remark: "Look beyond the surface! This fortune suggests that the ideal solution might not be immediately apparent."
    },
    {
        slide: 38,
        fortune: "Proceed at the most relaxed pace",
        remark: "Take it easy! This fortune advises moving forward calmly and without haste."
    },
    {
        slide: 39,
        fortune: "That's out of your control",
        remark: "Hands off! This fortune reminds you that some things are beyond your influence."
    },
    {
        slide: 40,
        fortune: "Provided you say 'thank you'",
        remark: "Gratitude matters! This fortune suggests that showing appreciation could lead to favorable outcomes."
    },
    {
        slide: 41,
        fortune: "Pay attention to the details",
        remark: "The devil is in the details! This fortune advises focusing on the specifics for success."
    },
    {
        slide: 42,
        fortune: "Approach cautiously",
        remark: "Proceed with caution! This fortune warns to be careful and thoughtful in your approach."
    },
    {
        slide: 43,
        fortune: "Enjoy the experience",
        remark: "Have fun! This fortune encourages enjoying the journey or process."
    },
    {
        slide: 44,
        fortune: "Don't hesitate",
        remark: "Go for it! This fortune advises taking action without delay."
    },
    {
        slide: 45,
        fortune: "Speak up about it",
        remark: "Make your voice heard! This fortune suggests expressing your thoughts or concerns."
    },
    {
        slide: 46,
        fortune: "Watch your step as you go",
        remark: "Mind your footing! This fortune advises being cautious and aware of potential pitfalls."
    },
    {
        slide: 47,
        fortune: "It is significant",
        remark: "Big deal! This fortune indicates that the matter at hand holds importance or meaning."
    },
    {
        slide: 48,
        fortune: "Reprioritize what is important",
        remark: "Focus on what matters! This fortune suggests reassessing and adjusting your priorities."
    },
    {
        slide: 49,
        fortune: "Make a list of why not",
        remark: "List the reasons against! This fortune advises considering obstacles or reasons to avoid a course of action."
    },
    {
        slide: 50,
        fortune: "Move on",
        remark: "Time to move forward! This fortune suggests letting go of the past and progressing."
    },
    {
        slide: 51,
        fortune: "This is a good time to make a new plan",
        remark: "Time for a fresh start! This fortune suggests creating a new strategy or approach."
    },
    {
        slide: 52,
        fortune: "Expect to settle",
        remark: "Prepare for compromise. This fortune suggests reaching an agreement or resolution."
    },
    {
        slide: 53,
        fortune: "It is something you won't forget",
        remark: "Memorable moment! This fortune indicates an experience or event that will leave a lasting impression."
    },
    {
        slide: 54,
        fortune: "Don't wait",
        remark: "Act now! This fortune advises taking immediate action without delay."
    },
    {
        slide: 55,
        fortune: "Seek out more options",
        remark: "Explore other possibilities! This fortune suggests considering additional choices or alternatives."
    },
    {
        slide: 56,
        fortune: "Follow through on your obligations",
        remark: "Keep your promises! This fortune advises fulfilling your responsibilities or commitments."
    },
    {
        slide: 57,
        fortune: "Make a list of why",
        remark: "List the reasons why! This fortune suggests considering the motivations or benefits of a decision."
    },
    {
        slide: 58,
        fortune: "Follow someone else's lead",
        remark: "Take a cue from others! This fortune suggests following the guidance or example of someone else."
    },
    {
        slide: 59,
        fortune: "Deal with it later",
        remark: "Put it off for now. This fortune advises postponing action or resolution to a later time."
    },
    {
        slide: 60,
        fortune: "You'll need to take the initiative",
        remark: "Step up! This fortune suggests being proactive and taking charge of a situation."
    },
    {
        slide: 61,
        fortune: "Accept a change to your routine",
        remark: "Embrace the new! This fortune advises being open to adjustments in your daily routine."
    },
    {
        slide: 62,
        fortune: "Take a chance",
        remark: "Risk it! This fortune encourages taking a leap of faith or seizing an opportunity."
    },
    {
        slide: 63,
        fortune: "There is no guarantee",
        remark: "No promises! This fortune warns that outcomes are uncertain or unpredictable."
    },
    {
        slide: 64,
        fortune: "The circumstances will change very quickly",
        remark: "Fasten your seatbelt! This fortune indicates rapid changes or developments ahead."
    },
    {
        slide: 65,
        fortune: "Trust your original thought",
        remark: "Go with your gut! This fortune advises relying on your initial instincts or intuition."
    },
    {
        slide: 66,
        fortune: "You'll need more information",
        remark: "Seek clarity! This fortune suggests gathering additional facts or details before proceeding."
    },
    {
        slide: 67,
        fortune: "You'll have to compromise",
        remark: "Meet halfway! This fortune advises finding a middle ground or making concessions."
    },
    {
        slide: 68,
        fortune: "It will bring good luck",
        remark: "Luck is on your side! This fortune promises positive outcomes or fortunate events."
    },
    {
        slide: 69,
        fortune: "Startling events may occur as a result",
        remark: "Expect surprises! This fortune hints at unexpected or dramatic developments."
    },
    {
        slide: 70,
        fortune: "It will create a stir",
        remark: "Stir things up! This fortune suggests causing excitement, discussion, or commotion."
    },
    {
        slide: 71,
        fortune: "Mishaps are highly probable",
        remark: "Watch out for mishaps! This fortune warns of likely accidents, mistakes, or errors."
    },
    {
        slide: 72,
        fortune: "Press for closure",
        remark: "Seek resolution! This fortune advises pursuing closure or finality in a matter."
    },
    {
        slide: 73,
        fortune: "Listen more carefully, then you will know",
        remark: "Pay attention to the details! This fortune suggests careful listening for understanding or insight."
    },
    {
        slide: 74,
        fortune: "Yes",
        remark: "Simple and clear! This fortune gives a straightforward affirmative answer."
    },
    {
        slide: 75,
        fortune: "Realize that too many choices are as difficult as too few",
        remark: "Choices, choices! This fortune reminds that having many options can be just as challenging as having few."
    },
    {
        slide: 76,
        fortune: "That would be a waste of money",
        remark: "Spend wisely! This fortune advises against wasting resources or making frivolous expenditures."
    },
    {
        slide: 77,
        fortune: "Let it go",
        remark: "Release it! This fortune encourages letting go of attachments or concerns."
    },
    {
        slide: 78,
        fortune: "The answer is in your backyard",
        remark: "Look closer to home! This fortune suggests that solutions or insights are nearby."
    },
    {
        slide: 79,
        fortune: "Give it all you've got",
        remark: "Give your best effort! This fortune encourages putting in maximum energy or dedication."
    },
    {
        slide: 80,
        fortune: "You don't really care",
        remark: "Indifference rules! This fortune indicates a lack of strong feelings or investment in a matter."
    },
    {
        slide: 81,
        fortune: "Don't waste your time",
        remark: "Time is precious! This fortune advises against spending time on unproductive or fruitless activities."
    },
    {
        slide: 82,
        fortune: "A year from now it won't matter",
        remark: "Perspective is key! This fortune reminds that future perspectives may diminish current concerns."
    },
    {
        slide: 83,
        fortune: "You'll need to consider other ways",
        remark: "Think outside the box! This fortune suggests exploring alternative approaches or solutions."
    },
    {
        slide: 84,
        fortune: "Act as though it is already real",
        remark: "Visualize success! This fortune encourages embodying confidence and belief in desired outcomes."
    },
    {
        slide: 85,
        fortune: "Count to 10, ask again",
        remark: "Take a moment! This fortune advises pausing for reflection or reconsideration before proceeding."
    },
    {
        slide: 86,
        fortune: "It would be extraordinary",
        remark: "Expect something special! This fortune suggests anticipating an exceptional or remarkable event."
    },
    {
        slide: 87,
        fortune: "Setting priorities will be a necessary part of the process",
        remark: "Focus on what matters most! This fortune advises prioritizing tasks or goals for efficiency."
    },
    {
        slide: 88,
        fortune: "Use your imagination",
        remark: "Get creative! This fortune encourages using imaginative thinking or innovative ideas."
    },
    {
        slide: 89,
        fortune: "Wait",
        remark: "Patience is a virtue! This fortune advises waiting for the right timing or circumstances."
    },
    {
        slide: 90,
        fortune: "To ensure the best decisions, be calm",
        remark: "Stay calm and decide wisely! This fortune advises maintaining composure for optimal decision-making."
    },
    {
        slide: 91,
        fortune: "It's gonna be great",
        remark: "Exciting times ahead! This fortune predicts positive outcomes or enjoyable experiences."
    },
    {
        slide: 92,
        fortune: "Others will depend on your choices",
        remark: "Lead with responsibility! This fortune suggests considering the impact of decisions on others."
    },
    {
        slide: 93,
        fortune: "Laugh about it",
        remark: "Find humor in the situation! This fortune advises lightening the mood through laughter or humor."
    },
    {
        slide: 94,
        fortune: "You'll have to make it up as you go",
        remark: "Wing it! This fortune suggests improvising or adapting to changing circumstances."
    },
    {
        slide: 95,
        fortune: "You'll regret it",
        remark: "Think twice! This fortune warns of potential regrets or consequences if a decision is made hastily."
    },
    {
        slide: 96,
        fortune: "Unquestionably",
        remark: "No doubt! This fortune gives a clear and confident affirmation."
    },
    {
        slide: 97,
        fortune: "Trust your intuition",
        remark: "Listen to your gut! This fortune advises relying on instincts or inner guidance."
    },
    {
        slide: 98,
        fortune: "You know better now than ever before",
        remark: "Learn from experience! This fortune suggests using past knowledge or lessons to make informed decisions."
    },
    {
        slide: 99,
        fortune: "Of course",
        remark: "Absolutely! This fortune gives a straightforward and positive affirmation."
    },
    {
        slide: 100,
        fortune: "Perhaps, when you're older",
        remark: "Time will tell! This fortune suggests considering possibilities or decisions for the future."
    },
    {
        slide: 101,
        fortune: "Ask your mother",
        remark: "Consult the wise! This fortune humorously suggests seeking advice or guidance from a maternal figure."
    },
    {
        slide: 102,
        fortune: "Consider it an opportunity",
        remark: "See the silver lining! This fortune encourages viewing a situation as a chance for growth or positive change."
    },
    {
        slide: 103,
        fortune: "Only do it once",
        remark: "Learn from experience! This fortune advises approaching an action or decision with caution or moderation."
    },
    {
        slide: 104,
        fortune: "Maybe",
        remark: "Possibly! This fortune indicates uncertainty or multiple potential outcomes."
    },
    {
        slide: 105,
        fortune: "No",
        remark: "Straightforward denial! This fortune gives a clear and definitive negative response."
    },
    {
        slide: 106,
        fortune: "Adopt an adventurous attitude",
        remark: "Embrace adventure! This fortune encourages approaching life with curiosity and enthusiasm."
    },
    {
        slide: 107,
        fortune: "Don't bet on it",
        remark: "Play it safe! This fortune advises against relying on uncertain or risky outcomes."
    },
    {
        slide: 108,
        fortune: "Don't be ridiculous",
        remark: "Stay sensible! This fortune humorously dismisses impractical or far-fetched ideas."
    },
    {
        slide: 109,
        fortune: "Your actions will improve things",
        remark: "Make a positive impact! This fortune suggests that your efforts will lead to beneficial changes or results."
    },
    {
        slide: 110,
        fortune: "Yes",
        remark: "Simple and clear! This fortune gives a straightforward affirmative answer."
    },
    {
        slide: 111,
        fortune: "Don't bet on it",
        remark: "Play it safe! This fortune advises against relying on uncertain or risky outcomes."
    },
    {
        slide: 112,
        fortune: "Adopt an adventurous attitude",
        remark: "Embrace adventure! This fortune encourages approaching life with curiosity and enthusiasm."
    },
    {
        slide: 113,
        fortune: "Focus on your home life",
        remark: "Find comfort at home! This fortune suggests prioritizing domestic matters or personal well-being."
    },
    {
        slide: 114,
        fortune: "Follow the advice of experts",
        remark: "Trust the professionals! This fortune advises seeking guidance or counsel from knowledgeable sources."
    },
    {
        slide: 115,
        fortune: "It will remain unpredictable",
        remark: "Expect the unexpected! This fortune indicates that outcomes or situations may be uncertain or variable."
    },
    {
        slide: 116,
        fortune: "Investigate and then enjoy it",
        remark: "Explore before indulging! This fortune suggests examining or understanding something fully before engaging."
    },
    {
        slide: 117,
        fortune: "Absolutely not",
        remark: "Definitely not! This fortune gives a clear and resolute negative response."
    },
    {
        slide: 118,
        fortune: "Explore it with playful curiosity",
        remark: "Stay curious! This fortune encourages approaching new experiences or ideas with a sense of playfulness."
    },
    {
        slide: 119,
        fortune: "Keep it to yourself",
        remark: "Keep it under wraps! This fortune advises keeping thoughts, plans, or information confidential."
    },
    {
        slide: 120,
        fortune: "Better to wait",
        remark: "Patience is key! This fortune suggests delaying action or decision-making for a more opportune moment."
    },
    {
        slide: 121,
        fortune: "Be delightfully sure of it",
        remark: "Confidence is key! This fortune encourages being certain and positive about a decision or outcome."
    },
    {
        slide: 122,
        fortune: "Never",
        remark: "Absolutely not! This fortune gives a definitive and emphatic negative response."
    },
    {
        slide: 123,
        fortune: "Ask your father",
        remark: "Seek paternal advice! This fortune humorously suggests consulting a fatherly figure for guidance."
    },
    {
        slide: 124,
        fortune: "Startling events may occur as a result",
        remark: "Prepare for surprises! This fortune indicates unexpected or surprising events may unfold."
    },
    {
        slide: 125,
        fortune: "The answer may come to you in another language",
        remark: "Look for clues from different perspectives! This fortune suggests seeking insights or solutions in unconventional places."
    },
    {
        slide: 126,
        fortune: "You'll need to accommodate",
        remark: "Be flexible! This fortune advises adjusting or making allowances for changes or circumstances."
    },
    {
        slide: 127,
        fortune: "Be patient",
        remark: "Patience is a virtue! This fortune advises waiting calmly for developments or outcomes."
    },
    {
        slide: 128,
        fortune: "It will bring good luck",
        remark: "Luck is on your side! This fortune predicts favorable outcomes or fortunate events."
    },
    {
        slide: 129,
        fortune: "Doubt it",
        remark: "Skepticism is warranted! This fortune suggests questioning or being cautious about expected outcomes."
    },
    {
        slide: 130,
        fortune: "Watch and see what happens",
        remark: "Observe with curiosity! This fortune advises patiently watching for unfolding events or changes."
    },
    {
        slide: 131,
        fortune: "There is a substantial link to another situation",
        remark: "Connections abound! This fortune suggests significant ties or relationships between current and past events."
    },
    {
        slide: 132,
        fortune: "You will find out everything you'll need to know",
        remark: "Answers are coming! This fortune predicts that all necessary information will be revealed."
    },
    {
        slide: 133,
        fortune: "It will affect how others see you",
        remark: "Image matters! This fortune advises considering the impact of actions or decisions on perception."
    },
    {
        slide: 134,
        fortune: "You'll be happy you did",
        remark: "No regrets! This fortune predicts satisfaction or contentment from a decision or action."
    },
    {
        slide: 135,
        fortune: "Upgrade any way you can",
        remark: "Level up! This fortune encourages improvement or advancement in any possible manner."
    },
    {
        slide: 136,
        fortune: "Unfavorable at this time",
        remark: "Timing isn't right! This fortune suggests that current conditions are not favorable for a desired outcome."
    },
    {
        slide: 137,
        fortune: "Get it in writing",
        remark: "Document it! This fortune advises ensuring agreements or promises are formalized in writing."
    },
    {
        slide: 138,
        fortune: "Don't ask for any more at this time",
        remark: "Enough is enough! This fortune advises refraining from seeking additional favors or requests for now."
    },
    {
        slide: 139,
        fortune: "If it's done very well, if not, don't do it again",
        remark: "Quality matters! This fortune advises doing something with excellence or not doing it again if not done properly."
    },
    {
        slide: 140,
        fortune: "If you do as you're told",
        remark: "Follow instructions! This fortune suggests compliance or obedience to guidance or directives."
    },
    {
        slide: 141,
        fortune: "Leave behind old solutions",
        remark: "Embrace innovation! This fortune advises abandoning outdated or ineffective approaches."
    },
    {
        slide: 142,
        fortune: "Not if you're alone",
        remark: "Strength in numbers! This fortune suggests seeking support or collaboration rather than tackling something alone."
    },
    {
        slide: 143,
        fortune: "Bet on it",
        remark: "Take a risk! This fortune encourages confidence in a positive outcome or decision."
    },
    {
        slide: 144,
        fortune: "It would be better to focus on your work",
        remark: "Stay productive! This fortune suggests prioritizing professional or career-related tasks."
    },
    {
        slide: 145,
        fortune: "Remove your own obstacles",
        remark: "Clear the path! This fortune advises addressing personal barriers or challenges hindering progress."
    },
    {
        slide: 146,
        fortune: "You are too close to see",
        remark: "Gain perspective! This fortune suggests stepping back to gain a clearer understanding of a situation."
    },
    {
        slide: 147,
        fortune: "You may have opposition",
        remark: "Prepare for resistance! This fortune warns of potential challenges or opposition."
    },
    {
        slide: 148,
        fortune: "Finish something else first",
        remark: "Prioritize tasks! This fortune advises completing current responsibilities before taking on new ones."
    },
    {
        slide: 149,
        fortune: "The situation is unclear",
        remark: "Ambiguity reigns! This fortune indicates a lack of clarity or certainty about current circumstances."
    },
    {
        slide: 150,
        fortune: "A substantial effort will be required",
        remark: "Prepare for hard work! This fortune advises dedication and perseverance in achieving a goal or overcoming a challenge."
    },
    {
        slide: 151,
        fortune: "Reconsider your approach",
        remark: "Rethink your strategy! This fortune suggests evaluating and possibly changing your current course of action."
    },
    {
        slide: 152,
        fortune: "The chance will not come again soon",
        remark: "Seize the moment! This fortune advises taking advantage of opportunities while they are available."
    },
    {
        slide: 153,
        fortune: "Allow yourself to rest first",
        remark: "Take a break! This fortune suggests prioritizing self-care and relaxation before tackling new tasks or challenges."
    },
    {
        slide: 154,
        fortune: "Settle it soon",
        remark: "Resolve matters promptly! This fortune advises addressing and resolving issues or conflicts without delay."
    },
    {
        slide: 155,
        fortune: "Wait for a better offer",
        remark: "Be patient for a superior opportunity! This fortune advises holding out for a more advantageous proposal or situation."
    },
    {
        slide: 156,
        fortune: "It would be inadvisable",
        remark: "Not recommended! This fortune advises against a particular course of action or decision."
    },
    {
        slide: 157,
        fortune: "Yes but don't force it",
        remark: "Proceed gently! This fortune suggests moving forward cautiously or without imposing pressure."
    },
    {
        slide: 158,
        fortune: "Get a clearer view",
        remark: "Gain perspective! This fortune advises seeking clarity or understanding before making a decision or judgment."
    },
    {
        slide: 159,
        fortune: "Take a chance",
        remark: "Embrace risk! This fortune encourages courage and boldness in pursuing opportunities or taking action."
    },
    {
        slide: 160,
        fortune: "Save your energy",
        remark: "Conserve your strength! This fortune advises preserving physical or emotional energy for more productive uses."
    },
    {
        slide: 161,
        fortune: "Be practical",
        remark: "Stay grounded! This fortune advises approaching situations in a sensible and pragmatic manner."
    },
    {
        slide: 162,
        fortune: "It will sustain you",
        remark: "Find sustenance! This fortune suggests finding support or nourishment, whether physically, emotionally, or spiritually."
    },
    {
        slide: 163,
        fortune: "Don't overdo it",
        remark: "Exercise moderation! This fortune advises avoiding excess or overexertion in your endeavors."
    },
    {
        slide: 164,
        fortune: "Now you can",
        remark: "It's your moment! This fortune suggests that the time is ripe for action or decision-making."
    },
    {
        slide: 165,
        fortune: "It'll cost you",
        remark: "There's a price! This fortune warns that there may be expenses or sacrifices associated with a decision or action."
    },
    {
        slide: 166,
        fortune: "It is certain",
        remark: "Assured confidence! This fortune indicates a high degree of certainty or inevitability in an outcome."
    },
    {
        slide: 167,
        fortune: "No matter what",
        remark: "Persist through challenges! This fortune suggests determination and resilience in the face of difficulties."
    },
    {
        slide: 168,
        fortune: "The outcome will be positive",
        remark: "Optimism prevails! This fortune predicts a favorable and beneficial result from current endeavors."
    },
    {
        slide: 169,
        fortune: "Be more generous",
        remark: "Share with others! This fortune advises displaying generosity and kindness in your actions or dealings."
    },
    {
        slide: 170,
        fortune: "It is uncertain",
        remark: "Embrace uncertainty! This fortune suggests navigating a situation without clear outcomes or guarantees."
    },
    {
        slide: 171,
        fortune: "It will be a pleasure",
        remark: "Enjoy the experience! This fortune predicts a delightful and enjoyable outcome or activity."
    },
    {
        slide: 172,
        fortune: "You may have to drop other things",
        remark: "Prioritize wisely! This fortune advises focusing on essential tasks or responsibilities, even if it means letting go of others."
    },
    {
        slide: 173,
        fortune: "Don't be concerned",
        remark: "Stay calm! This fortune suggests maintaining composure and not worrying excessively about a situation."
    },
    {
        slide: 174,
        fortune: "Tell someone what it means to you",
        remark: "Express yourself! This fortune advises sharing your thoughts, feelings, or intentions with someone who matters."
    },
    {
        slide: 175,
        fortune: "It is not significant",
        remark: "Minimize importance! This fortune suggests that a situation or event may not hold great significance or impact."
    },
    {
        slide: 176,
        fortune: "Prepare for the unexpected",
        remark: "Stay adaptable! This fortune advises being ready to handle surprises or unforeseen developments."
    },
    {
        slide: 177,
        fortune: "Keep an open mind",
        remark: "Be receptive! This fortune encourages remaining open to new ideas, perspectives, or possibilities."
    },
    {
        slide: 178,
        fortune: "Whatever you do the results will be lasting",
        remark: "Consider consequences! This fortune suggests that actions or decisions may have enduring effects or implications."
    },
    {
        slide: 179,
        fortune: "You may have to drop other things",
        remark: "Prioritize wisely! This fortune advises focusing on essential tasks or responsibilities, even if it means letting go of others."
    },
    {
        slide: 180,
        fortune: "It's a good time to make plans",
        remark: "Plan ahead! This fortune suggests that the present moment is favorable for making future arrangements or strategies."
    },
    {
        slide: 181,
        fortune: "It may be difficult but you will find value in it",
        remark: "Embrace challenges! This fortune advises facing difficulties with the belief that they will lead to valuable lessons or outcomes."
    },
    {
        slide: 182,
        fortune: "Follow the advice of experts",
        remark: "Seek guidance! This fortune suggests listening to or consulting with knowledgeable individuals for valuable insights."
    },
    {
        slide: 183,
        fortune: "Adopt an adventurous attitude",
        remark: "Embrace adventure! This fortune encourages approaching life with a spirit of curiosity, courage, and openness."
    },
    {
        slide: 184,
        fortune: "It is worth the trouble",
        remark: "Endure challenges! This fortune suggests that despite difficulties, the effort or struggle will be worthwhile in the end."
    },
    {
        slide: 185,
        fortune: "You are sure to have support",
        remark: "Rely on others! This fortune assures that assistance or encouragement will be available to aid you in your endeavors."
    },
    {
        slide: 186,
        fortune: "Related issues may surface",
        remark: "Prepare for related challenges! This fortune suggests that additional or interconnected issues may arise alongside current concerns."
    },
    {
        slide: 187,
        fortune: "There will be obstacles to overcome",
        remark: "Face challenges! This fortune advises expecting and overcoming difficulties or hurdles along the way."
    },
    {
        slide: 188,
        fortune: "Assistance would make your progress a success",
        remark: "Seek support! This fortune suggests that receiving help or collaboration will contribute significantly to your success."
    },
    {
        slide: 189,
        fortune: "Collaboration will be the key",
        remark: "Work together! This fortune emphasizes the importance of teamwork and cooperation for achieving goals or resolving issues."
    },
    {
        slide: 190,
        fortune: "Gentle persistence will pay off",
        remark: "Persist patiently! This fortune advises maintaining steady effort and determination, as gradual progress will lead to success."
    },
    {
        slide: 191,
        fortune: "It cannot fail",
        remark: "Have confidence! This fortune assures that a plan, decision, or endeavor is destined for success and will not falter."
    },
    {
        slide: 192,
        fortune: "Take charge",
        remark: "Lead confidently! This fortune advises taking control of a situation or decision with assertiveness and authority."
    },
    {
        slide: 193,
        fortune: "It may already be a done deal",
        remark: "It's likely settled! This fortune suggests that something is likely already decided or in place, potentially without need for further action."
    },
    {
        slide: 194,
        fortune: "Seek out more options",
        remark: "Explore alternatives! This fortune advises considering additional choices or solutions before making a final decision."
    },
    {
        slide: 195,
        fortune: "You will not be disappointed",
        remark: "Expect satisfaction! This fortune assures that expectations will be met or exceeded, leading to a positive outcome."
    },
    {
        slide: 196,
        fortune: "Follow through with your good intentions",
        remark: "Stay committed! This fortune advises acting upon positive intentions or promises with determination and resolve."
    },
    {
        slide: 197,
        fortune: "Take more time to decide",
        remark: "Deliberate thoughtfully! This fortune suggests allowing yourself sufficient time to make a thoughtful and informed decision."
    },
    {
        slide: 198,
        fortune: "You must act now",
        remark: "Seize the moment! This fortune advises taking immediate action or making a decision promptly to capitalize on opportunities."
    },
    {
        slide: 199,
        fortune: "Don't ignore the obvious",
        remark: "Acknowledge the truth! This fortune advises facing or accepting a straightforward reality or situation."
    },
    {
        slide: 200,
        fortune: "Don't be pressured into acting too quickly",
        remark: "Exercise caution! This fortune warns against making hasty decisions under pressure, urging thoughtful consideration instead."
    },
    {
        slide: 201,
        fortune: "Respect the rules",
        remark: "Follow guidelines! This fortune advises adhering to established rules or principles for a smoother process."
    },
    {
        slide: 202,
        fortune: "If you don't resist",
        remark: "Stay adaptable! This fortune suggests that being flexible and open to change will lead to better outcomes."
    },
    {
        slide: 203,
        fortune: "It's not worth the struggle",
        remark: "Choose wisely! This fortune suggests considering whether the effort or difficulty of a situation is worthwhile."
    },
    {
        slide: 204,
        fortune: "Don't forget to have fun",
        remark: "Enjoy the journey! This fortune advises finding joy or pleasure in whatever you're doing or experiencing."
    },
    {
        slide: 205,
        fortune: "Be practical",
        remark: "Stay grounded! This fortune advises approaching situations in a sensible and pragmatic manner."
    },
    {
        slide: 206,
        fortune: "It will sustain you",
        remark: "Find sustenance! This fortune suggests finding support or nourishment, whether physically, emotionally, or spiritually."
    },
    {
        slide: 207,
        fortune: "Don't overdo it",
        remark: "Exercise moderation! This fortune advises avoiding excess or overexertion in your endeavors."
    },
    {
        slide: 208,
        fortune: "Now you can",
        remark: "It's your moment! This fortune suggests that the time is ripe for action or decision-making."
    },
    {
        slide: 209,
        fortune: "It'll cost you",
        remark: "There's a price! This fortune warns that there may be expenses or sacrifices associated with a decision or action."
    },
    {
        slide: 210,
        fortune: "It is certain",
        remark: "Assured confidence! This fortune indicates a high degree of certainty or inevitability in an outcome."
    },
    {
        slide: 211,
        fortune: "No matter what",
        remark: "Persist through challenges! This fortune suggests determination and resilience in the face of difficulties."
    },
    {
        slide: 212,
        fortune: "The outcome will be positive",
        remark: "Optimism prevails! This fortune predicts a favorable and beneficial result from current endeavors."
    },
    {
        slide: 213,
        fortune: "Be more generous",
        remark: "Share with others! This fortune advises displaying generosity and kindness in your actions or dealings."
    },
    {
        slide: 214,
        fortune: "It is uncertain",
        remark: "Embrace uncertainty! This fortune suggests navigating a situation without clear outcomes or guarantees."
    },
    {
        slide: 215,
        fortune: "It will be a pleasure",
        remark: "Enjoy the experience! This fortune predicts a delightful and enjoyable outcome or activity."
    },
    {
        slide: 216,
        fortune: "You may have to drop other things",
        remark: "Prioritize wisely! This fortune advises focusing on essential tasks or responsibilities, even if it means letting go of others."
    },
    {
        slide: 217,
        fortune: "Don't be concerned",
        remark: "Stay calm! This fortune suggests maintaining composure and not worrying excessively about a situation."
    },
    {
        slide: 218,
        fortune: "Tell someone what it means to you",
        remark: "Express yourself! This fortune advises sharing your thoughts, feelings, or intentions with someone who matters."
    },
    {
        slide: 219,
        fortune: "It is not significant",
        remark: "Minimize importance! This fortune suggests that a situation or event may not hold great significance or impact."
    },
    {
        slide: 220,
        fortune: "Prepare for the unexpected",
        remark: "Stay adaptable! This fortune advises being ready to handle surprises or unforeseen developments."
    },
    {
        slide: 221,
        fortune: "Keep an open mind",
        remark: "Stay receptive! This fortune advises being open to new ideas, perspectives, or possibilities."
    },
    {
        slide: 222,
        fortune: "Whatever you do the results will be lasting",
        remark: "Consider consequences! This fortune suggests that actions or decisions may have long-term impacts or effects."
    },
    {
        slide: 223,
        fortune: "It's a good time to make plans",
        remark: "Plan ahead! This fortune advises using the current favorable circumstances to make future arrangements or strategies."
    },
    {
        slide: 224,
        fortune: "It may be difficult but you will find value in it",
        remark: "Embrace challenges! This fortune advises facing difficulties with the belief that they will lead to valuable lessons or outcomes."
    },
    {
        slide: 225,
        fortune: "Follow the advice of experts",
        remark: "Seek guidance! This fortune suggests listening to or consulting with knowledgeable individuals for valuable insights."
    },
    {
        slide: 226,
        fortune: "Adopt an adventurous attitude",
        remark: "Embrace adventure! This fortune encourages approaching life with a spirit of curiosity, courage, and openness."
    },
    {
        slide: 227,
        fortune: "It is worth the trouble",
        remark: "Endure challenges! This fortune suggests that despite difficulties, the effort or struggle will be worthwhile in the end."
    },
    {
        slide: 228,
        fortune: "You are sure to have support",
        remark: "Rely on others! This fortune assures that assistance or encouragement will be available to aid you in your endeavors."
    },
    {
        slide: 229,
        fortune: "Related issues may surface",
        remark: "Prepare for related challenges! This fortune suggests that additional or interconnected issues may arise alongside current concerns."
    },
    {
        slide: 230,
        fortune: "There will be obstacles to overcome",
        remark: "Face challenges! This fortune advises expecting and overcoming difficulties or hurdles along the way."
    },
    {
        slide: 231,
        fortune: "Assistance would make your progress a success",
        remark: "Seek support! This fortune suggests that receiving help or collaboration will contribute significantly to your success."
    },
    {
        slide: 232,
        fortune: "Collaboration will be the key",
        remark: "Work together! This fortune emphasizes the importance of teamwork and cooperation for achieving goals or resolving issues."
    },
    {
        slide: 233,
        fortune: "Gentle persistence will pay off",
        remark: "Persist patiently! This fortune advises maintaining steady effort and determination, as gradual progress will lead to success."
    },
    {
        slide: 234,
        fortune: "It cannot fail",
        remark: "Have confidence! This fortune assures that a plan, decision, or endeavor is destined for success and will not falter."
    },
    {
        slide: 235,
        fortune: "Take charge",
        remark: "Lead confidently! This fortune advises taking control of a situation or decision with assertiveness and authority."
    },
    {
        slide: 236,
        fortune: "It may already be a done deal",
        remark: "It's likely settled! This fortune suggests that something is likely already decided or in place, potentially without need for further action."
    },
    {
        slide: 237,
        fortune: "Seek out more options",
        remark: "Explore alternatives! This fortune advises considering additional choices or solutions before making a final decision."
    },
    {
        slide: 238,
        fortune: "You will not be disappointed",
        remark: "Expect satisfaction! This fortune assures that expectations will be met or exceeded, leading to a positive outcome."
    },
    {
        slide: 239,
        fortune: "Follow through with your good intentions",
        remark: "Stay committed! This fortune advises acting upon positive intentions or promises with determination and resolve."
    },
    {
        slide: 240,
        fortune: "Take more time to decide",
        remark: "Deliberate thoughtfully! This fortune suggests allowing yourself sufficient time to make a thoughtful and informed decision."
    },
    {
        slide: 241,
        fortune: "Embrace change",
        remark: "Change brings opportunities for growth and new beginnings."
    },
    {
        slide: 242,
        fortune: "Trust your instincts",
        remark: "Your intuition holds valuable insights; listen closely."
    },
    {
        slide: 243,
        fortune: "Seek clarity",
        remark: "Clear vision helps in making wise decisions."
    },
    {
        slide: 244,
        fortune: "Open your heart",
        remark: "Love and compassion lead to meaningful connections."
    },
    {
        slide: 245,
        fortune: "Focus on joy",
        remark: "Joy is found in simplicity and gratitude."
    },
    {
        slide: 246,
        fortune: "Patience pays off",
        remark: "Good things come to those who wait patiently."
    },
    {
        slide: 247,
        fortune: "Find balance",
        remark: "Harmony comes from balancing work and rest."
    },
    {
        slide: 248,
        fortune: "Expect surprises",
        remark: "Stay open to unexpected blessings and opportunities."
    },
    {
        slide: 249,
        fortune: "Embrace growth",
        remark: "Challenges are opportunities for personal development."
    },
    {
        slide: 250,
        fortune: "Practice gratitude",
        remark: "Gratitude opens doors to abundance and happiness."
    },
    {
        slide: 251,
        fortune: "Listen deeply",
        remark: "Understanding others fosters harmony and connection."
    },
    {
        slide: 252,
        fortune: "Take bold steps",
        remark: "Courage and action lead to success and fulfillment."
    },
    {
        slide: 253,
        fortune: "Celebrate achievements",
        remark: "Every milestone deserves acknowledgment and celebration."
    },
    {
        slide: 254,
        fortune: "Stay flexible",
        remark: "Adaptability is key to navigating life's changes."
    },
    {
        slide: 255,
        fortune: "Simplify life",
        remark: "Clarity comes from focusing on what truly matters."
    },
    {
        slide: 256,
        fortune: "Share your gifts",
        remark: "Your talents enrich the lives of others; share them generously."
    },
    {
        slide: 257,
        fortune: "Forgive and heal",
        remark: "Forgiveness frees the heart and brings inner peace."
    },
    {
        slide: 258,
        fortune: "Pursue dreams",
        remark: "Dedication and persistence turn dreams into reality."
    },
    {
        slide: 259,
        fortune: "Learn from challenges",
        remark: "Obstacles are lessons in disguise; embrace growth."
    },
    {
        slide: 260,
        fortune: "Believe in yourself",
        remark: "Confidence and self-belief empower you to achieve greatness."
    }
]

const openingLines = [
    [
        "The energy here is remarkably clear — nothing is blocked, nothing is fighting for attention.",
        "This is about as clean a reading as they come; the path ahead is unobstructed.",
        "Every card points in the same direction. There's no static in this signal.",
        "Rare stillness surrounds this pull — what you're seeing is simply what is, no distortion.",
        "The cards are in agreement. Trust what follows without second-guessing it."
    ],
    [
        "This is a fairly ordinary reading — some threads to pull on, nothing alarming.",
        "A typical spread: a few things worth noting, but nothing that demands urgent attention.",
        "The cards suggest a normal mix of movement and stillness.",
        "Nothing here is out of the ordinary — just the usual push and pull of things in motion.",
        "A grounded, everyday sort of pull. Take it as a gentle nudge rather than a warning."
    ],
    [
        "There's a noticeable pull of tension in this spread — worth slowing down and paying attention.",
        "A few of these cards are pulling against each other; approach this reading with a bit of caution.",
        "This spread carries some friction. Take what follows seriously, but not with alarm.",
        "Something here is asking to be handled carefully — not a crisis, but not nothing either.",
        "There's a bit of resistance in this pull. Read on, but keep your eyes open."
    ],
    [
        "Before anything else: this is a heavy spread, and it deserves a moment of caution before we go further.",
        "This reading opens with real weight behind it — take a breath before reading on.",
        "There's significant tension across all three cards here; read what follows carefully and without rushing to conclusions.",
        "This pull is a heavy one. What follows isn't meant to alarm you, but it does ask for your full attention.",
        "Sit with this for a moment before continuing — the cards are asking to be taken seriously."
    ]
]

// ----- Keywords List --------- //
const keywordsReading = [];



const buildingAdviceQuotes = (keywordsReading) => {
    const getTwoRandomKeywords = (list) => {
        const shuffled = [...list].sort(() => 0.5 - Math.random())
        return [shuffled[0], shuffled[1]];
    }
    const [kwA, kwB] = getTwoRandomKeywords(keywordsReading);

    return [
        `Taking into account the energy of ${keywordsReading[Math.floor(Math.random() * keywordsReading.length)]} here's the advice I have for you: `,
        `Given the pull of ${keywordsReading[Math.floor(Math.random() * keywordsReading.length)]} in this spread, here's something worth holding onto: `,
        `The energy of ${keywordsReading[Math.floor(Math.random() * keywordsReading.length)]} is asking to be heard right now, so here's the advice that comes with it: `,
        `Keeping the energy of ${keywordsReading[Math.floor(Math.random() * keywordsReading.length)]} in mind, here's the advice this reading leaves you with: `,
        `With ${kwA} and ${kwB} both present in this reading, here's what I'd suggest: `,
        `${kwA} and ${kwB} are speaking to each other here, and the advice that follows is this: `,
        `Considering ${kwA} alongside ${kwB} , here's what this reading wants you to know: `,
        `Between ${keywordsReading[1]}, ${keywordsReading[0]}, and ${keywordsReading[2]}, one piece of advice rises to the top: `,
        `With ${keywordsReading[1]}, ${keywordsReading[0]}, and ${keywordsReading[2]} all in the mix, this is the thread worth following: `,
        `${keywordsReading[1]}, ${keywordsReading[0]}, ${keywordsReading[2]} — taking all three into account, here's the advice worth carrying with you: `,
    ]
}
const adviceQuotes = [
]