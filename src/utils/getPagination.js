export function getPagination(page, size) {
  const from = page ? page * size + 1 : 0;
  const to = from + size;

  return { from, to };
}
