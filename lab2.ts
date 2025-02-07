// 1
function findMax(arr: number[]): number {
    return Math.max(...arr);
}

const numbers: number[] = [1.5, 2.7, -3.2, 4.8, 5.1];
console.log('Максимальное число:', findMax(numbers));

function hasNegative(matrix: number[][]): boolean {
    return matrix.some(row => row.some(num => num < 0));
}

const matrix: number[][] = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, 9]
];
console.log('Есть отрицательные числа:', hasNegative(matrix));

// 2
type NumberTuple = [number, number, number];

function sumTuple(tuple: NumberTuple): number {
    return tuple[0] + tuple[1] + tuple[2];
}

const myTuple: NumberTuple = [1, 2, 3];
console.log('Сумма чисел в кортеже:', sumTuple(myTuple));

// 3
enum BallType {
    Football = "Football",
    Basketball = "Basketball",
    Volleyball = "Volleyball",
    Tennis = "Tennis",
    Baseball = "Baseball"
}

console.log('Тип мяча:', BallType.Football);

// 4
class Pet {
    name: string = 'Some pet';
    age: number = -1;
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function printPetInfo<T extends Pet>(pet: T): void {
    console.log({
        name: pet.name,
        age: pet.age,
        speech: pet.speak()
    });
}

const dog = new Dog();
const cat = new Cat();
console.log('Информация о собаке:');
printPetInfo(dog);
console.log('Информация о кошке:');
printPetInfo(cat);

// 5
interface SportEquipment {
    ballType: BallType;
    size: number;
    weight: number;
    isOfficial: boolean;
    manufacturer: string;
}

const footballEquipment: SportEquipment = {
    ballType: BallType.Football,
    size: 5,
    weight: 450,
    isOfficial: true,
    manufacturer: "Adidas"
};

console.log('Спортивный инвентарь в JSON:');
console.log(JSON.stringify(footballEquipment, null, 2));