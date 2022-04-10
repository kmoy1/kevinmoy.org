export interface MultipleChoiceQuestion {
    id: string;
    question: string;
    choices: string[];
    answer: string;
}

export interface SelectAllQuestion {
    id: string;
    question: string;
    choices: string[];
    answer: string[];
}

export interface NumberAnswerQuestion {
    id: string;
    question: string;
    answer: number;
}