// button 要素と click イベント
const image = document.getElementById("hoge")

const alertMessage = function() {
  alert("よくぞ私を見つけた　褒美にレトロゲームをプレイする権利をやろう")
}

hoge.onclick = alertMessage // アラートが表示される

const imageElement = document.getElementById("dog-image")

// 指定したサーバーにデータを取りに行く
fetch("https://app.pixelencounter.com/api/basic/monsters/random")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })

      const buyButtonTea = document.getElementById("buy-button-tea");
      const displayItems = document.getElementById("display-items");
      buyButtonTea.onclick = function () {
        displayItems.textContent = displayItems.textContent + "みんなが古今東西のゲームに気軽にふれあえるサイトを作りたい";
      };

