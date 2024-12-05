**Task:** Shuffle the options for each question in the following list.

**Instructions:**  
1. The task involves taking each question in the list and shuffling its options randomly while ensuring that the correct answer remains associated with its option.
2. The correct answer for each question is already provided in the "answer" field.
3. After shuffling, the list of options should remain random, with the correct answer still present in the shuffled list.

**Data Format Example (JSON):**

```json
{
    "questions": {
        "english": [
            {
                "id": 101,
                "question": "Decorate",
                "options": ["रंगवणे", "सजावट करणे", "साध्य करणे", "वाढवणे"],
                "answer": "सजावट करणे"
            },
            {
                "id": 102,
                "question": "Depend",
                "options": ["अवलंबून असणे", "टाळणे", "वाढवणे", "संपूर्ण करणे"],
                "answer": "अवलंबून असणे"
            },
            ...
        ]
    }
}
```

For each question, shuffle the options randomly but keep the correct answer intact.
