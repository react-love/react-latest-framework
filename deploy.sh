rm -rf ./dist/*
npm run build
mkdir pub
cp -r dist ./pub/
cp index.html ./pub/
cp out_of_service.html ./pub/
rm pub.zip
zip -r pub.zip ./pub
rm -rf pub
mv pub.zip ~/Documents/
