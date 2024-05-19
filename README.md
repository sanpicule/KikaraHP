## 概要
Kikaraのホームページ用のリポジトリです。
静的なホームページのため、オーバースペックなのは重々承知の上ですが、自己学習用のためこのような運びとなりました。将来的に、予約システムや記事投稿など機能追加をしていく予定です。

## 開発環境
- `NextJS v14.1.4`
- `TailwindCSS v3.3.0`
- `Node.js v20.13.1`
  - voltaでバージョン管理しています。
  - install方法は[こちら](https://docs.volta.sh/guide/getting-started)

## 開発環境構築
1. リポジトリをクローンする
```
git clone https://github.com/sanpicule/kikara.git
```

2. VSCode起動
ターミナルで、クローンしたプロジェクトに移動し
```
code .
```

3. VSCodeのターミナルを起動し、developをフェッチ
```
git fetch origin develop

git checkout develop
```

3. パッケージインストール
```
npm install
```

3. 開発環境の立ち上げ
```
npm run dev
```

4. ローカルサーバにアクセス
```
http://localhost:3000
```

## ディレクトリ構成
```
src
├── components
│   ├── elements
│   ├── features
│   │   ├── contact
│   │   ├── home
│   │   ├── mineral
│   │   ├── news
│   │   ├── reiki
│   │   └── tidying
│   └── layouts
├── app
│   ├── contact
│   ├── globals.css
│   ├── layout.js
│   ├── mineral
│   ├── news
│   ├── page.js
│   ├── reiki
│   └── tidying
├── data
└── public
    ├── images
    └── fonts
```
基本的には、src配下を触ることになると思うので、他は省いています。
1. **components**
ここにコンポーネントを作製していただきます。
- elements
ボタンなどどのページでも使いまわせるような最小単位のコンポーネント
- features>ページ名
各ページでのみで使うコンポーネント
- layouts
layout.jsで使用するコンポーネント
例：Header.jsやFooter.jsなど

2. **app**
実際の画面描画に関係するディレクトリ。app配下のディレクトリ名がそのままURLとして使われる。
（appRouterを使用したルーティング）

- page.js
[localhost:3000](http://localhost:3000)（ルートのパス）にアクセスしたときに参照されるファイルです。

- globals.css
プロジェクト全体に適応させたいスタイルを定義できる

- layout.js
プロジェクト全体の共通レイアウトを定義できる
例 フッターやヘッダーはここに一度定義すれば別のコンポーネントに記載する必要がなくなる

また、layout.jsはapp配下のディレクトリに１つづつ定義ができる。今回は使用しないと思うが、ネストが深くなる時に使用すると非常に便利

- 各ディレクトリ（contact, reikiなど）
ここにはpage.jsという名前のファイルを必ず配置すること。ディレクトリ名はパスの名前と直結するためわかりやすくしています。
例えば、[localhost:3000/reiki](http://localhost:3000/reiki)にアクセスすると、reiki/page.jsが参照されます。

3. **data**
ヘッダーのメニュー一覧などフロントで保持するデータを格納しています。

4. **public/images**
写真を格納してます