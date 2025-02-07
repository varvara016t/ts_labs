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