function solution(input, markers){
  let text = input.split("\n");
  for (let i = 0; i < text.length; i++)
    for(let j = 0; j < markers.length; j++)
      text[i] = text[i].split(markers[j])[0].trim();
  return text.join("\n");
}
