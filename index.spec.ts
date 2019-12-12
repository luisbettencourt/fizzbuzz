import { assert } from 'chai'
import { fizzBuzz } from './index'

it('should return the appropriate results for 1-20', () => {
    const output = []
    for (let i = 1; i <= 20; i++) {
        output.push(fizzBuzz(i))
    }

    assert.deepEqual(
        output,
        [
            1,
            2,
            'fizz fizz',
            4,
            'buzz buzz',
            'fizz',
            7,
            8,
            'fizz',
            'buzz',
            11,
            'fizz',
            'fizz',
            14,
            'lucky',
            16,
            17,
            'fizz',
            19,
            'buzz'
        ]
    )
})