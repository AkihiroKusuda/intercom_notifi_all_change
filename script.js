chrome.extension.onMessage.addListener((request, sender, sendResponse) => {
	if (request == "Action") {
		all_turn();
        console.log("Done...")
	}
});

function all_turn(){
    all_turn_desktop();
    all_turn_mobile();
    click_save();
}

function all_turn_desktop(){
    let desks = $("span:contains('Desktop')");
    for (let i = 0; i < desks.length; i++) {
        if (i!=3){        
            let check_element = desks[i].previousElementSibling.firstElementChild;
            check_element.click();
        }
    }
}

function all_turn_mobile(){
    let desks = $("span:contains('Mobile')");
    for (let i = 0; i < desks.length; i++) {
        if (i!=3){
            let check_element = desks[i].previousElementSibling.firstElementChild;
            check_element.click();
        }
    }
}

function click_save(){
    $("span:contains('Save')")[0].parentNode.parentNode.parentNode.click();
}
