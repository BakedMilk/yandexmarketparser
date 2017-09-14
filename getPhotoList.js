function getPhotoList (){
	var photoUrl = document.getElementsByClassName('n-gallery__image');
	var photoUrlList = [];
	for (var i = 0;  i < photoUrl.length; i++) {
	
	var photoUrlItem = document.getElementsByClassName('n-gallery__image')[i].src;

	photoUrlList.push(photoUrlItem);
	
	}
	return photoUrlList;
};
