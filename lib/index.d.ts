interface ILoremProps {
    max: number;
    min?: number;
    usePunctuation?: boolean;
    extend?: string;
}
declare const lorem: ({ max, min, extend, usePunctuation }: ILoremProps) => string;
export default lorem;
