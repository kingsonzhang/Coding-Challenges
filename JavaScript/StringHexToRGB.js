function hexStringToRGB(hexString) {
    return {
      r: parseInt(hexString.substring(1, 3), 16),
      g: parseInt(hexString.substring(3, 5), 16),
      b: parseInt(hexString.substring(5, 7), 16)
    }
}