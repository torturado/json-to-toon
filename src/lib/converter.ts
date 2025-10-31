import { encode, decode } from '@byjohann/toon';

export interface ConversionOptions {
  delimiter?: ',' | '\t' | '|';
  indent?: number;
  lengthMarker?: '#' | false;
  strict?: boolean;
}

export function jsonToToon(jsonData: unknown, options: ConversionOptions = {}): string {
  const {
    delimiter = ',',
    indent = 2,
    lengthMarker = false,
  } = options;

  return encode(jsonData, {
    delimiter,
    indent,
    lengthMarker: lengthMarker || false,
  });
}

export function toonToJson(toonText: string, options: ConversionOptions = {}): unknown {
  const {
    indent = 2,
    strict = true,
  } = options;

  return decode(toonText, {
    indent,
    strict,
  });
}

