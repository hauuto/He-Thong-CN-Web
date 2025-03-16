function kttendn() {
    let ten = document.getElementById('txttendn').value;
    let patten = /^\w{3,}$/; // [A-Za-z0-9_]
    if (patten.test(ten)) {
        document.getElementById('ertendn').innerHTML = "*";
        return true;
    } else {
        document.getElementById('ertendn').innerHTML = "Tên sai!!!";
        return false;
    }
}

function ktnhaplaimk() {
    let mk = document.getElementById('txtmk').value;
    let mk2 = document.getElementById('txtmk2').value;
    if (mk === mk2) {
        document.getElementById('ermk2').innerHTML = "*";
        return true;
    } else {
        document.getElementById('ermk2').innerHTML = "Mật khẩu không trùng khớp!!!";
        return false;
    }
}

function ktngaysinh() {
    let ns = new Date(document.getElementById('datens').value);
    let namht = new Date();
    let tuoi = namht.getFullYear() - ns.getFullYear();
    if (tuoi < 18) {
        document.getElementById('erns').innerHTML = "Bạn phải lớn hơn 18 tuổi!!!";
        return false;
    } else {
        document.getElementById('erns').innerHTML = "*";
        return true;
    }
}

let stt = 1;

function ketqua() {
    if (kttendn() && ktngaysinh() && ktnhaplaimk()) {
        let ten = document.getElementById('txttendn').value;
        let mk = document.getElementById('txtmk').value;
        let ns = document.getElementById('datens').value;

        let row_moi = `<tr><td>${stt}</td><td>${ten}</td><td>${mk}</td><td>${ns}</td></tr>`;
        document.getElementById('tbl').innerHTML += row_moi;
        stt++;
    }
}