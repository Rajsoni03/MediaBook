#!/bin/sh

# We have base custom user model so need to makemigrations out of box
python manage.py makemigrations core

python manage.py migrate
python manage.py collectstatic --noinput

exec "$@"