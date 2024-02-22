import Link from 'next/link'
import {UrlsProps} from '@/app/(web)/lib/types'

export const Navigation = (props: {navItems: UrlsProps[], isRounded: boolean}) => {

  return (
    <>
      {!props.isRounded ? (
          <nav className="flex justify-between p-5 mt-4">
            {props.navItems.map(({id, url, title}) => (
              <Link
                className="p-2 rounded hover:underline hover:underline-offset-4"
                key={id}
                href={url || '/'}
              >
                {title}
              </Link>
            ))}
          </nav>
        )
        : (
          <nav className="flex justify-center mt-4">
            {props.navItems.map(({id, url, title}) => (
              <Link
                className=" bg-gray-200 text-black first:rounded-tl-2xl first:rounded-bl-2xl last:rounded-tr-2xl last:rounded-br-2xl p-2 px-4 hover:underline hover:underline-offset-4"
                key={id}
                href={url || '/'}
              >
                {title}
              </Link>
            ))}
          </nav>
        )
      }
    </>
  )
}