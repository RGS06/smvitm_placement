import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import './Reports.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Reports = () => {
  // Bar chart data - Students placed by course
  const barChartData = {
    labels: ['Computer Science', 'Information Technology', 'Electronics', 'Mechanical', 'Civil', 'Electrical'],
    datasets: [
      {
        label: 'Placed Students',
        data: [95, 85, 75, 70, 65, 78],
        backgroundColor: 'rgba(123, 20, 54, 0.7)',
        borderColor: 'rgba(123, 20, 54, 1)',
        borderWidth: 1,
      },
      {
        label: 'Total Students',
        data: [100, 95, 90, 85, 80, 90],
        backgroundColor: 'rgba(197, 144, 72, 0.7)',
        borderColor: 'rgba(197, 144, 72, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Placements by Department',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  // Pie chart data - Company sector distribution
  const pieChartData = {
    labels: ['IT & Software', 'Finance & Banking', 'Core Engineering', 'Consulting', 'Others'],
    datasets: [
      {
        data: [45, 20, 15, 10, 10],
        backgroundColor: [
          'rgba(123, 20, 54, 0.7)',
          'rgba(197, 144, 72, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(54, 162, 235, 0.7)',
        ],
        borderColor: [
          'rgba(123, 20, 54, 1)',
          'rgba(197, 144, 72, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Placements by Industry Sector',
      },
    },
  };

  return (
    <section className="reports section" id="reports">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: "2rem" }}>Placement Reports & Analytics</h2>
        <p className="section-description">
          Visualizing our placement journey through comprehensive analytics and reports.
        </p>

        <div className="charts-container">
          <div className="chart-card">
            <div className="chart-wrapper">
              <Bar data={barChartData} options={barOptions} />
            </div>
          </div>

          <div className="chart-card">
            <div className="chart-wrapper">
              <Pie data={pieChartData} options={pieOptions} />
            </div>
          </div>
        </div>

        <div className="reports-cta">
          <p>For detailed analysis and complete placement statistics:</p>
          <a href="#" className="btn">Download Complete Placement Report</a>
        </div>
      </div>
    </section>
  );
};

export default Reports;
