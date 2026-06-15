// Space To Include User's Spiritual Input
const userSpiritualInput = [];
const SpiritualInput = [];

// Array of Tarot Cards and Meaning
const tarotCards = [
    // The Major Arcana
    {
        card: 1,
        side: "A",
        image: "./images/tarot-images/00-TheFool.jpg",
        name: "0 - The Fool",
        keyword: "Beginnings, Freedom, Innocence",
        meaning: "One who is enthusiastic but inattentive to details. Immature and Carefree, yet Pure of Heart.",
        message: "you're standing on the edge of something new, urging you to trust your intuition and step forward without fear of the unknown."
    },
    {
        card: 1,
        side: "B",
        image: "./images/tarot-images/00-TheFool.jpg",
        name: "0 - The Fool",
        keyword: "Carelessness, Recklessness, Naivety",
        meaning: "Poor Evaluations, Carelessness.",
        message: "you're neglecting important details or acting impulsively without fully considering the consequences."
    },
    {
        card: 2,
        side: "A",
        image: "./images/tarot-images/01-TheMagician.jpg",
        name: "I - The Magician",
        keyword: "Manifestation, Power, Skill",
        meaning: "With Wisdom and Skill, He Harnesses Energy into Force, and Force into Power for the Benefit of Mankind.",
        message: "you're being reminded of your inner power and ability to manifest your desires through skill and intention."
    },
    {
        card: 2,
        side: "B",
        image: "./images/tarot-images/01-TheMagician.jpg",
        name: "I - The Magician",
        keyword: "Misuse, Manipulation, Destruction",
        meaning: "Misuse of One's Power for Destructive Purposes.",
        message: "you're cautioned against using your abilities or influence in manipulative or destructive ways."
    },
    {
        card: 3,
        side: "A",
        image: "./images/tarot-images/02-TheHighPriestess.jpg",
        name: "II - The High Priestess",
        keyword: "Intuition, Secrets, Wisdom",
        meaning: "Penetrating Intuition and Foresight are aspects of Her Wisdom and Mystery. Her Acute Mind could be applied to The Sciences.",
        message: "it's time to listen deeply to your intuition and acknowledge the wisdom hidden beneath the surface."
    },
    {
        card: 3,
        side: "B",
        image: "./images/tarot-images/02-TheHighPriestess.jpg",
        name: "II - The High Priestess",
        keyword: "Impatience, Superficial, Disconnected",
        meaning: "Impatient, Self-Centered, Superficial in Knowledge.",
        message: "you're ignoring your deeper intuition, causing disconnection and superficial understanding."
    },
    {
        card: 4,
        side: "A",
        image: "./images/tarot-images/03-TheEmpress.jpg",
        name: "III - The Empress",
        keyword: "Nurturing, Abundance, Growth",
        meaning: "Wife, Mother, Companion. Through Warmth and Devotion, She Brings Pleasure and Comfort to her loved ones. Finds Practical Application and Purposes for Ideas.",
        message: "you're encouraged to nurture yourself and others, recognizing the abundance and beauty in your surroundings."
    },
    {
        card: 4,
        side: "B",
        image: "./images/tarot-images/03-TheEmpress.jpg",
        name: "III - The Empress",
        keyword: "Selfishness, Imbalance, Demands",
        meaning: "Demands Much to be Given and Little Returned.",
        message: "you're focusing too much on your own needs or experiencing imbalance in how you give and receive care."
    },
    {
        card: 5,
        side: "A",
        image: "./images/tarot-images/04-TheEmperor.jpg",
        name: "IV - The Emperor",
        keyword: "Authority, Structure, Control",
        meaning: "A Mature Man with Conviction and the Ability to Execute Plans and Ideas. He Maintains an Overview of All Situations with Stability, Control, and Reason.",
        message: "you're called to step into your power, create structure, and confidently guide situations to success."
    },
    {
        card: 5,
        side: "B",
        image: "./images/tarot-images/04-TheEmperor.jpg",
        name: "IV - The Emperor",
        keyword: "Unreasonable, Shortsighted, Tyranny",
        meaning: "Shortsighted and Unreasonable.",
        message: "you're being warned about rigidity, unreasonable attitudes, or the misuse of your authority."
    },
    {
        card: 6,
        side: "A",
        image: "./images/tarot-images/05-TheHierophant.jpg",
        name: "V - The Hierophant",
        keyword: "Tradition, Guidance, Belief",
        meaning: "He Reflects His Spiritual Beliefs and Concern for Others Through Example.",
        message: "you're encouraged to honor traditions or seek guidance from wise mentors or spiritual teachings."
    },
    {
        card: 6,
        side: "B",
        image: "./images/tarot-images/05-TheHierophant.jpg",
        name: "V - The Hierophant",
        keyword: "False Prophecy, Self-Righteousness, Arrogance",
        meaning: "A False Prophet Presumptuous, Self-Righteous.",
        message: "you're cautioned against blindly following dogmatic beliefs or allowing arrogance to cloud your judgment."
    },
    {
        card: 7,
        side: "A",
        image: "./images/tarot-images/06-TheLovers.jpg",
        name: "VI - The Lovers",
        keyword: "Union, Harmony, Love",
        meaning: "The End of Isolation and The Formation of a Bond based on Love, Honor, and Trust.",
        message: "you're entering a period of meaningful connection, harmony, and mutual respect in relationships."
    },
    {
        card: 7,
        side: "B",
        image: "./images/tarot-images/06-TheLovers.jpg",
        name: "VI - The Lovers",
        keyword: "Infatuation, Lust, Disharmony",
        meaning: "Infatuation, Lust, Conceit.",
        message: "you're warned about shallow attractions, unbalanced relationships, or conflicts arising from poor choices."
    },
    {
        card: 8,
        side: "A",
        image: "./images/tarot-images/07-TheChariot.jpg",
        name: "VII - The Chariot",
        keyword: "Victory, Determination, Triumph",
        meaning: "A Triumphant Victory over Life's Opposing Forces. With Difficulties Resolved, Balance is Restored.",
        message: "you're gaining momentum; keep your focus, determination, and willpower strong to overcome challenges."
    },
    {
        card: 8,
        side: "B",
        image: "./images/tarot-images/07-TheChariot.jpg",
        name: "VII - The Chariot",
        keyword: "Defeat, Imbalance, Controversy",
        meaning: "Controversy, Imbalance, Defeat.",
        message: "you're experiencing loss of direction or imbalance; it's time to reassess your course of action."
    },
    {
        card: 9,
        side: "A",
        image: "./images/tarot-images/08-Strength.jpg",
        name: "VIII - Strength",
        keyword: "Courage, Compassion, Control",
        meaning: "Courage, Compassion, and Determination Enable one to Subdue and Soothe the Hostile Forces Within Ourselves or Others.",
        message: "you're learning to tame inner turmoil with patience, compassion, and quiet resolve."
    },
    {
        card: 9,
        side: "B",
        image: "./images/tarot-images/08-Strength.jpg",
        name: "VIII - Strength",
        keyword: "Cowardice, Avoidance, Weakness",
        meaning: "Unleashed Hostility, Cowardice, Avoidance.",
        message: "you're letting fear or insecurity dictate your actions instead of standing firm with inner strength."
    },
    {
        card: 10,
        side: "A",
        image: "./images/tarot-images/09-TheHermit.jpg",
        name: "IX - The Hermit",
        keyword: "Wisdom, Reflection, Solitude",
        meaning: "Great Wisdom, Vision, and Counsel Selflessly Given to All Who Seek The Light of His Experience.",
        message: "you're being called to retreat inward, seek solitude, and trust your inner wisdom to light the way."
    },
    {
        card: 10,
        side: "B",
        image: "./images/tarot-images/09-TheHermit.jpg",
        name: "IX - The Hermit",
        keyword: "Isolation, Withdrawal, Loneliness",
        meaning: "Withdrawal from Responsibility to Others.",
        message: "you're withdrawing too deeply or avoiding necessary connection—don't confuse isolation with introspection."
    },
    {
        card: 11,
        side: "A",
        image: "./images/tarot-images/10-WheelOfFortune.jpg",
        name: "X - Wheel of Fortune",
        keyword: "Cycles, Destiny, Change",
        meaning: "The Wheel is Ever Turning, Heralding Change, and Unfolding Fate. Gain or Loss could Be Next?",
        message: "you're entering a new cycle of fate—stay open, flexible, and alert to opportunities or changes ahead."
    },
    {
        card: 11,
        side: "B",
        image: "./images/tarot-images/10-WheelOfFortune.jpg",
        name: "X - Wheel of Fortune",
        keyword: "Misfortune, Stagnation, Defeat",
        meaning: "One Defeated by Change or Misfortune.",
        message: "you're feeling stuck or unlucky, but resisting the cycle will only prolong the hardship—flow with it."
    },
    {
        card: 12,
        side: "A",
        image: "./images/tarot-images/11-Justice.jpg",
        name: "XI - Justice",
        keyword: "Balance, Fairness, Truth",
        meaning: "Your Rights have been Protected by Her Word. The Scales Weigh in Your Favor to Claim Your Innocence.",
        message: "you're being asked to act with integrity, own your truth, and make choices rooted in fairness and clarity."
    },
    {
        card: 12,
        side: "B",
        image: "./images/tarot-images/11-Justice.jpg",
        name: "XI - Justice",
        keyword: "Injustice, Bias, Dishonesty",
        meaning: "Intolerance, Bias, Injustice.",
        message: "you're facing imbalance or dishonesty—something isn't fair, and it’s time to stand up or realign."
    },
    {
        card: 13,
        side: "A",
        image: "./images/tarot-images/12-TheHangedMan.jpg",
        name: "XII - The Hanged Man",
        keyword: "Sacrifice, Perspective, Surrender",
        meaning: "One who has Found Equilibrium Through His Own Concept of Reality. Spirituality, Intuition, and Self-Sacrifice are Implied.",
        message: "you're being invited to pause, let go of control, and shift your perspective to gain deeper clarity."
    },
    {
        card: 13,
        side: "B",
        image: "./images/tarot-images/12-TheHangedMan.jpg",
        name: "XII - The Hanged Man",
        keyword: "Stubbornness, Limitation, Defeat",
        meaning: "One Bound By Convention, Faithless.",
        message: "you're clinging too tightly to old ways or resisting necessary change—surrender is the key."
    },
    {
        card: 14,
        side: "A",
        image: "./images/tarot-images/13-Death.jpg",
        name: "XIII - Death",
        keyword: "Transformation, Endings, Renewal",
        meaning: "Great Change in Lifestyle, View of Self, or View of the World.",
        message: "you're undergoing a powerful transformation—something must end to make space for true renewal."
    },
    {
        card: 14,
        side: "B",
        image: "./images/tarot-images/13-Death.jpg",
        name: "XIII - Death",
        keyword: "Stagnation, Resistance, Fear",
        meaning: "Stagnation, Inertia.",
        message: "you're resisting a necessary ending, which only delays the growth and rebirth waiting for you."
    },
    {
        card: 15,
        side: "A",
        image: "./images/tarot-images/14-Temperance.jpg",
        name: "XIV - Temperance",
        keyword: "Balance, Patience, Clarity",
        meaning: "Clarity, Contemplation, Patience Point the Way to Understanding the Nature of Heaven or Earth.",
        message: "you're encouraged to find harmony through moderation, patience, and spiritual clarity."
    },
    {
        card: 15,
        side: "B",
        image: "./images/tarot-images/14-Temperance.jpg",
        name: "XIV - Temperance",
        keyword: "Imbalance, Disruption, Confusion",
        meaning: "Scattered Forces, Conflicting Interests, Confused Direction.",
        message: "you're feeling pulled in too many directions—slow down and restore internal balance."
    },
    {
        card: 16,
        side: "A",
        image: "./images/tarot-images/15-TheDevil.jpg",
        name: "XV - The Devil",
        keyword: "Temptation, Addiction, Bondage",
        meaning: "Man's Most Destructive Qualities Unleashed. Great Caution and Awareness necessary in Business or Personal Relationships.",
        message: "you're becoming entangled in unhealthy habits or attachments that limit your freedom."
    },
    {
        card: 16,
        side: "B",
        image: "./images/tarot-images/15-TheDevil.jpg",
        name: "XV - The Devil",
        keyword: "Freedom, Release, Awareness",
        meaning: "Blindness, Weakness, Submission to Evil Forces.",
        message: "you're beginning to free yourself from toxic patterns—keep going and don't look back."
    },
    {
        card: 17,
        side: "A",
        image: "./images/tarot-images/16-TheTower.jpg",
        name: "XVI - The Tower",
        keyword: "Destruction, Sudden Change, Chaos",
        meaning: "In a Flash, The Road One has Traveled, Comes to a Sudden Halt. Sudden Change, Disruption, and Adversity.",
        message: "you're experiencing a breakdown of false structures—it's painful but necessary for truth to emerge."
    },
    {
        card: 17,
        side: "B",
        image: "./images/tarot-images/16-TheTower.jpg",
        name: "XVI - The Tower",
        keyword: "Avoidance, Resistance, Tyranny",
        meaning: "Tyranny, Oppression.",
        message: "you're trying to avoid inevitable change, but the longer you resist, the more turbulent the shift becomes."
    },
    {
        card: 18,
        side: "A",
        image: "./images/tarot-images/17-TheStar.jpg",
        name: "XVII - The Star",
        keyword: "Hope, Inspiration, Healing",
        meaning: "Enlightenment, Inspiration, Purification, Finding One's Inner Light.",
        message: "you're entering a phase of healing and renewal—let your inner light guide you forward."
    },
    {
        card: 18,
        side: "B",
        image: "./images/tarot-images/17-TheStar.jpg",
        name: "XVII - The Star",
        keyword: "Arrogance, Defeatism, Pessimism",
        meaning: "Arrogance, Defeatism.",
        message: "you're losing faith in yourself or the path ahead—reconnect to hope and possibility."
    },
    {
        card: 19,
        side: "A",
        image: "./images/tarot-images/18-TheMoon.jpg",
        name: "XVIII - The Moon",
        keyword: "Illusion, Fear, Confusion",
        meaning: "Darkness Magnifies Fears and Dangers. Harsh Realities. Disillusionment.",
        message: "you're walking through shadowy terrain—trust your intuition and beware of illusion or deception."
    },
    {
        card: 19,
        side: "B",
        image: "./images/tarot-images/18-TheMoon.jpg",
        name: "XVIII - The Moon",
        keyword: "Peace, Clarity, Resolution",
        meaning: "Peace Follows Difficult Period.",
        message: "you're beginning to see through the fog—clarity is dawning after confusion or fear."
    },
    {
        card: 20,
        side: "A",
        image: "./images/tarot-images/19-TheSun.jpg",
        name: "XIX - The Sun",
        keyword: "Joy, Vitality, Success",
        meaning: "Warmth and Sincerity in a Relationship. Liberation from Limitation. Growth, Expansion.",
        message: "you're radiating joy and confidence—this is a time of success, celebration, and radiant truth."
    },
    {
        card: 20,
        side: "B",
        image: "./images/tarot-images/19-TheSun.jpg",
        name: "XIX - The Sun",
        keyword: "Loneliness, Uncertainty, Loss",
        meaning: "Loneliness, Uncertainty, Possible Loss of Relationship.",
        message: "you're feeling dimmed or uncertain—it's time to reclaim your light and find your joy again."
    },
    {
        card: 21,
        side: "A",
        image: "./images/tarot-images/20-Judgement.jpg",
        name: "XX - Judgement",
        keyword: "Rebirth, Awareness, Purpose",
        meaning: "An Unfolding Sense of One's Part and Purpose in the World and the Universe. Awareness of the Interrelation of All Things.",
        message: "you're awakening to a higher calling—reflect on your past and prepare to step into purpose."
    },
    {
        card: 21,
        side: "B",
        image: "./images/tarot-images/20-Judgement.jpg",
        name: "XX - Judgement",
        keyword: "Fear, Isolation, Guilt",
        meaning: "Fear of the Unknown, Isolation, Separation.",
        message: "you're avoiding accountability or doubting your worth—release judgment and trust in your renewal."
    },
    {
        card: 22,
        side: "A",
        image: "./images/tarot-images/21-TheWorld.jpg",
        name: "XXI - The World",
        keyword: "Completion, Wholeness, Fulfillment",
        meaning: "Attainment of Wealth and Prosperity. Recognition and Rewards from Earnest Labor. Change in Status.",
        message: "you’ve reached a major milestone—embrace the sense of fulfillment and prepare for your next evolution."
    },
    {
        card: 22,
        side: "B",
        image: "./images/tarot-images/21-TheWorld.jpg",
        name: "XXI - The World",
        keyword: "Stagnation, Unrealistic Expectations",
        meaning: "Superficial Vision, Outlandish Expectations.",
        message: "you're feeling incomplete or blocked—reconnect to your purpose and finish what was started."
    },


    // The Minor Arcana
        // Wands
    {
        card: 23,
        side: "A",
        image: "./images/tarot-images/Wands01.jpg",
        name: "Ace of Wands",
        keyword: "Inspiration, Creation, Potential",
        meaning: "The Source and Origin of Spiritual Strength. The Seed of Inspiration and Creation.",
        message: "a burst of inspiration or the potential for a bold new project is igniting within you."
    },
    {
        card: 23,
        side: "B",
        image: "./images/tarot-images/Wands01.jpg",
        name: "Ace of Wands",
        keyword: "Decadence, Corruption, Spiritual Poverty",
        meaning: "Decadence, Corruption, Spiritual Poverty.",
        message: "you're missing an opportunity to create or feeling spiritually disconnected."
    },
    {
        card: 24,
        side: "A",
        image: "./images/tarot-images/Wands02.jpg",
        name: "Two of Wands",
        keyword: "Dominion, Exploration, Decisions",
        meaning: "Though Power and Dominion are Within One's Grasp--Still One is Forlorn.",
        message: "you're facing a choice between comfort and expansion—your next move defines your path."
    },
    {
        card: 24,
        side: "B",
        image: "./images/tarot-images/Wands02.jpg",
        name: "Two of Wands",
        keyword: "Fear, Uncertainty, Stagnation",
        meaning: "Emotional Disturbance, Fear of the Unknown.",
        message: "you're hesitating out of fear of the unknown—don't let doubt stop your progress."
    },
    {
        card: 25,
        side: "A",
        image: "./images/tarot-images/Wands03.jpg",
        name: "Three of Wands",
        keyword: "Expansion, Progress, Vision",
        meaning: "Great Spiritual Strength enables One through Contemplation to Meet What Lies Ahead.",
        message: "you're gaining momentum through clarity and long-term vision—keep going."
    },
    {
        card: 25,
        side: "B",
        image: "./images/tarot-images/Wands03.jpg",
        name: "Three of Wands",
        keyword: "Disappointment, Delay, Failure",
        meaning: "The End of Trials, Disappointment, and Trouble.",
        message: "you're dealing with disappointment or feeling stuck—don't give up, adjust your approach."
    },
    {
        card: 26,
        side: "A",
        image: "./images/tarot-images/Wands04.jpg",
        name: "Four of Wands",
        keyword: "Celebration, Harmony, Success",
        meaning: "Bountiful and Well-Earned Harvest of Peace, Prosperity, and Harmony.",
        message: "you're being blessed with joy, stability, and harmony in your home or community."
    },
    {
        card: 26,
        side: "B",
        image: "./images/tarot-images/Wands04.jpg",
        name: "Four of Wands",
        keyword: "Imbalance, Disruption, Unsettled",
        meaning: "Unaltered Peace, Prosperity, and Harmony.",
        message: "you're struggling to find balance—realign with what truly matters."
    },
    {
        card: 27,
        side: "A",
        image: "./images/tarot-images/Wands05.jpg",
        name: "Five of Wands",
        keyword: "Competition, Conflict, Struggle",
        meaning: "Competition and Struggle for Dominance and Power.",
        message: "you're challenged to stand your ground—conflict may be necessary for growth."
    },
    {
        card: 27,
        side: "B",
        image: "./images/tarot-images/Wands05.jpg",
        name: "Five of Wands",
        keyword: "Deception, Underhandedness, Litigation",
        meaning: "Deception, Litigation, Underhandedness.",
        message: "you're encountering dishonesty or indirect conflict—be vigilant and clear."
    },
    {
        card: 28,
        side: "A",
        image: "./images/tarot-images/Wands06.jpg",
        name: "Six of Wands",
        keyword: "Victory, Recognition, Accomplishment",
        meaning: "Triumphant resolution of Difficulties. The Realization of Hopes and Desires.",
        message: "you're achieving success and public recognition—celebrate your accomplishments."
    },
    {
        card: 28,
        side: "B",
        image: "./images/tarot-images/Wands06.jpg",
        name: "Six of Wands",
        keyword: "Failure, Defeat, Disloyalty",
        meaning: "Fear, Disloyalty, Betrayal.",
        message: "you're doubting your success or facing disloyalty—trust your inner compass."
    },
    {
        card: 29,
        side: "A",
        image: "./images/tarot-images/Wands07.jpg",
        name: "Seven of Wands",
        keyword: "Courage, Defense, Resistance",
        meaning: "Validity of One's Principles are Under Attack by Adversaries. The Courage to Uphold those Principles Creates an Advantage.",
        message: "you're defending your beliefs with courage—your resilience creates progress."
    },
    {
        card: 29,
        side: "B",
        image: "./images/tarot-images/Wands07.jpg",
        name: "Seven of Wands",
        keyword: "Confusion, Vulnerability, Defenselessness",
        meaning: "Confusion, Feeling Vulnerable, Defenselessness.",
        message: "you're feeling overwhelmed or unsure—ground yourself and focus your energy."
    },
    {
        card: 30,
        side: "A",
        image: "./images/tarot-images/Wands08.jpg",
        name: "Eight of Wands",
        keyword: "Speed, Progress, Movement",
        meaning: "High Hopes and Swiftly Approaching Goals Promise Success.",
        message: "you're on the brink of rapid progress—things are moving quickly in your favor."
    },
    {
        card: 30,
        side: "B",
        image: "./images/tarot-images/Wands08.jpg",
        name: "Eight of Wands",
        keyword: "Delay, Frustration, Quarreling",
        meaning: "Impatience, Delay, Quarreling.",
        message: "you're frustrated by delays or miscommunications—patience will serve you now."
    },
    {
        card: 31,
        side: "A",
        image: "./images/tarot-images/Wands09.jpg",
        name: "Nine of Wands",
        keyword: "Perseverance, Strength, Resilience",
        meaning: "Strength and Readiness to Meet Opposition Boldly. A Victory after Struggle.",
        message: "you're close to the finish line—your strength and perseverance are paying off."
    },
    {
        card: 31,
        side: "B",
        image: "./images/tarot-images/Wands09.jpg",
        name: "Nine of Wands",
        keyword: "Obstacles, Indecision, Weakness",
        meaning: "Adversary, Indecision, Obstacles.",
        message: "you're exhausted or second-guessing yourself—reclaim your inner resolve."
    },
    {
        card: 32,
        side: "A",
        image: "./images/tarot-images/Wands10.jpg",
        name: "Ten of Wands",
        keyword: "Burden, Responsibility, Perseverance",
        meaning: "Oppression. Although a Burden Weighs Heavily upon The Figure, Still He Perseveres.",
        message: "you're carrying a heavy load—ask for help and reassess what truly matters."
    },
    {
        card: 32,
        side: "B",
        image: "./images/tarot-images/Wands10.jpg",
        name: "Ten of Wands",
        keyword: "Apathy, Overwhelm, Self-Defeat",
        meaning: "Cloudy Perception, Apathy, Self-Defeat.",
        message: "you're feeling burdened and stuck—let go of unnecessary weight."
    },
    {
        card: 33,
        side: "A",
        image: "./images/tarot-images/Wands11.jpg",
        name: "The Page of Wands",
        keyword: "Messenger, Enthusiasm, Exploration",
        meaning: "A Young Man Bearing Information or Spiritual Importance.",
        message: "you're receiving exciting news or the urge to explore something new—follow it."
    },
    {
        card: 33,
        side: "B",
        image: "./images/tarot-images/Wands11.jpg",
        name: "The Page of Wands",
        keyword: "Instability, Restlessness, Immaturity",
        meaning: "Instability.",
        message: "you're being impulsive or scattered—pause to find clarity."
    },
    {
        card: 34,
        side: "A",
        image: "./images/tarot-images/Wands12.jpg",
        name: "The Knight of Wands",
        keyword: "Adventure, Impulsiveness, Change",
        meaning: "A Young Man Traveling a Path Predominated by His Belief in The Unknown. Possible Change in Residence.",
        message: "you're ready for adventure or bold movement—embrace the unknown with confidence."
    },
    {
        card: 34,
        side: "B",
        image: "./images/tarot-images/Wands12.jpg",
        name: "The Knight of Wands",
        keyword: "Discord, Delays, Restlessness",
        meaning: "Discord.",
        message: "you're facing resistance or sudden changes—stay flexible."
    },
    {
        card: 35,
        side: "A",
        image: "./images/tarot-images/Wands13.jpg",
        name: "The Queen of Wands",
        keyword: "Confidence, Charisma, Nurturing",
        meaning: "An Honorable Woman, Loving, Loyal, and Spiritually Inclined.",
        message: "you're channeling charisma and creative fire—trust your instincts."
    },
    {
        card: 35,
        side: "B",
        image: "./images/tarot-images/Wands13.jpg",
        name: "The Queen of Wands",
        keyword: "Deceit, Infidelity, Opposition",
        meaning: "Deceit. Infidelity, Opposition.",
        message: "you're encountering jealousy or opposition—stay true to your light."
    },
    {
        card: 36,
        side: "A",
        image: "./images/tarot-images/Wands14.jpg",
        name: "The King of Wands",
        keyword: "Leadership, Vision, Authority",
        meaning: "A Noble Man, Honest, Conscientious, and Just. Spiritually Aware and In Control.",
        message: "you're stepping into leadership and long-term vision—others are ready to follow you."
    },
    {
        card: 36,
        side: "B",
        image: "./images/tarot-images/Wands14.jpg",
        name: "The King of Wands",
        keyword: "Harshness, Arrogance, Intolerance",
        meaning: "Stern, but Tolerant and Sincere.",
        message: "you're being overly dominant or harsh—lead with heart, not ego."
    },



        // Cups
    {
        card: 37,
        side: "A",
        image: "./images/tarot-images/Cups01.jpg",
        name: "Ace of Cups",
        keyword: "Love, Emotions, Intuition",
        meaning: "The Essence of Beauty, Joy, and Love. Peace in Matters of the Heart.",
        message: "you're opening your heart to love, spiritual insight, or emotional healing."
    },
    {
        card: 37,
        side: "B",
        image: "./images/tarot-images/Cups01.jpg",
        name: "Ace of Cups",
        keyword: "Emotional Instability, False Heart",
        meaning: "Emotional Instability, A False Heart.",
        message: "you're struggling with emotional instability or false hope—reconnect with your center."
    },
    {
        card: 38,
        side: "A",
        image: "./images/tarot-images/Cups02.jpg",
        name: "Two of Cups",
        keyword: "Union, Respect, Harmony",
        meaning: "Two Become One in Love or Friendship. A Union Based Upon Respect.",
        message: "you're experiencing harmony and mutual respect in a relationship or connection."
    },
    {
        card: 38,
        side: "B",
        image: "./images/tarot-images/Cups02.jpg",
        name: "Two of Cups",
        keyword: "Misunderstanding, False Love",
        meaning: "False Love and Misunderstanding.",
        message: "you're feeling disconnected or misunderstood in love or partnership."
    },
    {
        card: 39,
        side: "A",
        image: "./images/tarot-images/Cups03.jpg",
        name: "Three of Cups",
        keyword: "Celebration, Friendship, Joy",
        meaning: "Bountiful Outcome with Contentment and Solace.",
        message: "you're surrounded by joy, friendship, and meaningful community support."
    },
    {
        card: 39,
        side: "B",
        image: "./images/tarot-images/Cups03.jpg",
        name: "Three of Cups",
        keyword: "Disillusionment, End of Achievement",
        meaning: "The End of Achievement, Disillusionment.",
        message: "you're facing disappointment or feeling let down by a recent outcome."
    },
    {
        card: 40,
        side: "A",
        image: "./images/tarot-images/Cups04.jpg",
        name: "Four of Cups",
        keyword: "Apathy, Contemplation, Stagnation",
        meaning: "Despondent and Forlorn. One Hesitantly Seeks Spiritual Resolve of Inaction.",
        message: "you're pausing to reflect on what truly fulfills you emotionally."
    },
    {
        card: 40,
        side: "B",
        image: "./images/tarot-images/Cups04.jpg",
        name: "Four of Cups",
        keyword: "New Beginnings, Relationships",
        meaning: "New Instruction and New Relationships.",
        message: "you're ready for a new emotional beginning or connection."
    },
    {
        card: 41,
        side: "A",
        image: "./images/tarot-images/Cups05.jpg",
        name: "Five of Cups",
        keyword: "Regret, Loss, Mourning",
        meaning: "With Remorse and Regret, One Bitterly Submits to Misfortune.",
        message: "you're grieving a loss—honor your emotions, but don't forget what still remains."
    },
    {
        card: 41,
        side: "B",
        image: "./images/tarot-images/Cups05.jpg",
        name: "Five of Cups",
        keyword: "Reconciliation, Strength, Hope",
        meaning: "Reconciliation. Strength and Hope Return.",
        message: "you're finding strength and hope after a time of regret or sorrow."
    },
    {
        card: 42,
        side: "A",
        image: "./images/tarot-images/Cups06.jpg",
        name: "Six of Cups",
        keyword: "Nostalgia, Innocence, Purity",
        meaning: "Reflecting Upon The Past. A return to Innocence, Simplicity, and Purity. A Desire for Change.",
        message: "you're reflecting on the past or longing for simpler, more innocent times."
    },
    {
        card: 42,
        side: "B",
        image: "./images/tarot-images/Cups06.jpg",
        name: "Six of Cups",
        keyword: "Stagnation, Immaturity, Resistance",
        meaning: "Inability to Incorporate Change Brings Stagnation in Growth and Childishness.",
        message: "you're stuck in nostalgia or resisting emotional growth."
    },
    {
        card: 43,
        side: "A",
        image: "./images/tarot-images/Cups07.jpg",
        name: "Seven of Cups",
        keyword: "Imagination, Choices, Illusion",
        meaning: "Search for Attainment, Knowledge, Riches, etc., but Here Imagination is Stronger Than Reality.",
        message: "you're daydreaming or overwhelmed by choices—discern fantasy from reality."
    },
    {
        card: 43,
        side: "B",
        image: "./images/tarot-images/Cups07.jpg",
        name: "Seven of Cups",
        keyword: "Clarity, Progress, Completion",
        meaning: "Great Progress Towards the Completion of a Project.",
        message: "you're gaining clarity and making progress toward emotional goals."
    },
    {
        card: 44,
        side: "A",
        image: "./images/tarot-images/Cups08.jpg",
        name: "Eight of Cups",
        keyword: "Abandonment, Disengagement, Transition",
        meaning: "Retreat from Emotional Involvement.",
        message: "you're choosing to walk away from something that no longer serves your growth."
    },
    {
        card: 44,
        side: "B",
        image: "./images/tarot-images/Cups08.jpg",
        name: "Eight of Cups",
        keyword: "Emotional Entanglement, Stuck",
        meaning: "Emotional Entanglement.",
        message: "you're emotionally entangled or struggling to let go of a situation."
    },
    {
        card: 45,
        side: "A",
        image: "./images/tarot-images/Cups09.jpg",
        name: "Nine of Cups",
        keyword: "Satisfaction, Contentment, Fulfillment",
        meaning: "Completion and Satisfaction Achieved. Emotional and Physical Well-Being Attained.",
        message: "you're enjoying emotional fulfillment and a sense of deep contentment."
    },
    {
        card: 45,
        side: "B",
        image: "./images/tarot-images/Cups09.jpg",
        name: "Nine of Cups",
        keyword: "Misinterpretation, Mistakes, Loss",
        meaning: "Misinterpretation of Relationships Leads to Costly Mistakes.",
        message: "you're feeling dissatisfied or disillusioned in your emotional life."
    },
    {
        card: 46,
        side: "A",
        image: "./images/tarot-images/Cups10.jpg",
        name: "Ten of Cups",
        keyword: "Bliss, Happiness, Emotional Richness",
        meaning: "Bliss, Contentment, and Emotional Richness is Attained.",
        message: "you're surrounded by love and peace—this is a moment of true emotional harmony."
    },
    {
        card: 46,
        side: "B",
        image: "./images/tarot-images/Cups10.jpg",
        name: "Ten of Cups",
        keyword: "Emotional Poverty, Guilt, Anger",
        meaning: "Emotional Poverty, Anger, and Guilt.",
        message: "you're feeling disconnected or conflicted within a relationship or family dynamic."
    },
    {
        card: 47,
        side: "A",
        image: "./images/tarot-images/Cups11.jpg",
        name: "The Page of Cups",
        keyword: "Youth, New Beginnings, Emotions",
        meaning: "A Youth Developing Emotional Understanding of Self and Others. A New Beginning; A Birth or Opportunity.",
        message: "you're exploring your emotional self and the potential for new beginnings."
    },
    {
        card: 47,
        side: "B",
        image: "./images/tarot-images/Cups11.jpg",
        name: "The Page of Cups",
        keyword: "Missed Opportunity, Immaturity",
        meaning: "Failure to Seize Opportunity.",
        message: "you're missing or ignoring a heartfelt opportunity—be more present."
    },
    {
        card: 48,
        side: "A",
        image: "./images/tarot-images/Cups12.jpg",
        name: "The Knight of Cups",
        keyword: "Charm, Romance, Idealism",
        meaning: "A Confident and Amiable Young Man Bearing Invitation to a New Beginning.",
        message: "you're receiving an invitation or message of love or emotional connection."
    },
    {
        card: 48,
        side: "B",
        image: "./images/tarot-images/Cups12.jpg",
        name: "The Knight of Cups",
        keyword: "Deception, Unrealistic Expectations",
        meaning: "A Fraudulent and Untrustworthy Relationship.",
        message: "you're encountering deception or unrealistic expectations—be discerning."
    },
    {
        card: 49,
        side: "A",
        image: "./images/tarot-images/Cups13.jpg",
        name: "The Queen of Cups",
        keyword: "Compassion, Nurturing, Empathy",
        meaning: "A Warm and Loving Woman. She has Great Emotional Depth. Which She will Gladly Share with Those in Distress.",
        message: "you're showing compassion and emotional depth to those around you."
    },
    {
        card: 49,
        side: "B",
        image: "./images/tarot-images/Cups13.jpg",
        name: "The Queen of Cups",
        keyword: "Vain, Self-Satisfied, Untrustworthy",
        meaning: "Self-Satisfied, Vain, and Untrustworthy.",
        message: "you're being overly self-focused or emotionally unavailable."
    },
    {
        card: 50,
        side: "A",
        image: "./images/tarot-images/Cups14.jpg",
        name: "The King of Cups",
        keyword: "Compassion, Control, Balance",
        meaning: "A Man of Great Compassion and Understanding. He has Succeeded in His Endeavors and Has Found Peace and Contentment. He is Helpful and Kind to Others.",
        message: "you're offering wisdom, calm, and emotional stability to those who need it."
    },
    {
        card: 50,
        side: "B",
        image: "./images/tarot-images/Cups14.jpg",
        name: "The King of Cups",
        keyword: "Selfishness, Shallow, Cold",
        meaning: "Selfish, Shallow, and Self-Satisfied.",
        message: "you're acting selfishly or suppressing emotional depth."
    },


        // Swords
    {
        card: 51,
        side: "A",
        image: "./images/tarot-images/Swords01.jpg",
        name: "Ace of Swords",
        keyword: "Triumph, Clarity, Power",
        meaning: "A Triumphant Conquest; Great Power or Force.",
        message: "you're receiving a surge of mental clarity or a breakthrough in communication or truth."
    },
    {
        card: 51,
        side: "B",
        image: "./images/tarot-images/Swords01.jpg",
        name: "Ace of Swords",
        keyword: "Weakness, Dissipation, Fragility",
        meaning: "Weakness. Dissipation of Strength.",
        message: "you're feeling mentally scattered or lacking focus—clear your mind before acting."
    },
    {
        card: 52,
        side: "A",
        image: "./images/tarot-images/Swords02.jpg",
        name: "Two of Swords",
        keyword: "Indecision, Blind Faith, Balance",
        meaning: "Blind Faith in Direction. One Who Conforms to The Dictates of Authority.",
        message: "you're at a crossroads—trust yourself and seek inner balance before deciding."
    },
    {
        card: 52,
        side: "B",
        image: "./images/tarot-images/Swords02.jpg",
        name: "Two of Swords",
        keyword: "Disloyalty, Betrayal, Deception",
        meaning: "Disloyalty, Scheming.",
        message: "you're uncovering hidden agendas or betrayal—look deeper before choosing sides."
    },
    {
        card: 53,
        side: "A",
        image: "./images/tarot-images/Swords03.jpg",
        name: "Three of Swords",
        keyword: "Heartbreak, Sorrow, Pain",
        meaning: "Sorrow, Delay, and Disappointment. One Who Chooses Power over Emotion.",
        message: "you're experiencing heartbreak or emotional pain—acknowledge the wound to begin healing."
    },
    {
        card: 53,
        side: "B",
        image: "./images/tarot-images/Swords03.jpg",
        name: "Three of Swords",
        keyword: "Healing, Disorder, Confusion",
        meaning: "Disorder, Confusion, Alienation.",
        message: "you're beginning to heal emotional wounds but may still feel confusion or inner chaos."
    },
    {
        card: 54,
        side: "A",
        image: "./images/tarot-images/Swords04.jpg",
        name: "Four of Swords",
        keyword: "Rest, Retreat, Solitude",
        meaning: "Spiritual Retreat, Solitude, and Repose.",
        message: "you're being called to rest, recover, and step back from mental or emotional stress."
    },
    {
        card: 54,
        side: "B",
        image: "./images/tarot-images/Swords04.jpg",
        name: "Four of Swords",
        keyword: "Chaos, Disharmony, Unrest",
        meaning: "Chaos, Disharmony.",
        message: "you're resisting the need for rest—burnout or mental overload is creeping in."
    },
    {
        card: 55,
        side: "A",
        image: "./images/tarot-images/Swords05.jpg",
        name: "Five of Swords",
        keyword: "Defeat, Loss, Humiliation",
        meaning: "Dishonor, Degradation, and Humiliation.",
        message: "you're facing a hollow victory or conflict where no one truly wins—ask yourself if it's worth it."
    },
    {
        card: 55,
        side: "B",
        image: "./images/tarot-images/Swords05.jpg",
        name: "Five of Swords",
        keyword: "Regret, Exposure, Weakness",
        meaning: "Disarmed and Exposed, One has Cause for Regret.",
        message: "you're beginning to feel regret or vulnerability after conflict—there may still be room to make amends."
    },
    {
        card: 56,
        side: "A",
        image: "./images/tarot-images/Swords06.jpg",
        name: "Six of Swords",
        keyword: "Transition, Journey, Healing",
        meaning: "A Smooth Passage from Difficulties.",
        message: "you're moving forward from a difficult situation—healing comes with time and distance."
    },
    {
        card: 56,
        side: "B",
        image: "./images/tarot-images/Swords06.jpg",
        name: "Six of Swords",
        keyword: "Unresolved Anxiety, Delay",
        meaning: "Unresolved Anxiety.",
        message: "you're struggling to move on—emotional baggage or lingering fear is holding you back."
    },
    {
        card: 57,
        side: "A",
        image: "./images/tarot-images/Swords07.jpg",
        name: "Seven of Swords",
        keyword: "Deception, Strategy, Cunning",
        meaning: "Partial Success in Coping With Authority.",
        message: "you're navigating a situation with caution—watch for deception, whether from others or yourself."
    },
    {
        card: 57,
        side: "B",
        image: "./images/tarot-images/Swords07.jpg",
        name: "Seven of Swords",
        keyword: "Advisory, Counsel, Reflection",
        meaning: "Heed Advice and Counsel.",
        message: "you're realizing the need to be honest and seek support—secrets can no longer stay hidden."
    },
    {
        card: 58,
        side: "A",
        image: "./images/tarot-images/Swords08.jpg",
        name: "Eight of Swords",
        keyword: "Restriction, Stagnation, Crisis",
        meaning: "Bound by The Dictates of Authority, One is Unable to Free Themself from Crisis.",
        message: "you're feeling trapped or paralyzed—your thoughts may be creating the cage you're stuck in."
    },
    {
        card: 58,
        side: "B",
        image: "./images/tarot-images/Swords08.jpg",
        name: "Eight of Swords",
        keyword: "Resistance, Struggle, Anxiety",
        meaning: "Opposition, Struggle, Anxiety.",
        message: "you're beginning to break free from limiting beliefs—keep moving toward liberation."
    },
    {
        card: 59,
        side: "A",
        image: "./images/tarot-images/Swords09.jpg",
        name: "Nine of Swords",
        keyword: "Nightmares, Regret, Anxiety",
        meaning: "Failure, Delay, and Disappointment Overshadow Desire.",
        message: "you're overwhelmed by worry or guilt—face the fear instead of feeding it."
    },
    {
        card: 59,
        side: "B",
        image: "./images/tarot-images/Swords09.jpg",
        name: "Nine of Swords",
        keyword: "Fear, Imprisonment, Shame",
        meaning: "Imprisonment, Fear, and Shame.",
        message: "you're coming out of a period of emotional distress—healing is slow, but you're not alone."
    },
    {
        card: 60,
        side: "A",
        image: "./images/tarot-images/Swords10.jpg",
        name: "Ten of Swords",
        keyword: "Ruin, Endings, Misfortune",
        meaning: "Sudden Misfortune, Ruin, and Pain.",
        message: "you're facing a painful ending—though it hurts, this chapter is truly over."
    },
    {
        card: 60,
        side: "B",
        image: "./images/tarot-images/Swords10.jpg",
        name: "Ten of Swords",
        keyword: "Advantage, Profit, Recovery",
        meaning: "A Temporary Advantage for Profit and Power.",
        message: "you're slowly recovering from a past wound—there’s life after loss, and you’re rebuilding."
    },
    {
        card: 61,
        side: "A",
        image: "./images/tarot-images/Swords11.jpg",
        name: "The Page of Swords",
        keyword: "Youth, Curiosity, Observation",
        meaning: "A Youth Engaged in Observing The Principles of Power.",
        message: "you're entering a phase of curiosity and alertness—ask questions and seek the truth."
    },
    {
        card: 61,
        side: "B",
        image: "./images/tarot-images/Swords11.jpg",
        name: "The Page of Swords",
        keyword: "Betrayal, Sickness, Treachery",
        meaning: "Treachery, Disloyalty, Sickness.",
        message: "you're reacting impulsively or spreading miscommunication—pause before speaking or acting."
    },
    {
        card: 62,
        side: "A",
        image: "./images/tarot-images/Swords12.jpg",
        name: "The Knight of Swords",
        keyword: "Courage, Speed, Action",
        meaning: "A Brave and Skillful Warrior Capable of Meeting Opposition.",
        message: "you're charging ahead with fierce energy—focus your mind so your momentum stays clear and honorable."
    },
    {
        card: 62,
        side: "B",
        image: "./images/tarot-images/Swords12.jpg",
        name: "The Knight of Swords",
        keyword: "Extravagance, Destruction, Delays",
        meaning: "Extravagance Causes Destruction and Ruin.",
        message: "you're rushing into conflict or chasing a cause without clarity—slow down and realign."
    },
    {
        card: 63,
        side: "A",
        image: "./images/tarot-images/Swords13.jpg",
        name: "The Queen of Swords",
        keyword: "Wisdom, Independence, Clarity",
        meaning: "A Woman of Great Strength and Independence, Able to Forge Her Way in The World.",
        message: "you're being called to lead with logic and grace—honor your wisdom, even if it means being alone for now."
    },
    {
        card: 63,
        side: "B",
        image: "./images/tarot-images/Swords13.jpg",
        name: "The Queen of Swords",
        keyword: "Malice, Deceit, Intolerance",
        meaning: "A Woman Dominated by Malice, Deceit, and Intolerance.",
        message: "you're holding onto bitterness or mistrust—cut through the fog of your own pain before judging others."
    },
    {
        card: 64,
        side: "A",
        image: "./images/tarot-images/Swords14.jpg",
        name: "The King of Swords",
        keyword: "Authority, Command, Logic",
        meaning: "Mature and Full Command, He is The Law and Authority over Whatever Field He May Choose.",
        message: "you're in a position to lead with reason and fairness—use your authority wisely and with integrity."
    },
    {
        card: 64,
        side: "B",
        image: "./images/tarot-images/Swords14.jpg",
        name: "The King of Swords",
        keyword: "Cruelty, Malice, Corruption",
        meaning: "Power Tainted By Cruelty and Malicious Intentions.",
        message: "you're misusing your intellect or power—reevaluate your motivations and choose truth over control."
    },



        // Pentacles
    {
        card: 65,
        side: "A",
        image: "./images/tarot-images/Pentacles01.jpg",
        name: "Ace of Pentacles",
        keyword: "Wealth, Prosperity, Opportunity",
        meaning: "The Path of Material Gain and The Attainment of Wealth and Prosperity.",
        message: "you're being offered a new financial or material opportunity—plant the seed with intention."
    },
    {
        card: 65,
        side: "B",
        image: "./images/tarot-images/Pentacles01.jpg",
        name: "Ace of Pentacles",
        keyword: "Misuse, Poverty, Loss",
        meaning: "The Misuse of Wealth Causes Unhappiness and Deterioration of Character.",
        message: "you're experiencing a setback or misuse of resources—ground yourself and reassess."
    },
    {
        card: 66,
        side: "A",
        image: "./images/tarot-images/Pentacles02.jpg",
        name: "Two of Pentacles",
        keyword: "Balance, Adaptability, Change",
        meaning: "Harmony in the Midst of Change.",
        message: "you're juggling responsibilities—stay adaptable and maintain balance."
    },
    {
        card: 66,
        side: "B",
        image: "./images/tarot-images/Pentacles02.jpg",
        name: "Two of Pentacles",
        keyword: "Instability, Overcommitment, Stress",
        meaning: "News Brings Surface Pleasure, False Enjoyment.",
        message: "you're overwhelmed or out of sync—focus on one task at a time."
    },
    {
        card: 67,
        side: "A",
        image: "./images/tarot-images/Pentacles03.jpg",
        name: "Three of Pentacles",
        keyword: "Collaboration, Mastery, Craftsmanship",
        meaning: "The Apprentice enjoys Spiritual Reward from Earnest Labor.",
        message: "you're developing mastery through dedicated work—your craft is your strength."
    },
    {
        card: 67,
        side: "B",
        image: "./images/tarot-images/Pentacles03.jpg",
        name: "Three of Pentacles",
        keyword: "Mediocrity, Pettiness, Lack of Cooperation",
        meaning: "Mediocrity in Work, Pettiness and Immaturity.",
        message: "you're encountering pettiness or lack of collaboration—keep standards high."
    },
    {
        card: 68,
        side: "A",
        image: "./images/tarot-images/Pentacles04.jpg",
        name: "Four of Pentacles",
        keyword: "Security, Control, Possession",
        meaning: "Impressed by Wealth and Power, One Clings to Material Gain for His Identity.",
        message: "you're clinging to stability or control—check if it's helping or hindering growth."
    },
    {
        card: 68,
        side: "B",
        image: "./images/tarot-images/Pentacles04.jpg",
        name: "Four of Pentacles",
        keyword: "Loss, Uncertainty, Letting Go",
        meaning: "The Walls of Material Security Crumble.",
        message: "you're being pushed to let go of attachments that no longer support you."
    },
    {
        card: 69,
        side: "A",
        image: "./images/tarot-images/Pentacles05.jpg",
        name: "Five of Pentacles",
        keyword: "Hardship, Struggle, Spiritual Loss",
        meaning: "Spiritual Warmth Comforts Those Suffering Financial or Physical Hardships.",
        message: "you're facing hardship, but support is nearby—reach out and keep moving."
    },
    {
        card: 69,
        side: "B",
        image: "./images/tarot-images/Pentacles05.jpg",
        name: "Five of Pentacles",
        keyword: "Recovery, Renewal, Improvement",
        meaning: "Disorder, Chaos, and Ruin Grasp the Inner Self, Resulting in Spiritual and Financial Discord.",
        message: "you're beginning to recover and rebuild after loss—hope is returning."
    },
    {
        card: 70,
        side: "A",
        image: "./images/tarot-images/Pentacles06.jpg",
        name: "Six of Pentacles",
        keyword: "Generosity, Charity, Prosperity",
        meaning: "Generosity is Repaid Through Material Prosperity.",
        message: "you're in a position to give or receive help—generosity builds prosperity."
    },
    {
        card: 70,
        side: "B",
        image: "./images/tarot-images/Pentacles06.jpg",
        name: "Six of Pentacles",
        keyword: "Envy, Greed, Jealousy",
        meaning: "Jealousy and Envy Reap No Benefits.",
        message: "you're dealing with greed or envy—real abundance isn’t just material."
    },
    {
        card: 71,
        side: "A",
        image: "./images/tarot-images/Pentacles07.jpg",
        name: "Seven of Pentacles",
        keyword: "Patience, Evaluation, Growth",
        meaning: "Cultivating Material Gain is a Combination of Individual Effort and Hard Labor.",
        message: "you're pausing to evaluate your efforts—patience is key to long-term growth."
    },
    {
        card: 71,
        side: "B",
        image: "./images/tarot-images/Pentacles07.jpg",
        name: "Seven of Pentacles",
        keyword: "Frustration, Anxiety, Impatience",
        meaning: "Anxiety Over Economic Status.",
        message: "you're feeling anxious about progress—nurture what you've started."
    },
    {
        card: 72,
        side: "A",
        image: "./images/tarot-images/Pentacles08.jpg",
        name: "Eight of Pentacles",
        keyword: "Skill, Craft, Focus",
        meaning: "Craftsmanship and Skilled Labor Etch Out Financial Security.",
        message: "you're honing your skills—diligent focus brings steady success."
    },
    {
        card: 72,
        side: "B",
        image: "./images/tarot-images/Pentacles08.jpg",
        name: "Eight of Pentacles",
        keyword: "Greed, Usury, Stagnation",
        meaning: "Void of Ambition--Greed Leads to Usury.",
        message: "you're stagnating or working without joy—rekindle your purpose."
    },
    {
        card: 73,
        side: "A",
        image: "./images/tarot-images/Pentacles09.jpg",
        name: "Nine of Pentacles",
        keyword: "Abundance, Success, Independence",
        meaning: "One Content with Financial Success and Outward Accomplishments.",
        message: "you're enjoying the fruits of your labor—independence and beauty surround you."
    },
    {
        card: 73,
        side: "B",
        image: "./images/tarot-images/Pentacles09.jpg",
        name: "Nine of Pentacles",
        keyword: "Facade, Superficial, False Success",
        meaning: "Flagrant Displays, Facade, Bad Faith.",
        message: "you're presenting a false image of success—reconnect to what matters."
    },
    {
        card: 74,
        side: "A",
        image: "./images/tarot-images/Pentacles10.jpg",
        name: "Ten of Pentacles",
        keyword: "Legacy, Wealth, Family",
        meaning: "Financial Power, Material Domination, Family Inheritance.",
        message: "you're experiencing fulfillment through family, legacy, or material security."
    },
    {
        card: 74,
        side: "B",
        image: "./images/tarot-images/Pentacles10.jpg",
        name: "Ten of Pentacles",
        keyword: "Loss, Ruin, Defamation",
        meaning: "Loss of Reputation, Pomp, Defiling The Family Name.",
        message: "you're facing instability or family tension—refocus on long-term values."
    },
    {
        card: 75,
        side: "A",
        image: "./images/tarot-images/Pentacles11.jpg",
        name: "The Page of Pentacles",
        keyword: "Ambition, Learning, Opportunity",
        meaning: "A Youthful Person--Scholarly, and Willing to Work Hard. An Apprentice with New Ideas.",
        message: "you're ready to learn and grow—new financial or practical lessons await."
    },
    {
        card: 75,
        side: "B",
        image: "./images/tarot-images/Pentacles11.jpg",
        name: "The Page of Pentacles",
        keyword: "Rebellion, Laziness, Distraction",
        meaning: "Rebelliousness.",
        message: "you're distracted or unmotivated—return to your goals with fresh intent."
    },
    {
        card: 76,
        side: "A",
        image: "./images/tarot-images/Pentacles12.jpg",
        name: "The Knight of Pentacles",
        keyword: "Responsibility, Stability, Diligence",
        meaning: "A Responsible and Hardworking Man. He Has Acquired Sufficient Skills To Be Of Service.",
        message: "you're moving slowly but surely—persistence will pay off."
    },
    {
        card: 76,
        side: "B",
        image: "./images/tarot-images/Pentacles12.jpg",
        name: "The Knight of Pentacles",
        keyword: "Stagnation, Carelessness, Delays",
        meaning: "Idleness, Stagnation, and Carelessness.",
        message: "you're stuck or careless—discipline is needed to move forward."
    },
    {
        card: 77,
        side: "A",
        image: "./images/tarot-images/Pentacles13.jpg",
        name: "The Queen of Pentacles",
        keyword: "Nurturing, Security, Practicality",
        meaning: "A Highly Intelligent Woman inclined to Order and Efficiency. She's Generous, Secure, and Free of Material Care.",
        message: "you're nurturing your world with grace and care—your presence is grounding."
    },
    {
        card: 77,
        side: "B",
        image: "./images/tarot-images/Pentacles13.jpg",
        name: "The Queen of Pentacles",
        keyword: "Jealousy, Manipulation, Greed",
        meaning: "Condescending, Conniving, Suspicious.",
        message: "you're being manipulative or greedy—check your intentions."
    },
    {
        card: 78,
        side: "A",
        image: "./images/tarot-images/Pentacles14.jpg",
        name: "The King of Pentacles",
        keyword: "Wealth, Mastery, Stability",
        meaning: "Mature Man, Successful in Business Accomplishments and Secure in His Ability to Make Financial Judgements.",
        message: "you're leading with wisdom and financial mastery—others trust your guidance."
    },
    {
        card: 78,
        side: "B",
        image: "./images/tarot-images/Pentacles14.jpg",
        name: "The King of Pentacles",
        keyword: "Corruption, Materialism, Decline",
        meaning: "Corrupt, Jaded, Weak, On The Brink of Financial Peril.",
        message: "you're facing corruption or downfall—real strength comes from integrity."
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