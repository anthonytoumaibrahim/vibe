export const removeTransparentBg = (canvas: HTMLCanvasElement): string => {
  const context = canvas.getContext("2d");
  const imageData: any = context?.getImageData(
    0,
    0,
    canvas.width,
    canvas.height
  );
  const { data, width, height } = imageData;

  let minX = width,
    minY = height,
    maxX = 0,
    maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const offset = (y * width + x) * 4;
      const alpha = data[offset + 3];

      if (alpha > 0) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }
  const boundingWidth = maxX - minX + 1;
  const boundingHeight = maxY - minY + 1;
  const newCanvas = document.createElement("canvas");
  newCanvas.width = boundingWidth;
  newCanvas.height = boundingHeight;
  const newContext: any = newCanvas.getContext("2d");
  newContext.drawImage(
    canvas,
    minX,
    minY,
    boundingWidth,
    boundingHeight,
    0,
    0,
    boundingWidth,
    boundingHeight
  );

  return newCanvas.toDataURL();
};
