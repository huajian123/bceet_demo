(function (window) {

  function GetXmlHttpObject() {
    var xmlHttp = null;
    try {
      // Firefox, Opera 8.0+, Safari
      xmlHttp = new XMLHttpRequest();
    } catch (e) {
      // Internet Explorer
      try {
        xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
    }
    return xmlHttp;
  }

  function json2Url(json) {
    var arr = [];
    json = json || {};
    json.timeStamp = Math.random(); // 添加随机时间，兼容ie
    for (var key in json) {
      arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(json[key]));
    }
    return arr.join('&'); // 转出url格式
  }

  function stateChanged(xmlHttp, config) {
    return function () {
      if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
          config.success && config.success(JSON.parse(xmlHttp.responseText));
        } else {
          config.error && config.error(xmlHttp.status);
        }

      }
    }
  }

  /**
   *
   * @param url
   * @param config {data: Object 请求数据, success: Function  成功回调, error: Function 失败回调, async： boolean 是否异步}
   * @constructor
   */
  function HttpGet(url, config) {
    var xmlHttp = GetXmlHttpObject();

    if (xmlHttp === null) {
      alert("您的浏览器不支持AJAX！");
      return;
    }
    // url = url + '?' + json2Url(config.data);
    xmlHttp.onreadystatechange = stateChanged(xmlHttp, config);
    xmlHttp.open("GET", url, config.async || true); // 默认异步
    xmlHttp.send(null);
  }

  /**
   *
   * @param url
   * @param config {data: Object 请求数据, success: Function  成功回调, error: Function 失败回调, async： boolean 是否异步}
   * @constructor
   */
  function HttpPost(url, config) {
    var xmlHttp = GetXmlHttpObject();
    if (xmlHttp === null) {
      alert("您的浏览器不支持AJAX！");
      return;
    }
    xmlHttp.onreadystatechange = stateChanged(xmlHttp, config);
    xmlHttp.open("POST", url, config.async || true);
    xmlHttp.setRequestHeader('Content-type', 'application/json');
    if (config.header) {
      for (var key in config.header) {
        if (config.header.hasOwnProperty(key)) {
          xmlHttp.setRequestHeader(key, config.header[key]);
        }
      }
    }
    xmlHttp.send(JSON.stringify(config.data));
  }

  /**
   * 解析url参数
   * @example ?id=12345&a=b
   * @return Object {id:12345, a:b}
   * */
  function urlParse() {
    var url = window.location.search;
    var obj = {};
    var reg = /[?&][^?&]+=[^?&]+/g
    var arr = url.match(reg);
    // ['?id=12345','&a=b']
    if (arr) {
      for (var key in arr) {
        var item = arr[key];
        var tempArr = item.substr(1).split('=');
        var key = decodeURIComponent(tempArr[0]);
        var val = decodeURIComponent(tempArr[1]);
        obj[key] = val;
      }
    }
    return obj
  }


  window.ufastHttp = {
    Get: HttpGet,
    Post: HttpPost,
    UrlParse: urlParse,
  };
})(window);
