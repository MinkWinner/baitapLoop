function exportOddEven() {
  var odd = "Số chẵn: ";
  for (var i = 0; i < 100; i++) {
    if (i % 2 == 0) odd += i + " ";
  }
  var even = "👉Số lẻ: ";
  var j = 0;
  while (j < 100) {
    if (j % 2 != 0) even += j + " ";
    j++;
  }
  document.getElementById("txtResult").innerHTML = odd + "<br>" + even;
}

function chiahetcho3() {
  var count = 0;
  for (var i = 0; i <= 1000; i++) {
    if (i % 3 == 0) count++;
  }
  document.getElementById("txtDone").innerHTML =
    "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số";
}

function minSonguyenduong() {
  var x = 1;
  var i = 1;
  while (i < 10000) {
    x++;
    i += x;
  }
  document.getElementById("txtKetqua").innerHTML =
    "Số nguyên dương nhỏ nhất: " + x;
}

function tinhTong() {
  var x = document.getElementById("num1").value;
  var y = document.getElementById("num2").value;
  var sum = 0;
  for (var i = 1; i <= y; i++) {
    sum += Math.pow(x, i);
  }
  document.getElementById("txtSum").innerHTML = "Tổng: " + sum;
}

function factorial() {
  var x = document.getElementById("input-n1").value;
  var result = 1;
  for (var i = 1; i <= x; i++) {
    result *= i;
  }
  document.getElementById("txtCalcFactorial").innerHTML =
    "Giai thừa: " + result;
}

function createDiv() {
  var content = "";
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0)
      content += "<div class='bg-primary text-white p-2 mb-0'>Div chẵn</div>";
    else content += "<div class='bg-danger text-white p-2 mb-0'>Div lẻ</div>";
  }
  document.getElementById("txtCreate").innerHTML = content;
}

function primeNum() {
  var x = document.getElementById("primeNumber").value;
  var num = "2 ";
  for (var i = 2; i <= x; i++) {
    for (var j = i - 1; j > 1; j--) {
      if (i % j == 0) {
        break;
      }
      if (j == 2) num += i + " ";
    }
  }
  document.getElementById("txtprimeNumber").innerHTML = num;
}

document.getElementById("btnDone").onclick = chiahetcho3;

document
  .getElementById("btnKetqua")
  .addEventListener("click", minSonguyenduong);

document.getElementById("btnSum").onclick = function () {
  tinhTong();
};

document.getElementById("btnCreate").addEventListener("click", function () {
  createDiv();
});

document.getElementById("btnprimeNumber").onclick = primeNum;
