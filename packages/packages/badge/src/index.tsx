import styled from '@emotion/styled'
import Typography from '@razrabs-ui/typography'
import type { ElementType, FC, ReactNode } from 'react'

type StyleBadgeProps = {
  wide?: boolean
  color?: 'primary' | 'secondary' | 'brand'
}
const StyledBadge = styled(Typography)<StyleBadgeProps>(
  ({ theme, wide, color }) => {
    const geometryCss = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      width: 'fit-content',
      height: '24px',
      padding: wide ? '6px 12px' : '6px 8px',
      boxSizing: 'border-box' as const,
    }

    let colorCss = {}

    switch (color) {
      case 'primary':
        colorCss = {
          color: theme.colors.contrastPrimary,
          backgroundColor: theme.colors.primary,
        }
        break
      case 'secondary':
        colorCss = {
          color: theme.colors.secondary,
          backgroundColor: theme.colors.contrastSecondary,
        }
        break
      case 'brand':
        colorCss = {
          color: theme.colors.primary,
          backgroundColor: theme.colors.brand,
        }
        break
    }

    return {
      ...geometryCss,
      ...colorCss,
    }
  },
)

type BadgeProps = {
  as?: ElementType
  className?: string
  children?: ReactNode
} & StyleBadgeProps
const Badge: FC<BadgeProps> = ({ as = 'span', children, ...props }) => (
  <StyledBadge uppercase as={as} size='sm' {...props}>
    {children}
  </StyledBadge>
)
Badge.defaultProps = {
  color: 'secondary',
}

export default Badge