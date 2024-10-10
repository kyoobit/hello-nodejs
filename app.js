// https://github.com/RedHatTraining/DO100x-apps
console.log('Hello, World!');

const data = 'RE8xMDF4IGlzIGF3ZXNvbWUh'
console.log(Buffer.from(data, 'base64').toString('ascii'));