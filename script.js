chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		all_turn();
	}
});

function all_turn(){
    let position = [642,643,645,646,648,649,654,655,657,658,660,661]
    let box_ids =[]
    position.forEach(function(item,index) {
        box_ids.push('ember'.concat([item]))
    })
    box_ids.forEach(function(item,index){
        let element = document.getElementById(item)
        element.click()
    })
    document.getElementById('ember670').click();
}
