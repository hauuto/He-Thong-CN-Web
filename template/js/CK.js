var count = 1;




function datHang() {

    if (checkHoTen() && checkSDT() && checkNgay() && checkImg() && checkEmail()) {
        let hoTen = document.getElementById('txtHoTen').value;
        let SDT = document.getElementById('txtSDT').value;
        let ngay = document.getElementById('dateNgayDat').value;
        let email = document.getElementById('txtEmail').value;
        let img = document.getElementById('img').value;

        let new_row = `<tr><td>${count}</td><td>${hoTen}</td><td>${SDT}</td><td>${ngay}</td><td>${email}</td><td>${img}</td>	</tr>`

        document.getElementById('tb').innerHTML += new_row;
        ++count;
        alert('Đặt hàng thành công');
    } else {
        alert('Đặt hàng thất bại');
    }

}

function checkHoTen(){

    let hoTen = document.getElementById('txtHoTen').value;

    let pattern = /^([A-Za-b][a-z] [A-z][a-z])( [A-Z][a-z])*/;


    if(pattern.test(hoTen)) {
        document.getElementById('erHoTen').innerHTML = "*";
        return true;
    }else{
        document.getElementById('erHoTen').innerHTML = "Họ tên sai!!!";
        return false;
    }

}

function checkSDT(){
    let SDT = document.getElementById('txtSDT').value;
    let pattern = /^0[0-9]{3}(.[0-9]{3}){2}$/;

    if(pattern.test(SDT)) {
        document.getElementById('erSDT').innerHTML = "*";
        return true;
    }else{
        document.getElementById('erSDT').innerHTML = "Số điện thoại phải có dạng 0XXX.XXX.XXX với X là số từ 0-9";
    }
}

function checkNgay(){
    let ngay = document.getElementById('dateNgayDat').value;

    if (Date.parse(ngay) < Date.now()) {
        document.getElementById('erNgayDat').innerHTML = "Ngày đặt hàng phải sau ngày hiện tại";
        return false;
    }else{
        document.getElementById('erNgayDat').innerHTML = "*";
        return true;
    }

}

function checkEmail(){
    let email = document.getElementById('txtEmail').value;
    //name_email@gmail.com
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9])[^\s]{3,}@gmail\.com$/;

    if(pattern.test(email)){
        document.getElementById('erEmail').innerHTML = "*";
        return true;
    }else{
        document.getElementById('erEmail').innerHTML = "Email không hợp lệ";
        return false;
    }
}

function checkImg(){
    let img = document.getElementById('img').name;
    let pattern = /(.jpg|.png|.jpeg)$/;
    console.log(img);

    if(pattern.test(img)){
        document.getElementById('erImg').innerHTML = "*";
        return true;
    }else{
        document.getElementById('erImg').innerHTML = "Ảnh không hợp lệ";
        return false;
    }
}
