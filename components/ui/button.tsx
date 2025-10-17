import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-start gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 outline-none focus-visible:ring-ring/10 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 font-['Poppins'] text-lg",
  {
    variants: {
      variant: {
        default: 'bg-white text-[#2C6B7A] hover:bg-gray-50',
        destructive:
          'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-200 dark:focus-visible:ring-red-400',
        outline:
          'bg-white text-[#2C6B7A] shadow-xs hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700',
        secondary:
          'bg-gray-200 text-[#2C6B7A] hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600',
        ghost:
          'text-[#2C6B7A] hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800',
        link: 'text-[#2C6B7A] underline-offset-4 hover:underline',
        selected: 'bg-[#E7F0F3] text-[#2C6B7A] shadow-xs',
        // --- ALTERAÇÕES AQUI ---
        // Variante para o botão da barra lateral inativo
        sidebar: 'justify-start text-[#2C6B7A] hover:bg-gray-100 rounded-none w-full border-0',
        // Variante para o botão da barra lateral ATIVO, com seu novo estilo
        'sidebar-active':
          "bg-[#E7F0F3] text-[#0D475A] w-[90.5%] rounded-tl-[10px] rounded-tr-none rounded-br-[20px] rounded-bl-[10px] p-0 justify-start border-0",
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9 w-[35px] h-[35px] flex items-center justify-start',
        'icon-sm': 'size-8 w-[35px] h-[35px] flex items-center justify-start',
        'icon-lg': 'size-10 w-[35px] h-[35px] flex items-center justify-start',
        // O padding e alinhamento para o estado expandido
        sidebar: 'w-full pl-6 pr-2.5 py-5 justify-start items-center gap-2.5 overflow-hidden',
        // O padding e alinhamento para o estado recolhido
        'sidebar-collapsed': 'w-[90px] pl-0 py-5 justify-center items-center gap-2.5 overflow-hidden',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
