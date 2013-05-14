nudgepad.on('main', function () {
  window.onerror = function(message, url, lineNumber) {
    mixpanel.track('javascript error ' + message)
    $('.nudgepad#nudgepadJavascriptError').prepend('<div>Javascript Error: '+message+'</div>').show()
    //save error and send to server for example.
    return false
  }

})




