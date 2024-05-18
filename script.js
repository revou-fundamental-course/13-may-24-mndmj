function Luas() {
  let a = document.getElementById("a").value;
  let t = document.getElementById("t").value;
  let L = 0.5 * a * t;
  console.log(L);
  document.getElementById("num").innerText = a + " x " + t;
  document.getElementById("L").innerHTML = "<p>L = " + L + "</p>";
}

function Keliling() {
  let s1 = document.getElementById("s1").value;
  let s2 = document.getElementById("s2").value;
  let s3 = document.getElementById("s3").value;
  let K = s1 * s2 * s3;
  console.log(K);
  document.getElementById("numK").innerText = s1 + " x " + s2 + " x " + s3;
  document.getElementById("K").innerHTML = "K = " + K;
}

function ResetLuas() {
  document.getElementById("a").value = "";
  document.getElementById("t").value = "";
  document.getElementById("num").innerText = "";
  document.getElementById("L").innerHTML = "";
}

function ResetKeliling() {
  document.getElementById("s1").value = "";
  document.getElementById("s2").value = "";
  document.getElementById("s3").value = "";
  document.getElementById("numK").innerText = "";
  document.getElementById("K").innerHTML = "";
}
