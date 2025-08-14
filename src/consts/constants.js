export const stocks = {
  columns: [
    { title: 'ID', key: 'nm_id', sorter: 'default' },
    { title: 'Название', key: 'warehouse_name', sorter: 'default' },
    { title: 'Дата', key: 'date', sorter: 'default' },
    { title: 'Дата изменения', key: 'last_change_date' },
    { title: 'Количество', key: 'quantity', sorter: 'default' },
    { title: 'Сумма', key: 'price', sorter: 'default' },
    { title: 'Скидка', key: 'discount', sorter: 'default' },
    { title: 'Реализация', key: 'is_realization', sorter: 'default' },
  ],
}
export const sales = {
  columns: [
    { title: 'ID', key: 'sale_id', sorter: 'default' },
    { title: 'Название склада', key: 'warehouse_name', sorter: 'default' },
    { title: 'Название страны', key: 'country_name', sorter: 'default' },
    { title: 'Дата', key: 'date', sorter: 'default' },
    { title: 'Дата изменения', key: 'last_change_date' },
    { title: 'Сумма', key: 'total_price', sorter: 'default' },
    { title: 'Скидка %', key: 'discount_percent', sorter: 'default' },
  ],
}
export const incomes = {
  columns: [
    { title: 'ID', key: 'income_id', sorter: 'default' },
    { title: 'Название склада', key: 'warehouse_name', sorter: 'default' },
    { title: 'Количество', key: 'quantity', sorter: 'default' },
    { title: 'Дата', key: 'date', sorter: 'default' },
    { title: 'Дата изменения', key: 'last_change_date' },
    { title: 'Дата закрытия', key: 'date_close' },
    { title: 'Сумма', key: 'total_price', sorter: 'default' },
  ],
}
