var alanBtnInstance = alanBtn({
    key: "ca9e289fb7fbfa46e857c35e774a78082e956eca572e1d8b807a3e2338fdd0dc/stage",
    onCommand: function (commandData) {
      if (commandData.command === "go:back") {
        //call client code that will react on the received command
      }
    },
    rootEl: document.getElementById("alan-btn"),
  });