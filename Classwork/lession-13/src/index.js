import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { Users } from './components/users';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { ProtectedRoute } from './utils/PrivateRoute';
import { Login } from './components/auth/Login';
import { Cities } from './components/cities/Cities';
import "./css/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/login" index element={<Login />} />
                <Route path="/" element={<ProtectedRoute>
                    <App />
                </ProtectedRoute>
                }>
                    <Route path="/users" element={<Users />}/>
                    <Route path="/cities" element={<Cities />
                    }/>
                </Route>
                <Route path="*" element={<Navigate to="/login"/>} />
            </Routes>
        </Router>
    </Provider>
)