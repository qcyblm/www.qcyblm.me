set -e

yarn
echo "module.exports={clientId: '${VSSUE_CLIENTID}',clientSecret: '${VSSUE_CLIENTSECRET}'}" > src/.vuepress/secret.js
yarn build

cd src/.vuepress/dist

if
  msg='来自GitHub Action的自动部署'
  githubUrl=git@github.com:qcyblm/qcyblm.github.io.git
  git config --global user.name "${GITHUB_NAME}"
  git config --global user.email "${GITHUB_EMAIL}"
fi
git init
git add -A
git commit -m "${msg}：$(TZ="Asia/Shanghai" date +"%Y-%m-%d %T %Z")"
git push -f $githubUrl master:gh-pages # 推送到github

cd -
