import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

test('renders main title', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Memo App/i);
  expect(linkElement).toBeInTheDocument();
});

