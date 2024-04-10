import React from 'react';

const AuthPage = () => {
  return (
    <>
      <div className="auth_page">
        <div className="auth_container">
          <div className="auth_content_container">
            <h2>Войдите или зарегистрируйтесь</h2>
            <div className="auth_content_buttons">
              <button>Вход</button>
              <button>Регистрация</button>
            </div>
            <div className="auth_content_form">
              <form action="login"></form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
