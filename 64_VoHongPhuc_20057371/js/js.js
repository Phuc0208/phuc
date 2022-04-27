$(document).ready(function(){
    var i = 1;
    function KiemTraMa(){
        var mauKT =/^[1-9]{1}[0-9]{9}$/;
        if($("#MaSV").val()==""){
            $("#tbMa").html("Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#MaSV").val())){
            $("#tbMa").html("Theo mẫu 1234567890");
            return false;
        }
        else{
            $("#tbMa").html("*");
            return true;
        }
        
    }
    $("#MaSV").blur(KiemTraMa);
    function kiemTraTen() {
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#HT").val() == "") {
            $("#tbHT").html("Không để trống");
            return false;
        }
        else if (!mauKT.test($("#HT").val())) {
            $("#tbHT").html("Ký tự đầu viết hoa và không có số");
            return false;
        }
        else {
            $("#tbHT").html("*");
            return true;
        }
    }
    $("#HT").blur(kiemTraTen);
    function KiemTraEmail(){
        var mauKT =/^[A-Za-z0-9]{3,9}\@.{3,15}$/;
        if($("#Email").val()==""){
            $("#tbEmail").html("Bắt buộc nhập");
            return false;
        }
        if(!mauKT.test($("#Email").val())){
            $("#tbEmail").html("Theo mẫu xxx@iuh.edu.com");
            return false;
        }
        else{
            $("#tbEmail").html("*");
            return true;
        }
        
    }
    $("#Email").blur(KiemTraEmail);
    function kiemTraSDT(){
        var mauKT = /^0\d{3}-\d{3}-\d{3}/;
        if($("#SDT").val()==""){
             $("#tbSDT").html("Không để trống");
             return false;
        }
        else if(!mauKT.test($("#SDT").val())){
             $("#tbSDT").html("Theo dạng 0xxx-xxx-xxx");
             return false;
        }
        else{
             $("#tbSDT").html("*");
             return true;
        }
    }
    $("#SDT").blur(kiemTraSDT);
    function KiemTraKH(){
        if($("#NgayTG").val() ==""){
            $("#tbNgayTG").html("Bắt buộc nhập");
            return false;
        }
        var day = new Date($("#NgayTG").val());
        var today = new Date();
        today.setDate(today.getDate()+7);
        if(day<today){
            $("#tbNgayTG").html("Sau ngày hiện tại 7 ngày");
            return false;
        }

            $("#tbNgay").html("*");
            return true;
      
    }
    $("#NgayTG").blur(KiemTraKH);
    $("#btnSubDK").click(function(){   
       if(KiemTraMa()==true&&kiemTraTen()==true&&KiemTraEmail()==true
       &&kiemTraSDT()==true){
           var ma = $("#MaSV").val();
           var ten =$("#HT").val();
           var ngay=$("#NgayTG").val();
           var Email=$("#Email").val();
           var sdt=$("SDT").val(); 
            var row ="<tr>";
            row+="<td>"+(i++)+"</td>";
            row+="<td>"+ma+"</td>";
            row+="<td>"+ten+"</td>";
            row+="<td>"+ngay+"</td>";
            row+="<td>"+Email+"</td>";
            row+="<td>"+sdt+"</td></tr>";
            $("#DS").append(row);
            $("#myModal").modal("hide");
            return true
       }
            
           
        
    })
})