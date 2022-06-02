import { Article } from "./Article";

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: "Pipelining via PMJ and XJoin",
        path: "/assets/PipelinedJoins.pdf",
        desc: `Usually, join operations are "blocking": future operations must wait for the join to finish until it can work on the joined results. 
        This paper researches two join operations overcome this obstacle and allow for pipelined query execution-
        specifically, Progressive Merge Join and XJoin.`
    },
    {
        id: 2, 
        title: "Model Bias and Variance, A Tangible Approach",
        path: "/assets/md/BV/BV.md",
        desc: "Learn how to estimate the bias and variance of a predictive model explicitly."
    }
];