function bouncingBall(h,  bounce,  window) {
  let heightAfterBounce = h
  let bounces = -1
  if (h > 0 && (bounce > 0 && bounce < 1)) {
      while (window < heightAfterBounce) {
    heightAfterBounce *= bounce
    bounces+=2
  }
  }
  return bounces
}


bouncingBall(3.0, 0.66, 1.5) //, 3);
bouncingBall(30.0, 0.66, 1.5) //, 15);
