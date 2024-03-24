'use client'

import {
  NavigationMenu, NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList, NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import {UrlsProps} from '@/app/(web)/lib/types'
import {cn} from '@/lib/utils'
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from 'react'
import {ContentSetup} from '@/lib/definition'

const navigationMenuStyle = 'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-gray-200'

interface NavBarProps {
  navItems: UrlsProps[],
  data: ContentSetup[]
}

export const NavBar = ({navItems, data}: NavBarProps) => {

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems
          .map(({id, url, title, subPages, contentPage}) => (
            !subPages
              ? (data.find((data) => data?.name === contentPage && data?.isVisible) && (
                  <NavigationMenuItem key={id}>
                    <Link href={url || '/'} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuStyle}>
                        {title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>)

              )
              : (
                <NavigationMenuItem key={id}>
                  <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {subPages.map(({id, title, url, description}) => (
                        <ListItem
                          key={id}
                          title={title}
                          href={url}
                        >
                          {description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = forwardRef<
  ElementRef<'a'>,
  ComponentPropsWithoutRef<'a'>
>(({className, title, children, ...props}, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'