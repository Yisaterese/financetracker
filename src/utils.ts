import type { Transaction, Category } from './types';

// Define a mapping of keys to their expected types
interface DataMap {
    categories: Category[];
    transactions: Transaction[];
    // Add other keys and types as needed
}

// Save data with a generic type constrained to DataMap values
export const saveData = <K extends keyof DataMap>(key: K, data: DataMap[K]) => {
    localStorage.setItem(key, JSON.stringify(data));
};

// Load data with a generic type constrained to DataMap values
export const loadData = <K extends keyof DataMap>(key: K): DataMap[K] => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};

// Generate a unique ID
export const generateId = () => {
    return Date.now() + Math.floor(Math.random() * 1000);
};

// Export transactions to CSV
export const exportToCSV = (transactions: Transaction[]) => {
    const headers = ['ID,Amount,Date,Category,Type,Notes'];
    const rows = transactions.map((t) =>
        `${t.id},${t.amount},${t.date},${t.category},${t.type},${t.notes || ''}`
    ).join('\n');
    const csv = headers.join('\n') + '\n' + rows;
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transactions.csv';
    a.click();
};