'use strict';

app.controller('MainController', ['$scope', '$window', function($scope, $window) {
  var en = {
    'brand': 'shian48263\'s Personal Page',
    'home': 'Home',
    'about': 'About',
    'portfolio': 'Portfolio',
    'contact': 'Contact',
    'title1': 'Data Scientist',
    'title2': 'Full Stack Web Developer',
    'desc': 'Who Explores the World\'s Awesomeness with Curiosity and Wonders',
    'aboutMe': 'Chuah Chee Shian (aka Shian)',
    'resume': 'I\'m a self-taught web developer and data scientist, also a Malaysian currently resides in Taiwan. After realizing determinately that my field of interest is not medicine which I studied in university, but programming which I engaged in since junior high school, I\'m now back on track as a dropout of NTU. My passion is to use technology-based solutions to help solve real-world challenges as breakthroughs, albeit within simplicity.\n\nCompetencies & Skills:\n\tLanguages & Frameworks: Python, ES6, HTML5, CSS3, SASS, SCSS, Bootstrap, jQuery, AngularJS, Node, Express, Socket, bluebird, MongoDB, SQL, Markdown, Bash\n\tTools & Expertise: Git, GitHub, BitBucket, AWS, Heroku, mLab, Cloud9, Responsive Web Design, Web App, Cordova, Ionic, Electron, Grunt, gulp, tmux, vim, Sublime Text, Postman, Wireshark, D3, Chart, Yeoman, Google Analytics, Docker, Vagrant, VirtualBox, IRC, Slack, Gitter, Trello, Screenhero, Agile, Chrome Developer Tools, REPL, OS X, Ubuntu, Debian, MongoDB, SQLite, PostgreSQL, Numpy, SciPy, SymPy, pandas, matplotlib, Seaborn, Basemap, scikit-learn, Jupyter, Hadoop, Spark, MapReduce\n\tLearning & Improving: vim, gulp, ReactJS, D3, Spark, Hadoop, Redshift, R, Facebook Ads',
    'works': 'Recent Works',
    'contactMe': 'Contact Me',
    'name': 'Chuah Chee Shian',
    'licensePre': 'Code licensed under the ',
    'licensePost': ' License.'
  };
  var zh = {
    'brand': 'shian48263 個人專頁',
    'home': '首頁',
    'about': '關於',
    'portfolio': '作品',
    'contact': '聯絡',
    'title1': '全端網頁開發者',
    'title2': '數據科學家',
    'desc': '一位對世界充滿好奇心的探索者',
    'aboutMe': '蔡奇賢（阿賢）',
    'resume': '我是一名自學起家的網頁開發者和數據科學家，也是一名現居於台灣的馬來西亞人。自從非常堅定自己對大學所念的醫學系完全沒興趣以後，我決意從台大輟學來從事我從國中開始就非常熱愛的程式設計。我特別熱衷於使用現有最新的科技和技術來簡單地解決現實世界所面臨的問題和挑戰，以便達到創新和突破。\n\n能力 & 技術：\n\t語言 & 框架：Python, ES6, HTML5, CSS3, SASS, SCSS, Bootstrap, jQuery, AngularJS, Node, Express, Socket, bluebird, MongoDB, SQL, Markdown, Bash\n\t工具 & 其他：Git, GitHub, BitBucket, AWS, Heroku, mLab, Cloud9, Responsive Web Design, Web App, Cordova, Ionic, Electron, Grunt, gulp, tmux, vim, Sublime Text, Postman, Wireshark, D3, Chart, Yeoman, Google Analytics, Docker, Vagrant, VirtualBox, IRC, Slack, Gitter, Trello, Screenhero, Agile, Chrome Developer Tools, REPL, OS X, Ubuntu, Debian, MongoDB, SQLite, PostgreSQL, Numpy, SciPy, SymPy, pandas, matplotlib, Seaborn, Basemap, scikit-learn, Jupyter, Hadoop, Spark, MapReduce\n\t學習 & 加強：vim, gulp, ReactJS, D3, Spark, Hadoop, Redshift, R, Facebook Ads',
    'works': '最近作品',
    'contactMe': '聯絡我',
    'name': '蔡奇賢',
    'licensePre': '程式碼依 ',
    'licensePost': ' 條款授權。'
  };
  $scope.portfolios = [{
    'src': 'assets/img/3MqnsHC.jpg',
    'href': 'http://pollnomena.herokuapp.com',
    'desc': 'Pollnomena'
  }, {
    'src': 'assets/img/WGx1XQv.jpg',
    'href': 'http://fcc-zipline-build-a-simon-game.bitballoon.com',
    'desc': 'Simon Game'
  }, {
    'src': 'assets/img/60bojJN.jpg',
    'href': 'http://fcc-zipline-stylize-stories-on-camper-news.bitballoon.com',
    'desc': 'FCC Camper News'
  }, {
    'src': 'assets/img/0j4Flsf.jpg',
    'href': 'http://fcc-zipline-show-the-local-weather.bitballoon.com',
    'desc': 'Local Weather App'
  }, {
    'src': 'assets/img/D3Ee2j0.jpg',
    'href': 'http://fcc-zipline-build-a-tic-tac-toe-game.bitballoon.com',
    'desc': 'Tic Tac Toe'
  }, {
    'src': 'assets/img/hZJr81o.jpg',
    'href': 'http://fcc-zipline-build-a-pomodoro-clock.bitballoon.com',
    'desc': 'Pomodoro Clock'
  }, {
    'src': 'assets/img/C5sB0lT.jpg',
    'href': 'http://fcc-zipline-build-a-javascript-calculator.bitballoon.com',
    'desc': 'JavaScript Calculator'
  }, {
    'src': 'assets/img/CvLDLKi.jpg',
    'href': 'http://fcc-zipline-use-the-twitch-tv-json-api.bitballoon.com',
    'desc': 'Twitch.tv'
  }, {
    'src': 'assets/img/5Y6tsoV.jpg',
    'href': 'http://fcc-zipline-build-a-random-quote-machine.bitballoon.com',
    'desc': 'Random Quotes Machine'
      // }, {
      //   'src': 'assets/img/THUP9qh.jpg',
      //   'href': 'http://fcc-zipline-wikipedia-viewer.bitballoon.com',
      //   'desc': 'Wikipedia Viewer'
  }];
  var href = {
    'twitter': 'https://twitter.com/shian48263',
    'github': 'https://github.com/shian48263',
    'linkedin': 'https://www.linkedin.com/in/shian48263',
    'facebook': 'https://www.facebook.com/shian48263',
    'google+': 'https://plus.google.com/113420689322929422099',
    'mit': 'https://opensource.org/licenses/MIT'
  };
  $scope.href = function(src) {
    $window.open(href[src], '_blank');
  };
  $scope.lang = function(str) {
    localStorage.visited = true;
    if (str === 'en') {
      localStorage.lang = 'en';
      $scope.isEn = true;
      $scope.isZh = false;
      for (var i in en) {
        $scope[i] = en[i];
      }
    } else if (str === 'zh') {
      localStorage.lang = 'zh';
      $scope.isZh = true;
      $scope.isEn = false;
      for (var j in zh) {
        $scope[j] = zh[j];
      }
    }
  };
  if (localStorage.visited) {
    $scope.lang(localStorage.lang);
  } else {
    var locale = navigator.language.split('-')[0];
    if (locale === 'zh' || locale === 'en') {
      $scope.lang(locale);
    } else {
      $scope.lang('en');
    }
  }
}]);

app.filter('toHtml', function($filter) {
  return function(data) {
    if (!data) return data;
    return data.replace(/\n/g, '<br />').replace(/\t/g,
      '&nbsp;<i class="fa fa-caret-right"></i>&nbsp;');
  };
});

app.directive('newTab', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      if (true) {
        element.attr('target', '_blank');
      }
    }
  };
});
