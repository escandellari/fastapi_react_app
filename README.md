# FAST API App with React component

## Preparing dev enviroment

```bash
python3 -m venv .venv
source .venv/bin/activate

pip install --upgrade pip
pip install fastapi uvicorn sqlalchemy
pip install -U djlint
```

Create two folders, one for your backend and one for your frontend.

## Backend - FastAPI

In the backend folder create

- database.py - connection between SQLite and the fastapi application
- models.py - table structure for SQLite application
- main.py - endpoints

### Run the application

```bash
uvicorn main:app --reload
```

Visit http://127.0.0.1:8000/docs to verify your endpoints

## Frontend - React app with Bootstrap 5

```bash
npx create-react-app finance-app
npm install axios
```

### Run the application
```bash
cd finance-app
npm start
```
