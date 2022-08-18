interface ILoremProps {
    max: number;
    min?: number;
    usePunctuation?: boolean;
    useSimplified?: boolean;
    extend?: string;
    exclude?: string;
}
declare const lorem: ({ max, min, extend, exclude, usePunctuation, useSimplified }: ILoremProps) => string;
export default lorem;
