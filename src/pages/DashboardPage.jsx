import React from 'react';
import '../style/DashboardPage.css';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import Button from 'react-bootstrap/Button';


ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function DashboardPage() {
  // Data untuk diagram lingkaran
  const doughnutData = {
    labels: ['Fast', 'Normal', 'Under Normal'],
    datasets: [
      {
        data: [67, 22, 11],
        backgroundColor: ['#f39c12', '#3498db', '#e74c3c'],
        hoverBackgroundColor: ['#e67e22', '#2980b9', '#c0392b'],
      },
    ],
  };

  // Data untuk diagram batang
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'],
    datasets: [
      {
        label: 'Production',
        data: [500, 550, 530, 510, 525, 510, 500, 540, 400],
        backgroundColor: '#3498db',
      },
    ],
  };

  return (
    <div className="dashboard-page">
      

      <div className="container">
        <div className="left-section">
          <h2>LEADTIME PRODUCTION PERFORMANCE</h2>
          <Doughnut data={doughnutData} />
          <table className="performance-table">
            <thead>
              <tr>
                <th>Leadtime Performance</th>
                <th>Today</th>
                <th>This Month</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Under Normal</td>
                <td>11%</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Normal</td>
                <td>22%</td>
                <td>60%</td>
              </tr>
              <tr>
                <td>Fast</td>
                <td>67%</td>
                <td>13%</td>
              </tr>
              <tr>
                <td>Average</td>
                <td colSpan="2">0000 hours</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="right-section">
  <h2>MONTHLY PRODUCTION (2024)</h2>
  <Bar data={barData} />
  <h1>Production in 2024 (units)</h1>
  <table className="production-table">
    <thead>
      <tr>
        <th>Month</th>
        <th>January</th>
        <th>February</th>
        <th>March</th>
        <th>April</th>
        <th>May</th>
        <th>June</th>
        <th>July</th>
        <th>August</th>
        <th>September</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Production</td>
        <td>500</td>
        <td>550</td>
        <td>530</td>
        <td>510</td>
        <td>525</td>
        <td>510</td>
        <td>500</td>
        <td>540</td>
        <td>400</td>
      </tr>
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
}

export default DashboardPage;
