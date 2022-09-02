function correct(string){
	const DICTIONARY = {'0' : 'O', '5': 'S', '1': 'I'};
  return string.split("").map(x => DICTIONARY[x] ? DICTIONARY[x] : x).join("");
}