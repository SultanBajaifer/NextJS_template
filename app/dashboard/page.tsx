import { Card } from 'app/ui/dashboard/cards';
import { lusitana } from 'app/ui/fonts';

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard Overview
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Total Customers" value="1,234" type="customers" />
        <Card title="Pending Orders" value="12" type="pending" />
        <Card title="Total Revenue" value="$45,678" type="collected" />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="p-4 rounded-lg bg-white shadow">
          <h2 className="mb-4 text-lg font-medium">Recent Activity</h2>
          {/* Activity content would go here */}
          <p className="text-gray-500">No recent activity to display</p>
        </div>
        <div className="p-4 rounded-lg bg-white shadow">
          <h2 className="mb-4 text-lg font-medium">Quick Stats</h2>
          {/* Stats content would go here */}
          <p className="text-gray-500">Loading statistics...</p>
        </div>
      </div>
    </main>
  );
}