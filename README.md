# Python FastAPI

## Setup

- Install Python: `brew install python`
- Create virtual environment: `python -m venv .venv`
- Activate virtual environment: `source .venv/bin/activate`
- Install dependencies: `pip install -r requirements.txt`

## Run

### Local Dev

```
./scipts/run.sh
```

Open API at http://localhost:8000

### Container

```
./scipts/run-docker.sh
```

Open API on http://localhost:8080

## API Docs

API docs can be found at `/docs#/` on the server.

OpenAPI JSON Spec can be found at `/openapi.json` on the server.

From the OpenAPI JSON Spec JSON, client can be generated using [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen)

> Running `npx` requires NodeJS to be installed: `brew install nodejs`.

```
npx openapi-typescript-codegen --input http://localhost:8000/openapi.json --output client/generated --client axios --name AppClient
```

### Reference

- [FastAPI](https://fastapi.tiangolo.com/python-types/)
- [openapi-typescript-codegen](https://github.com/ferdikoomen/openapi-typescript-codegen)

Test
