import { describe, it } from 'node:test';
import { cf } from 'src/index.js';
import { testData } from './main.seed.js';
import assert from 'node:assert';

describe('compare function', () => {
  it('compares values alphanumericly by default', () => {
    const [given, expected] = testData.alpha;
    const compareFn = cf<(typeof given)[number]>();
    assert.deepStrictEqual([...given].sort(compareFn), expected);
  });

  it('compares values alphanumericly', () => {
    const [given, expected] = testData.alpha;
    const compareFn = cf<(typeof given)[number]>().alpha();
    assert.deepStrictEqual([...given].sort(compareFn), expected);
  });

  it('uses ascending order by default', () => {
    const [given, expected] = testData.alpha;
    const compareFnImpl = cf<(typeof given)[number]>();
    const compareFnExpl = cf<(typeof given)[number]>().asc();
    assert.deepStrictEqual([...given].sort(compareFnImpl), expected);
    assert.deepStrictEqual([...given].sort(compareFnExpl), expected);
  });

  it('uses natural order for null values by default', () => {
    const [given, expected] = testData.alpha;
    const compareFnImpl = cf<(typeof given)[number]>();
    const compareFnExpl = cf<(typeof given)[number]>().nullNatural();
    assert.deepStrictEqual([...given].sort(compareFnImpl), expected);
    assert.deepStrictEqual([...given].sort(compareFnExpl), expected);
  });

  it('compares alphanumeric values in descending order', () => {
    const [given, expected] = testData.alphaDesc;
    const compareFn = cf<(typeof given)[number]>().desc();
    assert.deepStrictEqual([...given].sort(compareFn), expected);
  });

  it('compares alphanumeric values in null-first fashion', () => {
    const [given, expected] = testData.alphaNullFirst;
    const compareFn = cf<(typeof given)[number]>().nullFirst();
    assert.deepStrictEqual([...given].sort(compareFn), expected);
  });

  it('compares alphanumeric values in null-first fashion in descending order', () => {
    const [given, expected] = testData.alphaDescNullFirst;
    const compareFn = cf<(typeof given)[number]>().desc().nullFirst();
    assert.deepStrictEqual([...given].sort(compareFn), expected);
  });

  it('compares alphanumeric values in null-last fashion', () => {
    const [given, expected] = testData.alphaNullLast;
    const compareFn = cf<(typeof given)[number]>().nullLast();
    assert.deepStrictEqual([...given].sort(compareFn), expected);
  });

  it('compares alphanumeric values in null-last fashion in descending order', () => {
    const [given, expected] = testData.alphaDescNullLast;
    const compareFn = cf<(typeof given)[number]>().desc().nullLast();
    assert.deepStrictEqual([...given].sort(compareFn), expected);
  });

  it('compares numeric values', () => {
    const [given, expected] = testData.numeric;
    const compareFn = cf<(typeof given)[number]>().numeric();
    assert.deepStrictEqual([...given].sort(compareFn), expected);
  });

  it('compares numeric values in descending order', () => {
    const [given, expected] = testData.numericDesc;
    const compareFn = cf<(typeof given)[number]>().numeric().desc();
    assert.deepStrictEqual([...given].sort(compareFn), expected);
  });

  it('compares numeric values in null-first fashion', () => {
    const [given, expected] = testData.numericNullFirst;
    const compareFn = cf<(typeof given)[number]>().numeric().nullFirst();
    assert.deepStrictEqual([...given].sort(compareFn), expected);
  });

  it('compares numeric values in null-first fashion in descending order', () => {
    const [given, expected] = testData.numericDescNullFirst;
    const compareFn = cf<(typeof given)[number]>().numeric().desc().nullFirst();
    assert.deepStrictEqual([...given].sort(compareFn), expected);
  });

  it('compares numeric values in null-last fashion', () => {
    const [given, expected] = testData.numericNullLast;
    const compareFn = cf<(typeof given)[number]>().numeric().nullLast();
    assert.deepStrictEqual([...given].sort(compareFn), expected);
  });

  it('compares numeric values in null-last fashion in descending order', () => {
    const [given, expected] = testData.numericDescNullLast;
    const compareFn = cf<(typeof given)[number]>().numeric().desc().nullLast();
    assert.deepStrictEqual([...given].sort(compareFn), expected);
  });
});
