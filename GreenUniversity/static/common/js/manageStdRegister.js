

window.searchPostcode = function() {
    new daum.Postcode({
        oncomplete: function(data) {
            document.getElementById("postcode").value = data.zonecode;
            document.getElementById("address").value = data.roadAddress || data.jibunAddress;
            document.getElementById("detailAddress").focus();
        }
    }).open();
};

const departmentData = {
    humanities: ["국어국문학과", "영어영문학과", "일어일문학과", "중어중문학과","역사학과","경제학과","경영학과","법학과","철학과","정치외교학과","행정학과","사회복지학과","유아교육학과"],
    naturalscience: ["수학과","물리학과","화학과","천문학과","지구과학과","생명과학과","미생물학과","해양학과"],
    engineering: ["기계공학과", "전자공학과", "전기공학과", "컴퓨터공학과","건축공학과","재료공학과","화학공학과"],
    teacher: ["국어교육과","영어교육과","수학교육과","윤리학과","교육학과","사회교육과","역사교육과","체육교육과","특수교육과"],
    graduateSchool: ["경영대학관원","경제대학원","행정대학원","교육대학원","산업대학원"]
};

function updateDepartments() {
    const collegeSelect = document.getElementById("collegeSelect");
    const departmentSelect = document.getElementById("departmentSelect");
    
    // 선택한 단과대 가져오기
    const selectedCollege = collegeSelect.value;

    // 학과 목록 초기화
    departmentSelect.innerHTML = "<option value=''>학과를 선택하세요</option>";

    // 학과 목록 갱신
    if (selectedCollege && departmentData[selectedCollege]) {
        departmentData[selectedCollege].forEach(dept => {
            const option = document.createElement("option");
            option.value = dept;
            option.textContent = dept;
            departmentSelect.appendChild(option);
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const countries = [
        { code: "af", name: "아프가니스탄" }, { code: "al", name: "알바니아" },
        { code: "dz", name: "알제리" }, { code: "ad", name: "안도라" },
        { code: "ao", name: "앙골라" }, { code: "ag", name: "앤티가 바부다" },
        { code: "ar", name: "아르헨티나" }, { code: "am", name: "아르메니아" },
        { code: "au", name: "호주" }, { code: "at", name: "오스트리아" },
        { code: "az", name: "아제르바이잔" }, { code: "bs", name: "바하마" },
        { code: "bh", name: "바레인" }, { code: "bd", name: "방글라데시" },
        { code: "bb", name: "바베이도스" }, { code: "by", name: "벨라루스" },
        { code: "be", name: "벨기에" }, { code: "bz", name: "벨리즈" },
        { code: "bj", name: "베냉" }, { code: "bt", name: "부탄" },
        { code: "bo", name: "볼리비아" }, { code: "ba", name: "보스니아 헤르체고비나" },
        { code: "bw", name: "보츠와나" }, { code: "br", name: "브라질" },
        { code: "bn", name: "브루나이" }, { code: "bg", name: "불가리아" },
        { code: "bf", name: "부르키나파소" }, { code: "bi", name: "부룬디" },
        { code: "cv", name: "카보베르데" }, { code: "kh", name: "캄보디아" },
        { code: "cm", name: "카메룬" }, { code: "ca", name: "캐나다" },
        { code: "cf", name: "중앙아프리카공화국" }, { code: "td", name: "차드" },
        { code: "cl", name: "칠레" }, { code: "cn", name: "중국" },
        { code: "co", name: "콜롬비아" }, { code: "km", name: "코모로" },
        { code: "cd", name: "콩고민주공화국" }, { code: "cg", name: "콩고공화국" },
        { code: "cr", name: "코스타리카" }, { code: "hr", name: "크로아티아" },
        { code: "cu", name: "쿠바" }, { code: "cy", name: "키프로스" },
        { code: "cz", name: "체코" }, { code: "dk", name: "덴마크" },
        { code: "dj", name: "지부티" }, { code: "dm", name: "도미니카" },
        { code: "do", name: "도미니카공화국" }, { code: "ec", name: "에콰도르" },
        { code: "eg", name: "이집트" }, { code: "sv", name: "엘살바도르" },
        { code: "gq", name: "적도기니" }, { code: "er", name: "에리트레아" },
        { code: "ee", name: "에스토니아" }, { code: "et", name: "에티오피아" },
        { code: "fj", name: "피지" }, { code: "fi", name: "핀란드" },
        { code: "fr", name: "프랑스" }, { code: "ga", name: "가봉" },
        { code: "gm", name: "감비아" }, { code: "ge", name: "조지아" },
        { code: "de", name: "독일" }, { code: "gh", name: "가나" },
        { code: "gr", name: "그리스" }, { code: "gt", name: "과테말라" },
        { code: "gn", name: "기니" }, { code: "gy", name: "가이아나" },
        { code: "ht", name: "아이티" }, { code: "hn", name: "온두라스" },
        { code: "hu", name: "헝가리" }, { code: "is", name: "아이슬란드" },
        { code: "in", name: "인도" }, { code: "id", name: "인도네시아" },
        { code: "ir", name: "이란" }, { code: "iq", name: "이라크" },
        { code: "ie", name: "아일랜드" }, { code: "il", name: "이스라엘" },
        { code: "it", name: "이탈리아" }, { code: "jm", name: "자메이카" },
        { code: "jp", name: "일본" }, { code: "jo", name: "요르단" },
        { code: "kz", name: "카자흐스탄" }, { code: "ke", name: "케냐" },
        { code: "kr", name: "대한민국" }, { code: "kw", name: "쿠웨이트" },
        { code: "lv", name: "라트비아" }, { code: "lb", name: "레바논" },
        { code: "ly", name: "리비아" }, { code: "lt", name: "리투아니아" },
        { code: "lu", name: "룩셈부르크" }, { code: "mg", name: "마다가스카르" },
        { code: "mw", name: "말라위" }, { code: "my", name: "말레이시아" },
        { code: "mx", name: "멕시코" }, { code: "ma", name: "모로코" },
        { code: "mz", name: "모잠비크" }, { code: "mm", name: "미얀마" },
        { code: "np", name: "네팔" }, { code: "nl", name: "네덜란드" },
        { code: "nz", name: "뉴질랜드" }, { code: "ng", name: "나이지리아" },
        { code: "no", name: "노르웨이" }, { code: "pk", name: "파키스탄" },
        { code: "ph", name: "필리핀" }, { code: "pl", name: "폴란드" },
        { code: "pt", name: "포르투갈" }, { code: "qa", name: "카타르" },
        { code: "ro", name: "루마니아" }, { code: "ru", name: "러시아" },
        { code: "sa", name: "사우디아라비아" }, { code: "sg", name: "싱가포르" },
        { code: "za", name: "남아프리카공화국" }, { code: "es", name: "스페인" }
    ];

    const select = document.getElementById("nationality");

    countries.forEach(country => {
        let option = document.createElement("option");
        option.value = country.code;
        option.textContent = country.name;
        select.appendChild(option);
    });


});
