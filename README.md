# Django + React Social Authentication

This repository is intended to be the part of [Social login with React and Django — I](https://medium.com/@pratique/social-login-with-react-and-django-i-c380fe8982e2) and [Social login with React and Django — II](https://medium.com/@pratique/social-login-with-react-and-django-ii-39b8aa20cd27)  medium articles 

![alt text][logo]

[logo]: https://github.com/pratiksinghchauhan/django_react_socialauth/blob/master/ReactApp.png "React Django"


## Running the Code

Clone the repository 

```
git clone https://github.com/pratiksinghchauhan/django_react_socialauth
```

### Backend

`drf_social` is the django backend which depends on the django rest framework and few other projects, it has only be tested on `python 3.7.3`, to run the project 

```
cd drf_social
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

This should start the django development server at `localhost:8000`

### Frontend
`react_auth` is the frontend which depends upon React JS, to run the code,<b>replace your Facebook AppId and Google ClientId in app.js file</b> then go to a new terminal window and
```
cd react_auth	
npm install 
npm start
```
This should start a development server on `localhost:3000`

### Issues
If you face any problem, please open an issue [here](https://github.com/pratiksinghchauhan/django_react_socialauth/issues)
