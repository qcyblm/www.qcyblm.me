set -e
yarn
echo "module.exports={clientId: '${VSSUE_CLIENTID}',clientSecret: '${VSSUE_CLIENTSECRET}'}" > src/.vuepress/secret.js
yarn build
cd src/.vuepress/dist
git config --global user.name "${GITHUB_NAME}"
git config --global user.email "${GITHUB_EMAIL}"
git init
git add -A
git commit -m "来自GitHub Action的自动部署：$(TZ="Asia/Shanghai" date +"%Y-%m-%d %T %Z")"
git push -f git@github.com:qcyblm/qcyblm.github.io.git master:gh-pages

cd -
