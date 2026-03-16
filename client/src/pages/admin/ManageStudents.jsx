import { useQuery } from "@tanstack/react-query";
import Navbar from "../../components/common/Navbar";
import { adminService } from "../../services/adminService";
import { Users } from "lucide-react";

export default function ManageStudents() {
  const { data, isLoading } = useQuery({
    queryKey: ["adminStudents"],
    queryFn: () => adminService.getStudents().then(r => r.data.data),
  });

  const students = data?.students || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Manage Students
          <span className="ml-2 text-lg font-normal text-gray-400">({students.length})</span>
        </h1>

        {isLoading ? (
          <p className="text-center text-gray-400 py-12">Loading students...</p>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-max">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    {["Name", "Email", "Branch", "Year", "CGPA", "Status"].map(h => (
                      <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {students.map(s => (
                    <tr key={s._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-3 font-medium text-gray-900">{s.user?.name}</td>
                      <td className="px-5 py-3 text-gray-500">{s.user?.email}</td>
                      <td className="px-5 py-3 text-gray-600">{s.branch}</td>
                      <td className="px-5 py-3 text-gray-600">{s.year}</td>
                      <td className="px-5 py-3 font-semibold text-gray-700">{s.cgpa}</td>
                      <td className="px-5 py-3">
                        <span className={`badge capitalize ${s.placementStatus === "placed" ? "bg-green-100 text-green-700" :
                          s.placementStatus === "dream_placed" ? "bg-blue-100 text-blue-700" :
                            "bg-gray-100 text-gray-500"
                          }`}>
                          {s.placementStatus?.replace("_", " ")}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {students.length === 0 && (
              <div className="text-center py-16 text-gray-400">
                <Users size={40} className="mx-auto mb-2 opacity-30" />
                <p>No students registered yet</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}