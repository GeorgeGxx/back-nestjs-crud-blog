# Request methods

- GET

localhost:5500/users

- POST

localhost:5500/users

{
    "username":"alberto"
}

- PUT

localhost:5500/users/{id}

{
    "username":"jorge"
}

- DELETE

localhost:5500/users/{id}

----

Old Dev Script -> package.json

"start:dev": "nest start --watch",

----

docker compose -f 

docker build -t back-nestsjs-blog:latest . -f Dockerfile

docker system prune -a --volumes