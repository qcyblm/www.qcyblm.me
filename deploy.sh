#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn
yarn github:build

# 进入生成的文件夹
cd github_src/.vuepress/dist

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
git commit -m "${msg}：$(TZ="Asia/Shanghai" date +"%x %T %Z")"
git push -f $githubUrl master:gh-pages # 推送到github

cd -

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn gitee:build

# 进入生成的文件夹
cd gitee_src/.vuepress/dist

# Deploy to Gitee
if [ -z "$GITEE_TOKEN" ]; then  # -z 字符串 长度为0则为true；$GITEE_TOKEN来自于GitHub仓库`Settings/Secrets`设置的私密环境变量
  msg='deploy'
  giteeUrl=git@gitee.com:qcyblm/qcyblm.git
else
  msg='来自GitHub Action的自动部署'
  giteeUrl=https://qcyblm:${GITEE_TOKEN}@gitee.com/qcyblm/qcyblm.git # 使用GitHub CI
  git config --global user.name "qcyblm"
  git config --global user.email "${GITEE_EMAIL}"
fi
git init
git add -A
git commit -m "${msg}：$(TZ="Asia/Shanghai" date +"%x %T %Z")"
git push -f $giteeUrl master # 推送到Gitee

cd - 
