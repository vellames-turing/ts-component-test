interface Test {
  name: string
}

const t: Test = {
  name: 'test',
}

export function sayMyName(name: string): void {
  if (name === "Heisenberg") {
    console.log("You're right 👍");
  } else {
    console.log("You're wrong 👎");
  }
}