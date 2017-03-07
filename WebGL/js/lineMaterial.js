var simpleGraphicsApp = 
angular.module
(
	'simpleGraphicsApp'
);

simpleGraphicsApp.factory
(
	'LineMaterial',
	[
		'Constants',
		function(Constants)
{
	var _lineMaterial;

	function init()
	{
		instantiate();
	}

	function instantiate()
	{
		_lineMaterial =
			new THREE.LineBasicMaterial
			({
 				color: Constants.defaultShapeColor(),
 				linewidth: Constants.lineThickness()
			});
	}

	init();

	return({
		getLineMaterial: function()
		{
			return _lineMaterial;
		}
	});
}]);