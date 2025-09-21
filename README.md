# Travel App (Monorepo)

Этот репозиторий содержит **три части одного проекта**:
- 📱 **Mobile** — мобильное приложение (React Native / Flutter)
- 💻 **Web** — веб-приложение (Next.js)
- 🔧 **Backend** — серверная часть (Python / Node.js)

---

## 📂 Структура проекта
project-root/
├─ mobile/ # мобильное приложение
├─ web/ # фронтенд
├─ backend/ # сервер
└─ README.md # документация


---

## 🚀 Запуск проекта

### 1. Mobile
```bash
cd mobile
# Установка зависимостей
npm install
# или
yarn install

# Запуск
npm run start


### 1. Web
cd web
# Установка зависимостей
npm install
# или
yarn install

# Запуск dev-сервера
npm run dev

После запуска сайт доступен на:
👉 http://localhost:3000

3. Backend
Если Python (FastAPI / Django):
cd backend
python -m venv .venv
source .venv/bin/activate   # Linux/Mac
.venv\Scripts\activate      # Windows

pip install -r requirements.txt
uvicorn main:app --reload   # для FastAPI

Если Node.js (Express/Nest.js):
cd backend
npm install
npm run dev
