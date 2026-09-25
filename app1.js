const nutDangNhap = document.querySelector('button[type="submit"]');
const oNhapTen = document.getElementById("tenNguoiDung");
const theThongBao = document.getElementById("thongBaoLoi");

let tenCuaNguoiDung;

nutDangNhap.addEventListener("click", function (event) {
  event.preventDefault();

  tenCuaNguoiDung = oNhapTen.value;
  console.log("Tên người dùng là:" + tenCuaNguoiDung);

  if (tenCuaNguoiDung === "") {
    theThongBao.innerText = "Bạn chưa nhập Tên";
    theThongBao.style.display = "block";
  } else {
    theThongBao.style.display = "none";
    window.location.href =
      "trangchu.html?name=" + encodeURIComponent(tenCuaNguoiDung);
  }
});
