export default app => {
  app.service("LoginService", ['baseUrl', function (baseUrl) {
    /* passport相关的东西 */
    var loginCallbackStack = [];
    var intervalVar;
    var currentLocation;

    var config = {
      base: baseUrl + '/',
      loginTheme: "snds"
    };


    function popupLoginContainer() {
      document.cookie = "authId=1; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.cnsuning.com; path=/;";
      // $cookies.remove('authId')
      if (window.location.hostname.match('sit')) {
        window.location.href = 'https://ssosit.cnsuning.com/ids/login?loginTheme=' + config.loginTheme + '&service=' + encodeURIComponent(window.location.href)
      }else{
        window.location.href = 'https://sso.cnsuning.com/ids/login?loginTheme=' + config.loginTheme + '&service=' + encodeURIComponent(window.location.href)
      }
      // console.log('111')
      // if (ENVIRONMENT == 'development') {
      //   window.location.href = 'https://ssosit.cnsuning.com/ids/login?loginTheme=snds&service=http://sndssit.cnsuning.com:' + PORT + '/'
      // } else if (ENVIRONMENT == 'sit') {
      //   window.location.href = 'https://ssosit.cnsuning.com/ids/login?loginTheme=snds&service=http://sndssit.cnsuning.com/'
      // } else {
      //   window.location.href = 'https://sso.cnsuning.com/ids/login?loginTheme=snds&service=http://snds.cnsuning.com/'
      // }
      // window.location.href='https://sso.cnsuning.com/ids/login?loginTheme=snds&service=http://snds.cnsuning.com/'
      // window.location.href = 'https://ssosit.cnsuning.com/ids/login?loginTheme=snds&service=http://sndssit.cnsuning.com:8181/'
      // if (typeof intervalVar == 'undefined') {
      //   currentLocation = window.location.href;
      //   var src = ((typeof config.successCallbackUrl == 'undefined') ?
      //     (config.base + "popupLoginSuccess?") : config.successCallbackUrl) + "topLocation=" + encodeURIComponent(currentLocation) + "&loginTheme=" + config.loginTheme;

      //   document.getElementById('modalOverlay').style.display = 'block';
      //   document.getElementById('modalContainer').style.display = 'block';
      //   document.getElementById("iframeLogin").src = src;

      //   intervalVar = window.setInterval(checkMsgFromLoginIframe, 200);
      // }
    }

    function resizeContainer(widthAndHeight) {
      //        document.getElementById("modalOverlay").style.display = "block";
      var value = widthAndHeight.split(",");
      var width = value[0];
      var height = value[1];
      var loginIframe = document.getElementById("iframeLogin");
      loginIframe.style.width = width + 'px';
      loginIframe.style.height = height + 'px';
      loginIframe.style.marginLeft = -width / 2 + 'px';
      loginIframe.style.marginTop = -height / 2 + 'px';
    }

    function closeContainer() {
      document.getElementById('modalOverlay').style.display = 'none';
      document.getElementById('modalContainer').style.display = 'none';
      document.getElementById("iframeLogin").src = '';
      window.location.href = (currentLocation.indexOf('#') == -1) ? currentLocation + "#unknown" : currentLocation;
      clearInterval(intervalVar);
      intervalVar = undefined;
    }

    function loginSuccess() {
      closeContainer();
      dequeue();
    }

    function popupClose() {
      closeContainer();
      reject();
    }

    function checkMsgFromLoginIframe() {
      var newHash = window.location.hash;
      if (newHash.length > 1) {
        var value = newHash.split('#');
        var params = value[1].split(':');
        switch (params[0]) {
          case 'resize':
            resizeContainer(params[1]);
            break;
          case 'close':
            closeContainer();
            break;
          case 'loginSuccess':
            loginSuccess();
            break;
          default:
            break;
        }
      }
    }

    function enqueue(resolve, reject) {
      loginCallbackStack.push({
        resolve: resolve,
        reject: reject
      });
    }

    function dequeue() {
      // 这里面还需要修改
      var callbacks = loginCallbackStack.pop() || {};
      if (callbacks.resolve) {
        callbacks.resolve();
      }
    }

    function reject() {
      var callbacks = loginCallbackStack.pop() || {};
      if (callbacks.reject) {
        callbacks.reject();
      }
    }

    return {
      checkMsgFromLoginIframe: checkMsgFromLoginIframe,
      closeContainer: closeContainer,
      loginSuccess: loginSuccess,
      resizeContainer: resizeContainer,
      popupLoginContainer: popupLoginContainer,
      enqueue: enqueue,
      config: config,
      //add hw 2015-06-30
      popupClose: popupClose
    };
  }]);
}