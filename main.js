/**脸部动画 */
let face = document.querySelectorAll("#face");
let faceLeft = face[0];
let faceRight = face[1];

let scaleTransform = function(nodeTarget) {
  nodeTarget.addEventListener("mouseenter", () => {
    faceLeft.setAttribute("style", "transform:translateX(-180px) scale(1.2);"),
      faceRight.setAttribute(
        "style",
        "transform:translateX(180px) scale(1.2);"
      );
  });
  nodeTarget.addEventListener("mouseleave", () => {
    faceLeft.setAttribute("style", "transform:translateX(-180px);"),
      faceRight.setAttribute("style", "transform:translateX(180px);");
  });
};
scaleTransform(faceLeft);
scaleTransform(faceRight);
