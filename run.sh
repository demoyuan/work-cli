#!/usr/bin/env bash
funSelectList() {
  int=1
  for item in $*
  do
    echo "${int}. ${item}"
    let "int++"
  done
  echo "0.  退出"
  read -p "输入数字 [0-$#] > " inputIndex

  if [[ $inputIndex =~ ^[0-$#]$ ]]; then
    if [[ $inputIndex == 0 ]]; then
      echo "已退出"
      exit
    fi
  else
    echo "输入错误." >&2
    exit 1
  fi
  clear
  return $[inputIndex-1]
}

echo '选择项目：'
projectArr=('test.com' 'demo.com')
funSelectList ${projectArr[*]}
project=${projectArr[$?]}

echo '选择运行命令：'
methodArr=('dev' 'generate' 'build' 'start')
funSelectList ${methodArr[*]}
method=${methodArr[$?]}

echo '选择环境：'
modeArr=('local' 'dev' 'qc' 'release')
funSelectList ${modeArr[*]}
mode=${modeArr[$?]}

yarn cross-env MODE=$mode nuxt $method --config-file src/$project/nuxt.config.js

if [[ $method == 'generate' ]]; then
  echo '是否使用7z压缩zip'
  enzipArr=('yes' 'no')
  funSelectList ${enzipArr[*]}
  enzip=${enzipArr[$?]}
  if [[ $enzip == 'yes' ]]; then
    7z a ./dist/$project/$mode/build.zip ./dist/$project/$mode/**
  fi

  echo '更新到服务器'
  serverArr=('account@127.0.0.1' 'account2@127.0.0.1')
  funSelectList ${serverArr[*]}
  server=${serverArr[$?]}
  scp -P 22 ./dist/$project/$mode/build.zip $server:/web/project/build.zip
  ssh -t -p 22 $server "cd /web/project ; sudo unzip -o build.zip ; rm build.zip"
fi

echo "按回车键退出"
read junk
