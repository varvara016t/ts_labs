// Улучшенный декоратор для блокировки изменений
function sealedClass(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    
    // Запечатываем каждый создаваемый экземпляр
    const originalConstructor = constructor;
    const newConstructor: any = function(...args: any[]) {
        const instance = new (originalConstructor as any)(...args);
        Object.seal(instance);
        return instance;
    }
    
    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
}

// Декоратор для преобразования строк в верхний регистр
function upperCase(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };

    return descriptor;
}

@sealedClass
class Car {
    private brand: string;
    private model: string;
    private year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    @upperCase
    getInfo(): string {
        return `Автомобиль: ${this.brand} ${this.model}, год выпуска: ${this.year}`;
    }
}

// Тестирование
console.log('=== Тестирование декораторов ===');

const car = new Car('Toyota', 'Camry', 2020);

console.log('\nПроверка декоратора метода:');
console.log(car.getInfo());

console.log('\nПроверка декоратора класса:');
try {
    // @ts-ignore
    Car.prototype.newMethod = function() {
        console.log('Новый метод');
    };
    console.log('Добавление метода в прототип выполнено успешно');
} catch (e) {
    if (e instanceof Error) {
        console.log('Ошибка при попытке модификации прототипа:', e.message);
    } else {
        console.log('Произошла неизвестная ошибка при модификации прототипа');
    }
}

try {
    // @ts-ignore
    car.newProperty = 'Новое свойство';
    console.log('Добавление свойства в объект:', car);
} catch (e) {
    if (e instanceof Error) {
        console.log('Ошибка при попытке добавления свойства:', e.message);
    } else {
        console.log('Произошла неизвестная ошибка при добавлении свойства');
    }
}

export { Car };