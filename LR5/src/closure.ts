function createGreeting(name: string) {
    const greeting = `Привет, ${name}!`;
    
    return function() {
        console.log(greeting);
    }
}

function createCounter(initialValue: number = 0) {
    let count = initialValue;
    
    return {
        increment: () => {
            count++;
            console.log(`Счетчик: ${count}`);
        },
        decrement: () => {
            count--;
            console.log(`Счетчик: ${count}`);
        },
        getValue: () => {
            return count;
        }
    }
}

console.log('=== Демонстрация работы замыканий ===');

const greetJohn = createGreeting('John');
const greetJane = createGreeting('Jane');

console.log('Вызываем функции приветствия:');
greetJohn();
greetJane();

console.log('\nРабота со счетчиком:');
const counter = createCounter(5);

counter.increment();
counter.increment();
counter.decrement();
console.log('Текущее значение:', counter.getValue());