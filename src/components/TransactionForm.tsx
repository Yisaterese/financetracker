import { useState, useEffect } from 'react';
import type { Transaction, Category } from '../types';
import { loadData, saveData, generateId } from '../utils';

export default function TransactionForm() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [form, setForm] = useState<Partial<Transaction>>({
        date: '',
        amount: 0,
        category: '',
        type: 'expense',
        notes: '',
    });

    useEffect(() => {
        setCategories(loadData('categories'));
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: name === 'amount' ? parseFloat(value) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const transactions = loadData('transactions');

        const newTransaction: Transaction = {
            id: generateId(), // returns number
            date: form.date || new Date().toISOString().split('T')[0],
            amount: form.amount || 0,
            category: form.category || '',
            type: form.type as 'income' | 'expense',
            notes: form.notes || '',
        };

        const updated = [...transactions, newTransaction];
        saveData('transactions', updated);
        setForm({ date: '', amount: 0, category: '', type: 'expense', notes: '' });
        alert('Transaction added!');
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 mb-6 bg-white border rounded space-y-4">
            <h2 className="text-lg font-semibold">Add New Transaction</h2>
            <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
            />
            <input
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Amount"
                required
            />
            <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
            >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                        {cat.name}
                    </option>
                ))}
            </select>
            <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
            >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Notes (optional)"
            />
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Add Transaction
            </button>
        </form>
    );
}
