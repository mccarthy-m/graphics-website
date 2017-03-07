var simpleGraphicsApp = 
	angular.module
	(
		'simpleGraphicsApp'
	);

simpleGraphicsApp.factory
(
	'PointVertex',
	[	
		'Constants',
		function(Constants)
{
	var _pointVertex;

	function init()
	{
		instantiate();
	}

	function instantiate()
	{
		_pointVertex =
			new THREE.Vector3
			(
				Constants.defaultDrawingCoord(),
				Constants.defaultDrawingCoord(),
				0
			);
	}

	init();

	return({
		getPointVertex: function()
		{
			return _pointVertex;
		}
	});
}]);