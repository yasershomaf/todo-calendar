window.addEventListener('load', function () {
	const daysContainer = document.querySelector('#days-container');
	const todoList = document.querySelector('#todo-list');
	const todoInput = document.querySelector('#todo-input');
	const addButton = document.querySelector('#add-button');

	function renderCalendar(date) {
		const year = date.getFullYear();
		const month = date.getMonth();

		const firstDayIndex = new Date(year, month, 1).getDay();
		const noOfPrevDays = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
		const noOfDaysInMonth = new Date(year, month + 1, 0).getDate();
		const noOfDaysInPrevMonth = new Date(year, month, 0).getDate();
		const noOfRows = Math.ceil((noOfPrevDays + noOfDaysInMonth) / 7);
		const noOfNextDays = noOfRows * 7 - noOfPrevDays - noOfDaysInMonth;

		daysContainer.innerHTML = '';

		for (let i = 1 - noOfPrevDays; i <= noOfDaysInMonth + noOfNextDays; i++) {
			const day = document.createElement('div');
			day.className = 'day-container';

			if (i < 1) {
				day.innerText = i + noOfDaysInPrevMonth;
			} else if (i > noOfDaysInMonth) {
				day.innerText = i - noOfDaysInMonth;
			} else {
				day.innerText = i;
			}

			daysContainer.appendChild(day);
		}
	}

	renderCalendar(new Date());
});