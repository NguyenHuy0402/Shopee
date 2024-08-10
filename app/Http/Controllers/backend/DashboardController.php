<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $newOrders = Order::whereDate('created_at', today())->count();
        $totalOrders = Order::count(); // Tổng số đơn hàng
    
        // Giả sử tỷ lệ bán hàng là tỷ lệ doanh thu/đơn hàng
        $salesPercentage = $totalOrders > 0 ? (OrderDetail::sum('amount') / $totalOrders) * 100 : 0;
    
        $newUsers = User::whereDate('created_at', today())->count();
    
        // Ví dụ số lượng truy cập (thay đổi theo cách bạn lấy dữ liệu)
        $visitors = 0;
    
        // Doanh thu theo ngày
        $revenueData = OrderDetail::selectRaw('DATE(created_at) as date, SUM(amount) as amount')
            ->groupBy('date')
            ->get();
    
        // Sales data cho biểu đồ Donut (thay đổi tùy theo cách bạn muốn hiển thị)
        $salesData = OrderDetail::selectRaw('SUM(amount) as total_amount')
            ->first();
    
        return view('backend.dashboard.index', compact('newOrders', 'salesPercentage', 'newUsers', 'visitors', 'revenueData', 'salesData'));
    }    
}    
