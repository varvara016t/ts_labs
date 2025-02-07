const concatNumbers = (a: number, b: number): string => `${a}${b}`;
console.log('Вариант 1:', concatNumbers(5, 10)); // "510"

const numberValue: number = 42;
let stringValue: string = "Hello TypeScript";
const booleanValue: boolean = true;
let arrayValue: number[] = [1, 2, 3, 4, 5];
const nullValue: null = null;
let undefinedValue: undefined = undefined;
const objectValue: object = { key: "value" };
let dateValue: Date = new Date();

interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}

const data: ToJsonStringify = {
    id: 1,
    name: "Василий",
}

const jsonString = JSON.stringify(data);
console.log('Результат преобразования в JSON:');
console.log(jsonString);