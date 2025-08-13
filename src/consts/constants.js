export const stocks = {
  columns: [
    { title: 'ID', key: 'nm_id', sorter: 'default' },
    { title: 'Название', key: 'warehouse_name', sorter: 'default' },
    { title: 'Дата', key: 'date', sorter: 'default' },
    { title: 'Дата изменения', key: 'last_change_date' },
    { title: 'Количество', key: 'quantity', sorter: 'default' },
    { title: 'Сумма', key: 'price', sorter: 'default' },
    { title: 'Скидка', key: 'discount', sorter: 'default' },
    // { title: 'Реализация', key: 'is_realization', sorter: 'default' },
  ],

  sortState: [
    { key: 'price', order: null },
    { key: 'date', order: null },
    { key: 'quantity', order: null },
    { key: 'nm_id', order: null },
    { key: 'discount', order: null },
    { key: 'is_realization', order: null },
    { key: 'warehouse_name', order: null },
  ],
}
export const sales = {
  columns: [
    { title: 'ID', key: 'sale_id', sorter: 'default' },
    { title: 'Название склада', key: 'warehouse_name', sorter: 'default' },
    { title: 'Название страны', key: 'country_name', sorter: 'default' },
    { title: 'Дата', key: 'date', sorter: 'default' },
    { title: 'Дата изменения', key: 'last_change_date' },
    { title: 'Количество', key: 'quantity', sorter: 'default' },
    { title: 'Сумма', key: 'total_price', sorter: 'default' },
    { title: 'Скидка %', key: 'discount_percent', sorter: 'default' },
    { title: 'Реализация', key: 'is_realization', sorter: 'default' },
  ],

  sortState: [
    { key: 'total_price', order: null },
    { key: 'date', order: null },
    { key: 'discount_percent', order: null },
    { key: 'sale_id', order: null },
    { key: 'country_name', order: null },
    { key: 'warehouse_name', order: null },
  ],
}
