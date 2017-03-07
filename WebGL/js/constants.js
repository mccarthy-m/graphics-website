var simpleGraphicsApp = 
	angular.module
	(
		'simpleGraphicsApp',
		[]
	);

simpleGraphicsApp.factory
(
	'Constants',
	function()
{
	const RENDERER_HEIGHT = 300;
	const RENDERER_WIDTH = 400;
	const POINT_LIGHT_POS_X = 10;
	const POINT_LIGHT_POS_Y = 50;
	const POINT_LIGHT_POS_Z = 130;
	const POINT_LIGHT_COLOR = 0xFFFFFF;
	const DEFAULT_POINT_SIZE = 10;
	const DEFAULT_LINE_WIDTH = 3;
	const DEFAULT_SHAPE_COLOR = 0x000000;
	const CIRCLE_SEGMENT_COUNT = 300;
	const DEFAULT_DRAWING_COORD = 0;
	const NEAR_CAMERA_FRUSTUM = 0.1;
	const FAR_CAMERA_FRUSTUM = 10000;

	return({
		lineThickness: function()
		{
			return DEFAULT_LINE_WIDTH;
		},
		rendererHeight: function()
		{
			return RENDERER_HEIGHT;
		},
		rendererWidth: function()
		{
			return RENDERER_WIDTH;
		},
		leftCameraFrustum: function()
		{
			return RENDERER_WIDTH / -2;
		},
		rightCameraFrustum: function()
		{
			return RENDERER_WIDTH / 2;
		},
		topCameraFrustum: function()
		{
			return RENDERER_HEIGHT / 2;
		},
		bottomCameraFrustum: function()
		{
			return RENDERER_HEIGHT / -2;
		},
		nearCameraFrustum: function()
		{
			return NEAR_CAMERA_FRUSTUM;
		},
		farCameraFrustum: function()
		{
			return FAR_CAMERA_FRUSTUM;
		},
		pointLightPosX: function()
		{
			return POINT_LIGHT_POS_X;
		},
		pointLightPosY: function()
		{
			return POINT_LIGHT_POS_Y;
		},
		pointLightPosZ: function()
		{
			return POINT_LIGHT_POS_Z;
		},
		pointLightColor: function()
		{
			return POINT_LIGHT_COLOR;
		},
		circleSegmentCount: function()
		{
			return CIRCLE_SEGMENT_COUNT;
		},
		defaultDrawingCoord: function()
		{
			return DEFAULT_DRAWING_COORD;
		},
		defaultShapeColor: function()
		{
			return DEFAULT_SHAPE_COLOR;
		},
		defaultPointSize: function()
		{
			return DEFAULT_POINT_SIZE;
		}
	});
});