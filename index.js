import { DateTime } from 'luxon'

export function sayHello(){
  console.log(`Hello World ${DateTime.now().toISO()}`);
}

