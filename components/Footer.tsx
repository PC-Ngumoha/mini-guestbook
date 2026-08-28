import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="flex w-full items-center justify-between text-sm text-gray-600/75
    py-4 px-6"
    >
      <p>© {new Date().getFullYear()} Mini Guestbook. All rights reserved</p>
      <nav aria-label="Footer navigation">
        <ul className="flex gap-4">
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">Terms of Service</Link>
          </li>
          <li>
            <Link href="#">Support</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
