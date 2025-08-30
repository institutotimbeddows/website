import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { CurrencyProvider } from '../contexts/currency-context'
import { I18nProvider } from '../features/i18n'

export const Route = createRootRoute({
  component: () => (
    <I18nProvider>
      <CurrencyProvider>
        <Outlet />
        <TanStackRouterDevtools />
      </CurrencyProvider>
    </I18nProvider>
  ),
})
