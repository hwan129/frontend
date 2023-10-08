function adding(){
    var name = document.addForm.name.value;
    var age = document.addForm.age.value;
    var phone = document.addForm.phone.value;
    var workPlace = document.addForm.workPlace.value;
    var relation = document.addForm.relation.value;

    if(name ==''){
        alert("이름을 입력하세요!!!");
        name.focus();
        return 0;
    }

    if(age ==''){
        alert("나이를 입력하세요!!!");
        age.focus();
        return 0;
    }

    if(phone ==''){
        alert("휴대폰 번호를 입력하세요!!!");
        phone.focus();
        return 0;
    }

    if(workPlace ==''){
        alert("직장을 입력하세요!!!");
        workPlace.focus();
        return 0;
    }

    if(relation ==''){
        alert("관계를 입력하세요!!!");
        relation.focus();
        return 0;
    }

    alert("연락처가 추가되었습니다.");
}

function deleteConfirm(){
    if(confirm("연락처를 삭제하시겠습니까?")){
        alert("연락처가 삭제되었습니다.")
    } else{
        alert("취소하였습니다.")
    }
}