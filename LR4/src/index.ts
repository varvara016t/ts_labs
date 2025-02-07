import { Transport } from './transport';

const owner = new Transport.OwnerImpl(
    'Иванов',
    'Иван',
    'Иванович',
    new Date('1990-01-01'),
    Transport.DocumentType.Passport,
    '4510',
    '123456'
);

const car = new Transport.CarImpl(
    'Toyota',
    'Camry',
    2020,
    'ABC123456DEF78901',
    'А123БВ777',
    owner,
    Transport.CarBodyType.Sedan,
    Transport.CarClass.Business
);

const motorbike = new Transport.MotorbikeImpl(
    'Honda',
    'CBR1000RR',
    2021,
    'XYZ987654321ABC',
    'B789CC777',
    owner,
    'Diamond Frame',
    true
);

const carStorage = new Transport.VehicleStorageImpl<Transport.CarImpl>();
const motorbikeStorage = new Transport.VehicleStorageImpl<Transport.MotorbikeImpl>();

carStorage.addVehicle(car);
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