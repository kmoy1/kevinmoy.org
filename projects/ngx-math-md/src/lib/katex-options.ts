/** Options for Katex rendering. Only attribute that really matters here is displayMode. */
export class KatexOptions {
    displayMode?: boolean = false;
    throwOnError?: boolean;
    errorColor?: string;
    macros?: any;
    colorIsTextColor?: boolean;
    maxSize?: number;
    maxExpand?: number;
    allowedProtocols?: string[];
    strict?: boolean | string | Function;
}
