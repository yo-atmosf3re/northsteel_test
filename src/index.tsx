import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import App from './app/App';
import '@/app/styles/index.scss';

const container = document.getElementById('root');

if (!container) {
    throw new Error(
        'Контейнер root не найден. Не удалось вмонтировать React-приложение!',
    );
}

const root = createRoot(container);

// ? Точка входа в приложение (entry point);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>,
);
