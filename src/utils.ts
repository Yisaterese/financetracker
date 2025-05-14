import type {Transaction, Category} from './types';

export const saveData = (key: string, data: Transaction[] | Category[]) => {
    localStorage.setItem(key, JSON.stringify(data));
};

// Constrain T to be an array type
export const loadData = <T extends never[]>(key: string): T => {
    const data = localStorage.getItem(key);
    return data ? (JSON.parse(data) as T) : [] as unknown as T;
};

export const generateId = () => {
    return Date.now() + Math.floor(Math.random() * 1000);
};

export const exportToCSV = (transactions: Transaction[]) => {
    const headers = ['ID,Amount,Date,Category,Type,Notes'];
    const rows = transactions.map(t =>
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