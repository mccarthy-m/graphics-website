var simpleGraphicsApp = 
	angular.module
	(
		'simpleGraphicsApp'
	);

simpleGraphicsApp.factory
(
	'PointLight',
	[
		'Constants',
		function(Constants)
{
	var _pointLight;

	function init()
	{
		instantiate();
		setPosition();
	}

	function instantiate()
	{
		_pointLight =
			new THREE.PointLight
			(
				Constants.pointLightColor()
			);
	}

	function setPosition()
	{
		_pointLight.position.set
		(
			Constants.pointLightPosX(),
			Constants.pointLightPosY(),
			Constants.pointLightPosZ()
		);
	}
		
	init();

	return({
		getPointLight: function()
		{
			return _pointLight;
		},
	});
}]);