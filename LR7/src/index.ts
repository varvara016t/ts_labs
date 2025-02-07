import { OwnerImpl, VehicleImpl, VehicleStorageImpl } from './implementations';

const owner1 = new OwnerImpl('Иванов', 'Иван', 'Иванович');
const owner2 = new OwnerImpl('Петров', 'Петр', 'Петрович');
const owner3 = new OwnerImpl('Иванов', 'Сергей', 'Сергеевич');

const vehicle1 = new VehicleImpl('Toyota', 'ABC123', 'А111АА77', owner1);
const vehicle2 = new VehicleImpl('Audi', 'DEF456', 'В222ВВ77', owner2);
const vehicle3 = new VehicleImpl('BMW', 'GHI789', 'С333СС77', owner3);

const storage = new VehicleStorageImpl<VehicleImpl>();
storage.addVehicle(vehicle1);
storage.addVehicle(vehicle2);
storage.addVehicle(vehicle3);

console.log('=== Сортировка по марке (А-Я) ===');
storage.sortByBrand().forEach(vehicle => 
    console.log(`${vehicle.getBrand()} - ${vehicle.getRegistrationNumber()}`)
);

console.log('\n=== Фильтрация по фамилии "Иванов" ===');
storage.filterByOwnerLastName('иванов').forEach(vehicle => 
    console.log(vehicle.getBriefInfo())
);

console.log('\n=== Краткая информация о транспортном средстве ===');
console.log(vehicle1.getBriefInfo());