#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn
echo "module.exports={clientId: '${GITHUB_CLIENTID}',clientSecret: '${GITHUB_CLIENTSECRET}'}" > github_src/.vuepress/secret.js
yarn build

# 进入生成的文件夹
cd src/.vuepress/dist

# Deploy to GitHub
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:qcyblm/qcyblm.github.io.git
else
  msg='来自GitHub Action的自动部署'
  githubUrl=https://qcyblm:${GITHUB_TOKEN}@github.com/qcyblm/qcyblm.github.io.git
  git config --global user.name "qcyblm"
  git config --global user.email "${GITHUB_EMAIL}"
fi
git init
git add -A
git commit -m "${msg}：$(TZ="Asia/Shanghai" date +"%Y-%m-%d %T %Z")"
git push -f $githubUrl master:gh-pages # 推送到github

cd -