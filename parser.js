	/* Yandex parser by Aleksandr Gvozdev
	just paste this code in your browser console and you will get the answer! */

	function parseYandex() {
	
	var result = [];
	var name = document.getElementsByTagName('h1')["0"].childNodes[0].nodeValue;
	var price = parseInt(
		(document.getElementsByClassName('n-product-default-offer__price-value')["0"]
		.childNodes["0"]
		.innerText)
		.replace(" ", ""));
		
		// Получаем список технических характеристик
		function getFeaturesList () {
		
		var features = document.getElementsByClassName('n-product-spec-list')["0"].childNodes;
		var result = {};
		var featuresList = [];

		for (var i = 0; i < features.length; i++) {

		var feature = (document.getElementsByClassName('n-product-spec-list')["0"].childNodes[i].innerText);
		feature = (feature.split(':'));
		result.name = feature[0];
		result.quantity = feature[1];
		var featureItem = {"name": result.name,
							"quantity": result.quantity};
	   
		featuresList.push(featureItem);
		
		};
		return featuresList;	
		};

		// Получаем список фотографий
		function getPhotoList (){
		var photoUrl = document.getElementsByClassName('n-gallery__image');
		var photoUrlList = [];
		for (var i = 0;  i < photoUrl.length; i++) {
		
		var photoUrlItem = document.getElementsByClassName('n-gallery__image')[i].src;

		photoUrlList.push(photoUrlItem);
		
		}
		return photoUrlList;
		};

 	// Отправляем результат функций в объект с общими данными
	result = {"name": name, 
			  "features":[getFeaturesList()],
			  "price": price, 
			  "photos": [getPhotoList()]};
	return result;

};
	parseYandex();