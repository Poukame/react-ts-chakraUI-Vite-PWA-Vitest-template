import App from '../src/App';
import { render, screen } from '@testing-library/react';

describe('when everything is OK', () => {
	beforeEach(async () => {
		render(<App />);
	});

	test('should find text on screen', () => {
		screen.getByText(/Hello World/);
	});

	test('should not find the role "whatever" in our component', () => {
		expect(screen.queryByRole('whatever')).toBeNull();
	});
});
