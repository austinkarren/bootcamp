import { expect } from 'chai';
import { inspectLog } from '../utilities/inspect-log.js';
import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import { promises as fs } from 'fs';
import path from 'path';

describe('01-print-practice', () => {
  it('has a for loop with console.log() in it', async () => {
    let content = await fs.readFile(
      path.join(__dirname, '../../practice/01-print-practice.js'),
      'utf8'
    );
    const ast = acorn.parse(content);
    let hasForStatement = false;
    let forStatementHasLog = false;
    let logHasOnlyOneArg = false;
    let forStatementHasOnlyOneLog = true;
    const loopHandler = (node: acorn.Node) => {
      hasForStatement = true;
      walk.simple(node, {
        CallExpression(node: acorn.Node) {
          // @ts-ignore
          const { callee } = node;
          if (
            callee.object.name === 'console' &&
            callee.property.name === 'log'
          ) {
            if (forStatementHasLog) {
              forStatementHasOnlyOneLog = false;
            }
            forStatementHasLog = true;
            // @ts-ignore
            logHasOnlyOneArg = node.arguments.length === 1;
          }
        }
      });
    };
    walk.simple(ast, {
      ForInStatement: loopHandler,
      ForOfStatement: loopHandler,
      ForStatement: loopHandler
    });
    expect(hasForStatement).to.equal(
      true,
      'Nice try, but you must use a for loop to solve this.'
    );
    expect(forStatementHasLog).to.equal(
      true,
      'your console.log() statement needs to be inside the for loop.'
    );
    expect(forStatementHasOnlyOneLog).to.equal(
      true,
      'You only need one console.log() call in your for loop.'
    );
    expect(logHasOnlyOneArg).to.equal(
      true,
      "Don't try to be fancy. your console.log() should only log one thing at a time."
    );
  });
  it('should print P R A C T I C E consecutively', async () => {
    const logs = await inspectLog(() =>
      // @ts-ignore
      import('../../practice/01-print-practice.js')
    );
    expect(logs.length).to.equal(
      8,
      'You should have printed to the console a total of 8 times.'
    );
    expect(logs.join('')).to.equal(
      'PRACTICE',
      'The letters you printed out should have spelled "PRACTICE" in all caps'
    );
  });
});
