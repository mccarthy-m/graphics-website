var simpleGraphicsApp = 
angular.module
(
	'simpleGraphicsApp'
);

simpleGraphicsApp.factory
(
	'Renderer',
	[
		'Scene',
		'OrthographicCamera',
		'Constants',
		function
		(
			Scene,
			OrthographicCamera,
			Constants
		)
{
	var _renderer;

	function init()
	{
		instantiate();
		setSize();
		appendDomElement();
	}

	function instantiate()
	{
		_renderer =
			new THREE.WebGLRenderer();
	}

	function setSize()
	{
		_renderer.setSize
		(
				Constants.rendererWidth(),
				Constants.rendererHeight()
		);
	}

	function appendDomElement()
	{
		document.querySelector
		(
			'#graphics-window'
		)
		.appendChild
		(
			_renderer.domElement
		);
	}

	init();

	return (
	{
		render: function()
		{
			_renderer.render
			(
				Scene.getScene(),
				OrthographicCamera.getCamera()
			);
		}
	});
}]);