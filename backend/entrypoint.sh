#!/bin/sh

# make the changes on DB
python manage.py makemigrations
python manage.py migrate

# copy static files to static dir
python manage.py collectstatic --noinput

#start django server
python manage.py runserver 0.0.0.0:8000
