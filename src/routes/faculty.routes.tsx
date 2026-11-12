import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Create Offered Course",
        path: "create-offered-course",
        element: <OfferedCourse />,
      },
    ],
  },
];
