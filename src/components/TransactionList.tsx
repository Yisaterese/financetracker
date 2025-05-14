import { useState, useEffect } from 'react';
import type { Transaction, Category } from '../types';
import { loadData } from '../utils';

export default function TransactionList() {
    const [sortBy, setSortBy] = useState<'date' | 'amount' | 'category'>('date');
    const [filterCategory, setFilterCategory] = useState('');
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    // Load data once on mount
    useEffect(() => {
        setTransactions(loadData('transactions')); // Returns Transaction[]
        setCategories(loadData('categories')); // Returns Category[]
    }, []);

    // Map categories to their names for the filter dropdown
    const categoryNames = categories.map((c) => c.name);

    // Sort and filter transactions
    const sortedFilteredTransactions = [...transactions]
        .sort((a, b) => {
            if (sortBy === 'date') return new Date(b.date).getTime() - new Date(a.date).getTime();
            if (sortBy === 'amount') return b.amount - a.amount;
            if (sortBy === 'category') return a.category.localeCompare(b.category);
            return 0;
        })
        .filter((t) => !filterCategory || t.category === filterCategory);

    return (
        <div className="p-4 bg-gray-50 rounded-lg">
            <div className="mb-4 flex space-x-2">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'date' | 'amount' | 'category')}
                    className="p-2 border border-gray-300 rounded"
                >
                    <option value="date">Sort by Date</option>
                    <option value="amount">Sort by Amount</option>
                    <option value="category">Sort by Category</option>
                </select>
                <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                >
                    <option value="">All Categories</option>
                    {categoryNames.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
            <ul className="space-y-2">
                {sortedFilteredTransactions.map((t) => (
                    <li key={t.id} className="p-2 bg-white border border-gray-200 rounded">
                        {t.date} - {t.type === 'income' ? '+' : '-'} ${t.amount} ({t.category})
                        {t.notes && <p className="text-gray-500">{t.notes}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
}