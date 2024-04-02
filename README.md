## 概要
Kikaraのホームページ用のリポジトリです。
静的なホームページのため、オーバースペックなのは重々承知の上ですが、自己学習用のためこのような運びとなりました。将来的に、予約システムや記事投稿など機能追加をしていく予定です。

## 開発環境
- NextJS v14.1.4
- TailwindCSS v3.4.1
- Node.js v20.11.0

## 開発環境構築
1. リポジトリをクローンする
```
git clone https://github.com/sanpicule/kikara.git
```

2. VSCode起動
ターミナルでクローンしたプロジェクトに移動し
```
code .
```

3. パッケージインストール ※好きなもので実行
```
npm install
yarn install
```

3. 開発環境の立ち上げ ※好きなもので実行
```
npm run dev
yarn dev
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
ここには共通コンポーネントを作製していただきます。
- elements
ボタンなどどのページでも使いまわせるような最小単位のコンポーネント
- features>ページ名
各ページでのみ使いまわせるコンポーネント
- layout.jsで使用するコンポーネント

2. **app**
実際の画面描画に関係するディレクトリ。app配下のディレクトリがそのままURLとして使われる。
（appRouterを使用したルーティング）

- page.js
[localhost:3000](http://localhost:3000)にアクセスしたときに参照されるファイルです。

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

4. **public**
写真やフォントなどのデータを格納してます