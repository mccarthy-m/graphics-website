var simpleGraphicsApp =
	angular.module
	(
		'simpleGraphicsApp'
	);

simpleGraphicsApp.factory
(
	'OrthographicCamera',
	[
		'Constants',
		function(Constants)
{
	var _orthographicCamera;

	function init()
	{
		instantiate();
	}

	function instantiate()
	{
		_orthographicCamera =
			new THREE.OrthographicCamera
			(
				Constants.leftCameraFrustum(),
				Constants.rightCameraFrustum(),
				Constants.topCameraFrustum(),
				Constants.bottomCameraFrustum(),
				Constants.nearCameraFrustum(),
				Constants.farCameraFrustum()
			);
	}

	init();

	return({
		getCamera: function()
		{
			return _orthographicCamera;
		}
	});
}]);