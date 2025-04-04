document.addEventListener('DOMContentLoaded', function(){

    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    function renderCalendar(month, year) {
        let firstDay = new Date(year, month, 1).getDay();
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        let lastMonthDays = new Date(year, month, 0).getDate();
        let calendarBody = document.getElementById("calendar-body");
        let monthYear = document.getElementById("month-year");

        const monthNames = [
            "01", "02", "03", "04", "05", "06",
            "07", "08", "09", "10", "11", "12"
        ];

        monthYear.innerText = `${year}. ${monthNames[month]}`;
        calendarBody.innerHTML = "";

        let date = 1;
        let nextMonthDate = 1;
        let isCurrentMonth = false;
        
        for (let i = 0; i < 6; i++) {
            let row = document.createElement("tr");

            for (let j = 0; j < 7; j++) {
                let cell = document.createElement("td");

                // 이전 달 날짜 표시
                if (i === 0 && j < firstDay) {
                    cell.innerText = lastMonthDays - firstDay + j + 1;
                    cell.classList.add("other-month");
                }
                // 현재 달 날짜 표시
                else if (date <= daysInMonth) {
                    cell.innerText = date;
                    if (year === today.getFullYear() && month === today.getMonth() && date === today.getDate()) {
                        cell.classList.add("highlight-today");
                    }
                    date++;
                    isCurrentMonth = true;
                }
                // 다음 달 날짜 표시
                else {
                    cell.innerText = nextMonthDate;
                    cell.classList.add("other-month");
                    nextMonthDate++;
                }

                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
        
        renderCalendar(currentMonth, currentYear);
    }

    function prevMonth() {
        if (currentMonth === 0) {
            currentYear--;
            currentMonth = 11;
        } else {
            currentMonth--;
        }
        renderCalendar(currentMonth, currentYear);
    }

    function nextMonth() {
        if (currentMonth === 11) {
            currentYear++;
            currentMonth = 0;
        } else {
            currentMonth++;
        }
        renderCalendar(currentMonth, currentYear);
    }

    // ✅ 버튼 클릭 이벤트 추가 (HTML의 onclick 제거 가능)
    document.getElementById("prev-btn").addEventListener("click", prevMonth);
    document.getElementById("next-btn").addEventListener("click", nextMonth);

    // ✅ 페이지 로드 시 캘린더 렌더링
    renderCalendar(currentMonth, currentYear);
            
});