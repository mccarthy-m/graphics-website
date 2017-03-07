var simpleGraphicsApp = 
angular.module
(
	'simpleGraphicsApp'
);

simpleGraphicsApp.factory
(
	'Line',
	[
		'Constants',
		'LineGeometry',
		'LineMaterial',
		function
		(
			Constants,
			LineGeometry,
			LineMaterial
		)
{
	var _line;

	function init()
	{
		instantiate();
	}

	function instantiate()
	{
		_line =
			new THREE.Line
			(
				LineGeometry.getLineGeometry(),
				LineMaterial.getLineMaterial()
			);

		_line.position.z = -300;
	}

	init();

	return({
		getLine: function()
		{
			return _line;
		},
		setColor: function(color)
		{
			_line.material.color.setHex(color);
		},
		setWidth: function(width)
		{
			_line.material.linewidth = width;
		},
		setXTranslation: function(x)
		{
			_line.position.x = x;
		},
		setYTranslation: function(y)
		{
			_line.position.y = y;
		},
		setX1: function(x1)
		{
			_line.geometry.vertices[0].x = x1;
		},
		setX2: function(x2)
		{
			_line.geometry.vertices[1].x = x2;
		},
		setY1: function(y1)
		{
			_line.geometry.vertices[0].y = y1;
		},
		setY2: function(y2)
		{
			_line.geometry.vertices[1].y = y2;
		}
	});
}]);