---
title: Shelfinity
slug: shelfinity
description: A Jakarta EE library management application, deployed as a real multi-cloud system spanning Oracle Cloud Infrastructure, IBM Cloud, and Cloudflare's edge network.
highlights:
  - Handles the day-to-day of running a library — browsing a catalog, requesting a book, reserving one that's out, and tracking overdue returns, all behind a single approval queue for registration and borrowing requests.
  - The same backend WAR and React build run three ways — a local Docker Compose stack, a hybrid setup against real IBM Cloud services, and a production multi-cloud deployment — with config changes only, no source changes.
  - Production spans Oracle Cloud Infrastructure (compute and secrets), IBM Cloud (Db2 and App ID), and Cloudflare (DNS, TLS, and tunnel) — entirely on free-tier infrastructure.
  - Identity runs on Keycloak locally and IBM App ID in the cloud, so the application itself never stores a password.
  - Ships with Testcontainers-based integration tests, a Playwright and Jest suite, a JaCoCo coverage gate in CI, and a documented API and business-rules spec checked against the running codebase.
technologies:
  - Oracle Cloud Infrastructure
  - IBM Cloud
  - Cloudflare
  - Java
  - Jakarta EE
  - Open Liberty
  - React
  - PostgreSQL
  - IBM Db2
  - Keycloak
  - IBM App ID
  - Docker
  - Testcontainers
github: https://github.com/Amalraj-Joseph/Shelfinity
demo: https://shelfinity-app.amalraj.dev
docs: https://shelfinity.amalraj.dev
featured: true
year: "2025"
visual: architecture
order: 1
---
