import { expect } from 'chai';
import { inspectLog } from '../utilities/inspect-log.js';
import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import { promises as fs } from 'fs';
import path from 'path';

describe('02-remainder', function() {
  it('evaluates correctly', async () => {
    const { default: remainder } = await import(
      // @ts-ignore
      '../../practice/02-remainder.js'
    );
    expect(remainder(10, 3)).to.equal('3r1');
    expect(remainder(6, 2)).to.equal('3r0');
    expect(remainder(205, 11)).to.equal('18r7');
    expect(remainder(5, 8)).to.equal('0r5');
    expect(remainder(7, 4)).to.equal('1r3');
    expect(remainder(354, 4)).to.equal('88r2');
    expect(remainder(45, 4)).to.equal('11r1');
    expect(remainder(0, 1)).to.equal('0r0');

    if (
      remainder(1, 0) === 'ERROR' &&
      remainder(-10, 3) === 'ERROR' &&
      remainder(10, -3) === 'ERROR' &&
      remainder('5', 3) === 'ERROR' &&
      remainder(NaN, 4) === 'ERROR'
    ) {
      console.log('02-remainder: BONUS COMPLETE 🎉');
    }
  });
});
