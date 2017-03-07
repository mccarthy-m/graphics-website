var simpleGraphicsApp = 
angular.module
(
	'simpleGraphicsApp'
);

simpleGraphicsApp.factory
(
	'PointMaterial',
	[
		'Constants',
		function(Constants)
{
	var _pointMaterial;

	function init()
	{
		instantiate();
	}

	function instantiate()
	{
		_pointMaterial =
			new THREE.PointsMaterial
			({
				color: Constants.defaultShapeColor(),
				size: Constants.defaultPointSize()
			});
	}

	init();

	return({
		getPointMaterial: function()
		{
			return _pointMaterial;
		}
	});
}]);