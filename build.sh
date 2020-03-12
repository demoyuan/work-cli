#!/bin/bash
mode=$1
if [ $mode == 'dev' ]
then
  server='account@127.0.0.1'
  yarn generate
  7z a ./dist/$mode/$mode.zip ./dist/$mode/**
  scp -P 22 ./dist/$mode/$mode.zip $server:/web/project/build.zip
  ssh -t -p 22 $server "cd /web/project ; sudo unzip -o build.zip ; rm build.zip"

elif [ $mode == 'qc' ]
then
  server='account2@127.0.0.1'
  yarn generate:$mode
  7z a ./dist/$mode/$mode.zip ./dist/$mode/**

else
  echo '参数错误'
  set -e
fi

echo 'finish'