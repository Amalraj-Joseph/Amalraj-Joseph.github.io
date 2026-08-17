---
title: CubeForge
slug: cubeforge
description: A pure Python engine for the 3x3 Rubik's Cube, built from a formal specification with a zero-dependency core.
longDescription: >
  CubeForge answers one question precisely: given a cube state and a move, what's
  the resulting state? The core engine is pure Python with no dependencies —
  it doesn't know Flask, Three.js, or a database exist. A Flask REST API and a
  Three.js browser interface sit on top of it, consuming the same core the
  specification describes. Illegal cube states are structurally impossible by
  design, and a formal specification in the repo acts as a permanent regression
  gate, checked by an 865+ test suite.
technologies:
  - Python
  - Flask
  - Three.js
  - pytest
  - Ruff
github: https://github.com/Amalraj-Joseph/CubeForge
demo: https://cubeforge.amalraj.dev
featured: true
year: "2026"
visual: cube
order: 1
---
