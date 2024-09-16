# Node.js and MySQL Dockerized Application

This project demonstrates how to create a simple Node.js application with a MySQL database, Dockerized and managed using Docker Compose.

### Install Docker and Docker Compose:

## Project Structure

- `docker-compose.yml`: Docker Compose configuration file for setting up the Node.js app and MySQL database.
- `app.js`: Node.js application code.
- `Dockerfile`: Dockerfile for building the Node.js application image.

## Prerequisites

- Docker
- Docker Compose

### Build the Docker Image:

docker build -t my-docker-app .

### Configure Environment Variables:

DB_HOST=mysql-db-container
DB_USER=root
DB_PASS=password
DB_NAME=mydb

### Build and Run Containers:

docker-compose up --build

### Stopping and Removing Containers:

docker-compose down

### Create a Docker Registry or Use Docker Hub

### docker tag my-docker-app <your_dockerhub_username>/my-docker-app:

docker tag my-docker-app <your_dockerhub_username>/my-docker-app
docker push <your_dockerhub_username>/my-docker-app

### Pull the Images from the Registry and Run Them Locally:

docker pull <your_dockerhub_username>/my-docker-app

### run:

docker run -d -p 3000:3000 <your_dockerhub_username>/my-docker-app
