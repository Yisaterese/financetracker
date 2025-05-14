import { useState } from 'react';
import type {Transaction, Category} from '../types';
import { saveData, loadData, generateId } from '../utils';

export default function TransactionForm() {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState<'income' | 'expense'>('expense');
    const [notes, setNotes] = useState('');
    const categories = loadData<Category>('categories') as Category[];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTransaction: Transaction = {
            id: generateId(),
            amount: parseFloat(amount),
            date,
            category,
            type,
            notes,
        };
        const transactions = loadData<Transaction>('transactions');
        transactions.push(newTransaction);
        saveData('transactions', transactions);
        setAmount('');
        setDate('');
        setCategory('');
        setNotes('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                className="w-full p-2 border border-gray-300 rounded"
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
            >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))}
            </select>
            <select
                value={type}
                onChange={(e) => setType(e.target.value as 'income' | 'expense')}
                className="w-full p-2 border border-gray-300 rounded"
            >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>
            <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Notes (optional)"
                className="w-full p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="w-full bg-teal-600 text-white p-2 rounded hover:bg-teal-700">
                Add Transaction
            </button>
        </form>
    );
}