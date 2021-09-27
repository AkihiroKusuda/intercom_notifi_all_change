chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		all_turn();
	}
});

function all_turn(){
    let position = [642,645,648,654,657,660]
    let box_ids =[]
    position.forEach(function(item,index) {
        box_ids.push('ember'.concat([item]))
    })
    box_ids.forEach(function(item,index){
        let element = document.getElementById(item)
        if (element.checked){
            element.checked=false
        }else{
            element.checked=true
        }
    })
    document.getElementById('ember670').click();
}
