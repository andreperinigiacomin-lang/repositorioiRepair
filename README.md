# repositorioiRepair

Projeto full-stack do iRepair (API Node/Express + front React + MySQL), rodando via Docker.

## Como subir

Pre-requisito: apenas Docker instalado.

```bash
cp .env.example .env   # preencha MYSQL_ROOT_PASSWORD, MYSQL_DATABASE e JWT_SECRET
docker compose up --build
```

| Servico | URL                   |
|---------|-----------------------|
| client  | http://localhost:8080 |
| api     | http://localhost:3000 |
| db      | interno (rede docker) |

As migrations do Prisma rodam automaticamente quando o container da API sobe.

## Variaveis de ambiente

Todas ficam no `.env` da raiz (veja `.env.example`). O `.env` nao e versionado.

| Variavel                 | Para que serve                                       |
|--------------------------|------------------------------------------------------|
| `MYSQL_ROOT_PASSWORD`    | senha do root do MySQL                                |
| `MYSQL_DATABASE`         | nome do banco criado na inicializacao                 |
| `JWT_SECRET`             | segredo que assina os tokens                          |
| `JWT_EXPIRES_IN`         | validade do access token                              |
| `JWT_REFRESH_EXPIRES_IN` | validade do refresh token                             |
| `VITE_API_URL`           | URL da API embutida no build do front                 |
| `CORS_ORIGIN`            | origem do front liberada no CORS da API               |

`VITE_API_URL` e lida em tempo de **build** do front (o Vite embute as `VITE_*` no bundle),
por isso e passada como build arg no Compose. Alterar essa variavel exige rebuild:
`docker compose up --build`.

## Observacoes

O servico `db` sobe com `--lower-case-table-names=1` para tratar nomes de tabela como
case-insensitive, igual ao MySQL do Windows onde as migrations foram geradas. Esse ajuste
so tem efeito na inicializacao do volume; troca-lo exige recriar o volume
(`docker compose down -v`).
