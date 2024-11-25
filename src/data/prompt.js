"I have a PDF document containing multiple-choice questions, each with the following format:  

1. A question, written in plain text.  
2. Four or more options (e.g., a, b, c, d).  
3. The correct answer listed after the options.  

The task is to:  
1. Extract all the questions from the PDF sequentially by their question numbers.  
2. Structure the data into a JSON format as shown below:  

```json
{
    "questions": {
        "english": [
            {
                "id": 1,
                "question": "What is the capital of France?",
                "options": ["Paris", "London", "Berlin", "Madrid"],
                "answer": "Paris"
            },
            {
                "id": 2,
                "question": "What is 2 + 2?",
                "options": ["3", "4", "5", "6"],
                "answer": "4"
            }
        ]
    }
}
```

Make sure to:  
1. Preserve the original formatting and sequence of the questions.  
2. Validate that each question includes its options and correct answer.  

If OCR or text recognition is needed, ensure the extracted content is accurate and consistent with the document.  

Output the final JSON structure for review."
