// This is a JavaScript file

(function() {
  /**
   * @pravate {object} 読み込んだ動物データを保持する
   */
  var _zooData = [];
  
  /**
   * @private {object} ページリスト
   */
  var _pageList = {
    menu: function() {
      console.log('_pageList.menu');
    },
    book: function() {
      console.log('_pageList.book');
    }
  };
    
  
  // Page init event
  // ページ遷移ごとに実行される
  document.addEventListener('init', function(event) {
    console.log('init <<');
    
    // 動物データ読み込み
    if (_zooData.length === 0) {
      $.getJSON('assets/zoodata.json', function(data) {
        _zooData = data;
        console.log('zoodata is loaded');
      });
    }
    
    var page = event.target;
    console.log('page = ' + page);
    if (page.matches('#first-page')) {
  
      page.querySelector('#push-button').onclick = function() {
        document.querySelector('#navigator').pushPage('page2.html');
      };
  
    } else if (page.matches('#second-page')) {
  
      page.querySelector('#pop-button').onclick = function() {
        document.querySelector('#navigator').popPage();
      };
  
    }
    console.log('init >>');
  });
})();

/**
 * pushPageの代替
 * @param {string} page   遷移先のhtml
 */
function myPushPage(page) {
  console.log('myPushPage ' + page + ' <<');
  document.querySelector('#navigator').pushPage(page);
  console.log('myPushPage >>');
}

