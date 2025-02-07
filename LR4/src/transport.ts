export namespace Transport {
    export enum DocumentType {
        Passport = "Паспорт",
        DrivingLicense = "Водительское удостоверение",
        MilitaryID = "Военный билет"
    }

    export enum CarBodyType {
        Sedan = "Седан",
        Hatchback = "Хэтчбек",
        SUV = "Внедорожник",
        Coupe = "Купе",
        Wagon = "Универсал"
    }

    export enum CarClass {
        Economy = "Эконом",
        Business = "Бизнес",
        Premium = "Премиум",
        Luxury = "Люкс",
        Sport = "Спорт"
    }

    export interface Owner {
        getLastName(): string;
        getFirstName(): string;
        getMiddleName(): string;
        getBirthDate(): Date;
        getDocumentType(): DocumentType;
        getDocumentSeries(): string;
        getDocumentNumber(): string;
        printInfo(): void;
    }

    export interface Vehicle {
        getBrand(): string;
        getModel(): string;
        getYear(): number;
        getVIN(): string;
        getRegistrationNumber(): string;
        getOwner(): Owner;
        printVehicleInfo(): void;
    }

    export interface Car extends Vehicle {
        getBodyType(): CarBodyType;
        getCarClass(): CarClass;
    }

    export interface Motorbike extends Vehicle {
        getFrameType(): string;
        getIsSport(): boolean;
    }

    export interface VehicleStorage<T extends Vehicle> {
        getCreationDate(): Date;
        getVehicles(): T[];
        addVehicle(vehicle: T): void;
        getAllVehicles(): T[];
    }

    export class OwnerImpl implements Owner {
        private lastName: string;
        private firstName: string;
        private middleName: string;
        private birthDate: Date;
        private documentType: DocumentType;
        private documentSeries: string;
        private documentNumber: string;

        constructor(
            lastName: string,
            firstName: string,
            middleName: string,
            birthDate: Date,
            documentType: DocumentType,
            documentSeries: string,
            documentNumber: string
        ) {
            this.lastName = lastName;
            this.firstName = firstName;
            this.middleName = middleName;
            this.birthDate = birthDate;
            this.documentType = documentType;
            this.documentSeries = documentSeries;
            this.documentNumber = documentNumber;
        }

        getLastName(): string { return this.lastName; }
        getFirstName(): string { return this.firstName; }
        getMiddleName(): string { return this.middleName; }
        getBirthDate(): Date { return this.birthDate; }
        getDocumentType(): DocumentType { return this.documentType; }
        getDocumentSeries(): string { return this.documentSeries; }
        getDocumentNumber(): string { return this.documentNumber; }

        printInfo(): void {
            console.log(`
                Владелец:
                ФИО: ${this.lastName} ${this.firstName} ${this.middleName}
                Дата рождения: ${this.birthDate.toLocaleDateString()}
                Документ: ${this.documentType}
                Серия: ${this.documentSeries}
                Номер: ${this.documentNumber}
            `);
        }
    }

    export class VehicleImpl implements Vehicle {
        private brand: string;
        private model: string;
        private year: number;
        private vin: string;
        private registrationNumber: string;
        private owner: Owner;

        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner
        ) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.vin = vin;
            this.registrationNumber = registrationNumber;
            this.owner = owner;
        }

        getBrand(): string { return this.brand; }
        getModel(): string { return this.model; }
        getYear(): number { return this.year; }
        getVIN(): string { return this.vin; }
        getRegistrationNumber(): string { return this.registrationNumber; }
        getOwner(): Owner { return this.owner; }

        printVehicleInfo(): void {
            console.log(`
                Транспортное средство:
                Марка: ${this.brand}
                Модель: ${this.model}
                Год выпуска: ${this.year}
                VIN: ${this.vin}
                Рег. номер: ${this.registrationNumber}
            `);
        }
    }

    export class CarImpl extends VehicleImpl implements Car {
        private bodyType: CarBodyType;
        private carClass: CarClass;

        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            bodyType: CarBodyType,
            carClass: CarClass
        ) {
            super(brand, model, year, vin, registrationNumber, owner);
            this.bodyType = bodyType;
            this.carClass = carClass;
        }

        getBodyType(): CarBodyType { return this.bodyType; }
        getCarClass(): CarClass { return this.carClass; }

        override printVehicleInfo(): void {
            super.printVehicleInfo();
            console.log(`
                Тип кузова: ${this.bodyType}
                Класс автомобиля: ${this.carClass}
            `);
        }
    }

    export class MotorbikeImpl extends VehicleImpl implements Motorbike {
        private frameType: string;
        private isSport: boolean;

        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            frameType: string,
            isSport: boolean
        ) {
            super(brand, model, year, vin, registrationNumber, owner);
            this.frameType = frameType;
            this.isSport = isSport;
        }

        getFrameType(): string { return this.frameType; }
        getIsSport(): boolean { return this.isSport; }

        override printVehicleInfo(): void {
            super.printVehicleInfo();
            console.log(`
                Тип рамы: ${this.frameType}
                Спортивный: ${this.isSport ? 'Да' : 'Нет'}
            `);
        }
    }

    export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
        private creationDate: Date;
        private vehicles: T[];

        constructor() {
            this.creationDate = new Date();
            this.vehicles = [];
        }

        getCreationDate(): Date { return this.creationDate; }
        getVehicles(): T[] { return this.vehicles; }
        addVehicle(vehicle: T): void { this.vehicles.push(vehicle); }
        getAllVehicles(): T[] { return this.vehicles; }
    }
}