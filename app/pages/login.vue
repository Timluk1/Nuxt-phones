<template>
    <FadeIn>
        <Container>
            <Card>
                <h2 class="login-title">Вход в аккаунт</h2>
                <form class="login-form" action="">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Введите ваш email"
                            class="form-input"
                        />
                    </div>
                    <div class="form-group">
                        <label for="password">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Введите ваш пароль"
                            class="form-input"
                        />
                    </div>
                    <Button class="login-button">Войти</Button>
                    <div class="login-footer">
                        <a href="#" class="footer-link">Забыли пароль?</a>
                        <a href="#" class="footer-link">Регистрация</a>
                    </div>
                </form>
            </Card>
        </Container>
    </FadeIn>
</template>

<style scoped>
.login-title {
    color: #333;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 24px;
    text-align: center;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group label {
    color: #555;
    font-size: 14px;
    font-weight: 500;
}

.form-input {
    padding: 12px 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    transition: border-color 0.3s;
}

.form-input:focus {
    outline: none;
    border-color: #0066ff;
}

.login-button {
    margin-top: 10px;
}

.login-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
}

.footer-link {
    color: #0066ff;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.3s;
}

.footer-link:hover {
    color: #0047b3;
    text-decoration: underline;
}
</style>
