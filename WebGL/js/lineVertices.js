var simpleGraphicsApp = 
	angular.module
	(
		'simpleGraphicsApp'
	);

simpleGraphicsApp.factory
(
	'LineVertices',
	[	
		'Constants',
		function(Constants)
{
	var _lineVertices = [];

	function init()
	{
		instantiate();
	}

	function instantiate()
	{
		_lineVertices[0] =
			new THREE.Vector3
			(
				Constants.defaultDrawingCoord(),
				Constants.defaultDrawingCoord(),
				0
			);

		_lineVertices[1] =
			new THREE.Vector3
			(
				Constants.defaultDrawingCoord(),
				Constants.defaultDrawingCoord(),
				0
			);
	}

	init();

	return({
		getFirstVertex: function() {
			return _lineVertices[0]
		},
		getSecondVertex: function() {
			return _lineVertices[1];
		}
	});
}]);