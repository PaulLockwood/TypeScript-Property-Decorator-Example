import "reflect-metadata";

const formatMetadataKey = Symbol("format");

export function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}

export function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

export class Greeter {
    @format("Hello, %s")
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        console.log('Value from @format decorator: ' + formatString);
        return formatString.replace("%s", this.greeting);
    }
}

// ---- Main code. i.e. Entry pont for node.js -----

console.log('Property Decorators 101. Sample code from');
console.log(' >> https://www.typescriptlang.org/docs/handbook/decorators.html' + '\r\n');

// Use the greeter class, which has a decorator value for @format
let greeter: Greeter = new Greeter('rock star developer');
let message: string = greeter.greet();

// show results to console`
console.log('-'.repeat(message.length));
console.log(message);
console.log('-'.repeat(message.length));
