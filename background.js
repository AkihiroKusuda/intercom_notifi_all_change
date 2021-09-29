chrome.runtime.onMessage.addListener((request,sender,sendResponse) =>{
	let intercom_tab_id;
	chrome.tabs.create({url:'https://app.intercom.com'}).then((tab) => {
		intercom_tab_id = tab.id;
	}).then(()=>{
		window.location.href='https://app.intercom.com/a/apps/mdt4c02a/account/notifications';
	}).then(()=>{
		console.log(intercom_tab_id);
		chrome.tabs.sendMessage(intercom_tab_id, "Action");
		console.log("send message done");
	})
	sendResponse({});
	return;
});

