console.log('Will print env below');
console.log(process.env.SUPER_SECRET);
const ENV = process.env.ENVIRONMENT;
console.log('Env= ', ENV, ' type is ', typeof ENV);
console.log('Env printed ^^');
