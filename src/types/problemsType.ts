
export interface Problem {
    _id: string;                       // Unique ID for the problem (MongoDB-generated)
    title: string;                     // Title of the problem
    description: string;               // Problem description
    problemStatement: string;          // Detailed problem statement
    constraints: string;               // Problem constraints (could be LaTeX format)
    examples: string[];                // Array of problem examples in LaTeX format
    __v: number;                       // Version key generated by MongoDB (not usually needed)
}