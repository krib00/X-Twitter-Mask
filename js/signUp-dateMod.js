document.addEventListener("DOMContentLoaded", () => {
    const monthSelect = document.getElementById("month");
    const daySelect = document.getElementById("day");
    const yearSelect = document.getElementById("year");

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    months.forEach((month, index) => {
        const option = document.createElement("option");
        option.value = index + 1;
        option.textContent = month;
        monthSelect.appendChild(option);
    });

    const currentYear = new Date().getFullYear();
    const populateYearDropdown = (showLeapYearsOnly = false) => {
        yearSelect.innerHTML = `<option style="background-color: rgb(170, 170, 170)" disabled selected></option>`;
        const startYear = 1904;
        if (showLeapYearsOnly) {
            for (let i = currentYear; i >= startYear; i--) {
                if (isLeapYear(i)) {
                    const option = document.createElement("option");
                    option.value = i;
                    option.textContent = i;
                    yearSelect.appendChild(option);
                }
            }
        } else {
            for (let i = currentYear; i >= startYear; i--) {
                const option = document.createElement("option");
                option.value = i;
                option.textContent = i;
                yearSelect.appendChild(option);
            }
        }
    };

    populateYearDropdown();

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    function updateDays() {
        const selectedMonth = parseInt(monthSelect.value);
        const selectedYear = parseInt(yearSelect.value);

        const daysInMonth = [31, isLeapYear(selectedYear) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        const selectedDay = parseInt(daySelect.value);

        daySelect.innerHTML = `<option style="background-color: rgb(170, 170, 170)" disabled selected></option>`;

        const days = selectedMonth ? daysInMonth[selectedMonth - 1] : 31;

        for (let i = 1; i <= days; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            daySelect.appendChild(option);
        }

        if (selectedMonth === 2) {
            if (!selectedYear || isLeapYear(selectedYear)) {
                const feb29Option = daySelect.querySelector('option[value="29"]');
                if (!feb29Option) {
                    const option = document.createElement("option");
                    option.value = 29;
                    option.textContent = 29;
                    daySelect.appendChild(option);
                }
            } else {
                const feb29Option = daySelect.querySelector('option[value="29"]');
                if (feb29Option) {
                    feb29Option.remove();
                }
            }
        }

        if (selectedDay > days || (selectedMonth === 2 && selectedDay === 29 && !isLeapYear(selectedYear))) {
            daySelect.value = "";
        } else {
            daySelect.value = selectedDay;
        }

        if (selectedDay > days) {
            daySelect.value = days;
        }
    }

    monthSelect.addEventListener("change", () => {
        updateDays();
    });

    yearSelect.addEventListener("change", () => {
        updateDays();
    });

    updateDays();
});