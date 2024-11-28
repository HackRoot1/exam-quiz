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
            question: "She is my mother, I respect her.",
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
    ],
    marathi: [
        {
            id: 1,
            question:
                "बोग्य विधान/विधाने निवडा, \n अ) मराठी भाषेचा विकास संस्कृत व प्राकृत या भाषांपासून झाला आहे. \nब) विचार व्यक्त करण्याचे साधन म्हणजे भाषा होय. \nक) बोलणे, हावभाव, नाटक ही नैसर्गिक भाषा आहे. \nड) भाषेमध्ये भाषण व लेखन या दोन्हींचा समावेश होतो.",
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
            answer: "",
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
            answer: "",
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
            answer: "",
        },
        {
            id: 86,
            question: " वर्णमालेत एकूण ______ वर्ण कठोर आहेत.",
            options: ["13", "15", "12", "34"],
            answer: "",
        },
        {
            id: 87,
            question:
                "कोणत्या वर्णाचा उच्चार करताना फुप्फुसातील हवा एकदम बाहेर फेकली जाते?",
            options: ["म्", "द्", "ह", "ण्"],
            answer: "",
        },
        {
            id: 88,
            question: "पुढीलपैकी अल्पप्राण व्यंजन कोणते ते निवडा.",
            options: [" प्", "ख", "भ्", "ध्"],
            answer: "",
        },
        {
            id: 89,
            question: "पुढील स्वर जोड्यातून सजातीय स्वर जोडी ओळखा?",
            options: [" उ - ऊ", "अ - इ", "इ - ए", "अ - ई"],
            answer: "",
        },
        {
            id: 90,
            question: "पुढीलपैकी 'महाप्राण' व्यंजन ओळखा.",
            options: ["ह्", "ळ", "क्ष", "ज्ञ"],
            answer: "",
        },
        {
            id: 91,
            question: "पुढील अक्षरातील 'व्यंजन' ओळखा.",
            options: ["अ", "आ", "इ", "य्"],
            answer: "",
        },
        {
            id: 92,
            question: "पुढीलपैकी स्पर्श व्यंजने कोणती आहेत?",
            options: ["अ - आ", "च् - छ्", "य् - र्", "श् - ष्"],
            answer: "",
        },
        {
            id: 93,
            question:
                "मराठी वर्णमालेत एकूण किती वर्ण महाप्राण म्हणून मानले जातात?",
            options: ["48", "14", "34", "12"],
            answer: "",
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
            answer: "",
        },
        {
            id: 95,
            question: "पुढीलपैकी कठोर व्यंजन कोणते ?",
            options: ["च्", "ग्", "ड्", "द्"],
            answer: "",
        },
        {
            id: 96,
            question:
                "'ज्ञ' हे व्यंजन खालीलपैकी कोणत्या व्यंजनापासून संयुक्तरीत्या तयार झाले आहे?",
            options: ["द् + न्", "द् + ण् + य्", "द् + न् + य्", "ज्ञ + य्"],
            answer: "",
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
            answer: "",
        },
        {
            id: 99,
            question: "खालीलपैकी कोणता अनुनासिक वर्ण 'प' वर्गातील आहे?",
            options: ["ण्", "म्", "ड्", "न्"],
            answer: "",
        },
        {
            id: 100,
            question: "पुढीलपैकी उष्म वर्ण ओळखा.",
            options: ["अ,आ", "ह", "श, ष, स", "क, ख, ग"],
            answer: "",
        },
        {
            id: 101,
            question: "पुढील स्वर कोणत्या प्रकारचा आहे? - 'ए'",
            options: ["ऱ्हस्व स्वर", "दीर्घ स्वर", "संयुक्त स्वर", "स्वरादी"],
            answer: "",
        },
        {
            id: 102,
            question:
                "'अ' आणि 'ब' गटातील जोड्या विसंगत आहेत. मात्र पर्यायी उत्तरांत चारही जोड्या योग्य व सुसंगत असणारे एक उत्तर योग्य आहे, ते कोणते?",
            image: "",
            options: [""],
            answer: "",
        },
        {
            id: 103,
            question: "'क्ष' व 'ज्ञ' या वर्णांना वर्णमालेत स्थान देणारे कोण?",
            options: ["दादोबा", "दामले", "सबनीस", "चिपळूणकर"],
            answer: "",
        },
        {
            id: 104,
            question: "अं, अः यांना व्याकरणात काय म्हटले जाते?",
            options: ["स्वरान्त", "स्वर", "स्वरादी", "विजातीय स्वर"],
            answer: "",
        },
        {
            id: 105,
            question: "खालीलपैकी महाप्राण व्यंजने ओळखा.",
            options: ["खू, फ्, ध्", "क्, ट्, प्", "च्, र, व्", "ज्, च, न्"],
            answer: "",
        },
        {
            id: 106,
            question: "पुढे दिलेल्या वर्णातील महाप्राण वर्ण ओळखा.\n क, र, थ, म",
            options: ["क्", "ध्", "र्", "म्"],
            answer: "",
        },
        {
            id: 107,
            question: "दिलेल्या पर्यायांतून स्पर्श व्यंजन ओळखा.",
            options: ["धू", "य्", "ल्", "व्"],
            answer: "",
        },
        {
            id: 108,
            question: "'संयुक्त स्वर म्हणजे काय?",
            options: [
                "एकाच स्वराला 'संयुक्त स्वर' असे म्हणतात.",
                "दोन स्वर एकत्र येऊन बनलेल्या स्वरांना 'संयुक्त स्वर' असे म्हणतात.",
                "तीन स्वर एकत्र येऊन बनलेल्या स्वरांना 'संयुक्त स्वर' असे म्हणतात.",
            ],
            answer: "",
        },
        // question 65 completed page 11
        {
            id: 109,
            question: "",
            options: [""],
            answer: "",
        },
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
};

export default questions;
