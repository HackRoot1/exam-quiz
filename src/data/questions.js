const questions = {
    english: [
        {
            id: 1,
            question:
                "What type of noun is the underlined word? \n<u>Wisdom</u> is better than strength.",
            options: [
                "Common noun",
                "Proper noun",
                "Collective noun",
                "Abstract noun",
            ],
            answer: "Abstract noun",
        },
        {
            id: 2,
            question:
                "What type of noun is the underlined word? \nThe <u>crowd</u> was very big.",
            options: [
                "common noun",
                "proper noun",
                "collective noun",
                "abstract noun",
            ],
            answer: "collective noun",
        },
        {
            id: 3,
            question:
                "What type of noun is the underlined word?\n<u>Integrity</u> is the best policy.",
            options: [
                "Common noun",
                "Material noun",
                "Abstract noun",
                "Collective noun",
            ],
            answer: "Abstract noun",
        },
        {
            id: 4,
            question: "Find the odd man out.",
            options: ["Pune", "Mumbai", "Nagpur", "Village"],
            answer: "Village",
        },
        {
            id: 5,
            question: "Choose collective noun from given alternatives.",
            options: ["Century", "City", "Aurangabad", "Players"],
            answer: "Century",
        },
        {
            id: 6,
            question: "Choose 'Abstract noun' from given alternatives.",
            options: ["Wisdom", "Thief", "Sugar", "Air"],
            answer: "Wisdom",
        },
        {
            id: 7,
            question: "Choose proper noun from given alternatives.",
            options: ["Village", "Wadgaon", "City", "Colony"],
            answer: "Wadgaon",
        },
        {
            id: 8,
            question: "Find the odd man out.",
            options: ["Freedom", "Wisdom", "Poverty", "Poor man"],
            answer: "Poor man",
        },
        {
            id: 11,
            question: "Choose Common Noun from given alternatives.",
            options: ["Mahatma Gandhi", "Strength", "Choice", "Woman"],
            answer: "Woman",
        },
        {
            id: 12,
            question: "Which of the following is an abstract noun?",
            options: ["Bread", "Coffee", "Cheese", "Happiness"],
            answer: "Happiness",
        },
        {
            id: 13,
            question: "Choose Proper Noun from given alternatives.",
            options: ["Goat", "Tiger", "Cow", "Moti"],
            answer: "Moti",
        },
        {
            id: 14,
            question: "Find the odd man out.",
            options: ["Team", "Bouquet", "Herd", "Children"],
            answer: "Children",
        },
        {
            id: 15,
            question: "Sheep: Herd :: Students:?",
            options: ["Class", "Team", "Playground", "Classroom"],
            answer: "Class",
        },
        {
            id: 16,
            question: "Choose wrong pair.",
            options: [
                "People-Crowd",
                "Bees-Swarm",
                "Arrows-Quiver",
                "Soldier-Team",
            ],
            answer: "Soldier-Team",
        },
        {
            id: 17,
            question:
                "An assembly of _______. Choose correct word for filling the blanks.",
            options: [
                "Ministers",
                "Elected members",
                "Poor people",
                "Government officers",
            ],
            answer: "Elected members",
        },
        {
            id: 18,
            question:
                "The place where small, young children are taught is called _______.",
            options: ["Nursery", "School", "Kindergarten", "Balwadi"],
            answer: "Kindergarten",
        },
        {
            id: 19,
            question: "Musicians: Band :: Bench:?",
            options: ["Directors", "Flowers", "Tables", "Judges"],
            answer: "Judges",
        },
        {
            id: 20,
            question: "Find the odd man out.",
            options: ["Century", "Brood", "Thief", "Class"],
            answer: "Thief",
        },
        {
            id: 21,
            question: "Find the odd man out.",
            options: ["Chest", "Club", "Code", "Player"],
            answer: "Player",
        },
        {
            id: 22,
            question: "Laws: Code:: Stamps:?",
            options: ["Company", "Course", "Collection", "People"],
            answer: "Collection",
        },
        {
            id: 23,
            question:
                "A group of members having blood relations is called _______.",
            options: ["Crowd", "People", "Family", "Team members"],
            answer: "Family",
        },
        {
            id: 24,
            question: "A series of mountains is called a ________",
            options: ["Hills", "Rows", "Chain", "File"],
            answer: "Chain",
        },
        {
            id: 29,
            question:
                "Identify the sentences having abstract noun/s in them. \na) He had no friends or relations and lived in solitude. \nb) We were rivals, but I felt no enmity for her. \nc) Their navy consists of over sixty ships.",
            options: [
                "a and b only",
                "a and c only",
                "a and d only",
                "a, b and c",
            ],
            answer: "a and b only",
        },
        {
            id: 31,
            question: "Which of the following is a count noun?",
            options: ["Happiness", "Sunshine", "Mile", "Gold"],
            answer: "Mile",
        },
        {
            id: 32,
            question:
                "Use the appropriate word and fill in the blank: \n A _____ of cattle / deer.",
            options: ["Herd", "Heard", "Horde", "Hoard"],
            answer: "Herd",
        },
        {
            id: 33,
            question:
                "Select one word denoting number and fill in the blank: \n A ______ of birds or sheep.",
            options: ["Flock", "Flight", "Swarm", "Herd"],
            answer: "Flock",
        },
        {
            id: 34,
            question:
                "_______ modern. Select a correct prefix to form a meaningful word.",
            options: ["Hyper", "Ultra", "Arch", "Sub"],
            answer: "Ultra",
        },
        {
            id: 35,
            question:
                "Select the correct class - changing suffix-prefix from those given below:\na) Enslave\nb) Childish\nc) Teaching\nd) Worked\nWhich of the above is/are correct?",
            choices: [
                "(a) only",
                "(a) and (b) only",
                "(c) only",
                "(c) and (d) only",
            ],
            answer: "(a) and (b) only",
        },
        {
            id: 36,
            question:
                "Which of the following affixes can convert certain adjectives into nouns?",
            options: ["-un", "-ness", "-less", "-s"],
            answer: "-ness",
        },
        {
            id: 37,
            question:
                "i) Erudite\nii) Brief\niii) Cozy\niv) Revere\nThe noun forms of the above words take '-ence', '-ity', '-ness', or '-tion' as suffix. Choose the right option:",
            choices: [
                "(i) tion (i) ness (ii) ness (iv) ence",
                "(i) ness (ii) ness (iii) tion (iv) ity",
                "(i) mess (ii) ity (iii) ness (iv) ence",
                "(i) tion (ii) ity (iii) ness (iv) ence",
            ],
            answer: "(i) tion (ii) ity (iii) ness (iv) ence",
        },
        {
            id: 38,
            question:
                "Which of the following words use '-ence' in their noun form?\na) Accept\nb) Present\nc) Eminent\nd) Resonate",
            options: [
                "Only a and b",
                "Only b and c",
                "Only a, b and c",
                "Only b, c and d",
            ],
            answer: "Only b and c",
        },
        {
            id: 39,
            question:
                "Fill in the blank with an appropriate word from the list given below:\n“Don't disturb him, he is busy with the ____ of some new specimens he found this morning.”",
            options: ["Classify", "Classifying", "Classification", "Classing"],
            answer: "Classing",
        },
        {
            id: 41,
            question:
                "Pick out the sentence where the underlined word has been used as a noun.",
            options: [
                "With his name the mothers still the babies.",
                "Still waters run deep.",
                "Her sobs could be heard in the still of night.",
                "He is still in business.",
            ],
            answer: "Her sobs could be heard in the still of night.",
        },
        {
            id: 42,
            question:
                "If the usage of a suffix makes the word 'teach' into 'teacher', then which will be the correct suffix to use for the word 'betray'?",
            options: ["Betrayfy", "Betrayfic", "Betrayal", "Betrayen"],
            answer: "Betrayal",
        },
        {
            id: 43,
            question:
                "In which one of the following case 'lead' is pronounced as 'led' (similar to 'red')?",
            options: [
                "lead (verb)- to be ahead of others to guide them.",
                "lead (adjective) - main e.g a lead role.",
                "lead (noun) - a kind of metal used in pencils.",
                "leading (adjective) - in the front e.g. a leading newspaper.",
            ],
            answer: "lead (verb)- to be ahead of others to guide them.",
        },
        {
            id: 44,
            question:
                "Find the correct form of underlined word: <u>Mary</u> had a little lamb.",
            options: [
                "Proper noun",
                "Abstract noun",
                "Common noun",
                "Collective noun",
            ],
            answer: "Proper noun",
        },
        {
            id: 45,
            question: "Choose the Noun form of - Indicate.",
            options: ["Indication", "Indelicately", "Indicate", "Indicative"],
            answer: "Indication",
        },
        {
            id: 46,
            question:
                "It is a very spacious ________ for constructing a nursing home. Pick out the correct word to complete the sentence.",
            options: ["cite", "site", "sight", "seat"],
            answer: "site",
        },
        {
            id: 47,
            question:
                "<u>Parents</u> know <u>the pains</u> of parenting. \nIdentify the type of the underlined nouns.",
            options: [
                "Common, Collective",
                "Collective, Proper",
                "Common, Abstract",
                "Collective, Abstract",
            ],
            answer: "Collective, Abstract",
        },
        {
            id: 48,
            question: "Give noun form of — advise.",
            options: ["advice", "advisable", "adviseful", "advising"],
            answer: "advice",
        },
        {
            id: 49,
            question: "Choose:Choice :: Attract:",
            options: ["Active", "attractive", "attraction", "Actor"],
            answer: "attraction",
        },
        {
            id: 50,
            question: "Find odd man out.",
            options: ["death", "movement", "tradition", "Practise"],
            answer: "Practise",
        },
        {
            id: 51,
            question: "Find odd man out.",
            options: ["speech", "tale", "tell", "tail"],
            answer: "tell",
        },
        {
            id: 52,
            question: "Give noun form of —Approve.",
            options: ["Approved", "Approval", "Approving", "Approves"],
            answer: "Approval",
        },
        {
            id: 53,
            question: "Pick out the wrong pair.",
            options: [
                "Furnish - Furniture",
                "Discover - Discovery",
                "Heal - Health",
                "Receive - Received",
            ],
            answer: "Receive - Received",
        },
        {
            id: 54,
            question: "Pick out the wrong pair.",
            options: [
                "Apply - Application",
                "Know - Knowledge",
                "live - life",
                "Manage - Managing",
            ],
            answer: "Manage - Managing",
        },
        {
            id: 55,
            question: "Pick odd man out.",
            options: ["answer", "question", "passage", "punish"],
            answer: "punish",
        },
        {
            id: 56,
            question: "Choose correct noun form from following.",
            options: ["Sell", "Sale", "sells", "sold"],
            answer: "Sale",
        },
        {
            id: 57,
            question: "Choose noun form from following.",
            options: ["strength", "strong", "strengthen", "strongly"],
            answer: "strength",
        },
        {
            id: 58,
            question:
                "Fill in the blank with correct word: \n ______ of Amitabh is increasing day by day.",
            options: ["popular", "People", "Popularity", "popularize"],
            answer: "Popularity",
        },
        {
            id: 59,
            question: "Tick mark noun of the verb — accept.",
            options: ["acceptance", "accepted", "acceptful", "accepting"],
            answer: "acceptance",
        },
        {
            id: 60,
            question: "What is the noun form of the given verb? — 'describe'.",
            options: [
                "descrition",
                "distribution",
                "description",
                "descripsion",
            ],
            answer: "description",
        },
        {
            id: 61,
            question: "Identify the correct noun form of 'rely'.",
            options: ["reliying", "reliable", "rediness", "reliance"],
            answer: "reliance",
        },
        {
            id: 62,
            question:
                "Choose the correct noun form of the word *die* from following alternatives:",
            options: ["death", "died", "dead", "deadly"],
            answer: "death",
        },
        {
            id: 63,
            question: "Identify the noun from given alternatives.",
            options: ["high", "height", "highly", "heighten"],
            answer: "height",
        },
        {
            id: 64,
            question: "Identify the noun from given alternative.",
            options: ["beauty", "Beautify", "beautiful", "beautifully"],
            answer: "beauty",
        },
        {
            id: 65,
            question: "Choose noun from given alternatives.",
            options: ["advise", "practise", "provide", "production"],
            answer: "production",
        },
        {
            id: 66,
            question: "Choose noun from given alternatives.",
            options: ["short", "poor", "weakness", "stupid"],
            answer: "weakness",
        },
        {
            id: 67,
            question: "Choose noun from the given alternatives.",
            options: ["deep", "depth", "deepen", "deeply"],
            answer: "depth",
        },
        {
            id: 68,
            question:
                "Choose the correct sentence without an error in the use of Noun:",
            options: [
                "He gave us much good advice",
                "He gave us many good advices",
                "He gave us much good advise",
                "He gave us many good advises",
            ],
            answer: "He gave us many good advises",
        },
        {
            id: 71,
            question:
                "What is the correct noun form of the given word?\nVivisection.",
            options: ["Vivid", "vixen", "vizier", "vivisectionist"],
            answer: "vivisectionist",
        },
        {
            id: 72,
            question:
                "Choose the correct alternative to form a meaningful word. Griev ______",
            options: ["ence", "iance", "ance", "nce"],
            answer: "ance",
        },
        {
            id: 73,
            question:
                "Choose the correct noun form of the word 'prove' from the following alternatives:",
            options: ["proving", "proven", "proved", "proof"],
            answer: "proof",
        },
        {
            id: 74,
            question:
                "The flower loses freshness and scent when plucked. \nState which type of noun is the word 'freshness'.",
            options: [
                "common noun",
                "abstract noun",
                "collective noun",
                "proper noun",
            ],
            answer: "abstract noun",
        },
        {
            id: 75,
            question:
                "Fill in the blank: \nHe was afraid to see _____ of lions.",
            options: ["group", "Pride", "many", "lot"],
            answer: "Pride",
        },
        {
            id: 76,
            question:
                "Which one of the following sentences is grammatically correct?",
            options: [
                "Those books are of I.",
                "Those books are my.",
                "Those books are mine.",
                "Those books are I's.",
            ],
            answer: "Those books are mine.",
        },
        {
            id: 77,
            question: "Which of these addresses is correct?",
            options: ["your?", "your’s", "you all’s?", "yours?"],
            answer: "yours?",
        },
        {
            id: 78,
            question: "Which one of the following sentences is correct?",
            options: [
                "It is me who has done this.",
                "It is me who have done this.",
                "It is I who has done this.",
                "It is I who have done this.",
            ],
            answer: "It is I who have done this.",
        },
        {
            id: 79,
            question:
                "Fill in the blank with appropriate pronoun. 'One should not boast of ________ merits.'",
            options: ["his", "hers", "one's", "its"],
            answer: "one's",
        },
        {
            id: 80,
            question:
                "Fill in the blank with the proper alternative. ________ did you give the letter to?",
            options: ["Which", "Who", "Whom", "None of these"],
            answer: "Whom",
        },
        {
            id: 81,
            question:
                "Fill in the blank in the given sentence with appropriate word from the given alternatives. ‘We are much stronger than ________ at football.’",
            options: ["they", "them", "us", "themselves"],
            answer: "they",
        },
        {
            id: 82,
            question:
                "Pick out the correct pronoun to fill in the blank in the following sentence. I tell my wife all ________ happens in my college.",
            options: ["which", "what", "that", "whatever"],
            answer: "that",
        },
        {
            id: 83,
            question: "Which of the following sentence is correct?",
            options: [
                "It is me who has written this letter.",
                "It is I who has written this letter.",
                "It is me who have written this letter.",
                "It is I who have written this letter.",
            ],
            answer: "It is I who have written this letter.",
        },
        {
            id: 84,
            question:
                "Fill in the blank with appropriate pronoun. One cannot be careful of ________ good name.",
            options: ["his", "my", "one's", "their"],
            answer: "one's",
        },
        {
            id: 85,
            question:
                "Fill in the blank with proper alternative form of 'self.' They found ________ in a tight corner.",
            options: ["himself", "herself", "themselves", "itself"],
            answer: "themselves",
        },
        {
            id: 86,
            question:
                "Pick out a sentence with an agreement between the subject and the pronoun.",
            options: [
                "Each of the girls gave her own version of affairs.",
                "The girls gave her own version of affairs.",
                "He gave her own version of affairs.",
                "They gave her own version of affairs.",
            ],
            answer: "Each of the girls gave her own version of affairs.",
        },
        {
            id: 87,
            question:
                "Fill in the blank with the correct alternative. She went to the movie with ________ two children.",
            options: ["his", "him", "her", "she"],
            answer: "her",
        },
        {
            id: 88,
            question: "Pick out the correct sentence:",
            options: [
                "Each of the two candidates have paid their fees.",
                "A crowd of the university students have surrounded the vice-chancellor.",
                "Many a flower is born to blush unseen.",
                "Two weeks are a long time.",
            ],
            answer: "Many a flower is born to blush unseen.",
        },
        {
            id: 89,
            question:
                "Choose the appropriate relative pronoun to fill in the gap in the following statement: The person ________ gave us this present, was my great uncle.",
            options: ["that", "who", "whose", "none"],
            answer: "who",
        },
        {
            id: 90,
            question: "They offered ________ a good job.",
            options: ["I", "me", "mine", "myself"],
            answer: "me",
        },
        {
            id: 91,
            question:
                "Select the proper pronoun. One should be proud of ________ Motherland.",
            options: ["his", "ones", "one's", "once"],
            answer: "one's",
        },
        {
            id: 92,
            question: "Nobody but ________ was present.",
            options: ["me", "I", "myself", "mine"],
            answer: "I",
        },
        {
            id: 93,
            question:
                "Choose correct pronoun to complete the sentence. ________ is the best player of the team.",
            options: ["His", "He", "It", "Her"],
            answer: "He",
        },
        {
            id: 94,
            question: "________ is an American dog.",
            options: ["It's", "They", "It", "He"],
            answer: "It",
        },
        {
            id: 95,
            question: "________ work in a company.",
            options: ["We", "He", "She", "It"],
            answer: "We",
        },
        {
            id: 96,
            question: "________ speaks very well.",
            options: ["We", "They", "We", "She"],
            answer: "She",
        },
        {
            id: 97,
            question: "I saw ________ at the Bus stop.",
            options: ["them", "they", "their", "theirs"],
            answer: "them",
        },
        {
            id: 98,
            question: "The teacher punished ________.",
            options: ["he", "his", "him", "none of these"],
            answer: "him",
        },
        {
            id: 99,
            question: "Let ________ go.",
            options: ["I", "my", "myself", "me"],
            answer: "me",
        },
        {
            id: 100,
            question: "Let ________ have a nice picnic.",
            options: ["We", "our", "us", "ours"],
            answer: "us",
        },
        {
            id: 101,
            question: "Let ________ ask their problems.",
            options: ["they", "them", "their", "theirs"],
            answer: "them",
        },
        {
            id: 102,
            question: "One should be careful about ________ study.",
            options: ["once", "one’s", "his", "her"],
            answer: "one’s",
        },
        {
            id: 103,
            question: "One should not boast about ________.",
            options: ["hisself", "himself", "oneself", "ourselves"],
            answer: "oneself",
        },
        {
            id: 104,
            question:
                "The lady, ________ the police caught, was a terrorist. Choose the correct word to fill in the blanks.",
            options: ["who", "whose", "whom", "which"],
            answer: "whom",
        },
        {
            id: 105,
            question: "The man ________ is honest, is trusted.",
            options: ["whom", "who", "which", "whose"],
            answer: "who",
        },
        {
            id: 106,
            question: "She is the most loving woman ________ ever lived.",
            options: ["who", "which", "whose", "that"],
            answer: "who",
        },
        {
            id: 107,
            question: "We bought a car ________ is red.",
            options: ["who", "which", "whose", "whom"],
            answer: "which",
        },
        {
            id: 108,
            question: "I solved a problem ________ was very difficult.",
            options: ["who", "whose", "which", "whom"],
            answer: "which",
        },
        {
            id: 109,
            question: "The man, ________ bag is lost, is very angry.",
            options: ["who", "whom", "whose", "which"],
            answer: "whose",
        },
        {
            id: 110,
            question:
                "Choose the sentence in which 'That' is used as a ‘Relative Pronoun’.",
            options: [
                "That is my brother.",
                "This is all that makes life interesting.",
                "That is the problem",
                "I told everything to that man,",
            ],
            answer: "This is all that makes life interesting.",
        },
        {
            id: 111,
            question:
                "Choose ‘Distributive Pronoun’ from following alternatives.",
            options: ["some", "few", "Either", "All"],
            answer: "Either",
        },
        {
            id: 112,
            question:
                "Fill in the blank with correct ‘Distributive Pronoun’ boy is good.",
            options: ["Neither", "All", "some", "Few"],
            answer: "Neither",
        },
        {
            id: 113,
            question:
                "‘Each has a bicycle’, The underlined word is used as ________.",
            options: [
                "Relative Pronoun",
                "Distributive Pronoun",
                "Interrogative Pronoun",
                "Indefinite Pronoun",
            ],
            answer: "Distributive Pronoun",
        },
        {
            id: 114,
            question:
                "Sachin and Rahul blamed ________. Complete the given sentence.",
            options: [
                "one another",
                "each other",
                "one to other",
                "none of these",
            ],
            answer: "each other",
        },
        {
            id: 115,
            question:
                "Many players greeted ________. Complete the sentence with correct expression.",
            options: ["Each one", "any other", "one another", "each other"],
            answer: "one another",
        },
        {
            id: 116,
            question: "What! Are you mad? The underlined word is ________.",
            options: [
                "Interrogative Pronoun",
                "Relative Pronoun",
                "Distributive Pronoun",
                "Exclamatory Pronoun",
            ],
            answer: "Exclamatory Pronoun",
        },
        {
            id: 117,
            question:
                "Water is needed to sustain life on the earth. Choose correct Wh-type question to get underlined part as answer.",
            options: [
                "Who is needed to sustain life on the earth?",
                "What is needed to sustain life on the earth?",
                "Which is needed to sustain life on the earth?",
                "Whose is needed to sustain life on the earth?",
            ],
            answer: "What is needed to sustain life on the earth?",
        },
        {
            id: 118,
            question:
                "This is Gopal’s bag. Choose the correct Wh-type question to get underlined part as answer.",
            options: [
                "Whose bag is this?",
                "Which bag is this?",
                "Who bag is this?",
                "Why bag is this?",
            ],
            answer: "Whose bag is this?",
        },
        {
            id: 119,
            question: "Choose the sentence which has ‘Interrogative Pronoun’.",
            options: [
                "Who is there?",
                "The man, who is honest, is trusted.",
                "This is the boy who won the first prize.",
                "Why bag is this?",
            ],
            answer: "Who is there?",
        },
        {
            id: 120,
            question: "Choose ‘Interrogative Pronoun’ from following.",
            options: ["Why", "Where", "Which", "When"],
            answer: "Which",
        },
        {
            id: 121,
            question: "Choose ‘Interrogative Pronoun’ from following.",
            options: ["Who", "Where", "Why", "When"],
            answer: "Who",
        },
        {
            id: 122,
            question:
                "Which is the best book in the market? The underlined word is used as ________ in the sentence.",
            options: [
                "Relative Pronoun",
                "Indefinite Pronoun",
                "Distributive Pronoun",
                "Interrogative Pronoun",
            ],
            answer: "Interrogative Pronoun",
        },
        {
            id: 123,
            question: "________ have bicycles.",
            options: ["No one", "Some one", "Everybody", "Few"],
            answer: "Some one",
        },
        {
            id: 124,
            question: "________ of the persons has a car.",
            options: ["All", "Some", "Few", "Everybody"],
            answer: "Some",
        },
        {
            id: 125,
            question: "________ have good storybooks.",
            options: ["Many", "Everybody", "Someone", "Nobody"],
            answer: "Everybody",
        },
        {
            id: 126,
            question:
                "‘Walmiki wrote Ramayana’. Choose correct Wh-type question to get underlined part answer.",
            options: [
                "Who wrote Ramayana?",
                "Which wrote Ramayana?",
                "Whose wrote Ramayana?",
                "Whom wrote Ramayana?",
            ],
            answer: "Who wrote Ramayana?",
        },
        {
            id: 127,
            question:
                "That is his sister. Choose correct Wh-type question to get underlined part as answer.",
            options: [
                "Who is his sister?",
                "Which is his sister?",
                "Whose is his sister?",
                "When is his sister?",
            ],
            answer: "Who is his sister?",
        },
        {
            id: 128,
            question:
                "Choose correct Reflexive pronoun for the blank place. The king saw ________ into the mirror.",
            options: ["Herself", "Himself", "Itself", "Ourselves"],
            answer: "Himself",
        },
        {
            id: 129,
            question: "She blamed ________.",
            options: ["Himself", "Herself", "Itself", "None of these"],
            answer: "Herself",
        },
        {
            id: 130,
            question: "They went ________.",
            options: ["Ourselves", "Themselves", "Ourselves", "Himself"],
            answer: "Themselves",
        },
        {
            id: 131,
            question: "Choose correct plural form of 'Self'.",
            options: ["Selfs", "Selfes", "Selves", "None of these"],
            answer: "Selves",
        },
        {
            id: 132,
            question: "I ________ said so.",
            options: ["Himself", "Myself", "Ourselves", "Themselves"],
            answer: "Myself",
        },
        {
            id: 133,
            question: "The king ________ went to see the queen.",
            options: ["Himself", "Myself", "Itself", "Ourselves"],
            answer: "Himself",
        },
        {
            id: 134,
            question: "We ________ came out of the jungle.",
            options: ["Ourselves", "Ourself", "Himself", "Themselves"],
            answer: "Ourselves",
        },
        {
            id: 135,
            question:
                "________ is a boy. Choose correct 'Demonstrative Pronoun'.",
            options: ["These", "Those", "This", "He"],
            answer: "This",
        },
        {
            id: 136,
            question:
                "________ is my car. Choose correct ‘Demonstrative Pronoun’.",
            options: ["That", "These", "Whose", "Those"],
            answer: "That",
        },
        {
            id: 137,
            question:
                "________ are my cars. Choose correct ‘Demonstrative Pronoun’.",
            options: ["This", "That", "Those", "They"],
            answer: "Those",
        },
        {
            id: 138,
            question: "Choose 'Indefinite Pronoun'.",
            options: ["He", "They", "Some one", "Myself"],
            answer: "Some one",
        },
        {
            id: 139,
            question:
                "Choose correct ‘Indefinite Pronoun’ for filling the blanks. ________ is there.",
            options: ["Someone", "He", "She", "They"],
            answer: "Someone",
        },
        {
            id: 140,
            question:
                "Choose correct 'Indefinite Pronoun' for blank places. ________ are called, but ________ are chosen.",
            options: ["He, she", "They, we", "You, she", "Many, few"],
            answer: "Many, few",
        },
        {
            id: 141,
            question:
                "________ are present. Choose correct 'Indefinite Pronoun' for filling the blanks.",
            options: ["He", "She", "They", "All"],
            answer: "They",
        },
        {
            id: 142,
            question:
                "________ is wrong. Choose correct 'Indefinite Pronoun' for filling the blanks.",
            options: ["He", "You", "Something", "We"],
            answer: "Something",
        },
        {
            id: 143,
            question:
                "________ are punished. Choose correct 'Indefinite Pronoun' for filling the blanks.",
            options: ["Someone", "Any one", "Somebody", "Few"],
            answer: "Somebody",
        },
        {
            id: 144,
            question:
                "________ flower is beautiful. Choose correct 'Indefinite Pronoun' for filling the blanks.",
            options: ["Many", "A great many", "Many a", "None of these"],
            answer: "Many a",
        },
        {
            id: 145,
            question:
                "________ men were punished. Choose correct 'Indefinite Pronoun' for filling the blanks.",
            options: ["Many a", "A great many", "Somebody", "None of these"],
            answer: "A great many",
        },
        {
            id: 146,
            question:
                "________ is there. Choose correct 'Indefinite Pronoun' for filling the blanks.",
            options: ["All", "Few", "No one", "Some"],
            answer: "No one",
        },
        {
            id: 147,
            question:
                "Choose the correct Relative pronoun. I have forgotten ________ gave us this book.",
            options: ["Who", "Why", "Whose", "Which"],
            answer: "Who",
        },
        {
            id: 148,
            question:
                "Fill in the blank with appropriate pronoun: I wish I knew the man ________ wrote the story.",
            options: ["Who", "Which", "That", "Whom"],
            answer: "Who",
        },
        {
            id: 149,
            question:
                "Choose the appropriate relative pronoun to fill in the gap in the following statement: I know the man ________ painted this picture.",
            options: ["Who", "Whom", "Whose", "Which"],
            answer: "Who",
        },
        {
            id: 150,
            question:
                "Choose the correct pronoun to fill in the blank: Ashoka was a wise king. ________ lived more than 2000 years ago.",
            options: ["Their", "They", "It", "He"],
            answer: "He",
        },
        {
            id: 151,
            question:
                "Choose the correct pronoun to fill in the blank: Cats are very useful ________ can catch mice.",
            options: ["She", "They", "It", "He"],
            answer: "They",
        },
        {
            id: 152,
            question:
                "Find the correct form of pronoun of underlined word: I prefer black shoes to brown <u>ones</u>.",
            options: [
                "Demonstrative pronoun",
                "Relative Pronoun",
                "Indefinite Pronoun",
                "Personal pronoun",
            ],
            answer: "Indefinite Pronoun",
        },
        {
            id: 153,
            question:
                "The boy who made the top score is my cousin. The underlined word is ________.",
            options: [
                "Demonstrative pronoun",
                "Personal Pronoun",
                "Relative pronoun",
                "Reflective pronoun",
            ],
            answer: "Relative pronoun",
        },
        {
            id: 154,
            question:
                "Which one of the following alternatives is not a ‘pronoun’?",
            options: ["Most", "His", "Those", "Which"],
            answer: "Most",
        },
        {
            id: 155,
            question: "________ of the rooms is good to me.",
            options: ["Every", "Each", "Some", "All"],
            answer: "Each",
        },
        {
            id: 156,
            question:
                "Choose correct form of pronoun to fill in the blanks. They never admitted ________ faults.",
            options: ["Them", "Their", "Theirs", "None"],
            answer: "Their",
        },
        {
            id: 157,
            question:
                "Choose the correct word to complete the following sentence. He is friend of ________.",
            options: ["Me", "Mine", "My", "None"],
            answer: "Mine",
        },
        {
            id: 158,
            question: "The moment ________ is lost, is lost forever.",
            options: ["That", "Which", "When", "What"],
            answer: "That",
        },
        {
            id: 159,
            question:
                "There is no doubt that one has to keep ________ with the changing times.",
            options: ["Aside", "Tuning", "Oneself", "Pace"],
            answer: "Pace",
        },
        {
            id: 160,
            question:
                "Fill in the blank with the appropriate relative pronoun: The opportunity ________ is lost is lost for ever.",
            options: ["Those", "Who", "What", "Which"],
            answer: "Which",
        },
        {
            id: 161,
            question:
                "Fill in the blank with the correct option: A friend bought the car for ________.",
            options: ["Mine", "Hers", "Us", "We"],
            answer: "Us",
        },
        {
            id: 162,
            question:
                "Choose the incorrect part of the sentence: This is (1) of course (2) strictly between (3) you and I (4).",
            answer: "3) you and I",
        },
        {
            id: 163,
            question:
                "Choose the incorrect part of the sentence: Let you (1) and I (2) share (3) this secret (4).",
            answer: "1) Let you and I",
        },
        {
            id: 164,
            question:
                "Choose the incorrect part of the sentence: I remember (1) all (2) what (3) he said (4).",
            answer: "2) what",
        },
        {
            id: 165,
            question:
                "Choose the incorrect part of the sentence: This is one of the (1) best novels (2) that has (3) come out recently (4).",
            answer: "3) that has",
        },
        {
            id: 166,
            question:
                "Choose the correct sentence from the given alternatives.",
            options: [
                "The boy has been punished by the headmaster who has broken the window pane.",
                "The boy who has broken the window pane has been punished by the headmaster.",
                "The boy has been who punished by the headmaster has broken the window pane.",
                "None is correct.",
            ],
            answer: "The boy who has broken the window pane has been punished by the headmaster.",
        },
        {
            id: 167,
            question:
                "Rajan will meet Umesh at the shop in the evening to deliver the message. Which 'wh' word should the question begin with to get the underlined word as answer?",
            options: ["Who", "Whom", "Where", "Why"],
            answer: "Where",
        },
        {
            id: 168,
            question:
                "Which of the following sentences is correct? (A) Both did not go. (B) Neither went.",
            options: [
                "Only (A)",
                "Only (B)",
                "Both (A) and (B)",
                "Neither (A) nor (B)",
            ],
            answer: "Only (B)",
        },
        {
            id: 169,
            question:
                "Which of the following sentences is correct? (A) He is older than I. (B) He is elder than I.",
            options: [
                "Only (A)",
                "Only (B)",
                "Both (A) and (B)",
                "Neither (A) nor (B)",
            ],
            answer: "Only (A)",
        },
        {
            id: 170,
            question:
                "The mother was carrying a baby in ________ arms. Choose appropriate option from the following to fill in the blank.",
            options: ["His", "Her", "Your", "Their"],
            answer: "Her",
        },
        {
            id: 171,
            question:
                "I ________ will tell you the truth. Choose the appropriate option to fill in blank in the above sentence.",
            options: ["Herself", "Himself", "Yourself", "Myself"],
            answer: "Myself",
        },
        {
            id: 172,
            question:
                "The porter was carrying a heavy burden on ________ back. Choose proper word from the following to fill in the blank.",
            options: ["His", "Her", "Your", "Their"],
            answer: "His",
        },
        {
            id: 173,
            question:
                "I have found the book ________ I lost yesterday. Choose the correct option to fill in the blank.",
            options: ["Who", "Whom", "Which", "When"],
            answer: "Which",
        },
        {
            id: 174,
            question:
                "Pick out the incorrect part of the following sentence: 'Taj Mahal is one of the wonder of the world.'",
            options: ["Taj Mahal is", "One of", "The wonder", "Of the world"],
            answer: "3) The wonder",
        },
        {
            id: 175,
            question:
                "Find out number of pronouns in the following sentence: I planted these coconut trees five years ago, one has started yielding coconuts, the other hasn't.",
            options: ["01", "02", "03", "04"],
            answer: "03",
        },
        {
            id: 176,
            question:
                "Fill in the blank with the correct word from the choices given below: The principal scolded the students ________ project work was not complete.",
            options: ["What", "Whose", "Who", "Which"],
            answer: "Whose",
        },
        {
            id: 177,
            question:
                "Choose the correct pronoun from the following alternatives to fill in the blank: You and ________ have both been placed first in the competition.",
            options: ["Me", "Mine", "I", "My"],
            answer: "I",
        },
        {
            id: 178,
            question:
                "Identify the grammatically correct sentence(s):\n a) None of the brothers has their father’s talents.\n b) None of the brothers have their father’s talents.\n c) None of the brothers had their father’s talents.\n d) None of the brothers had their father’s talents.",
            options: [
                "Only (a) and (c) correct",
                "Only (b) and (d) correct",
                "Only (a), (b), and (c) are correct",
                "All correct",
            ],
            answer: "Only (a) and (c) correct",
        },
        {
            id: 179,
            question:
                "Pick out the correct alternative to complete the sentence given below: I know the man ________.",
            options: [
                "That was here yesterday",
                "Who was here yesterday.",
                "If he was here yesterday",
                "Which was here yesterday",
            ],
            answer: "Who was here yesterday.",
        },
        {
            id: 180,
            question:
                "I have done this work <u>myself</u>. Identify the type of underlined pronoun in the above sentence.",
            options: ["Relative", "Reflexive", "Emphatic", "Personal"],
            answer: "Emphatic",
        },
        {
            id: 181,
            question:
                "Identify incorrect sentence(s):\n a) The basket of apples and pears were hanging from a hook.\n b) This must be one of the best plays that has been staged at Stratford this season.\n c) Each of the candidates are well qualified.",
            options: ["a only", "a and b", "b and c", "a, b, c"],
            answer: "b and c",
        },
        {
            id: 182,
            question:
                "Which one of the following two sentences is correct?\n a) Who did this? \n b) He and I are brothers.",
            options: ["Only a", "Only b", "Both", "Neither"],
            answer: "Both",
        },
        {
            id: 183,
            question:
                "Which one of the following two sentences is correct?\n a) He enjoyed during the holidays.\n b) I asked for my pencil, but he did not give me.",
            options: ["Only a", "Only b", "Both", "Neither"],
            answer: "Only b",
        },
        {
            id: 184,
            question:
                "Which one of the following two sentences is incorrect?\n a) One of my servants tells me.\n b) Both did not go.",
            options: ["Only a", "Only b", "Both", "Neither"],
            answer: "Only b",
        },
        {
            id: 185,
            question:
                "Choose the incorrect sentence(s):\n a) What a nonsense to have a picnic in such a bad weather!\n b) If your braces are loose, your trousers come down.\n c) The football team is having its bath.",
            options: ["Only a", "Only b", "a and b", "a and c"],
            answer: "a and b",
        },
        {
            id: 186,
            question:
                "Either Ravi or Mohan have done his work.\n You are more lethargic than she.\n Identify the correct sentence.",
            options: [
                "Only I is correct",
                "Only II is correct",
                "Both I and II are correct",
                "Both I and II are incorrect",
            ],
            answer: "Only II is correct",
        },
        {
            id: 187,
            question:
                "Identify the correct verb agreement:\n The introduction of English, Marathi, and other regional languages ________ profound effect on the students' linguistic competence.",
            options: ["Has had", "Have had", "Are", "Have"],
            answer: "Has had",
        },
        {
            id: 188,
            question:
                "a) The host and the hostess were kind to us.\n b) Bread and butter is my favourite food.\n Identify the correct sentence.",
            options: [
                "Only a is correct",
                "Only b is correct",
                "Both a and b are correct",
                "Both a and b are incorrect",
            ],
            answer: "Both a and b are correct",
        },
        {
            id: 189,
            question:
                "Identify the correct sentence(s):\n a) The minister, accompanied by his officers, is visiting the town tomorrow.\n b) Each of the employees was given a bonus.",
            options: [
                "Only a is correct",
                "Only b is correct",
                "Both a and b are correct",
                "Both a and b are incorrect",
            ],
            answer: "Both a and b are correct",
        },
        {
            id: 190,
            question:
                "Identify the grammatically correct sentence(s):\n a) Every man and woman is welcome.\n b) Neither of the two boys were successful.",
            options: [
                "Only a is correct",
                "Only b is correct",
                "Both a and b are correct",
                "Both a and b are incorrect",
            ],
            answer: "Only a is correct",
        },
        {
            id: 191,
            question: "Which one of the following is a distributive pronoun?",
            options: ["Those", "Some", "Each", "Whose"],
            answer: "Each",
        },
        {
            id: 192,
            question:
                "Choose the correct alternative to fill in the blank: ________ unemployed persons were present at the demonstration.",
            options: ["Much", "Many a", "A great many", "A many"],
            answer: "A great many",
        },
        {
            id: 193,
            question:
                "Choose the correct option to fill in the blanks in the following sentences:\n a) Ten pounds ________ a lot of money.\n b) Twenty miles ________ not a great distance in these days of rapid travel.\n c) There ________ eggs and bacon for breakfast.",
            options: [
                "Are, is, is",
                "Is, is, is",
                "Are, are, are",
                "Is, are, is",
            ],
            answer: "Is, is, is",
        },
        {
            id: 194,
            question:
                "Identify the correct sentence:\n 1) The price is depended on the quality.\n 2) The price is made to depend on the quality.\n 3) The price depends on the quality.\n 4) The price was depended on the quality.",
            answer: "The price depends on the quality.",
        },
        {
            id: 195,
            question:
                "Identify the correct sentence(s):\n a) The ship was wrecked and every man, woman, and child was drowned.\n b) The ship was wrecked and every man, woman, and child were drowned.\n c) The ship was wrecked and every man, woman, and child had drowned.",
            options: ["Only b", "Only c", "Only a", "Both b and c"],
            answer: "Only a",
        },
        {
            id: 196,
            question:
                "Choose the sentences containing correctly used pronouns:\n a) That book is her.\n b) That idea of yours is excellent.\n c) This book is mine.",
            options: ["a only", "c only", "a and b only", "b and c only"],
            answer: "b and c only",
        },
        {
            id: 197,
            question:
                "Select the grammatically correct sentence(s):\n a) Each of the employees was given bonus.\n b) Neither of the accusations is true.",
            options: [
                "Only a and c",
                "Only b and c",
                "Only b and d",
                "Only a and d",
            ],
            answer: "Only b and c",
        },
        {
            id: 198,
            question:
                "Identify the incorrect sentence(s):\n a) A course of lectures was delivered.\n b) Silver as well as gold is used for ornaments.",
            options: ["Only a", "Only b", "Both", "Neither"],
            answer: "Neither",
        },
        {
            id: 199,
            question:
                "Choose the correct pronouns to fill in the blanks:\n a) Every student passed examination.\n b) Everyone had to show ticket.\n c) We have lost dog.",
            options: [
                "His, his, our",
                "Their, his, our",
                "His, their, our",
                "His, his, ours",
            ],
            answer: "His, his, our",
        },
        {
            id: 200,
            question:
                "He and his five brothers love ________ very much. Which one of the following pronouns correctly fills in the blank in the sentence above?",
            options: ["Each other", "Themselves", "One another", "One other"],
            answer: "Each other",
        },
        {
            id: 201,
            question:
                "The committee ________ considered your request. The verb which agrees with the subject 'The committee' in notional concord is:",
            options: ["Are", "Is", "Has", "Have"],
            answer: "Has",
        },
        {
            id: 202,
            question:
                "a) Some of the TV serial is worth watching today.\n b) Some of the TV serials are worth watching today.\n c) None of the TV serials is worth watching today.\n d) None of the TV serials are worth watching today.\n The grammatically incorrect sentences among these are:",
            options: ["a and d", "a and b", "c and d", "b and c"],
            answer: "a and d",
        },
        {
            id: 203,
            question:
                "Identify the sentence(s) grammatically correct:\n a) The committee is divided on some issues.\n b) The committee are divided on some issues.\n c) The committee has issued its report.\n d) The committee have issued their report.",
            options: [
                "Only a and c",
                "Only b and c",
                "Only a and d",
                "Only b and d",
            ],
            answer: "Only a and c",
        },
        {
            id: 204,
            question: "Find out the incorrect sentence from the following:",
            options: [
                "Fifty thousand rupees is a big amount.",
                "Ten miles are not a short distance.",
                "Five years is a long period.",
                "One of the books is damaged.",
            ],
            answer: "Ten miles are not a short distance.",
        },
        {
            id: 205,
            question:
                "Choose the correct sentence:\n a) Leap years that have 366 days contain an extra day in February.\n b) Leap years, which have 366 days, contain an extra day in February.",
            options: [
                "(a) only",
                "(b) only",
                "Both (a) and (b)",
                "None of the above",
            ],
            answer: "Both (a) and (b)",
        },
        {
            id: 206,
            question:
                "Fill in the blanks:\n a) His excuses, ________ were not convincing, angered his sister.\n b) I made the dress I intend ________.\n c) The organisers invited entries ________ did not exceed 1000 words.",
            options: [
                "Since, to wear, that",
                "Which, to wear, that",
                "Because, wearing, that",
                "Which, wearing, that",
            ],
            answer: "Which, to wear, that",
        },
        {
            id: 207,
            question:
                "Find out objective personal pronouns from the following:\n 1, WE, MY, Our, Me, Thou, Us, You, Thee, Your.",
            options: [
                "I, We, My, Our, Thou",
                "I, We, My, Your",
                "Me, Us, Thee, You",
                "None of these above",
            ],
            answer: "Me, Us, Thee, You",
        },
        {
            id: 208,
            question:
                "Choose the correct sentence:\n a) The cat licked it's paw.\n b) The club cheered for its team.\n c) It's five hours until my birthday.",
            options: [
                "Only a is correct",
                "Only b is correct",
                "Only c is correct",
                "Both b & c are correct",
            ],
            answer: "Both b & c are correct",
        },
        {
            id: 209,
            question:
                "Don't annoy that bull or ________ may attack you. 'Which one of the following pronouns correctly agrees with the noun ‘bull’ and fills in the blank in the sentence above?",
            options: ["They", "It", "She", "He"],
            answer: "It",
        },
        {
            id: 210,
            question:
                "What type of pronoun is the underlined word used in the given sentence:\n 'You will hurt <u>yourself</u>'.",
            options: [
                "It is Demonstrative Pronoun",
                "It is Emphatic Pronoun",
                "It is Reflexive Pronoun",
                "It is Distributive Pronoun",
            ],
            answer: "It is Reflexive Pronoun",
        },
        {
            id: 211,
            question:
                "(a) Ram or Hari must lend his hand.\n (b) He and myself were working together.\n (c) None but the brave deserves the fair.\n Identify the correct sentence(s).",
            options: [
                "Only (a) and (c)",
                "Only (b) and (c)",
                "Only (c)",
                "Only (b)",
            ],
            answer: "Only (a) and (c)",
        },
        {
            id: 212,
            question:
                "Choose correct phrase to complete the sentence:\n He put all the books beside ________.",
            options: [
                "Each other",
                "Each other’s",
                "One another",
                "One another’s",
            ],
            answer: "One another",
        },
        {
            id: 213,
            question:
                "Choose the correct sentences:\n a) Give me them books.\n b) They who go by train must leave now.\n c) The story that I read was good.",
            options: [
                "(a) and (b) only",
                "(b) only",
                "(c) only",
                "(a), (b), and (c)",
            ],
            answer: "(c) only",
        },
        {
            id: 214,
            question:
                "(a) Rama or Hari must lend their hands.\n (b) None of my lost books were found.\n (c) Each of the employees was given bonus.\n Identify the correct sentence(s).",
            options: [
                "Only (a) and (b)",
                "Only (a) and (c)",
                "Only (a)",
                "Only (b) and (c)",
            ],
            answer: "Only (b) and (c)",
        },
        {
            id: 215,
            question: "Pick out the wrong adjective.",
            options: [
                "Father - Paternal",
                "Brother - Fraternal",
                "Death - Mortal",
                "Earth - Earthal",
            ],
            answer: "Earth - Earthal",
        },
        {
            id: 216,
            question:
                "Fill in the blank with the correct adjective from the options given below: Chennai is _______ from Delhi than Calcutta.",
            options: ["Further", "Farther", "Father", "Far more"],
            answer: "Farther",
        },
        {
            id: 217,
            question: "Pick out the correct sentence.",
            options: [
                "It is good to starve than beg.",
                "It is better to starve than beg.",
                "It is best to starve than beg.",
                "It is the best to starve than beg.",
            ],
            answer: "It is better to starve than beg.",
        },
        {
            id: 218,
            question: "This is <u>my</u> bag. The underlined word is:",
            options: [
                "Interrogative Adjective",
                "Adjective of number",
                "Possessive Adjective",
                "Emphasizing Adjective",
            ],
            answer: "Possessive Adjective",
        },
        {
            id: 219,
            question:
                "Choose the right adjective and fill in the blank: Could you lend me _______ money?",
            options: ["Some", "Any", "Much", "Little"],
            answer: "Some",
        },
        {
            id: 220,
            question: "Write an adjective form of 'distinction.'",
            options: [
                "Distinctive",
                "Distinctly",
                "Distinctness",
                "Distinctively",
            ],
            answer: "Distinctive",
        },
        {
            id: 221,
            question:
                "'She looks like a girl <u>next</u> door.' The underlined word in the above sentence functions as:",
            options: ["An adjective", "An adverb", "A preposition", "A noun"],
            answer: "An adjective",
        },
        {
            id: 222,
            question: "Fill in the blanks: I do not have _______ money.",
            options: ["Enough", "Sufficient", "Plenty of", "More"],
            answer: "Enough",
        },
        {
            id: 223,
            question: "Give the adjective form of the following word: Move.",
            options: ["Move", "Movable", "Movement", "Motion"],
            answer: "Movable",
        },
        {
            id: 224,
            question: "Give the adjective form of the following word: Herb.",
            options: ["Herbious", "Heard", "Hard", "Herbal"],
            answer: "Herbal",
        },
        {
            id: 225,
            question: "Give the adjective form of the following word: Male.",
            options: ["Masculine", "Female", "Man", "Manly"],
            answer: "Masculine",
        },
        {
            id: 226,
            question: "Give the adjective form of the following word: Line.",
            options: ["Long", "Lineal", "Linely", "Inline"],
            answer: "Lineal",
        },
        {
            id: 227,
            question: "Give the adjective form of the following word: Honour.",
            options: ["Honourable", "Honorous", "Honoraly", "Honoured"],
            answer: "Honourable",
        },
        {
            id: 228,
            question:
                "He lives _______ door. Choose the correct adjective to fill in the blank.",
            options: ["Nearest", "Next", "Nearby", "Close"],
            answer: "Next",
        },
        {
            id: 229,
            question: "I don’t have _______ books.",
            options: ["Some", "Any", "Few", "Less"],
            answer: "Any",
        },
        {
            id: 230,
            question:
                "Choose the correct form of the adjective: Lata is _______ than her sister.",
            options: ["Wise", "Wiser", "Wisest", "More wise"],
            answer: "Wiser",
        },
        {
            id: 231,
            question: "She is the _______ hard-working girl of the class.",
            options: ["Most", "More", "Much", "Many"],
            answer: "Most",
        },
        {
            id: 232,
            question:
                "Mohan is my _______ brother. Choose the correct form of the adjective.",
            options: ["Elder", "Older", "Eldest", "More old"],
            answer: "Elder",
        },
        {
            id: 233,
            question: "Taj Mahal is _______ than Usha Kiran.",
            options: ["Old", "Oldest", "Older", "Equal"],
            answer: "Older",
        },
        {
            id: 234,
            question:
                "There is _______ sugar left in the jar, I can’t give you any. Choose the correct word for the blank place.",
            options: ["Little", "The little", "A little", "Much little"],
            answer: "Little",
        },
        {
            id: 235,
            question:
                "There is _______ hope of his recovery, we have to take him to a good hospital. Choose the correct word.",
            options: ["A little", "The little", "Little", "None of these"],
            answer: "Little",
        },
        {
            id: 236,
            question:
                "_______ hope, I had, is lost. Choose the correct word to fill in the blanks.",
            options: ["A little", "Little", "The little", "None of these"],
            answer: "The little",
        },
        {
            id: 237,
            question:
                "Choose the sentence in which the noun is used as an adjective.",
            options: [
                "She is a beautiful girl.",
                "This is a hot cup of tea.",
                "I won a running race.",
                "I have a story book.",
            ],
            answer: "I have a story book.",
        },
        {
            id: 238,
            question:
                "Choose the sentence in which the present participle is used as an adjective.",
            options: [
                "Recently we have bought a folding chair.",
                "There is a water tank.",
                "I saw a wounded tiger.",
                "She is a beautiful girl.",
            ],
            answer: "Recently we have bought a folding chair.",
        },
        {
            id: 239,
            question:
                "Choose the sentence in which the past participle is used as an adjective.",
            options: [
                "He is a very hard-working man.",
                "I have a broken cup.",
                "I need some cold water.",
                "He is a little boy.",
            ],
            answer: "I have a broken cup.",
        },
        {
            id: 240,
            question: "Choose Adjective of Number from the following:",
            options: ["Clever", "Much", "Five", "Some"],
            answer: "Five",
        },
        {
            id: 241,
            question:
                "Choose Adjective of Indefinite Number from the following:",
            options: ["Many", "Little", "Much", "Honest"],
            answer: "Many",
        },
        {
            id: 242,
            question:
                "Choose the correct word which takes a prefix while changing into the superlative degree.",
            options: ["Industrious", "Easy", "Hard", "Clever"],
            answer: "Industrious",
        },
        {
            id: 243,
            question:
                "Choose the correct word which takes a suffix while changing into the superlative form.",
            options: ["Beautiful", "Honest", "Hardworking", "Clever"],
            answer: "Beautiful",
        },
        {
            id: 244,
            question: "Choose the correct superlative form:",
            options: ["Good", "Best", "Better", "Bad"],
            answer: "Best",
        },
        {
            id: 245,
            question: "Choose the comparative form of 'bad'.",
            options: ["Very bad", "Worst", "Worse", "None of the above"],
            answer: "Worse",
        },
        {
            id: 246,
            question:
                "Choose the sentence in which 'Interrogative Adjective' is used.",
            options: [
                "Who is there?",
                "When will the meeting start?",
                "Why am I?",
                "Which books do you want?",
            ],
            answer: "Which books do you want?",
        },
        {
            id: 247,
            question:
                "<u>Each</u> boy was punished. The underlined word is used as:",
            options: [
                "Adjective of Quality",
                "Distributive Adjective",
                "Interrogative Adjective",
                "Possessive Adjective",
            ],
            answer: "Distributive Adjective",
        },
        {
            id: 248,
            question: "Choose the ordinal from the following.",
            options: ["Five", "Four", "Hundred", "Third"],
            answer: "Third",
        },
        {
            id: 249,
            question: "Those horses are mine. The underlined word is used as:",
            options: [
                "Adjective of Quality",
                "Emphasizing Adjective",
                "Distributive Adjective",
                "Demonstrative Adjective",
            ],
            answer: "Demonstrative Adjective",
        },
        {
            id: 250,
            question:
                "The two <u>ugly</u> boys had gone <u>home</u> just now. The parts of speech of the underlined words respectively are:",
            options: [
                "Adverb, Noun",
                "Adjective, Adverb",
                "Adjective, Noun",
                "Adverb, Adverb",
            ],
            answer: "Adjective, Noun",
        },
        {
            id: 251,
            question:
                "Choose the correct alternative to fill in the blank: The _______ part of the film was not very interesting.",
            options: ["Late", "Later", "Latter", "Latest"],
            answer: "Latter",
        },
        {
            id: 252,
            question:
                "Choose the correct option and fill in the blank: The _______ past of India is inspiring for today’s generation.",
            options: ["Dubious", "Glorious", "Glory", "Outrageous"],
            answer: "Glorious",
        },
        {
            id: 253,
            question:
                "(a) Gavaskar was the star of Indian cricket.\n (b) An elephant is a wise animal.\n Pick out the correct sentences.",
            options: [
                "Only (a) is correct",
                "Only (b) is correct",
                "Both (a) & (b) are correct",
                "Both (a) & (b) are incorrect",
            ],
            answer: "Both (a) & (b) are correct",
        },
        {
            id: 254,
            question: "Which one of the following is not an 'adjective'?",
            options: ["Friendly", "Carefully", "Monthly", "Only"],
            answer: "Carefully",
        },
        {
            id: 255,
            question: "Give the adjective form of: 'Significance'.",
            options: ["Signify", "Signific", "Significant", "Signifying"],
            answer: "Significant",
        },
        {
            id: 256,
            question:
                "Choose the alternative: Shyam was a _______ man in his family.",
            options: ["Shred", "Shrewd", "Shrew", "Shrewed"],
            answer: "Shrewd",
        },
        {
            id: 257,
            question:
                "Point out the number of adjectives involved in: 'It is safer to send important letters by registered post than by ordinary post.'",
            options: ["04", "03", "02", "01"],
            answer: "03",
        },
        {
            id: 258,
            question:
                "These apples are _______. Choose the correct alternative to complete the sentence.",
            options: ["Soar", "Sour", "Sore", "Soer"],
            answer: "Sour",
        },
        {
            id: 259,
            question:
                "Which one of the following two sentences is incorrect?\n a) He is a tall gentleman.\n b) He took insult at this.",
            options: ["Only a", "Only b", "Both", "Neither"],
            answer: "Only b",
        },
        {
            id: 260,
            question:
                "Choose the correct article to complete the sentence: John is my _______ brother.\n a) Old\n b) Older\n c) Elder\n d) Eldest",
            options: ["a & b", "c & d", "b & c", "All four"],
            answer: "b & c",
        },
        {
            id: 261,
            question:
                "Fill the blank with the most appropriate of the words given below: Everybody congratulated him on his _______ achievement.",
            options: ["Momentous", "Momentary", "Momentive", "Momental"],
            answer: "Momentous",
        },
        {
            id: 262,
            question:
                "Locate the grammatically correct sentences.\n a) The uniquest feature of this vehicle is its gearbox.\n b) The most unique feature of this vehicle is its gearbox.\n c) The unique feature of this vehicle is its gearbox.",
            options: [
                "Only (a) is correct",
                "Only (b) is correct",
                "Only (c) is correct",
                "All three are correct",
            ],
            answer: "Only (c) is correct",
        },
        {
            id: 263,
            question:
                "Supply the proper form (comparative or superlative) of the adjective. How is your brother today? Is he _______ ?",
            options: ["Good", "Better", "Well", "None of the above"],
            answer: "Better",
        },
        {
            id: 264,
            question:
                "Identify the part of speech of the underlined word: He is an <u>idle</u> boy, he does not work.",
            options: ["Noun", "Verb", "Adjective", "Adverb"],
            answer: "Adjective",
        },
        {
            id: 265,
            question: "Make the adjective form of 'occasion.'",
            options: [
                "Occasioned",
                "Accusational",
                "Occasional",
                "Occasionally",
            ],
            answer: "Occasional",
        },
        {
            id: 266,
            question:
                "Find out which are the correct sentences:\n a) These kind of books do not appeal to me.\n b) Those kinds of books do not appeal to me.\n c) These kinds of books do not appeal to me.\n d) This kind of book does not appeal to me.",
            options: ["Only a", "Only b", "Both a and b", "b, c and d"],
            answer: "b, c and d",
        },
        {
            id: 267,
            question:
                "Choose the correct word to fill in the blank in the following sentence: He is _______ than I expected.",
            options: ["Latter", "Last", "Later", "Lastly"],
            answer: "Later",
        },
        {
            id: 268,
            question:
                "Choose the correct sentence:\n a) My older brother is a doctor.\n b) Pankaj is elder than his friend.\n c) He is the oldest member of the club.\n d) This is the older pair of shoes I have.",
            options: [
                "Only a, b and c are correct",
                "Only b, c and d are correct",
                "Only a is correct",
                "Only c is correct",
            ],
            answer: "Only a, b and c are correct",
        },
        {
            id: 269,
            question: "What is the adjective form of the word 'balcony'?",
            options: ["Balconative", "Balconied", "Balconic", "Balconable"],
            answer: "Balconied",
        },
        {
            id: 270,
            question:
                "Choose correct option to fill in the blanks:\n a) I am not feeling _______ today.\n b) I am feeling _______ today.",
            options: [
                "Much well, much better",
                "Very well, much better",
                "Very well, very better",
                "Much well, very better",
            ],
            answer: "Very well, much better",
        },
        {
            id: 271,
            question:
                "Choose correct options to fill in the blanks:\n a) I want this exercise _______ in ink.\n b) Would you like the window _______ ?",
            options: [
                "To write, to close",
                "Writing, closing",
                "Written, closed",
                "Writen, close",
            ],
            answer: "Written, closed",
        },
        {
            id: 272,
            question:
                "Identify the sentence/s which are grammatically correct:\n a) She looks charming.\n b) Gopal is senior to you by two years.\n c) He is the most ideal teacher.\n d) Little money is better than none.",
            options: [
                "Only a, b and d",
                "Only b, c and d",
                "Only c and d",
                "Only a and b",
            ],
            answer: "Only a, b and d",
        },
        {
            id: 273,
            question:
                "Identify the correct and incorrect sentence from the following:\n a) One of the boys told me about Asha’s result.\n b) He has only one woolen trouser.",
            options: [
                "(a) is correct (b) is incorrect",
                "(b) is correct (a) is incorrect",
                "Both (a) and (b) are correct",
                "Both (a) and (b) are incorrect",
            ],
            answer: "(a) is correct (b) is incorrect",
        },
        {
            id: 274,
            question:
                "Use the correct form of adjective in the given sentence: 'This is the _______ point on this mountain range.'",
            options: ["Further", "Furthest", "Farther", "Farthest"],
            answer: "Furthest",
        },
        {
            id: 275,
            question:
                "Choose the correct type of adjective of the underlined word: <u>Those</u> rascals must be punished.",
            options: [
                "Demonstrative adjective",
                "Distributive adjective",
                "Quality adjective",
                "Quantity adjective",
            ],
            answer: "Demonstrative adjective",
        },
        {
            id: 276,
            question:
                "'Adjectives can sometimes be post-positive.' Which of the following is the correct example of this rule?",
            options: [
                "Timed and cowardly fighters do not fight well.",
                "The earliest girls to teach were in my class.",
                "They have a much bigger car than yours.",
                "He wants to work on something larger.",
            ],
            answer: "He wants to work on something larger.",
        },
        {
            id: 277,
            question:
                "'I have seen falling stars'. Identify the word 'falling'. Choose the option.",
            options: [
                "Present Participle",
                "Past Participle",
                "Participial Adjective",
                "None",
            ],
            answer: "Present Participle",
        },
        {
            id: 278,
            question:
                "Which of the following suffixes correctly forms the adjective of the word 'fog'?\n a) -ish\n b) -gy\n c) -ous\n d) -ic",
            options: ["Both (a) and (c)", "(d) only", "(b) only", "(a) only"],
            answer: "Both (a) and (c)",
        },
        {
            id: 279,
            question:
                "Identify the sentence in which the word 'mud' is used as an adjective:\n (a) The hut is made of mud.\n (b) He lives in a mud house.",
            options: [
                "(a) only",
                "(a) and (b)",
                "(b) only",
                "None of the above",
            ],
            answer: "(a) and (b)",
        },
        {
            id: 280,
            question:
                "(a) Many a time I remembered you.\n (b) This calf is elder than that.\n (c) My income is lesser than yours.\n (d) Gopal is senior to you by two years.\n Identify the sentence(s) grammatically correct.",
            options: [
                "Only (a) and (c)",
                "Only (b) and (c)",
                "Only (a) and (d)",
                "Only (c) and (d)",
            ],
            answer: "Only (c) and (d)",
        },
        {
            id: 281,
            question:
                "Identify the type of adjective underlined in the given example:\n 'This is the very book I want.'",
            options: [
                "Possessive adjective",
                "Adjective of quality",
                "Numeral adjective",
                "Emphasizing adjective",
            ],
            answer: "Emphasizing adjective",
        },
        {
            id: 282,
            question:
                "Choose the sentence with the meaningful sequence of words:\n (a) He carried his clothes in a black heavy steel trunk.\n (b) He carried his clothes in a heavy black steel trunk.\n (c) He carried in a heavy steel trunk black his clothes.\n (d) His carried clothes black trunk heavy steel.",
            options: ["Only (b)", "Only (c)", "Only (a)", "Only (d)"],
            answer: "Only (b)",
        },
        {
            id: 283,
            question:
                "Identify the grammatical class of the underlined word in the sentence:\n 'They are <u>school</u> children.'",
            options: ["Noun", "Adjective", "Verb", "Adverb"],
            answer: "Adjective",
        },
        {
            id: 284,
            question:
                "Choose the correct modal auxiliary in order to replace the underlined phrase in the following example: They <u>were unable to</u> find out any reliable solutions for the problems they encountered.",
            options: [
                "Could not find out",
                "Can not find out",
                "Might not find out",
                "Must not find out",
            ],
            answer: "Could not find out",
        },
        {
            id: 285,
            question:
                "“We ought to work hard.” The modal auxiliary in the above sentence expresses:",
            options: ["Duty", "Determination", "Threat", "Necessity"],
            answer: "Duty",
        },
        {
            id: 286,
            question:
                "Fill in the blank with the proper modal auxiliary: If you want to succeed, you ________ have strength of character.",
            options: ["Should", "Could", "Would", "Might"],
            answer: "Should",
        },
        {
            id: 287,
            question:
                "Select the correct modal to express permission: You ________ return my book tomorrow.",
            options: ["Shall", "Will", "May", "Can"],
            answer: "May",
        },
        {
            id: 288,
            question:
                "He ________ also be an inspiration. (Supply a suitable modal auxiliary showing “ability.”)",
            options: ["Can", "Could", "Should", "May"],
            answer: "Can",
        },
        {
            id: 289,
            question:
                "Choose the correct auxiliary verb from the following to fill in the blank: Students ________ follow the school regulations.",
            options: ["Might", "May", "Must", "Mostly"],
            answer: "Must",
        },
        {
            id: 290,
            question:
                "She <u>will</u> help you in this matter. Choose the correct expression to replace the underlined word to show near future.",
            options: ["Go", "Is going to", "Would", "Can"],
            answer: "Is going to",
        },
        {
            id: 291,
            question:
                "I <u>shall</u> tell you some interesting facts. Choose the correct expression to replace the underlined word.",
            options: ["Will", "Is going to", "Are going to", "Am going to"],
            answer: "Will",
        },
        {
            id: 292,
            question:
                "Lata <u>can</u> sing a song. Choose the correct phrase to replace the underlined word.",
            options: [
                "Was able to",
                "Are able to",
                "Is able to",
                "Were unable to",
            ],
            answer: "Is able to",
        },
        {
            id: 293,
            question:
                "I <u>can’t</u> help you. Don’t expect anything from me. Choose the correct phrase to replace the underlined word.",
            options: [
                "Am able to",
                "Am unable to",
                "Are able to",
                "Are unable to",
            ],
            answer: "Am unable to",
        },
        {
            id: 294,
            question:
                "You <u>should</u> work hard to get money. Choose the correct modal auxiliary to replace the underlined word.",
            options: ["Will", "May", "Ought to", "Are"],
            answer: "Ought to",
        },
        {
            id: 295,
            question:
                "Choose the correct modal auxiliary which shows prediction.",
            options: ["Can", "May", "Ought to", "Might"],
            answer: "Might",
        },
        {
            id: 296,
            question:
                "Choose the correct sentence in which the underlined word shows ‘obligation.’",
            options: [
                "You should obey your parents.",
                "You must complete your homework.",
                "It may rain today.",
                "You ought to study hard.",
            ],
            answer: "You must complete your homework.",
        },
        {
            id: 297,
            question:
                "Replace the underlined word with the correct expression: My father would drive a car.",
            options: ["Should", "May", "Ought to", "Used to"],
            answer: "Used to",
        },
        {
            id: 298,
            question: "Choose the sentence which shows suggestion.",
            options: [
                "She must not go out after 8 p.m.",
                "You should work hard to get success.",
                "She will go to Pune.",
                "I may come tomorrow.",
            ],
            answer: "You should work hard to get success.",
        },
        {
            id: 299,
            question:
                "Choose the best among the options to fill in the blank: He ________ better mind his manners.",
            options: ["Had", "Should", "Has", "Can"],
            answer: "Had",
        },
        {
            id: 300,
            question:
                "It is a <u>terribly hot</u> climate. Identify the parts of speech of the underlined words.",
            options: [
                "Main verb, Adjective, Adverb",
                "Aux. verb, Adverb, Adjective",
                "Main verb, Adverb, Adjective",
                "Aux. verb, Adjective, Adverb",
            ],
            answer: "Main verb, Adverb, Adjective",
        },
        {
            id: 301,
            question:
                "Police ________ looking for a man with one eye. Choose the correct verb to agree with the subject.",
            options: ["Is", "Are", "Had", "Has been"],
            answer: "Are",
        },
        {
            id: 302,
            question:
                "To die is better than to surrender. Which one of the following sentences substitutes a gerund for the infinitive in the sentence above?",
            options: [
                "Dying is better than to surrender.",
                "To die is better than surrendering.",
                "Dying is better than surrendering.",
                "Dying and surrendering are better.",
            ],
            answer: "Dying is better than surrendering.",
        },
        {
            id: 303,
            question:
                "Choose the correct verb-form: She ran because she ________ in a hurry.",
            options: ["Is", "Was", "Must be", "Could be"],
            answer: "Was",
        },
        {
            id: 304,
            question: "Choose from the following the verb form of “liberty”:",
            options: ["Libertine", "Liberation", "Liberality", "Liberate"],
            answer: "Liberate",
        },
        {
            id: 305,
            question:
                "Choose the sentence with correct use of modal auxiliary:\n a) She didn't eat much of breakfast.\n b) You can't see much of a country in a week.",
            options: [
                "Only a is correct",
                "Only b is correct",
                "Both a and b are correct",
                "Both a and b are incorrect",
            ],
            answer: "Both a and b are correct",
        },
        {
            id: 306,
            question:
                "Choose the correct sentence:\n a) We entered the house.\n b) I ordered coffee.\n c) What is the time by your watch?",
            options: ["Only b", "Only a and b", "Only a and c", "Only b and c"],
            answer: "Only a and b",
        },
        {
            id: 307,
            question:
                "He said he ________ hire an auto. Fill in the modal auxiliary to indicate the possibility of hiring an auto.",
            options: ["May", "Might", "Can", "Would"],
            answer: "Might",
        },
        {
            id: 308,
            question:
                "I ________ pay the bill today; it’s the last date. Fill in the appropriate modal auxiliary.",
            options: ["Should", "May", "Can", "Must"],
            answer: "Must",
        },
        {
            id: 309,
            question:
                "Fill in the blank with the correct option: ________ I have a word with you?",
            options: ["Was", "Could", "If", "Am"],
            answer: "Could",
        },
        {
            id: 310,
            question:
                "Choose the correct alternative: He walked so fast that I ________ not overtake him.",
            options: ["Can", "Could", "Will", "Would"],
            answer: "Could",
        },
        {
            id: 311,
            question:
                "The train <u>should</u> arrive any time now. The underlined modal expresses:",
            options: [
                "Obligation",
                "Anticipation",
                "Suggestion",
                "Instruction",
            ],
            answer: "Anticipation",
        },
        {
            id: 312,
            question:
                "Choose the correct verb from the options: The dentist decided to ________ my decayed tooth.",
            options: ["Exhale", "Extort", "Extract", "Exit"],
            answer: "Extract",
        },
        {
            id: 313,
            question:
                "Choose the correct alternative: I (am to leave, would leave, was to leave, was to have left) on Thursday. But on Thursday I had a terrible cold, so I decided to wait till Saturday.",
            options: [
                "Am to leave",
                "Would leave",
                "Was to leave",
                "Was to have left",
            ],
            answer: "Was to leave",
        },
        {
            id: 314,
            question:
                "(a) The tallest of the players was injured.\n (b) Ram as well as Shyam was present.\n Identify the correct sentences.",
            options: [
                "Only (a) is correct",
                "Only (b) is correct",
                "Both (a) & (b) are correct",
                "Both (a) & (b) are incorrect",
            ],
            answer: "Both (a) & (b) are correct",
        },
        {
            id: 315,
            question:
                "I need interpreters in my surgery who speak Punjabi, Urdu, and Gujarati. Pick out the correct alternative to make the sentence meaningful.",
            options: ["May", "Should", "Must", "Can"],
            answer: "Must",
        },
        {
            id: 316,
            question: "Which of the following sentences indicate ability?",
            options: [
                "I could lift the box by myself.",
                "I may lift the box by myself.",
                "I will lift the box by myself.",
                "I can lift the box by myself.",
            ],
            answer: "I can lift the box by myself.",
        },
        {
            id: 317,
            question:
                "Which of the following words are written alike but pronounced differently?\n a) Raid\n b) Read\n c) Red\n d) Read",
            options: [
                "a and c only",
                "b and d only",
                "a and d only",
                "b and c only",
            ],
            answer: "b and d only",
        },
        {
            id: 318,
            question:
                "Identify the correct sentence:\n a) His shoes are made of canvass.\n b) I am canvassing for my own candidate.",
            options: [
                "Only a is correct",
                "Only b is correct",
                "Both a and b are correct",
                "Both a and b are incorrect",
            ],
            answer: "Only b is correct",
        },
        {
            id: 319,
            question:
                "Which verb will be suitable to fill in the blank? My daughter Madhavi ________ a good memory.",
            options: ["Has been", "Has", "Is", "Will be"],
            answer: "Has",
        },
        {
            id: 320,
            question:
                "Choose the correct alternative from the following to fill in the blank: They agreed that the election ________ be held at an early date.",
            options: ["Should", "Would", "Shall", "Will"],
            answer: "Should",
        },
        {
            id: 321,
            question:
                "Which of the following sentences reflects the polite form of request?",
            options: [
                "I shall be grateful if you allow me to use your bike for five minutes.",
                "You can allow me to use your bike for five minutes.",
                "Would you mind using your bike for five minutes?",
                "Will you allow me to use your bike for five minutes?",
            ],
            answer: "I shall be grateful if you allow me to use your bike for five minutes.",
        },
        {
            id: 322,
            question:
                "You must pay for the mistakes you made in your life. In this sentence, 'must' is:",
            options: [
                "A principal auxiliary",
                "A modal auxiliary",
                "The main verb",
                "None of these",
            ],
            answer: "A modal auxiliary",
        },
        {
            id: 323,
            question:
                "Which of the following sentence(s) is/are incorrect?\n a) I used to lived in Bombay.\n b) My wife is used for getting up early.\n c) We are used to the noise our neighbour makes, though we don't like it.",
            options: ["a only", "b and c only", "a, b and c", "a and b only"],
            answer: "a and b only",
        },
        {
            id: 324,
            question:
                "To follow his advice seemed logical. The subject of the above clause is ________.",
            options: ["Infinitive", "Adjective", "Adverbial", "None of these"],
            answer: "Infinitive",
        },
        {
            id: 325,
            question:
                "Fill in the blanks with the correct word: The bird will ________ in no time.",
            options: ["Sore", "Sure", "Soar", "Suar"],
            answer: "Soar",
        },
        {
            id: 326,
            question:
                "Fill in the blank with the appropriate alternative: Mushtaque got the letter registered after ________ it.",
            options: ["Ceiling", "Sealing", "Seling", "Silling"],
            answer: "Sealing",
        },
        {
            id: 327,
            question:
                "Polygamy is ________ for Hindus in India. Pick out the correct word to complete the sentence meaningfully.",
            options: ["Prescribed", "Proscribed", "Proceeded", "Presided"],
            answer: "Proscribed",
        },
        {
            id: 328,
            question:
                "What does the underlined modal in the sentence below suggest? You <u>can</u> hurt yourself.",
            options: ["Ability", "Probability", "Certainty", "Permission"],
            answer: "Ability",
        },
        {
            id: 329,
            question:
                "Fill in the blank with an acceptable form of the verb given in the options: 350 runs ________ quite a decent score.",
            options: ["Is", "Are", "Are being", "Was become"],
            answer: "Is",
        },
        {
            id: 330,
            question: "Choose the correct verb form of the word: Produce.",
            options: ["Produce", "Product", "Productive", "Productivity"],
            answer: "Produce",
        },
        {
            id: 331,
            question:
                "He <u>is able to</u> swim across the river. Which of the following options can replace the underlined part without changing its meaning in the above sentence?",
            options: ["May", "Can", "Could", "Will"],
            answer: "Can",
        },
        {
            id: 332,
            question:
                "Identify the sentence in which the verb structure is used wrongly:\n a) The rain began yesterday.\n b) I saw him last evening.\n c) I have just finished the letter.\n d) He has been ill since Monday.",
            options: [
                "(a) and (b)",
                "(b) and (c)",
                "(a), (b) and (c)",
                "None of the above",
            ],
            answer: "None of the above",
        },
        {
            id: 333,
            question:
                "Choose the correct modal indicating moral obligation: I ________ help those who need my help.",
            options: ["Will", "Shall", "Can", "Should"],
            answer: "Should",
        },
        {
            id: 334,
            question: "Gerund is ________.",
            options: [
                "Past tense of a verb",
                "Past participle of a verb",
                "'-ing form of a verb",
                "Future tense of a verb",
            ],
            answer: "'-ing form of a verb",
        },
        {
            id: 335,
            question:
                "Which one of the following alternatives is not a 'type of regular verb'?",
            options: ["Look", "Study", "Begin", "Travel"],
            answer: "Begin",
        },
        {
            id: 336,
            question:
                "Choose the right option for filling in the blank: We will not be able to ________ so many people in this place.",
            options: ["Accomoddate", "Accomodate", "Acommodate", "Accommodate"],
            answer: "Accommodate",
        },
        {
            id: 337,
            question:
                "You <u>can</u> get hurt. The underlined modal indicates:",
            options: ["Probability", "Ability", "Permission", "Offer"],
            answer: "Ability",
        },
        {
            id: 338,
            question:
                "Which one of the following two sentences is correct?\n a) Who did this?\n b) He and I are brothers.",
            options: ["Only a", "Only b", "Both", "Neither"],
            answer: "Both",
        },
        {
            id: 339,
            question:
                "Choose the correct alternative to complete the sentence: Moral education ________ have been taught in the Universities long back.",
            options: ["Ought to", "Must", "Should", "Would"],
            answer: "Ought to",
        },
        {
            id: 340,
            question:
                "Identify the incorrect part of the sentence below: He hopes that he hasn't makes a mistake.",
            options: ["Hopes", "Hasn't", "Makes", "That"],
            answer: "Makes",
        },
        {
            id: 341,
            question:
                "He ________ not wear a neck-tie if he doesn’t want to. To indicate absence of compulsion, the blank should best be filled by:",
            options: ["May", "Should", "Dare", "Need"],
            answer: "Need",
        },
        {
            id: 342,
            question:
                "Identify the correct sentences:\n a) Two pounds of coffee cost seven and sixpence.\n b) The furnitures are to be delivered today.\n c) He gave me many good advices.",
            options: [
                "a only",
                "b and c only",
                "a, b and c",
                "None of the above",
            ],
            answer: "a only",
        },
        {
            id: 343,
            question:
                "Choose the modal auxiliary for the underlined words in the following sentence: It <u>was not necessary</u> for me to buy it.",
            options: [
                "I don't need to buy it.",
                "I didn't used to buy it.",
                "I don't used to buy it.",
                "I didn't need to buy it.",
            ],
            answer: "I didn't need to buy it.",
        },
        {
            id: 344,
            question:
                "Identify the underlined word: <u>Hearing</u> the noise, the baby woke up.",
            options: [
                "Sounds",
                "Verbal words",
                "Verb nouns",
                "Verbal adjective",
            ],
            answer: "Verb nouns",
        },
        {
            id: 345,
            question:
                "The ship was wrecked and every man, woman and child ________ drowned. The verb that agrees correctly with the subject in the sentence above is:",
            options: ["Was", "Were", "Had", "Had been"],
            answer: "Was",
        },
        {
            id: 346,
            question:
                "Identify the correct sentence/s:\n a) I could read that book in two hours yesterday.\n b) I was able to read that book in two hours yesterday.",
            options: ["a only", "b only", "Both a and b", "Neither a nor b"],
            answer: "b only",
        },
        {
            id: 347,
            question:
                "Choose the correct sentences:\n a) I shall get on the first bus that comes.\n b) You must show no-one the note which the attendant will give you.\n c) We shall award the prize to the person who gets the highest marks.",
            options: [
                "a and b only",
                "a and c only",
                "b and c only",
                "a, b and c",
            ],
            answer: "a and c only",
        },
        {
            id: 348,
            question:
                "Identify the sentence/s containing a transitive verb:\n a) Many trees fall in the monsoon.\n b) Woodmen fell trees.\n c) Rise early with the lark.",
            options: ["a only", "b only", "a and c only", "a, b and c"],
            answer: "b only",
        },
        {
            id: 349,
            question:
                "Fill in the blanks from the alternatives given below:\n a) Barley, wheat and rice ________ cereals.\n b) Twenty miles ________ not a great distance in these days of rapid travel.",
            options: ["Is, is", "Is, are", "Are, is", "Are, are"],
            answer: "Are, is",
        },
        {
            id: 350,
            question:
                "Identify the correct sentences:\n a) John, write a thousand line poem.\n b) John write a thousand lines poem.\n c) John writes a thousand lines poem.\n d) John doesn't write a thousand lines poem.",
            options: [
                "Only c and d are correct",
                "All a, b, c and d are correct",
                "Only a, c and d are correct",
                "All a, b, c and d are wrong",
            ],
            answer: "Only c and d are correct",
        },
        {
            id: 351,
            question:
                "Choose the incorrect sentences:\n a) Each of the candidates are well qualified.\n b) Neither of those choices were attractive.\n c) My family are punctual and hard-working people.",
            options: [
                "(a) only",
                "(a) and (c) only",
                "(a) and (b) only",
                "(a), (b) and (c)",
            ],
            answer: "(a), (b) and (c)",
        },
        {
            id: 352,
            question:
                "Identify the incorrect sentence/s:\n a) The wages of sin are death.\n b) I have many works to do.\n c) Do not make friends with selfish people.",
            options: ["a and c", "a and b", "b and c", "Only a"],
            answer: "a and b",
        },
        {
            id: 353,
            question:
                "Fill in the blanks:\n a) I'm _______ a film tonight.\n b) I'll be _______ all day on Sunday.\n c) I'm _______ ask him to return my money.",
            options: [
                "Will see, slept, going to",
                "Seeing, slept, going to",
                "Seeing, sleeping, going to",
                "Will see, sleeping, going to",
            ],
            answer: "Seeing, sleeping, going to",
        },
        {
            id: 354,
            question:
                "Identify the correct sentence/s:\n a) The scissors are blunt.\n b) Statistics was always my worst subject.\n c) The economics behind their policies are unreasonable.\n d) The governing party usually do bad in mid-term by-elections.",
            options: [
                "Only (a), (b), (c)",
                "Only (b), (c), (d)",
                "Only (a) and (c)",
                "All the above",
            ],
            answer: "Only (a), (b), (c)",
        },
        {
            id: 355,
            question:
                "The gerund can be used as:\n a) Subject of a sentence\n b) As a complement of a verb\n c) After prepositions.",
            options: [
                "Only a is correct",
                "Only b is correct",
                "Only c is correct",
                "a, b and c are correct",
            ],
            answer: "a, b and c are correct",
        },
        {
            id: 356,
            question: "He struck the table. The underlined verb is ________.",
            options: [
                "Intransitive",
                "Transitive",
                "Prepositional",
                "None of the above",
            ],
            answer: "Transitive",
        },
        {
            id: 357,
            question:
                "Choose the correct sentences:\n a) I am used for getting up early.\n b) Before his marriage, Meeran used to spend a lot of his time in the club.\n c) My wife is used to getting up early.\n d) The Earth’s resources are being used up at an alarming rate.",
            options: [
                "Only a and b",
                "Only b and c",
                "Only a and c",
                "Only b, c and d",
            ],
            answer: "Only b, c and d",
        },
        {
            id: 358,
            question:
                "Which items from the given sentence contain errors? 'Everybody must paid more house rent; the tax on property have gone up.'",
            options: [
                "Everybody, must paid",
                "Must paid, have gone up",
                "More, house rent",
                "Tax on, must paid",
            ],
            answer: "Must paid, have gone up",
        },
        {
            id: 359,
            question:
                "Emma ________ Graham when she was going out with her friend. Choose the correct alternative to complete the sentence.",
            options: ["Meets", "Has met", "Met", "Had met"],
            answer: "Met",
        },
        {
            id: 360,
            question:
                "Write the correct form of verb in the given sentence: 'Each of these rooms ________ good enough for me.'",
            options: ["Are", "Is", "Have", "Were"],
            answer: "Is",
        },
        {
            id: 361,
            question:
                "Identify transitive and intransitive verbs in the given sentences:\n a) The rain revived the wilting shrubs.\n b) The dog chased the man.\n c) The choir sang badly that morning.",
            options: [
                "Intransitive, Intransitive, Transitive",
                "Transitive, Intransitive, Transitive",
                "Intransitive, Transitive, Intransitive",
                "Transitive, Transitive, Intransitive",
            ],
            answer: "Transitive, Transitive, Intransitive",
        },
        {
            id: 362,
            question:
                "Choose the modal auxiliary for the underlined words in the following sentence: It <u>was not necessary</u> for me to buy it.",
            options: [
                "I don’t need to buy it.",
                "I didn’t used to buy it.",
                "I don’t used to buy it.",
                "I didn’t need to buy it.",
            ],
            answer: "I didn’t need to buy it.",
        },
        {
            id: 363,
            question:
                "Identify the correct sentence:\n a) The basket of apples and pears are hanging from a hook.\n b) This must be one of the best plays that have staged at Stratford this season.\n c) The success of the new branch is one of the recent developments that justify our faith in the company.",
            options: ["a and c only", "b and c only", "c only", "a, b and c"],
            answer: "c only",
        },
        {
            id: 364,
            question:
                "The underlined words in the sentences below are:\n a) Not all women are good at <u>cooking</u>.\n b) <u>Blaming</u> others for our own mistakes is a bad habit.\n c) We can't help <u>laughing</u> when the jester is at his best.\n d) <u>Stopping</u> by woods on a darkened evening is dangerous.",
            options: ["Adverbs", "Present participles", "Gerunds", "Subjects"],
            answer: "Gerunds",
        },
        {
            id: 365,
            question:
                "Select the correct meaning of the underlined modal verb in the following sentence: 'I am tired, now you <u>can</u> drive the car.'",
            options: ["Possibility", "Ability", "Permission", "Obligation"],
            answer: "Ability",
        },
        {
            id: 366,
            question:
                "'Do' is a lexical verb and as ________ has the full range of forms, including the present participle 'doing' and the past participle 'done'.",
            options: ["Pro-verb", "Main-verb", "Gerund", "Modal"],
            answer: "Main-verb",
        },
        {
            id: 367,
            question:
                "'I can hear him singing a song.' Identify the word 'singing.' Say whether it is:",
            options: [
                "Gerund",
                "Adverb",
                "Present Participle",
                "Participial Adjective",
            ],
            answer: "Present Participle",
        },
        {
            id: 368,
            question:
                "Fill in the blank with the appropriate verb: 'Neither of the four teachers ________ willing to teach Physics.'",
            options: ["Are", "Were", "Had", "Is"],
            answer: "Is",
        },
        {
            id: 369,
            question:
                "What will be the past participle of 'Shrink'? Choose correctly.",
            options: ["Shrunk", "Skunk", "Shrank", "Shrng"],
            answer: "Shrunk",
        },
        {
            id: 370,
            question:
                "The committee ________ considered your request. The verb which agrees with the subject 'The committee' in notional concord is:",
            options: ["Are", "Is", "Has", "Have"],
            answer: "Has",
        },
        {
            id: 371,
            question:
                "To die is better than to surrender. Which one of the following sentences substitutes a gerund for infinitive in the sentence above?",
            options: [
                "Dying is better than to surrender.",
                "To die is better than surrendering.",
                "Dying is better than surrendering.",
                "Dying and surrendering are better.",
            ],
            answer: "Dying is better than surrendering.",
        },
        {
            id: 372,
            question:
                "Identify the function of the modal auxiliary 'could' in the given sentence: 'One could walk miles in the jungle without seeing even a wild rabbit.'",
            options: [
                "Express ability in the past",
                "Express permission",
                "Express possibility",
                "Express obligation",
            ],
            answer: "Express possibility",
        },
        {
            id: 373,
            question:
                "We eat that we may live. The subjunctive mood in the sentence above expresses ________.",
            options: [
                "A desire",
                "A purpose",
                "A doubtful condition",
                "A wish",
            ],
            answer: "A purpose",
        },
        {
            id: 374,
            question:
                "Choose the correct sentence/s:\n a) You mustn’t driving fast.\n b) You needn’t drive fast.\n c) Don’t you have to go to the office at nine every day?",
            options: [
                "(a) and (b) only",
                "(b) only",
                "(b) and (c) only",
                "(a), (b) and (c)",
            ],
            answer: "(b) and (c) only",
        },
        {
            id: 375,
            question:
                "Identify the grammatically correct sentences:\n a) You are prohibited from smoking here.\n b) Neither pride nor prejudice affects him.\n c) The committee is divided in their opinions.",
            options: [
                "Only (a) and (b)",
                "Only (b)",
                "Only (b) and (c)",
                "Only (a) and (c)",
            ],
            answer: "Only (a) and (b)",
        },
        {
            id: 376,
            question:
                "Choose the most appropriate option from the following to complete the sentence: 'She ________ between cheerfulness and deep despair.'",
            options: ["Alternates", "Alternately", "Alters", "Alternatively"],
            answer: "Alternates",
        },
        {
            id: 377,
            question:
                "Choose the correct alternative to fill in the blank: Although people buy most of their groceries once a month they usually visit the market ________ to pick up an item or two.",
            options: ["Frequently", "Reluctantly", "Grudgingly", "Seldom"],
            answer: "Frequently",
        },
        {
            id: 378,
            question:
                "Fill in the blank with the appropriate adverb: He did not recognise her ________ she said they had met before.",
            options: ["Despite", "Although", "Unless", "However"],
            answer: "Although",
        },
        {
            id: 379,
            question:
                "Mark the sentence in which the word ‘still’ is used as an adverb.",
            options: [
                "With his name the mothers <u>still</u> their babies.",
                "<u>Still</u> waters run deep.",
                "Her sobs could be heard in the <u>still</u> of night.",
                "He is <u>still</u> in business.",
            ],
            answer: "He is <u>still</u> in business.",
        },
        {
            id: 380,
            question:
                "Choose the correct adverb to fill in the blank: ________ he is down with flu, he can’t go to office.",
            options: ["Since", "When", "But", "So"],
            answer: "Since",
        },
        {
            id: 381,
            question:
                "Complete the sentence by providing the correct adverbial particle from the following: The factory was shut ________ during the installation of new machinery.",
            options: ["Away", "Down", "Out", "Off"],
            answer: "Down",
        },
        {
            id: 382,
            question: "Choose the correct sentence:",
            options: [
                "She is too pretty.",
                "She is very pretty.",
                "She is too much pretty.",
                "She is much pretty.",
            ],
            answer: "She is very pretty.",
        },
        {
            id: 383,
            question:
                "Complete the sentence with the correct alternative: She is ________ well today.",
            options: ["No", "Not", "None", "Nought"],
            answer: "Not",
        },
        {
            id: 384,
            question:
                "Point out the sentence in which the word ‘why’ is used as a relative adverb.",
            options: [
                "Why did you do it?",
                "I know the reason why he did it.",
                "Why, it is surely Sujata!",
                "This is not the time to go into the why and the wherefore of it.",
            ],
            answer: "I know the reason why he did it.",
        },
        {
            id: 385,
            question:
                "Fill in the blank with the appropriate expression from the following: It is time ________",
            options: [
                "When you went.",
                "Where you went.",
                "Which you went.",
                "That you went.",
            ],
            answer: "That you went.",
        },
        {
            id: 386,
            question: "Which is the right place for the word ‘even’?",
            options: [
                "They even may decide to come by car.",
                "They may even decide to come by car.",
                "They may decide to come by even car.",
                "They may decide to even come by car.",
            ],
            answer: "They may even decide to come by car.",
        },
        {
            id: 387,
            question:
                "Choose the correct phrase to complete the sentence: Unless you work ________ you will fail.",
            options: ["Hard", "Hardly", "Hard and fast", "Hardly and fastly"],
            answer: "Hard",
        },
        {
            id: 388,
            question:
                "Fill in the blank in the sentence so as to complete it meaningfully: I am feeling ________ better today.",
            options: ["Fairly", "Too", "Very", "Rather"],
            answer: "Rather",
        },
        {
            id: 389,
            question: "Adverb form for 'beauty' is ________.",
            options: ["Beautify", "Beautician", "Beautiful", "Beautifully"],
            answer: "Beautifully",
        },
        {
            id: 390,
            question:
                "Identify the sentence in which the word ‘milk’ is used as an adverb:",
            options: [
                "Milk is good for health.",
                "I gave the baby a milk chocolate.",
                "He wore a milk white turban.",
                "(c) only",
            ],
            answer: "He wore a milk white turban.",
        },
        {
            id: 391,
            question: "Old habits die ________.",
            options: ["Hardly", "Herd", "Heard", "Hard"],
            answer: "Hard",
        },
        {
            id: 392,
            question: "Coffee is ________ hot to drink.",
            options: ["Too", "So", "Very", "More"],
            answer: "Too",
        },
        {
            id: 393,
            question:
                "The ship sank ________ the water was deepest. Choose the correct word for the blank place.",
            options: ["When", "Where", "Which", "Why"],
            answer: "Where",
        },
        {
            id: 394,
            question: "I don't know ________ she was crying.",
            options: ["Where", "Why", "Which", "How"],
            answer: "Why",
        },
        {
            id: 395,
            question: "Choose adverb of time from the following.",
            options: ["Tomorrow", "There", "Because", "Too"],
            answer: "Tomorrow",
        },
        {
            id: 396,
            question: "Choose adverb of manner from the following.",
            options: ["Immediately", "Yesterday", "Where", "Why"],
            answer: "Immediately",
        },
        {
            id: 397,
            question: "We followed them ________ they went.",
            options: ["Where", "Why", "When", "How"],
            answer: "Where",
        },
        {
            id: 398,
            question: "She is my mother, ________ I respect her.",
            options: ["Because", "Since", "So", "Now"],
            answer: "Because",
        },
        {
            id: 399,
            question: "I respect her ________ she is my mother.",
            options: ["Because", "Since", "When", "So"],
            answer: "Because",
        },
        {
            id: 400,
            question:
                "Choose the sentence in which Interrogative Adverb of time is used.",
            options: [
                "When did he go to America?",
                "Why is she?",
                "How are you?",
                "Where are you?",
            ],
            answer: "When did he go to America?",
        },
        {
            id: 401,
            question:
                "Choose the sentence in which Interrogative Adverb of place is used.",
            options: [
                "Where is the boot?",
                "When does the bus go?",
                "How is she?",
                "What is this?",
            ],
            answer: "Where is the boot?",
        },
        {
            id: 402,
            question: "Choose the sentence of Relative Adverb.",
            options: [
                "Who are you?",
                "How many children do you have?",
                "I shall start painting when you give the paper.",
                "What type of man is he?",
            ],
            answer: "I shall start painting when you give the paper.",
        },
        {
            id: 403,
            question:
                "________ he is poor, he is honest. Choose the correct Adverb for the blank place.",
            options: ["Because", "Since", "Although", "That"],
            answer: "Although",
        },
        {
            id: 404,
            question: "Point out the incorrect adverb.",
            options: ["Speedily", "Slowly", "Fastly", "Gradually"],
            answer: "Fastly",
        },
        {
            id: 405,
            question: "Which one of the following words is not an adverb?",
            options: ["Frequently", "Always", "Happy", "Fast"],
            answer: "Happy",
        },
        {
            id: 406,
            question:
                "Fill in the gap with a suitable option: He has looked ________, but he cannot find his spectacles.",
            options: ["Everything", "Everywhere", "Something", "Somewhere"],
            answer: "Everywhere",
        },
        {
            id: 407,
            question:
                "Which one of the following is a grammatically correct sentence?",
            options: [
                "He seldom or never refuses requests.",
                "He seldom or ever refuses a request.",
                "He seldom or often refuses requests.",
                "He seldom or refuses to request.",
            ],
            answer: "He seldom or never refuses requests.",
        },
        {
            id: 408,
            question:
                "Fill in the blank with correct option: I have not travelled by plane ________.",
            options: ["Yet", "Till now", "As of now", "None of these"],
            answer: "Yet",
        },
        {
            id: 409,
            question:
                "Which one of the following is a grammatically correct sentence?",
            options: [
                "He was kind enough to grant my request.",
                "He was enough kind to grant my request.",
                "He was kind enough for granting my request.",
                "He was kindly enough to grant my request.",
            ],
            answer: "He was kind enough to grant my request.",
        },
        {
            id: 410,
            question:
                "Mark the sentence in which the word 'after' is used as an adverb.",
            options: [
                "He takes after his father.",
                "After ages shall sing his glory.",
                "We went away after they had left.",
                "They arrived soon after.",
            ],
            answer: "They arrived soon after.",
        },
        {
            id: 411,
            question:
                "The best sources of electricity, ________, include water, wind and solar power.",
            options: ["But", "However", "Yet", "Though"],
            answer: "However",
        },
        {
            id: 412,
            question:
                "Choose the correct alternative to fill in the blank: I am ________ pleased to see you.",
            options: ["Too", "Very", "Much", "To"],
            answer: "Very",
        },
        {
            id: 413,
            question:
                "Choose the correct alternative to complete the following sentence: When 'beautiful' is suffixed with -ly, ________.",
            options: [
                "It converts noun into adjective.",
                "It converts adjective into adverb.",
                "It converts adverb into adjective.",
                "It maintains the original word class.",
            ],
            answer: "It converts adjective into adverb.",
        },
        {
            id: 414,
            question:
                "Provide correct adverb for the blank: The minister spoke ________ about the problems that the State faced.",
            options: ["Fairly", "Hardly", "Frankly", "Superbly"],
            answer: "Frankly",
        },
        {
            id: 415,
            question:
                "Choose the correct sentence/s:\n a) He has made quite a fortune.\n b) You gave me quite a shock.\n c) He often comes to school late.",
            options: ["a only", "a and b", "b and c", "c only"],
            answer: "a and b",
        },
        {
            id: 416,
            question:
                "This journal is published <u>weekly</u>. Identify the part of speech underlined.",
            options: ["Noun", "Adjective", "Adverb", "Verb"],
            answer: "Adverb",
        },
        {
            id: 417,
            question:
                "Fill in the blanks with the correct word pair from the ones given below: He was walking ________ while the others were quite ________.",
            options: [
                "Fastly and slowly",
                "Fast and slow",
                "Fastly and slow",
                "Fast and slowly",
            ],
            answer: "Fast and slowly",
        },
        {
            id: 418,
            question:
                "He was ________ dressed for the party. Choose the right antonym of the word ‘immaculately’ for filling the blank.",
            options: [
                "Imperfectly",
                "Incompletely",
                "Irresponsibly",
                "Moderately",
            ],
            answer: "Imperfectly",
        },
        {
            id: 419,
            question:
                "Identify the parts of speech of the underlined word:\n a) He is a <u>fast</u> talker.\n b) I was observing a <u>fast</u>.\n c) Muslims <u>fast</u> during the Ramadhan.\n d) She drove <u>fast</u>.",
            options: [
                "Adjective, Adverb, Noun, Verb",
                "Adjective, Noun, Verb, Adverb",
                "Adverb, Verb, Noun, Adjective",
                "Adjective, Noun, Adverb, Verb",
            ],
            answer: "Adjective, Noun, Verb, Adverb",
        },
        {
            id: 420,
            question:
                "Choose the correct sentences:\n a) He was so changed in appearance that I hardly know him.\n b) This typewriter is as good as new; it has hard been used.\n c) Every morning this week she has arrived late.",
            options: [
                "Only a and b",
                "Only b and c",
                "Only a and c",
                "a, b and c",
            ],
            answer: "a, b and c",
        },
        {
            id: 421,
            question:
                "Choose the sentence/s containing correct ‘adverb/s.\n a) Balraj’s mother serves always an excellent dinner.\n b) Do you go often fishing?\n c) He is grumbling always about his ill-luck.\n d) I seldom eat more than this at lunch.",
            options: [
                "Only a and d",
                "Only d",
                "Only a, b and c",
                "Only a, c and d",
            ],
            answer: "Only d",
        },
        {
            id: 422,
            question:
                "Choose the correct sentence: We did not hardly have time to eat.",
            options: [
                "We did not eat.",
                "We didn't have time.",
                "We hardly had time to eat.",
                "Hardly we did not eat on time.",
            ],
            answer: "We hardly had time to eat.",
        },
        {
            id: 423,
            question:
                "Choose the correct alternative to fill in the blanks in the following sentences:\n a) The lecture was ________ boring.\n b) It is ________ a pity to cut down those trees.",
            options: [
                "Fairly, Rather",
                "Rather, Fairly",
                "Rather, Rather",
                "Fairly, Fairly",
            ],
            answer: "Rather, Fairly",
        },
        {
            id: 424,
            question:
                "Fill in the blanks:\n a) In a few States ________ Kerala, there are more women than men.\n b) I like classical music ________ film songs.",
            options: [
                "Dislike, Of",
                "As well as, Like",
                "Unlike, From",
                "Like, As well as",
            ],
            answer: "Unlike, From",
        },
        {
            id: 425,
            question:
                "Identify the correct sentence from the following sentences:\n a) Is there enough cake for everyone?\n b) I have enough had of your excuses.\n c) I don’t think he is really experienced enough for this sort of job.\n d) I hope my instructions are clear enough.",
            options: ["(a), (b)", "(b), (c)", "(a), (c), (d)", "(a), (b), (d)"],
            answer: "(a), (c), (d)",
        },
        {
            id: 426,
            question:
                "Select the correct cohesive devices for the following sentences:\n ________, people fear the outbreak of the nuclear war. Over the continuing pollution of the environment. ________, they are concerned.",
            options: [
                "Firstly, Secondly",
                "To begin with, Secondly",
                "Firstly, Besides",
                "Both (1) and (2)",
            ],
            answer: "To begin with, Secondly",
        },
        {
            id: 427,
            question:
                "She sings good. Identify the correct sentence/s:\n a) She sings good.\n b) She sings well.\n c) I did it anyhow.",
            options: ["Only (a)", "Only (b)", "Only (c)", "Only (b) and (c)"],
            answer: "Only (b)",
        },
        {
            id: 428,
            question:
                "Which of the following is the correct example of pre-modifying degree of adverb?",
            options: [
                "How thirsty are they?",
                "The gossip is totally false.",
                "This is my very best book.",
                "They have nearly finished their lunch.",
            ],
            answer: "The gossip is totally false.",
        },
        {
            id: 429,
            question:
                "Identify the incorrect sentence:\n a) Almost each visitor stopped and stared.\n b) I go to the dentist every six months.\n c) The entire building has recently been renovated.",
            options: ["Only a", "Only b", "Only c", "None of these"],
            answer: "Only a",
        },
        {
            id: 430,
            question:
                "An adverb qualifies:\n a) A verb\n b) Another adverb\n c) An adjective\n d) Pronoun",
            options: [
                "a is incorrect",
                "d is incorrect",
                "b and c are incorrect",
                "a and c are incorrect",
            ],
            answer: "d is incorrect",
        },
        {
            id: 431,
            question:
                "Choose the correct sentence/s:\n a) Scarcely anyone turned up, did they?\n b) Scarcely no one turned up.",
            options: [
                "Only a is correct",
                "Only b is correct",
                "Both a and b are correct",
                "Both a and b are incorrect",
            ],
            answer: "Only a is correct",
        },
        {
            id: 432,
            question:
                "Identify the incorrect adverb/s:\n a) Fastly\n b) Contemptuously\n c) Slowly\n d) Academically\n e) Seemly",
            options: ["b and a", "a and e", "c and d", "a and d"],
            answer: "a and e",
        },
        {
            id: 433,
            question:
                "Identify the parts of speech for the underlined adverbs:\n a) All the freedom-fighters were <u>badly</u> treated by the British Government.\n b) We <u>blindly</u> neglect the passing of time in our life.\n c) Madhu <u>often</u> wakes up early in the morning.\n d) Virat plays <u>extremely</u> well.",
            options: ["Pronouns", "Adjectives", "Adverbs", "Verbs"],
            answer: "Adverbs",
        },
        {
            id: 434,
            question:
                "Choose the correct sentences regarding the use of adverbs:\n a) She dropped here the bag.\n b) He plays very well tennis.\n c) Did you see my bag anywhere?\n d) Rarely go to movies.",
            options: [
                "Only a and d",
                "Only c and d",
                "Only b and c",
                "Only a, b and c",
            ],
            answer: "Only c and d",
        },
        {
            id: 435,
            question:
                "Identify the kind of adverb used in the sentence: 'He writes quite beautifully.'",
            options: [
                "Adverb of place",
                "Adverb of manner",
                "Adverb of degree",
                "Adverb of time",
            ],
            answer: "Adverb of manner",
        },
        {
            id: 436,
            question:
                "Fill in the blanks in the sentence: Are ________ roses in the garden?",
            options: ["There, Much", "Those, Much", "There, Any", "This, Any"],
            answer: "There, Any",
        },

        {
            id: 437,
            question: "He lived _______ Dadar _______ Mumbai.",
            options: ["In, In", "At, At", "In, At", "At, In"],
            answer: "In, At",
        },
        {
            id: 438,
            question: "Don't hanker _______ money.",
            options: ["For", "After", "To", "Towards"],
            answer: "After",
        },
        {
            id: 439,
            question: "In spite _______ his illness, he attended that meeting.",
            options: ["Of", "To", "At", "Not necessary"],
            answer: "Of",
        },
        {
            id: 440,
            question: "She is proud _______ her beauty.",
            options: ["For", "To", "Of", "Above"],
            answer: "Of",
        },
        {
            id: 441,
            question: "He is writing _______ a pencil.",
            options: ["With", "By", "From", "In"],
            answer: "With",
        },
        {
            id: 442,
            question: "She wrote the article _______ a pen.",
            options: ["By", "From", "To", "With"],
            answer: "With",
        },
        {
            id: 443,
            question: "Sit _______ your place.",
            options: ["On", "Upon", "In", "At"],
            answer: "At",
        },
        {
            id: 444,
            question: "My mother has fondness _______ children.",
            options: ["For", "Of", "Off", "To"],
            answer: "For",
        },
        {
            id: 445,
            question: "He is qualified _______ that post.",
            options: ["For", "To", "Of", "Off"],
            answer: "For",
        },
        {
            id: 446,
            question: "My friend was addicted _______ drinking.",
            options: ["For", "To", "With", "At"],
            answer: "To",
        },
        {
            id: 447,
            question: "My brother resembles _______ me.",
            options: ["As", "Like", "Of", "Not necessary"],
            answer: "Not necessary",
        },
        {
            id: 448,
            question: "I always emphasize _______ grammar.",
            options: ["On", "In", "At", "Not necessary"],
            answer: "On",
        },
        {
            id: 449,
            question: "The bridge was _______ the river.",
            options: ["On", "Upon", "Over", "At"],
            answer: "Over",
        },
        {
            id: 450,
            question: "She is expert _______ painting.",
            options: ["At", "In", "Into", "Of"],
            answer: "At",
        },
        {
            id: 451,
            question: "He is good _______ English.",
            options: ["In", "Into", "At", "To"],
            answer: "At",
        },
        {
            id: 452,
            question: "She is accurate _______ typing.",
            options: ["At", "Into", "In", "For"],
            answer: "At",
        },
        {
            id: 453,
            question: "I am fine. Don't worry _______ me.",
            options: ["On", "Above", "For", "About"],
            answer: "About",
        },
        {
            id: 454,
            question: "He was the only witness _______ the accident.",
            options: ["To", "For", "Of", "Off"],
            answer: "To",
        },
        {
            id: 455,
            question: "My father was angry _______ me.",
            options: ["To", "For", "With", "About"],
            answer: "With",
        },
        {
            id: 456,
            question: "He is popular _______ his friends.",
            options: ["Among", "Between", "With", "For"],
            answer: "Among",
        },
        {
            id: 457,
            question: "Many poor people live _______ daily wages.",
            options: ["On", "In", "At", "By"],
            answer: "On",
        },
        {
            id: 458,
            question: "Soon father’s anger melted _______ love.",
            options: ["In", "Into", "With", "By"],
            answer: "Into",
        },
        {
            id: 459,
            question: "There is an understanding _______ the two parties.",
            options: ["In", "Among", "Between", "Across"],
            answer: "Between",
        },
        {
            id: 460,
            question: "My home is _______ the river.",
            options: ["In", "Below", "Between", "Across"],
            answer: "Across",
        },
        {
            id: 461,
            question: "The Mahalaxmi express leaves _______ 12.30.",
            options: ["In", "On", "At", "For"],
            answer: "At",
        },
        {
            id: 462,
            question: "The boy was admitted _______ the school.",
            options: ["In", "To", "From", "Between"],
            answer: "To",
        },
        {
            id: 463,
            question: "Shivaji’s life was full _______ adventures.",
            options: ["At", "In", "Of", "By"],
            answer: "Of",
        },
        {
            id: 464,
            question: "We should be faithful _______ our friends.",
            options: ["Into", "Upon", "To", "For"],
            answer: "To",
        },
        {
            id: 465,
            question: "One must pray _______ God.",
            options: ["In", "To", "From", "Between"],
            answer: "To",
        },
        {
            id: 466,
            question: "I don’t believe _______ such things.",
            options: ["To", "In", "Into", "From"],
            answer: "In",
        },
        {
            id: 467,
            question: "The monkeys disappeared _______ the window.",
            options: ["In", "Over", "Out", "Through"],
            answer: "Through",
        },
        {
            id: 468,
            question: "Choose the correct sentence:",
            options: [
                "You should prefer poverty than dishonesty.",
                "You should prefer poverty to dishonesty.",
                "You should prefer poverty on dishonesty.",
                "You should prefer poverty upon dishonesty.",
            ],
            answer: "You should prefer poverty to dishonesty.",
        },
        {
            id: 469,
            question: "My friend wrote my name _______ ink.",
            options: ["With", "By", "In", "Upon"],
            answer: "In",
        },
        {
            id: 470,
            question: "Judging _______ anyone early is a dangerous one.",
            options: ["Of", "Off", "By", "From"],
            answer: "By",
        },
        {
            id: 471,
            question:
                "I was moved _______ pity to see the child crying with pain.",
            options: ["From", "By", "With", "For"],
            answer: "By",
        },
        {
            id: 472,
            question:
                "The government of Maharashtra has agreed to give compensation _______ the loss caused to the farmers due to hail storm.",
            options: ["To", "Through", "At", "For"],
            answer: "For",
        },
        {
            id: 473,
            question: "Which hand do you write _______?",
            options: ["With", "By", "From", "To"],
            answer: "With",
        },
        {
            id: 474,
            question:
                "He has done practically nothing <u>from</u> yesterday. Which of the following will best replace the underlined element?",
            options: ["Through", "For", "Since", "By"],
            answer: "Since",
        },
        {
            id: 475,
            question: "The cat sprang _______ the table.",
            options: ["Upon", "On", "Over", "Across"],
            answer: "Upon",
        },
        {
            id: 476,
            question:
                "Tagore’s 'Geetanjali’ was translated _______ many languages.",
            options: ["Into", "In", "From", "To"],
            answer: "Into",
        },
        {
            id: 477,
            question: "You shall refrain _______ telling lies.",
            options: ["For", "From", "With", "To"],
            answer: "From",
        },
        {
            id: 478,
            question: "I have been living here _______ 1972.",
            options: ["From", "Since", "For", "During"],
            answer: "Since",
        },
        {
            id: 479,
            question: "Choose the correct sentence:",
            options: [
                "I am ready to tell the truth on her face.",
                "I am ready to tell the truth before her face.",
                "I am ready to tell the truth to her face.",
                "I am ready to tell the truth in her face.",
            ],
            answer: "I am ready to tell the truth to her face.",
        },
        {
            id: 480,
            question: "Reading is easier _______ speaking.",
            options: ["To", "Be", "Than", "For"],
            answer: "Than",
        },
        {
            id: 481,
            question: "I am very interested _______ community work.",
            options: ["In", "On", "Into", "For"],
            answer: "In",
        },
        {
            id: 482,
            question: "He is to be blamed equally _______ his brother.",
            options: ["To", "On", "With", "Of"],
            answer: "With",
        },
        {
            id: 483,
            question: "The robbers broke _______ his shop and looted it.",
            options: ["In", "Into", "Open", "No preposition is necessary"],
            answer: "Into",
        },
        {
            id: 484,
            question: "Students should be aware _______ bad habits.",
            options: ["Of", "Off", "By", "From"],
            answer: "Of",
        },
        {
            id: 485,
            question:
                "The Government has set up a court _______ enquiry to ascertain the facts.",
            options: ["In", "For", "Of", "About"],
            answer: "Of",
        },
        {
            id: 486,
            question: "I have been ill _______ last month.",
            options: ["For", "Form", "Since", "During"],
            answer: "Since",
        },
        {
            id: 487,
            question: "I am very keen _______ seeing the movie.",
            options: ["On", "For", "In", "Of"],
            answer: "On",
        },
        {
            id: 488,
            question: "The sun shines _______ the earth.",
            options: ["Over", "Above", "On", "Upon"],
            answer: "Upon",
        },
        {
            id: 489,
            question:
                "Which part of speech the word ‘above’ belongs to in the given sentence? The moral law is above the civil.",
            options: ["Noun", "Adjective", "Preposition", "Adverb"],
            answer: "Preposition",
        },
        {
            id: 490,
            question: "Never connive _______ your children’s shortcomings.",
            options: ["Of", "About", "On", "For"],
            answer: "At",
        },
        {
            id: 491,
            question: "I study at home everyday _______ going to school.",
            options: ["Before", "After", "Just", "For"],
            answer: "Before",
        },
        {
            id: 492,
            question:
                "We reason _______ a person _______ a subject for or against an opinion.",
            options: ["Of, For", "To, About", "For, To", "With, About"],
            answer: "With, About",
        },
        {
            id: 493,
            question:
                "I felt great pity _______ her when she told me of heart trouble.",
            options: ["For", "To", "Of", "By"],
            answer: "For",
        },
        {
            id: 494,
            question: "I shall take revenge _______ you.",
            options: ["From", "With", "On", "At"],
            answer: "On",
        },
        {
            id: 495,
            question:
                "In accordance _______ your instruction, we have remitted the amount to your blankets.",
            options: ["To", "With", "Of", "By"],
            answer: "With",
        },
        {
            id: 496,
            question: "This is a custom which exists _______ the tribes.",
            options: ["Between", "In", "To", "Among"],
            answer: "Among",
        },
        {
            id: 497,
            question: "The professor complimented him _______ his success.",
            options: ["For", "To", "Be", "On"],
            answer: "On",
        },
        {
            id: 498,
            question: "Quinine should be used as a remedy _______ malaria.",
            options: ["Against", "For", "Of", "To"],
            answer: "For",
        },
        {
            id: 499,
            question:
                "The librarian will be _______ leave _______ two weeks _______ the 22nd of this month.",
            options: [
                "On, Since, For",
                "Since, From",
                "On, For, From",
                "At, Since, For",
            ],
            answer: "On, For, From",
        },
        {
            id: 500,
            question: "He sent Rohit away _______ gifts.",
            options: ["From", "To", "By", "With"],
            answer: "With",
        },
        {
            id: 501,
            question: "We were held _______ by the traffic.",
            options: ["Off", "On", "Up", "Out"],
            answer: "Up",
        },
        {
            id: 502,
            question: "Here is the book that you had asked _______",
            options: ["About", "To", "For", "Of"],
            answer: "For",
        },
        {
            id: 503,
            question:
                "He died _______ an accident in 1995, while he was travelling to Mumbai.",
            options: ["With", "In", "Of", "By"],
            answer: "In",
        },
        {
            id: 504,
            question:
                "There is a correct use of a preposition in one of the following sentences which one is correct?",
            options: [
                "I spoke to her in the telephone.",
                "I spoke to her on the telephone.",
                "I spoke to her by the telephone.",
                "I spoke to her from the telephone.",
            ],
            answer: "I spoke to her on the telephone.",
        },
        {
            id: 505,
            question: "Cut this apple _______ four pieces.",
            options: ["In", "With", "For", "Into"],
            answer: "Into",
        },
        {
            id: 506,
            question: "Translate this passage from English _______ Hindi.",
            options: ["In", "To", "Into", "For"],
            answer: "Into",
        },
        {
            id: 507,
            question: "He began to teach _______ 1990.",
            options: ["Of", "From", "Since", "In"],
            answer: "In",
        },
        {
            id: 508,
            question:
                "Which of the following verb phrases is correct with reference to preposition?",
            options: [
                "We look at Gandhiji as the father of the nation.",
                "We look upon Gandhiji as the father of the nation.",
                "We look to Gandhiji as the father of the nation.",
                "We look for Gandhiji as the father of the nation.",
            ],
            answer: "We look upon Gandhiji as the father of the nation.",
        },
        {
            id: 510,
            question: "I can dare say that she resembles _______ her mother.",
            options: ["with", "to", "after", "no preposition is needed"],
            answer: "no preposition is needed",
        },
        {
            id: 511,
            question:
                "One has to pull _______ a great deal of injustice in this world.",
            options: ["on", "with", "into", "down"],
            answer: "with",
        },
        {
            id: 512,
            question:
                "I left my friend leaning against the lamp post with a cigarette _______ his lips.",
            options: ["in", "into", "between", "to"],
            answer: "between",
        },
        {
            id: 513,
            question: "He is suffering _______ malaria.",
            options: ["at", "with", "from", "for"],
            answer: "from",
        },
        {
            id: 514,
            question: "He is being accused _______ that.",
            options: ["of", "at", "with", "off"],
            answer: "of",
        },
        {
            id: 515,
            question: "Unfortunately he is blind _______ his own shortcoming.",
            options: ["of", "to", "from", "with"],
            answer: "to",
        },
        {
            id: 516,
            question: "I am not afraid _______ you.",
            options: ["with", "from", "for", "of"],
            answer: "of",
        },
        {
            id: 517,
            question: "He died _______ cholera.",
            options: ["of", "from", "by", "after"],
            answer: "of",
        },
        {
            id: 518,
            question: "He has no affection _______ you.",
            options: ["with", "for", "about", "towards"],
            answer: "for",
        },
        {
            id: 519,
            question: "The main streets were jammed _______ traffic.",
            options: ["with", "in", "of", "from"],
            answer: "with",
        },
        {
            id: 520,
            question: "I am _______ your disposal.",
            options: ["for", "on", "an", "at"],
            answer: "at",
        },
        {
            id: 521,
            question: "The union leader requested to call _______ strike.",
            options: ["of", "off", "upon", "on"],
            answer: "off",
        },
        {
            id: 522,
            question: "He always seeks _______ wealth.",
            options: ["by", "for", "in", "no preposition needed"],
            answer: "no preposition is needed",
        },
        {
            id: 523,
            question: "He sent a letter _______ my address.",
            options: ["to", "by", "on", "upon"],
            answer: "to",
        },
        {
            id: 524,
            question: "The lion sprang _______ the cow.",
            options: ["on", "upon", "off", "about"],
            answer: "upon",
        },
        {
            id: 525,
            question:
                "Did you put these packages in the drawer _______ the shelf?",
            options: ["beside", "besides", "over", "on"],
            answer: "beside",
        },
        {
            id: 526,
            question:
                "He gave us a general description of the plan, ‘but did not enter _______ details.",
            options: ["into", "in", "for", "of"],
            answer: "into",
        },
        {
            id: 527,
            question:
                "The function will take place _______ 8.00 a.m. _______ 10 a.m. Choose the most appropriate pair of prepositions.",
            options: ["from, and", "since, to", "till, and", "between, and"],
            answer: "between, and",
        },
        {
            id: 528,
            question: "Ravina is good _______ Maths but weak _______ English.",
            options: ["in, in", "into, in", "at, in", "in, at"],
            answer: "at, in",
        },
        {
            id: 529,
            question:
                "Finding myself short _______ money, I wrote _______ my uncle _______ help.",
            options: [
                "with; to; for",
                "of; to; about",
                "in; to; to",
                "of; to; for",
            ],
            answer: "of; to; for",
        },
        {
            id: 530,
            question: "Which one of the following is not a ‘preposition’?",
            options: ["through", "into", "but", "between"],
            answer: "but",
        },
        {
            id: 531,
            question: "Why don’t you go _______ your friend?",
            options: ["with", "by", "along with", "away"],
            answer: "with",
        },
        {
            id: 532,
            question:
                "_______ way of introduction he made some patient remarks.",
            options: ["of", "by", "with", "for"],
            answer: "by",
        },
        {
            id: 533,
            question: "She broke the glass _______ a hundred pieces.",
            options: ["into", "of", "for", "with"],
            answer: "into",
        },
        {
            id: 534,
            question:
                "The children ran _______ the road. Mother ran after him. Choose the correct alternative.",
            options: ["in", "on", "across", "by"],
            answer: "across",
        },
        {
            id: 535,
            question: "There should not be a prejudice _______ any community.",
            options: ["with", "for", "of", "against"],
            answer: "against",
        },
        {
            id: 536,
            question: "They shall finish the construction _______ a week.",
            options: ["on", "from", "in", "upon"],
            answer: "in",
        },
        {
            id: 537,
            question: "‘We rise _______ the Sun on every Sunday.",
            options: ["beside", "up", "over", "with"],
            answer: "with",
        },
        {
            id: 538,
            question: "The Prime Minister lives in 10 Downing Street.",
            options: ["True", "False"],
            answer: "True",
        },
        {
            id: 539,
            question: "I can dare say that she resembles _______ her mother.",
            options: ["with", "to", "after", "no preposition is needed"],
            answer: "no preposition is needed",
        },
        {
            id: 540,
            question:
                "One has to pull _______ a great deal of injustice in this world.",
            options: ["on", "with", "into", "down"],
            answer: "with",
        },
        {
            id: 541,
            question:
                "I left my friend leaning against the lamp post with a cigarette _______ his lips.",
            options: ["in", "into", "between", "to"],
            answer: "between",
        },
        {
            id: 542,
            question: "He is suffering _______ malaria.",
            options: ["at", "with", "from", "for"],
            answer: "from",
        },
        {
            id: 543,
            question: "He is being accused _______ that.",
            options: ["of", "at", "with", "off"],
            answer: "of",
        },
        {
            id: 544,
            question: "Unfortunately he is blind _______ his own shortcoming.",
            options: ["of", "to", "from", "with"],
            answer: "to",
        },
        {
            id: 545,
            question: "I am not afraid _______ you.",
            options: ["with", "from", "for", "of"],
            answer: "of",
        },
        {
            id: 546,
            question: "He died _______ cholera.",
            options: ["of", "from", "by", "after"],
            answer: "of",
        },
        {
            id: 547,
            question: "He has no affection _______ you.",
            options: ["with", "for", "about", "towards"],
            answer: "for",
        },
        {
            id: 548,
            question: "The main streets were jammed _______ traffic.",
            options: ["with", "in", "of", "from"],
            answer: "with",
        },
        {
            id: 549,
            question: "I am _______ your disposal.",
            options: ["for", "on", "an", "at"],
            answer: "at",
        },
        {
            id: 550,
            question: "The union leader requested to call _______ strike.",
            options: ["of", "off", "upon", "on"],
            answer: "off",
        },
        {
            id: 551,
            question: "He always seeks _______ wealth.",
            options: ["by", "for", "in", "no preposition needed"],
            answer: "no preposition needed",
        },
        {
            id: 552,
            question: "He sent a letter _______ my address.",
            options: ["to", "by", "on", "upon"],
            answer: "to",
        },
        {
            id: 553,
            question: "The lion sprang _______ the cow.",
            options: ["on", "upon", "off", "about"],
            answer: "upon",
        },
        {
            id: 554,
            question:
                "Did you put these packages in the drawer _______ the shelf?",
            options: ["beside", "besides", "over", "on"],
            answer: "beside",
        },
        {
            id: 555,
            question:
                "He gave us a general description of the plan, ‘but did not enter _______ details.",
            options: ["into", "in", "for", "of"],
            answer: "into",
        },
        {
            id: 556,
            question:
                "The function will take place _______ 8.00 a.m. _______ 10 a.m. Choose the most appropriate pair of prepositions.",
            options: ["from, and", "since, to", "till, and", "between, and"],
            answer: "between, and",
        },
        {
            id: 557,
            question:
                "Insert appropriate prepositions : Ravina is good _______ Maths but weak _______ English.",
            options: ["in, in", "into, in", "at, in", "in, in"],
            answer: "at, in",
        },
        {
            id: 558,
            question:
                "Fill in the blanks with appropriate prepositions : Finding myself short _______ money, I wrote _______ my uncle _______ help.",
            options: [
                "with; to; for",
                "of; to; about",
                "in; to; to",
                "of; to; for",
            ],
            answer: "of; to; for",
        },
        {
            id: 559,
            question: "Which one of the following is not a ‘preposition’?",
            options: ["through", "into", "but", "between"],
            answer: "but",
        },
        {
            id: 560,
            question:
                "Use the right preposition: Why don’t you go _______ your friend?",
            options: ["With", "By", "Along with", "Away"],
            answer: "With",
        },
        {
            id: 561,
            question:
                "Use the correct alternative: _______ way of introduction he made some patient remarks.",
            options: ["of", "By", "With", "For"],
            answer: "By",
        },
        {
            id: 562,
            question:
                "Choose the correct alternative: She broke the glass _______ a hundred pieces.",
            options: ["into", "of", "For", "with"],
            answer: "into",
        },
        {
            id: 563,
            question:
                "The children ran _______ the road. Mother ran after him. Choose the correct alternative.",
            options: ["In", "on", "across", "By"],
            answer: "across",
        },
        {
            id: 564,
            question:
                "Choose the right alternative: There should not be a prejudice _______ any community.",
            options: ["With", "for", "of", "against"],
            answer: "against",
        },
        {
            id: 565,
            question:
                "Fill in the blank with the correct preposition from the options given below. They shall finish the construction _______ a week.",
            options: ["on", "from", "in", "upon"],
            answer: "in",
        },
        {
            id: 566,
            question:
                "Fill in the blank with the correct option: ‘We rise _______ the Sun on every Sunday.",
            options: ["beside", "up", "over", "with"],
            answer: "up",
        },
        {
            id: 567,
            question:
                "a) T have no further consult with my father's firm.\nb) I have no further consult to my father's firm.\nc) I have no further concern with my father's firm.\nd) I have no further concern to my father's firm.\nThe grammatically correct sentences are",
            options: ["Both a and c", "Both b and d", "Only a", "Only c"],
            answer: "Both a and c",
        },
        {
            id: 568,
            question: "Choose the correct sentence from the following.",
            options: [
                "The Prime Minister lives in 10 Downing Street.",
                "Sherlock Holmes lived in Baker Street.",
                "His father works into a bank.",
                "My married sister lives at Manchester.",
            ],
            answer: "The Prime Minister lives in 10 Downing Street.",
        },
        {
            id: 569,
            question:
                "He deals _______- dry fruits. Pick out the correct alternative to complete the sentence.",
            options: ["in", "out", "with", "by"],
            answer: "in",
        },
        {
            id: 570,
            question:
                "Here is the train that we have been waiting _______. Choose suitable preposition to complete the above sentence.",
            options: ["for", "of", "at", "with"],
            answer: "for",
        },
        {
            id: 571,
            question: "Choose the correct sentence from the following:",
            options: [
                "Everyone attend the party except him.",
                "Everyone attended the party except him.",
                "Everyone attended the party accept him.",
                "Everyone attended the party part of him.",
            ],
            answer: "Everyone attended the party except him.",
        },
        {
            id: 572,
            question:
                "Choose the correct preposition: The officer would have to change his attitude <u>before</u> the workers.",
            options: ["After", "towards", "for", "No change"],
            answer: "towards",
        },
        {
            id: 573,
            question:
                "Supply proper preposition for the blank. His capacity _______ hard work seems unlimited.",
            options: ["to", "for", "in", "with"],
            answer: "for",
        },
        {
            id: 574,
            question:
                "Fill in the most appropriate preposition: These are some tips on candidate's preparation _______ interview.",
            options: ["of", "for", "on", "about"],
            answer: "for",
        },
        {
            id: 575,
            question: "Choose the correct sentence from the alternative given.",
            options: [
                "I prefer tea than coffee",
                "I prefer tea rather than coffee",
                "I prefer tea to coffee",
                "I prefer to take tea than coffee",
            ],
            answer: "I prefer tea to coffee",
        },
        {
            id: 576,
            question:
                "Choose the correct preposition to fill in the blank: These three men quarrelled _______ themselves.",
            options: ["by", "among", "within", "between"],
            answer: "among",
        },
        {
            id: 577,
            question:
                "Fill the blank spaces with the right pair of words: The bank functions _______ 10.00 a.m. _______ 5.00 pm.",
            options: ["between, and", "between, to", "from, to", "at, and"],
            answer: "from, to",
        },
        {
            id: 578,
            question:
                "In English structure like 'On Sunday', the word 'on' functions as _______",
            options: [
                "preposition of position",
                "preposition of direction",
                "preposition of time",
                "preposition related to verbs",
            ],
            answer: "preposition of time",
        },
        {
            id: 579,
            question:
                "Choose the correct sentences where prepositions are used correctly.",
            options: [
                "I live at Mumbai.",
                "He was born in 1980.",
                "He will return in a week.",
                "I get up in the morning.",
            ],
            answer: "He was born in 1980.",
        },
        {
            id: 580,
            question:
                "‘I took to cricket as a duck takes _______ water.' Select the correct preposition from the following:",
            options: ["to", "on", "from", "of"],
            answer: "to",
        },
        {
            id: 581,
            question:
                "Divide this property _______ Alec, Charles and Jane. Pick out the correct alternative to complete the sentence.",
            options: ["between", "in", "among", "into"],
            answer: "among",
        },
        {
            id: 582,
            question: "Point out the correct sentence:",
            options: [
                "We shall discuss the problem tomorrow.",
                "We shall discuss on the problem tomorrow.",
                "We shall discuss the problem on tomorrow.",
                "We shall discuss about the problem tomorrow.",
            ],
            answer: "We shall discuss the problem tomorrow.",
        },
        {
            id: 583,
            question:
                "Identify the sentence/s containing incorrect use of preposition. \na) The river flowed under the bridge. \nb) After the party we did a lot of washing-up. \nc) The repairs in the roof were completed",
            options: ["a only", "c only", "a and b only", "b and c only"],
            answer: "c only",
        },
        {
            id: 584,
            question:
                "Which of the sentences contain/s correct preposition? \na) Our neighbours are going for a holiday. \nb) We can travel to Goa by bus, train or plane. \nc) We can travel to Goa by bus, by train or by plane.",
            options: ["a and b", "b and c", "Only b", "only c"],
            answer: "b and c",
        },
        {
            id: 585,
            question:
                "Fill in the blanks with suitable prepositions : _______ order _______ avoid litigation, she accepted her crime.",
            options: ["For, of", "From, to", "In, from", "In, to"],
            answer: "In, to",
        },
        {
            id: 586,
            question:
                "Fill in the blank with the appropriate preposition. I feel sorry for not being able to attend _______ you.",
            options: ["for", "to", "with", "no preposition"],
            answer: "for",
        },
        {
            id: 587,
            question:
                "Fill in the blank with the correct preposition. We shouldn't poke fun _______ people who stammer.",
            options: ["of", "at", "on", "against"],
            answer: "at",
        },
        {
            id: 588,
            question:
                "Which of the following sentences are grammatically correct? \na) The doctor meets his patients between 6.00 p.m 10 9.00 p.m. \nb) Unless you don't work hard, you will not succeed. \nc) The teacher advised me to work harder. \nd) He has been running his business for 40 years now.",
            options: [
                "only (a) and (c)",
                "only (a), (c) and (d)",
                "only (c) and (d)",
                "All four",
            ],
            answer: "only (a), (c) and (d)",
        },
        {
            id: 589,
            question:
                "Choose the correct sentences. \na) Father comes home at five O'clock \nb) Father comes to home at five O'clock. \nc) The children brought a stray kitten home.",
            options: [
                "a and b only",
                "b and c only",
                "a and c only",
                "a, b and c",
            ],
            answer: "a and c only",
        },
        {
            id: 590,
            question:
                "Fill in the blanks with a preposition. \na) He accused me _______ cheating him. \nb) I do not approve _______ your action. \nc) The father was very angry _______ his son.",
            options: [
                "for, of, about",
                "for, of, of",
                "of, of, with",
                "None of the above",
            ],
            answer: "of, of, with",
        },
        {
            id: 591,
            question:
                "Complete the following sentence using the most appropriate preposition. The youngest _______ the three sisters is certainly the wisest.",
            options: ["between", "among", "of all", "in"],
            answer: "of all",
        },
        {
            id: 592,
            question:
                "Choose the correct sentence/s: \na) I entered the third class compartment. \nb) At the same time the train was come to a stop. \nc) I looked out of the windows and everyone were asking who had pulled the chain.",
            options: ["a and b only", "b and c only", "a only", "a, b and c"],
            answer: "a only",
        },
        {
            id: 593,
            question:
                "Choose the correct sentences. \na) Here is the information for which you asked for. \nb) Here is the information for which you asked. \nc) Here is the information you asked for.",
            options: [
                "only a and b",
                "only a and c",
                "only b and c",
                "a, b and c",
            ],
            answer: "only b and c",
        },
        {
            id: 594,
            question:
                "Identify the incorrect sentence/s. \na) A bridge was built across the river. \nb) The boy was below twelve. \nc) There is a fan above her head.",
            options: ["Only a and b", "Only b and c", "only c", "only a"],
            answer: "Only b and c",
        },
        {
            id: 595,
            question: "Choose the correct question:",
            options: [
                "Are you a member in the committee?",
                "Are you a member of the committee?",
                "Are you a member on the committee?",
                "Are you a member at the committee?",
            ],
            answer: "Are you a member of the committee?",
        },
        {
            id: 596,
            question:
                "Fill in the blank with appropriate preposition : He has been ill _______ last week.",
            options: ["ever", "for", "in", "at"],
            answer: "for",
        },
        {
            id: 597,
            question:
                "In nominal wh-clauses, passives and infinitive clauses, the preposition must occur _______",
            options: [
                "at the end",
                "in the middle",
                "before complement",
                "at the beginning",
            ],
            answer: "at the end",
        },
        {
            id: 598,
            question:
                "a. She wants dance to be learnt. \nb. She was confined to bed by fever. \nc. You are ordered to bring the files.\nIdentify the incorrect sentence.",
            options: ["Only a", "Only b", "Only a and c", "Only a and b"],
            answer: "Only a",
        },
        {
            id: 599,
            question:
                "Fill in the blank with correct preposition : He has been in hospital _______ last week.",
            options: ["in", "for", "since", "from"],
            answer: "since",
        },
        {
            id: 600,
            question:
                "Pick out the correct sentence from the following: \na) The drought in this year is very serious. \nb) What has he been doing from Tuesday? \nc) He will return at midnight. \nd) I met him on last Monday.",
            options: [
                "(a) and (b) are correct",
                "(c) and (d) are correct",
                "only (c) is correct",
                "only (c) is incorrect",
            ],
            answer: "only (c) is correct",
        },
        {
            id: 601,
            question:
                "Fill in the blank with appropriate pair of prepositions : Jawaharlal Nehru was born _______ Allahabad _______ Uttar Pradesh.",
            options: ["at,in", "in, at", "in,from", "in,in"],
            answer: "in, at",
        },
        {
            id: 602,
            question: "Identify the correct sentence from the following:",
            options: [
                "Death is preferable than dishonour.",
                "Death is preferable to dishonour.",
                "Dying is preferable to dishonour.",
                "Dying is most preferable to dishonour.",
            ],
            answer: "Death is preferable to dishonour.",
        },
        {
            id: 603,
            question:
                "Write the correct preposition in the blank space from the given options : “Hari is inferior _______ Ram in intelligence.",
            options: ["than", "to", "from", "against"],
            answer: "to",
        },
        {
            id: 604,
            question: "They have opened an office _______ 28 Lees Road.",
            options: ["at", "on", "in", "none of the above"],
            answer: "at",
        },
        {
            id: 605,
            question:
                "Switzerland lies _______ France, Germany and Italy. Which of the following prepositions fills in correctly the blank in the sentence above?",
            options: ["between", "among", "beside", "besides"],
            answer: "between",
        },
        {
            id: 606,
            question:
                "He managed to get <u>across</u> the field’. In the above sentence the underlined preposition is the example of -",
            options: [
                "metaphorical meaning",
                "resultative meaning",
                "orientation",
                "pervasive meaning",
            ],
            answer: "orientation",
        },
        {
            id: 607,
            question:
                "a. This book resembles to that. \nb. Have you signed that contract? \nc. A modest man does not boast of his merits. \nd. He carefully investigated into the case.\nIdentify the correct sentences.",
            options: [
                "Only a and c",
                "Only b and c",
                "Only a and d",
                "Only b and d",
            ],
            answer: "Only b and c",
        },
        {
            id: 608,
            question:
                "Identify the correct sentence/s. \na) She described me the situation. \nb) We all envied him his lifestyle. \nc) He fixed the tap for me.",
            options: ["Only a", "Only b", "Only a and c", "Only b and c"],
            answer: "Only b and c",
        },
        {
            id: 609,
            question:
                "He has a narrow escape _______ danger. Which one of the following prepositions correctly fills the blank in the sentence above?",
            options: ["from", "of", "with", "at"],
            answer: "from",
        },
        {
            id: 610,
            question:
                "Choose the correct sentence. \na) The professor brought out the idea clearly. \nb) The professor brought with the idea clearly. \nc) The professor brought in the idea clearly.",
            options: ["(a) only", "(c) only", "(a) and (b) only", "(b) only"],
            answer: "(a) only",
        },
        {
            id: 611,
            question:
                "Choose the correct word to complete the following sentence. It is too hot _______ us to go out.",
            options: ["to", "For", "with", "too"],
            answer: "for",
        },
        {
            id: 612,
            question:
                "He has a narrow escape _______ danger. Which one of the following prepositions correctly fills the blank in the sentence above?",
            options: ["from", "of", "with", "at"],
            answer: "from",
        },
        {
            id: 613,
            question:
                "Choose the best option to fill in the blanks: \na) _______ his Aunt he has six other female relations. \nb) I do like to be _______ the sea-side.",
            options: [
                "Beside, besides",
                "Beside, beside",
                "Beside of, besides",
                "Besides, beside",
            ],
            answer: "Besides, beside",
        },
        {
            id: 614,
            question:
                "Point out the sentence that has the *preposition of time’.",
            options: [
                "Due <u>to</u> corona - pandemic life everywhere is constrained so we do not know where it is leading, us to",
                "I have not seen my younger brother for months.",
                "Being <u>in</u> a hurry, I could not notice you crossing the road.",
                "Yesterday I attended a lecture on Sri Aurobindo.",
            ],
            answer: "I have not seen my younger brother for months.",
        },
        {
            id: 615,
            question:
                "Identify the functions of the word “after” in the following sentences. \n(a) They arrived soon <u>after</u>.\n(b) He takes <u>after</u> his father.\n(c) <u>After</u> ages shall sing his glory.\n(d) We went away <u>after</u> they had left.",
            options: [
                "adjective, preposition, adverb, conjunction",
                "conjunction, adverb, adjective, preposition",
                "adverb, preposition, adjective, conjunction",
                "adverb, adjective, preposition, conjunction",
            ],
            answer: "adverb, preposition, adjective, conjunction",
        },
        {
            id: 616,
            question:
                "(a) He resembles his brother. \n(b) I am tired with this work. \n(c) He ordered a new car. \n(d) He will combat your views.\nIdentify the grammatically correct sentence/s.",
            options: [
                "Only (a) and (b)",
                "Only (c) and (d)",
                "Only (b), (c) and (d)",
                "Only (a), (c) and (d)",
            ],
            answer: "Only (a), (c) and (d)",
        },
        {
            id: 617,
            question:
                "(a) The table’s leg is broken. \n(b) They had a two hour talk. \n(c) He was absent for last two days.\nIdentify the sentence/s grammatically correct.",
            options: ["Only(a)and(c)", "Only(b)and(c)", "Only(b)", "Only(a)"],
            answer: "Only(b)",
        },
        {
            id: 618,
            question:
                "(a) He lives in Bapu Nagar in Ahmedabad. \n(b) He reached Mumbai yesterday. \n(c) She lives in a Cottage. \n(d) I will be sixty in next August.\nIdentify the correct sentence/s.",
            options: [
                "Only(a)and(b)",
                "Only(b)and(c)",
                "Only(a)and(d)",
                "Only(b), (c) and (d)",
            ],
            answer: "Only(b), (c) and (d)",
        },
        {
            id: 619,
            question:
                "Choose the correct alternative to fill in the blank: ‘We must wait until the invigilator _______ the question papers.",
            options: ["given", "would give", "will give", "gives"],
            answer: "gives",
        },
        {
            id: 620,
            question:
                "Choose the correct alternative to fill in the blank: He went away before _______ him.",
            options: ["can stopped", "could stop", "can stop", "could stopped"],
            answer: "could stop",
        },
        {
            id: 621,
            question:
                "Choose the correct alternative to fill in the blank: After he _______ we thought over his plan.",
            options: ["had spoken", "spoke", "has spoken", "was speaking"],
            answer: "had spoken",
        },
        {
            id: 622,
            question: "I _______ that you have got a new car.",
            options: ["have heard", "hear", "am hearing", "was hearing"],
            answer: "have heard",
        },
        {
            id: 623,
            question: "Choose the correct sentence.",
            options: [
                "I forget to post the letter yesterday.",
                "I am forgetting to post the letter yesterday.",
                "I forgot posting this a letter yesterday.",
                "I forgot to post this letter yesterday.",
            ],
            answer: "I forgot to post this letter yesterday.",
        },
        {
            id: 624,
            question:
                "Select the appropriate verb-phrase from among the alternatives given below to fill in the blank in the following sentence: You _______ a shock when you read the letter.",
            options: ["would get", "will get", "shall get", "will be getting"],
            answer: "will get",
        },
        {
            id: 625,
            question:
                "Pick out the clause that completes the sentence correctly: Ramesh would like the boys _______ in the field.",
            options: ["having played", "to playing", "played", "playing"],
            answer: "playing",
        },
        {
            id: 626,
            question: "Pick out the correct sentence from the following:",
            options: [
                "The last train goes to Kalyan there!",
                "There is going the last train to Kalyan!",
                "From there is going the last train for Kalyan!",
                "There goes the last train for Kalyan!",
            ],
            answer: "There goes the last train for Kalyan!",
        },
        {
            id: 627,
            question:
                "Choose the correct set of tense forms of the verbs given in the brackets: ‘While you (talk) to me on the phone, somebody (knock) at my door.",
            options: [
                "were talking: knocked",
                "talking; had knocked",
                "talked; knocking",
                "had talked; had knocked",
            ],
            answer: "were talking: knocked",
        },
        {
            id: 628,
            question:
                "Choose the right alternative to fill in the blank in the following sentence. If I had known that he was in the city last week, I _______ him.",
            options: ["would meet", "would have met", "had met", "might meet"],
            answer: "would have met",
        },
        {
            id: 629,
            question:
                "Choose the correct form of the verb to complete the following sentence: He _______ French before he went to France.",
            options: ["has learnt", "is learning", "had learnt", "will learn"],
            answer: "had learnt",
        },
        {
            id: 630,
            question:
                "Choose the appropriate form of the verb and complete the sentence: The officer _______ the villager’s problems.",
            options: [
                "does not understand",
                "is not understanding",
                "do not understand",
                "was not understanding",
            ],
            answer: "does not understand",
        },
        {
            id: 631,
            question:
                "I cannot _______ the next word, he has written it so badly. Fill in the blank in the above sentence with the correct verb form from the following:",
            options: ["make up", "make for", "make out", "make up for"],
            answer: "make out",
        },
        {
            id: 632,
            question: "Pick out the correct sentence from the following.",
            options: [
                "Ten miles are a long distance.",
                "Ten miles were a long distance.",
                "Ten miles is a long distance.",
                "Ten miles are a long distance.",
            ],
            answer: "Ten miles is a long distance.",
        },
        {
            id: 633,
            question:
                "Choose the correct tense form: Father _______ reading the newspaper at the moment.",
            options: ["are", "is", "was", "were"],
            answer: "is",
        },
        {
            id: 634,
            question: "They were sitting in a restaurant _______",
            options: [
                "when I had seen them.",
                "when I saw them.",
                "when I was seeing them.",
                "when I would see them.",
            ],
            answer: "when I saw them.",
        },
        {
            id: 635,
            question: "Choose the correct sentence from the following.",
            options: [
                "She will have completed all her assignments by tomorrow.",
                "She has completed all her assignments by tomorrow.",
                "She has to be completing all her assignments by tomorrow.",
                "She was completed all her assignments by tomorrow.",
            ],
            answer: "She will have completed all her assignments by tomorrow.",
        },
        {
            id: 636,
            question:
                "Select the correct modal to express permission. You _______ return my book tomorrow.",
            options: ["shall", "will", "may", "can"],
            answer: "may",
        },
        {
            id: 637,
            question:
                "Choose the correct alternative to fill in the blank: ‘When it _______ dark, we’ll have to stop. We can’t work in the dark.",
            options: ["will get", "will be getting", "gets", "is getting"],
            answer: "gets",
        },
        {
            id: 638,
            question:
                "Which one of the following sentences is grammatically correct?",
            options: [
                "How the books will sell depends on the author.",
                "How the books will sell is depending on the author.",
                "How the books will sell depend on the author.",
                "How the books will sell depended on the author.",
            ],
            answer: "How the books will sell depends on the author.",
        },
        {
            id: 639,
            question:
                "Complete the following using the correct alternative: He wants to know _______",
            options: [
                "when the meeting been start.",
                "when the meeting had started.",
                "when the meeting will starting.",
                "when the meeting will start.",
            ],
            answer: "when the meeting will start.",
        },
        {
            id: 640,
            question:
                "Choose the correct alternative: He _______ early when he was in Mumbai.",
            options: [
                "has got up",
                "has been getting up",
                "had got up",
                "used to get up",
            ],
            answer: "used to get up",
        },
        {
            id: 641,
            question:
                "Choose the correct alternative to fill in the blank. Good advice _______ not always needed.",
            options: ["was", "has", "is", "had"],
            answer: "is",
        },
        {
            id: 642,
            question: "Select the correct sentence:",
            options: [
                "By the end of the year she will have been working for two years.",
                "By the end of the year she will be working for two years.",
                "By the end of the year she has been working for two years.",
                "By the end of the year she is working for two years.",
            ],
            answer: "By the end of the year she will have been working for two years.",
        },
        {
            id: 643,
            question:
                "Choose the correct alternative to complete the sentence. It _______ continuously since six O’clock this morning.",
            options: [
                "is raining",
                "have rained",
                "has been raining",
                "had been raining",
            ],
            answer: "has been raining",
        },
        {
            id: 644,
            question:
                "Fill in the blank with the correct verb for: 'Wheat and rice _______ cereals.'",
            options: ["is", "were", "have", "are"],
            answer: "are",
        },
        {
            id: 645,
            question: "Choose the correct sentence:",
            options: [
                "Neither praise nor blame seem to affect him.",
                "Neither praise not blame seem to affect him.",
                "Neither praise not blame seems to affect him.",
                "Neither praise nor blame seems to affect him.",
            ],
            answer: "Neither praise nor blame seems to affect him.",
        },
        {
            id: 646,
            question:
                "Choose the correct tense form of the verb in brackets for completing the sentence. “When we _______(have) lunch we will go for a walk.",
            options: ["had", "shall have", "had had", "have had"],
            answer: "shall have",
        },
        {
            id: 647,
            question:
                "Complete the sentence with a suitable verb form. The police _______ of theft by this time.",
            options: ["are heard", "will hear", "hear", "would have heard"],
            answer: "would have heard",
        },
        {
            id: 648,
            question:
                "Complete the sentence with the correct alternative. She is _______ well today.",
            options: ["no", "not", "none", "nought"],
            answer: "not",
        },
        {
            id: 649,
            question:
                "Fill in the blank with the correct alternative. One of my friends _______ a fine collection of postage stamps.",
            options: ["has", "have", "had been", "having"],
            answer: "has",
        },
        {
            id: 650,
            question:
                "Choose the correct alternative to complete the following sentence: 'If someone offered to buy one of these watches, which one ______?'",
            options: [
                "you choose",
                "shall you choose",
                "would you choose",
                "will you choose",
            ],
            answer: "would you choose",
        },
        {
            id: 651,
            question:
                "Select the correct tense form of the verb to complete the sentence: I had never seen such sights until I _______",
            options: [
                "go to England.",
                "shall go to England.",
                "went to England.",
                "have gone to England.",
            ],
            answer: "went to England.",
        },
        {
            id: 652,
            question:
                "Choose the correct tense form: We _______ playing cricket now.",
            options: ["were", "was", "will", "are"],
            answer: "are",
        },
        {
            id: 653,
            question:
                "'You shall have a holiday tomorrow.' The modal auxiliary in the above sentence expresses",
            options: ["threat", "command", "promise", "willingness"],
            answer: "promise",
        },
        {
            id: 654,
            question:
                "Choose the correct alternative to fill in the blank. He _______ English for five years.",
            options: [
                "studies",
                "is studying",
                "are studying",
                "has been studying",
            ],
            answer: "has been studying",
        },
        {
            id: 655,
            question:
                "Which of the following sentences has been written in Future Continuous Tense?",
            options: [
                "He will have left the place.",
                "He will have been leaving the place.",
                "He will be leaving the place.",
                "He is going to leave the place.",
            ],
            answer: "He will be leaving the place.",
        },
        {
            id: 656,
            question:
                "Choose the correct alternative to complete the sentence: Modern research _______ that there were invaders even before the Aryans poured into this land.",
            options: [
                "Proved",
                "has been proving",
                "has proved",
                "has been proved",
            ],
            answer: "has proved",
        },
        {
            id: 657,
            question:
                "Fill in the blank with the correct verb form. 'When I saw him, he _______ chess.",
            options: ["played", "has played", "had played", "was playing"],
            answer: "was playing",
        },
        {
            id: 658,
            question:
                "Which of the following is the correct form to complete the expression? Long _______ the Indian Republic!",
            options: ["live", "lives", "will live", "should live"],
            answer: "live",
        },
        {
            id: 659,
            question:
                "Choose the correct alternative to complete the sentence. It _______ continuously since six O’clock.",
            options: [
                "is rained",
                "have rained",
                "has been raining",
                "had been raining",
            ],
            answer: "has been raining",
        },
        {
            id: 660,
            question:
                "Would you mind _______ some of your books while you are on your vacation?",
            options: [
                "me borrowing",
                "my borrowing",
                "me borrow",
                "me having borrowed",
            ],
            answer: "my borrowing",
        },
        {
            id: 661,
            question:
                "The fact that you find a thing does not entitle you to _______ it.",
            options: ["have kept", "for keeping", "keeping", "keep"],
            answer: "keep",
        },
        {
            id: 662,
            question: "She had frequent toothaches. So she decided to _______",
            options: [
                "have her teeth removed",
                "remove her teeth",
                "removing her teeth",
                "having her teeth removed",
            ],
            answer: "have her teeth removed",
        },
        {
            id: 663,
            question:
                "He is the most generous man. I _______ him for a long time.",
            options: ["know", "knew", "had known", "have known"],
            answer: "have known",
        },
        {
            id: 664,
            question: "_______ either of your sisters working?",
            options: ["Are", "Is", "Might", "Ought"],
            answer: "Is",
        },
        {
            id: 665,
            question: "No boy and no girl _______ present there.",
            options: ["was", "were", "are", "have"],
            answer: "was",
        },
        {
            id: 666,
            question: "Savings in the bank _______ a great profit.",
            options: ["is", "are", "has been", "have been"],
            answer: "are",
        },
        {
            id: 667,
            question: "When I reached the station, the train _______",
            options: [
                "departed",
                "had already departed",
                "is departed",
                "had departed already",
            ],
            answer: "had already departed",
        },
        {
            id: 668,
            question:
                "One of the TV cameramen was _______ in the leg by a bullet when he was _______ in the middle of a gun fight between two gangs.",
            options: [
                "hurt, entered",
                "shot, caught",
                "injured, came",
                "stabbed, trapped",
            ],
            answer: "shot, caught",
        },
        {
            id: 669,
            question:
                "Complete the following sentence using the correct form of verb: I _______ (write) letters since ten o’clock this morning.",
            options: [
                "wrote",
                "have been writing",
                "was writing",
                "had been writing",
            ],
            answer: "have been writing",
        },
        {
            id: 670,
            question: "Heat the oil till it _______ to smoke.",
            options: ["Began", "Begins", "Will begin", "has began"],
            answer: "Begins",
        },
        {
            id: 671,
            question:
                "Choose the correct alternative to complete the following sentence: I will sing if he _______",
            options: ["will ask me", "asks me", "asked me", "has asked me"],
            answer: "asks me",
        },
        {
            id: 672,
            question:
                "Use correct verb to complete the given sentence. He _______ do it whether you like it or not.",
            options: ["would", "will", "will have", "shall have"],
            answer: "will",
        },
        {
            id: 673,
            question: "Dump _______ speak.",
            options: ["Does not", "Do not", "is not", "Was not"],
            answer: "Do not",
        },
        {
            id: 674,
            question:
                "Choose the correct verb to fill in the blank: Each one of our houses _______ to let.",
            options: ["is", "are", "were", "would"],
            answer: "is",
        },
        {
            id: 675,
            question: "Do you like _______ to classical music.",
            options: ["to listen", "listening", "to listening", "lisning"],
            answer: "listening",
        },
        {
            id: 676,
            question:
                "He loved _______ television in the PerformanceEventTiming.",
            options: ["watched", "was watching", "watching", "None of this"],
            answer: "watching",
        },
        {
            id: 677,
            question: "The little boy _______ frightened and ran away.",
            options: ["get", "got", "became", "is"],
            answer: "got",
        },
        {
            id: 678,
            question:
                "Choose the correct verb to fill in the blanks: I think you are _______ something.",
            options: ["saying", "speaking", "talking", "telling"],
            answer: "saying",
        },
        {
            id: 679,
            question: "They were sitting in a restaurant _______",
            options: [
                "when I had seen them.",
                "when I was seeing them.",
                "when I would see them.",
                "when I saw them.",
            ],
            answer: "when I saw them.",
        },
        {
            id: 680,
            question: "Satish would like boys _______ in the field.",
            options: ["playing", "played", "having played", "to be playing"],
            answer: "playing",
        },
        {
            id: 681,
            question:
                "I _______ that you have got the job of Sr. Clerk in PWD.",
            options: ["have heard", "was hearing", "will be hearing", "hear"],
            answer: "have heard",
        },
        {
            id: 682,
            question:
                "Fill in the blank with appropriate form of the verb: If I _______ a King, you should be my Queen.",
            options: ["were", "was", "am", "will"],
            answer: "were",
        },
        {
            id: 683,
            question:
                "The messenger _______ hardly read or write. Which of the following option would be most appropriate?",
            options: ["can’t", "doesn’t", "can", "does"],
            answer: "can",
        },
        {
            id: 684,
            question:
                "The general with all his soldiers _______ killed. Which of the following options can fill in the blank?",
            options: ["were", "are", "is", "was"],
            answer: "was",
        },
        {
            id: 685,
            question:
                "Many a flower _______ born to blush unseen. Which of the following options is correct?",
            options: ["are", "is", "will", "were"],
            answer: "is",
        },
        {
            id: 686,
            question:
                "A crowd of university students _______ surrounded the vice-chancellor.",
            options: ["has", "have", "did", "were"],
            answer: "have",
        },
        {
            id: 687,
            question: "If you _______ me some money, I _______ buy a scooter.",
            options: ["give, will", "gave, may", "given, will", "gives, would"],
            answer: "give, will",
        },
        {
            id: 688,
            question: "The poet and philosopher _______ my friend.",
            options: ["is", "are", "have", "were"],
            answer: "is",
        },
        {
            id: 689,
            question: "Billiards _______ an expensive game.",
            options: ["are", "is", "were", "have"],
            answer: "is",
        },
        {
            id: 690,
            question: "Either your eyesight or your brakes _______ bad.",
            options: ["are", "is", "was", "none"],
            answer: "are",
        },
        {
            id: 691,
            question: "The teachers or the student _______ wrong.",
            options: ["were", "are", "will", "is"],
            answer: "is",
        },
        {
            id: 692,
            question:
                "Each of the two candidates _______ paid his subscription.",
            options: ["are", "has", "have", "were"],
            answer: "has",
        },
        {
            id: 693,
            question: "No sooner _______ than the police handcuffed him.",
            options: ["he come", "did he came", "did he come", "had he come"],
            answer: "did he come",
        },
        {
            id: 694,
            question: "The poor should be _______",
            options: ["feed", "feeding", "fed", "feeds"],
            answer: "fed",
        },
        {
            id: 695,
            question: "We had reached the station, before the train _______",
            options: ["arrive", "arrived", "had arrived", "had been arriving"],
            answer: "arrived",
        },
        {
            id: 696,
            question: "When we went to the cinema, the film _______",
            options: [
                "already started",
                "had already started",
                "would already started",
                "was started",
            ],
            answer: "had already started",
        },
        {
            id: 697,
            question: "The ship was _______ in the storm.",
            options: ["wrecked", "wrept", "rapt", "rack"],
            answer: "wrecked",
        },
        {
            id: 698,
            question:
                "Two labour party MPs _______ for rehabilitation of the handicapped in the zero-hour at the parliament today.",
            options: ["asks", "ask", "are asking", "has asked"],
            answer: "are asking",
        },
        {
            id: 699,
            question:
                "Unless young people are employed there _______ social unrest.",
            options: ["is not", "was", "will be", "is"],
            answer: "will be",
        },
        {
            id: 700,
            question: "Leena _______ in the United States since 1996.",
            options: [
                "had been living",
                "is being living",
                "has been living",
                "has lived",
            ],
            answer: "has been living",
        },
        {
            id: 701,
            question:
                "You _______ study hard, if you wish to pass in the exam.",
            options: ["would", "can", "must", "tell"],
            answer: "must",
        },
        {
            id: 702,
            question:
                "The rich <u>is</u> not always dishonest. Which of the following options will be used in place of underlined part of the sentence?",
            options: ["was", "will", "are", "can"],
            answer: "are",
        },
        {
            id: 703,
            question: "If I _______ him, I _______ give him your message.",
            options: [
                "meet, will",
                "met, can",
                "will meet, will",
                "meeting, will",
            ],
            answer: "meet, will",
        },
        {
            id: 704,
            question: "By whom was the gate _______?",
            options: ["opened", "had opened", "opening", "opens"],
            answer: "opened",
        },
        {
            id: 705,
            question: "Neither he nor his brother _______ there.",
            options: ["were", "was", "are", "will"],
            answer: "was",
        },
        {
            id: 706,
            question: "She jumped off the bus while the bus _______",
            options: ["moved", "had moved", "was moving", "will move"],
            answer: "was moving",
        },
        {
            id: 707,
            question: "She _______ unconscious since four o’clock.",
            options: ["is", "was", "will", "has been"],
            answer: "has been",
        },
        {
            id: 708,
            question: "He behaves as though _______",
            options: [
                "he were a king",
                "he was a king",
                "he be come a king",
                "he is a king",
            ],
            answer: "he were a king",
        },
        {
            id: 709,
            question: "If it does not rain _______",
            options: [
                "the crops will dry up",
                "the crop is dried",
                "the crops will have dry up",
                "the crop will dry up",
            ],
            answer: "the crops will dry up",
        },
        {
            id: 710,
            question: "Don’t disturb me, I _______ my home work.",
            options: ["do", "did", "am doing", "will do"],
            answer: "am doing",
        },
        {
            id: 711,
            question: "A number of boys were punished for _______",
            options: ["copy", "to copy", "copying", "copied"],
            answer: "copying",
        },
        {
            id: 712,
            question: "The children enjoy _______ in the garden.",
            options: ["Playing", "to play", "in playing", "to playing"],
            answer: "Playing",
        },
        {
            id: 713,
            question:
                "They _______ money for educational purpose of their children.",
            options: ["shy", "sign", "shave", "save"],
            answer: "save",
        },
        {
            id: 714,
            question: "She _______ her home work before I asked her.",
            options: [
                "finished",
                "has finished",
                "had finished",
                "was finishing",
            ],
            answer: "had finished",
        },
        {
            id: 715,
            question: "I can’t remember when I _______ her last.",
            options: ["had seen", "have seen", "was seen", "saw"],
            answer: "saw",
        },
        {
            id: 716,
            question: "Vijay _______ his B.A. Examination in 2005.",
            options: ["had passed", "passed", "has passed", "is passing"],
            answer: "passed",
        },
        {
            id: 717,
            question: "_______ I you, I would help him.",
            options: ["Were", "Had", "Should", "If"],
            answer: "Were",
        },
        {
            id: 718,
            question: "By the time I reach home, mother _______ cooking.",
            options: [
                "will finish",
                "will be finishing",
                "will have finished",
                "have finished",
            ],
            answer: "will have finished",
        },
        {
            id: 719,
            question: "Even if you were to try _______",
            options: [
                "you would not be able to do it.",
                "you will not be able to do it.",
                "you are not able to do it.",
                "you have not done it.",
            ],
            answer: "you would not be able to do it.",
        },
        {
            id: 720,
            question:
                "One of the students _______ absent in the class yesterday.",
            options: ["are", "was", "were", "is"],
            answer: "was",
        },
        {
            id: 721,
            question: "They made more mistakes than we _______",
            options: ["have done", "had done", "would have done", "did"],
            answer: "did",
        },
        {
            id: 722,
            question:
                "Choose the correct alternative. He tried hard but _______",
            options: [
                "he had not succeeded",
                "he did not succeed",
                "he was not succeeding",
                "he has not been succeeding",
            ],
            answer: "he did not succeed",
        },
        {
            id: 723,
            question:
                "Neither the Headmaster nor the Assistant masters _______ present.",
            options: ["is", "to be", "are", "been"],
            answer: "are",
        },
        {
            id: 724,
            question:
                "Fill in the blank in the following sentence. Choose an appropriate verb form that agrees with the subject. 'The General with all his soldiers _______ killed.'",
            options: ["has been", "have been", "are", "were"],
            answer: "were",
        },
        {
            id: 725,
            question:
                "Choose the alternative to complete the sentence. If she were selected, she _______ a good secretary.",
            options: ["will make", "can make", "would have made", "would make"],
            answer: "would make",
        },
        {
            id: 726,
            question:
                "If someone offered to buy one of these watches, which one _______",
            options: [
                "you choose",
                "shall you choose",
                "would you choose",
                "will you choose",
            ],
            answer: "would you choose",
        },
        {
            id: 727,
            question: "If I had known about your problem _______",
            options: [
                "I would have helped you",
                "I had helped you",
                "I would help you",
                "I will help you",
            ],
            answer: "I would have helped you",
        },
        {
            id: 728,
            question: "It is about time you _______ the tea ready.",
            options: ["get", "got", "give", "receive"],
            answer: "got",
        },
        {
            id: 729,
            question: "He entered the room, looking as if he _______ a ghost.",
            options: ["witness", "meets", "saw", "passed by"],
            answer: "saw",
        },
        {
            id: 730,
            question: "He behaves as if he _______",
            options: [
                "is my boss",
                "was my boss",
                "were my boss",
                "could be my boss",
            ],
            answer: "were my boss",
        },
        {
            id: 731,
            question: "He will not come _______",
            options: ["I think", "I do not think", "I thought", "May think"],
            answer: "I do not think",
        },
        {
            id: 732,
            question: "I will see you when I _______ to Bombay.",
            options: ["come", "will come", "shall come", "am coming"],
            answer: "come",
        },
        {
            id: 733,
            question: "If he had been in the city, he _______ the award.",
            options: [
                "would receive",
                "would have received",
                "should have received",
                "could receive",
            ],
            answer: "would have received",
        },
        {
            id: 734,
            question: "I will sing if he _______",
            options: ["will ask me", "asks me", "asked me", "has asked me"],
            answer: "asks me",
        },
        {
            id: 735,
            question: "Had he worked hard he _______",
            options: [
                "would have passed",
                "would pass",
                "will have passed",
                "passed",
            ],
            answer: "would have passed",
        },
        {
            id: 736,
            question: "If he had been elected he _______",
            options: [
                "will be a minister",
                "would be a minister",
                "would make a minister",
                "would have been a minister",
            ],
            answer: "would have been a minister",
        },
        {
            id: 737,
            question:
                "I don’t mind _______ with the cooking but I won’t wash the dishes.",
            options: ["To help", "for helping", "in helping", "helping"],
            answer: "helping",
        },
        {
            id: 738,
            question: "It _______ continuously since 6'O'clock this morning.",
            options: [
                "is raining",
                "has rained",
                "has been raining",
                "had been raining",
            ],
            answer: "has been raining",
        },
        {
            id: 739,
            question: "He will explain to you when he _______ back.",
            options: ["comes", "came", "come", "go"],
            answer: "comes",
        },
        {
            id: 740,
            question: "When we went to the cinema, the film _______",
            options: [
                "had already started",
                "has already stated",
                "was already started",
                "none",
            ],
            answer: "had already started",
        },
        {
            id: 741,
            question:
                "Choose the correct clause to complete the following sentence: If I fail in the examination _______",
            options: [
                "I give up my studies.",
                "I will give up my studies.",
                "I will have given up my studies.",
                "I gave up my studies.",
            ],
            answer: "I will give up my studies.",
        },
        {
            id: 742,
            question:
                "Choose the correct clause: As soon as he heard the news _______",
            options: [
                "he had written to me",
                "he wrote to me",
                "he will write to me",
                "none of these",
            ],
            answer: "he wrote to me",
        },
        {
            id: 743,
            question:
                "Choose the correct clause: You would look better, if _______",
            options: [
                "you cut your hair.",
                "you are cutting your hair.",
                "you will cut your hair.",
                "you would have cut your hair.",
            ],
            answer: "you cut your hair.",
        },
        {
            id: 744,
            question:
                "If I <u>knew</u> how to play the guitar, I <u>would play</u> it every day. Which of the following alternatives can replace the underlined parts in the above sentence to change the nature of the condition?",
            options: [
                "Had known, would have played.",
                "Had known, will have played.",
                "Had known, have played.",
                "Had known, would play.",
            ],
            answer: "Had known, would have played.",
        },
        {
            id: 745,
            question:
                "Pick out the sentence where the underlined word has been used as a verb.",
            options: [
                "The police were not satisfied with the <u>answer</u> of the culprit.",
                "The <u>answer</u> was not approved by any one.",
                "Ramesh always gives wrong <u>answer</u>.",
                "The boy could not <u>answer</u> all the questions.",
            ],
            answer: "The boy could not <u>answer</u> all the questions.",
        },
        {
            id: 746,
            question:
                "I am to seeing him tomorrow. Which of the following parts of the above sentence contains an error in it?",
            options: ["am", "to seeing", "him", "tomorrow"],
            answer: "to seeing",
        },
        {
            id: 747,
            question: "The drunk was very drunk. Identify the tense.",
            options: [
                "Simple present",
                "Simple past",
                "Past perfect",
                "Present perfect",
            ],
            answer: "Simple past",
        },
        {
            id: 748,
            question:
                "Choose from the alternatives, the sentence which is in perfect past tense:",
            options: [
                "She has been writing a letter.",
                "She had been writing a letter.",
                "She had written a letter.",
                "She has written a letter.",
            ],
            answer: "She had written a letter.",
        },
        {
            id: 749,
            question: "Choose the correct sentence from the following:",
            options: [
                "The train left before we reached the station.",
                "The train will leave before we reached the station.",
                "The train had left before we reached the station.",
                "The train was leaving before we reached the station.",
            ],
            answer: "The train had left before we reached the station.",
        },
        {
            id: 750,
            question:
                "Choose the correct option: I _______ the child a few minutes ago.",
            options: ["have seen", "has seen", "saw", "had seen"],
            answer: "saw",
        },
        {
            id: 751,
            question: "Choose the correct sentence:",
            options: [
                "I usually play tennis on weekends.",
                "I am usually playing tennis on weekends.",
                "I was usually playing tennis on weekends.",
                "None of the above",
            ],
            answer: "I usually play tennis on weekends.",
        },
        {
            id: 752,
            question: "Identify the grammatically correct sentence/s:",
            options: [
                "She leaves for London this evening.",
                "He is having a headache.",
                "She has finished her work an hour ago.",
                "It has been raining heavily since two hours.",
            ],
            answer: ["She leaves for London this evening."],
        },
        {
            id: 753,
            question:
                "Which of the following sentences may indicate a future event?",
            options: [
                "The movie starts in ten minutes.",
                "The sample is being sent for detailed examination.",
                "You should finish the work before you leave.",
                "I meet them at the hotel and we start off.",
            ],
            answer: ["The movie starts in ten minutes."],
        },
        {
            id: 754,
            question:
                "350 runs _______ quite a decent score. Fill in the blank with an acceptable form of the verb given below:",
            options: ["is", "are", "are being", "was become"],
            answer: "is",
        },
        {
            id: 755,
            question: "Mark out the incorrect sentence.",
            options: [
                "Barley, wheat, and rice are cereals.",
                "There are eggs and bacon for breakfast.",
                "Two pounds of coffee cost seven & six pence.",
                "The radio which you gave my children works perfectly.",
            ],
            answer: ["There are eggs and bacon for breakfast."],
        },
        {
            id: 756,
            question:
                "Pick out the correct fill in the blank: I did not know it until you _______",
            options: ["speaking", "were spoken", "speak", "spoke"],
            answer: "spoke",
        },
        {
            id: 757,
            question:
                "Choose an appropriate form of the verb to fill in the blank: She _______ in America since 1995.",
            options: [
                "lives",
                "is living",
                "have been living",
                "has been living",
            ],
            answer: "has been living",
        },
        {
            id: 758,
            question:
                "She jumped off the bus while it _______. Choose the correct alternative from the following to fill in the blank:",
            options: ["moved", "was moving", "had moved", "will be moving"],
            answer: "was moving",
        },
        {
            id: 759,
            question: "Choose the correct sentence from the following:",
            options: [
                "If he had studied hard, he was got a first class.",
                "If he had studied hard, he would have got a first class.",
                "If he had studied hard, he have got a first class.",
                "If he had studied hard, he would got a first class.",
            ],
            answer: "If he had studied hard, he would have got a first class.",
        },
        {
            id: 760,
            question:
                "Which of the following sentences is correct?\n(A) If I should do wrong, he would punish me.\n(B) If I did wrong, he would punish me.",
            options: [
                "Only (A)",
                "Only (B)",
                "Both (A) and (B)",
                "Neither (A) nor (B)",
            ],
            answer: "Both (A) and (B)",
        },
        {
            id: 761,
            question: "Universal truths are stated in _______",
            options: [
                "simple past tense",
                "simple future tense",
                "simple present tense",
                "past perfect continuous tense",
            ],
            answer: "simple present tense",
        },
        {
            id: 762,
            question:
                "Point out the sentence that has the correct use of tense.",
            options: [
                "I was getting up at 5 o'clock every morning.",
                "I got up at 5 o'clock every morning.",
                "I get up at 5 o'clock every morning.",
                "I am getting up at 5 o'clock every morning.",
            ],
            answer: "I get up at 5 o'clock every morning.",
        },
        {
            id: 763,
            question:
                "Choose the correct alternative to complete the sentence. How long has he been sleeping? He _______ for two hours.",
            options: [
                "has been sleeping",
                "was sleeping",
                "slept",
                "has slept",
            ],
            answer: "has been sleeping",
        },
        {
            id: 764,
            question:
                "Complete the sentence using the correct form of verb. If it _______ we shall stay at home. (rain)",
            options: ["rains", "will rain", "would rain", "had rain"],
            answer: "rains",
        },
        {
            id: 765,
            question:
                "Fill in the blank with the correct word from those given below: The municipal corporation _______ the old buildings to raise a new one.",
            options: ["changed", "destroyed", "hired", "replaced"],
            answer: "destroyed",
        },
        {
            id: 766,
            question: "Find out the correct sentence of future Perfect Tense:",
            options: [
                "I will have been complete this book by the end of the year.",
                "I will have completed this book by the end of the year.",
                "I will have been completing this book by the end of the year.",
                "I will be completing this book by the end of the year.",
            ],
            answer: "I will have completed this book by the end of the year.",
        },
        {
            id: 767,
            question:
                "Choose the correct alternative from the following to fill in the blank: I met Renu after I _______ my work.",
            options: [
                "finished",
                "have finished",
                "will have finished",
                "had finished",
            ],
            answer: "had finished",
        },
        {
            id: 768,
            question:
                "Choose the correct alternative from the following to fill in the blank: When I reached his house, he _______ a letter.",
            options: [
                "was writing",
                "had written",
                "is writing",
                "has been writing",
            ],
            answer: "was writing",
        },
        {
            id: 769,
            question:
                "Choose the correct form of verb from the following to fill in the blank: The news _______ at 7 O'clock every day.",
            options: ["came", "come", "comes", "coming"],
            answer: "comes",
        },
        {
            id: 770,
            question:
                "In which of the following sentences is future tense expressed?",
            options: [
                "The movie begins in a little while.",
                "Would you be kind enough to meet us after the lunch break?",
                "He is leaving for the UK this winter.",
                "You must take care of your studies.",
            ],
            answer: "The movie begins in a little while.",
        },
        {
            id: 771,
            question: "Choose the incorrect sentence/s:",
            options: [
                "When did you come back from Delhi?",
                "I have passed the B.A. degree examination in 1968.",
                "I passed the B.A. degree examination in 1968.",
            ],
            answer: "I have passed the B.A. degree examination in 1968.",
        },
        {
            id: 772,
            question:
                "Which of the following sentences may indicate a future event?",
            options: [
                "The show starts in a little while.",
                "He is being sent to the U.K. for further studies.",
                "They should report to the police immediately.",
                "We meet for a quick lunch and we start off.",
            ],
            answer: "The show starts in a little while.",
        },
        {
            id: 773,
            question:
                "Had they _______ (be) properly instructed, they would have _______ (shut) the windows. Use appropriate forms of the verbs in the bracket.",
            options: [
                "were, shut",
                "being, shut",
                "been, shut",
                "been, shutting",
            ],
            answer: "been, shut",
        },
        {
            id: 774,
            question:
                "Choose the correct option to fill in the blank: If you make a promise, you must be sure to _______ it.",
            options: ["accomplish", "keep", "follow", "succeed"],
            answer: "keep",
        },
        {
            id: 775,
            question:
                "Choose a suitable verb form: The train _______ at 6.30 p.m. every day.",
            options: ["arrives", "will arrive", "arriving", "would arrive"],
            answer: "arrives",
        },
        {
            id: 776,
            question:
                "Choose the right option: When I was a student, I _______ visit the library frequently.",
            options: ["would", "used to", "could", "none of these"],
            answer: "used to",
        },
        {
            id: 777,
            question:
                "Choose the correct alternative for the underlined word. I <u>am</u> the Secretary of the Sports Club since its formation five years ago.",
            options: ["was", "have been", "had been", "no improvement."],
            answer: "have been",
        },
        {
            id: 778,
            question:
                "Fill in the blank with the correct word: They frequently _______ us the same old story.",
            options: ["tale", "tail", "teal", "tell"],
            answer: "tell",
        },
        {
            id: 779,
            question:
                "Choose the most appropriate word for the blank in the sentence: She learned to _______ when she was eleven.",
            options: ["sow", "so", "sew", "none of these"],
            answer: "sew",
        },
        {
            id: 780,
            question:
                "Choose the correct verb from the alternatives. The Headmaster _______ to speak to you.",
            options: ["wanting", "was wanting", "wants", "is wanting"],
            answer: "wants",
        },
        {
            id: 781,
            question:
                "The past subjunctive is the hypothetical subjunctive. It is restricted to:",
            options: ["Shall", "Will", "Can", "Were"],
            answer: "Were",
        },
        {
            id: 782,
            question:
                "Choose the correct option to fill the blank in the sentence. If _______ late, my boss will fire me.",
            options: ["I was", "I is", "I fall", "I am"],
            answer: "I am",
        },
        {
            id: 783,
            question:
                "Fill in the blank with the suitable verb form: The dish _______ tasty, if a little less sugar was used in it. (be)",
            options: ["is", "were", "was", "are"],
            answer: "is",
        },
        {
            id: 784,
            question:
                "Choose the correct form of a verb from the following to fill in the blank: Either my brother or sister taken my pencil.",
            options: ["has", "have", "have to", "has to"],
            answer: "has",
        },
        {
            id: 785,
            question:
                "We shouted several times, but there _______ no answer. Choose the proper option to fill in the blank.",
            options: ["is", "are", "was", "were"],
            answer: "was",
        },
        {
            id: 786,
            question:
                "Use the correct form of the verbs given in the brackets: Tell him to bring his bicycle inside. If he (leave) it outside, someone (steal) it.",
            options: [
                "leaves and may steal",
                "will leave and may steal",
                "left and might steal",
                "had left and would have stolen",
            ],
            answer: "leaves and may steal",
        },
        {
            id: 787,
            question:
                "Identify the unit in which there is an error: A group of yachts (a) with brightly coloured banners flying in the wind (b) are entering the harbour. (c)",
            options: ["Only (a)", "Only (b)", "Only (c)", "No error"],
            answer: "Only (c)",
        },
        {
            id: 788,
            question: "Identify the correct sentence/s:",
            options: [
                "Fish and chips is not my favourite meal.",
                "Pen and ink has been displaced by the ballpoint.",
                "Bread and water was the vagrant’s staple diet in prison.",
            ],
            answer: "Fish and chips is not my favourite meal.",
        },
        {
            id: 789,
            question:
                "Which of the following statements is/are grammatically correct?",
            options: [
                "I leave for office in the next ten minutes.",
                "He is having many books in his personal library.",
                "She has met her son's teacher yesterday.",
                "They have been living in Mumbai since 15 years.",
            ],
            answer: "I leave for office in the next ten minutes.",
        },
        {
            id: 790,
            question:
                "Fill in the blank with the right form of the verb given in the brackets. The long festering issue of domestic helpers who are employed by the native Arabs _______ (create) a lot of animus among the two communities.",
            options: ["are creating", "were creating", "create", "has created"],
            answer: "has created",
        },
        {
            id: 791,
            question:
                "If you _______ (trust) me, you would have given me the keys. Fill the blank with the appropriate tense form of the verb given in the brackets.",
            options: [
                "trusted",
                "would have trusted",
                "had trusted",
                "would trust",
            ],
            answer: "had trusted",
        },
        {
            id: 792,
            question:
                "Fill in the blank space with the correct form of the verb given in the brackets: Had she seen him, she _______ (like) him.",
            options: [
                "may have liked",
                "would like",
                "would have liked",
                "should have liked",
            ],
            answer: "would have liked",
        },
        {
            id: 793,
            question:
                "If I _______ the race, I would have been congratulated by all. Select the correct alternative to complete the sentence.",
            options: ["win", "won", "have won", "had won"],
            answer: "had won",
        },
        {
            id: 794,
            question:
                "Which part of the sentence below contains an error? I never remember (a) to have (b) met this gentleman in Baroda. (c) No error (d)",
            options: ["a", "b", "c", "d"],
            answer: "b",
        },
        {
            id: 795,
            question:
                "The population of the world _______ very fast. Fill in the blank with an acceptable form of the verb given below:",
            options: ["rises", "has risen", "is rising", "has been risen"],
            answer: "is rising",
        },
        {
            id: 796,
            question:
                "The ancient Greeks _______ more by conversation with teachers than from books. Complete the sentence choosing the correct alternative.",
            options: ["study", "have studied", "studied", "had studied"],
            answer: "studied",
        },
        {
            id: 797,
            question:
                "The boys fled in great haste, for they _______ a snake. Complete the sentence choosing the correct alternative.",
            options: ["have seen", "have been", "saw", "had seen"],
            answer: "had seen",
        },
        {
            id: 798,
            question:
                "Which of the following sentences are grammatically correct?",
            options: [
                "The judge ordered that the accused be sent for a medical examination.",
                "Had I your intelligence, I would have gone abroad.",
                "Talk.",
                "If he was innocent, he would not have run away.",
            ],
            answer: "The judge ordered that the accused be sent for a medical examination.",
        },
        {
            id: 799,
            question: "Identify the grammatically correct sentences:",
            options: [
                "Except for her eyes, none of her features is remarkable.",
                "Except for her eyes, none of her features are remarkable.",
                "Except for her eyes, none of her features was remarkable.",
                "Except for her eyes, none of her features were remarkable.",
            ],
            answer: "Except for her eyes, none of her features is remarkable.",
        },
        {
            id: 800,
            question:
                "Choose the option to fill in the blank in the following sentence. Radha _______ six pillow-cases since seven O’clock this morning.",
            options: [
                "was making",
                "is making",
                "has made",
                "none of the above",
            ],
            answer: "has made",
        },
        {
            id: 801,
            question:
                "Choose the correct alternative from those given below: He will win the race if he _______ running regularly.",
            options: [
                "practises",
                "would practise",
                "will practise",
                "were to practise",
            ],
            answer: "practises",
        },
        {
            id: 802,
            question:
                "I am certain <u>of giving</u> you satisfaction. Select the correct alternative that could replace the phrase underlined.",
            options: [
                "that I shall give",
                "that I give",
                "that I might give",
                "about giving",
            ],
            answer: "that I shall give",
        },
        {
            id: 803,
            question: "Identify incorrect sentence/s.",
            options: [
                "a) Don't fail coming to the meeting.",
                "b) Have you decided to marry him?",
                "c) We must avoid to smoke.",
            ],
            answer: "a and c only",
        },
        {
            id: 804,
            question:
                "Fill in the blank with appropriate tense form. He _______ since 8 o'clock in the morning.",
            options: [
                "has been sleeping",
                "is sleeping",
                "was sleeping",
                "had slept",
            ],
            answer: "has been sleeping",
        },
        {
            id: 805,
            question:
                "Fill in the blank with the answer options given below: Either the children or the milkman _______ knocking at the door.",
            options: ["are", "is", "were", "have"],
            answer: "is",
        },
        {
            id: 806,
            question:
                "Spot the incorrect sentence where misrelated participle has been used.",
            options: [
                "a) After waiting in the queue for ten minutes the bus arrived completely full.",
                "b) After we had been waiting in the queue for ten minutes the bus arrived completely full.",
            ],
            answer: "Only a",
        },
        {
            id: 807,
            question:
                "In which of the following sentences does the subject agree correctly with the verb?",
            options: [
                "The cat, unlike dogs, has soft paws.",
                "The cat, unlike dogs, have soft paws.",
                "The cat, unlike dogs, is having soft paws.",
                "The cat, unlike dugs, had soft paws.",
            ],
            answer: "The cat, unlike dogs, has soft paws.",
        },
        {
            id: 808,
            question: "Choose the correct sentences.",
            options: [
                "a) Hoping for good news, we telephoned the hospital.",
                "b) Distracted by the noise, our driver was taken the wrong road.",
                "c) The mechanics started to repairing the engine.",
            ],
            answer: "a only",
        },
        {
            id: 809,
            question: "Identify the correct sentence/s.",
            options: [
                "a) I am not understanding this letter.",
                "b) She arrived at the theatre at 6 pm but the film had already started.",
                "c) If I get any news, I'll tell you.",
            ],
            answer: "b and c only",
        },
        {
            id: 810,
            question: "Identify the correct sentence/s.",
            options: [
                "a) Kapil has been playing cricket for several years.",
                "b) After depositing the fee to the hostel the boys went.",
                "c) These girls have been singing nicely.",
                "d) He is now playing a match.",
            ],
            answer: "Only a and c",
        },
        {
            id: 811,
            question:
                "Choose the correct alternatives to fill in the blanks in the given sentences.",
            options: [
                "a. I have spoken to him on the subject many times.",
                "b. I have been speaking to him for ten minutes.",
            ],
            answer: "Have, have been",
        },
        {
            id: 812,
            question:
                "Fill the blanks from the options given below. It _______ already _______ raining when I _______ an umbrella.",
            options: [
                "stopped, brought, had",
                "had, brought, stopped",
                "brought, stopped, had",
                "had, stopped, brought",
            ],
            answer: "had, stopped, brought",
        },
        {
            id: 813,
            question:
                "Choose the correct option to fill in the blank: My eyes are aching now because I _______ since morning.",
            options: ["am reading", "have read", "have been reading", "read"],
            answer: "have been reading",
        },
        {
            id: 814,
            question: "Choose the correct sentence/s.",
            options: [
                "a) We too have been wanting to see you.",
                "b) We too have wanting to see you.",
                "c) I haven’t been seeing such a lovely place.",
            ],
            answer: "a only",
        },
        {
            id: 815,
            question:
                "We <u>are going</u> to discuss all the issues in detail. The underlined expression in the sentence above reveals _______.",
            options: [
                "definite future",
                "immediate future",
                "remote future",
                "possible future",
            ],
            answer: "definite future",
        },
        {
            id: 816,
            question: "Identify the sentence/s grammatically incorrect.",
            options: [
                "a) Raju completes his course next year.",
                "b) We have just eaten two mangoes.",
                "c) I have studied this topic for three hours.",
            ],
            answer: "Only a",
        },
        {
            id: 817,
            question: "Identify the sentence grammatically correct:",
            options: [
                "1) We knew that India would win the match.",
                "2) We knew that India will win the match.",
                "3) We know that India would win the match.",
                "4) We knew that India can win the match.",
            ],
            answer: "We knew that India would win the match.",
        },
        {
            id: 818,
            question:
                "The following sentence has an error, correct it by choosing an appropriate alternative: 'She is sitting in the library since 3 O' clock.'",
            options: [
                "She was sitting in the library since 3 O' clock.",
                "She had been sitting in the library since 3 O' clock.",
                "She has been sitting in the library since 3 O' clock.",
                "She is sitting in the library for 3 O' clock.",
            ],
            answer: "She has been sitting in the library since 3 O' clock.",
        },
        {
            id: 819,
            question:
                "Fill in the blank with the correct form of the tense given in bracket. Reena did not go to school yesterday as she _______ (finish) her homework.",
            options: [
                "had not finished",
                "have not finished",
                "has not finished",
                "will not finished",
            ],
            answer: "had not finished",
        },
        {
            id: 820,
            question: "Choose the correct sentences:",
            options: [
                "a) If it rains, we’ll cancel the match.",
                "b) If it rained, we’d cancel the match.",
                "c) If it will rain, we’ll cancel the match.",
            ],
            answer: "(a) and (b) only",
        },
        {
            id: 821,
            question: "Which of the following sentence/s is/are correct:",
            options: [
                "(a) If I had known that you were coming, I have met you at the airport.",
                "(b) If I had known that you were coming, I have meet you at the airport.",
                "(c) If I had known that you were coming, I would have met you at the airport.",
                "(d) If I had known that you were coming, I would have meet you at the airport.",
            ],
            answer: "(c) and (a)",
        },
        {
            id: 822,
            question: "Fill in the blanks:",
            options: [
                "study, bought, ask",
                "study, bought, asked",
                "studying, buy, had asked",
                "studied, buy, had asked",
            ],
            answer: "studied, buy, had asked",
        },
        {
            id: 823,
            question: "Identify the correct sentence.",
            options: [
                "a) It was sure that I had met him before.",
                "b) On my last visit to Wixton I found that the village didn’t change much.",
                "c) She admitted that she has stolen the watch.",
            ],
            answer: "Only (b)",
        },
        {
            id: 824,
            question:
                "Use the correct tense form of the given verb: Look, there she _______ (come)!",
            options: ["coming", "is coming", "comes", "has been coming"],
            answer: "is coming",
        },
        {
            id: 825,
            question:
                "If he has time, <u>he would telephone.</u> Which one of the following sentences corrects the underlined main clause in the sentence above?",
            options: [
                "If he has time, he should telephone.",
                "If he has time, he will telephone.",
                "If he has time, he shall telephone.",
                "If he has time, he has to telephone.",
            ],
            answer: "If he has time, he will telephone.",
        },
        {
            id: 826,
            question:
                "The barber has cut my hair very short. Identify the correct progressive future tense form of the above sentence.",
            options: [
                "The barber is cutting my hair very short.",
                "The barber will have cut my hair very short.",
                "The barber will be cutting my hair very short.",
                "The barber had cut my hair very short.",
            ],
            answer: "The barber will be cutting my hair very short.",
        },
        {
            id: 827,
            question: "Choose the correct sentences/s:",
            options: [
                "a) We have lived in the village since 1987.",
                "b) We have been living in the village since 1987.",
                "c) We are living in the village since 1987.",
            ],
            answer: "both a and b",
        },
        {
            id: 828,
            question:
                "Study the following statement/s and answer: Tense is the form of the verb used to indicate _______.",
            options: [
                "only a is true",
                "only b is true",
                "only c is true",
                "all statements a, b, and c are true",
            ],
            answer: "all statements a, b, and c are true",
        },
        {
            id: 829,
            question:
                "'She <u>works</u> in Mumbai' In the above sentence, the underlined word denotes _______",
            options: [
                "present state",
                "present habit",
                "temporary present",
                "temporary habit",
            ],
            answer: "present habit",
        },
        {
            id: 830,
            question: "Which of the sentences are correct?",
            options: [
                "a) If a bear embraced you, you are crushed to death.",
                "b) If he asked me, I should marry him.",
                "c) We shall be excited if we let our imaginations run away with what might have happened?",
            ],
            answer: "a and b only",
        },
        {
            id: 831,
            question:
                "We have lived in this house since 1952. The use of perfect tense in the above sentence is called _______",
            options: [
                "the resultative use",
                "the perfect of experience",
                "the continuative use",
                "the inclusive use",
            ],
            answer: "the continuative use",
        },
        {
            id: 832,
            question:
                "a. She got up when the alarm clock went off. b. We visited Spain three times last year. Choose the correct sentence from the options given above.",
            options: [
                "Both the sentences are incorrect",
                "Only a is correct",
                "Only b is correct",
                "Both the sentences are correct",
            ],
            answer: "Both the sentences are correct",
        },
        {
            id: 833,
            question: "Which of the following sentence/s is/are correct?",
            options: [
                "If we had found him earlier we have to save his life.",
                "If we had found him earlier we might have saved",
                "If we have found him earlier we might save his life.",
                "If we will find him earlier we may have saved his life.",
            ],
            answer: "If we had found him earlier we might have saved",
        },
        {
            id: 834,
            question: "Choose the correct sentence:",
            options: [
                "The costs of all necessaries has gone up.",
                "The cost of all necessaries has gone up.",
                "The cost of all necessaries have gone up.",
                "The costs of all necessaries have went up.",
            ],
            answer: "The cost of all necessaries has gone up.",
        },
        {
            id: 835,
            question: "Choose the correct sentence.",
            options: [
                "She wishes the car belonged to you.",
                "She wished the car belongs to you.",
                "She is wishing the car belonged to you.",
                "She wishes the car is belonging to you.",
            ],
            answer: "She wishes the car belonged to you.",
        },
        {
            id: 836,
            question: "Identify the correct sentence/s:",
            options: [
                "The Machine Gunners was one of Robert Westall’s most successful books.",
                "Among the people invited was the mayor.",
                "They have been playing since four O’clock.",
            ],
            answer: "(b) and (c)",
        },
        {
            id: 837,
            question: "Point out the incorrect sentence.",
            options: [
                "Neither Indian or Pakistan is guilty of enmity that operates at the unconscious level of mind.",
                "Ninety kilometers is a long distance for a bicycle ride.",
                "Your daughter and mine are quarrelling at the garden.",
                "Corrupt political leaders shed crocodile tears on the death of a good citizen.",
            ],
            answer: "Your daughter and mine are quarrelling at the garden.",
        },
        {
            id: 838,
            question: "Choose the sentence/s incorrect",
            options: [
                "I have not played cricket since I have left college.",
                "I have not played cricket since I left college.",
            ],
            answer: "I have not played cricket since I have left college.",
        },
        {
            id: 839,
            question:
                "We _______ our hotel before it started raining. Which one of the following verb forms expresses the active in Past Perfect in the sentence above?",
            options: [
                "reached",
                "had reached",
                "were reaching",
                "tries to reach",
            ],
            answer: "had reached",
        },
        {
            id: 840,
            question:
                "a) They are preparing lessons for the ensuing examinations. b) Ranjan is doing this important work for the last five days. c) The examinees stopped writing when the invigilator entered the hall. Identify the sentence/s grammatically correct.",
            options: [
                "Only (a) and (b)",
                "Only (b) and (c)",
                "Only (b)",
                "Only (a)",
            ],
            answer: "Only (a)",
        },
        {
            id: 841,
            question:
                "He worked hard that he might pass the examination. Choose the correct simple sentence form of the above sentence.",
            options: [
                "He worked hard and passed the examination.",
                "He worked hard to pass the examination.",
                "He worked hard so that he could pass the examination.",
                "If you work hard you may pass the examination.",
            ],
            answer: "He worked hard so that he could pass the examination.",
        },
        {
            id: 842,
            question:
                "Identify underlined tense form in the given example: e.g. The train will have left by the time you reach the station.",
            options: [
                "simple future",
                "past perfect",
                "future perfect",
                "present perfect",
            ],
            answer: "future perfect",
        },
        {
            id: 843,
            question:
                "a) If we had acted wisely there would have been no partition. b) When the Sun rises birds came out of their nests. c) If he had strength he could have carried his luggage. d) The college bell rings when it strikes ten. Identify the grammatically correct sentence/s.",
            options: [
                "Only (a) and (d)",
                "Only (b) and (d)",
                "Only (a) and (c)",
                "Only (b)",
            ],
            answer: "Only (a) and (d)",
        },
        {
            id: 844,
            question:
                "a) This passenger train is about to leave the station. b) This passenger train is on the point of leaving the station. c) This passenger train is going to leave the station. d) This passenger train might leave the station soon. All the above sentences express the action in the _______",
            options: [
                "Simple present tense",
                "Continuous present tense",
                "Perfect future tense",
                "Simple future tense",
            ],
            answer: "Simple future tense",
        },

        {
            id: 845,
            question:
                "Tick mark affirmative sentence of the following. He is not your enemy.",
            options: [
                "He is your friend.",
                "He is your enemy.",
                "He is not your friend.",
                "none",
            ],
            answer: "He is your friend.",
        },
        {
            id: 846,
            question: "Choose the imperative sentence from the options.",
            options: [
                "Don’t you spit here please?",
                "You fire!",
                "Please, you start writing from here",
                "Stand up on the desk.",
            ],
            answer: "Stand up on the desk.",
        },
        {
            id: 847,
            question: "Which of the following is an imperative mood?",
            options: [
                "He made it difficult.",
                "Have you written a letter?",
                "I wish I were a doctor.",
                "Have mercy upon us.",
            ],
            answer: "Have mercy upon us.",
        },
        {
            id: 848,
            question: "People are really good at heart. Make interrogative.",
            options: [
                "People are really good.",
                "How a good at heart people are!",
                "People are not good at heart.",
                "Aren’t people really good at heart?",
            ],
            answer: "Aren’t people really good at heart?",
        },
        {
            id: 849,
            question:
                '"Rajan will meet Umesh at the shop in the evening to deliver the message." Which "Wh word should the question begin with to get the underlined word as answer?',
            options: ["Who", "Whom", "Where", "Why"],
            answer: "Whom",
        },
        {
            id: 850,
            question:
                "Choose the correct alternative : _______ so many books? How are you going to read them?",
            options: [
                "Need you to buy",
                "Need you buy",
                "Must you need buy",
                "Need you have to buy",
            ],
            answer: "Need you buy",
        },
        {
            id: 851,
            question:
                "Read the answer options and recognise the type of sentence given : Let him be taken away.",
            options: [
                "Active - Imperative",
                "Active - Exclamatory",
                "Passive - Statement",
                "Passive - Imperative",
            ],
            answer: "Passive - Imperative",
        },
        {
            id: 852,
            question:
                "‘How tall you have grown!” What kind of sentence is this?",
            options: [
                "Declarative",
                "Interrogative",
                "Imperative",
                "Exclamatory",
            ],
            answer: "Exclamatory",
        },
        {
            id: 853,
            question:
                "“What piece of work is man!” Identify the type of the sentence correctly.",
            options: [
                "Wonderful",
                "Interrogative",
                "Affirmative",
                "Exclamatory",
            ],
            answer: "Exclamatory",
        },
        {
            id: 854,
            question:
                "What is your father? Choose the suitable answer from the following as per the sense of the question.",
            options: [
                "My father is Mr. X.Y. Patil.",
                "My father is a professor.",
                "My father is tall.",
                "My father is very poor.",
            ],
            answer: "My father is a professor.",
        },
        {
            id: 855,
            question: "Imperative sentences are used to _______",
            options: [
                "express wonder / fear",
                "make a request",
                "ask a question",
                "issue a command / an order",
            ],
            answer: "issue a command / an order",
        },
        {
            id: 856,
            question: "Which of the question is/are correctly framed?",
            options: [
                "Why they are talking so loudly?",
                "Who is she going to marry?",
                "Who she is going to marry?",
            ],
            answer: "Who is she going to marry?",
        },
        {
            id: 857,
            question:
                "What would be the right question for getting the underlined word as answer? Rahul told Saurav to meet him at the station in the evening.",
            options: [
                "What did Rahul tell Saurav?",
                "Who did Rahul want to meet?",
                "Whom did Rahul talk to?",
                "Who did Rahul talk to?",
            ],
            answer: "Who did Rahul talk to?",
        },
        {
            id: 858,
            question:
                "Identify the kind of sentence given below : She must weep or she will die.",
            options: [
                "Simple sentence",
                "Command sentence",
                "Complex sentence",
                "Compound sentence",
            ],
            answer: "Compound sentence",
        },
        {
            id: 859,
            question: "Identify incorrect sentence/s.",
            options: [
                "We may have some coffee?",
                "Please, you may post this letter for me?",
                "You may take off your hat, I can't see the screen.",
            ],
            answer: "We may have some coffee?",
        },
        {
            id: 860,
            question:
                "Please vote for the member _______ has done the most for our village. Select from the choices the best group of words (phrase) to make the sentence grammatically correct.",
            options: [
                "whom you believe",
                "who you believed",
                "that you believe",
                "who you believe",
            ],
            answer: "who you believe",
        },
        {
            id: 861,
            question: "Choose the correct sentence/s.",
            options: [
                "The lecturer could not understand the question.",
                "I could get my B.A. degree although I got ill two weeks before the examination.",
                "I was able to get my B.A. degree although I got ill two weeks before the examination.",
            ],
            answer: "The lecturer could not understand the question.",
        },
        {
            id: 862,
            question: "Kindly help me. The above sentence is:",
            options: [
                "Assertive",
                "Imperative",
                "Interrogative",
                "Exclamatory",
            ],
            answer: "Imperative",
        },
        {
            id: 863,
            question:
                "Identify the option closest in meaning to the sentence given below : I request that meeting should be postponed.",
            options: [
                "I request to postpone the meeting",
                "I request postponement of the meeting.",
                "I requested to postpone the meeting.",
                "I requested postponement of the meeting.",
            ],
            answer: "I request postponement of the meeting.",
        },
        {
            id: 864,
            question: "Identify the sentence(s) in imperative mood:",
            options: ["God bless you.", "Long live the king.", "Hurry up!"],
            answer: "Hurry up!",
        },
        {
            id: 865,
            question: "Identify the correct sentence.",
            options: [
                "John looks good before he leaps.",
                "John looks well before he leaps.",
            ],
            answer: "John looks good before he leaps.",
        },
        {
            id: 866,
            question:
                "Keep to the left. The imperative structure above expresses _______",
            options: ["a command", "a solemn advice", "a prayer", "a petition"],
            answer: "a command",
        },
        {
            id: 867,
            question:
                "Which of the following is an example of a statement expressing imperative mood?",
            options: [
                "We are taught Sanskrit",
                "The child is alive.",
                "He walks as though he were drunk.",
                "Give us this day our daily bread.",
            ],
            answer: "Give us this day our daily bread.",
        },
        {
            id: 868,
            question:
                "He said, “I shall go there today.’ Change this sentence into the indirect form.",
            options: [
                "He said that he should go there that day.",
                "He said that he would go there that day.",
                "He said that he should go there today.",
                "He said that he would go there today.",
            ],
            answer: "He said that he would go there that day.",
        },
        {
            id: 869,
            question:
                "He said, “The man has been coming.” The correct indirect narration is _______",
            options: [
                "He said the man was coming.",
                "He said that the man had been coming.",
                "He said that the man have been coming.",
                "He told that the man has been coming.",
            ],
            answer: "He said that the man had been coming.",
        },
        {
            id: 870,
            question:
                "Change the following into indirect speech. He says, “It is a fine day”",
            options: [
                "He said it is a fine day.",
                "He said that it was a fine day.",
                "He says that it was a fine day.",
                "He says that it is a fine day.",
            ],
            answer: "He says that it is a fine day.",
        },
        {
            id: 871,
            question:
                "Choose the correct alternative of Reported speech. Rahul said, 'I go home every day'.",
            options: [
                "Rahul pleaded he goes home every day.",
                "Rahul exclaimed he would go home every day.",
                "Rahul shouted he has to go home every day.",
                "Rahul said that he went home every day.",
            ],
            answer: "Rahul said that he went home every day.",
        },
        {
            id: 872,
            question:
                "Choose the correct reported speech of the following sentence : He said, 'I can write a book on grammar.'",
            options: [
                "He said that he can write a book on grammar.",
                "He said that he wrote a book on grammar.",
                "He said that he will be writing a book on grammar.",
                "He said that he could write a book on grammar.",
            ],
            answer: "He said that he could write a book on grammar.",
        },
        {
            id: 873,
            question:
                "Ram says, 'I will not go’. 'Which of the following options would represent the above sentence in indirect narration?",
            options: [
                "Ram says that he will not go.",
                "Ram says that he won’t go.",
                "Ram said that he will not go.",
                "Ram said that he would not go.",
            ],
            answer: "Ram says that he will not go.",
        },
        {
            id: 874,
            question:
                "Choose the correct indirect form from the given alternatives : Neha said, 'virtue is its own reward.'",
            options: [
                "Neha said that virtue was its own reward.",
                "Neha said that virtue is its own reward.",
                "Neha said that virtue will be its own reward.",
                "Neha said that virtue has been its own reward.",
            ],
            answer: "Neha said that virtue is its own reward.",
        },
        {
            id: 875,
            question:
                "'Mr. Joshi', she said, 'this is Mr. Varma. Mr.Varma, Mr. Joshi'. Put into indirect speech, the sentences should be:",
            options: [
                "She introduced Mr. Joshi and Mr. Varma to each other.",
                "She said Mr. Joshi that that was Mr. Varma., She said Mr. Varma that Mr. Joshi.",
                "She told Mr. Joshi that that was Mr. Varma. She told Mr. Varma that Mr. Joshi.",
                "She told Mr. Joshi that that was Mr. Varma. She told Mr. Varma that that was Mr. Joshi.",
            ],
            answer: "She introduced Mr. Joshi and Mr. Varma to each other.",
        },
        {
            id: 876,
            question:
                "'Eek! There's a fly in the soup, Waiter!' screamed Sarita. Put into indirect speech, the sentence should be:",
            options: [
                "Sarita screamed that eek, there was a fly in “the soup. She added waiter.",
                "Sarita screamed at the waiter that there was a fly in the soup.",
                "Sarita saw a fly in her soup and screamed for the waiter.",
                "Sarita saw a fly in the soup and screamed at the waiter.",
            ],
            answer: "Sarita screamed at the waiter that there was a fly in the soup.",
        },
        {
            id: 877,
            question:
                "Choose the correct option and change the following into indirect speech. He said, 'I have read this novel.'",
            options: [
                "He said that he had read that novel.",
                "He said that he red this novel.",
                "He said that he has read this novel.",
                "He said that he had been reading this novel.",
            ],
            answer: "He said that he had read that novel.",
        },
        {
            id: 878,
            question:
                "Rewrite the following as reported speech : 'You woke everyone up last night,' said my mother. 'You must try to be quieter tonight.'",
            options: [
                "My mother said that we had woken everyone up the previous night, and that we must try to be quieter the next night.",
                "My mother told that we had woken everyone up the previous night, and that we must try to be quieter that night.",
                "My mother told to me that we had woken everyone up the previous night, and that we must try to be quieter that night.",
                "My mother said that we had woken everyone up the previous night, and that we must try to be quieter that night.",
            ],
            answer: "My mother said that we had woken everyone up the previous night, and that we must try to be quieter that night.",
        },
        {
            id: 879,
            question:
                "You said to her, 'I have called my friends.' Select the correct indirect narration of the above sentence.",
            options: [
                "You said to her that I have called my friends.",
                "You told to her that I had called my friends.",
                "You told her that you have called my friends.",
                "You told her that you had called your friends.",
            ],
            answer: "You told her that you had called your friends.",
        },
        {
            id: 880,
            question:
                "Convert the sentence into indirect speech : The prince said, 'It gives me great pleasure to be here this evening.'",
            options: [
                "The prince says, that it gives him great pleasure to be here that evening.",
                "The prince said that it gave him great pleasure to be there that evening.",
                "The prince said, that it gave him great pleasure to be there that evening.",
                "The prince said that it gives him great pleasure to be there that evening.",
            ],
            answer: "The prince said that it gave him great pleasure to be there that evening.",
        },
        {
            id: 881,
            question:
                "The following sentences are on the same theme, but only one sentence is grammatically correct. Choose the correct sentence.",
            options: [
                "The students were taught that the earth moved round the sun.",
                "The students were taught that the earth is moving round the sun.",
                "The students were taught that the earth moves around the sun.",
                "The students were taught that the earth would move round the sun.",
            ],
            answer: "The students were taught that the earth moves around the sun.",
        },
        {
            id: 882,
            question:
                "Change the following into indirect speech : She said to him, 'I know you.'",
            options: [
                "She said to him that I knew him.",
                "She said to him that she knew me.",
                "She said to him that she knew him.",
                "She said to him that she knows him.",
            ],
            answer: "She said to him that she knew him.",
        },
        {
            id: 883,
            question:
                "The sun rises in the east,” he said. Which of the following sentence/s /is / are correct indirect narration of the above sentence:",
            options: [
                "He told me that the sun rises in the east.",
                "He told me that the sun rose in the east.",
                "He tells me that the sun rises in the east.",
                "He tells me that the sun rose in the east.",
            ],
            answer: "He told me that the sun rises in the east.",
        },
        {
            id: 884,
            question:
                "'You should take the job, Frank.' Said Lee, Select the most appropriate indirect narration of the above sentence.",
            options: [
                "Lee said that Frank should take the job.",
                "Lee suggested that Frank should take the job.",
                "Lee encouraged Frank to take the job.",
                "Lee said to Frank that he should have taken the job.",
            ],
            answer: "Lee encouraged Frank to take the job.",
        },
        {
            id: 885,
            question:
                "Change the following sentence into indirect speech : He said, 'The horse died in the night.'",
            options: [
                "He said that the horse died in the night.",
                "He says that the horse died in the night.",
                "He said that the horse was died in the night.",
                "He said that the horse had died in the night.",
            ],
            answer: "He said that the horse had died in the night.",
        },
        {
            id: 886,
            question:
                "Choose the correct indirect narration of the following sentence. Hari said to him, 'I shall not come to you tomorrow.'",
            options: [
                "Hari told him that he would not come to him the next day.",
                "Hari told him that he would not come to him tomorrow.",
                "Hari told him that he would not go to him the next day.",
                "Hari said to him that I should not go to you tomorrow.",
            ],
            answer: "Hari told him that he would not come to him the next day.",
        },
        {
            id: 887,
            question:
                "Choose the correct indirect speech of the following sentence : He said, 'I was writing letters.'",
            options: [
                "He said that he was writing letters.",
                "He said that he had been writing letters.",
                "He told that he was writing letters.",
                "He said that he had written letters.",
            ],
            answer: "He said that he had been writing letters.",
        },
        {
            id: 888,
            question:
                "Jenny said: a) 'My parents are very well.' b) 'I can't come to the party tomorrow.' c) 'I don't have much free time.' d) 'I will phone you when I get back.'",
            options: [
                "Jenny said that her parents were very well. She said that she could not come to the party tomorrow.",
                "Jenny said that she had no much free time. She said that she would phone you when I get back.",
                "Jenny said that her parents were very well. She said that she had no much free time.",
                "Jenny said that she could not come to the party tomorrow. She said that she would phone you when I get back.",
            ],
            answer: "Jenny said that her parents were very well. She said that she could not come to the party tomorrow.",
        },
        {
            id: 889,
            question:
                "Identify the correct indirect expression from the following: (a) He says that I have done my duty. (b) He said that he has done his duty. (c) He said that he had done his duty. (d) He said whether he has done his duty.",
            options: ["(a) and (b)", "Only (c)", "(b) and (d)", "Only (d)"],
            answer: "Only (c)",
        },
        {
            id: 890,
            question:
                "He said, 'I went to my friend’s house yesterday.' Identify the sentence written in correct indirect narration.",
            options: [
                "He said that he had gone to his friend’s house yesterday.",
                "He said that he had gone to his friend’s house the day before.",
                "He told he had went to his friend’s house the day before.",
                "He informed that he went to his friend’s house the previous day.",
            ],
            answer: "He said that he had gone to his friend’s house the day before.",
        },
        {
            id: 891,
            question:
                "Choose correct sentence in indirect speech of the given sentence. The Sub-inspector told the constable, 'You shall do extra duty for three days.'",
            options: [
                "The Sub-inspector told the constable You should do extra duty for three days.",
                "The Sub-inspector told the constable that he should do extra duty for three days.",
                "The Sub-inspector told the constable that he shall do extra duty for three days.",
                "The Sub-inspector asked the constable that he shall do extra duty for three days.",
            ],
            answer: "The Sub-inspector told the constable that he should do extra duty for three days.",
        },
        {
            id: 892,
            question:
                "Complete the following sentence. 'The watchman asked the stranger ______",
            options: [
                "What was he?",
                "When he was.",
                "Who he was.",
                "Who was he?",
            ],
            answer: "Who he was.",
        },
        {
            id: 893,
            question:
                "Select the correct Indirect form of following sentence. The teacher asked me, 'Why were you absent yesterday?'",
            options: [
                "The teacher said to me why I had been absent yesterday.",
                "The teacher asked me why I was absent yesterday.",
                "The teacher asked me why I had been absent the previous day.",
                "The teacher asked me why I were absent the day before.",
            ],
            answer: "The teacher asked me why I had been absent the previous day.",
        },
        {
            id: 894,
            question:
                "Choose the correct indirect form of given sentence. He said, 'How do you manage to finish your work always in time?'",
            options: [
                "He inquired how I managed to finish my work always in time.",
                "He asked me how did I manage to finish my work always in time.",
                "He demanded that how do I manage to finish my work always in time.",
                "He questioned me as to how did I manage to finish my work always in time.",
            ],
            answer: "He inquired how I managed to finish my work always in time.",
        },
        {
            id: 895,
            question: "'Where do you live?' asked the stranger.",
            options: [
                "The stranger asked where do you live?",
                "The stranger asked where do I live?",
                "The stranger asked where I lived.",
                "The stranger asked where he lives.",
            ],
            answer: "The stranger asked where I lived.",
        },
        {
            id: 896,
            question:
                "She said to me, 'What can I do for you?' Change into indirect speech.",
            options: [
                "She asked me affectionately what she could do for me.",
                "She said me that what can she do for me.",
                "She said that what she do for me.",
                "None.",
            ],
            answer: "She asked me affectionately what she could do for me.",
        },
        {
            id: 897,
            question:
                "Change the following into indirect speech : He said to me, 'Where are you going?'",
            options: [
                "He told me where was I going.",
                "He asked me that where was I going?",
                "He asked me where I was going.",
                "He asked to me where I was going.",
            ],
            answer: "He asked me where I was going.",
        },
        {
            id: 898,
            question:
                "In indirect speech, how would the following sentence read? 'Why are you peeping through the keyhole?' I said.",
            options: [
                "I said, why you are peeping through the keyhole?",
                "I said him why you have to peep through keyhole?",
                "I asked you are peeping through keyhole why?",
                "I asked him why he was peeping through the keyhole?",
            ],
            answer: "I asked him why he was peeping through the keyhole?",
        },
        {
            id: 899,
            question:
                "Which is the correct indirect speech of the following sentence? Mohit said, 'Where did they park the car?'",
            options: [
                "Mohit said that where they had parked the car.",
                "Mohit enquired where they had parked the car.",
                "Mohit asked that where they had parked the car.",
                "Mohit wanted to know where they had parked the car.",
            ],
            answer: "Mohit enquired where they had parked the car.",
        },
        {
            id: 900,
            question: "He said, 'How many books are there in the cupboard?'",
            options: [
                "He asked how many books were there in the cupboard.",
                "He asked how many books are there in the cupboard.",
                "He asked that how many books are there in the cupboard.",
                "He asked that how many books were here in the cupboard.",
            ],
            answer: "He asked how many books were there in the cupboard.",
        },
        {
            id: 901,
            question:
                "Change into Indirect Speech : She said to him, 'What is it that makes you so much stronger and braver than any other man?'",
            options: [
                "She asked him what it was that made him so much stronger and braver than any other man.",
                "She asked him that what was it that made him so braver and stronger than any other man.",
                "She said him that what was that, that made him so braver and stronger than any other man.",
                "She stated him that what was that, that made him so braver and stronger than any other man.",
            ],
            answer: "She asked him what it was that made him so much stronger and braver than any other man.",
        },
        {
            id: 902,
            question:
                "Joya said to the girl, 'Why are you crying?' Point out the correct indirect narration.",
            options: [
                "Joya said to the girl why she is crying.",
                "Joya asked the girl why she was crying.",
                "Joya inquired of the girl why was she crying.",
                "Joya asked the girl to cry.",
            ],
            answer: "Joya asked the girl why she was crying.",
        },
        {
            id: 903,
            question:
                "Point out the correct indirect narration of the following sentence : My mother said to Malati, 'Why are you nervous today?'",
            options: [
                "My mother asked Malati whether she was nervous yesterday.",
                "My mother asked Malati why she nervous that day.",
                "My mother asked Malati why she was nervous that day.",
                "My mother asked Malati if she was nervous yesterday.",
            ],
            answer: "My mother asked Malati why she was nervous that day.",
        },
        {
            id: 904,
            question:
                "He said to me, 'Why did you strike me?' Select the correct indirect narration of the above sentence.",
            options: [
                "He inquired to me why did I strike him.",
                "He inquired of me why I had struck him.",
                "He asked me why did I strike him.",
                "He said me that why I struck him.",
            ],
            answer: "He inquired of me why I had struck him.",
        },
        {
            id: 905,
            question:
                "'When shall I know the result of the test?' she asked. Select the correct indirect narration of the above sentence.",
            options: [
                "She asked when she would know the result of the test.",
                "She asked when would she know the result of the test.",
                "She asked if she would know the result of the test.",
                "She asked whether she knew the result of the test.",
            ],
            answer: "She asked when she would know the result of the test.",
        },
        {
            id: 906,
            question:
                "Choose the correct alternative to complete the sentence. 'Geeta asked Rita whether ______'",
            options: [
                "She is going with her for a swim.",
                "She will be going with her for a swim.",
                "She were going with her for a swim.",
                "She was going with her for a swim.",
            ],
            answer: "She was going with her for a swim.",
        },
        {
            id: 907,
            question: "He said to him, 'Is not your name Ahmed?'",
            options: [
                "He asked to him if his name was Ahmed.",
                "He questioned to him whether whose name was Ahmed.",
                "He enquired whether his name was not Ahmed.",
                "He asked to him if his name were Ahmed.",
            ],
            answer: "He enquired whether his name was not Ahmed.",
        },
        {
            id: 908,
            question: "‘Have you finished the job, David,’ asked John.",
            options: [
                "John asked David if he had finished the job.",
                "John asked David why he had finished the job.",
                "John asked David that you have finished the job.",
                "John asked David it if has finished the job.",
            ],
            answer: "John asked David if he had finished the job.",
        },
        {
            id: 909,
            question:
                "Two students asked each other about their studies and one said to another, 'Have you finished your tutorial?'",
            options: [
                "Two students asked each other about their studies and one asked another you had finished your work.",
                "Two students asked each other about their studies and one asked another if he had finished his work.",
                "Two students asked each other about their studies and one asked another had you finished your work.",
                "Two students asked each other about their studies and one asked another if you have finished your work.",
            ],
            answer: "Two students asked each other about their studies and one asked another if he had finished his work.",
        },
        {
            id: 910,
            question:
                "Which is the correct indirect narration of the following sentence? The King said to his minister, 'Are these my brave heroes?'",
            options: [
                "The king asked his minister if those were his brave heroes.",
                "The king asked his minister that those were his brave heroes.",
                "The king told his minister those were his brave heroes.",
                "The king ordered his minister if those were his brave heroes.",
            ],
            answer: "The king asked his minister if those were his brave heroes.",
        },
        {
            id: 911,
            question: "I asked him, 'Do you read plays?'",
            options: [
                "None",
                "I asked him whether he read plays.",
                "I told him to read plays.",
                "I enquired him about reading plays.",
            ],
            answer: "I asked him whether he read plays.",
        },
        {
            id: 912,
            question: "John asked Mary whether ______",
            options: [
                "she is accompanying him.",
                "she accompanying him.",
                "She would accompany him.",
                "she will have been accompanying him.",
            ],
            answer: "She would accompany him.",
        },
        {
            id: 913,
            question:
                "Choose the correct alternative to complete the sentence. Monica asked Ronica if ______",
            options: [
                "She joins the group",
                "She will join the group",
                "She would join the group",
                "She should not join the group",
            ],
            answer: "She would join the group",
        },
        {
            id: 914,
            question:
                "‘Could you turn the TV up?’ I said to her. This sentence could be put in reported speech as ______",
            options: [
                "I asked her that she should turn the TV up.",
                "I told her if she could turn the TV up.",
                "I asked her if she could turn the TV up.",
                "I said her if she could turn the TV up.",
            ],
            answer: "I asked her if she could turn the TV up.",
        },
        {
            id: 915,
            question:
                "Pick out the correct indirect form : Mohini told Rita, 'Did you meet Rahul at the station?'",
            options: [
                "Mohini asked Rita if she had met Rahul at the station.",
                "Mohini replied Rita if she had met Rahul at the station.",
                "Mohini told Rita if she had met Rahul at the station.",
                "Mohini asked Rita that she had met Rahul at the station.",
            ],
            answer: "Mohini asked Rita if she had met Rahul at the station.",
        },
        {
            id: 916,
            question:
                "Choose the correct alternative to complete the sentence: Rohan asked Mohan if:",
            options: [
                "he will accompany the parents.",
                "he accompanies the parents.",
                "he would accompany the parents.",
                "he can accompany the parents.",
            ],
            answer: "he would accompany the parents.",
        },
        {
            id: 917,
            question:
                "'Could you post this letter?' I said to her. Transform into indirect speech.",
            options: [
                "I said her if she could post that letter.",
                "I told her if she could post that letter.",
                "I asked her if she could post that letter.",
                "I asked her that she should post that letter.",
            ],
            answer: "I asked her if she could post that letter.",
        },
        {
            id: 918,
            question:
                "Select the correct indirect form of the sentence. He said, 'Can you swim?'",
            options: [
                "He asked me if I could swim.",
                "He asked me if I can swim.",
                "He enquired whether I swam.",
                "He asked me if you could swim.",
            ],
            answer: "He asked me if I could swim.",
        },
        {
            id: 919,
            question:
                "'Could you come to my birthday party?' said Ameya to Ajeya. Select the most correct indirect narration of the sentence.",
            options: [
                "Ameya asked Ajeya to come to his birthday party.",
                "Ameya invited Ajeya to his birthday party.",
            ],
            answer: "Ameya invited Ajeya to his birthday party.",
        },
        {
            id: 920,
            question:
                "The manager said to the customer, 'Have you brought the project report?' Identify the correct indirect narration of the above sentence.",
            options: [
                "The manager asked the customer whether he brought the project report.",
                "The manager asked the customer whether he had brought the project report.",
                "The manager asked the customer that if he had brought the project report.",
                "The manager asked to the customer whether he brought the project report.",
            ],
            answer: "The manager asked the customer whether he had brought the project report.",
        },
        {
            id: 921,
            question:
                "Choose the right option given below. Convert the following into indirect speech. 'Have you finished your lesson, Hari?' Said Mr. Sharma to his son.",
            options: [
                "Mr. Sharma said to Hari if he had finished his lesson.",
                "Mr. Sharma said to his son Hari that have you finished your lesson.",
                "Mr. Sharma asked his son Hari whether he had finished his lesson.",
                "Mr. Sharma enquired of his son Hari that whether had he finished his lesson.",
            ],
            answer: "Mr. Sharma asked his son Hari whether he had finished his lesson.",
        },
        {
            id: 922,
            question: "I said to her, 'Will you teach me knitting?'",
            options: [
                "I said to her whether you teach me knitting.",
                "I asked her whether she would teach me knitting.",
                "I asked her that she will teach me knitting.",
                "I told her that if she will teach me knitting.",
            ],
            answer: "I asked her whether she would teach me knitting.",
        },
        {
            id: 923,
            question:
                "Select the correct alternative that transforms the following sentences into indirect narration: \ni) The student said, 'Shall we bring the book again tomorrow, sir ?'\nii) 'Come out of the building,' said the inspector.",
            options: [
                "a) i) The student asked the teacher if they were to bring the book again the next day. ii) The inspector ordered him to come out of the building.",
                "b) i) The student questioned the teacher if they shall bring the book again the next day. ii) The inspector begged him to come out of the building.",
                "c) i) The student questioned the teacher whether to bring the book again tomorrow. ii) The inspector invited him to come out of the building.",
            ],
            answer: "Only a",
        },
        {
            id: 924,
            question:
                "Kamala said to Akshay, 'Are you not ashamed of yourself?' The correct indirect narration of this sentence is:",
            options: [
                "Kamala asked Akshay if he is not ashamed of himself.",
                "Kamala asked Akshay if you are not ashamed of yourself.",
                "Kamala asked Akshay if he was not ashamed of himself.",
                "Kamala asked Akshay if she is not ashamed of herself.",
            ],
            answer: "Kamala asked Akshay if he was not ashamed of himself.",
        },
        {
            id: 925,
            question:
                "Choose the correct indirect narration of the following sentence: 'Do you wish to open an account?' the accountant said to the man.",
            options: [
                "The accountant asked the man that he wished to open an account.",
                "The accountant asked the man if he wished to open an account.",
                "The accountant questioned the man that he wished to open an account.",
                "The accountant asked the man if you wished to open an account.",
            ],
            answer: "The accountant asked the man if he wished to open an account.",
        },
        {
            id: 926,
            question:
                "'Shall I begin the discussion?' The indirect narration corresponding to the question above is:",
            options: [
                "He asked me if he should begin the discussion.",
                "He asked me if I should begin the discussion.",
                "He requested whether I shall begin the discussion.",
                "He asked if he should begin the discussion.",
            ],
            answer: "Only (d)",
        },
        {
            id: 931,
            question:
                "Complete the given sentence with a suitable clause: He is the best boy of the class. He is better than _______",
            options: [
                "all the boys of the class.",
                "no boy of the class.",
                "any boys of the class.",
                "any other boy of the class.",
            ],
            answer: "any other boy of the class.",
        },
        {
            id: 932,
            question: "Choose the correct sentence:",
            options: [
                "Ram is the strongest boy in the class.",
                "Ram is most strongest boy in the class.",
                "Ram is strongest boy in the class.",
                "Ram is much stronger boy in the class.",
            ],
            answer: "Ram is the strongest boy in the class.",
        },
        {
            id: 933,
            question: "Choose the correct alternative.",
            options: [
                "Delhi is the large city in India.",
                "Delhi is the largest city in India.",
                "Delhi is most large city in India.",
                "Very few cities in India are the largest than Delhi.",
            ],
            answer: "Delhi is the largest city in India.",
        },
        {
            id: 934,
            question:
                "Find the correct comparative degree for the given sentence: 'Ketki is the most beautiful girl in the class.'",
            options: [
                "Ketki is much beautiful than any other girl in the class.",
                "Ketki is more beautiful than any other girl in the class.",
                "Ketki is more beautiful than most other girl in the class.",
                "Ketki is beautifuler than any other girl in the class.",
            ],
            answer: "Ketki is more beautiful than any other girl in the class.",
        },
        {
            id: 935,
            question:
                "Change the following sentence into a positive one: Delhi is larger than any other city of India.",
            options: [
                "Delhi is the largest city of India.",
                "Delhi is most large city of India.",
                "Delhi is not larger than any other city of India.",
                "No other city of India is as large as Delhi.",
            ],
            answer: "No other city of India is as large as Delhi.",
        },
        {
            id: 936,
            question:
                "'Lead is the heaviest of all metals.' Choose the correct comparative degree of the above sentence.",
            options: [
                "Lead is heavy then all other metals.",
                "Lead is as heavy as any other metals.",
                "Lead is heavier than all other metals.",
                "Lead is not heavier of all other metals.",
            ],
            answer: "Lead is heavier than all other metals.",
        },
        {
            id: 937,
            question:
                "The Sun is the biggest planet. Change it into comparative.",
            options: [
                "The Sun is more biggest than any other planet.",
                "The Sun is as big as any other planet.",
                "The Sun is bigger than any other planet.",
                "No other planet is as big as the Sun.",
            ],
            answer: "The Sun is bigger than any other planet.",
        },
        {
            id: 938,
            question:
                "Mumbai is the biggest city in India. The correct transformation of this sentence into positive degree is:",
            options: [
                "All cities in India are as big as Mumbai is.",
                "A fewer cities in India are as big as Mumbai is.",
                "No other city in India is as big as Mumbai is.",
                "India has no less cities as big as Mumbai is.",
            ],
            answer: "No other city in India is as big as Mumbai is.",
        },
        {
            id: 939,
            question:
                "No other metal is as useful as Iron. Change into superlative degree.",
            options: [
                "Iron is more useful than any other metal.",
                "Iron is the most useful of all metals.",
                "Iron is not the most useful of all metals.",
                "Iron is not more useful than any other metals.",
            ],
            answer: "Iron is the most useful of all metals.",
        },
        {
            id: 940,
            question:
                "Sachin Tendulkar is the **best** batsman in India. Choose an option giving the comparative degree of the underlined adjective.",
            options: [
                "No other batsman in India is as good as Sachin Tendulkar.",
                "All batsmen in India are inferior to Sachin Tendulkar.",
                "Sachin Tendulkar is better than any other batsman in India.",
                "None of the above.",
            ],
            answer: "Sachin Tendulkar is better than any other batsman in India.",
        },
        {
            id: 941,
            question:
                "Eagle flies highest of all the birds. Choose the correct positive degree of the sentence.",
            options: [
                "No other bird flies as high as eagle.",
                "Very few birds fly as high as eagle.",
                "Some other birds fly as high as eagle.",
                "Eagle flies higher than any other birds.",
            ],
            answer: "No other bird flies as high as eagle.",
        },
        {
            id: 942,
            question:
                "The **happiest** hour of my life was spent recently in the company of a woman who had just turned eighty. The above sentence has been re-written, changing the degree of the underlined adjective.",
            options: [
                "(a) The hour I spent recently in the company of a woman who had just turned eighty was happier than any other hour of my life.",
                "(b) No other hour of my life was happier than the one I spent recently in the company of a woman who had just turned eighty.",
                "(c) No other hour of my life was as happy as the one I spent recently in the company of a woman who had just turned eighty.",
                "(d) The happier hour of my life was spent recently in the company of a woman who had just turned eighty.",
            ],
            answer: "(b) and (c) are right",
        },
        {
            id: 943,
            question:
                "Do as directed as per the instructions given in the bracket: She is the best girl in the school. (Make it positive)",
            options: [
                "No other girl in the school is as good as she is.",
                "She is the only good girl in the school.",
                "In the school only she is the good girl.",
                "She is good girl only in the school.",
            ],
            answer: "No other girl in the school is as good as she is.",
        },
        {
            id: 944,
            question:
                "The comparative degree of the sentence: 'Mumbai is a rich city of India.'",
            options: [
                "Mumbai is one of the richest cities in India.",
                "Very few cities in India are as rich as Mumbai.",
                "No other city is as rich as Mumbai.",
                "Mumbai is richer than most other cities in India.",
            ],
            answer: "Mumbai is richer than most other cities in India.",
        },
        {
            id: 945,
            question:
                "Shakespeare is the greatest of English dramatists. (Change into the comparative degree)",
            options: [
                "Shakespeare is as great as other English dramatists.",
                "Shakespeare is the greatest English dramatist.",
                "Shakespeare is the best English dramatist.",
                "Shakespeare is greater than any other English dramatist.",
            ],
            answer: "Shakespeare is greater than any other English dramatist.",
        },
        {
            id: 946,
            question:
                "There is nothing greater than the freedom of the human spirit in this world. The superlative degree of the above sentence is:",
            options: [
                "The freedom of the human spirit is greater than anything else in this world.",
                "Nothing is as great as the freedom of the human spirit in this world.",
                "The freedom of the human spirit is in this world, the greatest thing.",
                "The freedom of the human spirit is the greatest thing in this world.",
            ],
            answer: "The freedom of the human spirit is the greatest thing in this world.",
        },
        {
            id: 947,
            question:
                "Choose the correct positive degree of the sentence below: Shakespeare was the greatest English poet.",
            options: [
                "All English poets were not great.",
                "Shakespeare was a great Poet.",
                "None of the poets were greater than Shakespeare.",
                "Shakespeare was greatest.",
            ],
            answer: "None of the poets were greater than Shakespeare.",
        },
        {
            id: 948,
            question:
                "Swimming is the best exercise. Select the correct form of positive degree of the above sentence.",
            options: [
                "No other exercise is as good as swimming.",
                "Very few exercises are as good as swimming.",
            ],
            answer: "Both",
        },
        {
            id: 949,
            question:
                "Positive degree: No other metal is as heavy as lead. Comparative degree: Lead is heavier than any other metal.",
            options: [
                "Only (a) is correct",
                "Only (b) is correct",
                "Both (a) and (b) are correct",
                "None of the above",
            ],
            answer: "Both (a) and (b) are correct",
        },
        {
            id: 950,
            question:
                "No other man was so strong as Hercules. Which one of the following changes the above sentence into superlative degree?",
            options: [
                "Hercules was the strongest man.",
                "Hercules was the strongest of all man.",
                "Hercules was the most strong of the man.",
                "Hercules was the strongest of man.",
            ],
            answer: "Hercules was the strongest man.",
        },
        {
            id: 951,
            question:
                "Eagle flies higher than any other bird. Identify the correct positive degree of the above sentence.",
            options: [
                "Eagle flies highest of all birds.",
                "No other bird flies as high as eagle.",
                "Very few birds fly as high as eagle.",
                "No birds flies higher than eagle.",
            ],
            answer: "No other bird flies as high as eagle.",
        },
        {
            id: 952,
            question:
                "No other train is as comfortable as the Tejas Express. (Change the sentence into Comparative Degree)",
            options: [
                "No other train is comfortable than the Tejas Express",
                "The Tejas Express is more comfortable than any other train.",
                "Tejas Express is comfortable of all trains.",
                "The Tejas Express is the most comfortable than any other train.",
            ],
            answer: "Only (b) correct",
        },
        {
            id: 953,
            question:
                "(a) She is more charming than any other woman living. (b) I have no ulterior motive than helping you. (c) He has greater popularity than any other leader. Choose the correct sentence/s.",
            options: [
                "Only (a)",
                "Only (b)",
                "Only (a) and (c)",
                "Only (b) and (c)",
            ],
            answer: "Only (a) and (c)",
        },

        {
            id: 954,
            question:
                "India is one of the most beautiful countries in the world. Rewrite using positive Degree of adjective.",
            options: [
                "No other country of the world is so beautiful as India.",
                "No country of the world is as beautiful as India.",
                "Very few countries of the world are so beautiful as India.",
                "Few countries of the world are as beautiful as India.",
            ],
            answer: "Very few countries of the world are so beautiful as India.",
        },
        {
            id: 955,
            question:
                "Very few girls in the locality are as beautiful as Zia. Choose the correct alternative in which, the superlative degree of the adjective is used.",
            options: [
                "Zia is the most beautiful girl in the locality.",
                "Zia is one of the most beautiful girls in the locality.",
                "The most beautiful girl in the locality is Zia.",
                "Zia is one of the few most beautiful girls in the locality.",
            ],
            answer: "Zia is one of the most beautiful girls in the locality.",
        },
        {
            id: 956,
            question:
                "Very few towns in India are as rich as Bombay. Change it into comparative Degree.",
            options: [
                "No other town in India is as rich as Bombay.",
                "Bombay is richer from only other towns in India.",
                "Bombay is one of the richest towns in India.",
                "Bombay is richer than most other towns in India.",
            ],
            answer: "Bombay is richer than most other towns in India.",
        },
        {
            id: 957,
            question:
                "Courage is one of the noblest human virtues. Change into positive.",
            options: [
                "Courage is noble human virtue.",
                "Very few other human virtues are as noble as courage.",
                "Noble human virtue is courage.",
                "Courage is the noblest virtue.",
            ],
            answer: "Very few other human virtues are as noble as courage.",
        },
        {
            id: 958,
            question:
                "Very few men are as generous as he is. Change the degree of comparison.",
            options: [
                "He is the most generous man.",
                "He is one of the most generous man.",
                "He is one of the most generous men.",
                "He is one of the few generous men.",
            ],
            answer: "He is one of the most generous men.",
        },
        {
            id: 959,
            question:
                "Very few things are as useful as wood. Select the alternative which can be the correct comparative degree of the above sentence.",
            options: [
                "Wood is more useful than any other things.",
                "Wood is more useful than many other things.",
                "Wood is more useful than most other things.",
                "No other thing is as useful as wood.",
            ],
            answer: "Wood is more useful than most other things.",
        },
        {
            id: 960,
            question:
                "He is one of the tallest boys in class. The above sentence has been re-written below, changing the degree of the underlined adjective. Choose the grammatically correct option.",
            options: [
                "He is taller than all other boys in class.",
                "He is taller than any other boy in class.",
                "He is taller than most other boys in class.",
                "No one is as tall in class as he is.",
            ],
            answer: "He is taller than most other boys in class.",
        },
        {
            id: 961,
            question:
                "Very few flowers are as lovely as the rose. Identify the correct comparative degree of the above sentence.",
            options: [
                "Rose is lovelier than many other flowers.",
                "Rose is lovelier than most other flowers.",
                "Rose is more lovely than many other flower.",
                "Rose is lovelier than any other flower.",
            ],
            answer: "Rose is lovelier than most other flowers.",
        },
        {
            id: 962,
            question:
                "Kolkata is more popular than most other cities of India. Which of the following option is correctly converted from the above sentence?",
            options: [
                "Kolkata is the most popular city of India.",
                "There is no other city in India as popular as Kolkata.",
                "Some other cities of India are not more popular than Kolkata.",
                "Kolkata is one of the most popular cities of India.",
            ],
            answer: "Kolkata is one of the most popular cities of India.",
        },
        {
            id: 963,
            question: "Find out the incorrect sentence/s:",
            options: [
                "He was as white as a sheet.",
                "It was more expensive than I thought.",
                "This is the most oldest theatre in London.",
                "She is one of the kindest woman.",
            ],
            answer: "(c) and (d)",
        },
        {
            id: 964,
            question:
                "Ashoka was one of the greatest Indian rulers. Identify the correct positive degree of the above sentence.",
            options: [
                "Very few Indian rulers were as great as Ashoka.",
                "No other Indian ruler was as great as Ashoka.",
                "Some Indian rulers were as great as Ashoka.",
                "Ashoka was greater than many other rulers in India.",
            ],
            answer: "Very few Indian rulers were as great as Ashoka.",
        },
        {
            id: 965,
            question:
                "Arsenic is an extremely poisonous element. Identify the correct positive degree of the above sentence.",
            options: [
                "Arsenic is a highly poisonous element.",
                "Arsenic is one of the highly poisonous elements.",
                "Very few elements are as poisonous as Arsenic.",
                "Most of the elements are less poisonous than Arsenic.",
            ],
            answer: "Very few elements are as poisonous as Arsenic.",
        },
        {
            id: 966,
            question:
                "Indira Gandhi was one of the greatest women in India. Choose the correct alternative that transforms the above sentence into positive degree.",
            options: [
                "No other woman in India was as great as Indira Gandhi.",
                "Very few women in India were as great as Indira Gandhi.",
                "Indira Gandhi was as great as any other women in India.",
                "Indira Gandhi was greater than all other women in India.",
            ],
            answer: "Very few women in India were as great as Indira Gandhi.",
        },
        {
            id: 967,
            question:
                "Delhi is one of the biggest cities in India. Which one of the following sentences is the correct positive degree corresponding to the sentence above?",
            options: [
                "No other city is so big as Delhi in India.",
                "No other city in India is as big as Delhi.",
                "Very few cities in India are as big as Delhi.",
                "Delhi is a big city in India.",
            ],
            answer: "Very few cities in India are as big as Delhi.",
        },
        {
            id: 968,
            question:
                "Choose the correct version of No sooner ..... than 'As soon as the day of sunlight is over, the day of moonlight begins.'",
            options: [
                "No sooner does the day of sunlight over than the day of moon light begins.",
                "No sooner the day of sunlight is over than the day of moonlight begins.",
                "No sooner is the day of sunlight over than the day of moonlight begins.",
                "No sooner did the day of sunlight over than the day of moonlight begins.",
            ],
            answer: "No sooner is the day of sunlight over than the day of moonlight begins.",
        },
        {
            id: 969,
            question:
                "Which one of the following is the correct sentence after using too. 'We are so late that we cannot catch the train'.",
            options: [
                "We are very late so we cannot catch the train.",
                "We are too late to catch the train.",
                "We are too late so we cannot catch the train.",
                "We are so late for the train.",
            ],
            answer: "We are too late to catch the train.",
        },
        {
            id: 970,
            question:
                "Rewrite the sentence using ‘Unless'. If it rains, farmers will be happy.",
            options: [
                "Unless it does not rain, farmers will not be happy.",
                "Unless it rains, farmers will happy.",
                "Unless it rains, farmers will not be happy.",
                "Unless it does not rains, farmers will be happy.",
            ],
            answer: "Unless it rains, farmers will not be happy.",
        },
        {
            id: 971,
            question:
                "Rewrite using 'too'. The tea is so hot that it can not be drunk.",
            options: [
                "The tea is too hot to drink.",
                "The tea is too hot it can be drink.",
                "The tea is too hot as it cannot be drunk.",
                "The tea is too hot not to drink.",
            ],
            answer: "The tea is too hot to drink.",
        },
        {
            id: 972,
            question: "Choose the acceptable sentence.",
            options: [
                "No sooner did he received the telegram than he started crying.",
                "No sooner he had received the telegram than he started crying.",
                "No sooner had he received the telegram than he started crying.",
                "No sooner had he received the telegram when he started crying.",
            ],
            answer: "No sooner had he received the telegram than he started crying.",
        },
        {
            id: 973,
            question:
                "Use No sooner ..... than. 'All were silent as soon as he rose to speak.'",
            options: [
                "No sooner than he rose to speak all were silent.",
                "No sooner did he rise to speak than all were silent.",
                "No sooner does he rise to speak than all were silent.",
                "No sooner he rose to speak than all were silent.",
            ],
            answer: "No sooner did he rise to speak than all were silent.",
        },
        {
            id: 974,
            question:
                "Everybody loves beauty. Change into a negative sentence without changing the meaning.",
            options: [
                "There is nobody who does not love beauty.",
                "There is nobody but loves beauty.",
                "No one loves beauty.",
                "There is nobody who hates beauty.",
            ],
            answer: "There is nobody who does not love beauty.",
        },
        {
            id: 975,
            question:
                "Change the following sentence into an assertive sentence and choose the correct alternative. 'O that I were young again!'",
            options: [
                "I would have liked to be young again.",
                "I wish I were young again.",
                "Could I become young again.",
                "I want to become young again.",
            ],
            answer: "I wish I were young again.",
        },
        {
            id: 976,
            question:
                "Choose the correct exclamatory sentence from the given alternatives. 'It is a good suggestion.'",
            options: [
                "What good suggestion it is!",
                "What a good suggestion it is!",
                "What is it a good suggestion!",
                "What it is a good suggestion!",
            ],
            answer: "What a good suggestion it is!",
        },
        {
            id: 977,
            question:
                "Give me that book and I will read it. Change into complex sentence.",
            options: [
                "If you give me that book, I will read it.",
                "Give me that book to read.",
                "Giving me that book, I will read it.",
                "None.",
            ],
            answer: "If you give me that book, I will read it.",
        },
        {
            id: 978,
            question: "Tell me the truth. Make it into complex sentence.",
            options: [
                "You should tell me the truth.",
                "Tell me what is true.",
                "You shall tell me truth.",
                "Truth should be told to me.",
            ],
            answer: "Tell me what is true.",
        },
        {
            id: 979,
            question:
                "Walk quickly and you will overtake him. Tick mark the simple sentence.",
            options: [
                "Walking quickly you will overtake him.",
                "Walk quickly so that you will overtake him.",
                "Walk quickly. you will overtake him.",
                "None.",
            ],
            answer: "Walking quickly you will overtake him.",
        },
        {
            id: 980,
            question: "Which of the following is the simple sentence?",
            options: [
                "He went in and wrote a letter.",
                "He went in the room to write a letter.",
                "He went in the room for a letter.",
                "He went in the room and wrote a letter.",
            ],
            answer: "He went in and wrote a letter.",
        },
        {
            id: 981,
            question:
                "'I was counting the forms when you entered the room'. 'The simple form of the sentence has been represented by'.",
            options: [
                "I was counting the forms and you entered the room.",
                "I was counting the forms at the time of your entry in the room.",
                "I was counting the forms while you entered the room.",
                "I was counting the forms as you entered the room.",
            ],
            answer: "I was counting the forms as you entered the room.",
        },
        {
            id: 982,
            question:
                "Choose the correct alternative which is the best complex sentence form of the following sentence: 'My cousin, a journalist, wrote this article.'",
            options: [
                "My cousin who is a journalist wrote this article.",
                "My cousin wrote this article as he is a journalist.",
                "My cousin wrote this article and he is a journalist.",
                "Being a journalist, my cousin wrote this article.",
            ],
            answer: "My cousin who is a journalist wrote this article.",
        },
        {
            id: 983,
            question: "Pick out the simple sentence from the following.",
            options: [
                "We believe that he is innocent.",
                "He complained of being unjustly treated.",
                "Tell me where you live.",
                "The lion was wounded but not killed.",
            ],
            answer: "He complained of being unjustly treated.",
        },
        {
            id: 984,
            question:
                "Everything seemed quite normal. Choose the correct exclamatory expression.",
            options: [
                "Everything is really normal!",
                "How seemed everything normal!",
                "How normal everything seemed!",
                "Normal, seemed everything!",
            ],
            answer: "How normal everything seemed!",
        },
        {
            id: 985,
            question:
                "It was a very fine morning. Which of the options best represents the exclamatory form of the above sentence?",
            options: [
                "What was the fine morning!",
                "How fine was the morning!",
                "The Morning was very fine!",
                "What a fine morning it was!",
            ],
            answer: "What a fine morning it was!",
        },
        {
            id: 986,
            question:
                "What a terrible fire this is. Choose the right punctuation at the end of the sentence.",
            options: ["Full stop", "Comma", "Exclamation", "Question mark"],
            answer: "Exclamation",
        },
        {
            id: 987,
            question:
                "I did my work. I went to college. Which one of the following sentences combines the above sentences into a single simple sentence?",
            options: [
                "After doing my work I went to college.",
                "Having done my work I went to college.",
                "I did and went to college.",
                "I went to college doing my work.",
            ],
            answer: "Having done my work I went to college.",
        },
        {
            id: 988,
            question:
                "Choose the affirmative of the following: Nobody was absent.",
            options: [
                "All were present.",
                "Everyone was present.",
                "Everyone was absent.",
                "All were not absent.",
            ],
            answer: "All were present.",
        },
        {
            id: 989,
            question:
                "He is so old that he cannot walk. Which of the following option is correctly converted from the above complex sentence into a simple sentence?",
            options: [
                "He is very much old that he could not walk.",
                "He can’t walk because he was so old.",
                "He is too old to walk.",
                "He is too old too walk.",
            ],
            answer: "He is too old to walk.",
        },
        {
            id: 990,
            question:
                "Choose the option of complex sentence of the following. She worked hard to get the promotion.",
            options: [
                "She worked hard and got promotion.",
                "She worked hard getting promotion.",
                "She worked hard so that she could get promotion.",
                "She worked hard, got success.",
            ],
            answer: "She worked hard so that she could get promotion.",
        },
        {
            id: 991,
            question: "Choose the alternative of compound sentence:",
            options: [
                "When he saw the tiger, he paused.",
                "Seeing the tiger, he paused.",
                "He paused while seeing the tiger.",
                "He saw the tiger and paused.",
            ],
            answer: "He saw the tiger and paused.",
        },
        {
            id: 992,
            question:
                "Teacher asked two students the answer of a question, but _______ of them knew. Choose the option to fill in the blank.",
            options: ["none", "either", "both", "neither"],
            answer: "neither",
        },
        {
            id: 993,
            question:
                "All that glitters is not gold. The correct transformation of this sentence into simple sentence is:",
            options: [
                "All glittering things are gold.",
                "All glittering things are not gold.",
                "All things are gold.",
                "All things are golden.",
            ],
            answer: "All glittering things are not gold.",
        },
        {
            id: 994,
            question:
                "Choose the correct interrogative sentence from the following alternatives: There is nothing better than a busy life.",
            options: [
                "Why there is nothing better than a busy life?",
                "Why there is something better than a busy life?",
                "Is there anything better than a busy life?",
                "Is there something better than a busy life?",
            ],
            answer: "Is there anything better than a busy life?",
        },
        {
            id: 995,
            question:
                "What does it mean: 'The poem was too difficult for me to understand.'",
            options: [
                "I don't understand the poem.",
                "The poem was very difficult.",
                "The poem was too hard.",
                "I could not understand the poem.",
            ],
            answer: "b and d only",
        },
        {
            id: 996,
            question: "Identify the correct sentence:",
            options: [
                "The teacher to accepted our invitation come and agreed with us.",
                "With us agreed the teacher to come invitation and our accepted.",
                "The teacher accepted our invitation and agreed to come with us.",
                "Our invitation accepted the teacher and agreed to come with us.",
            ],
            answer: "The teacher accepted our invitation and agreed to come with us.",
        },
        {
            id: 997,
            question:
                "The fog will disappear as soon as the sun rises. Identify the type of the sentence.",
            options: ["simple", "complex", "compound", "complex-compound"],
            answer: "complex",
        },
        {
            id: 998,
            question:
                "Rewrite the sentence below using the word 'walking': As they walked on the shore, they could hear the surf.",
            options: [
                "They could hear the surf in walking on the shore.",
                "While walking on the shore, they could hear the surf.",
                "They could hear the surf walking on the shore.",
                "During walking on the shore they could hear the surf.",
            ],
            answer: "While walking on the shore, they could hear the surf.",
        },
        {
            id: 999,
            question:
                "Choose the alternative which is a correct conversion of the following simple sentence into a compound sentence: In spite of being a Russian by birth, he speaks Hindi like his mother tongue.",
            options: [
                "He is a Russian by birth, but he speaks Hindi like his mother tongue.",
                "Though he is a Russian by birth he speaks Hindi like his mother tongue.",
                "He speaks Hindi like his mother tongue despite being a Russian by birth.",
                "None of these.",
            ],
            answer: "He is a Russian by birth, but he speaks Hindi like his mother tongue.",
        },
        {
            id: 1000,
            question:
                "The man with a smiling face is our leader. Which is the correct conversion of the above sentence into the compound one?",
            options: [
                "The man has a smiling face and he is our leader.",
                "The man who has a smiling face is our leader.",
                "The man having a smiling face is our leader.",
                "As the man has a smiling face, he is our leader.",
            ],
            answer: "The man has a smiling face and he is our leader.",
        },
        {
            id: 1001,
            question:
                "Choose the correct option showing the change of the following sentence into assertive. How beautiful is night!",
            options: [
                "Night is very beautiful.",
                "Night is not very beautiful.",
                "Night was very beautiful.",
                "Night will be very beautiful.",
            ],
            answer: "Night is very beautiful.",
        },
        {
            id: 1002,
            question:
                "A compound sentence consists of two or more co-ordinate clauses linked by co-ordinating conjunctions such as 'and', or 'but'. This statement is:",
            options: [
                "false",
                "true",
                "neither true nor false",
                "totally incorrect",
            ],
            answer: "true",
        },
        {
            id: 1003,
            question: "It was not sure that it was you. (Remove negative)",
            options: [
                "It wasn't sure that it was you.",
                "It was sure that it was you.",
                "It was unbelievable that it was you.",
                "It was doubtful whether it was you.",
            ],
            answer: "It was sure that it was you.",
        },
        {
            id: 1004,
            question:
                "How sweet the moonlight sleeps upon this bank! (Make it assertive)",
            options: [
                "The moonlight is sleeping upon this bank very sweetly.",
                "The moonlight very sweetly sleeps upon this bank.",
                "The moonlight sleeps upon very sweetly that bank.",
                "The moonlight sleeps upon that bank very sweetly.",
            ],
            answer: "The moonlight sleeps upon that bank very sweetly.",
        },
        {
            id: 1005,
            question:
                "Alfred was the best king that ever reigned in England. (Make it negative)",
            options: [
                "Alfred would not be the best king that ever reigned in England.",
                "No other king was as good as Alfred ever reigned in England.",
                "Alfred is not the best king that ever reigned in England.",
                "Alfred was the only king who had never reigned in England.",
            ],
            answer: "No other king was as good as Alfred ever reigned in England.",
        },
        {
            id: 1006,
            question: "They finished the work yesterday. (Make interrogative)",
            options: [
                "Do they finish the work yesterday?",
                "Did they finish the work yesterday?",
                "Had they finished the work yesterday?",
                "Have they finished the work yesterday?",
            ],
            answer: "Did they finish the work yesterday?",
        },
        {
            id: 1007,
            question:
                "An elephant is a wonderful creature. (Make it exclamatory)",
            options: [
                "How a wonderful creature an elephant is!",
                "That a wonderful creature an elephant is!",
                "O a wonderful creature an elephant is!",
                "What a wonderful creature an elephant is!",
            ],
            answer: "What a wonderful creature an elephant is!",
        },
        {
            id: 1008,
            question:
                "Why offer bread to a man who is dying of thirst? (Make it assertive)",
            options: [
                "It is useless to offer bread to a man who is dying of thirst.",
                "Such offer is foolish to a man who is dying of thirst.",
                "It is extremely foolish to offer bread to a man who is dying of thirst.",
                "No one can be offered bread to a man who is dying of thirst.",
            ],
            answer: "It is extremely foolish to offer bread to a man who is dying of thirst.",
        },
        {
            id: 1009,
            question:
                "Rewrite the sentence below using the word 'crossing': As you cross the bridge, you can hear the vibrations.",
            options: [
                "You can hear the vibrations, in crossing the bridge.",
                "While crossing the bridge, you can hear the vibrations.",
                "You can hear the vibrations crossing the bridge.",
                "During crossing the bridge you can hear the vibrations.",
            ],
            answer: "While crossing the bridge, you can hear the vibrations.",
        },
        {
            id: 1010,
            question:
                "Rewrite the given sentence in the exclamatory form: These are very good apples.",
            options: [
                "What good apples these are!",
                "How good apples these are!",
                "What a good apples these are!",
                "How very good apples these are!",
            ],
            answer: "What good apples these are!",
        },
        {
            id: 1011,
            question: "He tried every plan. Change it into negative.",
            options: [
                "He tried not every plan.",
                "He left no plan untried.",
                "He did not try every plan.",
                "He could not try plan.",
            ],
            answer: "He left no plan untried.",
        },
        {
            id: 1012,
            question:
                "I wish I were at home. Change it into exclamatory sentence.",
            options: [
                "O to be at home!",
                "I have been at home!",
                "What at home!",
                "How good home!",
            ],
            answer: "O to be at home!",
        },
        {
            id: 1013,
            question: "Brutus loved Caesar. Change it into negative.",
            options: [
                "Brutus not loved Caesar.",
                "Brutus was without love for Caesar.",
                "Brutus was not without love for Caesar.",
                "There was no love for Caesar from Brutus.",
            ],
            answer: "Brutus was not without love for Caesar.",
        },
        {
            id: 1014,
            question:
                "I wish I had a good horse. Change into exclamatory sentence.",
            options: [
                "How good horse I have!",
                "I have a very good horse!",
                "Oh, for a good horse!",
                "What a good horse!",
            ],
            answer: "Oh, for a good horse!",
        },
        {
            id: 1015,
            question:
                "Why waste time in reading English? Change it into Assertive sentence.",
            options: [
                "It is extremely foolish to waste time in reading English.",
                "Reading English is a waste of time.",
                "Waste of time is reading English.",
                "How foolish it is to read English!",
            ],
            answer: "It is extremely foolish to waste time in reading English.",
        },
        {
            id: 1016,
            question:
                "Change the following sentence into an assertive sentence: 'O that I were young again!'",
            options: [
                "I would have liked to be young again.",
                "I wish I were young again.",
                "Could I become young again?",
                "I want to become young again.",
            ],
            answer: "I wish I were young again.",
        },
        {
            id: 1017,
            question:
                "How can I bring a child into this world? Make it assertive.",
            options: [
                "I cannot bring a child into such a world.",
                "I cannot brought a child into a world.",
                "Can I bring a child into such world?",
                "None of these.",
            ],
            answer: "I cannot bring a child into such a world.",
        },
        {
            id: 1018,
            question: "I couldn’t believe it. Make it affirmative.",
            options: [
                "I could not believe it.",
                "I could hardly believe it.",
                "I can hardly believe it.",
                "None",
            ],
            answer: "I could hardly believe it.",
        },
        {
            id: 1052,
            question: "The house is quiet. Make it negative.",
            options: [
                "The house is not quiet.",
                "The house is not noisy.",
                "The house is noisy.",
                "None",
            ],
            answer: "The house is not noisy.",
        },
        {
            id: 1053,
            question: "She cannot even sign her name. Remove negative.",
            options: [
                "She is unable to sign her name.",
                "She is not sign her name.",
                "She is sign her name",
                "None",
            ],
            answer: "She is unable to sign her name.",
        },
        {
            id: 1054,
            question: "What a feeling! Make assertive.",
            options: [
                "It is indeed a great feeling.",
                "It is a great feeling.",
                "It is very a great feeling.",
                "None",
            ],
            answer: "It is a great feeling.",
        },
        {
            id: 1055,
            question:
                "Is not wisdom better than riches? The above sentence can be changed into assertive sentence as the following:",
            options: [
                "Riches are not better than wisdom.",
                "Wisdom is not better than riches.",
                "Riches are better than wisdom.",
                "Wisdom is better than riches.",
            ],
            answer: "Wisdom is better than riches.",
        },
        {
            id: 1056,
            question:
                "Complete the following sentence by choosing the correct alternative: If you smoke regularly, you will suffer from cancer. This is a _______ sentence.",
            options: ["simple", "compound", "complex", "complex compound"],
            answer: "complex",
        },
        {
            id: 1057,
            question:
                "Combine the three sentences below to make a Complex-Compound sentence: You have to keep a sharp eye. He should not cheat you. You have to ensure this.",
            options: [
                "You have to keep a sharp eye, and ensure that he doesn't cheat you.",
                "Keeping a sharp eye will ensure that he does not cheat you.",
                "If you keep a sharp eye, you can ensure that he doesn't cheat you.",
                "A sharp eye from you will prevent his cheating you.",
            ],
            answer: "You have to keep a sharp eye, and ensure that he doesn't cheat you.",
        },
        {
            id: 1058,
            question:
                "He is contented. He is poor. Choose the correct combination of simple sentences into one Complex Sentence, containing an adverb clause from the following:",
            options: [
                "He is contented but he is poor.",
                "He is poor still contented.",
                "He is contented though he is poor.",
                "He is as poor as contented.",
            ],
            answer: "He is contented though he is poor.",
        },
        {
            id: 1059,
            question:
                "The Sun having risen, the fog disappeared. Identify the type of sentence.",
            options: ["simple", "compound", "complex", "complex-compound"],
            answer: "simple",
        },
        {
            id: 1060,
            question:
                "Change into Exclamatory sentence: These are lovely apples.",
            options: [
                "How lovely these apples are!",
                "What lovely these apples are!",
                "How lovely are these apples!",
                "What lovely are these apples!",
            ],
            answer: "How lovely these apples are!",
        },
        {
            id: 1061,
            question:
                "If you speak the truth, you will never regret it. This sentence is _______.",
            options: ["Simple", "Compound", "Complex", "None of the above"],
            answer: "Complex",
        },
        {
            id: 1062,
            question:
                "Identify the structure of the sentence: Being hard-working is not enough.",
            options: ["Simple", "Complex", "Compound", "Compound-Complex"],
            answer: "Simple",
        },
        {
            id: 1063,
            question:
                "She was tired. She still went on working. Which of the following sentence/s change/s the above sentences correctly into a complex sentence?",
            options: [
                "Although she was tired she still went on working",
                "She was tired but she still went on working.",
                "She still went on working despite she was tired.",
                "She still went on working in spite she was tired.",
            ],
            answer: "Although she was tired she still went on working",
        },
        {
            id: 1064,
            question: "Choose the correct sentence/s.",
            options: [
                "When you are leaving?",
                "Where are you going?",
                "What I can do for you?",
            ],
            answer: "Where are you going?",
        },
        {
            id: 1065,
            question: "Choose the correct Sentence/s.",
            options: [
                "Did you ask somebody to come?",
                "One must not praise oneself.",
                "One cannot be too careful of his good name.",
            ],
            answer: "Did you ask somebody to come?",
        },
        {
            id: 1066,
            question:
                "I have no money that I can spare. Choose the correct alternative that can be replaced for the clause underlined.",
            options: ["for sparing", "to spare", "with spare", "for spare"],
            answer: "to spare",
        },
        {
            id: 1067,
            question:
                "Form a correct 'wh-' question for the following statement as its answer: 'My father is a doctor'.",
            options: [
                "Who is your father?",
                "What does your father do?",
                "What is your father?",
                "Is your father a doctor?",
            ],
            answer: "What does your father do?",
        },
        {
            id: 1068,
            question:
                "It matters little whether we win or lose. The sentence above correctly changes into an interrogative sentence as",
            options: [
                "Does it matter little whether we win or lose?",
                "Doesn’t it matter whether we win or lose?",
                "What does it matter whether we win or lose?",
                "Does we win or lose matter?",
            ],
            answer: "Doesn’t it matter whether we win or lose?",
        },
        {
            id: 1069,
            question:
                "Nobody is free from sin. The sentence above correctly changes into interrogative form as _______",
            options: [
                "Is there anybody free from sin?",
                "Is there nobody free from sin?",
                "Who is not free from sin?",
                "Who is free from sin?",
            ],
            answer: "Is there anybody free from sin?",
        },
        {
            id: 1070,
            question:
                "Transform simple sentence to complex sentence. Simple: I was glad to know of his success. Complex:",
            options: [
                "I was glad to know about his success.",
                "I was glad to know that he had succeeded.",
                "I was glad to know if he succeeds.",
                "I was glad to know that he succeeds.",
            ],
            answer: "I was glad to know that he had succeeded.",
        },
        {
            id: 1071,
            question: "Choose the correct sentences.",
            options: [
                "We may have some coffee?",
                "Shall we have some coffee?",
                "Please, you may post this letter for me?",
                "Will you please take your hat off, I can't see the screen.",
            ],
            answer: "Shall we have some coffee? and Will you please take your hat off, I can't see the screen.",
        },
        {
            id: 1072,
            question:
                "Change the following into interrogative: She drew a picture.",
            options: [
                "Was she drawing a picture?",
                "Have she drawn a picture?",
                "Did she draw a picture?",
                "Has she draw a picture?",
            ],
            answer: "Did she draw a picture?",
        },
        {
            id: 1073,
            question:
                "Change the following simple sentence into compound sentence. Climbing up the tree, he plucked some mangoes.",
            options: [
                "He climbed up the tree and plucked some mangoes.",
                "He climbed up the tree to plucked some mangoes.",
            ],
            answer: "He climbed up the tree and plucked some mangoes.",
        },
        {
            id: 1074,
            question:
                "Choose the correct replacement of the given sentence: Here is a pool which we can swim in!",
            options: [
                "Here is a pool for swim in!",
                "Here is a pool to swimming!",
                "Here is a pool to swim in!",
                "Here is a pool swimming in!",
            ],
            answer: "Here is a pool to swim in!",
        },
        {
            id: 1075,
            question: "Choose the complex sentence(s).",
            options: [
                "The tired climbers advanced slowly.",
                "They moved with great effort.",
                "I telephoned my home in England as soon as I arrived in New York.",
            ],
            answer: "I telephoned my home in England as soon as I arrived in New York.",
        },
        {
            id: 1076,
            question:
                "Although he is a hard master, his intentions are good. Identify the types of sentence.",
            options: ["Complex", "Compound", "Simple", "Complex-compound"],
            answer: "Complex",
        },
        {
            id: 1077,
            question:
                "Choose the correct complex version of the following sentence: He aimed at winning the prize and he worked hard.",
            options: [
                "He worked hard so that he will win the prize.",
                "He worked hard so that he might win the prize.",
                "He had to work hard that he will win the prize.",
                "He will work hard so that he might win the prize.",
            ],
            answer: "He worked hard so that he might win the prize.",
        },
        {
            id: 1078,
            question:
                "Choose the correct substitute for the following sentence: He thought that he was safe there.",
            options: [
                "He thought him to be safe there.",
                "He thought about himself safe there.",
                "He thought himself to be safe there.",
                "He thought himself was safe there.",
            ],
            answer: "He thought himself to be safe there.",
        },
        {
            id: 1079,
            question:
                "Change into simple sentence. The fact that he is silent proves his guilt.",
            options: [
                "The silence proves guilt.",
                "The silence has proved his guilt.",
                "His guilt has been proved by his silence.",
                "His being silent proves his guilt.",
            ],
            answer: "His being silent proves his guilt.",
        },
        {
            id: 1080,
            question:
                "Combine the following sentences into simple sentence. He had many faults. But he was a good man at heart.",
            options: [
                "Though he had many faults, he was a good man at heart.",
                "In spite of having many faults, he was a good man at heart.",
                "As he was a good man at heart, he had many faults.",
                "While he had many faults, he was a good man at heart.",
            ],
            answer: "In spite of having many faults, he was a good man at heart.",
        },
        {
            id: 1081,
            question:
                "Change the following sentence into a simple one. 'You must work hard or you will not pass.'",
            options: [
                "Unless you work hard, you will not pass.",
                "If you work hard, you will not pass.",
                "You must work hard, in order to pass.",
                "Work hard and you will pass.",
            ],
            answer: "You must work hard, in order to pass.",
        },
        {
            id: 1082,
            question:
                "Combine the following sentences into simple one. 'He finished his work and put away his books.'",
            options: [
                "Putting away his books, he finished his work.",
                "To put away his books, he finished his work",
                "Having finished his work, he put away his books.",
                "He put away his books because he finished his work.",
            ],
            answer: "Having finished his work, he put away his books.",
        },
        {
            id: 1083,
            question: "Pick out the simple sentence from the following:",
            options: [
                "We believe that he is innocent.",
                "He complained of being unjustly treated.",
                "Tell me where you live.",
                "The lion was wounded but not killed.",
            ],
            answer: "He complained of being unjustly treated.",
        },
        {
            id: 1084,
            question:
                "Replace a clause by an infinitive. 'It was my intention that I would write him a letter.'",
            options: [
                "Writing a letter to him was my intention.",
                "It was my intention of writing him a letter.",
                "I intended to write him a letter.",
                "It was my intention to write him a letter.",
            ],
            answer: "I intended to write him a letter.",
        },
        {
            id: 1085,
            question:
                "'I was counting the forms when you entered the room.' The simple form of this sentence has been represented by _______",
            options: [
                "I was counting the forms and you entered the room.",
                "I was counting the forms at the time of your entry in the room.",
                "I was counting the forms while you entered the room.",
                "I was counting the forms as you entered the room.",
            ],
            answer: "I was counting the forms as you entered the room.",
        },
        {
            id: 1086,
            question:
                "Make one sentence of the two: (a) Ann took some photographs (b) Have you seen them?",
            options: [
                "Have you seen the photographs Ann took?",
                "Ann took some photographs and have you seen them.",
                "Have you seen the photographs that Ann took?",
                "Have you seen the photographs which Ann took?",
            ],
            answer: "Have you seen the photographs Ann took?",
        },
        {
            id: 1087,
            question:
                "Choose a suitable replacement for the underlined phrase. He found the gold coins <u>as he cleans</u> the floor.",
            options: [
                "as he had cleaned",
                "while he cleans",
                "while he is cleaning",
                "while cleaning",
            ],
            answer: "while cleaning",
        },
        {
            id: 1088,
            question:
                "He asked me if I knew who that girl was. Which one of the following is the correct Yes-No question corresponding to the sentence above?",
            options: [
                "Do you know who is that girl?",
                "Did you know who is that girl?",
                "Did you know who that girl was?",
                "Did you ask me who that girl was?",
            ],
            answer: "Did you know who that girl was?",
        },
        {
            id: 1089,
            question:
                "Change the following simple sentence into compound sentence. To his great disappointment, he failed in the examination.",
            options: [
                "He failed in the examination and he was greatly disappointed.",
                "His great disappointment is he failed in the examination.",
            ],
            answer: "He failed in the examination and he was greatly disappointed.",
        },
        {
            id: 1090,
            question:
                "Seeta is very beautiful. Tick mark the exclamatory sentence of the given:",
            options: [
                "Seeta is really beautiful!",
                "How beautiful Seeta is!",
                "What a beauty Seeta has!",
                "None",
            ],
            answer: "How beautiful Seeta is!",
        },
        {
            id: 1091,
            question:
                "Choose the correct ‘Exclamatory sentence’ for the given sentence: He is a very stupid boy.",
            options: [
                "How a stupid boy he is!",
                "What a stupid boy is he!",
                "What a stupid boy he is!",
                "How stupid boy he is!",
            ],
            answer: "What a stupid boy he is!",
        },
        {
            id: 1092,
            question:
                "Identify the kind of sentence given below: It's not in my capacity to help him.",
            options: ["Simple", "Compound", "Complex", "Compound-Complex"],
            answer: "Simple",
        },
        {
            id: 1093,
            question:
                "Change the sentence into exclamatory sentence: I wish I had met you ten years ago.",
            options: [
                "Had I met you ten years ago!",
                "Ah that I had met you ten years ago!",
                "Ten years ago I met you!",
                "I met you ten years ago!",
            ],
            answer: "Ah that I had met you ten years ago!",
        },
        {
            id: 1094,
            question:
                "Now everyone is convinced of your honesty so you are free to go. Identify the type of the sentence.",
            options: ["Complex", "Compound", "Simple", "Complex-Compound"],
            answer: "Compound",
        },
        {
            id: 1095,
            question:
                "Recognise the type of the following sentence: We appointed her our delegate to the convention.",
            options: ["Simple", "Compound", "Complex", "Complex-Compound"],
            answer: "Simple",
        },
        {
            id: 1096,
            question:
                "Though she was late, she finished her work in time. Select the correct simple sentence of the above.",
            options: [
                "She was late but she finished her work in time.",
                "In spite of being late, she finished her work in time.",
            ],
            answer: "In spite of being late, she finished her work in time.",
        },
        {
            id: 1099,
            question:
                "Choose the correct transformation of the following sentences:",
            options: [
                "It is a very wonderful opportunity - what a wonderful opportunity!",
                "It is very kind of you to help him like that - How kind of you to help him like that!",
                "These are awful shoes - what awful shoes!",
            ],
            answer: "All (a), (b), and (c) are correct.",
        },
        {
            id: 1100,
            question:
                "Change the compound sentence into complex sentence: Search his pockets and you will find the watch.",
            options: [
                "You will find the watch in his pockets.",
                "Search his pockets to find the watch.",
                "If you search his pockets, you will find the watch.",
            ],
            answer: "If you search his pockets, you will find the watch.",
        },
        {
            id: 1101,
            question:
                "Choose the complex sentence among the following examples:",
            options: [
                "It is a pity that we should have to undergo this disgrace.",
                "Our having to undergo this disgrace is a pity.",
            ],
            answer: "It is a pity that we should have to undergo this disgrace.",
        },
        {
            id: 1102,
            question: "Identify the simple sentence.",
            options: [
                "He worked hard so that he might gain a prize.",
                "Having no money, he had to barter goods.",
                "That was a fault which was not to be forgiven.",
                "He must confess his fault or he will be fined.",
            ],
            answer: "Having no money, he had to barter goods.",
        },
        {
            id: 1103,
            question:
                "He has a busy schedule, so he will be late. Which of the following is the simple form of the sentence?",
            options: [
                "On account of his busy schedule, he will be late.",
                "He will be late because his schedule is busy.",
                "His schedule is busy, that's why he will be late.",
                "He will be late as his schedule is busy.",
            ],
            answer: "On account of his busy schedule, he will be late.",
        },
        {
            id: 1104,
            question:
                "Choose the correct exclamatory sentence option of the following statement: It is sad to think that youth should pass away.",
            options: [
                "Oh, sad to think that youth should pass away!",
                "Alas that youth should pass away!",
                "Wow, youth is so beautiful!",
                "How if youth will never pass away!",
            ],
            answer: "Alas that youth should pass away!",
        },
        {
            id: 1105,
            question:
                "Which of the following sentence/sentences is/are correct?",
            options: [
                "Going up the hill, an old temple was seen.",
                "Entering the room, I found the light quite dazzling.",
                "Standing at the gate, a scorpion stung him.",
            ],
            answer: "Entering the room, I found the light quite dazzling.",
        },
        {
            id: 1106,
            question:
                "Choose the correct Yes-No type question form for the given example: They go to the park every evening.",
            options: [
                "Does they went to the park every evening?",
                "Did they went to the park every evening?",
                "Shall they go to the park every evening?",
                "Do they go to the park every evening?",
            ],
            answer: "Do they go to the park every evening?",
        },
        {
            id: 1107,
            question:
                "Choose the correct question form of the given sentence: You can weigh these letters.",
            options: [
                "Can you weighed these letters?",
                "Can you weigh these letters?",
                "Do you weigh these letters?",
                "Have you weighed these letters?",
            ],
            answer: "Can you weigh these letters?",
        },
        {
            id: 1108,
            question:
                "As soon as I saw the advertisement, I emailed my C.V. [Make it Negative without changing its meaning]",
            options: [
                "I did not see the advertisement and emailed my C.V.",
                "I saw the advertisement and did not email my C.V.",
                "I never saw the advertisement but emailed my C.V.",
                "No sooner did I see the advertisement than I emailed my C.V.",
            ],
            answer: "No sooner did I see the advertisement than I emailed my C.V.",
        },
        {
            id: 1109,
            question:
                "A rolling stone gathers no mass. Which one of the following sentences is a complex sentence corresponding to the simple sentence above?",
            options: [
                "A stone, that rolls, gathers no mass",
                "A stone, that gathers no mass, rolls.",
                "A stone that rolls, however, gathers no mass",
                "A stone which rolls gathers no mass.",
            ],
            answer: "A stone which rolls gathers no mass.",
        },
        {
            id: 1110,
            question:
                "I am not worried about what he says, _______. Choose the appropriate question tag from the following to fill in the blank.",
            options: ["am I?", "aren’t I?", "is it?", "don’t I?"],
            answer: "am I?",
        },
        {
            id: 1111,
            question:
                "Choose the correct question tag: We have received all the assignments.",
            options: ["isn’t it?", "aren’t we?", "didn’t we?", "haven’t we?"],
            answer: "haven’t we?",
        },
        {
            id: 1112,
            question: "Choose the appropriate question tag: You’d rather go?",
            options: [
                "hadn’t you",
                "didn’t you",
                "doesn’t you",
                "wouldn’t you",
            ],
            answer: "wouldn’t you",
        },
        {
            id: 1113,
            question:
                "Choose the correct question tag for the following sentence: Being paralytic, he could not walk.",
            options: ["couldn’t he?", "did he?", "didn’t he?", "could he?"],
            answer: "could he?",
        },
        {
            id: 1114,
            question:
                "Choose the correct question tag: You must not be late, _______",
            options: [
                "must you?",
                "mustn’t you?",
                "must they?",
                "mustn’t they",
            ],
            answer: "must you?",
        },
        {
            id: 1115,
            question: "I am punctual, _______?",
            options: ["don’t I", "aren’t I", "won’t I", "haven’t I"],
            answer: "aren’t I",
        },
        {
            id: 1116,
            question: "Close the door, _______?",
            options: ["don’t you", "aren’t you", "will you", "shall you"],
            answer: "will you",
        },
        {
            id: 1117,
            question: "Children love ice-cream, _______?",
            options: ["do they?", "aren’t they?", "isn’t it?", "don’t they?"],
            answer: "don’t they?",
        },
        {
            id: 1118,
            question: "He works very hard, _______?",
            options: ["doesn’t he", "shouldn’t he", "isn’t he", "won’t he"],
            answer: "doesn’t he",
        },
        {
            id: 1119,
            question:
                "Thank him according to our customs. Identify the sentence entailing the correct question to the above sentence",
            options: [
                "Thank him according to our customs, won’t you?",
                "Thank him according to our customs, will you?",
                "Thank him according to our customs, do you?",
                "Thank him according to our customs, don’t you?",
            ],
            answer: "Thank him according to our customs, will you?",
        },
        {
            id: 1120,
            question: "I could do something about that (Add tag question)",
            options: [
                "couldn’t I?",
                "didn’t I?",
                "wouldn’t I?",
                "shouldn’t I?",
            ],
            answer: "couldn’t I?",
        },
        {
            id: 1121,
            question:
                "“You have got a new shirt.” The correct question tag of this sentence is _______",
            options: [
                "hasn’t you?",
                "doesn’t you?",
                "don’t you?",
                "haven’t you?",
            ],
            answer: "haven’t you?",
        },
        {
            id: 1122,
            question: "Ramesh is not a teacher. Add a question tag.",
            options: [
                "Ramesh is not a teacher, isn’t he?",
                "Ramesh is not a teacher, is he?",
                "Ramesh is not a teacher, was he?",
                "Ramesh is not a teacher, won’t he?",
            ],
            answer: "Ramesh is not a teacher, is he?",
        },
        {
            id: 1123,
            question: "Children like to play, _______?",
            options: [
                "don’t they?",
                "doesn’t he?",
                "will they?",
                "doesn’t they?",
            ],
            answer: "don’t they?",
        },
        {
            id: 1124,
            question: "They have received all the books.",
            options: [
                "haven’t they?",
                "didn’t they?",
                "aren’t they?",
                "aren’t we?",
            ],
            answer: "haven’t they?",
        },
        {
            id: 1125,
            question: "He will accept the proposal. Add a question tag.",
            options: ["will he?", "won’t he?", "He won’t?", "He will?"],
            answer: "won’t he?",
        },
        {
            id: 1126,
            question:
                "The prince saw them. Tick mark correct question tag of above statement:",
            options: ["doesn’t he?", "none", "didn’t he?", "did he?"],
            answer: "didn’t he?",
        },
        {
            id: 1127,
            question:
                "She found a purse full of money, _______? Choose the suitable question tag from the following options.",
            options: ["didn’t she?", "doesn’t she?", "don’t she?", "will she?"],
            answer: "didn’t she?",
        },
        {
            id: 1128,
            question: "Add a question tag. “He does not like you.”",
            options: [
                "No, he does not, does he?",
                "You are not liked by him, does he?",
                "Does he like you?",
                "You are liked, isn’t it?",
            ],
            answer: "No, he does not, does he?",
        },
        {
            id: 1129,
            question:
                "I am not worried about what he says — Choose the appropriate question tag from the following to fill in the blank.",
            options: ["am I?", "aren’t I?", "isn’t it?", "don’t I?"],
            answer: "am I?",
        },
        {
            id: 1130,
            question: "Use your common sense _______? Supply a question tag.",
            options: ["won’t you?", "can’t you", "will you?", "shouldn’t you?"],
            answer: "won’t you?",
        },
        {
            id: 1131,
            question:
                "Pick out the question tag correctly for the following sentence: “She could not say it.”",
            options: ["could she?", "can she?", "couldn’t she?", "can’t she?"],
            answer: "could she?",
        },
        {
            id: 1132,
            question:
                "Pick out the correct question tag to the following sentence. Animals also need space.",
            options: [
                "don’t they?",
                "aren’t they?",
                "can’t they?",
                "was they?",
            ],
            answer: "don’t they?",
        },
        {
            id: 1133,
            question:
                "Pick out the correct question tag to the following sentence. Tomorrow is Monday.",
            options: ["isn’t it?", "aren’t it?", "can it", "wasn't it?"],
            answer: "isn’t it?",
        },
        {
            id: 1134,
            question:
                "The bags are on the table. Which one of the following is a correct tag question to the above sentence?",
            options: [
                "Are they?",
                "aren’t the bags?",
                "aren’t they?",
                "isn’t the table?",
            ],
            answer: "aren’t they?",
        },
        {
            id: 1135,
            question:
                "Maya seldom visits Mina and Company. Choose the correct question tag.",
            options: ["does she?", "doesn’t she?", "did she?", "didn’t she?"],
            answer: "does she?",
        },
        {
            id: 1136,
            question:
                "Pick out the correct question tag for the following: You will call me as soon as you reach home, _______",
            options: ["will you?", "won’t you?", "don’t you?", "do you?"],
            answer: "won’t you?",
        },
        {
            id: 1137,
            question: "She’s right _______? Choose the correct option:",
            options: ["is the", "isn’t it", "she is", "isn’t she"],
            answer: "isn’t she",
        },
        {
            id: 1138,
            question:
                "You thought it was still six _______? Pick out the correct alternative to complete the sentence.",
            options: ["did you?", "didn’t you?", "was it?", "wasn’t you?"],
            answer: "didn’t you?",
        },
        {
            id: 1139,
            question:
                "Peter broke a jug, _______ Choose the correct question tag from the following alternatives to fill in the blank:",
            options: ["didn’t he?", "did he?", "didn’t Peter?", "does he?"],
            answer: "didn’t he?",
        },
        {
            id: 1140,
            question: "Choose the correct sentence from the following:",
            options: [
                "Many Indians are working in Dubai, isn’t it?",
                "Many Indians work in Dubai, don’t they?",
                "Many Indians work in Dubai, isn't it?",
                "Many Indians work in Dubai, aren’t they?",
            ],
            answer: "Many Indians work in Dubai, don’t they?",
        },
        {
            id: 1141,
            question: "Choose the correct question tag for ‘You can drive’.",
            options: ["can’t you?", "can you?", "don’t you?", "won't you?"],
            answer: "can’t you?",
        },
        {
            id: 1142,
            question:
                "She was happy to come, _______? Complete the sentence with the correct Question Tag.",
            options: ["was she?", "were she?", "wasn’t she?", "she was?"],
            answer: "wasn’t she?",
        },
        {
            id: 1143,
            question:
                "Pick out the correct ‘question tag’ for the following sentence. John has a bad cold.",
            options: ["has he?", "hasn’t he?", "did he?", "haven’t he?"],
            answer: "hasn’t he?",
        },
        {
            id: 1144,
            question:
                "Pick out the correct question tag to the following sentence: Amrita speaks German fluently.",
            options: ["doesn’t she?", "don’t she?", "does she?", "isn’t she?"],
            answer: "doesn’t she?",
        },
        {
            id: 1145,
            question:
                "Few people knew the answer, _______? Which will be the correct question tag of the above sentence?",
            options: ["do they?", "don’t they?", "did they?", "didn’t they?"],
            answer: "did they?",
        },
        {
            id: 1146,
            question:
                "Fill in the blank with an appropriate question tag. ‘You hadn’t finished your work by noon, _______?",
            options: ["isn’t it?", "had you?", "hadn’t you?", "have you?"],
            answer: "had you?",
        },
        {
            id: 1147,
            question:
                "Let’s have a game of cricket. ‘Which one of the following is the correct tag question to be added to the above statement?",
            options: ["have we?", "haven’t we?", "should we?", "shall we?"],
            answer: "shall we?",
        },
        {
            id: 1148,
            question: "Select the correct sentence.",
            options: [
                "Everyone warned you, didn’t they?",
                "I'm living in London, Are you?",
            ],
            answer: "Everyone warned you, didn’t they?",
        },
        {
            id: 1149,
            question: "Choose the option containing correct sentences.",
            options: [
                "Few people knew the answer, did they?",
                "A little progress has been made, has it?",
                "We could scarcely hear what he said, could we?",
            ],
            answer: "Few people knew the answer, did they? and We could scarcely hear what he said, could we?",
        },
        {
            id: 1150,
            question: "Identify the correct sentence/s.",
            options: [
                "You need not be in such a hurry, need you?",
                "We used to play here, don’t we?",
                "Call the doctor, don’t you?",
                "Let’s go now, shall we?",
            ],
            answer: "You need not be in such a hurry, need you? and Let’s go now, shall we?",
        },
        {
            id: 1151,
            question: "Point out the sentence that has a correct question tag.",
            options: [
                "There is a lot of traffic in the evening, isn’t it?",
                "Shekhar will not be here soon, won't he?",
                "It is a nice morning, isn’t it?",
                "Let’s go out for dining, should we?",
            ],
            answer: "It is a nice morning, isn’t it?",
        },
        {
            id: 1152,
            question:
                "None of us knew the way. The correct tag question for the sentence above is _______",
            options: ["did we?", "did us?", "didn't we?", "didn't us?"],
            answer: "did we?",
        },
        {
            id: 1153,
            question:
                "My mother would lift me up. Select the correct tag question to the sentence.",
            options: ["Wouldn't she?", "Wouldn't I?", "Would she?", "Would I?"],
            answer: "Wouldn't she?",
        },
        {
            id: 1154,
            question:
                "None of us knew the way. Which one of the following is the correct Tag question corresponding to the sentence above?",
            options: ["didn’t we?", "did we?", "did none?", "did not of us?"],
            answer: "did we?",
        },
        {
            id: 1155,
            question: "Fill in the blanks in the given conversation.",
            options: [
                "Mukesh : Well, we need a menu, _______? John: We haven't got one here, _______?",
                "isn’t it, is it not",
                "don’t we, have we",
                "do we, haven’t we",
                "haven’t we, have we",
            ],
            answer: "don’t we, have we",
        },
        {
            id: 1156,
            question: "Identify the correct sentence/s.",
            options: [
                "I have a camera, haven’t I?",
                "Stop that noise, will you?",
                "I had had a bath, hadn’t I?",
            ],
            answer: "Stop that noise, will you? and I had had a bath, hadn’t I?",
        },
        {
            id: 1157,
            question: "Select the accurate meaning of 'Vamoose'",
            options: ["to depart quickly", "to and fro", "shrink", "jump over"],
            answer: "to depart quickly",
        },
        {
            id: 1158,
            question: "Select the correct synonym of 'Precious'",
            options: ["Worthless", "Valuable", "Cheap", "Contemptible"],
            answer: "Valuable",
        },
        {
            id: 1159,
            question:
                "Choose the word which will substitute the bold word/group of words: They discussed for almost four hours but there was no consensus.",
            options: ["agreement", "settlement", "end", "unity"],
            answer: "agreement",
        },
        {
            id: 1160,
            question: "Choose the correct synonym of 'Sections'",
            options: [
                "collection of thoughts",
                "combination of units",
                "bunch of articles",
                "groups of people",
            ],
            answer: "groups of people",
        },
        {
            id: 1161,
            question: "Choose the correct synonym of 'Predominantly'",
            options: ["mostly", "extraordinary", "forcefully", "apparently"],
            answer: "mostly",
        },
        {
            id: 1162,
            question: "Choose the correct synonym of 'Enlightened'",
            options: [
                "clearly visible",
                "shining brightly",
                "fully awakened",
                "economically privileged",
            ],
            answer: "fully awakened",
        },
        {
            id: 1163,
            question: "Herculean means _______",
            options: [
                "showing weakness",
                "showing love for birds",
                "showing great strength",
                "showing regards for women",
            ],
            answer: "showing great strength",
        },
        {
            id: 1164,
            question:
                "Choose one of the alternatives nearest in meaning to the Key-word: MALEVOLENT",
            options: [
                "extremely violent",
                "wishing evil towards others",
                "in poor voice",
                "insane",
            ],
            answer: "wishing evil towards others",
        },
        {
            id: 1165,
            question: "Select the correct synonym of ‘Individualist’",
            options: [
                "showing friendliness",
                "Conformist",
                "elite",
                "supporter of the complete liberty of belief of individuals",
            ],
            answer: "supporter of the complete liberty of belief of individuals",
        },
        {
            id: 1166,
            question: "Find out the word similar in meaning to Sycophants.",
            options: ["flippant", "flatterers", "psychopaths", "sadists"],
            answer: "flatterers",
        },
        {
            id: 1167,
            question:
                "Which one of the following pairs of alternatives is correct giving the two meanings of the word 'Submit'?",
            options: [
                "to consider & to urge",
                "to yield & to offer",
                "to evade & to expose",
                "to sign & to rebel",
            ],
            answer: "to yield & to offer",
        },
        {
            id: 1168,
            question:
                "Select the correct meaning of the underlined word: Murder can be a capital offence.",
            options: ["excellent", "chief", "punishable by death", "wealth"],
            answer: "punishable by death",
        },
        {
            id: 1169,
            question:
                "Choose the word which is nearest in meaning to the word 'conventional'",
            options: ["modern", "convenient", "democratic", "customary"],
            answer: "customary",
        },
        {
            id: 1170,
            question:
                "Which one of the following is a pair of words not the same in meaning?",
            options: [
                "perennial - permanent",
                "periphery - partial",
                "dictionary - lexicon",
                "podium - dais",
            ],
            answer: "periphery - partial",
        },
        {
            id: 1171,
            question: "Find out the correct meaning of ‘solitary’.",
            options: ["Singular", "Lonely", "Crowded", "Spectacular"],
            answer: "Lonely",
        },
        {
            id: 1172,
            question: "His son is industrious. The underlined word means ...",
            options: [
                "Industrial",
                "indulgent",
                "hardworking",
                "hardly working",
            ],
            answer: "hardworking",
        },
        {
            id: 1173,
            question:
                "Three meanings given below are closer to the word ‘integrate’. Choose the one which is wrong.",
            options: [
                "Combine parts into a whole.",
                "Complete by adding parts.",
                "Join with other social groups or different races.",
                "Make something by mixing or blending.",
            ],
            answer: "Make something by mixing or blending.",
        },
        {
            id: 1174,
            question:
                "What is the correct meaning of the word 'credentials' in the sentence: “It is often necessary to submit one’s credentials at the time of interview.”?",
            options: [
                "a bank statement",
                "a letter written in one’s mother tongue",
                "secret letter",
                "a letter of a person’s position & trustworthiness",
            ],
            answer: "a letter of a person’s position & trustworthiness",
        },
        {
            id: 1175,
            question:
                "Select the correct pair of the meanings of the words ‘vale’ and ‘veil’.",
            options: [
                "proud : vessel",
                "useless : utensil",
                "valley : covering of the face",
                "velvet : vine",
            ],
            answer: "valley : covering of the face",
        },
        {
            id: 1176,
            question: "Choose the correct synonym of ‘Contradict’",
            options: ["deny", "accept", "inform", "current"],
            answer: "deny",
        },
        {
            id: 1177,
            question:
                "Which one of the following is a pair of words not the same in meaning?",
            options: [
                "advise - inform",
                "extension - enlargement",
                "installed - set-up",
                "fat - thin",
            ],
            answer: "advise - inform",
        },
        {
            id: 1178,
            question:
                "Select the correct meaning of the underlined word: There is a great affinity between trees and men.",
            options: ["compassion", "respect", "resemblance", "proximity"],
            answer: "resemblance",
        },
        {
            id: 1179,
            question:
                "What does 'Credulous' mean in the sentence: 'Credulous people accept all the promises of the politicians.'?",
            options: [
                "those who believe readily",
                "kind hearted",
                "generous",
                "soft-spoken",
            ],
            answer: "those who believe readily",
        },
        {
            id: 1180,
            question:
                "You have to wait for ten minutes to break your fast as the clock is fast by ten minutes. Pick out the pair reflecting the meaning of the underlined words in the same order.",
            options: [
                "firm - highspeed",
                "ahead - firm",
                "starving - high speed",
                "starving - ahead",
            ],
            answer: "starving - ahead",
        },
        {
            id: 1181,
            question:
                "Choose the word which is nearest in meaning to the word ‘absurd’.",
            options: ["wrong", "accurate", "adequate", "inconsistent"],
            answer: "inconsistent",
        },
        {
            id: 1182,
            question:
                "Which of the following is a pair of words not the same in meaning?",
            options: [
                "acknowledge - admit",
                "defend - protect",
                "sensible - sensitive",
                "efficient - capable",
            ],
            answer: "sensible - sensitive",
        },
        {
            id: 1183,
            question: "Choose the correct alternative. 'Adulteration’ means:",
            options: [
                "voluntary offer",
                "becoming adult",
                "making impure",
                "less in weight",
            ],
            answer: "making impure",
        },
        {
            id: 1184,
            question:
                "Choose the word which is nearest in meaning to the word 'decease':",
            options: ["death", "disease", "malady", "injury"],
            answer: "death",
        },
        {
            id: 1185,
            question:
                "Which one of the following is the nearest meaning to the word 'static' as used in the passage?",
            options: ["unchangeable", "dynamic", "changing", "dimension"],
            answer: "unchangeable",
        },
        {
            id: 1186,
            question:
                "He is every inch a gentleman. Which of the following options best expresses the meaning of the underlined part of the above sentence?",
            options: ["completely", "partly", "only an inch", "part of inch"],
            answer: "completely",
        },
        {
            id: 1187,
            question:
                "Find out the correct meaning of the following sentence from the given alternatives : The batsman was a sheet anchor to his side as he scored a century.",
            options: [
                "The batsman was a good person.",
                "The batsman was an excellent player.",
                "The batsman was the chief support.",
                "The batsman was one of the supports.",
            ],
            answer: "The batsman was the chief support.",
        },
        {
            id: 1188,
            question: "Identify the correct meaning of the expression: viz.",
            options: ["Namely", "Contrary", "In fact", "In short"],
            answer: "Namely",
        },
        {
            id: 1189,
            question:
                "Choose the word similar in meaning with the word 'Artisan'",
            options: ["Artist", "Writer", "Craft", "Craftsman"],
            answer: "Craftsman",
        },
        {
            id: 1190,
            question: "Choose appropriate synonym for the word ‘Emphasize’.",
            options: ["Huge", "Stress", "Trace", "Big"],
            answer: "Stress",
        },
        {
            id: 1191,
            question: "Choose appropriate synonym for the word 'Auxiliary'",
            options: ["Subsidiary", "Regent", "Superior", "Oxygen"],
            answer: "Subsidiary",
        },
        {
            id: 1192,
            question:
                "Find out the correct synonyms from the following - ‘Excellent’",
            options: ["superior", "minor", "Inferior", "major"],
            answer: "superior",
        },
        {
            id: 1193,
            question: "COARSE",
            options: ["academic", "training", "rough", "grain"],
            answer: "rough",
        },
        {
            id: 1194,
            question: "IRREPROACHABLE",
            options: ["remarkable", "immense", "extraordinary", "faultless"],
            answer: "faultless",
        },
        {
            id: 1195,
            question: "PRONE",
            options: ["inclined", "prominent", "deleterious", "absorbed"],
            answer: "inclined",
        },
        {
            id: 1196,
            question: "NIMBLE",
            options: ["clumsy", "agile", "honest", "needless"],
            answer: "agile",
        },
        {
            id: 1197,
            question: "PRODIGAL",
            options: ["huge", "enormous", "wasteful", "prodigious"],
            answer: "wasteful",
        },
        {
            id: 1198,
            question: "PARITY",
            options: ["Similarity", "Vicinity", "Originality", "Versatility"],
            answer: "Similarity",
        },
        {
            id: 1199,
            question: "CHRONIC",
            options: ["Infectious", "Deep-rooted", "incurable", "Contagious"],
            answer: "Deep-rooted",
        },
        {
            id: 1200,
            question: "SPORADIC",
            options: ["frequent", "scattered", "irregular", "irksome"],
            answer: "irregular",
        },
        {
            id: 1201,
            question: "CLEMENCY",
            options: ["Mercy", "Patience", "Politeness", "Relaxed attitude"],
            answer: "Mercy",
        },
        {
            id: 1202,
            question: "ABNEGATION",
            options: [
                "Abomination",
                "consummation",
                "abolition",
                "renunciation",
            ],
            answer: "renunciation",
        },
        {
            id: 1203,
            question: "TACITURN",
            options: ["uncommunicative", "timid", "verbose", "fiery"],
            answer: "uncommunicative",
        },
        {
            id: 1204,
            question: "GREGARIOUS",
            options: ["talkative", "sociable", "pugnacious", "impudent"],
            answer: "sociable",
        },
        {
            id: 1205,
            question: "'Social malady' refers to.",
            options: ["population", "Growth", "poverty", "None of above"],
            answer: "poverty",
        },
        {
            id: 1206,
            question: "Riot",
            options: ["order", "disorder", "law", "peace"],
            answer: "disorder",
        },
        {
            id: 1207,
            question: "Contentment",
            options: [
                "Satisfaction",
                "dissatisfaction",
                "bitterness",
                "discontent",
            ],
            answer: "Satisfaction",
        },
        {
            id: 1208,
            question: "CANDID :",
            options: ["kind", "generous", "frank", "courteous"],
            answer: "frank",
        },
        {
            id: 1209,
            question: "DILIGENT",
            options: ["brave", "fake", "optimistic", "industrious"],
            answer: "industrious",
        },
        {
            id: 1210,
            question: "RUDIMENTARY",
            options: ["rude", "powerful", "basic", "rumour"],
            answer: "basic",
        },
        {
            id: 1211,
            question: "Indeed",
            options: ["Actually", "Fortunately", "Unfortunately", "Mainly"],
            answer: "Actually",
        },
        {
            id: 1212,
            question: "Publish",
            options: ["Adopt", "Accept", "Promulgate", "Refuse"],
            answer: "Promulgate",
        },
        {
            id: 1213,
            question: "The Sun was at its Zenith",
            options: ["The Sun Set", "The Sun lower", "Sunshine", "None"],
            answer: "None",
        },
        {
            id: 1214,
            question: "Alpha & Omega",
            options: [
                "A to Z",
                "Start to End",
                "start to finish",
                "None of these",
            ],
            answer: "A to Z",
        },
        {
            id: 1215,
            question: "CORPORAL",
            options: ["Spiritual", "Moral", "Physical", "Intellectual"],
            answer: "Physical",
        },
        {
            id: 1216,
            question: "BLUNDER",
            options: ["Correct", "Real", "Mistake", "Strong"],
            answer: "Mistake",
        },
        {
            id: 1217,
            question: "Select the correct synonym of “Transparent’.",
            options: ["Clear", "Opaque", "Hazy", "Unclear"],
            answer: "Clear",
        },
        {
            id: 1218,
            question:
                "Select the correct meaning of the underlined word in the sentence. The modern man has grown too materialistic.",
            options: ["Rich", "Worldly", "Humane", "Callous"],
            answer: "Worldly",
        },
        {
            id: 1219,
            question: "Select the accurate meaning of ‘Admonish’",
            options: ["warning", "punishment", "sentence", "freedom"],
            answer: "warning",
        },
        {
            id: 1220,
            question: "She is really fantastic girl. (Choose Similar Word)",
            options: ["Beautiful", "Intelligent", "Charming", "Wonderful"],
            answer: "Wonderful",
        },
        {
            id: 1221,
            question:
                "Choose the word which is similar in meaning to the given three words: Ceremony, Convention, Custom.",
            options: ["Communication", "Propitiation", "Ritual", "Sacrifice"],
            answer: "Ritual",
        },
        {
            id: 1222,
            question:
                "Choose the one which best expresses the meaning of the given word: Indolence",
            options: ["Leniency", "Laziness", "Relaxation", "Stagnation"],
            answer: "Laziness",
        },
        {
            id: 1223,
            question:
                "Choose the correct ‘synonym’ for the given word: direction:",
            options: ["notice", "instruction", "information", "action"],
            answer: "instruction",
        },
        {
            id: 1224,
            question: "Select the synonym ‘PRECIOUS’",
            options: ["estimated", "marketed", "available", "valuable"],
            answer: "valuable",
        },
        {
            id: 1225,
            question:
                "The end of his working life, the masterly touch of former years was lost. Choose the synonym for the word underlined.",
            options: ["bossy", "manly", "old fashioned", "skilful"],
            answer: "skilful",
        },
        {
            id: 1226,
            question: "Give synonym of : ‘Paternal’",
            options: [
                "related to another",
                "Patterns to divide things",
                "petals of flower",
                "Related to father",
            ],
            answer: "Related to father",
        },
        {
            id: 1227,
            question: "Give synonym of : ‘Dishy’",
            options: [
                "dashing",
                "showy",
                "sexually attractive",
                "A container of cooking",
            ],
            answer: "sexually attractive",
        },
        {
            id: 1228,
            question: "Choose the word which has familiar meaning to “decree!”",
            options: ["death", "degree", "order", "declare"],
            answer: "order",
        },
        {
            id: 1229,
            question: "Pick out the synonym of : Debilitating",
            options: [
                "shameful",
                "depressing",
                "encouraging",
                "weak and fable",
            ],
            answer: "weak and fable",
        },
        {
            id: 1230,
            question: "Choose the correct synonym of — ‘accurate.’",
            options: ["correct", "right", "exact", "up to the mark"],
            answer: "exact",
        },
        {
            id: 1231,
            question: "Choose the correct synonym of — ‘oral.’",
            options: ["by mouth", "using words", "circular", "dental"],
            answer: "by mouth",
        },
        {
            id: 1232,
            question: "Choose the correct synonym of — ‘street.’",
            options: ["Road", "Avenue", "Airway", "Straight"],
            answer: "Avenue",
        },
        {
            id: 1233,
            question: "Choose the correct synonym of — ‘Town.’",
            options: ["village", "cantonment", "city", "capital"],
            answer: "city",
        },
        {
            id: 1234,
            question:
                "“Callous’ has a meaning very near to one of the following words, which is it?",
            options: ["law", "brittle", "base", "insensitive"],
            answer: "insensitive",
        },
        {
            id: 1235,
            question: "The synonym of — ‘fanciful.’",
            options: ["beautiful", "imaginative", "romantic", "fashion"],
            answer: "imaginative",
        },
        {
            id: 1236,
            question: "‘The synonym of — “fictitious’ is",
            options: ["false", "foul", "fraud", "faltering"],
            answer: "false",
        },
        {
            id: 1237,
            question: "The synonym of ‘fortitude’ is",
            options: ["envy", "hope", "falsity", "courage"],
            answer: "courage",
        },
        {
            id: 1238,
            question: "In illness you must abstain from greasy food.",
            options: ["keep away", "eat", "carry on", "with"],
            answer: "keep away",
        },
        {
            id: 1239,
            question: "He is too intelligent not to solve this knotty problem.",
            options: ["serious", "tangled", "universal", "petty"],
            answer: "tangled",
        },
        {
            id: 1240,
            question:
                "As that crucial moment, we prayed to god to come to our rescue.",
            options: ["dangerous", "dreadful", "critical", "none of these"],
            answer: "critical",
        },
        {
            id: 1241,
            question: "It is certain that your choice will be her aversion.",
            options: ["liking", "preference", "priority", "dislike"],
            answer: "dislike",
        },
        {
            id: 1242,
            question:
                "Humility means politeness: Which of the following words is a synonym of it.",
            options: ["Modesty", "mirth", "frugal", "frown"],
            answer: "Modesty",
        },
        {
            id: 1243,
            question: "Choose the correct synonym of — Profusely.",
            options: ["abundantly", "clumsily", "promptly", "knowing"],
            answer: "abundantly",
        },
        {
            id: 1244,
            question: "Choose the correct synonym of — sufficient.",
            options: ["much", "scarce", "enough", "tolerate"],
            answer: "enough",
        },
        {
            id: 1245,
            question: "Choose the correct synonym of — Elegant.",
            options: ["intelligent", "refined", "intimate", "frugal"],
            answer: "refined",
        },
        {
            id: 1246,
            question: "Renowned — ",
            options: ["famous", "happy", "joyful", "evil"],
            answer: "famous",
        },
        {
            id: 1247,
            question: "Docile —",
            options: ["Manageable", "shame", "hesitant", "obedient"],
            answer: "Manageable",
        },
        {
            id: 1248,
            question: "Fragile —",
            options: ["thick", "delicate", "frugal", "heavenly"],
            answer: "delicate",
        },
        {
            id: 1249,
            question: "Bedlam —",
            options: ["Hospital", "school", "mad house", "orphanage"],
            answer: "mad house",
        },
        {
            id: 1250,
            question: "Data —",
            options: ["analysis", "report", "summary", "information"],
            answer: "information",
        },
        {
            id: 1251,
            question: "Oral —",
            options: ["written", "loud", "spoken", "sound"],
            answer: "spoken",
        },
        {
            id: 1252,
            question: "Contempt —",
            options: ["disrespect", "honour", "contest", "satisfied"],
            answer: "disrespect",
        },
        {
            id: 1253,
            question: "Thorough —",
            options: ["incomplete", "Complete", "throne", "agony"],
            answer: "Complete",
        },
        {
            id: 1254,
            question: "Expand —",
            options: ["safety", "to exhibit", "to spread out", "to show"],
            answer: "to spread out",
        },
        {
            id: 1255,
            question: "His cold behaviour stunned me.",
            options: ["cruel", "Inhuman", "furious", "passionless"],
            answer: "passionless",
        },
        {
            id: 1256,
            question:
                "I am well familiar with her nature. She is simple and shy.",
            options: ["Coy", "melancholy", "Modest", "Notorious"],
            answer: "Coy",
        },
        {
            id: 1257,
            question: "The nature of mercy is divine.",
            options: ["great", "Elevated", "Invisible", "Heavenly"],
            answer: "Heavenly",
        },
        {
            id: 1258,
            question: "Prosperity makes friends, adversity test them.",
            options: ["Poverty", "Disgrace", "Predicament", "None of these"],
            answer: "Poverty",
        },
        {
            id: 1259,
            question: "Woman, thy other name is vanity.",
            options: ["weakness", "conceit", "Dexterity", "sacrifice"],
            answer: "conceit",
        },
        {
            id: 1260,
            question: "Choose a word with similar meaning to 'gay'.",
            options: ["Happy", "grey", "get", "play"],
            answer: "Happy",
        },
        {
            id: 1261,
            question: "Choose the synonym of 'extravagant'.",
            options: ["foppish", "stupefying", "tyrannical", "Excessive"],
            answer: "Excessive",
        },
        {
            id: 1262,
            question: "Select the word nearest to the meaning of 'first':",
            options: ["final", "initial", "near", "none of these"],
            answer: "initial",
        },
        {
            id: 1263,
            question: "Select the word nearest to the meaning of 'parameter':",
            options: ["specification", "simplification", "accurate", "perfect"],
            answer: "specification",
        },
        {
            id: 1264,
            question: "Choose the correct synonym of 'Predominant.'",
            options: ["unimportant", "important", "easy", "detective"],
            answer: "important",
        },
        {
            id: 1265,
            question: "Choose the correct synonym — 'Rotary.'",
            options: ["line", "Round", "path", "none"],
            answer: "Round",
        },
        {
            id: 1266,
            question: "Choose the correct synonym of 'Placid.'",
            options: ["calm", "quiet", "play", "bore"],
            answer: "calm",
        },
        {
            id: 1267,
            question:
                "He is believed to be a very industrious worker. The synonym of the word 'industrious' is—",
            options: ["Successful", "Punctual", "Diligent", "Sensible"],
            answer: "Diligent",
        },
        {
            id: 1268,
            question:
                "Choose the correct option which has the same meaning for the word 'PRAGMATIC':",
            options: ["theoretical", "realistic", "productive", "suitable"],
            answer: "realistic",
        },
        {
            id: 1269,
            question:
                "I was surprised by his urbane behaviour. Which one of the following alternatives is nearest in meaning to the underlined word in the above sentence?",
            options: ["ruler", "polite", "proper", "town"],
            answer: "polite",
        },
        {
            id: 1270,
            question:
                "Which of the following is the closest synonym of 'large'?",
            options: ["huge", "big", "giant", "voluminous"],
            answer: "huge",
        },
        {
            id: 1271,
            question:
                "A posthumous award was given to the poet. The meaning of the word 'posthumous' is —",
            options: ["postal", "after-death", "creditable", "literary"],
            answer: "after-death",
        },
        {
            id: 1272,
            question: "He stood in the vestibule of the hotel.",
            options: ["pantry", "lobby", "kitchen", "basement"],
            answer: "lobby",
        },
        {
            id: 1273,
            question:
                "Identify the word which is similar in meaning to the underlined word. The new officer is a brash young man.",
            options: ["showy", "rude", "impudent", "All the above"],
            answer: "All the above",
        },
        {
            id: 1274,
            question:
                "Give the meaning of underlined words. It won’t be long before you have the world, literally at your finger tips and the ability to communicate at work or play.",
            options: [
                "near your finger tips",
                "to have everything, easily accessible",
                "to do anything",
                "advance in a particular situation",
            ],
            answer: "to have everything, easily accessible",
        },
        {
            id: 1275,
            question:
                "Choose the correct meaning of the word underlined. He is noted for his benevolent nature.",
            options: ["generous", "flexible", "pleasing", "brave"],
            answer: "generous",
        },
        {
            id: 1276,
            question:
                "The causal relation between nutritious diet and good health is well known. Pick out the correct meaning of the word underlined:",
            options: ["occasional", "irregular", "useful", "denoting cause"],
            answer: "denoting cause",
        },
        {
            id: 1277,
            question:
                "In the sentence given, state which is the exact meaning of the word ‘Race’? The race of ginseng is difficult to find.",
            options: ["Nationality", "Contest", "Root", "Track"],
            answer: "Root",
        },
        {
            id: 1278,
            question:
                "Choose the nearest meaning of the underlined word. There was nothing novel about the author’s latest novel. The characters were old and the plot was borrowed.",
            options: ["new word", "in name only", "new", "harmful"],
            answer: "new",
        },
        {
            id: 1279,
            question:
                "Choose from the following alternatives, the word which is closest in meaning with: Accolade",
            options: ["affection", "approval", "award", "applause"],
            answer: "award",
        },
        {
            id: 1280,
            question: "Choose the correct synonym of: Disgrace",
            options: ["graceful", "depress", "dishonour", "disappoint"],
            answer: "dishonour",
        },
        {
            id: 1281,
            question:
                "Give the correct nearest meaning of the underlined word, Please do not defer this work till tomorrow.",
            options: ["postpone", "disagree", "regard", "refuse"],
            answer: "postpone",
        },
        {
            id: 1282,
            question:
                "Fill in the blank by choosing the right alternative. There is an obvious _______ in the law covering pensions funds.",
            options: ["hold", "whole", "loophole", "holly"],
            answer: "loophole",
        },
        {
            id: 1283,
            question:
                "Suggest a synonym for the underlined word and choose the correct alternative. Bruce Lee was adept in Martial arts.",
            options: ["adopt", "adapt", "proficient", "eminent"],
            answer: "proficient",
        },
        {
            id: 1284,
            question:
                "i) The pail was full. ii) He looked pale. In the above two sentences, the underlined words respectively mean:",
            options: [
                "glass and frightened",
                "trough and disturbed",
                "Bucket and pallid",
                "jug and confused",
            ],
            answer: "Bucket and pallid",
        },
        {
            id: 1285,
            question:
                "He won the contest because of his agility. Substitute the underlined word with one closest in meaning.",
            options: ["cleverness", "skill", "strength", "Nimbleness"],
            answer: "Nimbleness",
        },
        {
            id: 1286,
            question:
                "He showed me an old bough of that tree. The underlined word in this sentence points to:",
            options: [
                "stem of tree",
                "root of tree",
                "branch of tree",
                "leaf of tree",
            ],
            answer: "branch of tree",
        },
        {
            id: 1287,
            question: "Which of the following is the closest synonym of cop?",
            options: ["guard", "officer", "police", "watchman"],
            answer: "police",
        },
        {
            id: 1288,
            question:
                "Choose the word nearest in meaning to the word underlined. He is very meticulous in his dealings with others.",
            options: ["reserved", "very careful", "indifferent", "naughty"],
            answer: "very careful",
        },
        {
            id: 1289,
            question:
                "The knowledge of the nuclear power might lead to annihilation of the human race. The meaning of the underlined word is:",
            options: [
                "total destruction",
                "immortality",
                "tremendous progress",
                "full healthfulness",
            ],
            answer: "total destruction",
        },
        {
            id: 1290,
            question:
                "Nobody agreed with him because his arguments were beside the mark. Identify the correct meaning of the underlined part.",
            options: [
                "irresponsible",
                "impossible",
                "incomprehensible",
                "irrelevant",
            ],
            answer: "irrelevant",
        },
        {
            id: 1291,
            question:
                "A good speaker establishes good rapport with the audience. Which of the following best explains the underlined words?",
            options: [
                "tries to understand other speakers",
                "connects well with the listeners",
                "files a report on the listeners",
                "contacts all his competitors",
            ],
            answer: "connects well with the listeners",
        },
        {
            id: 1292,
            question:
                "We should not despise anyone for his poverty. Identify the correct meaning of the word underlined.",
            options: ["scold", "scorn", "harm", "punish"],
            answer: "scorn",
        },
        {
            id: 1293,
            question:
                "The word ‘laudable’ can also be expressed as: (Choose the correct options)",
            options: [
                "(a) reprehensible",
                "(b) praiseworthy",
                "(c) commendable",
                "(d) admirable",
            ],
            answer: "(b), (c) and (d)",
        },
        {
            id: 1294,
            question:
                "Old Hindi movies were often great hits because of memorable lyrics. The underlined word can be understood to mean:",
            options: ["limericks", "songs", "graffiti", "speeches"],
            answer: "songs",
        },
        {
            id: 1295,
            question: "Select the word nearest to the meaning of ‘macro’.",
            options: ["middle", "micro", "small", "large"],
            answer: "large",
        },
        {
            id: 1296,
            question: "Select the word nearest to the meaning of ‘devalue’.",
            options: ["exchange", "reduce", "discover", "price"],
            answer: "reduce",
        },
        {
            id: 1297,
            question:
                "Choose the most suitable word for the given expression: ‘Change appearance so that people do not recognize a person.’",
            options: ["disguise", "costume", "colour", "difference"],
            answer: "disguise",
        },
        {
            id: 1298,
            question:
                "Choose from the following alternatives, the word which is most nearly the same in meaning: Pseudo",
            options: ["sweet smelling", "fresh", "salty", "fake"],
            answer: "fake",
        },
        {
            id: 1299,
            question: "Select the word nearest to the meaning of: Confusion",
            options: ["complex", "mixture", "discomfort", "chaos"],
            answer: "chaos",
        },
        {
            id: 1300,
            question:
                "Choose from the following alternatives, the word which is most nearly the same in meaning: ‘Majesty’",
            options: ["man", "lion", "club", "king"],
            answer: "king",
        },
        {
            id: 1301,
            question:
                "Every picture tells a story. Choose the correct synonym for the underlined word.",
            options: ["tail", "tale", "fact", "joke"],
            answer: "tale",
        },
        {
            id: 1302,
            question:
                "Are you attending the party tonight? Which of the following options can be used in place of the underlined word?",
            options: ["dinner", "lunch", "breakfast", "day"],
            answer: "dinner",
        },
        {
            id: 1303,
            question:
                "I must go to _______ to see the Headmaster. Choose the proper word from the following to fill in the blank, as per the sense of the sentence.",
            options: ["jail", "school", "temple", "club"],
            answer: "school",
        },
        {
            id: 1304,
            question: "Which of the following options means ‘mourn’?",
            options: ["morning", "lament", "earn", "dare"],
            answer: "lament",
        },
        {
            id: 1305,
            question: "Choose the appropriate synonym of the word ‘instance’.",
            options: ["forget", "example", "market", "insurance"],
            answer: "example",
        },
        {
            id: 1306,
            question:
                "Choose the most appropriate synonym for the underlined word: These are fictitious reports.",
            options: ["capricious", "concocted", "genuine", "fictional"],
            answer: "fictional",
        },
        {
            id: 1307,
            question:
                "Identify the meaning of the underlined word: We want an equitable distribution of the resources.",
            options: ["fair", "in the same measure", "quick", "healthy"],
            answer: "fair",
        },
        {
            id: 1334,
            question:
                "The border incident proved to be just the <u>PROLOGUE</u> to a full-scale invasion. Choose the best meaning of the underlined word.",
            options: ["Provocation", "Introduction", "Epilogue", "Proliferate"],
            answer: "Introduction",
        },
        {
            id: 1335,
            question: "Give synonym of ‘abandon’.",
            options: ["propagate", "adopt", "forsake", "dominate"],
            answer: "forsake",
        },
        {
            id: 1336,
            question:
                "Which of the following can be the meanings of CONSUMMATE? \na) Perfect \nb) Complete \nc) Goods",
            options: ["a only", "b only", "a and b only", "b and c only"],
            answer: "a and b only",
        },
        {
            id: 1337,
            question:
                "Choose the alternative from following which best expresses the meaning of the given word. PLACID:",
            options: ["Clear", "Calm", "Enjoyable", "Dull"],
            answer: "Calm",
        },
        {
            id: 1338,
            question:
                "Replace the underlined word one nearest in meaning. He has been <u>insinuating</u> that he needs a break.",
            options: [
                "requesting",
                "sending messages",
                "stating repeatedly",
                "hinting",
            ],
            answer: "hinting",
        },
        {
            id: 1339,
            question:
                "Choose the most suitable synonym for the underlined word. Since she was feeling <u>indolent</u>, she lay down listening to some music.",
            options: ["sleepy", "drowsy", "romantic", "lazy"],
            answer: "lazy",
        },
        {
            id: 1340,
            question: "Find the appropriate meaning of the word ‘Abrupt’.",
            options: ["Quick", "Delay", "Slow", "Vague"],
            answer: "Quick",
        },
        {
            id: 1341,
            question:
                "I don’t like to do any <u>tedious</u> job, however profitable it may be. Identify the word similar in meaning to the word underlined.",
            options: ["irksome", "unsuitable", "artless", "excessive"],
            answer: "irksome",
        },
        {
            id: 1342,
            question:
                "He is still trying to get his <u>wind</u> back. Pick out the correct meaning of the underlined word.",
            options: ["breeze", "breath", "turn", "coil"],
            answer: "breath",
        },
        {
            id: 1343,
            question:
                "Which of the following is not the exact synonym of the word given below? Childish",
            options: ["puerile", "juvenile", "silly", "childlike"],
            answer: "childlike",
        },
        {
            id: 1344,
            question:
                "Identify the exact meaning of the following words: descent, dissent.",
            options: [
                "climb down, show disagreement",
                "show disagreement, climb down",
                "go up, show agreement",
                "show agreement, climb up",
            ],
            answer: "climb down, show disagreement",
        },
        {
            id: 1345,
            question:
                "Enjoy the album of <u>tender</u> love songs. Pick out the correct meaning of the underlined word in the given context.",
            options: ["Kind", "delicate", "gentle", "romantic"],
            answer: "romantic",
        },
        {
            id: 1346,
            question:
                "The rebels returned home under <u>an amnesty</u>. Choose the word nearest in meaning to the underlined.",
            options: [
                "Police security",
                "Reliability",
                "General pardon",
                "Sympathy",
            ],
            answer: "General pardon",
        },
        {
            id: 1347,
            question:
                "Choose one of the following words which best expresses the meaning of the word 'Vacillate'.",
            options: ["waver", "never", "quiver", "queer"],
            answer: "waver",
        },
        {
            id: 1348,
            question:
                "Select from the alternatives, the word that conveys the same meaning as the word given in capital letters. TETE-A-TETE.",
            options: ["Delightful", "Penetrating", "Piercing", "Conversation"],
            answer: "Conversation",
        },
        {
            id: 1349,
            question:
                "Choose the option which best expresses the word underlined: He lost the contest in the <u>penultimate</u> round.",
            options: ["final", "second-last", "most difficult", "replay"],
            answer: "second-last",
        },
        {
            id: 1350,
            question: "Select a word nearest to the meaning of: remorse.",
            options: ["revenge", "repentance", "pity", "pride"],
            answer: "repentance",
        },
        {
            id: 1351,
            question:
                "Choose the correct synonym/s of the word printed in capitals in the following sentence. The film vividly shows the STARK realities of life for the poor and hungry. \na) Hard \nb) Bare \nc) Severe",
            options: ["a only", "b and c only", "a and b only", "a, b and c"],
            answer: "a, b and c",
        },
        {
            id: 1352,
            question:
                "He had the nerve to face robbers all alone. Choose the word nearest in meaning to the word underlined.",
            options: ["strength", "capacity", "audacity", "courage"],
            answer: "courage",
        },
        {
            id: 1353,
            question:
                "Give the synonym of : conceit a) bright b) pride c) vanity d) scholar",
            options: ["a and b", "b and c", "a and d", "b and d"],
            answer: "b and c",
        },
        {
            id: 1354,
            question:
                "Pick out the word which can replace the word underlined without changing the meaning of the sentence. We had to conceal the fact from her due to some reasons.",
            options: ["get", "keep", "hide", "avoid"],
            answer: "hide",
        },
        {
            id: 1355,
            question:
                "Pick out the word that is most nearly the same in meaning as the following word: Cite.",
            options: ["Recollect", "Quote", "Number", "Illustrate"],
            answer: "Quote",
        },
        {
            id: 1356,
            question:
                "Pick out the correct meaning of the word underlined. They won by a narrow margin.",
            options: ["edge", "scope", "difference", "space"],
            answer: "difference",
        },
        {
            id: 1357,
            question:
                "Choose the correct synonym for the underlined word. At the time of elections, political parties accept deserters from other parties.",
            options: ["patriot", "honest", "wicked", "runaways"],
            answer: "runaways",
        },
        {
            id: 1358,
            question:
                "Substitute the underlined word by choosing the correct alternative given below. Some writers depict mundane reality.",
            options: [
                "dull and ordinary",
                "events that may not happen",
                "physical or mental sufferings",
                "exciting",
            ],
            answer: "dull and ordinary",
        },
        {
            id: 1359,
            question:
                "Choose the best word which expresses the meaning of the given word. - Eager.",
            options: ["Clever", "Enthusiastic", "Curious", "Devoted"],
            answer: "Enthusiastic",
        },
        {
            id: 1360,
            question:
                "Choose the word that is nearly the same in meaning as the word given in capital. - BESEECH.",
            options: ["Represent", "Look forward", "Pray", "Search"],
            answer: "Pray",
        },
        {
            id: 1361,
            question:
                "Choose the word that is nearly the same in meaning as the word given in capital. - TURBID.",
            options: ["Viscosity", "Solution", "Thick", "Fluid"],
            answer: "Thick",
        },
        {
            id: 1362,
            question:
                "Identify the correct meaning of the underlined word: He has lost none of the political touch.",
            options: ["affect", "contact", "expertise", "pinch"],
            answer: "expertise",
        },
        {
            id: 1363,
            question:
                "Which of the given options comes nearest in meaning to the underlined word? - The suffrage was clearly for change.",
            options: ["vote", "pain", "inconvenience", "effort"],
            answer: "vote",
        },
        {
            id: 1364,
            question:
                "Which word / s is / are similar in meaning to the word printed in capitals in the given sentence? She was completely FLUMMOXED by the second question.",
            options: [
                "a) Confuse",
                "b) Bewilder",
                "c) Pacify",
                "a and b only",
                "b and c only",
                "a, b and c",
            ],
            answer: "a and b only",
        },
        {
            id: 1365,
            question:
                "The money was spent without parliamentary authority. Select the alternative that could best replace the underlined word.",
            options: ["control", "influence", "consent", "charge"],
            answer: "consent",
        },
        {
            id: 1366,
            question:
                "Identify the word closest in meaning to the word in capital in the following sentence: The scots are famous for their PAWKY humour.",
            options: [
                "Resembling Pakistani culture",
                "Amusing in an odd way.",
                "Soothing in an odd way.",
                "Scolding abruptly.",
            ],
            answer: "Amusing in an odd way.",
        },
        {
            id: 1367,
            question:
                "Internet is the most useful device to disseminate information.",
            options: ["collect", "record", "save", "spread"],
            answer: "spread",
        },
        {
            id: 1368,
            question:
                "Choose the word closest in meaning to the word in capital. He bought his angry wife some flowers, but she refused to be MOLLIFIED.",
            options: ["Crucify", "Dignify", "Pacify", "Deify"],
            answer: "Pacify",
        },
        {
            id: 1369,
            question:
                "The workers demand exorbitant pay scales. Identify the correct meaning of the underlined.",
            options: ["solid", "impressive", "attractive", "excessively high"],
            answer: "excessively high",
        },
        {
            id: 1370,
            question:
                "She was not a woman to make idle threats. Identify the correct meaning of the word in the given context:",
            options: ["inactive", "superficial", "meaningless", "redundant"],
            answer: "meaningless",
        },
        {
            id: 1371,
            question: "Choose the correct synonym for - Knack:",
            options: ["Aptitude", "Jack", "Snacks", "Things"],
            answer: "Aptitude",
        },
        {
            id: 1372,
            question:
                "Select the correct synonyms of spurious: a) false b) imaginary c) magnificent d) unproductive",
            options: [
                "only a and d",
                "only d and c",
                "only b and d",
                "only a and b",
            ],
            answer: "only a and b",
        },
        {
            id: 1373,
            question: "Which of the words has the same meaning as CALLOUS?",
            options: ["Stone", "Unkind", "Loud", "Suitable"],
            answer: "Unkind",
        },
        {
            id: 1374,
            question: "Choose the word similar in meaning to CONTAGIOUS.",
            options: [
                "Congruent",
                "Infectious",
                "Contemporary",
                "None of the above",
            ],
            answer: "Infectious",
        },
        {
            id: 1375,
            question: "The sun has faded the curtains.",
            options: ["dim", "dull", "discolour", "wither"],
            answer: "discolour",
        },
        {
            id: 1376,
            question:
                "He listened to my request with indifference. Choose the alternative that can replace the underlined word effectively.",
            options: ["disinterest", "displeasure", "concern", "caution"],
            answer: "disinterest",
        },
        {
            id: 1377,
            question:
                "Choose the suitable meaning of the underlined word from the alternatives given. “The poem is written in a very lucid style.”",
            options: ["intricate", "noble", "elaborate", "clear"],
            answer: "clear",
        },
        {
            id: 1378,
            question: "The term 'Vertical' is synonymous with",
            options: ["Straight", "Perpendicular", "Oblique", "Diagonal"],
            answer: "Perpendicular",
        },
        {
            id: 1379,
            question: "Choose the best synonym for the following word: Mention",
            options: ["Create", "Refer to", "Oppose", "Lead to"],
            answer: "Refer to",
        },
        {
            id: 1380,
            question:
                "The word 'Vive' has a Latin root. The meaning of the word 'Vive' is:",
            options: [
                "the best/fine",
                "Calm/quiet",
                "Live/ vivid",
                "Long/strong",
            ],
            answer: "Live/ vivid",
        },
        {
            id: 1381,
            question: "Identify the best synonym of the word GREGARIOUS.",
            options: ["Sociable", "Irritable", "Incorrigible", "Susceptible"],
            answer: "Sociable",
        },
        {
            id: 1382,
            question:
                "She looked at the physically challenged children with contempt.",
            options: ["hatred", "disrespect", "pity", "Sympathy"],
            answer: "disrespect",
        },
        {
            id: 1383,
            question:
                "In spite of the financial constraint, Vishal started his business and very soon became a successful industrialist.",
            options: ["Freedom", "Restriction", "Support", "Promise"],
            answer: "Restriction",
        },
        {
            id: 1384,
            question:
                "Substitute the underlined word with the one nearest in meaning. For certain kinds of offences, no circumstances can be considered as mitigating.",
            options: ["provocative", "extreme", "extenuating", "culpable"],
            answer: "extenuating",
        },
        {
            id: 1385,
            question:
                "Give synonym of the following words. - Obstinate, Slander, Thrifty",
            options: [
                "disease, vilification, headstrong",
                "filthy, smear, sparing",
                "hidden, thin, economical",
                "stubborn, defamation, frugal",
            ],
            answer: "stubborn, defamation, frugal",
        },
        {
            id: 1386,
            question:
                "Choose the words having similar meanings: a) ADIPOSE b) OLEAGINOUS c) FATTY",
            options: [
                "(a) and (b) only",
                "(a) and (c) only",
                "(b) and (c) only",
                "(a), (b), and (c)",
            ],
            answer: "(a), (b), and (c)",
        },
        {
            id: 1387,
            question:
                "The word nearest in meaning to the key word 'incredible' is: a) unbelievable b) unconvincing c) conceivable d) creditable",
            options: ["a, b, and c", "b, c, and d", "a and b", "All of these"],
            answer: "a and b",
        },
        {
            id: 1388,
            question:
                "The word nearest in meaning to the key word 'wrong' is: a) incorrect b) false c) accurate d) untrue",
            options: ["a, b, and d", "None of these", "a and c", "b and d"],
            answer: "a, b, and d",
        },
        {
            id: 1389,
            question:
                "The Paparazzi tailed them all over London. Select the correct synonym for the underlined word.",
            options: ["Followed", "Troubled", "Fought", "Blackmailed"],
            answer: "Followed",
        },
        {
            id: 1390,
            question:
                "_______ means strength, energy, power, force and spirit.",
            options: ["Victory", "Calamity", "Apology", "Vigour"],
            answer: "Vigour",
        },
        {
            id: 1391,
            question:
                "a. The boat skimmed over the water. b. She skimmed through the newspaper. Identify the correct meaning of the underlined words in the respective contexts.",
            options: [
                "Moved - Tossed",
                "Glided - Glanced",
                "Glanced - Removed",
                "Bounced - Flicked",
            ],
            answer: "Glided - Glanced",
        },
        {
            id: 1392,
            question:
                "The words closest in meaning to ABSCOND are: a) RETREAT b) DECAMP c) ABSOLVE",
            options: [
                "(a) only",
                "(a) and (b) only",
                "(a) and (c) only",
                "(a), (b), and (c)",
            ],
            answer: "(a) and (b) only",
        },
        {
            id: 1393,
            question: "Which of the following is not the meaning of 'bear'?",
            options: [
                "to go or turn in the direction mentioned",
                "to take responsibility",
                "to deal with something unpleasant",
                "to weep for some loss",
            ],
            answer: "to weep for some loss",
        },
        {
            id: 1394,
            question:
                "Identify the correct meaning of the underlined word in the given context: Before I started the job I had no preconceived notions.",
            options: [
                "Ideas or opinions formed after you have enough information of something",
                "Ideas or opinions formed before you have enough information",
                "Ideas or opinions formed after losing information of something",
                "None of these",
            ],
            answer: "Ideas or opinions formed before you have enough information",
        },
        {
            id: 1395,
            question:
                "Which of the following is the incorrect meaning of 'Acknowledge'?",
            options: ["Admit", "Express thanks", "Recognise", "None of these"],
            answer: "None of these",
        },
        {
            id: 1396,
            question:
                "Choose the best meaning of the word in capitals. This rain AUGURS well for this year's harvest.",
            options: [
                "Be a sign of something in future",
                "Be a sign of truth",
                "Be a sign of good/bad things in the future",
                "a, b, and c",
            ],
            answer: "a and c only",
        },
        {
            id: 1397,
            question:
                "You could forgive all his asperities when he smiled. Identify the correct meaning of the word underlined.",
            options: ["cruelty", "malignity", "malice", "roughness"],
            answer: "roughness",
        },
        {
            id: 1398,
            question:
                "Choose the correct alternative for the underlined words in the following sentences: a. I had a brief look at the report. b. It was my brief to make sure that the facts were set down accurately. c. I was briefed about the incident. d. Introduction was brief and polite.",
            options: [
                "short, instruction, informed, succinct",
                "scanty, hasty, directed, concise",
                "little, pointed, directive, lengthy",
                "compact, advise, updated, instruct",
            ],
            answer: "short, instruction, informed, succinct",
        },
        {
            id: 1399,
            question:
                "Which of the following is not the exact synonym of the following word? Inhuman",
            options: ["barbaric", "bestial", "merciless", "loving"],
            answer: "loving",
        },
        {
            id: 1400,
            question:
                "Give synonyms of the following words: attenuate, bourne, gaol",
            options: [
                "(a) reduce, destination, prison",
                "(b) appreciate, liberation, free",
                "(c) thin, limit, jail",
                "(d) enhance, freedom, release",
            ],
            answer: "(a) and (c) only",
        },
        {
            id: 1401,
            question:
                "Which one of the following words is synonymous with the word 'lenient'?",
            options: ["(a) lazy", "(b) luxurious", "(c) liberal", "(d) gentle"],
            answer: "(c) only",
        },
        {
            id: 1402,
            question:
                "Scientists have mainly focused on estimating how climate change has affected droughts.",
            options: ["Gauging", "Mocking", "Loathing", "Praising"],
            answer: "Gauging",
        },
        {
            id: 1421,
            question: "Earth demonstrates the importance of being ironic.",
            options: ["Confutes", "Beguiles", "Substantiate", "Challenges"],
            answer: "Substantiate",
        },
        {
            id: 1422,
            question: "It was the most incredible food in the world.",
            options: ["Plausible", "Undeniable", "Pungent", "Unimaginable"],
            answer: "Unimaginable",
        },
        {
            id: 1423,
            question:
                "Individuals should have these items authenticate prior to paying a significant price for them?",
            options: ["belittle", "avouched", "gainsay", "disproved"],
            answer: "avouched",
        },
        {
            id: 1424,
            question:
                "Giant cell tumours are originally benign but sometimes become malignant.",
            options: ["Rational", "Beautiful", "Pernicious", "Harmless"],
            answer: "Harmless",
        },
        {
            id: 1425,
            question: "She always sent extravagant gifts to her daughter.",
            options: ["modest", "judicious", "lavish", "cynical"],
            answer: "lavish",
        },
        {
            id: 1426,
            question:
                "It is very hard to understand her enigmatic personality.",
            options: ["desperate", "intelligent", "foolish", "mysterious"],
            answer: "mysterious",
        },
        {
            id: 1427,
            question:
                "The church was a hallowed place because of the sacred artefacts.",
            options: ["Valued", "Holy", "Precious", "Scarce"],
            answer: "Holy",
        },
        {
            id: 1428,
            question:
                "She looked at him in dismay trying to guess what he wanted of her.",
            options: ["composure", "contentment", "distress", "abrasive"],
            answer: "distress",
        },
        {
            id: 1429,
            question:
                "Reading or writing about grief is not for the faint-hearted.",
            options: ["Optimism", "Pleasure", "Gloom", "Facile"],
            answer: "Gloom",
        },
        {
            id: 1430,
            question:
                "The shark rapid attacked, and kept on repeating its behaviour.",
            options: ["clever", "quick", "quickly", "beastly"],
            answer: "quick",
        },
        {
            id: 1431,
            question:
                "An attempt is being made to entice otters back to the river.",
            options: ["entrap", "entail", "ensue", "enrage"],
            answer: "entrap",
        },
        {
            id: 1432,
            question: "The pain did not mitigate despite a painkiller.",
            options: ["Subside", "Compile", "Enhance", "Urge"],
            answer: "Subside",
        },
        {
            id: 1433,
            question:
                "Choose the word or phrase which is nearest in meaning to the key word. Bold",
            options: ["Meek", "Daring", "Cowardly", "Clumsy"],
            answer: "Daring",
        },
        {
            id: 1434,
            question:
                "The man was notorious for gambling and has lost all his wealth in the process.",
            options: ["criminal", "famous", "infamous", "reputable"],
            answer: "infamous",
        },
        {
            id: 1435,
            question: "The court has exonerated the accused.",
            options: ["freed", "punished", "summoned", "bailed"],
            answer: "freed",
        },
        {
            id: 1436,
            question:
                "Choose the word or phrase which is nearest in meaning to the key word Docile.",
            options: ["Liberal", "Quiet", "Indifferent", "Aggressive"],
            answer: "Quiet",
        },
        {
            id: 1437,
            question:
                "He had to cite many examples in the thesis to make it convincing.",
            options: ["Leave", "Quote", "Get", "Join"],
            answer: "Quote",
        },
        {
            id: 1438,
            question: "The farmer was banished from the village.",
            options: ["accepted", "welcomed", "expelled", "introduced"],
            answer: "expelled",
        },
        {
            id: 1439,
            question: "Handed generations down from in a culture",
            options: ["Commerce", "Fashion", "Norms", "Tradition"],
            answer: "Tradition",
        },
        {
            id: 1440,
            question: "The rains abated after the clouds cleared.",
            options: ["aggravated", "intensified", "subsided", "geared"],
            answer: "subsided",
        },
        {
            id: 1441,
            question: "He is revered as a national hero.",
            options: ["Respected", "Condemned", "Enjoyed", "Repeated"],
            answer: "Respected",
        },
        {
            id: 1442,
            question:
                "The glorious expedition had degenerated into a humiliating disaster.",
            options: ["unusual", "gentle", "enormous", "splendid"],
            answer: "splendid",
        },
        {
            id: 1443,
            question: "He drove recklessly and almost met with an accident.",
            options: ["rashly", "cautiously", "elaborately", "carefully"],
            answer: "rashly",
        },
        {
            id: 1444,
            question:
                "Choose the word or phrase which is nearest in meaning to the key word given below. Manifold",
            options: ["Singular", "Isolated", "Diverse", "Uniform"],
            answer: "Diverse",
        },
        {
            id: 1445,
            question: "Related to extra-terrestrial bodies.",
            options: ["Ancient", "Astrological", "Celestial", "Social"],
            answer: "Celestial",
        },
        {
            id: 1446,
            question: "Death is inevitable.",
            options: ["exaggerated", "horrible", "definite", "ubiquitous"],
            answer: "definite",
        },
        {
            id: 1447,
            question:
                "Select the most appropriate synonym of the word 'Banter'.",
            options: ["Gossip", "Praise", "Flattery", "Loyalty"],
            answer: "Gossip",
        },
        {
            id: 1448,
            question:
                "Select the most appropriate synonym of the word 'Confer'.",
            options: ["Criticise", "Collect", "Condemn", "Consult"],
            answer: "Consult",
        },
        {
            id: 1449,
            question:
                "Select the most appropriate synonym of the word 'Procure'.",
            options: ["Arouse", "Acquire", "Appeal", "Amend"],
            answer: "Acquire",
        },
        {
            id: 1450,
            question:
                "Select the most appropriate synonym of the word 'Denounce'.",
            options: ["Applaud", "Revile", "Flatter", "Ignore"],
            answer: "Revile",
        },
        {
            id: 1451,
            question:
                "Select the most appropriate synonym of the word 'Exorbitant'.",
            options: ["Petulant", "Relevant", "Excessive", "Brilliant"],
            answer: "Excessive",
        },
        {
            id: 1452,
            question:
                "Select the most appropriate synonym of the word 'Incessant'.",
            options: ["Occasional", "Halting", "Merciful", "Continuous"],
            answer: "Continuous",
        },
        {
            id: 1453,
            question:
                "Select the most appropriate synonym of the word 'Enhance'.",
            options: ["Enrich", "Endure", "Entice", "Encourage"],
            answer: "Enrich",
        },
        {
            id: 1454,
            question:
                "Select the most appropriate synonym of the word 'Indolence'.",
            options: ["Intelligence", "Exhibition", "Laziness", "Inadequacy"],
            answer: "Laziness",
        },
        {
            id: 1455,
            question:
                "Select the most appropriate synonym of the word 'Stationary'.",
            options: ["Envelope", "Restless", "Patient", "Motionless"],
            answer: "Motionless",
        },
        {
            id: 1456,
            question:
                "The presence of the carbide makes some of the metal very brittle.",
            options: ["Fragile", "Indolent", "Sturdy", "Elastic"],
            answer: "Fragile",
        },
        {
            id: 1457,
            question: "Catch the opportunity when it comes.",
            options: ["Siege", "Cease", "Seize", "Seal"],
            answer: "Seize",
        },
        {
            id: 1458,
            question: "We have to tolerate each other’s little FOIBLES.",
            options: ["Idiosyncracy", "Fables", "Infirmity"],
            answer: "Idiosyncracy",
        },
        {
            id: 1459,
            question: "She refused the proposal of his marriage point blank.",
            options: ["Strongly", "Coldly", "Directly", "Boldly"],
            answer: "Directly",
        },
        {
            id: 1460,
            question:
                "Choose the words having similar meanings: Venal, Mercenary, Wilful.",
            options: [
                "(a) and (c) only",
                "(b) and (c) only",
                "(a) and (b) only",
                "All of the above",
            ],
            answer: "All of the above",
        },
        {
            id: 1461,
            question: "Find out the correct synonym for - Explicit.",
            options: ["Exciting", "Refined", "Precise", "Clear"],
            answer: "Clear",
        },
        {
            "id": 1462,
            "question": "Choose the correct antonym of - Toilsome",
            "options": ["ugly", "attractive", "light", "fast"],
            "answer": "light"
          },
          {
            "id": 1463,
            "question": "Choose the correct antonym of - Defiant",
            "options": ["respectful", "obedient", "disciplined", "timid"],
            "answer": "obedient"
          },
          {
            "id": 1464,
            "question": "Choose the correct antonym of - Radical",
            "options": ["hollow", "obedient", "superficial", "basic"],
            "answer": "basic"
          },
          {
            "id": 1465,
            "question": "What is the opposite of 'Necessary'?",
            "options": ["useless", "general", "trivial", "unimportant"],
            "answer": "unimportant"
          },
          {
            "id": 1466,
            "question": "Select the correct antonym of 'Pride'",
            "options": ["friendship", "humility", "shame", "co-operation"],
            "answer": "humility"
          },
          {
            "id": 1467,
            "question": "Which of the following pairs are correctly matched as Antonyms?",
            "options": ["breed : generate", "scorn (V) : despise", "coarse : refined", "violation : adherence"],
            "answer": "coarse : refined"
          },
          {
            "id": 1468,
            "question": "Select the correct antonym of 'Sour'.",
            "options": ["Sweet", "Bitter", "Fresh", "Sorrow"],
            "answer": "Sweet"
          },
          {
            "id": 1469,
            "question": "Select the correct antonym of 'faultless'.",
            "options": ["defective", "flawless", "perfect", "accurate"],
            "answer": "defective"
          },
          {
            "id": 1470,
            "question": "Choose appropriate antonym for the word “Gloomy”",
            "options": ["Idle", "Wise", "Cheerful", "Sad"],
            "answer": "Cheerful"
          },
          {
            "id": 1471,
            "question": "Choose appropriate antonym for the word 'Drowsy'.",
            "options": ["Active", "Sleepy", "Famous", "Lethargic"],
            "answer": "Active"
          },
          {
            "id": 1472,
            "question": "Find out the correct antonym from the following: MAXIMUM",
            "options": ["sufficient", "Minimum", "More", "Less"],
            "answer": "Minimum"
          },
          {
            "id": 1473,
            "question": "Find out the correct antonyms from the following : SHALLOW",
            "options": ["deep", "shawl", "wide", "shower"],
            "answer": "deep"
          },
          {
            "id": 1474,
            "question": "ZEAL",
            "options": ["apathy", "disinterest", "carelessness", "hatred"],
            "answer": "apathy"
          },
          {
            "id": 1475,
            "question": "MELODIOUS",
            "options": ["hammonious", "odious", "tuneless", "ymellifluous"],
            "answer": "tuneless"
          },
          {
            "id": 1476,
            "question": "RADIANT",
            "options": ["absorptive", "uncritical", "casual", "dull"],
            "answer": "dull"
          },
          {
            "id": 1477,
            "question": "LEGITIMATE",
            "options": ["delicious", "decisive", "improper", "lethargic"],
            "answer": "improper"
          },
          {
            "id": 1478,
            "question": "OBVIOUS",
            "options": ["vague", "diminished", "motivate", "miserable"],
            "answer": "vague"
          },
          {
            "id": 1479,
            "question": "DISCOUNT",
            "options": ["Profit", "Concession", "Interest", "Premium"],
            "answer": "Profit"
          },
          {
            "id": 1480,
            "question": "GUILTY",
            "options": ["Pure", "Innocent", "Virtuous", "Angelic"],
            "answer": "Innocent"
          },
          {
            "id": 1481,
            "question": "AMBIGUOUS",
            "options": ["Secular", "Obscure", "Agreement", "Explicit"],
            "answer": "Explicit"
          },
          {
            "id": 1482,
            "question": "ILLEGIBLE",
            "options": ["clear", "readable", "clean", "imitable"],
            "answer": "clear"
          },
          {
            "id": 1483,
            "question": "LASSITUDE",
            "options": ["aptitude", "capacity", "vivacity", "magnitude"],
            "answer": "vivacity"
          },
          {
            "id": 1484,
            "question": "SABBATICAL",
            "options": ["prayerful", "vacation", "evil", "work"],
            "answer": "vacation"
          },
          {
            "id": 1485,
            "question": "OPPOSITE",
            "options": ["similar", "same", "estranged", "inappropriate"],
            "answer": "similar"
          },
          {
            "id": 1486,
            "question": "Choose the most appropriate word having meaning apposite to given word Resist.",
            "options": ["Assist", "Insist", "Welcome", "Fight"],
            "answer": "Assist"
          },
          {
            "id": 1487,
            "question": "Fortunate",
            "options": ["Sad", "Unhappy", "Unfortunate", "None"],
            "answer": "Unfortunate"
          },
          {
            "id": 1488,
            "question": "Orthodox",
            "options": ["Unorthodox", "Secular", "Socialist", "None"],
            "answer": "Unorthodox"
          }, 
          {
            "id": 1489,
            "question": "Choose the correct antonym of 'Savagery'",
            "options": ["Culture", "Wilderness", "Wildness", "Religion"],
            "answer": "Culture"
          },
          {
            "id": 1490,
            "question": "Choose the antonym - 'Challenge'",
            "options": ["Favour", "Praise", "Accept", "Admire"],
            "answer": "Accept"
          },
          {
            "id": 1491,
            "question": "Choose the correct antonym of : Nightmare",
            "options": ["dreams", "daylight", "occasions", "provisions"],
            "answer": "daylight"
          },
          {
            "id": 1492,
            "question": "Select the correct antonym of 'Ignorance'?",
            "options": ["Cleverness", "Stupidity", "Folly", "Absurdity"],
            "answer": "Cleverness"
          },
          {
            "id": 1493,
            "question": "Choose the given options which best expresses the opposite meaning of the word. AFFLUENCE.",
            "options": ["Influence", "Poverty", "Indifference", "Riches"],
            "answer": "Poverty"
          },
          {
            "id": 1494,
            "question": "Modesty",
            "options": ["Thoughtlessness", "Pride", "Extravagance", "Restlessness"],
            "answer": "Pride"
          },
          {
            "id": 1495,
            "question": "Give the antonym of the word 'former'.",
            "options": ["latter", "later", "before", "last"],
            "answer": "latter"
          },
          {
            "id": 1496,
            "question": "Select correct ‘Antonym’ for ‘accept’.",
            "options": ["reject", "refuse", "disqualify", "left"],
            "answer": "reject"
          },
          {
            "id": 1497,
            "question": "Self reliance has been <u>adopted</u> as an important objective of economic planning in modern India. Choose the antonym for the underlined word.",
            "options": ["refused", "forsaken", "denied", "discarded"],
            "answer": "refused"
          },
          {
            "id": 1498,
            "question": "Select correct ‘Antonym’ for the following word. CHOLERIC.",
            "options": ["Malaria", "healthy", "good-tempered", "cupid"],
            "answer": "good-tempered"
          },
          {
            "id": 1499,
            "question": "Choose the correct opposite word for the underlined word. There is a great <u>affinity</u> between the two girls.",
            "options": ["apathy", "empathy", "antipathy", "sympathy"],
            "answer": "antipathy"
          },
          {
            "id": 1500,
            "question": "Select the antonym for the underlined word : I like his friendly attitude.",
            "options": ["jealous", "emulous", "hostile", "vicious"],
            "answer": "hostile"
          },
          {
            "id": 1501,
            "question": "One should be <u>loyal</u> to one’s profession. Which of the given alternatives can be used to form the antonym of underlined word?",
            "options": ["un-", "in-", "dis-", "ab"],
            "answer": "dis-"
          },
          {
            "id": 1502,
            "question": "Which of the given alternatives best expresses the opposite meaning of the word 'LAVISH'",
            "options": ["frugal", "slavish", "peevish", "fragile"],
            "answer": "frugal"
          },
          {
            "id": 1503,
            "question": "Give antonym of 'Essential'",
            "options": ["unessential", "very essential", "not so useful", "un useful"],
            "answer": "unessential"
          },
          {
            "id": 1504,
            "question": "Give antonym of 'Bright'",
            "options": ["sparkling", "dark", "fade", "dull"],
            "answer": "dull"
          },
          {
            "id": 1505,
            "question": "Give antonym of : 'Attack'",
            "options": ["Counter attack", "Defend", "to fight", "re attack"],
            "answer": "Defend"
          },
          {
            "id": 1506,
            "question": "Give antonym of — DEFICIT,",
            "options": ["drawback", "detect", "surplus", "budget"],
            "answer": "surplus"
          },
          {
            "id": 1507,
            "question": "Give antonym of — METECULOUS",
            "options": ["thankful", "lavish", "imaginary", "careless"],
            "answer": "careless"
          },
          {
            "id": 1508,
            "question": "He liked the <u>pungent</u> sauce prepared by his mother. Choose the correct antonym for the word underlined.",
            "options": ["gentle", "mild", "insipid", "unsavoury"],
            "answer": "mild"
          },
          {
            "id": 1509,
            "question": "The antonym of <u>misanthrope</u> is ________",
            "options": ["loveless", "lovely", "loving", "loveable"],
            "answer": "loveable"
          },
          {
            "id": 1510,
            "question": "Select the antonym of 'Pride'.",
            "options": ["friendship", "cooperation", "humility", "shame"],
            "answer": "humility"
          },
          {
            "id": 1511,
            "question": "Select the word that is opposite in meaning to: Acumen.",
            "options": ["Intelligence", "Imbecility", "Potentiality", "Unfamiliarity"],
            "answer": "Imbecility"
          },
          {
            "id": 1512,
            "question": "Select the word that is opposite in meaning to: Profane.",
            "options": ["Arrogant", "Praiseworthy", "Respectful", "Pious"],
            "answer": "Pious"
          },
          {
            "id": 1513,
            "question": "Select the word that is opposite in meaning to: Accord.",
            "options": ["concord", "Policy", "Dissent", "Act"],
            "answer": "Dissent"
          },
          {
            "id": 1514,
            "question": "Select the word that is opposite in meaning to: Brazen.",
            "options": ["Helpful", "Delicious", "Innocent", "Respectful"],
            "answer": "Respectful"
          }, 
          {
        "id": 1515,
        "question": "Select the word that is opposite in meaning to <u>languid</u>.",
        "options": ["Fast", "Energetic", "Ferocious", "smart"],
        "answer": "Energetic"
      },
      {
        "id": 1516,
        "question": "Choose the correct Antonym of : SCARCE",
        "options": ["Pretty", "exquisite", "abundant", "redundant"],
        "answer": "abundant"
      },
      {
        "id": 1517,
        "question": "Choose the correct antonym of : Tainted",
        "options": ["fainted", "hinted", "shaded", "pure"],
        "answer": "pure"
      },
      {
        "id": 1518,
        "question": "Choose the correct antonym of : Deprive",
        "options": ["detach", "fetch", "attach", "snatch"],
        "answer": "attach"
      },
      {
        "id": 1519,
        "question": "Choose the correct antonym of : Mediocre",
        "options": ["excellent", "medieval", "prevalent", "scare"],
        "answer": "excellent"
      },
      {
        "id": 1520,
        "question": "Choose the most appropriate antonym for the underlined word from the options given below: The organization is known for its <u>probity</u>.",
        "options": ["weakness", "dullness", "wealth", "dishonesty"],
        "answer": "dishonesty"
      },
      {
        "id": 1521,
        "question": "This Person is liberal in his opinion. Choose the antonym of the word ‘liberal’ in this sentence :",
        "options": ["hostile", "generous", "conservative", "broad minded"],
        "answer": "conservative"
      },
      {
        "id": 1522,
        "question": "Choose the correct antonym of — 'cold'.",
        "options": ["warm", "hot", "dry", "freezed"],
        "answer": "warm"
      },
      {
        "id": 1523,
        "question": "Choose the correct antonym of — ‘adversity’",
        "options": ["opportunity", "variety", "virtue", "boon"],
        "answer": "boon"
      },
      {
        "id": 1524,
        "question": "What the antonym of — 'liberty'",
        "options": ["deliverance", "slavery", "bondage", "shackles"],
        "answer": "slavery"
      },
      {
        "id": 1525,
        "question": "Choose the word which has meaning opposite to— 'prudent'",
        "options": ["A foolish", "slave", "imprudent", "thrifty"],
        "answer": "imprudent"
      },
      {
        "id": 1526,
        "question": "Choose the correct antonym of — profound.",
        "options": ["plenty", "scanty", "deep", "vast"],
        "answer": "scanty"
      },
      {
        "id": 1527,
        "question": "Choose the antonym of — confess",
        "options": ["deny", "refuse", "reject", "shallow"],
        "answer": "deny"
      },
      {
        "id": 1528,
        "question": "Choose the correct antonym to the bold word in the sentence : The world is only an ‘ILLUSION’ said the odd man.",
        "options": ["fiction", "transitory", "reality", "short-live"],
        "answer": "reality"
      },
      {
        "id": 1529,
        "question": "Bacon was an intellectual giant but a moral <u>DWARF</u>.",
        "options": ["giant", "fresh", "budge", "big"],
        "answer": "giant"
      },
      {
        "id": 1530,
        "question": "God and his glory are <u>ETERNAL</u>. Choose the correct antonym to the word in capitals in the sentence.",
        "options": ["transient", "external", "destructive", "obscure"],
        "answer": "transient"
      },
      {
        "id": 1531,
        "question": "My plans may sound rather <u>NEBULOUS</u> to you but they are very ________ to me.",
        "options": ["clear", "concrete", "prominent", "conspicuous"],
        "answer": "clear"
      },
      {
        "id": 1532,
        "question": "I <u>NEVER</u> drive to work, I ________ walk.",
        "options": ["often", "always", "sometimes", "seldom"],
        "answer": "always"
      },
      {
        "id": 1533,
        "question": "My uncle is very wealthy, but rather PARSIMONTOUS in his habits.",
        "options": ["cordless", "stick", "generous", "extravagant"],
        "answer": "generous"
      },
      {
        "id": 1534,
        "question": "Choose the correct antonym of <u>fade</u>,",
        "options": ["faint", "bright", "soft", "hard"],
        "answer": "bright"
      },
      {
        "id": 1535,
        "question": "Choose the correct antonym of <u>contract</u>.",
        "options": ["agreement", "bargain", "stop", "disagreement"],
        "answer": "disagreement"
      },
      {
        "id": 1536,
        "question": "Choose the correct antonym of <u>Reveal</u>.",
        "options": ["Unravel", "Relate", "Lament", "Hide"],
        "answer": "Hide"
      },
      {
        "id": 1537,
        "question": "The bag is very <u>heavy</u>. Choose the opposite word of the underlined word from the following.",
        "options": ["light", "dark", "soft", "weak"],
        "answer": "light"
      },
      {
        "id": 1538,
        "question": "Choose the correct antonym of <u>Vertical</u>.",
        "options": ["Parallel", "Horizontal", "Vicious", "Perpendicular"],
        "answer": "Horizontal"
      },
      {
        "id": 1539,
        "question": "Choose the correct antonym of <u>Resident</u>.",
        "options": ["Habitat", "To reside", "To live", "Foreigner"],
        "answer": "Foreigner"
      }, 
      {
        "id": 1540,
        "question": "Choose the correct antonym of <u>suppressed</u>.",
        "options": ["Free", "Liberal", "Operation", "Healthy"],
        "answer": "Free"
      },
      {
        "id": 1541,
        "question": "Choose the correct antonym of fiasco.",
        "options": ["Cure-all", "success", "determination", "result"],
        "answer": "success"
      },
      {
        "id": 1542,
        "question": "Choose the correct antonym of Loyal.",
        "options": ["Faithful", "Legal", "Disloyal", "Honest"],
        "answer": "Disloyal"
      },
      {
        "id": 1543,
        "question": "Choose the correct antonym of Compassion.",
        "options": ["indifference", "distress", "timidity", "sobriety"],
        "answer": "indifference"
      },
      {
        "id": 1544,
        "question": "Choose the correct antonym of — demon.",
        "options": ["fair-minded", "kind-hearted", "garrulous", "angel"],
        "answer": "kind-hearted"
      },
      {
        "id": 1545,
        "question": "Choose the correct antonym of — Concise.",
        "options": ["short", "ignorant", "abundant", "wordy"],
        "answer": "wordy"
      },
      {
        "id": 1546,
        "question": "Choose the correct antonym of — remote.",
        "options": ["close", "disappear", "separate", "weak"],
        "answer": "close"
      },
      {
        "id": 1547,
        "question": "Choose the carrect antonym of - Forbid.",
        "options": ["permit", "admit", "entry", "neglect"],
        "answer": "permit"
      },
      {
        "id": 1548,
        "question": "Choose the correct antonym of — equality.",
        "options": ["inequality", "inequality", "unequally", "similarly"],
        "answer": "inequality"
      },
      {
        "id": 1549,
        "question": "Choose the word or the phrase from the following that is most nearly opposite in the meaning of the numbered word <u>weary</u>.",
        "options": ["Weak", "Energetic", "Powerful", "airy"],
        "answer": "Energetic"
      },
      {
        "id": 1550,
        "question": "Choose the correct antonym for the following word : 'Frugal'",
        "options": ["Extravagant", "Fragile", "Miserly", "Fictitious"],
        "answer": "Extravagant"
      },
      {
        "id": 1551,
        "question": "The growing <u>disparity</u> among the several states has been a subject of discussion for the politicians in India. Choose the word opposite to the meaning of 'disparity'.",
        "options": ["brotherhood", "equality", "diversity", "fraternity"],
        "answer": "equality"
      },
      {
        "id": 1552,
        "question": "She was a religious lady, but her son was ________. Choose the word opposite in meaning of the underlined word :",
        "options": ["pious", "an atheist", "unreligious", "philosopher"],
        "answer": "an atheist"
      },
      {
        "id": 1553,
        "question": "She was a very <u>attractive</u> girl. Choose the alternative giving an opposite of the underlined adjective :",
        "options": ["Bad", "Worse", "Repulsive", "Good"],
        "answer": "Repulsive"
      },
      {
        "id": 1554,
        "question": "The floods have caused ________ harm. Choose the right antonym of the word ‘calculable’ for filling the blank :",
        "options": ["uncalculable", "discalculable", "miscalculable", "incalculable"],
        "answer": "uncalculable"
      },
      {
        "id": 1555,
        "question": "Choose the word or phrase from the following that is most nearly opposite in meaning of the numbered word : Marvellous ________",
        "options": ["wonderful", "splendid", "ugly", "fantastic"],
        "answer": "ugly"
      },
      {
        "id": 1556,
        "question": "Choose the antonym for the word underlined in the sentence given : Absolute powers con not be vested in an individual.",
        "options": ["Perfect", "Unqualified", "Partial", "Arbitrary"],
        "answer": "Partial"
      },
      {
        "id": 1557,
        "question": "Everybody called it a lavish party. Choose the correct antonym of the word underlined.",
        "options": ["expensive", "big", "frugal", "wasteful"],
        "answer": "frugal"
      },
      {
        "id": 1558,
        "question": "Identify the correct pair of antonyms.",
        "options": ["confirm x contradict", "foreign x native", "encourage x embolden", "distant x remote"],
        "answer": "confirm x contradict"
      },
      {
        "id": 1559,
        "question": "Choose the correct word, opposite in meaning for the word given below : Rigid",
        "options": ["stiff", "unbending", "unyielding", "flexible"],
        "answer": "flexible"
      },
      {
        "id": 1560,
        "question": "Give antonym of the underlined word. His <u>parsimonious</u> habits are known to all his friends.",
        "options": ["plentiful", "lavish", "luxuriant", "ample"],
        "answer": "lavish"
      },
      {
        "id": 1561,
        "question": "Which of the following is not the antonym of old?",
        "options": ["young", "new", "past", "latest"],
        "answer": "past"
      },
      {
        "id": 1562,
        "question": "Choose the correct antonym of : rural",
        "options": ["polite", "well-bred", "polished", "urban"],
        "answer": "urban"
      }, 
      {
        "id": 1563,
        "question": "Choose the correct antonym of 'glad':",
        "options": ["happy", "sad", "pleased", "delighted"],
        "answer": "sad"
      },
      {
        "id": 1564,
        "question": "Choose the correct antonym of 'bottom':",
        "options": ["base", "foundation", "foot", "top"],
        "answer": "top"
      },
      {
        "id": 1565,
        "question": "Choose the correct antonym of 'wet':",
        "options": ["moist", "soaked", "damp", "dry"],
        "answer": "dry"
      },
      {
        "id": 1566,
        "question": "Choose the correct antonym of Frank.",
        "options": ["good-mixer", "reserved", "friendly", "proud"],
        "answer": "reserved"
      },
      {
        "id": 1567,
        "question": "Choose the word or phrase from the following that is most nearly opposite in meaning of the numbered word: Repudiate ________",
        "options": ["reject", "accept", "deny", "disown"],
        "answer": "accept"
      },
      {
        "id": 1568,
        "question": "Choose the word or phrase from the following that is most nearly opposite in meaning of the numbered word: Savage ________",
        "options": ["brutal", "primitive", "wild", "civilized"],
        "answer": "civilized"
      },
      {
        "id": 1569,
        "question": "Choose the most appropriate antonym of the underlined word from the options given below: He is known for his <u>gregarious</u> nature.",
        "options": ["congenial", "amiable", "straightforward", "unsociable"],
        "answer": "unsociable"
      },
      {
        "id": 1570,
        "question": "Give antonym of 'covetous': a) greedy b) avaricious c) grasping d) renouncing",
        "options": ["a and b", "b and c", "c and d", "d"],
        "answer": "d"
      },
      {
        "id": 1571,
        "question": "Give antonym of the word 'Spiritual':",
        "options": ["mundane", "intangible", "irreparable", "uninnovative"],
        "answer": "mundane"
      },
      {
        "id": 1572,
        "question": "Many of the incidents in the autobiography appear to be <u>fictitious</u>. Select the word which is opposite in meaning of the underlined.",
        "options": ["imaginary", "boring", "creative", "genuine"],
        "answer": "genuine"
      },
      {
        "id": 1573,
        "question": "Which one of the following words is opposite in meaning to the word 'transparent'?",
        "options": ["clear", "translucent", "sharp", "opaque"],
        "answer": "opaque"
      },
      {
        "id": 1574,
        "question": "Find out the antonym for the following word: Strange",
        "options": ["familiar", "unfamiliar", "weak", "strong"],
        "answer": "familiar"
      },
      {
        "id": 1575,
        "question": "Choose the correct antonym of - Absolve.",
        "options": ["bless", "repent", "melt", "blame"],
        "answer": "blame"
      },
      {
        "id": 1576,
        "question": "Give antonym of the following word: concur, devious \n(a) agreement, tricky \n(b) approve, useful \n(c) collaborate, cunning \n(d) disagree, straight",
        "options": ["(a) and (b) only", "(c) only", "(d) only", "(c) and (d) only"],
        "answer": "(c) and (d) only"
      },
      {
        "id": 1577,
        "question": "Choose the most appropriate antonym for the underlined word: Our teacher was a very <u>strict</u> person.",
        "options": ["lenient", "relaxed", "kind", "humorous"],
        "answer": "lenient"
      },
      {
        "id": 1578,
        "question": "Select the word that is most nearly opposite in meaning to the word given: Incessantly",
        "options": ["Frequently", "Periodically", "Regularly", "Submissive"],
        "answer": "Periodically"
      },
      {
        "id": 1579,
        "question": "Choose the word which is most opposite in meaning of the given word: Comparison",
        "options": ["Separate", "Different", "Distinct", "Contrast"],
        "answer": "Contrast"
      },
      {
        "id": 1580,
        "question": "Choose the best alternative from the following which expresses the opposite meaning of the given word: Recede",
        "options": ["Rush", "Advance", "Approach", "Forward"],
        "answer": "Advance"
      },
      {
        "id": 1581,
        "question": "Which word is opposite in meaning to the word printed in capitals in the given sentence? Eating bananas can be HEALTHY for babies.",
        "options": ["salubrious", "luscious", "deleterious", "disservice"],
        "answer": "deleterious"
      }, 
      {
        "id": 1582,
        "question": "Choose the word opposite in meaning to the given word. - Forbidden",
        "options": ["Allowed", "Prohibited", "Agreed", "Forsaken"],
        "answer": "Allowed"
      },
      {
        "id": 1583,
        "question": "Which of the word/s is/are opposite in meaning to the word printed in capitals in the given sentence? He is an ASTUTE businessman. \na) Simpleton b) Shrewd c) Foolish",
        "options": [
          "a and b only",
          "b and c only",
          "a and c only",
          "a, b and c"
        ],
        "answer": "a and c only"
      },
      {
        "id": 1584,
        "question": "Choose the best opposite meaning of the word printed in capitals in the following sentence. Today will be mostly fine and sunny, with INTERMITTENT showers.",
        "options": ["Incredible", "Termittent", "Incessant", "Heavy"],
        "answer": "Incessant"
      },
      {
        "id": 1585,
        "question": "Choose the word opposite in meaning to OSTENTATIOUS.",
        "options": ["Unpretentious", "Conscientious", "Advantageous", "None of the above"],
        "answer": "Unpretentious"
      },
      {
        "id": 1586,
        "question": "Choose the word having meaning opposite to the word in Capital. All other considerations are SUBSERVIENT to the need for quick profit.",
        "options": ["Solvent", "Predicament", "Resonance", "Dominant"],
        "answer": "Dominant"
      },
      {
        "id": 1587,
        "question": "He is very <u>diligent</u> young man, you won’t find him wasting his time. Select the word which is opposite in meaning of the word underlined.",
        "options": ["Brilliant", "Idle", "Curious", "Inattentive"],
        "answer": "Idle"
      },
      {
        "id": 1588,
        "question": "Write the antonym of the word given below: Ancestor",
        "options": ["Descendant", "Forefather", "Precursor", "Grandparent"],
        "answer": "Descendant"
      },
      {
        "id": 1589,
        "question": "Choose the words having meaning opposite of: IMMACULATE \n(a) Soiled (b) Spotted (c) Unblemished (d) Stained",
        "options": [
          "(a) and (d) only",
          "(b) and (d) only",
          "(a), (b) and (d)",
          "(a), (c) and (d)"
        ],
        "answer": "(a), (b) and (d)"
      },
      {
        "id": 1590,
        "question": "What is the correct antonym for the word? 'Memorable'",
        "options": ["Forgettable", "Memorial", "Immemorial", "Immoral"],
        "answer": "Forgettable"
      },
      {
        "id": 1591,
        "question": "Choose the most suitable word opposite in meaning of the word: 'Casual'",
        "options": ["Accidental", "Formal", "Informal", "Systematic"],
        "answer": "Formal"
      },
      {
        "id": 1592,
        "question": "Which of the following pairs of antonyms is incorrect: \na) Accept x Reject b) Bloom x Fade c) Defend x Suspend d) Progress x Regress",
        "options": [
          "(a) only",
          "(a) and (b)",
          "(c) only",
          "(c) and (d)"
        ],
        "answer": "(c) only"
      },
      {
        "id": 1593,
        "question": "Choose from the given alternatives the word which is opposite in meaning of the underlined word: He issues only <u>verbal</u> orders to escape the inquiry against those orders in future.",
        "options": ["Oral", "Vague", "Informal", "Written"],
        "answer": "Written"
      },
      {
        "id": 1594,
        "question": "Give antonym of the following words: Lament, Scatter.",
        "options": ["Rejoice, Gather", "Sad, Collect", "Mourn, Store", "Chaste, Gay"],
        "answer": "Rejoice, Gather"
      },
      {
        "id": 1595,
        "question": "Give antonym of the following words: Convex, Famous, Kernel.",
        "options": [
          "Curved, Known, Officer",
          "Concave, Obscure, Shell",
          "Dusk, Gloomy, Attack",
          "Stale, Reputed, Cover"
        ],
        "answer": "Concave, Obscure, Shell"
      },
      {
        "id": 1596,
        "question": "Choose the words having meaning opposite to that of INTREPID: \n(a) Pusillanimous b) Timorous c) Timid d) Undaunted",
        "options": [
          "(c) only",
          "(a) and (c) only",
          "(a), (b) and (c) only",
          "(a), (b), (c) and (d)"
        ],
        "answer": "(a), (b) and (c) only"
      },
      {
        "id": 1597,
        "question": "The priest entered the <u>sacred</u> place. Select the correct antonym to the word underlined.",
        "options": ["Holy", "Profane", "Religious", "Auspicious"],
        "answer": "Profane"
      }, 

    ],
    marathi: [
        {
            id: 1,
            question:
                "योग्य विधान/विधाने निवडा, \n अ) मराठी भाषेचा विकास संस्कृत व प्राकृत या भाषांपासून झाला आहे. \nब) विचार व्यक्त करण्याचे साधन म्हणजे भाषा होय. \nक) बोलणे, हावभाव, नाटक ही नैसर्गिक भाषा आहे. \nड) भाषेमध्ये भाषण व लेखन या दोन्हींचा समावेश होतो.",
            options: ["अ,ब,क", "ब, क, ड", "सर्व योग्य", "सांगता येत नाही."],
            answer: "सर्व योग्य",
        },
        {
            id: 2,
            question:
                "अयोग्य विधान निवडा. \n अ) देवनागरी लिपी उजवीकडून डावीकडे लिहितात. \n ब) लिपीच्या शोधाने लेखन शक्य झाले आहे. \n क) आपण ज्या खुणांनी लेखन करतो त्याला लिपी असे म्हणतात. \n ड) मोडी लिपी म्हणजे पाय मोडून लिहिण्याची पद्धत.",
            options: ["अ", "ब", "क", "ड"],
            answer: "अ",
        },
        {
            id: 3,
            question:
                "आधुनिक मराठी व्याकरणावरील पुस्तके व त्यांचे लेखक यांच्या योग्य जोड्या जुळवा.",
            image: "ppsaci_q3.png",
            options: ["3 4 2 1", "4 3 2 1", "2 4 3 1", "1 3 2 4"],
            answer: "4 3 2 1",
        },
        {
            id: 4,
            question: "अयोग्य जोडी ओळखा,",
            image: "ppsaci_q4.png",
            options: ["अ", "ब", "क", "सर्व योग्य"],
            answer: "सर्व योग्य",
        },
        {
            id: 5,
            question: "मराठी भाषेचे पाणिनी कोणाला म्हणतात ?",
            options: [
                "बाळशास्त्री जांभेकर",
                "दादोबा पांडुरंग तर्खडकर",
                "विष्णुशास्त्री चिपळूणकर",
                "यांपैकी नाही",
            ],
            answer: "दादोबा पांडुरंग तर्खडकर",
        },
        {
            id: 6,
            question: "मराठी भाषेचे शिवाजी म्हणून कोणास ओळखले जाते ?",
            options: [
                "बाळशास्त्री जांभेकर",
                "दादोबा पांडुरंग",
                "विष्णुशास्त्री चिपळूणकर",
                "यांपैकी नाही",
            ],
            answer: "विष्णुशास्त्री चिपळूणकर",
        },
        {
            id: 7,
            question: "लिपीचा शोध लागल्याने आपल्याला काय शक्य झाले आहे?",
            options: ["वाचन", "लेखन", "मनन", "चिंतन"],
            answer: "लेखन",
        },
        {
            id: 8,
            question: "भाषा म्हणजे ______",
            options: [
                "बोलणे",
                "विचार व्यक्त करण्याचे साधन",
                "लिहिणे",
                "संभाषणाची कला",
            ],
            answer: "विचार व्यक्त करण्याचे साधन",
        },
        {
            id: 9,
            question:
                " विचार व्यक्त करण्यासाठी मानवाला मिळालेले मुख्य सायन कोणते?",
            options: ["मित्र", "भाषा", "भावना", "समाज"],
            answer: "भाषा",
        },
        {
            id: 10,
            question: "खालीलपैकी कोणती भाषा नैसर्गिक नाही.",
            options: ["पानांची सळसळ", "टंकलेखन", "नदीची खळखळ", "पक्षांचे आवाज"],
            answer: "टंकलेखन",
        },
        {
            id: 11,
            question: "देवनागरी लिपी असणाऱ्या भाषा कोणत्या?",
            options: [
                "मराठी, गुजराती, हिंदी, संस्कृत",
                "मराठी, हिंदी, कानडी, इंग्रजी",
                "मराठी, तेलगू, हिंदी, संस्कृत",
                "मराठी, कानडी, गुजराती, बंगाली",
            ],
            answer: "मराठी, गुजराती, हिंदी, संस्कृत",
        },
        {
            id: 12,
            question:
                "मराठी भाषा खालीलपैकी कोणत्या भाषांपासून विकसित झाली आहे?",
            options: [
                "इंग्रजी-संस्कृत",
                "कानडी-हिंदी",
                "संस्कृत-प्राकृत",
                "संस्कृत-मराठी",
            ],
            answer: "संस्कृत-प्राकृत",
        },
        {
            id: 13,
            question: "'भाषा' हा शब्द संस्कृतमधील ______ धातूपासून आला आहे.",
            options: ["बोलणे", "भाषिक", "भाषा", "भाष्"],
            answer: "भाष्",
        },
        {
            id: 14,
            question: "लिपी म्हणजे काय?",
            options: [
                "लिंपणे म्हणजे लिपी",
                "सारवणे म्हणजे लिपी",
                "आपण जी भाषा बोलतो त्याला लिपी म्हणतात.",
                "आपण ज्या खुणांनी लिखाण करतो त्याला लिपी म्हणतात.",
            ],
            answer: "आपण ज्या खुणांनी लिखाण करतो त्याला लिपी म्हणतात.",
        },
        {
            id: 15,
            question: "खालीलपैकी कोणत्या भाषेची लिपी 'देवनागरी' नाही.",
            options: ["संस्कृत", "हिंदी", "मराठी", "उर्दू"],
            answer: "उर्दू",
        },
        {
            id: 16,
            question:
                "काही काळ मराठी भाषेला मुरड घालून लिहिण्याची पद्धत अस्तित्वात होती, तिला _______ लिपी म्हणतात.",
            options: ["अर्धमागधी", "देवनागरी", "पाली", "मोडी"],
            answer: "मोडी",
        },
        {
            id: 17,
            question:
                "पर्यायी उत्तरांतून योग्य ते पर्यायी उत्तर शोधा. 'भाषा नदीच्या प्रवाहाप्रमाणे असते. कारण-",
            options: [
                "भाषेच्या प्रवाहात वळणे नसतात.",
                "भाषेमध्ये बदल होत जातात.",
                "भाषेच्या व्याकरणाच्या नियमांना मुरड घालावी लागत नाही",
                "भाषेचा प्रवाह अखंड चालू नसतो.",
            ],
            answer: "भाषेमध्ये बदल होत जातात.",
        },
        {
            id: 18,
            question:
                '"भाषा ही केवळ संवादाचेच माध्यम नाही, तर साहित्यांच्या संदर्भात ती आत्माविष्काराचे सर्वश्रेष्ठ माध्यम आहे!"',
            options: [
                "संपूर्ण बरोबर",
                "संपूर्ण चूक",
                "पूर्वार्ध बरोबर आहे.",
                "उत्तरार्ध बरोबर आहे",
            ],
            answer: "संपूर्ण बरोबर",
        },
        {
            id: 19,
            question: "मराठी भाषेसंदर्भातील पुढील कोणते वाक्य अयोग्य आहे?",
            options: [
                "'मराठी असे आमुची मायबोली' असे प्रत्येक मराठी भाषिकाने अभिमानाने म्हटले पाहिजे.",
                "मराठी महाराष्ट्र राज्याची राजभाषा आहे.",
                "हिंदी ही मराठी भाषेची जननी आहे.",
                "आज मराठी भाषेच्या लेखनासाठी देवनागरी लिपीचा वापर होतो",
            ],
            answer: "हिंदी ही मराठी भाषेची जननी आहे.",
        },
        {
            id: 20,
            question: "भाषाविषयक कौशल्यांच्या साधारणपणे किती पायऱ्या आहेत?",
            options: ["पाच", "तीन", "चार", "दोन"],
            answer: "पाच",
        },
        {
            id: 21,
            question:
                "मराठी भाषा लिपीस कोणत्या नावाने ओळखले जाते? \n अ) वर्णमाला लिपी \nब) देवनागरी लिपी \nक) बालबोध लिपी \nड)आदर्श लिपी",
            options: [
                "फक्त अ आणि ब बरोबर",
                "फक्त ब आणि क बरोबर",
                "फक्त अ आणि ड बरोबर",
                "फक्त ड बरोबर",
            ],
            answer: "फक्त ब आणि क बरोबर",
        },
        {
            id: 22,
            question:
                "खालील विधानातील योग्य उत्तर शोधा? \nआपले भाषाशिक्षण विविध कौशल्यावर सुरू असते. \na) ऐकणे \nb) बोलणे \nc) वाचणे \nd) फिरणे",
            options: ["a, b, d", "d", "b, c, d", "a, b, c"],
            answer: "a, b, c",
        },
        {
            id: 23,
            question: "खान्देश भागात बोलली जाणारी बोली कोणती?",
            options: ["अहिराणी", "कोकणी", "हळबी", "डांगी"],
            answer: "अहिराणी",
        },
        {
            id: 24,
            question:
                "चूक की बरोबर सांगा :\na) आपण जी लिपी वापरतो तिला बाळबोध लिपीही म्हणतात. \nb) देवनागरी लिपी उभ्या आडव्या, तिरप्या, गोलसर अशा रेषांनी बनलेली असते. \nc) देवनागरी लेखकाच्या उजवीकडून डावीकडे लिहिली जाते.",
            options: [
                "फक्त (c) चूक",
                "फक्त (a) चूक",
                "फक्त (a) बरोबर",
                "फक्त (b) बरोबर",
            ],
            answer: "फक्त (c) चूक",
        },
        {
            id: 25,
            question:
                "योग्य विधान ओळखा : \na) देवनागरी लिपीत प्रत्येक ध्वनिला स्वतंत्र चिन्ह असते. \nb) संस्कृत व प्राकृत या भाषांची लिपी देवनागरी आहे. \nc) मराठी भाषेच्या लिपीला देवनागरी लिपी म्हणतात. \nd) देवनागरी या लिपीत कोणतेही चिन्ह एकापेक्षा अधिक ध्वनी दाखवितात.",
            options: [
                "फक्त (a) बरोबर",
                "फक्त (a, b) बरोबर",
                "फक्त (a, b, c) बरोबर",
                "वरील सर्व पर्याय बरोबर",
            ],
            answer: "फक्त (a, b, c) बरोबर",
        },
        {
            id: 26,
            question:
                "खालीलपैकी कोणते देवनागरी लिपीचे वैशिष्ट्य नाही ? \na. गतीयुक्त आणि व्यावहारिक लिपी \nb. वर्णमालेचे वैज्ञानिक वर्गीकरण \nc. दुहेरी लिपीचिन्हांचा समावेश \nd. हस्व आणि दीर्घ मात्रांची व्यवस्था",
            options: ["फक्त a आणि b", "फक्त b आणि d", "फक्त c", "फक्त b"],
            answer: "फक्त c",
        },
        {
            id: 27,
            question:
                "योग्य विधाने ओळखा, \nअ) तोंडावाटे निघणारे मूल ध्वनी म्हणजे वर्णं होय. \nब) ध्वनीला चिन्ह किंवा खूण स्वरूपात लिहिल्यास त्याचे अक्षर बनते. \nक) शब्द होण्यासाठी अक्षरे ठरावीक क्रमाने येऊन त्यांना अर्थ प्राप्त होणे गरजेचे असते. \nड) अर्थपूर्ण शब्दसमूहाला वाक्य असे म्हणतात.",
            options: ["अ, ब", "ब, क, ड", "अ, ब, क", "अ,ब,क,ड"],
            answer: "अ,ब,क,ड",
        },
        {
            id: 28,
            question:
                "शब्दांच्या समुच्चयाने एक पूर्ण विचार व्यक्त होतो. त्यास व्याकरणात काय म्हणतात?",
            options: ["वाक्य", "शब्द", "पद", "धातू"],
            answer: "वाक्य",
        },
        {
            id: 29,
            question: "अक्षर म्हणजे काय?",
            options: [
                "तोंडाद्वारे निघणारे ध्वनी म्हणजे अक्षर.",
                "आवाजाच्या किंवा ध्वनीच्या प्रत्येक खुणेला अक्षर असे म्हणतात.",
                "अक्षर म्हणजे लवकर नष्ट होणारे",
                "यांपैकी नाही",
            ],
            answer: "आवाजाच्या किंवा ध्वनीच्या प्रत्येक खुणेला अक्षर असे म्हणतात.",
        },
        {
            id: 30,
            question:
                "ठरावीक क्रमाने आलेल्या अक्षरांच्या समूहाला काही अर्थ प्राप्त होत असेल तर त्यास म्हणतात",
            options: ["वाक्य", "अक्षर समूह", "शब्द", "वर्ण"],
            answer: "शब्द",
        },
        {
            id: 31,
            question: "खाली दिलेल्या जोड्या लावा, (incomplete question)",
            image: "ppsaci_q31.png",
            options: ["3 4 1 2", "3 4 2 1", "3 2 4 1", "2 1 4 3"],
            answer: "",
        },
        {
            id: 32,
            question: "इंग्रजीत Analysis वरुन मराठीच्या व्याकरणात आला आहे.",
            options: [
                "वाक्यशास्त्रविचार",
                "समीक्षाविचार",
                "साहित्यविचार",
                "अलंकारविचार",
            ],
            answer: "वाक्यशास्त्रविचार",
        },
        {
            id: 33,
            question:
                "लेखननियामानुसार अयोग्य असलेले वाक्य ओळखून त्याचा अचूक पर्याय ओळखा.",
            options: [
                "अक्षरे म्हणजे पूर्ण उच्चारलेले वर्ण होय.",
                "व्यंजनात स्वर मिळवून अक्षर बनते.",
                "अक्षर म्हणजे पूर्ण अर्थाचे बोलणे होय.",
                "मुखावाटे निघणाऱ्या मूलध्वनींना वर्ण म्हणतात.",
            ],
            answer: "अक्षर म्हणजे पूर्ण अर्थाचे बोलणे होय.",
        },
        {
            id: 34,
            question:
                "एखाद्या शब्दसमूहाला किंवा शब्दाला पूर्ण अर्थ प्राप्त झाला आहे. तर त्याला असे म्हणतात.",
            options: ["वाक्य", "सर्वनाम", "क्रियापद", "केवलप्रयोगी"],
            answer: "वाक्य",
        },
        {
            id: 35,
            question:
                "आपल्या तोंडावाटे निघणाऱ्या मूलध्वनींना काय म्हंटले जाते?",
            options: ["अक्षर", "वर्ण", "पद", "वाक्य"],
            answer: "वर्ण",
        },
        {
            id: 36,
            question: "वाक्य म्हणजे ",
            options: [
                "अर्थहीन बोलणे",
                "अर्थपूर्ण बोलणे",
                "शब्दांचा समूह",
                "अक्षरांचा समूह",
            ],
            answer: "अर्थपूर्ण बोलणे",
        },
        {
            id: 37,
            question: "व्याकरण म्हणजे काय?",
            options: [
                "व्याकरणकारांनी लिहिलेली भाषा",
                "भाषेचे स्वरूप स्पष्ट करणे.",
                "भाषेचे स्पष्टीकरण करणारे शास्त्र.",
                "भाषेची उपयुक्तता स्पष्ट करणे.",
            ],
            answer: "भाषेचे स्पष्टीकरण करणारे शास्त्र.",
        },
        {
            id: 38,
            question:
                "योग्य पर्याय निवडा. \na) शब्दाच्या मूळ रूपाचे बदललेले रूप म्हणजे विकृती होय. \nb) प्रकृतीला प्रत्यय लागून जे रूप तयार होते त्याला विकृती म्हणतात.",
            options: [
                "फक्त (a, b) बरोबर",
                "फक्त (a, b) चूक",
                "फक्त (a) बरोबर",
                "फक्त (b) बरोबर",
            ],
            answer: "फक्त (a, b) बरोबर",
        },
        {
            id: 39,
            question:
                "पुढील विधाने वाचा. \na) वाक्य म्हणजे पूर्ण अर्थाचे बोलणे होय. \nb) वाक्यातील शब्दांना पद असे म्हणतात. \nc) वाक्य म्हणजे शब्दांची मांडणी होय.",
            options: [
                "(a) व (b) बरोबर, (c) चूक",
                "(a) बरोबर, (b, c) चूक",
                "(a) व (b), (c) बरोबर",
                "(b), (c) बरोबर, (a) चूक",
            ],
            answer: "(a) व (b) बरोबर, (c) चूक",
        },
        {
            id: 40,
            question:
                " 'मुलांनी' या शब्दात \n (a)'मु' हे एक अक्षर आहे. \n(b) 'मु' हे एक ध्वनिचिन्ह आहे. \n(c) 'मु' हा एक मूलध्वनी आहे. \n(d) म् व उ हे मूलध्वनी आहेत.",
            options: [
                "(a) व (d) बरोबर, (b), (c) चूक",
                "(a), (b) व (d) बरोबर, (c) चूक",
                "(a) बरोबर, (b), (c), (d) चूक",
                "(b), (c) बरोबर, (a), (d) चूक",
            ],
            answer: "(a), (b) व (d) बरोबर, (c) चूक",
        },
        {
            id: 41,
            question:
                "'व्याकरण हे भाषाशुद्ध करणाऱ्या प्रयोजनाला बांधलेले आदेशात्मक शास्त्र आहे' असे मत कोणती व्याकरणकाराने प्रथम मांडले?",
            options: [
                "दादोबा पांडुरंग तर्खडकर",
                "विष्णुशास्त्री चिपळूणकर",
                "रा. भि. गुंजीकर",
                "मोरो केशव दामले",
            ],
            answer: "दादोबा पांडुरंग तर्खडकर",
        },
        {
            id: 42,
            question:
                "पुढील विधाने वाचून अचूक पर्याय निवडा.\n(a) तोंडावाटे निघणाऱ्या मूलध्वनीना वर्ण म्हणतात. \n(b) ध्वनींच्या लेखनासाठी आपण विशिष्ट चिन्हे वापरतो. \n(c) ध्वनींच्या चिन्हांना आपण अक्षरे म्हणतो.",
            options: [
                "(a) व (b) पर्यायू बरोबर, (c) चूक",
                "(a) व (c) पर्याय बरोबर, (b) चूक",
                "फक्त (a). बरोबर",
                "(a), (b) व (c) बरोबर",
            ],
            answer: "(a), (b) व (c) बरोबर",
        },
        {
            id: 43,
            question: "खालीलपैकी सजातीय स्वरांची जोडी सांगा.",
            options: ["अ-इ", "आ-ऊ", "आ-ई", "इ-ई"],
            answer: "इ-ई",
        },
        {
            id: 44,
            question:
                "अयोग्य विधान/विधाने ओळखा. \nअ) य्, र्, ल्, व् हे अर्धस्वर आहेत. \nब) त्यांचा जन्म अनुक्रमे इ, ऋ, लृ, उ या स्वरांच्या उच्चार स्थानांवर होतो. \nक) त्यांचा खरा क्रम य्, व्, र्, ल् असा आहे. \nड) अर्धस्वर व्यंजनांचाच एक प्रकार आहे.",
            options: ["ब", "क", "ड", "कोणतेच विधान अयोग्य नाही"],
            answer: "कोणतेच विधान अयोग्य नाही",
        },
        {
            id: 45,
            question:
                "खालील विधाने लक्षात घ्या.\nअ) मराठी भाषेत एकूण 34 व्यंजने आहेत. \nब) अनुनासिकांचा उच्चार तोंडाबरोबर थोडा नाकातुनही होतो. \nक) ज्या वर्णांचा उच्च्चार सोपा असतो, त्यांना मृदू वर्ण म्हणतात. \nड) अं व अः यांना स्वरादी म्हणतात.",
            options: ["अ व ब बरोबर", "क व ड बरोबर", "सर्व बरोबर", "सर्व चूक"],
            answer: "सर्व बरोबर",
        },
        {
            id: 46,
            question: "'ड्' आणि 'द' ही कोणती व्यंजने आहेत ती ओळखा?",
            options: [
                "कठोर व्यंजने",
                "उष्मे व्यंजने",
                "मृदू व्यंजने",
                "महाप्राण व्यंजने",
            ],
            answer: "मृदू व्यंजने",
        },
        {
            id: 47,
            question: "जोड्या जुळवा",
            image: "ppsaci_q47.png",
            options: ["2 3 4 1", "2 4 1 3", "3 1 2 4", "4 1 2 3"],
            answer: "4 1 2 3",
        },
        {
            id: 48,
            question:
                "'व्यंजनाने शेवट होणे' या अर्थी खालीलपैकी कोणता शब्द बरोबर आहे?",
            options: ["व्यंजनान्त", "व्यंजनांत", "व्यंजनात", "व्यंजनामध्ये"],
            answer: "व्यंजनान्त",
        },
        {
            id: 49,
            question: "खालीलपैकी कोणत्या वर्णाच्या पूर्वी स्वर आहे?",
            options: ["अ", "ऊ", "अ:", "अॅ"],
            answer: "अ:",
        },
        {
            id: 50,
            question:
                "खालीलपैकी योग्य विधान ओळखा. \nअ) मराठी भाषेचे लिखाण आपण देवनागरी लिपीत करतो. \nब) आपल्या तोंडावाटे निघणाऱ्या मूल ध्वनींना वर्ण म्हणतात. \nक) मराठी भाषेतील आधुनिक वर्णमालेत एकूण 52 वर्ण आहेत \nड) मराठी भाषेतील आधुनिक वर्णमालेत एकूण 14 स्वर आहेत.",
            options: ["अ व ब", "ब व क", "कोणतेच नाही", "सर्व बरोबर"],
            answer: "सर्व बरोबर",
        },
        {
            id: 51,
            question: "अयोग्य जोडी शोधा,",
            image: "ppsaci_q51.png",
            options: ["अ", "ब", "क", "ड"],
            answer: "क",
        },
        {
            id: 52,
            question:
                "स्वरांच्या हस्व/दीर्घ उच्चारानुसार शब्दांचे अर्थ बदलू शकतात; त्यानुसार खाली काही शब्द दिले आहेत त्यांच्या योग्य जोड्या जुळवा.",
            image: "ppsaci_q52.png",
            options: ["2 3 1 4", "4 2 3 1", "1 3 2 4", "3 2 4 1"],
            answer: "1 3 2 4",
        },
        {
            id: 53,
            question: "खालीलपैकी कोणता वर्ण दुसऱ्या वर्णावर स्वार होतो?",
            options: ["अं", "अ:", "ग", "ढ"],
            answer: "अं",
        },
        {
            id: 54,
            question: "योग्य जोड्या जुळवा.",
            image: "ppsaci_q54.png",
            options: ["1 2 3 4", "2 1 3 4", "3 4 2 1", "4 3 1 2"],
            answer: "3 4 2 1",
        },
        {
            id: 55,
            question:
                "अ-आ, इ-ई, उ ऊ हे सजातीय स्वर आहेत, सजातीय स्वर होण्यासाठी उच्चार स्थान भिन्न असले तरी चालते.",
            options: [
                "पूर्वार्ध चूक आहे, उत्तरार्ध बरोबर आहे.",
                "दोन्ही विधाने चूक आहेत.",
                "पूर्वार्ध बरोबर आहे, उत्तरार्ध मात्र चूक आहे.",
                "दोन्ही विधाने बरोबर आहेत.",
            ],
            answer: "पूर्वार्ध बरोबर आहे, उत्तरार्ध मात्र चूक आहे.",
        },
        {
            id: 56,
            question:
                "हस्व व दीर्घ स्वरांना (अक्षरांना) उच्चारावयास लागणाऱ्या कालावधीस _________ म्हणतात.",
            options: ["व्यंजने", "स्वर", "स्वरालाप", "मात्रा"],
            answer: "मात्रा",
        },
        {
            id: 57,
            question:
                "विधान : \nअ) अं व अः यांना स्वरादी म्हणतात. \nब) कारण त्यांच्या शेवटी स्वर असतो.",
            options: [
                "पहिले विधान बरोबर आहे; परंतु त्याचे कारण बरोबर नाही.",
                "पूर्ण विधान बरोबर आहे.",
                "पूर्ण विधान चूक आहे.",
                "विधान चूक परंतु; कारण बरोबर आहे.",
            ],
            answer: "पहिले विधान बरोबर आहे; परंतु त्याचे कारण बरोबर नाही.",
        },
        {
            id: 58,
            question: "'ओ' हा संयुक्त स्वर कोणत्या दोन स्वरांनी बनलेला आहे?",
            options: ["अ + इ", "आ + उ", "आ + ऊ", "अ +उ"],
            answer: "अ +उ",
        },
        {
            id: 59,
            question: "खालीलपैकी चुकीचा पर्याय कोणता?",
            options: ["ए = आ + इ", "ओ = अ + ऊ", "औ = आ + उ", "ऐ = आ + ई"],
            answer: "ए = आ + इ",
        },
        {
            id: 60,
            question: "गटात न बसणारा वर्ण कोणता ?",
            options: ["अ", "इ", "ई", "उ"],
            answer: "ई",
        },
        {
            id: 61,
            question: "खालील वर्णांपैकी मृदू वर्ण कोणता?",
            options: ["थ्", "व्", "त्", "फ्"],
            answer: "व्",
        },
        {
            id: 62,
            question: "'शु, ष, स्' या वर्णांना _______ म्हणतात.",
            options: ["उष्मे", "महाप्राण", "स्वतंत्र", "अर्धस्वर"],
            answer: "उष्मे",
        },
        {
            id: 63,
            question:
                "'अं' व 'अः' या दोन वर्षांना ______ असे म्हणतात. \nअ) अनुस्वार \nब) स्वर \nक) स्वरादी \nड) व्यंजने",
            options: [
                "अ आणि ब बरोबर",
                "क आणि ड बरोबर",
                "फक्त क बरोवर",
                "फक्त ड बरोवर",
            ],
            answer: "फक्त क बरोवर",
        },
        {
            id: 64,
            question: "सोळाखडी कशी तयार होते?",
            options: [
                "बारा अक्षरे लिहून",
                "व्यंजनात स्वर मिळवून",
                "बारा वर्ण लिहून",
                "व्यंजनात चौदा स्वर व दोन स्वरादी मिळवून",
            ],
            answer: "व्यंजनात चौदा स्वर व दोन स्वरादी मिळवून",
        },
        {
            id: 65,
            question: "'ए, ऐ, ओ, औ' हे वर्ण खालीलपैकी कोणत्या प्रकारात मोडतात?",
            options: ["कठीण वर्ण", "अनुनासिके", "संयुक्त स्वर", "व्यंजने"],
            answer: "संयुक्त स्वर",
        },
        {
            id: 66,
            question: "खालीलपैकी संयुक्त व्यंजनांची जोडी कोणती?",
            options: ["ऋ - लृ", "ओ - औ", "क्ष - ज्ञ", "व् - श्"],
            answer: "क्ष - ज्ञ",
        },
        {
            id: 67,
            question: "व्यंजनास ___________ असेही म्हणतात?",
            options: ["उष्मे", "परवर्ण", "मृदू स्वर", "स्वरादी"],
            answer: "परवर्ण",
        },
        {
            id: 68,
            question: "स्वरांचे प्रकार किती?",
            options: ["बारा", "सात", "दहा", "तीन (आता चार)"],
            answer: "तीन (आता चार)",
        },
        {
            id: 69,
            question: "खालीलपैकी घोष व्यंजन कोणते?",
            options: ["श्", "च्", "ट्", "घ्"],
            answer: "घ्",
        },
        {
            id: 70,
            question: "पुढील वर्णांचा प्रकार अचूक ओळखा -",
            options: ["अल्पप्राण", "अनुनासिक", "स्पर्श", "महाप्राण"],
            answer: "महाप्राण",
        },
        {
            id: 71,
            question: " पुढील वर्णांचा प्रकार अचूक ओळखा ए. ऐ",
            options: ["संयुक्त स्वर", "अंतस्थ", "विजातीय", "स्वरादी"],
            answer: "संयुक्त स्वर",
        },
        {
            id: 72,
            question: "संयुक्त स्वरांच्या बाबतीत चुकीचा पर्याय निवडा.",
            options: [
                "ए = अ +इ/ई",
                "ऐ= आ + इ/ई",
                "ओ = अ + उ / ऊ",
                "औ = ए + उ / ई",
            ],
            answer: "औ = ए + उ / ई",
        },
        {
            id: 73,
            question:
                "अलीकडे मराठी भाषेतील खालीलपैकी कोणत्या वर्णाचा वापर नाहीसा झाला आहे?",
            options: ["ष्", "ण्", "ल्र", "ज्ञ्"],
            answer: "ल्र",
        },
        {
            id: 74,
            question: "खालीलपैकी कोणता वर्ण अर्धस्वर नव्हे ?",
            options: ["ल्", "य्", "व्", "ए"],
            answer: "ए",
        },
        {
            id: 75,
            question: "खालीलपैकी कोणता वर्ण 'कंपित वर्ण' आहे.",
            options: ["अ", "द्", "र्", "फ्"],
            answer: "र्",
        },
        {
            id: 76,
            question: "योग्य शब्द लिहा. इ, ए, ऋ हे _______ स्वर आहेत.",
            options: ["हस्व", "दीर्घ", "संयुक्त", "विजातीय"],
            answer: "विजातीय",
        },
        {
            id: 77,
            question: "खालीलपैकी कोणत्या अक्षराला स्वतंत्र उभा दंड आहे?",
            options: ["म्", "म्", "ग्", "छ्"],
            answer: "ग्",
        },
        {
            id: 78,
            question: "खालीलपैकी इंग्रजी स्वरांची जोडी कोणती?",
            options: ["ऋ,ल", "एं, ऐ", "अं, अः", "अॅ, ऑ"],
            answer: "अॅ, ऑ",
        },
        {
            id: 79,
            question: "खालीलपैकी संयुक्त स्वरांचा गट निवडा.",
            options: ["अ, इ, उ", "आ, ई, ऊ", "ऋ, ल, ए", "ए, ओ, औ"],
            answer: "ए, ओ, औ",
        },
        {
            id: 79,
            question: "खालीलपैकी फक्त हस्व स्वरांचा गट कोणता?",
            options: ["अ, इ, उ", "आ, ई, ऊ", "ऋ, ल, ए", "ए, ओ, औ"],
            answer: "अ, इ, उ",
        },
        {
            id: 80,
            question: "खालीलपैकी कठोर वर्णांचा गट कोणता?",
            options: ["ङ, ण, म्", "द, ध, भ्", "क्, ट्, प्", "ग्, ज्, व्"],
            answer: "क्, ट्, प्",
        },
        {
            id: 81,
            question:
                "खालीलपैकी कोणत्या वर्णाचा उच्चार करताना शेवटी स्वराचा आधार घ्यावा लागतो?",
            options: ["स्वर", "स्वरादी", "व्यंजने", "यांपैकी नाही"],
            answer: "व्यंजने",
        },
        {
            id: 82,
            question:
                "खालीलपैकी कोणत्या वर्णाचा उच्चार करताना उष्णता निर्माण होते?",
            options: ["ष्", "अ", "फ्", "ग्"],
            answer: "ष्",
        },
        {
            id: 83,
            question:
                "खालीलपैकी कोणत्या वर्णाचा उच्चार हवेचा मार्ग न अढविता कराल?",
            options: ["प्", "स्", "ग्", "उ"],
            answer: "उ",
        },
        {
            id: 84,
            question: "ऱ्हस्व स्वरांचा उच्चार कसा असतो?",
            options: [
                "जास्त लांबीचा",
                "कमी लांबीचा",
                "मध्यम लांबीचा",
                "यांपैकी नाही",
            ],
            answer: "कमी लांबीचा",
        },
        {
            id: 85,
            question: "संयुक्त स्वर हे ___________ असतात.",
            options: [
                "कमी लांबीच्या उच्चाराचे",
                "ऱ्हस्व उच्चाराचे",
                "दीर्घ उच्चाराचे",
                "यांपैकी नाही",
            ],
            answer: "दीर्घ उच्चाराचे",
        },
        {
            id: 86,
            question: " वर्णमालेत एकूण ______ वर्ण कठोर आहेत.",
            options: ["13", "15", "12", "34"],
            answer: "13",
        },
        {
            id: 87,
            question:
                "कोणत्या वर्णाचा उच्चार करताना फुप्फुसातील हवा एकदम बाहेर फेकली जाते?",
            options: ["म्", "द्", "ह", "ण्"],
            answer: "ह",
        },
        {
            id: 88,
            question: "पुढीलपैकी अल्पप्राण व्यंजन कोणते ते निवडा.",
            options: ["प्", "ख", "भ्", "ध्"],
            answer: "प्",
        },
        {
            id: 89,
            question: "पुढील स्वर जोड्यातून सजातीय स्वर जोडी ओळखा?",
            options: ["उ - ऊ", "अ - इ", "इ - ए", "अ - ई"],
            answer: "उ - ऊ",
        },
        {
            id: 90,
            question: "पुढीलपैकी 'महाप्राण' व्यंजन ओळखा.",
            options: ["ह्", "ळ", "क्ष", "ज्ञ"],
            answer: "ह्",
        },
        {
            id: 91,
            question: "पुढील अक्षरातील 'व्यंजन' ओळखा.",
            options: ["अ", "आ", "इ", "य्"],
            answer: "य्",
        },
        {
            id: 92,
            question: "पुढीलपैकी स्पर्श व्यंजने कोणती आहेत?",
            options: ["अ - आ", "च् - छ्", "य् - र्", "श् - ष्"],
            answer: "च् - छ्",
        },
        {
            id: 93,
            question:
                "मराठी वर्णमालेत एकूण किती वर्ण महाप्राण म्हणून मानले जातात?",
            options: ["48", "14", "34", "12"],
            answer: "14",
        },
        {
            id: 94,
            question: "व्यंजनांना अक्षरत्व येण्यासाठी काय करावे?",
            options: [
                "दोन व्यंजनांचे एकत्रीकरण",
                "व्यंजन व स्वर यांचे एकत्रीकरण",
                "दोन स्वरांचे एकत्रीकरण",
                "व्यंजनामधून स्वर काढून टाकणे",
            ],
            answer: "व्यंजन व स्वर यांचे एकत्रीकरण",
        },
        {
            id: 95,
            question: "पुढीलपैकी कठोर व्यंजन कोणते ?",
            options: ["च्", "ग्", "ड्", "द्"],
            answer: "च्",
        },
        {
            id: 96,
            question:
                "'ज्ञ' हे व्यंजन खालीलपैकी कोणत्या व्यंजनापासून संयुक्तरीत्या तयार झाले आहे?",
            options: ["द् + न्", "द् + ण् + य्", "द् + न् + य्", "ज्ञ + य्"],
            answer: "द् + न् + य्",
        },
        {
            id: 97,
            question: "मात्रा म्हणजे काय?",
            options: [
                "औषधाचे प्रमाण",
                "अक्षरांचा (स्वरांचा) उच्चार करावयास लागणारा कालावधी",
                "स्वरांचा उच्चार करावयास लागणारा कालावधी",
                "यांपैकी नाही",
            ],
            answer: "अक्षरांचा (स्वरांचा) उच्चार करावयास लागणारा कालावधी",
        },
        {
            id: 99,
            question: "खालीलपैकी कोणता अनुनासिक वर्ण 'प' वर्गातील आहे?",
            options: ["ण्", "म्", "ड्", "न्"],
            answer: "म्",
        },
        {
            id: 100,
            question: "पुढीलपैकी उष्म वर्ण ओळखा.",
            options: ["अ,आ", "ह", "श, ष, स", "क, ख, ग"],
            answer: "श, ष, स",
        },
        {
            id: 101,
            question: "पुढील स्वर कोणत्या प्रकारचा आहे? - 'ए'",
            options: ["ऱ्हस्व स्वर", "दीर्घ स्वर", "संयुक्त स्वर", "स्वरादी"],
            answer: "संयुक्त स्वर",
        },
        {
            id: 102,
            question:
                "'अ' आणि 'ब' गटातील जोड्या विसंगत आहेत. मात्र पर्यायी उत्तरांत चारही जोड्या योग्य व सुसंगत असणारे एक उत्तर योग्य आहे, ते कोणते?",
            image: "q102.png",
            options: ["1 2 4 3", "2 4 1 3", "1 2 3 4", "4 1 2 3"],
            answer: "2 4 1 3",
        },
        {
            id: 103,
            question: "'क्ष' व 'ज्ञ' या वर्णांना वर्णमालेत स्थान देणारे कोण?",
            options: ["दादोबा", "दामले", "सबनीस", "चिपळूणकर"],
            answer: "सबनीस",
        },
        {
            id: 104,
            question: "अं, अः यांना व्याकरणात काय म्हटले जाते?",
            options: ["स्वरान्त", "स्वर", "स्वरादी", "विजातीय स्वर"],
            answer: "स्वरादी",
        },
        {
            id: 105,
            question: "खालीलपैकी महाप्राण व्यंजने ओळखा.",
            options: ["खू, फ्, ध्", "क्, ट्, प्", "च्, र, व्", "ज्, च, न्"],
            answer: "खू, फ्, ध्",
        },
        {
            id: 106,
            question: "पुढे दिलेल्या वर्णातील महाप्राण वर्ण ओळखा.\n क, र, थ, म",
            options: ["क्", "थ", "र्", "म्"],
            answer: "थ",
        },
        {
            id: 107,
            question: "दिलेल्या पर्यायांतून स्पर्श व्यंजन ओळखा.",
            options: ["ध", "य्", "ल्", "व्"],
            answer: "ध",
        },
        {
            id: 108,
            question: "'संयुक्त स्वर म्हणजे काय?",
            options: [
                "एकाच स्वराला 'संयुक्त स्वर' असे म्हणतात.",
                "दोन स्वर एकत्र येऊन बनलेल्या स्वरांना 'संयुक्त स्वर' असे म्हणतात.",
                "तीन स्वर एकत्र येऊन बनलेल्या स्वरांना 'संयुक्त स्वर' असे म्हणतात.",
            ],
            answer: "दोन स्वर एकत्र येऊन बनलेल्या स्वरांना 'संयुक्त स्वर' असे म्हणतात.",
        },
        // question 65 completed page 11
    ],
    generalknowledge: [
        {
            id: 19,
            question: "2 + 2 = ?",
            options: ["3", "4", "5", "6"],
            answer: "4",
        },
        {
            id: 20,
            question: "5 * 3 = ?",
            options: ["15", "10", "8", "12"],
            answer: "15",
        },
        {
            id: 21,
            question: "12 / 4 = ?",
            options: ["3", "4", "2", "6"],
            answer: "3",
        },
        {
            id: 22,
            question: "7 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "4",
        },
        {
            id: 23,
            question: "3 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "3",
        },
        {
            id: 24,
            question: "12 / 4 = ?",
            options: ["3", "4", "2", "6"],
            answer: "3",
        },
        {
            id: 25,
            question: "7 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "4",
        },
        {
            id: 26,
            question: "3 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "3",
        },
        {
            id: 27,
            question: "12 / 4 = ?",
            options: ["3", "4", "2", "6"],
            answer: "3",
        },
        {
            id: 28,
            question: "7 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "4",
        },
        {
            id: 29,
            question: "3 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "3",
        },
    ],
    mathsReasoning: [
        {
            id: 19,
            question: "2 + 2 = ?",
            options: ["3", "4", "5", "6"],
            answer: "4",
        },
        {
            id: 20,
            question: "5 * 3 = ?",
            options: ["15", "10", "8", "12"],
            answer: "15",
        },
        {
            id: 21,
            question: "12 / 4 = ?",
            options: ["3", "4", "2", "6"],
            answer: "3",
        },
        {
            id: 22,
            question: "7 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "4",
        },
        {
            id: 23,
            question: "3 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "3",
        },
        {
            id: 24,
            question: "12 / 4 = ?",
            options: ["3", "4", "2", "6"],
            answer: "3",
        },
        {
            id: 25,
            question: "7 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "4",
        },
        {
            id: 26,
            question: "3 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "3",
        },
        {
            id: 27,
            question: "12 / 4 = ?",
            options: ["3", "4", "2", "6"],
            answer: "3",
        },
        {
            id: 28,
            question: "7 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "4",
        },
        {
            id: 29,
            question: "3 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "3",
        },
    ],
    mathsAlgebra: [
        {
            id: 1,
            question:
                "बांधकामाचे एक कंत्राट विवक्षित तारखेपर्यंत काम पूर्ण न झाल्यास पुढील दंडाची तरतूद करते : पहिल्या दिवसासाठी 200रू, दुसऱ्या दिवसासाठी 250रू, तिसऱ्या दिवसासाठी 300रू अशाप्रकारे पुढच्या प्रत्येक दिवसासाठी मागच्या दिवसापेक्षा 50रू जास्त. 10 दिवसांचा विलंब केल्यास कंत्राटदारास किती दंड भरावा 2 लागेल?",
            options: ["4950 रू", "4250 रू", "3600 रू", "650 रू"],
            answer: "4250 रू",
        },
        {
            id: 2,
            question: "",
            options: ["15", "10", "8", "12"],
            answer: "15",
        },
        {
            id: 21,
            question: "12 / 4 = ?",
            options: ["3", "4", "2", "6"],
            answer: "3",
        },
        {
            id: 22,
            question: "7 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "4",
        },
        {
            id: 23,
            question: "3 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "3",
        },
        {
            id: 24,
            question: "12 / 4 = ?",
            options: ["3", "4", "2", "6"],
            answer: "3",
        },
        {
            id: 25,
            question: "7 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "4",
        },
        {
            id: 26,
            question: "3 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "3",
        },
        {
            id: 27,
            question: "12 / 4 = ?",
            options: ["3", "4", "2", "6"],
            answer: "3",
        },
        {
            id: 28,
            question: "7 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "4",
        },
        {
            id: 29,
            question: "3 - 3 = ?",
            options: ["2", "3", "4", "5"],
            answer: "3",
        },
    ],
};

export default questions;
