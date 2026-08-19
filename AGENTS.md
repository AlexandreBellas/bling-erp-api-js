# AGENTS.md

TypeScript/JavaScript client for the [Bling ERP API v3](https://developer.bling.com.br/). Consumers instantiate `Bling` with a Bearer access token and call typed methods on 41 resource modules (contacts, products, NFe, orders, logistics, etc.). HTTP is centralized in a repository layer; entities map Bling endpoints to `get`, `find`, `create`, `update`, `delete`, and domain-specific actions with full TypeScript interfaces.

## Cursor Rules

Rules live under `.cursor/rules/`. Each file is scoped by topic; open the linked rule for full standards.

### Architecture

| Rule | Summary |
|------|---------|
| [overview](.cursor/rules/architecture/overview.mdc) | Layering, assumptions, and full entity module inventory |
| [repository-layer](.cursor/rules/architecture/repository-layer.mdc) | `IBlingRepository` verb mapping and axios transport |
| [entity-modules](.cursor/rules/architecture/entity-modules.mdc) | Per-resource folder layout and method conventions |
| [bling-facade](.cursor/rules/architecture/bling-facade.mdc) | `Bling` entry class and lazy module registration |
| [extending-entities](.cursor/rules/architecture/extending-entities.mdc) | Checklist for new modules and operations |
| [exceptions-and-errors](.cursor/rules/architecture/exceptions-and-errors.mdc) | `BlingApiException` / `BlingInternalException` flow |
| [shared-and-helpers](.cursor/rules/architecture/shared-and-helpers.mdc) | `@shared` types, base `Entity`, and helpers |

### Code Style

| Rule | Summary |
|------|---------|
| [typescript](.cursor/rules/code-style/typescript.mdc) | Compiler settings, strict typing, and async patterns |
| [naming](.cursor/rules/code-style/naming.mdc) | Files, interfaces, endpoints, and facade getter names |
| [interfaces-and-types](.cursor/rules/code-style/interfaces-and-types.mdc) | `interfaces/` and `types/` file organization |
| [linting-and-formatting](.cursor/rules/code-style/linting-and-formatting.mdc) | ESLint, Prettier, and import conventions |

### Documentation

| Rule | Summary |
|------|---------|
| [jsdoc](.cursor/rules/documentation/jsdoc.mdc) | Portuguese JSDoc blocks and `@see` requirements |
| [api-reference](.cursor/rules/documentation/api-reference.mdc) | Linking code to official Bling API docs |

### Testing

| Rule | Summary |
|------|---------|
| [entity-unit-tests](.cursor/rules/testing/entity-unit-tests.mdc) | Colocated `index.spec.ts` structure and assertions |
| [fixtures](.cursor/rules/testing/fixtures.mdc) | `*-response.ts` mock data conventions |
| [in-memory-repository](.cursor/rules/testing/in-memory-repository.mdc) | `InMemoryBlingRepository` setup and spying |
