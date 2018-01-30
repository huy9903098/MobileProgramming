document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    document.getElementById('takepic').addEventListener('click',takepic);
    document.getElementById('showpic').addEventListener('click',showpic);
}

function takepic(){

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
      destinationType: Camera.DestinationType.FILE_URI, sourceType: Camera.PictureSourceType.CAMERA });

  function onSuccess(imageURI) {
      var image = document.getElementById('myImage');
      image.src = imageURI;
  }

  function onFail(message) {
      alert('Failed because: ' + message);
  }
}

function showpic(){

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
      destinationType: Camera.DestinationType.FILE_URI, sourceType: Camera.PictureSourceType.PHOTOLIBRARY });

  function onSuccess(imageURI) {
      var image = document.getElementById('myImage');
      image.src = imageURI;
  }

  function onFail(message) {
      alert('Failed because: ' + message);
  }
}


var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
