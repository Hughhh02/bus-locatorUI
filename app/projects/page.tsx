"use client";

export default function ProjectManagement() {
  const projects = [
    {
      id: 1,
      name: "SBS Transit Indoor Bus Locator",
      category: "Telemetry & Vision",
      status: "In Progress",
      progress: 65,
    },
    {
      id: 2,
      name: "Drone Jammer AMR",
      category: "Sensor Fusion",
      status: "Review",
      progress: 90,
    },
    {
      id: 3,
      name: "SEP2 AMR Platform",
      category: "Embedded Systems",
      status: "Completed",
      progress: 100,
    },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto text-gray-900">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Project Management</h1>
        <button className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition">
          + New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
          <p className="text-sm font-medium text-gray-500">Active Builds</p>
          <p className="text-3xl font-bold mt-2">2</p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
          <p className="text-sm font-medium text-gray-500">Pending Review</p>
          <p className="text-3xl font-bold mt-2">1</p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
          <p className="text-sm font-medium text-gray-500">Completed</p>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="p-4 text-sm font-semibold text-gray-600">Project Name</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Category</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Progress</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 font-medium">{project.name}</td>
                <td className="p-4 text-gray-500 text-sm">{project.category}</td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : project.status === "Review"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-black h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium w-8">{project.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
