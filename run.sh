#!/bin/sh

for f in $(find test -name '*.js'); do k6 run -e STAGE=development $f; done