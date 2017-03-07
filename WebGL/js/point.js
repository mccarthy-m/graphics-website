var simpleGraphicsApp = 
angular.module
(
	'simpleGraphicsApp'
);

simpleGraphicsApp.factory
(
	'Point',
	[
		'Constants',
		'PointGeometry',
		'PointMaterial',
		function
		(
			Constants,
			PointGeometry,
			PointMaterial
		)
{
	var _point;

	function init()
	{
		instantiate();
	}

	function instantiate()
	{
		_point =
			new THREE.Points
			(
				PointGeometry.getPointGeometry(),
				PointMaterial.getPointMaterial()
			);

		_point.position.z = -300;
	}

	init();

	return({
		getPoint: function()
		{
			return _point;
		},
		setColor: function(color)
		{
			_point.material.color.setHex(color);
		},
		setSize: function(size)
		{
			_point.material.size = size;
		},
		setX: function(x)
		{
			_point.geometry.vertices[0].x = x;
			_point.geometry.verticesNeedUpdate = true;
		},
		setY: function(y)
		{
			_point.geometry.vertices[0].y = y;
			_point.geometry.verticesNeedUpdate = true;
		}
	});
}]);