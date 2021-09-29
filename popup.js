let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

btn1.onclick = () => {
    console.log("clicked btn1")
    chrome.runtime.sendMessage('All',(recieve) =>{
        console.log(recieve);
    })
}

btn2.onclick = () => {
    console.log('clicked btn2')
    chrome.tabs.query({active : true}).then((tabs)=>{
        chrome.tabs.sendMessage(tabs[0].id,'Change')
    }).then((recieve)=>{
        console.log(recieve);
    });
}