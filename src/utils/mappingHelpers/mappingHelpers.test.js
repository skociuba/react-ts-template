import {getMapping, simpleMappersExample} from '.';

describe('getMapping', () => {
  it('expect to mapping correctly', () => {
    expect(getMapping('test')).toEqual('');
    expect(getMapping('testData')).toEqual('MappedData');
  });

  it('expect to mapping correctly', () => {
    expect(simpleMappersExample('B')).toEqual({title: 'BUY'});
  });
});
