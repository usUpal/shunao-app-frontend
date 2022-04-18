// Define our labelmap
const labelMap = {
  1: { name: "হ্যালো", color: "red" },
  2: { name: "ধন্যবাদ", color: "yellow" },
  3: { name: "হ্যাঁ", color: "blue" },
  4: { name: "এক", color: "red" },
  5: { name: "দুই", color: "yellow" },
  6: { name: "তিন", color: "purple" },
  7: { name: "চার", color: "yellow" },
  8: { name: "পাচ", color: "red" },
  9: { name: "ছয়", color: "purple" },
  10: { name: "সাত", color: "green" },

};

// Define a drawing function
export const drawRect = (
  boxes,
  classes,
  scores,
  threshold,
  imgWidth,
  imgHeight,
  ctx
) => {
  for (let i = 0; i <= boxes.length; i++) {
    if (boxes[i] && classes[i] && scores[i] > threshold) {
      // Extract variables
      const [y, x, height, width] = boxes[i];
      const text = classes[i];

      // Set styling
      ctx.strokeStyle = labelMap[text]["color"];
      ctx.lineWidth = 10;
      ctx.fillStyle = "white";
      ctx.font = "30px Arial";

      // DRAW!!
      ctx.beginPath();
      ctx.fillText(
        labelMap[text]["name"] + " - " + Math.round(scores[i] * 100) / 100,
        x * imgWidth,
        y * imgHeight - 10
      );
      ctx.rect(
        x * imgWidth,
        y * imgHeight,
        (width * imgWidth) / 2,
        (height * imgHeight) / 1.5
      );
      ctx.stroke();
    }
  }
};
