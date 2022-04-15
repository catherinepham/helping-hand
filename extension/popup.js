const name = document.getElementById( 'name-text' );
const code = document.getElementById( 'code-text' );
const raiseHand = document.getElementById( 'raise-hand' );

const reset = document.getElementById( 'notify-reset' );
const counter = document.getElementById( 'notify-count' );

raiseHand.addEventListener( 'click', () => {
	chrome.runtime.sendMessage( '', {
		type: 'notification',
		message: text.value
	});
} );

chrome.storage.local.get( ['notifyCount'], data => {
	let value = data.notifyCount || 0;
	counter.innerHTML = value;
} );

chrome.storage.onChanged.addListener( ( changes, namespace ) => {
	if ( changes.notifyCount ) {
		let value = changes.notifyCount.newValue || 0;
		counter.innerHTML = value;
	}
});

reset.addEventListener( 'click', () => {
	chrome.storage.local.clear();
	text.value = '';
} );
