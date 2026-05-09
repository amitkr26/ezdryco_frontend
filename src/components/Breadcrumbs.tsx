import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs() {
  const [location] = useLocation();
  const pathnames = location.split("/").filter((x) => x);

  if (location === "/") return null;

  return (
    <nav aria-label="Breadcrumb" className="flex py-4 px-6 max-w-7xl mx-auto w-full">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        <li>
          <Link href="/" className="hover:text-indigo-600 flex items-center gap-1">
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const href = `/${pathnames.slice(0, index + 1).join("/")}`;
          const label = value.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

          return (
            <li key={href} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              {last ? (
                <span className="font-medium text-gray-900" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link href={href} className="hover:text-indigo-600 capitalize">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
