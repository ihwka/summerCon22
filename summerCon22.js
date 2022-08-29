'use strict';

// 自動生成の選択された条件
const gender = document.getElementById('gender');
const language = document.getElementById('language');

// 自動生成のボタンと結果表示エリア
const agButton = document.getElementById('full-create');
const agRsDivided = document.getElementById('result-area');

// 手動生成のフォーム
const w1 = document.getElementById('user-name1'); // １枠目（左から）
const w2 = document.getElementById('user-name2'); // ２枠目
const w3 = document.getElementById('user-name3'); // ３枠目
const w4 = document.getElementById('user-name4'); // ４枠目
const w5 = document.getElementById('user-name5'); // ５枠目

// 手動生成のボタンと結果表示エリア
const igButton = document.getElementById('mojikara-create');
const igRsDivided = document.getElementById('result-area2');

/**
 * 自動生成の処理
 */
agButton.onclick = () => {
  
  // ヘッダー表示
  agRsDivided.innerText = '';
  const header = document.createElement('h5');
  header.innerText = 'あなたのお名前は・・・';
  agRsDivided.appendChild(header);
  // 結果表示
  const paragraph = document.createElement('h3');
  const result = autoGenr(rsTermsFirst(), rsTermsLast());
  paragraph.innerText = result;
  agRsDivided.appendChild(paragraph);

  // console.log(gender.value, language.value);
};

// 配列からランダムに要素を引き出す関数
function chooseRam(arrayParam) {
  let ramParam = Math.floor(Math.random() * arrayParam.length);
  return arrayParam[ramParam];
};

// リストからランダムに選び出したワードを結合
function autoGenr(a, b) {
  let firstN = chooseRam(a);
  let lastN = chooseRam(b);
  
  // 苗字に合わせて前後入れ替えて整形
  if (b === lNameParts[1]) {
    return lastN + " " + firstN;
  } else {
    return firstN + " " + lastN;
  }
};

// セレクトボックスの選択によるファーストネームの選び出し
function rsTermsFirst() {
  if (gender.value === "male" && language.value === "eng") { // 男性・英語
    return fNameParts[0];
  } else if (gender.value === "female" && language.value === "eng") { // 女性・英語
    return fNameParts[1];
  } else if (gender.value === "male" && language.value === "jp") { // 男性・日本語
    return fNameParts[2];
  } else if (gender.value === "female" && language.value === "jp") { // 女性・日本語
    return fNameParts[3];
  } else if (gender.value === "male" && language.value === "non-select") { // 男性・ランダム
    let maleName = [fNameParts[0], fNameParts[2]]
    let firstName = chooseRam(maleName);
    return firstName;
  } else if (gender.value === "female" && language.value === "non-select") { // 女性・ランダム
    let femaleName = [fNameParts[1], fNameParts[3]]
    let firstName = chooseRam(femaleName);
    return firstName;
  } else if (gender.value === "non-select" && language.value === "eng") { // ランダム・英語
    let engName = [fNameParts[0], fNameParts[1]]
    let firstName = chooseRam(engName);
    return firstName;
  } else if (gender.value === "non-select" && language.value === "jp") { // ランダム・日本語
    let jpName = [fNameParts[2], fNameParts[3]]
    let firstName = chooseRam(jpName);
    return firstName;
  } else { // ランダム・ランダム
    let firstName = chooseRam(fNameParts);
    return firstName;
  }
};

// セレクトボックスの選択によるラストネームの選び出し
function rsTermsLast() {
  if (language.value === "eng") { // 英語
    return lNameParts[0];
  } else if (language.value === "jp") { // 日本語
    return lNameParts[1];
  } else { // ランダム
    return chooseRam(lNameParts);
  }
};

// 自動生成に用いる名前の各パーツ
// ファーストネームの性別・言語別のパーツ
let fNameParts = [
  // 0.英語・男性・ファーストネーム
  [
    'マイケル', 'ベネット', 'ニール', 'スティーヴン', 'ジュリアン',
    'ネッド', 'ヴェルノ', 'バッカス', 'ハンフリー', 'マートン',
    'イアン', 'ハーバート', 'エディ', 'ザッケリー', 'ヘクター',
    'リアム', 'ノア', 'オリバー', 'イーサン', 'ジェームズ',
    'ジョン'
  ],
  // 1.英語・女性・ファーストネーム
  [
    'ヴァーナ', 'シビル', 'ロザンナ', 'ヘレナ', 'メリッサ',
    'マーサ', 'ケリー', 'デボラ', 'カッサンドラ', 'ジェニファー',
    'イヴ', 'イヴォンヌ', 'アーリン', 'イレーナ', 'ジェニ',
    'オリビア', 'エマ', 'ソフィア', 'ルナ', 'シャーロット'
  ],

  // 2.日本語・男性・ファーストネーム
  [
    '健司', '太陽', '翔', '隆', '辰右衛門',
    '宗助', '健', '瑛斗', '龍治', '善光',
    '敏弘', '蔵之介', '新之助', '孝弘', '達也',
    '人志', 'シン', '茂雄', '巧', '進次郎'
  ],
  // 3.日本語・女性・ファーストネーム
  [
    '梨絵', '沙織', '栞', '京香', '良美',
    '梢', '円', '美香', '梓', '和葉',
    '慶子', '里美', '舞', '麻美', '直子',
    'さえ子', '麗子', '凛', '陽葵', '紬'
  ],
];
// ラストネームの言語別のパーツ
let lNameParts = [
  // 0.英語・ラストネーム
  [
    'ウエスト', 'モラン', 'ホール', 'チャンドラー', 'ヘイル',
    'ミラー', 'ホプキンス', 'ローソン', 'ミッチェル', 'マローン',
    'ハドソン', 'トーヴィー', 'キンバリー', 'キーラー', 'ベレスフォード',
    'カーペンター', 'シートン', 'パレンバーグ', 'エイムズ', 'ウォーカー',
    'ウィリアムズ', 'ジョーンズ', 'デイビス', 'ホワイト', 'ゴンザレス',
    'ヤング', 'アレン', 'ヒル', 'キャンベル', 'シェパード',
    'ローレンス', 'スミス', 'ワトソン', 'ターナー', 'ハワード'
  ],
  // 1.日本語・ラストネーム
  [
  '佐竹', '森', '遠藤', '亀山', '竹ノ内',
  '長野', '吉本', '鈴木', '田中', '松田',
  '日比野', '今井', '草野', '佐藤', '中居',
  '菅原', '山本', '立花', '久保田', '大山',
  '川上', 'おりはら', 'つの', 'こえだ', 'つのだ',
  '松本', '早田', '長嶋', '友永', '乾',
  '白鳥'
  ]
];
// パーツ追加用フォーム → ['', '', '', '', '']
// パーツを追加するとき''や,を打つのが面倒なので
// こちらをコピペして使ってください。


// 初期の遺産↓
// 姓も名も関係なく、ただランダムに結合して返す形
//function autoGenr() {
//  let namaeAry = [
//      "アル", "レイ", "ダニー", "ケル", "ダグ", "フラッシュ", "ゲド", "ホンダ", "セジャ", "ダル", "アル＝バート",
//      "レオン", "カーティス", "フレド", "マル", "キリ", "バニー", "シリル", "リュート", "カバル", "ブラッド", "ペイン", "ライデン", 
//      "ハマダ", "チョウ", "タケ", "ウルク", "リー", "ネリム", "アニー", "ミレー", "サシャ", "ニール", "レディ", "セイン", "エイダ", "エイミー", 
//      "ベラ", "カーラ", "シェリル", "クレア", "レン", "ベン", "バート", "イアン", "クリス", "アンノ", "コール", "ショール", "セシル", "ソル", 
//      "テリー", "トム", "トール", "ニック", "ニル", "ネイト", "ノート", "ハル", "ヒュー", "ヘイム", "ホール", "ムート", "メル", "ミラー", 
//      "ラーム", "ヤン", "ユン", "ヨシ", "ルーイン", "ルルー", "レックス", "レオン", "ロン", "ロドリック", "ロッシュ", "ノア", "ゾロ", "ワシントン", 
//      "ジェイ", "ワン", "リオ", "シンドウ", "アビー", "エリス", "マール", "ラヴ", "ニュート", "エイヒム", "ムラマツ", "スズキ", "カワカミ", "シン", 
//      "ダン", "シュウイチ", "ゴウ", "ヒガシ", "エース", "キャリー", "ルーク", "ハン", "フォード", "アッバム", "エイデン", "ジム", "ポーラ", "オノ", 
//      "オカベ", "ライト", "マイク", "フレイヤ", "エラ", "アダム", "アダド", "グリン", "サリオン", "シア", "ディン", "アンナ", "ファロス", "ベラドンナ", 
//      "エスメラルダ", "ルビー", "ラルゴ", "オッド", "ムンゴ", "ロデリック", "ポロ", "マット", "ウィル", "トム", "リリー", "アーリン", "エアル", 
//      "ネオ", "デル＝ロイス", "フォン", "ファン", "リュック", "クラウド", "ルイーズ", "ラファエル", "イネス", "ソフィア", "アレッサンドロ", 
//      "リアム", "シャーロット", "ホセ", "マテオ", "ヘレナ", "ミゲル", "アメリア", "ノラ", "ナターシャ", "ヨハン", "ピーター", "ストライフ", 
//      "ジェイコブス", "ソニア", "メリナ", "バフィア", "バルザック", "ボヌール", "バクラ", "ヤノフスキ", "カミンスキー", "ラック", 
//      "ランスキー", "アーベルス", "アッカーマン", "エバーズ", "コース", "アシャド", "アル＝ハリーリー", "ハマム", "アルカラ-ガリアーノ", "バンデラス", 
//      "カレーラス", "アーノルディ", "バー＝ロス", "ブルーム", "ギンター", "ゴールドライヒ", "アップルヤード", "バチェラー", "ブラック", 
//      "コバーン", "ダニエル", "イートマン", "フラー", "スタイルズ", "トゥルーリ", "イェーガー", "ヴェイル",  
//  ];
//  let kigo = [
//    "・", "＝", "・デ・", "・ディ", " "
//  ]
//
//  let name = namaeAry[Math.floor(Math.random() * namaeAry.length)];
//  let name2 = namaeAry[Math.floor(Math.random() * namaeAry.length)];
//  let middle = kigo[Math.floor(Math.random() * kigo.length)];
//  return name + middle + name2;
//}



/**
 * 手動生成の処理
 */
igButton.onclick = () => {

  // ヘッダー表示
  igRsDivided.innerText = '';
  const header = document.createElement('h5');
  header.innerText = 'あなたのお名前は・・・';
  igRsDivided.appendChild(header);
  // 結果表示
  const paragraph = document.createElement('h3');
  const result = manGenr();
  paragraph.innerText = result;
  igRsDivided.appendChild(paragraph);
}

// 入力されたワードをシャッフルして結合
function manGenr() {
  // 入力されたワードを一旦配列に
  let inputWord = [];
  inputWord.push(w1.value, w2.value, w3.value, w4.value, w5.value);
  
  // 上記の配列をshuffle関数で並び替えて結合
  let conv = shuffle(inputWord);
  return conv.join('');

  // 以下の方法でも可能だったが、比較的高い確率で順序変わらず生成されるため、
  // shuffle関数を作って対応。
  // const narabikae = inputWord = inputWord.sort(() => Math.random() - 0.5);
  // return narabikae.join('');
}

// 配列の順序をシャッフルする関数
function shuffle(arrays) {
  const array = arrays.slice();
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}