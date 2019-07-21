# ogp-generator

## How to use
```sh
$ node index.js --image 画像のURL --title タイトル
```

### Example
```sh
$ node index.js --image https://images.unsplash.com/photo-1518791841217-8f162f1e1131\?ixlib\=rb-1.2.1\&ixid\=eyJhcHBfaWQiOjEyMDd9\&auto\=format\&fit\=crop\&w\=3300\&q\=80 --title  ねこめっちゃかわいい！！%0Aねこかいたい！！！！！！
http://res.cloudinary.com/dec7on5qy/image/upload/v1563695045/bb66jpaqpihnjyokcvgx.jpg
```
![ねこ](http://res.cloudinary.com/dec7on5qy/image/upload/v1563695045/bb66jpaqpihnjyokcvgx.jpg)

## How to setup
1. [cloudinaryのアカウントを取得](https://cloudinary.com/)
2. APIキーなどの情報をenvファイルに設置して下さい
3. cloudnaryにwhite_box.pngをアップロードして,white_boxという名前になるように設定してください
