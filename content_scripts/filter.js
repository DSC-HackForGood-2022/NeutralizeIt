const filterText = (givenText) => {
  givenTextArray = givenText.split(" ");
  const trimmedArr = givenTextArray.map((item) => item.trim());
  const replacedArr = trimmedArr.map((item) => replace(item));

  reconstructedString = "";
  for (let i = 0; i < replacedArr.length; i++) {
    reconstructedString += replacedArr[i] + " ";
  }
  return reconstructedString.trim();
};

const replace = (genderWord) => {
  const query = genderWord
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ");
  if (!dictionary.hasOwnProperty(query)) {
    return genderWord;
  }
  return dictionary[query];
};
