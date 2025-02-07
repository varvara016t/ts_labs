import { DocumentType, CarBodyType, CarClass } from './types';
import { OwnerImpl, CarImpl, MotorbikeImpl, VehicleStorageImpl } from './classes';

const owner = new OwnerImpl(
    'Иванов',
    'Иван',
    'Иванович',
    new Date('1990-01-01'),
    DocumentType.Passport,
    '4510',
    '123456'
);

const car = new CarImpl(
    'Toyota',
    'Camry',
    2020,
    'ABC123456DEF78901',
    'А123БВ777',
    owner,
    CarBodyType.Sedan,
    CarClass.Business
);

const motorbike = new MotorbikeImpl(
    'Honda',
    'CBR1000RR',
    2021,
    'XYZ987654321ABC',
    'B789CC777',
    owner,
    'Diamond Frame',
    true
);

const carStorage = new VehicleStorageImpl<CarImpl>();
carStorage.addVehicle(car);

const motorbikeStorage = new VehicleStorageImpl<MotorbikeImpl>();
motorbikeStorage.addVehicle(motorbike);

console.log('=== Информация о владельце ===');
owner.printInfo();

console.log('\n=== Информация об автомобиле ===');
car.printVehicleInfo();

console.log('\n=== Информация о мотоцикле ===');
motorbike.printVehicleInfo();

console.log('\n=== Содержимое хранилища автомобилей ===');
carStorage.getAllVehicles().forEach(car => car.printVehicleInfo());

console.log('\n=== Содержимое хранилища мотоциклов ===');
motorbikeStorage.getAllVehicles().forEach(motorbike => motorbike.printVehicleInfo());