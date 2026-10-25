#!/usr/bin/env bash
# Hook Stop: antes de que Claude dé una tarea por terminada, valida tipos, esquemas de contenido y build.
# Solo devuelve los errores (no la salida completa) para no llenar el contexto.
input=$(cat)
# Evita bucles: si ya está corrigiendo por este hook, no vuelve a bloquear.
echo "$input" | grep -q '"stop_hook_active":\s*true' && exit 0
cd "$CLAUDE_PROJECT_DIR" || exit 0
# Si no hay cambios en el código o el contenido, no hace nada.
git status --porcelain -- src public astro.config.mjs functions 2>/dev/null | grep -q . || exit 0

out=$(npm run --silent check 2>&1) || { echo "$out" | grep -E "error|Error" -A3 | head -40 >&2; echo "astro check falló: corregí los errores de arriba." >&2; exit 2; }
out=$(npm run --silent build 2>&1) || { echo "$out" | grep -iE "error|schema|expected" -A4 | head -40 >&2; echo "El build falló: corregí los errores de arriba." >&2; exit 2; }
exit 0
