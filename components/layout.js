import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Footer content here</footer>
    </div>
  );
};

export default Layout;
