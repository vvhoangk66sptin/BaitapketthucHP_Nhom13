// 1. Phân tích các tham số trên thanh địa chỉ URL
const thamSoUrl = new URLSearchParams(window.location.search);

// 2. Lấy chính xác giá trị của từ khóa "name" ra ngoài
const tenNguoiDung = thamSoUrl.get("name");

// 3. Định vị thẻ h1 hiển thị lời chào ở file HTML
const theHienThiChao = document.getElementById("loiChaoAdmin");

// 4. Nếu trên URL có tên, lập tức thay đổi nội dung chữ hiển thị
if (tenNguoiDung) {
  theHienThiChao.innerText = "Chào " + tenNguoiDung + "!";
}
