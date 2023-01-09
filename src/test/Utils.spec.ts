import { Utils } from "../app/Utils";
import {describe, expect, test} from '@jest/globals';


describe( ' Utils test suit' , () => {
  /* Testing the toUpperCase function in the Utils class. */
  test('Transform string to uppercase', () => { 
    const result = Utils.toUpperCase('test');
    expect(result).toBe('TEST');
   })

  /* Testing the parseUrl function in the Utils class. */
  test('Parse url', () => {
    const parsedUrl = Utils.parseUrl('https://www.google.com/search');
    expect(parsedUrl.host).toBe('www.google.com');
    expect(parsedUrl.pathname).toBe('/search');
  })

  /* Testing the parseUrl function in the Utils class. */
  test('Parse url with query string', () => {
    const parsedUrl = Utils.parseUrl('https://www.google.com/search?q=hello+world');
    const expectedQuery = {
      q: 'hello world'
    }
    expect(parsedUrl.query).toEqual(expectedQuery);
  })

  /* Testing invalid URL */
  test('Test invalid url', () => {
    expect(() => Utils.parseUrl('')).toThrowError('URL is required.');
  })
})