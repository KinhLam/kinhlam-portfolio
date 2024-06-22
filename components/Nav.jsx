"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    // links.map tạo một mảng các phần tử <Link> dựa trên danh sách links.
    // link.path === pathname: Kiểm tra nếu đường dẫn của link khớp với đường dẫn hiện tại (pathname), trả về chuỗi "text-accent border-b-2 border-accent".
    // ${link.path === pathname && "text-accent border-b-2 border-accent"}: Đây là một chuỗi điều kiện. Nếu link.path === pathname là true, nó sẽ thêm các lớp text-accent border-b-2 border-accent vào className. Nếu false, nó sẽ bỏ qua.
    // Các lớp CSS khác: capitalize, font-medium, hover:text-accent, và transition-all là các lớp bổ sung để định kiểu cho các liên kết.
    // key={index}: Cung cấp khóa duy nhất cho mỗi phần tử trong vòng lặp để React có thể theo dõi chúng một cách hiệu quả.
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
            {link.name}
          </Link>
          
        );
      })}
    </nav>
  );
};

export default Nav;


