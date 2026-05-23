import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const SESSION_KEY = 'hollyZolly_user';
const ACCOUNTS_KEY = 'hollyZolly_accounts';

/** Same rules for signup + login so the stored key always matches lookup. */
function accountKey(email) {
  try {
    return String(email ?? '')
      .trim()
      .toLowerCase()
      .normalize('NFKC')
      .replace(/[\u200B-\u200D\uFEFF]/g, '');
  } catch {
    return String(email ?? '').trim().toLowerCase();
  }
}

function readStoredUser() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.email === 'string') {
      return { email: parsed.email };
    }
  } catch {
    /* ignore corrupt storage */
  }
  return null;
}

function persistUser(nextUser) {
  try {
    if (nextUser) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(nextUser));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  } catch {
    /* ignore */
  }
}

function readAccounts() {
  try {
    const raw = localStorage.getItem(ACCOUNTS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      const normalized = {};
      for (const [k, v] of Object.entries(parsed)) {
        const nk = accountKey(k);
        if (nk) {
          normalized[nk] = String(v);
        }
      }
      return normalized;
    }
  } catch {
    /* ignore */
  }
  return {};
}

function writeAccounts(accounts) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStoredUser());
  const isLoggedIn = Boolean(user);

  /**
   * @returns {{ success: true } | { success: false, code: 'NOT_REGISTERED' | 'WRONG_PASSWORD' | 'INVALID' }}
   */
  const login = (email, password) => {
    if (!email || !password) {
      return { success: false, code: 'INVALID' };
    }
    const key = accountKey(email);
    const accounts = readAccounts();
    if (!Object.hasOwn(accounts, key)) {
      return { success: false, code: 'NOT_REGISTERED' };
    }
    const stored = accounts[key];
    if (String(stored) !== String(password)) {
      return { success: false, code: 'WRONG_PASSWORD' };
    }
    const next = { email: String(email).trim() };
    setUser(next);
    persistUser(next);
    return { success: true };
  };

  /**
   * Registers an account only (does not sign you in).
   * @returns {true | false | 'email_taken' | 'storage_error'}
   */
  const signup = (email, password, confirmPassword) => {
    if (!(email && password && password === confirmPassword)) {
      return false;
    }
    const key = accountKey(email);
    let accounts = { ...readAccounts() };
    if (Object.hasOwn(accounts, key)) {
      return 'email_taken';
    }
    accounts[key] = String(password);
    try {
      writeAccounts(accounts);
    } catch {
      return 'storage_error';
    }
    const verify = readAccounts();
    if (!Object.hasOwn(verify, key) || String(verify[key]) !== String(password)) {
      return 'storage_error';
    }
    return true;
  };

  const logout = () => {
    setUser(null);
    persistUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
