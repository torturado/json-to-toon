import { Tiktoken } from 'js-tiktoken';
import o200k_base from 'js-tiktoken/ranks/o200k_base';

let encoder: Tiktoken | null = null;

function getEncoder() {
  if (!encoder) {
    encoder = new Tiktoken(o200k_base);
  }
  return encoder;
}

export function countTokens(text: string): number {
  try {
    const enc = getEncoder();
    const tokens = enc.encode(text);
    return tokens.length;
  } catch (error) {
    console.error('Error counting tokens:', error);
    return 0;
  }
}

export interface TokenComparison {
  json: number;
  toon: number;
  savings: number;
  savingsPercent: number;
}

export function compareTokens(jsonText: string, toonText: string): TokenComparison {
  const jsonTokens = countTokens(jsonText);
  const toonTokens = countTokens(toonText);
  const savings = jsonTokens - toonTokens;
  const savingsPercent = jsonTokens > 0 ? (savings / jsonTokens) * 100 : 0;

  return {
    json: jsonTokens,
    toon: toonTokens,
    savings,
    savingsPercent: Math.round(savingsPercent * 10) / 10, // Round to 1 decimal
  };
}
