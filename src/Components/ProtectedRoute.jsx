import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ user, children }) {
  if (!user.name || !user.email) {
    return <Navigate to="/" replace />;
  }
  return children;
}
