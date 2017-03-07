var simpleGraphicsApp = 
angular.module
(
	'simpleGraphicsApp'
);

simpleGraphicsApp.factory
(
	'LineGeometry',
	[
		'LineVertices',
		function
		(
			LineVertices
		)
{
	var _lineGeometry;

	function init()
	{
		instantiate();
		makeDynamic();
		setLineVertices();
	}

	function instantiate()
	{
		_lineGeometry =
			new THREE.Geometry();
	}

	function makeDynamic()
	{
		_lineGeometry.dynamic = true;
	}

	function setLineVertices()
	{
		_lineGeometry.vertices = 
			[
				LineVertices.getFirstVertex(),
				LineVertices.getSecondVertex()
			];
	}

	init();

	return(
	{
		getLineGeometry: function()
		{
			return _lineGeometry;
		}
	});
}]);