import './assets/styles/main.scss'
import 'normalize.css/normalize.css';
import HashScroll from './hooks/hash-scroll';


export const metadata = {
  title: 'Kusy Web Developer | Stwórz ze mną swoją stronę marzeń',
  description: 'Stwórz ze mną swoją stronę internetową dla swojego biznesu.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>
        <HashScroll>{children}</HashScroll>

      </body>
    </html>
  )
}
