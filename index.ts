export function fizzBuzz(input: number) {
  let result = ''

  if (isDivisibleBy(input, 3)) {
    result = result.concat('fizz ')
  }
  if (contains(input, 3)) {
    result = result.concat('fizz ')
  }
  if (isDivisibleBy(input, 5)) {
    result = result.concat('buzz ')
  }
  if (contains(input, 5)) {
    result = result.concat('buzz ')
  }
  if (isDivisibleBy(input, 3) && isDivisibleBy(input, 5)) {
    result = 'lucky'
  }

  if (result.length === 0) {
    return input
  }
  result = result.trim()
  return result
}

function isDivisibleBy(a: number, b: number) {
  if (a % b !== 0) {
    return false
  }
  return true
}

function contains(a: number, b: number) {
  if (a.toString().includes(b.toString())) {
    return true
  }
  return false
}

for (let i = 1; i <= 20; i++) {
  console.log(fizzBuzz(i))
}
