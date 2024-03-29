#!/bin/bash
# Name of the app to check. Change this to your application name!
APP=$1

APP_TYPE=$2

# Determine version of Nx installed
NX_VERSION=$(node -e "console.log(require('./package.json').devDependencies['@nrwl/workspace'])")
TS_VERSION=$(node -e "console.log(require('./package.json').devDependencies['typescript'])")

NX_BASE=$(node -e "console.log(require('./nx.json').affected['defaultBase'])")

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
echo "NX_BASE: $NX_BASE"

# Install @nrwl/workspace in order to run the affected command
yarn add -D typescript@$TS_VERSION --cached

# Run the affected command, comparing latest commit to the one before that
yarn nx affected:$APP_TYPE --plain --base HEAD~1 --head HEAD | grep $APP -q

# Store result of the previous command (grep)
IS_AFFECTED=$?

if [ $IS_AFFECTED -eq 1 ]; then
  echo "🛑 - Build cancelled"
  exit 0
elif [ $IS_AFFECTED -eq 0 ]; then
  echo "✅ - Build can proceed"
  exit 1
fi