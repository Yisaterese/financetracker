import { useState } from 'react';
import type {Category} from '../types';
import { saveData, loadData, generateId } from '../utils';

export default function CategoryManager() {
    const [name, setName] = useState('');
    const [type, setType] = useState<'income' | 'expense'>('expense');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newCategory: Category = { id: generateId(), name, type };
        const categories = loadData<Category>('categories');
        categories.push(newCategory);
        saveData('categories', categories);
        setName('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Category Name"
                className="w-full p-2 border border-gray-300 rounded"
                required
            />
            <select
                value={type}
                onChange={(e) => setType(e.target.value as 'income' | 'expense')}
                className="w-full p-2 border border-gray-300 rounded"
            >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>
            <button type="submit" className="w-full bg-teal-600 text-white p-2 rounded hover:bg-teal-700">
                Add Category
            </button>
        </form>
    );
}