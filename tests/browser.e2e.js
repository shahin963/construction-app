describe('e2e test', () => {
	describe('UI Validation', () => {
		test('should display a title', async () => {
			await navigate();
			expect(await getTitle()).toBe('hello world');
			expect(await elemntVisible('roomLength')).toBeTruthy();
			expect(await elemntVisible('roomHeight')).toBeTruthy();
			expect(await elemntVisible('tileLength')).toBeTruthy();
			expect(await elemntVisible('tileHeight')).toBeTruthy();
			expect(await elemntVisible('tileStartPointX')).toBeTruthy();
			expect(await elemntVisible('tileStartPointY')).toBeTruthy();
			expect(await elemntVisible('calcButton')).toBeTruthy();
		});
	});

	describe('Input validation', () => {
		xtest('should display warining for Negative or zero input', async () => {
			await navigate();
			expect(await elemntVisible('roomLengthWarning')).toBeFalsy();
			await setInputValue('roomLength', -500);
			expect(await getNumberInputValue('roomLength')).toBe(-500);
			expect(await elemntVisible('roomLengthWarning')).toBeTruthy();
		});

		test('should not accept an empty Input', async () => {
			await navigate();

			expect(await getNumberInputValue('roomLength')).toBe(0);

			await setInputValue('roomLength', 400);
			expect(await getNumberInputValue('roomLength')).toBe(400);

			await setInputValue('roomLength', 'Some random Text');
			expect(await getNumberInputValue('roomLength')).toBe(0);
		});

		test('should not accept a nigative input', async () => {});

		test('should not accept a zero input', async () => {});
	});

	xdescribe('Calculation validation', () => {
		test('should calculate room area', async () => {});

		test('should calculate room area', async () => {});

		test('should calculate required number of tiles', () => {});

		test('should calculate actual are', () => {});
	});

	xdescribe('Output validation', () => {
		test('should display room Area', () => {});

		test('should display number of tiles needed', () => {});

		test('should display the actual tiles area', () => {});
	});
});

async function elemntVisible(key) {
	return !!(await page.$(`[data-hook="${key}"]`));
}

async function setInputValue(key, value) {
	await page.$eval(
		`[data-hook="${key}"]`,
		(el, value) => (el.value = value),
		value
	);
}

async function getInputValue(input) {
	return page.$eval(
		`[data-hook="${input}"]`,
		inputElement => inputElement.value
	);
}
async function getNumberInputValue(input) {
	return Number(await getInputValue(input));
}

async function getTitle() {
	return page.$eval(
		`[data-hook="app-title"]`,
		inputElement => inputElement.innerText
	);
}

async function navigate() {
	await page.goto('http://localhost:3000');
}
