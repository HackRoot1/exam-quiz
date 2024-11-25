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
