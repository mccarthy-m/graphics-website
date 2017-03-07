var simpleGraphicsApp = 
angular.module
(
	'simpleGraphicsApp'
);

simpleGraphicsApp.controller
(
	'MainCtrl',
	[
		'Renderer',
		'Scene',
		'PointMaterial',
		'PointVertex',
		'Point',
		'Line',
		function
		(
			Renderer,
			Scene,
			PointMaterial,
			PointVertex,
			Point,
			Line
		) 
{
	var self = this;

	function sceneAnimationUpdate() {
		Renderer.render();
	}

	function setAttribute(set, attribute) {	
		set(attribute);
		sceneAnimationUpdate();
	}

	function parseHexInt(string) {
		return parseInt(self.pointColor, 16);
	}


	/*
		Point Properties
	*/
	self.setPointColor = function() {
		setAttribute(
			Point.setColor,
			parseHexInt(self.pointColor)
		);	
	};

	self.setPointSize = function() {
		setAttribute(
			Point.setSize, 
			self.pointSize
		);
	};

	self.setPointX = function(){
		setAttribute(
			Point.setX,
			self.pointX
		);
	};

	self.setPointY = function() {
		setAttribute(
			Point.setY,
			self.pointY
		);
	}



	/*
		Line Properties
	*/
		self.setLineColor = function() {
		setAttribute(
			Line.setColor,
			parseHexInt(self.lineColor)
		);	
	};

	self.setLineWidth = function() {
		setAttribute(
			Line.setWidth, 
			self.lineWidth
		);
	};

	self.setLineXTranslation = function(){
		setAttribute(
			Line.setXTranslation,
			self.lineXTranslation
		);
	};

	self.setLineYTranslation = function() {
		setAttribute(
			Point.setYTranslation,
			self.lineYTranslation
		);
	}

	self.setLineY1 = function() {
		setAttribute(
			Line.setY1,
			self.lineY1
		);
	}

	self.setLineY2 = function() {
		setAttribute(
			Line.setY2,
			self.lineY2
		);
	}

	self.setLineX1 = function() {
		setAttribute(
			Line.setX1,
			self.lineX1
		);
	}

	self.setLineX2 = function() {
		setAttribute(
			Line.setX2,
			self.lineX2
		);
	}




		self.drawingOptionButtonArray = 
		[
			{label: "Point", selected: false},
			{label: "Line",  selected: false},
			{label: "Circle", selected: false},
			{label: "Clear"}
		];

		self.selectDrawingOptionButton = 
			function (currentDrawingOptionButtonLabel) 
			{
				(isClear(currentDrawingOptionButtonLabel)) ?
					clearCanvasOfDrawings() : 
					selectDrawingShape(currentDrawingOptionButtonLabel);
			}

		function isClear(drawingOptionButtonLabel)
		{
			return (drawingOptionButtonLabel === "Clear");
		}

		function selectDrawingShape(selectedButtonLabel)
		{
			self.drawingOptionButtonArray.forEach(
				function(currentDrawingOptionButton) 
				{
					currentDrawingOptionButton.selected =
						isMatchingButtonLabel(
							currentDrawingOptionButton.label,
							selectedButtonLabel
						);
				}
			);
		}

		function isMatchingButtonLabel(label1, label2)
		{
			return (label1 === label2);
		}

		function isEssentialSceneComponent(sceneComponent)
		{
			return (
				sceneComponent == pointLight ||
				sceneComponent == camera
			);
		}

		function clearCanvasOfDrawings()
		{
			var currentCanvasChildIndex, currentCanvasChild;

			for (
				currentCanvasChildIndex = scene.children.length - 1; 
				currentCanvasChildIndex >= 0;
				currentCanvasChildIndex--)
			{
				currentCanvasChild = scene.children[currentCanvasChildIndex];

				if (!isEssentialSceneComponent(currentCanvasChild)) 
				{
					scene.remove(currentCanvasChild);
				}
			}
			requestAnimationFrame(sceneAnimationUpdate);
		}

		// self.createLine = function() {

		// 	scene.remove(self.line);

		// 	var geometry = 
		// 		new THREE.Geometry();

		// 	var material = 
		// 		new THREE.LineBasicMaterial(
		// 			{
 	// 					color: parseInt(self.lineColor, 16),
 	// 					linewidth: 1
		// 			}
		// 		);

		// 	geometry.vertices.push(
		// 		new THREE.Vector3(
		// 			self.x1LineVal,
		// 			self.y1LineVal,
		// 			0
		// 		),
		// 		new THREE.Vector3(
		// 			self.x2LineVal,
		// 			self.y2LineVal,
		// 			0
		// 		)
		// 	);

		// 	var midX = (
		// 		parseInt(self.x1LineVal) + 
		// 		parseInt(self.x2LineVal)) / 2;

		// 	var midY = (
		// 		parseInt(self.y1LineVal) + 
		// 		parseInt(self.y2LineVal)) / 2;

		// 	console.log(geometry.vertices.length);


		// 	var angle = (self.lineRotationVal / 100) * Math.PI;
		// 	var axis = new THREE.Vector3(0, 0, 1);

		// 	 // geometry.vertices[0].applyAxisAngle(axis, angle);
		// 	 // geometry.vertices[1].applyAxisAngle(axis, angle + Math.PI);

		// 	self.line = new THREE.Line(geometry, material);
		// 	self.line.position.z = -300;

		// 	self.line.position.y += self.lineVerticalTranslate;
		// 	self.line.position.x += self.lineHorizontalTranslate;

		// 	scene.add(self.line);

		// 	requestAnimationFrame(sceneAnimationUpdate);

		// }

		// self.createCircle = function() {

		// 	scene.remove(self.circle);

		// 	var geometry = new THREE.Geometry();

		// 	var material = new THREE.LineBasicMaterial(
		// 		{
		// 			color: parseInt(self.circleColor, 16),
		// 			linewidth: 10
		// 		}
		// 	);

		// 	for (var i = 0; i < CIRCLE_SEGMENT_COUNT; i++) {
		// 		var theta = (i / CIRCLE_SEGMENT_COUNT) * Math.PI * 2;
		// 		geometry.vertices.push(
		// 			new THREE.Vector3(
		// 				Math.cos(theta) * self.radius,
		// 				Math.sin(theta) * self.radius,
		// 				0)
		// 			);
		// 	}

		// 	self.circle = new THREE.Line(geometry, material);

		// 	self.circle.position.z = -300;
		// 	self.circle.position.x += self.xCircleVal;
		// 	self.circle.position.y += self.yCircleVal;


		// 	scene.add(self.circle);

		// 	requestAnimationFrame(sceneAnimationUpdate);
		// }
}]);