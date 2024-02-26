let arrView = new Array();

for (var i = 0; i < 4; i++) {
  arrView[i] = new Array();

  for (var j = 0; j < 4; j++) {
    arrView[i][j] = 0;
  }
}
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 37) {
    moveLeft();
  } else if (event.keyCode === 38) {
    moveUp();
  } else if (event.keyCode === 39) {
    moveRight();
  } else if (event.keyCode === 40) {
    moveDown();
  }
});
//获取两个随机数
const getRandomNumber = () => {
  return Math.floor(Math.random() * 4);
};
arrView[getRandomNumber()][getRandomNumber()] =
  Math.floor(Math.random() * 2) == 0 ? 2 : 4;
const moveLeft = () => {};
const moveUp = () => {
  //取出第一列
  let nowArr = [];
  arrView.forEach((item, index) => {
    arrView.forEach((rowItem, rowIndex) => {
      nowArr.push(arrView[rowIndex][index]);
    });
    let newArr = rule(nowArr);
    for (let i = 0; i < arrView.length; i++) {
      arrView[i][index] = newArr[i];
    }
    nowArr = [];
  });
};
const moveRight = () => {};
const moveDown = () => {
  //取出第一列
  let nowArr = [];
  arrView.forEach((item, index) => {
    arrView.forEach((rowItem, rowIndex) => {
     nowArr.push(arrView[rowIndex][index]);
    });
    let newArr = rule(nowArr);
    for (let i = arrView.length-1; i >-1; i--) {
      arrView[i][index] = newArr[arrView.length-i-1];
    }
    nowArr = [];
  });
};
const rule = (arr) => {
 let arrLength = arr.length;
  arr = arr.filter((item) => item != 0);
  for (let i = 0; i <  arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      arr[i] = arr[i] + arr[i + 1];
      arr.splice(i + 1, 1);
      i = -1;
    }
  }
  for (let i = 0; i < arrLength; i++) {
    if (!arr[i]) {
      arr[i] = 0;
    }
  }

  return arr;
};
