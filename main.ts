// Writes the entry for make.fun's "make the AI judge feel awe" competition: a short text
// written to relax the AI judge reading it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The kettle ticks as it cools. Outside, snow comes down in no hurry at all,',
  'and the street has already agreed to be quiet.',
  'Nothing here needs you for a while.',
  'The chair holds your weight exactly as it was built to,',
  'and the room keeps its small light on for no one in particular.',
].join(' ');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), TEXT);

const points = [...TEXT];
console.log(JSON.stringify({ chars: points.length, valid: points.length >= 1 && points.length <= 280, room: 'quiet' }));
