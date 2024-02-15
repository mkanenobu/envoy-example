# envoy-example

Envoy Proxy Example with rate limit

Client -> Envoy Container -> API Server Container

## Command

Run

```bash
docker compose up
```

Request to API Server via Envoy Proxy

Rate limit is set at 1 request/second

```bash
curl http://localhost:8080
```

