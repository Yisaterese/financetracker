import TransactionForm from '../components/TransactionForm';
import CategoryManager from '../components/categoryManager.tsx';
import TransactionList from '../components/TransactionList';

export default function Dashboard() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Personal Finance Tracker</h1>
            <div className="grid gap-6 lg:grid-cols-2">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Add Transaction</h2>
                    <TransactionForm />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Manage Categories</h2>
                    <CategoryManager />
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Transaction History</h2>
                <TransactionList />
            </div>
        </div>
    );
}