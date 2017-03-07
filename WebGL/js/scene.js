var simpleGraphicsApp = 
angular.module
(
	'simpleGraphicsApp'
);

simpleGraphicsApp.factory
(
	'Scene', 
	[
		'OrthographicCamera',
		'PointLight',
		'Point',
		function
		(
			OrthographicCamera,
			PointLight,
			Point
		)
{
	var _scene;		

	function init()
	{
		instantiate();
		addCamera();
		addPointLight();
		addPoint();
	}

	function instantiate()
	{
		_scene =
			new THREE.Scene();
	}

	function addPointLight()
	{
		_scene.add
		(
			OrthographicCamera.getCamera()
		);
	}

	function addCamera()
	{
		_scene.add
		(
			PointLight.getPointLight()
		);
	}

	function addPoint()
	{
		_scene.add
		(
			Point.getPoint()
		);
	}

	init();

	return({
		getScene: function()
		{
			return _scene;
		},
	});
}]);