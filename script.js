let tabLinks = document.getElementsByClassName('tabLink');
let tabContents = document.getElementsByClassName('tabContents');

function openTab(tabname) {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove('active-tab');
        
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove('active-content');
        
    }
    event.currentTarget.classList.add('active-tab');
    document.getElementById(tabname).classList.add('active-content');
}

let menu = document.getElementById('menu');

function opennav() {
    menu.style.right = "0";
}

function closenav() {
    menu.style.right = "-200px";
}

let menuitem = document.querySelectorAll('.menuitem');

menuitem.forEach(function (item) {
    item.onclick = function(){
        if (menu.style.right = "0") {
            menu.style.right = "-200px";
        }
    }
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbzsUpKZXKPDHMdEPKEgvMr1qOn6_qYuF4SswEDJsoP5wwdMr-MsTyFwJfSF36GeJho/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML = "Message sent successfully"
        setTimeout(function() {
            message.innerHTML = "";
        },5000)
        form.reset();
      })
      .catch(error => {
        message.style.color = "#ff3333"
        message.innerHTML = "Message not sent!"
        setTimeout(function() {
            message.innerHTML = "";
        },5000)
        form.reset();
      })
  })