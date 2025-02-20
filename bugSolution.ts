function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, users: " + person.join(', ');
  }
}

let user = ["Jane User", "John Smith"];
console.log(greeter(user)); //This will output the corrected message
console.log(greeter("Jane Doe")); //This will output the corrected message