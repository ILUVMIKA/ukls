interface MenuItemProps {
  label: string;
  href: string;
}

export default function MenuItem({ label, href }: MenuItemProps) {
  return (
    <a href={href} className="block p-2 rounded hover:bg-gray-700">
      {label}
    </a>
  );
}
