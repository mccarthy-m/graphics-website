var simpleGraphicsApp = 
angular.module
(
	'simpleGraphicsApp'
);

simpleGraphicsApp.factory
(
	'PointGeometry',
	[
		'PointVertex',
		function
		(
			PointVertex
		)
{
	var _pointGeometry;

	function init()
	{
		instantiate();
		makeDynamic();
		setPointVertex();
	}

	function instantiate()
	{
		_pointGeometry =
			new THREE.Geometry();
	}

	function makeDynamic()
	{
		_pointGeometry.dynamic = true;
	}

	function setPointVertex()
	{
		_pointGeometry.vertices = 
			[
				PointVertex.getPointVertex()
			];
	}

	init();

	return(
	{
		getPointGeometry: function()
		{
			return _pointGeometry;
		}
	});
}]);