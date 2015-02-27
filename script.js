document.getElementById('menuNavBtn').onclick = function() {
	if ( this.className.indexOf(' actif') < 0 )
		this.className = this.className + ' actif';
	else
		this.className = this.className.replace(' actif','');
};
