// import { useEffect, useState } from "react"
// import { Download, Plus } from "lucide-react"
//
// import { Button } from "../components/button.tsx"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { TransactionDialog } from "@/components/transaction-dialog"
// import { TransactionList } from "@/components/transaction-list"
// import { FinancialSummary } from "@/components/financial-summary"
// import { CategoryDialog } from "@/components/category-dialog"
// import { useFinanceStore } from "@/lib/store"
// import { exportToCSV } from "@/lib/csv-export"
//
// export default function DashboardPage() {
//     const [isTransactionDialogOpen, setIsTransactionDialogOpen] = useState(false)
//     const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false)
//     const { transactions, categories, loadData } = useFinanceStore()
//
//     useEffect(() => {
//         loadData()
//     }, [loadData])
//
//     const handleExportCSV = () => {
//         exportToCSV(transactions, "finance-tracker-transactions")
//     }
//
//     return (
//         <div className="flex flex-col min-h-screen">
//             <main className="flex-1">
//                 <div className="container py-6 md:py-8">
//                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
//                         <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
//                         <div className="flex flex-wrap gap-2">
//                             <Button onClick={() => setIsTransactionDialogOpen(true)}>
//                                 <Plus className="mr-2 h-4 w-4" />
//                                 Add Transaction
//                             </Button>
//                             <Button variant="outline" onClick={() => setIsCategoryDialogOpen(true)}>
//                                 <Plus className="mr-2 h-4 w-4" />
//                                 Add Category
//                             </Button>
//                             <Button variant="outline" onClick={handleExportCSV}>
//                                 <Download className="mr-2 h-4 w-4" />
//                                 Export CSV
//                             </Button>
//                         </div>
//                     </div>
//
//                     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
//                         <FinancialSummary />
//                     </div>
//
//                     <Tabs defaultValue="all" className="w-full">
//                         <TabsList className="mb-4">
//                             <TabsTrigger value="all">All Transactions</TabsTrigger>
//                             <TabsTrigger value="income">Income</TabsTrigger>
//                             <TabsTrigger value="expense">Expenses</TabsTrigger>
//                         </TabsList>
//                         <TabsContent value="all">
//                             <Card>
//                                 <CardHeader>
//                                     <CardTitle>All Transactions</CardTitle>
//                                     <CardDescription>View and manage all your financial transactions</CardDescription>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <TransactionList filter="all" />
//                                 </CardContent>
//                             </Card>
//                         </TabsContent>
//                         <TabsContent value="income">
//                             <Card>
//                                 <CardHeader>
//                                     <CardTitle>Income</CardTitle>
//                                     <CardDescription>View and manage your income transactions</CardDescription>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <TransactionList filter="income" />
//                                 </CardContent>
//                             </Card>
//                         </TabsContent>
//                         <TabsContent value="expense">
//                             <Card>
//                                 <CardHeader>
//                                     <CardTitle>Expenses</CardTitle>
//                                     <CardDescription>View and manage your expense transactions</CardDescription>
//                                 </CardHeader>
//                                 <CardContent>
//                                     <TransactionList filter="expense" />
//                                 </CardContent>
//                             </Card>
//                         </TabsContent>
//                     </Tabs>
//                 </div>
//             </main>
//
//             <TransactionDialog open={isTransactionDialogOpen} onOpenChange={setIsTransactionDialogOpen} />
//
//             <CategoryDialog open={isCategoryDialogOpen} onOpenChange={setIsCategoryDialogOpen} />
//         </div>
//     )
// }
