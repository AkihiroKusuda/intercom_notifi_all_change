chrome.browserAction.onClicked.addListener((tab) => {
	let url_regex = new RegExp('https:\/\/app\.intercom\.com\/a\/apps\/[a-z0-9]+\/account\/notifications');

	// 通知設定ページにいない場合
	if (!url_regex.test(tab.url)){
		// 遷移させる
		chrome.tabs.executeScript({
			code: `
			let url = window.location.href;
			let id = url.split('/')[5];
			window.location.href = 'https://app.intercom.com/a/apps/' + id + '/account/notifications';
			`,
		})

		// ページ遷移待ち
		function sleep(ms) {
			var start_time = new Date();
			while (new Date() - start_time < ms);
		}
		sleep(1000);
	}

	chrome.tabs.sendMessage(tab.id, "Action");
});