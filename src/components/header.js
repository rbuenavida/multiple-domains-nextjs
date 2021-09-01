import Link from 'next/link';

export default function Header({ host }) {
  const localhost = String(host).includes('localhost');
  return (
    <div>
      <Link href={'http://domain1.com:3000'}>Domain 1</Link>
      {' - '}
      <Link href={'http://domain2.com:3000'}>Domain 2</Link>
    </div>
  );
}
