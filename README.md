# Fizzbuzz

Typescript program that returns the following to a contiguous sequence of numbers:

1. Whenever a number multiple of 3 occurs or contains 3 in its representation, it should be replaced by the word “fizz”;
2. If it is a multiple of 5, or it contains 5 in its representation, it should be changed to “buzz”;
3. If it is a multiple of 3 and 5 it should be changed to “fizzbuzz”;
4. If both rule 1 or rule 2 and rule 3 are checked at the same time, it should be changed to “lucky”;
5. Rules 1 and 2 are cumulative. Example: 3 should be changed to “fizz fizz”.

Example: Numbers from 1 to 20; Return:
1, 2, “fizz fizz”, 4, “buzz buzz”, “fizz”, 7,8, “fizz”, “buzz”, 11, “fizz”, “fizz”, 14, “lucky”, 16, 17,” fizz “, 19,” buzz ”

For unit testing, mocha is used together in combination with Chai assertion library.

## Installation

After cloning into the repository, use npm to install the required dependencies:

```bash
npm install
```

To start the program run the following command in the project's root directory:

```
npm start
```

To start the unit tests run the following command in the project's root directory:

```
npm test
```
