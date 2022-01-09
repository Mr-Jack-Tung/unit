import * as assert from 'assert'
import {
  watchGraphAndLog,
  watchTreeAndLog,
  watchUnitAndLog,
} from '../../../debug'
import { fromSpec } from '../../../spec/fromSpec'
import _specs from '../../../system/_specs'
import { pod, system } from '../../util/system'

const spec = require('../../../system/core/loop/RangeRec/spec.json')
const Range = fromSpec<{ any: any }, { bit: number }>(spec, _specs)

const range = new Range(system, pod)

false && watchUnitAndLog(range)
false && watchGraphAndLog(range)
false && watchTreeAndLog(range)

range.play()

range.push('a', 5)

range.push('b', 5)
assert.equal(range.take('i'), undefined)
assert.equal(range.peakInput('a'), undefined)
assert.equal(range.peakInput('b'), undefined)

range.push('a', 5)
range.push('b', 5)
assert.equal(range.take('i'), undefined)
assert.equal(range.peakInput('a'), undefined)
assert.equal(range.peakInput('b'), undefined)

range.push('a', 2)
range.push('b', 3)
assert.equal(range.take('i'), 2)
assert.equal(range.take('i'), undefined)
assert.equal(range.peakInput('a'), undefined)
assert.equal(range.peakInput('b'), undefined)

range.push('a', 2)
range.push('b', 3)
assert.equal(range.take('i'), 2)
assert.equal(range.take('i'), undefined)
assert.equal(range.peakInput('a'), undefined)
assert.equal(range.peakInput('b'), undefined)

range.push('a', 3)
range.push('b', 2)
assert.equal(range.take('i'), undefined)
assert.equal(range.peakInput('a'), undefined)
assert.equal(range.peakInput('b'), undefined)

range.push('a', 2)
range.push('b', 3)
assert.equal(range.take('i'), 2)
assert.equal(range.take('i'), undefined)
assert.equal(range.peakInput('a'), undefined)
assert.equal(range.peakInput('b'), undefined)

range.push('a', 2)
range.push('b', 4)
assert.equal(range.take('i'), 2)
assert.equal(range.take('i'), 3)
assert.equal(range.take('i'), undefined)
assert.equal(range.peakInput('a'), undefined)
assert.equal(range.peakInput('b'), undefined)

range.push('a', 2)
range.push('b', 5)
assert.equal(range.take('i'), 2)
assert.equal(range.take('i'), 3)
assert.equal(range.take('i'), 4)
assert.equal(range.take('i'), undefined)
assert.equal(range.peakInput('a'), undefined)
assert.equal(range.peakInput('b'), undefined)

range.push('a', 2)
range.push('b', 2)
range.push('a', 1)
range.push('b', 1)
assert.equal(range.take('i'), undefined)
assert.equal(range.peakInput('a'), undefined)
assert.equal(range.peakInput('b'), undefined)

range.push('a', 2)
range.push('b', 4)
assert.equal(range.peakInput('a'), 2)
assert.equal(range.peakInput('b'), 4)
assert.equal(range.take('i'), 2)
assert.equal(range.take('i'), 3)
assert.equal(range.take('i'), undefined)
assert.equal(range.peakInput('a'), undefined)
assert.equal(range.peakInput('b'), undefined)

range.push('a', -2)
range.push('b', -1)
assert.equal(range.peakInput('a'), -2)
assert.equal(range.peakInput('b'), -1)
assert.equal(range.take('i'), -2)
assert.equal(range.take('i'), undefined)
assert.equal(range.peakInput('a'), undefined)
assert.equal(range.peakInput('b'), undefined)

range.push('a', 0)
range.push('b', 2)
assert.equal(range.peakInput('a'), 0)
assert.equal(range.peakInput('b'), 2)
assert.equal(range.peak('i'), 0)
range.push('a', 1)
assert.equal(range.take('i'), 1)
assert.equal(range.peak('i'), undefined)
assert.equal(range.peakInput('a'), undefined)
assert.equal(range.peakInput('b'), undefined)

range.push('a', 0)
range.push('b', 2)
assert.equal(range.peakInput('a'), 0)
assert.equal(range.peakInput('b'), 2)
assert.equal(range.take('i'), 0)
range.push('b', 1)
assert.equal(range.take('i'), 0)
assert.equal(range.take('i'), undefined)
assert.equal(range.peakInput('a'), undefined)
assert.equal(range.peakInput('b'), undefined)

range.push('a', 0)
range.push('b', 2)
assert.equal(range.peakInput('a'), 0)
assert.equal(range.peakInput('b'), 2)
assert.equal(range.peak('i'), 0)
range.push('a', 2)
assert.equal(range.peak('i'), undefined)
assert.equal(range.peakInput('a'), undefined)
assert.equal(range.peakInput('b'), undefined)

range.push('a', 0)
range.push('b', 2)
assert.equal(range.peakInput('a'), 0)
assert.equal(range.peakInput('b'), 2)
assert.equal(range.take('i'), 0)
assert.equal(range.peakOutput('i'), 1)
assert.equal(range.takeInput('b'), 2)
assert.equal(range.take('i'), undefined)
assert.equal(range.takeInput('a'), 0)
assert.equal(range.peakInput('b'), undefined)

range.setInputConstant('a', true)
range.push('a', 0)
range.push('b', 2)
assert.equal(range.peakInput('a'), 0)
assert.equal(range.peakInput('b'), 2)
assert.equal(range.take('i'), 0)
assert.equal(range.take('i'), 1)
assert.equal(range.peakInput('a'), 0)
assert.equal(range.take('i'), undefined)
range.setInputConstant('a', false)
assert.equal(range.peakInput('a'), 0)
assert.equal(range.peakInput('b'), undefined)
range.push('b', 1)
assert.equal(range.take('i'), 0)
assert.equal(range.take('i'), undefined)
assert.equal(range.peakInput('a'), undefined)
assert.equal(range.peakInput('b'), undefined)

range.setInputConstant('a', true)
range.setInputConstant('b', true)
range.push('a', 0)
range.push('b', 1)
assert.equal(range.peakInput('a'), 0)
assert.equal(range.peakInput('b'), 1)
assert.equal(range.take('i'), 0)
assert.equal(range.peakInput('a'), 0)
assert.equal(range.peakInput('b'), 1)
assert.equal(range.take('i'), 0)
assert.equal(range.take('i'), 0)
assert.equal(range.take('i'), 0)

range.setInputConstant('a', true)
range.setInputConstant('b', true)
range.push('a', 0)
range.push('b', 2)
assert.equal(range.take('i'), 0)
assert.equal(range.take('i'), 1)
assert.equal(range.take('i'), 0)
assert.equal(range.take('i'), 1)

range.setInputConstant('a', true)
range.setInputConstant('b', true)
range.push('a', 0)
range.push('b', 3)
assert.equal(range.take('i'), 0)
assert.equal(range.take('i'), 1)
assert.equal(range.take('i'), 2)
assert.equal(range.take('i'), 0)
assert.equal(range.take('i'), 1)
assert.equal(range.take('i'), 2)
range.setInputConstant('a', false)
range.setInputConstant('b', false)
assert.equal(range.take('i'), 0)
assert.equal(range.take('i'), 1)
assert.equal(range.take('i'), 2)
assert.equal(range.peakInput('a'), undefined)
assert.equal(range.peakInput('b'), undefined)

// // infinite loop
// range.setInputConstant('a', true)
// range.setInputConstant('b', true)
// range.setOutputIgnored('i', true)
// range.push('a', 0)
// range.push('b', 2)
