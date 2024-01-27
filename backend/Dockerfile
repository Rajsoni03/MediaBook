# pull official base image
FROM python:3.10-slim

# set work directory
WORKDIR /bakcend/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .

# install python dependencies 
RUN pip install -r requirements.txt

# copy entrypoint.sh
# COPY ./entrypoint.sh .

# copy project
COPY . .

# run entrypoint.sh
# ENTRYPOINT ["/bakcend/app/entrypoint.sh"]