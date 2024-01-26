#!/bin/sh

# make the changes on DB
python manage.py makemigrations
python manage.py migrate

# python manage.py collectstatic --noinput