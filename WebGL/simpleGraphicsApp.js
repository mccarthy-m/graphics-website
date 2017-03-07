angular.module('simpleGraphicsApp', [])
	.factory(
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
		const DEFAULT_POINT_COLOR = 0x000000;
		const CIRCLE_SEGMENT_COUNT = 300;
		const DEFAULT_DRAWING_COORD = 0;
		const NEAR_CAMERA_FRUSTUM = 0.1;
		const FAR_CAMERA_FRUSTUM = 10000;

		return(
		{
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
			defaultPointColor: function()
			{
				return DEFAULT_POINT_COLOR;
			},
			defaultPointSize: function()
			{
				return DEFAULT_POINT_SIZE;
			}
		});
	})
	.factory(
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
				new THREE.PointLight(
					Constants.pointLightColor()
				);
		}

		function setPosition()
		{
			_pointLight.position.set(
					Constants.pointLightPosX(),
					Constants.pointLightPosY(),
					Constants.pointLightPosZ()
				);
		}
		
		init();

		return(
		{
			getPointLight: function()
			{
				return _pointLight;
			},
		});
	}])
	.factory(
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
				new THREE.OrthographicCamera(
					Constants.leftCameraFrustum(),
					Constants.rightCameraFrustum(),
					Constants.topCameraFrustum(),
					Constants.bottomCameraFrustum(),
					Constants.nearCameraFrustum(),
					Constants.farCameraFrustum()
				);
		}

		init();

		return(
		{
			getCamera: function()
			{
				return _orthographicCamera;
			}
		});
	}])
	.factory(
		'PointVertex',
		[	
			'Constants',
			function(Constants)
	{
		var _pointVertex;

		function init()
		{
			instantiate();
		}

		function instantiate()
		{
			_pointVertex =
				new THREE.Vector3(
					Constants.defaultDrawingCoord(),
					Constants.defaultDrawingCoord(),
					0
				);
		}

		init();

		return(
		{
			getPointVertex: function()
			{
				return _pointVertex;
			}
		});
	}])
	.factory(
		'PointGeometry',
		[
			'PointVertex',
			function(PointVertex)
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
			_pointGeometry = new THREE.Geometry();
		}

		function makeDynamic()
		{
			_pointGeometry.dynamic = true;
		}

		function setPointVertex()
		{
			_pointGeometry.vertices = [PointVertex.getPointVertex()];
		}

		init();

		return(
		{
			getPointGeometry: function()
			{
				return _pointGeometry;
			}
		});
	}])
	.factory(
		'PointMaterial',
		[
			'Constants',
			function(Constants)
	{
		var _pointMaterial;

		function init()
		{
			instantiate();
		}

		function instantiate()
		{
			_pointMaterial =
				new THREE.PointsMaterial(
					{
						color: Constants.defaultPointColor(),
						size: Constants.defaultPointSize()
					}
				);
		}

		init();

		return(
		{
			getPointMaterial: function()
			{
				return _pointMaterial;
			}
		});
	}])
	.factory(
		'Point',
		[
			'Constants',
			'PointGeometry',
			'PointMaterial',
			function(Constants, PointGeometry, PointMaterial)
	{
		var _point;

		function init()
		{
			instantiate();
		}

		function instantiate()
		{
			_point =
				new THREE.Points(
					PointGeometry.getPointGeometry(),
					PointMaterial.getPointMaterial()
				);

			_point.position.z = -300;
		}

		init();

		return(
		{
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
				_point.position.x = x;
			},
			setY: function(y)
			{
				_point.position.y = y;
			}
		});
	}])
	.factory('Scene', 
		[
			'OrthographicCamera',
			'PointLight',
			'Point',
			function(OrthographicCamera, PointLight, Point)
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
			_scene = new THREE.Scene();
		}

		function addPointLight()
		{
			_scene.add(OrthographicCamera.getCamera());
		}

		function addCamera()
		{
			_scene.add(PointLight.getPointLight());
		}

		function addPoint()
		{
			_scene.add(Point.getPoint());
		}

		init();

		return(
		{
			getScene: function()
			{
				return _scene;
			},
		});
	}])
	.factory('Renderer',
		[
			'Scene',
			'OrthographicCamera',
			'Constants',
			function(Scene, OrthographicCamera, Constants)
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
			_renderer = new THREE.WebGLRenderer();
		}

		function setSize()
		{
			_renderer.setSize(
					Constants.rendererWidth(),
					Constants.rendererHeight()
			);
		}

		function appendDomElement()
		{
			document.querySelector('#graphics-window')
			.appendChild(_renderer.domElement);
		}

		init();

		return (
		{
			render: function()
			{
				console.log(Scene.getScene().children.length);

				_renderer.render(
					Scene.getScene(),
					OrthographicCamera.getCamera()
				);
			}
		});
	}])
	.controller('MainCtrl',
		[
			'Renderer',
			'Scene',
			'PointMaterial',
			'PointVertex',
			'Point',
			function(Renderer, Scene, PointMaterial, PointVertex, Point) 
	{
		var self = this;

		function sceneAnimationUpdate() {
			Renderer.render();
		}

		function setAttribute(set, attribute)
		{	
			set(attribute);
			sceneAnimationUpdate();
		}

		self.setPointColor = function()
		{
			setAttribute(
				Point.setColor,
				parseInt(self.pointColor, 16)
			);	
		};

		self.setPointSize = function()
		{
			setAttribute(
				Point.setSize,
				self.pointSize
			);
		};

		self.setPointX = function()
		{
			setAttribute(
				Point.setX,
				self.pointX
			);
		};

		self.setPointY = function()
		{
			setAttribute(
				Point.setY,
				self.pointY
			);
		}

		self.setLineColor = function()
		{
			setAttribute(
				Line.setColor,
				parseInt(self.lineColor, 16)
			);
		}



		// self.setLineColor = function()
		// {
		// 	Line.setColor(
		// 		parseInt(self.lineColor, 16)
		// 	);
		// }

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

		// self.createPoint = function() {

  // 			var material = 
  //   			new THREE.PointsMaterial (
  //     				{
  //       				color: parseInt(self.pointColor, 16),
  //       				size: self.pointSize
  //     				}
  //   			);

  // 			self.point = new THREE.Points(self.getPointGeometry(), material)
  // 			self.point.position.z = -300;
  // 			Scene.addPoint();

  // 			requestAnimationFrame(sceneAnimationUpdate);
		// };

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