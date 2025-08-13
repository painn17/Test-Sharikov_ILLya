export const normalizeItems = (items) => {
  return items.map((item) => ({
    ...item,
    price: Number(item.price),
    quantity: Number(item.quantity),
    nm_id: Number(item.nm_id),
    discount: Number(item.discount),
  }))
}
