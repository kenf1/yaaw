import * as core from "@actions/core";

const person: string = core.getInput("person");
console.log(`Hello ${person}`);
