export default function updateUniqueItems(groceriesList) {
  if (!(groceriesList instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of groceriesList) {
    if (quantity === 1) {
      groceriesList.set(item, 100);
    }
  }
}
