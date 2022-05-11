// Define our labelmap
const labelMap = {
  1: { name: "শুন্য", color: "red" },
  2: { name: "এক", color: "yellow" },
  3: { name: "দুই", color: "blue" },
  4: { name: "তিন", color: "red" },
  5: { name: "চার", color: "yellow" },
  6: { name: "পাচ", color: "blue" },
  7: { name: "ছয়", color: "yellow" },
  8: { name: "সাত", color: "red" },
  9: { name: "আট", color: "blue" },
  10: { name: "নয়", color: "red" },
  11: { name: "সময়", color: "red" },
  12: { name: "উত্তর", color: "yellow" },
  13: { name: "দক্ষিণ", color: "blue" },
  14: { name: "গোনা", color: "red" },

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
