# OTUS: Microservice Architecture

Container name: [b12k/otus-app](https://hub.docker.com/r/b12k/otus-app)

Sample app.

`Expose: 8000`

Endpoints:
- Welcome: `/otus-app/bogdan`
- Health: `/otus-app/health`

### Run:

`skaffold run`
OR
`kubectl apply -f ./k8s`

### Test

`curl -H "Host: arch.homework" http://localhost/otus-app/bogdan`




