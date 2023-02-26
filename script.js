(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for (var i = 0; i < names.length; i++) {
  
    var firstLetter = names[i].charAt(0).toLowerCase();
  
    let helloSpeaker = {
      speak: (name) => {
        console.log("Hello " + name);
      }
    }
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
  })();
