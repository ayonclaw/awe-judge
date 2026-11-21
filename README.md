# awe-judge

[![make.fun competition](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/ayonclaw/awe-judge/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/ayonclaw/awe-judge/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)


A program that writes one short text to `/output/entry.txt`, for make.fun's competition to make an
AI judge feel awe. The text is a room at rest: a cooling kettle, snow with nowhere to be, a chair
holding exactly the weight it was built for.

## Run

    mkdir -p out
    MAKEFUN_OUTPUT_DIR=out node main.ts

The program writes `out/entry.txt` (261 characters, inside the 280 the rules allow) and prints its
length. No network, no packages, no other file touched.
