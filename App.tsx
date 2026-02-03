
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Menu as MenuIcon, ShoppingBag, Sun, Moon, User as UserIcon, LogOut, CheckCircle, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Cart from './components/Cart';
import About from './components/About';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import FeedbackSection from './components/FeedbackSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AdminDashboard from './components/AdminDashboard';
import ProductDetail from './components/ProductDetail';
import UserProfile from './components/UserProfile';
import { CartItem, MenuItem, User, Category } from './types';
import { api } from './services/api';
import { BlogPost } from './constants';

const App: React.FC = () => {
  // UI State
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartBump, setCartBump] = useState(false);
  
  // View State
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  
  // Data State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  
  // Auth Modal State
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // --- Effects ---
  useEffect(() => {
    const checkSession = async () => {
      const user = await api.getCurrentUser();
      if (user) setCurrentUser(user);
    };
    checkSession();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Cart Handlers ---
  const addToCart = useCallback((item: MenuItem, quantity: number = 1) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i);
      }
      return [...prev, { ...item, quantity }];
    });
    setCartBump(true);
    setTimeout(() => setCartBump(false), 300);
    setSelectedItem(null);
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ).filter(item => item.quantity > 0));
    setCartBump(true);
    setTimeout(() => setCartBump(false), 300);
  }, []);

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = useMemo(() => cartItems.reduce((acc, item) => acc + item.quantity, 0), [cartItems]);
  const cartTotal = useMemo(() => cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0), [cartItems]);

  // --- Favorites Handler ---
  const handleToggleFavorite = async (itemId: string) => {
    if (!currentUser) {
      setShowAuthModal(true);
      return;
    }
    const isAdded = await api.toggleFavorite(currentUser.id, itemId);
    setCurrentUser(prev => prev ? {
      ...prev,
      favorites: isAdded 
        ? [...(prev.favorites || []), itemId] 
        : (prev.favorites || []).filter(id => id !== itemId)
    } : null);
  };

  // --- Auth Handlers ---
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError(null);
    setAuthSuccess(null);

    try {
      if (isSignUp) {
        await api.signUp(email, password, name);
        setAuthSuccess("Namaste! Account created. Verify your email to login.");
        resetAuthFormFields();
      } else {
        const user = await api.login(email, password);
        setCurrentUser(user);
        setShowAuthModal(false);
        resetAuthForm();
      }
    } catch (error: any) {
      setAuthError(error.message || "An unexpected error occurred.");
    } finally {
      setAuthLoading(false);
    }
  };

  const resetAuthFormFields = () => { setEmail(''); setPassword(''); setName(''); };
  const resetAuthForm = () => { resetAuthFormFields(); setAuthError(null); setAuthSuccess(null); };

  const handleLogout = async () => {
    await api.logout();
    setCurrentUser(null);
    setIsProfileOpen(false);
  };

  const resetToHome = () => {
    setSelectedItem(null);
    setSelectedBlogPost(null);
    setIsProfileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation Logic
  const handleBlogOrder = (category?: Category | 'All') => {
    setSelectedBlogPost(null);
    if (category) setActiveCategory(category);
    setTimeout(() => {
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (currentUser?.role === 'admin') {
    return <AdminDashboard user={currentUser} onLogout={handleLogout} />;
  }

  const isDetailView = !!selectedItem || !!selectedBlogPost;

  return (
    <div className="min-h-screen font-sans bg-cream-50 dark:bg-stone-900 transition-colors duration-500 pb-20">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled || isDetailView ? 'bg-white/95 dark:bg-stone-950/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          
          <a href="#home" onClick={(e) => { e.preventDefault(); resetToHome(); }} className="flex items-center gap-3 group">
            <img src="https://i.pinimg.com/736x/10/45/e0/1045e0148f8fcf8de802652dc5bdca8b.jpg" alt="Sri Rama Sweets" className="h-12 md:h-14 rounded-full group-hover:rotate-6 transition-transform" />
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-2xl md:text-3xl leading-tight ${isScrolled || isDetailView ? 'text-maroon-900 dark:text-gold-500' : 'text-white'}`}>Sri Rama</span>
              <span className={`text-[10px] uppercase font-bold tracking-widest ${isScrolled || isDetailView ? 'text-stone-500 dark:text-gold-600' : 'text-gold-400'}`}>Sweets & Bakery</span>
            </div>
          </a>

          <div className={`hidden md:flex items-center gap-8 font-semibold ${isScrolled || isDetailView ? 'text-stone-800 dark:text-stone-200' : 'text-white'}`}>
            {['home', 'about', 'menu', 'blog', 'feedback'].map(link => (
              <a key={link} href={`#${link}`} onClick={resetToHome} className="hover:text-gold-500 capitalize transition-all">{link}</a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {currentUser ? (
              <div className="flex items-center gap-3 bg-white/10 dark:bg-stone-800/50 rounded-full pl-3 pr-1 py-1 border border-white/20">
                <button onClick={() => setIsProfileOpen(true)} className={`text-xs font-bold hover:text-gold-500 ${isScrolled || isDetailView ? 'text-stone-700 dark:text-gold-400' : 'text-white'}`}>
                  {currentUser.name.split(' ')[0]}
                </button>
                <button onClick={handleLogout} className="p-1.5 rounded-full bg-maroon-900 text-gold-400 hover:scale-105 transition-transform"><LogOut size={16} /></button>
              </div>
            ) : (
              <button onClick={() => setShowAuthModal(true)} className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${isScrolled || isDetailView ? 'bg-stone-100 text-stone-700' : 'bg-white/10 text-white'}`}><UserIcon size={18} /><span className="text-sm font-bold hidden sm:block">Login</span></button>
            )}

            <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded-full ${isScrolled || isDetailView ? 'text-stone-600 dark:text-gold-400' : 'text-white'}`}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button onClick={() => setIsCartOpen(true)} className={`relative p-2 rounded-full ${isScrolled || isDetailView ? 'text-maroon-900 dark:text-gold-400' : 'text-white'} ${cartBump ? 'scale-125' : ''}`}>
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-maroon-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white dark:border-stone-900">{cartCount}</span>}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {selectedItem ? (
          <ProductDetail item={selectedItem} onBack={() => setSelectedItem(null)} onAddToCart={addToCart} currentUser={currentUser} onToggleFavorite={handleToggleFavorite} />
        ) : selectedBlogPost ? (
          <BlogDetail post={selectedBlogPost} onBack={() => setSelectedBlogPost(null)} onOrder={handleBlogOrder} />
        ) : (
          <>
            <Hero />
            <Menu 
              onAddToCart={addToCart} 
              onUpdateQuantity={updateQuantity}
              onViewDetails={setSelectedItem} 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
              currentUser={currentUser} 
              onToggleFavorite={handleToggleFavorite}
              cartItems={cartItems}
            />
            <Blog onViewPost={setSelectedBlogPost} />
            <About />
          </>
        )}
        <FeedbackSection currentUser={currentUser} onLoginPrompt={() => setShowAuthModal(true)} />
      </main>

      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={cartItems} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} currentUser={currentUser} />
      {isProfileOpen && currentUser && <UserProfile user={currentUser} onClose={() => setIsProfileOpen(false)} onAddToCart={(i) => addToCart(i)} onViewDetails={setSelectedItem} />}
      
      {/* Floating Bottom Cart Bar */}
      {cartCount > 0 && !isCartOpen && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-50 animate-in slide-in-from-bottom-10 fade-in duration-300">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-maroon-900 hover:bg-maroon-800 text-gold-400 p-4 rounded-2xl shadow-2xl flex items-center justify-between group transition-all transform active:scale-95 border border-gold-500/30"
          >
            <div className="flex items-center gap-4">
              <div className={`bg-gold-500 text-maroon-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${cartBump ? 'animate-bump' : ''}`}>
                {cartCount}
              </div>
              <div className="text-left">
                <p className="text-xs uppercase font-bold tracking-widest text-gold-500/70">View Cart</p>
                <p className="text-white font-serif font-bold text-lg">Subtotal: ₹{cartTotal}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
              Checkout <ArrowRight size={20} />
            </div>
          </button>
        </div>
      )}

      <WhatsAppButton />

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowAuthModal(false)} />
          <div className="bg-white dark:bg-stone-900 rounded-3xl shadow-2xl w-full max-w-md relative overflow-hidden animate-zoomIn">
            <div className="bg-maroon-900 p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mb-3"><UserIcon size={32} className="text-maroon-900" /></div>
              <h2 className="text-2xl font-serif font-bold text-gold-400">{isSignUp ? 'Join the Family' : 'Welcome Back'}</h2>
              <p className="text-stone-300 text-sm mt-1">{isSignUp ? 'Create an account to start liking items.' : 'Login to your Sri Rama account.'}</p>
            </div>
            <div className="p-8">
              {authError && <div className="mb-6 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg flex items-center gap-3 text-sm border border-red-100"><AlertCircle size={18} />{authError}</div>}
              {authSuccess && <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg flex items-center gap-3 text-sm border border-green-100"><CheckCircle size={18} />{authSuccess}</div>}
              <form onSubmit={handleAuth} className="space-y-4">
                {isSignUp && (
                  <div>
                    <label className="block text-xs font-bold text-stone-500 dark:text-stone-400 uppercase mb-1 ml-1">Full Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-stone-100 dark:bg-stone-800 border-none rounded-xl px-4 py-3 dark:text-white" required />
                  </div>
                )}
                <div>
                  <label className="block text-xs font-bold text-stone-500 dark:text-stone-400 uppercase mb-1 ml-1">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-stone-100 dark:bg-stone-800 border-none rounded-xl px-4 py-3 dark:text-white" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 dark:text-stone-400 uppercase mb-1 ml-1">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-stone-100 dark:bg-stone-800 border-none rounded-xl px-4 py-3 dark:text-white" required />
                </div>
                <button type="submit" disabled={authLoading} className="w-full bg-maroon-900 hover:bg-maroon-800 text-gold-400 font-bold py-4 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2">
                  {authLoading ? <Loader2 className="animate-spin" size={20} /> : (isSignUp ? 'Create Account' : 'Sign In')}
                </button>
              </form>
              <div className="mt-8 pt-6 border-t border-stone-100 dark:border-stone-800 text-center">
                <button onClick={() => { setIsSignUp(!isSignUp); resetAuthForm(); }} className="text-stone-500 dark:text-stone-400 hover:text-maroon-900 text-sm font-semibold">{isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
