export interface Transaction {
    id: number;
    amount: number;
    date: string;
    category: string;
    type: 'income' | 'expense';
    notes?: string;
}

export interface Category {
    id: number;
    name: string;
    type: 'income' | 'expense';
}