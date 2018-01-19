const add = (a, b) => a + b;
const generateGreatting = (name) => `Hello ${name}`;

test('should add two number', () => {
	const result = add(3, 4);
	expect(result).toBe(7);
});

test('sould return a greeting', () => {
	const greeting = generateGreatting('Guilherme');
	expect(greeting).toBe('Hello Guilherme');
});