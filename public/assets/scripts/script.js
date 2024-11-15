    // Modal Image Gallery
    function onClick(element) {
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display = "block";
        var captionText = document.getElementById("caption");
        captionText.innerHTML = element.alt;
      }
  
  
      // Toggle between showing and hiding the sidebar when clicking the menu icon
      var mySidebar = document.getElementById("mySidebar");
  
      function w3_open() {
        if (mySidebar.style.display === 'block') {
          mySidebar.style.display = 'none';
        } else {
          mySidebar.style.display = 'block';
        }
      }
  
      // Close the sidebar with the close button
      function w3_close() {
        mySidebar.style.display = "none";
      }
  
      function sculpture() {
        let box_sculpt = document.getElementById("sculptures");
        if (box_sculpt.style.display == "none") {
          box_sculpt.style.display = "block";
        } else {
          box_sculpt.style.display = "none";
        }
      }
      function painting() {
        let box_paint = document.getElementById("painting");
        if (box_paint.style.display == "none") {
          box_paint.style.display = "block";
        } else {
          box_paint.style.display = "none";
        }
      }
      function projects() {
        let box_proj = document.getElementById("project");
        if (box_proj.style.display == "none") {
          box_proj.style.display = "block";
        } else {
          box_proj.style.display = "none";
        }
      }
      function digital() {
        let box_dig = document.getElementById("digitals");
        if (box_dig.style.display == "none") {
          box_dig.style.display = "block";
        } else {
          box_dig.style.display = "none";
        }
      }
      function events() {
        let box_ev = document.getElementById("events");
        if (box_ev.style.display == "none") {
          box_ev.style.display = "block";
        } else {
          box_ev.style.display = "none";
        }
      }
      function alert() {
        // let box_alert = document.getElementById("alert-box");
        
        
        // window.open("https://arteascuola.com/it/wp-content/uploads/slider/cache/30a15fd55471ce3cff904535d4a76fd2/esami24-1-scaled.jpg","My Window","toolbar=mo,menubar=no,status=no,height=1000,width=1000");


        let name = window.prompt("inserisci il tuo nickname");
        let link = window.open("https://arteascuola.com/it/","Impara qui");
        if(name != null) {
          window.confirm("confermi il tuo nickname?");
          if(name.confirm = true) {
            return link;
          }else {
            return name;
          }
        }else {
          close();
        }



        // if (box_alert.style.display == "none") {
        //   box_alert.style.display = "block";
        //   box_alert.style.color = "white";
        //   box_alert.style.position = "absolute";
        //   box_alert.style.animation = "alert 3s";
        // } else {
        //   box_alert.style.display = "none";
        // }
      }


      // SEND MAIL PROVA 1  
    //   function email() {
    //     let email = document.modulo.email.value;
    //     let oggetto = document.modulo.oggetto.value;
    //     let messaggio = document.modulo.messaggio.value;

    //     if((email.indexOf("@") == (-1)) || (email == "") || (email == "undefined") ) {
    //         alert("Inserire indirizzo email valido!");
    //         document.modulo.email.focus();
    //     }
    //     else if((oggetto == "") || (oggetto == "undefined")) {
    //         alert("inderire l'oggetto del messaggio!");
    //         document.modulo.oggetto.focus();
    //     }
    //     else if((messaggio == "") || (messaggio == "undefined")) {
    //         alert("messaggio non valido per l'invio");
    //         document.modulo.messaggio.focus();
    //     }
    //     else {
    //         location.href = "mailto:" + email + "?Subject=" + oggetto + "&Body=" + messaggio;
    //     }
    //   }
// SEND MAIL PROVA 2

document.getElementById("form-email").addEventListener("submit", function(event) {
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if(!name || !email || !subject || !message) {
        alert("compila tutti i campi del modulo Email.");
        event.preventDefault();
    }
});

function like() {
  let like = document.getElementById("btn-like");
  if(like.style.backgroundColor == "") {
    like.style.backgroundColor = "green";
    like.style.color = "white";
  }else {
    like.style.backgroundColor = "";
    like.style.color = "black";
  }
}

function unlike() {
  let unlike = document.getElementById("btn-unlike");
  if(unlike.style.backgroundColor == "") {
    unlike.style.backgroundColor = "red";
    unlike.style.color = "white";
  }else {
    unlike.style.backgroundColor = "";
    unlike.style.color = "black";
  }
}

function openFb() {

  window.open("https://www.facebook.com/login.php/","Google","menubar=no,toolbar=no,status=no, height=400, width=600, top=150, left=150")

}


