type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
var argumentsLength = (...args: JSONValue[]): number => args.length;
