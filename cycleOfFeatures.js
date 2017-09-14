
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
    console.log(featureItem);
	featuresList.push(featureItem);
	console.log(featuresList);	
};
	};