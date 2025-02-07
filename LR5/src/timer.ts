function getCurrentDate(): void {
    console.log(Date.now());
}

function startTimer(): void {
    let counter = 0;
    const maxCalls = 12;

    getCurrentDate();
    counter++;

    const interval = setInterval(() => {
        getCurrentDate();
        counter++;

        if (counter >= maxCalls) {
            clearInterval(interval);
            console.log('Минута прошла, таймер остановлен');
        }
    }, 5000);
}

console.log('Запуск таймера...');
startTimer();