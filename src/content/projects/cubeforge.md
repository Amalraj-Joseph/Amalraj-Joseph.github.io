---
title: CubeForge
slug: cubeforge
description: A pure Python engine for the 3x3 Rubik's Cube, built from a formal specification with a zero-dependency core.
highlights:
  - Answers one question precisely — given a cube state and a move, what's the resulting state — the same way every time.
  - A 14-document formal specification defines colors, piece identity, orientation, moves, and transformations precisely enough that any conforming implementation must behave identically.
  - The core engine is pure Python with zero runtime dependencies — it doesn't know Flask, Three.js, or a database exist.
  - Every invariant a physical cube actually has (26 pieces, valid orientation and permutation parity) is enforced at construction time, so an illegal state is structurally impossible, not just rejected after the fact.
  - A Flask REST API and a Three.js browser interface sit on top of it, consuming the same core the specification describes.
  - Proven against the spec by an 865+ test suite with 99% statement coverage.
technologies:
  - Python
  - Flask
  - Three.js
  - pytest
  - Ruff
github: https://github.com/Amalraj-Joseph/CubeForge
docs: https://cubeforge.amalraj.dev
featured: true
year: "2026"
visual: cube
order: 2
---
