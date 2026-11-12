import StudentDashboard from "../pages/student/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "My Course",
    children: [
      {
        name: "Enrolled Course",
        path: "enrolled-course",
        element: <StudentDashboard />,
      },
      {
        name: "Offered Course",
        path: "offered-course",
        element: <StudentDashboard />,
      },
    ],
  },
];
