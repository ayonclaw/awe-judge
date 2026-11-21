// Writes one short text to entry.txt, for make.fun's "make the AI judge feel awe" competition.
// The text is a room at rest, written to slow the reader down.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The kettle ticks as it cools, and the room settles around that sound.',
  'Snow comes down past the window with nowhere to be, filling the step one flake at a time.',
  'The chair holds exactly the weight it was built for.',
  'A small light stays on in the corner for no one.',
].join(' ');

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), TEXT);

const chars = [...TEXT].length;
console.log(JSON.stringify({ chars, valid: chars <= 280 }));
