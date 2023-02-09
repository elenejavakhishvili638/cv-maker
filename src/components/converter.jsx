export const base64StringToFile = (base64String) => {
  const [, base64Data] = base64String.split(",");
  const binaryData = atob(base64Data);
  const binaryArray = new Uint8Array(binaryData.length);
  for (let i = 0; i < binaryData.length; i++) {
    binaryArray[i] = binaryData.charCodeAt(i);
  }
  const blob = new Blob([binaryArray], { type: "application/octet-stream" });
  return new File([blob], "fileName.ext", { type: "application/octet-stream" });
};
