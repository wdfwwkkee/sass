import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/styles/global.scss"
import Router from './components/ui/Router.jsx';
import AuthProviders from './providers/AuthProviders.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProviders>
            <Router/>
        </AuthProviders>
    </React.StrictMode>
);
