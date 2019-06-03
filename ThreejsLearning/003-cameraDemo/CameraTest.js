// 帧率
let FPS = 60;
// 帧率的倒数
let INV_FPS = 1 / FPS;
// 角度转弧度
let DEG_TO_RAD = Math.PI / 180;
// 视口的宽
let CAMERA_VIEW_WIDTH = 480 / 480 * 500;
// 视口的高
let CAMERA_VIEW_HEIGHT = 320 / 480 * 500;
// 视角
let ASPECT_RATIO = CAMERA_VIEW_WIDTH / CAMERA_VIEW_HEIGHT;
// 边缘z
let MARGIN_Z = 0.1;
// 俯仰角Y
let FOVY = 30;
// 滚动X
let SCROLL_X = 20;
// 滚动水平
let SCROLL_HZ = 0.05;
// 环绕向量
let AROUND_VECTOR = new THREE.Vector3(0, 40, 40);
// 环绕水平
let AROUND_HZ = 0.025;
// 格数
let SEGS = 1;
// 近距离
let NEAR_LENGTH = 5;
// 中间距离
let MIDDLE_LENGTH = 15;
// 远距离
let FAR_LENGTH = 20;
// 近高度
let NEAR_HEIGHT = Math.tan(FOVY * 0.5 * DEG_TO_RAD) * NEAR_LENGTH * 2;
// 中高度
let MIDDLE_HEIGHT = NEAR_HEIGHT / NEAR_LENGTH * MIDDLE_LENGTH;
// 远高度
let FAR_HEIGHT = NEAR_HEIGHT / NEAR_LENGTH * FAR_LENGTH;
// 近宽度
let NEAR_WIDTH = SCROLL_X * 2 + NEAR_HEIGHT * ASPECT_RATIO;
// 中宽度
let MIDDLE_WIDTH = SCROLL_X * 2 + MIDDLE_HEIGHT * ASPECT_RATIO;
// 远宽度
let FAR_WIDTH = SCROLL_X * 2 + FAR_HEIGHT * ASPECT_RATIO;
// 屏幕的宽度
let SCREEN_WIDTH = CAMERA_VIEW_WIDTH;
// 屏幕的高度
let SCREEN_HEIGHT = CAMERA_VIEW_HEIGHT * 2;
let that = null

class Game {
  constructor(container) {
    that = this
    window.lm=that
    this.time = 0;

    // render
    this.container = container;
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    this.container.append(this.renderer.domElement);
    this.renderer.autoClear = false;

    // scene
    this.scene = new THREE.Scene();
    window.scene = this.scene

    // 纹理加载
    let nearTexture = this.loadTexture('textures/nearTexture.png');
    let middleTexture = this.loadTexture('textures/middleTexture.png');
    let farTexture = this.loadTexture('textures/farTexture.png');

    // 模型加载-山
    this.nearView = new THREE.Mesh(new THREE.PlaneGeometry(NEAR_WIDTH, NEAR_HEIGHT, SEGS, SEGS), new THREE.MeshBasicMaterial({
      map: nearTexture,
      side: THREE.DoubleSide,
      transparent: true
    }));
    this.nearView.position.z = -NEAR_LENGTH;
    this.updateUV(this.nearView);
    this.scene.add(this.nearView);
    // 模型加载-云
    this.middleView = new THREE.Mesh(new THREE.PlaneGeometry(MIDDLE_WIDTH, MIDDLE_HEIGHT, SEGS, SEGS), new THREE.MeshBasicMaterial({
      map: middleTexture,
      side: THREE.DoubleSide,
      transparent: true
    }));
    this.middleView.position.z = -MIDDLE_LENGTH;
    this.updateUV(this.middleView);
    this.scene.add(this.middleView);
    // 模型加载-天
    this.farView = new THREE.Mesh(new THREE.PlaneGeometry(FAR_WIDTH, FAR_HEIGHT, SEGS, SEGS), new THREE.MeshBasicMaterial({
      map: farTexture,
      side: THREE.DoubleSide,
      transparent: true
    }));
    this.farView.position.z = -FAR_LENGTH;
    this.updateUV(this.farView);
    this.scene.add(this.farView);

    // 用户相机
    this.cameraUser = new THREE.PerspectiveCamera(FOVY, ASPECT_RATIO, NEAR_LENGTH - MARGIN_Z, FAR_LENGTH + MARGIN_Z);
    this.cameraUser.name = 'cameraUser'
    this.scene.add(this.cameraUser);

    // 调试相机
    this.cameraDebugHelp = new THREE.CameraHelper(this.cameraUser)
    this.cameraDebugHelp.name = 'cameraDebugHelp'
    this.cameraDebug = new THREE.PerspectiveCamera(FOVY, CAMERA_VIEW_WIDTH / CAMERA_VIEW_HEIGHT, 1, 500);
    this.cameraDebug.name = 'cameraDebug'
    this.cameraDebug.position.copy(AROUND_VECTOR)
    this.cameraDebug.lookAt(0, 0, 0)
    this.scene.add(this.cameraDebug);
    this.scene.add(this.cameraDebugHelp);

    // 运行
    this.run()
  }

  loadTexture(uri) {
    let texture = new THREE.TextureLoader().load(uri);
    // 水平重复
    texture.wrapS = THREE.RepeatWrapping
    texture.needsUpdate = THREE.needsUpdate
    return texture;
  }

  updateUV(mesh) {
    // geometry
    let g = mesh.geometry;

    // 顶点信息
    let vs = g.vertices;
    let w = vs[3].x - vs[2].x;
    let h = vs[0].y - vs[3].y;

    // uv信息
    let faceVertexUvs = g.faceVertexUvs[0];
    
    // 操作每个片元的uv信息
    for (let i = 0; i < faceVertexUvs.length; i++) {
      let uvItem = faceVertexUvs[i]
      // 将该片元的三个顶点的x坐标进行序列化
      for (let i = 0; i < 3; i++) {
        uvItem[i].x = uvItem[i].x * w / h
      }
    }
  }

  update(dt) {
    this.time += dt;
    // 用户相机,水平来回移动
    this.cameraUser.position.x = Math.sin(this.time * 360 * SCROLL_HZ * DEG_TO_RAD) * SCROLL_X;
    
    // 调试相机,旋转运动
    this.cameraDebug.position.copy(AROUND_VECTOR.clone().applyAxisAngle({
      x: 0,
      y: 1,
      z: 0
    }, this.time * 360 * AROUND_HZ * DEG_TO_RAD))
    this.cameraDebug.lookAt(0, 0, 0)
  }

  draw() {
    this.renderer.clear();
    this.cameraDebugHelp.update();

    // 调试相机
    this.renderer.setViewport(0, 0, CAMERA_VIEW_WIDTH, CAMERA_VIEW_HEIGHT)
    this.renderer.render(this.scene, this.cameraDebug)

    // 用户相机
    this.renderer.setViewport(0, CAMERA_VIEW_HEIGHT, CAMERA_VIEW_WIDTH, CAMERA_VIEW_HEIGHT);
    this.renderer.render(this.scene, this.cameraUser);
  }

  run() {
   that.update(INV_FPS)
   that.draw()
   requestAnimationFrame(that.run)
  }
}
