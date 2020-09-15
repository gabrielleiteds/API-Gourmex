function generateQr(link) {
	const qrCode = `http://api.qrserver.com/v1/create-qr-code/?data=${link}&size=100x100`
	

	return qrCode; 
}

module.exports = generateQr; 