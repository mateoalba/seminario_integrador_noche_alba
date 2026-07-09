import { useState } from 'react'
import WelcomeBanner       from './components/WelcomeBanner'
import UserGreeting        from './components/UserGreeting'
import CurrentDateDisplay  from './components/CurrentDateDisplay'
import ColoredBox          from './components/ColoredBox'
import ConditionalGreeting from './components/ConditionalGreeting'
import FruitList           from './components/FruitList'
import PriceTag            from './components/PriceTag'
import StatusBadge         from './components/StatusBadge'
import MiniProfileCard     from './components/MiniProfileCard'
import SimpleInfoTable     from './components/SimpleInfoTable'
import ProductCard         from './components/ProductCard'
import ProductCatalogList  from './components/ProductCatalogList'
import UserProfileCard     from './components/UserProfileCard'
import DigitalCounter      from './components/DigitalCounter'
import SafeCounter         from './components/SafeCounter'
import UserProfileForm     from './components/UserProfileForm'
import TaskManager         from './components/TaskManager'
import CatalogProductItem  from './components/CatalogProductItem'
import ShoppingCartSummary from './components/ShoppingCartSummary'
import DocumentTitle       from './components/DocumentTitle'
import OnlineStatus        from './components/OnlineStatus'
import WindowSize          from './components/WindowSize'
import LiveClock           from './components/LiveClock'
import SearchWithEffect    from './components/SearchWithEffect'
import DebounceSearch      from './components/DebounceSearch'
import FetchUser           from './components/FetchUser'
import AutoFocusInput      from './components/AutoFocusInput'
import BasicCounter        from './components/BasicCounter'
import RegistrationForm    from './components/RegistrationForm'
import ShoppingCart        from './components/ShoppingCart'
import ThemeToggle         from './components/ThemeToggle'
import UserBadge           from './components/UserBadge'
import LoginForm           from './components/LoginForm'
import AppHeader           from './components/AppHeader'
import { useAuth }         from './contexts/AuthContext'

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  1-13: Componentes básicos (Módulo 1)                                  │
// │ 14-18: useState (Módulo 2)                                             │
// │ 19-26: useEffect (Módulo 2)                                            │
// │ 27-29: useReducer (Módulo 3)                                           │
// │ 30-33: useContext (Módulo 3)                                           │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO = 32

const fruits = [
  { name: 'Manzana', emoji: '🍎', calories: 52 },
  { name: 'Banana',  emoji: '🍌', calories: 89 },
  { name: 'Naranja', emoji: '🍊', calories: 47 },
]

const catalog = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27 pulgadas', price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: true },
  { id: 4, name: 'Webcam HD',         price: 59.99 },
]

const storeCatalog = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27"',       price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99 },
]

export default function App() {
  const auth        = useAuth()
  const { state }   = auth

  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number }[]>([])

  function handleAddToCart(id: number, name: string, price: number) {
    const alreadyInCart = cartItems.some((item) => item.id === id)
    if (alreadyInCart) return
    setCartItems((prev) => [...prev, { id, name, price }])
  }

  function handleClearCart() {
    setCartItems([])
  }

  const content =
    // ── Módulo 1: Componentes básicos ──
    PASO ===  1 ? <WelcomeBanner /> :
    PASO ===  2 ? (
      <>
        <UserGreeting name="Carlos Ruiz" occupation="Desarrolladora Frontend" />
        <br />
        <UserGreeting name="Mateo Alba" occupation="Desarrollo Fullstack" />
      </>
    ) :
    PASO ===  3 ? <CurrentDateDisplay /> :
    PASO ===  4 ? (
      <div style={{ display: 'flex', gap: 12 }}>
        <ColoredBox color="#0070f3" label="Primary" />
        <ColoredBox color="#22c55e" label="Success" />
        <ColoredBox color="#e00"    label="Danger" />
      </div>
    ) :
    PASO ===  5 ? <ConditionalGreeting isLoggedIn={true} userName="Ana" timeOfDay="afternoon" /> :
    PASO ===  6 ? <FruitList fruits={fruits} title="Frutas favoritas" /> :
    PASO ===  7 ? (
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <PriceTag amount={99.99} currency="USD" />
        <PriceTag amount={99.99} currency="USD" discountPercent={20} />
      </div>
    ) :
    PASO ===  8 ? (
      <div style={{ display: 'flex', gap: 8 }}>
        <StatusBadge status="active" />
        <StatusBadge status="pending" />
        <StatusBadge status="error" />
        <StatusBadge status="inactive" />
      </div>
    ) :
    PASO ===  9 ? (
      <MiniProfileCard
        fullName="Ana García"
        role="Senior Developer"
        department="Ingeniería"
        status="active"
        joinedYear={2019}
      />
    ) :
    PASO === 10 ? (
      <SimpleInfoTable
        title="Resumen del pedido"
        rows={[
          { label: 'Subtotal',  value: '$89.99' },
          { label: 'Envío',     value: '$5.00' },
          { label: 'Total',     value: '$94.99', highlight: true },
        ]}
      />
    ) :
    PASO === 11 ? <ProductCard title="Teclado inalámbrico" description="Bluetooth 5.0, retroiluminado" highlighted /> :
    PASO === 12 ? <ProductCatalogList products={catalog} title="Productos disponibles" /> :
    PASO === 13 ? (
      <UserProfileCard
        fullName="Ana García"
        email="ana@ejemplo.com"
        role="admin"
        isActive={true}
        skills={['TypeScript', 'React', 'Node.js']}
        bio="Desarrolladora fullstack con 5 años de experiencia."
      />
    ) :
    // ── Módulo 2: useState ──
    PASO === 14 ? <DigitalCounter label="Contador" step={1} /> :
    PASO === 15 ? <SafeCounter /> :
    PASO === 16 ? <UserProfileForm /> :
    PASO === 17 ? <TaskManager /> :
    PASO === 18 ? (
      <>
        <h1 style={{ fontSize: 22 }}>Tienda</h1>
        <section>
          {storeCatalog.map((p) => (
            <CatalogProductItem
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </section>
        <ShoppingCartSummary items={cartItems} onClearCart={handleClearCart} />
      </>
    ) :
    // ── Módulo 2: useEffect ──
    PASO === 19 ? <DocumentTitle /> :
    PASO === 20 ? <OnlineStatus /> :
    PASO === 21 ? <WindowSize /> :
    PASO === 22 ? <LiveClock /> :
    PASO === 23 ? <SearchWithEffect /> :
    PASO === 24 ? <DebounceSearch /> :
    PASO === 25 ? <FetchUser /> :
    PASO === 26 ? <AutoFocusInput /> :
    // ── Módulo 3: useReducer ──
    PASO === 27 ? <BasicCounter /> :
    PASO === 28 ? <RegistrationForm /> :
    PASO === 29 ? <ShoppingCart /> :
    // ── Módulo 3: useContext ──
    PASO === 30 ? <ThemeToggle /> :
    PASO === 31 ? <UserBadge /> :
    PASO === 32 ? <LoginForm /> :
    PASO === 33 ? <AppHeader /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {PASO >= 30 && PASO <= 32 && state.user && (
        <p style={{ marginBottom: 16, fontSize: 14, color: '#6b7280' }}>
          Sesión activa: <strong>{state.user.name}</strong>
        </p>
      )}
      {content}
    </main>
  )
}
