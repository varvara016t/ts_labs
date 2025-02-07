import { Owner, Vehicle, VehicleStorage } from './interfaces';

export class OwnerImpl implements Owner {
    constructor(
        private lastName: string,
        private firstName: string,
        private middleName: string
    ) {}

    getLastName(): string { return this.lastName; }
    getFirstName(): string { return this.firstName; }
    getMiddleName(): string { return this.middleName; }
    
    getFullName(): string {
        return `${this.lastName} ${this.firstName} ${this.middleName}`;
    }
}

export class VehicleImpl implements Vehicle {
    constructor(
        private brand: string,
        private vin: string,
        private registrationNumber: string,
        private owner: Owner
    ) {}

    getBrand(): string { return this.brand; }
    getVIN(): string { return this.vin; }
    getRegistrationNumber(): string { return this.registrationNumber; }
    getOwner(): Owner { return this.owner; }

    getBriefInfo(): string {
        return `VIN: ${this.vin}, Владелец: ${this.owner.getFullName()}, Рег.номер: ${this.registrationNumber}`;
    }
}

export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    private vehicles: T[] = [];

    getVehicles(): T[] { return this.vehicles; }
    
    addVehicle(vehicle: T): void {
        this.vehicles.push(vehicle);
    }

    sortByBrand(): T[] {
        return [...this.vehicles].sort((a, b) => 
            a.getBrand().localeCompare(b.getBrand())
        );
    }

    filterByOwnerLastName(lastName: string): T[] {
        const searchLastName = lastName.toLowerCase();
        return this.vehicles.filter(vehicle => 
            vehicle.getOwner().getLastName().toLowerCase() === searchLastName
        );
    }
}