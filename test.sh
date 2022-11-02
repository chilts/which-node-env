#!/bin/bash

echo "Dev:"
NODE_ENV=dev node t.js
NODE_ENV=development node t.js
echo

echo "Test:"
NODE_ENV=test node t.js
NODE_ENV=testing node t.js
echo

echo "Stage:"
NODE_ENV=stage node t.js
NODE_ENV=staging node t.js
echo

echo "Prod:"
NODE_ENV=prod node t.js
NODE_ENV=production node t.js
echo

echo "Bad:"
NODE_ENV=bad node t.js
NODE_ENV=1 node t.js
echo

echo "Unknown env:"
node t.js
NODE_ENV= node t.js
echo

echo "(Ends)"
