import { parse, UrlWithParsedQuery } from "url";

/* This class contains utility functions that are used throughout the application */
export class Utils {
  
  /**
   * This function takes a string and returns a string.
   * @param {string} str - string - This is the parameter that we're passing into the function.
   * @returns The string in uppercase.
   */
  public static toUpperCase(str: string): string {
    return str.toUpperCase();
  }

  /**
   * It takes a URL string and returns an object with the URL's parsed query string
   * @param {string} url - The URL to parse.
   * @returns The parse method returns an object with the following properties:
   */
  public static parseUrl(url: string): UrlWithParsedQuery {
    if(!url) throw new Error('URL is required.');

    return parse(url, true);
  }


}